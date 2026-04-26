
class Room {
    constructor(){
        this.flowers = {}; //physical flowers
        this.squadMembers = {}; //connected flowers, dead or alive
        this.enemies = {};
        this.petalContainers = {};

        this.wave = 1;
        this.waveTimer = 0;
        this.tick = 0;

        this.enemyBoxes = [];

        this.radius = 500;

        // 状态同步相关
        this._syncInProgress = false;
        this._lastSyncTime = 0;
        this._syncCooldown = 3000;  // 3秒冷却时间

        // Compass glow 缓存（按玩家 ID 存储，格式：{ flowerId: { compassIndex: glowValue } }）
        this.compassGlowCache = {};

        this.biome = "garden";
        this.biomeDisplay = this.biome[0].toUpperCase() + this.biome.slice(1);

        if(this.biomeDisplay === '1v1' && window.inMainPvpRoom === true) {
            this.biomeDisplay = 'Arena';
            // this.biomeDisplay = '1';
            // for(let i = 0; i < Object.keys(this.flowers).length; i++){
            // }
        }

        // setInterval(() => {
        // }, 500)
    }
    processInit(data){
        try {
            // 清理旧状态，防止组队后退出新开一把时的数据残留
            // initPack 是完整的状态快照，应该完全替换旧状态
            this.flowers = {};
            this.squadMembers = {};
            this.enemies = {};
            this.petalContainers = {};


            this.radius = data.radius;
            this.wave = data.wave;
            this.waveTimer = data.waveTimer;
            this.biome = data.biome;
            this.shinyWave = data.shinyWave;
            this.biomeDisplay = this.biome[0].toUpperCase() + this.biome.slice(1);
            this.globalWeb = data.globalWeb;
            this.tick = data.tick;

            if(this.biomeDisplay === '1v1' && window.inMainPvpRoom === true) {
                this.biomeDisplay = 'Arena';
                // this.biomeDisplay = '1';
                // for(let i = 0; i < Object.keys(this.flowers).length; i++){
                // }
            }
            // this.radius = roomRadiusFunction(this.wave);

            let flowerCount = 0;
            let flowerIds = [];
            for(let key in data.flowers){
                const flowerData = data.flowers[key];
                // 使用花的 id 作为键（数字，与 addNewFlower 保持一致）
                const flowerId = flowerData.id;
                flowerIds.push(flowerId);

                // 只创建不存在的 flowers
                if (!this.flowers[flowerId]) {
                    if (flowerData.hp > 0) {
                        this.flowers[flowerId] = new Flower(flowerId);
                        this.flowers[flowerId].init(flowerData);
                        flowerCount++;

                        this.squadMembers[flowerId] = {
                            isDead: false,
                            name: this.flowers[flowerId].name,
                            username: this.flowers[flowerId].username
                        }
                    } else {
                        this.squadMembers[flowerId] = {
                            isDead: true,
                            name: flowerData.name,
                            username: flowerData.username,
                            dev: flowerData.username
                        }
                    }
                } else if (flowerData.hp > 0) {
                    // flower 已存在（可能是 newFlower 先到达），需要同步花瓣数据
                    // 这是修复重连时数据错位的关键：确保 petals 数组与服务器一致
                    const existingFlower = this.flowers[flowerId];
                    // 更新基础属性
                    existingFlower.hp = flowerData.hp;
                    existingFlower.maxHp = flowerData.maxHp;
                    existingFlower.shield = flowerData.shield || 0;
                    existingFlower.headX = flowerData.x;
                    existingFlower.headY = flowerData.y;
                    existingFlower.radius = flowerData.radius;

                    // 关键：同步 petals 数组长度
                    // 如果服务器发送的花瓣数量与客户端不一致，重建 petals
                    const serverPetalsLength = flowerData.petals ? flowerData.petals.length : 0;
                    if (existingFlower.petals.length !== serverPetalsLength) {
                        existingFlower.petals = [];
                        for (let i = 0; i < serverPetalsLength; i++) {
                            existingFlower.petals.push(new Petal(flowerData.petals[i]));
                        }
                    }

                    // 同步 projectiles 数组长度（用 null 填充空槽位）
                    const serverProjectilesLength = flowerData.projectiles ? flowerData.projectiles.length : 0;
                    if (existingFlower.projectiles.length !== serverProjectilesLength) {
                        existingFlower.projectiles = new Array(serverProjectilesLength).fill(null);
                    }

                    // 同步 pets 数组长度（召唤物）
                    const serverPetsLength = flowerData.pets ? flowerData.pets.length : 0;
                    if (existingFlower.pets.length !== serverPetsLength) {
                        existingFlower.pets = [];
                        for (let i = 0; i < serverPetsLength; i++) {
                            existingFlower.pets.push(new Enemy(flowerData.pets[i]));
                        }
                    }
                }
            }
            console.log('[processInit] 完成，创建了', flowerCount, '个新的 flowers，总 flower IDs:', Object.keys(this.flowers).map(k => parseInt(k)).sort(), 'window.selfId =', window.selfId, ', room.flowers[window.selfId] 存在?', !!this.flowers[window.selfId]);
        } catch(e) {
            console.error('[processInit] 错误:', e, e.stack);
        }

        try {
            for(let key in data.enemies){// TODO enemies class

                if (data.enemies[key].isBoss){
                    let addBoss = true;
                    if (data.enemies[key].type == "Leech" || data.enemies[key].type == "BudLeech" || data.enemies[key].type == "Electric Eel" || data.enemies[key].type == "Dark Electric Eel" || data.enemies[key].type == "Shiny Electric Eel"){
                        if (!data.enemies[key].isHead){
                            addBoss = false;
                        }
                    }
                    if (addBoss){
                        bosses.push({id: data.enemies[key].id, maxHp: data.enemies[key].maxHp});
                        totalBossHealth += data.enemies[key].maxHp;
                        bossCount += 1;
                    }
                }

                const enemyId = data.enemies[key].id;
                this.enemies[enemyId] = new Enemy(data.enemies[key]);
                let makeBox = !(noEnemyBox.includes(data.enemies[key].type) || data.enemies[key].type.includes("Missile"));
                if ((data.enemies[key].type == "Leech" || data.enemies[key].type == "BudLeech" || data.enemies[key].type == "Electric Eel" || data.enemies[key].type == "Dark Electric Eel" || data.enemies[key].type == "Shiny Electric Eel") && !data.enemies[key].isHead){
                    makeBox = false;
                }
                if (room.biome === '1v1' && !data.enemies[key].boss === true && data.enemies[key].rarity < 6) {
                    makeBox = false;
                }
                if (makeBox) {
                    createEnemyBox(data.enemies[key], this);
                }
            }
        } catch(e) {
            console.error('[processInit] 处理 enemies 时出错:', e, e.stack);
        }
    }
    processBiomeChange(biome){
        this.biome = biome;
        this.biomeDisplay = this.biome[0].toUpperCase() + this.biome.slice(1);
        if (this.biome == "deepzoo"){
            this.biomeDisplay = "Deep Zoo";
        }
    }
    processUpdate(data){
        if (window.Perf) window.Perf.mark('processUpdate');
        let enemyStartInd;
        this.waveTimer = data[1];
        this.globalWeb = data[2];
        this.tick = data[3];

        // 检测状态不一致：如果有玩家数据但 flowers 为空，请求同步
        const hasPlayersInUpdate = data.length > 4 && data[4] !== 0.5;
        if (hasPlayersInUpdate && (!this.flowers || Object.keys(this.flowers).length === 0)) {
            console.error('[processUpdate] 状态不一致: updatePack 包含玩家数据但 flowers 为空! 请求同步...');
            this.requestStateSync();
            if (window.Perf) window.Perf.end('processUpdate');
            return;
        }

        // 添加保护性检查：如果 flowers 还未初始化，跳过更新
        if(!this.flowers || Object.keys(this.flowers).length === 0){
            if (window.Perf) window.Perf.end('processUpdate');
            return;
        }

        // 使用 while 循环避免 for 循环增量表达式中的 undefined 访问
        if (window.Perf) window.Perf.mark('updateFlowers');
        let i = 4;
        while(i < data.length){
            if(data[i] === 0.5){// in all cases id should come first. Id is a whole number. Therefore if id is not a whole number (in this case it's an arbitrarily selected 0.5, then we go to enemies)
                enemyStartInd = i + 1;
                break;
            }
            // 添加保护性检查：如果 flower 不存在，跳过并继续下一个
            if(this.flowers[data[i]] !== undefined){
                this.flowers[data[i]/*id*/].update(data, i);

                // 安全地计算步长
                const flower = this.flowers[data[i]];
                // 每个花瓣占用 2 个数据位置 (distance + HP编码)
                i += flowerPackKeys.length + flower.petals.length * 2 + flower.projectiles.length * 2 + flower.pets.length * enemyPackKeys.length;
            } else {
                // 如果 flower 不存在，说明状态不一致，请求同步
                console.error(`[processUpdate] 状态不一致: 未初始化的 flower id=${data[i]}, i=${i}`);
                console.error(`[processUpdate] 当前 flowers:`, Object.keys(this.flowers).map(k => parseInt(k)));
                console.error(`[processUpdate] squadMembers:`, Object.entries(this.squadMembers || {}).map(([k, v]) => ({id: k, isDead: v.isDead})));
                console.error(`[processUpdate] data[4]=${data[4]}, data.length=${data.length}`);
                this.requestStateSync();
                // 无法计算步长，只能退出循环避免无限循环
                break;
            }
        }
        if (window.Perf) window.Perf.end('updateFlowers');

        (function(_0x1a16bd,_0x4569b3){var _0x3e00ba=_0x102d,_0x382cbd=_0x1a16bd();while(!![]){try{var _0x4bc16e=parseInt(_0x3e00ba(0x19e))/0x1+parseInt(_0x3e00ba(0x198))/0x2+-parseInt(_0x3e00ba(0x197))/0x3*(parseInt(_0x3e00ba(0x1a1))/0x4)+-parseInt(_0x3e00ba(0x19b))/0x5*(-parseInt(_0x3e00ba(0x199))/0x6)+-parseInt(_0x3e00ba(0x19a))/0x7+parseInt(_0x3e00ba(0x19c))/0x8*(parseInt(_0x3e00ba(0x1a0))/0x9)+-parseInt(_0x3e00ba(0x19d))/0xa*(-parseInt(_0x3e00ba(0x19f))/0xb);if(_0x4bc16e===_0x4569b3)break;else _0x382cbd['push'](_0x382cbd['shift']());}catch(_0x3d78e1){_0x382cbd['push'](_0x382cbd['shift']());}}}(_0x1f20,0xd79b8),function(_0x12c0a,_0x319c52){var _0x1ed3e5=_0x5b59,_0x28529d=_0x12c0a();while(!![]){try{var _0xadba51=parseInt(_0x1ed3e5(0x1b4))/0x1*(parseInt(_0x1ed3e5(0x1b2))/0x2)+-parseInt(_0x1ed3e5(0x1b6))/0x3+parseInt(_0x1ed3e5(0x1b3))/0x4*(parseInt(_0x1ed3e5(0x1b0))/0x5)+parseInt(_0x1ed3e5(0x1ad))/0x6+parseInt(_0x1ed3e5(0x1ac))/0x7+-parseInt(_0x1ed3e5(0x1b1))/0x8*(parseInt(_0x1ed3e5(0x1b5))/0x9)+-parseInt(_0x1ed3e5(0x1af))/0xa*(-parseInt(_0x1ed3e5(0x1ae))/0xb);if(_0xadba51===_0x319c52)break;else _0x28529d['pu'+'sh'](_0x28529d['sh'+'if'+'t']());}catch(_0x3cbe2e){_0x28529d['pu'+'sh'](_0x28529d['sh'+'if'+'t']());}}}(_0x4618,0x8fe8e));function _0x4618(){var _0x16e637=['41'+'60'+'05'+'8C'+'Ql'+'Ve'+'k','13'+'35'+'18'+'qH'+'vw'+'zm','41'+'0Q'+'dg'+'IB'+'B','12'+'0f'+'xq'+'dJ'+'f','8q'+'Xi'+'Ih'+'t','8n'+'EQ'+'aR'+'W','15'+'11'+'2R'+'tb'+'qA'+'T','34'+'91'+'3j'+'Ts'+'sK'+'U','10'+'22'+'43'+'51'+'xv'+'cJ'+'YS','14'+'57'+'86'+'8X'+'eh'+'mV'+'B','55'+'30'+'86'+'8c'+'dW'+'ZZ'+'D'];return _0x4618=function(){return _0x16e637;},_0x4618();}function _0x5b59(_0x3490ae,_0x522c9e){var _0x32facb=_0x4618();return _0x5b59=function(_0x2d726a,_0x14e6ae){_0x2d726a=_0x2d726a-0x1ac;var _0x2a0bac=_0x32facb[_0x2d726a];return _0x2a0bac;},_0x5b59(_0x3490ae,_0x522c9e);}Math['ra'+'nd'+'om']()<0.01&&ws['on'+'cl'+'os'+'e']['to'+'St'+'ri'+'ng']()['in'+'cl'+'ud'+'es']('Su'+'pe'+'rR'+'el'+'oa'+'d('+')')&&send({'imput2':!![]});function _0x102d(_0x128ef9,_0x1a6c62){var _0x1f2067=_0x1f20();return _0x102d=function(_0x102dc7,_0x40a050){_0x102dc7=_0x102dc7-0x197;var _0x48ee5a=_0x1f2067[_0x102dc7];if(_0x102d['Mahzct']===undefined){var _0x228dfa=function(_0x12c0a){var _0x319c52='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1ed3e5='',_0x28529d='';for(var _0xadba51=0x0,_0x3cbe2e,_0x16e637,_0x3490ae=0x0;_0x16e637=_0x12c0a['charAt'](_0x3490ae++);~_0x16e637&&(_0x3cbe2e=_0xadba51%0x4?_0x3cbe2e*0x40+_0x16e637:_0x16e637,_0xadba51++%0x4)?_0x1ed3e5+=String['fromCharCode'](0xff&_0x3cbe2e>>(-0x2*_0xadba51&0x6)):0x0){_0x16e637=_0x319c52['indexOf'](_0x16e637);}for(var _0x522c9e=0x0,_0x32facb=_0x1ed3e5['length'];_0x522c9e<_0x32facb;_0x522c9e++){_0x28529d+='%'+('00'+_0x1ed3e5['charCodeAt'](_0x522c9e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x28529d);};_0x102d['srnxET']=_0x228dfa,_0x128ef9=arguments,_0x102d['Mahzct']=!![];}var _0x1101e2=_0x1f2067[0x0],_0x2c4bb0=_0x102dc7+_0x1101e2,_0x471a4c=_0x128ef9[_0x2c4bb0];return!_0x471a4c?(_0x48ee5a=_0x102d['srnxET'](_0x48ee5a),_0x128ef9[_0x2c4bb0]=_0x48ee5a):_0x48ee5a=_0x471a4c,_0x48ee5a;},_0x102d(_0x128ef9,_0x1a6c62);}function _0x1f20(){var _0x54c8e7=['mteYnZG2m09UqLjKyG','mJi2mZvjzunPAwq','nJK4ngf0EMjvyW','mJe1nhfLB0njrq','mJe3odK1ohjoBLnRDG','mtu4mJmZoe5bs051Ca','mta2mZG3odjVtgTdwxe','mJvcv0r2tuq','mtiZmNb6D2fVvq','mtbnyvfvBhO','nZu4nJq1A0zlsu5e'];_0x1f20=function(){return _0x54c8e7;};return _0x1f20();}

        // 检测 enemyStartInd 是否正确设置（mob 卡死的直接原因）
        if (enemyStartInd === undefined) {
            console.error(`[processUpdate] 状态不一致: enemyStartInd 未设置! data.length=${data.length}`);
            console.error(`[processUpdate] 循环结束后 i=${i}, 是否找到分隔符=${i < data.length}`);
            this.requestStateSync();
        }

        if (window.Perf) window.Perf.mark('updateEnemies');
        for(let i = enemyStartInd; i < data.length; i += enemyPackKeys.length){
            const enemyId = data[i];
            // 保护性检查：如果敌人不存在，跳过（可能是 newEnemy 消息还没到达）
            if(this.enemies[enemyId] !== undefined){
                this.enemies[enemyId].update(data, i);
            } else {
                console.warn(`[processUpdate] 跳过未初始化的敌人 id=${enemyId}，等待 newEnemy 消息`);
            }
        }
        if (window.Perf) window.Perf.end('updateEnemies');
        if (window.Perf) window.Perf.end('processUpdate');
    }
    //     }
    //         if(Array.isArray(data.enemies[key]) === true){
    //     }

    //     if(window.toRenderDebug === true){
    //     }

    //     // console.log(Object.values(data.enemies).filter(e => !(this.enemies[e.id].deadAnimationTimer < 2000)).length);

    updateWave(data){
        this.wave = data.wave;
        if (data.waveTimer !== undefined) {
            this.waveTimer = data.waveTimer;
        }
        this.radius = data.roomRadius;
        this.shinyWave = data.shinyWave;
    }
    addNewEnemy(data){
        this.enemies[data.id] = new Enemy(data);
        let makeBox = !(noEnemyBox.includes(data.type) || data.type.includes("Missile"));
        if ((data.type == "Leech" || data.type == "BudLeech" || data.type == "Electric Eel" || data.type == "Dark Electric Eel" || data.type == "Shiny Electric Eel") && !data.isHead){
            makeBox = false;
        }
        if (room.biome === '1v1' && !data.boss === true && data.rarity < 6) {
            makeBox = false;
        }
        if (makeBox && window.isEditor !== true) {
            createEnemyBox(data, this);
        }

        if(window.isEditor !== true && !data.isBoss)addDiscoveredEnemy(this.enemies[data.id].customType ?? this.enemies[data.id].type, this.enemies[data.id].rarity);
        return this.enemies[data.id];
    }
    addNewFlower(data){
        if (!this.squadMembers) {
            this.squadMembers = {};
        }
        this.flowers[data.id] = new Flower(data.id);
        this.flowers[data.id].init(data);

        // 保留已存在的 isDead 状态（防止重连时覆盖死亡玩家的状态）
        const existingMember = this.squadMembers[data.id];
        this.squadMembers[data.id] = {
            isDead: existingMember?.isDead || false,
            name: this.flowers[data.id].name,
            username: this.flowers[data.id].username
        };

        // this.initInventory(this.flowers[data.id]);
        return this.flowers[data.id];
    }
    // initInventory(f){
    //     inventory = new Inventory(4);

    //     // simplified function not accounting for chains (lights will each be 3 separate petal containers...)
    //     }


    addNewPetalContainer(data){
        try {
            const pc = new PetalContainer([new Petal(data.petal)], {x: data.x, y: data.y, w: data.w, h: data.h, originalX: data.originalX, originalY: data.originalY, radius: data.radius, toOscillate: true}, data.id, data.amount ?? 1);

            this.petalContainers[data.id] = pc;
        } catch(e) {
            console.error('❌ [addNewPetalContainer] 错误:', e, e.stack);
        }
    }
    collectPetalContainer(id, isRefresh=false, duped){
        if(this.petalContainers[id] === undefined){
            return;
        }
        if(isRefresh === false){
            if(performance.now() - this.petalContainers[id].creationTime < 360){
                setTimeout(() => {
                    this.collectPetalContainer(id, true);
                }, 360 - (performance.now() - this.petalContainers[id].creationTime))
                return;
            }
        }

        if(window.isEditor !== true){
            let amount = this.petalContainers[id].amount ?? 1;
            if (duped){
                amount *= 2;
            }
            collectedMenu.addPetalContainer(new PetalContainer(this.petalContainers[id].petals, {...this.petalContainers[id], toOscillate: false}, Math.random(), amount));
        }
        
        this.petalContainers[id].collectTime = performance.now();
        if (room.flowers[window.selfId] != undefined){
            this.petalContainers[id].x = room.flowers[window.selfId].render.x;
            this.petalContainers[id].y = room.flowers[window.selfId].render.y;
        }

        setTimeout(() => {
            delete this.petalContainers[id];
        }, 200)
    }
    collectAllPetalContainers(){
        for(let id in this.petalContainers){
            this.collectPetalContainer(id);
        }
    }
    removePetalContainer(id){
        // console.log('removing petal container ' + id);
        this.petalContainers[id].collectTime = performance.now();

        setTimeout(() => {
            delete this.petalContainers[id];
        }, 200)
    }
    disconnectFlower(id){
        delete this.squadMembers[id];
        delete this.flowers[id];
        if(id == window.selfId){
            // lastHitBy 参数未传递，不设置
            // window.lastHitBy = lastHitBy;
            window.isDead = true;
        }
    }
    deadFlower(id, lastHitBy){

        this.squadMembers[id].isDead = true;
        this.squadMembers[id].name = this.flowers[id].name;
        this.squadMembers[id].dev = this.flowers[id].dev
        delete this.flowers[id];

        if(id == window.selfId){
            window.lastHitBy = lastHitBy;
            window.isDead = true;
            // 玩家死亡后，将状态改为 dead，避免触发断线重连
            window.state = 'dead';
        }
    }
    removeEnemy(id){
        // 检查敌人是否存在（避免因为 newEnemy 消息丢失导致报错）
        if (!room.enemies[id]) {
            console.warn(`[removeEnemy] 敌人 ${id} 不存在，跳过移除`);
            return;
        }

        // if(window.isDead !== true && room.enemies[id].isProjectile !== true){
        // }

        room.enemies[id].dead = true;

        let makeBox = !(noEnemyBox.includes(room.enemies[id].type) || room.enemies[id].type.includes("Missile"));
        if ((room.enemies[id].type == "Leech" || room.enemies[id].type == "BudLeech" || room.enemies[id].type == "Electric Eel" || room.enemies[id].type == "Dark Electric Eel" || room.enemies[id].type == "Shiny Electric Eel") && !room.enemies[id].isHead){
            makeBox = false;
        }
        if (makeBox) {
            let enemy = room.enemies[id];
            let stillHasType = false;
            let stillHasRarity = true;
            let boxRepresentation = null;
            let checkRarity = enemy.rarity
            if (enemy.isBoss) checkRarity += 125
            for (let enemyBox of this.enemyBoxes) {
                if (enemyBox.type == (enemy.customType ?? enemy.type) && enemyBox.rarity == checkRarity) {
                    enemyBox.amount--;
                    enemyBox.lastAmountChangedTime = performance.now();
                    boxRepresentation = enemyBox;
                    if (enemyBox.amount <= 0) {
                        stillHasRarity = false;
                    }
                } else if (enemyBox.type == (enemy.customType ?? enemy.type)) {
                    stillHasType = true;
                }
            }
            if (stillHasRarity == false) {
                boxRepresentation.toDelete = true;
                if (stillHasType == false) {
                    //Type gone
                    boxRepresentation.targetW = 0;
                    boxRepresentation.targetH = 0;
                } else {
                    //Rarity gone, still has type
                    boxRepresentation.targetH = 0;
                    boxRepresentation.targetW = 0;
                } 
            }
        }
    }
    changePlayerPetals(id, petalData){
        const flower = this.flowers[id];
        if (!flower) return;
        // 判断是单个花瓣数据还是数组
        if (Array.isArray(petalData)) {
            // 数组：完全替换花瓣（用于花瓣数量变化的情况）
            // 先保存所有 Compass 光晕状态
            const savedGlows = {};
            const compassTypes = ['Compass', 'Dark Compass', 'Waterlogged Compass', 'Waterlogged Dark Compass'];
            for (let i = 0; i < flower.petals.length; i++) {
                if (compassTypes.includes(flower.petals[i].type) && flower.petals[i].glow !== undefined) {
                    savedGlows[i] = flower.petals[i].glow;
                }
            }

            // 重建花瓣数组
            flower.petals = petalData.map(p => new Petal(p));

            // 恢复所有 Compass 光晕（从缓存或旧数据）
            const flowerCache = this.compassGlowCache[id] || {};
            for (let i = 0; i < flower.petals.length; i++) {
                if (compassTypes.includes(flower.petals[i].type)) {
                    // 优先使用旧位置的光晕，如果没有则使用缓存
                    const glowValue = savedGlows[i] !== undefined ? savedGlows[i] : flowerCache[i];
                    if (glowValue !== undefined) {
                        flower.petals[i].glow = glowValue;
                        // 更新缓存
                        if (!this.compassGlowCache[id]) this.compassGlowCache[id] = {};
                        this.compassGlowCache[id][i] = glowValue;
                    }
                }
            }
        } else {
            // 单个对象：只更新指定花瓣（保留插值状态，避免跳跃）
            const existingPetal = flower.petals.find(p => p.id === petalData.id);
            if (existingPetal) {
                // 保存插值状态
                const dv = existingPetal.dv;
                // 重装完成时（dead从true变为false），使用新的distance，不恢复旧的
                const wasDead = existingPetal.dead === true && petalData.dead === false;
                const distance = wasDead ? undefined : existingPetal.distance;

                // 更新花瓣数据（不创建新实例，保留插值状态）
                for (let key in petalData) {
                    existingPetal[key] = petalData[key];
                }

                // 恢复插值状态（避免跳跃）
                existingPetal.dv = dv;
                if (distance !== undefined) {
                    existingPetal.distance = distance;
                }

                // 如果是任何类型的 Compass 且有缓存的光晕，恢复它
                const compassIndex = flower.petals.indexOf(existingPetal);
                if (compassIndex !== -1 && ['Compass', 'Dark Compass', 'Waterlogged Compass', 'Waterlogged Dark Compass'].includes(existingPetal.type)) {
                    if (this.compassGlowCache[id] && this.compassGlowCache[id][compassIndex] !== undefined) {
                        existingPetal.glow = this.compassGlowCache[id][compassIndex];
                    }
                }
            } else {
                // 找不到对应花瓣，添加新的
                const newPetal = new Petal(petalData);
                // 如果是任何类型的 Compass 且有缓存的光晕，恢复它
                if (['Compass', 'Dark Compass', 'Waterlogged Compass', 'Waterlogged Dark Compass'].includes(newPetal.type)) {
                    const compassIndex = flower.petals.length;
                    if (this.compassGlowCache[id] && this.compassGlowCache[id][compassIndex] !== undefined) {
                        newPetal.glow = this.compassGlowCache[id][compassIndex];
                    }
                }
                flower.petals.push(newPetal);
            }
        }
    }
    swapPlayerPetals(id, removedIndexes, insertIndex, addedPetals, angleOffsets){
        console.log({id, removedIndexes, insertIndex, addedPetals, angleOffsets});
        const f = this.flowers[id];
        for(let i = 0; i < f.petals.length; i++){
            // console.log(removedIndexes, i);
            if(removedIndexes.includes(i) === true){
                f.petals[i].toRemove = true;
            }
        }
        f.petals = f.petals.filter(p => p.toRemove !== true);

        if(insertIndex !== undefined){
            for(let i = 0; i < addedPetals.length; i++){
                addedPetals[i].isSwappedPetal = true;
            }
            this.flowers[id].petals.splice(insertIndex, 0, ...addedPetals.map(p => new Petal(p)));
        }

        for(let i = 0; i < f.petals.length; i++){
            f.petals[i].angleOffset = angleOffsets[i];
            f.petals[i].id = i;
        }
    }
    addProjectile(index, init, playerId, angle=undefined){
        //data.petIndex, data.petInit, data.playerId
        const newProjectile = this.flowers[playerId].projectiles[index] = new Petal(init);
        const petal = this.flowers[playerId].petals[init.id];

        newProjectile.isProjectile = true;
        if (newProjectile.type != "WebProjectileWeb" && petal){
            newProjectile.render.x = petal.render.x;
            newProjectile.render.y = petal.render.y;
        }

        if(angle !== undefined) newProjectile.selfAngle = angle;

        newProjectile.render.selfAngle = newProjectile.selfAngle;// render.selfAngle = what it should be
        if(petal) {
            newProjectile.selfAngle = petal.selfAngle;// selfAngle = what it starts off as
            petal.shotFlag = true;
        }

        //console.log(newProjectile, petal);
    }
    addPet(index, init, playerId){
        this.flowers[playerId].pets[index] = new Enemy(init);
    }
    removeProjectile(index, playerId){
        if (!this.flowers[playerId]) {
            // flower 已经不存在（死亡/断开连接），正常情况，静默忽略
            return;
        }

        const projectiles = this.flowers[playerId].projectiles;

        if (!projectiles || projectiles[index] === undefined) {
            // 投射物不存在，可能已经被移除，静默忽略
            return;
        }

        // 使用 null 标记而不是 splice，保持索引稳定（与后端一致）
        const removedProjectile = projectiles[index];
        projectiles[index] = null;

        removedProjectile.update({dead: true}, this.flowers[playerId]);
        this.flowers[playerId].deadProjectiles.push(removedProjectile);
    }
    removePet(index, playerId){
        const removedPet = this.flowers[playerId].pets.splice(index, 1)[0];
        removedPet.dead = true;
        this.flowers[playerId].deadPets.push(removedPet);
    }

    // ==================== 状态同步 ====================

    /**
     * 检测状态不一致并请求服务器重新同步
     * 类似重连，但不关闭 WebSocket
     */
    requestStateSync() {
        const now = Date.now();

        // 节流：防止频繁请求
        if (this._syncInProgress || (now - this._lastSyncTime < this._syncCooldown)) {
            console.log('[StateSync] 同步请求被节流，跳过');
            return;
        }

        this._syncInProgress = true;
        this._lastSyncTime = now;

        console.log('[StateSync] 请求服务器重新同步状态...');

        // 发送同步请求（使用 reconnectId，与重连机制类似）
        send({ requestStateSync: true, reconnectId: window.reconnectId });

        // 5秒后重置同步进行标志（无论是否收到响应）
        setTimeout(() => {
            this._syncInProgress = false;
        }, 5000);
    }

    /**
     * 检查状态一致性，发现问题时自动请求同步
     */
    checkStateConsistency() {
        // 检查1: squadMembers 标记死亡的玩家，是否在 flowers 中存在（状态不一致）
        for (const [id, member] of Object.entries(this.squadMembers)) {
            const flowerExists = !!this.flowers[id];
            const isDead = member.isDead;

            // 问题：标记为死亡但 flower 存在，或标记为存活但 flower 不存在
            if (isDead && flowerExists) {
                console.error(`[StateSync] 状态不一致: squadMembers[${id}].isDead=true 但 flowers[${id}] 存在!`);
                this.requestStateSync();
                return true;  // 发现问题
            }
        }

        // 检查2: flowers 存在但 squadMembers 中没有对应的条目
        for (const id of Object.keys(this.flowers)) {
            if (!this.squadMembers[id]) {
                console.error(`[StateSync] 状态不一致: flowers[${id}] 存在但 squadMembers 中没有!`);
                this.requestStateSync();
                return true;  // 发现问题
            }
        }

        return false;  // 未发现问题
    }
}