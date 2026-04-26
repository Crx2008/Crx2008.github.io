const savedSlotAmount = localStorage['getItem']('savedSlotAmount') ?? 0x5;
let petalReloadData = {}, petalHpData = {}, bosses = [];
var totalBossHealth = 0x0;
let bossCount = 0x0, augmentedBiomes = ['trench'];
function darkenColor(_0x3af2e1, _0x1ff0f6) {
    const _0x37d28b = parseInt(_0x3af2e1['slice'](0x1), 0x10);
    let _0x15ce3d = (_0x37d28b >> 0x10 & 0xff) * _0x1ff0f6, _0x524c91 = (_0x37d28b >> 0x8 & 0xff) * _0x1ff0f6, _0x2db5aa = (_0x37d28b & 0xff) * _0x1ff0f6;
    return 'rgb(' + _0x15ce3d + ',\x20' + _0x524c91 + ',\x20' + _0x2db5aa + ')';
}
window['inventory'] = new Inventory(savedSlotAmount);
let inventory = window['inventory'], deadMenu = new DeadMenu(), mobileControls = new MobileControls(), draggingPetalContainer = null, waveBarY = 0x55, enemyBoxSize = 0x4b, enemyBoxBoundSize = 0x50, enemyBoxOverlapSize = 0x14, enemyBoxBaseX = 0x0, enemyBoxBaseY = 0x69;
function waveLengthFunc(_0x540905) {
    return _0x540905 < 0xa ? _0x540905 ** 0.2 * 18.9287 + 0x1e : 0x3c;
}
function renderConnectingText() {
    connectingTextSizeMult *= 1.003;
    connectingTextSizeMult > 4.2 && (connectingTextSizeMult = 0x1);
    ctx['font'] = '900\x20' + 0x26 * connectingTextSizeMult + 'px\x20\x27Ubuntu', ctx['fillStyle'] = '#f0f0f0', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x6 * connectingTextSizeMult, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['translate'](canvas['w'] / 0x2, canvas['h'] / 0x2);
    const _0x50fe2c = time;
    ctx['globalAlpha'] = 0x1, ctx['rotate'](Math['sin'](_0x50fe2c / 0x12c) * 0.18), ctx['strokeText']('Connecting...', 0x0, 0x0), ctx['fillText']('Connecting...', 0x0, 0x0), ctx['rotate'](-Math['sin'](_0x50fe2c / 0x12c) * 0.18), ctx['translate'](-canvas['w'] / 0x2, -canvas['h'] / 0x2);
}
let disconnectedText;
function renderDisconnectedText() {
    ctx['font'] = '900\x2046px\x20Ubuntu';
    if (disconnectedText === undefined) {
        disconnectedText = {
            'x': Math['random']() * canvas['w'],
            'y': Math['random']() * canvas['h']
        };
        const _0x586ab1 = Math['random']() * Math['PI'] * 0x2;
        disconnectedText['xv'] = Math['cos'](_0x586ab1) * 0x3 * 0xa5 / 0x3c, disconnectedText['yv'] = Math['sin'](_0x586ab1) * 0x3 * 0xa5 / 0x3c;
        const _0x1d6474 = ctx['measureText']('Disconnected');
        disconnectedText['w'] = _0x1d6474['width'], disconnectedText['h'] = _0x1d6474['actualBoundingBoxAscent'] + _0x1d6474['actualBoundingBoxDescent'];
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
}, window['addCameraShake'] = (_0x3f5c5d, _0x2d6f20) => {
    !window['cameraShake'] && (window['cameraShake'] = {
        'intensity': 0x0,
        'duration': 0x0,
        'remaining': 0x0
    }), _0x3f5c5d > window['cameraShake']['intensity'] && (window['cameraShake']['intensity'] = _0x3f5c5d, window['cameraShake']['duration'] = _0x2d6f20, window['cameraShake']['remaining'] = _0x2d6f20);
};
let _renderGame = _0x43f3f4 => {
    if (window['Perf'])
        window['Perf']['mark']('renderGame_main');
    if ((window['selfId'] === null || room['flowers'][window['selfId']] === undefined) && window['isDead'] !== !![] && window['spectating'] !== !![]) {
        if (window['state'] === 'disconnected' && typeof biomeManager !== 'undefined') {
            const {
                ratio: _0x558c81,
                last: _0x2e42b1,
                current: _0x47a4a9,
                direction: _0x5b1bb4
            } = biomeManager['getCurrentBiomeData']();
            ctx['fillStyle'] = Colors['biomes'][_0x47a4a9]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x47a4a9]['grid'];
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
            const _0x4f9901 = -time / 0x14 % 0x32;
            ctx['lineWidth'] = 0x2, ctx['globalAlpha'] = 0.6;
            for (let _0xc65ad1 = _0x4f9901 - ctx['lineWidth']; _0xc65ad1 <= canvas['w'] + ctx['lineWidth']; _0xc65ad1 += tileSize) {
                ctx['beginPath'](), ctx['moveTo'](_0xc65ad1, 0x0), ctx['lineTo'](_0xc65ad1, canvas['h']), ctx['stroke'](), ctx['closePath']();
            }
            for (let _0x1f2abb = -_0x4f9901 - ctx['lineWidth']; _0x1f2abb <= canvas['h'] + ctx['lineWidth']; _0x1f2abb += tileSize) {
                ctx['beginPath'](), ctx['moveTo'](0x0, _0x1f2abb), ctx['lineTo'](canvas['w'], _0x1f2abb), ctx['stroke'](), ctx['closePath']();
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
            const _0x55f756 = Math['min'](room['waveTimer'] / 0x8ca0, 0x1), _0x586e53 = 0x1 - 0.8 * _0x55f756;
            ctx['fillStyle'] = darkenColor(ctx['fillStyle'], _0x586e53), ctx['strokeStyle'] = darkenColor(ctx['strokeStyle'], _0x586e53);
        }
        ctx['fillRect'](0x0, 0x0, canvas['w'], canvas['h']);
    }
    if (window['Perf'])
        window['Perf']['end']('gameBackground');
    const _0x796e5b = window['isDead'] || window['selfId'] === null || room['flowers'][window['selfId']] === undefined || window['spectating'] == !![] ? ((() => {
        let _0x1c4c4b = null, _0x5dbba7 = 0x1d42aea2879f2e000000000000000000000000000000000000000000000000000000000000000000000;
        for (let _0x5cccf5 in room['flowers']) {
            _0x5cccf5 < _0x5dbba7 && (_0x5dbba7 = _0x5cccf5, _0x1c4c4b = room['flowers'][_0x5cccf5]);
        }
        return _0x1c4c4b === null ? {
            'render': {
                'headX': 0x0,
                'headY': 0x0,
                'x': 0x0,
                'y': 0x0
            }
        } : _0x1c4c4b;
    })()) : room['flowers'][window['selfId']];
    if (window['isDead'] !== !![] && window['spectating'] == ![]) {
        if (window['Perf'])
            window['Perf']['mark']('playerInterpolate');
        _0x796e5b['updateInterpolate']();
        if (window['Perf'])
            window['Perf']['end']('playerInterpolate');
    } else
        petalReloadData = {}, petalHpData = {};
    renderFov = interpolate(renderFov, fov, 0.04), window['renderFov'] = renderFov, window['camera'] = {
        'x': _0x796e5b['render']['headX'],
        'y': _0x796e5b['render']['headY'] - (window['isDead'] === !![] ? 0x18 / renderFov : 0x0)
    };
    let _0x128e07 = 0x0, _0x2faeca = 0x0;
    if (window['cameraShake'] && window['cameraShake']['remaining'] > 0x0) {
        window['cameraShake']['remaining'] -= _0x43f3f4;
        if (window['cameraShake']['remaining'] <= 0x0)
            window['cameraShake']['intensity'] = 0x0, window['cameraShake']['offsetX'] = 0x0, window['cameraShake']['offsetY'] = 0x0;
        else {
            const _0x919dec = window['cameraShake']['remaining'] / window['cameraShake']['duration'], _0xe09930 = window['cameraShake']['intensity'] * _0x919dec;
            _0x128e07 = (Math['random']() - 0.5) * _0xe09930 * 0x2, _0x2faeca = (Math['random']() - 0.5) * _0xe09930 * 0x2, window['cameraShake']['offsetX'] = _0x128e07, window['cameraShake']['offsetY'] = _0x2faeca;
        }
    }
    if (window['Perf'])
        window['Perf']['mark']('worldBorder');
    !window['pixiRenderer']?.['shouldRenderLayer']('worldBorder') && (ctx['lineWidth'] = canvas['w'] * 0x2 + canvas['h'] * 0x2, ctx['beginPath'](), ctx['strokeStyle'] = 'black', ctx['globalAlpha'] = 0.08, ctx['arc'](canvas['w'] / 0x2 - _0x796e5b['render']['headX'] * renderFov, canvas['h'] / 0x2 - _0x796e5b['render']['headY'] * renderFov, room['radius'] * renderFov + ctx['lineWidth'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1);
    if (window['Perf'])
        window['Perf']['end']('worldBorder');
    if (window['Perf'])
        window['Perf']['mark']('gridRender');
    if (window['noGrid'] !== !![] && !window['pixiRenderer']?.['shouldRenderLayer']('grid')) {
        const _0x166614 = {
            'x': (-_0x796e5b['render']['headX'] + canvas['w'] / 0x2 / renderFov) % tileSize,
            'y': (-_0x796e5b['render']['headY'] + canvas['h'] / 0x2 / renderFov) % tileSize
        };
        ctx['strokeStyle'] = Colors['biomes'][room['biome']]['grid'];
        if (room && room['waveTimer'] != undefined && augmentedBiomes['includes'](room['biome'])) {
            const _0x1d60f9 = Math['min'](room['waveTimer'] / 0x8ca0, 0x1), _0x5200b7 = 0x1 - 0.8 * _0x1d60f9;
            ctx['fillStyle'] = darkenColor(ctx['fillStyle'], _0x5200b7), ctx['strokeStyle'] = darkenColor(ctx['strokeStyle'], _0x5200b7);
        }
        ctx['lineWidth'] = renderFov, ctx['globalAlpha'] = 0x1, ctx['beginPath']();
        for (let _0x54702e = (_0x166614['x'] - ctx['lineWidth']) * renderFov; _0x54702e <= canvas['w'] + ctx['lineWidth']; _0x54702e += tileSize * renderFov) {
            ctx['moveTo'](_0x54702e, 0x0), ctx['lineTo'](_0x54702e, canvas['h']);
        }
        for (let _0x4ecd80 = (_0x166614['y'] - ctx['lineWidth']) * renderFov; _0x4ecd80 <= canvas['h'] + ctx['lineWidth']; _0x4ecd80 += tileSize * renderFov) {
            ctx['moveTo'](0x0, _0x4ecd80), ctx['lineTo'](canvas['w'], _0x4ecd80);
        }
        ctx['stroke'](), ctx['closePath']();
    }
    if (window['Perf'])
        window['Perf']['end']('gridRender');
    ctx['globalAlpha'] = 0x1;
    window['camera']['x'] !== 'pass' && ctx['translate'](canvas['w'] / 0x2 - camera['x'] * renderFov + _0x128e07, canvas['h'] / 0x2 - camera['y'] * renderFov + _0x2faeca);
    ctx['scale'](renderFov, renderFov);
    if (biomeManager !== undefined && biomeManager['getCurrentBiome']() === '1v1' && window['inMainPvpRoom'] !== !![]) {
        if (Object['keys'](room['flowers'])['length'] >= 0x2)
            window['canWinPvp'] = !![];
        else
            Object['keys'](room['flowers'])['length'] === 0x1 && window['isDead'] !== !![] && window['canWinPvp'] && (window['hasWonPvp'] = !![], delete window['canWinPvp']);
    }
    if (window['hasWonPvp'] === !![]) {
        ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['globalAlpha'] = 0.3, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['lineWidth'] = room['radius'] * 1.55 / 0x14, ctx['font'] = '600\x20' + room['radius'] * 1.55 + 'px\x20Ubuntu';
        const _0x1b6dbd = ctx['measureText']('W'), _0x283ea0 = (_0x1b6dbd['actualBoundingBoxDescent'] - _0x1b6dbd['actualBoundingBoxAscent']) / 0x2;
        ctx['fillText']('W', 0x0, -_0x283ea0), ctx['strokeText']('W', 0x0, -_0x283ea0), ctx['globalAlpha'] = 0x1;
    }
    if (window['Perf'])
        window['Perf']['mark']('draw_petalContainers');
    for (let _0x2788e3 in room['petalContainers']) {
        room['petalContainers'][_0x2788e3]['draw']();
    }
    if (window['Perf'])
        window['Perf']['end']('draw_petalContainers');
    if (window['Perf'])
        window['Perf']['mark']('draw_projectiles');
    for (let _0x4b2fe8 in room['flowers']) {
        room['flowers'][_0x4b2fe8]['drawProjectiles']();
    }
    if (window['Perf'])
        window['Perf']['end']('draw_projectiles');
    if (window['Perf'])
        window['Perf']['mark']('draw_pets');
    for (let _0x284a3c in room['flowers']) {
        room['flowers'][_0x284a3c]['drawPets']();
    }
    if (window['Perf'])
        window['Perf']['end']('draw_pets');
    if (window['Perf'])
        window['Perf']['mark']('draw_enemies');
    if (!window['pixiRenderer']?.['shouldRenderLayer']('enemies'))
        for (let _0x4055fa in room['enemies']) {
            room['enemies'][_0x4055fa]['draw']();
        }
    if (window['Perf'])
        window['Perf']['end']('draw_enemies');
    if (window['Perf'])
        window['Perf']['mark']('draw_flowers');
    for (let _0x42ac1d in room['flowers']) {
        room['flowers'][_0x42ac1d]['draw']();
    }
    if (window['Perf'])
        window['Perf']['end']('draw_flowers');
    if (window['toRenderDebug'] === !![]) {
        ctx['lineWidth'] = 1.5 / renderFov;
        for (let _0x188add in room['flowers']) {
            const _0x1afbb6 = room['flowers'][_0x188add];
            if (_0x1afbb6['dead'] === !![])
                continue;
            renderHitbox({
                'x': _0x1afbb6['x'],
                'y': _0x1afbb6['y'],
                'radius': _0x1afbb6['radius'],
                'angle': _0x1afbb6['angle'],
                'rarity': 0x0
            });
            for (let _0x1c786b = 0x0; _0x1c786b < _0x1afbb6['petals']['length']; _0x1c786b++) {
                const _0x405402 = _0x1afbb6['petals'][_0x1c786b];
                if (_0x405402['dead'] === !![])
                    continue;
                toRender({
                    'x': _0x405402['x'],
                    'y': _0x405402['y'],
                    'radius': _0x405402['radius']
                }, window['camera']) && renderHitbox({
                    'x': _0x405402['x'],
                    'y': _0x405402['y'],
                    'radius': _0x405402['radius'],
                    'angle': _0x405402['angle'],
                    'rarity': _0x405402['rarity']
                });
            }
            for (let _0x59a14f = 0x0; _0x59a14f < _0x1afbb6['projectiles']['length']; _0x59a14f++) {
                const _0x248e15 = _0x1afbb6['projectiles'][_0x59a14f];
                if (!_0x248e15 || _0x248e15['dead'] === !![])
                    continue;
                toRender({
                    'x': _0x248e15['x'],
                    'y': _0x248e15['y'],
                    'radius': _0x248e15['radius']
                }, window['camera']) && renderHitbox({
                    'x': _0x248e15['x'],
                    'y': _0x248e15['y'],
                    'radius': _0x248e15['radius'],
                    'angle': _0x248e15['angle'] || 0x0,
                    'rarity': _0x248e15['rarity'] || 0x0
                });
            }
            for (let _0x3077a5 = 0x0; _0x3077a5 < _0x1afbb6['pets']['length']; _0x3077a5++) {
                const _0x522106 = _0x1afbb6['pets'][_0x3077a5];
                if (!_0x522106 || _0x522106['dead'] === !![])
                    continue;
                toRender({
                    'x': _0x522106['x'],
                    'y': _0x522106['y'],
                    'radius': _0x522106['radius']
                }, window['camera']) && renderHitbox({
                    'x': _0x522106['x'],
                    'y': _0x522106['y'],
                    'radius': _0x522106['radius'],
                    'angle': _0x522106['angle'] || 0x0,
                    'rarity': _0x522106['rarity'] || 0x0
                });
            }
        }
        for (let _0x5f2f1b in room['enemies']) {
            const _0x3bac68 = room['enemies'][_0x5f2f1b];
            if (_0x3bac68['dead'] === !![])
                continue;
            toRender({
                'x': _0x3bac68['x'],
                'y': _0x3bac68['y'],
                'radius': _0x3bac68['radius']
            }, window['camera']) && renderHitbox({
                'x': _0x3bac68['x'],
                'y': _0x3bac68['y'],
                'radius': _0x3bac68['radius'],
                'angle': _0x3bac68['angle'] || 0x0,
                'rarity': _0x3bac68['rarity'] || 0x0
            });
        }
    }
    ctx['scale'](0x1 / renderFov, 0x1 / renderFov);
    if (window['camera']['x'] !== 'pass') {
        const _0x174672 = window['cameraShake']?.['offsetX'] || 0x0, _0x250e16 = window['cameraShake']?.['offsetY'] || 0x0;
        ctx['translate'](-(canvas['w'] / 0x2 - camera['x'] * renderFov + _0x174672), -(canvas['h'] / 0x2 - camera['y'] * renderFov + _0x250e16));
    }
    ctx['globalAlpha'] = 0x1;
    room['globalWeb'] > 0x0 && (ctx['beginPath'](), ctx['globalAlpha'] *= 0.25 * (room['globalWeb'] / 0x708), ctx['fillStyle'] = '#2200ff', ctx['rect'](0x0, 0x0, canvas['w'], canvas['h']), ctx['fill'](), ctx['globalAlpha'] /= 0.25 * (room['globalWeb'] / 0x708), ctx['closePath']());
    if (room && room['waveTimer'] != undefined && augmentedBiomes['includes'](room['biome'])) {
        let _0x3ca7ff = ctx['globalAlpha'];
        const _0xf599de = Math['min'](room['waveTimer'] / 0x8ca0, 0x1);
        ctx['globalAlpha'] = 0.4 * _0xf599de, ctx['fillStyle'] = '#000000', ctx['rect'](0x0, 0x0, canvas['w'], canvas['h']), ctx['fill'](), ctx['globalAlpha'] = _0x3ca7ff;
    }
    if (window['Perf'])
        window['Perf']['mark']('uiRender');
    ctx['translate'](canvas['w'] / 0x2, 0x0);
    if (window['Perf'])
        window['Perf']['mark']('enemyBoxes');
    for (let _0x568b0b = 0x0; _0x568b0b < room['enemyBoxes']['length']; _0x568b0b++) {
        let _0x918ec9 = room['enemyBoxes'][_0x568b0b];
        _0x918ec9['update']();
        if (!window['hiEnemyBoxRarities'])
            window['hiEnemyBoxRarities'] = {};
        if (!window['hiEnemyBoxRarities'][_0x918ec9['type']])
            window['hiEnemyBoxRarities'][_0x918ec9['type']] = _0x918ec9['rarity'];
        window['hiEnemyBoxRarities'][_0x918ec9['type']] = Math['max'](window['hiEnemyBoxRarities'][_0x918ec9['type']], _0x918ec9['rarity']);
        if (_0x918ec9['isBoss'])
            ctx['strokeStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2050%,\x2040%)';
        else {
            ctx['strokeStyle'] = Colors['rarities'][_0x918ec9['rarity']]['border'];
            if (window['hqp'] == !![]) {
                if (Colors['rarities'][_0x918ec9['rarity']]['fancy'] !== undefined)
                    ctx['strokeStyle'] = Colors['rarities'][_0x918ec9['rarity']]['fancy']['border'];
            }
        }
        if (_0x918ec9['isBoss'])
            ctx['fillStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2030%,\x2060%)';
        else {
            ctx['fillStyle'] = Colors['rarities'][_0x918ec9['rarity']]['color'];
            if (staticGradients[_0x918ec9['rarity'] + '_'])
                ctx['fillStyle'] = staticGradients[_0x918ec9['rarity'] + '_'];
            if (window['hqp'] == !![]) {
                if (Colors['rarities'][_0x918ec9['rarity']]['fancy'] !== undefined && window['hqp'] == !![]) {
                    let _0x2f5e0d;
                    if (_0x918ec9['rarity'] <= 0x17)
                        _0x2f5e0d = ctx['createLinearGradient'](_0x918ec9['x'] - _0x918ec9['w'] / 0x2, _0x918ec9['y'], _0x918ec9['x'] + _0x918ec9['w'] / 0x2, _0x918ec9['y'] + _0x918ec9['h']);
                    else {
                        if (_0x918ec9['rarity'] <= 0x19)
                            _0x2f5e0d = ctx['createLinearGradient'](_0x918ec9['x'] + _0x918ec9['w'] / 0x2, _0x918ec9['y'] + _0x918ec9['h'], _0x918ec9['x'] - _0x918ec9['w'] / 0x2, _0x918ec9['y']);
                        else
                            _0x918ec9['rarity'] <= 0x1d ? _0x2f5e0d = ctx['createRadialGradient'](_0x918ec9['x'], _0x918ec9['y'] + _0x918ec9['h'] / 0x2, 0x0, _0x918ec9['x'], _0x918ec9['y'] + _0x918ec9['h'] / 0x2, _0x918ec9['w'] / 0x2) : _0x2f5e0d = ctx['createRadialGradient'](_0x918ec9['x'], _0x918ec9['y'] + _0x918ec9['h'] / 0x2, _0x918ec9['w'] / 0x2, _0x918ec9['x'], _0x918ec9['y'] + _0x918ec9['h'] / 0x2, 0x0);
                    }
                    createFancyGradient(_0x2f5e0d, _0x918ec9['rarity']), ctx['fillStyle'] = _0x2f5e0d;
                }
            }
        }
        let _0x26700e = 0.92, _0x460fef = (0x1 - _0x26700e) / 0x2;
        ctx['translate'](_0x918ec9['x'] - _0x918ec9['w'] / 0x2 + _0x918ec9['w'] * _0x460fef, _0x918ec9['y'] + _0x918ec9['h'] * _0x460fef), ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, _0x918ec9['w'] * _0x26700e, _0x918ec9['h'] * _0x26700e, 2.5), ctx['fill'](), ctx['closePath'](), ctx['translate'](-(_0x918ec9['x'] - _0x918ec9['w'] / 0x2 + _0x918ec9['w'] * _0x460fef), -(_0x918ec9['y'] + _0x918ec9['h'] * _0x460fef));
        if (window['hqp'] == !![] && !_0x918ec9['isBoss']) {
            if (Colors['rarities'][_0x918ec9['rarity']]['fancy'] !== undefined && Colors['rarities'][_0x918ec9['rarity']]['fancy']['stars'] !== undefined && window['hqp'] == !![]) {
                ctx['save'](), ctx['translate'](_0x918ec9['x'], _0x918ec9['y'] + _0x918ec9['h'] / 0x2), ctx['scale'](_0x918ec9['w'] / 0x32, _0x918ec9['w'] / 0x32);
                if (!_0x918ec9['stars']) {
                    _0x918ec9['stars'] = [];
                    for (let _0x36565d = 0x0; _0x36565d < Colors['rarities'][_0x918ec9['rarity']]['fancy']['stars']; _0x36565d++) {
                        _0x918ec9['stars']['push']({
                            'x': Math['random']() * 0x32 - 0x19,
                            'y': Math['random']() * 0x32 - 0x19
                        });
                    }
                }
                ctx['fillStyle'] = '#ffffff';
                for (let _0x4eff67 of _0x918ec9['stars']) {
                    _0x4eff67['x'] += 0.1, _0x4eff67['y'] += 0.1;
                    (_0x4eff67['x'] > 0x1e || _0x4eff67['y'] > 0x1e) && (_0x4eff67['x'] = Math['random']() * 0x320 - 0x14 - 0x1e, _0x4eff67['y'] = -0x1e);
                    if (_0x4eff67['x'] < -0x1e || _0x4eff67['x'] > 0x1e || _0x4eff67['y'] < -0x1e || _0x4eff67['y'] > 0x1e)
                        continue;
                    ctx['beginPath']();
                    var _0x56b4c2 = ctx['createRadialGradient'](_0x4eff67['x'], _0x4eff67['y'], 0xf, _0x4eff67['x'], _0x4eff67['y'], 0x0);
                    _0x56b4c2['addColorStop'](0x0, 'transparent'), _0x56b4c2['addColorStop'](0.8, 'rgba(255,255,255,' + (Math['cos'](Date['now']() / 0x258 + _0x4eff67['x'] / 0x1e + _0x4eff67['y'] / 0x1e) + 0x1) * 0.8 + ')'), _0x56b4c2['addColorStop'](0x1, 'white'), ctx['fillStyle'] = _0x56b4c2, ctx['globalAlpha'] = 0.3, ctx['fillRect'](-20.5, -20.5, 0x29, 0x29), ctx['globalAlpha'] = 0x1, _0x4eff67['x'] < 20.5 && _0x4eff67['x'] > -20.5 && _0x4eff67['y'] < 20.5 && _0x4eff67['y'] > -20.5 && (ctx['fillStyle'] = '#fff', ctx['arc'](_0x4eff67['x'], _0x4eff67['y'], 0x1, 0x0, 0x2 * Math['PI']), ctx['fill']()), ctx['closePath']();
                }
                ctx['restore']();
            }
        }
        if (!cachedImages['enemies']['' + _0x918ec9['type']]) {
            const _0x5de226 = new PetalContainer({}, {
                'x': 0x0,
                'y': 0x0,
                'w': 0x1,
                'h': 0x1
            });
            _0x5de226['type'] = _0x918ec9['type'], _0x5de226['generateEnemyImage']();
        }
        ctx['beginPath'](), ctx['roundRect'](_0x918ec9['x'] - _0x918ec9['w'] / 0x2 + _0x918ec9['w'] * _0x460fef, _0x918ec9['y'] + _0x918ec9['h'] * _0x460fef, _0x918ec9['w'] * _0x26700e, _0x918ec9['h'] * _0x26700e, 2.5), ctx['lineWidth'] = 5.25, ctx['stroke'](), ctx['closePath']();
        window['hqp'] == !![] && (ctx['save'](), ctx['beginPath'](), ctx['globalAlpha'] = 0.5, ctx['roundRect'](_0x918ec9['x'] - _0x918ec9['w'] / 0x2 + _0x918ec9['w'] * _0x460fef - 2.625, _0x918ec9['y'] + _0x918ec9['h'] * _0x460fef - 2.625, _0x918ec9['w'] * _0x26700e + 5.25, _0x918ec9['h'] * _0x26700e + 5.25, 0x5), ctx['fill'](), ctx['closePath'](), ctx['restore']());
        if (!_0x918ec9['image'])
            _0x918ec9['image'] = cachedImages['enemies']['' + _0x918ec9['type']];
        if (_0x918ec9['image']) {
            if (!_0x918ec9['imageScale'])
                _0x918ec9['imageScale'] = _0x918ec9['w'] * (82.5 / _0x918ec9['w']) / (_0x918ec9['image']['width'] * 1.15);
            let _0x278a06 = ctx['getTransform']();
            ctx['translate'](_0x918ec9['x'], _0x918ec9['y'] + _0x918ec9['w'] / 0x2), ctx['scale'](_0x918ec9['imageScale'], _0x918ec9['imageScale']), ctx['drawImage'](_0x918ec9['image'], -_0x918ec9['image']['width'] / 0x2, -_0x918ec9['image']['width'] / 0x2), ctx['setTransform'](_0x278a06);
        }
        if (_0x918ec9['isBoss'])
            ctx['strokeStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2050%,\x2040%)';
        else {
            ctx['strokeStyle'] = Colors['rarities'][_0x918ec9['rarity']]['border'];
            if (Colors['rarities'][_0x918ec9['rarity']]['fancy'] !== undefined)
                ctx['strokeStyle'] = Colors['rarities'][_0x918ec9['rarity']]['fancy']['border'];
        }
        _0x918ec9['amount'] > 0x1 && (time - _0x918ec9['lastAmountChangedTime'] < 0x64 && (ctx['globalAlpha'] = smoothstep((time - _0x918ec9['lastAmountChangedTime']) / 0x64)), ctx['lineWidth'] = 0x3, ctx['font'] = '900\x2016px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['translate'](_0x918ec9['x'] + _0x918ec9['w'] / 0x2 - 0x7, _0x918ec9['y'] + 0x12), ctx['rotate'](0.34), ctx['strokeText']('x' + _0x918ec9['amount'], 0x0, 0x0), ctx['fillText']('x' + _0x918ec9['amount'], 0x0, 0x0), ctx['rotate'](-0.34), ctx['translate'](-(_0x918ec9['x'] + _0x918ec9['w'] / 0x2 - 0x7), -(_0x918ec9['y'] + 0x12)), ctx['globalAlpha'] = 0x1);
        if (_0x918ec9['delete'] == !![]) {
            let _0x2d7c6e = ![];
            for (let _0x2ba96f = 0x0; _0x2ba96f < room['enemyBoxes']['length']; _0x2ba96f++) {
                let _0x759d1e = room['enemyBoxes'][_0x2ba96f];
                _0x759d1e['type'] == _0x918ec9['type'] && _0x759d1e['rarity'] != _0x918ec9['rarity'] && (_0x2d7c6e = !![]);
            }
            if (_0x2d7c6e)
                for (let _0x3141d2 = 0x0; _0x3141d2 < room['enemyBoxes']['length']; _0x3141d2++) {
                    let _0x265f4a = room['enemyBoxes'][_0x3141d2];
                    _0x265f4a['type'] == _0x918ec9['type'] && (_0x265f4a['rarity'] > _0x918ec9['rarity'] && (_0x265f4a['targetY'] -= enemyBoxOverlapSize));
                }
            else
                alignEnemyBoxes(_0x918ec9);
            window['hiEnemyBoxRarities'] = {};
        }
    }
    if (window['Perf'])
        window['Perf']['end']('enemyBoxes');
    ctx['translate'](-canvas['w'] / 0x2, 0x0);
    for (let _0x4e07ee of room['enemyBoxes']) {
        if (_0x4e07ee['isBoss'])
            continue;
        const _0x5b2454 = mouse['x'] * canvas['w'] / window['innerWidth'], _0x1532a4 = mouse['y'] * canvas['h'] / window['innerHeight'];
        mouseInBox({
            'x': _0x5b2454,
            'y': _0x1532a4
        }, {
            'x': _0x4e07ee['x'] - _0x4e07ee['w'] / 0x2 + canvas['w'] / 0x2,
            'y': _0x4e07ee['y'],
            'w': _0x4e07ee['w'],
            'h': _0x4e07ee['rarity'] !== window['hiEnemyBoxRarities'][_0x4e07ee['type']] ? _0x4e07ee['w'] / 0x5 : _0x4e07ee['w']
        }) && (!_0x4e07ee['ec'] && (_0x4e07ee['ec'] = mobGallery['generateEnemyPc'](_0x4e07ee['type'], _0x4e07ee['rarity'], 0x1)), !Stats['enemies'][_0x4e07ee['type']] ? calculateStats() : (_0x4e07ee['ec']['isHovered'] = !![], _0x4e07ee['ec']['drawStatsBox'](!![], !![], canvas['w'] / 0x2 + _0x4e07ee['x'], _0x4e07ee['y'] + _0x4e07ee['w'] / 0x2 + 0x3 * _0x4e07ee['w'] / 0x5)));
    }
    room['enemyBoxes'] = room['enemyBoxes']['filter'](_0x45b5db => !_0x45b5db['delete']);
    if (window['Perf'])
        window['Perf']['mark']('waveText');
    let _0x35c8ed = biomeManager !== undefined && biomeManager['getCurrentBiome']() === '1v1' ? 'Fight!' : 'Wave\x20' + room['wave'];
    if (window['currentWeather']) {
        const _0x51f9a1 = window['currentWeather']['displayName'] || window['currentWeather']['name'];
        _0x51f9a1 && (_0x35c8ed += '\x20-\x20' + _0x51f9a1);
    }
    if (augmentedBiomes['includes'](room['biome'])) {
        let _0x359cac = room['waveTimer'] / (0x3c * 0x1e);
        _0x35c8ed += '\x20•\x20Depth:\x20' + formatAmountHighPrecision(_0x359cac * 0x3e8) + 'm', ctx['lineWidth'] = 0x18, ctx['lineCap'] = 'round', ctx['strokeStyle'] = 'black', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke']();
    } else {
        if (bosses['length'] > 0x0) {
            let _0x380936 = 0x0;
            for (let _0x2e5258 of bosses) {
                room['enemies'][_0x2e5258['id']] ? _0x380936 += Math['max'](Math['min'](room['enemies'][_0x2e5258['id']]['render']['hp'], room['enemies'][_0x2e5258['id']]['maxHp']), 0x0) : bosses = bosses['filter'](_0x136b7b => _0x136b7b['id'] !== _0x2e5258['id']);
            }
            let _0x59c2e3 = 0x1, _0x2b27d2 = 0x1, _0x58c9e6 = '';
            const _0x190467 = [
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
            for (const _0x46b262 of _0x190467) {
                if (totalBossHealth < _0x46b262['limit']) {
                    _0x59c2e3 = _0x46b262['first'], _0x2b27d2 = _0x46b262['second'], _0x58c9e6 = _0x46b262['suffix'];
                    break;
                }
            }
            _0x35c8ed += '\x20•\x20' + Math['round'](_0x380936 / _0x59c2e3) / _0x2b27d2 + _0x58c9e6 + '/' + Math['round'](totalBossHealth / _0x59c2e3) / _0x2b27d2 + _0x58c9e6, ctx['lineWidth'] = 0x18, ctx['lineCap'] = 'round', ctx['strokeStyle'] = 'black', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke'](), _0x380936 > 0x0 && (ctx['lineWidth'] = 0x12, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#75dd34', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c + 0x118 * (_0x380936 / totalBossHealth), waveBarY), ctx['stroke']());
        } else {
            let _0x222b3c = waveLengthFunc(room['wave']) * 0x1e;
            room['waveTimer'] < _0x222b3c ? (ctx['lineWidth'] = 0x18, ctx['lineCap'] = 'round', ctx['strokeStyle'] = 'black', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke'](), ctx['lineCap'] = 'round', ctx['lineWidth'] = 0x12 * Math['min'](0x1, room['waveTimer'] / _0x222b3c * 0xa), (biomeManager === undefined || biomeManager['getCurrentBiome']() !== '1v1') && (room['shinyWave'] ? ctx['strokeStyle'] = 'hsl(' + Date['now']() / 0x5 % 0x168 + ',\x2050%,\x2050%)' : ctx['strokeStyle'] = blendColor(Colors['biomes'][room['biome']]['background'], '#ffffff', 0.4), ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c + 0x118 * (room['waveTimer'] / _0x222b3c), waveBarY), ctx['stroke']())) : (ctx['lineWidth'] = 0x18, ctx['lineCap'] = 'round', ctx['strokeStyle'] = 'black', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke'](), (biomeManager === undefined || biomeManager['getCurrentBiome']() !== '1v1') && (ctx['lineWidth'] = 0x12, ctx['strokeStyle'] = blendColor(Colors['biomes'][room['biome']]['background'], '#ffffff', 0.4), ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 + 0x8c, waveBarY), ctx['stroke'](), ctx['lineWidth'] = 15.5 * Math['min'](0x1, (room['waveTimer'] - _0x222b3c) / _0x222b3c * 0xa), ctx['globalAlpha'] = Math['min'](room['waveTimer'] / _0x222b3c / 0x2, 0x1), ctx['strokeStyle'] = 'red', ctx['beginPath'](), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c, waveBarY), ctx['lineTo'](canvas['w'] / 0x2 - 0x8c + 0x118 * Math['min'](0x1, (room['waveTimer'] - _0x222b3c) / _0x222b3c), waveBarY), ctx['stroke']()), ctx['globalAlpha'] = 0x1);
        }
    }
    let _0x2e01f3 = ![];
    window['mania'] && (room['tick'] < window['mania']['timeLimit'] && (_0x2e01f3 = !![]));
    if (_0x2e01f3)
        window['mania']['passed'] == !![] ? (ctx['letterSpacing'] = '1px', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#03fc49', ctx['lineWidth'] = 0x6, ctx['font'] = '900\x2037px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('Mania\x20•\x20' + window['mania']['message'] + '\x20•\x20Passed!', canvas['w'] / 0x2, 0x32), ctx['fillText']('Mania\x20•\x20' + window['mania']['message'] + '\x20•\x20Passed!', canvas['w'] / 0x2, 0x32)) : (ctx['letterSpacing'] = '1px', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#ed5c81', ctx['lineWidth'] = 0x6, ctx['font'] = '900\x2037px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('Mania\x20•\x20' + window['mania']['message'] + '\x20•\x20' + Math['round']((window['mania']['timeLimit'] - room['tick']) / 0x3) / 0xa + 's', canvas['w'] / 0x2, 0x32), ctx['fillText']('Mania\x20•\x20' + window['mania']['message'] + '\x20•\x20' + Math['round']((window['mania']['timeLimit'] - room['tick']) / 0x3) / 0xa + 's', canvas['w'] / 0x2, 0x32));
    else
        window['killTime'] ? room['tick'] < window['killTime']['timeLimit'] && (ctx['letterSpacing'] = '1px', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#e3365f', ctx['lineWidth'] = 0x6, ctx['font'] = '900\x2037px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('Kill\x20the\x20boss\x20within\x20' + Math['floor']((window['killTime']['timeLimit'] - room['tick']) / 0x3) / 0xa + '\x20seconds\x20or\x20die!', canvas['w'] / 0x2, 0x32), ctx['fillText']('Kill\x20the\x20boss\x20within\x20' + Math['floor']((window['killTime']['timeLimit'] - room['tick']) / 0x3) / 0xa + '\x20seconds\x20or\x20die!', canvas['w'] / 0x2, 0x32)) : (ctx['letterSpacing'] = '1px', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = 'white', ctx['lineWidth'] = 0x6, ctx['font'] = '900\x2037px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText'](room['biomeDisplay'], canvas['w'] / 0x2, 0x32), ctx['fillText'](room['biomeDisplay'], canvas['w'] / 0x2, 0x32));
    room['shinyWave'] ? (ctx['fillStyle'] = 'hsl(' + Date['now']() / 0x5 % 0x168 + ',\x2060%,\x2080%)', room['shinyWave'] > 0x1 ? _0x35c8ed = 'Super\x20'['repeat'](room['shinyWave'] - 0x1) + 'Lucky\x20' + _0x35c8ed : _0x35c8ed = 'Lucky\x20' + _0x35c8ed) : ctx['fillStyle'] = 'white';
    ctx['lineWidth'] = 0x3, ctx['letterSpacing'] = '0.5px', ctx['font'] = '900\x2017px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'top', ctx['strokeText'](_0x35c8ed, canvas['w'] / 0x2, waveBarY - 0x8), ctx['fillText'](_0x35c8ed, canvas['w'] / 0x2, waveBarY - 0x8), ctx['letterSpacing'] = '0px', ctx['textBaseline'] = 'middle';
    if (window['Perf'])
        window['Perf']['end']('waveText');
    if (window['Perf'])
        window['Perf']['mark']('squadUI');
    let _0x25d44a = 0x64, _0x57becf = 0x41, _0x30f04c = room['flowers'][window['selfId']], _0x17c62e = _0x25d44a;
    if (!_0x30f04c && spectating)
        _0x17c62e -= 0x5a;
    for (let _0x4a16f5 in room['squadMembers']) {
        let _0x33340a;
        room['flowers'][_0x4a16f5] && !room['flowers'][_0x4a16f5]['dead'] ? _0x33340a = room['flowers'][_0x4a16f5] : (_0x33340a = room['squadMembers'][_0x4a16f5], _0x33340a['render'] = {
            'hp': 0x0,
            'shield': 0x0,
            'beforeStreakHp': 0x0
        }, _0x33340a['maxHp'] = 0x64, _0x33340a['drawFlower'] = Flower['drawDeadFlower']);
        if (_0x4a16f5 == window['selfId'] && spectating !== !![]) {
            let _0x494cef = 0x23;
            renderHpBar({
                'x': _0x57becf + _0x494cef * 0x4,
                'y': _0x25d44a - _0x494cef * 3.6,
                'radius': _0x494cef * 1.8,
                'hp': _0x33340a['render']['hp'],
                'maxHp': _0x33340a['maxHp'],
                'shield': _0x33340a['render']['shield'],
                'beforeStreakHp': _0x33340a['render']['beforeStreakHp'],
                'givenAlpha': 0x1
            }, _0x33340a), _0x33340a['drawFlower'](_0x57becf, _0x25d44a, _0x494cef, _0x33340a['character']), ctx['font'] = '900\x20' + _0x494cef * 0.75 + 'px\x20Ubuntu', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = 'white', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'center', ctx['strokeText'](_0x33340a['name'], _0x57becf + _0x494cef * 0x4, _0x25d44a), ctx['fillText'](_0x33340a['name'], _0x57becf + _0x494cef * 0x4, _0x25d44a), ctx['font'] = '900\x20' + _0x494cef * 0.5 + 'px\x20Ubuntu', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#aaaaaa', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'left', ctx['lineWidth'] = 0x3, ctx['strokeText'](_0x33340a['username'], _0x57becf + _0x494cef, _0x25d44a + _0x494cef * 0.75), ctx['fillText'](_0x33340a['username'], _0x57becf + _0x494cef, _0x25d44a + _0x494cef * 0.75);
            if (_0x33340a['mana']) {
                let _0x16c4d0 = 0x0, _0x1c8723 = 0x0;
                for (let _0x2ce756 in _0x33340a['mana']) {
                    if (_0x33340a['mana'][_0x2ce756] > 0x0)
                        _0x16c4d0++;
                }
                for (let _0x5e01da in _0x33340a['mana']) {
                    if (_0x33340a['mana'][_0x5e01da] > 0x0) {
                        let _0x338305 = (_0x494cef * 6.5 - _0x494cef * 0.5 * _0x16c4d0) / _0x16c4d0;
                        ctx['lineWidth'] = _0x494cef * 0.35, ctx['strokeStyle'] = '#333333', ctx['beginPath'](), ctx['moveTo'](_0x57becf + _0x494cef + _0x1c8723 * _0x338305 + _0x494cef * 0.5 * _0x1c8723, _0x25d44a - _0x494cef * 0.75), ctx['lineTo'](_0x57becf + _0x494cef + (_0x1c8723 + 0x1) * _0x338305 + _0x494cef * 0.5 * _0x1c8723, _0x25d44a - _0x494cef * 0.75), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x494cef * 0.25, ctx['strokeStyle'] = Colors['mana'][_0x5e01da], ctx['beginPath'](), ctx['moveTo'](_0x57becf + _0x494cef + _0x1c8723 * _0x338305 + _0x494cef * 0.5 * _0x1c8723, _0x25d44a - _0x494cef * 0.75), ctx['lineTo'](_0x57becf + _0x494cef + (_0x1c8723 + _0x33340a['mana'][_0x5e01da] / _0x33340a['maxMana'][_0x5e01da]) * _0x338305 + _0x494cef * 0.5 * _0x1c8723, _0x25d44a - _0x494cef * 0.75), ctx['stroke'](), ctx['closePath'](), _0x1c8723++;
                    }
                }
            }
        } else {
            if (room['biome'] !== '1v1') {
                let _0x25ed6f = 0x1e;
                _0x17c62e += 0x5a, renderHpBar({
                    'x': _0x57becf + _0x25ed6f * 0x4,
                    'y': _0x17c62e - _0x25ed6f * 3.6,
                    'radius': _0x25ed6f * 1.8,
                    'hp': _0x33340a['render']['hp'],
                    'maxHp': _0x33340a['maxHp'],
                    'shield': _0x33340a['render']['shield'],
                    'beforeStreakHp': _0x33340a['render']['beforeStreakHp'],
                    'givenAlpha': 0x1
                }, _0x33340a), _0x33340a['drawFlower'](_0x57becf, _0x17c62e, _0x25ed6f, _0x33340a['character']), ctx['font'] = '900\x20' + _0x25ed6f * 0.75 + 'px\x20Ubuntu', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = 'white', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'center', ctx['strokeText'](_0x33340a['name'], _0x57becf + _0x25ed6f * 0x4, _0x17c62e), ctx['fillText'](_0x33340a['name'], _0x57becf + _0x25ed6f * 0x4, _0x17c62e), ctx['font'] = '900\x20' + _0x25ed6f * 0.5 + 'px\x20Ubuntu', ctx['strokeStyle'] = 'black', ctx['fillStyle'] = '#aaaaaa', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'left', ctx['lineWidth'] = 0x3, ctx['strokeText'](_0x33340a['username'], _0x57becf + _0x25ed6f, _0x17c62e + _0x25ed6f * 0.75), ctx['fillText'](_0x33340a['username'], _0x57becf + _0x25ed6f, _0x17c62e + _0x25ed6f * 0.75), ctx['lineWidth'] = 0x1;
                if (_0x30f04c && room['flowers'][_0x4a16f5]) {
                    ctx['lineWidth'] = _0x25ed6f / 0x7;
                    let _0x2d3831 = Math['atan2'](_0x33340a['render']['headY'] - _0x30f04c['render']['headY'], _0x33340a['render']['headX'] - _0x30f04c['render']['headX']);
                    ctx['translate'](_0x57becf, _0x17c62e), ctx['strokeStyle'] = 'black', ctx['fillStyle'] = 'white', ctx['rotate'](_0x2d3831), ctx['beginPath'](), ctx['lineTo'](_0x25ed6f * 1.15, -_0x25ed6f * 0.4), ctx['lineTo'](_0x25ed6f * 1.45, 0x0), ctx['lineTo'](_0x25ed6f * 1.15, _0x25ed6f * 0.4), ctx['lineTo'](_0x25ed6f * 1.15, -_0x25ed6f * 0.4), ctx['stroke'](), ctx['fill'](), ctx['rotate'](-_0x2d3831), ctx['translate'](-_0x57becf, -_0x17c62e);
                }
                if (_0x33340a['mana']) {
                    let _0x7819d4 = 0x0, _0x57fe71 = 0x0;
                    for (let _0x264f97 in _0x33340a['mana']) {
                        if (_0x33340a['mana'][_0x264f97] > 0x0)
                            _0x7819d4++;
                    }
                    for (let _0x514e31 in _0x33340a['mana']) {
                        if (_0x33340a['mana'][_0x514e31] > 0x0) {
                            let _0x5ef1b1 = (_0x25ed6f * 6.5 - _0x25ed6f * 0.5 * _0x7819d4) / _0x7819d4;
                            ctx['lineWidth'] = _0x25ed6f * 0.35, ctx['strokeStyle'] = '#333333', ctx['beginPath'](), ctx['moveTo'](_0x57becf + _0x25ed6f + _0x57fe71 * _0x5ef1b1 + _0x25ed6f * 0.5 * _0x57fe71, _0x17c62e - _0x25ed6f * 0.75), ctx['lineTo'](_0x57becf + _0x25ed6f + (_0x57fe71 + 0x1) * _0x5ef1b1 + _0x25ed6f * 0.5 * _0x57fe71, _0x17c62e - _0x25ed6f * 0.75), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x25ed6f * 0.25, ctx['strokeStyle'] = Colors['mana'][_0x514e31], ctx['beginPath'](), ctx['moveTo'](_0x57becf + _0x25ed6f + _0x57fe71 * _0x5ef1b1 + _0x25ed6f * 0.5 * _0x57fe71, _0x17c62e - _0x25ed6f * 0.75), ctx['lineTo'](_0x57becf + _0x25ed6f + (_0x57fe71 + _0x33340a['mana'][_0x514e31] / _0x33340a['maxMana'][_0x514e31]) * _0x5ef1b1 + _0x25ed6f * 0.5 * _0x57fe71, _0x17c62e - _0x25ed6f * 0.75), ctx['stroke'](), ctx['closePath'](), _0x57fe71++;
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
    globalInventory['fadingOut'] === !![] && globalInventory['draw']();
    mobGallery['fadingOut'] === !![] && mobGallery['draw']();
    window['me'] && window['me']['isMob'] && typeof mobSkillUI !== 'undefined' ? mobSkillUI['render'](ctx) : inventory['draw']();
    window['mobile'] && mobileControls['draw']();
    levelBar['draw']();
    if (window['Perf'])
        window['Perf']['end']('inventoryUI');
    if (window['Perf'])
        window['Perf']['mark']('deadMenuAndLeaderboard');
    if (window['isDead'] === !![])
        window['deadMenuTime'] += _0x43f3f4, deadMenu['draw']();
    else {
        window['deadMenuTime'] = 0x0;
        if (room['biome'] == '1v1') {
            ctx['translate'](canvas['w'] - 0x140, 0x14), ctx['fillStyle'] = '#333333', ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = 0xa, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, 0x12c, 0x1ae, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = '#39b54a', ctx['strokeStyle'] = '#2e933c', ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, 0x12c, 0x32, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2025px\x20\x27Ubuntu\x27', ctx['lineWidth'] = 0x4, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText']('Leaderboard', 0x96, 0x32 - 0x17), ctx['fillText']('Leaderboard', 0x96, 0x32 - 0x17);
            for (let _0x27b301 = 0x1; _0x27b301 <= 0xb; _0x27b301++) {
                ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = 0x19, ctx['beginPath'](), ctx['moveTo'](0x19, _0x27b301 * 32.5 + 0x2d), ctx['lineTo'](0x113, _0x27b301 * 32.5 + 0x2d), ctx['stroke'](), ctx['closePath']();
            }
            let _0x22e72f = 0x0, _0x26b075 = 0x0, _0x4a5e23 = [];
            for (let _0x3454f9 in room['flowers']) {
                flower = room['flowers'][_0x3454f9], _0x4a5e23['push']({
                    'username': flower['username'],
                    'score': flower['score']
                });
            }
            _0x4a5e23['sort']((_0x78dfb, _0x1ecfe7) => {
                if (_0x78dfb['score'] > _0x1ecfe7['score'])
                    return -0x1;
                if (_0x78dfb['score'] < _0x1ecfe7['score'])
                    return 0x1;
            }), _0x4a5e23 = _0x4a5e23['slice'](0x0, 0xb);
            for (let _0x4036da of _0x4a5e23) {
                _0x26b075++;
                if (_0x4036da['score'] > _0x22e72f)
                    _0x22e72f = _0x4036da['score'];
                ctx['strokeStyle'] = '#39b54a', _0x4036da['score'] == _0x22e72f && (ctx['strokeStyle'] = '#dbd74b'), _0x4036da['username'] == room['flowers'][window['selfId']]['username'] && (ctx['strokeStyle'] = '#5a9fdb'), _0x4036da['username'] == 'ruby' && (ctx['strokeStyle'] = '#fa87b7'), _0x4036da['username'] == 'haha0201' && (ctx['strokeStyle'] = 'hsl(' + (0xec + Math['sin'](Date['now']() / 0x3e8) * 0x44) + ',\x2050%,\x2060%)'), _0x4036da['username'] == 'devdevd' && (ctx['strokeStyle'] = 'hsl(' + (0x82 + Math['sin'](Date['now']() / 0x3e8) * 0x6e) + ',\x2090%,\x2060%)'), ctx['lineWidth'] = 17.5, ctx['beginPath'](), ctx['moveTo'](0x19, _0x26b075 * 32.5 + 0x2d), ctx['lineTo'](0x19 + _0x4036da['score'] / _0x22e72f * 0xfa, _0x26b075 * 32.5 + 0x2d), ctx['stroke'](), ctx['closePath'](), ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2020px\x20\x27Ubuntu\x27', ctx['lineWidth'] = 0x4, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x4036da['username'] + '\x20-\x20' + formatAmountHighPrecision(_0x4036da['score']), 0x96, _0x26b075 * 32.5 + 0x2d), ctx['fillText'](_0x4036da['username'] + '\x20-\x20' + formatAmountHighPrecision(_0x4036da['score']), 0x96, _0x26b075 * 32.5 + 0x2d);
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
    let _0x2c5c7d = ![];
    mouse['canvasX'] > 0xa && 0xa + 0x2d > mouse['canvasX'] && mouse['canvasY'] > 0xa && 0xa + 0x2d > mouse['canvasY'] ? _0x2c5c7d = !![] : _0x2c5c7d = ![];
    ctx['strokeStyle'] = '#90464b';
    _0x2c5c7d === !![] ? ctx['fillStyle'] = '#c16666' : ctx['fillStyle'] = '#c1565e';
    ctx['lineWidth'] = 0x5, ctx['beginPath'](), ctx['roundRect'](0xa, 0xa, 0x2d, 0x2d, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 7.5, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#cccccc', ctx['beginPath'](), ctx['moveTo'](22.5, 22.5), ctx['lineTo'](42.5, 42.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](42.5, 22.5), ctx['lineTo'](22.5, 42.5), ctx['stroke'](), ctx['closePath']();
    _0x2c5c7d === !![] && mouse['lastDownData']['x'] > 0xa && 0xa + 0x2d > mouse['lastDownData']['x'] && mouse['lastDownData']['y'] > 0xa && 0xa + 0x2d > mouse['lastDownData']['y'] && mouse['lastDownData']['time'] > 0x64 && ((!window['lastLeaveGameTime'] || time - window['lastLeaveGameTime'] > 0x1f4) && (window['lastLeaveGameTime'] = time, send({
        'leaveGame': !![],
        'real': !![]
    }), petalReloadData = {}, petalHpData = {}, _0x2c5c7d = ![]));
    if (window['Perf'])
        window['Perf']['end']('exitButton');
    if (window['Perf'])
        window['Perf']['mark']('fullscreenButton');
    let _0x3d89d8 = ![];
    const _0xa7210f = 0x41, _0x1063a0 = 0xa, _0x5832ec = 0x23;
    window['mobile'] && (mouse['canvasX'] > _0xa7210f && _0xa7210f + _0x5832ec > mouse['canvasX'] && mouse['canvasY'] > _0x1063a0 && _0x1063a0 + _0x5832ec > mouse['canvasY'] && (_0x3d89d8 = !![]), ctx['strokeStyle'] = '#6a8a6a', _0x3d89d8 === !![] ? ctx['fillStyle'] = '#9ababa' : ctx['fillStyle'] = '#8aaa8a', ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['roundRect'](_0xa7210f, _0x1063a0, _0x5832ec, _0x5832ec, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0x3, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#ffffff', ctx['font'] = '900\x2020px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = '#ffffff', ctx['fillText']('⛶', _0xa7210f + _0x5832ec / 0x2, _0x1063a0 + _0x5832ec / 0x2 + 0x2), _0x3d89d8 === !![] && mouse['lastDownData']['x'] > _0xa7210f && _0xa7210f + _0x5832ec > mouse['lastDownData']['x'] && mouse['lastDownData']['y'] > _0x1063a0 && _0x1063a0 + _0x5832ec > mouse['lastDownData']['y'] && mouse['lastDownData']['time'] > 0x64 && ((!window['lastFullscreenTime'] || time - window['lastFullscreenTime'] > 0x12c) && (window['lastFullscreenTime'] = time, !document['fullscreenElement'] ? document['documentElement']['requestFullscreen']()['catch'](_0x28cfc0 => {
        console['log']('全屏错误:\x20' + _0x28cfc0['message']);
    }) : document['exitFullscreen']())));
    if (window['Perf'])
        window['Perf']['end']('fullscreenButton');
    if (window['Perf'])
        window['Perf']['mark']('weatherAndEffects');
    typeof weatherUI !== 'undefined' && weatherUI['renderEffects'](ctx, canvas, time);
    typeof weatherUI !== 'undefined' && weatherUI['renderLightningStrike'](ctx, canvas, time);
    if (window['scorchedUltimateEffects'] && window['scorchedUltimateEffects']['length'] > 0x0) {
        const _0x4ca538 = performance['now']();
        window['scorchedUltimateEffects'] = window['scorchedUltimateEffects']['filter'](_0x57660b => _0x4ca538 - _0x57660b['startTime'] < _0x57660b['duration']);
        for (const _0x1202ea of window['scorchedUltimateEffects']) {
            const _0x1736bd = room && room['flowers'] && room['flowers'][_0x1202ea['playerId']];
            if (!_0x1736bd)
                continue;
            const _0x545f56 = _0x1736bd['headX'], _0x1ba375 = _0x1736bd['headY'];
            if (!isFinite(_0x545f56) || !isFinite(_0x1ba375))
                continue;
            if (!window['camera'])
                continue;
            const _0x5db575 = (_0x545f56 - window['camera']['x']) * renderFov + canvas['w'] / 0x2, _0x32a1bd = (_0x1ba375 - window['camera']['y']) * renderFov + canvas['h'] / 0x2, _0x58fa93 = time - _0x1202ea['startTime'], _0x21f3ac = _0x58fa93 / _0x1202ea['duration'], _0x17991c = 0x1 - _0x21f3ac, _0x99809e = 0x3;
            for (let _0x136eb9 = 0x0; _0x136eb9 < _0x99809e; _0x136eb9++) {
                const _0x4a5406 = (_0x21f3ac + _0x136eb9 * 0.2) % 0x1, _0x2905d6 = _0x4a5406 * _0x1202ea['maxRadius'] * renderFov, _0x234fb2 = (0x1 - _0x4a5406) * _0x17991c * 0.6;
                ctx['beginPath'](), ctx['arc'](_0x5db575, _0x32a1bd, _0x2905d6, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = 'rgba(255,\x20150,\x2050,\x20' + _0x234fb2 + ')', ctx['lineWidth'] = 0x8 * renderFov, ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x5db575, _0x32a1bd, _0x2905d6 * 0.85, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = 'rgba(255,\x20200,\x20100,\x20' + _0x234fb2 * 0.8 + ')', ctx['lineWidth'] = 0x4 * renderFov, ctx['stroke'](), ctx['closePath']();
            }
            const _0x3a206b = 0x32 * renderFov * (0x1 - _0x21f3ac);
            if (_0x3a206b > 0x0) {
                const _0x330d6a = ctx['createRadialGradient'](_0x5db575, _0x32a1bd, 0x0, _0x5db575, _0x32a1bd, _0x3a206b);
                _0x330d6a['addColorStop'](0x0, 'rgba(255,\x20180,\x2050,\x20' + _0x17991c * 0.5 + ')'), _0x330d6a['addColorStop'](0x1, 'rgba(255,\x20150,\x2050,\x200)'), ctx['fillStyle'] = _0x330d6a, ctx['beginPath'](), ctx['arc'](_0x5db575, _0x32a1bd, _0x3a206b, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
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
    x: _0x4e865a,
    y: _0x2c3bc1,
    radius: _0x1775da,
    angle: _0x561d25,
    rarity: rarity = 0x0
}) {
    ctx['strokeStyle'] = Colors['rarities'][rarity]['color'], ctx['lineWidth'] = 0.75 / renderFov, ctx['beginPath'](), ctx['arc'](_0x4e865a, _0x2c3bc1, _0x1775da, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x4e865a, _0x2c3bc1), ctx['lineTo'](_0x4e865a + _0x1775da * Math['cos'](_0x561d25), _0x2c3bc1 + _0x1775da * Math['sin'](_0x561d25)), ctx['stroke'](), ctx['closePath']();
}
let renderGame = function (_0x5e9a37) {
    window['Perf'] ? (window['Perf']['mark']('renderGame'), _renderGame(_0x5e9a37), window['Perf']['end']('renderGame')) : _renderGame(_0x5e9a37);
};