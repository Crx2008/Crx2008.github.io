let savedStartingWave = localStorage.getItem('startingWave');// can be null
if(typeof savedStartingWave === 'string') savedStartingWave = parseInt(savedStartingWave);
if (isNaN(savedStartingWave)){
    savedStartingWave = 1;
}

// 垂直布局常量
const outsidePadding = 16;
const cardPadding = 8;  // 卡片之间的间距
const cardHeight = 65;  // 每个玩家卡片的高度
const buttonPadding = 10;

// 花朵相关
const flowerSize = 40;  // 花朵头部大小
const flowerPadding = 12;  // 花朵距离卡片边缘的间距

// 花瓣槽相关
const petalSlotSize = 24;  // 每个花瓣槽的大小
const petalSlotPadding = 3;  // 花瓣槽之间的间距
// 获取花瓣槽列数和行数（Chimera 模式下变成 4×1）
function getPetalSlotCols() {
    const equippedArtifacts = typeof specialGlobalInventory !== 'undefined' ? specialGlobalInventory.equippedArtifact : undefined;
    const isChimeraEquipped = equippedArtifacts === 'Chimera' || (Array.isArray(equippedArtifacts) && equippedArtifacts.includes('Chimera'));
    return isChimeraEquipped ? 4 : 10;
}
function getPetalSlotRows() {
    const equippedArtifacts = typeof specialGlobalInventory !== 'undefined' ? specialGlobalInventory.equippedArtifact : undefined;
    const isChimeraEquipped = equippedArtifacts === 'Chimera' || (Array.isArray(equippedArtifacts) && equippedArtifacts.includes('Chimera'));
    return isChimeraEquipped ? 1 : 2;
}

// 神器相关 - 宽高相同，形成正方形
const artifactWidth = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 1) * petalSlotPadding;  // 神器宽度 = 59
const artifactHeight = artifactWidth;  // 神器高度 = 59

// Ready圆圈
const readyCircleRadius = 10;

class SquadUI {
    constructor(){
        this.clients = [];
        this.w = 540;  // 降低宽度以缩小玩家卡片
        this.h = 0;
        this.x = canvas.w / 2;
        this.y = canvas.h / 2 + 30;  // 初始化 Y 位置
        this.timerX = 0;
        this.minimizedHeight = 46;
        this.baseHeight = this.h;
        this.minimized = true;

        this.initRenderTimer = 0;

        this.hoveringOverX = false;
        this.hoveringOverPublic = false;
        this.hoveringOverNew = false;
        this.hoveringOverPrivate = false;
        this.hoveringOverReady = false;
        this.hoveringOverQuickJoin = false;
        this.hoveringOverJoinMainPvp = false;
        this.hoveringOverSW = false;  // 悬停在 SW 文字上

        this.public = true;

        this.selfId = null;

        this.startingWaveSlider = 1;
        this.desiredSWS = 1;
        this.draggingSlider = false;
        this.maxStartingWave = 1;
        this.startingWave = this.maxStartingWave;
    }
    reset(){
        this.clients = [];
        this.hoveringOverX = false;
        this.hoveringOverPublic = false;
        this.hoveringOverNew = false;
        this.hoveringOverPrivate = false;
        this.hoveringOverReady = false;
        this.hoveringOverQuickJoin = false;
        this.hoveringOverJoinMainPvp = false;
        this.hoveringOverSW = false;

        this.public = true;

        delete this.lastUnMinimizedTimer;
        delete window.squadUICloseTime;
        delete this.selfIdSentFlag;

        this.h = 0.01;  // Fix 3: Non-zero value to avoid division issues
        this.initRenderTimer = 0;  // Fix 3: Ensure animation timer is reset
        this.buttonAlpha = 1;  // Fix 3: Explicitly set to 1
    }
    removeAllClients(){
        this.clients = [];
    }
    startGame(){
        this.hoveringOverX = false;
        this.hoveringOverPublic = false;
        this.hoveringOverNew = false;
        this.hoveringOverPrivate = false;
        this.hoveringOverReady = false;
        this.hoveringOverQuickJoin = false;
        this.hoveringOverJoinMainPvp = false;

        this.clients = [];
        this.h = 0;
        this.minimized = true;
        window.squadUIEnabled = false;
    }
    recieveData(init){
        this.selfId = init.selfId;
        for(let i = 0; i < init.clients.length; i++){
            this.addClient(init.clients[i]);
        }

        if(this.clients.length > init.clients.length){
            for(let i = 0; i < this.clients.length; i++){
                if(init.clients[i] === undefined){
                    this.clients[i].removed = true;
                }
            }
            this.clients = this.clients.filter(c => c.removed !== true);
        }

        if(init.public === false){
            this.public = false;
            biomeManager.switchToBiome(init.biome);
        } else {
            this.public = true;
        }
    }

    // 获取玩家卡片在列表中的Y位置
    getCardY(index) {
        const baseY = canvas.h / 2 + 20;
        return baseY + index * (cardHeight + cardPadding);
    }

    // 获取花瓣槽区域的边界
    getPetalSlotsBounds(cardIndex) {
        const cardX = this.x - this.w / 2 + outsidePadding;
        const cardY = this.getCardY(cardIndex);
        const cardW = this.w - outsidePadding * 2;  // 使用卡片宽度
        const rightPadding = 8;  // 右侧留白

        // 花瓣槽区域在卡片右侧
        const petalSlotsWidth = getPetalSlotCols() * petalSlotSize + (getPetalSlotCols() - 1) * petalSlotPadding;
        const petalSlotsHeight = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 1) * petalSlotPadding;

