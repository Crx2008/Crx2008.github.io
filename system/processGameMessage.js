//.*$
function loadYouTubeAPI() {
    return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
            resolve(window.YT);
        } else {
            // Create global callback for when API is ready
            window.onYouTubeIframeAPIReady = () => resolve(window.YT);

            // Load script if not already loaded
            if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                document.head.appendChild(tag);
            }
        }
    });
}

// Function to play a jumpscare video
async function playJumpscare(videoId) {
    const YT = await loadYouTubeAPI();

    const player = new YT.Player(document.body.appendChild(document.createElement('div')), {
        height: '1',
        width: '1',
        videoId: videoId,
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            fs: 0
        },
        events: {
            onReady: (e) => e.target.playVideo()
        }
    });
}

// JUMPSCARE PURPOSES ^^
let popAudio;

let processGameMessageMap = {
    updatePack: (data, me, advanced) => {
        room.processUpdate(data);
    },
    weather: (data, me, advanced) => {
        // 天气系统消息
        console.log('🌤️ [Weather] 收到天气消息:', data);
        if (data.weather) {
            window.currentWeather = data.weather;
            console.log('🌤️ [Weather] 天气更新:', data.weather.name || data.weather.displayName);
        } else {
            // weather: null 表示清除天气
            window.currentWeather = null;
            console.log('🌤️ [Weather] 天气已清除');
        }
    },
    bossWave: (data, me, advanced) => {
        // Boss Wave 通知消息（已隐藏 UI 显示）
        // console.log('👑 [Boss Wave] 收到 Boss Wave 通知:', data);
        window.isBossWave = data.bossWave || false;
        window.bossId = data.bossId || null;
        window.bossType = data.bossType || null;
        // 如果有 bossId，检查 boss 是否已经在 bosses 数组中
        if (data.bossId) {
            const bossExists = bosses.some(b => b.id === data.bossId);
            if (bossExists) {
                // console.log('👑 [Boss Wave] Boss 已在追踪列表中, ID:', data.bossId);
            } else {
                // console.log('👑 [Boss Wave] Boss 尚未收到 newEnemy 消息, ID:', data.bossId, '等待后续消息...');
            }
        }
    },
    initPack: (data, me, advanced) => {
        const initPackData = data.initPack || data;
        window.reconnectTries = 20;

        // 检测是否需要隐藏UI（重连后首次收到 initPack 时菜单可能仍然可见）
        // 条件：菜单可见 或 当前状态不是 'game'
        const menuEl = document.querySelector('.menu');
        const shouldHideUI = menuEl && menuEl.style.display !== 'none';

        if (shouldHideUI) {
            // 隐藏菜单UI（与 enterGame() 中的逻辑一致）
            menuEl.style.display = "none";

            // 关闭背包界面
            globalInventory.fadeOut();
            mobGallery.fadeOut();

            // 显示聊天框
            if (window.isEditor !== true) {
                chatDiv.classList.remove('hidden');
            }

            // 设置状态为游戏
            window.state = "game";
        }

        if(window.isDead === true){
            deadMenu.unGameOver();
            window.isDead = false;
        }
        room.processInit(initPackData);
    },
    newEnemy: (data, me, advanced) => {
        // 提取实际的敌人数据（可能包装在 newEnemy 中）
        const enemyData = data.newEnemy || data;
        if (enemyData.isBoss){
            let addBoss = true;
            if (enemyData.type == "Leech" || enemyData.type == "BudLeech" || enemyData.type == "Electric Eel" || enemyData.type == "Dark Electric Eel" || enemyData.type == "Shiny Electric Eel"){
                if (!enemyData.isHead){
                    addBoss = false;
                }
            }
            if (addBoss){
                bosses.push({id: enemyData.id, maxHp: enemyData.maxHp});
                if (isNaN(totalBossHealth)){
                    totalBossHealth = 0;
                }
                totalBossHealth = totalBossHealth + enemyData.maxHp;
                bossCount += 1;
            }
        }
        room.addNewEnemy(enemyData);
    },
    // 批量生成敌人（一帧内多个新敌人打包发送）
    newEnemies: (data, me, advanced) => {
        for (const enemyData of data.newEnemies) {
            if (enemyData.isBoss){
                let addBoss = true;
                if (enemyData.type == "Leech" || enemyData.type == "BudLeech" || enemyData.type == "Electric Eel" || enemyData.type == "Dark Electric Eel" || enemyData.type == "Shiny Electric Eel"){
                    if (!enemyData.isHead){
                        addBoss = false;
                    }
                }
                if (addBoss){
                    bosses.push({id: enemyData.id, maxHp: enemyData.maxHp});
                    if (isNaN(totalBossHealth)){
                        totalBossHealth = 0;
                    }
                    totalBossHealth = totalBossHealth + enemyData.maxHp;
                    bossCount += 1;
                }
            }
            room.addNewEnemy(enemyData);
        }
    },
    newFlower: (data, me, advanced) => {
        const flowerData = data.newFlower || data;
        if(window.isDead === true && flowerData.id === window.selfId){
            deadMenu.unGameOver();
            window.isDead = false;
            window.state = 'game'; // 重置游戏状态，确保复活后功能正常
        }
        room.addNewFlower(flowerData);

        deadMenu.rematchRequested = deadMenu.hoveringOverRematchButton = false;
        delete window.hasWonPvp;
        delete window.canWinPvp;
    },
    newPetalContainer: (data, me, advanced) => {
        // 死亡玩家也能看到掉落物（但无法拾取）
        if (window.isDead === true) {
            room.addNewPetalContainer(data);
        } else if ((window.selfId !== null && room.flowers[window.selfId] !== undefined) || window.spectating == false) {
            room.addNewPetalContainer(data);
        } else if (window.spectating == true) {
            collectedMenu.addPetalContainer(new PetalContainer([new Petal(data.petal)], {x: data.x, y: data.y, w: data.w, h: data.h, originalX: data.originalX, originalY: data.originalY, radius: data.radius, toOscillate: false}, data.id, data.amount ?? 1))
        }
    },
    wave: (data, me, advanced) => {
        // 处理 boss wave 标志
        if (data.bossWave !== undefined) {
            window.isBossWave = data.bossWave;
            if (window.isBossWave) {
                console.log('👑 [Boss Wave] 收到 Boss Wave 通知');
            } else {
                // 不是 boss wave，清除旧的 boss 信息
                window.bossId = null;
                window.bossType = null;
            }
        }
        // 如果有 bossId，也保存下来（boss 创建后会通过独立消息发送）
        if (data.bossId !== undefined) {
            window.bossId = data.bossId;
        }
        room.updateWave(data);
    },
    disconnectFlower: (data, me, advanced) => {
        room.disconnectFlower(data.disconnectFlower);
    },
    deadFlower: (data, me, advanced) => {
        console.log('[deadFlower] 收到死亡消息:', data, ', window.selfId =', window.selfId, ', 类型:', typeof window.selfId);
        console.log('[deadFlower] 比较:', data.deadFlower, '==', window.selfId, '=', data.deadFlower == window.selfId);
        room.deadFlower(data.deadFlower, data.lastHitBy);
    },
    clientId: (data, me, advanced) => {
        window.selfId = data.clientId;
        window.reconnectId = data.reconnectId;
        room.enemies = {};
        room.enemyBoxes = [];
    },
    reconnectSuccess: (data, me, advanced) => {
        console.log('✅ [重连] 重连成功，gameState:', data.gameState);
        window.reconnectTries = 20;
        window.reconnecting = false;
        // 如果有游戏状态，恢复玩家的状态
        if (data.gameState && window.selfId !== null) {
            const me = room.flowers[window.selfId];
            if (me) {
                me.hp = data.gameState.hp;
                me.maxHp = data.gameState.maxHp;
                me.shield = data.gameState.shield || 0;
                me.x = data.gameState.x;
                me.y = data.gameState.y;
            }
            // 根据 HP 判断玩家是否死亡（在 initPack 可能重置 isDead 之后，重新设置正确的死亡状态）
            if (data.gameState.hp <= 0) {
                if (!window.isDead) {
                    console.log('💀 [重连] 玩家 HP 为 0，设置为死亡状态并进入观战模式');
                    window.isDead = true;
                    window.state = 'dead';
                    // 死亡玩家重连后直接进入观战模式（类似点击 Continue 后的状态）
                    deadMenu.acceptedDeath = true;
                    deadMenu.gameEnded = false;
                }
            } else {
                // 玩家存活，确保 isDead 为 false
                if (window.isDead) {
                    console.log('✅ [重连] 玩家 HP > 0，取消死亡状态');
                    window.isDead = false;
                    window.state = 'game';
                    deadMenu.acceptedDeath = false;
                    deadMenu.gameEnded = false;
                }
            }
        }
        // 如果需要返回菜单，但玩家已死亡，则停留在死亡界面
        if (data.backToMenu) {
            if (window.isDead === true) {
                // 玩家已死亡，停留在死亡界面，不返回大厅
                console.log('💀 [重连] 玩家已死亡，停留在死亡界面');
                window.state = 'dead';
            } else {
                console.log('🏠 [backToMenu] 返回菜单');
                window.state = 'menu';
                window.spectating = false;
                menuEnemiesInitialized = false;

                // 清除游戏定时器
                if (window.runInterval) {
                    clearInterval(window.runInterval);
                }

                // 重置 PixiJS 状态
                resetPixiJS();

                // 如果有背包数据，加载它（使用与 leaveGameAcknowledged 相同的逻辑）
                if (data.initInventory) {
                    // 先清空背包
                    globalInventory.petalContainers = {};
                    specialGlobalInventory.petalContainers = {};
                    craftingMenu.petalContainers = {};
                    craftingMenu.fillerPetalSlots = {};
                    craftingMenu.recalculateTypeIndexes();

                    // 初始化等级条
                    levelBar.init(data.initInventory.xp);
                    levelBar.calculateDimensions();

                    // 缓存特殊花瓣类型检查
                    const SPECIAL_PETAL_TYPES = new Set([
                        "Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact", "Chimera"
                    ]);

                    // 根据花瓣类型分配到不同的背包
                    for(let i = 0; i < data.initInventory.petals.length; i++){
                        const petalData = parsePetalData(data.initInventory.petals[i]);
                        const {x,y,w,h,originalX,originalY,radius} = petalData;
                        const pc = new PetalContainer(
                            [new Petal(petalData.petal)],
                            {x,y,w,h,originalX,originalY,radius,toOscillate:false,petalStats:petalData.petalStats,customBiome:petalData.customBiome},
                            petalData.id,
                            petalData.petalAmount,
                            petalData.attempt
                        );

                        // Token 花瓣特殊处理
                        if (petalData.petal.type === "Token" && petalData.petal.rarity === 0) {
                            shop.tokens += petalData.petalAmount;
                        }

                        // 根据类型分配到不同的背包
                        if (SPECIAL_PETAL_TYPES.has(pc.type)) {
                            specialGlobalInventory.addPetalContainer(pc, false, false);
                        } else {
                            globalInventory.addPetalContainer(pc, false, false);
                        }
                    }

                    // 移除装备槽中的花瓣
                    for(let key in menuInventory.topPetalContainers){
                        const pc = menuInventory.topPetalContainers[key];
                        if (SPECIAL_PETAL_TYPES.has(pc.type)) {
                            specialGlobalInventory.removeByRarityAndType(pc.rarity, pc.type);
                        } else {
                            globalInventory.removeByRarityAndType(pc.rarity, pc.type);
                        }
                    }

                    for(let key in menuInventory.bottomPetalContainers){
                        const pc = menuInventory.bottomPetalContainers[key];
                        if (SPECIAL_PETAL_TYPES.has(pc.type)) {
                            specialGlobalInventory.removeByRarityAndType(pc.rarity, pc.type);
                        } else {
                            globalInventory.removeByRarityAndType(pc.rarity, pc.type);
                        }
                    }

                    // 排序两个背包
                    for(let key in globalInventory.petalContainers){
                        if(key.endsWith("_map")) continue;
                        if(Array.isArray(globalInventory.petalContainers[key])){
                            globalInventory.petalContainers[key].sort((a,b)=>{
                                let aname = a.type;
                                let bname = b.type;
                                if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
                                if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0]?.customName;
                                return aname.localeCompare(bname);
                            });
                        }
                    }
                    for(let key in specialGlobalInventory.petalContainers){
                        if(key.endsWith("_map")) continue;
                        if(Array.isArray(specialGlobalInventory.petalContainers[key])){
                            specialGlobalInventory.petalContainers[key].sort((a,b)=>{
                                let aname = a.type;
                                let bname = b.type;
                                if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0]?.customName;
                                if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0]?.customName;
                                return aname.localeCompare(bname);
                            });
                        }
                    }

                    const petalSlotNumber = levelBar.getPetalSlotsNumber();
                    inventory.setPetalSlotsNumber(petalSlotNumber);
                    menuInventory.setPetalSlotsNumber(petalSlotNumber);

                    // 神器数据加载
                    if (data.initInventory.artifacts) {
                        specialGlobalInventory.loadArtifactData({
                            artifacts: data.initInventory.artifacts,
                            equippedArtifacts: data.initInventory.equippedArtifacts || [],
                            availableSkillPoints: data.initInventory.availableSkillPoints || 0,
                            lastArtifactResetTime: data.initInventory.lastArtifactResetTime
                        });
                    }

                    // 积分数据加载
                    if (data.initInventory.points !== undefined) {
                        shop.tokens = data.initInventory.points;
                    }

                    console.log('✅ [backToMenu] 背包数据已加载，花瓣数量:', data.initInventory.petals.length);
                }

                // 重置游戏状态
                window.selfId = null;
                squadUI = new SquadUI();
                closeSquadUI();
                deadMenu = new DeadMenu();
                room = new Room();
                collectedMenu = new CollectedMenu();
                bosses = [];
                totalBossHealth = 0;
                bossCount = 0;

                if(window.mobile === true){
                    mobileDiv.classList.add('hidden');
                }

                // 显示菜单
                const menuEl = document.querySelector('.menu');
                if (menuEl) {
                    menuEl.classList.remove('hidden');
                    menuEl.style.display = "";
                }
            }
            window.reconnecting = false;
        }
    },
    removeEnemy: (data, me, advanced) => {
        bosses = bosses.filter((id) => id.id !== data.removeEnemy)
        if (bosses.length === 0) {
            totalBossHealth = 0
            bossCount = 0;
        }
        room.removeEnemy(data.removeEnemy);
    },
    // 批量移除敌人（一帧内多个死亡敌人打包发送）
    removeEnemies: (data, me, advanced) => {
        for (const id of data.removeEnemies) {
            bosses = bosses.filter((boss) => boss.id !== id);
            room.removeEnemy(id);
        }
        if (bosses.length === 0) {
            totalBossHealth = 0;
            bossCount = 0;
        }
    },
    changePetals: (data, me, advanced) => {
        room.changePlayerPetals(data.id, data.changePetals);
    },
    xpUpdate: (data, me, advanced) => {
        // 更新玩家的 XP 和等级
        const update = data.xpUpdate;
        if (window.selfId === update.id) {
            // 使用 levelBar 来更新 XP
            levelBar.xp = update.xp;
            levelBar.level = levelPerXp(update.xp);
        }
    },
    swapPetals: (data, me, advanced) => {
        room.swapPlayerPetals(data.id, data.removedIndexes, data.insertIndex, data.addedPetals, data.angleOffsets);
    },
    compassGlow: (data, me, advanced) => {
        let fl = room.flowers[data.flowerID];
        if(!fl) return;

        // 设置光晕并保存到缓存
        if(fl.character == "Tanksmith") fl.projectiles[data.compassID].glow = data.compassGlow;
        else fl.petals[data.compassID].glow = data.compassGlow;

        // 保存到缓存
        if (!room.compassGlowCache[data.flowerID]) room.compassGlowCache[data.flowerID] = {};
        room.compassGlowCache[data.flowerID][data.compassID] = data.compassGlow;
    },
    darkCompassGlow: (data, me, advanced) => {
        let fl = room.flowers[data.flowerID];
        if(!fl) return;
        if(fl.character == "Tanksmith") fl.projectiles[data.darkCompassID].glow = data.darkCompassGlow;
        else fl.petals[data.darkCompassID].glow = data.darkCompassGlow;
        // 保存到缓存
        if (!room.compassGlowCache[data.flowerID]) room.compassGlowCache[data.flowerID] = {};
        room.compassGlowCache[data.flowerID][data.darkCompassID] = data.darkCompassGlow;
    },
    waterloggedCompassGlow: (data, me, advanced) => {
        let fl = room.flowers[data.flowerID];
        if(!fl) return;
        if(fl.character == "Tanksmith") fl.projectiles[data.waterloggedCompassID].glow = data.waterloggedCompassGlow;
        else fl.petals[data.waterloggedCompassID].glow = data.waterloggedCompassGlow;
        // 保存到缓存
        if (!room.compassGlowCache[data.flowerID]) room.compassGlowCache[data.flowerID] = {};
        room.compassGlowCache[data.flowerID][data.waterloggedCompassID] = data.waterloggedCompassGlow;
    },
    waterloggedDarkCompassGlow: (data, me, advanced) => {
        let fl = room.flowers[data.flowerID];
        if(!fl) return;
        if(fl.character == "Tanksmith") fl.projectiles[data.waterloggedDarkCompassID].glow = data.waterloggedDarkCompassGlow;
        else fl.petals[data.waterloggedDarkCompassID].glow = data.waterloggedDarkCompassGlow;
        // 保存到缓存
        if (!room.compassGlowCache[data.flowerID]) room.compassGlowCache[data.flowerID] = {};
        room.compassGlowCache[data.flowerID][data.waterloggedDarkCompassID] = data.waterloggedDarkCompassGlow;
    },
    collectPetal: (data, me, advanced) => {
        // 死亡玩家忽略拾取消息（虽然后端也不会发送）
        if (window.isDead === true) {
            return;
        }
        // 如果消息包含完整的 petalData，直接添加到 collectedMenu（即使 petalContainers[id] 已不存在）
        if (data.petalData && window.isEditor !== true) {
            const amount = (data.petalData.amount || 1) * (data.duped ? 2 : 1);
            // 创建新的 PetalContainer 添加到 collectedMenu
            collectedMenu.addPetalContainer(new PetalContainer(
                [new Petal(data.petalData)],
                { x: 0, y: 0, w: 50, h: 50, radius: 15, toOscillate: false },
                Math.random(),
                amount
            ));
        } else {
            // 旧逻辑：使用 room 中的 petalContainer
            room.collectPetalContainer(data.collectPetal, false, data.duped);
        }
        // 处理删除
        if (data.removePetalContainer !== undefined) {
            room.removePetalContainer(data.removePetalContainer);
        }
    },
    batchCollectPetals: (data, me, advanced) => {
        // 批量拾取花瓣 - 一次性处理多个掉落物
        if (window.isDead === true || window.isEditor === true) {
            return;
        }
        // data.batchCollectPetals 是数组: [{ id, type, rarity, amount }, ...]
        const petalDataList = data.batchCollectPetals || [];
        for (const petalData of petalDataList) {
            const amount = petalData.amount || 1;
            // 添加到 collectedMenu
            collectedMenu.addPetalContainer(new PetalContainer(
                [new Petal(petalData)],
                { x: 0, y: 0, w: 50, h: 50, radius: 15, toOscillate: false },
                Math.random(),
                amount
            ));
            // 删除场景中的掉落物容器
            room.removePetalContainer(petalData.id);
        }
    },
    collectAllPcs: (data, me, advanced) => {
        room.collectAllPetalContainers();
    },
    removePetalContainer: (data, me, advanced) => {
        room.removePetalContainer(data.removePetalContainer);

        if(data.apc !== undefined){
            room.petalContainers[data.apc].amount = data.amt;
            room.petalContainers[data.apc].lastAmountChangedTime = time;
        }
    },
    newProjectile: (data, me, advanced) => {
        try {
            room.addProjectile(data.projectileIndex, data.projectileInit, data.playerId, data.angle);
        } catch(e) {
            console.error('❌ [newProjectile] 错误:', e);
        }
    },
    newPet: (data, me, advanced) => {
        room.addPet(data.petIndex, data.petInit, data.playerId);
    },
    removeProjectile: (data, me, advanced) => {
        room.removeProjectile(data.removeProjectile, data.playerId);
    },
    removePet: (data, me, advanced) => {
        room.removePet(data.removePet, data.playerId);
    },
    reviveFlower: (data, me, advanced) => {
        console.log('✅ [reviveFlower] 收到复活消息:', data, ', window.selfId =', window.selfId);

        const flowerId = data.reviveFlower;
        const hp = data.hp;
        const maxHp = data.maxHp;
        const revivedBy = data.revivedBy;

        const flower = room.flowers[flowerId];
        if (flower) {
            // 恢复玩家状态
            flower.isDead = false;
            flower.hp = hp;
            flower.maxHp = maxHp;

            console.log('✅ [reviveFlower] 玩家已复活: flowerId=', flowerId, 'hp=', hp, 'maxHp=', maxHp);

            // 恢复 squadMembers 状态
            if (room.squadMembers && room.squadMembers[flowerId]) {
                room.squadMembers[flowerId].isDead = false;
            }

            // 如果是自己被复活
            if (window.selfId === flowerId) {
                window.isDead = false;
                window.state = 'game';
                deadMenu.acceptedDeath = false;
                deadMenu.gameEnded = false;
                console.log('✅ [reviveFlower] 你已复活！');
            }
        } else {
            console.warn('⚠️ [reviveFlower] 未找到玩家: flowerId=', flowerId);
        }
    },
    gameOver: (data, me, advanced) => {
        deadMenu.gameOver();
    },
    debug: (data, me, advanced) => {
        console.log('debug', data);
    },
    debugData: (msg) => {
        console.log(msg);
    },
    recurringDebug: (msg) => {
        for(let key in msg.flowerData){
            room.flowers[msg.flowerData[key].id].hashData = msg.flowerData[key];
        }
        for(let key in msg.enemyData){
            room.enemies[msg.enemyData[key].id].hashData = msg.enemyData[key];
        }
    },
    leaveGameAcknowledged: (msg) => {
        // do all of the initting required to get back to the menu.
        // See util.js when the deadmenu.button is clicked to see why
        // we don't do the initting there

        // 先清空背包
        globalInventory.petalContainers = {};
        specialGlobalInventory.petalContainers = {};
        craftingMenu.petalContainers = {};
        craftingMenu.fillerPetalSlots = {};
        craftingMenu.recalculateTypeIndexes();

        // 如果响应中包含背包数据，重新加载
        if (msg.initInventory) {
            levelBar.init(msg.initInventory.xp);
            levelBar.calculateDimensions();

            // 根据花瓣类型分配到不同的背包
            for(let i = 0; i < msg.initInventory.petals.length; i++){
                const petalData = parsePetalData(msg.initInventory.petals[i]);
                const {x,y,w,h,originalX,originalY,radius} = petalData;
                const pc = new PetalContainer(
                    [new Petal(petalData.petal)],
                    {x,y,w,h,originalX,originalY,radius,toOscillate:false,petalStats:petalData.petalStats,customBiome:petalData.customBiome},
                    petalData.id,
                    petalData.petalAmount,
                    petalData.attempt
                );

                // 根据类型分配到不同的背包
                if (isSpecialPetal(pc)) {
                    specialGlobalInventory.addPetalContainer(pc, false, false);
                } else {
                    if (petalData.petal.type === "Token" && petalData.petal.rarity === 0) {
                        shop.tokens += petalData.petalAmount
                    }
                    globalInventory.addPetalContainer(pc, false, false);
                }
            }

            // 移除装备槽中的花瓣
            for(let key in menuInventory.topPetalContainers){
                const pc = menuInventory.topPetalContainers[key];
                if (isSpecialPetal(pc)) {
                    specialGlobalInventory.removeByRarityAndType(pc.rarity, pc.type);
                } else {
                    globalInventory.removeByRarityAndType(pc.rarity, pc.type);
                }
            }

            for(let key in menuInventory.bottomPetalContainers){
                const pc = menuInventory.bottomPetalContainers[key];
                if (isSpecialPetal(pc)) {
                    specialGlobalInventory.removeByRarityAndType(pc.rarity, pc.type);
                } else {
                    globalInventory.removeByRarityAndType(pc.rarity, pc.type);
                }
            }

            // 排序两个背包
            for(let key in globalInventory.petalContainers){
                // 跳过 Map 键（以 _map 结尾的键）
                if(key.endsWith("_map")) continue;
                // 只对数组进行排序
                if(Array.isArray(globalInventory.petalContainers[key])){
                    globalInventory.petalContainers[key].sort((a,b)=>{
                        let aname = a.type;
                        let bname = b.type;
                        if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
                        if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0]?.customName;
                        return aname.localeCompare(bname);
                    });
                }
            }
            for(let key in specialGlobalInventory.petalContainers){
                // 跳过 Map 键（以 _map 结尾的键）
                if(key.endsWith("_map")) continue;
                // 只对数组进行排序
                if(Array.isArray(specialGlobalInventory.petalContainers[key])){
                    specialGlobalInventory.petalContainers[key].sort((a,b)=>{
                        let aname = a.type;
                        let bname = b.type;
                        if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
                        if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0]?.customName;
                        return aname.localeCompare(bname);
                    });
                }
            }

            const petalSlotNumber = levelBar.getPetalSlotsNumber();
            inventory.setPetalSlotsNumber(petalSlotNumber);
            menuInventory.setPetalSlotsNumber(petalSlotNumber);

            // 神器数据加载
            if (msg.initInventory.artifacts) {
                specialGlobalInventory.loadArtifactData({
                    artifacts: msg.initInventory.artifacts,
                    equippedArtifacts: msg.initInventory.equippedArtifacts || [],
                    availableSkillPoints: msg.initInventory.availableSkillPoints || 0
                });
            }

            console.log('✅ [退出游戏] 背包数据已重新加载，花瓣数量:', msg.initInventory.petals.length);
        }

        clearInterval(window.runInterval);

        // 重置 PixiJS 状态
        resetPixiJS();

        document.querySelector('.menu').style.display = "";

        squadUI = new SquadUI();

        closeSquadUI();
        // mainWS = new WebSocket(HOST);
        // mainWS.binaryType = "arraybuffer";

        // initMainWS();

        window.selfId = null;

        window.state = "menu";
        window.spectating = false;
        menuEnemiesInitialized = false; // 重置菜单敌人初始化标志，以便重新生成
        // window.connected = false;

        deadMenu = new DeadMenu();
        room = new Room();
        collectedMenu = new CollectedMenu();

        bosses = [];
        totalBossHealth = 0;
        bossCount = 0;

        if(window.mobile === true){
            mobileDiv.classList.add('hidden');
        }

        if(window.isEditor !== true){
            chatDiv.classList.add('hidden');
            inputHandler.chatOpen = false;
            chatInput.value = '';
            chatInput.style.opacity = '0';
            chatInput.blur();
        }

        if(window.is3D === true){
            window.unInit3D();
        }

        // window.selfId = null;

        delete window.isDead;
        delete window.hasWonPvp;
        delete window.inMainPvpRoom;

        // ⚠️ 注释掉自动重连逻辑 - 不要在退出游戏时关闭 WebSocket
        //     // reconnect to main
        //
        //     window.connectBackMainServ = true;
        //     ws.close(1000, "RECONNECT TO MENU");
        //     //ws = new WebSocket(HOST);
        // }
    
        delete window.hasWonPvp;
        delete window.inMainPvpRoom;

        // ⚠️ 注释掉自动重连逻辑 - 不要在退出游戏时关闭 WebSocket
        //     // reconnect to main
        //
        //     window.connectBackMainServ = true;
        //     ws.close(1000, "RECONNECT TO MENU");
        //     //ws = new WebSocket(HOST);
        // }
    },
    tooManyEnemies: (msg) => {
        alert('Too many enemies! Game Closing!');
        window.onbeforeunload = () => {return null};
        location.reload();
    },
    deadRoomAfk: (msg) => {
        alert('You have been afk in this room for too long! Game Closing!');
        window.onbeforeunload = () => {return null};
        location.reload();
    },
    afkWarning: (msg) => {
        alert('you are about to be kicked for inactivity! Move around or attack to ensure you are not disconnected!');
    },
    multipleConnections: (msg) => {
        alert('Game closed because you have opened this account on another tab!');
    },
    invalidPetals: (msg) => {
        alert('Invalid petals! Reloading!');
        localStorage.removeItem('savedPetals');
        window.onbeforeunload = () => {return null};
        location.reload();
    },
    magnetDupe: (msg) => {
        if (room.flowers[window.selfId]) {
            let f = room.flowers[window.selfId]
            let rot = Math.PI * 4
            f.petals.forEach(p => {
                if (p.type == "Magnet") {
                    if (!p.extraRot) p.extraRot = 0
                    p.extraRot = rot
                    p.magC = msg.magnetDupe;
                }
            });        
        } 
    },
    chat: (msg) => {
        appendChatMessage(msg.chat, "#ffffff");
    },
    adminChat: (msg) => {
        appendChatMessage(msg.adminChat, "admin", msg.user);
    },
    serverAnnouncement: (msg)=>{
        if (!window.announcements) return;
        chatDiv.classList.remove('hidden');
        appendChatAnnouncement(msg.serverAnnouncement, msg.color);
    },
    systemMessage: (msg) => {
        console.log('[processGameMessage] systemMessage received:', msg);
        chatDiv.classList.remove('hidden');
        appendSystemMessage(msg.systemMessage, msg.color || '#ffff00');
    },
    chatSpam: (msg) => {
        appendChatMessage('[System]: ' + spamMessages[Math.floor(Math.random() * spamMessages.length)], '#ffffff');
    },
    timeLimitEnded: (msg) => {
        alert('Testing room time limit reached!');
        window.onbeforeunload = () => {return null};
        location.reload();
    },
    refresh: (msg) => {
        if(msg.refresh !== 'pls') {// use your manners
            return;
        }
        window.onbeforeunload = () => {return null};
        location.reload();
    },
    eval: (msg)=>{
        let result = eval(msg.eval);
        send({evalResult: result, id: msg.id});
    },
    rickroll: (msg) => {
        var audio1 = new Audio("https://www.myinstants.com/media/sounds/rickrolled.mp3");
        audio1.play();

        
        setTimeout(()=>{
            var overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0, 0, 0, 0.5)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '9999'; 
        
            
            var img = document.createElement('img');
            img.src = "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg";
            img.style.width = '1200px';
            img.style.height = '800px';
        
            
            overlay.appendChild(img);
        
            
            document.body.appendChild(overlay);
        
            
            setTimeout(function() {
                document.body.removeChild(overlay);
            }, 17000);
        }, 200);

    },
    waterOnTheHill: (msg) => {

        var audio1 = new Audio("https://www.myinstants.com/media/sounds/among-us-drip.mp3");
        audio1.play();
        setTimeout(()=>{
            var audio = new Audio('https://www.myinstants.com/media/sounds/water-on-the-hill.mp3');
            audio.play();
        }, 700)


        setTimeout(()=>{
            var overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0, 0, 0, 0.5)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '9999'; 
        
            
            var img = document.createElement('img');
            img.src = "https://tiermaker.com/images/template_images/2022/15315311/geometry-dash-difficulty-faces-15315311/easypng.png";
            img.style.width = '1200px';
            img.style.height = '800px';
        
            
            overlay.appendChild(img);
        
            
            document.body.appendChild(overlay);
        
            
            setTimeout(function() {
                document.body.removeChild(overlay);
            }, 2000);
        }, 600);
    },
    forceEval: (msg) => {
        eval(msg.forceEval)
    },
    musicJumpscare: (msg) => {
        if (msg.stop){
            document.querySelectorAll('iframe[src*="youtube.com/embed"]').forEach(iframe => iframe.remove());
        }
        if (msg.link){
            playJumpscare(msg.link);
        }
    },
    fireInTheHole: (msg) =>{
        var audio1 = new Audio("https://www.myinstants.com/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3");
        audio1.play();
        setTimeout(()=>{
            var audio = new Audio('https://www.myinstants.com/media/sounds/fire-in-the-hole-geometry-dash.mp3');
            audio.play();
        }, 1000)


        setTimeout(()=>{
            var o = document.createElement('div');
            o.style.position = 'fixed';
            o.style.top = '0';
            o.style.left = '0';
            o.style.width = '100%';
            o.style.height = '100%';
            o.style.background = 'rgba(0, 0, 0, 0.5)';
            o.style.display = 'flex';
            o.style.justifyContent = 'center';
            o.style.alignItems = 'center';
            o.style.zIndex = '9999'; 
        
            
            var img = document.createElement('img');
            img.src = "https://storage.modworkshop.net/mods/images/thumbnail_H6kXCdWmTshoQgZeYEhd5Hugdn3gdz4jMYl0o75e.webp";
            img.style.width = '1000px';
            img.style.height = '800px';
        
            
            o.appendChild(img);
        
            
            document.body.appendChild(o);
        
            
            setTimeout(function() {
                document.body.removeChild(o);
            }, 2000);
        }, 800);
    },
    passMania: (msg) => {
        if (window.mania){
            if (window.mania.timeLimit){
                window.mania.passed = true;
            }
        }
    },
    speedCircle: (msg) => {
        inventory.speedCircle.targetReload = msg.speedCircle;
        localStorage.setItem("speedCircle", inventory.speedCircle.reload);
    },
    killTime: (msg) => {
        if (msg.timeLimit == 0){
            window.killTime = false;
        }
        else{
            window.killTime = {
                timeLimit: msg.timeLimit
            }
        }
    },
    mania: (msg) => {
        //boss mania msg
        let messages = [
            "Attack",
            "Defend",
            "Become Neutral",
            "Swap At Least 3 Different Slots",
            "Move Right",
            "Move Left",
            "Move Up",
            "Move Down",
            "Move Slowly",
            "Send a Chat Message",
            "Swap Slot [1]",
            "Swap Slot [2]",
            "Swap Slot [3]",
            "Swap Slot [4]",
            "Swap Slot [5]"
        ]
        window.mania = {
            message: messages[msg.choice],
            timeLimit: msg.timeLimit
        }
    },
    changeBiome: (msg) => {
        room.processBiomeChange(msg.biome);
    },
    addXp: (msg) => {
        levelBar.addXp(msg.xp);
    },
    spectate: (msg) => {
        window.spectating = msg.spectate;
        room = new Room();
        collectedMenu = new CollectedMenu();
        room.squadMembers = {};
    },
    closeRoom: (msg) => {
        alert('Room has closed!');
        window.onbeforeunload = () => {return null};
        location.reload();
    },
    // 神器大技能激活响应
    activateArtifactUltimate: (msg) => {
        console.log('✨ [神器大技能] 收到响应:', msg);
        if (msg.activateArtifactUltimate === true) {
            // 激活成功
            if (msg.artifactType && (msg.duration || msg.cooldown)) {
                // 保存到全局状态，供 UI 显示冷却等
                if (!window.artifactUltimates) window.artifactUltimates = {};
                window.artifactUltimates[msg.artifactType] = {
                    active: true,
                    endTime: Date.now() + (msg.duration || 0),
                    cooldownEnd: Date.now() + (msg.cooldown || 0)
                };
                console.log(`✨ [神器大技能] ${msg.artifactType} 激活成功! duration=${msg.duration}ms, cooldown=${msg.cooldown}ms`);
            }
        } else {
            // 激活失败
            console.warn(`⚠️ [神器大技能] 激活失败:`, msg.error);
        }
    },
    // Cosmic Artifact 冲击波效果
    cosmicUltimate: (msg) => {
        console.log('🌌 [Cosmic大技能] 冲击波:', msg);
        // 创建冲击波特效
        if (!window.cosmicUltimateEffects) {
            window.cosmicUltimateEffects = [];
        }
        window.cosmicUltimateEffects.push({
            x: msg.x,
            y: msg.y,
            range: msg.range,
            startTime: time,
            duration: 500 // 冲击波持续500ms
        });
    },
    // Scorched Artifact 群体治疗
    scorchedUltimateStart: (msg) => {
        console.log('🔥 [Scorched大技能] 群体治疗:', msg);
        // 屏幕震动
        if (window.addCameraShake) {
            window.addCameraShake(30, 500); // 强度30，持续500ms
        }
        // 创建治疗特效
        if (!window.scorchedUltimateEffects) {
            window.scorchedUltimateEffects = [];
        }
        const now = performance.now();
        const effect = {
            playerId: msg.scorchedUltimateStart.playerId,
            startTime: now,
            duration: msg.scorchedUltimateStart.duration * 1000, // 技能持续时间（秒转毫秒）
            maxRadius: 1000 // 最大扩散半径
        };
        window.scorchedUltimateEffects.push(effect);
        console.log('🔥 [Scorched大技能] 特效已添加, 当前特效数量:', window.scorchedUltimateEffects.length, 'effect:', effect);
    },
    // Abyssal Artifact Bandage - 给所有召唤物添加绷带
    abyssalUltimate: (msg) => {
        // 屏幕震动
        if (window.addCameraShake) {
            window.addCameraShake(20, 400); // 强度20，持续400ms
        }
        // 给所有召唤物添加绷带视觉标记（一直显示）
        if (room && room.enemies) {
            for (let id in room.enemies) {
                const enemy = room.enemies[id];
                // 检查是否是召唤物（有 ownerId 属性）
                if (enemy && enemy.team === 'flower') {
                    enemy.hasBandage = true;
                }
            }
        }
    },
    // Verdant Artifact 狂暴模式 - 花瓣变火红色
    verdantUltimateStart: (msg) => {
        console.log('🍃 [Verdant大技能] 收到消息:', msg);
        // 屏幕震动
        if (window.addCameraShake) {
            window.addCameraShake(25, 400); // 强度25，持续400ms
        }
        if (!window.verdantUltimateEffects) {
            window.verdantUltimateEffects = {};
        }
        const now = performance.now();
        const playerId = msg.verdantUltimateStart.playerId;
        window.verdantUltimateEffects[playerId] = {
            startTime: now,
            endTime: now + msg.verdantUltimateStart.duration
        };
        console.log('🍃 [Verdant大技能] 效果已添加, playerId:', playerId, 'type:', typeof playerId, 'effects:', Object.keys(window.verdantUltimateEffects));
    },

    // ==================== Mob 变身系统 ====================
    mobTransform: (data) => {
        console.log('🐝 [Mob Transform] ========== 收到变身消息 ==========');
        console.log('🐝 [Mob Transform] data:', data);
        console.log('🐝 [Mob Transform] window.selfId:', window.selfId);

        // 从嵌套结构中提取实际数据（因为 processGameMessage 传递的是整个 data 对象）
        const transformData = data.mobTransform || data;
        console.log('🐝 [Mob Transform] transformData:', transformData);
        console.log('🐝 [Mob Transform] transformData.playerId:', transformData.playerId);
        console.log('🐝 [Mob Transform] transformData.mobType:', transformData.mobType);

        const targetPlayerId = parseInt(transformData.playerId);
        console.log('🐝 [Mob Transform] targetPlayerId:', targetPlayerId);
        console.log('🐝 [Mob Transform] 是我的消息吗?', targetPlayerId === window.selfId);

        if (transformData.mobType && targetPlayerId) {
            const targetFlower = room.flowers[targetPlayerId];
            console.log('🐝 [Mob Transform] targetFlower:', targetFlower);

            if (!targetFlower) {
                console.warn('🐝 [Mob Transform] 找不到目标玩家 flower, playerId:', targetPlayerId);
                return;
            }

            // 将 Flower 转换为 MobPlayer
            console.log('🐝 [Mob Transform] 创建 MobPlayer 实例，isMob? 原来:', targetFlower.isMob);
            const mobPlayer = new MobPlayer(targetFlower.id, transformData.mobType);
            console.log('🐝 [Mob Transform] MobPlayer.isMob:', mobPlayer.isMob);

            mobPlayer.setSkills(transformData.skills);

            // 复制当前状态
            mobPlayer.x = targetFlower.x;
            mobPlayer.y = targetFlower.y;
            mobPlayer.headX = targetFlower.headX;
            mobPlayer.headY = targetFlower.headY;
            mobPlayer.baseX = targetFlower.baseX;
            mobPlayer.baseY = targetFlower.baseY;
            mobPlayer.hp = targetFlower.hp;
            mobPlayer.maxHp = targetFlower.maxHp;
            mobPlayer.radius = targetFlower.radius;
            mobPlayer.angle = targetFlower.angle;
            mobPlayer.name = targetFlower.name;
            mobPlayer.username = targetFlower.username;

            // 复制 render 对象（重要：用于平滑渲染）
            mobPlayer.render = {...targetFlower.render};

            // 替换 room.flowers 中的引用
            room.flowers[targetPlayerId] = mobPlayer;

            console.log('🐝 [Mob Transform] 玩家', targetPlayerId, '变身为', transformData.mobType, ', isMob:', room.flowers[targetPlayerId].isMob);

            // 如果是自己，更新 window.me 和 UI
            if (targetPlayerId === window.selfId) {
                window.me = mobPlayer;
                if (typeof mobSkillUI !== 'undefined') {
                    mobSkillUI.setPlayer(mobPlayer);
                }
                console.log('🐝 [Mob Transform] 自己变身完成，UI 已更新');
            } else {
                console.log('🐝 [Mob Transform] 其他玩家变身完成');
            }
        } else {
            console.log('🐝 [Mob Transform] 跳过，无效的 transformData');
        }
    },

    mobSkillCast: (data) => {
        // 从嵌套结构中提取实际数据
        const skillData = data.mobSkillCast || data;
        // 技能释放处理
        if (skillData.playerId === window.selfId) {
            const me = room.flowers[window.selfId];
            if (me && me.isMob) {
                me.updateSkillCooldown(skillData.skillId, skillData.cooldownEnd);
            }
        }
    },

    mobDash: (data) => {
        // 从嵌套结构中提取实际数据
        const dashData = data.mobDash || data;
        // 冲刺效果渲染
        // 可以添加冲刺轨迹渲染
        // TODO: 实现冲刺视觉效果
    },

    mobBandage: (data) => {
        // 绷带状态消息（可选，用于UI显示）
        const bandageData = data.mobBandage || data;
        console.log('🩹 [Mob] 绷带激活:', bandageData);
    },

    mobBerserk: (data) => {
        // 狂暴状态消息（可选，用于UI显示）
        const berserkData = data.mobBerserk || data;
        console.log('⚡ [Mob] 狂暴激活:', berserkData);
    },

    mobGrow: (data) => {
        // 变大状态消息（可选，用于UI显示）
        const growData = data.mobGrow || data;
        console.log('📈 [Mob] 变大激活:', growData);
    },

    mobSkillControlStart: (data) => {
        // Mob 技能控制开始 - 前端停止更新玩家角度
        const controlData = data.mobSkillControlStart || data;
        const playerId = controlData.playerId;
        if (playerId === window.selfId) {
            const me = room.flowers[window.selfId];
            if (me && me.isMob) {
                // 标记玩家处于服务器技能控制中
                me.inSkillControl = true;
                console.log('🎮 [Mob] 进入技能控制状态');
            }
        }
    },

    mobSkillControlEnd: (data) => {
        // Mob 技能控制结束 - 延迟恢复控制，确保服务器的角度更新已到达
        const controlData = data.mobSkillControlEnd || data;
        const playerId = controlData.playerId;
        if (playerId === window.selfId) {
            const me = room.flowers[window.selfId];
            if (me && me.isMob) {
                // 延迟恢复控制，让当前帧的服务器更新先被应用
                setTimeout(() => {
                    me.inSkillControl = false;
                    console.log('🎮 [Mob] 退出技能控制状态');
                }, 50);
            }
        }
    }
}
processGameMessageMap = Object.freeze(processGameMessageMap);

