const paddingRatio = 0.25;// ratio of padding to petal width

const SPECIAL_PETAL_TYPES = {
    // 按类型名称定义
    byType: [
        "Abyssal Artifact",
        "Scorched Artifact",
        "Verdant Artifact",
        "Cosmic Artifact",
        "Chimera",
    ],

    minRarity: null, // 例如: 10 表示只有稀有度10+的花瓣能放入

    // 按前缀/后缀定义（留空，用户可以自行添加）
    byPrefix: [],    // 例如: ["Shiny", "Blood", ...]
    bySuffix: [],    // 例如: ["Egg", "Relic", ...]

    // 自定义过滤函数
    customFilter: null // function(petalContainer) { return true/false; }
};

// 检查花瓣是否属于特殊类型
function isSpecialPetal(petalContainer) {
    const type = petalContainer.type;
    const rarity = petalContainer.rarity;

    // 按类型检查
    if (SPECIAL_PETAL_TYPES.byType.includes(type)) {
        return true;
    }

    // 按稀有度检查
    if (SPECIAL_PETAL_TYPES.minRarity !== null && rarity >= SPECIAL_PETAL_TYPES.minRarity) {
        return true;
    }

    // 按前缀检查
    for (const prefix of SPECIAL_PETAL_TYPES.byPrefix) {
        if (type.startsWith(prefix)) {
            return true;
        }
    }

    // 按后缀检查
    for (const suffix of SPECIAL_PETAL_TYPES.bySuffix) {
        if (type.endsWith(suffix)) {
            return true;
        }
    }

    // 自定义过滤函数
    if (SPECIAL_PETAL_TYPES.customFilter && typeof SPECIAL_PETAL_TYPES.customFilter === 'function') {
        if (SPECIAL_PETAL_TYPES.customFilter(petalContainer)) {
            return true;
        }
    }

    return false;
}

let savedPetals = localStorage.getItem("savedPetals");
try {
    savedPetals = JSON.parse(savedPetals);
} catch (e) {
    savedPetals = false;
}

// savedPetals: {top: {0: {type, rarity}, 1: {type, rarity}}, bottom: {...}}

