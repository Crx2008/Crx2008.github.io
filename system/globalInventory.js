const numberOfRarities = 35;
// ------

// this is the inventory in the bottom right corner
class GlobalInventory {
    constructor(){
        // 不再加载外部图片，直接使用 emoji
        this.icon = null;
        this.hoveringOverButton = false;

        this.hoveringOverX = false;

        this.menuActive = false;

        this.petalContainers = {/*rarity: [petalName: PetalContainer]*/};

        this.w = 445;//510;
        this.h = 665;//740;

        this.scroll = 5;
        this.render = {scroll: this.scroll};

        this.menuHeights = {beginning: 0, end: this.h};
        this.scrollbar = {top: 0, bottom: 0, renderTop: 0, renderBottom: 0, length: 150};


        // this.scrollbar.bottom = (canvas.h - this.h - 20) + 60 - this.scrollbar.length * 7/8
        // this.scrollbar.top = this.scrollbar.bottom + this.scrollbar.length / 2
        const scrollBarProjections = {
            top: (canvas.h - this.h - 20) + this.scrollbar.length*.5 + 60,
            bottom: (canvas.h - 20) - this.scrollbar.length*.5 + 30
        }
        this.scrollbar.top = this.scrollbar.bottom = scrollBarProjections.top + this.scrollbar.length;
        this.scrollbar.renderBottom = this.scrollbar.bottom;
        this.scrollbar.renderTop = this.scrollbar.top;

        this.draggingScrollBar = false;

        this.totalPetalHeight = 0;

        this.hoveringOverScrollbar = false;
        this.scrollBarActive = false;
        
        this.currentSearchTerm = undefined;
        this.textBoxActive = false;
    }
    resizeScroll(){
        if(this.resizeFlag !== undefined) {
            return;
        }
        const scrollBarProjections = {
            top: (canvas.h - this.h - 20) + this.scrollbar.length*.5 + 60,
            bottom: (canvas.h - 20) - this.scrollbar.length*.5 + 30
        }
        this.scrollbar.top = this.scrollbar.bottom = scrollBarProjections.top + this.scrollbar.length;

        this.resizeFlag = true;
    }
    drawIcon(alpha=1){
        if(alpha !== 1){
            ctx.globalAlpha = alpha;
        }
        // these colors are taken from florr.io, not hornex. They are the exact same. I checked.
        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        if(mouse.canvasX + 6 > 20 && mouse.canvasY + 6 > canvas.h - 20 - 80 - 100 - 100 && mouse.canvasX - 6 < 20 + 80 && mouse.canvasY - 6 < canvas.h - 20 - 80 + 80 - 100 - 100){
            ctx.fillStyle = '#6aa8df';
            setCursor('pointer');
            this.hoveringOverButton = true;
        } else {
            // if(this.hoveringOverX === false){
            // }
            this.hoveringOverButton = false;
        }
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.roundRect(20, canvas.h - 20 - 80 - 100 - 100, 80, 80, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // 使用 emoji 图标
        ctx.font = `900 30px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeText('🎒', 60, canvas.h - 20 - 40 - 100 - 100);
        ctx.fillText('🎒', 60, canvas.h - 20 - 40 - 100 - 100);

        ctx.fillStyle = '#f0f0f0';// this is gonna be pain lol
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 14px Ubuntu`;
        const lastLetterSpacing = ctx.letterSpacing;
        ctx.letterSpacing = '0px';
        ctx.strokeText("[X]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15 - 100 - 100)
        ctx.fillText("[X]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15 - 100 - 100)
        ctx.letterSpacing = lastLetterSpacing;

        ctx.globalAlpha = 1;
    }
    draw(){
        let alpha = this.fadingOut === true ? 1 - (time - this.originalFadeOutTime) / 100 : 1;

        //this.drawIcon(alpha);

        // animation stuff here, calling drawInventory but possibly transforming beforehand
        if(this.menuActive === true || (time - this.lastCloseTime) < 140){
            this.drawInventory(alpha);
        } else {
            this.hoveringOverX = false;
        }
    }
    fadeOut(){
        this.fadingOut = true;
        this.originalFadeOutTime = time;
        setTimeout(() => {
            delete this.fadingOut;
            if(this.menuActive === true){
                this.toggleMenu();
            }
        }, 100);
    }
    initInventory(data){
        this.petalContainers = {};
        craftingMenu.petalContainers = {};
        craftingMenu.fillerPetalSlots = {};
        craftingMenu.recalculateTypeIndexes();

        // 优化：批量添加时使用标志跳过单个排序
        for(let i = 0; i < data.length; i++){
            const petalData = parsePetalData(data[i]);
            const {x,y,w,h,originalX,originalY,radius} = petalData;
            if (petalData.petal.type === "Token" && petalData.petal.rarity === 0) {
                shop.tokens += petalData.petalAmount
            }
            // sortPetals=false 批量添加后统一排序
            this.addPetalContainer(new PetalContainer([new Petal(petalData.petal)], {x,y,w,h,originalX,originalY,radius,toOscillate:false,petalStats:petalData.petalStats,customBiome:petalData.customBiome}, petalData.id, petalData.petalAmount, petalData.attempt), false, false);
        }

        // 优化：批量添加后统一排序（而不是每次添加都排序）
        for(let key in this.petalContainers){
            // 跳过 Map 键（以 _map 结尾的键）
            if(key.endsWith("_map")) continue;

            if(key > maxRarityObtained){
                maxRarityObtained = parseInt(key);
            }

            // 只对数组进行排序
            if(Array.isArray(this.petalContainers[key])){
                this.petalContainers[key].sort((a, b)=>{
                    let aname = a.type;
                    let bname = b.type;
                    if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
                    if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0].customName;
                    return aname.localeCompare(bname);
                });
            }
        }
    }
    addPetalContainer(p, isCRSync=false, sortPetals=true){
        if (!showCommunityBiomes && !petalRenderMap[p.type]) return;

        // 检查是否是特殊花瓣，如果是则转发到技能背包（缓存检查结果）
        const SPECIAL_PETAL_TYPES = new Set([
            "Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact", "Chimera"
        ]);
        if (SPECIAL_PETAL_TYPES.has(p.type)) {
            specialGlobalInventory.addPetalContainer(p, isCRSync, sortPetals);
            return;
        }

        let rarityToSet = p.rarity

        if (
            (p.type === "Shattered Relic of Wrath" ||
            p.type === "Reinforced Relic of Wrath" ||
            p.type === "Subset Relic of the Guardian" ||
            p.type === "Division Relic of the Guardian" ||
            p.type === "Guard Relic of the Guardian" ||
            p.type === "Knight Relic of the Guardian" ||
            p.type === "Aid Relic of Serenity" ||
            p.type === "Subliminal Relic of Serenity" ||
            p.type === "Barrier Relic of Serenity" ||
            p.type === "Token") && p.rarity == 0
        ) { rarityToSet = "Unique" }

        craftingMenu.addPetalContainer(new PetalContainer(p.petals, {...p}, p.id, p.amount, p.attempt));
        // 优化：使用 Map 存储，从 O(n) 变成 O(1)
        if(this.petalContainers[rarityToSet] === undefined){
            this.petalContainers[rarityToSet] = []; // 主数组保持为 Array 以兼容现有渲染代码
            this.petalContainers[rarityToSet + "_map"] = new Map(); // 新增 Map 用于快速查找
        }

        // 使用 Map 快速查找已存在的堆叠
        const rarityMap = this.petalContainers[rarityToSet + "_map"];
        let previousStack = rarityMap.get(p.type);
        if (previousStack !== undefined) {
            previousStack.amount += p.amount;
            previousStack.lastAmountChangedTime = time;
            return;
        }

        p.w = 62;
        p.h = 62;

        this.petalContainers[rarityToSet].unshift(p);
        rarityMap.set(p.type, p); // 添加到 Map 中

        if(sortPetals) this.petalContainers[rarityToSet].sort((a, b)=>{
            let aname = a.type;
            let bname = b.type;
            if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
            if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0].customName;
            return aname.localeCompare(bname);
        });
    }
    removeByRarityAndType(rarity, type){
        // 优化：使用 Map 实现 O(1) 查找，而不是 O(n) 遍历
        const rarityArray = this.petalContainers[rarity];
        const rarityMap = this.petalContainers[rarity + "_map"];

        if (!rarityArray || !rarityMap) {
            return false;
        }

        // 从 Map 中快速获取索引
        const pc = rarityMap.get(type);
        if (pc !== undefined) {
            // 在数组中找到索引
            const index = rarityArray.indexOf(pc);
            if (index !== -1) {
                this.removePetalContainer(rarity, index);
                return true;
            }
        }
        return false;
    }
    ReturnRarityAndType(rarity, type){
        // 优化：使用 Map 实现 O(1) 查找
        const rarityMap = this.petalContainers[rarity + "_map"];

        if (!rarityMap) {
            return false;
        }

        return rarityMap.get(type) || false;
    }
    removeByRarityAndTypeAndReturn(rarity, type){
        // 优化：使用 Map 快速查找并获取索引
        const rarityArray = this.petalContainers[rarity];
        const rarityMap = this.petalContainers[rarity + "_map"];

        if (!rarityArray || !rarityMap) {
            return false;
        }

        const pc = rarityMap.get(type);
        if (pc !== undefined) {
            const index = rarityArray.indexOf(pc);
            if (index !== -1) {
                return this.removePetalContainer(rarity, index);
            }
        }
        return false;
    }
    removePetalContainer(rarity, indexInRarity){
        const petalContainer = this.petalContainers[rarity][indexInRarity];
        // 特殊花瓣（神器）不进入合成菜单
        if (!isSpecialPetal(petalContainer)) {
            craftingMenu.removePetalContainer(petalContainer.type, petalContainer.rarity);
        }

        // 同步更新 Map
        const rarityMap = this.petalContainers[rarity + "_map"];

        if(petalContainer.amount >= 2){
            petalContainer.amount--;
            petalContainer.lastAmountChangedTime = time;
        } else {
            this.petalContainers[rarity].splice(indexInRarity, 1);
            // 从 Map 中移除
            if (rarityMap) {
                rarityMap.delete(petalContainer.type);
            }
        }
        return petalContainer;
        // for(let i = 0; i < this.petalContainers[p.rarity].length; i++){
        //     const petalContainer = this.petalContainers[p.rarity][i];
        //     if(petalContainer === p){
        //         console.log(p);
        //         if(petalContainer.amount >= 2){
        //             p.amount--;
        //         } else {
        //         }
        // this.petalContainers[p.rarity] = this.petalContainers[p.rarity].filter(p2 => p2 !== p);
    }
    removePetalContainerAmount(rarity, indexInRarity, amount){
        const petalContainer = this.petalContainers[rarity][indexInRarity];
        if(petalContainer.amount >= amount + 1){
            petalContainer.amount -= amount;
            petalContainer.lastAmountChangedTime = time;
        } else {
            this.petalContainers[rarity].splice(indexInRarity, 1);
            // 从 Map 中移除
            const rarityMap = this.petalContainers[rarity + "_map"];
            if (rarityMap) {
                rarityMap.delete(petalContainer.type);
            }
        }
        craftingMenu.removePetalContainerAmount(petalContainer.type, petalContainer.rarity, amount);
    }
    mouseDown({mouseX, mouseY}, inv){
        if(this.removeDraggingAnim){
            clearTimeout(this.removeDraggingAnim);
            draggingPetalContainer = null;
            delete this.removeDraggingAnim;
        }
        for(let i in this.petalContainers){
            // 跳过 Map 对象和空数组
            if(this.petalContainers[i] === undefined || !Array.isArray(this.petalContainers[i])){
                continue;
            }
            for(let j = 0; j < this.petalContainers[i].length; j++){
                const petalContainer = this.petalContainers[i][j];
                if(this.filteredOutBySearch(petalContainer)) continue;
                if(petalContainer.greyed === true) continue;
                // 130, canvas.h - this.h - 20
                if(mouseX > 130 + petalContainer.x - petalContainer.w/2 && mouseX < 130 + petalContainer.x + petalContainer.w/2 && mouseY > canvas.h - this.h - 20 + petalContainer.y - petalContainer.h/2 && mouseY < canvas.h - this.h - 20 + petalContainer.y + petalContainer.h/2){
                    // for now we'll just equip the petal, but in the future we would want to start a petal drag
                    // let position = -1;
                    // let isTop = true;
                    // for(let k = 0; k < inv.topPetalSlots.length; k++){
                    //     if(inv.topPetalContainers[k] === undefined){
                    //         position = k;
                    //     for(let k = 0; k < inv.bottomPetalSlots.length; k++){
                    //         if(inv.bottomPetalContainers[k] === undefined){
                    //             position = k;
                    //             isTop = false;
                    // }
                    
                    // this.removePetalContainer(petalContainer);
                    // return;
                    const removedPC = this.removePetalContainer(i,j);
                    draggingPetalContainer = new PetalContainer(removedPC.petals, {...removedPC, isDragging: true}, Math.random(), 1)//petalContainer;
                    draggingPetalContainer.x += 130;
                    draggingPetalContainer.render.x += 130;
                    draggingPetalContainer.y += canvas.h - this.h - 20;
                    draggingPetalContainer.render.y += canvas.h - this.h - 20;
                    draggingPetalContainer.amount = 1;
                    draggingPetalContainer.mouseOffset = {
                        x: draggingPetalContainer.x - mouseX,
                        y: draggingPetalContainer.y - mouseY
                    }
                    draggingPetalContainer.w = 85;
                    draggingPetalContainer.h = 85;
                    // draggingPetalContainer.spawnAnimation = .8;
                }
            }
        }

        if(
            mouseX < this.w - 16 + 12 + 130 &&
            mouseX > this.w - 16 - 12 + 130 &&
            mouseY > (this.scrollbar.bottom) &&
            mouseY < (this.scrollbar.top)
        ){
            this.draggingScrollBar = true;
        }

        mouse.canvasX = mouseX;
        mouse.canvasY = mouseY;

        if(this.mouseInTextBox()){
            this.textBoxActive = true;
            setTimeout(()=>petalSearch.focus(), 10);
        }else{
            this.textBoxActive = false;
        }
    }

    handleIOSMouseDown(mouseX, mouseY){
        mouse.canvasX = mouseX;
        mouse.canvasY = mouseY;

        if(this.mouseInTextBox()){
            this.textBoxActive = true;
            petalSearch.focus();
        }else{
            this.textBoxActive = false;
        }
    }
    
    mouseUp({mouseX, mouseY}, inv, skipFastFlag=false){
        this.draggingScrollBar = false;
        // delete this.scrollbarMouseOffset;

        if(this.removeDraggingAnim){
            clearTimeout(this.removeDraggingAnim);
            draggingPetalContainer = null;
            delete this.removeDraggingAnim;
        }
        // console.log(Math.sqrt((mouse.lastDownData.x-mouse.x)**2+(mouse.lastDownData.y-mouse.y)**2));
        if(draggingPetalContainer !== null){
            if(skipFastFlag === false && time - mouse.lastDownData.time < 300 && Math.sqrt((mouse.lastDownData.x-mouse.x)**2+(mouse.lastDownData.y-mouse.y)**2) < 20){
                if(draggingPetalContainer.lastPetalSlot !== undefined && draggingPetalContainer.lastPetalSlot.index !== -1){
                    if(draggingPetalContainer.lastPetalSlot.top === true){
                        if(inv.bottomPetalContainers[draggingPetalContainer.lastPetalSlot.index] === undefined){
                            this.mouseUp(...arguments, true);
                            return;
                        }
                    } else {
                        if(inv.topPetalContainers[draggingPetalContainer.lastPetalSlot.index] === undefined){
                            this.mouseUp(...arguments, true);
                            return;
                        }
                    }
                    // if the petal is in Inventory then try and swap it.
                    // add it back
                    inv.addPetalContainer(draggingPetalContainer, draggingPetalContainer.lastPetalSlot.top, draggingPetalContainer.lastPetalSlot.index);
                    // swap it
                    inv.swapPetals(draggingPetalContainer.lastPetalSlot.index, false);
                    draggingPetalContainer = null;
                    return;
                } else {
                    // otherwise if it came from globalInventory then try and equip it
                    if(inv.addInFirstAvailableSlot(draggingPetalContainer) === true){
                        draggingPetalContainer = null;
                        return;
                    }
                }
            }
            if(inv.addClosest(draggingPetalContainer, this) === true){
                draggingPetalContainer = null;
            } else {
                // if(this.menuActive === false){
                    const render = window.structuredClone(draggingPetalContainer.render);
                    const mouseOffset = {x:draggingPetalContainer.mouseOffset.x,y:draggingPetalContainer.mouseOffset.y};
                    // let clone = new PetalContainer(draggingPetalContainer.petals, {...draggingPetalContainer}, Math.random(), draggingPetalContainer.amount);
                    this.addPetalContainer(draggingPetalContainer);
                    draggingPetalContainer = new PetalContainer(draggingPetalContainer.petals, {...draggingPetalContainer, isDragging: true}, Math.random(), draggingPetalContainer.amount);//p.collectTime = time;
                    for(let key in render){
                        draggingPetalContainer[key] = render[key];
                    }
                    draggingPetalContainer.mouseOffset = mouseOffset;
                    draggingPetalContainer.x = render.x;
                    draggingPetalContainer.y = render.y;
                    draggingPetalContainer.spawnAnimation = 1;
                    draggingPetalContainer.collectTime = time;
                    this.removeDraggingAnim = setTimeout(() => {
                        draggingPetalContainer = null;
                        delete this.removeDraggingAnim;
                    }, 150)
                // } else {
                // }
            }
        }
    }
    drawInventory(alpha=1){
        this.render.scroll = interpolate(this.render.scroll, this.scroll, 0.0070 * dt);

        if(alpha !== 1){
            ctx.globalAlpha = alpha;
        }
        let translation = 0;
        if(time - this.lastCloseTime < 160){
            translation += this.h * easeOutCubic((time - this.lastCloseTime) / 160);
        }
        if(time - this.lastOpenTime < 160){
            translation += (this.h + 40) - (this.h + 40) * easeOutCubic((time - this.lastOpenTime) / 160);
        }
        if(translation !== 0){
            ctx.translate(0, translation);
        }

        if(this.hoveringOverScrollbar === true || this.draggingScrollBar === true){
            setCursor('pointer');
        }

        ctx.translate(130, canvas.h - this.h - 20);
        // if(time - this.lastCloseTime < 500){
        // }
        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        ctx.lineWidth = 8;

        ctx.save();

        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.save();

        ctx.font = "600 25px 'Ubuntu'";
        ctx.lineWidth = 4;
        ctx.lineWidth
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.strokeText("Inventory", this.w/2, 25);
        ctx.fillText("Inventory", this.w/2, 25);
        this.drawTextInput();

        ctx.restore();

       

        const petalContainersPerRow = 5;
        const padding = 35;
        const topPadding = 100; //Input is here.
        
        const rightPadding = 50;// scroll bar is here so we need more
        const petalContainerSize = 65//(this.petalContainers[0] ?? {w: 0}).w;

        ctx.beginPath()
        ctx.roundRect(0, topPadding, this.w, this.h - topPadding /* input padding */, 3);
        ctx.clip();
        ctx.closePath();

        let firstPetalContainer = null;
        let lastPetalContainer = null;

        let renderIndex = 0;

        // 检查是否装备了 Chimera - 如果是，只显示 Mob 技能花瓣
        const equippedArtifacts = typeof specialGlobalInventory !== 'undefined' ? specialGlobalInventory.equippedArtifact : undefined;
        const isChimeraEquipped = equippedArtifacts === 'Chimera' || (Array.isArray(equippedArtifacts) && equippedArtifacts.includes('Chimera'));

        // Mob 技能花瓣类型列表
        const MOB_SKILL_PETAL_TYPES = [
            'HornetSting', 'HornetVolley', 'HornetSwarm', 'HornetFrenzy',
            'BeetleClaw', 'BeetleCharge', 'BeetleSwarm', 'BeetleShell',
            'LadybugHeal', 'LadybugDodge', 'LadybugSwarm', 'LadybugGrow',
        ];

        // 过滤掉 Map 对象，只遍历数组
        for (let group of Object.values(this.petalContainers).reverse()) {
            // 跳过 Map 对象和空数组
            if (!Array.isArray(group)) continue;

            for (let petalContainer of group) {
                if(this.filteredOutBySearch(petalContainer)) continue;
                if(petalContainer.amount <= 0) continue;  // 跳过数量为0的花瓣

                // Chimera 模式：只显示 Mob 技能花瓣
                if (isChimeraEquipped && !MOB_SKILL_PETAL_TYPES.includes(petalContainer.type)) {
                    continue;
                }
                // 非 Chimera 模式：隐藏 Mob 技能花瓣
                if (!isChimeraEquipped && MOB_SKILL_PETAL_TYPES.includes(petalContainer.type)) {
                    continue;
                }

                petalContainer.x = petalContainerSize / 2 + padding + (renderIndex % petalContainersPerRow) / (petalContainersPerRow - 1) * (this.w - petalContainerSize - padding - rightPadding);
                petalContainer.y = topPadding + petalContainerSize / 2 + Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12) + this.render.scroll;
                petalContainer.renderIndex = renderIndex;

                // really unoptimized lol
                if (firstPetalContainer === null) {
                    firstPetalContainer = petalContainer;
                }
                lastPetalContainer = petalContainer;

                petalContainer.relativeY = Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12) + petalContainerSize / 2 + this.render.scroll;
                if (petalContainer.relativeY - petalContainer.y + petalContainer.render.y < this.h - topPadding /*-*/ + petalContainerSize && petalContainer.relativeY - petalContainer.y + petalContainer.render.y > topPadding - petalContainerSize * 2) {
                    if (petalContainer.lastOutTime !== undefined) {
                        delete petalContainer.lastOutTime;
                        petalContainer.lastInTime = time;
                    }

                    petalContainer.draw();

                   
                    // ctx.globalAlpha = 1;
                } else {
                    petalContainer.updateInterpolate();
                    // }
                }

                renderIndex++;
                
            }
        }