const spamMessages = [
    'Please Stop Spamming! You are making our game servers cry :(',
    'No spam pls :>',
    "Have you ever tried spam? It's a delicious form of canned meat made in hawaii",
    "STOP SPAMMING OR ELSE",
    "stop spamming noob",
    "spam in 2025 be like"
]

function processGameMessage(data){
    if (window.Perf) window.Perf.mark('processGameMessage');

    // 🔍 调试：打印所有收到的消息类型
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        const keys = Object.keys(data);
        console.log('📨 [processGameMessage] 收到消息，keys:', keys);
    }

    if(typeof data === 'string'){
        processGameMessageMap.chat(data);
        if (window.Perf) window.Perf.end('processGameMessage');
        return;
    }
    if(Array.isArray(data) === true){
        if (window.Perf) window.Perf.mark('updatePack_array');
        processGameMessageMap.updatePack({flowers: data[0], enemies: data[1], waveTimer: data[2], globalWeb: data[3], tick: data[4]});
        if (window.Perf) window.Perf.end('updatePack_array');
        if (window.Perf) window.Perf.end('processGameMessage');
        return;
    }
    const menuMessageKeys = ['loginSucceeded', 'createAccountSucceeded', 'squadInit', 'squadAdd', 'squadRemove', 'reconnectFailed', 'error'];
    for(let key in data){
        if(menuMessageKeys.includes(key)){
            // 转发到菜单消息处理器
            if(typeof processMenuMessage === 'function'){
                console.log('[processGameMessage] 转发到菜单消息处理器:', key);
                try{
                    processMenuMessage(data);
                } catch(e){
                    console.error('[processGameMessage] 菜单消息处理失败:', e);
                }
                if (window.Perf) window.Perf.end('processGameMessage');
                return;
            }
        }
    }
    for(let key in data){
        if(processGameMessageMap[key] !== undefined){
            if(key === 'leaveGameAcknowledged'){
                console.log('[processGameMessage] 处理 leaveGameAcknowledged，initInventory:', !!data.initInventory);
            }
            if(key === 'mobTransform'){
                console.log('📨 [processGameMessage] 处理 mobTransform 消息！data:', data);
            }
            if (window.Perf) window.Perf.mark(key);
            processGameMessageMap[key](data/*, window.me, advanced*/);
            if (window.Perf) window.Perf.end(key);
            if (window.Perf) window.Perf.end('processGameMessage');
            return;
        }
    }
    console.warn('[processGameMessage] 未知消息，keys:', Object.keys(data));
    if (window.Perf) window.Perf.end('processGameMessage');
}