class Inventory {
    constructor(amountPerRow) {
        this.topPetalSlots = [];
        this.bottomPetalSlots = [];
        for (let i = 0; i < amountPerRow; i++) {
            this.topPetalSlots.push(new PetalSlot({ x: 0, y: 0, size: 65 }));
            this.bottomPetalSlots.push(new PetalSlot({ x: 0, y: 0, size: 55 }));
        }
        // 神器槽位
        this.artifactSlot = { x: 0, y: 0, size: 65 };
        this.positionPetalSlots();

        this.topPetalContainers = {};// key in this case will be the coords of the petal slot its currently in
        this.bottomPetalContainers = {};
        this.artifactContainer = null; // 神器容器

        this.translateY = 0;

        this.speedCircle = {
            reload: 1, // between 0 and 1
            mode: 0, // 0 stop, 1 inc, 2 dec
            targetReload: 1
        };
        if (localStorage.getItem("speedCircle") !== undefined && localStorage.getItem("speedCircle") !== null){
            this.speedCircle.reload = Number(localStorage.getItem("speedCircle"));
            if (isNaN(this.speedCircle.reload)){
                this.speedCircle.reload = 1;
            }
        }

        try {
            if (savedPetals) {
                for (let key in savedPetals.top) {
                    const pc = savedPetals.top[key];
                    this.addPetalContainer(new PetalContainer(pc.petals.map(p => new Petal(p)), { ...pc }, Math.random(), 1), true, key);
                    pc.render.x = canvas.w;
                    pc.render.y = canvas.h * 2 / 3;
                }
                for (let key in savedPetals.bottom) {
                    const pc = savedPetals.bottom[key];
                    this.addPetalContainer(new PetalContainer(pc.petals.map(p => new Petal(p)), { ...pc }, Math.random(), 1), false, key);
                    pc.render.x = canvas.w;
                    pc.render.y = canvas.h * 2 / 3;
                }
            }
        } catch (e) {
            console.log('ERROR');
            console.log(savedPetals);
            localStorage.removeItem("savedPetals");
        }

        this.fadingPetalContainer = null;
    }
    initChangePetalsQueue() {
        if (this === menuInventory) {
            this.changePetalsQueueInterval = setInterval(() => {
                if (this.queuedChangedPetals !== undefined && window.state === 'menu' && window.connected === true) {
                    send({ changePetals: true, ...this.queuedChangedPetals });
                    delete this.queuedChangedPetals;
                }
            }, 1200)
        }
    }
    sendQueuedChangedPetalsImmediately() {
        send({ changePetals: true, ...this.pack() });
        // doesnt work :(... will need to find a workaround
        // squadUI.updateSelfFlowerPetals({top: this.topPetalContainers, bottom: this.bottomPetalContainers});
    }
    setPetalSlotsNumber(num) {
        localStorage.setItem("savedSlotAmount", num);

        for (let i = this.topPetalSlots.length; i < num; i++) {
            this.topPetalSlots.push(new PetalSlot({ x: 0, y: 0, size: 65 }));
            this.bottomPetalSlots.push(new PetalSlot({ x: 0, y: 0, size: 55 }));
        }

        // this.topPetalSlots.length = num;
        // this.bottomPetalSlots.length = num;

        for (let key in this.bottomPetalContainers) {
            if (key > num - 1) {
                delete this.bottomPetalContainers[key];
                continue;
            }
        }

        for (let key in this.topPetalContainers) {
            if (key > num - 1) {
                delete this.topPetalContainers[key];
                continue;
            }
        }

        this.positionPetalSlots();
    }
    copy(otherInventory) {
        this.topPetalContainers = otherInventory.topPetalContainers;
        this.bottomPetalContainers = otherInventory.bottomPetalContainers;
        this.speedCircle = structuredClone(otherInventory.speedCircle);
        this.speedCircle.targetReload = this.speedCircle.reload;
    }
    // pack(){
    // }
    positionPetalSlots() {
        const topPetalSlotSize = this.topPetalSlots[0].size;// global size for all petal slots
        const bottomPetalSlotSize = this.bottomPetalSlots[0].size;

        const totalTopSize = this.topPetalSlots.length * topPetalSlotSize/*they're all the same size*/ + (this.topPetalSlots.length - 1) * paddingRatio * topPetalSlotSize;
        for (let i = 0; i < this.topPetalSlots.length; i++) {
            this.topPetalSlots[i].x = canvas.w / 2 - (totalTopSize - topPetalSlotSize) / 2 + i * (topPetalSlotSize + paddingRatio * topPetalSlotSize);
            this.topPetalSlots[i].y = canvas.h - bottomPetalSlotSize - bottomPetalSlotSize * paddingRatio - topPetalSlotSize * paddingRatio - topPetalSlotSize / 2;
        }

        const totalBottomSize = this.bottomPetalSlots.length * bottomPetalSlotSize/*they're all the same size*/ + (this.bottomPetalSlots.length - 1) * paddingRatio * bottomPetalSlotSize;
        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            this.bottomPetalSlots[i].x = canvas.w / 2 - (totalBottomSize - bottomPetalSlotSize) / 2 + i * (bottomPetalSlotSize + paddingRatio * bottomPetalSlotSize);
            this.bottomPetalSlots[i].y = canvas.h - bottomPetalSlotSize * paddingRatio - bottomPetalSlotSize / 2;
        }

        for (let key in this.topPetalContainers) {
            const petalSlot = this.topPetalSlots[key];
            if (petalSlot === undefined) continue;
            this.topPetalContainers[key].x = petalSlot.x;
            this.topPetalContainers[key].y = petalSlot.y;
            this.topPetalContainers[key].w = petalSlot.size;
            this.topPetalContainers[key].h = petalSlot.size;
        }

        for (let key in this.bottomPetalContainers) {
            const petalSlot = this.bottomPetalSlots[key];
            if (petalSlot === undefined) continue;
            this.bottomPetalContainers[key].x = petalSlot.x;
            this.bottomPetalContainers[key].y = petalSlot.y;
            this.bottomPetalContainers[key].w = petalSlot.size;
            this.bottomPetalContainers[key].h = petalSlot.size;
        }

