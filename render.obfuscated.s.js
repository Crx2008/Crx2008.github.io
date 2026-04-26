let canvas = document['getElementById']('canvas'), ctx = canvas['getContext']('2d');
const tileSize = 0x32, menu = document['querySelector']('.menu'), fullscreen = {
        'ratio': 0x9 / 0x10,
        'zoom': 0x4b0
    };
let renderScale = 0x1;
function resize() {
    const _0x18cac7 = window['devicePixelRatio'];
    canvas['style']['width'] = Math['ceil'](window['innerWidth']) + 'px', canvas['style']['height'] = Math['ceil'](window['innerHeight']) + 'px', canvas['width'] = Math['ceil'](window['innerWidth']) * _0x18cac7, canvas['height'] = Math['ceil'](window['innerHeight']) * _0x18cac7, canvas['zoom'] = Math['max'](0.1, Math['round'](Math['max'](canvas['height'], canvas['width'] * fullscreen['ratio']) / fullscreen['zoom'] * renderScale * 0x64) / 0x64), canvas['w'] = canvas['width'] / canvas['zoom'], canvas['h'] = canvas['height'] / canvas['zoom'], ctx['scale'](canvas['zoom'], canvas['zoom']), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', menu['style']['width'] = Math['ceil'](window['innerWidth']) / canvas['zoom'] * _0x18cac7 / 1.65 + 'px', menu['style']['height'] = Math['ceil'](window['innerHeight']) / canvas['zoom'] * _0x18cac7 / 1.65 + 'px', menu['style']['transform'] = 'scale(' + canvas['zoom'] / _0x18cac7 * 1.65 + ')', menu['style']['transformOrigin'] = '0px\x200px';
    if (window['state'] === 'account') {
        const _0x18acd6 = document['querySelector']('.login-menu');
        _0x18acd6['style']['width'] = Math['ceil'](window['innerWidth']) / canvas['zoom'] * _0x18cac7 / 1.65 + 'px', _0x18acd6['style']['height'] = Math['ceil'](window['innerHeight']) / canvas['zoom'] * _0x18cac7 / 1.65 + 'px', _0x18acd6['style']['transform'] = 'scale(' + canvas['zoom'] / _0x18cac7 * 1.65 + ')', _0x18acd6['style']['transformOrigin'] = '0px\x200px';
    }
    try {
        if (menuInventory)
            menuInventory['positionPetalSlots']();
    } catch (_0x42293d) {
    }
    try {
        if (inventory)
            inventory['positionPetalSlots']();
    } catch (_0x224d27) {
    }
    if (typeof levelBar !== 'undefined')
        levelBar['calculateDimensions']();
    if (typeof biomeManager !== 'undefined')
        biomeManager['updateArrowDimensions']();
    if (typeof globalInventory !== 'undefined')
        globalInventory['resizeScroll']();
    if (window['is3D'] === !![])
        window['resize3D']();
    window['pixiApp']?.['initialized'] && window['pixiApp']['resize'](canvas['width'], canvas['height']), window['pixiRenderer']?.['enabled'] && window['pixiRenderer']['resize'](canvas['zoom']);
}
window['addEventListener']('resize', function () {
    resize();
});
const menuEnemyIncrementRadii = [
    3.6,
    4.8,
    6.6,
    7.2,
    0x8,
    0xc,
    0x12
];
let menuPlayer1, menuPlayer2, menuPlayersInitialized = ![], lastTime = performance['now']();
dt = 0x0;
let time = performance['now']();
window['fps'] = 0x0, window['interpolateCalls'] = 0x0, window['framesRendered'] = 0x0, window['lastFramesRenderedResetTime'] = performance['now'](), window['clicks'] = 0x0, window['clickLoc'] = {}, window['activeClicks'] = [];
function render() {
    draw();
    if (window['flowrMod']) {
        if (window['flowrMod']['rarities'])
            window['flowrMod']['rarities'] = Colors['rarities'];
    }
    requestAnimationFrame(render);
}
function draw() {
    if (window['Perf'])
        window['Perf']['mark']('draw');
    if (window['Perf'])
        window['Perf']['mark']('FullFrame');
    time = performance['now'](), dt = time - lastTime, lastTime = time;
    dt > 0x3e8 && (dt = 0x0);
    if (window['state'] === 'account') {
        if (window['Perf'])
            window['Perf']['mark']('renderAccountMenu');
        renderAccountMenu(dt);
        if (window['Perf'])
            window['Perf']['end']('renderAccountMenu');
    } else {
        if (window['state'] === 'menu') {
            if (window['Perf'])
                window['Perf']['mark']('renderMenu');
            renderMenu(dt);
            if (window['Perf'])
                window['Perf']['end']('renderMenu');
        } else {
            if (window['Perf'])
                window['Perf']['mark']('renderGame_call');
            renderGame(dt);
            if (window['Perf'])
                window['Perf']['end']('renderGame_call');
            window['pixiRenderer']?.['enabled'] && window['pixiApp']?.['initialized'] && window['pixiRenderer']['updateLayers']();
            if (window['state'] === 'disconnected' && window['connectOtherServerId'] == undefined) {
                if (window['Perf'])
                    window['Perf']['mark']('renderDisconnectedText');
                renderDisconnectedText(dt);
                if (window['Perf'])
                    window['Perf']['end']('renderDisconnectedText');
            }
        }
    }
    if (window['toRenderDebug'] === !![]) {
        window['framesRendered']++;
        if (window['framesRendered'] > 0xa) {
            const _0x5565ee = performance['now']();
            window['fps'] = Math['floor'](window['framesRendered'] / (_0x5565ee - window['lastFramesRenderedResetTime']) * 0x3e8), window['lastFramesRenderedResetTime'] = _0x5565ee, window['framesRendered'] = 0x0;
        }
        renderDebug();
    }
    window['pixiRenderer']?.['enabled'] && window['pixiApp']?.['initialized'] && window['pixiApp']['app']['render'](), window['Perf'] && (window['Perf']['end']('draw'), window['Perf']['end']('FullFrame'));
}
const globalInventory = new GlobalInventory(), specialGlobalInventory = new SpecialGlobalInventory();
window['specialGlobalInventory'] = specialGlobalInventory;
let maxRarityObtained = 0x0;
const menuInventory = new Inventory(savedSlotAmount);
menuInventory['initChangePetalsQueue']();
let squadUI = new SquadUI();
const craftingMenu = new CraftingMenu();
let connectingTextAnimationCompletion = 0x1, particles = [];
function renderMenu(_0x10c194) {
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_biomeData');
    const {
        ratio: _0x5b441c,
        last: _0x430dac,
        current: _0x373084,
        direction: _0x1df653
    } = biomeManager['getCurrentBiomeData']();
    if (window['Perf'])
        window['Perf']['end']('renderMenu_biomeData');
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_background');
    if (_0x5b441c !== 0x1) {
        _0x1df653 === 'right' ? (ctx['fillStyle'] = Colors['biomes'][_0x430dac]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x430dac]['grid']) : (ctx['fillStyle'] = Colors['biomes'][_0x373084]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x373084]['grid']);
        renderBg(), ctx['save'](), ctx['beginPath']();
        _0x1df653 === 'right' ? ctx['rect'](0x0, 0x0, smoothstep(smoothstep(_0x5b441c)) * canvas['w'], canvas['h']) : ctx['rect'](0x0, 0x0, (0x1 - smoothstep(smoothstep(_0x5b441c))) * canvas['w'], canvas['h']);
        ctx['clip'](), ctx['closePath']();
        _0x1df653 === 'right' ? (ctx['fillStyle'] = Colors['biomes'][_0x373084]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x373084]['grid']) : (ctx['fillStyle'] = Colors['biomes'][_0x430dac]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x430dac]['grid']);
        renderBg(), ctx['restore']();
        for (let _0x54eb29 = 0x0; _0x54eb29 < menuEnemies['length']; _0x54eb29++) {
            if (menuEnemies[_0x54eb29]['updatedBiome'] === undefined)
                continue;
            if (_0x1df653 === 'right' && menuEnemies[_0x54eb29]['render']['x'] <= smoothstep(smoothstep(_0x5b441c)) * canvas['w'] || _0x1df653 === 'left' && menuEnemies[_0x54eb29]['render']['x'] >= (0x1 - smoothstep(smoothstep(_0x5b441c))) * canvas['w']) {
                delete menuEnemies[_0x54eb29]['updatedBiome'];
                const _0x28b173 = biomeEnemyMap[_0x373084] ?? [];
                menuEnemies[_0x54eb29]['type'] = _0x28b173[Math['floor'](Math['random']() * _0x28b173['length'])], menuEnemies[_0x54eb29] = new Enemy(menuEnemies[_0x54eb29]);
            }
        }
    } else
        ctx['fillStyle'] = Colors['biomes'][_0x373084]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x373084]['grid'], renderBg();
    if (window['Perf'])
        window['Perf']['end']('renderMenu_background');
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_biomeManager');
    biomeManager['draw']();
    if (window['Perf'])
        window['Perf']['end']('renderMenu_biomeManager');
    !menuPlayersInitialized && canvas['w'] > 0x0 && canvas['h'] > 0x0 && (initMenuPlayers(), menuPlayersInitialized = !![]);
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_players');
    menuPlayersInitialized && menuPlayer1 && menuPlayer2 && (updateMenuPlayers(_0x10c194), renderMenuPlayers());
    if (window['Perf'])
        window['Perf']['end']('renderMenu_players');
    if (window['Perf'])
        window['Perf']['mark']('renderMenuEnemies_call');
    renderMenuEnemies();
    if (window['Perf'])
        window['Perf']['end']('renderMenuEnemies_call');
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_settings');
    settingsMenu['draw']();
    if (window['Perf'])
        window['Perf']['end']('renderMenu_settings');
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_connectingText');
    (window['connected'] === ![] || time - window['connectedTime'] < 0x320) && (window['connected'] === ![] ? connectingTextAnimationCompletion = 0x1 : connectingTextAnimationCompletion = 0x1 - easeOutCubic((time - window['connectedTime']) / 0x320), ctx['globalAlpha'] = 0x1, ctx['font'] = '900\x2042px\x20\x27Ubuntu\x27', ctx['fillStyle'] = '#f0f0f0', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x5, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('Connecting...', canvas['w'] / 0x2, canvas['h'] * 0.5 * connectingTextAnimationCompletion - canvas['h'] * 0.03), ctx['fillText']('Connecting...', canvas['w'] / 0x2, canvas['h'] * 0.5 * connectingTextAnimationCompletion - canvas['h'] * 0.03));
    if (window['Perf'])
        window['Perf']['end']('renderMenu_connectingText');
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_titleText');
    let _0x5184fb = ![];
    if (time - window['connectedTime'] < 0x3e8) {
        _0x5184fb = !![];
        const _0x3a4db2 = easeOutCubic(smoothstep((time - window['connectedTime']) / 0x3e8));
        var _0x544ff2 = 0x0 * _0x3a4db2 + (0x1 - _0x3a4db2) * (-canvas['h'] / 0x2 - 0x8c);
        ctx['translate'](0x0, _0x544ff2);
    }
    ctx['font'] = '900\x2091px\x20Ubuntu', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['letterSpacing'] = '-1px', ctx['lineWidth'] = 0xa, ctx['strokeStyle'] = 'black', ctx['strokeText']('thoita.com', canvas['w'] / 0x2, canvas['h'] / 0x2 - 0x8c), ctx['fillStyle'] = 'white', ctx['fillText']('thoita.com', canvas['w'] / 0x2, canvas['h'] / 0x2 - 0x8c);
    let _0x1b8451 = canvas['w'] / 0x2 - ctx['measureText']('thoita.com')['width'] / 0x2 + ctx['measureText']('thoita')['width'] + ctx['measureText']('.')['width'] / 0x2;
    ctx['strokeStyle'] = 'black', ctx['strokeText']('.', _0x1b8451, canvas['h'] / 0x2 - 0x8c);
    if (window['clicks'] > 0x0)
        ctx['fillStyle'] = 'hsl(' + window['clicks'] * 0xa % 0x168 + '\x20100\x2050)';
    else
        ctx['fillStyle'] = 'white';
    ctx['fillText']('.', _0x1b8451, canvas['h'] / 0x2 - 0x8c), window['clickLoc'] = {
        'x': _0x1b8451,
        'y': canvas['h'] / 0x2 - 0x78
    }, window['activeClicks'] = window['activeClicks']['filter'](_0x5b29c4 => _0x5b29c4['t'] <= 0x1f4), ctx['save'](), ctx['translate'](window['clickLoc']['x'], window['clickLoc']['y']);
    let _0x1a2eb1 = 0x1 + window['clicks'] ** 0.5 / 0xa;
    ctx['scale'](_0x1a2eb1, _0x1a2eb1);
    for (let _0x5ab3a2 = 0x0; _0x5ab3a2 < window['activeClicks']['length']; _0x5ab3a2++) {
        window['activeClicks'][_0x5ab3a2]['t'] += _0x10c194, window['activeClicks'][_0x5ab3a2]['x'] += window['activeClicks'][_0x5ab3a2]['xv'] * _0x10c194, window['activeClicks'][_0x5ab3a2]['y'] += window['activeClicks'][_0x5ab3a2]['yv'] * _0x10c194, window['activeClicks'][_0x5ab3a2]['yv'] += 0.001 * _0x10c194, renderClickCounter({
            'radius': 0x32,
            'timeAlive': window['activeClicks'][_0x5ab3a2]['t'],
            'totalDamage': window['activeClicks'][_0x5ab3a2]['n'],
            'x': window['activeClicks'][_0x5ab3a2]['x'],
            'y': window['activeClicks'][_0x5ab3a2]['y']
        });
    }
    ctx['restore'](), ctx['letterSpacing'] = '0px';
    if (window['Perf'])
        window['Perf']['end']('renderMenu_titleText');
    _0x5184fb === !![] && ctx['translate'](0x0, -_0x544ff2);
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_levelBar');
    levelBar['draw']();
    if (window['Perf'])
        window['Perf']['end']('renderMenu_levelBar');
    if (window['Perf'])
        window['Perf']['mark']('renderMenu_inventory');
    if (window['connected'] === !![]) {
        const _0x52391f = menuInventory['topPetalSlots'][0x0]['size'], _0x4fc5b2 = menuInventory['bottomPetalSlots'][0x0]['size'], _0x36eb4c = _0x52391f + _0x52391f * paddingRatio + _0x4fc5b2 + _0x4fc5b2 * paddingRatio - 0x2, _0x41e4a9 = -canvas['h'] / 0x2 + _0x36eb4c * 1.5;
        if (time - window['connectedTime'] < 0x3e8) {
            const _0x4d0709 = easeOutCubic(smoothstep((time - window['connectedTime']) / 0x3e8)), _0x3b99fb = _0x41e4a9 * _0x4d0709 + (0x1 - _0x4d0709) * _0x36eb4c;
            menuInventory['translateY'] = _0x3b99fb, menuInventory['draw'](_0x4d0709);
        } else
            window['squadUIEnabled'] === !![] ? (!window['ready'] && (menuInventory['translateY'] = _0x41e4a9 + squadUI['h'] * 0.8), menuInventory['draw'](), squadUI['render'](_0x10c194)) : (menuInventory['translateY'] = _0x41e4a9, menuInventory['draw']());
        draggingPetalContainer !== null && draggingPetalContainer['draw']();
    }
    craftingMenu['drawIcon'](), specialGlobalInventory['drawIcon'](), globalInventory['drawIcon'](), mobGallery['drawIcon'](), craftingMenu['draw'](), specialGlobalInventory['draw'](), globalInventory['draw'](), mobGallery['draw'](), shop['draw']();
    window['characterSelector'] !== undefined && window['characterSelector']['draw']();
    streakMenu['draw']();
    if (window['Perf'])
        window['Perf']['end']('renderMenu_inventory');
}
function renderBg() {
    ctx['fillRect'](0x0, 0x0, canvas['w'], canvas['h']);
    if (window['noGrid'] !== !![]) {
        const _0x2c8300 = -time / 0x14 % 0x32;
        ctx['lineWidth'] = 0x2, ctx['globalAlpha'] = 0.6, ctx['beginPath']();
        for (let _0x59bc81 = _0x2c8300 - ctx['lineWidth']; _0x59bc81 <= canvas['w'] + ctx['lineWidth']; _0x59bc81 += tileSize) {
            ctx['moveTo'](_0x59bc81, 0x0), ctx['lineTo'](_0x59bc81, canvas['h']);
        }
        for (let _0x12fd56 = -_0x2c8300 - ctx['lineWidth']; _0x12fd56 <= canvas['h'] + ctx['lineWidth']; _0x12fd56 += tileSize) {
            ctx['moveTo'](0x0, _0x12fd56), ctx['lineTo'](canvas['w'], _0x12fd56);
        }
        ctx['stroke'](), ctx['closePath']();
    }
    ctx['globalAlpha'] = 0x1;
}
function easeOutCubic(_0x1222cf) {
    return 0x1 - Math['pow'](0x1 - _0x1222cf, 0x3);
}
function renderAccountMenu(_0x350297) {
    ctx['fillStyle'] = '#1ea761', ctx['fillRect'](0x0, 0x0, canvas['w'], canvas['h']);
    if (window['noGrid'] !== !![]) {
        const _0x3e3c8c = -time / 0x14 % 0x32;
        ctx['strokeStyle'] = '#1c8c54', ctx['lineWidth'] = 0x2, ctx['globalAlpha'] = 0.6;
        for (let _0x4f4ded = _0x3e3c8c - ctx['lineWidth']; _0x4f4ded <= canvas['w'] + ctx['lineWidth']; _0x4f4ded += tileSize) {
            ctx['beginPath'](), ctx['moveTo'](_0x4f4ded, 0x0), ctx['lineTo'](_0x4f4ded, canvas['h']), ctx['stroke'](), ctx['closePath']();
        }
        for (let _0x1de0c2 = -_0x3e3c8c - ctx['lineWidth']; _0x1de0c2 <= canvas['h'] + ctx['lineWidth']; _0x1de0c2 += tileSize) {
            ctx['beginPath'](), ctx['moveTo'](0x0, _0x1de0c2), ctx['lineTo'](canvas['w'], _0x1de0c2), ctx['stroke'](), ctx['closePath']();
        }
    }
    window['loginMessage'] !== undefined && (ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['font'] = '900\x2028px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'top', ctx['lineWidth'] = 0x5, ctx['globalAlpha'] = 0x1, performance['now']() - window['lastLoginMessageChangeTime'] < 0x1f4 && (ctx['globalAlpha'] = (performance['now']() - window['lastLoginMessageChangeTime']) / 0x1f4), ctx['strokeText'](window['loginMessage'], canvas['w'] / 0x2, canvas['h'] - 0x28), ctx['fillText'](window['loginMessage'], canvas['w'] / 0x2, canvas['h'] - 0x28), ctx['globalAlpha'] = 0x1, ctx['textBaseline'] = 'middle');
}
const enemyTypes = Object['keys'](enemyRenderMap)['filter'](_0x5b72f8 => _0x5b72f8 !== 'Square' && _0x5b72f8 !== 'default' && noRenderingUi['includes'](_0x5b72f8) === ![]), biomeEnemyMap = {
        'garden': [
            'Hornet',
            'Bee',
            'Centipede',
            'Evil\x20Centipede',
            'Ant\x20Burrow',
            'Dandelion',
            'DandelionMissile',
            'Ladybug',
            'Rock',
            'Spider',
            'Worker\x20Ant',
            'Baby\x20Ant',
            'Soldier\x20Ant',
            'Dark\x20Ladybug',
            'Queen\x20Ant',
            'Missile',
            'DandelionMissile',
            'Tree',
            'Root'
        ],
        'desert': [
            'Scorpion',
            'Fire\x20Ant\x20Burrow',
            'Beetle',
            'Desert\x20Centipede',
            'Shiny\x20Ladybug',
            'Soldier\x20Fire\x20Ant',
            'Sandstorm',
            'Cactus',
            'Locust',
            'Queen\x20Fire\x20Ant',
            'Desert\x20Moth',
            'Sandstone',
            'Tarantula',
            'Moonlit\x20Frog',
            'Sunlit\x20Frog',
            'ScorpionMissile',
            'Worker\x20Fire\x20Ant',
            'Baby\x20Fire\x20Ant'
        ],
        'ocean': [
            'Bubble',
            'Shell',
            'Jellyfish',
            'Starfish',
            'Leech',
            'Crab',
            'Sponge',
            'Sea\x20Urchin',
            'UrchinMissile',
            'Sea\x20Floor\x20Burrow',
            'Coral',
            'Electric\x20Eel'
        ]
    }, rareBiomeEnemyMap = {
        'garden': ['Soil'],
        'desert': [
            'FireMissile',
            'Shiny\x20Ant\x20Burrow',
            'Shiny\x20Beetle',
            'Shiny\x20Cactus'
        ],
        'ocean': [
            'Plastic',
            'Ocean\x20Ladybug',
            'Dark\x20Electric\x20Eel',
            'Shiny\x20Electric\x20Eel'
        ]
    }, secretBiomeEnemyMap = {
        'desert': [
            'Evil\x20Desert\x20Centipede',
            'Queen\x20Shiny\x20Ant',
            'Soldier\x20Shiny\x20Ant',
            'Ruby\x20Frog',
            'Termite\x20Mound',
            'Queen\x20Termite',
            'Soldier\x20Termite',
            'Worker\x20Termite',
            'Baby\x20Termite',
            'Tick',
            'Whirlpool',
            'Grasshopper',
            'Stickbug',
            'Mushroom'
        ],
        'ocean': [
            'Shiny\x20Plastic',
            'Lilypad',
            'Shiny\x20Lilypad',
            'Carrion\x20Spire',
            'Flowering\x20Lilypad',
            'Poison\x20Dart\x20Frog',
            'Fly',
            'Firefly',
            'Whirlpool',
            'Dark\x20Beetle',
            'Pufferfish',
            'Brisingida',
            'Neuroflare',
            'Swampy\x20Moth',
            'Dauber',
            'Gloomcrawler',
            'Gnat',
            'Gnat\x20Swarm'
        ],
        'garden': [
            'Termite\x20Mound',
            'Queen\x20Termite',
            'Carrion\x20Spire',
            'Soldier\x20Termite',
            'Worker\x20Termite',
            'Baby\x20Termite',
            'Tick',
            'Soldier\x20Shiny\x20Ant',
            'Lilypad',
            'Shiny\x20Lilypad',
            'Flowering\x20Lilypad',
            'Poison\x20Dart\x20Frog',
            'Fly',
            'Firefly',
            'Grasshopper',
            'Stickbug',
            'Swampy\x20Moth',
            'Dauber',
            'Gloomcrawler',
            'Gnat',
            'Gnat\x20Swarm',
            'Mushroom'
        ]
    };
window['enemyStats'] = {};
let menuEnemies = [], menuEnemiesInitialized = ![];
function initMenuEnemies() {
    if (typeof biomeManager === 'undefined')
        return;
    const _0x41d368 = biomeManager['getCurrentBiomeData']()['current'], _0x4e30ab = biomeEnemyMap[_0x41d368] ?? [], _0x121991 = window['innerWidth'] > 0x0 ? window['innerWidth'] : canvas['w'] > 0x0 ? canvas['w'] : 0x780, _0x221b46 = window['innerHeight'] > 0x0 ? window['innerHeight'] : canvas['h'] > 0x0 ? canvas['h'] : 0x438;
    for (let _0x3a36f9 = 0x0; _0x3a36f9 < 0x14; _0x3a36f9++) {
        const _0x7d1f43 = Math['sqrt'](menuEnemyIncrementRadii[Math['floor'](Math['random']() * menuEnemyIncrementRadii['length'])] * (Math['random']() * 0.1 + 0.95)) * 8.7, _0x2ee0d1 = new Enemy({
                'x': Math['random']() * _0x121991,
                'y': Math['random']() * _0x221b46,
                'radius': _0x7d1f43,
                'hp': 0x64,
                'maxHp': 0x64,
                'id': Math['random'](),
                'type': _0x4e30ab[Math['floor'](Math['random']() * _0x4e30ab['length'])],
                'rarity': 0x0,
                'angle': Math['random']() * Math['PI'] * 0x2,
                'angleVel': Math['random']() * 0.04 - 0.02,
                'xVel': 0x0,
                'yVel': 0x0,
                'sinTimer': Math['random']() * 0xc8,
                'sinVel': Math['random']() * 0.5,
                'maxSinTimer': 0xc8,
                'toRenderUi': ![],
                'isMenuEnemy': !![],
                'wanderAngle': Math['random']() * Math['PI'] * 0x2,
                'wanderSpeed': 0x1 + Math['random'](),
                'fleeRange': 0xc8
            });
        menuEnemies['push'](_0x2ee0d1);
    }
    menuEnemiesInitialized = !![];
}
let menuEnemyTimer = 0x190;
function renderMenuEnemies() {
    !menuEnemiesInitialized && initMenuEnemies();
    const _0x5d15dc = time, _0x409907 = 0xc8, _0x13e179 = 0x5;
    for (let _0x5b12bf = 0x0; _0x5b12bf < menuEnemies['length']; _0x5b12bf++) {
        const _0x389230 = menuEnemies[_0x5b12bf], _0x54e94c = mouse['canvasX'], _0x41aac6 = mouse['canvasY'];
        _0x54e94c !== undefined && _0x41aac6 !== undefined && (Math['sqrt']((_0x54e94c - _0x389230['render']['x']) ** 0x2 + (_0x41aac6 - _0x389230['render']['y']) ** 0x2) < _0x389230['radius'] * 0x2 + 0x64 && _0x389230['dead'] !== !![] ? _0x389230['isHovered'] = !![] : _0x389230['isHovered'] = ![]);
        _0x389230['draw'](), _0x389230['sinTimer'] += dt / 16.67, _0x389230['angle'] += _0x389230['angleVel'] * dt / 16.67;
        let _0x9faa8d = 0x0, _0x2f7999 = 0x0, _0x5dc01a = ![];
        if (menuPlayer1 && menuPlayer2) {
            const _0x35975e = _0x389230['x'] - menuPlayer1['baseX'], _0x1d1ec3 = _0x389230['y'] - menuPlayer1['baseY'], _0x5c9cd5 = Math['sqrt'](_0x35975e * _0x35975e + _0x1d1ec3 * _0x1d1ec3), _0x5343d0 = _0x389230['x'] - menuPlayer2['baseX'], _0x29126a = _0x389230['y'] - menuPlayer2['baseY'], _0x57eeb0 = Math['sqrt'](_0x5343d0 * _0x5343d0 + _0x29126a * _0x29126a), _0x5ef952 = Math['min'](_0x5c9cd5, _0x57eeb0);
            _0x5ef952 < _0x409907 && (_0x5dc01a = !![], _0x5c9cd5 < _0x57eeb0 ? (_0x9faa8d = _0x35975e / _0x5c9cd5 * _0x13e179, _0x2f7999 = _0x1d1ec3 / _0x5c9cd5 * _0x13e179) : (_0x9faa8d = _0x5343d0 / _0x57eeb0 * _0x13e179, _0x2f7999 = _0x29126a / _0x57eeb0 * _0x13e179));
        }
        !_0x5dc01a && (Math['random']() < 0.02 && (_0x389230['wanderAngle'] = Math['random']() * Math['PI'] * 0x2), _0x9faa8d = Math['cos'](_0x389230['wanderAngle']) * _0x389230['wanderSpeed'], _0x2f7999 = Math['sin'](_0x389230['wanderAngle']) * _0x389230['wanderSpeed']);
        _0x389230['x'] += _0x9faa8d * dt / 16.67, _0x389230['y'] += _0x2f7999 * dt / 16.67, _0x389230['updateInterpolate']();
        const _0x500d5f = _0x389230['radius'] * 0x2, _0x47a172 = canvas['w'] || window['innerWidth'], _0x4d24e7 = canvas['h'] || window['innerHeight'];
        (_0x389230['x'] < -_0x500d5f || _0x389230['x'] > _0x47a172 + _0x500d5f || _0x389230['y'] < -_0x500d5f || _0x389230['y'] > _0x4d24e7 + _0x500d5f) && (_0x389230['toRemove'] = !![], spawnMenuEnemyAtBoundary());
    }
    menuEnemies = menuEnemies['filter'](_0x32c0ea => _0x32c0ea['toRemove'] !== !![]), ctx['lastTransform7'] = ctx['getTransform'](), ctx['setTransform'](ctx['lastTransform7']), delete ctx['lastTransform7'];
}
function spawnMenuEnemyAtBoundary() {
    if (typeof biomeManager === 'undefined')
        return;
    const _0x55d4f9 = biomeManager['getCurrentBiomeData']()['current'], _0xfcccf5 = biomeEnemyMap[_0x55d4f9] ?? [], _0x269d66 = Math['floor'](Math['random']() * 0x4), _0x31bf1c = Math['sqrt'](menuEnemyIncrementRadii[Math['floor'](Math['random']() * menuEnemyIncrementRadii['length'])] * (Math['random']() * 0.1 + 0.95)) * 8.7;
    let _0xf1e647, _0x4f3eb9;
    const _0x26a582 = _0x31bf1c, _0x3d88cc = canvas['w'] || window['innerWidth'], _0x5615cb = canvas['h'] || window['innerHeight'];
    switch (_0x269d66) {
    case 0x0:
        _0xf1e647 = Math['random']() * _0x3d88cc, _0x4f3eb9 = -_0x26a582;
        break;
    case 0x1:
        _0xf1e647 = _0x3d88cc + _0x26a582, _0x4f3eb9 = Math['random']() * _0x5615cb;
        break;
    case 0x2:
        _0xf1e647 = Math['random']() * _0x3d88cc, _0x4f3eb9 = _0x5615cb + _0x26a582;
        break;
    case 0x3:
        _0xf1e647 = -_0x26a582, _0x4f3eb9 = Math['random']() * _0x5615cb;
        break;
    }
    menuEnemies['push'](new Enemy({
        'x': _0xf1e647,
        'y': _0x4f3eb9,
        'radius': _0x31bf1c,
        'hp': 0x64,
        'maxHp': 0x64,
        'id': Math['random'](),
        'type': _0xfcccf5[Math['floor'](Math['random']() * _0xfcccf5['length'])],
        'rarity': 0x0,
        'angle': Math['random']() * Math['PI'] * 0x2,
        'angleVel': Math['random']() * 0.04 - 0.02,
        'xVel': 0x0,
        'yVel': 0x0,
        'sinTimer': Math['random']() * 0xc8,
        'sinVel': Math['random']() * 0.5,
        'maxSinTimer': 0xc8,
        'toRenderUi': ![],
        'isMenuEnemy': !![],
        'wanderAngle': Math['random']() * Math['PI'] * 0x2,
        'wanderSpeed': 0x1 + Math['random'](),
        'fleeRange': 0xc8
    }));
}
function renderClickCounter({
    radius: _0x5dfeb9,
    timeAlive: _0x22ccc1,
    totalDamage: _0x1129c5,
    x: _0x156735,
    y: _0x551c46
}) {
    let _0x5b9564 = 0x1f4;
    if (_0x22ccc1 < 0x1f4 && _0x1129c5 !== 0x0) {
        ctx['fillStyle'] = 'hsl(' + window['clicks'] * 0xa % 0x168 + '\x20100\x2050)', ctx['strokeStyle'] = 'hsl(' + window['clicks'] * 0xa % 0x168 + '\x20100\x2020)', ctx['lineWidth'] = 0x7;
        if (_0x5dfeb9 * 0.4 < 0x19)
            ctx['font'] = '600\x20' + 0x19 + 'px\x20\x27Ubuntu\x27';
        else
            _0x5dfeb9 * 0.4 > 0x64 ? ctx['font'] = '600\x20' + 0x64 + 'px\x20\x27Ubuntu\x27' : ctx['font'] = '600\x20' + _0x5dfeb9 * 0.4 + 'px\x20\x27Ubuntu\x27';
        ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['globalAlpha'] = 0.7 * (0x1 - _0x22ccc1 / _0x5b9564), ctx['strokeText'](_0x1129c5, _0x156735, _0x551c46), ctx['fillText'](_0x1129c5, _0x156735, _0x551c46), ctx['globalAlpha'] = 0x1, ctx['letterSpacing'] = '0px';
    }
}
;
requestAnimationFrame(render);
document['readyState'] === 'complete' ? resize() : window['addEventListener']('load', resize);
function renderDebug() {
    ctx['font'] = '900\x2015px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'bottom', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x2, debugText = 'FPS:\x20' + window['fps'], ctx['strokeText'](debugText, canvas['w'] - 0x2, canvas['h'] - 0x2), ctx['fillText'](debugText, canvas['w'] - 0x2, canvas['h'] - 0x2);
}
function initMenuPlayers() {
    menuPlayer1 = new Flower('menu1'), menuPlayer2 = new Flower('menu2'), menuPlayer1['radius'] = 0x19, menuPlayer2['radius'] = 0x19, menuPlayer1['maxHp'] = 0x64, menuPlayer2['maxHp'] = 0x64, menuPlayer1['hp'] = 0x64, menuPlayer2['hp'] = 0x64;
    const _0x2de62a = (window['innerWidth'] || canvas['w']) / 0x2, _0x4d0952 = (window['innerHeight'] || canvas['h']) / 0x2;
    menuPlayer1['baseX'] = _0x2de62a - 0x96, menuPlayer1['baseY'] = _0x4d0952, menuPlayer1['headX'] = menuPlayer1['baseX'], menuPlayer1['headY'] = menuPlayer1['baseY'], menuPlayer2['baseX'] = _0x2de62a + 0x96, menuPlayer2['baseY'] = _0x4d0952, menuPlayer2['headX'] = menuPlayer2['baseX'], menuPlayer2['headY'] = menuPlayer2['baseY'], menuPlayer1['angle'] = 0x0, menuPlayer2['angle'] = 0x0, menuPlayer1['petalDistance'] = neutralPetalDistance, menuPlayer2['petalDistance'] = neutralPetalDistance, menuPlayer1['wanderAngle'] = Math['random']() * Math['PI'] * 0x2, menuPlayer1['wanderTimer'] = Math['random']() * 0x64, menuPlayer1['wanderPhase'] = 0x0, menuPlayer2['wanderAngle'] = Math['random']() * Math['PI'] * 0x2, menuPlayer2['wanderTimer'] = Math['random']() * 0x64, menuPlayer2['wanderPhase'] = Math['PI'], menuPlayer1['render'] = {
        'headX': menuPlayer1['headX'],
        'headY': menuPlayer1['headY'],
        'radius': menuPlayer1['radius'],
        'hp': menuPlayer1['hp'],
        'baseX': menuPlayer1['baseX'],
        'baseY': menuPlayer1['baseY'],
        'isPoisoned': 0x0,
        'healingReduction': 0x1,
        'shield': 0x0,
        'beforeStreakHp': menuPlayer1['hp'],
        'fastPetalDistance': neutralPetalDistance,
        'angle': 0x0
    }, menuPlayer2['render'] = {
        'headX': menuPlayer2['headX'],
        'headY': menuPlayer2['headY'],
        'radius': menuPlayer2['radius'],
        'hp': menuPlayer2['hp'],
        'baseX': menuPlayer2['baseX'],
        'baseY': menuPlayer2['baseY'],
        'isPoisoned': 0x0,
        'healingReduction': 0x1,
        'shield': 0x0,
        'beforeStreakHp': menuPlayer2['hp'],
        'fastPetalDistance': neutralPetalDistance,
        'angle': 0x0
    }, menuInventory && menuInventory['topPetalContainers'] && menuInventory['bottomPetalContainers'] && loadMenuPlayerPetals();
}
function loadMenuPlayerPetals() {
    if (!menuPlayer1 || !menuPlayer2)
        return;
    loadTopPetalsToMenuPlayer(menuPlayer1, menuInventory), loadBottomPetalsToMenuPlayer(menuPlayer2, menuInventory);
}
function loadTopPetalsToMenuPlayer(_0x19eccd, _0x2c15b3) {
    _0x19eccd['petals'] = [];
    let _0x30037e = 0x0;
    const _0x5b7269 = Object['keys'](_0x2c15b3['topPetalContainers']);
    for (let _0xe633f2 of _0x5b7269) {
        const _0x370091 = _0x2c15b3['topPetalContainers'][_0xe633f2];
        if (!_0x370091)
            continue;
        const _0x21d970 = _0x370091['petals'][0x0];
        if (!_0x21d970)
            continue;
        const _0x534ac2 = _0x30037e / (_0x5b7269['length'] + 0x1) * Math['PI'] * 0x2, _0x3575c0 = Stats['petals']?.[_0x21d970['type']]?.[0x0], _0x5edcbf = new Petal({
                'type': _0x21d970['type'],
                'rarity': _0x21d970['rarity'],
                'id': _0x30037e++,
                'angleOffset': _0x534ac2,
                'distance': neutralPetalDistance,
                'offset': {
                    'distance': 0x0,
                    'angle': 0x0
                },
                'radius': _0x3575c0?.['radius'] || 0xa,
                'amount': _0x370091['amount'] || 0x1,
                'hp': _0x3575c0?.['health'] || 0x64,
                'maxHp': _0x3575c0?.['health'] || 0x64,
                'dead': ![],
                'dying': ![]
            });
        _0x19eccd['petals']['push'](_0x5edcbf);
    }
}
function loadBottomPetalsToMenuPlayer(_0xb17c2, _0x3cd374) {
    _0xb17c2['petals'] = [];
    let _0x29269b = 0x0;
    const _0x6cf2de = Object['keys'](_0x3cd374['bottomPetalContainers']);
    for (let _0x16dd8e of _0x6cf2de) {
        const _0x2e63b2 = _0x3cd374['bottomPetalContainers'][_0x16dd8e];
        if (!_0x2e63b2)
            continue;
        const _0x5ed906 = _0x2e63b2['petals'][0x0];
        if (!_0x5ed906)
            continue;
        const _0x1da136 = _0x29269b / (_0x6cf2de['length'] + 0x1) * Math['PI'] * 0x2, _0x498b63 = Stats['petals']?.[_0x5ed906['type']]?.[0x0], _0x503752 = new Petal({
                'type': _0x5ed906['type'],
                'rarity': _0x5ed906['rarity'],
                'id': _0x29269b++,
                'angleOffset': _0x1da136,
                'distance': neutralPetalDistance,
                'offset': {
                    'distance': 0x0,
                    'angle': 0x0
                },
                'radius': _0x498b63?.['radius'] || 0xa,
                'amount': _0x2e63b2['amount'] || 0x1,
                'hp': _0x498b63?.['health'] || 0x64,
                'maxHp': _0x498b63?.['health'] || 0x64,
                'dead': ![],
                'dying': ![]
            });
        _0xb17c2['petals']['push'](_0x503752);
    }
}
function updateMenuPlayers(_0x58017c) {
    if (!menuPlayer1 || !menuPlayer2)
        return;
    const _0x781a25 = _0x58017c / 16.66, _0x1594d6 = typeof mouse['canvasX'] === 'number' ? mouse['canvasX'] : canvas['w'] / 0x2, _0x572dc0 = typeof mouse['canvasY'] === 'number' ? mouse['canvasY'] : canvas['h'] / 0x2, _0x541d07 = _0x1594d6 >= 0x0 && _0x1594d6 <= canvas['w'] && _0x572dc0 >= 0x0 && _0x572dc0 <= canvas['h'];
    updateMenuPlayers['lastMouseX'] === undefined && (updateMenuPlayers['lastMouseX'] = _0x1594d6, updateMenuPlayers['lastMouseY'] = _0x572dc0, updateMenuPlayers['mouseStoppedTime'] = 0x0);
    const _0x5d1684 = Math['sqrt']((_0x1594d6 - updateMenuPlayers['lastMouseX']) ** 0x2 + (_0x572dc0 - updateMenuPlayers['lastMouseY']) ** 0x2), _0x1fb141 = _0x5d1684 < 0x2;
    _0x1fb141 ? updateMenuPlayers['mouseStoppedTime'] += _0x58017c : updateMenuPlayers['mouseStoppedTime'] = 0x0;
    updateMenuPlayers['lastMouseX'] = _0x1594d6, updateMenuPlayers['lastMouseY'] = _0x572dc0;
    const _0x20d104 = !_0x541d07 || updateMenuPlayers['mouseStoppedTime'] > 0x1f4, _0xe31610 = time / 0x3e8, _0x438f01 = 0x4 * _0x781a25, _0x2d57bc = 4.5 * _0x781a25, _0x5df48e = 0x32;
    if (_0x20d104)
        for (let _0x581009 of [
                menuPlayer1,
                menuPlayer2
            ]) {
            const _0x23fb92 = _0x581009 === menuPlayer1 ? _0x438f01 : _0x2d57bc;
            _0x581009['wanderAngle'] += (Math['random']() - 0.5) * 0.15 * _0x781a25;
            let _0x34ceec = _0x581009['baseX'] + Math['cos'](_0x581009['wanderAngle']) * _0x23fb92 * 0.4, _0xa58b54 = _0x581009['baseY'] + Math['sin'](_0x581009['wanderAngle']) * _0x23fb92 * 0.4;
            _0x34ceec < _0x5df48e && (_0x34ceec = _0x5df48e, _0x581009['wanderAngle'] = Math['random']() * Math['PI'] * 0x2), _0x34ceec > canvas['w'] - _0x5df48e && (_0x34ceec = canvas['w'] - _0x5df48e, _0x581009['wanderAngle'] = Math['random']() * Math['PI'] * 0x2), _0xa58b54 < _0x5df48e && (_0xa58b54 = _0x5df48e, _0x581009['wanderAngle'] = Math['random']() * Math['PI'] * 0x2), _0xa58b54 > canvas['h'] - _0x5df48e && (_0xa58b54 = canvas['h'] - _0x5df48e, _0x581009['wanderAngle'] = Math['random']() * Math['PI'] * 0x2), _0x581009['baseX'] = _0x34ceec, _0x581009['baseY'] = _0xa58b54, _0x581009['headX'] = _0x581009['baseX'], _0x581009['headY'] = _0x581009['baseY'];
        }
    else {
        const _0x4d87ef = Math['sin'](_0xe31610 * 0.8 + menuPlayer1['wanderPhase']) * 0x8, _0xd6ce10 = Math['sin'](_0xe31610 * 0.7 + menuPlayer2['wanderPhase']) * 0x8, _0x2909d8 = _0x1594d6 - 0x23, _0x373b2a = _0x572dc0 + _0x4d87ef, _0x1b0366 = _0x2909d8 - menuPlayer1['baseX'], _0x3b4423 = _0x373b2a - menuPlayer1['baseY'], _0x3f530f = Math['sqrt'](_0x1b0366 * _0x1b0366 + _0x3b4423 * _0x3b4423);
        if (_0x3f530f > 0x5) {
            const _0x451245 = Math['min'](_0x438f01, _0x3f530f * 0.15);
            menuPlayer1['baseX'] += _0x1b0366 / _0x3f530f * _0x451245, menuPlayer1['baseY'] += _0x3b4423 / _0x3f530f * _0x451245;
        }
        const _0x596de2 = _0x1594d6 + 0x23, _0x3c8ef1 = _0x572dc0 + _0xd6ce10, _0x1ce590 = _0x596de2 - menuPlayer2['baseX'], _0x24885d = _0x3c8ef1 - menuPlayer2['baseY'], _0x57bfd3 = Math['sqrt'](_0x1ce590 * _0x1ce590 + _0x24885d * _0x24885d);
        if (_0x57bfd3 > 0x5) {
            const _0x12538e = Math['min'](_0x2d57bc, _0x57bfd3 * 0.15);
            menuPlayer2['baseX'] += _0x1ce590 / _0x57bfd3 * _0x12538e, menuPlayer2['baseY'] += _0x24885d / _0x57bfd3 * _0x12538e;
        }
        menuPlayer1['headX'] = menuPlayer1['baseX'], menuPlayer1['headY'] = menuPlayer1['baseY'], menuPlayer2['headX'] = menuPlayer2['baseX'], menuPlayer2['headY'] = menuPlayer2['baseY'];
    }
    const _0xef20fa = 0x19, _0xadc5a8 = _0xef20fa * 1.8, _0xf1346c = menuPlayer2['baseX'] - menuPlayer1['baseX'], _0x4b6e6f = menuPlayer2['baseY'] - menuPlayer1['baseY'], _0x29ef2f = Math['sqrt'](_0xf1346c * _0xf1346c + _0x4b6e6f * _0x4b6e6f);
    if (_0x29ef2f < _0xadc5a8 && _0x29ef2f > 0x0) {
        const _0x2c30e4 = _0xf1346c / _0x29ef2f, _0x3f53f7 = _0x4b6e6f / _0x29ef2f, _0x27d8e2 = (_0xadc5a8 - _0x29ef2f) * 0.1;
        menuPlayer1['baseX'] -= _0x2c30e4 * _0x27d8e2, menuPlayer1['baseY'] -= _0x3f53f7 * _0x27d8e2, menuPlayer2['baseX'] += _0x2c30e4 * _0x27d8e2, menuPlayer2['baseY'] += _0x3f53f7 * _0x27d8e2;
    }
    const _0x23761a = _0x1594d6 - canvas['w'] / 0x2, _0x327868 = _0x572dc0 - canvas['h'] / 0x2;
    menuPlayer1['angle'] = Math['atan2'](_0x327868, _0x23761a), menuPlayer2['angle'] = menuPlayer1['angle'], menuPlayer1['petalRotation'] += menuPlayer1['petalRotateSpeed'] * _0x781a25, menuPlayer2['petalRotation'] += menuPlayer2['petalRotateSpeed'] * _0x781a25;
}
function renderMenuPlayers() {
    if (!menuPlayer1 || !menuPlayer2)
        return;
    const _0x209300 = window['camera'];
    window['camera'] = {
        'x': 0x0,
        'y': 0x0,
        'disableCulling': !![]
    }, updateFlowerPosition(menuPlayer1), updateFlowerPosition(menuPlayer2), renderFlowerPetals(menuPlayer1), renderFlowerPetals(menuPlayer2), renderFlowerBody(menuPlayer1), renderFlowerBody(menuPlayer2), window['camera'] = _0x209300;
}
function renderMenuFlower(_0x378751) {
    _0x378751['x'] = _0x378751['baseX'], _0x378751['y'] = _0x378751['baseY'], _0x378751['render']['x'] = _0x378751['render']['baseX'], _0x378751['render']['y'] = _0x378751['render']['baseY'], _0x378751['render']['headX'] = _0x378751['render']['headX'], _0x378751['render']['headY'] = _0x378751['render']['headY'], _0x378751['render']['baseX'] = _0x378751['baseX'], _0x378751['render']['baseY'] = _0x378751['baseY'], _0x378751['render']['angle'] = _0x378751['angle'], _0x378751['updateInterpolate']();
    for (let _0x10adf5 = 0x0; _0x10adf5 < _0x378751['petals']['length']; _0x10adf5++) {
        const _0x38be96 = _0x378751['petals'][_0x10adf5], _0x2285f0 = _0x378751['petalRotation'] + _0x38be96['angleOffset'];
        _0x38be96['x'] = _0x378751['baseX'] + Math['cos'](_0x2285f0) * _0x38be96['distance'], _0x38be96['y'] = _0x378751['baseY'] + Math['sin'](_0x2285f0) * _0x38be96['distance'], _0x38be96['render']['x'] = _0x38be96['x'], _0x38be96['render']['y'] = _0x38be96['y'], toRender({
            'x': _0x38be96['x'],
            'y': _0x38be96['y'],
            'radius': _0x38be96['radius']
        }, window['camera']) && _0x38be96['draw'](), _0x38be96['updateTimer']();
    }
    toRender({
        'x': _0x378751['render']['headX'],
        'y': _0x378751['render']['headY'],
        'radius': _0x378751['render']['radius']
    }, window['camera']) && _0x378751['drawFlower'](_0x378751['render']['headX'], _0x378751['render']['headY'], _0x378751['render']['radius'], _0x378751['character']);
}
function updateFlowerPosition(_0x4fc84a) {
    _0x4fc84a['x'] = _0x4fc84a['baseX'], _0x4fc84a['y'] = _0x4fc84a['baseY'], _0x4fc84a['render']['baseX'] = _0x4fc84a['baseX'], _0x4fc84a['render']['baseY'] = _0x4fc84a['baseY'], _0x4fc84a['render']['headX'] = _0x4fc84a['headX'], _0x4fc84a['render']['headY'] = _0x4fc84a['headY'], _0x4fc84a['render']['angle'] = _0x4fc84a['angle'], _0x4fc84a['updateInterpolate']();
}
function renderFlowerPetals(_0x398387) {
    for (let _0x5e5699 = 0x0; _0x5e5699 < _0x398387['petals']['length']; _0x5e5699++) {
        const _0x1a86c4 = _0x398387['petals'][_0x5e5699], _0x3dadbd = _0x398387['petalRotation'] + _0x1a86c4['angleOffset'];
        _0x1a86c4['x'] = _0x398387['baseX'] + Math['cos'](_0x3dadbd) * _0x1a86c4['distance'], _0x1a86c4['y'] = _0x398387['baseY'] + Math['sin'](_0x3dadbd) * _0x1a86c4['distance'], _0x1a86c4['render']['x'] = _0x1a86c4['x'], _0x1a86c4['render']['y'] = _0x1a86c4['y'], toRender({
            'x': _0x1a86c4['x'],
            'y': _0x1a86c4['y'],
            'radius': _0x1a86c4['radius']
        }, window['camera']) && _0x1a86c4['draw'](), _0x1a86c4['updateTimer']();
    }
}
function renderFlowerBody(_0x5da905) {
    toRender({
        'x': _0x5da905['render']['headX'],
        'y': _0x5da905['render']['headY'],
        'radius': _0x5da905['radius']
    }, window['camera']) && _0x5da905['drawFlower'](_0x5da905['render']['headX'], _0x5da905['render']['headY'], _0x5da905['render']['radius'], _0x5da905['character']);
}