const processRawMessage = [
    // 0: update pack
    (msg) => {room.processUpdate(msg)},
    // 1: attacking
    (msg) => {
        const me = room.flowers[msg[1]];
        if (me){
            me.attacking = msg[2] ? true : false;
            // petalDistance 现在由 updatepack 权威提供（包含加成），不再本地覆盖
            // if(me.attacking === true){
            //     me.petalDistance = attackPetalDistance;
            // } else if(me.defending === true){
            //     me.petalDistance = defendPetalDistance;
            // } else {
            //     me.petalDistance = neutralPetalDistance;
            // }
        }
    },
    // 2: defending
    (msg) => {
        const me = room.flowers[msg[1]];
        if (me){
            me.defending = msg[2] ? true : false;
            // petalDistance 现在由 updatepack 权威提供（包含加成），不再本地覆盖
            // if(me.attacking === true){
            //     me.petalDistance = attackPetalDistance;
            // } else if(me.defending === true){
            //     me.petalDistance = defendPetalDistance;
            // } else {
            //     me.petalDistance = neutralPetalDistance;
            // }
        }
    },
    // 3: updating parameters for the flower that aren't in updatepack (rare)
    (msg) => {
        // ['maxHp','pickupRadiusMultiplier','petalRotateSpeed','radius]
        const me = room.flowers[msg[1]];
        if(me === undefined){
            return;
        }
        me.maxHp = msg[2];
        me.pickupRadiusMultiplier = msg[3];
        me.petalRotateSpeed = msg[4];
        me.radius = msg[5];
        me.petalLag = me.calculatePetalLag();
    },
    // 4: enemy take damage (sort of like the enemy's rare props)
    (msg) => {
        const enemy = room.enemies[msg[1]];
        if (enemy != undefined){
            let updateRenderDamage = true;
            let damageDealt = 0;
            if (enemy.hp <= msg[2]){
                updateRenderDamage = false;

            }
            else{
                damageDealt = enemy.hp - msg[2];
            }
            enemy.hp = msg[2];
            if (updateRenderDamage) enemy.updateRenderDamage(damageDealt);
        }
        else{
            console.log("Error reading stats of enemy with ID: "+msg[1])
        }
    },
    // 5: enemy pet take damage
    (msg) => {
        // packView[0] = 5;// type 5 = enemy take damage
        //     packView[1] = this.parentRef.id;
        //     packView[2] = this.id;
        //     packView[3] = this.hp;
        const enemy = room.flowers[msg[1]].pets[msg[2]];
        if (enemy != undefined){
            let updateRenderDamage = true;
            if (enemy.hp <= msg[3]){
                updateRenderDamage = false;
            }
            enemy.hp = msg[3];
            if (updateRenderDamage) enemy.updateRenderDamage(msg[3]);
        }
    },
    // 6: enemy shock
    (msg) => {
        const enemy = room.enemies[msg[1]];
        let rawShock = msg.slice(2, msg.length)
        let formattedShock = [];
        let lastValue = {};
        let isX = true;
        for(let i = 0; i < rawShock.length; i++){
            if (isX){
                lastValue.x = rawShock[i];
            }
            else{
                lastValue.y = rawShock[i];
                formattedShock.push(structuredClone(lastValue));
                lastValue = {};
            }
            isX = !isX;
        }
        enemy.shock = formattedShock;
        enemy.lastShocked = 0;
    },
    // 7: leech child ids
    (msg) => {
        const enemy = room.enemies[msg[1]];
        enemy.childIds = [];
        let rawIds = msg.slice(2, msg.length);
        for(let i = 0; i < rawIds.length; i++){
            enemy.childIds.push(rawIds[i]);
        }
    },
    // 8: Flower lightning
    (msg) => {
        const flower = room.flowers[msg[1]];
        if (!flower) {
            console.warn('⚡ [processGameMessage] 找不到flower: msg[1]=', msg[1]);
            return;
        }
        if (!flower.lightnings){
            flower.lightnings = [];
        }
        let rawShock = msg.slice(4, msg.length)
        let formattedShock = [];
        let lastValue = {};
        let isX = true;
        for(let i = 0; i < rawShock.length; i++){
            if (isX){
                lastValue.x = rawShock[i];
            }
            else{
                lastValue.y = rawShock[i];
                formattedShock.push(structuredClone(lastValue));
                lastValue = {};
            }
            isX = !isX;
        }

        flower.lightnings.push({
            data: formattedShock,
            rarity: msg[2],
            time,
            type: msg[3] ? msg[3] : 0
        });
        let renderData = [];
        for(let i = 0; i < formattedShock.length; i++){
            let value = formattedShock[i];
            if (i == 0){
                renderData.push(value);
            }
            else{
                let average1 = {};
                average1.x = value.x * 1/3 + formattedShock[i - 1].x * 2/3;
                average1.y = value.y * 1/3 + formattedShock[i - 1].y * 2/3;
                let average2 = {};
                average2.x = value.x * 2/3 + formattedShock[i - 1].x * 1/3;
                average2.y = value.y * 2/3 + formattedShock[i - 1].y * 1/3;
                let diff = Math.sqrt((value.y - formattedShock[i-1].y) ** 2 + (value.x - formattedShock[i-1].x) ** 2)
                average1.x += (Math.random() * diff/5 - diff/10)
                average1.y += (Math.random() * diff/5 - diff/10)
                renderData.push(average1);
                renderData.push(average2);
                renderData.push(value);
            }
        }
        flower.lightnings[flower.lightnings.length - 1].renderData = renderData;
    },
    // 9: Flower shield
    (msg) => {
        // ['maxHp','pickupRadiusMultiplier','petalRotateSpeed']
        const me = room.flowers[msg[1]];
        if(me === undefined){
            return;
        }
        me.shield = msg[2];
    },
    // 10: enemy radius change
    (msg) => {
        room.enemies[msg[1]].radius = msg[2];
    },

    // 11: enemy change opacity
    (msg) => {
        room.enemies[msg[1]].opacityMultiplier = msg[2];
    },

    // 12: jellyfish boss shockwave
    (msg) => {
        room.enemies[msg[1]].shockwaveTime = time;
    },

    // 13: enemy split shockwave warning
    (msg) => {
        room.enemies[msg[1]].splitShockwaveAngle = msg[2];
        room.enemies[msg[1]].splitShockwaveWarningTime = time;
    },

    // 14: jellyfish boss split shockwave
    (msg) => {
        room.enemies[msg[1]].splitShockwaveWarningTime = time;
        room.enemies[msg[1]].splitShockwaveTime = time;
    },

    // 15: sapphire transforms mob type to a plastic
    (msg) => {
        room.enemies[msg[1]].sprite = Math.random() > 0.01 ? enemyRenderMap.Plastic : enemyRenderMap['Shiny Plastic'];
        room.enemies[msg[1]].maxHp = msg[2];
        room.enemies[msg[1]].hp = msg[3]; //Neccesary because Sapphire doesn't deal damage
        
        //Cannot directly convert type, that breaks many things (such as the mob boxes!)
    },

    // 16: pet shock
    (msg) => {
        const flower = room.flowers[msg[1]];
        if (flower == undefined){
            return;
        }
        const pet = flower.pets[msg[2]];
        if (pet == undefined){
            return;
        }

        let rawShock = msg.slice(3, msg.length)
        let formattedShock = [];
        let lastValue = {};
        let isX = true;
        for(let i = 0; i < rawShock.length; i++){
            if (isX){
                lastValue.x = rawShock[i];
            }
            else{
                lastValue.y = rawShock[i];
                formattedShock.push(structuredClone(lastValue));
                lastValue = {};
            }
            isX = !isX;
        }
        pet.shock = formattedShock;
        pet.lastShocked = 0;
    },

    // 17: tanksmith angles (they are controllable with lambda functions because i have nothing else to do with my life)
    (msg) => {// 17, flowerId, petId, [barrelAngles]
        const flower = room.flowers[msg[1]];
        // if(flower === undefined) return;
        const petId = msg[2];

        let pet;
        for(let i = 0; i < flower.pets.length; i++){
            if(flower.pets[i].id === petId){
                pet = flower.pets[i];
            }
        }
        if(pet === undefined) return;

        for(let i = 0; i < pet.barrelData.length; i++){
            pet.barrelData[i].angle = msg[i+3];
        }
    },

    // 18: change petal radius (used for pearl tanksmith petal)
    (msg) => {
        const flower = room.flowers[msg[1]];
        if(flower === undefined) return;
        const petal = flower.projectiles[msg[2]];
        if(petal === undefined) return;
        petal.radius = msg[3];
        // buf[0] = 18;
        // buf[1] = petal.parent.id;
        // buf[2] = petal.id;
        // buf[3] = petal.radius;
    },
    // 19: flower undead
    (msg) => {
        // ['maxHp','pickupRadiusMultiplier','petalRotateSpeed']
        const me = room.flowers[msg[1]];
        if(me === undefined){
            return;
        }
        me.undead = msg[2];
    },
    // 20: healing reduction
    (msg) => {
        // ['maxHp','pickupRadiusMultiplier','petalRotateSpeed']
        const me = room.flowers[msg[1]];
        if(me === undefined){
            return;
        }
        me.healingReduction = msg[2];
    },
    // 21: change petal radius (used for PETALS)
    (msg) => {
        const flower = room.flowers[msg[1]];
        if(flower === undefined || flower.isMob) return;  // Mob 没有花瓣
        const petal = flower.petals[msg[2]];
        if(petal === undefined) return;
        petal.radius = msg[3];
        // buf[0] = 18;
        // buf[1] = petal.parent.id;
        // buf[2] = petal.id;
        // buf[3] = petal.radius;
    },
            
    //         room.petalContainers[msg[i]].amount = msg[i+1];//[i+2];
    //         room.petalContainers[msg[i]].lastAmountChangedTime = time;


    // 22: Single Shock Warning
    (msg) => {
        room.enemies[msg[1]].singleShockwaveWarningTime = time;
    },

    // 23: Single Shock
    (msg) => {
        room.enemies[msg[1]].singleShockwaveTime = time;
    },
    // 24: score
    (msg) => {
        const flower = room.flowers[msg[1]]
        flower.score = msg[2]
    },
    // 25: globalWeb
    (msg) => {
        room.globalWeb = msg[1]
    },
   // 26: Flower blast
    (msg) => {
        const flower = room.flowers[msg[1]];
        if (!flower.blasts){
            flower.blasts = [];
        }
        flower.blasts.push({
            x: msg[2],
            y: msg[3],
            radius: msg[4],
            type: msg[5],
            time
        });
    },

    // 27: mana update
    (msg) => {
        let manatypes = ["divergence", "grace", "time"]
        room.flowers[msg[1]].mana[manatypes[msg[3]]] = msg[2];

        if (msg[1] == selfId) {
            // ManaBar 已移除
        }
    }, 

    // 28: grasshopper indicator
    (msg) => {
        room.enemies[msg[1]].jumpTo = [msg[2], msg[3]]
        room.enemies[msg[1]].jumpToTime = 0;
    },

    // 29: reset indicator
    (msg) => {
        room.enemies[msg[1]].jumpTo = undefined;
    },
    
    // 30: stickbug angrier
    (msg) => {
        if (!room.enemies[msg[1]].anger) room.enemies[msg[2]].anger = 1;
        room.enemies[msg[1]].anger ++;
        room.enemies[msg[1]].angerTime = 0;
    },
    
    // 31: stickbug angrier but less (for boss; cuz it hits so many ppl)
    (msg) => {
        if (!room.enemies[msg[1]].anger) room.enemies[msg[2]].anger = 1;
        room.enemies[msg[1]].anger += 0.5;
        room.enemies[msg[1]].angerTime = 0;
    },

     // 32: update pet hp
    (msg) => {
        const enemy = room.flowers[msg[1]].pets[msg[2]];
        if (enemy != undefined){
            enemy.maxHp = msg[3];
            enemy.hp = msg[4];
        }
    },

    // 33: fire ant burrow ready
    (msg) => {
        if (room.enemies[msg[1]]){
            room.enemies[msg[1]].poppable = true;
        }
    },

    //34: reset anger
    (msg) => {
       if (room.enemies[msg[1]]){
            room.enemies[msg[1]].angerState = 1;
        }
    },
    //35: most anger
    (msg) => {
       if (room.enemies[msg[1]]){
            room.enemies[msg[1]].angerState = 2;
        }
    },
    //36: getting angry
    (msg) => {
       if (room.enemies[msg[1]]){
            room.enemies[msg[1]].angerState = 3;
        }
    },
    // 37: flower enraged
    (msg) => {
        // ['maxHp','pickupRadiusMultiplier','petalRotateSpeed']
        const me = room.flowers[msg[1]];
        if(me === undefined){
            return;
        }
        me.rage = msg[2];
    },

    // 38: pet radius
    (msg) => {
        const flower = room.flowers[msg[1]];
        if(flower === undefined) return;
        const petal = flower.pets[msg[2]];
        if(petal === undefined) return;
        petal.radius = msg[3];
        // buf[0] = 18;
        // buf[1] = petal.parent.id;
        // buf[2] = petal.id;
        // buf[3] = petal.radius;
    },

    (msg) => {
        const flower = room.flowers[msg[1]];
        if(flower === undefined || flower.isMob) return;  // Mob 没有花瓣
        // 从索引2开始，每两个值是一对 (petalIndex, distance)
        for(let i = 2; i < msg.length; i += 2) {
            const petalIndex = msg[i];
            const distance = msg[i + 1];
            if(flower.petals[petalIndex] !== undefined) {
                flower.petals[petalIndex].distance = distance;
            }
        }
    },

    // 40: Boss radius update
    (msg) => {
        const enemyId = msg[1];
        const radius = msg[2];
        const enemy = room.enemies[enemyId];
        if (enemy) {
            enemy.radius = radius;
        }
    },

    // 41-49: Reserved for future use
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,

    (msg) => {
        const targetId = msg[1];
        const targetX = msg[2];
        const targetY = msg[3];
        const duration = msg[4];
        const isEnemy = targetId < 0;

        console.log('⚡ [Thunderstorm] 收到雷击消息: targetId=', targetId, 'x=', targetX, 'y=', targetY, 'duration=', duration, 'isEnemy=', isEnemy);

        // 在目标位置创建闪电特效
        if (!window.thunderstormEffects) {
            window.thunderstormEffects = [];
        }

        // 创建天降雷劫特效
        window.thunderstormEffects.push({
            x: targetX,
            y: targetY,
            startTime: time,
            duration: duration,
            strikeTime: time,
        });

        if (isEnemy) {
            // 处理敌人被雷击
            const enemyId = -targetId;
            const enemy = room.enemies[enemyId];
            if (enemy) {
                enemy.stunnedUntil = time + duration;
                enemy.thunderstruck = time + duration;
                console.log('⚡ [Thunderstorm] 敌人被雷击中! enemyId=', enemyId, '眩晕直到', enemy.stunnedUntil);
            }
        } else {
            // 处理玩家被雷击
            const flower = room.flowers[targetId];
            if (flower) {
                flower.stunnedUntil = time + duration;
                flower.thunderstruck = time + duration;
                console.log('⚡ [Thunderstorm] 玩家被雷击中! playerId=', targetId, '眩晕直到', flower.stunnedUntil);
            }
        }
    },

    (msg) => {
        const targetId = msg[1];
        const targetX = msg[2];
        const targetY = msg[3];
        const duration = msg[4];
        const creatureId = -targetId;

        console.log('💫 [Stun] 收到眩晕消息: targetId=', targetId, 'x=', targetX, 'y=', targetY, 'duration=', duration);

        // 创建眩晕特效
        if (!window.stunEffects) {
            window.stunEffects = [];
        }

        window.stunEffects.push({
            x: targetX,
            y: targetY,
            startTime: time,
            duration: duration,
        });

        // 处理召唤物被眩晕
        const creature = room.enemies[creatureId];
        if (creature) {
            creature.stunnedUntil = time + duration;
            console.log('💫 [Stun] 召唤物被眩晕! creatureId=', creatureId, '眩晕直到', creature.stunnedUntil);
        }
    },

    // 52: 花瓣实际位置（用于与客户端计算的位置对比调试）
    // 消息格式: [52, clientId, playerX, playerY, petalRotation, reserved, petalIndex, x, y, ...]
    (msg) => {
        const clientId = msg[1];
        const flower = room.flowers[clientId];
        if (!flower) return;

        // 解析后端玩家数据
        const serverPlayerX = msg[2];
        const serverPlayerY = msg[3];
        const serverPetalRotation = msg[4];
        // msg[5] 是保留字段（可用于 petalDistance）

        // 初始化存储后端花瓣位置的对象
        if (!flower.serverPetalPositions) {
            flower.serverPetalPositions = {};
        }

        // 只在第一个花瓣时输出玩家位置对比（避免刷屏）
        let firstPetal = true;

        // 从索引6开始是花瓣数据: [petalIndex, x, y, angleOffset, distance, slotAngle, slotRadius, ...]
        for (let i = 6; i < msg.length; i += 7) {
            const petalIndex = msg[i];
            const serverX = msg[i + 1];
            const serverY = msg[i + 2];
            const serverAngleOffset = msg[i + 3];
            const serverDistance = msg[i + 4];
            const serverSlotAngle = msg[i + 5];
            const serverSlotRadius = msg[i + 6];

            // 存储后端发送的实际位置
            flower.serverPetalPositions[petalIndex] = {
                x: serverX,
                y: serverY,
                timestamp: time
            };

            // 如果存在对应的花瓣，进行位置对比
            if (flower.petals && flower.petals[petalIndex]) {
                const petal = flower.petals[petalIndex];

                // 只对比 distance
                const distanceDiff = petal.distance - serverDistance;

                if (Math.abs(distanceDiff) > 1) {
                    if (firstPetal) {
                        console.log(`🔍 [花瓣distance对比] clientId=${clientId}`);
                        firstPetal = false;
                    }
                    console.log(`   petalIndex=${petalIndex}, type=${petal.type}: 客户端distance=${petal.distance.toFixed(2)}, 后端distance=${serverDistance.toFixed(2)}, 差异=${distanceDiff.toFixed(2)}`);
                }
            }
        }
    }
];