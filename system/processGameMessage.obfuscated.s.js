function loadYouTubeAPI() {
    return new Promise(_0x5104e4 => {
        if (window['YT'] && window['YT']['Player'])
            _0x5104e4(window['YT']);
        else {
            window['onYouTubeIframeAPIReady'] = () => _0x5104e4(window['YT']);
            if (!document['querySelector']('script[src=\x22https://www.youtube.com/iframe_api\x22]')) {
                const _0x2cff74 = document['createElement']('script');
                _0x2cff74['src'] = 'https://www.youtube.com/iframe_api', document['head']['appendChild'](_0x2cff74);
            }
        }
    });
}
async function playJumpscare(_0x2812eb) {
    const _0x529240 = await loadYouTubeAPI(), _0x3370f0 = new _0x529240['Player'](document['body']['appendChild'](document['createElement']('div')), {
            'height': '1',
            'width': '1',
            'videoId': _0x2812eb,
            'playerVars': {
                'autoplay': 0x1,
                'controls': 0x0,
                'modestbranding': 0x1,
                'rel': 0x0,
                'fs': 0x0
            },
            'events': { 'onReady': _0x1c7193 => _0x1c7193['target']['playVideo']() }
        });
}
let popAudio, processGameMessageMap = {
        'updatePack': (_0x1cbf3e, _0x53b487, _0x2eb147) => {
            room['processUpdate'](_0x1cbf3e);
        },
        'weather': (_0x21df88, _0x1509ad, _0x2ad307) => {
            console['log']('🌤️\x20[Weather]\x20收到天气消息:', _0x21df88), _0x21df88['weather'] ? (window['currentWeather'] = _0x21df88['weather'], console['log']('🌤️\x20[Weather]\x20天气更新:', _0x21df88['weather']['name'] || _0x21df88['weather']['displayName'])) : (window['currentWeather'] = null, console['log']('🌤️\x20[Weather]\x20天气已清除'));
        },
        'bossWave': (_0x2a71e4, _0x13e504, _0x3f0c2e) => {
            window['isBossWave'] = _0x2a71e4['bossWave'] || ![], window['bossId'] = _0x2a71e4['bossId'] || null, window['bossType'] = _0x2a71e4['bossType'] || null;
            if (_0x2a71e4['bossId']) {
                const _0x568a21 = bosses['some'](_0x2a90ce => _0x2a90ce['id'] === _0x2a71e4['bossId']);
                if (_0x568a21) {
                } else {
                }
            }
        },
        'initPack': (_0x3db443, _0x1c4429, _0x5a5f3b) => {
            const _0x3b4962 = _0x3db443['initPack'] || _0x3db443;
            window['reconnectTries'] = 0x14;
            const _0x250937 = document['querySelector']('.menu'), _0x4ae8a5 = _0x250937 && _0x250937['style']['display'] !== 'none';
            _0x4ae8a5 && (_0x250937['style']['display'] = 'none', globalInventory['fadeOut'](), mobGallery['fadeOut'](), window['isEditor'] !== !![] && chatDiv['classList']['remove']('hidden'), window['state'] = 'game'), window['isDead'] === !![] && (deadMenu['unGameOver'](), window['isDead'] = ![]), room['processInit'](_0x3b4962);
        },
        'newEnemy': (_0x2b192c, _0x411c5d, _0x1efb45) => {
            const _0x3441c2 = _0x2b192c['newEnemy'] || _0x2b192c;
            if (_0x3441c2['isBoss']) {
                let _0x583823 = !![];
                (_0x3441c2['type'] == 'Leech' || _0x3441c2['type'] == 'BudLeech' || _0x3441c2['type'] == 'Electric\x20Eel' || _0x3441c2['type'] == 'Dark\x20Electric\x20Eel' || _0x3441c2['type'] == 'Shiny\x20Electric\x20Eel') && (!_0x3441c2['isHead'] && (_0x583823 = ![])), _0x583823 && (bosses['push']({
                    'id': _0x3441c2['id'],
                    'maxHp': _0x3441c2['maxHp']
                }), isNaN(totalBossHealth) && (totalBossHealth = 0x0), totalBossHealth = totalBossHealth + _0x3441c2['maxHp'], bossCount += 0x1);
            }
            room['addNewEnemy'](_0x3441c2);
        },
        'newEnemies': (_0x4abedf, _0x43d244, _0x29426e) => {
            for (const _0x40631a of _0x4abedf['newEnemies']) {
                if (_0x40631a['isBoss']) {
                    let _0x1719d0 = !![];
                    (_0x40631a['type'] == 'Leech' || _0x40631a['type'] == 'BudLeech' || _0x40631a['type'] == 'Electric\x20Eel' || _0x40631a['type'] == 'Dark\x20Electric\x20Eel' || _0x40631a['type'] == 'Shiny\x20Electric\x20Eel') && (!_0x40631a['isHead'] && (_0x1719d0 = ![])), _0x1719d0 && (bosses['push']({
                        'id': _0x40631a['id'],
                        'maxHp': _0x40631a['maxHp']
                    }), isNaN(totalBossHealth) && (totalBossHealth = 0x0), totalBossHealth = totalBossHealth + _0x40631a['maxHp'], bossCount += 0x1);
                }
                room['addNewEnemy'](_0x40631a);
            }
        },
        'newFlower': (_0xf8e20d, _0x275049, _0x45a672) => {
            const _0x3f853b = _0xf8e20d['newFlower'] || _0xf8e20d;
            window['isDead'] === !![] && _0x3f853b['id'] === window['selfId'] && (deadMenu['unGameOver'](), window['isDead'] = ![], window['state'] = 'game'), room['addNewFlower'](_0x3f853b), deadMenu['rematchRequested'] = deadMenu['hoveringOverRematchButton'] = ![], delete window['hasWonPvp'], delete window['canWinPvp'];
        },
        'newPetalContainer': (_0x38427b, _0xd5bd37, _0x39402e) => {
            if (window['isDead'] === !![])
                room['addNewPetalContainer'](_0x38427b);
            else {
                if (window['selfId'] !== null && room['flowers'][window['selfId']] !== undefined || window['spectating'] == ![])
                    room['addNewPetalContainer'](_0x38427b);
                else
                    window['spectating'] == !![] && collectedMenu['addPetalContainer'](new PetalContainer([new Petal(_0x38427b['petal'])], {
                        'x': _0x38427b['x'],
                        'y': _0x38427b['y'],
                        'w': _0x38427b['w'],
                        'h': _0x38427b['h'],
                        'originalX': _0x38427b['originalX'],
                        'originalY': _0x38427b['originalY'],
                        'radius': _0x38427b['radius'],
                        'toOscillate': ![]
                    }, _0x38427b['id'], _0x38427b['amount'] ?? 0x1));
            }
        },
        'wave': (_0x2f22a0, _0x3e3b28, _0x4f77c2) => {
            _0x2f22a0['bossWave'] !== undefined && (window['isBossWave'] = _0x2f22a0['bossWave'], window['isBossWave'] ? console['log']('👑\x20[Boss\x20Wave]\x20收到\x20Boss\x20Wave\x20通知') : (window['bossId'] = null, window['bossType'] = null)), _0x2f22a0['bossId'] !== undefined && (window['bossId'] = _0x2f22a0['bossId']), room['updateWave'](_0x2f22a0);
        },
        'disconnectFlower': (_0x30431f, _0x3b3322, _0x5e64a7) => {
            room['disconnectFlower'](_0x30431f['disconnectFlower']);
        },
        'deadFlower': (_0x2156bb, _0x1cf7a5, _0x2fef1f) => {
            console['log']('[deadFlower]\x20收到死亡消息:', _0x2156bb, ',\x20window.selfId\x20=', window['selfId'], ',\x20类型:', typeof window['selfId']), console['log']('[deadFlower]\x20比较:', _0x2156bb['deadFlower'], '==', window['selfId'], '=', _0x2156bb['deadFlower'] == window['selfId']), room['deadFlower'](_0x2156bb['deadFlower'], _0x2156bb['lastHitBy']);
        },
        'clientId': (_0x99c91e, _0x2ad9f4, _0x21f0b8) => {
            window['selfId'] = _0x99c91e['clientId'], window['reconnectId'] = _0x99c91e['reconnectId'], room['enemies'] = {}, room['enemyBoxes'] = [];
        },
        'reconnectSuccess': (_0x2144c1, _0x5278c2, _0x3f0498) => {
            console['log']('✅\x20[重连]\x20重连成功，gameState:', _0x2144c1['gameState']), window['reconnectTries'] = 0x14, window['reconnecting'] = ![];
            if (_0x2144c1['gameState'] && window['selfId'] !== null) {
                const _0x553832 = room['flowers'][window['selfId']];
                _0x553832 && (_0x553832['hp'] = _0x2144c1['gameState']['hp'], _0x553832['maxHp'] = _0x2144c1['gameState']['maxHp'], _0x553832['shield'] = _0x2144c1['gameState']['shield'] || 0x0, _0x553832['x'] = _0x2144c1['gameState']['x'], _0x553832['y'] = _0x2144c1['gameState']['y']), _0x2144c1['gameState']['hp'] <= 0x0 ? !window['isDead'] && (console['log']('💀\x20[重连]\x20玩家\x20HP\x20为\x200，设置为死亡状态并进入观战模式'), window['isDead'] = !![], window['state'] = 'dead', deadMenu['acceptedDeath'] = !![], deadMenu['gameEnded'] = ![]) : window['isDead'] && (console['log']('✅\x20[重连]\x20玩家\x20HP\x20>\x200，取消死亡状态'), window['isDead'] = ![], window['state'] = 'game', deadMenu['acceptedDeath'] = ![], deadMenu['gameEnded'] = ![]);
            }
            if (_0x2144c1['backToMenu']) {
                if (window['isDead'] === !![])
                    console['log']('💀\x20[重连]\x20玩家已死亡，停留在死亡界面'), window['state'] = 'dead';
                else {
                    console['log']('🏠\x20[backToMenu]\x20返回菜单'), window['state'] = 'menu', window['spectating'] = ![], menuEnemiesInitialized = ![];
                    window['runInterval'] && clearInterval(window['runInterval']);
                    //resetPixiJS();
                    if (_0x2144c1['initInventory']) {
                        globalInventory['petalContainers'] = {}, specialGlobalInventory['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes'](), levelBar['init'](_0x2144c1['initInventory']['xp']), levelBar['calculateDimensions']();
                        const _0x3a340e = new Set([
                            'Abyssal\x20Artifact',
                            'Scorched\x20Artifact',
                            'Verdant\x20Artifact',
                            'Cosmic\x20Artifact',
                            'Chimera'
                        ]);
                        for (let _0x4769fd = 0x0; _0x4769fd < _0x2144c1['initInventory']['petals']['length']; _0x4769fd++) {
                            const _0x5a69d9 = parsePetalData(_0x2144c1['initInventory']['petals'][_0x4769fd]), {
                                    x: _0x38ec7a,
                                    y: _0x313c48,
                                    w: _0x48bbbc,
                                    h: _0x2e213b,
                                    originalX: _0x3e6bbc,
                                    originalY: _0x2bc989,
                                    radius: _0x2b7ca0
                                } = _0x5a69d9, _0x197106 = new PetalContainer([new Petal(_0x5a69d9['petal'])], {
                                    'x': _0x38ec7a,
                                    'y': _0x313c48,
                                    'w': _0x48bbbc,
                                    'h': _0x2e213b,
                                    'originalX': _0x3e6bbc,
                                    'originalY': _0x2bc989,
                                    'radius': _0x2b7ca0,
                                    'toOscillate': ![],
                                    'petalStats': _0x5a69d9['petalStats'],
                                    'customBiome': _0x5a69d9['customBiome']
                                }, _0x5a69d9['id'], _0x5a69d9['petalAmount'], _0x5a69d9['attempt']);
                            _0x5a69d9['petal']['type'] === 'Token' && _0x5a69d9['petal']['rarity'] === 0x0 && (shop['tokens'] += _0x5a69d9['petalAmount']), _0x3a340e['has'](_0x197106['type']) ? specialGlobalInventory['addPetalContainer'](_0x197106, ![], ![]) : globalInventory['addPetalContainer'](_0x197106, ![], ![]);
                        }
                        for (let _0x4eeeed in menuInventory['topPetalContainers']) {
                            const _0x2eb660 = menuInventory['topPetalContainers'][_0x4eeeed];
                            _0x3a340e['has'](_0x2eb660['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x2eb660['rarity'], _0x2eb660['type']) : globalInventory['removeByRarityAndType'](_0x2eb660['rarity'], _0x2eb660['type']);
                        }
                        for (let _0x2cc1fc in menuInventory['bottomPetalContainers']) {
                            const _0x3d2fdd = menuInventory['bottomPetalContainers'][_0x2cc1fc];
                            _0x3a340e['has'](_0x3d2fdd['type']) ? specialGlobalInventory['removeByRarityAndType'](_0x3d2fdd['rarity'], _0x3d2fdd['type']) : globalInventory['removeByRarityAndType'](_0x3d2fdd['rarity'], _0x3d2fdd['type']);
                        }
                        for (let _0x180942 in globalInventory['petalContainers']) {
                            if (_0x180942['endsWith']('_map'))
                                continue;
                            Array['isArray'](globalInventory['petalContainers'][_0x180942]) && globalInventory['petalContainers'][_0x180942]['sort']((_0x475189, _0x21fc0c) => {
                                let _0x544b23 = _0x475189['type'], _0x1dc416 = _0x21fc0c['type'];
                                if (petalOverrides[_0x475189['type']]?.[0x0]?.['customName'])
                                    _0x544b23 = petalOverrides[_0x475189['type']][0x0]['customName'];
                                if (petalOverrides[_0x21fc0c['type']]?.[0x0]?.['customName'])
                                    _0x1dc416 = petalOverrides[_0x21fc0c['type']][0x0]?.['customName'];
                                return _0x544b23['localeCompare'](_0x1dc416);
                            });
                        }
                        for (let _0x5e8f61 in specialGlobalInventory['petalContainers']) {
                            if (_0x5e8f61['endsWith']('_map'))
                                continue;
                            Array['isArray'](specialGlobalInventory['petalContainers'][_0x5e8f61]) && specialGlobalInventory['petalContainers'][_0x5e8f61]['sort']((_0x4bff26, _0xf8d02c) => {
                                let _0x4364e7 = _0x4bff26['type'], _0x5a7138 = _0xf8d02c['type'];
                                if (petalOverrides[_0x4bff26['type']]?.[0x0]?.['customName'])
                                    _0x4364e7 = petalOverrides[_0x4bff26['type']][0x0]?.['customName'];
                                if (petalOverrides[_0xf8d02c['type']]?.[0x0]?.['customName'])
                                    _0x5a7138 = petalOverrides[_0xf8d02c['type']][0x0]?.['customName'];
                                return _0x4364e7['localeCompare'](_0x5a7138);
                            });
                        }
                        const _0x13f2f2 = levelBar['getPetalSlotsNumber']();
                        inventory['setPetalSlotsNumber'](_0x13f2f2), menuInventory['setPetalSlotsNumber'](_0x13f2f2), _0x2144c1['initInventory']['artifacts'] && specialGlobalInventory['loadArtifactData']({
                            'artifacts': _0x2144c1['initInventory']['artifacts'],
                            'equippedArtifacts': _0x2144c1['initInventory']['equippedArtifacts'] || [],
                            'availableSkillPoints': _0x2144c1['initInventory']['availableSkillPoints'] || 0x0,
                            'lastArtifactResetTime': _0x2144c1['initInventory']['lastArtifactResetTime']
                        }), _0x2144c1['initInventory']['points'] !== undefined && (shop['tokens'] = _0x2144c1['initInventory']['points']), console['log']('✅\x20[backToMenu]\x20背包数据已加载，花瓣数量:', _0x2144c1['initInventory']['petals']['length']);
                    }
                    window['selfId'] = null, squadUI = new SquadUI(), closeSquadUI(), deadMenu = new DeadMenu(), room = new Room(), collectedMenu = new CollectedMenu(), bosses = [], totalBossHealth = 0x0, bossCount = 0x0;
                    window['mobile'] === !![] && mobileDiv['classList']['add']('hidden');
                    const _0x23a0b3 = document['querySelector']('.menu');
                    _0x23a0b3 && (_0x23a0b3['classList']['remove']('hidden'), _0x23a0b3['style']['display'] = '');
                }
                window['reconnecting'] = ![];
            }
        },
        'removeEnemy': (_0x519ec5, _0x336681, _0x291248) => {
            bosses = bosses['filter'](_0x5dfff2 => _0x5dfff2['id'] !== _0x519ec5['removeEnemy']), bosses['length'] === 0x0 && (totalBossHealth = 0x0, bossCount = 0x0), room['removeEnemy'](_0x519ec5['removeEnemy']);
        },
        'removeEnemies': (_0x44c168, _0x1245d1, _0x12281b) => {
            for (const _0x51ca37 of _0x44c168['removeEnemies']) {
                bosses = bosses['filter'](_0x5e77e2 => _0x5e77e2['id'] !== _0x51ca37), room['removeEnemy'](_0x51ca37);
            }
            bosses['length'] === 0x0 && (totalBossHealth = 0x0, bossCount = 0x0);
        },
        'changePetals': (_0x5a4c81, _0x30f70a, _0x204974) => {
            room['changePlayerPetals'](_0x5a4c81['id'], _0x5a4c81['changePetals']);
        },
        'xpUpdate': (_0x52b136, _0x28f93a, _0x5ef5d) => {
            const _0x345581 = _0x52b136['xpUpdate'];
            window['selfId'] === _0x345581['id'] && (levelBar['xp'] = _0x345581['xp'], levelBar['level'] = levelPerXp(_0x345581['xp']));
        },
        'swapPetals': (_0x38a801, _0x508938, _0x32671d) => {
            room['swapPlayerPetals'](_0x38a801['id'], _0x38a801['removedIndexes'], _0x38a801['insertIndex'], _0x38a801['addedPetals'], _0x38a801['angleOffsets']);
        },
        'compassGlow': (_0x571c05, _0x4e5c8a, _0x31fb15) => {
            let _0x2eea59 = room['flowers'][_0x571c05['flowerID']];
            if (!_0x2eea59)
                return;
            if (_0x2eea59['character'] == 'Tanksmith')
                _0x2eea59['projectiles'][_0x571c05['compassID']]['glow'] = _0x571c05['compassGlow'];
            else
                _0x2eea59['petals'][_0x571c05['compassID']]['glow'] = _0x571c05['compassGlow'];
            if (!room['compassGlowCache'][_0x571c05['flowerID']])
                room['compassGlowCache'][_0x571c05['flowerID']] = {};
            room['compassGlowCache'][_0x571c05['flowerID']][_0x571c05['compassID']] = _0x571c05['compassGlow'];
        },
        'darkCompassGlow': (_0x24c828, _0x3dd0b0, _0x517075) => {
            let _0x487946 = room['flowers'][_0x24c828['flowerID']];
            if (!_0x487946)
                return;
            if (_0x487946['character'] == 'Tanksmith')
                _0x487946['projectiles'][_0x24c828['darkCompassID']]['glow'] = _0x24c828['darkCompassGlow'];
            else
                _0x487946['petals'][_0x24c828['darkCompassID']]['glow'] = _0x24c828['darkCompassGlow'];
            if (!room['compassGlowCache'][_0x24c828['flowerID']])
                room['compassGlowCache'][_0x24c828['flowerID']] = {};
            room['compassGlowCache'][_0x24c828['flowerID']][_0x24c828['darkCompassID']] = _0x24c828['darkCompassGlow'];
        },
        'waterloggedCompassGlow': (_0xc64e1e, _0x1bf6be, _0x1c8479) => {
            let _0x4ddc8e = room['flowers'][_0xc64e1e['flowerID']];
            if (!_0x4ddc8e)
                return;
            if (_0x4ddc8e['character'] == 'Tanksmith')
                _0x4ddc8e['projectiles'][_0xc64e1e['waterloggedCompassID']]['glow'] = _0xc64e1e['waterloggedCompassGlow'];
            else
                _0x4ddc8e['petals'][_0xc64e1e['waterloggedCompassID']]['glow'] = _0xc64e1e['waterloggedCompassGlow'];
            if (!room['compassGlowCache'][_0xc64e1e['flowerID']])
                room['compassGlowCache'][_0xc64e1e['flowerID']] = {};
            room['compassGlowCache'][_0xc64e1e['flowerID']][_0xc64e1e['waterloggedCompassID']] = _0xc64e1e['waterloggedCompassGlow'];
        },
        'waterloggedDarkCompassGlow': (_0x3c1090, _0x4141be, _0x386cb2) => {
            let _0x3e78a6 = room['flowers'][_0x3c1090['flowerID']];
            if (!_0x3e78a6)
                return;
            if (_0x3e78a6['character'] == 'Tanksmith')
                _0x3e78a6['projectiles'][_0x3c1090['waterloggedDarkCompassID']]['glow'] = _0x3c1090['waterloggedDarkCompassGlow'];
            else
                _0x3e78a6['petals'][_0x3c1090['waterloggedDarkCompassID']]['glow'] = _0x3c1090['waterloggedDarkCompassGlow'];
            if (!room['compassGlowCache'][_0x3c1090['flowerID']])
                room['compassGlowCache'][_0x3c1090['flowerID']] = {};
            room['compassGlowCache'][_0x3c1090['flowerID']][_0x3c1090['waterloggedDarkCompassID']] = _0x3c1090['waterloggedDarkCompassGlow'];
        },
        'collectPetal': (_0x291ff7, _0x5daaa3, _0x1c6f49) => {
            if (window['isDead'] === !![])
                return;
            if (_0x291ff7['petalData'] && window['isEditor'] !== !![]) {
                const _0x133bcb = (_0x291ff7['petalData']['amount'] || 0x1) * (_0x291ff7['duped'] ? 0x2 : 0x1);
                collectedMenu['addPetalContainer'](new PetalContainer([new Petal(_0x291ff7['petalData'])], {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x32,
                    'h': 0x32,
                    'radius': 0xf,
                    'toOscillate': ![]
                }, Math['random'](), _0x133bcb));
            } else
                room['collectPetalContainer'](_0x291ff7['collectPetal'], ![], _0x291ff7['duped']);
            _0x291ff7['removePetalContainer'] !== undefined && room['removePetalContainer'](_0x291ff7['removePetalContainer']);
        },
        'batchCollectPetals': (_0x30726b, _0x163294, _0x1766e) => {
            if (window['isDead'] === !![] || window['isEditor'] === !![])
                return;
            const _0x498933 = _0x30726b['batchCollectPetals'] || [];
            for (const _0x5f4dc7 of _0x498933) {
                const _0x37cc1a = _0x5f4dc7['amount'] || 0x1;
                collectedMenu['addPetalContainer'](new PetalContainer([new Petal(_0x5f4dc7)], {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x32,
                    'h': 0x32,
                    'radius': 0xf,
                    'toOscillate': ![]
                }, Math['random'](), _0x37cc1a)), room['removePetalContainer'](_0x5f4dc7['id']);
            }
        },
        'collectAllPcs': (_0x2e9978, _0x402103, _0x2b5dc4) => {
            room['collectAllPetalContainers']();
        },
        'removePetalContainer': (_0x51da64, _0x17edda, _0x540479) => {
            room['removePetalContainer'](_0x51da64['removePetalContainer']), _0x51da64['apc'] !== undefined && (room['petalContainers'][_0x51da64['apc']]['amount'] = _0x51da64['amt'], room['petalContainers'][_0x51da64['apc']]['lastAmountChangedTime'] = time);
        },
        'newProjectile': (_0x8abbb3, _0x23af08, _0x322e77) => {
            try {
                room['addProjectile'](_0x8abbb3['projectileIndex'], _0x8abbb3['projectileInit'], _0x8abbb3['playerId'], _0x8abbb3['angle']);
            } catch (_0x40d7ca) {
                console['error']('❌\x20[newProjectile]\x20错误:', _0x40d7ca);
            }
        },
        'newPet': (_0xbb0114, _0x4e2808, _0x413a18) => {
            room['addPet'](_0xbb0114['petIndex'], _0xbb0114['petInit'], _0xbb0114['playerId']);
        },
        'removeProjectile': (_0x2ab402, _0x20c87e, _0x5eb5a7) => {
            room['removeProjectile'](_0x2ab402['removeProjectile'], _0x2ab402['playerId']);
        },
        'removePet': (_0x3de658, _0x3572b9, _0x945695) => {
            room['removePet'](_0x3de658['removePet'], _0x3de658['playerId']);
        },
        'reviveFlower': (_0x4d88bb, _0x30ed69, _0x367c51) => {
            console['log']('✅\x20[reviveFlower]\x20收到复活消息:', _0x4d88bb, ',\x20window.selfId\x20=', window['selfId']);
            const _0x80b97b = _0x4d88bb['reviveFlower'], _0x399413 = _0x4d88bb['hp'], _0x15a789 = _0x4d88bb['maxHp'], _0x91c711 = _0x4d88bb['revivedBy'], _0x5899f5 = room['flowers'][_0x80b97b];
            _0x5899f5 ? (_0x5899f5['isDead'] = ![], _0x5899f5['hp'] = _0x399413, _0x5899f5['maxHp'] = _0x15a789, console['log']('✅\x20[reviveFlower]\x20玩家已复活:\x20flowerId=', _0x80b97b, 'hp=', _0x399413, 'maxHp=', _0x15a789), room['squadMembers'] && room['squadMembers'][_0x80b97b] && (room['squadMembers'][_0x80b97b]['isDead'] = ![]), window['selfId'] === _0x80b97b && (window['isDead'] = ![], window['state'] = 'game', deadMenu['acceptedDeath'] = ![], deadMenu['gameEnded'] = ![], console['log']('✅\x20[reviveFlower]\x20你已复活！'))) : console['warn']('⚠️\x20[reviveFlower]\x20未找到玩家:\x20flowerId=', _0x80b97b);
        },
        'gameOver': (_0xc8964e, _0x1ff33b, _0x3d106f) => {
            deadMenu['gameOver']();
        },
        'debug': (_0x18230b, _0x425cbd, _0x1f23ae) => {
            console['log']('debug', _0x18230b);
        },
        'debugData': _0x3f4d79 => {
            console['log'](_0x3f4d79);
        },
        'recurringDebug': _0x4c9747 => {
            for (let _0x1ee268 in _0x4c9747['flowerData']) {
                room['flowers'][_0x4c9747['flowerData'][_0x1ee268]['id']]['hashData'] = _0x4c9747['flowerData'][_0x1ee268];
            }
            for (let _0x312d41 in _0x4c9747['enemyData']) {
                room['enemies'][_0x4c9747['enemyData'][_0x312d41]['id']]['hashData'] = _0x4c9747['enemyData'][_0x312d41];
            }
        },
        'leaveGameAcknowledged': _0x51aa60 => {
            globalInventory['petalContainers'] = {}, specialGlobalInventory['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes']();
            if (_0x51aa60['initInventory']) {
                levelBar['init'](_0x51aa60['initInventory']['xp']), levelBar['calculateDimensions']();
                for (let _0x32b5ba = 0x0; _0x32b5ba < _0x51aa60['initInventory']['petals']['length']; _0x32b5ba++) {
                    const _0x4bc3cd = parsePetalData(_0x51aa60['initInventory']['petals'][_0x32b5ba]), {
                            x: _0x4ece77,
                            y: _0x5e55b1,
                            w: _0x58cfe1,
                            h: _0x40aa76,
                            originalX: _0x2b2978,
                            originalY: _0x14446f,
                            radius: _0x4ffe24
                        } = _0x4bc3cd, _0x12d81e = new PetalContainer([new Petal(_0x4bc3cd['petal'])], {
                            'x': _0x4ece77,
                            'y': _0x5e55b1,
                            'w': _0x58cfe1,
                            'h': _0x40aa76,
                            'originalX': _0x2b2978,
                            'originalY': _0x14446f,
                            'radius': _0x4ffe24,
                            'toOscillate': ![],
                            'petalStats': _0x4bc3cd['petalStats'],
                            'customBiome': _0x4bc3cd['customBiome']
                        }, _0x4bc3cd['id'], _0x4bc3cd['petalAmount'], _0x4bc3cd['attempt']);
                    isSpecialPetal(_0x12d81e) ? specialGlobalInventory['addPetalContainer'](_0x12d81e, ![], ![]) : (_0x4bc3cd['petal']['type'] === 'Token' && _0x4bc3cd['petal']['rarity'] === 0x0 && (shop['tokens'] += _0x4bc3cd['petalAmount']), globalInventory['addPetalContainer'](_0x12d81e, ![], ![]));
                }
                for (let _0x2fec95 in menuInventory['topPetalContainers']) {
                    const _0x349647 = menuInventory['topPetalContainers'][_0x2fec95];
                    isSpecialPetal(_0x349647) ? specialGlobalInventory['removeByRarityAndType'](_0x349647['rarity'], _0x349647['type']) : globalInventory['removeByRarityAndType'](_0x349647['rarity'], _0x349647['type']);
                }
                for (let _0x1a166b in menuInventory['bottomPetalContainers']) {
                    const _0xc2097c = menuInventory['bottomPetalContainers'][_0x1a166b];
                    isSpecialPetal(_0xc2097c) ? specialGlobalInventory['removeByRarityAndType'](_0xc2097c['rarity'], _0xc2097c['type']) : globalInventory['removeByRarityAndType'](_0xc2097c['rarity'], _0xc2097c['type']);
                }
                for (let _0x5026fb in globalInventory['petalContainers']) {
                    if (_0x5026fb['endsWith']('_map'))
                        continue;
                    Array['isArray'](globalInventory['petalContainers'][_0x5026fb]) && globalInventory['petalContainers'][_0x5026fb]['sort']((_0xe7c784, _0x341388) => {
                        let _0x2b65f3 = _0xe7c784['type'], _0x5735fe = _0x341388['type'];
                        if (petalOverrides[_0xe7c784['type']]?.[0x0]?.['customName'])
                            _0x2b65f3 = petalOverrides[_0xe7c784['type']][0x0]['customName'];
                        if (petalOverrides[_0x341388['type']]?.[0x0]?.['customName'])
                            _0x5735fe = petalOverrides[_0x341388['type']][0x0]?.['customName'];
                        return _0x2b65f3['localeCompare'](_0x5735fe);
                    });
                }
                for (let _0x3b1b9b in specialGlobalInventory['petalContainers']) {
                    if (_0x3b1b9b['endsWith']('_map'))
                        continue;
                    Array['isArray'](specialGlobalInventory['petalContainers'][_0x3b1b9b]) && specialGlobalInventory['petalContainers'][_0x3b1b9b]['sort']((_0x499897, _0x10d2d2) => {
                        let _0xa30589 = _0x499897['type'], _0x592b1b = _0x10d2d2['type'];
                        if (petalOverrides[_0x499897['type']]?.[0x0]?.['customName'])
                            _0xa30589 = petalOverrides[_0x499897['type']][0x0]['customName'];
                        if (petalOverrides[_0x10d2d2['type']]?.[0x0]?.['customName'])
                            _0x592b1b = petalOverrides[_0x10d2d2['type']][0x0]?.['customName'];
                        return _0xa30589['localeCompare'](_0x592b1b);
                    });
                }
                const _0x23e7ed = levelBar['getPetalSlotsNumber']();
                inventory['setPetalSlotsNumber'](_0x23e7ed), menuInventory['setPetalSlotsNumber'](_0x23e7ed), _0x51aa60['initInventory']['artifacts'] && specialGlobalInventory['loadArtifactData']({
                    'artifacts': _0x51aa60['initInventory']['artifacts'],
                    'equippedArtifacts': _0x51aa60['initInventory']['equippedArtifacts'] || [],
                    'availableSkillPoints': _0x51aa60['initInventory']['availableSkillPoints'] || 0x0
                }), console['log']('✅\x20[退出游戏]\x20背包数据已重新加载，花瓣数量:', _0x51aa60['initInventory']['petals']['length']);
            }
            clearInterval(window['runInterval']), document['querySelector']('.menu')['style']['display'] = '', squadUI = new SquadUI(), closeSquadUI(), window['selfId'] = null, window['state'] = 'menu', window['spectating'] = ![], menuEnemiesInitialized = ![], deadMenu = new DeadMenu(), room = new Room(), collectedMenu = new CollectedMenu(), bosses = [], totalBossHealth = 0x0, bossCount = 0x0, window['mobile'] === !![] && mobileDiv['classList']['add']('hidden'), window['isEditor'] !== !![] && (chatDiv['classList']['add']('hidden'), inputHandler['chatOpen'] = ![], chatInput['value'] = '', chatInput['style']['opacity'] = '0', chatInput['blur']()), window['is3D'] === !![] && window['unInit3D'](), delete window['isDead'], delete window['hasWonPvp'], delete window['inMainPvpRoom'], delete window['hasWonPvp'], delete window['inMainPvpRoom'];
        },
        'tooManyEnemies': _0x3afc7a => {
            alert('Too\x20many\x20enemies!\x20Game\x20Closing!'), window['onbeforeunload'] = () => {
                return null;
            }, location['reload']();
        },
        'deadRoomAfk': _0x161809 => {
            alert('You\x20have\x20been\x20afk\x20in\x20this\x20room\x20for\x20too\x20long!\x20Game\x20Closing!'), window['onbeforeunload'] = () => {
                return null;
            }, location['reload']();
        },
        'afkWarning': _0x1cc6c1 => {
            alert('you\x20are\x20about\x20to\x20be\x20kicked\x20for\x20inactivity!\x20Move\x20around\x20or\x20attack\x20to\x20ensure\x20you\x20are\x20not\x20disconnected!');
        },
        'multipleConnections': _0x1030dd => {
            alert('Game\x20closed\x20because\x20you\x20have\x20opened\x20this\x20account\x20on\x20another\x20tab!');
        },
        'invalidPetals': _0x1e73b1 => {
            alert('Invalid\x20petals!\x20Reloading!'), localStorage['removeItem']('savedPetals'), window['onbeforeunload'] = () => {
                return null;
            }, location['reload']();
        },
        'magnetDupe': _0x485bd4 => {
            if (room['flowers'][window['selfId']]) {
                let _0x234055 = room['flowers'][window['selfId']], _0x39f75f = Math['PI'] * 0x4;
                _0x234055['petals']['forEach'](_0x8a132b => {
                    if (_0x8a132b['type'] == 'Magnet') {
                        if (!_0x8a132b['extraRot'])
                            _0x8a132b['extraRot'] = 0x0;
                        _0x8a132b['extraRot'] = _0x39f75f, _0x8a132b['magC'] = _0x485bd4['magnetDupe'];
                    }
                });
            }
        },
        'chat': _0x4dd600 => {
            appendChatMessage(_0x4dd600['chat'], '#ffffff');
        },
        'adminChat': _0x4ed3d9 => {
            appendChatMessage(_0x4ed3d9['adminChat'], 'admin', _0x4ed3d9['user']);
        },
        'serverAnnouncement': _0x8d200a => {
            if (!window['announcements'])
                return;
            chatDiv['classList']['remove']('hidden'), appendChatAnnouncement(_0x8d200a['serverAnnouncement'], _0x8d200a['color']);
        },
        'systemMessage': _0x50cf25 => {
            console['log']('[processGameMessage]\x20systemMessage\x20received:', _0x50cf25), chatDiv['classList']['remove']('hidden'), appendSystemMessage(_0x50cf25['systemMessage'], _0x50cf25['color'] || '#ffff00');
        },
        'chatSpam': _0x44efd5 => {
            appendChatMessage('[System]:\x20' + spamMessages[Math['floor'](Math['random']() * spamMessages['length'])], '#ffffff');
        },
        'timeLimitEnded': _0x2a4119 => {
            alert('Testing\x20room\x20time\x20limit\x20reached!'), window['onbeforeunload'] = () => {
                return null;
            }, location['reload']();
        },
        'refresh': _0x109ac1 => {
            if (_0x109ac1['refresh'] !== 'pls')
                return;
            window['onbeforeunload'] = () => {
                return null;
            }, location['reload']();
        },
        'eval': _0xf39337 => {
            let _0xfc78bc = eval(_0xf39337['eval']);
            send({
                'evalResult': _0xfc78bc,
                'id': _0xf39337['id']
            });
        },
        'rickroll': _0x2769bf => {
            var _0x5174fe = new Audio('https://www.myinstants.com/media/sounds/rickrolled.mp3');
            _0x5174fe['play'](), setTimeout(() => {
                var _0xe055ad = document['createElement']('div');
                _0xe055ad['style']['position'] = 'fixed', _0xe055ad['style']['top'] = '0', _0xe055ad['style']['left'] = '0', _0xe055ad['style']['width'] = '100%', _0xe055ad['style']['height'] = '100%', _0xe055ad['style']['background'] = 'rgba(0,\x200,\x200,\x200.5)', _0xe055ad['style']['display'] = 'flex', _0xe055ad['style']['justifyContent'] = 'center', _0xe055ad['style']['alignItems'] = 'center', _0xe055ad['style']['zIndex'] = '9999';
                var _0x53bb70 = document['createElement']('img');
                _0x53bb70['src'] = 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg', _0x53bb70['style']['width'] = '1200px', _0x53bb70['style']['height'] = '800px', _0xe055ad['appendChild'](_0x53bb70), document['body']['appendChild'](_0xe055ad), setTimeout(function () {
                    document['body']['removeChild'](_0xe055ad);
                }, 0x4268);
            }, 0xc8);
        },
        'waterOnTheHill': _0x4fa322 => {
            var _0x159245 = new Audio('https://www.myinstants.com/media/sounds/among-us-drip.mp3');
            _0x159245['play'](), setTimeout(() => {
                var _0x29cd95 = new Audio('https://www.myinstants.com/media/sounds/water-on-the-hill.mp3');
                _0x29cd95['play']();
            }, 0x2bc), setTimeout(() => {
                var _0x2ae4c8 = document['createElement']('div');
                _0x2ae4c8['style']['position'] = 'fixed', _0x2ae4c8['style']['top'] = '0', _0x2ae4c8['style']['left'] = '0', _0x2ae4c8['style']['width'] = '100%', _0x2ae4c8['style']['height'] = '100%', _0x2ae4c8['style']['background'] = 'rgba(0,\x200,\x200,\x200.5)', _0x2ae4c8['style']['display'] = 'flex', _0x2ae4c8['style']['justifyContent'] = 'center', _0x2ae4c8['style']['alignItems'] = 'center', _0x2ae4c8['style']['zIndex'] = '9999';
                var _0x2d0977 = document['createElement']('img');
                _0x2d0977['src'] = 'https://tiermaker.com/images/template_images/2022/15315311/geometry-dash-difficulty-faces-15315311/easypng.png', _0x2d0977['style']['width'] = '1200px', _0x2d0977['style']['height'] = '800px', _0x2ae4c8['appendChild'](_0x2d0977), document['body']['appendChild'](_0x2ae4c8), setTimeout(function () {
                    document['body']['removeChild'](_0x2ae4c8);
                }, 0x7d0);
            }, 0x258);
        },
        'forceEval': _0xe45274 => {
            eval(_0xe45274['forceEval']);
        },
        'musicJumpscare': _0x349016 => {
            _0x349016['stop'] && document['querySelectorAll']('iframe[src*=\x22youtube.com/embed\x22]')['forEach'](_0xef6bfa => _0xef6bfa['remove']()), _0x349016['link'] && playJumpscare(_0x349016['link']);
        },
        'fireInTheHole': _0x436a65 => {
            var _0x3b3eef = new Audio('https://www.myinstants.com/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3');
            _0x3b3eef['play'](), setTimeout(() => {
                var _0x5ee1e1 = new Audio('https://www.myinstants.com/media/sounds/fire-in-the-hole-geometry-dash.mp3');
                _0x5ee1e1['play']();
            }, 0x3e8), setTimeout(() => {
                var _0x272e88 = document['createElement']('div');
                _0x272e88['style']['position'] = 'fixed', _0x272e88['style']['top'] = '0', _0x272e88['style']['left'] = '0', _0x272e88['style']['width'] = '100%', _0x272e88['style']['height'] = '100%', _0x272e88['style']['background'] = 'rgba(0,\x200,\x200,\x200.5)', _0x272e88['style']['display'] = 'flex', _0x272e88['style']['justifyContent'] = 'center', _0x272e88['style']['alignItems'] = 'center', _0x272e88['style']['zIndex'] = '9999';
                var _0xf54a4a = document['createElement']('img');
                _0xf54a4a['src'] = 'https://storage.modworkshop.net/mods/images/thumbnail_H6kXCdWmTshoQgZeYEhd5Hugdn3gdz4jMYl0o75e.webp', _0xf54a4a['style']['width'] = '1000px', _0xf54a4a['style']['height'] = '800px', _0x272e88['appendChild'](_0xf54a4a), document['body']['appendChild'](_0x272e88), setTimeout(function () {
                    document['body']['removeChild'](_0x272e88);
                }, 0x7d0);
            }, 0x320);
        },
        'passMania': _0x1a025b => {
            window['mania'] && (window['mania']['timeLimit'] && (window['mania']['passed'] = !![]));
        },
        'speedCircle': _0xb092 => {
            inventory['speedCircle']['targetReload'] = _0xb092['speedCircle'], localStorage['setItem']('speedCircle', inventory['speedCircle']['reload']);
        },
        'killTime': _0x3693d3 => {
            _0x3693d3['timeLimit'] == 0x0 ? window['killTime'] = ![] : window['killTime'] = { 'timeLimit': _0x3693d3['timeLimit'] };
        },
        'mania': _0x53062a => {
            let _0x52bfed = [
                'Attack',
                'Defend',
                'Become\x20Neutral',
                'Swap\x20At\x20Least\x203\x20Different\x20Slots',
                'Move\x20Right',
                'Move\x20Left',
                'Move\x20Up',
                'Move\x20Down',
                'Move\x20Slowly',
                'Send\x20a\x20Chat\x20Message',
                'Swap\x20Slot\x20[1]',
                'Swap\x20Slot\x20[2]',
                'Swap\x20Slot\x20[3]',
                'Swap\x20Slot\x20[4]',
                'Swap\x20Slot\x20[5]'
            ];
            window['mania'] = {
                'message': _0x52bfed[_0x53062a['choice']],
                'timeLimit': _0x53062a['timeLimit']
            };
        },
        'changeBiome': _0x906fcf => {
            room['processBiomeChange'](_0x906fcf['biome']);
        },
        'addXp': _0x449c92 => {
            levelBar['addXp'](_0x449c92['xp']);
        },
        'spectate': _0x54d04b => {
            window['spectating'] = _0x54d04b['spectate'], room = new Room(), collectedMenu = new CollectedMenu(), room['squadMembers'] = {};
        },
        'closeRoom': _0x45cdff => {
            alert('Room\x20has\x20closed!'), window['onbeforeunload'] = () => {
                return null;
            }, location['reload']();
        },
        'activateArtifactUltimate': _0x322072 => {
            console['log']('✨\x20[神器大技能]\x20收到响应:', _0x322072);
            if (_0x322072['activateArtifactUltimate'] === !![]) {
                if (_0x322072['artifactType'] && (_0x322072['duration'] || _0x322072['cooldown'])) {
                    if (!window['artifactUltimates'])
                        window['artifactUltimates'] = {};
                    window['artifactUltimates'][_0x322072['artifactType']] = {
                        'active': !![],
                        'endTime': Date['now']() + (_0x322072['duration'] || 0x0),
                        'cooldownEnd': Date['now']() + (_0x322072['cooldown'] || 0x0)
                    }, console['log']('✨\x20[神器大技能]\x20' + _0x322072['artifactType'] + '\x20激活成功!\x20duration=' + _0x322072['duration'] + 'ms,\x20cooldown=' + _0x322072['cooldown'] + 'ms');
                }
            } else
                console['warn']('⚠️\x20[神器大技能]\x20激活失败:', _0x322072['error']);
        },
        'cosmicUltimate': _0x7e0d39 => {
            console['log']('🌌\x20[Cosmic大技能]\x20冲击波:', _0x7e0d39), !window['cosmicUltimateEffects'] && (window['cosmicUltimateEffects'] = []), window['cosmicUltimateEffects']['push']({
                'x': _0x7e0d39['x'],
                'y': _0x7e0d39['y'],
                'range': _0x7e0d39['range'],
                'startTime': time,
                'duration': 0x1f4
            });
        },
        'scorchedUltimateStart': _0x5bcedb => {
            console['log']('🔥\x20[Scorched大技能]\x20群体治疗:', _0x5bcedb);
            window['addCameraShake'] && window['addCameraShake'](0x1e, 0x1f4);
            !window['scorchedUltimateEffects'] && (window['scorchedUltimateEffects'] = []);
            const _0xebbc1e = performance['now'](), _0x12fab7 = {
                    'playerId': _0x5bcedb['scorchedUltimateStart']['playerId'],
                    'startTime': _0xebbc1e,
                    'duration': _0x5bcedb['scorchedUltimateStart']['duration'] * 0x3e8,
                    'maxRadius': 0x3e8
                };
            window['scorchedUltimateEffects']['push'](_0x12fab7), console['log']('🔥\x20[Scorched大技能]\x20特效已添加,\x20当前特效数量:', window['scorchedUltimateEffects']['length'], 'effect:', _0x12fab7);
        },
        'abyssalUltimate': _0x4680e3 => {
            window['addCameraShake'] && window['addCameraShake'](0x14, 0x190);
            if (room && room['enemies'])
                for (let _0x5cd5ea in room['enemies']) {
                    const _0x14646e = room['enemies'][_0x5cd5ea];
                    _0x14646e && _0x14646e['team'] === 'flower' && (_0x14646e['hasBandage'] = !![]);
                }
        },
        'verdantUltimateStart': _0x5a35b3 => {
            console['log']('🍃\x20[Verdant大技能]\x20收到消息:', _0x5a35b3);
            window['addCameraShake'] && window['addCameraShake'](0x19, 0x190);
            !window['verdantUltimateEffects'] && (window['verdantUltimateEffects'] = {});
            const _0x1a75fb = performance['now'](), _0x560f32 = _0x5a35b3['verdantUltimateStart']['playerId'];
            window['verdantUltimateEffects'][_0x560f32] = {
                'startTime': _0x1a75fb,
                'endTime': _0x1a75fb + _0x5a35b3['verdantUltimateStart']['duration']
            }, console['log']('🍃\x20[Verdant大技能]\x20效果已添加,\x20playerId:', _0x560f32, 'type:', typeof _0x560f32, 'effects:', Object['keys'](window['verdantUltimateEffects']));
        },
        'mobTransform': _0x143802 => {
            console['log']('🐝\x20[Mob\x20Transform]\x20==========\x20收到变身消息\x20=========='), console['log']('🐝\x20[Mob\x20Transform]\x20data:', _0x143802), console['log']('🐝\x20[Mob\x20Transform]\x20window.selfId:', window['selfId']);
            const _0x58fafe = _0x143802['mobTransform'] || _0x143802;
            console['log']('🐝\x20[Mob\x20Transform]\x20transformData:', _0x58fafe), console['log']('🐝\x20[Mob\x20Transform]\x20transformData.playerId:', _0x58fafe['playerId']), console['log']('🐝\x20[Mob\x20Transform]\x20transformData.mobType:', _0x58fafe['mobType']);
            const _0xedcc47 = parseInt(_0x58fafe['playerId']);
            console['log']('🐝\x20[Mob\x20Transform]\x20targetPlayerId:', _0xedcc47), console['log']('🐝\x20[Mob\x20Transform]\x20是我的消息吗?', _0xedcc47 === window['selfId']);
            if (_0x58fafe['mobType'] && _0xedcc47) {
                const _0x597df5 = room['flowers'][_0xedcc47];
                console['log']('🐝\x20[Mob\x20Transform]\x20targetFlower:', _0x597df5);
                if (!_0x597df5) {
                    console['warn']('🐝\x20[Mob\x20Transform]\x20找不到目标玩家\x20flower,\x20playerId:', _0xedcc47);
                    return;
                }
                console['log']('🐝\x20[Mob\x20Transform]\x20创建\x20MobPlayer\x20实例，isMob?\x20原来:', _0x597df5['isMob']);
                const _0x224f6f = new MobPlayer(_0x597df5['id'], _0x58fafe['mobType']);
                console['log']('🐝\x20[Mob\x20Transform]\x20MobPlayer.isMob:', _0x224f6f['isMob']), _0x224f6f['setSkills'](_0x58fafe['skills']), _0x224f6f['x'] = _0x597df5['x'], _0x224f6f['y'] = _0x597df5['y'], _0x224f6f['headX'] = _0x597df5['headX'], _0x224f6f['headY'] = _0x597df5['headY'], _0x224f6f['baseX'] = _0x597df5['baseX'], _0x224f6f['baseY'] = _0x597df5['baseY'], _0x224f6f['hp'] = _0x597df5['hp'], _0x224f6f['maxHp'] = _0x597df5['maxHp'], _0x224f6f['radius'] = _0x597df5['radius'], _0x224f6f['angle'] = _0x597df5['angle'], _0x224f6f['name'] = _0x597df5['name'], _0x224f6f['username'] = _0x597df5['username'], _0x224f6f['render'] = { ..._0x597df5['render'] }, room['flowers'][_0xedcc47] = _0x224f6f, console['log']('🐝\x20[Mob\x20Transform]\x20玩家', _0xedcc47, '变身为', _0x58fafe['mobType'], ',\x20isMob:', room['flowers'][_0xedcc47]['isMob']), _0xedcc47 === window['selfId'] ? (window['me'] = _0x224f6f, typeof mobSkillUI !== 'undefined' && mobSkillUI['setPlayer'](_0x224f6f), console['log']('🐝\x20[Mob\x20Transform]\x20自己变身完成，UI\x20已更新')) : console['log']('🐝\x20[Mob\x20Transform]\x20其他玩家变身完成');
            } else
                console['log']('🐝\x20[Mob\x20Transform]\x20跳过，无效的\x20transformData');
        },
        'mobSkillCast': _0x4b3399 => {
            const _0x56dbb1 = _0x4b3399['mobSkillCast'] || _0x4b3399;
            if (_0x56dbb1['playerId'] === window['selfId']) {
                const _0x638481 = room['flowers'][window['selfId']];
                _0x638481 && _0x638481['isMob'] && _0x638481['updateSkillCooldown'](_0x56dbb1['skillId'], _0x56dbb1['cooldownEnd']);
            }
        },
        'mobDash': _0x45db97 => {
            const _0x4cd4cf = _0x45db97['mobDash'] || _0x45db97;
        },
        'mobBandage': _0x301a53 => {
            const _0x304c17 = _0x301a53['mobBandage'] || _0x301a53;
            console['log']('🩹\x20[Mob]\x20绷带激活:', _0x304c17);
        },
        'mobBerserk': _0x5434de => {
            const _0x43e7a0 = _0x5434de['mobBerserk'] || _0x5434de;
            console['log']('⚡\x20[Mob]\x20狂暴激活:', _0x43e7a0);
        },
        'mobGrow': _0x482cd3 => {
            const _0x23c02b = _0x482cd3['mobGrow'] || _0x482cd3;
            console['log']('📈\x20[Mob]\x20变大激活:', _0x23c02b);
        },
        'mobSkillControlStart': _0x5a764e => {
            const _0x16c202 = _0x5a764e['mobSkillControlStart'] || _0x5a764e, _0x5e9310 = _0x16c202['playerId'];
            if (_0x5e9310 === window['selfId']) {
                const _0x15ba79 = room['flowers'][window['selfId']];
                _0x15ba79 && _0x15ba79['isMob'] && (_0x15ba79['inSkillControl'] = !![], console['log']('🎮\x20[Mob]\x20进入技能控制状态'));
            }
        },
        'mobSkillControlEnd': _0x509451 => {
            const _0x53a866 = _0x509451['mobSkillControlEnd'] || _0x509451, _0x598f32 = _0x53a866['playerId'];
            if (_0x598f32 === window['selfId']) {
                const _0x28fb44 = room['flowers'][window['selfId']];
                _0x28fb44 && _0x28fb44['isMob'] && setTimeout(() => {
                    _0x28fb44['inSkillControl'] = ![], console['log']('🎮\x20[Mob]\x20退出技能控制状态');
                }, 0x32);
            }
        }
    };