        return {
            x: cardX + cardW - rightPadding - petalSlotsWidth - artifactWidth - petalSlotPadding,
            y: cardY + (cardHeight - petalSlotsHeight) / 2,
            w: petalSlotsWidth,
            h: petalSlotsHeight
        };
    }

    // 获取神器位置
    getArtifactBounds(cardIndex) {
        const petalBounds = this.getPetalSlotsBounds(cardIndex);
        return {
            x: petalBounds.x + petalBounds.w + petalSlotPadding,
            y: petalBounds.y,
            w: artifactWidth,
            h: artifactHeight
        };
    }

    // 获取滑块边界（在同一列，名称和SW文字之间，滑动条在中间）
    getSliderBounds(cardIndex) {
        const cardX = this.x - this.w / 2 + outsidePadding;
        const cardY = this.getCardY(cardIndex);
        const cardW = this.w - outsidePadding * 2;

        // 滑块水平位置：从nameX延伸到准备绿勾左侧
        const nameX = cardX + flowerPadding + flowerSize + 10;
        const petalBounds = this.getPetalSlotsBounds(cardIndex);
        const readyCenterX = petalBounds.x - 40;  // 准备绿勾位置
        const sliderWidth = readyCenterX - nameX - 6;  // 延伸到绿勾左侧，留6px间距（变长）
        const sliderHeight = 10;

        // 滑块垂直位置：在名称和SW文字中间（紧凑布局）
        const nameY = cardY + 18;  // 名称Y
        const swTextY = cardY + cardHeight - 18;  // SW文字Y
        const sliderY = (nameY + swTextY) / 2 - sliderHeight / 2;  // 垂直居中

        return {
            x: nameX,
            y: sliderY,
            w: sliderWidth,
            h: sliderHeight
        };
    }

    updateFlowerPetals(data, id, skipReset = true){
        // ⚠️ 移除 selfIdSentFlag 检查，确保 squad UI 中能正确显示主副槽
        // 这个标志位原本可能是为了避免重复更新，但它导致主槽花瓣在 squad UI 中不显示
        /*
        if(id === this.selfId){
            if(this.selfIdSentFlag === true){
                return;
            }
            if(data.length > 0){
                this.selfIdSentFlag = true;
            }
        }
        */

        let cid = -1;
        let client = null;
        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].id === id){
                client = this.clients[i];
                cid = i;
                break;
            }
        }
        if(client === undefined || cid === -1){
            return;
        }
        const f = client.flower;

        f.lastPetals = f.petals;
        f.petals = [];

        // 使用新的垂直布局位置 - 花朵垂直居中与花瓣槽对齐
        const cardX = this.x - this.w / 2 + outsidePadding;
        const cardY = this.getCardY(cid);

        const petalSlotsHeight = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 1) * petalSlotPadding;
        const petalSlotsCenterY = cardY + (cardHeight - petalSlotsHeight) / 2 + petalSlotsHeight / 2;

        f.render.headX = cardX + flowerPadding + flowerSize / 2;
        f.render.headY = petalSlotsCenterY;
        f.headX = f.render.headX;
        f.headY = f.render.headY;
        f.x = f.render.headX;
        f.y = f.render.headY;
        f.render.x = f.x;
        f.render.y = f.y;
        f.render.baseX = f.x;
        f.render.baseY = f.y;
        f.baseX = f.x;
        f.baseY = f.y;

        for(let i = 0; i < data.length; i++){
            // ⭐ 保留 null 值，跳过 null 处理
            if (data[i] === null || data[i] === undefined) {
                f.petals[i] = null;
                continue;
            }

            const petal = f.petals[i] = new Petal(data[i]);
            petal.distance = neutralPetalDistance;
            petal.render.distance = 0;
            petal.updateInterpolate(f);
            petal.x = f.baseX;
            petal.y = f.baseY;
            petal.render.x = petal.x;
            petal.render.y = petal.y;
            petal.slowInterpolateDistance = true;
            if(f.lastPetals && f.lastPetals[i] !== undefined){
                for(let key in f.lastPetals[i].render){
                    petal.render[key] = f.lastPetals[i].render[key];
                }
                petal.angle = petal.render.angle;
            }
        }

        this.updateFlowerPetalContainers(f);
        delete f.lastPetals;
    }

    updateCharacter(character, id){
        let client = null;
        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].id === id){
                client = this.clients[i];
                break;
            }
        }
        if(client === undefined) return;
        const f = client.flower;
        f.character = character;
    }

    updateFlowerPetalContainers(f, skipReset = false){
        // ⭐ 只有在第一次调用时才初始化整个数组
        if (!skipReset) {
            f.petalContainers = new Array(20).fill(null);
        }

        // 收集每个槽位的花瓣（处理 subStackedId）
        const slotPetals = {};

        for(let i = 0; i < f.petals.length; i++){
            const petal = f.petals[i];
            if (!petal) continue;  // 跳过 null

            // 使用 petalContainerId 作为槽位索引
            const slotIndex = parseInt(petal.petalContainerId);
            if (isNaN(slotIndex) || slotIndex < 0 || slotIndex >= 10) continue;  // 主槽只接受 0-9

            if (!slotPetals[slotIndex]) {
                slotPetals[slotIndex] = [];
            }
            slotPetals[slotIndex].push(petal);
        }

        // 为每个槽位创建 PetalContainer
        for (let slotIndex in slotPetals) {
            const petals = slotPetals[slotIndex];
            if (petals.length > 0) {
                const pc = new PetalContainer(
                    petals.map(p => new Petal(p)),
                    {x: 0, y: 0, w: 20, h: 20, originalX: 0, originalY: 0, radius: 100, toRenderText: false, toOscillate: false},
                    Math.random(), 1
                );
                // 设置花瓣角度
                for (let j = 0; j < pc.petals.length; j++) {
                    pc.petals[j].angle = 0;
                    pc.petals[j].selfAngle = 0;
                }
                f.petalContainers[parseInt(slotIndex)] = pc;
            }
        }

        // 如果有副槽花瓣，添加到第二行（索引10-19）
        if(f.offPetals && f.offPetals.length > 0){
            this.updateOffPetalContainers(f, skipReset);
        }
    }

    // 更新副槽花瓣容器（第二行）
    updateOffPetalContainers(f, skipReset = false){
        // 收集每个副槽槽位的花瓣
        const slotPetals = {};

        // ⭐ 无条件检查数组长度，确保数组存在且长度正确
        if (!f.petalContainers || f.petalContainers.length !== 20) {
            f.petalContainers = new Array(20).fill(null);
        }

        for(let i = 0; i < f.offPetals.length; i++){
            const petal = f.offPetals[i];
            if (!petal) continue;  // 跳过 null

            // 使用 petalContainerId 作为槽位索引，副槽索引是 10-19
            const slotIndex = 10 + parseInt(petal.petalContainerId);
            if (isNaN(slotIndex) || slotIndex < 10 || slotIndex >= 20) continue;  // 副槽只接受 10-19

            if (!slotPetals[slotIndex]) {
                slotPetals[slotIndex] = [];
            }
            slotPetals[slotIndex].push(petal);
        }

        // 为每个副槽槽位创建 PetalContainer
        for (let slotIndex in slotPetals) {
            const petals = slotPetals[slotIndex];
            if (petals.length > 0) {
                const pc = new PetalContainer(
                    petals.map(p => new Petal(p)),
                    {x: 0, y: 0, w: 20, h: 20, originalX: 0, originalY: 0, radius: 100, toRenderText: false, toOscillate: false},
                    Math.random(), 1
                );
                // 设置花瓣角度
                for (let j = 0; j < pc.petals.length; j++) {
                    pc.petals[j].angle = 0;
                    pc.petals[j].selfAngle = 0;
                }
                f.petalContainers[parseInt(slotIndex)] = pc;
            }
        }
    }

    // 更新队友的副槽花瓣
    updateFlowerOffPetals(data, id, skipReset = true){
        let cid = -1;
        let client = null;
        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].id === id){
                client = this.clients[i];
                cid = i;
                break;
            }
        }
        if(client === undefined || cid === -1){
            return;
        }
        const f = client.flower;

        // 存储副槽花瓣数据
        f.offPetals = [];

        for(let i = 0; i < data.length; i++){
            // ⭐ 保留 null 值，不要跳过！
            if (data[i] === null || data[i] === undefined) {
                f.offPetals[i] = null;
                continue;
            }

            const petal = f.offPetals[i] = new Petal(data[i]);
            petal.distance = neutralPetalDistance;
            petal.render.distance = 0;
            petal.x = f.baseX;
            petal.y = f.baseY;
            petal.render.x = petal.x;
            petal.render.y = petal.y;
            petal.slowInterpolateDistance = true;
        }

        // ⭐ 传入 skipReset=true，不重置整个数组
        this.updateOffPetalContainers(f, skipReset);
    }

    /**
     * @deprecated 此方法已弃用，不应在 squadInit 流程中调用
     * 原因：
     * 1. 会覆盖服务器发来的正确花瓣数据（squadInit → recieveData → addClient）
     * 2. 将主副槽混合到同一个 f.petals 数组，而不是正确设置 f.petals 和 f.offPetals
     * 3. 组队界面应使用服务器作为唯一数据源
     *
     * 花瓣数据通过 squadInit → recieveData → addClient 流程获取
     */
    updateSelfFlowerPetals(menuInvPack){
        const client = this.findClient(this.selfId);
        const f = client.flower;
        if(client === undefined || f === undefined) return;
        f.petals = [];

        for(let key in menuInvPack.top){
            const pc = menuInvPack.top[key];
            for(let i = 0; i < pc.petals.length; i++){
                const data = {...pc.petals[i]};
                delete data.insidePetalContainer;
                data.petalContainerId = key;

                if (!data.offset) {
                    data.offset = { angle: 0, distance: 0 };
                }

                if(window.multiPetals && window.multiPetals[data.type] !== undefined){
                    data.subId = i;
                } else if(pc.petals.length > 1) {
                    data.subStackedId = i;
                    data.subId = i;
                    data.offset.angle = data.subStackedId / pc.petals.length * Math.PI * 2;
                    data.offset.distance = data.radius;
                }
                f.petals.push(new Petal(data));
                const petal = f.petals[f.petals.length-1];
                petal.distance = neutralPetalDistance;
                petal.render.distance = 0;
                petal.updateInterpolate(f);
                petal.x = f.baseX;
                petal.y = f.baseY;
                petal.render.x = petal.x;
                petal.render.y = petal.y;
                petal.slowInterpolateDistance = true;
            }
        }

        for(let key in menuInvPack.bottom){
            const pc = menuInvPack.bottom[key];
            for(let i = 0; i < pc.petals.length; i++){
                const data = {...pc.petals[i]};
                delete data.insidePetalContainer;
                data.petalContainerId = key;

                if (!data.offset) {
                    data.offset = { angle: 0, distance: 0 };
                }

                if(window.multiPetals && window.multiPetals[data.type] !== undefined){
                    data.subId = i;
                } else if(pc.petals.length > 1) {
                    data.subStackedId = i;
                    data.subId = i;
                    data.offset.angle = data.subStackedId / pc.petals.length * Math.PI * 2;
                    data.offset.distance = data.radius;
                }
                f.petals.push(new Petal(data));
                const petal = f.petals[f.petals.length-1];
                petal.distance = neutralPetalDistance;
                petal.render.distance = 0;
                petal.updateInterpolate(f);
                petal.x = f.baseX;
                petal.y = f.baseY;
                petal.render.x = petal.x;
                petal.render.y = petal.y;
                petal.slowInterpolateDistance = true;
            }
        }

        const totalGroupedPetalsLength = f.petals.filter(p => p.subStackedId === 0).length;

        const randomAngle = Math.random() * Math.PI * 2;
        let index = 0;
        for(let i = 0; i < f.petals.length; i++){
            if(f.petals[i].subStackedId === 0){
                index++;
            }
            f.petals[i].id = i;
            f.petals[i].angle = index / totalGroupedPetalsLength * Math.PI * 2;
            f.petals[i].render.angle = randomAngle;
            f.petals[i].angleOffset = f.petals[i].angle;
        }

        this.updateSelfFlowerPetalContainers(f);
    }

    updateSelfFlowerPetalContainers(f){
        const pcs = Object.values(menuInventory.topPetalContainers).concat(Object.values(menuInventory.bottomPetalContainers));
        f.petalContainers = pcs.map(p => new PetalContainer(p.petals, {x: 0, y: 0, w: 20, h: 20, originalX: 0, originalY: 0, radius: 100, toRenderText: false, toOscillate: false}, Math.random(), 1, 0));
    }

    startSliderDrag(x){
        this.draggingSlider = true;
        this.updateSliderDrag(x);
    }

    intersectingSlider({x,y}){
        let ind = 0;
        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].id === this.selfId){
                ind = i;
                break;
            }
        }

        const sbounds = this.getSliderBounds(ind);
        const sliderX = interpolate(sbounds.x, sbounds.x + sbounds.w, this.startingWaveSlider);
        const sliderPos = {
            x: sliderX,
            y: sbounds.y + sbounds.h / 2
        };

        return (x - sliderPos.x) ** 2 + (y - sliderPos.y) ** 2 < 15 ** 2;
    }

    intersectingSliderBound({x,y}){
        let ind = 0;
        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].id === this.selfId){
                ind = i;
                break;
            }
        }

        const sbounds = this.getSliderBounds(ind);
        const sliderX = interpolate(sbounds.x, sbounds.x + sbounds.w, this.startingWaveSlider);
        const sliderPos = {
            x: sliderX,
            y: sbounds.y + sbounds.h / 2
        };

        let closestSliderX = x;
        if(closestSliderX < sbounds.x) closestSliderX = sbounds.x;
        if(closestSliderX > sbounds.x + sbounds.w) closestSliderX = sbounds.x + sbounds.w;

        return (x - closestSliderX) ** 2 + (y - sliderPos.y) ** 2 < 15 ** 2;
    }

    updateSliderDrag(x){
        let ind = 0;
        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].id === this.selfId){
                ind = i;
                break;
            }
        }

        const sbounds = this.getSliderBounds(ind);
        let difX = x - sbounds.x;
        if(difX < 0){
            difX = 0;
        } else if(difX > sbounds.w){
            difX = sbounds.w;
        }

        this.desiredSWS = difX / sbounds.w;
    }

    endSliderDrag(x){
        if(this.draggingSlider === false) return;
        this.updateSliderDrag(x);
        const startingWave = Math.max(1, Math.ceil(this.desiredSWS * this.maxStartingWave));
        send({sw: startingWave});
        this.draggingSlider = false;

        if(startingWave !== this.maxStartingWave){
            localStorage.setItem('startingWave', startingWave);
            savedStartingWave = startingWave;
        } else {
            localStorage.removeItem('startingWave');
            savedStartingWave = null;
        }
    }

    sendSavedStartingWave(){
        if(savedStartingWave === null) return;
        send({sw: savedStartingWave});
    }

    render(dt){
        let offset = 20;

        // 重置 hover 状态
        this.hoveringOverSW = false;

        if(this.clients.length === 0){
            // Fix: Don't minimize if squadUI is enabled (user clicked Play button)
            if(window.squadUIEnabled !== true){
                this.minimized = true;
                this.baseHeight = this.minimizedHeight;
            } else {
                // UI is enabled but no clients yet - show buttons and 4 empty slots
                this.minimized = false;
                // Use a base height that fits 4 card slots
                this.baseHeight = 45 + 4 * (cardHeight + cardPadding) + outsidePadding;
            }
        } else {
            if(this.minimized === true){
                this.lastUnMinimizedTimer = performance.now();
            }
            // 垂直布局：基础高度 + 固定4个卡片位置的高度（玩家 + 空位）
            this.baseHeight = 45 + 4 * (cardHeight + cardPadding) + outsidePadding;
            this.minimized = false;
        }

        this.buttonAlpha = 1;
        if(this.initRenderTimer < 180){
            this.initRenderTimer += dt;
            this.h = Math.max(0.01, this.baseHeight * easeOutCubic(this.initRenderTimer / 180));
        }
        if(performance.now() - this.lastUnMinimizedTimer < 160){
            this.h = this.minimizedHeight + offset + (this.baseHeight - this.minimizedHeight) * easeOutCubic((performance.now() - this.lastUnMinimizedTimer) / 160);
        }
        // Fix 1: Only run close animation if UI is actually closing (enabled === true)
        // Fix 2: Also check that closeTime is recent (< 1 second ago) to avoid re-closing after reopening
        if(window.squadUICloseTime !== undefined && window.squadUIEnabled === true){
            const timeSinceClose = performance.now() - window.squadUICloseTime;
            if(timeSinceClose < 180){
                this.buttonAlpha = Math.max(0, this.h / this.baseHeight);
                this.h = (1 - easeOutCubic(timeSinceClose / 180)) * this.baseHeight;
            } else {
                // Only disable if the close was recent (within 1 second)
                // If it's been longer, the UI was reopened, so don't disable it
                if(timeSinceClose < 1000){
                    this.buttonAlpha = 0;
                    delete window.squadUICloseTime;
                    this.initRenderTimer = 0;
                    window.squadUIEnabled = false;
                } else {
                    // Close time is stale, clear it but keep UI enabled
                    delete window.squadUICloseTime;
                }
            }
        }

        // 持续插值：当没有任何特殊动画时，平滑地跟随目标高度
        if (this.initRenderTimer >= 180 &&
            performance.now() - this.lastUnMinimizedTimer >= 160 &&
            !window.squadUICloseTime) {
            // 平滑插值到目标高度
            this.h = interpolate(this.h, this.baseHeight, 0.25);
        }

        // 保持卡片固定位置，只控制进度条动画
        this.x = interpolate(this.x, canvas.w / 2 - 71, 0.01 * dt);
        if (window.squadTimer) {
            this.timerX = interpolate(this.timerX, this.w / 12, 0.01 * dt);
        } else {
            this.timerX = interpolate(this.timerX, 0, 0.01 * dt);
        }

        // 绘制主背景
        ctx.fillStyle = '#689ed6';
        ctx.strokeStyle = '#537fac';
        ctx.lineWidth = 5;

        // 显示倒计时进度条（有倒计时或 Ready 状态时显示）
        if (this.timerX > 0.01) {
            // 进度条与四个玩家卡片区域完全对齐
            const firstCardY = canvas.h / 2 + 20;  // 第一个卡片顶部
            const fourCardsHeight = 4 * cardHeight + 3 * cardPadding;  // 284
            const progressBarTop = firstCardY;
            const progressBarBottom = firstCardY + fourCardsHeight;  // 最后一个卡片底部
            const progressBarHeight = progressBarBottom - progressBarTop;
            let x = this.x - this.w/2 - this.timerX;

            // 外框（背景）
            ctx.beginPath();
            ctx.roundRect(x, progressBarTop, this.w / 16, progressBarHeight, 0);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            let timeRatio = (window.squadTimer - Date.now()) / 5000;

            ctx.save();
            // 内部进度条高度
            let barHeight = Math.max(0, (1 - timeRatio) * (progressBarHeight - 20));

            // 底部小矩形（灰色背景）- 上移留出圆角空间
            const bottomPadding = 8;
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#333333';
            ctx.fillStyle = "#333333";
            ctx.beginPath();
            ctx.roundRect(x + 10, progressBarBottom - bottomPadding, this.w / 16 - 20, 20 - progressBarHeight, 3);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();

            // 彩色进度条（从底部向上填充）- 上移留出圆角空间
            ctx.fillStyle = blendColor('#75dd34', '#dd3434', timeRatio);
            ctx.beginPath();
            ctx.roundRect(x + 10, progressBarBottom - bottomPadding, this.w / 16 - 20, -barHeight, 3);
            ctx.fill();
            ctx.closePath();

            ctx.restore();
        }

        // 主背景框已隐藏（不显示最外侧背景）
        // ctx.fillStyle = '#689ed6';
        // ctx.beginPath();
        // ctx.roundRect(this.x - this.w/2, canvas.h / 2 + 30, this.w, this.h, 0);
        // ctx.fill();
        // ctx.stroke();
        // ctx.closePath();

        const ratio = Math.max(0, Math.min(1, this.h / this.baseHeight));

        // 绘制顶部按钮（X按钮 - 已隐藏）
        // this.renderTopButtons(ratio);

        if(this.desiredSWS > 1 || this.startingWaveSlider > 1){
            this.desiredSWS = Math.min(1, this.desiredSWS);
            this.startingWaveSlider = Math.min(1, this.startingWaveSlider);
        }

        const now = performance.now();
        ctx.globalAlpha = this.buttonAlpha;

        // 绘制玩家卡片（垂直布局）
        for(let i = 0; i < this.clients.length; i++){
            if(this.minimized === true) continue;
            this.renderPlayerCard(i, ratio, now, dt);
        }

        // 绘制空位卡片（最多4个玩家，显示剩余空位）
        if(this.minimized === false && this.clients.length < 4){
            for(let i = this.clients.length; i < 4; i++){
                this.renderEmptySlot(i, ratio);
            }
        }

        // 绘制右侧竖向按钮
        // Fix: Also render when squadUIEnabled is true, even if clients array is empty (initial state)
        if((this.clients.length > 0 || window.squadUIEnabled === true) && this.minimized === false){
            this.renderSideButtons(ratio);
        }

        ctx.globalAlpha = 1;

        // 绘制 Private 标签
        if(this.public === false){
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'bottom';
            ctx.strokeText('(Private)', this.x + this.w/2 - 7.5, canvas.h/2 + this.h - 7.5 + 30);
            ctx.fillText('(Private)', this.x + this.w/2 - 7.5, canvas.h/2 + this.h - 7.5 + 30);
            ctx.textAlign = "center";
            ctx.textBaseline = 'middle';
        }

        // 绘制 OVERFULL 警告
        if (this.clients.length > 4) {
            this.renderOverfullWarning();
        }

        ctx.fillStyle = '#689ed6';
        ctx.strokeStyle = '#537fac';
        ctx.lineWidth = 5;
        ctx.globalAlpha = 1;
    }

    // 绘制X按钮（保持原位置）
    renderTopButtons(ratio) {
        // X 按钮
        ctx.fillStyle = '#c1565e';
        ctx.strokeStyle = '#90464b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(this.x + this.w / 2 - 7.5 - 30, canvas.h / 2 + 30 + 7.5, 30, 30 * ratio, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineCap = 'round';
        ctx.strokeStyle = '#cccccc';
        ctx.beginPath();
        ctx.moveTo(this.x + this.w / 2 - 7.5 - 30 + 7.5, canvas.h / 2 + 30 + 7.5 * ratio + 7.5);
        ctx.lineTo(this.x + this.w / 2 - 7.5 - 7.5, canvas.h / 2 + 30 + 7.5 * ratio - 7.5 + 15 + 15 * ratio);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(this.x + this.w / 2 - 7.5 - 7.5, canvas.h / 2 + 30 + 7.5 * ratio + 7.5);
        ctx.lineTo(this.x + this.w / 2 - 7.5 - 30 + 7.5, canvas.h / 2 + 7.5 * ratio - 7.5 + 15 + 30 + 15 * ratio);
        ctx.stroke();
        ctx.closePath();

        this.hoveringOverX = false;
        if(mouse.canvasX > this.x + this.w / 2 - 7.5 - 30 && mouse.canvasY > canvas.h / 2 + 30 + 7.5 &&
           mouse.canvasX < this.x + this.w / 2 - 7.5 && mouse.canvasY < canvas.h / 2 + 30 + 7.5 + 30 * ratio){
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 0.1;
            ctx.beginPath();
            ctx.roundRect(this.x + this.w / 2 - 7.5 - 30 - ctx.lineWidth/2, canvas.h / 2 + 30 + 7.5 - ctx.lineWidth/2,
                          30 + ctx.lineWidth, 30 * ratio + ctx.lineWidth, 3);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
            this.hoveringOverX = true;
        }
    }

    // 绘制右侧竖向按钮（Private, Find Public, New）
    renderSideButtons(ratio) {
        // 重置hover状态
        this.hoveringOverPrivate = false;
        this.hoveringOverPublic = false;
        this.hoveringOverNew = false;
        this.hoveringOverReady = false;

        // 按钮大小
        const buttonWidth = 125;
        const buttonGap = 12;

        // 按钮相对于玩家卡片的固定位置（卡片右侧）
        const cardRightEdge = this.x + this.w / 2;
        const buttonX = cardRightEdge - 1;

        ctx.letterSpacing = "-.05px";
        ctx.font = `900 20px 'Ubuntu'`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // 按钮从第一个卡片开始，垂直排列
        const buttonHeight = cardHeight * 0.75;
        const firstCardY = this.getCardY(0);
        for (let i = 0; i < 3; i++) {
            const buttonY = firstCardY + i * (buttonHeight + buttonGap);
            const buttonText = ['Private', 'Find Pub', 'New'][i];
            const buttonType = ['private', 'public', 'new'][i];

            this.renderSideButton(buttonText, buttonX, buttonY, buttonWidth, buttonHeight, ratio, buttonType);
        }

        // Ready 按钮（与第四个卡片底部对齐）
        const fourthCardBottom = firstCardY + 4 * cardHeight + 3 * cardPadding;
        const readyButtonY = fourthCardBottom - buttonHeight;

        // 玩家数量显示（Ready 按钮上方）
        const playerCountText = `Player: ${this.clients.length}/4`;
        const playerCountY = readyButtonY - 20;
        ctx.fillStyle = '#ffffff';
        ctx.font = `900 20px 'Ubuntu'`;
        ctx.textAlign = 'center';
        ctx.fillText(playerCountText, buttonX + buttonWidth / 2, playerCountY);
        const readyButtonText = window.ready ? 'Unready' : 'Ready';
        const readyButtonColor = window.ready ? '#d11d1d' : '#1dd129';
        this.renderSideButton(readyButtonText, buttonX, readyButtonY, buttonWidth, buttonHeight, ratio, 'ready', readyButtonColor);
    }

    // 绘制单个侧边按钮
    renderSideButton(text, x, y, w, h, ratio, buttonType, customColor = null) {
        ctx.save(); // 保存状态，防止 globalAlpha 等设置泄漏

        // 使用固定高度，不受 ratio 影响
        const actualHeight = h;

        // 按钮背景（如果有自定义颜色则使用自定义颜色）
        if (customColor) {
            ctx.fillStyle = customColor;
            ctx.strokeStyle = customColor === '#d11d1d' ? '#8f1515' : '#149917';
        } else {
            ctx.fillStyle = '#689ed6';
            ctx.strokeStyle = '#537fac';
        }
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(x, y, w, actualHeight, 5);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // 按钮文字
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeText(text, x + w / 2, y + actualHeight / 2);
        ctx.fillText(text, x + w / 2, y + actualHeight / 2);

        // Hover检测
        const isHovering = mouse.canvasX > x && mouse.canvasX < x + w &&
                          mouse.canvasY > y && mouse.canvasY < y + actualHeight;

        if (isHovering) {
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 0.1;
            ctx.beginPath();
            ctx.roundRect(x - ctx.lineWidth/2, y - ctx.lineWidth/2, w + ctx.lineWidth, actualHeight + ctx.lineWidth, 5);
            ctx.fill();
            ctx.closePath();

            switch(buttonType) {
                case 'private': this.hoveringOverPrivate = true; break;
                case 'public': this.hoveringOverPublic = true; break;
                case 'new': this.hoveringOverNew = true; break;
                case 'ready': this.hoveringOverReady = true; break;
            }
        }

        ctx.restore(); // 恢复状态
    }

    // 绘制单个玩家卡片
    renderPlayerCard(index, ratio, now, dt) {
        const client = this.clients[index];
        if(!client) return;

        ctx.save(); // 保存状态，防止动画变换泄漏

        const cardX = this.x - this.w / 2 + outsidePadding;
        const cardY = this.getCardY(index);
        const cardW = this.w - outsidePadding * 2;

        // 动画效果
        if(now - client.creationTime < 400){
            ctx.globalAlpha = this.buttonAlpha * easeOutCubic((now - client.creationTime) / 400);
            ctx.translate(0, -(1 - easeOutCubic((now - client.creationTime) / 400)) * 20);
        }

        // 绘制卡片背景
        ctx.fillStyle = '#5a8bc7';
        ctx.strokeStyle = '#4a7ab0';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(cardX, cardY, cardW, cardHeight, 5);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        const f = client.flower;

        // 花朵垂直居中于卡片
        const cardCenterY = cardY + cardHeight / 2;

        // 计算花瓣槽区域的垂直中心（用于名称、准备状态、滑块的对齐）
        const petalSlotsHeight = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 1) * petalSlotPadding;
        const petalSlotsCenterY = cardY + (cardHeight - petalSlotsHeight) / 2 + petalSlotsHeight / 2;

        // 绘制花朵头部（不显示旋转花瓣）- 垂直居中于卡片
        f.render.headX = cardX + flowerPadding + flowerSize / 2;
        f.render.headY = cardCenterY;
        f.headX = f.render.headX;
        f.headY = f.render.headY;
        f.x = f.render.headX;
        f.y = f.render.headY;
        f.render.x = f.x;
        f.render.y = f.y;
        f.render.baseX = f.x;
        f.render.baseY = f.y;
        f.baseX = f.x;
        f.baseY = f.y;

        // 直接绘制花朵头部（绕过 draw() 中的 toRender 检查）
        ctx.save();
        ctx.translate(f.render.headX, f.render.headY);
        const flowerScale = flowerSize / 50;  // 默认花朵半径是25，缩放到flowerSize
        ctx.scale(flowerScale, flowerScale);
        ctx.translate(-f.render.headX, -f.render.headY);

        // 直接调用 drawFlower 方法，不经过 draw() 的复杂逻辑
        f.drawFlower(f.render.headX, f.render.headY, 25, f.character);

        ctx.restore();

        // 绘制玩家名字
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.letterSpacing = "-.05px";
        ctx.lineWidth = 3;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.font = `900 20px 'Ubuntu'`;

        const clientName = client.name === '' ? 'Unnamed' : client.name;
        const nameX = cardX + flowerPadding + flowerSize + 10;

        // 对于自己：名称在上方，滑动条在中间，SW文字在下方（同一列）
        // 对于其他玩家：名称在上方，SW文字在下方
        let nameY;
        if (client.id === this.selfId) {
            nameY = cardY + 18;  // 名称在卡片顶部（紧凑布局）
        } else {
            nameY = cardY + 22;  // 其他玩家名称位置
        }

        ctx.strokeText(clientName, nameX, nameY);
        ctx.fillText(clientName, nameX, nameY);

        // 绘制 Ready 绿勾（固定在花瓣槽左侧，带动画效果）
        const petalBounds = this.getPetalSlotsBounds(index);
        const readyCenterX = petalBounds.x - 20;  // 花瓣槽左侧
        const readyCenterY = petalSlotsCenterY;  // 与花瓣槽垂直居中对齐

        // 底层：灰色空心圆（始终显示）
        ctx.beginPath();
        ctx.arc(readyCenterX, readyCenterY, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'transparent';
        ctx.strokeStyle = '#888888';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // 上层：Ready 绿勾（带动画效果）
        if(client.ready === true || (now - client.lastReadyDisableTime < 600)){
            ctx.beginPath();
            ctx.translate(readyCenterX, readyCenterY);

            // 启用动画：旋转进入
            if(now - client.lastReadyEnableTime < 600){
                const animationTime = easeOutCubic((now - client.lastReadyEnableTime) / 600);
                ctx.rotate(Math.PI * 2 * animationTime);
                ctx.globalAlpha = this.buttonAlpha * animationTime;
            }
            // 禁用动画：旋转退出
            if(now - client.lastReadyDisableTime < 600){
                const animationTime = 1 - easeOutCubic((now - client.lastReadyDisableTime) / 600);
                ctx.rotate(-Math.PI * 2 * animationTime);
                ctx.globalAlpha = this.buttonAlpha * animationTime;
            }

            // 绘制对勾
            ctx.moveTo(-7.5, 0.5);
            ctx.lineTo(-3.5, 7.5);
            ctx.lineTo(7.5, -7.5);

            // 先画黑色描边，再画绿色
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.strokeStyle = '#1dd129';
            ctx.lineWidth = 2;
            ctx.stroke();

            // 恢复变换
            if(now - client.lastReadyDisableTime < 600){
                const animationTime = 1 - easeOutCubic((now - client.lastReadyDisableTime) / 600);
                ctx.rotate(Math.PI * 2 * animationTime);
                ctx.globalAlpha = this.buttonAlpha * 1;
            }
            if(now - client.lastReadyEnableTime < 600){
                const animationTime = easeOutCubic((now - client.lastReadyEnableTime) / 600);
                ctx.rotate(-Math.PI * 2 * animationTime);
                ctx.globalAlpha = this.buttonAlpha * 1;
            }

            ctx.translate(-readyCenterX, -readyCenterY);
            ctx.closePath();
        }

        // 绘制 Starting Wave 文字和滑块
        if(client.id === this.selfId){
            // 自己：显示滑块
            this.startingWaveSlider = interpolate(this.startingWaveSlider, this.desiredSWS, 0.22);
            const sbounds = this.getSliderBounds(index);
            const sliderX = interpolate(sbounds.x, sbounds.x + sbounds.w, this.startingWaveSlider);

            // 滑块轨道
            ctx.strokeStyle = '#4a7ab0';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(sbounds.x, sbounds.y + sbounds.h / 2);
            ctx.lineTo(sbounds.x + sbounds.w, sbounds.y + sbounds.h / 2);
            ctx.stroke();
            ctx.closePath();

            // 滑块手柄
            ctx.fillStyle = '#689ed6';
            ctx.strokeStyle = '#537fac';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(sliderX, sbounds.y + sbounds.h / 2, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            // 滑块 hover 效果
            if((mouse.canvasX - sliderX) ** 2 + (mouse.canvasY - (sbounds.y + sbounds.h / 2)) ** 2 < 12 ** 2){
                ctx.fillStyle = 'white';
                ctx.globalAlpha = 0.2;
                ctx.beginPath();
                ctx.arc(sliderX, sbounds.y + sbounds.h / 2, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                ctx.globalAlpha = this.buttonAlpha;
                this.hoveringOverSlider = true;
            } else if(this.draggingSlider === true){
                ctx.fillStyle = 'white';
                ctx.globalAlpha = 0.2;
                ctx.beginPath();
                ctx.arc(sliderX, sbounds.y + sbounds.h / 2, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                ctx.globalAlpha = this.buttonAlpha;
            }

            // SW文字在滑块下方，与名称同一列（紧凑布局）
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.font = `900 10px 'Ubuntu'`;
            this.startingWave = Math.max(1, Math.round(this.maxStartingWave * this.startingWaveSlider));
            const swText = 'Starting Wave: ' + this.startingWave;
            const swTextY = cardY + cardHeight - 18;  // SW文字在卡片底部（紧凑布局）
            ctx.strokeText(swText, nameX, swTextY);
            ctx.fillText(swText, nameX, swTextY);

            // 检测鼠标是否悬停在 SW 文字区域（可点击）
            const swTextWidth = ctx.measureText(swText).width;
            const swTextHeight = 14;  // 字体大小约 10px，加上一些边距
            this.swTextBounds = {
                x: nameX,
                y: swTextY - swTextHeight / 2,
                w: swTextWidth,
                h: swTextHeight
            };
            if (mouse.canvasX > this.swTextBounds.x &&
                mouse.canvasX < this.swTextBounds.x + this.swTextBounds.w &&
                mouse.canvasY > this.swTextBounds.y &&
                mouse.canvasY < this.swTextBounds.y + this.swTextBounds.h) {
                this.hoveringOverSW = true;
                setCursor('pointer');
            }
        } else {
            // 他人：只显示文字
            ctx.fillStyle = '#cccccc';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.font = `900 10px 'Ubuntu'`;
            const startingWave = Math.max(1, Math.ceil(client.startingWave));
            const swText = 'Starting Wave: ' + startingWave;
            ctx.strokeText(swText, nameX, cardY + cardHeight - 18);
            ctx.fillText(swText, nameX, cardY + cardHeight - 18);
        }

        // 绘制花瓣槽（2x10网格）
        this.renderPetalSlots(client, index);

        // 绘制神器
        this.renderArtifact(client, index);

        ctx.restore(); // 恢复状态（包括动画变换）
    }

    // 绘制空位卡片
    renderEmptySlot(index, ratio) {
        ctx.save();

        const cardX = this.x - this.w / 2 + outsidePadding;
        const cardY = this.getCardY(index);
        const cardW = this.w - outsidePadding * 2;

        // 绘制空位卡片背景（半透明）
        ctx.globalAlpha = this.buttonAlpha * 0.5;
        ctx.fillStyle = '#3a5a87';
        ctx.strokeStyle = '#2a4a67';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]); // 虚线边框
        ctx.beginPath();
        ctx.roundRect(cardX, cardY, cardW, cardHeight, 5);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.setLineDash([]); // 重置虚线

        ctx.restore();
    }

    // 绘制花瓣槽（2x10网格）
    renderPetalSlots(client, cardIndex) {
        const bounds = this.getPetalSlotsBounds(cardIndex);
        const petalContainers = client.flower.petalContainers || [];

        for(let row = 0; row < getPetalSlotRows(); row++){
            for(let col = 0; col < getPetalSlotCols(); col++){
                const slotIndex = row * getPetalSlotCols() + col;
                const slotX = bounds.x + col * (petalSlotSize + petalSlotPadding);
                const slotY = bounds.y + row * (petalSlotSize + petalSlotPadding);

                // 绘制槽位背景
                ctx.fillStyle = '#3a6a9a';
                ctx.strokeStyle = '#2a5a8a';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.roundRect(slotX, slotY, petalSlotSize, petalSlotSize, 2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                // 如果有花瓣，绘制花瓣
                if(petalContainers[slotIndex]){
                    const pc = petalContainers[slotIndex];
                    pc.x = slotX + petalSlotSize / 2;
                    pc.y = slotY + petalSlotSize / 2;
                    pc.render.x = pc.x;
                    pc.render.y = pc.y;
                    pc.w = petalSlotSize - 2;
                    pc.h = petalSlotSize - 2;
                    pc.nameless = true;
                    pc.spawnAnimation = 1;
                    pc.draw();
                }
            }
        }
    }

    // 绘制神器
    renderArtifact(client, cardIndex) {
        if(!client.artifactPetalContainer) return;

        const bounds = this.getArtifactBounds(cardIndex);
        const apc = client.artifactPetalContainer;

        apc.x = bounds.x + bounds.w / 2;
        apc.y = bounds.y + bounds.h / 2;
        apc.render.x = apc.x;
        apc.render.y = apc.y;
        apc.w = bounds.w - 2;
        apc.h = bounds.h - 2;
        apc.nameless = true;
        apc.spawnAnimation = 1;
        apc.draw();
    }

    // 绘制 OVERFULL 警告
    renderOverfullWarning() {
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.font = `900 12px 'Ubuntu'`;
        ctx.lineWidth = 3;
        ctx.fillStyle = "red";

        const warningY = this.getCardY(0) - 5;

        ctx.strokeText(`[OVERFULL]`, this.x - this.w / 2 + 7.5, warningY);
        ctx.fillText(`[OVERFULL]`, this.x - this.w / 2 + 7.5, warningY);

        ctx.fillStyle = "white";
        const healthPercentages = ['', '125%', '150%', '175%', '200%', '225%', '250%', '275%', '300%'];
        const levelRequirements = ['', 'Lvl100', 'Lvl200', 'Lvl300', 'Lvl400', 'Lvl500', 'Lvl600', 'Lvl700', 'Lvl800'];

        const idx = Math.min(this.clients.length - 4, healthPercentages.length - 1);

        ctx.strokeText(`${healthPercentages[idx]} mob health`, this.x - this.w / 2 + 7.5, warningY + 14);
        ctx.fillText(`${healthPercentages[idx]} mob health`, this.x - this.w / 2 + 7.5, warningY + 14);

        ctx.strokeText(`(${levelRequirements[idx]} feature)`, this.x - this.w / 2 + 7.5, warningY + 28);
        ctx.fillText(`(${levelRequirements[idx]} feature)`, this.x - this.w / 2 + 7.5, warningY + 28);

        ctx.textAlign = "center";
        ctx.textBaseline = 'middle';
    }

    // 检测给定点是否在某个按钮区域内
    getButtonAtPosition(x, y) {
        // 检测侧边按钮（Private, Find Public, New）
        if ((this.clients.length > 0 || window.squadUIEnabled === true) && this.minimized === false) {
            const buttonWidth = 125;
            const buttonHeight = cardHeight * 0.75;
            const buttonGap = 12;

            // 按钮相对于玩家卡片的固定位置（卡片右侧）
            const cardRightEdge = this.x + this.w / 2;
            const buttonX = cardRightEdge - 1;

            // 检查与玩家卡片对齐的按钮
            const firstCardY = this.getCardY(0);
            for (let i = 0; i < 3; i++) {
                const buttonY = firstCardY + i * (buttonHeight + buttonGap);
                const buttonText = ['private', 'public', 'new'][i];

                if (x >= buttonX && x <= buttonX + buttonWidth &&
                    y >= buttonY && y <= buttonY + buttonHeight) {
                    return buttonText;
                }
            }

            // Ready 按钮
            const fourthCardBottom = firstCardY + 4 * cardHeight + 3 * cardPadding;
            const readyButtonY = fourthCardBottom - buttonHeight;
            if (x >= buttonX && x <= buttonX + buttonWidth &&
                y >= readyButtonY && y <= readyButtonY + buttonHeight) {
                return 'ready';
            }
        }

        return null;
    }

    createClient(id){
        const c = {creationTime: performance.now(), flower: new Flower(id)};

        const f = c.flower;
        const cardX = this.x - this.w / 2 + outsidePadding;
        const cardY = this.getCardY(this.clients.length);

        // 计算花瓣槽区域的垂直中心，让花朵与之对齐
        const petalSlotsHeight = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 1) * petalSlotPadding;
        const petalSlotsCenterY = cardY + (cardHeight - petalSlotsHeight) / 2 + petalSlotsHeight / 2;

        f.petalContainers = new Array(20).fill(null);
        f.render.headX = cardX + flowerPadding + flowerSize / 2;
        f.render.headY = petalSlotsCenterY;
        f.headX = f.render.headX;
        f.headY = f.render.headY;
        f.x = f.render.headX;
        f.y = f.render.headY;
        f.render.x = f.x;
        f.render.y = f.y;
        f.render.baseX = f.x;
        f.render.baseY = f.y;
        f.baseX = f.x;
        f.baseY = f.y;

        return c;
    }

    addClient(data){
        const existingClient = this.clients.find(c => c.id === data.id);
        if (existingClient) {
            for (let key in data) {
                existingClient[key] = data[key];
            }
            existingClient.flower.character = data.character;
            existingClient.startingWave = data.sw;
            existingClient.flower.dev = data.dev;
            delete existingClient.sw;

            if (data.petals) {
                this.updateFlowerPetals(data.petals, existingClient.id, true);
            }

            if (data.offPetals) {
                this.updateFlowerOffPetals(data.offPetals, existingClient.id, true);
            }

            if (data.equippedArtifacts) {
                existingClient.equippedArtifacts = data.equippedArtifacts;
                this.updateClientArtifact(existingClient);
            }

            if (data.id === this.selfId) {
                this.maxStartingWave = data.maxSW;
                // 检查本地保存的 SW 是否有效（不超过最大值）
                if(savedStartingWave !== null && savedStartingWave <= this.maxStartingWave){
                    this.desiredSWS = savedStartingWave / this.maxStartingWave;
                    send({sw: savedStartingWave});
                } else {
                    this.desiredSWS = 1;
                    if(savedStartingWave !== null){
                        localStorage.removeItem('startingWave');
                        savedStartingWave = null;
                    }
                }
            }
            return;
        }

        this.clients.push(this.createClient(data.id));
        const client = this.clients[this.clients.length-1];

        for(let key in data){
            client[key] = data[key];
        }

        client.flower.character = data.character;
        client.startingWave = data.sw;
        client.flower.dev = data.dev;
        delete client.sw;

        if(data.petals){
            this.updateFlowerPetals(data.petals, client.id, false);
        }

        if (data.offPetals) {
            this.updateFlowerOffPetals(data.offPetals, client.id, true);
        }

        if (data.equippedArtifacts) {
            client.equippedArtifacts = data.equippedArtifacts;
            this.updateClientArtifact(client);
        }

        if(data.id === this.selfId){
            this.maxStartingWave = data.maxSW;
            // 检查本地保存的 SW 是否有效（不超过最大值）
            if(savedStartingWave !== null && savedStartingWave <= this.maxStartingWave){
                this.desiredSWS = savedStartingWave / this.maxStartingWave;
                // 发送给服务器
                send({sw: savedStartingWave});
            } else {
                // 无效或没有保存的 SW，使用最大值
                this.desiredSWS = 1;
                // 清除无效的保存值
                if(savedStartingWave !== null){
                    localStorage.removeItem('startingWave');
                    savedStartingWave = null;
                }
            }
        }
    }

    updateClientArtifact(client) {
        if (!client.equippedArtifacts || client.equippedArtifacts.length === 0) {
            client.artifactPetalContainer = null;
            return;
        }

        const artifactType = client.equippedArtifacts[0];
        const artifactLevel = client.equippedArtifactLevel || 0;
        const maxRarity = Stats.rarities.length - 1;
        const clampedRarity = Math.min(Math.max(artifactLevel, 0), maxRarity);

        const artifactPetal = new Petal({
            type: artifactType,
            rarity: clampedRarity,
            x: 0, y: 0, distance: 0, angle: 0,
            maxHp: 1e30, hp: 1e30,
            maxReload: 3, reload: 3, damage: 0
        });

        client.artifactPetalContainer = new PetalContainer(
            [artifactPetal],
            { x: 0, y: 0, w: artifactWidth, h: artifactHeight, originalX: 0, originalY: 0, radius: artifactWidth / 2, toOscillate: false },
            `${artifactType}_squad`,
            1,
            0
        );
        client.artifactPetalContainer.spawnAnimation = 1;
    }

    updateStartingWave(id, sw, maxSW, serverSaidSo=false){
        if(id === this.selfId){
            if(serverSaidSo && maxSW !== undefined){
                this.maxStartingWave = maxSW;
                this.startingWave = Math.min(sw, maxSW);
                this.desiredSWS = this.startingWave / maxSW;
            } else {
                this.startingWave = Math.min(sw, this.maxStartingWave);
            }
        } else {
            const f = this.findClient(id);
            f.startingWave = Math.min(sw, f.maxSW || sw);
        }
    }

    removeClient(id){
        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].id === id){
                this.clients.splice(i,1);
                return;
            }
        }
    }

    findClient(id){
        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].id === id){
                return this.clients[i];
            }
        }
        return {};
    }
}