        // 神器槽位位置（在顶部槽位右边）
        const lastTopSlot = this.topPetalSlots[this.topPetalSlots.length - 1];
        this.artifactSlot.x = lastTopSlot.x + lastTopSlot.size + 20;
        this.artifactSlot.y = lastTopSlot.y;
        if (this.artifactContainer) {
            this.artifactContainer.x = this.artifactSlot.x;
            this.artifactContainer.y = this.artifactSlot.y;
            this.artifactContainer.w = this.artifactSlot.size;
            this.artifactContainer.h = this.artifactSlot.size;
        }
    }
    addPetalContainer(p, isTop, position, toFade = true) {

        if (isTop) {
            if (this.topPetalContainers[position] !== undefined) {
                this.topPetalContainers[position].w = 65;
                this.topPetalContainers[position].h = 65;
                this.topPetalContainers[position].render.y += this.translateY;
                if (toFade) {
                    const existingPetal = this.topPetalContainers[position];
                    this.fadingPetalContainer = existingPetal;
                    this.fadingPetalContainer.fadeTime = time;
                    // 根据花瓣类型添加到对应的背包
                    if (isSpecialPetal(existingPetal)) {
                        specialGlobalInventory.addPetalContainer(existingPetal);
                    } else {
                        globalInventory.addPetalContainer(existingPetal);
                    }
                }
            }
            this.topPetalContainers[position] = p;
        } else {
            if (this.bottomPetalContainers[position] !== undefined) {
                this.bottomPetalContainers[position].w = 65;
                this.bottomPetalContainers[position].h = 65;
                this.bottomPetalContainers[position].render.y += this.translateY;
                if (toFade) {
                    const existingPetal = this.bottomPetalContainers[position];
                    this.fadingPetalContainer = existingPetal;
                    this.fadingPetalContainer.fadeTime = time;
                    // 根据花瓣类型添加到对应的背包
                    if (isSpecialPetal(existingPetal)) {
                        specialGlobalInventory.addPetalContainer(existingPetal);
                    } else {
                        globalInventory.addPetalContainer(existingPetal);
                    }
                }
            }
            this.bottomPetalContainers[position] = p;
        }
        this.positionPetalSlots();

        p.render.y -= this.translateY;
        // ctx.translate(0, this.translateY)

        this.updateSavedPetals();
    }
    addInFirstAvailableSlot(p) {
        // 神器不能放入普通槽位
        const type = p.petals?.[0]?.type || p.type;
        const isArtifact = ['Abyssal Artifact', 'Scorched Artifact', 'Verdant Artifact', 'Cosmic Artifact', 'Chimera'].includes(type);
        if (isArtifact) return false;

        for (let i = 0; i < this.topPetalSlots.length; i++) {
            if (this.topPetalContainers[i] === undefined) {
                this.addPetalContainer(p, true, i, true);
                return true;
            }
        }
        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            if (this.bottomPetalContainers[i] === undefined) {
                this.addPetalContainer(p, false, i, true);
                return true;
            }
        }
        return false;
    }
    getClosest(p) {
        const rectA = {
            x: p.x,
            y: p.y,
            difference: {
                x: p.w / 2,
                y: p.h / 2
            }
        }

        for (let i = 0; i < this.topPetalSlots.length; i++) {
            if (p.lastPetalSlot !== undefined) {
                if (p.lastPetalSlot.top === true && p.lastPetalSlot.index == i) { //{index: 0, top: true}
                    continue;
                }
            }

            const pc = this.topPetalSlots[i];
            const rectB = {
                x: pc.x,
                y: pc.y + this.translateY,
                difference: {
                    x: pc.size,
                    y: pc.size
                }
            }

            if (this.intersectingRect(rectA, rectB) === true) {
                return pc;
            }
        }

        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            if (p.lastPetalSlot !== undefined) {
                if (p.lastPetalSlot.top === false && p.lastPetalSlot.index == i) { //{index: 0, top: true}
                    continue;
                }
            }

            const pc = this.bottomPetalSlots[i];
            const rectB = {
                x: pc.x,
                y: pc.y + this.translateY,
                difference: {
                    x: pc.size,
                    y: pc.size
                }
            }

            if (this.intersectingRect(rectA, rectB) === true) {
                return pc;
            }
        }

        return false;
    }
    addClosest(p, globalInv) {
        const rectA = {
            x: p.x,
            y: p.y,
            difference: {
                x: p.w / 2,
                y: p.h / 2
            }
        }

        // 检查是否是神器类型
        const type = p.petals?.[0]?.type || p.type;
        const isArtifact = ['Abyssal Artifact', 'Scorched Artifact', 'Verdant Artifact', 'Cosmic Artifact', 'Chimera'].includes(type);

        if (isArtifact) {
            // 神器只能放到神器槽位
            const slot = this.artifactSlot;
            const rectB = {
                x: slot.x,
                y: slot.y + this.translateY,
                difference: {
                    x: slot.size,
                    y: slot.size
                }
            };

            if (this.intersectingRect(rectA, rectB) === true) {
                // 如果已有神器，返回到技能背包
                if (this.artifactContainer && this.artifactContainer !== p) {
                    const existing = this.artifactContainer;
                    existing.render.y += this.translateY;
                    existing.w = 65;
                    existing.h = 65;
                    if (typeof specialGlobalInventory !== 'undefined') {
                        specialGlobalInventory.addPetalContainer(existing);
                        specialGlobalInventory.equippedArtifact = null;
                    }
                }

                // 添加新神器
                this.artifactContainer = p;
                this.artifactContainer.x = slot.x;
                this.artifactContainer.y = slot.y;
                this.artifactContainer.w = slot.size;
                this.artifactContainer.h = slot.size;
                this.artifactContainer.render.y -= this.translateY;
                if (typeof specialGlobalInventory !== 'undefined') {
                    specialGlobalInventory.equipArtifact(type);
                }
                return true;
            }

            // 神器不在槽位上方，返回到技能背包并返回 true（告诉调用者已处理）
            if (typeof specialGlobalInventory !== 'undefined') {
                specialGlobalInventory.addPetalContainer(p);
            }
            return true; // 返回 true，避免 globalInventory.mouseUp 再次处理
        }

        for (let i = 0; i < this.topPetalSlots.length; i++) {
            const pc = this.topPetalSlots[i];
            const rectB = {
                x: pc.x,
                y: pc.y + this.translateY,
                difference: {
                    x: pc.size,
                    y: pc.size
                }
            }

            if (this.intersectingRect(rectA, rectB) === true) {
                if (p.lastPetalSlot !== undefined && p.lastPetalSlot.index !== -1) {
                    let swappingPetalContainer = this.topPetalContainers[i];
                    if (swappingPetalContainer === undefined) {
                        // if no other petal exists then just function as normal
                        this.addPetalContainer(p, true, i);
                        return true;
                    }

                    // otherwise swap petals
                    this.addPetalContainer(p, true, i, false);
                    this.addPetalContainer(swappingPetalContainer, p.lastPetalSlot.top, p.lastPetalSlot.index, false);
                    return true;
                }
                // TODO: make petal go back into inventory if one already exists
                this.addPetalContainer(p, true, i);
                return true;
            }
        }

        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            const pc = this.bottomPetalSlots[i];
            const rectB = {
                x: pc.x,
                y: pc.y + this.translateY,
                difference: {
                    x: pc.size,
                    y: pc.size
                }
            }

            if (this.intersectingRect(rectA, rectB) === true) {
                if (p.lastPetalSlot !== undefined && p.lastPetalSlot.index !== -1) {
                    let swappingPetalContainer = this.bottomPetalContainers[i];
                    if (swappingPetalContainer === undefined) {
                        // if no other petal exists then just function as normal
                        this.addPetalContainer(p, false, i);
                        return true;
                    }

                    // otherwise swap petals
                    this.addPetalContainer(p, false, i, false);
                    this.addPetalContainer(swappingPetalContainer, p.lastPetalSlot.top, p.lastPetalSlot.index, false);
                    return true;
                }
                this.addPetalContainer(p, false, i);
                return true;
            }
        }

        return false;
    }
    intersectingRect(obj1, obj2) {
        if (obj1.x - obj1.difference.x / 2 > obj2.x + obj2.difference.x / 2 || obj1.x + obj1.difference.x / 2 < obj2.x - obj2.difference.x / 2) return false;
        if (obj1.y - obj1.difference.y / 2 > obj2.y + obj2.difference.y / 2 || obj1.y + obj1.difference.y / 2 < obj2.y - obj2.difference.y / 2) return false;
        return true;
    }
    removePetalContainer(isBottom, key) {
        if (isBottom === true) {
            if (this.bottomPetalContainers[key].amount > 1) {
                this.bottomPetalContainers[key].amount--;
                this.bottomPetalContainers[key].y -= this.translateY;
                this.bottomPetalContainers[key].w = 50;
                this.bottomPetalContainers[key].h = 50;
            } else {
                delete this.bottomPetalContainers[key];
            }
        } else {
            if (this.topPetalContainers[key].amount > 1) {
                this.topPetalContainers[key].amount--;
                this.topPetalContainers[key].y -= this.translateY;
                this.topPetalContainers[key].w = 50;
                this.topPetalContainers[key].h = 50;
            } else {
                delete this.topPetalContainers[key];
            }
        }
        // this.petalContainers[p.rarity] = this.petalContainers[p.rarity].filter(p2 => p2 !== p);

        this.updateSavedPetals();
    }
    clear() {
        this.topPetalContainers = {};// key in this case will be the coords of the petal slot its currently in
        this.bottomPetalContainers = {};
    }
    mouseDown({ mouseX, mouseY }, inv) {
        if (window.state !== 'menu') {
            if (window.state == 'game') {
                // 游戏中：先检测神器槽点击（触发大招）
                const slot = this.artifactSlot;
                const slotY = slot.y + this.translateY;
                if (mouseX > slot.x - slot.size/2 && mouseX < slot.x + slot.size/2 &&
                    mouseY > slotY - slot.size/2 && mouseY < slotY + slot.size/2) {
                    if (this.artifactContainer && this.artifactContainer.amount > 0) {
                        const artifactType = this.artifactContainer.type;
                        if (artifactType && window.connected) {
                            send({ activateArtifactUltimate: { artifactType } });
                        }
                        return;
                    }
                }

                // 普通花瓣槽位点击（交换花瓣）
                for (let key in this.topPetalContainers) {
                    const pc = this.topPetalContainers[key];
                    if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && mouseY > pc.y - pc.h / 2 && mouseY < pc.y + pc.h / 2) {
                        this.swapPetals(parseInt(key));
                        return;
                    }
                }
                for (let key in this.bottomPetalContainers) {
                    const pc = this.bottomPetalContainers[key];
                    if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && mouseY > pc.y - pc.h / 2 && mouseY < pc.y + pc.h / 2) {
                        this.swapPetals(parseInt(key));
                        return;
                    }
                }
            }
            return;
        }
        const offsetMouseY = mouseY - this.translateY;
        // for(let key in this.bottomPetalContainers){
        //     const pc = this.bottomPetalContainers[key];

        //     // if(mouseX > pc.x - pc.w/2 && mouseX < pc.x + pc.w/2 && offsetMouseY > pc.y - pc.h/2 && offsetMouseY < pc.y + pc.h/2){
        //         this.removePetalContainer(true, key);
        for (let key in this.topPetalContainers) {
            const pc = this.topPetalContainers[key];

            if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                draggingPetalContainer = new PetalContainer(pc.petals, { ...pc, isDragging: true, lastSlot: { top: true, index: key } }, Math.random(), 1);
                draggingPetalContainer.mouseOffset = {
                    x: draggingPetalContainer.x - mouseX,
                    y: draggingPetalContainer.y - offsetMouseY
                }
                draggingPetalContainer.render.y += this.translateY;
                draggingPetalContainer.y += this.translateY;
                draggingPetalContainer.w = 85;
                draggingPetalContainer.h = 85;
                draggingPetalContainer.spawnAnimation = 1;
                this.removePetalContainer(false, key);
                return;
            }
        }

        for (let key in this.bottomPetalContainers) {
            const pc = this.bottomPetalContainers[key];

            if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                draggingPetalContainer = new PetalContainer(pc.petals, { ...pc, isDragging: true, lastSlot: { top: false, index: key } }, Math.random(), 1);
                draggingPetalContainer.mouseOffset = {
                    x: draggingPetalContainer.x - mouseX,
                    y: draggingPetalContainer.y - offsetMouseY
                }
                draggingPetalContainer.render.y += this.translateY;
                draggingPetalContainer.y += this.translateY;
                draggingPetalContainer.w = 85;
                draggingPetalContainer.h = 85;
                draggingPetalContainer.spawnAnimation = 1;
                this.removePetalContainer(true, key);
                return;
            }
        }

        // 神器槽位点击
        const slot = this.artifactSlot;
        if (mouseX > slot.x - slot.size/2 && mouseX < slot.x + slot.size/2 &&
            offsetMouseY > slot.y - slot.size/2 && offsetMouseY < slot.y + slot.size/2) {
            if (this.artifactContainer && this.artifactContainer.amount > 0) {
                // 游戏中点击激活神器大技能
                if (window.state === 'game' && window.connected) {
                    const artifactType = this.artifactContainer.type;
                    if (artifactType) {
                        send({ activateArtifactUltimate: { artifactType } });
                    }
                    return;
                }
                // 菜单中取出神器
                draggingPetalContainer = new PetalContainer(
                    this.artifactContainer.petals,
                    { ...this.artifactContainer, isDragging: true, lastSlot: { artifact: true } },
                    Math.random(),
                    1
                );
                // 设置神器稀有度（基于技能等级）
                if (typeof specialGlobalInventory !== 'undefined' && specialGlobalInventory.equippedArtifact) {
                    const artifact = specialGlobalInventory.artifacts[specialGlobalInventory.equippedArtifact];
                    if (artifact && artifact.skillLevels) {
                        const totalLevels = Object.values(artifact.skillLevels).reduce((a, b) => a + b, 0) - 1;
                        if (totalLevels > 0) {
                            draggingPetalContainer.rarity = totalLevels;
                        }
                    }
                }
                draggingPetalContainer.mouseOffset = {
                    x: draggingPetalContainer.x - mouseX,
                    y: draggingPetalContainer.y - offsetMouseY
                };
                draggingPetalContainer.render.y += this.translateY;
                draggingPetalContainer.y += this.translateY;
                draggingPetalContainer.w = 85;
                draggingPetalContainer.h = 85;
                draggingPetalContainer.spawnAnimation = 1;
                this.artifactContainer = null;
                if (typeof specialGlobalInventory !== 'undefined') {
                    specialGlobalInventory.equippedArtifact = null;
                }
            }
            return;
        }
        // if(this.petalContainers[i] === undefined){
        // }
        //     // console.log({petalContainer, mouseX, mouseY})

        //         draggingPetalContainer.mouseOffset = {
        //             x: draggingPetalContainer.x - mouseX,
        //         }
    }
    swapPetals(index, toSend = true) {
        if (window.reconnecting) return;
        if (window.isDead) return; // 死亡时不能切换花瓣
        if (this.topPetalSlots[index] === undefined) {
            return;
        }

        const placeholder = this.topPetalContainers[index];
        this.topPetalContainers[index] = this.bottomPetalContainers[index];
        this.bottomPetalContainers[index] = placeholder;
        if (this.topPetalContainers[index] === undefined) {
            delete this.topPetalContainers[index];
        }
        if (this.bottomPetalContainers[index] === undefined) {
            delete this.bottomPetalContainers[index];
        }
        this.positionPetalSlots();

        if (toSend === true) send({ swapPetal: index });

        this.updateSavedPetals();
    }
    draw(alpha = 1) {
        ctx.translate(0, this.translateY)

        if (this.fadingPetalContainer !== null) {
            const temp = { x: this.fadingPetalContainer.render.x, y: this.fadingPetalContainer.render.y };
            this.fadingPetalContainer.render.x = this.fadingPetalContainer.x;
            this.fadingPetalContainer.render.y = this.fadingPetalContainer.y;
            // ctx.translate(0,-this.translateY);
            const animationTime = 1 - (time - this.fadingPetalContainer.fadeTime) / 200;
            ctx.globalAlpha = Math.max(0, Math.min(1, animationTime));
            ctx.save();
            ctx.translate(this.fadingPetalContainer.x, this.fadingPetalContainer.y);
            ctx.scale(2 - animationTime, 2 - animationTime);
            ctx.translate(-this.fadingPetalContainer.x, -this.fadingPetalContainer.y);
            this.fadingPetalContainer.draw(alpha);
            ctx.restore();
            // ctx.translate(0,this.translateY);
            this.fadingPetalContainer.render.x = temp.x;
            this.fadingPetalContainer.render.y = temp.y;
            if (time - this.fadingPetalContainer.fadeTime > 200) {
                this.fadingPetalContainer = null;
            }
        }

        for (let i = 0; i < this.topPetalSlots.length; i++) {
            this.topPetalSlots[i].draw(alpha);
        }
        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            this.bottomPetalSlots[i].draw(alpha);
        }
        for (let key in this.topPetalContainers) {
            this.topPetalContainers[key].draw(true, key);
        }
        for (let key in this.bottomPetalContainers) {
            this.bottomPetalContainers[key].draw();
        }

        // 绘制神器槽位
        this.drawArtifactSlot();

        // speedCircle

        if (this.speedCircle.reload > 1) this.speedCircle.reload = 1
        if (this.speedCircle.reload < 0) this.speedCircle.reload = 0
        if (this.speedCircle.mode === 2) this.speedCircle.reload += 0.001 * dt
        if (this.speedCircle.mode === 1) this.speedCircle.reload -= 0.001 * dt

        if (window.state == 'game'){
            this.speedCircle.reload = interpolate(this.speedCircle.targetReload, this.speedCircle.reload, 0.4);
        }
        

        let lastSlot = this.bottomPetalSlots[this.bottomPetalSlots.length - 1]
        ctx.translate(lastSlot.x + lastSlot.size + 35, lastSlot.y)

        ctx.globalAlpha *= .5

        ctx.fillStyle = "#000000"
        ctx.strokeStyle = "#ffffff"

        ctx.beginPath()
        ctx.arc(0, 0, lastSlot.size / 2.1875, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()

        ctx.save()

        ctx.beginPath()
        ctx.arc(0, 0, lastSlot.size / 2.5, 0, Math.PI * 2)
        ctx.closePath()
        ctx.clip()

        ctx.lineCap = 'butt'

        let offset = (1 - Math.pow(this.speedCircle.reload, 0.7)) * Math.PI * 2

        ctx.lineWidth = 50;
        ctx.beginPath();
        ctx.arc(0, 0, 25, offset - Math.PI * 2 * smoothstep(this.speedCircle.reload), offset);
        ctx.stroke();
        ctx.closePath();

        ctx.restore()

        ctx.globalAlpha /= .5

        ctx.fillStyle = "#ffffff"
        ctx.strokeStyle = "#000000"

        ctx.font = '900 12.5px Ubuntu'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.lineWidth = 2

        ctx.strokeText("[Q]", -lastSlot.size / 2.5 - 17.5, 0)
        ctx.fillText("[Q]", -lastSlot.size / 2.5 - 17.5, 0)

        ctx.strokeText("[E]", lastSlot.size / 2.5 + 17.5, 0)
        ctx.fillText("[E]", lastSlot.size / 2.5 + 17.5, 0)

        ctx.strokeText("Speed", 0, 0)
        ctx.fillText("Speed", 0, 0)

        ctx.translate(-(lastSlot.x + lastSlot.size + 35), -lastSlot.y)

        ctx.translate(0, -this.translateY)

        //if (this === menuInventory) {
            const mouseX = mouse.x * canvas.w / window.innerWidth;
            const mouseY = mouse.y * canvas.h / window.innerHeight;
            const offsetMouseY = mouseY - this.translateY;

            // 检测鼠标是否在任何打开的菜单窗口内（仅在菜单状态）
            let mouseInMenu = false;
            if (this === menuInventory && window.state === 'menu') {
                const checkMouseInMenu = (menu, useDimensions = false) => {
                    if (!menu || !menu.menuActive) return false;
                    let x, y, w, h;
                    if (useDimensions && menu.dimensions) {
                        x = menu.dimensions.x;
                        y = menu.dimensions.y;
                        w = menu.dimensions.w;
                        h = menu.dimensions.h;
                    } else if (menu.x !== undefined && menu.y !== undefined) {
                        x = menu.x;
                        y = menu.y;
                        w = menu.w;
                        h = menu.h;
                    } else {
                        x = 130;
                        y = canvas.h - menu.h - 20;
                        w = menu.w;
                        h = menu.h;
                    }
                    return mouseX > x && mouseX < x + w &&
                           mouseY > y && mouseY < y + h;
                };

                if (checkMouseInMenu(globalInventory) ||
                    checkMouseInMenu(specialGlobalInventory) ||
                    checkMouseInMenu(craftingMenu) ||
                    checkMouseInMenu(mobGallery, true)) {
                    mouseInMenu = true;
                }
            }

            // 只有鼠标不在菜单内时才检测装备槽的 hover
            if (!mouseInMenu) {
                //ctx.lastTransform8 = ctx.getTransform();
                for (let key in this.topPetalContainers) {
                    const pc = this.topPetalContainers[key];

                    if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                        pc.isHovered = true;
                    }
                    pc.drawStatsBox(this === menuInventory ? true : false, false, pc.render.x, pc.render.y + this.translateY);
                }

                for (let key in this.bottomPetalContainers) {
                    const pc = this.bottomPetalContainers[key];

                    if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                        pc.isHovered = true;
                    }
                    pc.drawStatsBox(this === menuInventory ? true : false, false, pc.render.x, pc.render.y + this.translateY);
                }

                // 绘制神器 tooltip（与其他 tooltip 一起，在 translate 还原后绘制）
                if (this.artifactContainer) {
                    const slot = this.artifactSlot;
                    // 游戏中 tooltip 显示在上方避免遮挡神器槽（菜单中显示在下方）
                    const drawBelow = (window.state === 'menu');
                    this.artifactContainer.drawStatsBox(drawBelow, false, slot.x, slot.y + this.translateY);
                }
            }
            //ctx.setTransform(ctx.lastTransform8);
        //}
    }
    updateBiome() {
        for (let key in this.topPetalContainers) {
            const pc = this.topPetalContainers[key];
            pc.draw();
            if (pc.greyed === true) {
                // 根据花瓣类型添加到对应的背包
                if (isSpecialPetal(pc)) {
                    specialGlobalInventory.addPetalContainer(pc);
                } else {
                    globalInventory.addPetalContainer(pc);
                }
                this.removePetalContainer(false, key);
            }
        }
        for (let key in this.bottomPetalContainers) {
            const pc = this.bottomPetalContainers[key];
            pc.draw();
            if (pc.greyed === true) {
                // 根据花瓣类型添加到对应的背包
                if (isSpecialPetal(pc)) {
                    specialGlobalInventory.addPetalContainer(pc);
                } else {
                    globalInventory.addPetalContainer(pc);
                }
                this.removePetalContainer(true, key);
            }
        }
    }
    updateSavedPetals() {
        // let savedPetals = {top: {}, bottom: {}};
        // for(let key in this.topPetalContainers){
        // }
        // }
        localStorage.setItem("savedPetals", JSON.stringify({ top: this.topPetalContainers, bottom: this.bottomPetalContainers }));

        if (window.loaded === true) {
            if (this === menuInventory) {
                this.queueSendChangedPetals();
                // ⚠️ 注释掉本地预览更新，改为仅通过服务器同步更新
                // squadUI.updateSelfFlowerPetals({ top: this.topPetalContainers, bottom: this.bottomPetalContainers });
                // 更新菜单背景玩家的花瓣
                if (typeof loadMenuPlayerPetals === 'function') {
                    loadMenuPlayerPetals();
                }
            }
        }
    }
    queueSendChangedPetals() {
        const pack = this.pack();
        this.queuedChangedPetals = pack;
    }
    drawArtifactSlot() {
        const slot = this.artifactSlot;

        // 只有空槽时才绘制槽位背景
        if (!this.artifactContainer) {
            // 金色边框
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.roundRect(slot.x - slot.size/2 - 2, slot.y - slot.size/2 - 2, slot.size + 4, slot.size + 4, 8);
            ctx.stroke();

            // 背景
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.roundRect(slot.x - slot.size/2, slot.y - slot.size/2, slot.size, slot.size, 6);
            ctx.fill();
        }

        // 绘制神器或问号
        if (this.artifactContainer) {
            // 设置神器稀有度（基于技能等级）
            if (typeof specialGlobalInventory !== 'undefined' && specialGlobalInventory.equippedArtifact) {
                const artifact = specialGlobalInventory.artifacts[specialGlobalInventory.equippedArtifact];
                if (artifact && artifact.skillLevels) {
                    const totalLevels = Object.values(artifact.skillLevels).reduce((a, b) => a + b, 0) - 1;
                    // 限制稀有度不超过最大值 (Stats.rarities.length - 1)
                    const maxRarity = Stats.rarities.length - 1;
                    const clampedRarity = Math.min(Math.max(totalLevels, 0), maxRarity);
                    if (totalLevels > 0) {
                        this.artifactContainer.rarity = clampedRarity;
                        // 同步更新 petalStats 以显示正确的稀有度属性
                        if (Stats.petals[this.artifactContainer.type] && Stats.petals[this.artifactContainer.type][clampedRarity]) {
                            this.artifactContainer.petalStats = Stats.petals[this.artifactContainer.type][clampedRarity];
                        }
                    }
                }
            }
            this.artifactContainer.draw();
        } else {
            ctx.font = '900 24px Ubuntu';
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.strokeText('?', slot.x, slot.y);
            ctx.fillText('?', slot.x, slot.y);
        }

        // 检测悬停并显示提示
        const mouseX = mouse.x * canvas.w / window.innerWidth;
        const mouseY = mouse.y * canvas.h / window.innerHeight;
        const offsetMouseY = mouseY - this.translateY;

        if (this.artifactContainer &&
            mouseX > slot.x - slot.size/2 && mouseX < slot.x + slot.size/2 &&
            offsetMouseY > slot.y - slot.size/2 && offsetMouseY < slot.y + slot.size/2) {
            this.artifactContainer.isHovered = true;
        }

        // tooltip 绘制移到 draw() 方法末尾，与其他 tooltip 一起处理
    }
    pack() {
        return {
            top: mapObject(this.topPetalContainers, pc => { return { rarity: pc.rarity, type: pc.type } }),
            bottom: mapObject(this.bottomPetalContainers, pc => { return { rarity: pc.rarity, type: pc.type } })
        };
    }
}

function mapObject(obj, fn) {
    let newObj = {};
    for (let key in obj) {
        newObj[key] = fn(obj[key]);
    }
    return newObj;
}

// not a petalContainer! These are the "slots" where you put the petal containers into (basically 1 box in the inventory)
class PetalSlot {
    constructor(init) {
        this.x = init.x;
        this.y = init.y;
        this.size = init.size;
    }
    draw(alpha) {
        ctx.globalAlpha = 0.8 * alpha;
        ctx.fillStyle = '#eeeeee';
        ctx.strokeStyle = '#bebebe';
        ctx.lineWidth = 6;// maybe 5?
        ctx.beginPath();
        ctx.roundRect(this.x - this.size / 2 + 1, this.y - this.size / 2 + 1, this.size - 2, this.size - 2, this.size / 10);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }
}