        ctx.restore();

        // stroking the rect again so that hte stroke isn't halfway in
        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        ctx.lineWidth = 8;

        ctx.save();

        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.stroke();
        ctx.closePath();

        if(firstPetalContainer !== null && Object.keys(this.petalContainers).filter(k => !k.endsWith("_map")).length > 0){// insanity
            this.menuHeights = {
                beginning: firstPetalContainer.relativeY, //- petalContainerSize * 1/2,
                end: lastPetalContainer.relativeY //+ petalContainerSize * 4
            }

            if(this.menuHeights.end - this.menuHeights.beginning < this.h - (petalContainerSize + 12)/*extra row*/){
                this.scrollBarActive = false;
                this.scroll = 5;
            } else {
                if(this.menuHeights.end - this.menuHeights.beginning < this.h){
                    this.scrollBarActive = false;
                } else {
                    this.scrollBarActive = true;
                }

                // const lastScroll = this.scroll;

                // console.log(this.menuHeights.beginning - this.menuHeights.end);

                if(this.menuHeights.end + this.scroll - this.render.scroll < this.h - petalContainerSize - topPadding){
                    // we want to move target - actual distance
                    this.scroll = (this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize - topPadding - 5;
                } else if(this.menuHeights.beginning + this.scroll - this.render.scroll > topPadding){
                    this.scroll = 5;
                    // this.render.scroll = 0;
                }

                // const ratio = (this.scroll - 5) / ((this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize * 3/2 - 5 - 5);// at 0 it will be 0, at max (this.mH.beginning - ...) it will be 1

                // this.scrollbar.length = ((this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize - 5); // max scroll
                // this.scrollbar.top = ratio * (this.h - this.scrollbar.length);
                // this.scrollbar.bottom = ratio * (this.h - this.scrollbar.length) + this.scrollbar.length;

                // reverseing the mouseY to scroll to give us mouseY in terms of this.scroll
                const scrollBarProjections = {
                    top: (canvas.h - this.h - 20) + this.scrollbar.length*.5 + 60,
                    bottom: (canvas.h - 20) - this.scrollbar.length*.5 + 30
                }


                this.totalPetalHeight = (this.menuHeights.beginning - this.menuHeights.end);

                // this.scroll = (mouseY - scrollBarProjections.top) / (scrollBarProjections.bottom - scrollBarProjections.top) * (this.totalPetalHeight + this.scrollbar.length) //* ((this.h - 82 - 16 * 2) / this.h);

                // max at (this.scroll - this.h) / this.totalPetalHeight, min at 0 / this.totalPetalHeight
                // const ratio = (this.scroll - this.h * ratio) / this.totalPetalHeight;
                const ratio = this.scroll / this.totalPetalHeight / (1 + this.h / this.totalPetalHeight);
                // console.log(ratio);
                this.scrollbar.bottom = interpolate(scrollBarProjections.top, scrollBarProjections.bottom, ratio) - this.scrollbar.length / 2//this.scroll / (this.totalPetalHeight) * (scrollBarProjections.bottom - scrollBarProjections.top) + scrollBarProjections.top + this.scrollbar.length / 2 - (canvas.h - this.h - 20);
                // this.scrollbar.bottom = this.scroll / (this.totalPetalHeight + this.scrollbar.length) * (scrollBarProjections.bottom - scrollBarProjections.top) + scrollBarProjections.top - this.scrollbar.length/2;
                this.scrollbar.top = this.scrollbar.bottom + this.scrollbar.length / 2//this.scrollbar.bottom - this.scrollbar.length / 2;
            }
        }

        this.scrollbar.renderTop = interpolate(this.scrollbar.renderTop, this.scrollbar.top, this.draggingScrollBar ? 0.28 : 0.08);
        this.scrollbar.renderBottom = interpolate(this.scrollbar.renderBottom, this.scrollbar.bottom, this.draggingScrollBar ? 0.28 : 0.08);

        // console.log(this.scrollBarActive);
        if(this.scrollBarActive !== false && Object.keys(this.petalContainers).filter(k => !k.endsWith("_map")).length > 0){
            ctx.translate(0, -(canvas.h - this.h - 20));
            ctx.strokeStyle = '#4981b1';
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(this.w - 16, (this.scrollbar.renderTop) /** ((this.h - 82 - 16) / this.h) + 82*/);
            ctx.lineTo(this.w - 16, (this.scrollbar.renderBottom) /** ((this.h - 82 - 16) / this.h) + 82*/);
            ctx.stroke();
            ctx.closePath();
            ctx.translate(0, (canvas.h - this.h - 20));
        }
        

        if(this.menuActive === true && translation === 0){
            if(mouse.canvasX > 130 + this.w - 7.5 - 30 - 3 && mouse.canvasY > canvas.h - this.h - 20 + 7.5 + 3 && mouse.canvasX < 130 + this.w - 7.5 - 3 && mouse.canvasY < canvas.h - this.h - 20 + 7.5 + 30 + 3){
                ctx.fillStyle = "#c16666";
                setCursor('pointer');
                this.hoveringOverX = true;
            } else {
                // if(this.hoveringOverButton === false){
                // }
                this.hoveringOverX = false;
                ctx.fillStyle = '#c1565e';
            }
        } else {
            ctx.fillStyle = '#c1565e';
            this.hoveringOverX = false;
        }

        ctx.translate(-3, 3);
        ctx.strokeStyle = '#90464b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(this.w - 7.5 - 30, 7.5, 30, 30, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 4.75;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#cccccc';
        ctx.beginPath();
        ctx.moveTo(this.w - 30, 30);
        ctx.lineTo(this.w - 7.5 * 2, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(this.w - 7.5 * 2, 30);
        ctx.lineTo(this.w - 30, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.translate(3, -3);
        

        ctx.translate(-130, -(canvas.h - this.h - 20));

        if(translation !== 0){
            ctx.translate(0, -translation);
        }
        ctx.globalAlpha = 1;

        //stats boxes
        const mouseRelative = {
            x: mouse.canvasX - 130,
            y: mouse.canvasY - (canvas.h - this.h - 20)
        };

        if(mouseRelative.x > 0 && mouseRelative.x < this.w &&
            mouseRelative.y > 0 && mouseRelative.y < this.h){

            // 过滤掉 Map 对象，只遍历数组
            for (let group of Object.values(this.petalContainers).reverse()) {
                // 跳过 Map 对象和空数组
                if (!Array.isArray(group)) continue;

                for (let petalContainer of group) {
                    if(this.filteredOutBySearch(petalContainer)) continue;
                    //ctx.lastTransform6 = ctx.getTransform();
                    if(
                        mouseRelative.x > petalContainer.x - petalContainer.w/2 && 
                        mouseRelative.x < petalContainer.x + petalContainer.w/2 && 
                        mouseRelative.y > petalContainer.y - petalContainer.h/2 && 
                        mouseRelative.y <  petalContainer.y + petalContainer.h/2
                    ){
                        petalContainer.isHovered = true;
                    }

                    petalContainer.drawStatsBox(false, false, petalContainer.render.x + 130, petalContainer.render.y + (canvas.h - this.h - 20));
                    //ctx.setTransform(ctx.lastTransform6);
                    //delete ctx.lastTransform6;
                }
            }
        }
    }
    drawTextInput(){
        ctx.save();

        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 4;

        

        ctx.beginPath()
        ctx.roundRect(35, 45, this.w - 85, 35, 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if(this.mouseInTextBox()) {
            setCursor("text");
        }

        ctx.textAlign = 'left';
        ctx.font = "600 22px 'Ubuntu'";

        let hasText = this.currentSearchTerm !== undefined && this.currentSearchTerm.length > 0;

        ctx.fillStyle = hasText? '#000000' : '#cccccc';
        ctx.fillText(hasText ? this.currentSearchTerm :"Search...", 35 + 8, 45 + 19);

        if(this.textBoxActive){
            let text = hasText?this.currentSearchTerm : "";
            let cindex = petalSearch.selectionStart ?? text.length;
            if (Math.floor(Date.now() / 500) % 2 == 0) {
                const textWidth = ctx.measureText(text.slice(0, cindex)).width;
                const caretx = 35 + 8 + textWidth + 2;
               

                ctx.beginPath();
                ctx.moveTo(caretx, 50);
                ctx.lineTo(caretx, 75);
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#000000';
                ctx.stroke();
            }


        }

        ctx.restore();
    }
    mouseInTextBox(){
        const mouseRelative = {
            x: mouse.canvasX - 130,
            y: mouse.canvasY - (canvas.h - this.h - 20)
        };

        return mouseRelative.x > 35 && mouseRelative.x < this.w - 85 && mouseRelative.y > 45 && mouseRelative.y < 80

    }
    filteredOutBySearch(petalContainer){
        return this.currentSearchTerm && this.currentSearchTerm.length > 0 && !petalContainer.type.toLowerCase().includes(this.currentSearchTerm.toLowerCase())
    }

    updateScroll(/*delta*/{x,y}, {mouseX, mouseY}){
        if(this.menuActive !== true){
            return;
        }
        
        if(mouseX < 130 || mouseY < canvas.h - this.h - 20 || mouseX > 130 + this.w || mouseY > canvas.h - 20){
            return;
        }

        this.scroll -= y;

        // let counter = 0;
        // let intrvl = setInterval(() => {
        //     counter++;
        //     if(counter > 10){
        //         clearInterval(intrvl);
        //     }
            //     if(this.petalContainers[i] === undefined){
            //     }
            //         const petalContainer = this.petalContainers[i][j];
            //         if(petalContainer.lastInTime !== undefined){
            //         }
    }
    mouseMove({mouseX, mouseY}){
        if(
            mouseX < this.w - 16 + 12 + 130 &&
            mouseX > this.w - 16 - 12 + 130 &&
            mouseY > (this.scrollbar.bottom) &&
            mouseY < (this.scrollbar.top)
        ){
            this.hoveringOverScrollbar = true;
            // setCursor('pointer');
            // this.scrollbarMouseOffset = 0//(this.scrollbar.top) * ((this.h - 82 - 16) / this.h) + 82 + (canvas.h - this.h - 20) - mouseY;
        } else {
            this.hoveringOverScrollbar = false;
        }
        /*
        //Tooltip
        for(let i in this.petalContainers){
            // 跳过 Map 对象和空数组
            if(this.petalContainers[i] === undefined || !Array.isArray(this.petalContainers[i])){
                continue;
            }
            for(let j = 0; j < this.petalContainers[i].length; j++){
                const petalContainer = this.petalContainers[i][j];
                if(mouseX > 130 + petalContainer.x - petalContainer.w/2 && mouseX < 130 + petalContainer.x + petalContainer.w/2 && mouseY > canvas.h - this.h - 20 + petalContainer.y - petalContainer.h/2 && mouseY < canvas.h - this.h - 20 + petalContainer.y + petalContainer.h/2){
                    console.log(petalContainer.type, petalContainer.rarity)
                }
            }
        }
        */
        if(this.draggingScrollBar !== true || Object.keys(this.petalContainers).filter(k => !k.endsWith("_map")).length === 0){
            return;
        }

        const scrollBarProjections = {
            top: (canvas.h - this.h - 20) + this.scrollbar.length*.5 + 60,
            bottom: (canvas.h - 20) - this.scrollbar.length*.5 + 30
        }

        const mouseProjections = {
            top: scrollBarProjections.top - this.scrollbar.length * .25,
            bottom: scrollBarProjections.bottom + this.scrollbar.length * .33
        }

        let ratio = (mouseY - mouseProjections.top) / (mouseProjections.bottom - mouseProjections.top);
        if(ratio < 0){
            ratio = 0;
        } else if(ratio > 1){
            ratio = 1;
        }

        // console.log(mouseY - scrollBarProjections.top);

        if(this.scrollBarActive !== false){
            this.scroll = ratio * (this.totalPetalHeight) //* ((this.h - 82 - 16 * 2) / this.h);
        } else {
            this.scroll = 5;
        }
    }
    toggleMenu(){
        // 关闭其他界面
        if(mobGallery.menuActive === true) mobGallery.toggleMenu();
        // 如果打开的是特殊背包，关闭普通背包；反之亦然
        if(this.isSpecial && globalInventory.menuActive === true){
            globalInventory.menuActive = false;
            globalInventory.lastCloseTime = time;
        }
        if(!this.isSpecial && specialGlobalInventory.menuActive === true){
            specialGlobalInventory.menuActive = false;
            specialGlobalInventory.lastCloseTime = time;
        }

        if(this.menuActive === true){
            this.lastCloseTime = time;
        } else {
            this.lastOpenTime = time;
            if(craftingMenu.menuActive === true){
                craftingMenu.toggleMenu();
            }
        }
        this.menuActive = !this.menuActive;
        petalSearch.value = "";
        this.currentSearchTerm = "";
        // console.log(this.menuActive);
    }
}

function simulatedraggingPetalContainer(x, y) {
    const d = draggingPetalContainer;
    d.x = x + d.mouseOffset.x;
    d.y = y + d.mouseOffset.y;
    
    if(d.base === undefined){
        d.render.x = interpolate(d.render.x, d.x, 0.2);
        d.render.y = interpolate(d.render.y, d.y, 0.2);
    }
    
    const intersectingSlot = menuInventory.getClosest(d);
    if(intersectingSlot === false){
        if(d.base){
            d.w = d.base.w;
            d.h = d.base.h;
            delete d.base;
            delete d.firstPetalSettleTimer;
        }
        return;
    }
    if(d.base === undefined){
        d.base = {w: d.w, h: d.h};
    }
    if(d.firstPetalSettleTimer !== undefined && (time - d.firstPetalSettleTimer) > 200){
        d.x = intersectingSlot.x;
        d.y = intersectingSlot.y + menuInventory.translateY;
        d.w = intersectingSlot.size;
        d.h = intersectingSlot.size;
    } else if(d.firstPetalSettleTimer === undefined) {
        d.firstPetalSettleTimer = time;
    }
}