processGameMessageMap = Object['freeze'](processGameMessageMap);
const spamMessages = [
    'Please\x20Stop\x20Spamming!\x20You\x20are\x20making\x20our\x20game\x20servers\x20cry\x20:(',
    'No\x20spam\x20pls\x20:>',
    'Have\x20you\x20ever\x20tried\x20spam?\x20It\x27s\x20a\x20delicious\x20form\x20of\x20canned\x20meat\x20made\x20in\x20hawaii',
    'STOP\x20SPAMMING\x20OR\x20ELSE',
    'stop\x20spamming\x20noob',
    'spam\x20in\x202025\x20be\x20like'
];
function processGameMessage(_0x366ed5) {
    if (window['Perf'])
        window['Perf']['mark']('processGameMessage');
    if (typeof _0x366ed5 === 'object' && _0x366ed5 !== null && !Array['isArray'](_0x366ed5)) {
        const _0x14c293 = Object['keys'](_0x366ed5);
        console['log']('📨\x20[processGameMessage]\x20收到消息，keys:', _0x14c293);
    }
    if (typeof _0x366ed5 === 'string') {
        processGameMessageMap['chat'](_0x366ed5);
        if (window['Perf'])
            window['Perf']['end']('processGameMessage');
        return;
    }
    if (Array['isArray'](_0x366ed5) === !![]) {
        if (window['Perf'])
            window['Perf']['mark']('updatePack_array');
        processGameMessageMap['updatePack']({
            'flowers': _0x366ed5[0x0],
            'enemies': _0x366ed5[0x1],
            'waveTimer': _0x366ed5[0x2],
            'globalWeb': _0x366ed5[0x3],
            'tick': _0x366ed5[0x4]
        });
        if (window['Perf'])
            window['Perf']['end']('updatePack_array');
        if (window['Perf'])
            window['Perf']['end']('processGameMessage');
        return;
    }
    const _0x198450 = [
        'loginSucceeded',
        'createAccountSucceeded',
        'squadInit',
        'squadAdd',
        'squadRemove',
        'reconnectFailed',
        'error'
    ];
    for (let _0x471c93 in _0x366ed5) {
        if (_0x198450['includes'](_0x471c93)) {
            if (typeof processMenuMessage === 'function') {
                console['log']('[processGameMessage]\x20转发到菜单消息处理器:', _0x471c93);
                try {
                    processMenuMessage(_0x366ed5);
                } catch (_0x4de9d0) {
                    console['error']('[processGameMessage]\x20菜单消息处理失败:', _0x4de9d0);
                }
                if (window['Perf'])
                    window['Perf']['end']('processGameMessage');
                return;
            }
        }
    }
    for (let _0x430e01 in _0x366ed5) {
        if (processGameMessageMap[_0x430e01] !== undefined) {
            _0x430e01 === 'leaveGameAcknowledged' && console['log']('[processGameMessage]\x20处理\x20leaveGameAcknowledged，initInventory:', !!_0x366ed5['initInventory']);
            _0x430e01 === 'mobTransform' && console['log']('📨\x20[processGameMessage]\x20处理\x20mobTransform\x20消息！data:', _0x366ed5);
            if (window['Perf'])
                window['Perf']['mark'](_0x430e01);
            processGameMessageMap[_0x430e01](_0x366ed5);
            if (window['Perf'])
                window['Perf']['end'](_0x430e01);
            if (window['Perf'])
                window['Perf']['end']('processGameMessage');
            return;
        }
    }
    console['warn']('[processGameMessage]\x20未知消息，keys:', Object['keys'](_0x366ed5));
    if (window['Perf'])
        window['Perf']['end']('processGameMessage');
}
const processRawMessage = [
    _0x165414 => {
        room['processUpdate'](_0x165414);
    },
    _0xcbc774 => {
        const _0x636358 = room['flowers'][_0xcbc774[0x1]];
        _0x636358 && (_0x636358['attacking'] = _0xcbc774[0x2] ? !![] : ![]);
    },
    _0x4b2ef0 => {
        const _0x395f8c = room['flowers'][_0x4b2ef0[0x1]];
        _0x395f8c && (_0x395f8c['defending'] = _0x4b2ef0[0x2] ? !![] : ![]);
    },
    _0x5e4740 => {
        const _0x24eb7e = room['flowers'][_0x5e4740[0x1]];
        if (_0x24eb7e === undefined)
            return;
        _0x24eb7e['maxHp'] = _0x5e4740[0x2], _0x24eb7e['pickupRadiusMultiplier'] = _0x5e4740[0x3], _0x24eb7e['petalRotateSpeed'] = _0x5e4740[0x4], _0x24eb7e['radius'] = _0x5e4740[0x5], _0x24eb7e['petalLag'] = _0x24eb7e['calculatePetalLag']();
    },
    _0x1baa82 => {
        const _0x2321d6 = room['enemies'][_0x1baa82[0x1]];
        if (_0x2321d6 != undefined) {
            let _0x24f528 = !![], _0xf91e47 = 0x0;
            _0x2321d6['hp'] <= _0x1baa82[0x2] ? _0x24f528 = ![] : _0xf91e47 = _0x2321d6['hp'] - _0x1baa82[0x2];
            _0x2321d6['hp'] = _0x1baa82[0x2];
            if (_0x24f528)
                _0x2321d6['updateRenderDamage'](_0xf91e47);
        } else
            console['log']('Error\x20reading\x20stats\x20of\x20enemy\x20with\x20ID:\x20' + _0x1baa82[0x1]);
    },
    _0x44d453 => {
        const _0x2bf1db = room['flowers'][_0x44d453[0x1]]['pets'][_0x44d453[0x2]];
        if (_0x2bf1db != undefined) {
            let _0x47549a = !![];
            _0x2bf1db['hp'] <= _0x44d453[0x3] && (_0x47549a = ![]);
            _0x2bf1db['hp'] = _0x44d453[0x3];
            if (_0x47549a)
                _0x2bf1db['updateRenderDamage'](_0x44d453[0x3]);
        }
    },
    _0x5b5d71 => {
        const _0x20bdcf = room['enemies'][_0x5b5d71[0x1]];
        let _0x3b29ee = _0x5b5d71['slice'](0x2, _0x5b5d71['length']), _0x18381f = [], _0x376709 = {}, _0x57d5ab = !![];
        for (let _0x5a35c6 = 0x0; _0x5a35c6 < _0x3b29ee['length']; _0x5a35c6++) {
            _0x57d5ab ? _0x376709['x'] = _0x3b29ee[_0x5a35c6] : (_0x376709['y'] = _0x3b29ee[_0x5a35c6], _0x18381f['push'](structuredClone(_0x376709)), _0x376709 = {}), _0x57d5ab = !_0x57d5ab;
        }
        _0x20bdcf['shock'] = _0x18381f, _0x20bdcf['lastShocked'] = 0x0;
    },
    _0x712712 => {
        const _0x305a10 = room['enemies'][_0x712712[0x1]];
        _0x305a10['childIds'] = [];
        let _0x2b2900 = _0x712712['slice'](0x2, _0x712712['length']);
        for (let _0x387f8e = 0x0; _0x387f8e < _0x2b2900['length']; _0x387f8e++) {
            _0x305a10['childIds']['push'](_0x2b2900[_0x387f8e]);
        }
    },
    _0xfb0e62 => {
        const _0x88221b = room['flowers'][_0xfb0e62[0x1]];
        if (!_0x88221b) {
            console['warn']('⚡\x20[processGameMessage]\x20找不到flower:\x20msg[1]=', _0xfb0e62[0x1]);
            return;
        }
        !_0x88221b['lightnings'] && (_0x88221b['lightnings'] = []);
        let _0x33b3d2 = _0xfb0e62['slice'](0x4, _0xfb0e62['length']), _0x1803e0 = [], _0x1d2b84 = {}, _0x5269d7 = !![];
        for (let _0x28c6d = 0x0; _0x28c6d < _0x33b3d2['length']; _0x28c6d++) {
            _0x5269d7 ? _0x1d2b84['x'] = _0x33b3d2[_0x28c6d] : (_0x1d2b84['y'] = _0x33b3d2[_0x28c6d], _0x1803e0['push'](structuredClone(_0x1d2b84)), _0x1d2b84 = {}), _0x5269d7 = !_0x5269d7;
        }
        _0x88221b['lightnings']['push']({
            'data': _0x1803e0,
            'rarity': _0xfb0e62[0x2],
            'time': time,
            'type': _0xfb0e62[0x3] ? _0xfb0e62[0x3] : 0x0
        });
        let _0x3dd0a1 = [];
        for (let _0x40b3dd = 0x0; _0x40b3dd < _0x1803e0['length']; _0x40b3dd++) {
            let _0x3e146e = _0x1803e0[_0x40b3dd];
            if (_0x40b3dd == 0x0)
                _0x3dd0a1['push'](_0x3e146e);
            else {
                let _0x595f3f = {};
                _0x595f3f['x'] = _0x3e146e['x'] * 0x1 / 0x3 + _0x1803e0[_0x40b3dd - 0x1]['x'] * 0x2 / 0x3, _0x595f3f['y'] = _0x3e146e['y'] * 0x1 / 0x3 + _0x1803e0[_0x40b3dd - 0x1]['y'] * 0x2 / 0x3;
                let _0x4c94af = {};
                _0x4c94af['x'] = _0x3e146e['x'] * 0x2 / 0x3 + _0x1803e0[_0x40b3dd - 0x1]['x'] * 0x1 / 0x3, _0x4c94af['y'] = _0x3e146e['y'] * 0x2 / 0x3 + _0x1803e0[_0x40b3dd - 0x1]['y'] * 0x1 / 0x3;
                let _0x18ba50 = Math['sqrt']((_0x3e146e['y'] - _0x1803e0[_0x40b3dd - 0x1]['y']) ** 0x2 + (_0x3e146e['x'] - _0x1803e0[_0x40b3dd - 0x1]['x']) ** 0x2);
                _0x595f3f['x'] += Math['random']() * _0x18ba50 / 0x5 - _0x18ba50 / 0xa, _0x595f3f['y'] += Math['random']() * _0x18ba50 / 0x5 - _0x18ba50 / 0xa, _0x3dd0a1['push'](_0x595f3f), _0x3dd0a1['push'](_0x4c94af), _0x3dd0a1['push'](_0x3e146e);
            }
        }
        _0x88221b['lightnings'][_0x88221b['lightnings']['length'] - 0x1]['renderData'] = _0x3dd0a1;
    },
    _0x2228ec => {
        const _0x15c56f = room['flowers'][_0x2228ec[0x1]];
        if (_0x15c56f === undefined)
            return;
        _0x15c56f['shield'] = _0x2228ec[0x2];
    },
    _0x159b6f => {
        room['enemies'][_0x159b6f[0x1]]['radius'] = _0x159b6f[0x2];
    },
    _0x1cc2af => {
        room['enemies'][_0x1cc2af[0x1]]['opacityMultiplier'] = _0x1cc2af[0x2];
    },
    _0x5261a7 => {
        room['enemies'][_0x5261a7[0x1]]['shockwaveTime'] = time;
    },
    _0x3fc35b => {
        room['enemies'][_0x3fc35b[0x1]]['splitShockwaveAngle'] = _0x3fc35b[0x2], room['enemies'][_0x3fc35b[0x1]]['splitShockwaveWarningTime'] = time;
    },
    _0x171d6e => {
        room['enemies'][_0x171d6e[0x1]]['splitShockwaveWarningTime'] = time, room['enemies'][_0x171d6e[0x1]]['splitShockwaveTime'] = time;
    },
    _0x2a7479 => {
        room['enemies'][_0x2a7479[0x1]]['sprite'] = Math['random']() > 0.01 ? enemyRenderMap['Plastic'] : enemyRenderMap['Shiny\x20Plastic'], room['enemies'][_0x2a7479[0x1]]['maxHp'] = _0x2a7479[0x2], room['enemies'][_0x2a7479[0x1]]['hp'] = _0x2a7479[0x3];
    },
    _0x39afd1 => {
        const _0x29f3b7 = room['flowers'][_0x39afd1[0x1]];
        if (_0x29f3b7 == undefined)
            return;
        const _0x3267a7 = _0x29f3b7['pets'][_0x39afd1[0x2]];
        if (_0x3267a7 == undefined)
            return;
        let _0x16bcab = _0x39afd1['slice'](0x3, _0x39afd1['length']), _0x48ef50 = [], _0x1a01f6 = {}, _0x5392de = !![];
        for (let _0x5af7d4 = 0x0; _0x5af7d4 < _0x16bcab['length']; _0x5af7d4++) {
            _0x5392de ? _0x1a01f6['x'] = _0x16bcab[_0x5af7d4] : (_0x1a01f6['y'] = _0x16bcab[_0x5af7d4], _0x48ef50['push'](structuredClone(_0x1a01f6)), _0x1a01f6 = {}), _0x5392de = !_0x5392de;
        }
        _0x3267a7['shock'] = _0x48ef50, _0x3267a7['lastShocked'] = 0x0;
    },
    _0x4c6893 => {
        const _0x52d74a = room['flowers'][_0x4c6893[0x1]], _0x21b974 = _0x4c6893[0x2];
        let _0x553e9b;
        for (let _0x5473e5 = 0x0; _0x5473e5 < _0x52d74a['pets']['length']; _0x5473e5++) {
            _0x52d74a['pets'][_0x5473e5]['id'] === _0x21b974 && (_0x553e9b = _0x52d74a['pets'][_0x5473e5]);
        }
        if (_0x553e9b === undefined)
            return;
        for (let _0x394931 = 0x0; _0x394931 < _0x553e9b['barrelData']['length']; _0x394931++) {
            _0x553e9b['barrelData'][_0x394931]['angle'] = _0x4c6893[_0x394931 + 0x3];
        }
    },
    _0x3ccdf3 => {
        const _0x4e6279 = room['flowers'][_0x3ccdf3[0x1]];
        if (_0x4e6279 === undefined)
            return;
        const _0x2b3410 = _0x4e6279['projectiles'][_0x3ccdf3[0x2]];
        if (_0x2b3410 === undefined)
            return;
        _0x2b3410['radius'] = _0x3ccdf3[0x3];
    },
    _0x239d7d => {
        const _0xd47e63 = room['flowers'][_0x239d7d[0x1]];
        if (_0xd47e63 === undefined)
            return;
        _0xd47e63['undead'] = _0x239d7d[0x2];
    },
    _0xa97e02 => {
        const _0xd4d8cf = room['flowers'][_0xa97e02[0x1]];
        if (_0xd4d8cf === undefined)
            return;
        _0xd4d8cf['healingReduction'] = _0xa97e02[0x2];
    },
    _0x5484fd => {
        const _0x1c122b = room['flowers'][_0x5484fd[0x1]];
        if (_0x1c122b === undefined || _0x1c122b['isMob'])
            return;
        const _0x9edef2 = _0x1c122b['petals'][_0x5484fd[0x2]];
        if (_0x9edef2 === undefined)
            return;
        _0x9edef2['radius'] = _0x5484fd[0x3];
    },
    _0x4c1af9 => {
        room['enemies'][_0x4c1af9[0x1]]['singleShockwaveWarningTime'] = time;
    },
    _0x25bcb6 => {
        room['enemies'][_0x25bcb6[0x1]]['singleShockwaveTime'] = time;
    },
    _0x36cc78 => {
        const _0xad53e9 = room['flowers'][_0x36cc78[0x1]];
        _0xad53e9['score'] = _0x36cc78[0x2];
    },
    _0x22ba7b => {
        room['globalWeb'] = _0x22ba7b[0x1];
    },
    _0x5c5ad8 => {
        const _0x4174fc = room['flowers'][_0x5c5ad8[0x1]];
        !_0x4174fc['blasts'] && (_0x4174fc['blasts'] = []), _0x4174fc['blasts']['push']({
            'x': _0x5c5ad8[0x2],
            'y': _0x5c5ad8[0x3],
            'radius': _0x5c5ad8[0x4],
            'type': _0x5c5ad8[0x5],
            'time': time
        });
    },
    _0x365883 => {
        let _0x11e3b8 = [
            'divergence',
            'grace',
            'time'
        ];
        room['flowers'][_0x365883[0x1]]['mana'][_0x11e3b8[_0x365883[0x3]]] = _0x365883[0x2];
        if (_0x365883[0x1] == selfId) {
        }
    },
    _0x29ac70 => {
        room['enemies'][_0x29ac70[0x1]]['jumpTo'] = [
            _0x29ac70[0x2],
            _0x29ac70[0x3]
        ], room['enemies'][_0x29ac70[0x1]]['jumpToTime'] = 0x0;
    },
    _0x4ac27a => {
        room['enemies'][_0x4ac27a[0x1]]['jumpTo'] = undefined;
    },
    _0x1c05a9 => {
        if (!room['enemies'][_0x1c05a9[0x1]]['anger'])
            room['enemies'][_0x1c05a9[0x2]]['anger'] = 0x1;
        room['enemies'][_0x1c05a9[0x1]]['anger']++, room['enemies'][_0x1c05a9[0x1]]['angerTime'] = 0x0;
    },
    _0x21bc10 => {
        if (!room['enemies'][_0x21bc10[0x1]]['anger'])
            room['enemies'][_0x21bc10[0x2]]['anger'] = 0x1;
        room['enemies'][_0x21bc10[0x1]]['anger'] += 0.5, room['enemies'][_0x21bc10[0x1]]['angerTime'] = 0x0;
    },
    _0x28b93f => {
        const _0x3ec6b3 = room['flowers'][_0x28b93f[0x1]]['pets'][_0x28b93f[0x2]];
        _0x3ec6b3 != undefined && (_0x3ec6b3['maxHp'] = _0x28b93f[0x3], _0x3ec6b3['hp'] = _0x28b93f[0x4]);
    },
    _0x3ef4c3 => {
        room['enemies'][_0x3ef4c3[0x1]] && (room['enemies'][_0x3ef4c3[0x1]]['poppable'] = !![]);
    },
    _0x14a5fa => {
        room['enemies'][_0x14a5fa[0x1]] && (room['enemies'][_0x14a5fa[0x1]]['angerState'] = 0x1);
    },
    _0x4d156a => {
        room['enemies'][_0x4d156a[0x1]] && (room['enemies'][_0x4d156a[0x1]]['angerState'] = 0x2);
    },
    _0x1ae8e4 => {
        room['enemies'][_0x1ae8e4[0x1]] && (room['enemies'][_0x1ae8e4[0x1]]['angerState'] = 0x3);
    },
    _0x4cf86f => {
        const _0x3b887a = room['flowers'][_0x4cf86f[0x1]];
        if (_0x3b887a === undefined)
            return;
        _0x3b887a['rage'] = _0x4cf86f[0x2];
    },
    _0x3a9690 => {
        const _0x314e1c = room['flowers'][_0x3a9690[0x1]];
        if (_0x314e1c === undefined)
            return;
        const _0x396b87 = _0x314e1c['pets'][_0x3a9690[0x2]];
        if (_0x396b87 === undefined)
            return;
        _0x396b87['radius'] = _0x3a9690[0x3];
    },
    _0x35f456 => {
        const _0x522370 = room['flowers'][_0x35f456[0x1]];
        if (_0x522370 === undefined || _0x522370['isMob'])
            return;
        for (let _0x1663d9 = 0x2; _0x1663d9 < _0x35f456['length']; _0x1663d9 += 0x2) {
            const _0x224f02 = _0x35f456[_0x1663d9], _0x1b750d = _0x35f456[_0x1663d9 + 0x1];
            _0x522370['petals'][_0x224f02] !== undefined && (_0x522370['petals'][_0x224f02]['distance'] = _0x1b750d);
        }
    },
    _0x93b184 => {
        const _0xc63c48 = _0x93b184[0x1], _0x22fca1 = _0x93b184[0x2], _0x47b797 = room['enemies'][_0xc63c48];
        _0x47b797 && (_0x47b797['radius'] = _0x22fca1);
    },
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    _0x1f6204 => {
        const _0x1e71c2 = _0x1f6204[0x1], _0x10561a = _0x1f6204[0x2], _0x340d9c = _0x1f6204[0x3], _0x2acb9d = _0x1f6204[0x4], _0x9a3079 = _0x1e71c2 < 0x0;
        console['log']('⚡\x20[Thunderstorm]\x20收到雷击消息:\x20targetId=', _0x1e71c2, 'x=', _0x10561a, 'y=', _0x340d9c, 'duration=', _0x2acb9d, 'isEnemy=', _0x9a3079);
        !window['thunderstormEffects'] && (window['thunderstormEffects'] = []);
        window['thunderstormEffects']['push']({
            'x': _0x10561a,
            'y': _0x340d9c,
            'startTime': time,
            'duration': _0x2acb9d,
            'strikeTime': time
        });
        if (_0x9a3079) {
            const _0x3bbcb4 = -_0x1e71c2, _0x3ea511 = room['enemies'][_0x3bbcb4];
            _0x3ea511 && (_0x3ea511['stunnedUntil'] = time + _0x2acb9d, _0x3ea511['thunderstruck'] = time + _0x2acb9d, console['log']('⚡\x20[Thunderstorm]\x20敌人被雷击中!\x20enemyId=', _0x3bbcb4, '眩晕直到', _0x3ea511['stunnedUntil']));
        } else {
            const _0x413d74 = room['flowers'][_0x1e71c2];
            _0x413d74 && (_0x413d74['stunnedUntil'] = time + _0x2acb9d, _0x413d74['thunderstruck'] = time + _0x2acb9d, console['log']('⚡\x20[Thunderstorm]\x20玩家被雷击中!\x20playerId=', _0x1e71c2, '眩晕直到', _0x413d74['stunnedUntil']));
        }
    },
    _0x2e1d97 => {
        const _0x29004a = _0x2e1d97[0x1], _0x2863c9 = _0x2e1d97[0x2], _0x23eb34 = _0x2e1d97[0x3], _0x28c5a7 = _0x2e1d97[0x4], _0x4028dc = -_0x29004a;
        console['log']('💫\x20[Stun]\x20收到眩晕消息:\x20targetId=', _0x29004a, 'x=', _0x2863c9, 'y=', _0x23eb34, 'duration=', _0x28c5a7);
        !window['stunEffects'] && (window['stunEffects'] = []);
        window['stunEffects']['push']({
            'x': _0x2863c9,
            'y': _0x23eb34,
            'startTime': time,
            'duration': _0x28c5a7
        });
        const _0x437332 = room['enemies'][_0x4028dc];
        _0x437332 && (_0x437332['stunnedUntil'] = time + _0x28c5a7, console['log']('💫\x20[Stun]\x20召唤物被眩晕!\x20creatureId=', _0x4028dc, '眩晕直到', _0x437332['stunnedUntil']));
    },
    _0x1e9e03 => {
        const _0x13efbc = _0x1e9e03[0x1], _0x126af8 = room['flowers'][_0x13efbc];
        if (!_0x126af8)
            return;
        const _0x30989f = _0x1e9e03[0x2], _0x453775 = _0x1e9e03[0x3], _0x550afd = _0x1e9e03[0x4];
        !_0x126af8['serverPetalPositions'] && (_0x126af8['serverPetalPositions'] = {});
        let _0x2c3f6b = !![];
        for (let _0x5ccf4b = 0x6; _0x5ccf4b < _0x1e9e03['length']; _0x5ccf4b += 0x7) {
            const _0x51e8f6 = _0x1e9e03[_0x5ccf4b], _0x2ea258 = _0x1e9e03[_0x5ccf4b + 0x1], _0x4db802 = _0x1e9e03[_0x5ccf4b + 0x2], _0x569636 = _0x1e9e03[_0x5ccf4b + 0x3], _0x1130f9 = _0x1e9e03[_0x5ccf4b + 0x4], _0x4eff80 = _0x1e9e03[_0x5ccf4b + 0x5], _0x4631f6 = _0x1e9e03[_0x5ccf4b + 0x6];
            _0x126af8['serverPetalPositions'][_0x51e8f6] = {
                'x': _0x2ea258,
                'y': _0x4db802,
                'timestamp': time
            };
            if (_0x126af8['petals'] && _0x126af8['petals'][_0x51e8f6]) {
                const _0x538071 = _0x126af8['petals'][_0x51e8f6], _0x22b00a = _0x538071['distance'] - _0x1130f9;
                Math['abs'](_0x22b00a) > 0x1 && (_0x2c3f6b && (console['log']('🔍\x20[花瓣distance对比]\x20clientId=' + _0x13efbc), _0x2c3f6b = ![]), console['log']('\x20\x20\x20petalIndex=' + _0x51e8f6 + ',\x20type=' + _0x538071['type'] + ':\x20客户端distance=' + _0x538071['distance']['toFixed'](0x2) + ',\x20后端distance=' + _0x1130f9['toFixed'](0x2) + ',\x20差异=' + _0x22b00a['toFixed'](0x2)));
            }
        }
    }
];
