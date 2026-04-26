let cachedImages = {
        'petals': {
            'live': {},
            'indexed': {}
        },
        'enemies': {},
        'statBoxes': {
            'petals': {},
            'enemies': {}
        },
        'statics': {
            'reloadIcon': null,
            'noStack': null,
            'xp': null
        }
    }, mouseMovement = localStorage['getItem']('mouseMovement');
mouseMovement == null ? (mouseMovement = !![], localStorage['setItem']('mouseMovement', !![])) : mouseMovement == 'true' ? mouseMovement = !![] : mouseMovement = ![];
let damageFlash = localStorage['getItem']('damageFlash');
damageFlash == null ? (damageFlash = ![], localStorage['setItem']('damageFlash', ![])) : damageFlash == 'true' ? damageFlash = !![] : damageFlash = ![];
let noGrid = localStorage['getItem']('noGrid');
noGrid == null ? (noGrid = ![], localStorage['setItem']('noGrid', ![])) : noGrid == 'true' ? noGrid = !![] : noGrid = ![];
window['noGrid'] = noGrid;
let renderSquadPetals = localStorage['getItem']('renderSquadPetals');
renderSquadPetals == null ? (renderSquadPetals = !![], localStorage['setItem']('renderSquadPetals', !![])) : renderSquadPetals == 'true' ? renderSquadPetals = !![] : renderSquadPetals = ![];
window['renderSquadPetals'] = renderSquadPetals;
typeof normalEnemyRenderMap !== 'undefined' && (enemyRenderMap = normalEnemyRenderMap);
let statBoxes = localStorage['getItem']('statboxes');
statBoxes === null ? (statBoxes = !![], localStorage['setItem']('statboxes', !![])) : statBoxes == 'true' ? statBoxes = !![] : statBoxes = ![];
window['statBoxes'] = statBoxes;
let damageCounter = localStorage['getItem']('damageCounter');
damageCounter === null ? (damageCounter = ![], localStorage['setItem']('damageCounter', ![])) : damageCounter == 'true' ? damageCounter = !![] : damageCounter = ![];
window['damageCounter'] = damageCounter;
let petalRain = localStorage['getItem']('petalRain');
petalRain == null ? (petalRain = ![], localStorage['setItem']('petalRain', ![])) : petalRain == 'true' ? petalRain = !![] : petalRain = ![];
window['petalRain'] = petalRain;
let usernames = !![];
window['usernames'] = usernames, window['showCommunityBiomes'] = ![];
let announcements = localStorage['getItem']('announcements');
announcements == null ? (announcements = !![], localStorage['setItem']('announcements', !![])) : announcements == 'true' ? announcements = !![] : announcements = ![];
window['announcements'] = announcements;
let highQualityPetalContainers = localStorage['getItem']('hqp');
highQualityPetalContainers === null ? (highQualityPetalContainers = !![], localStorage['setItem']('hqp', !![])) : highQualityPetalContainers == 'true' ? highQualityPetalContainers = !![] : highQualityPetalContainers = ![];
window['hqp'] = highQualityPetalContainers;
let toRenderDebug = localStorage['getItem']('toRenderDebug');
toRenderDebug === null ? (toRenderDebug = ![], localStorage['setItem']('toRenderDebug', ![])) : toRenderDebug == 'true' ? toRenderDebug = !![] : toRenderDebug = ![];
window['toRenderDebug'] = toRenderDebug;
let showWeatherEffects = localStorage['getItem']('showWeatherEffects');
showWeatherEffects === null ? (showWeatherEffects = !![], localStorage['setItem']('showWeatherEffects', !![])) : showWeatherEffects == 'true' ? showWeatherEffects = !![] : showWeatherEffects = ![];
window['showWeatherEffects'] = showWeatherEffects;
let dynamicJoystick = localStorage['getItem']('dynamicJoystick');
dynamicJoystick === null ? (dynamicJoystick = ![], localStorage['setItem']('dynamicJoystick', ![])) : dynamicJoystick == 'true' ? dynamicJoystick = !![] : dynamicJoystick = ![];
window['dynamicJoystick'] = dynamicJoystick;
let noTrans = localStorage['getItem']('noTrans');
noTrans === null ? (noTrans = ![], localStorage['setItem']('noTrans', ![])) : noTrans == 'true' ? noTrans = !![] : noTrans = ![];
window['noTrans'] = noTrans;
function changeToggleElVal(_0x3ac4d5, _0x3f4e1c = ![]) {
    const _0x37ec70 = _0x3ac4d5['getAttribute']('ev-enabled-if');
    if (_0x37ec70) {
        try {
            eval(_0x37ec70) ? (_0x3ac4d5['innerHTML'] = _0x3ac4d5['getAttribute']('ev-enabled-val'), _0x3ac4d5['classList']['contains']('enabled') || _0x3ac4d5['classList']['add']('enabled')) : (_0x3ac4d5['innerHTML'] = _0x3ac4d5['getAttribute']('ev-disabled-val'), _0x3ac4d5['classList']['contains']('enabled') && _0x3ac4d5['classList']['remove']('enabled'));
        } catch (_0x3372e1) {
            console['warn']('failed\x20settings\x20element\x20load!', _0x3372e1);
        }
        return;
    }
    const _0x4be805 = _0x3ac4d5['getAttribute']('ev-enabled-option');
    if (_0x4be805 != null) {
        let _0x2bd008 = parseInt(eval(_0x4be805)), _0x2ba3e3 = _0x3f4e1c ? _0x2bd008 : _0x2bd008 + 0x1, _0x5412d7 = _0x3ac4d5['getAttribute']('ev-option-' + _0x2bd008 + '-class'), _0x1fcb4e = _0x3ac4d5['getAttribute']('ev-option-' + _0x2ba3e3 + '-val');
        !_0x1fcb4e && (_0x2ba3e3 = 0x0, _0x1fcb4e = _0x3ac4d5['getAttribute']('ev-option-' + _0x2ba3e3 + '-val'));
        let _0xb92f36 = _0x3ac4d5['getAttribute']('ev-option-' + _0x2ba3e3 + '-class');
        return _0x3ac4d5['innerHTML'] = _0x1fcb4e, _0x3ac4d5['classList']['contains'](_0x5412d7) && _0x3ac4d5['classList']['remove'](_0x5412d7), _0x3ac4d5['classList']['contains'](_0xb92f36) || _0x3ac4d5['classList']['add'](_0xb92f36), _0x2ba3e3;
    }
}
document['querySelectorAll']('.toggleEl')['forEach'](_0x3873d7 => {
    changeToggleElVal(_0x3873d7, !![]);
});
function closeSquadUI() {
    window['squadUICloseTime'] = performance['now'](), window['squadUIEnabled'] = ![], changeReady(![]), squadUI['clients'] = [], document['querySelector']('.play-text')['setAttribute']('stroke', 'Play'), document['querySelector']('.play-btn')['style']['backgroundColor'] = '#1dd129', document['querySelector']('.play-btn')['classList']['remove']('exit'), delete window['squadTimer'], send({ 'leaveRoom': !![] });
}
function sendRoomRequest(_0x20b54d) {
    if (_0x20b54d !== undefined)
        send(_0x20b54d);
    send({ 'name': document['querySelector']('.nickname')['value'] }), send({ 'updatePetals': menuInventory['pack']() });
    if (window['characterSelector'] !== undefined && window['characterSelector']['selectedIndex'] !== 0x0)
        window['characterSelector']['send']();
    window['lastRoomSentTime'] = performance['now'](), changeReady(![]), squadUI['removeAllClients'](), menuInventory['sendQueuedChangedPetalsImmediately'](), squadUI['sendSavedStartingWave']();
}
window['lastRoomSentTime'] = 0x0, window['onmousedown'] = _0x27a690 => {
    if (window['mobile'] && !_0x27a690['mobile'])
        return;
    mouse['clickPosition'] = 'down', mouse['lastDownData'] = {
        'time': performance['now'](),
        'x': _0x27a690['pageX'],
        'y': _0x27a690['pageY']
    };
    if (_0x27a690['button'] === 0x0) {
        const _0x5e5112 = window['inventory'];
        if (_0x5e5112 && _0x5e5112['artifactContainer']) {
            const _0x3bebb3 = mouse['x'] * canvas['w'] / window['innerWidth'], _0x35363d = mouse['y'] * canvas['h'] / window['innerHeight'], _0x331ab3 = _0x5e5112['artifactSlot'], _0x3c8378 = _0x331ab3['x'], _0x4d1310 = _0x331ab3['y'] + _0x5e5112['translateY'], _0x2b700b = _0x331ab3['size'] / 0x2;
            if (_0x3bebb3 > _0x3c8378 - _0x2b700b - 0x14 && _0x3bebb3 < _0x3c8378 + _0x2b700b + 0x14 && _0x35363d > _0x4d1310 - _0x2b700b - 0x14 && _0x35363d < _0x4d1310 + _0x2b700b + 0x14) {
                const _0x55b65c = _0x5e5112['artifactContainer']['type'];
                send({ 'activateArtifactUltimate': { 'artifactType': _0x55b65c } });
            }
        }
    }
    if (typeof squadUI === 'undefined')
        return;
    const _0x16d6be = mouse['x'] * canvas['w'] / window['innerWidth'], _0x5c7009 = mouse['y'] * canvas['h'] / window['innerHeight'], _0x16163f = _0x5c7009;
    window['squadUIEnabled'] === !![] && window['state'] === 'menu' && _0x27a690['button'] === 0x0 && squadUI['intersectingSliderBound']({
        'x': _0x16d6be,
        'y': _0x5c7009
    }) && squadUI['startSliderDrag'](_0x16d6be);
    if (window['squadUIEnabled'] === !![] && window['state'] === 'menu' && _0x27a690['button'] === 0x0 && squadUI['hoveringOverSW'] === !![]) {
        const _0x646f95 = prompt('输入起始波数\x20(1-' + squadUI['maxStartingWave'] + '):', squadUI['startingWave']);
        if (_0x646f95 !== null) {
            const _0x270542 = parseInt(_0x646f95);
            !isNaN(_0x270542) && _0x270542 >= 0x1 && _0x270542 <= squadUI['maxStartingWave'] && (send({ 'sw': _0x270542 }), squadUI['startingWave'] = _0x270542, squadUI['desiredSWS'] = _0x270542 / squadUI['maxStartingWave'], localStorage['setItem']('startingWave', _0x270542), savedStartingWave = _0x270542);
        }
    }
    if (window['connected'] === !![]) {
        if (window['squadUIEnabled'] === !![] && performance['now']() - window['lastRoomSentTime'] > 0x12c) {
            const _0x127424 = squadUI['getButtonAtPosition'](_0x16d6be, _0x16163f);
            if (_0x27a690['button'] === 0x0 && _0x127424) {
                if (_0x127424 === 'public')
                    sendRoomRequest({
                        'findPublic': !![],
                        'biome': biomeManager['getCurrentBiomeData']()['current']
                    });
                else {
                    if (_0x127424 === 'new')
                        sendRoomRequest({
                            'newSquad': !![],
                            'biome': biomeManager['getCurrentBiomeData']()['current']
                        });
                    else {
                        if (_0x127424 === 'private')
                            showSquadCodeModal();
                        else
                            _0x127424 === 'ready' && changeReady(!window['ready']);
                    }
                }
            } else
                squadUI['hoveringOverJoinMainPvp'] === !![] && _0x27a690['button'] === 0x0 && (sendRoomRequest({
                    'newSquad': !![],
                    'biome': biomeManager['getCurrentBiomeData']()['current']
                }), send({ 'joinMainPvp': !![] }), window['inMainPvpRoom'] = !![]);
        }
        let _0x331422 = ![], _0x29ea7d = ![], _0x4af88e = ![], _0x490fc4 = ![], _0xbc4c94 = ![];
        if (globalInventory['menuActive'] === !![]) {
            const _0x19653d = 0x82 + globalInventory['w'] - 7.5 - 0x1e, _0x48121c = canvas['h'] - globalInventory['h'] - 0x14 + 7.5, _0xc46486 = 0x1e, _0x3320bb = 0x1e;
            _0x16d6be > _0x19653d - 0x3 && _0x16d6be < _0x19653d + _0xc46486 + 0x3 && _0x16163f > _0x48121c - 0x3 && _0x16163f < _0x48121c + _0x3320bb + 0x3 && (_0x331422 = !![]);
        }
        if (specialGlobalInventory['menuActive'] === !![]) {
            const _0x5758b5 = 0x82 + specialGlobalInventory['w'] - 7.5 - 0x1e, _0x1d3707 = canvas['h'] - specialGlobalInventory['h'] - 0x14 + 7.5, _0x1d6387 = 0x1e, _0xa878b7 = 0x1e;
            _0x16d6be > _0x5758b5 - 0x3 && _0x16d6be < _0x5758b5 + _0x1d6387 + 0x3 && _0x16163f > _0x1d3707 - 0x3 && _0x16163f < _0x1d3707 + _0xa878b7 + 0x3 && (_0x29ea7d = !![]);
        }
        if (craftingMenu['menuActive'] === !![]) {
            const _0xd49485 = 0x82 + craftingMenu['w'] - 7.5 - 0x1e, _0x1c7ec1 = canvas['h'] - craftingMenu['h'] - 0x14 + 7.5, _0x327f56 = 0x1e, _0x213ade = 0x1e;
            _0x16d6be > _0xd49485 - 0x3 && _0x16d6be < _0xd49485 + _0x327f56 + 0x3 && _0x16163f > _0x1c7ec1 - 0x3 && _0x16163f < _0x1c7ec1 + _0x213ade + 0x3 && (_0x4af88e = !![]);
        }
        if (mobGallery['menuActive'] === !![]) {
            const _0x5f1186 = 0x82 + mobGallery['w'] - 7.5 - 0x1e, _0xe4b662 = canvas['h'] - mobGallery['h'] - 0x14 + 7.5, _0x41f020 = 0x1e, _0x552737 = 0x1e;
            _0x16d6be > _0x5f1186 - 0x3 && _0x16d6be < _0x5f1186 + _0x41f020 + 0x3 && _0x16163f > _0xe4b662 - 0x3 && _0x16163f < _0xe4b662 + _0x552737 + 0x3 && (_0x490fc4 = !![]);
        }
        if (shop['menu']['active'] === !![]) {
            const _0x3e5035 = 0x82 + 0x258 - 0x32, _0x413396 = shop['menu']['y']['val'] + 17.5, _0x36e60b = 0x1e, _0x3a43ff = 0x1e;
            _0x16d6be > _0x3e5035 - 0x3 && _0x16d6be < _0x3e5035 + _0x36e60b + 0x3 && _0x16163f > _0x413396 - 0x3 && _0x16163f < _0x413396 + _0x3a43ff + 0x3 && (_0xbc4c94 = !![]);
        }
        _0x331422 && globalInventory['toggleMenu']();
        _0x29ea7d && specialGlobalInventory['toggleMenu']();
        _0x4af88e && craftingMenu['toggleMenu']();
        _0x490fc4 && mobGallery['toggleMenu']();
        _0xbc4c94 && shop['toggle']();
        const _0x17a901 = 0x14, _0x38c2f5 = 0x50, _0x5375f5 = _0x1cadec => _0x16163f >= _0x1cadec && _0x16163f <= _0x1cadec + _0x38c2f5;
        if (_0x27a690['button'] === 0x0 && _0x16d6be >= _0x17a901 && _0x16d6be <= _0x17a901 + _0x38c2f5) {
            if (_0x5375f5(canvas['h'] - 0x64))
                mobGallery['toggleMenu']();
            else {
                if (_0x5375f5(canvas['h'] - 0xc8))
                    craftingMenu['toggleMenu']();
                else {
                    if (_0x5375f5(canvas['h'] - 0x12c))
                        globalInventory['toggleMenu']();
                    else
                        _0x5375f5(canvas['h'] - 0x190) && specialGlobalInventory['toggleMenu']();
                }
            }
        }
        const _0x17352d = (_0x2c3281, _0x2d3780 = ![]) => {
                if (!_0x2c3281 || !_0x2c3281['menuActive'])
                    return ![];
                let _0xc6ad2e, _0xdd3bd3, _0x6aa621, _0x555a84;
                if (_0x2d3780 && _0x2c3281['dimensions'])
                    _0xc6ad2e = _0x2c3281['dimensions']['x'], _0xdd3bd3 = _0x2c3281['dimensions']['y'], _0x6aa621 = _0x2c3281['dimensions']['w'], _0x555a84 = _0x2c3281['dimensions']['h'];
                else
                    _0x2c3281['x'] !== undefined && _0x2c3281['y'] !== undefined ? (_0xc6ad2e = _0x2c3281['x'], _0xdd3bd3 = _0x2c3281['y'], _0x6aa621 = _0x2c3281['w'], _0x555a84 = _0x2c3281['h']) : (_0xc6ad2e = 0x82, _0xdd3bd3 = canvas['h'] - _0x2c3281['h'] - 0x14, _0x6aa621 = _0x2c3281['w'], _0x555a84 = _0x2c3281['h']);
                return _0x16d6be > _0xc6ad2e && _0x16d6be < _0xc6ad2e + _0x6aa621 && _0x5c7009 > _0xdd3bd3 && _0x5c7009 < _0xdd3bd3 + _0x555a84;
            }, _0x474eea = _0x17352d(globalInventory) || _0x17352d(specialGlobalInventory) || _0x17352d(craftingMenu) || _0x17352d(mobGallery, !![]);
        !_0x474eea && settingsMenu['mouseDown']({
            'mouseX': _0x16d6be,
            'mouseY': _0x5c7009,
            'x': _0x16d6be,
            'y': _0x5c7009
        });
        let _0xc76415 = _0x474eea;
        !_0xc76415 && menuInventory['mouseDown']({
            'mouseX': _0x16d6be,
            'mouseY': _0x5c7009,
            'menuInventory': menuInventory
        }, menuInventory);
        mobGallery['mouseDown']({
            'x': mouse['canvasX'],
            'y': mouse['canvasY']
        });
        if (specialGlobalInventory['menuActive'] === !![])
            specialGlobalInventory['mouseDown']();
        else {
            if (globalInventory['menuActive'] === !![] && draggingPetalContainer === null)
                globalInventory['mouseDown']({
                    'mouseX': _0x16d6be,
                    'mouseY': _0x5c7009
                }, menuInventory);
            else
                craftingMenu['menuActive'] === !![] && craftingMenu['mouseDown']({
                    'mouseX': _0x16d6be,
                    'mouseY': _0x5c7009
                }, _0x27a690);
        }
    }
    if (window['state'] === 'menu') {
        biomeManager['mouseDown']({
            'mouseX': _0x16d6be,
            'mouseY': _0x5c7009
        }, _0x27a690);
        for (let _0xd967b4 = 0x0; _0xd967b4 < menuEnemies['length']; _0xd967b4++) {
            const _0x437865 = menuEnemies[_0xd967b4];
            Math['sqrt']((_0x16d6be - _0x437865['render']['x']) ** 0x2 + (_0x5c7009 - _0x437865['render']['y']) ** 0x2) < _0x437865['radius'] && _0x437865['dead'] !== !![] && (_0x437865['hp'] <= 0x0 ? _0x437865['dead'] = !![] : (_0x437865['hp'] -= 0x1 + Math['min'](0xa, maxRarityObtained), _0x437865['updateRenderDamage']()));
        }
        streakMenu['mouseDown']({
            'mouseX': _0x16d6be,
            'mouseY': _0x5c7009
        });
        window['characterSelector'] !== undefined && window['characterSelector']['onmousedown'](_0x16d6be, _0x5c7009);
        if ((_0x16d6be - window['clickLoc']['x']) ** 0x2 + (_0x5c7009 - window['clickLoc']['y']) ** 0x2 < 0xf ** 0x2) {
            window['clicks']++;
            let _0x1a574e = window['clicks'];
            if (window['clicks'] > 0x3e8)
                _0x1a574e = 'But\x20Rita\x20left\x20Theta...';
            else {
                if (window['clicks'] > 0x190 && Math['random']() < 0.1)
                    _0x1a574e = 'Thoita!';
                else {
                    if (window['clicks'] > 0x12c && Math['random']() < 0.1)
                        _0x1a574e = 'So\x20dev\x20name\x20is\x20Thita!';
                    else {
                        if (window['clicks'] > 0xc8 && Math['random']() < 0.1)
                            _0x1a574e = 'Theta!';
                        else {
                            if (window['clicks'] > 0x64 && Math['random']() < 0.1)
                                _0x1a574e = 'Rita!';
                            else {
                                if (window['clicks'] > 0x32 && Math['random']() < 0.1)
                                    _0x1a574e = 'Lemme\x20tell\x20you\x20why\x20this\x20game\x20called\x20Thoita?';
                            }
                        }
                    }
                }
            }
            window['activeClicks']['push']({
                't': 0x0,
                'n': _0x1a574e,
                'x': 0x0,
                'xv': 0.2 * (Math['random']() - 0.5),
                'y': 0x0,
                'yv': -0.1 - 0.2 * Math['random']()
            });
        }
    }
    if (room !== undefined && selfId !== null && window['isDead'] === !![]) {
        if (deadMenu['hoveringOverButton'] === !![])
            deadMenu['rematchRequested'] = ![], deadMenu['acceptedDeath'] === !![] || window['is3D'] === !![] ? (console['log']('[leaveGame]\x20发送\x20leaveGame\x20消息,\x20window.state=', window['state'], ',\x20window.reconnecting=', window['reconnecting']), send({
                'leaveGame': !![],
                'real': !![]
            })) : deadMenu['acceptedDeath'] = !![];
        else
            deadMenu['hoveringOverRematchButton'] === !![] && (deadMenu['rematchRequested'] = !![], send({ 'rematchRequested': !![] }));
    } else {
        if (room !== undefined && selfId !== null && window['isDead'] !== !![]) {
            if (window['mobile'])
                mobileControls['handleMousePress'](_0x27a690);
            else {
                if (_0x27a690['button'] == 0x0)
                    send([
                        'a',
                        !![]
                    ]);
                else {
                    if (_0x27a690['button'] == 0x2)
                        send([
                            'd',
                            !![]
                        ]);
                    else
                        _0x27a690['button'] == 0x1 && send([
                            'middle',
                            !![]
                        ]);
                }
                if (window['state'] === 'game')
                    inputHandler['updateChat']();
            }
            if (window['state'] === 'game' && _0x27a690['button'] === 0x0) {
                const _0x35c01e = mouse['x'] * canvas['w'] / window['innerWidth'], _0x24fcee = mouse['y'] * canvas['h'] / window['innerHeight'], _0x4f0bf4 = window['inventory'] || (typeof inventory !== 'undefined' ? inventory : null);
                if (_0x4f0bf4 && _0x4f0bf4['artifactContainer'] && _0x4f0bf4['artifactContainer']['amount'] > 0x0) {
                    const _0x1b9850 = _0x4f0bf4['artifactSlot'], _0x41e64b = _0x1b9850['x'], _0x577758 = _0x1b9850['y'] + _0x4f0bf4['translateY'], _0x4ac765 = _0x1b9850['size'] / 0x2;
                    if (_0x35c01e > _0x41e64b - _0x4ac765 - 0x14 && _0x35c01e < _0x41e64b + _0x4ac765 + 0x14 && _0x24fcee > _0x577758 - _0x4ac765 - 0x14 && _0x24fcee < _0x577758 + _0x4ac765 + 0x14) {
                        const _0x3f9abb = _0x4f0bf4['artifactContainer']['type'];
                        _0x3f9abb && window['connected'] && (console['log']('神器大招触发:', _0x3f9abb), send({ 'activateArtifactUltimate': { 'artifactType': _0x3f9abb } }));
                        return;
                    }
                }
                _0x4f0bf4 && _0x4f0bf4['mouseDown'](_0x35c01e, _0x24fcee, _0x27a690);
            }
        }
    }
}, window['onmouseout'] = _0x288d6a => {
    window['state'] === 'menu' && inputHandler['handleMouse']({
        ..._0x288d6a,
        'button': 0x0,
        'x': -0x1d42aea2879f2e000000000000000000000000000000000000000000000000000000000000000000000,
        'y': -0x1d42aea2879f2e000000000000000000000000000000000000000000000000000000000000000000000,
        'pageX': -0x1d42aea2879f2e000000000000000000000000000000000000000000000000000000000000000000000,
        'pageY': -0x1d42aea2879f2e000000000000000000000000000000000000000000000000000000000000000000000
    });
};
let fov = 0x1, renderFov = fov;
document['addEventListener']('wheel', _0x592512 => {
    if (window['state'] === 'game') {
        fov /= 0x1 / (0x1 - _0x592512['deltaY'] / 0x2bc);
        const _0x4d5041 = window['currentWeather']?.['visionRange'] && window['currentWeather']['visionRange'] < 0x1 ? 0.2 / window['currentWeather']['visionRange'] : 0.2;
        fov < _0x4d5041 && (fov = _0x4d5041), fov > 0x3 && (fov = 0x3);
    }
    const _0x1902f0 = mouse['x'] * canvas['w'] / window['innerWidth'], _0x77fdd9 = mouse['y'] * canvas['h'] / window['innerHeight'];
    globalInventory['updateScroll']({
        'x': _0x592512['deltaX'],
        'y': _0x592512['deltaY']
    }, {
        'mouseX': _0x1902f0,
        'mouseY': _0x77fdd9
    });
    if (typeof craftingMenu !== 'undefined')
        craftingMenu['updateScroll']({
            'x': _0x592512['deltaX'],
            'y': _0x592512['deltaY']
        }, {
            'mouseX': _0x1902f0,
            'mouseY': _0x77fdd9
        });
    mobGallery['updateScroll']({
        'x': _0x592512['deltaX'],
        'y': _0x592512['deltaY']
    }, {
        'mouseX': _0x1902f0,
        'mouseY': _0x77fdd9
    });
}), window['onmouseup'] = _0x4b3dcb => {
    if (window['mobile'] && !_0x4b3dcb['mobile'])
        return;
    mouse['clickPosition'] = 'up';
    if (typeof room !== 'undefined' && selfId !== null && window['isDead'] !== !![]) {
        if (window['mobile'])
            mobileControls['releaseControls'](_0x4b3dcb);
        else {
            if (_0x4b3dcb['button'] == 0x0)
                send([
                    'a',
                    ![]
                ]);
            else {
                if (_0x4b3dcb['button'] == 0x2)
                    send([
                        'd',
                        ![]
                    ]);
                else
                    _0x4b3dcb['button'] == 0x1 && send([
                        'middle',
                        ![]
                    ]);
            }
        }
    }
    const _0x28fd79 = mouse['x'] * canvas['w'] / window['innerWidth'], _0x63e58e = mouse['y'] * canvas['h'] / window['innerHeight'];
    window['state'] === 'menu' && squadUI['hoveringOverSlider'] === !![] && _0x4b3dcb['button'] === 0x0 && squadUI['endSliderDrag'](_0x28fd79);
    typeof shop !== 'undefined' && shop['menu']['active'] === !![] && _0x4b3dcb['button'] === 0x0 && shop['handleClick']();
    window['connected'] === !![] && (globalInventory['mouseUp']({
        'mouseX': _0x28fd79,
        'mouseY': _0x63e58e
    }, menuInventory), mobGallery['mouseUp']({
        'mouseX': _0x28fd79,
        'mouseY': _0x63e58e
    }), craftingMenu['menuActive'] === !![] && craftingMenu['mouseUp']({
        'mouseX': _0x28fd79,
        'mouseY': _0x63e58e
    }), specialGlobalInventory['mouseUp']());
    if (window['state'] === 'game')
        inputHandler['updateChat']();
}, document['onvisibilitychange'] = _0x48c0e6 => {
    if (typeof room !== 'undefined' && selfId !== null) {
        if (window['isDead'] !== !![]) {
            if (room['flowers'][selfId]['attacking'] === !![])
                send([
                    'a',
                    ![]
                ]);
            if (room['flowers'][selfId]['defending'] === !![])
                send([
                    'd',
                    ![]
                ]);
        }
    }
};
const nickname = localStorage['getItem']('nickname');
typeof nickname === 'string' && (document['querySelector']('.nickname')['value'] = nickname);
document['querySelector']('.nickname')['oninput'] = _0x2c0cfa => {
    send({ 'name': document['querySelector']('.nickname')['value'] }), localStorage['setItem']('nickname', document['querySelector']('.nickname')['value']);
};
let petalSearch = document['getElementById']('petalsearch');
petalSearch['addEventListener']('input', () => {
    globalInventory['currentSearchTerm'] = petalSearch['value'];
}), petalSearch['addEventListener']('blur', () => {
    globalInventory['textBoxActive'] = ![];
}), window['ready'] = ![];
function changeReady(_0x338e7f, _0x154f90 = !![]) {
    _0x154f90 && (_0x338e7f === !![] && squadUI['clients']['filter'](_0x10439b => _0x10439b['ready'] === ![])['length'] === 0x1 && send({
        'changePetals': !![],
        ...menuInventory['pack']()
    }), send({
        'ready': _0x338e7f,
        'updateSpeedCircle': menuInventory['speedCircle']['reload']
    }));
    window['ready'] = _0x338e7f;
    const _0x5dbd75 = document['querySelector']('.play-btn');
    window['squadUIEnabled'] === !![] ? _0x5dbd75['style']['backgroundColor'] = '#1dd129' : _0x5dbd75['style']['backgroundColor'] = window['ready'] ? '#1dd129' : '#d11d1d';
}
document['getElementById']('settingsButton')['onclick'] = () => {
    settingsMenu['toggle']();
}, document['getElementById']('shopButton')['onclick'] = () => {
    shop['toggle']();
};
const fullscreenButton = document['getElementById']('fullscreenButton');
fullscreenButton && (fullscreenButton['onclick'] = () => {
    !document['fullscreenElement'] ? document['documentElement']['requestFullscreen']()['catch'](_0x5d5d24 => {
        console['log']('全屏错误:\x20' + _0x5d5d24['message']);
    }) : document['exitFullscreen']();
}, document['addEventListener']('fullscreenchange', () => {
    document['fullscreenElement'] ? fullscreenButton['querySelector']('span')['textContent'] = '⛶' : fullscreenButton['querySelector']('span')['textContent'] = '⛶';
}));
window['multiPetals'] = {
    'Light': !![],
    'Pollen': !![],
    'Dandelion': !![]
};
const multiPetals = window['multiPetals'];
function levelPerXp(_0x4681b2) {
    return 11.18213 * Math['log'](0.000480827337943866 * (0x820 + _0x4681b2));
}
function xpPerLevel(_0xef2a99) {
    return Math['exp'](_0xef2a99 / 11.18213) / 0.000480827337943866 - 0x820;
}
window['basePetalSlots'] = 0x5, window['petalSlotThresholds'] = [
    0xf,
    0x1e,
    0x2d,
    0x3c,
    0x4b,
    0x3e8
];
const basePetalSlots = window['basePetalSlots'], petalSlotThresholds = window['petalSlotThresholds'];
window['cursorResetTimeout'] = null;
function setCursor(_0x24650b) {
    window['cursorResetTimeout'] !== null && clearTimeout(window['cursorResetTimeout']), _0x24650b !== 'auto' && (window['cursorResetTimeout'] = setTimeout(() => {
        document['body']['style']['cursor'] = 'auto';
    }, 0x32)), document['body']['style']['cursor'] = _0x24650b;
}
var mobileDiv = document['querySelector']('.mobile'), chatDiv = document['querySelector']('.chatContainer'), chatMsgContainer = document['querySelector']('.chat-div'), chatInput = document['querySelector']('.chat');
let mobileAttackingState = ![], mobileDefendingState = ![];
window['mobile'] = ![];
(navigator['userAgent']['match'](/Android/i) || navigator['userAgent']['match'](/webOS/i) || navigator['userAgent']['match'](/iPhone/i) || navigator['userAgent']['match'](/iPad/i) || navigator['userAgent']['match'](/iPod/i) || navigator['userAgent']['match'](/BlackBerry/i) || navigator['userAgent']['match'](/Windows Phone/i)) && (window['mobile'] = !![]);
document['addEventListener']('touchmove', _0x1cbd97 => {
    const _0x25312b = _0x1cbd97['changedTouches'][0x0], _0x49779e = _0x1cbd97['target'];
    if (_0x49779e['tagName'] === 'BUTTON' || _0x49779e['tagName'] === 'INPUT' || _0x49779e['tagName'] === 'TEXTAREA' || _0x49779e['classList']['contains']('play-btn') || _0x49779e['classList']['contains']('play-text') || _0x49779e['classList']['contains']('btn') || _0x49779e['closest']('.play-btn') || _0x49779e['closest']('button') || _0x49779e['closest']('.btn') || _0x49779e['closest']('#settingsButton') || _0x49779e['closest']('#fullscreenButton'))
        return;
    const _0x317916 = _0x25312b['pageX'] * canvas['w'] / window['innerWidth'], _0x2d3d75 = _0x25312b['pageY'] * canvas['h'] / window['innerHeight'];
    mouse['x'] = _0x25312b['pageX'], mouse['y'] = _0x25312b['pageY'], mouse['canvasX'] = _0x317916, mouse['canvasY'] = _0x2d3d75;
    const _0x176058 = globalInventory['menuActive'] && _0x317916 > 0x82 + 0x23 && _0x317916 < 0x82 + globalInventory['w'] - 0x32 && _0x2d3d75 > canvas['h'] - globalInventory['h'] - 0x14 + 0x2d && _0x2d3d75 < canvas['h'] - globalInventory['h'] - 0x14 + 0x50;
    !_0x176058 && _0x1cbd97['preventDefault'](), inputHandler['handleMouse']({
        'x': _0x25312b['pageX'],
        'y': _0x25312b['pageY'],
        'pageX': _0x25312b['pageX'],
        'pageY': _0x25312b['pageY'],
        'button': 0x0
    }), window['state'] === 'menu' && typeof squadUI !== 'undefined' && squadUI['draggingSlider'] === !![] && squadUI['updateSliderDrag'](mouse['canvasX']);
}, { 'passive': ![] }), document['addEventListener']('touchstart', _0x23ec03 => {
    const _0x1e5c22 = _0x23ec03['changedTouches'][0x0], _0x107cf4 = _0x23ec03['target'];
    if (_0x107cf4['tagName'] === 'BUTTON' || _0x107cf4['tagName'] === 'INPUT' || _0x107cf4['tagName'] === 'TEXTAREA' || _0x107cf4['classList']['contains']('play-btn') || _0x107cf4['classList']['contains']('play-text') || _0x107cf4['classList']['contains']('btn') || _0x107cf4['closest']('.play-btn') || _0x107cf4['closest']('button') || _0x107cf4['closest']('.btn') || _0x107cf4['closest']('#settingsButton') || _0x107cf4['closest']('#shopButton') || _0x107cf4['closest']('#fullscreenButton'))
        return;
    const _0x10fdd5 = document['activeElement'];
    if (_0x10fdd5 && (_0x10fdd5['tagName'] === 'INPUT' || _0x10fdd5['tagName'] === 'TEXTAREA')) {
        _0x10fdd5['blur']();
        inputHandler && inputHandler['chatOpen'] && (inputHandler['chatOpen'] = ![], chatInput && (chatInput['value'] = '', chatInput['style']['opacity'] = '0'));
        return;
    }
    const _0xb5b71a = _0x1e5c22['pageX'] * canvas['w'] / window['innerWidth'], _0x32795b = _0x1e5c22['pageY'] * canvas['h'] / window['innerHeight'];
    mouse['x'] = _0x1e5c22['pageX'], mouse['y'] = _0x1e5c22['pageY'], mouse['canvasX'] = _0xb5b71a, mouse['canvasY'] = _0x32795b, inputHandler['handleMouse']({
        'x': _0x1e5c22['pageX'],
        'y': _0x1e5c22['pageY'],
        'pageX': _0x1e5c22['pageX'],
        'pageY': _0x1e5c22['pageY'],
        'button': 0x0
    }), window['onmousedown']({
        ..._0x23ec03,
        'x': _0x1e5c22['pageX'],
        'y': _0x1e5c22['pageY'],
        'pageX': _0x1e5c22['pageX'],
        'pageY': _0x1e5c22['pageY'],
        'button': 0x0,
        'mobile': !![]
    }), globalInventory['menuActive'] === !![] && draggingPetalContainer === null && globalInventory['handleIOSMouseDown'](_0xb5b71a, _0x32795b);
}, { 'passive': ![] }), document['addEventListener']('touchend', _0x1fae81 => {
    const _0xa2ed31 = _0x1fae81['changedTouches'][0x0], _0x327178 = _0x1fae81['target'];
    if (_0x327178['tagName'] === 'BUTTON' || _0x327178['tagName'] === 'INPUT' || _0x327178['tagName'] === 'TEXTAREA' || _0x327178['classList']['contains']('play-btn') || _0x327178['classList']['contains']('play-text') || _0x327178['classList']['contains']('btn') || _0x327178['closest']('.play-btn') || _0x327178['closest']('button') || _0x327178['closest']('.btn') || _0x327178['closest']('#settingsButton') || _0x327178['closest']('#shopButton') || _0x327178['closest']('#fullscreenButton'))
        return;
    const _0xf44ee4 = _0xa2ed31['pageX'] * canvas['w'] / window['innerWidth'], _0x336db8 = _0xa2ed31['pageY'] * canvas['h'] / window['innerHeight'];
    mouse['x'] = _0xa2ed31['pageX'], mouse['y'] = _0xa2ed31['pageY'], mouse['canvasX'] = _0xf44ee4, mouse['canvasY'] = _0x336db8, _0x1fae81['preventDefault'](), inputHandler['handleMouse']({
        'x': _0xa2ed31['pageX'],
        'y': _0xa2ed31['pageY'],
        'pageX': _0xa2ed31['pageX'],
        'pageY': _0xa2ed31['pageY'],
        'button': 0x0
    }), window['state'] === 'menu' && typeof squadUI !== 'undefined' && squadUI['draggingSlider'] === !![] && squadUI['endSliderDrag'](_0xf44ee4), window['onmouseup']({
        ..._0x1fae81,
        'x': _0xa2ed31['pageX'],
        'y': _0xa2ed31['pageY'],
        'pageX': _0xa2ed31['pageX'],
        'pageY': _0xa2ed31['pageY'],
        'button': 0x0,
        'mobile': !![]
    });
}), document['addEventListener']('touchcancel', _0x2cc9a7 => {
    const _0xc012ca = _0x2cc9a7['changedTouches'][0x0], _0x562cfc = _0xc012ca['pageX'] * canvas['w'] / window['innerWidth'], _0x4d44df = _0xc012ca['pageY'] * canvas['h'] / window['innerHeight'];
    mouse['x'] = _0xc012ca['pageX'], mouse['y'] = _0xc012ca['pageY'], mouse['canvasX'] = _0x562cfc, mouse['canvasY'] = _0x4d44df, window['state'] === 'menu' && typeof squadUI !== 'undefined' && squadUI['draggingSlider'] === !![] && squadUI['endSliderDrag'](_0x562cfc), inputHandler['handleMouse']({
        'x': _0xc012ca['pageX'],
        'y': _0xc012ca['pageY'],
        'pageX': _0xc012ca['pageX'],
        'pageY': _0xc012ca['pageY'],
        'button': 0x0
    }), window['onmouseup']({
        ..._0x2cc9a7,
        'x': _0xc012ca['pageX'],
        'y': _0xc012ca['pageY'],
        'pageX': _0xc012ca['pageX'],
        'pageY': _0xc012ca['pageY'],
        'button': 0x0,
        'mobile': !![]
    });
}), window['chatMessages'] = [], window['chatMsgFadeTimes'] = [];
function appendChatMessage(_0x28ff6a, _0x1c531c = '#ffffff', _0x41a2a6) {
    const _0x51f50d = document['createElement']('div');
    _0x51f50d['innerText'] = _0x28ff6a, _0x51f50d['className'] = 'chat-message';
    if (_0x1c531c == 'admin') {
        if (_0x41a2a6 == 'ruby')
            _0x51f50d['classList']['add']('animated-text-ruby');
        else
            _0x41a2a6 == 'devdevd' ? _0x51f50d['classList']['add']('animated-text-peterpeterp') : _0x51f50d['classList']['add']('animated-text');
    } else
        _0x51f50d['style']['color'] = _0x1c531c;
    chatMsgContainer['prepend'](_0x51f50d), setTimeout(() => {
        _0x51f50d['animate']([
            { 'opacity': 0x1 },
            {
                'transform': 'rotateZ(2deg)',
                'font-size': '0rem',
                'opacity': 0x0
            }
        ], {
            'duration': 0x3e8,
            'iterations': 0x1
        }), setTimeout(() => {
            _0x51f50d['remove']();
        }, 0x3b6);
    }, 0x7530);
}
function appendChatAnnouncement(_0x23331c, _0x595902) {
    const _0x2b91ca = document['createElement']('div');
    _0x2b91ca['innerText'] = _0x23331c, _0x2b91ca['className'] = 'chat-announcement', _0x2b91ca['style']['color'] = _0x595902, chatMsgContainer['prepend'](_0x2b91ca), setTimeout(() => {
        _0x2b91ca['animate']([
            { 'opacity': 0x1 },
            {
                'transform': 'rotateZ(2deg)',
                'font-size': '0rem',
                'opacity': 0x0
            }
        ], {
            'duration': 0x3e8,
            'iterations': 0x1
        }), setTimeout(() => {
            _0x2b91ca['remove']();
        }, 0x3b6);
    }, 0x7530);
}
function appendSystemMessage(_0x2719f3, _0x12ac56 = '#ffff00') {
    const _0x1ab164 = document['createElement']('div'), _0x26b994 = typeof _0x2719f3 === 'object' ? JSON['stringify'](_0x2719f3) : String(_0x2719f3);
    _0x1ab164['innerText'] = '[System]\x20' + _0x26b994, _0x1ab164['className'] = 'chat-system', _0x1ab164['style']['color'] = _0x12ac56, _0x1ab164['style']['fontStyle'] = 'italic', chatMsgContainer['prepend'](_0x1ab164), console['log']('[appendSystemMessage]\x20msg:', _0x2719f3, 'typeof:', typeof _0x2719f3, 'displayMsg:', _0x26b994), setTimeout(() => {
        _0x1ab164['animate']([
            { 'opacity': 0x1 },
            {
                'transform': 'rotateZ(2deg)',
                'font-size': '0rem',
                'opacity': 0x0
            }
        ], {
            'duration': 0x3e8,
            'iterations': 0x1
        }), setTimeout(() => {
            _0x1ab164['remove']();
        }, 0x3b6);
    }, 0x7530);
}
window['mobile'] && chatInput['addEventListener']('click', () => {
    chatDiv['classList']['remove']('hidden'), chatInput['focus'](), inputHandler['chatOpen'] = !![], chatInput['style']['opacity'] = '1';
    let _0x4f722a = prompt('Send\x20a\x20chat\x20message');
    if (_0x4f722a['length'] !== 0x0) {
        if (_0x4f722a == '/clear') {
            for (let _0x3376ba = 0x0; _0x3376ba < chatDiv['children'][0x1]['children']['length']; _0x3376ba++) {
                chatDiv['children'][0x1]['children']['item'](0x0)['remove']();
            }
            chatDiv['children'][0x1]['children']['item'](0x0)['remove']();
        } else
            send([
                'c',
                _0x4f722a
            ]);
    }
    inputHandler['chatOpen'] = ![], chatInput['value'] = '', chatInput['blur'](), chatInput['style']['opacity'] = '0';
});
function parsePetalData(_0x2e2c70) {
    if (_0x2e2c70['petal'] !== undefined)
        return _0x2e2c70;
    const _0x50581d = _0x2e2c70['i']['split']('_'), _0xbd24e4 = parseInt(_0x50581d[_0x50581d['length'] - 0x2]), _0x3a1664 = _0x50581d['slice'](0x0, _0x50581d['length'] - 0x2)['join']('_'), _0xd1b143 = Stats['petals'][_0x3a1664]?.[_0xbd24e4] || {
            'damage': 0xa,
            'health': 0x64,
            'radius': 0xa,
            'speed': 0x1
        };
    return {
        'x': 0x0,
        'y': 0x0,
        'w': 0x41,
        'h': 0x41,
        'originalX': 0x0,
        'originalY': 0x0,
        'radius': _0xd1b143['radius'] || 0xa,
        'petal': {
            'type': _0x3a1664,
            'rarity': _0xbd24e4
        },
        'petalAmount': _0x2e2c70['a'],
        'id': _0x2e2c70['i'],
        'attempt': _0x2e2c70['p'],
        'petalStats': _0xd1b143,
        'customBiome': _0x3a1664 === 'Basic' ? undefined : getPetalCustomBiome(_0x3a1664)
    };
}
function showToast(_0x43a6ee, _0x54875c = 0xbb8) {
    const _0x24dfea = document['createElement']('div');
    _0x24dfea['textContent'] = _0x43a6ee, _0x24dfea['style']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeIn\x200.3s\x20ease;\x0a\x20\x20\x20\x20', document['body']['appendChild'](_0x24dfea), setTimeout(() => {
        _0x24dfea['style']['animation'] = 'fadeOut\x200.3s\x20ease', setTimeout(() => _0x24dfea['remove'](), 0x12c);
    }, _0x54875c);
}
function showSquadCodeModal() {
    const _0x4d4baa = document['getElementById']('squadCodeModal'), _0x5d1cae = document['getElementById']('squadCodeInput');
    _0x4d4baa && _0x5d1cae && (_0x4d4baa['classList']['remove']('hidden'), _0x5d1cae['value'] = '', _0x5d1cae['focus']());
}
function hideSquadCodeModal() {
    const _0x2b362a = document['getElementById']('squadCodeModal');
    _0x2b362a && _0x2b362a['classList']['add']('hidden');
}
function submitSquadCode() {
    const _0x41aba9 = document['getElementById']('squadCodeInput');
    if (_0x41aba9) {
        const _0x5ef57a = _0x41aba9['value']['trim']();
        _0x5ef57a && (sendRoomRequest({
            'private': _0x5ef57a,
            'biome': biomeManager['getCurrentBiomeData']()['current']
        }), hideSquadCodeModal());
    }
}
function showAccountInfoModal() {
    const _0x356ff0 = document['getElementById']('accountInfoModal');
    if (_0x356ff0) {
        const _0x294275 = window['username'] || 'Unknown', _0x4d4c9f = window['uniqueCode'] || 'Not\x20generated', _0x61cde3 = window['qq'] || 'Not\x20bound';
        document['getElementById']('accountInfoUsername')['textContent'] = _0x294275, document['getElementById']('accountInfoUniqueCode')['textContent'] = _0x4d4c9f, document['getElementById']('accountInfoQQ')['textContent'] = _0x61cde3, _0x356ff0['classList']['remove']('hidden');
    }
}
function hideAccountInfoModal() {
    const _0x11f378 = document['getElementById']('accountInfoModal');
    _0x11f378 && _0x11f378['classList']['add']('hidden');
}
document['addEventListener']('DOMContentLoaded', () => {
    const _0x54c630 = document['getElementById']('squadCodeClose'), _0x3af4a5 = document['getElementById']('squadCodeJoin'), _0x2c0659 = document['getElementById']('squadCodeInput');
    _0x54c630 && _0x54c630['addEventListener']('click', hideSquadCodeModal);
    _0x3af4a5 && _0x3af4a5['addEventListener']('click', submitSquadCode);
    _0x2c0659 && _0x2c0659['addEventListener']('keydown', _0x55f754 => {
        if (_0x55f754['key'] === 'Enter')
            submitSquadCode();
        else
            _0x55f754['key'] === 'Escape' && hideSquadCodeModal();
    });
    const _0x1d41e4 = document['getElementById']('accountInfoClose'), _0xd6a2c2 = document['getElementById']('accountInfoOK');
    _0x1d41e4 && _0x1d41e4['addEventListener']('click', hideAccountInfoModal);
    _0xd6a2c2 && _0xd6a2c2['addEventListener']('click', hideAccountInfoModal);
    document['addEventListener']('keydown', _0xfb96fd => {
        _0xfb96fd['key'] === 'Escape' && (!document['getElementById']('squadCodeModal')['classList']['contains']('hidden') && hideSquadCodeModal(), !document['getElementById']('accountInfoModal')['classList']['contains']('hidden') && hideAccountInfoModal());
    });
    function _0xc2cecd() {
        window['pixiRenderer'] && (window['pixiRenderer']['disableAllLayers'](), window['pixiRenderer']['disable'](), window['pixiRenderer']['backgroundLayer'] && window['pixiRenderer']['backgroundLayer']['graphics']['clear'](), window['pixiRenderer']['gridLayer'] && window['pixiRenderer']['gridLayer']['graphics']['clear'](), window['pixiRenderer']['worldBorderLayer'] && window['pixiRenderer']['worldBorderLayer']['graphics']['clear'](), window['pixiRenderer']['enemyLayer'] && window['pixiRenderer']['enemyLayer']['clear']());
    }
});