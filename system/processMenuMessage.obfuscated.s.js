const processMenuMessageMap = {
    'craftResults': _0x1f717f => {
        craftingMenu['processCraftResults'](_0x1f717f['craftResults']['success'], _0x1f717f['craftResults']['amount'], _0x1f717f['craftResults']['petalData'], _0x1f717f['craftResults']['attemptNumber'], _0x1f717f['craftResults']['lost']);
    },
    'changePetals': _0x1db987 => {
        _0x1db987['changePetals'] && squadUI['updateFlowerPetals'](_0x1db987['changePetals'], _0x1db987['id'], !![]), _0x1db987['offPetals'] && squadUI['updateFlowerOffPetals'](_0x1db987['offPetals'], _0x1db987['id'], !![]);
    },
    'deleteSquad': _0x46e26e => {
        squadUI['public'] = !![], squadUI['clients'] = [];
    },
    'character': _0x5f27e3 => {
        squadUI['updateCharacter'](_0x5f27e3['character'], _0x5f27e3['id']);
    },
    'changePasswordSucceeded': _0x162b5b => {
        console['log'](_0x162b5b), _0x162b5b['changePasswordSucceeded'] === !![] ? (localStorage['setItem']('hashedPassword', hashedPassword), localStorage['setItem']('hashedPassword2', hashedPassword2), alert('Password\x20successfully\x20changed.')) : alert('Password\x20change\x20failed\x20due\x20to\x20internal\x20failure.');
    },
    'initPoints': _0x228a3d => {
        _0x228a3d['initPoints'] && _0x228a3d['initPoints']['success'] && (shop['tokens'] = _0x228a3d['initPoints']['balance'], console['log']('✅\x20积分余额已更新:', shop['tokens']));
    },
    'shopItems': _0x50d7b5 => {
        _0x50d7b5['shopItems'] && _0x50d7b5['shopItems']['success'] && (shop['updateShopItems'](_0x50d7b5['shopItems']['items']), console['log']('✅\x20商店商品已更新，共', _0x50d7b5['shopItems']['items']['length'], '个商品'));
    },
    'purchaseResult': _0x37c20c => {
        if (_0x37c20c['purchaseResult']) {
            if (_0x37c20c['purchaseResult']['success']) {
                shop['tokens'] = _0x37c20c['purchaseResult']['newBalance'], console['log']('✅\x20购买成功！新余额:', shop['tokens']);
                const _0x109871 = _0x37c20c['purchaseResult']['result'];
                if (_0x109871) {
                    if (_0x109871['type'] === 'xp')
                        levelBar['init'](levelBar['xp'] + _0x109871['xp']), levelBar['calculateDimensions']();
                    else {
                        if (_0x109871['type'] === 'petal')
                            send({ 'getPetals': !![] });
                        else {
                            if (_0x109871['type'] === 'skillPoint')
                                console['log']('✅\x20获得', _0x109871['skillPoint'], '个技能点，当前总技能点:', _0x109871['newSkillPoints']), send({ 'initUserInfo': !![] });
                            else
                                _0x109871['type'] === 'item' && console['log']('获得道具:', _0x109871['item']);
                        }
                    }
                }
                shop['initShopItems']();
            } else
                alert('购买失败:\x20' + (_0x37c20c['purchaseResult']['error'] || '未知错误'));
        }
    },
    'transferResult': _0x45be1b => {
        _0x45be1b['transferResult'] && (_0x45be1b['transferResult']['success'] ? (shop['tokens'] = _0x45be1b['transferResult']['newBalance'], console['log']('✅\x20转账成功！新余额:', shop['tokens']), alert('转账成功！')) : alert('转账失败:\x20' + (_0x45be1b['transferResult']['error'] || '未知错误')));
    },
    'petals': _0x66a1e => {
        if (_0x66a1e['petals']) {
            console['log']('✅\x20收到花瓣数据，刷新背包，数量:', _0x66a1e['petals']['length']);
            _0x66a1e['xp'] !== undefined && (levelBar['init'](_0x66a1e['xp']), levelBar['calculateDimensions']());
            globalInventory['petalContainers'] = {}, specialGlobalInventory['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes']();
            const _0xea3191 = new Set([
                'Abyssal\x20Artifact',
                'Scorched\x20Artifact',
                'Verdant\x20Artifact',
                'Cosmic\x20Artifact',
                'Chimera'
            ]);
            for (let _0x161d23 = 0x0; _0x161d23 < _0x66a1e['petals']['length']; _0x161d23++) {
                const _0x436863 = parsePetalData(_0x66a1e['petals'][_0x161d23]), {
                        x: _0x250e65,
                        y: _0x2def2f,
                        w: _0x409abe,
                        h: _0x57a4ef,
                        originalX: _0x4c3cac,
                        originalY: _0x14f3d1,
                        radius: _0x1bc395
                    } = _0x436863;
                _0x436863['petal']['type'] === 'Token' && _0x436863['petal']['rarity'] === 0x0 && (shop['tokens'] += _0x436863['petalAmount']);
                const _0x13f81f = new PetalContainer([new Petal(_0x436863['petal'])], {
                    'x': _0x250e65,
                    'y': _0x2def2f,
                    'w': _0x409abe,
                    'h': _0x57a4ef,
                    'originalX': _0x4c3cac,
                    'originalY': _0x14f3d1,
                    'radius': _0x1bc395,
                    'toOscillate': ![],
                    'petalStats': _0x436863['petalStats'],
                    'customBiome': _0x436863['customBiome']
                }, _0x436863['id'], _0x436863['petalAmount'], _0x436863['attempt']);
                _0xea3191['has'](_0x13f81f['type']) ? specialGlobalInventory['addPetalContainer'](_0x13f81f, ![], ![]) : globalInventory['addPetalContainer'](_0x13f81f, ![], ![]);
            }
            console['log']('✅\x20背包刷新完成');
        }
    },
    'initUserInfo': _0x1c9c8f => {
        _0x1c9c8f['initUserInfo'] && _0x1c9c8f['initUserInfo']['success'] && (console['log']('✅\x20用户信息已更新，技能点:', _0x1c9c8f['initUserInfo']['availableSkillPoints']), _0x1c9c8f['initUserInfo']['points'] !== undefined && (shop['tokens'] = _0x1c9c8f['initUserInfo']['points']), _0x1c9c8f['initUserInfo']['xp'] !== undefined && (levelBar['init'](_0x1c9c8f['initUserInfo']['xp']), levelBar['calculateDimensions']()), _0x1c9c8f['initUserInfo']['availableSkillPoints'] !== undefined && (specialGlobalInventory && specialGlobalInventory['artifacts'] && (specialGlobalInventory['availableLevelPoints'] = _0x1c9c8f['initUserInfo']['availableSkillPoints'])), (_0x1c9c8f['initUserInfo']['mobSkillPetals'] !== undefined || _0x1c9c8f['initUserInfo']['equippedMobSkillPetals'] !== undefined) && (window['userMobSkillData'] = {
            'equipped': _0x1c9c8f['initUserInfo']['equippedMobSkillPetals'] || [],
            'backpack': _0x1c9c8f['initUserInfo']['mobSkillPetals'] || [],
            'selectedMobType': _0x1c9c8f['initUserInfo']['selectedMobType'] || 'Hornet'
        }, console['log']('✅\x20Mob\x20技能花瓣数据已同步:', window['userMobSkillData'])));
    },
    'transactionHistory': _0x1cdcf4 => {
        _0x1cdcf4['transactionHistory'] && _0x1cdcf4['transactionHistory']['success'] && console['log']('交易记录:', _0x1cdcf4['transactionHistory']['transactions']);
    },
    'createAccountSucceeded': _0x4021cd => {
        if (_0x4021cd['createAccountSucceeded'] === 'SUCCESS') {
            window['createAccountSucceededFlag'] = !![], window['equip5BasicsFlag'] = !![];
            _0x4021cd['reconnectId'] && (window['reconnectId'] = _0x4021cd['reconnectId'], console['log']('✅\x20[重连]\x20已保存\x20reconnectId:', _0x4021cd['reconnectId']));
            _0x4021cd['username'] && (window['username'] = _0x4021cd['username']);
            _0x4021cd['uniqueCode'] && (window['uniqueCode'] = _0x4021cd['uniqueCode'], console['log']('✅\x20[QQ绑定]\x20已保存唯一码:', _0x4021cd['uniqueCode']));
            _0x4021cd['qq'] && (window['qq'] = _0x4021cd['qq'], console['log']('✅\x20[QQ绑定]\x20已绑定QQ:', _0x4021cd['qq']));
            if (_0x4021cd['initInventory']) {
                levelBar['init'](_0x4021cd['initInventory']['xp']), levelBar['calculateDimensions'](), globalInventory['petalContainers'] = {}, specialGlobalInventory['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes']();
                const _0x18e97a = new Set([
                    'Abyssal\x20Artifact',
                    'Scorched\x20Artifact',
                    'Verdant\x20Artifact',
                    'Cosmic\x20Artifact',
                    'Chimera'
                ]);
                for (let _0x9a07a = 0x0; _0x9a07a < _0x4021cd['initInventory']['petals']['length']; _0x9a07a++) {
                    const _0x2b0c81 = parsePetalData(_0x4021cd['initInventory']['petals'][_0x9a07a]), {
                            x: _0x2da1f3,
                            y: _0xf76adc,
                            w: _0x27042c,
                            h: _0x32ba54,
                            originalX: _0x2b707f,
                            originalY: _0x5715d8,
                            radius: _0x22d383
                        } = _0x2b0c81;
                    _0x2b0c81['petal']['type'] === 'Token' && _0x2b0c81['petal']['rarity'] === 0x0 && (shop['tokens'] += _0x2b0c81['petalAmount']);
                    const _0x1b5a63 = new PetalContainer([new Petal(_0x2b0c81['petal'])], {
                        'x': _0x2da1f3,
                        'y': _0xf76adc,
                        'w': _0x27042c,
                        'h': _0x32ba54,
                        'originalX': _0x2b707f,
                        'originalY': _0x5715d8,
                        'radius': _0x22d383,
                        'toOscillate': ![],
                        'petalStats': _0x2b0c81['petalStats'],
                        'customBiome': _0x2b0c81['customBiome']
                    }, _0x2b0c81['id'], _0x2b0c81['petalAmount'], _0x2b0c81['attempt']);
                    _0x18e97a['has'](_0x1b5a63['type']) ? specialGlobalInventory['addPetalContainer'](_0x1b5a63, ![], ![]) : globalInventory['addPetalContainer'](_0x1b5a63, ![], ![]);
                }
                for (let _0x3f5194 in menuInventory['topPetalContainers']) {
                    const _0x29a468 = menuInventory['topPetalContainers'][_0x3f5194];
                    _0x18e97a['has'](_0x29a468['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x29a468['rarity'], _0x29a468['type']) : globalInventory['removeByRarityAndType'](_0x29a468['rarity'], _0x29a468['type']);
                }
                for (let _0x1d8bfd in menuInventory['bottomPetalContainers']) {
                    const _0x459e42 = menuInventory['bottomPetalContainers'][_0x1d8bfd];
                    _0x18e97a['has'](_0x459e42['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x459e42['rarity'], _0x459e42['type']) : globalInventory['removeByRarityAndType'](_0x459e42['rarity'], _0x459e42['type']);
                }
                for (let _0x3e44ee in globalInventory['petalContainers']) {
                    if (_0x3e44ee['endsWith']('_map'))
                        continue;
                    Array['isArray'](globalInventory['petalContainers'][_0x3e44ee]) && globalInventory['petalContainers'][_0x3e44ee]['sort']((_0x90fd19, _0x1b9e43) => {
                        let _0x15f6df = _0x90fd19['type'], _0xf4df44 = _0x1b9e43['type'];
                        if (petalOverrides[_0x90fd19['type']]?.[0x0]?.['customName'])
                            _0x15f6df = petalOverrides[_0x90fd19['type']][0x0]['customName'];
                        if (petalOverrides[_0x1b9e43['type']]?.[0x0]?.['customName'])
                            _0xf4df44 = petalOverrides[_0x1b9e43['type']][0x0]['customName'];
                        return _0x15f6df['localeCompare'](_0xf4df44);
                    });
                }
                const _0x31e91c = levelBar['getPetalSlotsNumber']();
                inventory['setPetalSlotsNumber'](_0x31e91c), menuInventory['setPetalSlotsNumber'](_0x31e91c), _0x4021cd['initInventory']['artifacts'] && (specialGlobalInventory['loadArtifactData']({
                    'artifacts': _0x4021cd['initInventory']['artifacts'],
                    'equippedArtifacts': _0x4021cd['initInventory']['equippedArtifacts'] || [],
                    'availableSkillPoints': _0x4021cd['initInventory']['availableSkillPoints'] || 0x0,
                    'lastArtifactResetTime': _0x4021cd['initInventory']['lastArtifactResetTime']
                }), console['log']('✅\x20神器数据已加载（新建账户）:', _0x4021cd['initInventory']['artifacts'])), _0x4021cd['initInventory']['points'] !== undefined && (shop['tokens'] = _0x4021cd['initInventory']['points'], console['log']('✅\x20积分余额已加载:', shop['tokens'])), _0x4021cd['initInventory']['inventory'] && console['log']('✅\x20道具背包已加载:', _0x4021cd['initInventory']['inventory']);
            }
            fadeOutLoginMenu(), fadeInMainMenu(), updateAccountLocalStorage();
        } else
            _0x4021cd['createAccountSucceeded'] === 'ERR_INVALID' && (window['loginMessage'] = 'Account\x20Creation\x20Failed:\x20Invalid\x20Username\x20or\x20Password!'), _0x4021cd['createAccountSucceeded'] === 'ERR_TAKEN' && (window['loginMessage'] = 'That\x20Username\x20is\x20Taken!'), _0x4021cd['createAccountSucceeded'] === 'ERR_SPACE' && (window['loginMessage'] = 'Usernames\x20cannot\x20start\x20or\x20end\x20with\x20spaces!'), _0x4021cd['createAccountSucceeded'] === 'ERR_BAD' && (window['loginMessage'] = 'That\x20username\x20is\x20inappropriate!'), _0x4021cd['createAccountSucceeded'] === 'ERR_ALPHANUMERIC' && (window['loginMessage'] = 'Username\x20must\x20be\x20alphanumeric\x20(Allowed\x20characters:\x20a-z,\x20A-Z,\x200-9,\x20_)'), window['lastLoginMessageChangeTime'] = time, hcaptcha['reset']();
    },
    'loginSucceeded': _0x2bd3a1 => {
        _0x2bd3a1['loginSucceeded'] === !![] ? processMenuMessageMap['loginSucceededTrue'](_0x2bd3a1) : processMenuMessageMap['loginSucceededFalse'](_0x2bd3a1), _0x2bd3a1['captchaStatus'] && (window['captchaStatus'] = !![]);
    },
    'captchaStatusChange': _0x41fb20 => {
        window['captchaStatus'] = _0x41fb20['captchaStatusChange'];
    },
    'loginSucceededTrue': _0x9e48e7 => {
        window['createAccountSucceededFlag'] === undefined && (window['loginMessage'] = 'Login\x20Succeeded!', window['lastLoginMessageChangeTime'] = time);
        _0x9e48e7['reconnectId'] && (window['reconnectId'] = _0x9e48e7['reconnectId'], console['log']('✅\x20[重连]\x20已保存\x20reconnectId:', _0x9e48e7['reconnectId']));
        _0x9e48e7['username'] && (window['username'] = _0x9e48e7['username']);
        _0x9e48e7['uniqueCode'] && (window['uniqueCode'] = _0x9e48e7['uniqueCode'], console['log']('✅\x20[QQ绑定]\x20已保存唯一码:', _0x9e48e7['uniqueCode']));
        _0x9e48e7['qq'] && (window['qq'] = _0x9e48e7['qq'], console['log']('✅\x20[QQ绑定]\x20已绑定QQ:', _0x9e48e7['qq']));
        if (_0x9e48e7['initInventory']) {
            levelBar['init'](_0x9e48e7['initInventory']['xp']), levelBar['calculateDimensions'](), globalInventory['petalContainers'] = {}, specialGlobalInventory['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes']();
            const _0x32b27e = new Set([
                'Abyssal\x20Artifact',
                'Scorched\x20Artifact',
                'Verdant\x20Artifact',
                'Cosmic\x20Artifact',
                'Chimera'
            ]);
            for (let _0x2e0adf = 0x0; _0x2e0adf < _0x9e48e7['initInventory']['petals']['length']; _0x2e0adf++) {
                const _0x355854 = parsePetalData(_0x9e48e7['initInventory']['petals'][_0x2e0adf]), {
                        x: _0xf7992f,
                        y: _0x524d85,
                        w: _0x3b049f,
                        h: _0x991a43,
                        originalX: _0x5898a6,
                        originalY: _0x18e664,
                        radius: _0x3aef4d
                    } = _0x355854;
                _0x355854['petal']['type'] === 'Token' && _0x355854['petal']['rarity'] === 0x0 && (shop['tokens'] += _0x355854['petalAmount']);
                const _0x19f996 = new PetalContainer([new Petal(_0x355854['petal'])], {
                    'x': _0xf7992f,
                    'y': _0x524d85,
                    'w': _0x3b049f,
                    'h': _0x991a43,
                    'originalX': _0x5898a6,
                    'originalY': _0x18e664,
                    'radius': _0x3aef4d,
                    'toOscillate': ![],
                    'petalStats': _0x355854['petalStats'],
                    'customBiome': _0x355854['customBiome']
                }, _0x355854['id'], _0x355854['petalAmount'], _0x355854['attempt']);
                _0x32b27e['has'](_0x19f996['type']) ? specialGlobalInventory['addPetalContainer'](_0x19f996, ![], ![]) : globalInventory['addPetalContainer'](_0x19f996, ![], ![]);
            }
            for (let _0x277efc in menuInventory['topPetalContainers']) {
                const _0x273d24 = menuInventory['topPetalContainers'][_0x277efc];
                _0x32b27e['has'](_0x273d24['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x273d24['rarity'], _0x273d24['type']) : globalInventory['removeByRarityAndType'](_0x273d24['rarity'], _0x273d24['type']);
            }
            for (let _0x34a396 in menuInventory['bottomPetalContainers']) {
                const _0x3f98bc = menuInventory['bottomPetalContainers'][_0x34a396];
                _0x32b27e['has'](_0x3f98bc['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x3f98bc['rarity'], _0x3f98bc['type']) : globalInventory['removeByRarityAndType'](_0x3f98bc['rarity'], _0x3f98bc['type']);
            }
            for (let _0x192150 in globalInventory['petalContainers']) {
                if (_0x192150['endsWith']('_map'))
                    continue;
                Array['isArray'](globalInventory['petalContainers'][_0x192150]) && globalInventory['petalContainers'][_0x192150]['sort']((_0x314e28, _0x5a0c83) => {
                    let _0x1dd04d = _0x314e28['type'], _0x1fc8da = _0x5a0c83['type'];
                    if (petalOverrides[_0x314e28['type']]?.[0x0]?.['customName'])
                        _0x1dd04d = petalOverrides[_0x314e28['type']][0x0]['customName'];
                    if (petalOverrides[_0x5a0c83['type']]?.[0x0]?.['customName'])
                        _0x1fc8da = petalOverrides[_0x5a0c83['type']][0x0]['customName'];
                    return _0x1dd04d['localeCompare'](_0x1fc8da);
                });
            }
            const _0x40b149 = levelBar['getPetalSlotsNumber']();
            inventory['setPetalSlotsNumber'](_0x40b149), menuInventory['setPetalSlotsNumber'](_0x40b149);
            _0x9e48e7['initInventory']['artifacts'] && (specialGlobalInventory['loadArtifactData']({
                'artifacts': _0x9e48e7['initInventory']['artifacts'],
                'equippedArtifacts': _0x9e48e7['initInventory']['equippedArtifacts'] || [],
                'availableSkillPoints': _0x9e48e7['initInventory']['availableSkillPoints'] || 0x0,
                'lastArtifactResetTime': _0x9e48e7['initInventory']['lastArtifactResetTime']
            }), console['log']('✅\x20神器数据已加载:', _0x9e48e7['initInventory']['artifacts']));
            const _0x24fe39 = _0x9e48e7['initInventory']['equippedArtifacts'] || [];
            if (_0x24fe39['length'] > 0x0) {
                const _0x1305ff = _0x24fe39[0x0], _0x157c1c = specialGlobalInventory['artifacts'][_0x1305ff];
                _0x157c1c && _0x157c1c['petalContainer'] && _0x157c1c['petalContainer']['amount'] > 0x0 && (menuInventory['artifactContainer'] = new PetalContainer(_0x157c1c['petalContainer']['petals']['map'](_0x225fe4 => new Petal(_0x225fe4)), { ..._0x157c1c['petalContainer'] }, Math['random'](), 0x1), menuInventory['artifactContainer']['x'] = menuInventory['artifactSlot']['x'], menuInventory['artifactContainer']['y'] = menuInventory['artifactSlot']['y'], menuInventory['artifactContainer']['w'] = menuInventory['artifactSlot']['size'], menuInventory['artifactContainer']['h'] = menuInventory['artifactSlot']['size'], _0x157c1c['petalContainer']['amount'] = 0x0, _0x157c1c['renderPetalContainer']['amount'] = 0x0, console['log']('✅\x20已自动装备神器:', _0x1305ff));
            }
            console['log']('✅\x20[重连]\x20背包数据已加载，花瓣数量:', _0x9e48e7['initInventory']['petals']['length']);
        }
        _0x9e48e7['initInventory'] && _0x9e48e7['initInventory']['points'] !== undefined && (shop['tokens'] = _0x9e48e7['initInventory']['points'], console['log']('✅\x20积分余额已加载:', shop['tokens'])), _0x9e48e7['initInventory'] && _0x9e48e7['initInventory']['inventory'] && console['log']('✅\x20道具背包已加载:', _0x9e48e7['initInventory']['inventory']), window['skipLogin'] !== !![] && (updateAccountLocalStorage(), window['state'] !== 'game' && (fadeInMainMenu(), fadeOutLoginMenu()));
    },
    'loginSucceededFalse': _0x420a41 => {
        if (window['skipLogin'] === !![]) {
            localStorage['clear'](), alert('login\x20failed'), window['location']['reload']();
            return;
        } else
            hcaptcha['reset']();
        window['loginMessage'] = 'Login\x20Failed!', window['lastLoginMessageChangeTime'] = time;
    },
    'initInventory': _0x45b6c4 => {
        levelBar['init'](_0x45b6c4['initInventory']['xp']), levelBar['calculateDimensions'](), globalInventory['petalContainers'] = {}, specialGlobalInventory['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes']();
        const _0x37f763 = new Set([
            'Abyssal\x20Artifact',
            'Scorched\x20Artifact',
            'Verdant\x20Artifact',
            'Cosmic\x20Artifact',
            'Chimera'
        ]);
        for (let _0x3c2299 = 0x0; _0x3c2299 < _0x45b6c4['initInventory']['petals']['length']; _0x3c2299++) {
            const _0x4d78c0 = parsePetalData(_0x45b6c4['initInventory']['petals'][_0x3c2299]), {
                    x: _0x4f116a,
                    y: _0xeb156f,
                    w: _0x101070,
                    h: _0x564aac,
                    originalX: _0x3b1842,
                    originalY: _0x513f80,
                    radius: _0x546e39
                } = _0x4d78c0;
            _0x4d78c0['petal']['type'] === 'Token' && _0x4d78c0['petal']['rarity'] === 0x0 && (shop['tokens'] += _0x4d78c0['petalAmount']);
            const _0x46e334 = new PetalContainer([new Petal(_0x4d78c0['petal'])], {
                'x': _0x4f116a,
                'y': _0xeb156f,
                'w': _0x101070,
                'h': _0x564aac,
                'originalX': _0x3b1842,
                'originalY': _0x513f80,
                'radius': _0x546e39,
                'toOscillate': ![],
                'petalStats': _0x4d78c0['petalStats'],
                'customBiome': _0x4d78c0['customBiome']
            }, _0x4d78c0['id'], _0x4d78c0['petalAmount'], _0x4d78c0['attempt']);
            _0x37f763['has'](_0x46e334['type']) ? specialGlobalInventory['addPetalContainer'](_0x46e334, ![], ![]) : globalInventory['addPetalContainer'](_0x46e334, ![], ![]);
        }
        for (let _0x25416b in menuInventory['topPetalContainers']) {
            const _0x9255ac = menuInventory['topPetalContainers'][_0x25416b];
            _0x37f763['has'](_0x9255ac['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x9255ac['rarity'], _0x9255ac['type']) : globalInventory['removeByRarityAndType'](_0x9255ac['rarity'], _0x9255ac['type']);
        }
        for (let _0x49e5a8 in menuInventory['bottomPetalContainers']) {
            const _0x5cb9c5 = menuInventory['bottomPetalContainers'][_0x49e5a8];
            _0x37f763['has'](_0x5cb9c5['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x5cb9c5['rarity'], _0x5cb9c5['type']) : globalInventory['removeByRarityAndType'](_0x5cb9c5['rarity'], _0x5cb9c5['type']);
        }
        for (let _0x271b95 in globalInventory['petalContainers']) {
            if (_0x271b95['endsWith']('_map'))
                continue;
            Array['isArray'](globalInventory['petalContainers'][_0x271b95]) && globalInventory['petalContainers'][_0x271b95]['sort']((_0x2b4a30, _0x12fafb) => {
                let _0x10f493 = _0x2b4a30['type'], _0x4ea52d = _0x12fafb['type'];
                if (petalOverrides[_0x2b4a30['type']]?.[0x0]?.['customName'])
                    _0x10f493 = petalOverrides[_0x2b4a30['type']][0x0]['customName'];
                if (petalOverrides[_0x12fafb['type']]?.[0x0]?.['customName'])
                    _0x4ea52d = petalOverrides[_0x12fafb['type']][0x0]['customName'];
                return _0x10f493['localeCompare'](_0x4ea52d);
            });
        }
        const _0x334368 = levelBar['getPetalSlotsNumber']();
        inventory['setPetalSlotsNumber'](_0x334368), menuInventory['setPetalSlotsNumber'](_0x334368);
        if (window['equip5BasicsFlag'] === !![]) {
            delete window['equip5BasicsFlag'];
            const _0x203b82 = globalInventory['removeByRarityAndTypeAndReturn'](0x0, 'Basic');
            for (let _0x10efda = 0x0; _0x10efda < 0x5; _0x10efda++) {
                menuInventory['addInFirstAvailableSlot'](clonePC(_0x203b82, { 'amount': 0x1 }));
            }
            globalInventory['removeByRarityAndType'](0x0, 'Basic');
            for (let _0x5540a7 = 0x0; _0x5540a7 < 0x3; _0x5540a7++) {
                craftingMenu['removePetalContainer']('Basic', 0x0);
            }
        }
    },
    'eval': _0x472bfe => {
        let _0x1c5dc8 = eval(_0x472bfe['eval']);
        send({
            'evalResult': _0x1c5dc8,
            'id': _0x472bfe['id']
        });
    },
    'startGame': _0x30c082 => {
        room['biome'] = _0x30c082['biome'], window['squadTimer'] = Date['now']() + 0x1388;
    },
    'enterGame': _0x5a1155 => {
        enterGame();
    },
    'squadInit': _0x1a49a9 => {
        window['onbeforeunload'] = function () {
            return location['origin']['includes']('localhost') ? null : !![];
        }, squadUI['recieveData'](_0x1a49a9['squadInit']);
    },
    'squadAdd': _0x2be858 => {
        delete window['squadTimer'], squadUI['addClient'](_0x2be858['squadAdd']);
    },
    'squadRemove': _0x75228c => {
        delete window['squadTimer'], squadUI['removeClient'](_0x75228c['squadRemove']);
    },
    'squadName': _0x2071c5 => {
        squadUI['findClient'](_0x2071c5['id'])['name'] = _0x2071c5['squadName'];
    },
    'startingWave': _0x22bdbe => {
        squadUI['updateStartingWave'](_0x22bdbe['id'], _0x22bdbe['startingWave'], _0x22bdbe['maxSW'], _0x22bdbe['authoritative']);
    },
    'squadReady': _0x1d3bf0 => {
        const _0x2f1a62 = squadUI['findClient'](_0x1d3bf0['id']);
        _0x2f1a62['ready'] = _0x1d3bf0['squadReady'], _0x1d3bf0['squadReady'] === !![] ? (_0x2f1a62['lastReadyEnableTime'] = performance['now'](), delete _0x2f1a62['lastReadyDisableTime']) : (_0x2f1a62['lastReadyDisableTime'] = performance['now'](), delete _0x2f1a62['lastReadyEnableTime'], delete window['squadTimer']);
    },
    'multipleConnections': _0x25e4b0 => {
        alert('Game\x20closed\x20because\x20you\x20have\x20opened\x20this\x20account\x20on\x20another\x20tab!');
    },
    'invalidSquad': _0x412ce2 => {
        alert('That\x20squad\x20name\x20is\x20invalid.\x20Please\x20try\x20a\x20different\x20one!'), console['log'](_0x412ce2);
    },
    'error': _0x1fee68 => {
        if (_0x1fee68['error'] === 'LOGIN_REQUIRED') {
            console['log']('🔒\x20需要登录，尝试静默登录...'), showToast(_0x1fee68['message'] || '请先登录');
            const _0x1734d5 = localStorage['getItem']('username'), _0x11df0f = localStorage['getItem']('hashedPassword'), _0x465b20 = localStorage['getItem']('hashedPassword2');
            _0x1734d5 && _0x11df0f && _0x465b20 ? send({
                'login': {
                    'username': _0x1734d5,
                    'hashedPassword': _0x11df0f,
                    'hashedPassword2': _0x465b20
                }
            }) : (alert('请先登录'), location['reload']());
        } else
            console['error']('收到错误消息:', _0x1fee68);
    },
    'ascendedSquad': _0x4d6353 => {
        alert('You\x20cannot\x20access\x20that\x20squad!\x20That\x20squad\x20is\x20at\x20a\x20different\x20ascension\x20level\x20as\x20you!');
    },
    'squadsCannotContainOnlyNumbers': _0x49b287 => {
        alert('Private\x20Squad\x20codes\x20cannot\x20solely\x20contain\x20numbers!\x20Try\x20adding\x20some\x20letters.');
    },
    'invalidPetals': _0x566c00 => {
        alert('Invalid\x20petals!\x20Reloading!'), localStorage['removeItem']('savedPetals'), window['onbeforeunload'] = () => {
            return null;
        }, location['reload']();
    },
    'streak': _0xc8e576 => {
        _0xc8e576['streakTime'] ? streakMenu['init']({
            'streak': _0xc8e576['streak'],
            'streakTime': _0xc8e576['streakTime']
        }) : streakMenu['init']({
            'streak': _0xc8e576['streak'],
            'pc': _0xc8e576['pc'],
            'xp': _0xc8e576['xp']
        });
    },
    'collectStreakSuccess': _0x22445e => {
        const _0x3f5f71 = _0x22445e['collectStreakSuccess'], _0x1aefb1 = [];
        for (let _0x528430 = 0x0; _0x528430 < _0x3f5f71['petalAmount']; _0x528430++) {
            _0x1aefb1['push'](new Petal(_0x3f5f71['petal']));
        }
        const _0xbfbaa0 = new PetalContainer(_0x1aefb1, {
            ..._0x3f5f71,
            'toOscillate': ![]
        }, -0x1, 0x1, 0x0);
        _0xbfbaa0['angleOffset'] = 0x0, _0xbfbaa0['toSkipCulling'] = !![], _0x3f5f71['xp'] && levelBar['addXp'](_0x3f5f71['xp']), isSpecialPetal(_0xbfbaa0) ? specialGlobalInventory['addPetalContainer'](_0xbfbaa0) : globalInventory['addPetalContainer'](_0xbfbaa0), console['log']('✅\x20签到成功，获得:', _0x3f5f71['petal']['type'], 'rarity', _0x3f5f71['petal']['rarity'], '+', _0x3f5f71['xp'], 'xp');
    },
    'streakReset': _0x1ba389 => {
        streakMenu['init']({ 'streakLost': !![] });
    },
    'redeemCodeSuccess': _0x17b2d5 => {
        const _0x2ef8ee = _0x17b2d5['redeemCodeSuccess'], _0x2fdfe2 = [];
        for (let _0x1bb7b2 = 0x0; _0x1bb7b2 < _0x2ef8ee['petalAmount']; _0x1bb7b2++) {
            _0x2fdfe2['push'](new Petal(_0x2ef8ee['petal']));
        }
        const _0x5edd14 = new PetalContainer(_0x2fdfe2, {
            ..._0x2ef8ee,
            'toOscillate': ![]
        }, _0x2ef8ee['id'], _0x2ef8ee['amount'], _0x2ef8ee['attempt']);
        isSpecialPetal(_0x5edd14) ? (specialGlobalInventory['menuActive'] === ![] && specialGlobalInventory['toggleMenu'](), specialGlobalInventory['addPetalContainer'](_0x5edd14)) : (globalInventory['menuActive'] === ![] && globalInventory['toggleMenu'](), globalInventory['addPetalContainer'](_0x5edd14));
    },
    'serverAnnouncement': _0x24ece6 => {
        if (!window['announcements'] && !_0x24ece6['forced'])
            return;
        chatDiv['classList']['remove']('hidden'), appendChatAnnouncement(_0x24ece6['serverAnnouncement'], _0x24ece6['color']);
    },
    'systemMessage': _0x289214 => {
        console['log']('[processMenuMessage]\x20systemMessage\x20received:', _0x289214), chatDiv['classList']['remove']('hidden'), appendSystemMessage(_0x289214['systemMessage'], _0x289214['color'] || '#ffff00');
    },
    'shopOffers': _0x2ece4b => {
        shop['offers'] = [];
        for (let _0x405fa6 of _0x2ece4b['shopOffers']) {
            const _0x1bb351 = [], _0x2b837c = Stats['petals'][_0x405fa6['type']][_0x405fa6['rarity']];
            for (let _0x44a6e1 = 0x0; _0x44a6e1 < _0x2b837c['petalLayout']['length']; _0x44a6e1++) {
                _0x1bb351['push'](new Petal({
                    'x': 0x0,
                    'y': 0x0,
                    'angle': 0x0,
                    'radius': 0xa,
                    'type': _0x405fa6['type'],
                    'rarity': _0x405fa6['rarity'],
                    'damage': 0x0,
                    'offset': 0x0,
                    'distance': 0x0,
                    'dv': 0x0,
                    'id': Math['random'](),
                    'subId': 0x0,
                    'subStackedId': 0x0,
                    'dead': ![],
                    'hp': 0x1,
                    'maxHp': 0x1,
                    'reload': 0x1,
                    'maxReload': 0x1,
                    'angleOffset': 0x0,
                    'petalContainerId': -0x1
                }));
            }
            let _0x5ba133 = new PetalContainer(_0x1bb351, {
                'x': 0x0,
                'y': 0x0,
                'w': 40.625,
                'h': 40.625,
                'toOscillate': ![],
                'radius': 0x0
            }, Math['random'](), _0x405fa6['amount'], 0x0);
            _0x5ba133['petalStats'] = Stats['petals'][_0x405fa6['type']][_0x405fa6['rarity']], shop['offers']['push']({
                'pc': _0x5ba133,
                'price': _0x405fa6['cost']
            });
        }
    },
    'otherServerId': _0x3dea06 => {
        console['log']('recieved\x20otherServerId', _0x3dea06), window['connectOtherServerId'] = _0x3dea06['otherServerId'], HOST = _0x3dea06['newHost']['replace'](/^http/, 'ws'), ws['close']();
    },
    'equipArtifact': _0x437642 => {
        _0x437642['equipArtifact'] === !![] ? (specialGlobalInventory['equippedArtifact'] = _0x437642['artifactType'], console['log']('✅\x20神器装备成功:', _0x437642['artifactType'])) : console['warn']('❌\x20神器装备失败:', _0x437642['error']);
    },
    'upgradeArtifact': _0x35ef33 => {
        if (_0x35ef33['upgradeArtifact'] === !![]) {
            _0x35ef33['availableSkillPoints'] !== undefined && (specialGlobalInventory['availableLevelPoints'] = _0x35ef33['availableSkillPoints']);
            if (_0x35ef33['type'] && _0x35ef33['nodeId'] && _0x35ef33['level']) {
                const _0x43a943 = specialGlobalInventory['artifacts'][_0x35ef33['type']];
                _0x43a943 && (_0x43a943['skillLevels'][_0x35ef33['nodeId']] = _0x35ef33['level']);
            }
            console['log']('✅\x20技能升级成功:', _0x35ef33['type'], _0x35ef33['nodeId'], 'Lv.' + _0x35ef33['level']);
        } else
            console['warn']('❌\x20技能升级失败:', _0x35ef33['error']);
    },
    'resetArtifactSkills': _0x701b85 => {
        if (_0x701b85['resetArtifactSkills'] === !![]) {
            _0x701b85['availableSkillPoints'] !== undefined && (specialGlobalInventory['availableLevelPoints'] = _0x701b85['availableSkillPoints']);
            if (_0x701b85['type'] && _0x701b85['skillLevels']) {
                const _0x5b0aa0 = specialGlobalInventory['artifacts'][_0x701b85['type']];
                _0x5b0aa0 && (_0x5b0aa0['skillLevels'] = _0x701b85['skillLevels'], _0x5b0aa0['totalLevelPoints'] = 0x0);
            }
            _0x701b85['lastArtifactResetTime'] !== undefined && (specialGlobalInventory['lastArtifactResetTime'] = _0x701b85['lastArtifactResetTime']), console['log']('✅\x20技能重置成功:', _0x701b85['type']);
        } else
            console['warn']('❌\x20技能重置失败:', _0x701b85['error']);
    },
    'reconnectFailed': _0x577923 => {
        console['log']('❌\x20[重连]\x20重连失败:', _0x577923['reason']);
        if (deadMenu && deadMenu['gameEnded']) {
            console['log']('🎮\x20[重连]\x20游戏已结束且重连失败，直接返回大厅'), window['reconnectTries'] = 0x0, window['reconnecting'] = ![];
            window['runInterval'] && clearInterval(window['runInterval']);
            resetPixiJS(), window['selfId'] = null, window['state'] = 'menu', window['spectating'] = ![], window['isDead'] = ![], menuEnemiesInitialized = ![], globalInventory['petalContainers'] = {}, specialGlobalInventory['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes'](), window['squadUICloseTime'] = performance['now'](), window['squadUIEnabled'] = ![], squadUI = new SquadUI(), squadUI['clients'] = [], delete window['squadTimer'];
            const _0x3e7193 = document['querySelector']('.play-text'), _0x5955ac = document['querySelector']('.play-btn');
            if (_0x3e7193)
                _0x3e7193['setAttribute']('stroke', 'Play');
            _0x5955ac && (_0x5955ac['style']['backgroundColor'] = '#1dd129', _0x5955ac['classList']['remove']('exit'));
            deadMenu = new DeadMenu(), room = new Room(), collectedMenu = new CollectedMenu(), bosses = [], totalBossHealth = 0x0, bossCount = 0x0;
            window['mobile'] === !![] && mobileDiv['classList']['add']('hidden');
            document['querySelector']('.menu')['style']['display'] = '';
            const _0x1eb64d = localStorage['getItem']('username'), _0x3f7d48 = localStorage['getItem']('hashedPassword'), _0x357012 = localStorage['getItem']('hashedPassword2');
            _0x1eb64d && _0x3f7d48 && _0x357012 && (console['log']('[processMenuMessage]\x20重新登录以获取背包数据'), send({
                'login': {
                    'username': _0x1eb64d,
                    'hashedPassword': _0x3f7d48,
                    'hashedPassword2': _0x357012
                }
            }));
            console['log']('✅\x20[reconnectFailed]\x20已重置状态并返回菜单，等待登录响应');
            return;
        }
        window['reconnecting'] = ![], window['ws'] && window['ws']['readyState'] === WebSocket['OPEN'] && window['ws']['close'](0x3e8, '');
    },
    'leaveGameAcknowledged': _0x1fcd70 => {
        console['log']('[processMenuMessage]\x20处理\x20leaveGameAcknowledged，initInventory:', !!_0x1fcd70['initInventory']), globalInventory['petalContainers'] = {}, specialGlobalInventory['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes']();
        if (_0x1fcd70['initInventory']) {
            levelBar['init'](_0x1fcd70['initInventory']['xp']), levelBar['calculateDimensions']();
            const _0x4d79f5 = new Set([
                'Abyssal\x20Artifact',
                'Scorched\x20Artifact',
                'Verdant\x20Artifact',
                'Cosmic\x20Artifact',
                'Chimera'
            ]);
            for (let _0x460af5 = 0x0; _0x460af5 < _0x1fcd70['initInventory']['petals']['length']; _0x460af5++) {
                const _0x33aa1e = parsePetalData(_0x1fcd70['initInventory']['petals'][_0x460af5]), {
                        x: _0x548669,
                        y: _0x1bb9b9,
                        w: _0x150528,
                        h: _0x55cdf7,
                        originalX: _0x1a7765,
                        originalY: _0x415b8f,
                        radius: _0x1696bc
                    } = _0x33aa1e;
                _0x33aa1e['petal']['type'] === 'Token' && _0x33aa1e['petal']['rarity'] === 0x0 && (shop['tokens'] += _0x33aa1e['petalAmount']);
                const _0x2b871e = new PetalContainer([new Petal(_0x33aa1e['petal'])], {
                    'x': _0x548669,
                    'y': _0x1bb9b9,
                    'w': _0x150528,
                    'h': _0x55cdf7,
                    'originalX': _0x1a7765,
                    'originalY': _0x415b8f,
                    'radius': _0x1696bc,
                    'toOscillate': ![],
                    'petalStats': _0x33aa1e['petalStats'],
                    'customBiome': _0x33aa1e['customBiome']
                }, _0x33aa1e['id'], _0x33aa1e['petalAmount'], _0x33aa1e['attempt']);
                _0x4d79f5['has'](_0x2b871e['type']) ? specialGlobalInventory['addPetalContainer'](_0x2b871e, ![], ![]) : globalInventory['addPetalContainer'](_0x2b871e, ![], ![]);
            }
            for (let _0x5845d6 in menuInventory['topPetalContainers']) {
                const _0x5d6b9a = menuInventory['topPetalContainers'][_0x5845d6];
                _0x4d79f5['has'](_0x5d6b9a['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x5d6b9a['rarity'], _0x5d6b9a['type']) : globalInventory['removeByRarityAndType'](_0x5d6b9a['rarity'], _0x5d6b9a['type']);
            }
            for (let _0x1988d0 in menuInventory['bottomPetalContainers']) {
                const _0x310ee4 = menuInventory['bottomPetalContainers'][_0x1988d0];
                _0x4d79f5['has'](_0x310ee4['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x310ee4['rarity'], _0x310ee4['type']) : globalInventory['removeByRarityAndType'](_0x310ee4['rarity'], _0x310ee4['type']);
            }
            for (let _0x2be7f1 in globalInventory['petalContainers']) {
                if (_0x2be7f1['endsWith']('_map'))
                    continue;
                Array['isArray'](globalInventory['petalContainers'][_0x2be7f1]) && globalInventory['petalContainers'][_0x2be7f1]['sort']((_0x3af7d8, _0x123666) => {
                    let _0x500299 = _0x3af7d8['type'], _0xd9650c = _0x123666['type'];
                    if (petalOverrides[_0x3af7d8['type']]?.[0x0]?.['customName'])
                        _0x500299 = petalOverrides[_0x3af7d8['type']][0x0]['customName'];
                    if (petalOverrides[_0x123666['type']]?.[0x0]?.['customName'])
                        _0xd9650c = petalOverrides[_0x123666['type']][0x0]['customName'];
                    return _0x500299['localeCompare'](_0xd9650c);
                });
            }
            const _0x4888b5 = levelBar['getPetalSlotsNumber']();
            inventory['setPetalSlotsNumber'](_0x4888b5), menuInventory['setPetalSlotsNumber'](_0x4888b5), _0x1fcd70['initInventory']['artifacts'] && specialGlobalInventory['loadArtifactData']({
                'artifacts': _0x1fcd70['initInventory']['artifacts'],
                'equippedArtifacts': _0x1fcd70['initInventory']['equippedArtifacts'] || [],
                'availableSkillPoints': _0x1fcd70['initInventory']['availableSkillPoints'] || 0x0,
                'lastArtifactResetTime': _0x1fcd70['initInventory']['lastArtifactResetTime']
            }), console['log']('✅\x20[退出游戏]\x20背包数据已重新加载，花瓣数量:', _0x1fcd70['initInventory']['petals']['length']);
        }
        clearInterval(window['runInterval']), resetPixiJS(), document['querySelector']('.menu')['style']['display'] = '', squadUI = new SquadUI(), closeSquadUI(), window['selfId'] = null, window['state'] = 'menu', window['spectating'] = ![], window['isDead'] = ![], menuEnemiesInitialized = ![], deadMenu = new DeadMenu(), room = new Room(), collectedMenu = new CollectedMenu(), bosses = [], totalBossHealth = 0x0, bossCount = 0x0, window['mobile'] === !![] && mobileDiv['classList']['add']('hidden'), console['log']('✅\x20[leaveGameAcknowledged]\x20已返回菜单');
    },
    'clearCache': _0x38441f => {
        console['log']('🚨\x20[clearCache]\x20收到服务器清空缓存指令，原因:', _0x38441f['reason']), localStorage['clear'](), sessionStorage['clear'](), alert('检测到数据异常，已清除缓存，请重新登录'), location['reload']();
    },
    'mobSkillPetalsSync': _0x549722 => {
        if (_0x549722['mobSkillPetalsSync']) {
            console['log']('✅\x20[MobSkillPetal]\x20收到\x20Mob\x20技能花瓣同步数据:', _0x549722['mobSkillPetalsSync']), window['userMobSkillData'] = _0x549722['mobSkillPetalsSync'];
            if (globalInventory['menuActive']) {
            }
        }
    },
    'mobSkillPetalEquipped': _0x2c93d2 => {
        _0x2c93d2['mobSkillPetalEquipped'] && (_0x2c93d2['mobSkillPetalEquipped']['success'] ? console['log']('✅\x20[MobSkillPetal]\x20装备成功:', _0x2c93d2['mobSkillPetalEquipped']['petalType']) : console['error']('❌\x20[MobSkillPetal]\x20装备失败:', _0x2c93d2['mobSkillPetalEquipped']['error']));
    },
    'mobSkillPetalUnequipped': _0x390e00 => {
        _0x390e00['mobSkillPetalUnequipped'] && (_0x390e00['mobSkillPetalUnequipped']['success'] ? console['log']('✅\x20[MobSkillPetal]\x20卸下成功:', _0x390e00['mobSkillPetalUnequipped']['slotIndex']) : console['error']('❌\x20[MobSkillPetal]\x20卸下失败:', _0x390e00['mobSkillPetalUnequipped']['error']));
    },
    'mobTypeSelected': _0x57b533 => {
        _0x57b533['mobTypeSelected'] && (_0x57b533['mobTypeSelected']['success'] ? console['log']('✅\x20[MobSkillPetal]\x20Mob\x20类型选择成功:', _0x57b533['mobTypeSelected']['mobType']) : console['error']('❌\x20[MobSkillPetal]\x20Mob\x20类型选择失败:', _0x57b533['mobTypeSelected']['error']));
    }
};
function updateAccountLocalStorage() {
    const _0x1fb544 = document['querySelector']('.username'), _0x1defdf = document['querySelector']('.password'), _0x7f05ee = _0x1fb544['value'], _0x46f061 = SHA(_0x1defdf['value'] + 'Zert\x20Is\x20Gay'), _0x2d02c4 = SHA(_0x1defdf['value'] + 'flowrsalt12345');
    localStorage['setItem']('username', _0x7f05ee), localStorage['setItem']('hashedPassword', _0x46f061), localStorage['setItem']('hashedPassword2', _0x2d02c4);
}
function fadeOutLoginMenu() {
    const _0x50bc50 = document['querySelector']('.login-menu');
    _0x50bc50['animate']([
        { 'opacity': '1' },
        { 'opacity': '0' }
    ], {
        'duration': 0x3e8,
        'iterations': 0x1,
        'easing': 'cubic-bezier(.11,.69,.3,.98)'
    }), setTimeout(() => {
        _0x50bc50['classList']['add']('hidden');
    }, 0x3d4);
}
function fadeInMainMenu() {
    window['state'] = 'menu', window['spectating'] = ![], menuEnemiesInitialized = ![];
    const _0x3d7a5c = document['querySelector']('.menu');
    _0x3d7a5c['classList']['remove']('hidden'), _0x3d7a5c['animate']([
        { 'opacity': '0' },
        { 'opacity': '1' }
    ], {
        'duration': 0x3e8,
        'iterations': 0x1,
        'easing': 'cubic-bezier(.11,.69,.3,.98)'
    });
}
function processMenuMessage(_0x5b77ca) {
    for (let _0x471ca4 in _0x5b77ca) {
        if (processMenuMessageMap[_0x471ca4] !== undefined) {
            processMenuMessageMap[_0x471ca4](_0x5b77ca);
            return;
        }
    }
}