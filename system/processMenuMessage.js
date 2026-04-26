const processMenuMessageMap = {
    craftResults: (msg) => {
		craftingMenu.processCraftResults(msg.craftResults.success, msg.craftResults.amount, msg.craftResults.petalData, msg.craftResults.attemptNumber, msg.craftResults.lost);
	},
    changePetals: (msg) => {
        if (msg.changePetals) {
            squadUI.updateFlowerPetals(msg.changePetals, msg.id, true);
        }
        // 如果有副槽数据，也更新副槽花瓣
        if (msg.offPetals) {
            squadUI.updateFlowerOffPetals(msg.offPetals, msg.id, true);
        }
    },
    deleteSquad: (msg) => {
		squadUI.public = true;
        squadUI.clients = [];
	},

    character: (msg) => {
        squadUI.updateCharacter(msg.character, msg.id);
    },
    changePasswordSucceeded: (msg) => {
        console.log(msg);
        if (msg.changePasswordSucceeded === true){
            localStorage.setItem("hashedPassword", hashedPassword);
            localStorage.setItem("hashedPassword2", hashedPassword2);
            alert("Password successfully changed.")
        }
        else{
            alert("Password change failed due to internal failure.")
        }
    },
    // ==================== 积分和商店系统 ====================
    initPoints: (msg) => {
        if (msg.initPoints && msg.initPoints.success) {
            shop.tokens = msg.initPoints.balance;
            console.log('✅ 积分余额已更新:', shop.tokens);
        }
    },
    shopItems: (msg) => {
        if (msg.shopItems && msg.shopItems.success) {
            shop.updateShopItems(msg.shopItems.items);
            console.log('✅ 商店商品已更新，共', msg.shopItems.items.length, '个商品');
        }
    },
    purchaseResult: (msg) => {
        if (msg.purchaseResult) {
            if (msg.purchaseResult.success) {
                shop.tokens = msg.purchaseResult.newBalance;
                console.log('✅ 购买成功！新余额:', shop.tokens);

                // 根据商品类型处理
                const result = msg.purchaseResult.result;
                if (result) {
                    if (result.type === 'xp') {
                        // 经验值已自动添加，刷新等级条
                        levelBar.init(levelBar.xp + result.xp);
                        levelBar.calculateDimensions();
                    } else if (result.type === 'petal') {
                        // 花瓣已自动添加，刷新背包
                        send({ getPetals: true });
                    } else if (result.type === 'skillPoint') {
                        // 技能点已添加，刷新神器背包
                        console.log('✅ 获得', result.skillPoint, '个技能点，当前总技能点:', result.newSkillPoints);
                        // 重新获取用户数据来更新技能点显示
                        send({ initUserInfo: true });
                    } else if (result.type === 'item') {
                        console.log('获得道具:', result.item);
                    }
                }

                // 刷新商店商品
                shop.initShopItems();
            } else {
                alert('购买失败: ' + (msg.purchaseResult.error || '未知错误'));
            }
        }
    },
    transferResult: (msg) => {
        if (msg.transferResult) {
            if (msg.transferResult.success) {
                shop.tokens = msg.transferResult.newBalance;
                console.log('✅ 转账成功！新余额:', shop.tokens);
                alert('转账成功！');
            } else {
                alert('转账失败: ' + (msg.transferResult.error || '未知错误'));
            }
        }
    },
    // 刷新背包（购买花瓣后调用）
    petals: (msg) => {
        if (msg.petals) {
            console.log('✅ 收到花瓣数据，刷新背包，数量:', msg.petals.length);

            // 更新经验条
            if (msg.xp !== undefined) {
                levelBar.init(msg.xp);
                levelBar.calculateDimensions();
            }

            // 清空背包
            globalInventory.petalContainers = {};
            specialGlobalInventory.petalContainers = {};
            craftingMenu.petalContainers = {};
            craftingMenu.fillerPetalSlots = {};
            craftingMenu.recalculateTypeIndexes();

            // 缓存特殊花瓣类型检查
            const SPECIAL_PETAL_TYPES = new Set([
                "Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact", "Chimera"
            ]);

            // 重新加载花瓣
            for (let i = 0; i < msg.petals.length; i++) {
                const petalData = parsePetalData(msg.petals[i]);
                const { x, y, w, h, originalX, originalY, radius } = petalData;

                // Token 花瓣特殊处理
                if (petalData.petal.type === "Token" && petalData.petal.rarity === 0) {
                    shop.tokens += petalData.petalAmount;
                }

                const pc = new PetalContainer(
                    [new Petal(petalData.petal)],
                    { x, y, w, h, originalX, originalY, radius, toOscillate: false, petalStats: petalData.petalStats, customBiome: petalData.customBiome },
                    petalData.id,
                    petalData.petalAmount,
                    petalData.attempt
                );

                // 使用缓存的 Set 检查
                if (SPECIAL_PETAL_TYPES.has(pc.type)) {
                    specialGlobalInventory.addPetalContainer(pc, false, false);
                } else {
                    globalInventory.addPetalContainer(pc, false, false);
                }
            }

            console.log('✅ 背包刷新完成');
        }
    },
    // 刷新用户信息（购买技能点后调用）
    initUserInfo: (msg) => {
        if (msg.initUserInfo && msg.initUserInfo.success) {
            console.log('✅ 用户信息已更新，技能点:', msg.initUserInfo.availableSkillPoints);

            // 更新积分
            if (msg.initUserInfo.points !== undefined) {
                shop.tokens = msg.initUserInfo.points;
            }

            // 更新经验条
            if (msg.initUserInfo.xp !== undefined) {
                levelBar.init(msg.initUserInfo.xp);
                levelBar.calculateDimensions();
            }

            // 更新技能点显示
            if (msg.initUserInfo.availableSkillPoints !== undefined) {
                // 更新神器背包的技能点显示
                if (specialGlobalInventory && specialGlobalInventory.artifacts) {
                    specialGlobalInventory.availableLevelPoints = msg.initUserInfo.availableSkillPoints;
                }
            }

            // 更新 Mob 技能花瓣数据
            if (msg.initUserInfo.mobSkillPetals !== undefined || msg.initUserInfo.equippedMobSkillPetals !== undefined) {
                window.userMobSkillData = {
                    equipped: msg.initUserInfo.equippedMobSkillPetals || [],
                    backpack: msg.initUserInfo.mobSkillPetals || [],
                    selectedMobType: msg.initUserInfo.selectedMobType || 'Hornet'
                };
                console.log('✅ Mob 技能花瓣数据已同步:', window.userMobSkillData);
            }
        }
    },
    transactionHistory: (msg) => {
        if (msg.transactionHistory && msg.transactionHistory.success) {
            console.log('交易记录:', msg.transactionHistory.transactions);
            // 这里可以显示交易历史UI
        }
    },
    createAccountSucceeded: (msg) => {
        if(msg.createAccountSucceeded === "SUCCESS"){
            window.createAccountSucceededFlag = true;
            window.equip5BasicsFlag = true;

            // 保存 reconnectId 用于断线重连
            if (msg.reconnectId) {
                window.reconnectId = msg.reconnectId;
                console.log('✅ [重连] 已保存 reconnectId:', msg.reconnectId);
            }

            // ==================== QQ绑定系统 ====================
            // 保存用户名
            if (msg.username) {
                window.username = msg.username;
            }

            // 保存唯一码用于QQ绑定
            if (msg.uniqueCode) {
                window.uniqueCode = msg.uniqueCode;
                console.log('✅ [QQ绑定] 已保存唯一码:', msg.uniqueCode);
            }
            if (msg.qq) {
                window.qq = msg.qq;
                console.log('✅ [QQ绑定] 已绑定QQ:', msg.qq);
            }

            // window.tutorial = true;
            // initGame(msg.tutorialServerUri);
            // startGame(msg.tutorialRoomKey, 'garden', true);

            // 初始化等级条和库存
            if (msg.initInventory) {
                levelBar.init(msg.initInventory.xp);
                levelBar.calculateDimensions();

                // 清空两个背包
                globalInventory.petalContainers = {};
                specialGlobalInventory.petalContainers = {};
                craftingMenu.petalContainers = {};
                craftingMenu.fillerPetalSlots = {};
                craftingMenu.recalculateTypeIndexes();

                // 缓存特殊花瓣类型检查
                const SPECIAL_PETAL_TYPES = new Set([
                    "Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact", "Chimera"
                ]);

                // 根据花瓣类型分配到不同的背包
                for(let i = 0; i < msg.initInventory.petals.length; i++){
                    const petalData = parsePetalData(msg.initInventory.petals[i]);
                    const {x,y,w,h,originalX,originalY,radius} = petalData;

                    // Token 花瓣特殊处理
                    if (petalData.petal.type === "Token" && petalData.petal.rarity === 0) {
                        shop.tokens += petalData.petalAmount
                    }

                    const pc = new PetalContainer(
                        [new Petal(petalData.petal)],
                        {x,y,w,h,originalX,originalY,radius,toOscillate:false,petalStats:petalData.petalStats,customBiome:petalData.customBiome},
                        petalData.id,
                        petalData.petalAmount,
                        petalData.attempt
                    );

                    // 使用缓存的 Set 检查
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

                // 统一排序（跳过 Map 键）
                for(let key in globalInventory.petalContainers){
                    if(key.endsWith("_map")) continue;
                    if(Array.isArray(globalInventory.petalContainers[key])){
                        globalInventory.petalContainers[key].sort((a,b)=>{
                            let aname = a.type;
                            let bname = b.type;
                            if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
                            if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0].customName;
                            return aname.localeCompare(bname);
                        });
                    }
                }

                const petalSlotNumber = levelBar.getPetalSlotsNumber();
                inventory.setPetalSlotsNumber(petalSlotNumber);
                menuInventory.setPetalSlotsNumber(petalSlotNumber);

                // ==================== 神器数据加载 ====================
                if (msg.initInventory.artifacts) {
                    specialGlobalInventory.loadArtifactData({
                        artifacts: msg.initInventory.artifacts,
                        equippedArtifacts: msg.initInventory.equippedArtifacts || [],
                        availableSkillPoints: msg.initInventory.availableSkillPoints || 0,
                        lastArtifactResetTime: msg.initInventory.lastArtifactResetTime
                    });
                    console.log('✅ 神器数据已加载（新建账户）:', msg.initInventory.artifacts);
                }

                // ==================== 积分数据加载 ====================
                if (msg.initInventory.points !== undefined) {
                    shop.tokens = msg.initInventory.points;
                    console.log('✅ 积分余额已加载:', shop.tokens);
                }
                if (msg.initInventory.inventory) {
                    console.log('✅ 道具背包已加载:', msg.initInventory.inventory);
                }

            }

            fadeOutLoginMenu();
            fadeInMainMenu();
            updateAccountLocalStorage();
        } else {
            if(msg.createAccountSucceeded === "ERR_INVALID"){
                window.loginMessage = 'Account Creation Failed: Invalid Username or Password!';
            }

            if(msg.createAccountSucceeded === "ERR_TAKEN"){
                window.loginMessage = 'That Username is Taken!';
            }

            if(msg.createAccountSucceeded === "ERR_SPACE"){
                window.loginMessage = 'Usernames cannot start or end with spaces!';
            }

            if(msg.createAccountSucceeded === "ERR_BAD"){
                window.loginMessage = 'That username is inappropriate!';
            }
            if(msg.createAccountSucceeded === "ERR_ALPHANUMERIC"){
                window.loginMessage = "Username must be alphanumeric (Allowed characters: a-z, A-Z, 0-9, _)"
            }

            window.lastLoginMessageChangeTime = time;
            // console.log('resetting hcaptcha');
            hcaptcha.reset();
        }
	},
    loginSucceeded: (msg) => {
        if(msg.loginSucceeded === true){
            processMenuMessageMap.loginSucceededTrue(msg);
        } else {
            processMenuMessageMap.loginSucceededFalse(msg);
        }

        if (msg.captchaStatus){
            window.captchaStatus = true;
        }
	},
    captchaStatusChange: (msg) => {
        window.captchaStatus = msg.captchaStatusChange;
    },
    loginSucceededTrue: (msg) => {
        if(window.createAccountSucceededFlag === undefined){
            window.loginMessage = 'Login Succeeded!';
            window.lastLoginMessageChangeTime = time;
        }

        // 保存 reconnectId 用于断线重连
        if (msg.reconnectId) {
            window.reconnectId = msg.reconnectId;
            console.log('✅ [重连] 已保存 reconnectId:', msg.reconnectId);
        }

        // ==================== QQ绑定系统 ====================
        // 保存用户名
        if (msg.username) {
            window.username = msg.username;
        }

        // 保存唯一码用于QQ绑定
        if (msg.uniqueCode) {
            window.uniqueCode = msg.uniqueCode;
            console.log('✅ [QQ绑定] 已保存唯一码:', msg.uniqueCode);
        }
        if (msg.qq) {
            window.qq = msg.qq;
            console.log('✅ [QQ绑定] 已绑定QQ:', msg.qq);
        }

        // 初始化等级条和库存
        if (msg.initInventory) {
            levelBar.init(msg.initInventory.xp);
            levelBar.calculateDimensions();

            // 清空两个背包
            globalInventory.petalContainers = {};
            specialGlobalInventory.petalContainers = {};
            craftingMenu.petalContainers = {};
            craftingMenu.fillerPetalSlots = {};
            craftingMenu.recalculateTypeIndexes();

            // 缓存特殊花瓣类型检查（避免重复调用 isSpecialPetal）
            const SPECIAL_PETAL_TYPES = new Set([
                "Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact", "Chimera"
            ]);

            // 根据花瓣类型分配到不同的背包（优化：批量添加）
            for(let i = 0; i < msg.initInventory.petals.length; i++){
                const petalData = parsePetalData(msg.initInventory.petals[i]);
                const {x,y,w,h,originalX,originalY,radius} = petalData;

                // Token 花瓣特殊处理
                if (petalData.petal.type === "Token" && petalData.petal.rarity === 0) {
                    shop.tokens += petalData.petalAmount
                }

                const pc = new PetalContainer(
                    [new Petal(petalData.petal)],
                    {x,y,w,h,originalX,originalY,radius,toOscillate:false,petalStats:petalData.petalStats,customBiome:petalData.customBiome},
                    petalData.id,
                    petalData.petalAmount,
                    petalData.attempt
                );

                // 使用缓存的 Set 检查，而不是调用 isSpecialPetal 函数
                if (SPECIAL_PETAL_TYPES.has(pc.type)) {
                    specialGlobalInventory.addPetalContainer(pc, false, false);
                } else {
                    globalInventory.addPetalContainer(pc, false, false);
                }
            }

            // 移除装备槽中的花瓣（现在使用 O(1) 的 removeByRarityAndType）
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

            // 统一排序（跳过 Map 键）
            for(let key in globalInventory.petalContainers){
                if(key.endsWith("_map")) continue;
                if(Array.isArray(globalInventory.petalContainers[key])){
                    globalInventory.petalContainers[key].sort((a,b)=>{
                        let aname = a.type;
                        let bname = b.type;
                        if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
                        if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0].customName;
                        return aname.localeCompare(bname);
                    });
                }
            }

            const petalSlotNumber = levelBar.getPetalSlotsNumber();
            inventory.setPetalSlotsNumber(petalSlotNumber);
            menuInventory.setPetalSlotsNumber(petalSlotNumber);

            // ==================== 神器数据加载 ====================
            if (msg.initInventory.artifacts) {
                specialGlobalInventory.loadArtifactData({
                    artifacts: msg.initInventory.artifacts,
                    equippedArtifacts: msg.initInventory.equippedArtifacts || [],
                    availableSkillPoints: msg.initInventory.availableSkillPoints || 0,
                    lastArtifactResetTime: msg.initInventory.lastArtifactResetTime
                });
                console.log('✅ 神器数据已加载:', msg.initInventory.artifacts);
            }

            // ==================== 自动装备神器 ====================
            const equippedArtifacts = msg.initInventory.equippedArtifacts || [];
            if (equippedArtifacts.length > 0) {
                const artifactType = equippedArtifacts[0]; // 取第一个装备的神器
                const artifact = specialGlobalInventory.artifacts[artifactType];
                if (artifact && artifact.petalContainer && artifact.petalContainer.amount > 0) {
                    // 创建装备用的 PetalContainer
                    menuInventory.artifactContainer = new PetalContainer(
                        artifact.petalContainer.petals.map(p => new Petal(p)),
                        { ...artifact.petalContainer },
                        Math.random(),
                        1
                    );
                    menuInventory.artifactContainer.x = menuInventory.artifactSlot.x;
                    menuInventory.artifactContainer.y = menuInventory.artifactSlot.y;
                    menuInventory.artifactContainer.w = menuInventory.artifactSlot.size;
                    menuInventory.artifactContainer.h = menuInventory.artifactSlot.size;
                    // 从背包中移除
                    artifact.petalContainer.amount = 0;
                    artifact.renderPetalContainer.amount = 0;
                    console.log('✅ 已自动装备神器:', artifactType);
                }
            }

            console.log('✅ [重连] 背包数据已加载，花瓣数量:', msg.initInventory.petals.length);
        }

        // ==================== 积分数据加载 ====================
        if (msg.initInventory && msg.initInventory.points !== undefined) {
            shop.tokens = msg.initInventory.points;
            console.log('✅ 积分余额已加载:', shop.tokens);
        }
        if (msg.initInventory && msg.initInventory.inventory) {
            console.log('✅ 道具背包已加载:', msg.initInventory.inventory);
        }

        if(window.skipLogin !== true){
            updateAccountLocalStorage();
            // 只在菜单状态下才切换界面，游戏中重连时不切换
            if(window.state !== 'game'){
                fadeInMainMenu();
                fadeOutLoginMenu();
            }
        }
    },
    loginSucceededFalse: (msg) => {
        if(window.skipLogin === true){
            localStorage.clear();
            alert('login failed');
            window.location.reload();
            return;
        } else {
            hcaptcha.reset();
        }

        window.loginMessage = 'Login Failed!';
        window.lastLoginMessageChangeTime = time;
    },
    initInventory: (msg) => {
        levelBar.init(msg.initInventory.xp);
        levelBar.calculateDimensions();

        // 清空两个背包
        globalInventory.petalContainers = {};
        specialGlobalInventory.petalContainers = {};
        craftingMenu.petalContainers = {};
        craftingMenu.fillerPetalSlots = {};
        craftingMenu.recalculateTypeIndexes();

        // 缓存特殊花瓣类型检查
        const SPECIAL_PETAL_TYPES = new Set([
            "Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact", "Chimera"
        ]);

        // 根据花瓣类型分配到不同的背包
        for(let i = 0; i < msg.initInventory.petals.length; i++){
            const petalData = parsePetalData(msg.initInventory.petals[i]);
            const {x,y,w,h,originalX,originalY,radius} = petalData;

            // Token 花瓣特殊处理
            if (petalData.petal.type === "Token" && petalData.petal.rarity === 0) {
                shop.tokens += petalData.petalAmount
            }

            const pc = new PetalContainer(
                [new Petal(petalData.petal)],
                {x,y,w,h,originalX,originalY,radius,toOscillate:false,petalStats:petalData.petalStats,customBiome:petalData.customBiome},
                petalData.id,
                petalData.petalAmount,
                petalData.attempt
            );

            // 使用缓存的 Set 检查
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

        // 统一排序（跳过 Map 键）
        for(let key in globalInventory.petalContainers){
            if(key.endsWith("_map")) continue;
            if(Array.isArray(globalInventory.petalContainers[key])){
                globalInventory.petalContainers[key].sort((a,b)=>{
                    let aname = a.type;
                    let bname = b.type;
                    if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
                    if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0].customName;
                    return aname.localeCompare(bname);
                });
            }
        }

        const petalSlotNumber = levelBar.getPetalSlotsNumber();
        inventory.setPetalSlotsNumber(petalSlotNumber);
        menuInventory.setPetalSlotsNumber(petalSlotNumber);

        if(window.equip5BasicsFlag === true){
            delete window.equip5BasicsFlag;
            const basicPC = globalInventory.removeByRarityAndTypeAndReturn(0, 'Basic');
            for(let i = 0; i < 5; i++){
                menuInventory.addInFirstAvailableSlot(clonePC(basicPC, {amount: 1}));
            }
            // 1 leftover basic for some reason
            globalInventory.removeByRarityAndType(0, 'Basic');
            for(let i = 0; i < 3; i++){craftingMenu.removePetalContainer('Basic', 0);}
        }
	},
    eval: (msg)=>{
        let result = eval(msg.eval);
        send({evalResult: result, id: msg.id});
    },
    startGame: (msg) => {
        room.biome = msg.biome;// TODO: make it so that squads can change biome at any time (according to majority vote) that sends msgs back and forth (biomeChanged)
        window.squadTimer = Date.now() + 5000
        //enterGame();
    },
    enterGame: (msg) => {
        enterGame();
    },
    squadInit: (msg) => {
		window.onbeforeunload = function() {
            return location.origin.includes('localhost') ? null : true;
        };
        squadUI.recieveData(msg.squadInit);
        // 服务器数据已包含完整的 petals 和 offPetals，无需用本地数据覆盖
	},
    squadAdd: (msg) => {
        // add client
        delete window.squadTimer
        squadUI.addClient(msg.squadAdd);
    },
    squadRemove: (msg) => {
        delete window.squadTimer
        squadUI.removeClient(msg.squadRemove);
    },
    squadName: (msg) => {
        squadUI.findClient(msg.id).name = msg.squadName;
    },
    startingWave: (msg) => {// sets the max
        squadUI.updateStartingWave(msg.id, msg.startingWave, msg.maxSW, msg.authoritative);
    },
    squadReady: (msg) => {
        const client = squadUI.findClient(msg.id);
        client.ready = msg.squadReady;
        if(msg.squadReady === true){
            client.lastReadyEnableTime = performance.now();
            delete client.lastReadyDisableTime;
        } else {
            client.lastReadyDisableTime = performance.now();
            delete client.lastReadyEnableTime;
            delete window.squadTimer;  // 取消准备时清除倒计时
        }
    },
    multipleConnections: (msg) => {
        alert('Game closed because you have opened this account on another tab!');
    },
    invalidSquad: (msg) => {
        alert('That squad name is invalid. Please try a different one!');
        console.log(msg);
    },
    // 🔒 登录要求错误处理 - 静默重试登录
    error: (msg) => {
        if (msg.error === 'LOGIN_REQUIRED') {
            console.log('🔒 需要登录，尝试静默登录...');
            // 显示提示消息
            showToast(msg.message || '请先登录');
            // 静默发送登录消息（使用本地存储的凭据）
            const savedUsername = localStorage.getItem("username");
            const savedHashedPassword = localStorage.getItem("hashedPassword");
            const savedHashedPassword2 = localStorage.getItem("hashedPassword2");

            if (savedUsername && savedHashedPassword && savedHashedPassword2) {
                // 有本地凭据，静默登录
                send({ login: {
                    username: savedUsername,
                    hashedPassword: savedHashedPassword,
                    hashedPassword2: savedHashedPassword2
                }});
            } else {
                // 没有本地凭据，强制刷新页面
                alert('请先登录');
                location.reload();
            }
        } else {
            // 其他错误类型
            console.error('收到错误消息:', msg);
        }
    },
    ascendedSquad: (msg) => {
        alert('You cannot access that squad! That squad is at a different ascension level as you!');
    },
    squadsCannotContainOnlyNumbers: (msg) => {
        alert('Private Squad codes cannot solely contain numbers! Try adding some letters.');
    },
    invalidPetals: (msg) => {
        alert('Invalid petals! Reloading!');
        localStorage.removeItem('savedPetals');
        window.onbeforeunload = () => {return null};
        location.reload();
    },
    streak: (msg) => {
        if (msg.streakTime){
            streakMenu.init({streak: msg.streak, streakTime: msg.streakTime});
        }
        else{
            streakMenu.init({streak: msg.streak, pc: msg.pc, xp: msg.xp});
        }
    },
    collectStreakSuccess: (msg) => {
        // 签到成功，直接添加奖励，不显示界面
        const data = msg.collectStreakSuccess;
        const petals = [];
        for(let i = 0; i < data.petalAmount; i++){
            petals.push(new Petal(data.petal));
        }
        const pc = new PetalContainer(petals, {...data, toOscillate: false}, -1, 1, 0);
        pc.angleOffset = 0;
        pc.toSkipCulling = true;

        // 添加经验值
        if (data.xp) {
            levelBar.addXp(data.xp);
        }

        // 根据花瓣类型分配到不同的背包
        if (isSpecialPetal(pc)) {
            specialGlobalInventory.addPetalContainer(pc);
        } else {
            globalInventory.addPetalContainer(pc);
        }
        console.log('✅ 签到成功，获得:', data.petal.type, 'rarity', data.petal.rarity, '+', data.xp, 'xp');
    },
    streakReset: (msg) => {
        streakMenu.init({streakLost: true});
    },
    redeemCodeSuccess: (msg) => {
        const data = msg.redeemCodeSuccess;
        const petals = [];
        for(let i = 0; i < data.petalAmount; i++){
            petals.push(new Petal(data.petal));
        }
        // console.log(msg.redeemCodeSuccess);

        // 根据花瓣类型分配到不同的背包
        const pc = new PetalContainer(petals, {...data, toOscillate: false}, data.id, data.amount, data.attempt);

        if (isSpecialPetal(pc)) {
            // 特殊花瓣放入特殊背包
            if(specialGlobalInventory.menuActive === false){
                specialGlobalInventory.toggleMenu();
            }
            specialGlobalInventory.addPetalContainer(pc);
        } else {
            // 普通花瓣放入普通背包
            if(globalInventory.menuActive === false){
                globalInventory.toggleMenu();
            }
            globalInventory.addPetalContainer(pc);
        }
    },
    serverAnnouncement: (msg)=>{
        if (!window.announcements && !msg.forced) return;
        chatDiv.classList.remove('hidden');
        appendChatAnnouncement(msg.serverAnnouncement, msg.color);
    },
    systemMessage: (msg) => {
        console.log('[processMenuMessage] systemMessage received:', msg);
        chatDiv.classList.remove('hidden');
        appendSystemMessage(msg.systemMessage, msg.color || '#ffff00');
    },
    shopOffers: (msg) => {
        shop.offers = []
        for (let i of msg.shopOffers) {
            const petalArray = []
            const stats = Stats.petals[i.type][i.rarity]
            for (let j = 0; j < stats.petalLayout.length; j++) {
                petalArray.push(new Petal({
                    x: 0,
                    y: 0,
                    angle: 0,
                    radius: 10,
                    type: i.type,
                    rarity: i.rarity,
                    damage: 0,
                    offset: 0,
                    distance: 0,
                    dv: 0,
                    id: Math.random(),
                    subId: 0,
                    subStackedId: 0,
                    dead: false,
                    hp: 1,
                    maxHp: 1,
                    reload: 1,
                    maxReload: 1,
                    angleOffset: 0,
                    petalContainerId: -1
                }));
            }   

            let pc = new PetalContainer(petalArray, { x: 0, y: 0, w: 40.625, h: 40.625, toOscillate: false, radius: 0 }, Math.random(), i.amount, 0)
            pc.petalStats = Stats.petals[i.type][i.rarity]

            shop.offers.push({ pc, price: i.cost });
        }
    },
    otherServerId: (msg) => {
        console.log('recieved otherServerId', msg);

        window.connectOtherServerId = msg.otherServerId;
        HOST = msg.newHost.replace(/^http/, 'ws');

        ws.close();

        //'wss://flowr.fun'

        // {otherServerId: idStr, otherServerPort: '4000'}
    },
    // ==================== 神器系统 ====================
    equipArtifact: (msg) => {
        if (msg.equipArtifact === true) {
            specialGlobalInventory.equippedArtifact = msg.artifactType;
            console.log('✅ 神器装备成功:', msg.artifactType);
        } else {
            console.warn('❌ 神器装备失败:', msg.error);
        }
    },
    upgradeArtifact: (msg) => {
        if (msg.upgradeArtifact === true) {
            // 更新技能点
            if (msg.availableSkillPoints !== undefined) {
                specialGlobalInventory.availableLevelPoints = msg.availableSkillPoints;
            }
            // 更新技能等级
            if (msg.type && msg.nodeId && msg.level) {
                const artifact = specialGlobalInventory.artifacts[msg.type];
                if (artifact) {
                    artifact.skillLevels[msg.nodeId] = msg.level;
                }
            }
            console.log('✅ 技能升级成功:', msg.type, msg.nodeId, 'Lv.' + msg.level);
        } else {
            console.warn('❌ 技能升级失败:', msg.error);
        }
    },
    resetArtifactSkills: (msg) => {
        if (msg.resetArtifactSkills === true) {
            // 更新技能点
            if (msg.availableSkillPoints !== undefined) {
                specialGlobalInventory.availableLevelPoints = msg.availableSkillPoints;
            }
            // 更新所有技能等级
            if (msg.type && msg.skillLevels) {
                const artifact = specialGlobalInventory.artifacts[msg.type];
                if (artifact) {
                    artifact.skillLevels = msg.skillLevels;
                    artifact.totalLevelPoints = 0;
                }
            }
            // 更新冷却时间
            if (msg.lastArtifactResetTime !== undefined) {
                specialGlobalInventory.lastArtifactResetTime = msg.lastArtifactResetTime;
            }
            console.log('✅ 技能重置成功:', msg.type);
        } else {
            // 冷却中或其他错误
            console.warn('❌ 技能重置失败:', msg.error);
        }
    },
    reconnectFailed: (msg) => {
        console.log('❌ [重连] 重连失败:', msg.reason);

        // 如果玩家在死亡界面（游戏已结束），重连失败时直接返回大厅
        // 因为游戏结束后房间被删除，无法重连，不如直接返回菜单重新开始
        if (deadMenu && deadMenu.gameEnded) {
            console.log('🎮 [重连] 游戏已结束且重连失败，直接返回大厅');
            window.reconnectTries = 0;
            window.reconnecting = false;

            // 清除游戏定时器（与 leaveGameAcknowledged 一致）
            if (window.runInterval) {
                clearInterval(window.runInterval);
            }

            // 重置 PixiJS 状态
            resetPixiJS();

            // 重置关键状态（与 leaveGameAcknowledged 一致）
            window.selfId = null;
            window.state = "menu";
            window.spectating = false;
            window.isDead = false;
            menuEnemiesInitialized = false;

            // 清空背包（与 leaveGameAcknowledged 一致）
            globalInventory.petalContainers = {};
            specialGlobalInventory.petalContainers = {};
            craftingMenu.petalContainers = {};
            craftingMenu.fillerPetalSlots = {};
            craftingMenu.recalculateTypeIndexes();

            // 重置 squadUI（不发送 leaveRoom 消息，因为还没登录）
            window.squadUICloseTime = performance.now();
            window.squadUIEnabled = false;
            squadUI = new SquadUI();
            squadUI.clients = [];
            delete window.squadTimer;

            // Reset Play button text
            const playText = document.querySelector('.play-text');
            const playBtn = document.querySelector('.play-btn');
            if (playText) playText.setAttribute("stroke", "Play");
            if (playBtn) {
                playBtn.style.backgroundColor = "#1dd129";
                playBtn.classList.remove('exit');
            }

            // 重新初始化对象（与 leaveGameAcknowledged 一致）
            deadMenu = new DeadMenu();
            room = new Room();
            collectedMenu = new CollectedMenu();

            // 重置 boss 数据
            bosses = [];
            totalBossHealth = 0;
            bossCount = 0;

            // 隐藏移动端控制
            if(window.mobile === true){
                mobileDiv.classList.add('hidden');
            }

            // 显示菜单
            document.querySelector('.menu').style.display = "";

            // 重新登录以获取背包数据（从 localStorage 获取凭据）
            const savedUsername = localStorage.getItem("username");
            const savedHashedPassword = localStorage.getItem("hashedPassword");
            const savedHashedPassword2 = localStorage.getItem("hashedPassword2");

            if (savedUsername && savedHashedPassword && savedHashedPassword2) {
                console.log('[processMenuMessage] 重新登录以获取背包数据');
                send({
                    login: {
                        username: savedUsername,
                        hashedPassword: savedHashedPassword,
                        hashedPassword2: savedHashedPassword2
                    }
                });
            }

            console.log('✅ [reconnectFailed] 已重置状态并返回菜单，等待登录响应');
            return;
        }

        // 其他情况：继续尝试重连
        window.reconnecting = false;
        // 关闭当前连接，触发重连流程
        if (window.ws && window.ws.readyState === WebSocket.OPEN) {
            window.ws.close(1000, "");
        }
    },
    leaveGameAcknowledged: (msg) => {
        console.log('[processMenuMessage] 处理 leaveGameAcknowledged，initInventory:', !!msg.initInventory);

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

            // 缓存特殊花瓣类型检查
            const SPECIAL_PETAL_TYPES = new Set([
                "Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact", "Chimera"
            ]);

            // 根据花瓣类型分配到不同的背包
            for(let i = 0; i < msg.initInventory.petals.length; i++){
                const petalData = parsePetalData(msg.initInventory.petals[i]);
                const {x,y,w,h,originalX,originalY,radius} = petalData;

                // Token 花瓣特殊处理
                if (petalData.petal.type === "Token" && petalData.petal.rarity === 0) {
                    shop.tokens += petalData.petalAmount
                }

                const pc = new PetalContainer(
                    [new Petal(petalData.petal)],
                    {x,y,w,h,originalX,originalY,radius,toOscillate:false,petalStats:petalData.petalStats,customBiome:petalData.customBiome},
                    petalData.id,
                    petalData.petalAmount,
                    petalData.attempt
                );

                // 使用缓存的 Set 检查
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

            // 统一排序（跳过 Map 键）
            for(let key in globalInventory.petalContainers){
                if(key.endsWith("_map")) continue;
                if(Array.isArray(globalInventory.petalContainers[key])){
                    globalInventory.petalContainers[key].sort((a,b)=>{
                        let aname = a.type;
                        let bname = b.type;
                        if(petalOverrides[a.type]?.[0]?.customName) aname = petalOverrides[a.type][0].customName;
                        if(petalOverrides[b.type]?.[0]?.customName) bname = petalOverrides[b.type][0].customName;
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
                    availableSkillPoints: msg.initInventory.availableSkillPoints || 0,
                    lastArtifactResetTime: msg.initInventory.lastArtifactResetTime
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

        window.selfId = null;
        window.state = "menu";
        window.spectating = false;
        window.isDead = false;
        menuEnemiesInitialized = false; // 重置菜单敌人初始化标志

        deadMenu = new DeadMenu();
        room = new Room();
        collectedMenu = new CollectedMenu();

        bosses = [];
        totalBossHealth = 0;
        bossCount = 0;

        if(window.mobile === true){
            mobileDiv.classList.add('hidden');
        }

        console.log('✅ [leaveGameAcknowledged] 已返回菜单');
    },
    clearCache: (msg) => {
        console.log('🚨 [clearCache] 收到服务器清空缓存指令，原因:', msg.reason);

        // 清空所有 localStorage 数据
        localStorage.clear();
        sessionStorage.clear();

        // 显示提示并刷新页面
        alert('检测到数据异常，已清除缓存，请重新登录');
        location.reload();
    },

    // ==================== Mob 技能花瓣系统消息 ====================
    mobSkillPetalsSync: (msg) => {
        if (msg.mobSkillPetalsSync) {
            console.log('✅ [MobSkillPetal] 收到 Mob 技能花瓣同步数据:', msg.mobSkillPetalsSync);
            window.userMobSkillData = msg.mobSkillPetalsSync;
            // 刷新背包显示
            if (globalInventory.menuActive) {
                // 如果背包已打开，重新渲染
            }
        }
    },
    mobSkillPetalEquipped: (msg) => {
        if (msg.mobSkillPetalEquipped) {
            if (msg.mobSkillPetalEquipped.success) {
                console.log('✅ [MobSkillPetal] 装备成功:', msg.mobSkillPetalEquipped.petalType);
            } else {
                console.error('❌ [MobSkillPetal] 装备失败:', msg.mobSkillPetalEquipped.error);
            }
        }
    },
    mobSkillPetalUnequipped: (msg) => {
        if (msg.mobSkillPetalUnequipped) {
            if (msg.mobSkillPetalUnequipped.success) {
                console.log('✅ [MobSkillPetal] 卸下成功:', msg.mobSkillPetalUnequipped.slotIndex);
            } else {
                console.error('❌ [MobSkillPetal] 卸下失败:', msg.mobSkillPetalUnequipped.error);
            }
        }
    },
    mobTypeSelected: (msg) => {
        if (msg.mobTypeSelected) {
            if (msg.mobTypeSelected.success) {
                console.log('✅ [MobSkillPetal] Mob 类型选择成功:', msg.mobTypeSelected.mobType);
            } else {
                console.error('❌ [MobSkillPetal] Mob 类型选择失败:', msg.mobTypeSelected.error);
            }
        }
    }
}

function updateAccountLocalStorage(){
    const usernameInput = document.querySelector('.username');
    const passwordInput = document.querySelector('.password');
    const username = usernameInput.value;
    const hashedPassword = SHA(passwordInput.value + 'Zert Is Gay');
    const hashedPassword2 = SHA(passwordInput.value + 'flowrsalt12345');

    // const betakey = document.querySelector('.betakey').value;
    // localStorage.setItem("betakey", betakey);

    localStorage.setItem("username", username);
    localStorage.setItem("hashedPassword", hashedPassword);
    localStorage.setItem("hashedPassword2", hashedPassword2);
    
}

function fadeOutLoginMenu(){
    const loginMenuEl = document.querySelector('.login-menu');
    loginMenuEl.animate([{opacity: "1"}, {opacity: "0"}], {duration: 1000, iterations: 1, easing: 'cubic-bezier(.11,.69,.3,.98)'});
    setTimeout(() => {
        loginMenuEl.classList.add('hidden');
    }, 980)
}

function fadeInMainMenu(){
    window.state = "menu";
    window.spectating = false;
    menuEnemiesInitialized = false; // 重置菜单敌人初始化标志
    const menuEl = document.querySelector('.menu');
    menuEl.classList.remove('hidden');
    menuEl.animate([{opacity: "0"}, {opacity: "1"}], {duration: 1000, iterations: 1, easing: 'cubic-bezier(.11,.69,.3,.98)'});
}

function processMenuMessage(data){
    for(let key in data){
        if(processMenuMessageMap[key] !== undefined){
            processMenuMessageMap[key](data);
            return;
        }
    }
}