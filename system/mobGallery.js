// idea for the mob gallery:
// for every biome you're in it displays the mobs that you've seen for that biome. We'll have something in localstorage that tracks the mobs you've seen.
// whenever you click on a certain enemy it throws you into the game with your inventory petal layout and you have a chance to fight that mob individually. You dont get drops because as soon as you kill the enemy you are thrown out.

let discoveredEnemies = localStorage.getItem('discoveredEnemies');
if(discoveredEnemies === null){
    discoveredEnemies = {};
} else {
    try {
        discoveredEnemies = JSON.parse(discoveredEnemies);
    } catch(e){ 
        console.log('parsing error!', e);
        discoveredEnemies = {};
    }
}

function addDiscoveredEnemy(type="Ladybug", rarity=0){
    // if(noEnemyBox.includes(type)) return;
    if(discoveredEnemies[type] === undefined) discoveredEnemies[type] = [];
    discoveredEnemies[type][rarity] = true;

    mobGallery.toRegenerate = true;

    localStorage.setItem("discoveredEnemies", JSON.stringify(discoveredEnemies));
}

class MobGallery {
    constructor(){
        this.resize();
        // 不再加载外部图片，直接使用 emoji
        this.icon = null;
        this.hoveringOverButton = false;
        this.hoveringOverX = false;

        this.menuActive = false;

        this.lastCloseTime = 0;
        this.lastOpenTime = 0;

        this.rows = {/*mobType: [array of rarities]*/};

        this.toRegenerate = true;

        this.fillerPetalSlots = {};

        // all from 0-1
        this.scroll = {
            x: 0,
            y: 0,
            render: {
                x: 0,
                y: 0
            }
        };
        this.horizontalScrollBarEnabled = false;

        this.scrollExcess = {x: 0, y: 0};
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
    resize(h=undefined){
        this.dimensions = {
            x: 130,
            y: canvas.h - this.h - 20,
            w: 645,
            h: h ?? 382,
        };

        for(let key in this.dimensions){
            this[key] = this.dimensions[key];
        }

        // this isnt actually used to draw the icon, messy code and going fast is bad but it is what it is
        // good for a static reference tho
        this.iconDimensions = {
            x: 20,
            y: canvas.h - 20 - 80,
            w: 80,
            h: 80
        };

        this.XDimensions = {
            x: this.x + this.w - 7.5 - 30 - 3,
            y: this.y + 7.5 + 3,
            w: 30,
            h: 30
        }

        this.inventorySpace = {
            x: this.x,
            y: this.y,
            w: this.w - 67,
            h: this.h
            // h: this.h * .52 - 4 - 24
        }

        this.scrollBarSize = 75;
        this.scrollBounds = {
            x: {
                start: this.x + this.scrollBarSize / 2 + 14,
                end: this.x + this.w - this.scrollBarSize / 2 - 14 - 20
            },
            y: {
                start: this.y + this.scrollBarSize / 2 + 2 + 60,
                end: this.y + this.h - this.scrollBarSize / 2 - 14
            },
        }
    }
    // 检测给定点是否在按钮图标区域内
    isPointInButton(x, y) {
        // 按钮图标固定在 (20, canvas.h - 20 - 80)，宽高都是 80
        const btnX = 20;
        const btnY = canvas.h - 20 - 80;
        const btnW = 80;
        const btnH = 80;
        return x >= btnX && x <= btnX + btnW && y >= btnY && y <= btnY + btnH;
    }

    mouseDown({x,y}){
        // 按钮图标的点击已由 util.js 处理，这里只处理滚动条

        if(this.hoveringOverScrollbarH === true){
            this.draggingScrollBarH = true;
        }
        if(this.hoveringOverScrollbarV === true){
            this.draggingScrollBarV = true;
        }

        // DISABLED
        // if(this.menuActive === true){
        //     if(mouseInBox({x: mouse.canvasX, y: mouse.canvasY}, {...this.inventorySpace, h: this.inventorySpace.h - (this.horizontalScrollBarEnabled === true ? 20 : 0)})){
        //         for(let type in this.rows){
        //             const row = this.rows[type];
        //             for(let i = 0; i < row.length; i++){
        //                 if(row[i]?.petals !== undefined && row[i].petals[0].lastIsHovered === true/* && i >= 4*/){
        //                     row[i].petals[0].lastIsHovered = false;
        //                     sendRoomRequest({singleEnemyRoom: true, biome: biomeManager.getCurrentBiomeData().current, type: type, rarity: i, petalData: menuInventory.pack()});
    }
    getHorizScrollBarDimensions(){
        return {
            x: this.scrollBounds.x.start + this.scroll.render.x * (this.scrollBounds.x.end - this.scrollBounds.x.start) - this.scrollBarSize / 2,
            y: this.y + this.h - 17,
            w: this.scrollBarSize,
            h: 10
        }
    }
    getVertScrollBarDimensions(){
        return {
            x: this.x + this.w - 20 - 10 / 2,
            y: this.scrollBounds.y.start + this.scroll.render.y * (this.scrollBounds.y.end - this.scrollBounds.y.start) - this.scrollBarSize / 2,
            w: 10,
            h: this.scrollBarSize,
        }
    }
    mouseMove({x,y}){
        if(this.menuActive !== true) return;
        this.hoveringOverScrollbarH = false;
        this.hoveringOverScrollbarV = false;
        if(mouseInBox({x, y}, this.getHorizScrollBarDimensions())){
            this.hoveringOverScrollbarH = true;
        } else if(mouseInBox({x, y}, this.getVertScrollBarDimensions()) && this.scrollExcess.y > 0){
            this.hoveringOverScrollbarV = true;
        }

        if(this.draggingScrollBarH){
            const {start, end} = this.scrollBounds.x;
            this.scroll.x = (x - start) / (end - start);
        } else if(this.draggingScrollBarV){
            const {start, end} = this.scrollBounds.y;
            this.scroll.y = (y - start) / (end - start);
        }
    }
    mouseUp({x,y}){
        if(this.menuActive !== true) return;
        this.draggingScrollBarH = this.draggingScrollBarV = false;
    }
    getMainStroke(){
        return '#b0ae3d';
    }
    getMainFill(){
        return '#dbd74b';
    }
    getHoverFill(){
        return blendColor('#dbd74b', '#FFFFFF', 0.1);
    }
    drawIcon(){
        ctx.lineWidth = 6;
        ctx.fillStyle = this.getMainFill();
        ctx.strokeStyle = this.getMainStroke();

        const hovering = mouseInBox({x: mouse.canvasX,y: mouse.canvasY}, this.iconDimensions);
        if(hovering){
            ctx.fillStyle = this.getHoverFill();
            setCursor('pointer');
            this.hoveringOverButton = true;
        } else {
            this.hoveringOverButton = false;
        }

        ctx.beginPath();
        ctx.roundRect(20, canvas.h - 20 - 80, 80, 80, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // 使用 emoji 图标
        ctx.font = `900 30px Ubuntu`;
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeText('📖', 60, canvas.h - 20 - 40);
        ctx.fillText('📖', 60, canvas.h - 20 - 40);

        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 14px Ubuntu`;
        const lastLetterSpacing = ctx.letterSpacing;
        ctx.letterSpacing = '0px';
        ctx.strokeText("[V]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15);
        ctx.fillText("[V]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15);
        ctx.letterSpacing = ctx.lastLetterSpacing;
    }
    toggleMenu(){
        if(craftingMenu.menuActive === true){
            craftingMenu.toggleMenu();
        }
        if(globalInventory.menuActive === true){
            globalInventory.toggleMenu();
        }
        if(specialGlobalInventory.menuActive === true){
            specialGlobalInventory.toggleMenu();
        }
        if(this.menuActive === true){
            this.lastCloseTime = time;
        } else {
            this.lastOpenTime = time;
            if(globalInventory.menuActive === true){
                globalInventory.toggleMenu();
            }
        }
        this.menuActive = !this.menuActive;

        // looping through all petals and making sure they're not hovered
        for(let type in this.rows){
            const row = this.rows[type];
            for(let i = 0; i < row.length; i++){
                if(row[i].petals === undefined) continue;
                row[i].petals[0].lastIsHovered = false;
            }    
        }
    }
    // DRAW --- MAIN METHOD
    draw(){
        if(Number.isFinite(this.y) === false) this.y = this.dimensions.y = canvas.h - this.h - 20;
        if(this.toRegenerate && Object.keys(window.enemyStats).length > 0){
            this.regenerateMobs(window.structuredClone(discoveredEnemies));
            this.toRegenerate = false;
        }

        this.resize();

        let alpha = this.fadingOut === true ? 1 - (time - this.originalFadeOutTime) / 100 : 1;

        this.drawIcon(alpha);

        // animation stuff here, calling drawInventory but possibly transforming beforehand
        if(this.menuActive === true || (time - this.lastCloseTime) < 160){
            this.drawInventory(alpha);

            this.drawRowStatBoxes();
        } else {
            this.hoveringOverX = false;
        }
    }

    drawScrollBars(){
        if (isNaN(this.scroll.y)) this.scroll.y = 0;

        this.scroll.x = Math.min(1, Math.max(0, this.scroll.x));
        this.scroll.y = Math.min(1, Math.max(0, this.scroll.y));

        this.scroll.render.x = interpolate(this.scroll.render.x, this.scroll.x, this.draggingScrollBarH ? 0.28 : 0.08);
        this.scroll.render.y = interpolate(this.scroll.render.y, this.scroll.y, this.draggingScrollBarV ? 0.28 : 0.08);

        if(this.hoveringOverScrollbarH === true || this.hoveringOverScrollbarV === true || this.draggingScrollBarH || this.draggingScrollBarV){
            setCursor('pointer');
        }

        if(this.horizontalScrollBarEnabled === true){
            const h = this.getHorizScrollBarDimensions();

            ctx.strokeStyle = blendColor(this.getMainStroke(), '#000000', 0.1);
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.moveTo(h.x, h.y+h.h/2);
            ctx.lineTo(h.x + h.w, h.y+h.h/2);
            ctx.stroke();
            ctx.closePath();
        }
        

        if(this.scrollExcess.y > 0){
            const v = this.getVertScrollBarDimensions();

            ctx.beginPath();
            ctx.moveTo(v.x + v.w/2, v.y);
            ctx.lineTo(v.x + v.w/2, v.y+v.h);
            ctx.stroke();
            ctx.closePath();
        }
    }

    drawInventory(alpha=1){
        // this.scroll.render = interpolate(this.scroll.render, this.scroll, 0.0070 * dt);

        if(alpha !== 1){
            ctx.globalAlpha = alpha;
        }
        let translation = 0;
        if(time - this.lastCloseTime < 160){
            translation += (this.h + 40) * easeOutCubic((time - this.lastCloseTime) / 160);
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

        ctx.translate(this.x, this.y);
        // if(time - this.lastCloseTime < 500){
        // }
        ctx.fillStyle = this.getMainFill();
        ctx.strokeStyle = this.getMainStroke();
        ctx.lineWidth = 8;
        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if(this.menuActive === true && translation === 0){
            if(mouseInBox({x: mouse.canvasX, y: mouse.canvasY}, this.XDimensions)){
                ctx.fillStyle = "#c16666";
                setCursor('pointer');
                this.hoveringOverX = true;
            } else {
                this.hoveringOverX = false;
                ctx.fillStyle = '#c1565e';
            }
        } else {
            ctx.fillStyle = '#c1565e';
            this.hoveringOverX = false;
        }

        // X rendering
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

        ctx.translate(-this.x, -this.y);

        this.drawRows();
        
        ctx.translate(this.x, this.y);
        // stroking again so we dont get weird cuts with .clip
        ctx.fillStyle = this.getMainFill();
        ctx.strokeStyle = this.getMainStroke();
        ctx.lineWidth = 8;
        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.stroke();
        ctx.closePath();
        ctx.translate(-this.x, -this.y);

        if(this.isEmpty === false){
            this.drawScrollBars();
        }

        if(translation !== 0){
            ctx.translate(0, -translation);
        }
        ctx.globalAlpha = 1;
    }

    drawRows(){
        if(window.enemyStats !== undefined && window.enemyStats['Ladybug']?.drops === undefined){
            // drops
            window.calculateStats(false);

            for(let key in Stats.enemies){
                const enemyStats = Stats.enemies[key];

                const drops = {};

                for(let key2 in enemyStats){
                    drops[key2] = enemyStats[key2].drops;
                }

                if(window?.enemyStats[key] === undefined) window.enemyStats[key] = {};
                
                window.enemyStats[key].drops = drops;
            }
            let enemyStatsArray = [];
            for(let key in baseStats.enemies){
                const stats = baseStats.enemies[key];
                enemyStatsArray.push(key, stats.health, stats.damage, stats.speed, stats.mass);
            }
            
            for(let i = 0; i < enemyStatsArray.length; i+=5){
                window.enemyStats[enemyStatsArray[i]].health = enemyStatsArray[i+1];
                window.enemyStats[enemyStatsArray[i]].damage = enemyStatsArray[i+2];
                window.enemyStats[enemyStatsArray[i]].speed = enemyStatsArray[i+3];
                window.enemyStats[enemyStatsArray[i]].mass = enemyStatsArray[i+4];
            }

            this.regenerateMobs(discoveredEnemies);
        } else if(window.enemyStats['Ladybug'].damage === undefined){
            window.calculateStats(false);

            for(let key in Stats.enemies){
                const enemyStats = Stats.enemies[key];

                const drops = {};

                for(let key2 in enemyStats){
                    drops[key2] = enemyStats[key2].drops;
                }
                
                window.enemyStats[key].drops = drops;
            }
        }

        if(Object.keys(this.rows).length === 0){
            const lastLetterSpacing = ctx.letterSpacing;
            ctx.font = '900 102px Ubuntu';
            ctx.letterSpacing = "-.05px";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 8;

            ctx.strokeText("???", this.x + this.w / 2, this.y + this.h / 2 - 20);
            ctx.fillText("???", this.x + this.w / 2, this.y + this.h / 2 - 20);

            ctx.lineWidth = 3.5;
            ctx.font = '900 16px Ubuntu';
            ctx.strokeText("(No Mobs Discovered)", this.x + this.w / 2, this.y + this.h / 2 + 35);
            ctx.fillText("(No Mobs Discovered)", this.x + this.w / 2, this.y + this.h / 2 + 35);

            ctx.letterSpacing = lastLetterSpacing;

            this.isEmpty = true; 
        } else {
            this.isEmpty = false;
        }
        // ctx.clipping
        ctx.save();

        ctx.beginPath();
        ctx.rect(this.inventorySpace.x, this.inventorySpace.y, this.inventorySpace.w, this.inventorySpace.h - (this.horizontalScrollBarEnabled === true ? 20 : 0));
        ctx.clip();
        ctx.closePath();

        ctx.translate(-this.scrollExcess.x * this.scroll.render.x, -this.scrollExcess.y * this.scroll.render.y);

        const rowHeight = 62;
        const pcHeight = 56;
        const horizontalMargin = 8;

        this.currentY = this.y - 3;

        // console.log(this.rows);

        let highestX = 0;

        // finding highest number in all rows
        let highestRarity = 0;
        for(let type in this.rows){
            const row = this.rows[type];
            if(row.length > highestRarity){
                highestRarity = row.length;
            }
        }

        for(let type in this.rows){
            const row = this.rows[type];
            
            for(let i = 0; i < highestRarity; i++){
                if(row[i] === undefined) row[i] = false;

                const pcX = this.x + horizontalMargin + (pcHeight + horizontalMargin) * i + pcHeight / 2;
                const pcY = this.currentY + pcHeight / 2 + 12;

                if(row[i] === false) {
                    // draw empty box like the placeholders in the crafting inv 
                    const typeKey = type;
                    const rarityKey = i;

                    if(this.fillerPetalSlots[typeKey] === undefined){
                        this.fillerPetalSlots[typeKey] = {};
                    }
                    if(this.fillerPetalSlots[typeKey][rarityKey] === undefined){
                        this.fillerPetalSlots[typeKey][rarityKey] = {render: {x: pcX, y: pcY}};
                    }
                    const fpc = this.fillerPetalSlots[typeKey][rarityKey];
                    fpc.x = pcX;
                    fpc.y = pcY;
                    fpc.render.x = interpolate(fpc.render.x, fpc.x, 0.00672 * dt);
                    fpc.render.y = interpolate(fpc.render.y, fpc.y, 0.00672 * dt);
                    ctx.fillStyle = this.getMainStroke();
                    ctx.beginPath();
                    ctx.roundRect(fpc.render.x - pcHeight/2, fpc.render.y - pcHeight/2, pcHeight, pcHeight, 8);
                    ctx.fill();
                    ctx.closePath();

                    continue;
                }

                if(row[i] === true){
                    row[i] = this.generateEnemyPc(type, i, pcHeight);
                    if(row[i] === false){
                        row[i] = true;
                    } else {
                        row[i].render.x = pcX;
                        row[i].render.y = pcY;
                    }   
                }

                if(row[i] === true) continue;

                if(highestX < row[i].render.x){
                    highestX = row[i].render.x;
                }

                // draw pc
                const pc = row[i];
                pc.x = pcX;
                pc.y = pcY;
                pc.draw();
            }

            this.currentY += rowHeight;
        }

        // if(this.currentY > 365 && this.h === 365){
        // }

        this.scrollExcess = {
            x: highestX - this.w - pcHeight / 2,
            y: this.currentY - this.y - this.h + pcHeight / 2
        };
        this.scrollExcess.x = Math.max(this.scrollExcess.x, 0);
        this.scrollExcess.y = Math.max(this.scrollExcess.y, 0);
        
        ctx.restore();
    }
    drawRowStatBoxes(){
        const hoveringOverMenu = mouseInBox({x: mouse.canvasX, y: mouse.canvasY}, {...this.inventorySpace, h: this.inventorySpace.h - (this.horizontalScrollBarEnabled === true ? 20 : 0)});
        // drawing stats boxes in another loop
        for(let type in this.rows){
            const row = this.rows[type];
            for(let i = 0; i < row.length; i++){
                if(row[i] === false || row[i] === true) continue;

                const pc = row[i];

                if(pc.petals[0].angleVel === undefined){
                    pc.petals[0].angleVel = Math.random() < 0.0001 ? 0.01 : ((Math.random())**1.5-0.5) * 0.002;
                }
                if(hoveringOverMenu && mouseInBox({x: mouse.canvasX, y: mouse.canvasY}, {x: pc.render.x - pc.w/2 - this.scrollExcess.x * this.scroll.render.x, y: pc.render.y - pc.h/2 - this.scrollExcess.y * this.scroll.render.y, w: pc.w, h: pc.h}) === true){
                    pc.petals[0].isHovered = true;
                    pc.petals[0].angle += 0.02 * dt / (1000 / 120) * Math.sign(pc.petals[0].angleVel);
                    pc.petals[0].lastIsHovered = true;
                } else {
                    pc.petals[0].lastIsHovered = false;
                    pc.petals[0].isHovered = false;
                }
                pc.petals[0].angle += pc.petals[0].angleVel * dt;
                // ctx.translate(pc.render.x, pc.render.y);
                const enemy = pc.petals[0];
                const last = {
                    x: enemy.x,
                    y: enemy.y,
                    render: {
                        x: enemy.render.x,
                        y: enemy.render.y
                    },
                    // radius: enemy.radius
                }
                enemy.render.x = enemy.x = pc.render.x - this.scrollExcess.x * this.scroll.render.x;
                enemy.render.y = enemy.y = pc.render.y - this.scrollExcess.y * this.scroll.render.y;
                enemy.drawStatsBox(undefined, true);

                // enemy.radius = last.radius;
                enemy.x = last.x;
                enemy.y = last.y;
                enemy.render.x = last.render.x;
                enemy.render.y = last.render.y;
            }
        }
    }
    regenerateMobs(es){
        this.horizontalScrollBarEnabled = false;
        const biomeTypes = biomeEnemyMap[biomeManager.getCurrentBiomeData().current];
        let rareBiomeTypes = rareBiomeEnemyMap[biomeManager.getCurrentBiomeData().current];
        let secretBiomeTypes = secretBiomeEnemyMap[biomeManager.getCurrentBiomeData().current];
        if (!rareBiomeTypes){
            rareBiomeTypes = [];
        }
        if (!secretBiomeTypes){
            secretBiomeTypes = [];
        }
        
        this.rows = {};
        for(let key in es){
            if(biomeTypes.includes(key) || rareBiomeTypes.includes(key) || secretBiomeTypes.includes(key) || ['Square', 'Pentagon', 'Hexagon'].includes(key)){
                this.addRow(key, es[key]);
            }
            
        }
    }
    addRow(type, raritiesEnabled){
        this.rows[type] = [];
        for(let i = 0; i < raritiesEnabled.length; i++){
            if(raritiesEnabled[i] === true){
                this.rows[type][i] = true;
                if(i > 8) this.horizontalScrollBarEnabled = true;
            } else {
                this.rows[type][i] = false;
            }
        }
    }
    generateEnemyPc(type, rarity, dimensions){
        const radius = 200//Math.random() < 0.0001 ? 360 : Math.sqrt(menuEnemyIncrementRadii[Math.floor(Math.random() * menuEnemyIncrementRadii.length)] * (Math.random() * 0.1 + 0.95)) * 8.7;
             
        const enemy = new Enemy({
            x: 0,
            y: 0,
            radius,
            hp: 100,
            maxHp: 100,
            id: Math.random(),
            type,
            rarity,
            angle: Math.random() * Math.PI * 2,
            toRenderUi: false,
            isMenuEnemy: true
        })
        enemy.x = enemy.render.x = enemy.y = enemy.render.y = 0;
        enemy.radius = enemy.render.radius = 14;

        enemy.angle = -Math.PI / 4

        const stats = Stats.enemies[type];
        const scalars = enemyRarityScalars[rarity];

        if(scalars === undefined || stats === undefined) return false;

        stats.xp = scalars.xp;
        stats.health *= scalars.health;
        if (type == "Starfish") {
            stats.healing = Math.round(stats.health * 0.007 * 30 * 100) / 100 + "/s";
        }
        else if (type == "Brisingida") {
            stats.healing = Math.round(stats.health * 0.009 * 30 * 100) / 100 + "/s";
        }

        stats.damage *= scalars.damage;
        stats.detectionDistance = scalars.detectionDistance;
        stats.mass *= scalars.mass;

        return new PetalContainer([enemy], {
            x: 0,
            y: 0,
            w: dimensions,
            h: dimensions,
            toOscillate: false,
            amount: 1,
            petalStats: stats
        }, Math.random(), 1, 0)
    }

    updateScroll(scroll={x:0,y:0}, {mouseX, mouseY}){
        if(mouseInBox({x: mouseX, y: mouseY}, this.dimensions) === false){
            return;
        }

        this.scroll.y += scroll.y / this.scrollExcess.y / 3;
    }
}

const mobGallery = new MobGallery();