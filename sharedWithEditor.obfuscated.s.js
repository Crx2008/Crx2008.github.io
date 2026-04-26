ctx['setFillStyle'] = _0x212b20 => {
    if (window['overrideBlendColor'] !== undefined) {
        ctx['fillStyle'] = blendColor(_0x212b20, window['overrideBlendColor'][0x1], window['overrideBlendColor'][0x0]);
        return;
    }
    ctx['fillStyle'] = _0x212b20;
}, ctx['setStrokeStyle'] = _0x148f09 => {
    if (window['overrideBlendColor'] !== undefined) {
        ctx['strokeStyle'] = blendColor(_0x148f09, window['overrideBlendColor'][0x1], window['overrideBlendColor'][0x0]);
        return;
    }
    ctx['strokeStyle'] = _0x148f09;
}, ctx['setGlobalAlpha'] = (_0x3bf1de, _0x3e988b = ![]) => {
    if (window['alphaMult'] !== undefined && _0x3e988b !== !![]) {
        ctx['globalAlpha'] = window['alphaMult'] * _0x3bf1de;
        return;
    }
    ctx['globalAlpha'] = _0x3bf1de;
}, ctx['setFillAlpha'] = _0x2cef6e => {
    ctx['fillOpacity'] = _0x2cef6e;
}, ctx['setStrokeAlpha'] = _0x3bbfed => {
    ctx['strokeOpacity'] = _0x3bbfed;
}, ctx['setLineWidth'] = _0x3f4365 => {
    ctx['lineWidth'] = _0x3f4365;
};
const editorPetalShapesMap = { 'default': [[]] }, editorEnemyShapesMap = { 'default': [[]] };
function getCustomPetalTypes() {
    return Object['keys'](editorPetalShapesMap);
}
function getCustomEnemyTypes() {
    return Object['keys'](editorEnemyShapesMap);
}
let toResetFadeState;
function renderHpBar({
    x: _0x225d88,
    y: _0x4a63b1,
    radius: _0x3b1d34,
    hp: _0x20bf14,
    maxHp: _0x323b31,
    beforeStreakHp: _0x4a75b9,
    givenAlpha: _0x45143f,
    flowerName: _0x6017dc,
    flowerUsername: _0x5e6e1b,
    shield: _0x1a7987,
    team: _0x2337d8
}, _0x2230f9 = {
    'fadeState': undefined,
    'fadeTime': 0x0,
    'lastHp': _0x20bf14
}) {
    _0x2230f9['fadeState'] === undefined && (Math['ceil'](_0x2230f9['hp']) === _0x323b31 && !_0x1a7987 ? (_0x2230f9['fadeState'] = 'invisible', _0x2230f9['fadeTime'] = -0xdc) : (_0x2230f9['fadeTime'] = time, _0x2230f9['fadeState'] = 'fadeIn'));
    _0x2230f9['lastHp'] === undefined && (_0x2230f9['lastHp'] = _0x2230f9['hp']);
    _0x2230f9['lastShield'] === undefined && (_0x2230f9['lastShield'] = _0x2230f9['shield']);
    let _0x1c96d8 = 0x1;
    if (_0x2230f9['dead'] !== !![]) {
        if (Math['ceil'](_0x2230f9['lastHp']) < _0x323b31 && Math['ceil'](_0x2230f9['hp']) === _0x323b31 && _0x2230f9['shield'] == 0x0)
            _0x2230f9['fadeTime'] = time, _0x2230f9['fadeState'] = 'fadeOut';
        else
            (Math['ceil'](_0x2230f9['lastHp']) === _0x323b31 && Math['ceil'](_0x2230f9['hp']) < _0x323b31 || _0x2230f9['shield'] != 0x0 && _0x2230f9['lastShield'] == 0x0) && (_0x2230f9['fadeTime'] = time, _0x2230f9['fadeState'] = 'fadeIn');
    }
    _0x2230f9['lastShield'] = _0x2230f9['shield'], _0x2230f9['lastHp'] = _0x2230f9['hp'], toResetFadeState = ![];
    _0x45143f && (_0x45143f > 0x0 && (toResetFadeState = _0x2230f9['fadeState'], _0x2230f9['fadeState'] = 'visible'));
    if (_0x2230f9['fadeState'] === 'fadeOut')
        _0x1c96d8 = 0x1 - (time - _0x2230f9['fadeTime']) / 0xb4, _0x1c96d8 < 0x0 && (_0x1c96d8 = 0x0, _0x2230f9['fadeState'] = 'invisible');
    else {
        if (_0x2230f9['fadeState'] === 'fadeIn')
            _0x1c96d8 = (time - _0x2230f9['fadeTime']) / 0xb4, _0x1c96d8 > 0x1 && (_0x1c96d8 = 0x1, _0x2230f9['fadeState'] = 'visible');
        else {
            if (_0x2230f9['fadeState'] === 'invisible' && !_0x6017dc)
                return;
        }
    }
    if (_0x2230f9['dead'] === !![])
        _0x1c96d8 *= ((0xa - _0x2230f9['deadAnimationTimer']) / 0xa6) ** 0x3;
    _0x45143f && (_0x1c96d8 = _0x45143f);
    const _0x53c4fb = {
        'w': (_0x3b1d34 / 0x19) ** 1.2 * 0x19 * 3.2 + 0.33,
        'h': (_0x3b1d34 / 0x19) ** 1.2 * 0x19 * 0.39 + 0.33,
        'borderRadius': (_0x3b1d34 / 0x19) ** 1.2 * 0x19 * 0.25,
        'innerPadding': (_0x3b1d34 / 0x19) ** 1.05 * 1.8 - 0.1
    };
    ctx['globalAlpha'] = _0x1c96d8, _0x20bf14 = Math['max'](_0x20bf14, 0x0), _0x4a75b9 = Math['max'](_0x4a75b9, 0x0), ctx['fillStyle'] = '#333333', ctx['beginPath'](), ctx['roundRect'](_0x225d88 - _0x53c4fb['w'] / 0x2, _0x4a63b1 + _0x3b1d34 * 1.775, _0x53c4fb['w'], _0x53c4fb['h'], _0x53c4fb['borderRadius']), ctx['fill'](), ctx['closePath']();
    _0x6017dc !== undefined && _0x2230f9['id'] !== window['selfId'] && (ctx['globalAlpha'] = 0x1, ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 2.25, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'top', ctx['font'] = '900\x2022px\x20Ubuntu', ctx['strokeText'](_0x6017dc, _0x225d88, _0x4a63b1 - _0x3b1d34 * 2.75 + _0x53c4fb['h'] + 0x2), ctx['fillText'](_0x6017dc, _0x225d88, _0x4a63b1 - _0x3b1d34 * 2.75 + _0x53c4fb['h'] + 0x2), ctx['font'] = '900\x2010px\x20Ubuntu', ctx['fillStyle'] = '#bbbbbb', ctx['strokeText'](_0x5e6e1b, _0x225d88, _0x4a63b1 - _0x3b1d34 * 0x2 + _0x53c4fb['h'] + 0x2), ctx['fillText'](_0x5e6e1b, _0x225d88, _0x4a63b1 - _0x3b1d34 * 0x2 + _0x53c4fb['h'] + 0x2));
    _0x4a75b9 < _0x323b31 / 0xa && (ctx['globalAlpha'] = Math['max'](0x0, _0x20bf14 * 0.95 / (_0x323b31 / 0xa) + 0.05) * _0x1c96d8);
    if (_0x4a75b9 > 0x0) {
        ctx['fillStyle'] = '#dd3434', ctx['beginPath']();
        const _0x3753f9 = 1.4;
        ctx['roundRect'](_0x225d88 - _0x53c4fb['w'] / 0x2 + _0x53c4fb['innerPadding'] * _0x3753f9, _0x4a63b1 + _0x3b1d34 * 1.775 + _0x53c4fb['innerPadding'] * _0x3753f9, (_0x53c4fb['w'] - _0x53c4fb['borderRadius'] * 1.5) * Math['min'](0x1, _0x4a75b9 / _0x323b31) + _0x53c4fb['borderRadius'] * 1.5 - _0x53c4fb['innerPadding'] * 0x2 * _0x3753f9, _0x53c4fb['h'] - _0x53c4fb['innerPadding'] * _0x3753f9 * 0x2, _0x53c4fb['borderRadius'] * _0x53c4fb['h'] / (_0x53c4fb['h'] + _0x53c4fb['innerPadding'] * 0x2)), ctx['fill'](), ctx['closePath']();
    }
    ctx['globalAlpha'] = _0x1c96d8, _0x20bf14 < _0x323b31 / 0xa && (ctx['globalAlpha'] = Math['max'](0x0, _0x20bf14 * 0.95 / (_0x323b31 / 0xa) + 0.05) * _0x1c96d8), _0x20bf14 > 0x0 && (ctx['fillStyle'] = '#75dd34', _0x2337d8 == 'flower' && (ctx['fillStyle'] = '#b5aa31'), ctx['beginPath'](), ctx['roundRect'](_0x225d88 - _0x53c4fb['w'] / 0x2 + _0x53c4fb['innerPadding'], _0x4a63b1 + _0x3b1d34 * 1.775 + _0x53c4fb['innerPadding'], (_0x53c4fb['w'] - _0x53c4fb['borderRadius'] * 1.5) * Math['min'](0x1, _0x20bf14 / _0x323b31) + _0x53c4fb['borderRadius'] * 1.5 - _0x53c4fb['innerPadding'] * 0x2, _0x53c4fb['h'] - _0x53c4fb['innerPadding'] * 0x2, _0x53c4fb['borderRadius'] * _0x53c4fb['h'] / (_0x53c4fb['h'] + _0x53c4fb['innerPadding'] * 0x2)), ctx['fill'](), ctx['closePath']()), _0x1a7987 && (_0x1a7987 > _0x323b31 * 0.005 && (ctx['fillStyle'] = 'white', ctx['beginPath'](), ctx['roundRect'](_0x225d88 - _0x53c4fb['w'] / 0x2 + _0x53c4fb['innerPadding'], _0x4a63b1 + _0x3b1d34 * 1.805 + _0x53c4fb['innerPadding'], (_0x53c4fb['w'] - _0x53c4fb['borderRadius'] * 1.5) * Math['min'](0x1, _0x1a7987 / _0x323b31) + _0x53c4fb['borderRadius'] * 1.5 - _0x53c4fb['innerPadding'] * 0x2, _0x53c4fb['h'] - _0x53c4fb['innerPadding'] * 0x3, _0x53c4fb['borderRadius'] * _0x53c4fb['h'] / (_0x53c4fb['h'] + _0x53c4fb['innerPadding'] * 0x3)), ctx['fill'](), ctx['closePath']())), ctx['globalAlpha'] = 0x1, toResetFadeState !== ![] && (_0x2230f9['fadeState'] = toResetFadeState);
}
const Colors = {
    'rarities': [
        {
            'name': 'Basic',
            'color': '#2ecc71',
            'border': '#27ae60'
        },
        {
            'name': 'Uncommon',
            'color': '#e91e63',
            'border': '#c11755'
        },
        {
            'name': 'Scarce',
            'color': '#03a9f4',
            'border': '#0288d1'
        },
        {
            'name': 'Exceptional',
            'color': '#ff9800',
            'border': '#f57c00'
        },
        {
            'name': 'Mythical',
            'color': '#ffeb3b',
            'border': '#fbc02d'
        },
        {
            'name': 'Phantasmal',
            'color': '#b39ddb',
            'border': '#9575cd'
        },
        {
            'name': 'Ultimate',
            'color': '#f48fb1',
            'border': '#f06292'
        },
        {
            'name': 'Paramount',
            'color': '#00bcd4',
            'border': '#0097a7'
        },
        {
            'name': 'Alpha',
            'color': '#424242',
            'border': '#212121'
        },
        {
            'name': 'Doomed',
            'color': '#c62828',
            'border': '#b71c1c'
        },
        {
            'name': 'Sacred',
            'color': '#9c27b0',
            'border': '#7b1fa2',
            'fancy': {
                'border': '#7b1fa2',
                'hue': 0x122,
                'light': 0x28,
                'sat': 0x46,
                'spread': 0x1e,
                'period': 1.5
            }
        },
        {
            'name': 'Imperial',
            'color': '#d81b60',
            'border': '#ad1457',
            'fancy': {
                'border': '#ad1457',
                'hue': 0x14a,
                'light': 0x2d,
                'sat': 0x5a,
                'spread': 0x19,
                'period': 0x2,
                'stars': 0x1
            }
        },
        {
            'name': 'Absolute',
            'color': '#e08979',
            'border': '#b86a5d',
            'fancy': {
                'border': '#b86a5d',
                'hue': 0x5,
                'light': 0x44,
                'sat': 0x4b,
                'spread': 0x23,
                'period': 1.5,
                'stars': 0x2
            }
        },
        {
            'name': 'Stellar',
            'color': '#ffc107',
            'border': '#ffa000',
            'fancy': {
                'border': '#ffa000',
                'hue': 0x2d,
                'light': 0x37,
                'sat': 0x64,
                'spread': 0x14,
                'period': 1.5,
                'stars': 0x2
            }
        },
        {
            'name': 'Empyrean',
            'color': '#1565c0',
            'border': '#0d47a1',
            'fancy': {
                'border': '#0d47a1',
                'hue': 0xd2,
                'light': 0x2d,
                'sat': 0x5a,
                'spread': 0xf,
                'period': 0x1,
                'stars': 0x2
            }
        },
        {
            'name': 'Seraphic',
            'color': '#bf360c',
            'border': '#870000',
            'fancy': {
                'border': '#870000',
                'hue': 0xc,
                'light': 0x23,
                'sat': 0x55,
                'spread': 0x14,
                'period': 1.5,
                'stars': 0x2
            }
        },
        {
            'name': 'Ascended',
            'color': '#eceff1',
            'border': '#cfd8dc',
            'fancy': {
                'border': '#cfd8dc',
                'hue': 0xc8,
                'light': 0x5f,
                'sat': 0xa,
                'spread': 0x1e,
                'period': 1.5,
                'stars': 0x2
            }
        },
        {
            'name': 'Ethereal',
            'color': '#f06292',
            'border': '#e91e63',
            'fancy': {
                'border': '#e91e63',
                'hue': 0x14a,
                'light': 0x4b,
                'sat': 0x5a,
                'spread': 0x1e,
                'period': 0x1,
                'stars': 0x2
            }
        },
        {
            'name': 'Cosmic',
            'color': '#880e4f',
            'border': '#560027',
            'fancy': {
                'border': '#560027',
                'hue': 0x154,
                'light': 0x1e,
                'sat': 0x55,
                'spread': 0x19,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Timeless',
            'color': '#00695c',
            'border': '#004d40',
            'fancy': {
                'border': '#004d40',
                'hue': 0xaa,
                'light': 0x1e,
                'sat': 0x50,
                'spread': 0x23,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Godlike',
            'color': '#ff6f00',
            'border': '#e65100',
            'fancy': {
                'border': '#e65100',
                'hue': 0x23,
                'light': 0x32,
                'sat': 0x64,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Abyssal',
            'color': '#1a237e',
            'border': '#0d134b',
            'fancy': {
                'border': '#0d134b',
                'hue': 0xe6,
                'light': 0x19,
                'sat': 0x50,
                'spread': 0x28,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Noble',
            'color': '#00838f',
            'border': '#006064',
            'fancy': {
                'border': '#006064',
                'hue': 0xb9,
                'light': 0x23,
                'sat': 0x55,
                'spread': 0x23,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Entropic',
            'color': '#311b92',
            'border': '#1a0033',
            'fancy': {
                'border': '#1a0033',
                'hue': 0xff,
                'light': 0x12,
                'sat': 0x55,
                'spread': 0x23,
                'period': 0.5,
                'stars': 0x2
            }
        },
        {
            'name': 'Apocalyptic',
            'color': '#b71c1c',
            'border': '#7f0000',
            'fancy': {
                'border': '#7f0000',
                'hue': 0x0,
                'light': 0x23,
                'sat': 0x64,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Hollow',
            'color': '#5d4037',
            'border': '#3e2723',
            'fancy': {
                'border': '#3e2723',
                'hue': 0x19,
                'light': 0x16,
                'sat': 0x28,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Overshadowed',
            'color': '#283593',
            'border': '#1a237e',
            'fancy': {
                'border': '#1a237e',
                'hue': 0xeb,
                'light': 0x1e,
                'sat': 0x46,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Luminous',
            'color': '#ad1457',
            'border': '#880e4f',
            'fancy': {
                'border': '#880e4f',
                'hue': 0x154,
                'light': 0x23,
                'sat': 0x5a,
                'spread': 0x1e,
                'period': 0x1,
                'stars': 0x2
            }
        },
        {
            'name': 'Banished',
            'color': '#1b5e20',
            'border': '#003300',
            'fancy': {
                'border': '#003300',
                'hue': 0x82,
                'light': 0x12,
                'sat': 0x64,
                'spread': 0x1e,
                'period': 0x1,
                'stars': 0x2
            }
        },
        {
            'name': 'Iridescent',
            'color': '#7fffd4',
            'border': '#5cdfb4',
            'fancy': {
                'border': '#5cdfb4',
                'hue': 0xa0,
                'light': 0x4b,
                'sat': 0x64,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Spectral',
            'color': '#fff59d',
            'border': '#fff176',
            'fancy': {
                'border': '#fff176',
                'hue': 0x37,
                'light': 0x55,
                'sat': 0x5a,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Mystical',
            'color': '#d84315',
            'border': '#a33500',
            'fancy': {
                'border': '#a33500',
                'hue': 0xe,
                'light': 0x2d,
                'sat': 0x64,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Arcane',
            'color': '#558b2f',
            'border': '#3e6421',
            'fancy': {
                'border': '#3e6421',
                'hue': 0x55,
                'light': 0x23,
                'sat': 0x3c,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Occult',
            'color': '#c2185b',
            'border': '#8c0b3e',
            'fancy': {
                'border': '#8c0b3e',
                'hue': 0x154,
                'light': 0x28,
                'sat': 0x55,
                'spread': 0x1e,
                'period': 0.75,
                'stars': 0x2
            }
        },
        {
            'name': 'Origin',
            'color': '#e040fb',
            'border': '#aa00ff',
            'fancy': {
                'border': '#aa00ff',
                'hue': 0x12c,
                'light': 0x32,
                'sat': 0x64,
                'spread': 0x1e,
                'period': 0x2,
                'stars': 0x2
            }
        },
        {
            'name': 'Universal',
            'color': '#455a64',
            'border': '#263238'
        },
        {
            'name': 'Discourse',
            'color': '#795548',
            'border': '#4e342e'
        },
        {
            'name': 'Triumph',
            'color': '#9ccc65',
            'border': '#7cb342'
        }
    ],
    'mana': {
        'grace': '#db81da',
        'time': '#2cc6d4',
        'divergence': '#7123b9'
    },
    'biomes': {
        'garden': {
            'background': '#1ea761',
            'grid': '#1d9157'
        },
        'desert': {
            'background': '#dece7b',
            'grid': '#a1955a'
        },
        'ocean': {
            'background': '#547db3',
            'grid': '#41608a'
        }
    }
};
function deepFreeze(_0x80c610) {
    return Object['freeze'](_0x80c610), Object['getOwnPropertyNames'](_0x80c610)['forEach'](_0x47db25 => {
        const _0x37d722 = _0x80c610[_0x47db25];
        _0x37d722 !== null && (typeof _0x37d722 === 'object' || typeof _0x37d722 === 'function') && !Object['isFrozen'](_0x37d722) && deepFreeze(_0x37d722);
    }), _0x80c610;
}
Colors['rarities'] = deepFreeze(structuredClone(Colors['rarities']));
function createFancyGradient(_0x1de482, _0x588957) {
    let _0x2e72b7 = Colors['rarities'][_0x588957]['fancy']['hue'] ?? 0x0, _0x19374c = Colors['rarities'][_0x588957]['fancy']['sat'] ?? 0x64, _0x87ce82 = Colors['rarities'][_0x588957]['fancy']['light'] ?? 0x64, _0x57fc87 = Colors['rarities'][_0x588957]['fancy']['spread'] ?? 0x1e, _0x1fba1b = Colors['rarities'][_0x588957]['fancy']['period'] ?? 1.5, _0x473b33 = Date['now']() / 0xbb8 % _0x1fba1b - _0x1fba1b, _0x11a488 = 0x0, _0x9db354 = (0x0 - _0x473b33) / (_0x1fba1b / 0x4);
    _0x1de482['addColorStop'](0x0, 'hsl(' + (linearOscillate(_0x9db354 * Math['PI'] / 0x2) * _0x57fc87 + _0x2e72b7) + ',\x20' + _0x19374c + '%,\x20' + _0x87ce82 + '%)');
    let _0x43d1b2 = (0x1 - _0x473b33) / (_0x1fba1b / 0x4);
    _0x1de482['addColorStop'](0x1, 'hsl(' + (linearOscillate(_0x43d1b2 * Math['PI'] / 0x2) * _0x57fc87 + _0x2e72b7) + ',\x20' + _0x19374c + '%,\x20' + _0x87ce82 + '%)');
    for (; _0x473b33 < 0x1; _0x473b33 += _0x1fba1b / 0x4) {
        _0x473b33 > 0x0 && _0x1de482['addColorStop'](_0x473b33, 'hsl(' + (linearOscillate(_0x11a488) * _0x57fc87 + _0x2e72b7) + ',\x20' + _0x19374c + '%,\x20' + _0x87ce82 + '%)'), _0x11a488 += Math['PI'] / 0x2;
    }
}
function linearOscillate(_0x3435c1) {
    _0x3435c1 = _0x3435c1 % (Math['PI'] * 0x2);
    if (_0x3435c1 < Math['PI'])
        return 0x2 * _0x3435c1 / Math['PI'] - 0x1;
    else
        return 0x3 - 0x2 * _0x3435c1 / Math['PI'];
}
let staticGradients = {};
for (let i = 0x0; i < Colors['rarities']['length']; i++) {
    if (Colors['rarities'][i]['fancy']) {
        if (i <= 0x17) {
            const gradientFill = ctx['createLinearGradient'](-0x1e, -0x1e, 0x1e, 0x1e);
            createFancyGradient(gradientFill, i);
            const gradientFill2 = ctx['createLinearGradient'](-34.875, -34.875, 34.875, 34.875);
            createFancyGradient(gradientFill2, i), staticGradients[i] = gradientFill, staticGradients[i + '_'] = gradientFill2;
        } else {
            if (i <= 0x19) {
                const gradientFill = ctx['createLinearGradient'](0x1e, 0x1e, -0x1e, -0x1e);
                createFancyGradient(gradientFill, i);
                const gradientFill2 = ctx['createLinearGradient'](34.875, 34.875, -34.875, -34.875);
                createFancyGradient(gradientFill2, i), staticGradients[i] = gradientFill, staticGradients[i + '_'] = gradientFill2;
            } else {
                if (i <= 0x1d) {
                    const gradientFill = ctx['createRadialGradient'](0x0, 0x0, 0x0, 0x0, 0x0, 0x1e);
                    createFancyGradient(gradientFill, i);
                    const gradientFill2 = ctx['createRadialGradient'](34.875, 34.875, 0x0, 34.875, 34.875, 34.875);
                    createFancyGradient(gradientFill2, i), staticGradients[i] = gradientFill, staticGradients[i + '_'] = gradientFill2;
                } else {
                    const gradientFill = ctx['createRadialGradient'](0x0, 0x0, 0x1e, 0x0, 0x0, 0x0);
                    createFancyGradient(gradientFill, i);
                    const gradientFill2 = ctx['createRadialGradient'](34.875, 34.875, 34.875, 34.875, 34.875, 0x0);
                    createFancyGradient(gradientFill2, i), staticGradients[i] = gradientFill, staticGradients[i + '_'] = gradientFill2;
                }
            }
        }
    }
}
const editorBaseStats = {
        'enemies': {},
        'petals': {
            'default': {
                'radius': 0xa,
                'knockback': 0.1
            }
        },
        'rarities': [
            {
                'name': 'Basic',
                'health': 0x1,
                'damage': 0x1,
                'radius': 0x1,
                'mass': 0x1,
                'petalDamage': 0x1,
                'petalHealth': 0x1,
                'petalHeal': 0x1,
                'petalMass': 0x1,
                'detectionDistance': 0x1,
                'xp': 0x1
            },
            {
                'name': 'Uncommon',
                'health': 0x2,
                'damage': 1.2,
                'radius': 1.1,
                'mass': 1.52,
                'petalDamage': 1.4,
                'petalHealth': 1.2,
                'petalHeal': 1.51,
                'petalMass': 1.52,
                'detectionDistance': 1.1,
                'xp': 0x3
            },
            {
                'name': 'Scarce',
                'health': 0x4,
                'damage': 1.5,
                'radius': 1.3,
                'mass': 2.5,
                'petalDamage': 0x2,
                'petalHealth': 1.5,
                'petalHeal': 2.2,
                'petalMass': 2.5,
                'detectionDistance': 1.2,
                'xp': 0x9
            },
            {
                'name': 'Exceptional',
                'health': 7.5,
                'damage': 1.9,
                'radius': 1.72,
                'mass': 5.6,
                'petalDamage': 2.9,
                'petalHealth': 1.9,
                'petalHeal': 3.2,
                'petalMass': 5.7,
                'detectionDistance': 1.3,
                'xp': 0x1b
            },
            {
                'name': 'Mythical',
                'health': 0x32,
                'damage': 2.7,
                'radius': 0x3,
                'mass': 0x12,
                'petalDamage': 4.8,
                'petalHealth': 2.8,
                'petalHeal': 0x5,
                'petalMass': 0x12,
                'detectionDistance': 1.7,
                'xp': 0x51
            },
            {
                'name': 'Phantasmal',
                'health': 0x6e,
                'damage': 4.2,
                'radius': 0x5,
                'mass': 0x2b,
                'petalDamage': 9.5,
                'petalHealth': 4.2,
                'petalHeal': 0xa,
                'petalMass': 0x2b,
                'detectionDistance': 2.1,
                'xp': 0xf3
            },
            {
                'name': 'Ultimate',
                'health': 0x136,
                'damage': 8.5,
                'radius': 0x7,
                'mass': 0x64,
                'petalDamage': 0x17,
                'petalHealth': 8.5,
                'petalHeal': 21.5,
                'petalMass': 0x64,
                'detectionDistance': 2.5,
                'xp': 0x2d9
            },
            {
                'name': 'Paramount',
                'health': 0x546,
                'damage': 0x11,
                'radius': 9.5,
                'mass': 0xd8,
                'petalDamage': 0x5a,
                'petalHealth': 0x11,
                'petalHeal': 0x28,
                'petalMass': 0xd8,
                'detectionDistance': 2.5,
                'xp': 0x88b
            },
            {
                'name': 'Alpha',
                'health': 0x12c0,
                'damage': 0x23,
                'radius': 0xd,
                'mass': 0x1f4,
                'petalDamage': 0x140,
                'petalHealth': 0x23,
                'petalHeal': 0x4a,
                'petalMass': 0x1f4,
                'detectionDistance': 2.5,
                'xp': 0x19a1
            },
            {
                'name': 'Doomed',
                'health': 0x4650,
                'damage': 0x46,
                'radius': 0x12,
                'mass': 0x4b0,
                'petalDamage': 0x44c,
                'petalHealth': 0x46,
                'petalHeal': 0x8c,
                'petalMass': 0x4b0,
                'detectionDistance': 2.5,
                'xp': 0x9c40
            },
            {
                'name': 'Sacred',
                'health': 0xfde8,
                'damage': 0x8a,
                'radius': 0x18,
                'mass': 0xc80,
                'petalDamage': 0xf0a,
                'petalHealth': 0x8a,
                'petalHeal': 0x10c,
                'petalMass': 0xc80,
                'detectionDistance': 2.5,
                'xp': 0x493e0
            },
            {
                'name': 'Imperial',
                'health': 0x3d090,
                'damage': 0x113,
                'radius': 0x21,
                'mass': 0x251c,
                'petalDamage': 0x34bc,
                'petalHealth': 0x113,
                'petalHeal': 0x1f4,
                'petalMass': 0x251c,
                'detectionDistance': 2.5,
                'xp': 0x2dc6c0
            },
            {
                'name': 'Absolute',
                'health': 0xef420,
                'damage': 0x226,
                'radius': 0x2d,
                'mass': 0x80e8,
                'petalDamage': 0xb98c,
                'petalHealth': 0x226,
                'petalHeal': 0x3b6,
                'petalMass': 0x80e8,
                'detectionDistance': 2.5,
                'xp': 0x1c9c380
            },
            {
                'name': 'Stellar',
                'health': 0x4c4b40,
                'damage': 0x47e,
                'radius': 0x3e,
                'mass': 0x2f760,
                'petalDamage': 0x41eb0,
                'petalHealth': 0x672,
                'petalHeal': 0xb49,
                'petalMass': 0x2f760,
                'detectionDistance': 2.5,
                'xp': 0x1dcd6500
            },
            {
                'name': 'Empyrean',
                'health': 0x958940,
                'damage': 0x672,
                'radius': 0x47,
                'mass': 0x5eec0,
                'petalDamage': 0x2625a0,
                'petalHealth': 0x2648,
                'petalHeal': 0x2580,
                'petalMass': 0x231860,
                'detectionDistance': 2.5,
                'xp': 0x2540be400
            },
            {
                'name': 'Seraphic',
                'health': 0x1312d00,
                'damage': 0x9c4,
                'radius': 0x51,
                'mass': 0xbdd80,
                'petalDamage': 0x19bfcc0,
                'petalHealth': 0xea60,
                'petalHeal': 0xe290,
                'petalMass': 0x1a52480,
                'detectionDistance': 2.5,
                'xp': 0x45d964b800
            },
            {
                'name': 'Ascended',
                'health': 0x3938700,
                'damage': 0x1356,
                'radius': 0x67,
                'mass': 0x231860,
                'petalDamage': 0xc7bf410,
                'petalHealth': 0x329c4,
                'petalHeal': 0x33450,
                'petalMass': 0x16e36000,
                'detectionDistance': 3.25,
                'xp': 0x82f79cd9000
            },
            {
                'name': 'Ethereal',
                'health': 0x7270e00,
                'damage': 0x1d4c,
                'radius': 0x76,
                'mass': 0x4630c0,
                'petalDamage': 0x35a4e900,
                'petalHealth': 0x44aa20,
                'petalHeal': 0x30d40,
                'petalMass': 0x112a88000,
                'detectionDistance': 3.25,
                'xp': 0xf5904616e000
            },
            {
                'name': 'Cosmic',
                'health': 0x15752a00,
                'damage': 0x3a98,
                'radius': 0x87,
                'mass': 0xd29240,
                'petalDamage': 0x1af124af0,
                'petalHealth': 0x19c800,
                'petalHeal': 516560.652,
                'petalMass': 0xcdfe60000,
                'detectionDistance': 3.25,
                'xp': 0x1cc6e836ae4000
            },
            {
                'name': 'Timeless',
                'health': 0x29b92700,
                'damage': 0x4e20,
                'radius': 0x9a,
                'mass': 0x1a52480,
                'petalDamage': 0x3fc11c9f8,
                'petalHealth': 0x11300,
                'petalHeal': 0x1500e,
                'petalMass': 0x493e00,
                'detectionDistance': 3.25,
                'xp': 0x35f4f36686b8000
            },
            {
                'name': 'Godlike',
                'health': 0x53724e00,
                'damage': 0x7530,
                'radius': 0xaf,
                'mass': 0x34a4900,
                'petalDamage': 0x1fefe358,
                'petalHealth': 0x22600,
                'petalHeal': 0x27100,
                'petalMass': 0x927c00,
                'detectionDistance': 3.25,
                'xp': 0x6124fee993bc0000
            },
            {
                'name': 'Abyssal',
                'health': 0x10b076000,
                'damage': 0xea60,
                'radius': 0xc8,
                'mass': 0x9896800,
                'petalDamage': 0x6f75ef80,
                'petalHealth': 0x44c00,
                'petalHeal': 0x4e200,
                'petalMass': 0x124f800,
                'detectionDistance': 3.3,
                'xp': 0xad78ebc5ac6200000
            },
            {
                'name': 'Noble',
                'health': 0x1faa3b500,
                'damage': 0x15f90,
                'radius': 0xe4,
                'mass': 0x1312d000,
                'petalDamage': 0xd693a400,
                'petalHealth': 0x89800,
                'petalHeal': 0x9c400,
                'petalMass': 0x16e36000,
                'detectionDistance': 3.35,
                'xp': 0x14542ba12a337c00000
            },
            {
                'name': 'Entropic',
                'health': 0x401332c00,
                'damage': 0x1fbd0,
                'radius': 0x102,
                'mass': 0x2625a000,
                'petalDamage': 0x1ad274800,
                'petalHealth': 0x113000,
                'petalHeal': 0x138800,
                'petalMass': 0x493e000,
                'detectionDistance': 3.4,
                'xp': 0x261dd1ce2f2088000000
            },
            {
                'name': 'Apocalyptic',
                'health': 0xa7a358200,
                'damage': 0x40b28,
                'radius': 0x127,
                'mass': 0x77359400,
                'petalDamage': 0x35a4e9000,
                'petalHealth': 0x226000,
                'petalHeal': 0x271000,
                'petalMass': 0x927c000,
                'detectionDistance': 3.45,
                'xp': 0x4f68ca6d8cd91c0000000
            },
            {
                'name': 'Hollow',
                'health': 0x199c82cc00,
                'damage': 0x81650,
                'radius': 0x14f,
                'mass': 0x165a0bc00,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x94e47b8d68171800000000
            },
            {
                'name': 'Overshadowed',
                'health': 0x30e4f9b400,
                'damage': 0xf4240,
                'radius': 0x17c,
                'mass': 0x2cb417800,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x1172c67a9232b40000000000
            },
            {
                'name': 'Luminous',
                'health': 0x68c6171400,
                'damage': 0x186a00,
                'radius': 0x1af,
                'mass': 0x59682f000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x20b73425d21f1200000000000
            },
            {
                'name': 'Banished',
                'health': 0x104c533c000,
                'damage': 0x30d400,
                'radius': 0x1e9,
                'mass': 0x10c388d000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x3d5781c6e9fa42000000000000
            },
            {
                'name': 'Iridescent',
                'health': 0x2ba7def3000,
                'damage': 0x632ea0,
                'radius': 0x22b,
                'mass': 0x218711a000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x73041354f6b53c0000000000000
            },
            {
                'name': 'Spectral',
                'health': 0x574fbde6000,
                'damage': 0x927c00,
                'radius': 0x276,
                'mass': 0x430e234000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0xd7c0e29888346000000000000000
            },
            {
                'name': 'Mystical',
                'health': 0xcea31f4b000,
                'damage': 0x121eac0,
                'radius': 0x2cb,
                'mass': 0xc92a69c000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x19097eaecfe4c30000000000000000
            },
            {
                'name': 'Arcane',
                'health': 0x1eec3dec2000,
                'damage': 0x24b76a0,
                'radius': 0x32b,
                'mass': 0x1a04d1ad800,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x2ef1cd87c5ccee00000000000000000
            },
            {
                'name': 'Occult',
                'health': 0x3dd87bd84000,
                'damage': 0x3750280,
                'radius': 0x399,
                'mass': 0x3409a35b000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x5805615e92e03c000000000000000000
            },
            {
                'name': 'Origin',
                'health': 0x8de19495c000,
                'damage': 0x7088980,
                'radius': 0x416,
                'mass': 0x9c1cea11000,
                'petalDamage': 0x38d7ea4c68000,
                'petalHealth': 0xe8d4a51000,
                'petalHeal': 0xe8d4a51000,
                'petalMass': 0x38d7ea4c68000,
                'detectionDistance': 3.5,
                'xp': 0xa50a16915364700000000000000000000
            }
        ]
    }, editorStats = {
        'petals': {},
        'enemies': {},
        'rarities': {}
    };
let AmountOfRarities = editorBaseStats['rarities']['length'];
function regenerateEditorStats() {
    editorStats['petals'] = {}, editorStats['enemies'] = {}, editorStats['rarities'] = {};
    if (window['petalData_'] !== undefined)
        for (let _0x355b73 in Stats['petals']) {
            editorStats['petals'][_0x355b73] = Stats['petals'][_0x355b73];
        }
    const _0x50cf47 = editorBaseStats;
    for (let _0x3a00db in _0x50cf47['enemies']) {
        let _0x51b1d9 = _0x50cf47['enemies'][_0x3a00db];
        editorStats['enemies'][_0x3a00db] = {};
        for (let _0x1f0b25 = 0x0; _0x1f0b25 < AmountOfRarities; _0x1f0b25++) {
            if (_0x1f0b25 == 0x0)
                editorStats['enemies'][_0x3a00db][_0x1f0b25] = _0x50cf47['enemies'][_0x3a00db], _0x50cf47['enemies'][_0x3a00db]['xp'] == undefined && (editorStats['enemies'][_0x3a00db][_0x1f0b25]['xp'] = Math['round'](_0x50cf47['rarities'][_0x1f0b25]['xp']));
            else {
                let _0x2be614 = {};
                _0x2be614 = structuredClone(editorStats['enemies'][_0x3a00db][_0x1f0b25 - 0x1]), _0x2be614['health'] = Math['round'](_0x2be614['health'] * _0x50cf47['rarities'][_0x1f0b25]['health'] / _0x50cf47['rarities'][_0x1f0b25 - 0x1]['health'] * 0x64) / 0x64, _0x2be614['damage'] = Math['round'](_0x2be614['damage'] * _0x50cf47['rarities'][_0x1f0b25]['damage'] / _0x50cf47['rarities'][_0x1f0b25 - 0x1]['damage'] * 0x64) / 0x64, _0x2be614['radius'] = Math['round'](_0x2be614['radius'] * _0x50cf47['rarities'][_0x1f0b25]['radius'] / _0x50cf47['rarities'][_0x1f0b25 - 0x1]['radius'] * 0x64) / 0x64, _0x2be614['xp'] = Math['round'](_0x2be614['xp'] * _0x50cf47['rarities'][_0x1f0b25]['xp'] / _0x50cf47['rarities'][_0x1f0b25 - 0x1]['xp'] * 0x64) / 0x64, _0x2be614['mass'] = Math['round'](_0x2be614['mass'] * _0x50cf47['rarities'][_0x1f0b25]['mass'] / _0x50cf47['rarities'][_0x1f0b25 - 0x1]['mass'] * 0x64) / 0x64, _0x2be614['detectionDistance'] = Math['round'](_0x2be614['detectionDistance'] * _0x50cf47['rarities'][_0x1f0b25]['detectionDistance'] / _0x50cf47['rarities'][_0x1f0b25 - 0x1]['detectionDistance'] * 0x64) / 0x64;
                _0x2be614['poison'] && (_0x2be614['poison'][0x0] = Math['round'](_0x2be614['poison'][0x0] * _0x50cf47['rarities'][_0x1f0b25]['damage'] / _0x50cf47['rarities'][_0x1f0b25 - 0x1]['damage'] * 0x64) / 0x64, _0x2be614['poison'][0x1] = Math['round'](_0x2be614['poison'][0x1] * _0x50cf47['rarities'][_0x1f0b25]['damage'] / _0x50cf47['rarities'][_0x1f0b25 - 0x1]['damage'] * 0x64) / 0x64);
                for (let _0xbecbd0 in editorStats['enemies'][_0x3a00db][_0x1f0b25 - 0x1]) {
                    _0x50cf47['enemies'][_0x3a00db]['override'] != undefined && (_0x50cf47['enemies'][_0x3a00db]['override'][_0x1f0b25] != undefined && (Object['keys'](_0x50cf47['enemies'][_0x3a00db]['override'][_0x1f0b25])['includes'](_0xbecbd0) && (_0x2be614[_0xbecbd0] = _0x50cf47['enemies'][_0x3a00db]['override'][_0x1f0b25][_0xbecbd0])));
                }
                editorStats['enemies'][_0x3a00db][_0x1f0b25] = _0x2be614;
            }
        }
        let _0x2cdc7b = structuredClone(_0x50cf47['enemies'][_0x3a00db]['drops']);
        for (let _0x5a0e50 in _0x2cdc7b) {
            let _0x5223cd = calculateDrops(_0x2cdc7b[_0x5a0e50][0x0], _0x2cdc7b[_0x5a0e50][0x1], _0x2cdc7b[_0x5a0e50][0x2]);
            for (let _0x1c19f1 in editorStats['enemies'][_0x3a00db]) {
                if (_0x5223cd[_0x1c19f1] !== undefined)
                    editorStats['enemies'][_0x3a00db][_0x1c19f1]['drops'][_0x5a0e50] = _0x5223cd[_0x1c19f1];
                else
                    editorStats['enemies'][_0x3a00db][_0x1c19f1]['drops'][_0x5a0e50] = {};
            }
        }
        _0x50cf47['enemies'][_0x3a00db]['drops'] = window['structuredClone'](_0x2cdc7b);
    }
    for (let _0x44ad83 in _0x50cf47['petals']) {
        if (_0x44ad83 != 'default') {
            let _0x105266 = _0x50cf47['petals'][_0x44ad83];
            editorStats['petals'][_0x44ad83] = {};
            for (let _0x4ae98e = 0x0; _0x4ae98e < AmountOfRarities; _0x4ae98e++) {
                if (_0x4ae98e == 0x0) {
                    editorStats['petals'][_0x44ad83][_0x4ae98e] = structuredClone(_0x50cf47['petals']['default']);
                    for (let _0x519357 in _0x105266) {
                        editorStats['petals'][_0x44ad83][_0x4ae98e][_0x519357] = _0x105266[_0x519357];
                    }
                } else {
                    let _0x4c5759 = _0x50cf47['rarities'][_0x4ae98e]['petalDamage'] / _0x50cf47['rarities'][_0x4ae98e - 0x1]['petalDamage'], _0xc238c3 = _0x50cf47['rarities'][_0x4ae98e]['petalHealth'] / _0x50cf47['rarities'][_0x4ae98e - 0x1]['petalHealth'], _0x27c36e = _0x50cf47['rarities'][_0x4ae98e]['petalHeal'] / _0x50cf47['rarities'][_0x4ae98e - 0x1]['petalHeal'], _0x1b4099 = {};
                    for (let _0x1d3921 in editorStats['petals'][_0x44ad83][_0x4ae98e - 0x1]) {
                        let _0x236342 = ![];
                        if (_0x105266['damageScalers']['includes'](_0x1d3921))
                            _0x236342 = !![], _0x1b4099[_0x1d3921] = Math['round'](editorStats['petals'][_0x44ad83][_0x4ae98e - 0x1][_0x1d3921] * _0x4c5759 * 0x64) / 0x64;
                        else {
                            if (_0x105266['healthScalers']['includes'](_0x1d3921))
                                _0x236342 = !![], _0x1b4099[_0x1d3921] = Math['round'](editorStats['petals'][_0x44ad83][_0x4ae98e - 0x1][_0x1d3921] * _0xc238c3 * 0x64) / 0x64;
                            else
                                _0x105266['healScalers'] && (_0x105266['healScalers']['includes'](_0x1d3921) && (_0x236342 = !![], _0x1b4099[_0x1d3921] = Math['round'](editorStats['petals'][_0x44ad83][_0x4ae98e - 0x1][_0x1d3921] * _0x27c36e * 0x64) / 0x64));
                        }
                        if (_0x1d3921 == 'poison')
                            _0x1b4099['poison'] = [], _0x1b4099['poison'][0x0] = Math['round'](editorStats['petals'][_0x44ad83][_0x4ae98e - 0x1]['poison'][0x0] * _0x4c5759 * 0x64) / 0x64, _0x1b4099['poison'][0x1] = Math['round'](editorStats['petals'][_0x44ad83][_0x4ae98e - 0x1]['poison'][0x1] * _0x4c5759 * 0x64) / 0x64;
                        else
                            !_0x236342 && (_0x1b4099[_0x1d3921] = editorStats['petals'][_0x44ad83][_0x4ae98e - 0x1][_0x1d3921]);
                        _0x105266['override'] != undefined && (_0x105266['override'][_0x4ae98e] != undefined && (Object['keys'](_0x105266['override'][_0x4ae98e])['includes'](_0x1d3921) && (_0x105266['damageScalers']['includes'](_0x1d3921) || _0x105266['healthScalers']['includes'](_0x1d3921) ? _0x1b4099[_0x1d3921] *= _0x105266['override'][_0x4ae98e][_0x1d3921] : _0x1b4099[_0x1d3921] = _0x105266['override'][_0x4ae98e][_0x1d3921])));
                    }
                    editorStats['petals'][_0x44ad83][_0x4ae98e] = _0x1b4099;
                }
            }
        }
        if (_0x50cf47['petals'][_0x44ad83]['slowdown']) {
            let _0x480ff8 = structuredClone(_0x50cf47['petals'][_0x44ad83]['slowdown']), _0x10dec6 = getSlowdown(_0x480ff8);
            for (let _0x12d98d in editorStats['petals'][_0x44ad83]) {
                editorStats['petals'][_0x44ad83][_0x12d98d]['slowdown'] = _0x10dec6[_0x12d98d];
            }
        }
    }
}
function calculateDrops(_0x31b572, _0x5a46df, _0xf495fb) {
    !_0xf495fb && (_0xf495fb = 0x0);
    const _0x5f5456 = [
            [
                0x56ab8,
                0x1174c,
                0x2710,
                0x3b6,
                0x96,
                0x7,
                0.7,
                0.022,
                0.00029,
                0.000002
            ],
            [
                0x21e,
                0x46,
                0x9,
                0x1,
                0.27,
                0.1,
                0.0045,
                0.0012,
                0.000022
            ],
            [
                0x8,
                1.9,
                0.9,
                0.377,
                0.16,
                0.045,
                0.032,
                0.015,
                0.013,
                0.003,
                0.0013,
                0.001,
                0.00012,
                0.000005,
                0.000002,
                3e-7
            ]
        ], _0x5478b6 = [
            [
                0x0,
                -2.2,
                -4.7,
                -7.9,
                -10.4,
                -14.4,
                -18.9,
                -24.1,
                -30.1
            ],
            [
                0x0,
                -2.5,
                -0x5,
                -7.5,
                -0xa,
                -12.5,
                -17.5,
                -20.9,
                -0x1a,
                -0x20,
                -0x26,
                -0x2b,
                -0x30,
                -0x35,
                -0x3a
            ],
            [
                0x0,
                -0x4,
                -10.35,
                -13.5,
                -0xf,
                -16.5,
                -0x12,
                -19.5,
                -0x15,
                -22.5,
                -0x18,
                -25.5,
                -0x1b,
                -28.5,
                -0x1e,
                -31.5,
                -0x21,
                -34.5,
                -0x24,
                -37.5,
                -0x27,
                -40.5,
                -0x2a
            ]
        ], _0x45d3fd = [
            [],
            [],
            []
        ];
    for (let _0x5624b6 = 0x0; _0x5624b6 < 0x3; _0x5624b6++) {
        for (let _0x48e586 = 0x0; _0x48e586 < _0x5478b6[_0x5624b6]['length']; _0x48e586++) {
            _0x48e586 == 0x0 ? _0x45d3fd[_0x5624b6]['push'](0x0) : _0x45d3fd[_0x5624b6]['push'](0x1 - Math['pow'](Math['E'], _0x5478b6[_0x5624b6][_0x48e586]));
        }
    }
    const _0x125006 = new Array(0x23)['fill'](0x0)['map'](_0x477dee => new Array(0x12)['fill'](0x0));
    for (let _0x2c9003 = 0x0; _0x2c9003 < 0x23; ++_0x2c9003) {
        let _0x24fd01 = _0x2c9003 ? _0x2c9003 : 0x0;
        _0x2c9003 > 0x4 && (_0x24fd01 = _0x2c9003 - 0x1);
        _0x2c9003 > 0x8 && (_0x24fd01 = _0x2c9003 - 0x2);
        _0x2c9003 > 0xe && (_0x24fd01 = _0x2c9003 - 0x3);
        _0x2c9003 > 0x10 && (_0x24fd01 = _0x2c9003 - 0x4);
        _0x2c9003 > 0x12 && (_0x24fd01 = _0x2c9003 - 0x2);
        _0x2c9003 > 0x13 && (_0x24fd01 = _0x2c9003 - 0x3);
        _0x2c9003 > 0x15 && (_0x24fd01 = _0x2c9003 - 0x4);
        _0x2c9003 > 0x1a && (_0x24fd01 = _0x2c9003 - 0x5);
        _0x2c9003 > 0x1c && (_0x24fd01 = _0x2c9003 - 0x6);
        _0x2c9003 > 0x1e && (_0x24fd01 = _0x2c9003 - 0x7);
        _0x2c9003 > 0x20 && (_0x24fd01 = _0x2c9003 - 0x8);
        let _0x5d463b = 0x0, _0x3b2d10 = 0x0, _0x39b215 = 0x0;
        if (_0x2c9003 > 0x12)
            _0x5d463b = 0x2, _0x3b2d10 = 0x13, _0x39b215 = 0xc, _0x24fd01 -= _0x39b215;
        else
            _0x2c9003 > 0x9 && (_0x5d463b = 0x1, _0x3b2d10 = 0xa, _0x39b215 = 0x6, _0x24fd01 -= _0x39b215);
        for (let _0x460328 = 0x0; _0x460328 <= _0x24fd01; ++_0x460328) {
            if (_0x460328 > 0x17)
                break;
            if (_0x460328 + _0x39b215 < _0x5a46df)
                continue;
            let _0x12af7d = _0x45d3fd[_0x5d463b][_0x460328], _0x5c2a82 = _0x45d3fd[_0x5d463b][_0x460328 + 0x1];
            if (_0x460328 === _0x24fd01)
                _0x5c2a82 = 0x1;
            const _0xfb1e18 = Math['pow'](_0x31b572 * _0x12af7d + (0x1 - _0x31b572), 0x493e0 / _0x5f5456[_0x5d463b][_0x2c9003 - _0x3b2d10]), _0x343fae = Math['pow'](_0x31b572 * _0x5c2a82 + (0x1 - _0x31b572), 0x493e0 / _0x5f5456[_0x5d463b][_0x2c9003 - _0x3b2d10]);
            _0x2c9003 >= _0xf495fb && (_0x125006[_0x2c9003][_0x460328 + _0x39b215] = parseFloat((0x64 * (_0x343fae - _0xfb1e18))['toFixed'](0x3)));
        }
    }
    return _0x125006;
}
function getSlowdown(_0x1417d1) {
    const _0x40c17c = [
            0x15f90,
            0x61a8,
            0x1932,
            0x872,
            0x24e,
            0x61,
            0x10,
            1.6
        ], _0x582d3f = [
            0x0,
            -1.5,
            -3.1,
            -4.7,
            -0x7,
            -9.4,
            -11.7,
            -13.7
        ], _0x1a3f3a = [];
    for (let _0x1b2137 = 0x0; _0x1b2137 < _0x582d3f['length']; _0x1b2137++) {
        _0x1b2137 == 0x0 ? _0x1a3f3a['push'](0x0) : _0x1a3f3a['push'](0x1 - Math['pow'](Math['E'], _0x582d3f[_0x1b2137]));
    }
    const _0x145a8d = new Array(0x8)['fill'](0x0)['map'](_0x3efc9e => new Array(0x8)['fill'](0x0));
    for (let _0x5d2677 = 0x0; _0x5d2677 < 0x8; ++_0x5d2677) {
        let _0x5db8dd = 0x64;
        for (let _0x10d0ce = 0x0; _0x10d0ce <= 0x7; ++_0x10d0ce) {
            if (_0x10d0ce > 0x7)
                break;
            let _0x26f2ce = _0x1a3f3a[_0x10d0ce], _0x23a2f6 = _0x1a3f3a[_0x10d0ce + 0x1];
            if (_0x10d0ce === 0x7)
                _0x23a2f6 = 0x1;
            const _0x2d8830 = Math['pow'](_0x1417d1 * _0x26f2ce + (0x1 - _0x1417d1), 0x493e0 / _0x40c17c[_0x5d2677]), _0x55e08a = Math['pow'](_0x1417d1 * _0x23a2f6 + (0x1 - _0x1417d1), 0x493e0 / _0x40c17c[_0x5d2677]);
            _0x145a8d[_0x5d2677][_0x10d0ce] = Math['max']((_0x5db8dd * _0x1417d1)['toFixed'](0x2), 0x0), _0x5db8dd -= 0x64 * (_0x55e08a - _0x2d8830);
        }
        if (_0x145a8d[_0x5d2677][0x7] >= 0x0 && _0x5d2677 < 0x3) {
            let _0x32b47f = _0x145a8d[_0x5d2677][0x7];
            for (let _0x522b5c = 0x0; _0x522b5c <= 0x7; ++_0x522b5c) {
                _0x145a8d[_0x5d2677][_0x522b5c] -= _0x32b47f, _0x145a8d[_0x5d2677][_0x522b5c] = Math['max'](_0x145a8d[_0x5d2677][_0x522b5c]['toFixed'](0x2), 0x0);
            }
        }
    }
    _0x145a8d[0x8] = [
        0x5a,
        0x5a,
        0x5a,
        0x5a,
        0x5a,
        0x5a,
        0x5a,
        0x5a
    ];
    for (let _0x189e6f of _0x145a8d) {
        _0x189e6f['push'](0x0);
    }
    return _0x145a8d;
}
Enemy['prototype']['changeState'] = function (_0x9ee38d) {
    changeState(this, _0x9ee38d);
};