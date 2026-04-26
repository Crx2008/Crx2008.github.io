const savedSlotAmount = localStorage['getItem']('savedSlotAmount') ?? 0x5;
let petalReloadData = {}, petalHpData = {}, bosses = [];
var totalBossHealth = 0x0;
let bossCount = 0x0, augmentedBiomes = ['trench'];
function darkenColor(_0x8d21f4, _0x52740a) {
    const _0x39a5e1 = parseInt(_0x8d21f4['slice'](0x1), 0x10);
    let _0x21504e = (_0x39a5e1 >> 0x10 & 0xff) * _0x52740a, _0x2f2e5a = (_0x39a5e1 >> 0x8 & 0xff) * _0x52740a, _0x57dd9b = (_0x39a5e1 & 0xff) * _0x52740a;
    return 'rgb(' + _0x21504e + ',\x20' + _0x2f2e5a + ',\x20' + _0x57dd9b + ')';
}
window['inventory'] = new Inventory(savedSlotAmount);
let inventory = window['inventory'], deadMenu = new DeadMenu(), mobileControls = new MobileControls(), draggingPetalContainer = null, waveBarY = 0x55, enemyBoxSize = 0x4b, enemyBoxBoundSize = 0x50, enemyBoxOverlapSize = 0x14, enemyBoxBaseX = 0x0, enemyBoxBaseY = 0x69;
function waveLengthFunc(_0x23a83e) {
    return _0x23a83e < 0xa ? _0x23a83e ** 0.2 * 18.9287 + 0x1e : 0x3c;
}
function renderConnectingText() {
    connectingTextSizeMult *= 1.003, connectingTextSizeMult > 4.2 && (connectingTextSizeMult = 0x1), (ctx['font'] = '900\x20' + 0x26 * connectingTextSizeMult + 'px\x20\x27Ubuntu', ctx['fillStyle'] = '#f0f0f0', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x6 * connectingTextSizeMult, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['translate'](canvas['w'] / 0x2, canvas['h'] / 0x2));
    const _0xa8b0cd = time;
    ctx['globalAlpha'] = 0x1, ctx['rotate'](Math['sin'](_0xa8b0cd / 0x12c) * 0.18), ctx['strokeText']('Connecting...', 0x0, 0x0), ctx['fillText']('Connecting...', 0x0, 0x0), ctx['rotate'](-Math['sin'](_0xa8b0cd / 0x12c) * 0.18), ctx['translate'](-canvas['w'] / 0x2, -canvas['h'] / 0x2);
}
let disconnectedText;
function renderDisconnectedText() {
    ctx['font'] = '900\x2046px\x20Ubuntu';
    if (disconnectedText === undefined) {
        disconnectedText = {
            'x': Math['random']() * canvas['w'],
            'y': Math['random']() * canvas['h']
        };
        const _0x19a535 = Math['random']() * Math['PI'] * 0x2;
        disconnectedText['xv'] = Math['cos'](_0x19a535) * 0x3 * 0xa5 / 0x3c, disconnectedText['yv'] = Math['sin'](_0x19a535) * 0x3 * 0xa5 / 0x3c;
        const _0x343c6b = ctx['measureText']('Disconnected');
        disconnectedText['w'] = _0x343c6b['width'], disconnectedText['h'] = _0x343c6b['actualBoundingBoxAscent'] + _0x343c6b['actualBoundingBoxDescent'];
    }
    disconnectedText['x'] += disconnectedText['xv'], disconnectedText['y'] += disconnectedText['yv'];
    if (disconnectedText['x'] < 0x0)
        disconnectedText['x'] = 0x0, disconnectedText['xv'] *= -0x1;
    else
        disconnectedText['x'] + disconnectedText['w'] > canvas['w'] && (disconnectedText['x'] = canvas['w'] - disconnectedText['w'], disconnectedText['xv'] *= -0x1);
    if (disconnectedText['y'] < 0x0)
        disconnectedText['y'] = 0x0, disconnectedText['yv'] *= -0x1;
    else
        disconnectedText['y'] + disconnectedText['h'] > canvas['h'] && (disconnectedText['y'] = canvas['h'] - disconnectedText['h'], disconnectedText['yv'] *= -0x1);
    ctx['fillStyle'] = '#f0f0f0', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x5, ctx['textAlign'] = 'left', ctx['textBaseline'] = 'top', ctx['strokeText']('Disconnected', disconnectedText['x'], disconnectedText['y']), ctx['fillText']('Disconnected', disconnectedText['x'], disconnectedText['y']);
}
window['camera'] = {
    'x': 'pass',
    'y': 0x0
};
let connectingTextSizeMult = 0x1;
window['cameraShake'] = {
    'intensity': 0x0,
    'duration': 0x0,
    'remaining': 0x0
}, window['addCameraShake'] = (_0x23d27a, _0x5d8a7b) => {
    !window['cameraShake'] && (window['cameraShake'] = {
        'intensity': 0x0,
        'duration': 0x0,
        'remaining': 0x0
    }), _0x23d27a > window['cameraShake']['intensity'] && (window['cameraShake']['intensity'] = _0x23d27a, window['cameraShake']['duration'] = _0x5d8a7b, window['cameraShake']['remaining'] = _0x5d8a7b);
};
let _renderGame = _0x548356 => {
    if (window['Perf'])
        window['Perf']['mark']('renderGame_main');
    if ((window['selfId'] === null || room['flowers'][window['selfId']] === undefined) && window['isDead'] !== !![] && window['spectating'] !== !![]) {
        if (window['state'] === 'disconnected' && typeof biomeManager !== 'undefined') {
            const {
                ratio: _0x3a1a0f,
                last: _0x4cded3,
                current: _0x17efa3,
                direction: _0x53a0fd
            } = biomeManager['getCurrentBiomeData']();
            ctx['fillStyle'] = Colors['biomes'][_0x17efa3]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x17efa3]['grid'];
        } else {
            if (room && typeof Colors !== 'undefined') {
                if (!room['biome'])
                    room['biome'] = '1v1';
                ctx['fillStyle'] = Colors['biomes'][room['biome']]['background'], ctx['strokeStyle'] = Colors['biomes'][room['biome']]['grid'];
            } else
                ctx['fillStyle'] = 'white', ctx['strokeStyle'] = '#1c8c54';
        }
        if (window['Perf'])
            window['Perf']['mark']('clearBackground');
        ctx['fillRect'](0x0, 0x0, canvas['w'], canvas['h']);
        if (window['noGrid'] !== !![]) {
            const _0x346adb = -time / 0x14 % 0x32;
            ctx['lineWidth'] = 0x2, ctx['globalAlpha'] = 0.6;
            for (let _0x1cbb77 = _0x346adb - ctx['lineWidth']; _0x1cbb77 <= canvas['w'] + ctx['lineWidth']; _0x1cbb77 += tileSize) {
                ctx['beginPath'](), ctx['moveTo'](_0x1cbb77, 0x0), ctx['lineTo'](_0x1cbb77, canvas['h']), ctx['stroke'](), ctx['closePath']();
            }
            for (let _0x3ae8b5 = -_0x346adb - ctx['lineWidth']; _0x3ae8b5 <= canvas['h'] + ctx['lineWidth']; _0x3ae8b5 += tileSize) {
                ctx['beginPath'](), ctx['moveTo'](0x0, _0x3ae8b5), ctx['lineTo'](canvas['w'], _0x3ae8b5), ctx['stroke'](), ctx['closePath']();
            }
        }
        ctx['globalAlpha'] = 0x1;
        if (window['Perf'])
            window['Perf']['end']('clearBackground');
        if (window['Perf'])
            window['Perf']['mark']('renderMenuEnemies');
        renderMenuEnemies();
        if (window['Perf'])
            window['Perf']['end']('renderMenuEnemies');
        renderConnectingText();
        return;
    } else
        menuEnemies = [], connectingTextSizeMult = 0x1;
    if (window['Perf'])
        window['Perf']['mark']('gameBackground');
    if (window['pixiRenderer']?.['shouldRenderLayer']('background'))
        ctx['clearRect'](0x0, 0x0, canvas['w'], canvas['h']);
    else {
        ctx['fillStyle'] = Colors['biomes'][room['biome']]['background'];
        if (room && room['waveTimer'] != undefined && augmentedBiomes['includes'](room['biome'])) {
            const _0x2bfb1f = Math['min'](room['waveTimer'] / 0x8ca0, 0x1), _0x1bb342 = 0x1 - 0.8 * _0x2bfb1f;
            ctx['fillStyle'] = darkenColor(ctx['fillStyle'], _0x1bb342), ctx['strokeStyle'] = darkenColor(ctx['strokeStyle'], _0x1bb342);
        }
        ctx['fillRect'](0x0, 0x0, canvas['w'], canvas['h']);
    }
    if (window['Perf'])
        window['Perf']['end']('gameBackground');
    const _0x51a713 = window['isDead'] || window['selfId'] === null || room['flowers'][window['selfId']] === undefined || window['spectating'] == !![] ? ((() => {
        let _0x53c818 = null, _0x59bdab = 0x1d42aea2879f2e000000000000000000000000000000000000000000000000000000000000000000000;
        for (let _0x3d19f6 in room['flowers']) {
            _0x3d19f6 < _0x59bdab && (_0x59bdab = _0x3d19f6, _0x53c818 = room['flowers'][_0x3d19f6]);
        }
        return _0x53c818 === null ? {
            'render': {
                'headX': 0x0,
                'headY': 0x0,
                'x': 0x0,
                'y': 0x0
            }
        } : _0x53c818;
    })()) : room['flowers'][window['selfId']];
    if (window['isDead'] !== !![] && window['spectating'] == ![]) {
        if (window['Perf'])
            window['Perf']['mark']('playerInterpolate');
        _0x51a713['updateInterpolate']();
        if (window['Perf'])
            window['Perf']['end']('playerInterpolate');
    } else
        petalReloadData = {}, petalHpData = {};
    renderFov = interpolate(renderFov, fov, 0.04), window['renderFov'] = renderFov, window['camera'] = {
        'x': _0x51a713['render']['headX'],
        'y': _0x51a713['render']['headY'] - (window['isDead'] === !![] ? 0x18 / renderFov : 0x0)
    };
    let _0x4a908b = 0x0, _0x176cc9 = 0x0;
    if (window['cameraShake'] && window['cameraShake']['remaining'] > 0x0) {
        window['cameraShake']['remaining'] -= _0x548356;
        if (window['cameraShake']['remaining'] <= 0x0)
            window['cameraShake']['intensity'] = 0x0, window['cameraShake']['offsetX'] = 0x0, window['cameraShake']['offsetY'] = 0x0;
        else {
            const _0x40cc27 = window['cameraShake']['remaining'] / window['cameraShake']['duration'], _0x124dc0 = window['cameraShake']['intensity'] * _0x40cc27;
            _0x4a908b = (Math['random']() - 0.5) * _0x124dc0 * 0x2, _0x176cc9 = (Math['random']() - 0.5) * _0x124dc0 * 0x2, window['cameraShake']['offsetX'] = _0x4a908b, window['cameraShake']['offsetY'] = _0x176cc9;
        }
    }
    if (window['Perf'])
        window['Perf']['mark']('worldBorder');
    !window['pixiRenderer']?.['shouldRenderLayer']('worldBorder') && (ctx['lineWidth'] = canvas['w'] * 0x2 + canvas['h'] * 0x2, ctx['beginPath'](), ctx['strokeStyle'] = 'black', ctx['globalAlpha'] = 0.08, ctx['arc'](canvas['w'] / 0x2 - _0x51a713['render']['headX'] * renderFov, canvas['h'] / 0x2 - _0x51a713['render']['headY'] * renderFov, room['radius'] * renderFov + ctx['lineWidth'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1);
    if (window['Perf'])
        window['Perf']['end']('worldBorder');
    if (window['Perf'])
        window['Perf']['mark']('gridRender');
    if (window['noGrid'] !== !![] && !window['pixiRenderer']?.['shouldRenderLayer']('grid')) {
        const _0x535fa1 = {
            'x': (-_0x51a713['render']['headX'] + canvas['w'] / 0x2 / renderFov) % tileSize,
            'y': (-_0x51a713['render']['headY'] + canvas['h'] / 0x2 / renderFov) % tileSize
        };
        ctx['strokeStyle'] = Colors['biomes'][room['biome']]['grid'];
        if (room && room['waveTimer'] != undefined && augmentedBiomes['includes'](room['biome'])) {
            const _0x55a675 = Math['min'](room['waveTimer'] / 0x8ca0, 0x1), _0x579d1e = 0x1 - 0.8 * _0x55a675;
            ctx['fillStyle'] = darkenColor(ctx['fillStyle'], _0x579d1e), ctx['strokeStyle'] = darkenColor(ctx['strokeStyle'], _0x579d1e);
        }
        ctx['lineWidth'] = renderFov, ctx['globalAlpha'] = 0x1, ctx['beginPath']();
        for (let _0x2aa1cb = (_0x535fa1['x'] - ctx['lineWidth']) * renderFov; _0x2aa1cb <= canvas['w'] + ctx['lineWidth']; _0x2aa1cb += tileSize * renderFov) {
            ctx['moveTo'](_0x2aa1cb, 0x0), ctx['lineTo'](_0x2aa1cb, canvas['h']);
        }
        for (let _0x34805e = (_0x535fa1['y'] - ctx['lineWidth']) * renderFov; _0x34805e <= canvas['h'] + ctx['lineWidth']; _0x34805e += tileSize * renderFov) {
            ctx['moveTo'](0x0, _0x34805e), ctx['lineTo'](canvas['w'], _0x34805e);
        }
        ctx['stroke'](), ctx['closePath']();
    }
    if (window['Perf'])
        window['Perf']['end']('gridRender');
    ctx['globalAlpha'] = 0x1, window['camera']['x'] !== 'pass' && ctx['translate'](canvas['w'] / 0x2 - camera['x'] * renderFov + _0x4a908b, canvas['h'] / 0x2 - camera['y'] * renderFov + _0x176cc9), ctx['scale'](renderFov, renderFov);
    if (biomeManager !== undefined && biomeManager['getCurrentBiome']() === '1v1' && window['inMainPvpRoom'] !== !![]) {
        if (Object['keys'](room['flowers'])['length'] >= 0x2)
            window['canWinPvp'] = !![];
        else
            Object['keys'](room['flowers'])['length'] === 0x1 && window['isDead'] !== !![] && window['canWinPvp'] && (window['hasWonPvp'] = !![], delete window['canWinPvp']);
    }
    if (window['hasWonPvp'] === !![]) {
        ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['globalAlpha'] = 0.3, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['lineWidth'] = room['radius'] * 1.55 / 0x14, ctx['font'] = '600\x20' + room['radius'] * 1.55 + 'px\x20Ubuntu';
        const _0x1021af = ctx['measureText']('W'), _0x8ead39 = (_0x1021af['actualBoundingBoxDescent'] - _0x1021af['actualBoundingBoxAscent']) / 0x2;
        ctx['fillText']('W', 0x0, -_0x8ead39), ctx['strokeText']('W', 0x0, -_0x8ead39), ctx['globalAlpha'] = 0x1;
    }
    if (window['Perf'])
        window['Perf']['mark']('draw_petalContainers');
    for (let _0x1dca84 in room['petalContainers']) {
        room['petalContainers'][_0x1dca84]['draw']();
    }
    if (window['Perf'])
        window['Perf']['end']('draw_petalContainers');
    if (window['Perf'])
        window['Perf']['mark']('draw_projectiles');
    for (let _0x5dff84 in room['flowers']) {
        room['flowers'][_0x5dff84]['drawProjectiles']();
    }
    if (window['Perf'])
        window['Perf']['end']('draw_projectiles');
    if (window['Perf'])
        window['Perf']['mark']('draw_pets');
    for (let _0x29ade5 in room['flowers']) {
        room['flowers'][_0x29ade5]['drawPets']();
    }
    if (window['Perf'])
        window['Perf']['end']('draw_pets');
    if (window['Perf'])
        window['Perf']['mark']('draw_enemies');
    if (!window['pixiRenderer']?.['shouldRenderLayer']('enemies'))
        for (let _0x5dccd6 in room['enemies']) {
            room['enemies'][_0x5dccd6]['draw']();
        }
    if (window['Perf'])
        window['Perf']['end']('draw_enemies');
    if (window['Perf'])
        window['Perf']['mark']('draw_flowers');
    for (let _0x3c3a02 in room['flowers']) {
        room['flowers'][_0x3c3a02]['draw']();
    }
    if (window['Perf'])
        window['Perf']['end']('draw_flowers');
    if (window['toRenderDebug'] === !![]) {
        ctx['lineWidth'] = 1.5 / renderFov;
        for (let _0x206650 in room['flowers']) {
            const _0x5f3553 = room['flowers'][_0x206650];
            if (_0x5f3553['dead'] === !![])
                continue;
            renderHitbox({
                'x': _0x5f3553['x'],
                'y': _0x5f3553['y'],
                'radius': _0x5f3553['radius'],
                'angle': _0x5f3553['angle'],
                'rarity': 0x0
            });
            for (let _0x3e65e6 = 0x0; _0x3e65e6 < _0x5f3553['petals']['length']; _0x3e65e6++) {
                const _0x374c70 = _0x5f3553['petals'][_0x3e65e6];
                if (_0x374c70['dead'] === !![])
                    continue;
                toRender({
                    'x': _0x374c70['x'],
                    'y': _0x374c70['y'],
                    'radius': _0x374c70['radius']
                }, window['camera']) && renderHitbox({
                    'x': _0x374c70['x'],
                    'y': _0x374c70['y'],
                    'radius': _0x374c70['radius'],
                    'angle': _0x374c70['angle'],
                    'rarity': _0x374c70['rarity']
                });
            }
            for (let _0x582d5a = 0x0; _0x582d5a < _0x5f3553['projectiles']['length']; _0x582d5a++) {
                const _0x1c0be6 = _0x5f3553['projectiles'][_0x582d5a];
                if (!_0x1c0be6 || _0x1c0be6['dead'] === !![])
                    continue;
                toRender({
                    'x': _0x1c0be6['x'],
                    'y': _0x1c0be6['y'],
                    'radius': _0x1c0be6['radius']
                }, window['camera']) && renderHitbox({
                    'x': _0x1c0be6['x'],
                    'y': _0x1c0be6['y'],
                    'radius': _0x1c0be6['radius'],
                    'angle': _0x1c0be6['angle'] || 0x0,
                    'rarity': _0x1c0be6['rarity'] || 0x0
                });
            }
            for (let _0x1ce909 = 0x0; _0x1ce909 < _0x5f3553['pets']['length']; _0x1ce909++) {
                const _0x124c04 = _0x5f3553['pets'][_0x1ce909];
                if (!_0x124c04 || _0x124c04['dead'] === !![])
                    continue;
                toRender({
                    'x': _0x124c04['x'],
                    'y': _0x124c04['y'],
                    'radius': _0x124c04['radius']
                }, window['camera']) && renderHitbox({
                    'x': _0x124c04['x'],
                    'y': _0x124c04['y'],
                    'radius': _0x124c04['radius'],
                    'angle': _0x124c04['angle'] || 0x0,
                    'rarity': _0x124c04['rarity'] || 0x0
                });
            }
        }
        for (let _0x21371d in room['enemies']) {
            const _0xc252d3 = room['enemies'][_0x21371d];
            if (_0xc252d3['dead'] === !![])
                continue;
            toRender({
                'x': _0xc252d3['x'],
                'y': _0xc252d3['y'],
                'radius': _0xc252d3['radius']
            }, window['camera']) && renderHitbox({
                'x': _0xc252d3['x'],
                'y': _0xc252d3['y'],
                'radius': _0xc252d3['radius'],
                'angle': _0xc252d3['angle'] || 0x0,
                'rarity': _0xc252d3['rarity'] || 0x0
            });
        }
    }
    ctx['scale'](0x1 / renderFov, 0x1 / renderFov);
    if (window['camera']['x'] !== 'pass') {
        const _0x33e76d = window['cameraShake']?.['offsetX'] || 0x0, _0x20f00c = window['cameraShake']?.['offsetY'] || 0x0;
        ctx['translate'](-(canvas['w'] / 0x2 - camera['x'] * renderFov + _0x33e76d), -(canvas['h'] / 0x2 - camera['y'] * renderFov + _0x20f00c));
    }
    ctx['globalAlpha'] = 0x1, room['globalWeb'] > 0x0 && (ctx['beginPath'](), ctx['globalAlpha'] *= 0.25 * (room['globalWeb'] / 0x708), ctx['fillStyle'] = '#2200ff', ctx['rect'](0x0, 0x0, canvas['w'], canvas['h']), ctx['fill'](), ctx['globalAlpha'] /= 0.25 * (room['globalWeb'] / 0x708), ctx['closePath']());
    if (room && room['waveTimer'] != undefined && augmentedBiomes['includes'](room['biome'])) {
        let _0x391f5a = ctx['globalAlpha'];
        const _0x16216c = Math['min'](room['waveTimer'] / 0x8ca0, 0x1);
        ctx['globalAlpha'] = 0.4 * _0x16216c, ctx['fillStyle'] = '#000000', ctx['rect'](0x0, 0x0, canvas['w'], canvas['h']), ctx['fill'](), ctx['globalAlpha'] = _0x391f5a;
    }
    if (window['Perf'])
        window['Perf']['mark']('uiRender');
    ctx['translate'](canvas['w'] / 0x2, 0x0);
    if (window['Perf'])
        window['Perf']['mark']('enemyBoxes');
    for (let _0x40623f = 0x0; _0x40623f < room['enemyBoxes']['length']; _0x40623f++) {
        let _0x47966e = room['enemyBoxes'][_0x40623f];
        _0x47966e['update']();
        if (!window['hiEnemyBoxRarities'])
            window['hiEnemyBoxRarities'] = {};
        if (!window['hiEnemyBoxRarities'][_0x47966e['type']])
            window['hiEnemyBoxRarities'][_0x47966e['type']] = _0x47966e['rarity'];
        window['hiEnemyBoxRarities'][_0x47966e['type']] = Math['max'](window['hiEnemyBoxRarities'][_0x47966e['type']], _0x47966e['rarity']);
        if (_0x47966e['isBoss'])
            ctx['strokeStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2050%,\x2040%)';
        else {
            ctx['strokeStyle'] = Colors['rarities'][_0x47966e['rarity']]['border'];
            if (window['hqp'] == !![]) {
                if (Colors['rarities'][_0x47966e['rarity']]['fancy'] !== undefined)
                    ctx['strokeStyle'] = Colors['rarities'][_0x47966e['rarity']]['fancy']['border'];
            }
        }
        if (_0x47966e['isBoss'])
            ctx['fillStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2030%,\x2060%)';
        else {
            ctx['fillStyle'] = Colors['rarities'][_0x47966e['rarity']]['color'];
            if (staticGradients[_0x47966e['rarity'] + '_'])
                ctx['fillStyle'] = staticGradients[_0x47966e['rarity'] + '_'];
            if (window['hqp'] == !![]) {
                if (Colors['rarities'][_0x47966e['rarity']]['fancy'] !== undefined && window['hqp'] == !![]) {
                    let _0x220874;
                    if (_0x47966e['rarity'] <= 0x17)
                        _0x220874 = ctx['createLinearGradient'](_0x47966e['x'] - _0x47966e['w'] / 0x2, _0x47966e['y'], _0x47966e['x'] + _0x47966e['w'] / 0x2, _0x47966e['y'] + _0x47966e['h']);
                    else {
                        if (_0x47966e['rarity'] <= 0x19)
                            _0x220874 = ctx['createLinearGradient'](_0x47966e['x'] + _0x47966e['w'] / 0x2, _0x47966e['y'] + _0x47966e['h'], _0x47966e['x'] - _0x47966e['w'] / 0x2, _0x47966e['y']);
                        else
                            _0x47966e['rarity'] <= 0x1d ? _0x220874 = ctx['createRadialGradient'](_0x47966e['x'], _0x47966e['y'] + _0x47966e['h'] / 0x2, 0x0, _0x47966e['x'], _0x47966e['y'] + _0x47966e['h'] / 0x2, _0x47966e['w'] / 0x2) : _0x220874 = ctx['createRadialGradient'](_0x47966e['x'], _0x47966e['y'] + _0x47966e['h'] / 0x2, _0x47966e['w'] / 0x2, _0x47966e['x'], _0x47966e['y'] + _0x47966e['h'] / 0x2, 0x0);
                    }
                    createFancyGradient(_0x220874, _0x47966e['rarity']), ctx['fillStyle'] = _0x220874;
                }
            }
        }
        let _0x1f7167 = 0.92, _0x43989f = (0x1 - _0x1f7167) / 0x2;
        ctx['translate'](_0x47966e['x'] - _0x47966e['w'] / 0x2 + _0x47966e['w'] * _0x43989f, _0x47966e['y'] + _0x47966e['h'] * _0x43989f), ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, _0x47966e['w'] * _0x1f7167, _0x47966e['h'] * _0x1f7167, 2.5), ctx['fill'](), ctx['closePath'](), ctx['translate'](-(_0x47966e['x'] - _0x47966e['w'] / 0x2 + _0x47966e['w'] * _0x43989f), -(_0x47966e['y'] + _0x47966e['h'] * _0x43989f));
        if (window['hqp'] == !![] && !_0x47966e['isBoss']) {
            if (Colors['rarities'][_0x47966e['rarity']]['fancy'] !== undefined && Colors['rarities'][_0x47966e['rarity']]['fancy']['stars'] !== undefined && window['hqp'] == !![]) {
                ctx['save'](), ctx['translate'](_0x47966e['x'], _0x47966e['y'] + _0x47966e['h'] / 0x2), ctx['scale'](_0x47966e['w'] / 0x32, _0x47966e['w'] / 0x32);
                if (!_0x47966e['stars']) {
                    _0x47966e['stars'] = [];
                    for (let _0x5e21ce = 0x0; _0x5e21ce < Colors['rarities'][_0x47966e['rarity']]['fancy']['stars']; _0x5e21ce++) {
                        _0x47966e['stars']['push']({
                            'x': Math['random']() * 0x32 - 0x19,
                            'y': Math['random']() * 0x32 - 0x19
                        });
                    }
                }
                ctx['fillStyle'] = '#ffffff';
                for (let _0x1382b0 of _0x47966e['stars']) {
                    _0x1382b0['x'] += 0.1, _0x1382b0['y'] += 0.1, (_0x1382b0['x'] > 0x1e || _0x1382b0['y'] > 0x1e) && (_0x1382b0['x'] = Math['random']() * 0x320 - 0x14 - 0x1e, _0x1382b0['y'] = -0x1e);
                    if (_0x1382b0['x'] < -0x1e || _0x1382b0['x'] > 0x1e || _0x1382b0['y'] < -0x1e || _0x1382b0['y'] > 0x1e)
                        continue;
                    ctx['beginPath']();
                    var _0x59fdf0 = ctx['createRadialGradient'](_0x1382b0['x'], _0x1382b0['y'], 0xf, _0x1382b0['x'], _0x1382b0['y'], 0x0);
                    _0x59fdf0['addColorStop'](0x0, 'transparent'), _0x59fdf0['addColorStop'](0.8, 'rgba(255,255,255,' + (Math['cos'](Date['now']() / 0x258 + _0x1382b0['x'] / 0x1e + _0x1382b0['y'] / 0x1e) + 0x1) * 0.8 + ')'), _0x59fdf0['addColorStop'](0x1, 'white'), ctx['fillStyle'] = _0x59fdf0, ctx['globalAlpha'] = 0.3, ctx['fillRect'](-20.5, -20.5, 0x29, 0x29), ctx['globalAlpha'] = 0x1, _0x1382b0['x'] < 20.5 && _0x1382b0['x'] > -20.5 && _0x1382b0['y'] < 20.5 && _0x1382b0['y'] > -20.5 && (ctx['fillStyle'] = '#fff', ctx['arc'](_0x1382b0['x'], _0x1382b0['y'], 0x1, 0x0, 0x2 * Math['PI']), ctx['fill']()), ctx['closePath']();
                }
                ctx['restore']();
            }
        }
        if (!cachedImages['enemies']['' + _0x47966e['type']]) {
            const _0x1bce1b = new PetalContainer({}, {
                'x': 0x0,
                'y': 0x0,
                'w': 0x1,
                'h': 0x1
            });
            _0x1bce1b['type'] = _0x47966e['type'], _0x1bce1b['generateEnemyImage']();
        }
        ctx['beginPath'](), ctx['roundRect'](_0x47966e['x'] - _0x47966e['w'] / 0x2 + _0x47966e['w'] * _0x43989f, _0x47966e['y'] + _0x47966e['h'] * _0x43989f, _0x47966e['w'] * _0x1f7167, _0x47966e['h'] * _0x1f7167, 2.5), ctx['lineWidth'] = 5.25, ctx['stroke'](), ctx['closePath'](), window['hqp'] == !![] && (ctx['save'](), ctx['beginPath'](), ctx['globalAlpha'] = 0.5, ctx['roundRect'](_0x47966e['x'] - _0x47966e['w'] / 0x2 + _0x47966e['w'] * _0x43989f - 2.625, _0x47966e['y'] + _0x47966e['h'] * _0x43989f - 2.625, _0x47966e['w'] * _0x1f7167 + 5.25, _0x47966e['h'] * _0x1f7167 + 5.25, 0x5), ctx['fill'](), ctx['closePath'](), ctx['restore']());
        if (!_0x47966e['image'])
            _0x47966e['image'] = cachedImages['enemies']['' + _0x47966e['type']];
        if (_0x47966e['image']) {
            if (!_0x47966e['imageScale'])
                _0x47966e['imageScale'] = _0x47966e['w'] * (82.5 / _0x47966e['w']) / (_0x47966e['image']['width'] * 1.15);
            let _0xb562b6 = ctx['getTransform']();
            ctx['translate'](_0x47966e['x'], _0x47966e['y'] + _0x47966e['w'] / 0x2), ctx['scale'](_0x47966e['imageScale'], _0x47966e['imageScale']), ctx['drawImage'](_0x47966e['image'], -_0x47966e['image']['width'] / 0x2, -_0x47966e['image']['width'] / 0x2), ctx['setTransform'](_0xb562b6);
        }
        if (_0x47966e['isBoss'])
            ctx['strokeStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2050%,\x2040%)';
        else {
            ctx['strokeStyle'] = Colors['rarities'][_0x47966e['rarity']]['border'];
            if (Colors['rarities'][_0x47966e['rarity']]['fancy'] !== undefined)
                ctx['strokeStyle'] = Colors['rarities'][_0x47966e['rarity']]['fancy']['border'];
        }
        _0x47966e['amount'] > 0x1 && (time - _0x47966e['lastAmountChangedTime'] < 0x64 && (ctx['globalAlpha'] = smoothstep((time - _0x47966e['lastAmountChangedTime']) / 0x64)), ctx['lineWidth'] = 0x3, ctx['font'] = '900\x2016px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['translate'](_0x47966e['x'] + _0x47966e['w'] / 0x2 - 0x7, _0x47966e['y'] + 0x12), ctx['rotate'](0.34), ctx['strokeText']('x' + _0x47966e['amount'], 0x0, 0x0), ctx['fillText']('x' + _0x47966e['amount'], 0x0, 0x0), ctx['rotate'](-0.34), ctx['translate'](-(_0x47966e['x'] + _0x47966e['w'] / 0x2 - 0x7), -(_0x47966e['y'] + 0x12)), ctx['globalAlpha'] = 0x1);
        if (_0x47966e['delete'] == !![]) {
            let _0x4e38c8 = ![];
            for (let _0x21dd9a = 0x0; _0x21dd9a < room['enemyBoxes']['length']; _0x21dd9a++) {
                let _0x21e2bc = room['enemyBoxes'][_0x21dd9a];
                _0x21e2bc['type'] == _0x47966e['type'] && _0x21e2bc['rarity'] != _0x47966e['rarity'] && (_0x4e38c8 = !![]);
            }
            if (_0x4e38c8)
                for (let _0x4b25cc = 0x0; _0x4b25cc < room['enemyBoxes']['length']; _0x4b25cc++) {
                    let _0x14e204 = room['enemyBoxes'][_0x4b25cc];
                    _0x14e204['type'] == _0x47966e['type'] && (_0x14e204['rarity'] > _0x47966e['rarity'] && (_0x14e204['targetY'] -= enemyBoxOverlapSize));
                }
            else
                alignEnemyBoxes(_0x47966e);
            window['hiEnemyBoxRarities'] = {};
        }
    }
    if (window['Perf'])
        window['Perf']['end']('enemyBoxes');
    ctx['translate'](-canvas['w'] / 0x2, 0x0);
    for (let _0x4caaef of room['enemyBoxes']) {
        if (_0x4caaef['isBoss'])
            continue;
        const _0x2e9ed0 = mouse['x'] * canvas['w'] / window['innerWidth'], _0x3e139d = mouse['y'] * canvas['h'] / window['innerHeight'];
        mouseInBox({
            'x': _0x2e9ed0,
            'y': _0x3e139d
        }, {
            'x': _0x4caaef['x'] - _0x4caaef['w'] / 0x2 + canvas['w'] / 0x2,
            'y': _0x4caaef['y'],
            'w': _0x4caaef['w'],
            'h': _0x4caaef['rarity'] !== window['hiEnemyBoxRarities'][_0x4caaef['type']] ? _0x4caaef['w'] / 0x5 : _0x4caaef['w']
        }) && (!_0x4caaef['ec'] && (_0x4caaef['ec'] = mobGallery['generateEnemyPc'](_0x4caaef['type'], _0x4caaef['rarity'], 0x1)), !Stats['enemies'][_0x4caaef['type']] ? calculateStats() : (_0x4caaef['ec']['isHovered'] = !![], _0x4caaef['ec']['drawStatsBox'](!![], !![], canvas['w'] / 0x2 + _0x4caaef['x'], _0x4caaef['y'] + _0x4caaef['w'] / 0x2 + 0x3 * _0x4caaef['w'] / 0x5)));
    }
    room['enemyBoxes'] = room['enemyBoxes']['filter'](_0x41d616 => !_0x41d616['delete']);
    if (window['Perf'])
        window['Perf']['mark']('waveText');
    let _0x37f24c = biomeManager !== undefined && biomeManager['getCurrentBiome']() === '1v1' ? 'Fight!' : 'Wave\x20' + room['wave'];
    if (window['currentWeather']) {
        const _0x2b24de = window['currentWeather']['displayName'] || window['currentWeather']['name'];
        _0x2b24de && (_0x37f24c += '\x20-\x20' + _0x2b24de);
    }
    if (augmentedBiomes['includes'](room['biome'])) {
        let _0xf68320 = room['waveTimer'] / (0x3c * 0x1e);
        _0x37f24c += '\x20•\x20Depth:\x20' + formatAmountHighPrecision(_0xf68320 * 0x3e8) + 'm', ctx['lineWidth'] = 0x18, ctx['lineCap'] = 'round', ctx['strokeStyle'] = 'black', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke']();
    } else {
        if (bosses['length'] > 0x0) {
            let _0x290781 = 0x0;
            for (let _0x27f1e7 of bosses) {
                room['enemies'][_0x27f1e7['id']] ? _0x290781 += Math['max'](Math['min'](room['enemies'][_0x27f1e7['id']]['render']['hp'], room['enemies'][_0x27f1e7['id']]['maxHp']), 0x0) : bosses = bosses['filter'](_0x2007e6 => _0x2007e6['id'] !== _0x27f1e7['id']);
            }
            let _0x4e24f4 = 0x1, _0x3d26af = 0x1, _0x409ba2 = '';
            const _0x22e3cf = [
                {
                    'limit': 0x3e8,
                    'first': 0x1,
                    'second': 0x1,
                    'suffix': ''
                },
                {
                    'limit': 0x2710,
                    'first': 0xa,
                    'second': 0x64,
                    'suffix': 'k'
                },
                {
                    'limit': 0x186a0,
                    'first': 0x64,
                    'second': 0xa,
                    'suffix': 'k'
                },
                {
                    'limit': 0xf4240,
                    'first': 0x3e8,
                    'second': 0x1,
                    'suffix': 'k'
                },
                {
                    'limit': 0x989680,
                    'first': 0x2710,
                    'second': 0x64,
                    'suffix': 'm'
                },
                {
                    'limit': 0x5f5e100,
                    'first': 0x186a0,
                    'second': 0xa,
                    'suffix': 'm'
                },
                {
                    'limit': 0x3b9aca00,
                    'first': 0xf4240,
                    'second': 0x1,
                    'suffix': 'm'
                },
                {
                    'limit': 0x2540be400,
                    'first': 0x989680,
                    'second': 0x64,
                    'suffix': 'b'
                },
                {
                    'limit': 0x174876e800,
                    'first': 0x5f5e100,
                    'second': 0xa,
                    'suffix': 'b'
                },
                {
                    'limit': 0xe8d4a51000,
                    'first': 0x3b9aca00,
                    'second': 0x1,
                    'suffix': 'b'
                },
                {
                    'limit': 0x9184e72a000,
                    'first': 0x2540be400,
                    'second': 0x64,
                    'suffix': 't'
                },
                {
                    'limit': 0x5af3107a4000,
                    'first': 0x174876e800,
                    'second': 0xa,
                    'suffix': 't'
                },
                {
                    'limit': 0x38d7ea4c68000,
                    'first': 0xe8d4a51000,
                    'second': 0x1,
                    'suffix': 't'
                },
                {
                    'limit': 0x2386f26fc10000,
                    'first': 0x9184e72a000,
                    'second': 0x64,
                    'suffix': 'Qd'
                },
                {
                    'limit': 0x16345785d8a0000,
                    'first': 0x5af3107a4000,
                    'second': 0xa,
                    'suffix': 'Qd'
                },
                {
                    'limit': 0xde0b6b3a7640000,
                    'first': 0x38d7ea4c68000,
                    'second': 0x1,
                    'suffix': 'Qd'
                },
                {
                    'limit': 0x8ac7230489e80000,
                    'first': 0x2386f26fc10000,
                    'second': 0x64,
                    'suffix': 'Qt'
                },
                {
                    'limit': 0x56bc75e2d63100000,
                    'first': 0x16345785d8a0000,
                    'second': 0xa,
                    'suffix': 'Qt'
                },
                {
                    'limit': 0x3635c9adc5dea00000,
                    'first': 0xde0b6b3a7640000,
                    'second': 0x1,
                    'suffix': 'Qt'
                }
            ];
            for (const _0x43725b of _0x22e3cf) {
                if (totalBossHealth < _0x43725b['limit']) {
                    _0x4e24f4 = _0x43725b['first'], _0x3d26af = _0x43725b['second'], _0x409ba2 = _0x43725b['suffix'];
                    break;
                }
            }
            _0x37f24c += '\x20•\x20' + Math['round'](_0x290781 / _0x4e24f4) / _0x3d26af + _0x409ba2 + '/' + Math['round'](totalBossHealth / _0x4e24f4) / _0x3d26af + _0x409ba2, ctx['lineWidth'] = 0x18, ctx['lineCap'] = 'round', ctx['strokeStyle'] = 'black', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke'](), _0x290781 > 0x0 && (ctx['lineWidth'] = 0x12, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#75dd34', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c + 0x118 * (_0x290781 / totalBossHealth), waveBarY), ctx['stroke']());
        } else {
            let _0x450793 = waveLengthFunc(room['wave']) * 0x1e;
            room['waveTimer'] < _0x450793 ? (ctx['lineWidth'] = 0x18, ctx['lineCap'] = 'round', ctx['strokeStyle'] = 'black', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke'](), ctx['lineCap'] = 'round', ctx['lineWidth'] = 0x12 * Math['min'](0x1, room['waveTimer'] / _0x450793 * 0xa), (biomeManager === undefined || biomeManager['getCurrentBiome']() !== '1v1') && (room['shinyWave'] ? ctx['strokeStyle'] = 'hsl(' + Date['now']() / 0x5 % 0x168 + ',\x2050%,\x2050%)' : ctx['strokeStyle'] = blendColor(Colors['biomes'][room['biome']]['background'], '#ffffff', 0.4), ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c + 0x118 * (room['waveTimer'] / _0x450793), waveBarY), ctx['stroke']())) : (ctx['lineWidth'] = 0x18, ctx['lineCap'] = 'round', ctx['strokeStyle'] = 'black', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke'](), (biomeManager === undefined || biomeManager['getCurrentBiome']() !== '1v1') && (ctx['lineWidth'] = 0x12, ctx['strokeStyle'] = blendColor(Colors['biomes'][room['biome']]['background'], '#ffffff', 0.4), ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke'](), ctx['lineWidth'] = 15.5 * Math['min'](0x1, (room['waveTimer'] - _0x450793) / _0x450793 * 0xa), ctx['globalAlpha'] = Math['min'](room['waveTimer'] / _0x450793 / 0x2, 0x1), ctx['strokeStyle'] = 'red', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c + 0x118 * Math['min'](0x1, (room['waveTimer'] - _0x450793) / _0x450793), waveBarY), ctx['stroke']()), ctx['globalAlpha'] = 0x1);
        }
    }
    let _0x24242a = ![];
    window['mania'] && (room['tick'] < window['mania']['timeLimit'] && (_0x24242a = !![]));
    if (_0x24242a)
        window['mania']['passed'] == !![] ? (ctx['letterSpacing'] = '1px', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#03fc49', ctx['lineWidth'] = 0x6, ctx['font'] = '900\x2037px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('Mania\x20•\x20' + window['mania']['message'] + '\x20•\x20Passed!', canvas['w'] / 0x2, 0x32), ctx['fillText']('Mania\x20•\x20' + window['mania']['message'] + '\x20•\x20Passed!', canvas['w'] / 0x2, 0x32)) : (ctx['letterSpacing'] = '1px', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#ed5c81', ctx['lineWidth'] = 0x6, ctx['font'] = '900\x2037px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('Mania\x20•\x20' + window['mania']['message'] + '\x20•\x20' + Math['round']((window['mania']['timeLimit'] - room['tick']) / 0x3) / 0xa + 's', canvas['w'] / 0x2, 0x32), ctx['fillText']('Mania\x20•\x20' + window['mania']['message'] + '\x20•\x20' + Math['round']((window['mania']['timeLimit'] - room['tick']) / 0x3) / 0xa + 's', canvas['w'] / 0x2, 0x32));
    else
        window['killTime'] ? room['tick'] < window['killTime']['timeLimit'] && (ctx['letterSpacing'] = '1px', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#e3365f', ctx['lineWidth'] = 0x6, ctx['font'] = '900\x2037px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('Kill\x20the\x20boss\x20within\x20' + Math['floor']((window['killTime']['timeLimit'] - room['tick']) / 0x3) / 0xa + '\x20seconds\x20or\x20die!', canvas['w'] / 0x2, 0x32), ctx['fillText']('Kill\x20the\x20boss\x20within\x20' + Math['floor']((window['killTime']['timeLimit'] - room['tick']) / 0x3) / 0xa + '\x20seconds\x20or\x20die!', canvas['w'] / 0x2, 0x32)) : (ctx['letterSpacing'] = '1px', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = 'white', ctx['lineWidth'] = 0x6, ctx['font'] = '900\x2037px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText'](room['biomeDisplay'], canvas['w'] / 0x2, 0x32), ctx['fillText'](room['biomeDisplay'], canvas['w'] / 0x2, 0x32));
    room['shinyWave'] ? (ctx['fillStyle'] = 'hsl(' + Date['now']() / 0x5 % 0x168 + ',\x2060%,\x2080%)', room['shinyWave'] > 0x1 ? _0x37f24c = 'Super\x20'['repeat'](room['shinyWave'] - 0x1) + 'Lucky\x20' + _0x37f24c : _0x37f24c = 'Lucky\x20' + _0x37f24c) : ctx['fillStyle'] = 'white', (ctx['lineWidth'] = 0x3, ctx['letterSpacing'] = '0.5px', ctx['font'] = '900\x2017px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'top', ctx['strokeText'](_0x37f24c, canvas['w'] / 0x2, waveBarY - 0x8), ctx['fillText'](_0x37f24c, canvas['w'] / 0x2, waveBarY - 0x8), ctx['letterSpacing'] = '0px', ctx['textBaseline'] = 'middle');
    if (window['Perf'])
        window['Perf']['end']('waveText');
    if (window['Perf'])
        window['Perf']['mark']('squadUI');
    let _0x29a232 = 0x64, _0x48271c = 0x41, _0x1803f2 = room['flowers'][window['selfId']], _0x546e5f = _0x29a232;
    if (!_0x1803f2 && spectating)
        _0x546e5f -= 0x5a;
    for (let _0x16577f in room['squadMembers']) {
        let _0x82ead5;
        room['flowers'][_0x16577f] && !room['flowers'][_0x16577f]['dead'] ? _0x82ead5 = room['flowers'][_0x16577f] : (_0x82ead5 = room['squadMembers'][_0x16577f], _0x82ead5['render'] = {
            'hp': 0x0,
            'shield': 0x0,
            'beforeStreakHp': 0x0
        }, _0x82ead5['maxHp'] = 0x64, _0x82ead5['drawFlower'] = Flower['drawDeadFlower']);
        if (_0x16577f == window['selfId'] && spectating !== !![]) {
            let _0x4eecbc = 0x23;
            renderHpBar({
                'x': _0x48271c + _0x4eecbc * 0x4,
                'y': _0x29a232 - _0x4eecbc * 3.6,
                'radius': _0x4eecbc * 1.8,
                'hp': _0x82ead5['render']['hp'],
                'maxHp': _0x82ead5['maxHp'],
                'shield': _0x82ead5['render']['shield'],
                'beforeStreakHp': _0x82ead5['render']['beforeStreakHp'],
                'givenAlpha': 0x1
            }, _0x82ead5), _0x82ead5['drawFlower'](_0x48271c, _0x29a232, _0x4eecbc, _0x82ead5['character']), ctx['font'] = '900\x20' + _0x4eecbc * 0.75 + 'px\x20Ubuntu', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = 'white', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'center', ctx['strokeText'](_0x82ead5['name'], _0x48271c + _0x4eecbc * 0x4, _0x29a232), ctx['fillText'](_0x82ead5['name'], _0x48271c + _0x4eecbc * 0x4, _0x29a232), ctx['font'] = '900\x20' + _0x4eecbc * 0.5 + 'px\x20Ubuntu', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#aaaaaa', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'left', ctx['lineWidth'] = 0x3, ctx['strokeText'](_0x82ead5['username'], _0x48271c + _0x4eecbc, _0x29a232 + _0x4eecbc * 0.75), ctx['fillText'](_0x82ead5['username'], _0x48271c + _0x4eecbc, _0x29a232 + _0x4eecbc * 0.75);
            if (_0x82ead5['mana']) {
                let _0x29673c = 0x0, _0x18b447 = 0x0;
                for (let _0x4939dd in _0x82ead5['mana']) {
                    if (_0x82ead5['mana'][_0x4939dd] > 0x0)
                        _0x29673c++;
                }
                for (let _0x4185f7 in _0x82ead5['mana']) {
                    if (_0x82ead5['mana'][_0x4185f7] > 0x0) {
                        let _0x837263 = (_0x4eecbc * 6.5 - _0x4eecbc * 0.5 * _0x29673c) / _0x29673c;
                        ctx['lineWidth'] = _0x4eecbc * 0.35, ctx['strokeStyle'] = '#333333', ctx['beginPath'](), ctx['moveTo'](_0x48271c + _0x4eecbc + _0x18b447 * _0x837263 + _0x4eecbc * 0.5 * _0x18b447, _0x29a232 - _0x4eecbc * 0.75), ctx['lineTo'](_0x48271c + _0x4eecbc + (_0x18b447 + 0x1) * _0x837263 + _0x4eecbc * 0.5 * _0x18b447, _0x29a232 - _0x4eecbc * 0.75), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x4eecbc * 0.25, ctx['strokeStyle'] = Colors['mana'][_0x4185f7], ctx['beginPath'](), ctx['moveTo'](_0x48271c + _0x4eecbc + _0x18b447 * _0x837263 + _0x4eecbc * 0.5 * _0x18b447, _0x29a232 - _0x4eecbc * 0.75), ctx['lineTo'](_0x48271c + _0x4eecbc + (_0x18b447 + _0x82ead5['mana'][_0x4185f7] / _0x82ead5['maxMana'][_0x4185f7]) * _0x837263 + _0x4eecbc * 0.5 * _0x18b447, _0x29a232 - _0x4eecbc * 0.75), ctx['stroke'](), ctx['closePath'](), _0x18b447++;
                    }
                }
            }
        } else {
            if (room['biome'] !== '1v1') {
                let _0x58e7ee = 0x1e;
                _0x546e5f += 0x5a, renderHpBar({
                    'x': _0x48271c + _0x58e7ee * 0x4,
                    'y': _0x546e5f - _0x58e7ee * 3.6,
                    'radius': _0x58e7ee * 1.8,
                    'hp': _0x82ead5['render']['hp'],
                    'maxHp': _0x82ead5['maxHp'],
                    'shield': _0x82ead5['render']['shield'],
                    'beforeStreakHp': _0x82ead5['render']['beforeStreakHp'],
                    'givenAlpha': 0x1
                }, _0x82ead5), _0x82ead5['drawFlower'](_0x48271c, _0x546e5f, _0x58e7ee, _0x82ead5['character']), ctx['font'] = '900\x20' + _0x58e7ee * 0.75 + 'px\x20Ubuntu', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = 'white', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'center', ctx['strokeText'](_0x82ead5['name'], _0x48271c + _0x58e7ee * 0x4, _0x546e5f), ctx['fillText'](_0x82ead5['name'], _0x48271c + _0x58e7ee * 0x4, _0x546e5f), ctx['font'] = '900\x20' + _0x58e7ee * 0.5 + 'px\x20Ubuntu', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#aaaaaa', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'left', ctx['lineWidth'] = 0x3, ctx['strokeText'](_0x82ead5['username'], _0x48271c + _0x58e7ee, _0x546e5f + _0x58e7ee * 0.75), ctx['fillText'](_0x82ead5['username'], _0x48271c + _0x58e7ee, _0x546e5f + _0x58e7ee * 0.75), ctx['lineWidth'] = 0x1;
                if (_0x1803f2 && room['flowers'][_0x16577f]) {
                    ctx['lineWidth'] = _0x58e7ee / 0x7;
                    let _0x24c025 = Math['atan2'](_0x82ead5['render']['headY'] - _0x1803f2['render']['headY'], _0x82ead5['render']['headX'] - _0x1803f2['render']['headX']);
                    ctx['translate'](_0x48271c, _0x546e5f), ctx['strokeStyle'] = 'black', ctx['fillStyle'] = 'white', ctx['rotate'](_0x24c025), ctx['beginPath'](), ctx['lineTo'](_0x58e7ee * 1.15, -_0x58e7ee * 0.4), ctx['lineTo'](_0x58e7ee * 1.45, 0x0), ctx['lineTo'](_0x58e7ee * 1.15, _0x58e7ee * 0.4), ctx['lineTo'](_0x58e7ee * 1.15, -_0x58e7ee * 0.4), ctx['stroke'](), ctx['fill'](), ctx['rotate'](-_0x24c025), ctx['translate'](-_0x48271c, -_0x546e5f);
                }
                if (_0x82ead5['mana']) {
                    let _0xcbae25 = 0x0, _0x4ac7d6 = 0x0;
                    for (let _0x33c27b in _0x82ead5['mana']) {
                        if (_0x82ead5['mana'][_0x33c27b] > 0x0)
                            _0xcbae25++;
                    }
                    for (let _0x479caf in _0x82ead5['mana']) {
                        if (_0x82ead5['mana'][_0x479caf] > 0x0) {
                            let _0x579ce8 = (_0x58e7ee * 6.5 - _0x58e7ee * 0.5 * _0xcbae25) / _0xcbae25;
                            ctx['lineWidth'] = _0x58e7ee * 0.35, ctx['strokeStyle'] = '#333333', ctx['beginPath'](), ctx['moveTo'](_0x48271c + _0x58e7ee + _0x4ac7d6 * _0x579ce8 + _0x58e7ee * 0.5 * _0x4ac7d6, _0x546e5f - _0x58e7ee * 0.75), ctx['lineTo'](_0x48271c + _0x58e7ee + (_0x4ac7d6 + 0x1) * _0x579ce8 + _0x58e7ee * 0.5 * _0x4ac7d6, _0x546e5f - _0x58e7ee * 0.75), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x58e7ee * 0.25, ctx['strokeStyle'] = Colors['mana'][_0x479caf], ctx['beginPath'](), ctx['moveTo'](_0x48271c + _0x58e7ee + _0x4ac7d6 * _0x579ce8 + _0x58e7ee * 0.5 * _0x4ac7d6, _0x546e5f - _0x58e7ee * 0.75), ctx['lineTo'](_0x48271c + _0x58e7ee + (_0x4ac7d6 + _0x82ead5['mana'][_0x479caf] / _0x82ead5['maxMana'][_0x479caf]) * _0x579ce8 + _0x58e7ee * 0.5 * _0x4ac7d6, _0x546e5f - _0x58e7ee * 0.75), ctx['stroke'](), ctx['closePath'](), _0x4ac7d6++;
                        }
                    }
                }
            }
        }
    }
    if (window['Perf'])
        window['Perf']['end']('squadUI');
    if (window['Perf'])
        window['Perf']['mark']('inventoryUI');
    globalInventory['fadingOut'] === !![] && globalInventory['draw'](), mobGallery['fadingOut'] === !![] && mobGallery['draw'](), window['me'] && window['me']['isMob'] && typeof mobSkillUI !== 'undefined' ? mobSkillUI['render'](ctx) : inventory['draw'](), window['mobile'] && mobileControls['draw'](), levelBar['draw']();
    if (window['Perf'])
        window['Perf']['end']('inventoryUI');
    if (window['Perf'])
        window['Perf']['mark']('deadMenuAndLeaderboard');
    if (window['isDead'] === !![])
        window['deadMenuTime'] += _0x548356, deadMenu['draw']();
    else {
        window['deadMenuTime'] = 0x0;
        if (room['biome'] == '1v1') {
            ctx['translate'](canvas['w'] - 0x140, 0x14), ctx['fillStyle'] = '#333333', ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = 0xa, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, 0x12c, 0x1ae, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = '#39b54a', ctx['strokeStyle'] = '#2e933c', ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, 0x12c, 0x32, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2025px\x20\x27Ubuntu\x27', ctx['lineWidth'] = 0x4, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText']('Leaderboard', 0x96, 0x32 - 0x17), ctx['fillText']('Leaderboard', 0x96, 0x32 - 0x17);
            for (let _0xca128c = 0x1; _0xca128c <= 0xb; _0xca128c++) {
                ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = 0x19, ctx['beginPath'](), ctx['moveTo'](0x19, _0xca128c * 32.5 + 0x2d), ctx['lineTo'](0x113, _0xca128c * 32.5 + 0x2d), ctx['stroke'](), ctx['closePath']();
            }
            let _0x4da943 = 0x0, _0x350d4c = 0x0, _0xa77fe8 = [];
            for (let _0x4fb687 in room['flowers']) {
                flower = room['flowers'][_0x4fb687], _0xa77fe8['push']({
                    'username': flower['username'],
                    'score': flower['score']
                });
            }
            _0xa77fe8['sort']((_0xfb8a59, _0x492297) => {
                if (_0xfb8a59['score'] > _0x492297['score'])
                    return -0x1;
                if (_0xfb8a59['score'] < _0x492297['score'])
                    return 0x1;
            }), _0xa77fe8 = _0xa77fe8['slice'](0x0, 0xb);
            for (let _0x4076a0 of _0xa77fe8) {
                _0x350d4c++;
                if (_0x4076a0['score'] > _0x4da943)
                    _0x4da943 = _0x4076a0['score'];
                ctx['strokeStyle'] = '#39b54a', _0x4076a0['score'] == _0x4da943 && (ctx['strokeStyle'] = '#dbd74b'), _0x4076a0['username'] == room['flowers'][window['selfId']]['username'] && (ctx['strokeStyle'] = '#5a9fdb'), _0x4076a0['username'] == 'ruby' && (ctx['strokeStyle'] = '#fa87b7'), _0x4076a0['username'] == 'haha0201' && (ctx['strokeStyle'] = 'hsl(' + (0xec + Math['sin'](Date['now']() / 0x3e8) * 0x44) + ',\x2050%,\x2060%)'), _0x4076a0['username'] == 'devdevd' && (ctx['strokeStyle'] = 'hsl(' + (0x82 + Math['sin'](Date['now']() / 0x3e8) * 0x6e) + ',\x2090%,\x2060%)'), ctx['lineWidth'] = 17.5, ctx['beginPath'](), ctx['moveTo'](0x19, _0x350d4c * 32.5 + 0x2d), ctx['lineTo'](0x19 + _0x4076a0['score'] / _0x4da943 * 0xfa, _0x350d4c * 32.5 + 0x2d), ctx['stroke'](), ctx['closePath'](), ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2020px\x20\x27Ubuntu\x27', ctx['lineWidth'] = 0x4, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x4076a0['username'] + '\x20-\x20' + formatAmountHighPrecision(_0x4076a0['score']), 0x96, _0x350d4c * 32.5 + 0x2d), ctx['fillText'](_0x4076a0['username'] + '\x20-\x20' + formatAmountHighPrecision(_0x4076a0['score']), 0x96, _0x350d4c * 32.5 + 0x2d);
            }
            ctx['translate'](-canvas['w'] + 0x140, -0x14);
        }
        if (window['spectating'])
            collectedMenu['draw']();
    }
    if (window['Perf'])
        window['Perf']['end']('deadMenuAndLeaderboard');
    if (window['Perf'])
        window['Perf']['mark']('exitButton');
    let _0x5c4874 = ![];
    mouse['canvasX'] > 0xa && 0xa + 0x2d > mouse['canvasX'] && mouse['canvasY'] > 0xa && 0xa + 0x2d > mouse['canvasY'] ? _0x5c4874 = !![] : _0x5c4874 = ![], ctx['strokeStyle'] = '#90464b', _0x5c4874 === !![] ? ctx['fillStyle'] = '#c16666' : ctx['fillStyle'] = '#c1565e', (ctx['lineWidth'] = 0x5, ctx['beginPath'](), ctx['roundRect'](0xa, 0xa, 0x2d, 0x2d, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 7.5, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#cccccc', ctx['beginPath'](), ctx['moveTo'](22.5, 22.5), ctx['lineTo'](42.5, 42.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](42.5, 22.5), ctx['lineTo'](22.5, 42.5), ctx['stroke'](), ctx['closePath']()), _0x5c4874 === !![] && mouse['lastDownData']['x'] > 0xa && 0xa + 0x2d > mouse['lastDownData']['x'] && mouse['lastDownData']['y'] > 0xa && 0xa + 0x2d > mouse['lastDownData']['y'] && mouse['lastDownData']['time'] > 0x64 && ((!window['lastLeaveGameTime'] || time - window['lastLeaveGameTime'] > 0x1f4) && (window['lastLeaveGameTime'] = time, send({
        'leaveGame': !![],
        'real': !![]
    }), petalReloadData = {}, petalHpData = {}, _0x5c4874 = ![]));
    if (window['Perf'])
        window['Perf']['end']('exitButton');
    if (window['Perf'])
        window['Perf']['mark']('fullscreenButton');
    let _0x508998 = ![];
    const _0x46d644 = 0x41, _0x1f21a7 = 0xa, _0x5ea440 = 0x23;
    window['mobile'] && (mouse['canvasX'] > _0x46d644 && _0x46d644 + _0x5ea440 > mouse['canvasX'] && mouse['canvasY'] > _0x1f21a7 && _0x1f21a7 + _0x5ea440 > mouse['canvasY'] && (_0x508998 = !![]), ctx['strokeStyle'] = '#6a8a6a', _0x508998 === !![] ? ctx['fillStyle'] = '#9ababa' : ctx['fillStyle'] = '#8aaa8a', ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['roundRect'](_0x46d644, _0x1f21a7, _0x5ea440, _0x5ea440, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0x3, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#ffffff', ctx['font'] = '900\x2020px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = '#ffffff', ctx['fillText']('⛶', _0x46d644 + _0x5ea440 / 0x2, _0x1f21a7 + _0x5ea440 / 0x2 + 0x2), _0x508998 === !![] && mouse['lastDownData']['x'] > _0x46d644 && _0x46d644 + _0x5ea440 > mouse['lastDownData']['x'] && mouse['lastDownData']['y'] > _0x1f21a7 && _0x1f21a7 + _0x5ea440 > mouse['lastDownData']['y'] && mouse['lastDownData']['time'] > 0x64 && ((!window['lastFullscreenTime'] || time - window['lastFullscreenTime'] > 0x12c) && (window['lastFullscreenTime'] = time, !document['fullscreenElement'] ? document['documentElement']['requestFullscreen']()['catch'](_0xce5f4 => {
        console['log']('全屏错误:\x20' + _0xce5f4['message']);
    }) : document['exitFullscreen']())));
    if (window['Perf'])
        window['Perf']['end']('fullscreenButton');
    if (window['Perf'])
        window['Perf']['mark']('weatherAndEffects');
    typeof weatherUI !== 'undefined' && weatherUI['renderEffects'](ctx, canvas, time), typeof weatherUI !== 'undefined' && weatherUI['renderLightningStrike'](ctx, canvas, time);
    if (window['scorchedUltimateEffects'] && window['scorchedUltimateEffects']['length'] > 0x0) {
        const _0x591977 = performance['now']();
        window['scorchedUltimateEffects'] = window['scorchedUltimateEffects']['filter'](_0x2798cb => _0x591977 - _0x2798cb['startTime'] < _0x2798cb['duration']);
        for (const _0x1afbb2 of window['scorchedUltimateEffects']) {
            const _0x280eda = room && room['flowers'] && room['flowers'][_0x1afbb2['playerId']];
            if (!_0x280eda)
                continue;
            const _0x5e3202 = _0x280eda['headX'], _0x2b0ce2 = _0x280eda['headY'];
            if (!isFinite(_0x5e3202) || !isFinite(_0x2b0ce2))
                continue;
            if (!window['camera'])
                continue;
            const _0x302a8d = (_0x5e3202 - window['camera']['x']) * renderFov + canvas['w'] / 0x2, _0x37dc55 = (_0x2b0ce2 - window['camera']['y']) * renderFov + canvas['h'] / 0x2, _0x17ccc2 = time - _0x1afbb2['startTime'], _0x2fe151 = _0x17ccc2 / _0x1afbb2['duration'], _0x3bfb02 = 0x1 - _0x2fe151, _0x3a921e = 0x3;
            for (let _0x5265a9 = 0x0; _0x5265a9 < _0x3a921e; _0x5265a9++) {
                const _0x5b58e1 = (_0x2fe151 + _0x5265a9 * 0.2) % 0x1, _0x235b6b = _0x5b58e1 * _0x1afbb2['maxRadius'] * renderFov, _0x967ed = (0x1 - _0x5b58e1) * _0x3bfb02 * 0.6;
                ctx['beginPath'](), ctx['arc'](_0x302a8d, _0x37dc55, _0x235b6b, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = 'rgba(255,\x20150,\x2050,\x20' + _0x967ed + ')', ctx['lineWidth'] = 0x8 * renderFov, ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x302a8d, _0x37dc55, _0x235b6b * 0.85, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = 'rgba(255,\x20200,\x20100,\x20' + _0x967ed * 0.8 + ')', ctx['lineWidth'] = 0x4 * renderFov, ctx['stroke'](), ctx['closePath']();
            }
            const _0x5e671c = 0x32 * renderFov * (0x1 - _0x2fe151);
            if (_0x5e671c > 0x0) {
                const _0x376448 = ctx['createRadialGradient'](_0x302a8d, _0x37dc55, 0x0, _0x302a8d, _0x37dc55, _0x5e671c);
                _0x376448['addColorStop'](0x0, 'rgba(255,\x20180,\x2050,\x20' + _0x3bfb02 * 0.5 + ')'), _0x376448['addColorStop'](0x1, 'rgba(255,\x20150,\x2050,\x200)'), ctx['fillStyle'] = _0x376448, ctx['beginPath'](), ctx['arc'](_0x302a8d, _0x37dc55, _0x5e671c, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
        }
    }
    if (window['Perf'])
        window['Perf']['end']('weatherAndEffects');
    if (window['Perf'])
        window['Perf']['end']('uiRender');
    if (window['Perf'])
        window['Perf']['end']('renderGame_main');
};
function renderHitbox({
    x: _0x4283db,
    y: _0x4bc438,
    radius: _0x33dead,
    angle: _0x334eb8,
    rarity: rarity = 0x0
}) {
    ctx['strokeStyle'] = Colors['rarities'][rarity]['color'], ctx['lineWidth'] = 0.75 / renderFov, ctx['beginPath'](), ctx['arc'](_0x4283db, _0x4bc438, _0x33dead, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x4283db, _0x4bc438), ctx['lineTo'](_0x4283db + _0x33dead * Math['cos'](_0x334eb8), _0x4bc438 + _0x33dead * Math['sin'](_0x334eb8)), ctx['stroke'](), ctx['closePath']();
}
let renderGame = function (_0x488ddc) {
    window['Perf'] ? (window['Perf']['mark']('renderGame'), _renderGame(_0x488ddc), window['Perf']['end']('renderGame')) : _renderGame(_0x488ddc);
};