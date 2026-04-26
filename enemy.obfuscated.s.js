const enemyInterpolateKeys = [
        'x',
        'y',
        'radius',
        'hp',
        'beforeStreakHp'
    ], enemyInterpolateMagnitudes = [
        0.14,
        0.14,
        0.4,
        0.22,
        0.22
    ], enemyCullingMults = {
        'Spider': 1.5,
        'Tarantula': 1.5,
        'Gloomcrawler': 1.5,
        'Hornet': 1.2,
        'Rock': 1.1,
        'Sandstone': 1.1,
        'Rock\x20Tank': 1.5,
        'RockMissile': 1.1,
        'BigRockMissile': 1.1,
        'Ladybug': 1.05,
        'Dark\x20Ladybug': 1.05,
        'Centipede': 1.12,
        'Evil\x20Centipede': 1.12,
        'Desert\x20Centipede': 1.12,
        'Evil\x20Desert\x20Centipede': 1.12
    }, enemyBoxSizeMults = {
        'Moonlit\x20Frog': 0x2,
        'Sunlit\x20Frog': 0x2,
        'Ruby\x20Frog': 0x2,
        'Spider': 2.3,
        'Tarantula': 2.3,
        'Gloomcrawler': 2.3,
        'Hornet': 1.2,
        'Tree': 1.5,
        'Root': 1.5,
        'Rock': 1.3,
        'Sandstone': 1.3,
        'Coral': 1.3,
        'Soil': 1.5,
        'Rock\x20Tank': 0x1,
        'Ladybug': 1.5,
        'Dark\x20Ladybug': 1.5,
        'Shiny\x20Ladybug': 1.5,
        'Ocean\x20Ladybug': 1.5,
        'Centipede': 1.7,
        'Evil\x20Centipede': 1.7,
        'Desert\x20Centipede': 1.7,
        'Evil\x20Desert\x20Centipede': 1.7,
        'Bee': 1.35,
        'Square': 1.5,
        'Dandelion': 1.5,
        'Baby\x20Ant': 1.85,
        'Worker\x20Ant': 1.85,
        'Soldier\x20Ant': 1.85,
        'Soldier\x20Fire\x20Ant': 1.85,
        'Soldier\x20Shiny\x20Ant': 1.85,
        'Beetle': 1.5,
        'Dark\x20Beetle': 1.5,
        'Grasshopper': 1.5,
        'Stickbug': 1.5,
        'Scorpion': 1.2,
        'Cactus': 1.2,
        'Queen\x20Ant': 2.32 * 0.6,
        'Queen\x20Fire\x20Ant': 2.32 * 0.6,
        'Queen\x20Shiny\x20Ant': 2.32 * 0.6,
        'Starfish': 1.5,
        'Brisingida': 1.5,
        'Pufferfish': 1.5,
        'Crab': 1.7,
        'Bubble': 1.2,
        'Jellyfish': 1.2,
        'Neuroflare': 1.2,
        'Shell': 1.1,
        'Sea\x20Urchin': 1.3,
        'Invincible\x20Urchin': 1.3
    }, enemyBoxOffsets = {
        'Queen\x20Ant': {
            'x': -0.15,
            'y': -0.15
        },
        'Queen\x20Fire\x20Ant': {
            'x': -0.15,
            'y': -0.15
        },
        'Queen\x20Shiny\x20Ant': {
            'x': -0.15,
            'y': -0.15
        },
        'Queen\x20Termite': {
            'x': -0.15,
            'y': -0.15
        }
    }, noRenderingUi = ['Invincible\x20Urchin'], enemyPackKeys = [
        'id',
        'x',
        'y',
        'angle',
        'hp'
    ];
class Enemy {
    constructor(_0x5df61f) {
        if (enemyRenderMap[_0x5df61f['type']] === undefined && editorEnemyShapesMap[_0x5df61f['type']] !== undefined)
            return new Enemy({
                ..._0x5df61f,
                'type': 'Custom',
                'customType': _0x5df61f['type']
            });
        this['beforeStreakHp'] = _0x5df61f['maxHp'], this['ticksSinceLastDamaged'] = 0x3e9, this['damageCount'] = 0x0, this['damageCountCooldown'] = 0x0, this['type'] = _0x5df61f['type'], this['rarity'] = _0x5df61f['rarity'];
        for (let _0x3cc52d in _0x5df61f) {
            this[_0x3cc52d] = _0x5df61f[_0x3cc52d];
        }
        this['toRenderUi'] = _0x5df61f['toRenderUi'] ?? !(noRenderingUi['includes'](this['type']) || this['type']['includes']('Missile')), this['radius'] = _0x5df61f['radius'], this['baseRadius'] = _0x5df61f['radius'];
        enemyDataMap[this['type']] !== undefined && (this['data'] = enemyDataMap[this['type']](this));
        enemyRenderMap[this['type']] !== undefined ? this['sprite'] = enemyRenderMap[this['type']] : this['sprite'] = enemyRenderMap['default'];
        this['dead'] = ![], this['deadAnimationTimer'] = 0x0, this['xv'] = 0x0, this['yv'] = 0x0, this['team'] = _0x5df61f['team'], this['render'] = {};
        for (let _0x42d26d = 0x0; _0x42d26d < enemyInterpolateKeys['length']; _0x42d26d++) {
            this['render'][enemyInterpolateKeys[_0x42d26d]] = this[enemyInterpolateKeys[_0x42d26d]];
        }
        this['render']['angle'] = this['angle'], this['render']['radius'] = 0x0, [
            'Tarantula',
            'Gloomcrawler',
            'Spider',
            'Worker\x20Ant',
            'Soldier\x20Ant',
            'Soldier\x20Fire\x20Ant',
            'Beetle',
            'Dark\x20Beetle',
            'Scorpion',
            'Grasshopper',
            'Stickbug',
            'Locust',
            'Queen\x20Ant',
            'Queen\x20Shiny\x20Ant',
            'Queen\x20Fire\x20Ant',
            'Desert\x20Moth',
            'Swampy\x20Moth',
            'Fly',
            'Firefly',
            'Starfish',
            'Brisingida',
            'Crab',
            'Baby\x20Ant',
            'Worker\x20Fire\x20Ant',
            'Baby\x20Fire\x20Ant',
            'Soldier\x20Shiny\x20Ant',
            'Soldier\x20Termite',
            'Baby\x20Termite',
            'Worker\x20Termite',
            'Queen\x20Termite',
            'Gnat',
            'Carrion\x20Spire',
            'Shiny\x20Beetle'
        ]['includes'](this['type']) && (this['render']['lastX'] = this['render']['x'], this['render']['lastY'] = this['render']['y'], this['render']['time'] = 0x0), [
            'Jellyfish',
            'Neuroflare',
            'Sea\x20Urchin',
            'Invincible\x20Urchin',
            'Fire\x20Ant\x20Burrow'
        ]['includes'](this['type']) && (this['render']['time'] = 0x0), this['type'] === 'Locust' && (this['createdTime'] = performance['now'](), this['locustLastMoveTime'] = 0x0), this['isHovered'] = ![], this['statsBoxAlpha'] = 0x0, this['statsBox'] = null;
    }
    ['update'](_0x37bdac, _0x2fe413) {
        this['type'] === 'Locust' && performance['now']() - this['createdTime'] > 0xc8 && (this['xv'] = (_0x37bdac[_0x2fe413 + 0x1] - this['x']) / 0xa, this['yv'] = (_0x37bdac[_0x2fe413 + 0x2] - this['y']) / 0xa, Math['sqrt'](this['xv'] ** 0x2 + this['yv'] ** 0x2) > 0.1 && (this['locustLastMoveTime'] = performance['now']()));
        const _0x2675fe = enemyPackKeys['indexOf']('hp'), _0x2cd334 = this['hp'], _0x33fac0 = _0x37bdac[_0x2fe413 + _0x2675fe];
        for (let _0xd78da6 = _0x2fe413; _0xd78da6 < enemyPackKeys['length'] + _0x2fe413; _0xd78da6++) {
            this[enemyPackKeys[_0xd78da6 - _0x2fe413]] = _0x37bdac[_0xd78da6];
        }
        return _0x33fac0 < _0x2cd334 && _0x2cd334 > 0x0 && this['updateRenderDamage'](_0x2cd334 - _0x33fac0), _0x2fe413 + enemyPackKeys['length'];
    }
    ['updateInterpolate']() {
        for (let _0x3943c5 = 0x0; _0x3943c5 < enemyInterpolateKeys['length']; _0x3943c5++) {
            let _0x107614 = enemyInterpolateKeys[_0x3943c5];
            this['render'][_0x107614] = interpolate(this['render'][_0x107614], this[_0x107614], enemyInterpolateMagnitudes[_0x3943c5] * dt / 16.66);
        }
        this['render']['angle'] = interpolateDirection(this['render']['angle'], this['angle'], 0.12), this['render']['radius'] < 0.01 && (this['render']['radius'] = 0.01);
    }
    ['updateRenderDamage'](_0x55a1a4) {
        this['ticksSinceLastDamaged'] = 0x0, this['lastTicksSinceLastDamaged'] = 0x0, this['previousTakenDamage'] = _0x55a1a4;
    }
    ['drawStatsBox'](_0x1379cb = ![], _0x54ccd9 = ![]) {
        if (window['statBoxes'] === ![])
            return;
        if (!this['stats']) {
            const _0x117457 = this['rarity'] = _0x54ccd9 ? this['rarity'] : Math['max'](0x3, Math['min'](0xc, Math['floor'](Math['random']() * (maxRarityObtained + 1.99)))), _0x3e012d = window['structuredClone'](window['enemyStats'][this['customType'] ?? this['type']]), _0x289c9c = enemyRarityScalars[_0x117457];
            _0x3e012d['xp'] = _0x289c9c['xp'], _0x3e012d['health'] *= _0x289c9c['health'];
            if (this['type'] == 'Starfish')
                _0x3e012d['healing'] = Math['round'](_0x3e012d['health'] * 0.007 * 0x1e * 0x64) / 0x64 + '/s';
            else
                this['type'] == 'Brisingida' && (_0x3e012d['healing'] = Math['round'](_0x3e012d['health'] * 0.009 * 0x1e * 0x64) / 0x64 + '/s');
            _0x3e012d['damage'] *= _0x289c9c['damage'], _0x3e012d['detectionDistance'] && (_0x3e012d['detectionDistance'] *= _0x289c9c['detectionDistance']), _0x3e012d['mass'] *= _0x289c9c['mass'], this['stats'] = _0x3e012d;
        }
        let _0x165708 = cachedImages['statBoxes']['enemies']['' + this['type'] + this['rarity']];
        (!_0x165708 || _0x165708['rarity'] !== this['rarity']) && (_0x165708 = undefined, cachedImages['statBoxes']['enemies']['' + this['type'] + this['rarity']] = new StatsBox(this['type'], this['stats'], 'enemies', 0x1, this['rarity'])), this['isHovered'] === !![] ? (this['statsBoxAlpha'] += 0.15 * dt / 0x12, this['statsBoxAlpha'] > 0x1 && (this['statsBoxAlpha'] = 0x1), ctx['globalAlpha'] = this['statsBoxAlpha']) : (this['statsBoxAlpha'] -= 0.15 * dt / 0x12, this['statsBoxAlpha'] < 0x0 && (this['statsBoxAlpha'] = 0x0)), this['statsBoxAlpha'] !== 0x0 && _0x165708 && (_0x165708['y'] = _0x1379cb ? this['render']['y'] + this['radius'] / 0x2 + 11.5 : this['render']['y'] - _0x165708['h'] - this['radius'] / 0x2 - 11.5, _0x165708['x'] = this['render']['x'], ctx['globalAlpha'] = this['statsBoxAlpha'], _0x165708['draw'](), ctx['globalAlpha'] = 0x1), this['isHovered'] = ![];
    }
    ['draw']() {
        if (window['Perf'])
            window['Perf']['mark']('Enemy.draw');
        if (!this['isMenuEnemy']) {
            if (this['isInEnemyBox'] === undefined && toRender({
                    'x': this['x'],
                    'y': this['y'],
                    'radius': this['radius']
                }, window['camera']) === ![]) {
                this['dead'] === !![] && (this['deadAnimationTimer'] += dt);
                return;
            }
        }
        this['updateInterpolate'](), this['lastTicksSinceLastDamaged'] = this['ticksSinceLastDamaged'];
        window['damageCounter'] && (this['ticksSinceLastDamaged'] == 0x0 && (this['resetDamageCount'] && (this['damageCount'] = 0x0, this['resetDamageCount'] = ![]), this['damageCount'] += this['previousTakenDamage'], this['damageCountCooldown'] = 0xf0), this['damageCountCooldown'] < 0x0 && (this['resetDamageCount'] = !![]), this['damageCountCooldown'] -= dt);
        this['ticksSinceLastDamaged'] += dt;
        this['ticksSinceLastDamaged'] > 0xa6 && (this['beforeStreakHp'] = this['hp']);
        ctx['translate'](this['render']['x'], this['render']['y']);
        if (this['dead'] === !![]) {
            var _0x191db6 = 0x1 + smoothstep(Math['log10'](this['deadAnimationTimer'] * 0.0432 + 0x1)) * 0.6;
            this['deadAnimationTimer'] += dt, ctx['scale'](_0x191db6, _0x191db6), ctx['globalAlpha'] = smoothstep(Math['max'](0x0, 0x1 - Math['cbrt'](this['deadAnimationTimer'] * 0.0048))), this['type'] === 'Custom' && (window['alphaMult'] = ctx['globalAlpha']);
        }
        let _0x2f9a3f;
        if (this['opacityMultiplier'] != undefined) {
            if (this['opacityMultiplier'] != 0x1) {
                _0x2f9a3f = ctx['globalAlpha'];
                if (isNaN(_0x2f9a3f))
                    _0x2f9a3f = 0x1;
                ctx['globalAlpha'] = _0x2f9a3f * this['opacityMultiplier'];
            }
        }
        this['sprite'](this);
        if (this['toRenderUi'] === !![] && (this['rarity'] > 0x3 || this['team'] == 'flower')) {
            let _0x54c72a = !![];
            this['type'] == 'Leech' && !this['isHead'] && (_0x54c72a = ![]), this['type'] == 'Electric\x20Eel' && !this['isHead'] && (_0x54c72a = ![]), this['type'] == 'Dark\x20Electric\x20Eel' && !this['isHead'] && (_0x54c72a = ![]), this['type'] == 'Shiny\x20Electric\x20Eel' && !this['isHead'] && (_0x54c72a = ![]), this['type'] == 'BudLeech' && !this['isHead'] && (_0x54c72a = ![]), _0x54c72a && enemyRenderMapText(this);
        }
        _0x2f9a3f && (ctx['globalAlpha'] = _0x2f9a3f);
        this['dead'] === !![] && (ctx['scale'](0x1 / _0x191db6, 0x1 / _0x191db6), ctx['globalAlpha'] = 0x1, this['type'] === 'Custom' && delete window['alphaMult']);
        if (this['thunderstruck'] && time < this['thunderstruck']) {
            const _0x53e3af = this['thunderstruck'] - time, _0x37110f = Math['min'](0x1, _0x53e3af / 0x7d0);
            ctx['save'](), ctx['strokeStyle'] = 'rgba(100,\x20200,\x20255,\x20' + _0x37110f * 0.8 + ')', ctx['lineWidth'] = 0x2, ctx['shadowColor'] = '#00ffff', ctx['shadowBlur'] = 0xa;
            const _0x50d925 = 0x5;
            for (let _0x40c5f5 = 0x0; _0x40c5f5 < _0x50d925; _0x40c5f5++) {
                const _0x1720cc = (time / 0xc8 + _0x40c5f5 * (Math['PI'] * 0x2 / _0x50d925)) % (Math['PI'] * 0x2), _0x436102 = this['render']['radius'] * 1.3, _0x17eb55 = this['render']['radius'] * 1.8, _0xcfd4e0 = Math['PI'] / 0x3;
                ctx['beginPath']();
                for (let _0x40fdcc = 0x0; _0x40fdcc <= 0xa; _0x40fdcc++) {
                    const _0x4778f6 = _0x40fdcc / 0xa, _0x555755 = _0x436102 + (_0x17eb55 - _0x436102) * Math['random'](), _0x299d2c = _0x1720cc + (_0x4778f6 - 0.5) * _0xcfd4e0 + (Math['random']() - 0.5) * 0.3, _0x179cef = Math['cos'](_0x299d2c) * _0x555755, _0x445390 = Math['sin'](_0x299d2c) * _0x555755;
                    if (_0x40fdcc === 0x0)
                        ctx['moveTo'](_0x179cef, _0x445390);
                    else
                        ctx['lineTo'](_0x179cef, _0x445390);
                }
                ctx['stroke']();
            }
            if (Math['random']() < 0.3) {
                const _0x4ed468 = Math['random']() * Math['PI'] * 0x2, _0x257284 = this['render']['radius'] * (0.5 + Math['random']() * 0.5);
                ctx['strokeStyle'] = 'rgba(200,\x20220,\x20255,\x20' + _0x37110f + ')', ctx['lineWidth'] = 0x1, ctx['beginPath'](), ctx['moveTo'](Math['cos'](_0x4ed468) * this['render']['radius'], Math['sin'](_0x4ed468) * this['render']['radius']), ctx['lineTo'](Math['cos'](_0x4ed468) * (this['render']['radius'] + _0x257284), Math['sin'](_0x4ed468) * (this['render']['radius'] + _0x257284)), ctx['stroke']();
            }
            ctx['restore']();
        }
        if (this['hasBandage']) {
            ctx['save'](), ctx['rotate'](this['render']['angle'] + Math['PI'] / 0x2);
            this['type']['includes']('Ant') && ctx['scale'](1.3, 1.3);
            const _0x32ce70 = this['render']['radius'], _0x164be1 = Math['max'](0x2, _0x32ce70 / 0xa), _0x96cee1 = '#b8af81', _0xdb4653 = '#e2d9a7', _0x284152 = _0x32ce70 * 0x1, _0x20f869 = _0x32ce70 * 0.35, _0xd8e023 = -_0x20f869 * 0x2;
            for (let _0x18a2c1 = 0x0; _0x18a2c1 < 0x5; _0x18a2c1++) {
                const _0x59d458 = _0x18a2c1 === 0x0 || _0x18a2c1 === 0x3 ? 0xa : _0x18a2c1 === 0x1 || _0x18a2c1 === 0x4 ? -0xa : 0xf, _0xf35ca6 = _0x59d458 * Math['PI'] / 0xb4, _0x14386e = Math['cos'](_0xf35ca6), _0xff338c = Math['sin'](_0xf35ca6), _0x1cd56f = _0xd8e023 + _0x18a2c1 * _0x20f869, _0x445ec8 = 0x0, _0x96b11c = _0x18a2c1 === 0x2 ? _0x284152 * 1.3 : _0x284152, _0x319d08 = _0x445ec8 - _0x14386e * _0x96b11c / 0x2, _0x535435 = _0x1cd56f - _0xff338c * _0x96b11c / 0x2, _0x5f4b9e = _0x445ec8 + _0x14386e * _0x96b11c / 0x2, _0x17e3b4 = _0x1cd56f + _0xff338c * _0x96b11c / 0x2, _0x1aaaa4 = -_0xff338c, _0x13e6f8 = _0x14386e, _0x5aecc4 = _0x164be1, _0x51a253 = [
                        [
                            _0x319d08 + _0x1aaaa4 * _0x5aecc4,
                            _0x535435 + _0x13e6f8 * _0x5aecc4
                        ],
                        [
                            _0x319d08 - _0x1aaaa4 * _0x5aecc4,
                            _0x535435 - _0x13e6f8 * _0x5aecc4
                        ],
                        [
                            _0x5f4b9e - _0x1aaaa4 * _0x5aecc4,
                            _0x17e3b4 - _0x13e6f8 * _0x5aecc4
                        ],
                        [
                            _0x5f4b9e + _0x1aaaa4 * _0x5aecc4,
                            _0x17e3b4 + _0x13e6f8 * _0x5aecc4
                        ]
                    ];
                ctx['fillStyle'] = _0xdb4653, ctx['beginPath'](), ctx['moveTo'](_0x51a253[0x0][0x0], _0x51a253[0x0][0x1]), ctx['lineTo'](_0x51a253[0x1][0x0], _0x51a253[0x1][0x1]), ctx['lineTo'](_0x51a253[0x2][0x0], _0x51a253[0x2][0x1]), ctx['lineTo'](_0x51a253[0x3][0x0], _0x51a253[0x3][0x1]), ctx['closePath'](), ctx['fill'](), ctx['strokeStyle'] = _0x96cee1, ctx['lineWidth'] = _0x164be1 * 0x2 / 0x3, ctx['stroke']();
            }
            const _0x4cb0d2 = 0x5a + 0xa, _0x4e047f = _0x4cb0d2 * Math['PI'] / 0xb4, _0x438914 = Math['cos'](_0x4e047f), _0x4dbd12 = Math['sin'](_0x4e047f), _0x55ef13 = _0x284152 * 1.5, _0x3125a9 = -_0x438914 * _0x55ef13 / 0x2, _0x234d9e = -_0x4dbd12 * _0x55ef13 / 0x2, _0x52e013 = _0x438914 * _0x55ef13 / 0x2, _0x59a339 = _0x4dbd12 * _0x55ef13 / 0x2, _0x40f839 = -_0x4dbd12, _0x3b188f = _0x438914, _0x3e0d09 = _0x164be1, _0x2b393c = [
                    [
                        _0x3125a9 + _0x40f839 * _0x3e0d09,
                        _0x234d9e + _0x3b188f * _0x3e0d09
                    ],
                    [
                        _0x3125a9 - _0x40f839 * _0x3e0d09,
                        _0x234d9e - _0x3b188f * _0x3e0d09
                    ],
                    [
                        _0x52e013 - _0x40f839 * _0x3e0d09,
                        _0x59a339 - _0x3b188f * _0x3e0d09
                    ],
                    [
                        _0x52e013 + _0x40f839 * _0x3e0d09,
                        _0x59a339 + _0x3b188f * _0x3e0d09
                    ]
                ];
            ctx['fillStyle'] = _0xdb4653, ctx['beginPath'](), ctx['moveTo'](_0x2b393c[0x0][0x0], _0x2b393c[0x0][0x1]), ctx['lineTo'](_0x2b393c[0x1][0x0], _0x2b393c[0x1][0x1]), ctx['lineTo'](_0x2b393c[0x2][0x0], _0x2b393c[0x2][0x1]), ctx['lineTo'](_0x2b393c[0x3][0x0], _0x2b393c[0x3][0x1]), ctx['closePath'](), ctx['fill'](), ctx['strokeStyle'] = _0x96cee1, ctx['lineWidth'] = _0x164be1 * 0x2 / 0x3, ctx['stroke'](), ctx['restore']();
        }
        ctx['translate'](-this['render']['x'], -this['render']['y']);
        if (window['Perf'])
            window['Perf']['end']('Enemy.draw');
    }
}
const enemyDataMap = {
    'Ladybug': _0x515169 => {
        if (window['isEditor'] === !![]) {
            const _0x5eafa1 = [];
            for (let _0x82ed2f = 0x0; _0x82ed2f < 0x9; _0x82ed2f++) {
                _0x5eafa1[_0x82ed2f] = Math['random']();
            }
            return _0x5eafa1;
        }
        let _0x249ab3 = [];
        for (let _0x3ee297 = 0x0; _0x3ee297 < Math['ceil'](Math['min'](_0x515169['rarity'], 0x5) ** 1.5) * 0x3 + 0x9; _0x3ee297 += 0x3) {
            _0x249ab3[_0x3ee297] = Math['random']() * 0.9, Math['round'](Math['random']()) === 0x1 ? _0x249ab3[_0x3ee297 + 0x1] = Math['random']() * 0.9 : _0x249ab3[_0x3ee297 + 0x1] = 0x0 - Math['random']() * 0.9, _0x249ab3[_0x3ee297 + 0x2] = Math['random']() * _0x515169['rarity'] / 0x5;
        }
        return _0x249ab3;
    },
    'Moonlit\x20Frog': _0x3c69a1 => {
        return Math['floor'](Math['random']() * 0x64);
    },
    'Sunlit\x20Frog': _0x369733 => {
        return Math['floor'](Math['random']() * 0x64);
    },
    'Ruby\x20Frog': _0xdfdf22 => {
        return Math['floor'](Math['random']() * 0x64);
    },
    'Poison\x20Dart\x20Frog': _0x11650b => {
        let _0x39c37c = [];
        for (let _0x5a9f5e = 0x0; _0x5a9f5e < 0xf; _0x5a9f5e += 0x3) {
            _0x39c37c[_0x5a9f5e] = Math['random']() * 0.9, Math['round'](Math['random']()) === 0x1 ? _0x39c37c[_0x5a9f5e + 0x1] = Math['random']() * 0.9 : _0x39c37c[_0x5a9f5e + 0x1] = 0x0 - Math['random']() * 0.9, _0x39c37c[_0x5a9f5e + 0x2] = Math['random']();
        }
        return [
            Math['floor'](Math['random']() * 0x64),
            [
                '#2f3fce',
                '#ffeb0c',
                '#fe9509'
            ][Math['random']() * 0x3 | 0x0],
            _0x39c37c
        ];
    },
    'Dark\x20Ladybug': _0x38e45e => {
        if (window['isEditor'] === !![]) {
            const _0x3ccb7e = [];
            for (let _0x1f7553 = 0x0; _0x1f7553 < 0x9; _0x1f7553++) {
                _0x3ccb7e[_0x1f7553] = Math['random']();
            }
            return _0x3ccb7e;
        }
        let _0x3ceac5 = [];
        for (let _0x22ee93 = 0x0; _0x22ee93 < Math['ceil'](Math['min'](_0x38e45e['rarity'], 0x5) ** 1.5) * 0x3 + 0x9; _0x22ee93 += 0x3) {
            _0x3ceac5[_0x22ee93] = Math['random']() * 0.9, Math['round'](Math['random']()) === 0x1 ? _0x3ceac5[_0x22ee93 + 0x1] = Math['random']() * 0.9 : _0x3ceac5[_0x22ee93 + 0x1] = 0x0 - Math['random']() * 0.9, _0x3ceac5[_0x22ee93 + 0x2] = Math['random']() * _0x38e45e['rarity'] / 0x5;
        }
        return _0x3ceac5;
    },
    'Shiny\x20Ladybug': _0x5ceb4f => {
        if (window['isEditor'] === !![]) {
            const _0x4c498d = [];
            for (let _0x4795a0 = 0x0; _0x4795a0 < 0x9; _0x4795a0++) {
                _0x4c498d[_0x4795a0] = Math['random']();
            }
            return _0x4c498d;
        }
        let _0xf6795 = [];
        for (let _0x159d5b = 0x0; _0x159d5b < Math['ceil'](Math['min'](_0x5ceb4f['rarity'], 0x5) ** 1.5) * 0x3 + 0x9; _0x159d5b += 0x3) {
            _0xf6795[_0x159d5b] = Math['random']() * 0.9, Math['round'](Math['random']()) === 0x1 ? _0xf6795[_0x159d5b + 0x1] = Math['random']() * 0.9 : _0xf6795[_0x159d5b + 0x1] = 0x0 - Math['random']() * 0.9, _0xf6795[_0x159d5b + 0x2] = Math['random']() * _0x5ceb4f['rarity'] / 0x5;
        }
        return _0xf6795;
    },
    'Ocean\x20Ladybug': _0x4389c3 => {
        if (window['isEditor'] === !![]) {
            const _0x185a55 = [];
            for (let _0xde715c = 0x0; _0xde715c < 0x9; _0xde715c++) {
                _0x185a55[_0xde715c] = Math['random']();
            }
            return _0x185a55;
        }
        let _0x4f51fd = [];
        for (let _0x5f2426 = 0x0; _0x5f2426 < Math['ceil'](Math['min'](_0x4389c3['rarity'], 0x5) ** 1.5) * 0x3 + 0x9; _0x5f2426 += 0x3) {
            _0x4f51fd[_0x5f2426] = Math['random']() * 0.9, Math['round'](Math['random']()) === 0x1 ? _0x4f51fd[_0x5f2426 + 0x1] = Math['random']() * 0.9 : _0x4f51fd[_0x5f2426 + 0x1] = 0x0 - Math['random']() * 0.9, _0x4f51fd[_0x5f2426 + 0x2] = Math['random']() * _0x4389c3['rarity'] / 0x5;
        }
        return _0x4f51fd;
    },
    'Cactus': _0x3fe6bf => {
        const _0x2beded = Math['max'](0xa, Math['ceil'](_0x3fe6bf['radius'] * Math['PI'] * 0x2 / 0x30));
        return [
            Math['ceil'](Math['PI'] * 0x2 / _0x2beded * 0x2710) / 0x2710,
            Math['PI'] * Math['random']() * 0x2,
            Math['random']() < 0.001 ? !![] : ![]
        ];
    },
    'Shiny\x20Cactus': _0x51b767 => {
        const _0x1fa232 = Math['max'](0xa, Math['ceil'](_0x51b767['radius'] * Math['PI'] * 0x2 / 0x30));
        return [
            Math['ceil'](Math['PI'] * 0x2 / _0x1fa232 * 0x2710) / 0x2710,
            Math['PI'] * Math['random']() * 0x2,
            Math['random']() < 0.001 ? !![] : ![]
        ];
    },
    'Sponge': _0x9711d7 => {
        return [
            Math['floor'](Math['random']() * 3.00001),
            Math['PI'] * Math['random']() * 0x2
        ];
    },
    'Mushroom': _0x3940cd => {
        return [
            Math['floor'](Math['random']() * 3.00001),
            Math['PI'] * Math['random']() * 0x2
        ];
    },
    'MushroomMissile': _0xa94743 => {
        return [Math['PI'] * Math['random']() * 0x2];
    },
    'Plastic': _0x410956 => {
        return [Math['PI'] * Math['random']() * 0x2];
    },
    'Shiny\x20Plastic': _0x51c8ae => {
        return [Math['PI'] * Math['random']() * 0x2];
    },
    'Starfish': _0x34f8e0 => {
        return [[
                0x1,
                0x1,
                0x1,
                0x1,
                0x1
            ]];
    },
    'Brisingida': _0x1c3eb2 => {
        return [[
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1,
                0x1
            ]];
    },
    'Rock': _0x743db5 => {
        const _0x400fd4 = [];
        let _0x176c29 = Math['PI'] * 0x2 / Math['ceil'](Math['log'](_0x743db5['radius']) * 0x2 + 0x2 + Math['random']() * 0x2), _0x5b318b = (_0x743db5['radius'] + Math['random']() * 0x3 - 0x1) / 0x5;
        _0x743db5['rarity'] >= 0x6 && (_0x5b318b += 0x14);
        const _0x40a302 = Math['random']() * Math['PI'] * 0x2;
        for (let _0x2c3e66 = _0x40a302; _0x2c3e66 < Math['PI'] * 0x2 + _0x40a302; _0x2c3e66 += _0x176c29) {
            _0x400fd4['push']({
                'x': Math['cos'](_0x2c3e66),
                'y': Math['sin'](_0x2c3e66),
                'randX': Math['random']() * _0x5b318b / _0x743db5['radius'],
                'randY': Math['random']() * _0x5b318b / _0x743db5['radius']
            });
        }
        _0x743db5['maxVertexOffset'] = _0x5b318b, _0x743db5['averageX'] = 0x0, _0x743db5['averageY'] = 0x0;
        for (let _0x4cbaa4 = 0x0; _0x4cbaa4 < _0x400fd4['length']; _0x4cbaa4++) {
            _0x743db5['averageX'] += _0x400fd4[_0x4cbaa4]['randX'], _0x743db5['averageY'] += _0x400fd4[_0x4cbaa4]['randY'];
        }
        _0x743db5['averageX'] /= _0x400fd4['length'], _0x743db5['averageY'] /= _0x400fd4['length'];
        for (let _0x261a26 = 0x0; _0x261a26 < _0x400fd4['length']; _0x261a26++) {
            _0x400fd4[_0x261a26]['randX'] -= _0x743db5['averageX'], _0x400fd4[_0x261a26]['randY'] -= _0x743db5['averageY'];
        }
        return _0x743db5['getVertexX'] = _0x46bd6b => {
            return _0x743db5['data'][_0x46bd6b]['x'] * _0x743db5['render']['radius'] + _0x743db5['data'][_0x46bd6b]['randX'] * _0x743db5['radius'];
        }, _0x743db5['getVertexY'] = _0x12e8ea => {
            return _0x743db5['data'][_0x12e8ea]['y'] * _0x743db5['render']['radius'] + _0x743db5['data'][_0x12e8ea]['randY'] * _0x743db5['radius'];
        }, _0x400fd4;
    },
    'Coral': _0x39986f => {
        return 0x4 + (Math['random']() * 0x4 | 0x0);
    },
    'Sandstone': _0xb12343 => {
        const _0x6ad09d = [];
        let _0x3920a0 = Math['PI'] * 0x2 / Math['ceil'](Math['log'](_0xb12343['radius']) * 0x2 + 0x2 + Math['random']() * 0x2), _0x2a0794 = (_0xb12343['radius'] + Math['random']() * 0x3 - 0x1) / 0x5;
        _0xb12343['rarity'] >= 0x6 && (_0x2a0794 += 0x14);
        const _0x8b2302 = Math['random']() * Math['PI'] * 0x2;
        for (let _0x2fb9da = _0x8b2302; _0x2fb9da < Math['PI'] * 0x2 + _0x8b2302; _0x2fb9da += _0x3920a0) {
            _0x6ad09d['push']({
                'x': Math['cos'](_0x2fb9da),
                'y': Math['sin'](_0x2fb9da),
                'randX': Math['random']() * _0x2a0794 / _0xb12343['radius'],
                'randY': Math['random']() * _0x2a0794 / _0xb12343['radius']
            });
        }
        _0xb12343['maxVertexOffset'] = _0x2a0794, _0xb12343['averageX'] = 0x0, _0xb12343['averageY'] = 0x0;
        for (let _0xc499d9 = 0x0; _0xc499d9 < _0x6ad09d['length']; _0xc499d9++) {
            _0xb12343['averageX'] += _0x6ad09d[_0xc499d9]['randX'], _0xb12343['averageY'] += _0x6ad09d[_0xc499d9]['randY'];
        }
        _0xb12343['averageX'] /= _0x6ad09d['length'], _0xb12343['averageY'] /= _0x6ad09d['length'];
        for (let _0x33821e = 0x0; _0x33821e < _0x6ad09d['length']; _0x33821e++) {
            _0x6ad09d[_0x33821e]['randX'] -= _0xb12343['averageX'], _0x6ad09d[_0x33821e]['randY'] -= _0xb12343['averageY'];
        }
        return _0xb12343['getVertexX'] = _0x12f0ec => {
            return _0xb12343['data'][_0x12f0ec]['x'] * _0xb12343['render']['radius'] + _0xb12343['data'][_0x12f0ec]['randX'] * _0xb12343['radius'];
        }, _0xb12343['getVertexY'] = _0x21c132 => {
            return _0xb12343['data'][_0x21c132]['y'] * _0xb12343['render']['radius'] + _0xb12343['data'][_0x21c132]['randY'] * _0xb12343['radius'];
        }, _0x6ad09d;
    },
    'Rock\x20Tank': _0x4194a8 => {
        const _0x301527 = [];
        let _0x27e53c = Math['PI'] * 0x2 / Math['ceil'](Math['log'](_0x4194a8['radius']) * 0x2 + 0x2 + Math['random']() * 0x2), _0x5ca540 = (_0x4194a8['radius'] + Math['random']() * 0x3 - 0x1) / 0x5;
        _0x4194a8['rarity'] >= 0x6 && (_0x5ca540 += 0x14);
        const _0x3b4594 = Math['random']() * Math['PI'] * 0x2;
        for (let _0x4d7002 = _0x3b4594; _0x4d7002 < Math['PI'] * 0x2 + _0x3b4594; _0x4d7002 += _0x27e53c) {
            _0x301527['push']({
                'x': Math['cos'](_0x4d7002),
                'y': Math['sin'](_0x4d7002),
                'randX': Math['random']() * _0x5ca540 / _0x4194a8['radius'],
                'randY': Math['random']() * _0x5ca540 / _0x4194a8['radius']
            });
        }
        _0x4194a8['maxVertexOffset'] = _0x5ca540, _0x4194a8['averageX'] = 0x0, _0x4194a8['averageY'] = 0x0;
        for (let _0x35efdc = 0x0; _0x35efdc < _0x301527['length']; _0x35efdc++) {
            _0x4194a8['averageX'] += _0x301527[_0x35efdc]['randX'], _0x4194a8['averageY'] += _0x301527[_0x35efdc]['randY'];
        }
        _0x4194a8['averageX'] /= _0x301527['length'], _0x4194a8['averageY'] /= _0x301527['length'];
        for (let _0x478470 = 0x0; _0x478470 < _0x301527['length']; _0x478470++) {
            _0x301527[_0x478470]['randX'] -= _0x4194a8['averageX'], _0x301527[_0x478470]['randY'] -= _0x4194a8['averageY'];
        }
        return _0x4194a8['getVertexX'] = _0x5b93a0 => {
            return _0x4194a8['data'][_0x5b93a0]['x'] * _0x4194a8['render']['radius'] + _0x4194a8['data'][_0x5b93a0]['randX'] * _0x4194a8['radius'];
        }, _0x4194a8['getVertexY'] = _0x4db97b => {
            return _0x4194a8['data'][_0x4db97b]['y'] * _0x4194a8['render']['radius'] + _0x4194a8['data'][_0x4db97b]['randY'] * _0x4194a8['radius'];
        }, _0x301527;
    },
    'RockMissile': _0x114256 => {
        const _0x200eda = [];
        let _0x173c15 = Math['PI'] * 0x2 / Math['ceil'](Math['log'](_0x114256['radius']) * 0x2 + 0x2 + Math['random']() * 0x2), _0x363c5d = (_0x114256['radius'] + Math['random']() * 0x3 - 0x1) / 0x5;
        _0x114256['rarity'] >= 0x6 && (_0x363c5d += 0x14);
        const _0x5a396f = Math['random']() * Math['PI'] * 0x2;
        for (let _0x1ab76b = _0x5a396f; _0x1ab76b < Math['PI'] * 0x2 + _0x5a396f; _0x1ab76b += _0x173c15) {
            _0x200eda['push']({
                'x': Math['cos'](_0x1ab76b),
                'y': Math['sin'](_0x1ab76b),
                'randX': Math['random']() * _0x363c5d / _0x114256['radius'],
                'randY': Math['random']() * _0x363c5d / _0x114256['radius']
            });
        }
        _0x114256['maxVertexOffset'] = _0x363c5d, _0x114256['averageX'] = 0x0, _0x114256['averageY'] = 0x0;
        for (let _0x12be31 = 0x0; _0x12be31 < _0x200eda['length']; _0x12be31++) {
            _0x114256['averageX'] += _0x200eda[_0x12be31]['randX'], _0x114256['averageY'] += _0x200eda[_0x12be31]['randY'];
        }
        _0x114256['averageX'] /= _0x200eda['length'], _0x114256['averageY'] /= _0x200eda['length'];
        for (let _0xa8ac87 = 0x0; _0xa8ac87 < _0x200eda['length']; _0xa8ac87++) {
            _0x200eda[_0xa8ac87]['randX'] -= _0x114256['averageX'], _0x200eda[_0xa8ac87]['randY'] -= _0x114256['averageY'];
        }
        return _0x114256['getVertexX'] = _0x831511 => {
            return _0x114256['data'][_0x831511]['x'] * _0x114256['render']['radius'] + _0x114256['data'][_0x831511]['randX'] * _0x114256['radius'];
        }, _0x114256['getVertexY'] = _0x2f55f6 => {
            return _0x114256['data'][_0x2f55f6]['y'] * _0x114256['render']['radius'] + _0x114256['data'][_0x2f55f6]['randY'] * _0x114256['radius'];
        }, _0x200eda;
    },
    'BigRockMissile': _0x50317c => {
        const _0x4d436f = [];
        let _0x560d52 = Math['PI'] * 0x2 / Math['ceil'](Math['log'](_0x50317c['radius']) * 0x2 + 0x2 + Math['random']() * 0x2), _0x2c1875 = (_0x50317c['radius'] + Math['random']() * 0x3 - 0x1) / 0x5;
        _0x50317c['rarity'] >= 0x6 && (_0x2c1875 += 0x14);
        const _0x32096d = Math['random']() * Math['PI'] * 0x2;
        for (let _0x212773 = _0x32096d; _0x212773 < Math['PI'] * 0x2 + _0x32096d; _0x212773 += _0x560d52) {
            _0x4d436f['push']({
                'x': Math['cos'](_0x212773),
                'y': Math['sin'](_0x212773),
                'randX': Math['random']() * _0x2c1875 / _0x50317c['radius'],
                'randY': Math['random']() * _0x2c1875 / _0x50317c['radius']
            });
        }
        _0x50317c['maxVertexOffset'] = _0x2c1875, _0x50317c['averageX'] = 0x0, _0x50317c['averageY'] = 0x0;
        for (let _0x590202 = 0x0; _0x590202 < _0x4d436f['length']; _0x590202++) {
            _0x50317c['averageX'] += _0x4d436f[_0x590202]['randX'], _0x50317c['averageY'] += _0x4d436f[_0x590202]['randY'];
        }
        _0x50317c['averageX'] /= _0x4d436f['length'], _0x50317c['averageY'] /= _0x4d436f['length'];
        for (let _0x303011 = 0x0; _0x303011 < _0x4d436f['length']; _0x303011++) {
            _0x4d436f[_0x303011]['randX'] -= _0x50317c['averageX'], _0x4d436f[_0x303011]['randY'] -= _0x50317c['averageY'];
        }
        return _0x50317c['getVertexX'] = _0x2d61a6 => {
            return _0x50317c['data'][_0x2d61a6]['x'] * _0x50317c['render']['radius'] + _0x50317c['data'][_0x2d61a6]['randX'] * _0x50317c['radius'];
        }, _0x50317c['getVertexY'] = _0x239366 => {
            return _0x50317c['data'][_0x239366]['y'] * _0x50317c['render']['radius'] + _0x50317c['data'][_0x239366]['randY'] * _0x50317c['radius'];
        }, _0x4d436f;
    },
    'Agar.io\x20Cell': _0x49be55 => {
        _0x49be55['offsets'] = [], _0x49be55['velocities'] = [];
        for (let _0x137785 = 0x0; _0x137785 < 0x2e; _0x137785++) {
            _0x49be55['offsets'][_0x137785] = (Math['random']() - 0.5) * 0x2 * 0x3, _0x49be55['velocities'][_0x137785] = (Math['random']() - 0.5) * 0x2 / 3.56;
        }
        function _0x18041e() {
            var _0xe6e57a = '0123456789ABCDEF', _0x2dc695 = '#';
            for (var _0x2b7ce1 = 0x0; _0x2b7ce1 < 0x6; _0x2b7ce1++) {
                _0x2dc695 += _0xe6e57a[Math['floor'](Math['random']() * 0x10)];
            }
            return _0x2dc695;
        }
        _0x49be55['col'] = _0x18041e(), _0x49be55['positions'] = new Array(0x2e);
    },
    'Lilypad': _0x15267c => {
        return [
            1.5 + Math['random']() * 0.325,
            Math['random']() * Math['PI'] * 0x2
        ];
    },
    'Flowering\x20Lilypad': _0x59040b => {
        return [
            1.5 + Math['random']() * 0.325,
            Math['random']() * Math['PI'] * 0x2
        ];
    },
    'Shiny\x20Lilypad': _0x4a57eb => {
        return [
            1.5 + Math['random']() * 0.325,
            Math['random']() * Math['PI'] * 0x2
        ];
    },
    'Coconut': _0x25d096 => {
        return Math['random']() * Math['PI'] * 0x2;
    },
    'Tree': _0x227852 => {
        return [
            Math['random']() * -Math['PI'],
            0.4 + Math['random']() * 0.4,
            Math['random']() * Math['PI'],
            0.4 + Math['random']() * 0.4
        ];
    }
};
function blendAmount(_0x10930d) {
    return Math['max'](0x0, 0x1 - _0x10930d['ticksSinceLastDamaged'] / 166.5);
}
function checkForFirstFrame(_0x105dcf) {
    return _0x105dcf['lastTicksSinceLastDamaged'] < 0xd && !damageFlash;
}
attemptDrawCache = function attemptDrawCache(_0xa9d477, _0x3bd879, _0x3a4df5 = 0x2) {
    if (_0xa9d477['cachedImage'] && !checkForFirstFrame(_0xa9d477) && blendAmount(_0xa9d477) <= 0x0)
        return ctx['rotate'](_0x3bd879), ctx['scale'](Math['max'](0.01, _0xa9d477['radius'] / _0xa9d477['cachedRadius']), Math['max'](0.01, _0xa9d477['radius'] / _0xa9d477['cachedRadius'])), ctx['drawImage'](_0xa9d477['cachedImage'], -_0x3a4df5 * _0xa9d477['cachedRadius'], -_0x3a4df5 * _0xa9d477['cachedRadius']), ctx['scale'](0x1 / Math['max'](0.01, _0xa9d477['radius'] / _0xa9d477['cachedRadius']), 0x1 / Math['max'](0.01, _0xa9d477['radius'] / _0xa9d477['cachedRadius'])), ctx['rotate'](-_0x3bd879), !![];
    return ![];
}, checkToCache = function checkToCache(_0x231a0f, _0x106c1b = 0x2) {
    if (!_0x231a0f['cachedImage'] && _0x231a0f['render']['radius'] == _0x231a0f['radius']) {
        _0x231a0f['render']['radius'] = _0x231a0f['radius'], _0x231a0f['cachedRadius'] = _0x231a0f['radius'], _0x231a0f['cachedImage'] = new OffscreenCanvas(Math['max'](0x1, 0x2 * _0x106c1b * _0x231a0f['render']['radius']), Math['max'](0x1, 0x2 * _0x106c1b * _0x231a0f['render']['radius']));
        let _0x25e5ed = ctx;
        return ctx = _0x231a0f['cachedImage']['getContext']('2d'), ctx['lineCap'] = _0x25e5ed['lineCap'], ctx['lineJoin'] = _0x25e5ed['lineJoin'], ctx['translate'](_0x106c1b * _0x231a0f['render']['radius'], _0x106c1b * _0x231a0f['render']['radius']), _0x25e5ed;
    }
    return null;
};
function finishCache(_0x1b71c6, _0x4f5bf0, _0x1589ea = 0x2) {
    _0x4f5bf0 && (_0x4f5bf0['drawImage'](_0x1b71c6['cachedImage'], -_0x1589ea * _0x1b71c6['render']['radius'], -_0x1589ea * _0x1b71c6['render']['radius']), ctx = _0x4f5bf0);
}
let normalEnemyRenderMap = {
        'Ladybug': _0x2aea75 => {
            if (attemptDrawCache(_0x2aea75, _0x2aea75['render']['angle'] + Math['PI']))
                return;
            let _0x41748c = enemyColor('#EB4034', _0x2aea75), _0x4ab2e8 = enemyColor('#111111', _0x2aea75);
            ctx['rotate'](_0x2aea75['render']['angle'] + Math['PI']);
            let _0x9ad9ac = checkToCache(_0x2aea75);
            ctx['strokeStyle'] = blendColor(_0x4ab2e8, '#000000', 0.19), ctx['fillStyle'] = _0x4ab2e8, ctx['lineWidth'] = _0x2aea75['render']['radius'] / 0x5, ctx['beginPath'](), ctx['arc'](-_0x2aea75['render']['radius'] / 0x2, 0x0, _0x2aea75['render']['radius'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor(_0x41748c, '#000000', 0.19), ctx['fillStyle'] = _0x41748c, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2aea75['render']['radius'], 5.9375 / 0x5 * Math['PI'], 4.0625 / 0x5 * Math['PI']), ctx['quadraticCurveTo'](-0xa, 0x0, Math['cos'](5.9375 / 0x5 * Math['PI']) * _0x2aea75['render']['radius'], Math['sin'](5.9375 / 0x5 * Math['PI']) * _0x2aea75['render']['radius']), ctx['closePath'](), ctx['fill'](), ctx['save'](), ctx['clip'](), ctx['fillStyle'] = _0x4ab2e8;
            for (let _0x2b1138 = 0x0; _0x2b1138 < Math['ceil'](Math['min'](_0x2aea75['rarity'], 0x5) ** 1.5) * 0x3 + 0x9; _0x2b1138 += 0x3) {
                ctx['beginPath'](), ctx['arc']((-0.5 + _0x2aea75['data'][_0x2b1138]) * _0x2aea75['render']['radius'] / 0x1e * 0x23, -0.5 + _0x2aea75['data'][_0x2b1138 + 0x1] * _0x2aea75['render']['radius'] / 0x1e * 0x23, _0x2aea75['render']['radius'] / 0x1e * (0x5 + _0x2aea75['data'][_0x2b1138 + 0x2] * 0x5), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            ctx['restore'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2aea75['render']['radius'], 5.9375 / 0x5 * Math['PI'], 4.0625 / 0x5 * Math['PI']), ctx['quadraticCurveTo'](-0xa, 0x0, Math['cos'](5.9375 / 0x5 * Math['PI']) * _0x2aea75['render']['radius'], Math['sin'](5.9375 / 0x5 * Math['PI']) * _0x2aea75['render']['radius']), ctx['stroke'](), ctx['closePath'](), finishCache(_0x2aea75, _0x9ad9ac), ctx['rotate'](-_0x2aea75['render']['angle'] - Math['PI']);
        },
        'Dark\x20Ladybug': _0x5f0db9 => {
            if (attemptDrawCache(_0x5f0db9, _0x5f0db9['render']['angle'] + Math['PI']))
                return;
            let _0x2b402a = enemyColor('#962921', _0x5f0db9), _0x532a6c = enemyColor('#be342a', _0x5f0db9), _0x1ec9b0 = enemyColor('#111111', _0x5f0db9);
            ctx['rotate'](_0x5f0db9['render']['angle'] + Math['PI']);
            let _0x4d19bc = checkToCache(_0x5f0db9);
            ctx['strokeStyle'] = blendColor(_0x1ec9b0, '#000000', 0.19), ctx['fillStyle'] = _0x1ec9b0, ctx['lineWidth'] = _0x5f0db9['render']['radius'] / 0x5, ctx['beginPath'](), ctx['arc'](-_0x5f0db9['render']['radius'] / 0x2, 0x0, _0x5f0db9['render']['radius'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor(_0x2b402a, '#000000', 0.19), ctx['fillStyle'] = _0x2b402a, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5f0db9['render']['radius'], 5.9375 / 0x5 * Math['PI'], 4.0625 / 0x5 * Math['PI']), ctx['quadraticCurveTo'](-0xa, 0x0, Math['cos'](5.9375 / 0x5 * Math['PI']) * _0x5f0db9['render']['radius'], Math['sin'](5.9375 / 0x5 * Math['PI']) * _0x5f0db9['render']['radius']), ctx['closePath'](), ctx['fill'](), ctx['save'](), ctx['clip'](), ctx['fillStyle'] = _0x532a6c;
            for (let _0x3c4429 = 0x0; _0x3c4429 < Math['ceil'](Math['min'](_0x5f0db9['rarity'], 0x5) ** 1.5) * 0x3 + 0x9; _0x3c4429 += 0x3) {
                ctx['beginPath'](), ctx['arc']((-0.5 + _0x5f0db9['data'][_0x3c4429]) * _0x5f0db9['render']['radius'] / 0x1e * 0x23, -0.5 + _0x5f0db9['data'][_0x3c4429 + 0x1] * _0x5f0db9['render']['radius'] / 0x1e * 0x23, _0x5f0db9['render']['radius'] / 0x1e * (0x5 + _0x5f0db9['data'][_0x3c4429 + 0x2] * 0x5), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            ctx['restore'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5f0db9['render']['radius'], 5.9375 / 0x5 * Math['PI'], 4.0625 / 0x5 * Math['PI']), ctx['quadraticCurveTo'](-0xa, 0x0, Math['cos'](5.9375 / 0x5 * Math['PI']) * _0x5f0db9['render']['radius'], Math['sin'](5.9375 / 0x5 * Math['PI']) * _0x5f0db9['render']['radius']), ctx['stroke'](), ctx['closePath'](), finishCache(_0x5f0db9, _0x4d19bc), ctx['rotate'](-_0x5f0db9['render']['angle'] - Math['PI']);
        },
        'Shiny\x20Ladybug': _0x2e3c69 => {
            if (attemptDrawCache(_0x2e3c69, _0x2e3c69['render']['angle'] + Math['PI']))
                return;
            let _0x26a68e = enemyColor('#ebeb34', _0x2e3c69), _0xa29431 = enemyColor('#111111', _0x2e3c69), _0x16ffec = enemyColor('#111111', _0x2e3c69);
            ctx['rotate'](_0x2e3c69['render']['angle'] + Math['PI']);
            let _0x5046e7 = checkToCache(_0x2e3c69);
            ctx['strokeStyle'] = blendColor(_0x16ffec, '#000000', 0.19), ctx['fillStyle'] = _0x16ffec, ctx['lineWidth'] = _0x2e3c69['render']['radius'] / 0x5, ctx['beginPath'](), ctx['arc'](-_0x2e3c69['render']['radius'] / 0x2, 0x0, _0x2e3c69['render']['radius'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor(_0x26a68e, '#000000', 0.19), ctx['fillStyle'] = _0x26a68e, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2e3c69['render']['radius'], 5.9375 / 0x5 * Math['PI'], 4.0625 / 0x5 * Math['PI']), ctx['quadraticCurveTo'](-0xa, 0x0, Math['cos'](5.9375 / 0x5 * Math['PI']) * _0x2e3c69['render']['radius'], Math['sin'](5.9375 / 0x5 * Math['PI']) * _0x2e3c69['render']['radius']), ctx['closePath'](), ctx['fill'](), ctx['save'](), ctx['clip'](), ctx['fillStyle'] = _0xa29431;
            for (let _0x3608f9 = 0x0; _0x3608f9 < Math['ceil'](Math['min'](_0x2e3c69['rarity'], 0x5) ** 1.5) * 0x3 + 0x9; _0x3608f9 += 0x3) {
                ctx['beginPath'](), ctx['arc']((-0.5 + _0x2e3c69['data'][_0x3608f9]) * _0x2e3c69['render']['radius'] / 0x1e * 0x23, -0.5 + _0x2e3c69['data'][_0x3608f9 + 0x1] * _0x2e3c69['render']['radius'] / 0x1e * 0x23, _0x2e3c69['render']['radius'] / 0x1e * (0x5 + _0x2e3c69['data'][_0x3608f9 + 0x2] * 0x5), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            ctx['restore'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2e3c69['render']['radius'], 5.9375 / 0x5 * Math['PI'], 4.0625 / 0x5 * Math['PI']), ctx['quadraticCurveTo'](-0xa, 0x0, Math['cos'](5.9375 / 0x5 * Math['PI']) * _0x2e3c69['render']['radius'], Math['sin'](5.9375 / 0x5 * Math['PI']) * _0x2e3c69['render']['radius']), ctx['stroke'](), ctx['closePath'](), finishCache(_0x2e3c69, _0x5046e7), ctx['rotate'](-_0x2e3c69['render']['angle'] - Math['PI']);
        },
        'Ocean\x20Ladybug': _0x563856 => {
            if (attemptDrawCache(_0x563856, _0x563856['render']['angle'] + Math['PI']))
                return;
            let _0x18e661 = enemyColor('#2ae8e5', _0x563856), _0x236650 = enemyColor('#111111', _0x563856), _0x209b99 = enemyColor('#111111', _0x563856);
            ctx['rotate'](_0x563856['render']['angle'] + Math['PI']);
            let _0x201d4f = checkToCache(_0x563856);
            ctx['strokeStyle'] = blendColor(_0x209b99, '#000000', 0.19), ctx['fillStyle'] = _0x209b99, ctx['lineWidth'] = _0x563856['render']['radius'] / 0x5, ctx['beginPath'](), ctx['arc'](-_0x563856['render']['radius'] / 0x2, 0x0, _0x563856['render']['radius'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor(_0x18e661, '#000000', 0.19), ctx['fillStyle'] = _0x18e661, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x563856['render']['radius'], 5.9375 / 0x5 * Math['PI'], 4.0625 / 0x5 * Math['PI']), ctx['quadraticCurveTo'](-0xa, 0x0, Math['cos'](5.9375 / 0x5 * Math['PI']) * _0x563856['render']['radius'], Math['sin'](5.9375 / 0x5 * Math['PI']) * _0x563856['render']['radius']), ctx['closePath'](), ctx['fill'](), ctx['save'](), ctx['clip'](), ctx['fillStyle'] = _0x236650;
            for (let _0x557c9d = 0x0; _0x557c9d < Math['ceil'](Math['min'](_0x563856['rarity'], 0x5) ** 1.5) * 0x3 + 0x9; _0x557c9d += 0x3) {
                ctx['beginPath'](), ctx['arc']((-0.5 + _0x563856['data'][_0x557c9d]) * _0x563856['render']['radius'] / 0x1e * 0x23, -0.5 + _0x563856['data'][_0x557c9d + 0x1] * _0x563856['render']['radius'] / 0x1e * 0x23, _0x563856['render']['radius'] / 0x1e * (0x5 + _0x563856['data'][_0x557c9d + 0x2] * 0x5), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            ctx['restore'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x563856['render']['radius'], 5.9375 / 0x5 * Math['PI'], 4.0625 / 0x5 * Math['PI']), ctx['quadraticCurveTo'](-0xa, 0x0, Math['cos'](5.9375 / 0x5 * Math['PI']) * _0x563856['render']['radius'], Math['sin'](5.9375 / 0x5 * Math['PI']) * _0x563856['render']['radius']), ctx['stroke'](), ctx['closePath'](), finishCache(_0x563856, _0x201d4f), ctx['rotate'](-_0x563856['render']['angle'] - Math['PI']);
        },
        'Soil': _0x20b76b => {
            ctx['beginPath'](), ctx['fillStyle'] = enemyColor('#695118', _0x20b76b), ctx['strokeStyle'] = enemyColor('#554213', _0x20b76b), ctx['lineWidth'] = _0x20b76b['render']['radius'] / 0x3, (ctx['moveTo'](_0x20b76b['render']['radius'] * 1.28, _0x20b76b['render']['radius'] * -0.25), ctx['lineTo'](_0x20b76b['render']['radius'] * 0.88, _0x20b76b['render']['radius'] * 0.7), ctx['lineTo'](_0x20b76b['render']['radius'] * -0.04, _0x20b76b['render']['radius'] * 1.15), ctx['lineTo'](_0x20b76b['render']['radius'] * -0.97, _0x20b76b['render']['radius'] * 0.71), ctx['lineTo'](_0x20b76b['render']['radius'] * -1.23, _0x20b76b['render']['radius'] * -0.35), ctx['lineTo'](_0x20b76b['render']['radius'] * -0.56, _0x20b76b['render']['radius'] * -1.23), ctx['lineTo'](_0x20b76b['render']['radius'] * 0.6, _0x20b76b['render']['radius'] * -1.12), ctx['fill']()), (ctx['lineTo'](_0x20b76b['render']['radius'] * 1.28, _0x20b76b['render']['radius'] * -0.25), ctx['stroke']()), ctx['closePath']();
        },
        'Sunlit\x20Frog': _0x8c946e => {
            let _0x428c73 = enemyColor('#d3c66d', _0x8c946e);
            ctx['rotate'](_0x8c946e['render']['angle']), ctx['fillStyle'] = _0x428c73, ctx['strokeStyle'] = blendColor(_0x428c73, '#000000', 0.18), ctx['lineWidth'] = 0.2 * _0x8c946e['render']['radius'], ctx['beginPath'](), ctx['moveTo'](-0.1 * _0x8c946e['render']['radius'], 1.25 * _0x8c946e['render']['radius']), ctx['lineTo'](0.15 * _0x8c946e['render']['radius'], 1.35 * _0x8c946e['render']['radius']), ctx['quadraticCurveTo'](0.1 * _0x8c946e['render']['radius'], 1.2 * _0x8c946e['render']['radius'], 0.2 * _0x8c946e['render']['radius'], 1.125 * _0x8c946e['render']['radius']), ctx['moveTo'](-0.1 * _0x8c946e['render']['radius'], -1.25 * _0x8c946e['render']['radius']), ctx['lineTo'](0.15 * _0x8c946e['render']['radius'], -1.35 * _0x8c946e['render']['radius']), ctx['quadraticCurveTo'](0.1 * _0x8c946e['render']['radius'], -1.2 * _0x8c946e['render']['radius'], 0.2 * _0x8c946e['render']['radius'], -1.125 * _0x8c946e['render']['radius']), ctx['moveTo'](_0x8c946e['render']['radius'], 0.65 * _0x8c946e['render']['radius']), ctx['lineTo'](1.35 * _0x8c946e['render']['radius'], 0.9 * _0x8c946e['render']['radius']), ctx['quadraticCurveTo'](1.2 * _0x8c946e['render']['radius'], 0.6 * _0x8c946e['render']['radius'], 1.4 * _0x8c946e['render']['radius'], 0.7 * _0x8c946e['render']['radius']), ctx['lineTo'](_0x8c946e['render']['radius'], 0.65 * _0x8c946e['render']['radius']), ctx['moveTo'](_0x8c946e['render']['radius'], -0.65 * _0x8c946e['render']['radius']), ctx['lineTo'](1.35 * _0x8c946e['render']['radius'], -0.9 * _0x8c946e['render']['radius']), ctx['quadraticCurveTo'](1.2 * _0x8c946e['render']['radius'], -0.6 * _0x8c946e['render']['radius'], 1.4 * _0x8c946e['render']['radius'], -0.7 * _0x8c946e['render']['radius']), ctx['lineTo'](_0x8c946e['render']['radius'], -0.65 * _0x8c946e['render']['radius']), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['ellipse'](-0.7 * _0x8c946e['render']['radius'], 0.8 * _0x8c946e['render']['radius'], 0.75 * _0x8c946e['render']['radius'], 0.45 * _0x8c946e['render']['radius'], 0x19 * Math['PI'] / 0xb4, 0x0, Math['PI'] * 0x2), ctx['ellipse'](-0.7 * _0x8c946e['render']['radius'], -0.8 * _0x8c946e['render']['radius'], 0.75 * _0x8c946e['render']['radius'], 0.45 * _0x8c946e['render']['radius'], -0x19 * Math['PI'] / 0xb4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x8c946e['data'] == 0x0 && (ctx['strokeStyle'] = enemyColor('#ff8da1', _0x8c946e), ctx['lineWidth'] = 0.4 * _0x8c946e['render']['radius'], ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](1.5 * _0x8c946e['render']['radius'], 0x0), ctx['stroke'](), ctx['closePath']()), ctx['fillStyle'] = blendColor(_0x428c73, '#000000', 0.18), ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, 1.3 * _0x8c946e['render']['radius'], 1.1 * _0x8c946e['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x8c946e['radius'], 0.6 * _0x8c946e['radius'], 0.55 * _0x8c946e['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x8c946e['radius'], -0.6 * _0x8c946e['radius'], 0.55 * _0x8c946e['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x428c73, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, 1.1 * _0x8c946e['render']['radius'], 0.9 * _0x8c946e['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x8c946e['radius'], 0.6 * _0x8c946e['radius'], 0.35 * _0x8c946e['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x8c946e['radius'], -0.6 * _0x8c946e['radius'], 0.35 * _0x8c946e['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor(_0x428c73, '#ffffff', 0.18), ctx['beginPath'](), ctx['ellipse'](-0.2 * _0x8c946e['render']['radius'], 0x0, 0.8 * _0x8c946e['render']['radius'], 0.6 * _0x8c946e['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](0.6 * _0x8c946e['radius'], 0.6 * _0x8c946e['radius'], 0.25 * _0x8c946e['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x8c946e['radius'], -0.6 * _0x8c946e['radius'], 0.25 * _0x8c946e['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x8c946e['render']['angle']);
        },
        'Moonlit\x20Frog': _0x49300c => {
            let _0x2e3878 = enemyColor('#4a1cad', _0x49300c);
            ctx['rotate'](_0x49300c['render']['angle']), ctx['fillStyle'] = _0x2e3878, ctx['strokeStyle'] = blendColor(_0x2e3878, '#000000', 0.18), ctx['lineWidth'] = 0.2 * _0x49300c['render']['radius'], ctx['beginPath'](), ctx['moveTo'](-0.1 * _0x49300c['render']['radius'], 1.25 * _0x49300c['render']['radius']), ctx['lineTo'](0.15 * _0x49300c['render']['radius'], 1.35 * _0x49300c['render']['radius']), ctx['quadraticCurveTo'](0.1 * _0x49300c['render']['radius'], 1.2 * _0x49300c['render']['radius'], 0.2 * _0x49300c['render']['radius'], 1.125 * _0x49300c['render']['radius']), ctx['moveTo'](-0.1 * _0x49300c['render']['radius'], -1.25 * _0x49300c['render']['radius']), ctx['lineTo'](0.15 * _0x49300c['render']['radius'], -1.35 * _0x49300c['render']['radius']), ctx['quadraticCurveTo'](0.1 * _0x49300c['render']['radius'], -1.2 * _0x49300c['render']['radius'], 0.2 * _0x49300c['render']['radius'], -1.125 * _0x49300c['render']['radius']), ctx['moveTo'](_0x49300c['render']['radius'], 0.65 * _0x49300c['render']['radius']), ctx['lineTo'](1.35 * _0x49300c['render']['radius'], 0.9 * _0x49300c['render']['radius']), ctx['quadraticCurveTo'](1.2 * _0x49300c['render']['radius'], 0.6 * _0x49300c['render']['radius'], 1.4 * _0x49300c['render']['radius'], 0.7 * _0x49300c['render']['radius']), ctx['lineTo'](_0x49300c['render']['radius'], 0.65 * _0x49300c['render']['radius']), ctx['moveTo'](_0x49300c['render']['radius'], -0.65 * _0x49300c['render']['radius']), ctx['lineTo'](1.35 * _0x49300c['render']['radius'], -0.9 * _0x49300c['render']['radius']), ctx['quadraticCurveTo'](1.2 * _0x49300c['render']['radius'], -0.6 * _0x49300c['render']['radius'], 1.4 * _0x49300c['render']['radius'], -0.7 * _0x49300c['render']['radius']), ctx['lineTo'](_0x49300c['render']['radius'], -0.65 * _0x49300c['render']['radius']), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['ellipse'](-0.7 * _0x49300c['render']['radius'], 0.8 * _0x49300c['render']['radius'], 0.75 * _0x49300c['render']['radius'], 0.45 * _0x49300c['render']['radius'], 0x19 * Math['PI'] / 0xb4, 0x0, Math['PI'] * 0x2), ctx['ellipse'](-0.7 * _0x49300c['render']['radius'], -0.8 * _0x49300c['render']['radius'], 0.75 * _0x49300c['render']['radius'], 0.45 * _0x49300c['render']['radius'], -0x19 * Math['PI'] / 0xb4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x49300c['data'] == 0x0 && (ctx['strokeStyle'] = enemyColor('#ff8da1', _0x49300c), ctx['lineWidth'] = 0.4 * _0x49300c['render']['radius'], ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](1.5 * _0x49300c['render']['radius'], 0x0), ctx['stroke'](), ctx['closePath']()), ctx['fillStyle'] = blendColor(_0x2e3878, '#000000', 0.18), ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, 1.3 * _0x49300c['render']['radius'], 1.1 * _0x49300c['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x49300c['radius'], 0.6 * _0x49300c['radius'], 0.55 * _0x49300c['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x49300c['radius'], -0.6 * _0x49300c['radius'], 0.55 * _0x49300c['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x2e3878, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, 1.1 * _0x49300c['render']['radius'], 0.9 * _0x49300c['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x49300c['radius'], 0.6 * _0x49300c['radius'], 0.35 * _0x49300c['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x49300c['radius'], -0.6 * _0x49300c['radius'], 0.35 * _0x49300c['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor(_0x2e3878, '#ffffff', 0.18), ctx['beginPath'](), ctx['ellipse'](-0.2 * _0x49300c['render']['radius'], 0x0, 0.8 * _0x49300c['render']['radius'], 0.6 * _0x49300c['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](0.6 * _0x49300c['radius'], 0.6 * _0x49300c['radius'], 0.25 * _0x49300c['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x49300c['radius'], -0.6 * _0x49300c['radius'], 0.25 * _0x49300c['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x49300c['render']['angle']);
        },
        'Ruby\x20Frog': _0x2bbe3d => {
            let _0x3b65da = enemyColor('#d63838', _0x2bbe3d);
            ctx['rotate'](_0x2bbe3d['render']['angle']), ctx['fillStyle'] = _0x3b65da, ctx['strokeStyle'] = blendColor(_0x3b65da, '#000000', 0.18), ctx['lineWidth'] = 0.2 * _0x2bbe3d['render']['radius'], ctx['beginPath'](), ctx['moveTo'](-0.1 * _0x2bbe3d['render']['radius'], 1.25 * _0x2bbe3d['render']['radius']), ctx['lineTo'](0.15 * _0x2bbe3d['render']['radius'], 1.35 * _0x2bbe3d['render']['radius']), ctx['quadraticCurveTo'](0.1 * _0x2bbe3d['render']['radius'], 1.2 * _0x2bbe3d['render']['radius'], 0.2 * _0x2bbe3d['render']['radius'], 1.125 * _0x2bbe3d['render']['radius']), ctx['moveTo'](-0.1 * _0x2bbe3d['render']['radius'], -1.25 * _0x2bbe3d['render']['radius']), ctx['lineTo'](0.15 * _0x2bbe3d['render']['radius'], -1.35 * _0x2bbe3d['render']['radius']), ctx['quadraticCurveTo'](0.1 * _0x2bbe3d['render']['radius'], -1.2 * _0x2bbe3d['render']['radius'], 0.2 * _0x2bbe3d['render']['radius'], -1.125 * _0x2bbe3d['render']['radius']), ctx['moveTo'](_0x2bbe3d['render']['radius'], 0.65 * _0x2bbe3d['render']['radius']), ctx['lineTo'](1.35 * _0x2bbe3d['render']['radius'], 0.9 * _0x2bbe3d['render']['radius']), ctx['quadraticCurveTo'](1.2 * _0x2bbe3d['render']['radius'], 0.6 * _0x2bbe3d['render']['radius'], 1.4 * _0x2bbe3d['render']['radius'], 0.7 * _0x2bbe3d['render']['radius']), ctx['lineTo'](_0x2bbe3d['render']['radius'], 0.65 * _0x2bbe3d['render']['radius']), ctx['moveTo'](_0x2bbe3d['render']['radius'], -0.65 * _0x2bbe3d['render']['radius']), ctx['lineTo'](1.35 * _0x2bbe3d['render']['radius'], -0.9 * _0x2bbe3d['render']['radius']), ctx['quadraticCurveTo'](1.2 * _0x2bbe3d['render']['radius'], -0.6 * _0x2bbe3d['render']['radius'], 1.4 * _0x2bbe3d['render']['radius'], -0.7 * _0x2bbe3d['render']['radius']), ctx['lineTo'](_0x2bbe3d['render']['radius'], -0.65 * _0x2bbe3d['render']['radius']), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['ellipse'](-0.7 * _0x2bbe3d['render']['radius'], 0.8 * _0x2bbe3d['render']['radius'], 0.75 * _0x2bbe3d['render']['radius'], 0.45 * _0x2bbe3d['render']['radius'], 0x19 * Math['PI'] / 0xb4, 0x0, Math['PI'] * 0x2), ctx['ellipse'](-0.7 * _0x2bbe3d['render']['radius'], -0.8 * _0x2bbe3d['render']['radius'], 0.75 * _0x2bbe3d['render']['radius'], 0.45 * _0x2bbe3d['render']['radius'], -0x19 * Math['PI'] / 0xb4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x2bbe3d['data'] == 0x0 && (ctx['strokeStyle'] = enemyColor('#ff8da1', _0x2bbe3d), ctx['lineWidth'] = 0.4 * _0x2bbe3d['render']['radius'], ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](1.5 * _0x2bbe3d['render']['radius'], 0x0), ctx['stroke'](), ctx['closePath']()), ctx['fillStyle'] = blendColor(_0x3b65da, '#000000', 0.18), ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, 1.3 * _0x2bbe3d['render']['radius'], 1.1 * _0x2bbe3d['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x2bbe3d['radius'], 0.6 * _0x2bbe3d['radius'], 0.55 * _0x2bbe3d['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x2bbe3d['radius'], -0.6 * _0x2bbe3d['radius'], 0.55 * _0x2bbe3d['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x3b65da, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, 1.1 * _0x2bbe3d['render']['radius'], 0.9 * _0x2bbe3d['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x2bbe3d['radius'], 0.6 * _0x2bbe3d['radius'], 0.35 * _0x2bbe3d['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x2bbe3d['radius'], -0.6 * _0x2bbe3d['radius'], 0.35 * _0x2bbe3d['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor(_0x3b65da, '#ffffff', 0.18), ctx['beginPath'](), ctx['ellipse'](-0.2 * _0x2bbe3d['render']['radius'], 0x0, 0.8 * _0x2bbe3d['render']['radius'], 0.6 * _0x2bbe3d['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](0.6 * _0x2bbe3d['radius'], 0.6 * _0x2bbe3d['radius'], 0.25 * _0x2bbe3d['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x2bbe3d['radius'], -0.6 * _0x2bbe3d['radius'], 0.25 * _0x2bbe3d['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x2bbe3d['render']['angle']);
        },
        'Poison\x20Dart\x20Frog': _0x45fefa => {
            let _0x275e61 = enemyColor(_0x45fefa['data'][0x1], _0x45fefa);
            ctx['rotate'](_0x45fefa['render']['angle']), ctx['fillStyle'] = '#2f3fce', ctx['strokeStyle'] = blendColor('#2f3fce', '#000000', 0.18), ctx['lineWidth'] = 0.2 * _0x45fefa['render']['radius'], ctx['beginPath'](), ctx['moveTo'](-0.1 * _0x45fefa['render']['radius'], 1.25 * _0x45fefa['render']['radius']), ctx['lineTo'](0.15 * _0x45fefa['render']['radius'], 1.35 * _0x45fefa['render']['radius']), ctx['quadraticCurveTo'](0.1 * _0x45fefa['render']['radius'], 1.2 * _0x45fefa['render']['radius'], 0.2 * _0x45fefa['render']['radius'], 1.125 * _0x45fefa['render']['radius']), ctx['moveTo'](-0.1 * _0x45fefa['render']['radius'], -1.25 * _0x45fefa['render']['radius']), ctx['lineTo'](0.15 * _0x45fefa['render']['radius'], -1.35 * _0x45fefa['render']['radius']), ctx['quadraticCurveTo'](0.1 * _0x45fefa['render']['radius'], -1.2 * _0x45fefa['render']['radius'], 0.2 * _0x45fefa['render']['radius'], -1.125 * _0x45fefa['render']['radius']), ctx['moveTo'](_0x45fefa['render']['radius'], 0.65 * _0x45fefa['render']['radius']), ctx['lineTo'](1.35 * _0x45fefa['render']['radius'], 0.9 * _0x45fefa['render']['radius']), ctx['quadraticCurveTo'](1.2 * _0x45fefa['render']['radius'], 0.6 * _0x45fefa['render']['radius'], 1.4 * _0x45fefa['render']['radius'], 0.7 * _0x45fefa['render']['radius']), ctx['lineTo'](_0x45fefa['render']['radius'], 0.65 * _0x45fefa['render']['radius']), ctx['moveTo'](_0x45fefa['render']['radius'], -0.65 * _0x45fefa['render']['radius']), ctx['lineTo'](1.35 * _0x45fefa['render']['radius'], -0.9 * _0x45fefa['render']['radius']), ctx['quadraticCurveTo'](1.2 * _0x45fefa['render']['radius'], -0.6 * _0x45fefa['render']['radius'], 1.4 * _0x45fefa['render']['radius'], -0.7 * _0x45fefa['render']['radius']), ctx['lineTo'](_0x45fefa['render']['radius'], -0.65 * _0x45fefa['render']['radius']), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['ellipse'](-0.7 * _0x45fefa['render']['radius'], 0.8 * _0x45fefa['render']['radius'], 0.75 * _0x45fefa['render']['radius'], 0.45 * _0x45fefa['render']['radius'], 0x19 * Math['PI'] / 0xb4, 0x0, Math['PI'] * 0x2), ctx['ellipse'](-0.7 * _0x45fefa['render']['radius'], -0.8 * _0x45fefa['render']['radius'], 0.75 * _0x45fefa['render']['radius'], 0.45 * _0x45fefa['render']['radius'], -0x19 * Math['PI'] / 0xb4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            _0x45fefa['data'][0x0] == 0x0 && (ctx['strokeStyle'] = enemyColor('#ff8da1', _0x45fefa), ctx['lineWidth'] = 0.4 * _0x45fefa['render']['radius'], ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](1.5 * _0x45fefa['render']['radius'], 0x0), ctx['stroke'](), ctx['closePath']());
            ctx['fillStyle'] = blendColor(_0x275e61, '#000000', 0.18), ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, 1.3 * _0x45fefa['render']['radius'], 1.1 * _0x45fefa['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x45fefa['radius'], 0.6 * _0x45fefa['radius'], 0.55 * _0x45fefa['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x45fefa['radius'], -0.6 * _0x45fefa['radius'], 0.55 * _0x45fefa['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x275e61, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, 1.1 * _0x45fefa['render']['radius'], 0.9 * _0x45fefa['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x45fefa['radius'], 0.6 * _0x45fefa['radius'], 0.35 * _0x45fefa['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x45fefa['radius'], -0.6 * _0x45fefa['radius'], 0.35 * _0x45fefa['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor(_0x275e61, '#ffffff', 0.18), ctx['beginPath'](), ctx['ellipse'](-0.2 * _0x45fefa['render']['radius'], 0x0, 0.8 * _0x45fefa['render']['radius'], 0.6 * _0x45fefa['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](0.6 * _0x45fefa['radius'], 0.6 * _0x45fefa['radius'], 0.25 * _0x45fefa['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['arc'](0.6 * _0x45fefa['radius'], -0.6 * _0x45fefa['radius'], 0.25 * _0x45fefa['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            for (let _0x262423 = 0x0; _0x262423 < 0xf; _0x262423 += 0x3) {
                ctx['beginPath'](), ctx['arc']((-0.5 + _0x45fefa['data'][0x2][_0x262423]) * (_0x45fefa['render']['radius'] * 0.8) - 0.2 * _0x45fefa['render']['radius'], -0.5 + _0x45fefa['data'][0x2][_0x262423 + 0x1] * _0x45fefa['render']['radius'] * 0.8, _0x45fefa['render']['radius'] / 0x1e * (0x5 + _0x45fefa['data'][0x2][_0x262423 + 0x2] * 0x5), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            ctx['rotate'](-_0x45fefa['render']['angle']);
        },
        'Agar.io\x20Cell': _0x17f429 => {
            let _0x4ecc91 = enemyColor(_0x17f429['col'], _0x17f429), _0x3d7235 = enemyColor(blendColor(_0x17f429['col'], '#000000', 0.3), _0x17f429);
            ctx['fillStyle'] = _0x4ecc91, ctx['strokeStyle'] = _0x3d7235, ctx['lineWidth'] = _0x17f429['render']['radius'] / 0x7;
            for (let _0x1bdefa = 0x0; _0x1bdefa < _0x17f429['offsets']['length']; _0x1bdefa++) {
                _0x17f429['velocities'][_0x1bdefa] -= _0x17f429['offsets'][_0x1bdefa] * 0.03, _0x17f429['offsets'][_0x1bdefa] += _0x17f429['velocities'][_0x1bdefa];
                const _0x146f4f = _0x1bdefa / _0x17f429['offsets']['length'] * Math['PI'] * 0x2;
                _0x17f429['positions'][_0x1bdefa] = [
                    Math['cos'](_0x146f4f) * _0x17f429['render']['radius'] * (0x1 + 0.003 * _0x17f429['offsets'][_0x1bdefa]),
                    Math['sin'](_0x146f4f) * _0x17f429['render']['radius'] * (0x1 + 0.003 * _0x17f429['offsets'][_0x1bdefa])
                ];
            }
            ctx['beginPath'](), ctx['moveTo'](_0x17f429['positions'][0x0][0x0], _0x17f429['positions'][0x0][0x1]);
            for (let _0x4ff0c2 = 0x1; _0x4ff0c2 < _0x17f429['offsets']['length']; _0x4ff0c2++) {
                ctx['lineTo'](_0x17f429['positions'][_0x4ff0c2][0x0], _0x17f429['positions'][_0x4ff0c2][0x1]);
            }
            ctx['lineTo'](_0x17f429['positions'][0x0][0x0], _0x17f429['positions'][0x0][0x1]), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x17f429['render']['radius'] / 0x1e, ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '600\x20' + _0x17f429['render']['radius'] / 0x3 + 'px\x20\x27Ubuntu\x27', ctx['strokeText']('An\x20unnamed\x20cell', 0x0, 0x0), ctx['fillText']('An\x20unnamed\x20cell', 0x0, 0x0);
        },
        'Rock': _0x1e3540 => {
            ctx['lineWidth'] = _0x1e3540['render']['radius'] / 0xa, ctx['fillStyle'] = enemyColor('#777777', _0x1e3540), ctx['strokeStyle'] = enemyColor('#606060', _0x1e3540), ctx['beginPath'](), ctx['moveTo'](_0x1e3540['getVertexX'](0x0), _0x1e3540['getVertexY'](0x0));
            for (let _0x2c1fd7 = 0x0; _0x2c1fd7 < _0x1e3540['data']['length']; _0x2c1fd7++) {
                ctx['lineTo'](_0x1e3540['getVertexX'](_0x2c1fd7), _0x1e3540['getVertexY'](_0x2c1fd7));
            }
            ctx['lineTo'](_0x1e3540['getVertexX'](0x0), _0x1e3540['getVertexY'](0x0)), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Sandstone': _0x112d32 => {
            ctx['lineWidth'] = _0x112d32['render']['radius'] / 0xa, ctx['fillStyle'] = enemyColor('#dfc85c', _0x112d32), ctx['strokeStyle'] = enemyColor('#d6ba36', _0x112d32), ctx['beginPath'](), ctx['moveTo'](_0x112d32['getVertexX'](0x0), _0x112d32['getVertexY'](0x0));
            for (let _0x4c6346 = 0x0; _0x4c6346 < _0x112d32['data']['length']; _0x4c6346++) {
                ctx['lineTo'](_0x112d32['getVertexX'](_0x4c6346), _0x112d32['getVertexY'](_0x4c6346));
            }
            ctx['lineTo'](_0x112d32['getVertexX'](0x0), _0x112d32['getVertexY'](0x0)), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Rock\x20Tank': _0x1ffcc5 => {
            ctx['rotate'](_0x1ffcc5['render']['angle']), ctx['fillStyle'] = enemyColor('#999999', _0x1ffcc5), ctx['strokeStyle'] = enemyColor('#797979', _0x1ffcc5), ctx['lineWidth'] = 0.12 * _0x1ffcc5['render']['radius'], ctx['beginPath'](), ctx['rect'](0x0, -_0x1ffcc5['render']['radius'] * 0.4, _0x1ffcc5['render']['radius'] * 1.6, _0x1ffcc5['render']['radius'] * 0.4 * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), normalEnemyRenderMap['Rock'](_0x1ffcc5), ctx['rotate'](-_0x1ffcc5['render']['angle']);
        },
        'RockMissile': _0x169ce7 => {
            if (_0x169ce7['isFunny'] === undefined)
                _0x169ce7['isFunny'] = Math['random']() < 0.001 ? !![] : ![];
            if (_0x169ce7['isFunny']) {
                const _0x5496de = _0x169ce7;
                (_0x5496de['image'] === undefined || _0x5496de['image']['onload'] === undefined) && (_0x5496de['image'] = new Image(), _0x5496de['image']['src'] = 'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg', _0x5496de['image']['onload'] = () => {
                    _0x5496de['imageLoaded'] = !![];
                });
                _0x5496de['imageLoaded'] === !![] && ctx['drawImage'](_0x5496de['image'], -_0x5496de['radius'], -_0x5496de['radius'], _0x5496de['radius'] * 0x2, _0x5496de['radius'] * 0x2);
                return;
            }
            normalEnemyRenderMap['Rock'](_0x169ce7);
        },
        'BigRockMissile': _0x242566 => {
            if (_0x242566['isFunny'] === undefined)
                _0x242566['isFunny'] = Math['random']() < 0.01 ? !![] : ![];
            if (_0x242566['isFunny']) {
                const _0x5bfd72 = _0x242566;
                (_0x5bfd72['image'] === undefined || _0x5bfd72['image']['onload'] === undefined) && (_0x5bfd72['image'] = new Image(), _0x5bfd72['image']['src'] = 'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg', _0x5bfd72['image']['onload'] = () => {
                    _0x5bfd72['imageLoaded'] = !![];
                });
                _0x5bfd72['imageLoaded'] === !![] && ctx['drawImage'](_0x5bfd72['image'], -_0x5bfd72['radius'], -_0x5bfd72['radius'], _0x5bfd72['radius'] * 0x2, _0x5bfd72['radius'] * 0x2);
                return;
            }
            normalEnemyRenderMap['Rock'](_0x242566);
        },
        'BossRose': _0x2d904b => {
            ctx['lineWidth'] = _0x2d904b['render']['radius'] / 0x3, ctx['fillStyle'] = enemyColor('#ff94c9', _0x2d904b), ctx['strokeStyle'] = enemyColor('#cf78a3', _0x2d904b), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2d904b['render']['radius'] * 0x5 / 0x6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'BossRose2': _0x11be11 => {
            ctx['lineWidth'] = _0x11be11['render']['radius'] / 0x3, ctx['fillStyle'] = enemyColor('#ff94c9', _0x11be11), ctx['strokeStyle'] = enemyColor('#cf78a3', _0x11be11), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x11be11['render']['radius'] * 0x5 / 0x6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'BossTrident': _0x181980 => {
            ctx['lineWidth'] = _0x181980['radius'] * 0.2, ctx['beginPath'](), ctx['fillStyle'] = enemyColor('#25dbe8', _0x181980), ctx['beginPath'](), ctx['moveTo'](_0x181980['radius'] * -0.15, _0x181980['radius'] * 1.4), ctx['lineTo'](_0x181980['radius'] * 0.15, _0x181980['radius'] * 1.4), ctx['lineTo'](_0x181980['radius'] * 0.15, _0x181980['radius'] * -0.6), ctx['lineTo'](_0x181980['radius'] * -0.15, _0x181980['radius'] * -0.6), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x181980['radius'] * 0.35, _0x181980['radius'] * -0.6), ctx['lineTo'](_0x181980['radius'] * -0.35, _0x181980['radius'] * -0.6), ctx['lineTo'](_0x181980['radius'] * 0x0, _0x181980['radius'] * -1.2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x181980['radius'] * 0.15, _0x181980['radius'] * 0.75), ctx['quadraticCurveTo'](_0x181980['radius'] * 0.35, _0x181980['radius'] * 0.72, _0x181980['radius'] * 0.62, _0x181980['radius'] * 0.81), ctx['lineTo'](_0x181980['radius'] * 0.42, _0x181980['radius'] * 0.5), ctx['lineTo'](_0x181980['radius'] * 0.15, _0x181980['radius'] * 0.5), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x181980['radius'] * 0.62, _0x181980['radius'] * 0.81), ctx['quadraticCurveTo'](_0x181980['radius'] * 0.66, _0x181980['radius'] * -0.12, _0x181980['radius'] * 1.22, _0x181980['radius'] * -0.84), ctx['lineTo'](_0x181980['radius'] * 0.71, _0x181980['radius'] * -0.5), ctx['quadraticCurveTo'](_0x181980['radius'] * 0.5, _0x181980['radius'] * -0.26, _0x181980['radius'] * 0.42, _0x181980['radius'] * 0.5), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x181980['radius'] * 0.71, _0x181980['radius'] * -0.5), ctx['lineTo'](_0x181980['radius'] * 0.56, _0x181980['radius'] * -0.54), ctx['quadraticCurveTo'](_0x181980['radius'] * 0.84, _0x181980['radius'] * -0.81, _0x181980['radius'] * 1.22, _0x181980['radius'] * -0.84), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x181980['radius'] * -0.15, _0x181980['radius'] * 0.75), ctx['quadraticCurveTo'](_0x181980['radius'] * -0.35, _0x181980['radius'] * 0.72, _0x181980['radius'] * -0.62, _0x181980['radius'] * 0.81), ctx['lineTo'](_0x181980['radius'] * -0.42, _0x181980['radius'] * 0.5), ctx['lineTo'](_0x181980['radius'] * -0.15, _0x181980['radius'] * 0.5), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x181980['radius'] * -0.62, _0x181980['radius'] * 0.81), ctx['quadraticCurveTo'](_0x181980['radius'] * -0.66, _0x181980['radius'] * -0.12, _0x181980['radius'] * -1.22, _0x181980['radius'] * -0.84), ctx['lineTo'](_0x181980['radius'] * -0.71, _0x181980['radius'] * -0.5), ctx['quadraticCurveTo'](_0x181980['radius'] * -0.5, _0x181980['radius'] * -0.26, _0x181980['radius'] * -0.42, _0x181980['radius'] * 0.5), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x181980['radius'] * -0.71, _0x181980['radius'] * -0.5), ctx['lineTo'](_0x181980['radius'] * -0.56, _0x181980['radius'] * -0.54), ctx['quadraticCurveTo'](_0x181980['radius'] * -0.84, _0x181980['radius'] * -0.81, _0x181980['radius'] * -1.22, _0x181980['radius'] * -0.84), ctx['fill'](), ctx['closePath']();
        },
        'BossBud': _0x557820 => {
            ctx['lineWidth'] = _0x557820['render']['radius'] / 0x5, ctx['fillStyle'] = enemyColor('#c02dd6', _0x557820), ctx['strokeStyle'] = enemyColor('#9c24ad', _0x557820);
            for (let _0x30f7b1 = 0x5; _0x30f7b1--; _0x30f7b1 > 0x0) {
                ctx['beginPath'](), ctx['arc'](_0x557820['radius'] * Math['sin'](_0x30f7b1 * 6.28318 / 0x5), _0x557820['radius'] * Math['cos'](_0x30f7b1 * 6.28318 / 0x5), _0x557820['radius'] * 0.7, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            }
            ctx['lineWidth'] = _0x557820['render']['radius'] / 0x3, ctx['fillStyle'] = enemyColor('#ebac00', _0x557820), ctx['strokeStyle'] = enemyColor('#b38302', _0x557820), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x557820['radius'] * 0x5 / 0x6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Coral': _0x3e5c90 => {
            let _0x45fa33 = enemyColor('#b04646', _0x3e5c90), _0x2b74c7 = enemyColor('#f76767', _0x3e5c90), _0x3cc1c2 = enemyColor('#988eba', _0x3e5c90), _0x46a38d = enemyColor('#7c7498', _0x3e5c90);
            ctx['rotate'](_0x3e5c90['render']['angle']);
            let _0x2b69b2 = _0x3e5c90['render']['radius'] * (_0x3e5c90['baseRadius'] / _0x3e5c90['radius']) * 0.7;
            (_0x3e5c90['isInEnemyBox'] || _0x3e5c90['isMenuEnemy']) && (_0x2b69b2 = _0x3e5c90['render']['radius']);
            ctx['fillStyle'] = _0x3cc1c2, ctx['strokeStyle'] = _0x46a38d, ctx['lineWidth'] = 0.2 * _0x2b69b2;
            let _0x6c9bf2 = _0x3e5c90['data'], _0x1d06ba = Math['PI'] * 0x2 / _0x6c9bf2;
            ctx['beginPath'](), ctx['moveTo'](Math['cos'](-0.5 * _0x1d06ba) * _0x2b69b2 * 0.6, Math['sin'](-0.5 * _0x1d06ba) * _0x2b69b2 * 0.6);
            for (let _0x17e762 = 0x0; _0x17e762 <= _0x6c9bf2; _0x17e762++) {
                ctx['quadraticCurveTo'](Math['cos'](_0x1d06ba * _0x17e762) * _0x2b69b2, Math['sin'](_0x1d06ba * _0x17e762) * _0x2b69b2, Math['cos'](_0x1d06ba * _0x17e762 + 0.5) * _0x2b69b2 * 0.6, Math['sin'](_0x1d06ba * _0x17e762 + 0.5) * _0x2b69b2 * 0.6);
            }
            ctx['closePath'](), ctx['fill'](), ctx['stroke'](), ctx['strokeStyle'] = _0x45fa33, ctx['lineWidth'] = 0.3 * _0x3e5c90['render']['radius'], ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * 0.25, _0x3e5c90['render']['radius'] * 0.11, _0x3e5c90['render']['radius'] * 0.41, _0x3e5c90['render']['radius'] * 0.47), ctx['moveTo'](_0x3e5c90['render']['radius'] * 0.65, _0x3e5c90['render']['radius'] * 0.34), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * 0.33, _0x3e5c90['render']['radius'] * 0.41, _0x3e5c90['render']['radius'] * 0.24, _0x3e5c90['render']['radius'] * 0.78), ctx['moveTo'](_0x3e5c90['render']['radius'] * 0.68, _0x3e5c90['render']['radius'] * 0.35), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * 0.96, _0x3e5c90['render']['radius'] * 0.06, _0x3e5c90['render']['radius'] * 0.97, _0x3e5c90['render']['radius'] * -0.21), ctx['moveTo'](_0x3e5c90['render']['radius'] * 0.68, _0x3e5c90['render']['radius'] * 0.35), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * 1.08, _0x3e5c90['render']['radius'] * 0.26, _0x3e5c90['render']['radius'] * 1.23, _0x3e5c90['render']['radius'] * 0.04), ctx['moveTo'](0x0, 0x0), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * -0.33, _0x3e5c90['render']['radius'] * 0.19, _0x3e5c90['render']['radius'] * -0.61, _0x3e5c90['render']['radius'] * -0.01), ctx['moveTo'](_0x3e5c90['render']['radius'] * -0.42, _0x3e5c90['render']['radius'] * 0.7), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * -0.51, _0x3e5c90['render']['radius'] * 0.45, _0x3e5c90['render']['radius'] * -0.34, _0x3e5c90['render']['radius'] * 0.07), ctx['moveTo'](_0x3e5c90['render']['radius'] * -0.61, _0x3e5c90['render']['radius'] * -0.04), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * -0.93, _0x3e5c90['render']['radius'] * -0.26, _0x3e5c90['render']['radius'] * -1.21, _0x3e5c90['render']['radius'] * -0.24), ctx['moveTo'](_0x3e5c90['render']['radius'] * -0.61, _0x3e5c90['render']['radius'] * -0.04), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * -1.01, _0x3e5c90['render']['radius'] * -0.03, _0x3e5c90['render']['radius'] * -1.22, _0x3e5c90['render']['radius'] * 0.12), ctx['moveTo'](_0x3e5c90['render']['radius'] * -0.89, _0x3e5c90['render']['radius'] * -0.18), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * -0.76, _0x3e5c90['render']['radius'] * -0.41, _0x3e5c90['render']['radius'] * -0.38, _0x3e5c90['render']['radius'] * -0.55), ctx['moveTo'](0x0, 0x0), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * 0.09, _0x3e5c90['render']['radius'] * -0.37, _0x3e5c90['render']['radius'] * 0.44, _0x3e5c90['render']['radius'] * -0.43), ctx['moveTo'](_0x3e5c90['render']['radius'] * 0.44, _0x3e5c90['render']['radius'] * -0.43), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * 0.78, _0x3e5c90['render']['radius'] * -0.78, _0x3e5c90['render']['radius'] * 0.73, -_0x3e5c90['render']['radius']), ctx['moveTo'](_0x3e5c90['render']['radius'] * 0.44, _0x3e5c90['render']['radius'] * -0.43), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * 0.83, _0x3e5c90['render']['radius'] * -0.52, _0x3e5c90['render']['radius'] * 0.99, _0x3e5c90['render']['radius'] * -0.74), ctx['moveTo'](_0x3e5c90['render']['radius'] * 0.17, _0x3e5c90['render']['radius'] * -0.31), ctx['quadraticCurveTo'](_0x3e5c90['render']['radius'] * 0.01, _0x3e5c90['render']['radius'] * -0.66, _0x3e5c90['render']['radius'] * -0.23, _0x3e5c90['render']['radius'] * -0.78), ctx['closePath'](), ctx['stroke'](), ctx['strokeStyle'] = _0x2b74c7, ctx['lineWidth'] = 0.15 * _0x3e5c90['render']['radius'], ctx['stroke'](), ctx['rotate'](-_0x3e5c90['render']['angle']);
        },
        'Tanksmith': _0x1f0b15 => {
            ctx['fillStyle'] = blendColor(Colors['rarities'][_0x1f0b15['rarity']] ? Colors['rarities'][_0x1f0b15['rarity']]['color'] : '#790000', '#FF0000', Math['max'](0x0, blendAmount(_0x1f0b15))), ctx['strokeStyle'] = blendColor(Colors['rarities'][_0x1f0b15['rarity']] ? Colors['rarities'][_0x1f0b15['rarity']]['border'] : '#550000', '#FF0000', Math['max'](0x0, blendAmount(_0x1f0b15)));
            checkForFirstFrame(_0x1f0b15) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
            ctx['lineWidth'] = 0x4, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1f0b15['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x1f0b15['render']['angle']), ctx['lineWidth'] = 0x5;
            const _0x243a7d = _0x1f0b15['tsRenderType'] ?? _0x1f0b15['render']['tsRenderType'];
            if (_0x243a7d === 'Heal') {
                if (_0x1f0b15['render']['radius'] < 0x32)
                    ctx['lineWidth'] = _0x1f0b15['render']['radius'] / 0x32 * 0x5;
                ctx['fillStyle'] = blendColor('#fa0028', '#FF0000', Math['max'](0x0, blendAmount(_0x1f0b15))), ctx['strokeStyle'] = blendColor('#af001c', '#FF0000', Math['max'](0x0, blendAmount(_0x1f0b15)));
                const _0x3e9dbb = _0x1f0b15['render']['radius'] * 0.72, _0x4e927d = _0x1f0b15['render']['radius'] * 0.27;
                ctx['beginPath'](), ctx['moveTo'](_0x3e9dbb, _0x4e927d), ctx['lineTo'](_0x4e927d, _0x4e927d), ctx['lineTo'](_0x4e927d, _0x3e9dbb), ctx['lineTo'](-_0x4e927d, _0x3e9dbb), ctx['lineTo'](-_0x4e927d, _0x4e927d), ctx['lineTo'](-_0x3e9dbb, _0x4e927d), ctx['lineTo'](-_0x3e9dbb, -_0x4e927d), ctx['lineTo'](-_0x4e927d, -_0x4e927d), ctx['lineTo'](-_0x4e927d, -_0x3e9dbb), ctx['lineTo'](_0x4e927d, -_0x3e9dbb), ctx['lineTo'](_0x4e927d, -_0x4e927d), ctx['lineTo'](_0x3e9dbb, -_0x4e927d), ctx['lineTo'](_0x3e9dbb, _0x4e927d), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            } else {
                if (_0x243a7d === 'TankHeal') {
                    if (_0x1f0b15['render']['radius'] < 0x32)
                        ctx['lineWidth'] = _0x1f0b15['render']['radius'] / 0x32 * 0x5;
                    ctx['fillStyle'] = blendColor('#0400fa', '#FF0000', Math['max'](0x0, blendAmount(_0x1f0b15))), ctx['strokeStyle'] = blendColor('#0300ad', '#FF0000', Math['max'](0x0, blendAmount(_0x1f0b15)));
                    const _0x561b24 = _0x1f0b15['render']['radius'] * 0.72, _0x262d57 = _0x1f0b15['render']['radius'] * 0.27;
                    ctx['beginPath'](), ctx['moveTo'](_0x561b24, _0x262d57), ctx['lineTo'](_0x262d57, _0x262d57), ctx['lineTo'](_0x262d57, _0x561b24), ctx['lineTo'](-_0x262d57, _0x561b24), ctx['lineTo'](-_0x262d57, _0x262d57), ctx['lineTo'](-_0x561b24, _0x262d57), ctx['lineTo'](-_0x561b24, -_0x262d57), ctx['lineTo'](-_0x262d57, -_0x262d57), ctx['lineTo'](-_0x262d57, -_0x561b24), ctx['lineTo'](_0x262d57, -_0x561b24), ctx['lineTo'](_0x262d57, -_0x262d57), ctx['lineTo'](_0x561b24, -_0x262d57), ctx['lineTo'](_0x561b24, _0x262d57), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
                } else {
                    if (_0x243a7d === 'Bud') {
                        const _0x4432a4 = _0x1f0b15['radius'];
                        _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Bud'](_0x1f0b15), _0x1f0b15['radius'] = _0x4432a4;
                    } else {
                        if (_0x243a7d === 'Bloom') {
                            const _0x2fdb22 = _0x1f0b15['radius'];
                            _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Bloom'](_0x1f0b15), _0x1f0b15['radius'] = _0x2fdb22;
                        } else {
                            if (_0x243a7d === 'Magnet') {
                                const _0x53d55c = _0x1f0b15['radius'];
                                _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Magnet'](_0x1f0b15), _0x1f0b15['radius'] = _0x53d55c;
                            } else {
                                if (_0x243a7d === 'Egg') {
                                    const _0x245e29 = _0x1f0b15['radius'];
                                    _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Egg'](_0x1f0b15), _0x1f0b15['radius'] = _0x245e29;
                                } else {
                                    if (_0x243a7d === 'Jellyfish\x20Egg') {
                                        const _0x331c0e = _0x1f0b15['radius'];
                                        _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Jellyfish\x20Egg'](_0x1f0b15), _0x1f0b15['radius'] = _0x331c0e;
                                    } else {
                                        if (_0x243a7d === 'Neuroflare\x20Egg') {
                                            const _0x9026a8 = _0x1f0b15['radius'];
                                            _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Neuroflare\x20Egg'](_0x1f0b15), _0x1f0b15['radius'] = _0x9026a8;
                                        } else {
                                            if (_0x243a7d === 'Square') {
                                                const _0x1f9665 = _0x1f0b15['radius'];
                                                _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Square'](_0x1f0b15), _0x1f0b15['radius'] = _0x1f9665;
                                            } else {
                                                if (_0x243a7d === 'Pentagon') {
                                                    const _0x175cfc = _0x1f0b15['radius'];
                                                    _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Pentagon'](_0x1f0b15), _0x1f0b15['radius'] = _0x175cfc;
                                                } else {
                                                    if (_0x243a7d === 'Plastic\x20Egg') {
                                                        const _0x1bad25 = _0x1f0b15['radius'];
                                                        _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Plastic\x20Egg'](_0x1f0b15), _0x1f0b15['radius'] = _0x1bad25;
                                                    } else {
                                                        if (_0x243a7d === 'Ant\x20Egg') {
                                                            const _0x158829 = _0x1f0b15['radius'];
                                                            _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Ant\x20Egg'](_0x1f0b15), _0x1f0b15['radius'] = _0x158829;
                                                        } else {
                                                            if (_0x243a7d === 'Bubble') {
                                                                const _0x232470 = _0x1f0b15['radius'];
                                                                _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Bubble'](_0x1f0b15), _0x1f0b15['radius'] = _0x232470;
                                                            } else {
                                                                if (_0x243a7d === 'Shiny\x20Bubble') {
                                                                    const _0x16070f = _0x1f0b15['radius'];
                                                                    _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Shiny\x20Bubble'](_0x1f0b15), _0x1f0b15['radius'] = _0x16070f;
                                                                } else {
                                                                    if (_0x243a7d === 'Cinderleaf') {
                                                                        const _0x42b82c = _0x1f0b15['radius'];
                                                                        _0x1f0b15['radius'] = _0x1f0b15['render']['radius'] / 1.99, petalRenderMap['Cinderleaf'](_0x1f0b15), _0x1f0b15['radius'] = _0x42b82c;
                                                                    } else {
                                                                        ctx['fillStyle'] = blendColor('#bfbfbf', '#FF0000', Math['max'](0x0, blendAmount(_0x1f0b15))), ctx['strokeStyle'] = blendColor('#868686', '#FF0000', Math['max'](0x0, blendAmount(_0x1f0b15)));
                                                                        for (let _0x3de2fc = 0x0; _0x3de2fc < _0x1f0b15['barrelNum']; _0x3de2fc++) {
                                                                            let _0x5e62cd = Math['PI'] * 0x2 / _0x1f0b15['barrelNum'] * _0x3de2fc;
                                                                            _0x1f0b15['barrelData'] !== undefined && _0x1f0b15['barrelData'][_0x3de2fc] !== undefined && (_0x5e62cd = _0x1f0b15['barrelData'][_0x3de2fc]['angle']), ctx['rotate'](_0x5e62cd), ctx['beginPath'](), ctx['roundRect'](0x0, -_0x1f0b15['render']['radius'] * 0.33, _0x1f0b15['render']['radius'] * 1.3, _0x1f0b15['render']['radius'] * 0.33 * 0x2, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x5e62cd);
                                                                        }
                                                                        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1f0b15['render']['radius'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            ctx['rotate'](-_0x1f0b15['render']['angle']);
        },
        'Square': _0x5c68c2 => {
            ctx['lineWidth'] = _0x5c68c2['render']['radius'] / 0x5, ctx['fillStyle'] = enemyColor('#ffe869', _0x5c68c2), ctx['strokeStyle'] = enemyColor('#cfbc55', _0x5c68c2), ctx['shadowColor'] = ctx['fillStyle'], ctx['shadowBlur'] = 0x38 + 0x28 * Math['sin'](time / 0x12c), _0x5c68c2['renderRotation'] === undefined && (_0x5c68c2['renderRotation'] = 0x2 * Math['PI'] * Math['random']()), _0x5c68c2['renderRotation'] += 0.002, ctx['rotate'](_0x5c68c2['renderRotation']), ctx['beginPath'](), ctx['roundRect'](-_0x5c68c2['render']['radius'], -_0x5c68c2['render']['radius'], _0x5c68c2['render']['radius'] * 0x2, _0x5c68c2['render']['radius'] * 0x2, _0x5c68c2['render']['radius'] / 0xc), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x5c68c2['renderRotation']), ctx['shadowBlur'] = 0x0;
        },
        'Pentagon': _0x88db1b => {
            ctx['lineWidth'] = _0x88db1b['render']['radius'] / 0x5, ctx['fillStyle'] = enemyColor('#768dfc', _0x88db1b), ctx['strokeStyle'] = enemyColor('#586bbd', _0x88db1b), ctx['shadowColor'] = ctx['fillStyle'], ctx['shadowBlur'] = 0x38 + 0x28 * Math['sin'](time / 0x12c);
            _0x88db1b['renderRotation'] === undefined && (_0x88db1b['renderRotation'] = 0x2 * Math['PI'] * Math['random']());
            _0x88db1b['renderRotation'] += 0.002, ctx['rotate'](_0x88db1b['renderRotation']), ctx['beginPath']();
            for (let _0x4112f3 = 0x0; _0x4112f3 < 0x5; _0x4112f3++) {
                ctx['lineTo'](Math['cos'](_0x4112f3 * Math['PI'] * 0x2 / 0x5) * _0x88db1b['render']['radius'], Math['sin'](_0x4112f3 * Math['PI'] * 0x2 / 0x5) * _0x88db1b['render']['radius']);
            }
            ctx['lineTo'](_0x88db1b['render']['radius'], 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x88db1b['renderRotation']), ctx['shadowBlur'] = 0x0;
        },
        'Chris3773': _0x4b2d86 => {
            const _0x97c5b4 = _0x4b2d86;
            (_0x97c5b4['image'] === undefined || _0x97c5b4['image']['onload'] === undefined) && (_0x97c5b4['image'] = new Image(), _0x97c5b4['image']['src'] = 'https://raw.githubusercontent.com/haha0201/aaaaaaaa/refs/heads/main/Chris3773.png', _0x97c5b4['image']['onload'] = () => {
                _0x97c5b4['imageLoaded'] = !![];
            });
            if (_0x97c5b4['imageLoaded'] === !![])
                ctx['drawImage'](_0x97c5b4['image'], -_0x97c5b4['radius'], -_0x97c5b4['radius'], _0x97c5b4['radius'] * 0x2, _0x97c5b4['radius'] * 0x2);
            else {
                let _0x4c80d7 = enemyColor('#FFFFFF', _0x4b2d86), _0x358432 = enemyColor('#000000', _0x4b2d86);
                ctx['lineJoin'] = 'round', ctx['rotate'](_0x4b2d86['render']['angle'] + Math['PI'] / 0x2), ctx['strokeStyle'] = _0x358432, ctx['lineWidth'] = _0x4b2d86['render']['radius'] / 0x6, ctx['beginPath'](), ctx['moveTo'](0x0, _0x4b2d86['render']['radius'] * 1.2), ctx['quadraticCurveTo'](_0x4b2d86['render']['radius'] * 0.5, _0x4b2d86['render']['radius'] * 1.5, _0x4b2d86['render']['radius'] * 0.8, _0x4b2d86['render']['radius'] * 0.8), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x4c80d7, ctx['strokeStyle'] = blendColor(_0x4c80d7, '#000000', 0.2), ctx['lineWidth'] = _0x4b2d86['render']['radius'] * 0.12, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x4b2d86['render']['radius'] * 0.9, _0x4b2d86['render']['radius'] * 0.65, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x358432, ctx['beginPath'](), ctx['moveTo'](-_0x4b2d86['render']['radius'] * 0.5, -_0x4b2d86['render']['radius'] * 0.3), ctx['quadraticCurveTo'](0x0, -_0x4b2d86['render']['radius'] * 0.8, _0x4b2d86['render']['radius'] * 0.5, -_0x4b2d86['render']['radius'] * 0.3), ctx['quadraticCurveTo'](0x0, -_0x4b2d86['render']['radius'] * 0.1, -_0x4b2d86['render']['radius'] * 0.5, -_0x4b2d86['render']['radius'] * 0.3), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x4c80d7, ctx['strokeStyle'] = blendColor(_0x4c80d7, '#000000', 0.2), ctx['beginPath'](), ctx['ellipse'](0x0, -_0x4b2d86['render']['radius'] * 0x1, _0x4b2d86['render']['radius'] * 0.55, _0x4b2d86['render']['radius'] * 0.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x358432, ctx['beginPath'](), ctx['moveTo'](0x0, -_0x4b2d86['render']['radius'] * 1.5), ctx['lineTo'](0x0, -_0x4b2d86['render']['radius'] * 0.5), ctx['lineTo'](_0x4b2d86['render']['radius'] * 0.55, -_0x4b2d86['render']['radius'] * 0.5), ctx['lineTo'](_0x4b2d86['render']['radius'] * 0.55, -_0x4b2d86['render']['radius'] * 1.5), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x358432, ctx['beginPath'](), ctx['moveTo'](-_0x4b2d86['render']['radius'] * 0.3, -_0x4b2d86['render']['radius'] * 1.4), ctx['lineTo'](-_0x4b2d86['render']['radius'] * 0.5, -_0x4b2d86['render']['radius'] * 1.9), ctx['lineTo'](-_0x4b2d86['render']['radius'] * 0.15, -_0x4b2d86['render']['radius'] * 1.6), ctx['fill'](), ctx['moveTo'](_0x4b2d86['render']['radius'] * 0.3, -_0x4b2d86['render']['radius'] * 1.4), ctx['lineTo'](_0x4b2d86['render']['radius'] * 0.5, -_0x4b2d86['render']['radius'] * 1.9), ctx['lineTo'](_0x4b2d86['render']['radius'] * 0.15, -_0x4b2d86['render']['radius'] * 1.6), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#00FFAA', ctx['beginPath'](), ctx['ellipse'](-_0x4b2d86['render']['radius'] * 0.2, -_0x4b2d86['render']['radius'] * 0x1, _0x4b2d86['render']['radius'] * 0.1, _0x4b2d86['render']['radius'] * 0.15, 0x0, 0x0, Math['PI'] * 0x2), ctx['ellipse'](_0x4b2d86['render']['radius'] * 0.2, -_0x4b2d86['render']['radius'] * 0x1, _0x4b2d86['render']['radius'] * 0.1, _0x4b2d86['render']['radius'] * 0.15, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#FF8888', ctx['beginPath'](), ctx['moveTo'](0x0, -_0x4b2d86['render']['radius'] * 0.8), ctx['lineTo'](-_0x4b2d86['render']['radius'] * 0.08, -_0x4b2d86['render']['radius'] * 0.7), ctx['lineTo'](_0x4b2d86['render']['radius'] * 0.08, -_0x4b2d86['render']['radius'] * 0.7), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = _0x358432, ctx['lineWidth'] = _0x4b2d86['render']['radius'] / 0x14, ctx['beginPath'](), ctx['moveTo'](-_0x4b2d86['render']['radius'] * 0.25, -_0x4b2d86['render']['radius'] * 0.75), ctx['lineTo'](-_0x4b2d86['render']['radius'] * 0.65, -_0x4b2d86['render']['radius'] * 0.7), ctx['moveTo'](-_0x4b2d86['render']['radius'] * 0.25, -_0x4b2d86['render']['radius'] * 0.8), ctx['lineTo'](-_0x4b2d86['render']['radius'] * 0.65, -_0x4b2d86['render']['radius'] * 0.9), ctx['moveTo'](_0x4b2d86['render']['radius'] * 0.25, -_0x4b2d86['render']['radius'] * 0.75), ctx['lineTo'](_0x4b2d86['render']['radius'] * 0.65, -_0x4b2d86['render']['radius'] * 0.7), ctx['moveTo'](_0x4b2d86['render']['radius'] * 0.25, -_0x4b2d86['render']['radius'] * 0.8), ctx['lineTo'](_0x4b2d86['render']['radius'] * 0.65, -_0x4b2d86['render']['radius'] * 0.9), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x4b2d86['render']['angle'] - Math['PI'] / 0x2);
            }
        },
        'Hexagon': _0x289cb1 => {
            ctx['lineWidth'] = _0x289cb1['render']['radius'] / 0x5, ctx['fillStyle'] = enemyColor('#b50e11', _0x289cb1), ctx['strokeStyle'] = enemyColor('#80090b', _0x289cb1), ctx['shadowColor'] = ctx['fillStyle'], ctx['shadowBlur'] = 0x38 + 0x28 * Math['sin'](time / 0x12c);
            _0x289cb1['renderRotation'] === undefined && (_0x289cb1['renderRotation'] = 0x2 * Math['PI'] * Math['random']());
            _0x289cb1['renderRotation'] += 0.002, ctx['rotate'](_0x289cb1['renderRotation']), ctx['beginPath']();
            for (let _0x4cf878 = 0x0; _0x4cf878 < 0x6; _0x4cf878++) {
                ctx['lineTo'](Math['cos'](_0x4cf878 * Math['PI'] * 0x2 / 0x6) * _0x289cb1['render']['radius'], Math['sin'](_0x4cf878 * Math['PI'] * 0x2 / 0x6) * _0x289cb1['render']['radius']);
            }
            ctx['lineTo'](_0x289cb1['render']['radius'], 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x289cb1['renderRotation']), ctx['shadowBlur'] = 0x0;
        },
        'Dandelion': _0x2a7ad5 => {
            ctx['strokeStyle'] = 'black', ctx['lineWidth'] = _0x2a7ad5['render']['radius'] / 0x3, ctx['rotate'](_0x2a7ad5['render']['angle']);
            for (let _0x3f90a0 = 0x5; _0x3f90a0--; _0x3f90a0 > 0x0) {
                let _0x206fad = _0x3f90a0 * Math['PI'] * 0x2 / 0x5;
                ctx['rotate'](_0x206fad), ctx['beginPath'](), ctx['moveTo'](-_0x2a7ad5['render']['radius'] * 0x1, 0x0), ctx['lineTo'](_0x2a7ad5['render']['radius'] * 0x1, 0x0), ctx['stroke'](), ctx['rotate'](-_0x206fad), ctx['closePath']();
            }
            ctx['rotate'](-_0x2a7ad5['render']['angle']), ctx['lineWidth'] = _0x2a7ad5['render']['radius'] / 0x5, ctx['fillStyle'] = enemyColor('#ffffff', _0x2a7ad5), ctx['strokeStyle'] = enemyColor('#cfcfcf', _0x2a7ad5), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2a7ad5['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'DandelionMissile': _0x982855 => {
            const _0x3870de = ctx['globalAlpha'] !== 0x1;
            if (_0x3870de === !![]) {
                ctx['save']();
                let _0x50e455 = new Path2D();
                _0x50e455['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x50e455['arc'](0x0, 0x0, _0x982855['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x50e455, 'evenodd');
            }
            ctx['strokeStyle'] = 'black', ctx['lineWidth'] = _0x982855['render']['radius'], ctx['rotate'](_0x982855['render']['angle']), ctx['beginPath'](), ctx['moveTo'](-_0x982855['render']['radius'] * 0x2, 0x0), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x982855['render']['angle']), _0x3870de === !![] && ctx['restore'](), ctx['lineWidth'] = _0x982855['render']['radius'] / 2.5, ctx['fillStyle'] = enemyColor('#ffffff', _0x982855), ctx['strokeStyle'] = enemyColor('#cfcfcf', _0x982855), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x982855['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Baby\x20Ant': _0x11ec19 => {
            _0x11ec19['render']['time'] += Math['sqrt']((_0x11ec19['render']['lastX'] - _0x11ec19['render']['x']) ** 0x2 + (_0x11ec19['render']['lastY'] - _0x11ec19['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x11ec19['render']['radius'] / 142.5) + 0.5) * 0x5, _0x11ec19['render']['lastX'] = _0x11ec19['render']['x'], _0x11ec19['render']['lastY'] = _0x11ec19['render']['y'];
            let _0xd5903d = enemyColor('#555555', _0x11ec19), _0xa3af57 = enemyColor('#454545', _0x11ec19);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0x11ec19['render']['radius'] * 0.41, ctx['rotate'](_0x11ec19['render']['angle']), ctx['translate'](_0x11ec19['render']['radius'] * -0.15, 0x0);
            let _0x4599f4 = Math['cos'](time / 0xb4 + _0x11ec19['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['moveTo'](_0x11ec19['render']['radius'] * 0.62, _0x11ec19['render']['radius'] * -0.45), ctx['rotate'](_0x4599f4), ctx['quadraticCurveTo'](_0x11ec19['render']['radius'] * 0.93, _0x11ec19['render']['radius'] * -0.59, _0x11ec19['render']['radius'] * 1.53, _0x11ec19['render']['radius'] * -0.31), ctx['rotate'](-_0x4599f4), ctx['moveTo'](_0x11ec19['render']['radius'] * 0.62, _0x11ec19['render']['radius'] * 0.45), ctx['rotate'](-_0x4599f4), ctx['quadraticCurveTo'](_0x11ec19['render']['radius'] * 0.93, _0x11ec19['render']['radius'] * 0.59, _0x11ec19['render']['radius'] * 1.53, _0x11ec19['render']['radius'] * 0.31), ctx['rotate'](_0x4599f4), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0xd5903d, ctx['strokeStyle'] = _0xa3af57, ctx['fillStyle'] = _0xd5903d, ctx['strokeStyle'] = _0xa3af57, ctx['beginPath'](), ctx['arc'](_0x11ec19['render']['radius'] * 0.15, _0x11ec19['render']['radius'] * 0x0, _0x11ec19['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['translate'](_0x11ec19['render']['radius'] * 0.15, 0x0), ctx['rotate'](-_0x11ec19['render']['angle']);
        },
        'Worker\x20Ant': _0x2a78d5 => {
            _0x2a78d5['render']['time'] += Math['sqrt']((_0x2a78d5['render']['lastX'] - _0x2a78d5['render']['x']) ** 0x2 + (_0x2a78d5['render']['lastY'] - _0x2a78d5['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x2a78d5['render']['radius'] / 142.5) + 0.5) * 0x5, _0x2a78d5['render']['lastX'] = _0x2a78d5['render']['x'], _0x2a78d5['render']['lastY'] = _0x2a78d5['render']['y'];
            let _0x3b19e8 = enemyColor('#555555', _0x2a78d5), _0x3100e9 = enemyColor('#454545', _0x2a78d5);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0x2a78d5['render']['radius'] * 0.41, ctx['rotate'](_0x2a78d5['render']['angle']);
            let _0x8f3764 = Math['cos'](time / 0xb4 + _0x2a78d5['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['moveTo'](_0x2a78d5['render']['radius'] * 0.62, _0x2a78d5['render']['radius'] * -0.45), ctx['rotate'](_0x8f3764), ctx['quadraticCurveTo'](_0x2a78d5['render']['radius'] * 0.93, _0x2a78d5['render']['radius'] * -0.59, _0x2a78d5['render']['radius'] * 1.53, _0x2a78d5['render']['radius'] * -0.31), ctx['rotate'](-_0x8f3764), ctx['moveTo'](_0x2a78d5['render']['radius'] * 0.62, _0x2a78d5['render']['radius'] * 0.45), ctx['rotate'](-_0x8f3764), ctx['quadraticCurveTo'](_0x2a78d5['render']['radius'] * 0.93, _0x2a78d5['render']['radius'] * 0.59, _0x2a78d5['render']['radius'] * 1.53, _0x2a78d5['render']['radius'] * 0.31), ctx['rotate'](_0x8f3764), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x3b19e8, ctx['strokeStyle'] = _0x3100e9, ctx['beginPath'](), ctx['arc'](_0x2a78d5['render']['radius'] * -0.91, _0x2a78d5['render']['radius'] * 0x0, _0x2a78d5['render']['radius'] * 0.65, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x2a78d5['render']['radius'] * 0.15, _0x2a78d5['render']['radius'] * 0x0, _0x2a78d5['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x2a78d5['render']['angle']);
        },
        'Soldier\x20Ant': _0x29ac81 => {
            _0x29ac81['render']['time'] += Math['sqrt']((_0x29ac81['render']['lastX'] - _0x29ac81['render']['x']) ** 0x2 + (_0x29ac81['render']['lastY'] - _0x29ac81['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x29ac81['render']['radius'] / 142.5) + 0.5) * 0x5, _0x29ac81['render']['lastX'] = _0x29ac81['render']['x'], _0x29ac81['render']['lastY'] = _0x29ac81['render']['y'];
            let _0x33fcc7 = enemyColor('#555555', _0x29ac81), _0x4c7462 = enemyColor('#454545', _0x29ac81);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0x29ac81['render']['radius'] * 0.41, ctx['rotate'](_0x29ac81['render']['angle']);
            let _0x23aaec = Math['cos'](time / 0xb4 + _0x29ac81['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['moveTo'](_0x29ac81['render']['radius'] * 0.62, _0x29ac81['render']['radius'] * -0.45), ctx['rotate'](_0x23aaec), ctx['quadraticCurveTo'](_0x29ac81['render']['radius'] * 0.93, _0x29ac81['render']['radius'] * -0.59, _0x29ac81['render']['radius'] * 1.53, _0x29ac81['render']['radius'] * -0.31), ctx['rotate'](-_0x23aaec), ctx['moveTo'](_0x29ac81['render']['radius'] * 0.62, _0x29ac81['render']['radius'] * 0.45), ctx['rotate'](-_0x23aaec), ctx['quadraticCurveTo'](_0x29ac81['render']['radius'] * 0.93, _0x29ac81['render']['radius'] * 0.59, _0x29ac81['render']['radius'] * 1.53, _0x29ac81['render']['radius'] * 0.31), ctx['rotate'](_0x23aaec), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x33fcc7, ctx['strokeStyle'] = _0x4c7462, ctx['beginPath'](), ctx['arc'](_0x29ac81['render']['radius'] * -0.91, _0x29ac81['render']['radius'] * 0x0, _0x29ac81['render']['radius'] * 0.65, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            let _0x1ab6e9 = Math['cos'](time / 0x1a4 + _0x29ac81['render']['time'] / 0x46) / 0x7 - 0.05;
            ctx['fillStyle'] = '#ffffff', ctx['globalAlpha'] *= 0.3, ctx['beginPath'](), ctx['rotate'](_0x1ab6e9), ctx['ellipse'](_0x29ac81['render']['radius'] * -0.98, _0x29ac81['render']['radius'] * -0.54, _0x29ac81['render']['radius'] * 0.79, _0x29ac81['render']['radius'] * 0.42, 0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](-_0x1ab6e9), ctx['rotate'](-_0x1ab6e9), ctx['ellipse'](_0x29ac81['render']['radius'] * -0.98, _0x29ac81['render']['radius'] * 0.54, _0x29ac81['render']['radius'] * 0.79, _0x29ac81['render']['radius'] * 0.42, -0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](_0x1ab6e9), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['fillStyle'] = _0x33fcc7, ctx['strokeStyle'] = _0x4c7462, ctx['beginPath'](), ctx['arc'](_0x29ac81['render']['radius'] * 0.15, _0x29ac81['render']['radius'] * 0x0, _0x29ac81['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x29ac81['render']['angle']);
        },
        'Queen\x20Ant': _0x150e2f => {
            ctx['lastTransform73408'] = ctx['getTransform'](), ctx['scale'](0.8, 0.8), _0x150e2f['render']['time'] += Math['sqrt']((_0x150e2f['render']['lastX'] - _0x150e2f['render']['x']) ** 0x2 + (_0x150e2f['render']['lastY'] - _0x150e2f['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x150e2f['render']['radius'] / 1.84390889146 / 142.5) + 0.5) * 0x5, _0x150e2f['render']['lastX'] = _0x150e2f['render']['x'], _0x150e2f['render']['lastY'] = _0x150e2f['render']['y'];
            let _0x1a19b6 = enemyColor('#555555', _0x150e2f), _0x4fb15b = enemyColor('#454545', _0x150e2f);
            ctx['strokeStyle'] = enemyColor('#292929', _0x150e2f), ctx['lineWidth'] = _0x150e2f['render']['radius'] / 3.75, ctx['rotate'](_0x150e2f['render']['angle']), ctx['translate'](-_0x150e2f['render']['radius'] * 0.52, 0x0);
            let _0x2f393c = Math['cos'](time / 0xb4 + _0x150e2f['render']['time'] / 0x5a) * 0.12 * 0.5;
            ctx['translate'](_0x150e2f['render']['radius'] * 1.2, _0x150e2f['render']['radius'] * 0.4), ctx['rotate'](_0x2f393c), ctx['beginPath'](), ctx['lineTo'](-_0x150e2f['render']['radius'] * 0.4, _0x150e2f['render']['radius'] * 0.05), ctx['quadraticCurveTo'](_0x150e2f['render']['radius'] * 0.7, _0x150e2f['render']['radius'] * 0.05, _0x150e2f['render']['radius'] * 0.9, -_0x150e2f['render']['radius'] * 0.125), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x2f393c), ctx['translate'](-_0x150e2f['render']['radius'] * 1.2, -_0x150e2f['render']['radius'] * 0.4), ctx['translate'](_0x150e2f['render']['radius'] * 1.2, -_0x150e2f['render']['radius'] * 0.4), ctx['rotate'](-_0x2f393c), ctx['beginPath'](), ctx['lineTo'](-_0x150e2f['render']['radius'] * 0.4, -_0x150e2f['render']['radius'] * 0.05), ctx['quadraticCurveTo'](_0x150e2f['render']['radius'] * 0.7, -_0x150e2f['render']['radius'] * 0.05, _0x150e2f['render']['radius'] * 0.9, _0x150e2f['render']['radius'] * 0.125), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x2f393c), ctx['translate'](-_0x150e2f['render']['radius'] * 1.2, _0x150e2f['render']['radius'] * 0.4), ctx['lineWidth'] = _0x150e2f['render']['radius'] / 0x5, ctx['fillStyle'] = _0x1a19b6, ctx['strokeStyle'] = _0x4fb15b, ctx['beginPath'](), ctx['arc'](-_0x150e2f['render']['radius'] * 0x3 / 0x4, 0x0, _0x150e2f['render']['radius'] * 0xd / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x150e2f['render']['radius'] * 0x1 / 0x4, 0x0, _0x150e2f['render']['radius'] * 11.5 / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.3, ctx['fillStyle'] = 'white';
            let _0x11d367 = Math['cos'](time / 0x1a4 + _0x150e2f['render']['time'] / 0x5f) / 0x7 - 0.05;
            ctx['translate'](_0x150e2f['render']['radius'] * 0.4, 0x0), ctx['rotate'](_0x11d367), ctx['translate'](_0x150e2f['render']['radius'] * -0.1, _0x150e2f['render']['radius'] * 0.4), ctx['beginPath'](), ctx['ellipse'](-_0x150e2f['render']['radius'] * 0.7, 0x0, _0x150e2f['render']['radius'] * 1.1, _0x150e2f['render']['radius'] * 0.45, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x150e2f['render']['radius'] * -0.1), -(_0x150e2f['render']['radius'] * 0.4)), ctx['rotate'](-_0x11d367), ctx['rotate'](-_0x11d367), ctx['translate'](_0x150e2f['render']['radius'] * -0.1, -_0x150e2f['render']['radius'] * 0.4), ctx['beginPath'](), ctx['ellipse'](-_0x150e2f['render']['radius'] * 0.7, 0x0, _0x150e2f['render']['radius'] * 1.1, _0x150e2f['render']['radius'] * 0.45, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x150e2f['render']['radius'] * -0.1), _0x150e2f['render']['radius'] * 0.4), ctx['rotate'](_0x11d367), ctx['translate'](_0x150e2f['render']['radius'] * -0.4, 0x0), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['rotate'](-_0x150e2f['render']['angle']), ctx['lineWidth'] = _0x150e2f['render']['radius'] / 0x5, ctx['fillStyle'] = _0x1a19b6, ctx['strokeStyle'] = _0x4fb15b, ctx['rotate'](_0x150e2f['render']['angle']), ctx['beginPath'](), ctx['arc'](_0x150e2f['render']['radius'], 0x0, _0x150e2f['render']['radius'] * 9.5 / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['setTransform'](ctx['lastTransform73408']);
        },
        'Baby\x20Termite': _0x2137d7 => {
            _0x2137d7['render']['time'] += Math['sqrt']((_0x2137d7['render']['lastX'] - _0x2137d7['render']['x']) ** 0x2 + (_0x2137d7['render']['lastY'] - _0x2137d7['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x2137d7['render']['radius'] / 142.5) + 0.5) * 0x5, _0x2137d7['render']['lastX'] = _0x2137d7['render']['x'], _0x2137d7['render']['lastY'] = _0x2137d7['render']['y'];
            let _0x59137e = enemyColor('#c7a037', _0x2137d7), _0x58be28 = enemyColor('#a1822f', _0x2137d7);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0x2137d7['render']['radius'] * 0.41, ctx['rotate'](_0x2137d7['render']['angle']), ctx['translate'](_0x2137d7['render']['radius'] * -0.15, 0x0);
            let _0x50a9ec = Math['cos'](time / 0xb4 + _0x2137d7['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['rotate'](_0x50a9ec - Math['PI'] / 0x4b), ctx['moveTo'](_0x2137d7['render']['radius'] * 0.76, _0x2137d7['render']['radius'] * -0.3), ctx['lineTo'](_0x2137d7['render']['radius'] * 1.07, _0x2137d7['render']['radius'] * -0.5), ctx['lineTo'](_0x2137d7['render']['radius'] * 1.41, _0x2137d7['render']['radius'] * -0.23), ctx['rotate'](-(_0x50a9ec - Math['PI'] / 0x4b)), ctx['rotate'](-(_0x50a9ec - Math['PI'] / 0x4b)), ctx['moveTo'](_0x2137d7['render']['radius'] * 0.76, _0x2137d7['render']['radius'] * 0.3), ctx['lineTo'](_0x2137d7['render']['radius'] * 1.07, _0x2137d7['render']['radius'] * 0.5), ctx['lineTo'](_0x2137d7['render']['radius'] * 1.41, _0x2137d7['render']['radius'] * 0.23), ctx['rotate'](_0x50a9ec - Math['PI'] / 0x4b), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x59137e, ctx['strokeStyle'] = _0x58be28, ctx['fillStyle'] = _0x59137e, ctx['strokeStyle'] = _0x58be28, ctx['beginPath'](), ctx['arc'](_0x2137d7['render']['radius'] * 0.15, _0x2137d7['render']['radius'] * 0x0, _0x2137d7['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['translate'](_0x2137d7['render']['radius'] * 0.15, 0x0), ctx['rotate'](-_0x2137d7['render']['angle']);
        },
        'Worker\x20Termite': _0xf51508 => {
            _0xf51508['render']['time'] += Math['sqrt']((_0xf51508['render']['lastX'] - _0xf51508['render']['x']) ** 0x2 + (_0xf51508['render']['lastY'] - _0xf51508['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0xf51508['render']['radius'] / 142.5) + 0.5) * 0x5, _0xf51508['render']['lastX'] = _0xf51508['render']['x'], _0xf51508['render']['lastY'] = _0xf51508['render']['y'];
            let _0x554800 = enemyColor('#c7a037', _0xf51508), _0x45334 = enemyColor('#a1822f', _0xf51508);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0xf51508['render']['radius'] * 0.41, ctx['rotate'](_0xf51508['render']['angle']);
            let _0x9f7405 = Math['cos'](time / 0xb4 + _0xf51508['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['rotate'](_0x9f7405 - Math['PI'] / 0x4b), ctx['moveTo'](_0xf51508['render']['radius'] * 0.76, _0xf51508['render']['radius'] * -0.3), ctx['lineTo'](_0xf51508['render']['radius'] * 1.07, _0xf51508['render']['radius'] * -0.5), ctx['lineTo'](_0xf51508['render']['radius'] * 1.41, _0xf51508['render']['radius'] * -0.23), ctx['rotate'](-(_0x9f7405 - Math['PI'] / 0x4b)), ctx['rotate'](-(_0x9f7405 - Math['PI'] / 0x4b)), ctx['moveTo'](_0xf51508['render']['radius'] * 0.76, _0xf51508['render']['radius'] * 0.3), ctx['lineTo'](_0xf51508['render']['radius'] * 1.07, _0xf51508['render']['radius'] * 0.5), ctx['lineTo'](_0xf51508['render']['radius'] * 1.41, _0xf51508['render']['radius'] * 0.23), ctx['rotate'](_0x9f7405 - Math['PI'] / 0x4b), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x554800, ctx['strokeStyle'] = _0x45334, ctx['beginPath'](), ctx['arc'](_0xf51508['render']['radius'] * -0.91, _0xf51508['render']['radius'] * 0x0, _0xf51508['render']['radius'] * 0.65, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0xf51508['render']['radius'] * 0.15, _0xf51508['render']['radius'] * 0x0, _0xf51508['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0xf51508['render']['angle']);
        },
        'Gnat': _0x2cc9c4 => {
            _0x2cc9c4['render']['time'] += Math['sqrt']((_0x2cc9c4['render']['lastX'] - _0x2cc9c4['render']['x']) ** 0x2 + (_0x2cc9c4['render']['lastY'] - _0x2cc9c4['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x2cc9c4['render']['radius'] / 142.5) + 0.5) * 0x5, _0x2cc9c4['render']['lastX'] = _0x2cc9c4['render']['x'], _0x2cc9c4['render']['lastY'] = _0x2cc9c4['render']['y'];
            let _0xe36e09 = enemyColor('#1d1f12', _0x2cc9c4), _0xe891be = enemyColor('#11110c', _0x2cc9c4);
            const _0x8638bd = (Math['sin'](time / 0x5a + _0x2cc9c4['render']['time'] / 0x1e) + Math['cos'](time / 0x2c + _0x2cc9c4['render']['time'] / 0x16)) * 0.6, _0xd5b681 = (Math['cos'](time / 0x64 + _0x2cc9c4['render']['time'] / 0x1b) + Math['sin'](time / 0x32 + _0x2cc9c4['render']['time'] / 0x18)) * 0.35;
            ctx['rotate'](_0x2cc9c4['render']['angle']), ctx['strokeStyle'] = '#202020', ctx['lineWidth'] = Math['max'](0x1, _0x2cc9c4['render']['radius'] * 0.14), ctx['translate'](_0x8638bd * 0.25, _0xd5b681 * 0.25), ctx['beginPath']();
            let _0x127ad3 = _0x2cc9c4['render']['radius'] * 0.62, _0x46d094 = _0x2cc9c4['render']['radius'] * 1.02, _0x138dbd = _0x2cc9c4['render']['radius'] * 0.85, _0x1a7709 = Math['cos'](time / 0x82 + _0x2cc9c4['render']['time'] / 0x18) * 0.07;
            ctx['rotate'](_0x1a7709), ctx['moveTo'](_0x127ad3, -_0x2cc9c4['render']['radius'] * 0.22), ctx['lineTo'](_0x138dbd, -_0x2cc9c4['render']['radius'] * 0.45), ctx['lineTo'](_0x46d094, -_0x2cc9c4['render']['radius'] * 0.28), ctx['moveTo'](_0x127ad3, _0x2cc9c4['render']['radius'] * 0.22), ctx['lineTo'](_0x138dbd, _0x2cc9c4['render']['radius'] * 0.45), ctx['lineTo'](_0x46d094, _0x2cc9c4['render']['radius'] * 0.28), ctx['rotate'](-_0x1a7709), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0xe36e09, ctx['strokeStyle'] = _0xe891be, ctx['beginPath'](), ctx['arc'](_0x2cc9c4['render']['radius'] * -0.48, _0x2cc9c4['render']['radius'] * 0x0, _0x2cc9c4['render']['radius'] * 0.48, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['globalAlpha'] *= 0.95, ctx['ellipse'](_0x2cc9c4['render']['radius'] * 0.12, 0x0, _0x2cc9c4['render']['radius'] * 0.66, _0x2cc9c4['render']['radius'] * 0.44, Math['PI'] * 0.12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['globalAlpha'] /= 0.95, ctx['closePath']();
            const _0x29a758 = 1.8, _0x2bd505 = Math['cos'](time / 0x3c * _0x29a758 + _0x2cc9c4['render']['time'] / 0xc) / 0x6 - 0.08, _0x7a0d9a = Math['abs'](Math['sin'](time / 0x1e * _0x29a758 + _0x2cc9c4['render']['time'] / 0x8)) * 0.35 + 0.25, _0x1ab7f1 = 'rgba(230,\x20245,\x20200,\x200.28)', _0x5ba367 = 'rgba(160,180,120,0.45)';
            let _0x41da78 = Math['sin'](time / 0x23 + _0x2cc9c4['render']['time'] / 0x6) * 0.8;
            ctx['fillStyle'] = _0x1ab7f1, ctx['strokeStyle'] = _0x5ba367, ctx['beginPath'](), ctx['rotate'](_0x2bd505 + _0x41da78 * 0.005), ctx['ellipse'](_0x2cc9c4['render']['radius'] * -0.68, -_0x2cc9c4['render']['radius'] * 0.48, _0x2cc9c4['render']['radius'] * 0.76 * _0x7a0d9a, _0x2cc9c4['render']['radius'] * 0.36 * (0.9 + _0x7a0d9a * 0.2), 0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['rotate'](-(_0x2bd505 + _0x41da78 * 0.005)), ctx['closePath'](), ctx['beginPath'](), ctx['rotate'](-(_0x2bd505 + _0x41da78 * 0.005)), ctx['ellipse'](_0x2cc9c4['render']['radius'] * -0.68, _0x2cc9c4['render']['radius'] * 0.48, _0x2cc9c4['render']['radius'] * 0.76 * _0x7a0d9a, _0x2cc9c4['render']['radius'] * 0.36 * (0.9 + _0x7a0d9a * 0.2), -0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['rotate'](_0x2bd505 + _0x41da78 * 0.005), ctx['closePath'](), ctx['globalAlpha'] *= 0.5, ctx['fillStyle'] = 'rgba(210,230,180,0.12)', ctx['beginPath'](), ctx['rotate'](_0x2bd505 * 0.6), ctx['ellipse'](_0x2cc9c4['render']['radius'] * -0.68 + _0x41da78 * 0.6, -_0x2cc9c4['render']['radius'] * 0.48 - _0x41da78 * 0.3, _0x2cc9c4['render']['radius'] * 0.72 * _0x7a0d9a, _0x2cc9c4['render']['radius'] * 0.32 * (0.9 + _0x7a0d9a * 0.2), 0.26, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['rotate'](-_0x2bd505 * 0.6), ctx['closePath'](), ctx['globalAlpha'] /= 0.5, Math['random']() < 0.015 && (ctx['globalAlpha'] *= 0.25, ctx['fillStyle'] = 'rgba(160,200,120,0.08)', ctx['beginPath'](), ctx['arc'](Math['random']() * _0x2cc9c4['render']['radius'] * 0.8 - _0x2cc9c4['render']['radius'] * 0.4, Math['random']() * _0x2cc9c4['render']['radius'] * 0.6 - _0x2cc9c4['render']['radius'] * 0.3, Math['random']() * (_0x2cc9c4['render']['radius'] * 0.06) + _0x2cc9c4['render']['radius'] * 0.02, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.25), ctx['translate'](-_0x8638bd * 0.25, -_0xd5b681 * 0.25), ctx['fillStyle'] = 'rgba(255,255,255,0.9)', ctx['beginPath'](), ctx['arc'](_0x2cc9c4['render']['radius'] * -0.62, _0x2cc9c4['render']['radius'] * -0.08, Math['max'](0x1, _0x2cc9c4['render']['radius'] * 0.08), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x2cc9c4['render']['angle']);
        },
        'Soldier\x20Termite': _0x524345 => {
            _0x524345['render']['time'] += Math['sqrt']((_0x524345['render']['lastX'] - _0x524345['render']['x']) ** 0x2 + (_0x524345['render']['lastY'] - _0x524345['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x524345['render']['radius'] / 142.5) + 0.5) * 0x5, _0x524345['render']['lastX'] = _0x524345['render']['x'], _0x524345['render']['lastY'] = _0x524345['render']['y'];
            let _0x122ed2 = enemyColor('#c7a037', _0x524345), _0x5f3dc2 = enemyColor('#a1822f', _0x524345);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0x524345['render']['radius'] * 0.41, ctx['rotate'](_0x524345['render']['angle']);
            let _0x20ca03 = Math['cos'](time / 0xb4 + _0x524345['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['rotate'](_0x20ca03 - Math['PI'] / 0x4b), ctx['moveTo'](_0x524345['render']['radius'] * 0.76, _0x524345['render']['radius'] * -0.3), ctx['lineTo'](_0x524345['render']['radius'] * 1.07, _0x524345['render']['radius'] * -0.5), ctx['lineTo'](_0x524345['render']['radius'] * 1.41, _0x524345['render']['radius'] * -0.23), ctx['rotate'](-(_0x20ca03 - Math['PI'] / 0x4b)), ctx['rotate'](-(_0x20ca03 - Math['PI'] / 0x4b)), ctx['moveTo'](_0x524345['render']['radius'] * 0.76, _0x524345['render']['radius'] * 0.3), ctx['lineTo'](_0x524345['render']['radius'] * 1.07, _0x524345['render']['radius'] * 0.5), ctx['lineTo'](_0x524345['render']['radius'] * 1.41, _0x524345['render']['radius'] * 0.23), ctx['rotate'](_0x20ca03 - Math['PI'] / 0x4b), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x122ed2, ctx['strokeStyle'] = _0x5f3dc2, ctx['beginPath'](), ctx['arc'](_0x524345['render']['radius'] * -0.91, _0x524345['render']['radius'] * 0x0, _0x524345['render']['radius'] * 0.65, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            let _0x3c67cf = Math['cos'](time / 0x1a4 + _0x524345['render']['time'] / 0x46) / 0x7 - 0.05;
            ctx['fillStyle'] = '#ffffff', ctx['globalAlpha'] *= 0.3, ctx['beginPath'](), ctx['rotate'](_0x3c67cf), ctx['ellipse'](_0x524345['render']['radius'] * -0.98, _0x524345['render']['radius'] * -0.54, _0x524345['render']['radius'] * 0.79, _0x524345['render']['radius'] * 0.42, 0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](-_0x3c67cf), ctx['rotate'](-_0x3c67cf), ctx['ellipse'](_0x524345['render']['radius'] * -0.98, _0x524345['render']['radius'] * 0.54, _0x524345['render']['radius'] * 0.79, _0x524345['render']['radius'] * 0.42, -0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](_0x3c67cf), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['fillStyle'] = _0x122ed2, ctx['strokeStyle'] = _0x5f3dc2, ctx['beginPath'](), ctx['arc'](_0x524345['render']['radius'] * 0.15, _0x524345['render']['radius'] * 0x0, _0x524345['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x524345['render']['angle']);
        },
        'Queen\x20Termite': _0x36789c => {
            ctx['lastTransform73408'] = ctx['getTransform'](), ctx['scale'](0.8, 0.8), _0x36789c['render']['time'] += Math['sqrt']((_0x36789c['render']['lastX'] - _0x36789c['render']['x']) ** 0x2 + (_0x36789c['render']['lastY'] - _0x36789c['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x36789c['render']['radius'] / 1.84390889146 / 142.5) + 0.5) * 0x5, _0x36789c['render']['lastX'] = _0x36789c['render']['x'], _0x36789c['render']['lastY'] = _0x36789c['render']['y'];
            let _0x545ab4 = enemyColor('#c7a037', _0x36789c), _0x27b189 = enemyColor('#a1822f', _0x36789c);
            ctx['strokeStyle'] = enemyColor('#292929', _0x36789c), ctx['lineWidth'] = _0x36789c['render']['radius'] / 3.75, ctx['rotate'](_0x36789c['render']['angle']);
            let _0x4bae42 = Math['cos'](time / 0xb4 + _0x36789c['render']['time'] / 0x3c) * 0.05;
            ctx['translate'](_0x36789c['render']['radius'] * 0x5 / 0x8, 0x0), ctx['beginPath'](), ctx['rotate'](_0x4bae42 - Math['PI'] / 0x4b), ctx['moveTo'](_0x36789c['render']['radius'] * 0.76, _0x36789c['render']['radius'] * -0.3), ctx['lineTo'](_0x36789c['render']['radius'] * 1.07, _0x36789c['render']['radius'] * -0.5), ctx['lineTo'](_0x36789c['render']['radius'] * 1.41, _0x36789c['render']['radius'] * -0.23), ctx['rotate'](-(_0x4bae42 - Math['PI'] / 0x4b)), ctx['rotate'](-(_0x4bae42 - Math['PI'] / 0x4b)), ctx['moveTo'](_0x36789c['render']['radius'] * 0.76, _0x36789c['render']['radius'] * 0.3), ctx['lineTo'](_0x36789c['render']['radius'] * 1.07, _0x36789c['render']['radius'] * 0.5), ctx['lineTo'](_0x36789c['render']['radius'] * 1.41, _0x36789c['render']['radius'] * 0.23), ctx['rotate'](_0x4bae42 - Math['PI'] / 0x4b), ctx['stroke'](), ctx['closePath'](), ctx['translate'](-_0x36789c['render']['radius'] * 0x5 / 0x8, 0x0), ctx['lineWidth'] = _0x36789c['render']['radius'] / 0x5, ctx['fillStyle'] = _0x545ab4, ctx['strokeStyle'] = _0x27b189, ctx['beginPath'](), ctx['ellipse'](-_0x36789c['render']['radius'] * 0x3 / 0x4, 0x0, _0x36789c['render']['radius'] * 0xd / 12.5 * 1.2, _0x36789c['render']['radius'] * 0xd / 12.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['ellipse'](_0x36789c['render']['radius'] * 0x1 / 0x4, 0x0, _0x36789c['render']['radius'] * 11.5 / 12.5 * 1.2, _0x36789c['render']['radius'] * 11.5 / 12.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.3, ctx['fillStyle'] = 'white';
            let _0x40ad15 = Math['cos'](time / 0x1a4 + _0x36789c['render']['time'] / 0x5f) / 0x7 - 0.05;
            ctx['translate'](_0x36789c['render']['radius'] * 0.4, 0x0), ctx['rotate'](_0x40ad15), ctx['translate'](_0x36789c['render']['radius'] * -0.1, _0x36789c['render']['radius'] * 0.4), ctx['beginPath'](), ctx['ellipse'](-_0x36789c['render']['radius'] * 0.7, 0x0, _0x36789c['render']['radius'] * 1.1, _0x36789c['render']['radius'] * 0.45, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x36789c['render']['radius'] * -0.1), -(_0x36789c['render']['radius'] * 0.4)), ctx['rotate'](-_0x40ad15), ctx['rotate'](-_0x40ad15), ctx['translate'](_0x36789c['render']['radius'] * -0.1, -_0x36789c['render']['radius'] * 0.4), ctx['beginPath'](), ctx['ellipse'](-_0x36789c['render']['radius'] * 0.7, 0x0, _0x36789c['render']['radius'] * 1.1, _0x36789c['render']['radius'] * 0.45, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x36789c['render']['radius'] * -0.1), _0x36789c['render']['radius'] * 0.4), ctx['rotate'](_0x40ad15), ctx['translate'](_0x36789c['render']['radius'] * -0.4, 0x0), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['rotate'](-_0x36789c['render']['angle']), ctx['lineWidth'] = _0x36789c['render']['radius'] / 0x5, ctx['fillStyle'] = _0x545ab4, ctx['strokeStyle'] = _0x27b189, ctx['rotate'](_0x36789c['render']['angle']), ctx['beginPath'](), ctx['arc'](_0x36789c['render']['radius'], 0x0, _0x36789c['render']['radius'] * 9.5 / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['setTransform'](ctx['lastTransform73408']);
        },
        'Carrion\x20Spire': _0x388107 => {
            _0x388107['render']['time'] += dt;
            const _0x5de187 = (Math['sin'](performance['now']() / 0x2bc) + 0x1) / 0x2, _0x5129cc = (Math['sin'](performance['now']() / 0x8fc) + 0x1) / 0x2, _0x4843da = '#3c372a', _0x48d639 = '#5a6040', _0x1f76ad = '#92a851', _0x3e54d9 = '#2b271f';
            let _0x53913e = blendColor(_0x4843da, _0x1f76ad, 0.15 + _0x5de187 * 0.25), _0x4161f2 = blendColor(_0x48d639, _0x1f76ad, 0.25 + _0x5129cc * 0.2), _0x1d69e1 = blendColor(_0x3e54d9, _0x1f76ad, 0.1 + _0x5de187 * 0.2);
            _0x53913e = enemyColor(_0x53913e, _0x388107), _0x4161f2 = enemyColor(_0x4161f2, _0x388107), _0x1d69e1 = enemyColor(_0x1d69e1, _0x388107), ctx['rotate'](_0x388107['render']['angle'] + Math['PI'] / 0x2), ctx['fillStyle'] = _0x53913e, ctx['strokeStyle'] = _0x1d69e1, ctx['lineWidth'] = _0x388107['render']['radius'] * 0.15, ctx['beginPath'](), ctx['moveTo'](0x0, _0x388107['render']['radius'] * -1.4), ctx['quadraticCurveTo'](_0x388107['render']['radius'] * 0.5, _0x388107['render']['radius'] * -0.6, 0x0, _0x388107['render']['radius'] * 1.2), ctx['quadraticCurveTo'](-_0x388107['render']['radius'] * 0.5, _0x388107['render']['radius'] * -0.6, 0x0, _0x388107['render']['radius'] * -1.4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x4161f2, ctx['lineWidth'] = _0x388107['render']['radius'] * 0.05;
            for (let _0x2d0fc3 = -0x1; _0x2d0fc3 <= 0x1; _0x2d0fc3++) {
                ctx['beginPath'](), ctx['moveTo'](_0x388107['render']['radius'] * 0.2 * _0x2d0fc3, _0x388107['render']['radius'] * 1.1), ctx['quadraticCurveTo'](_0x388107['render']['radius'] * 0.4 * _0x2d0fc3 + Math['sin'](_0x388107['render']['time'] / 0xc8 + _0x2d0fc3) * _0x388107['render']['radius'] * 0.2, _0x388107['render']['radius'] * 0.1, _0x388107['render']['radius'] * 0.15 * _0x2d0fc3, _0x388107['render']['radius'] * -1.1), ctx['stroke'](), ctx['closePath']();
            }
            ctx['strokeStyle'] = blendColor(_0x1f76ad, '#000000', 0.35), ctx['lineWidth'] = _0x388107['render']['radius'] * 0.04;
            for (let _0x2e1f18 = 0x0; _0x2e1f18 < 0x4; _0x2e1f18++) {
                const _0x3acc93 = _0x2e1f18 / 0x4 * Math['PI'] * 0x2 + performance['now']() / 0x384, _0x3ca9c1 = _0x388107['render']['radius'] * (0.8 + Math['sin'](performance['now']() / 0x258 + _0x2e1f18) * 0.15);
                ctx['beginPath'](), ctx['moveTo'](0x0, -_0x388107['render']['radius'] * 1.1), ctx['lineTo'](Math['cos'](_0x3acc93) * _0x3ca9c1 * 0.6, -_0x388107['render']['radius'] * 1.1 + Math['sin'](_0x3acc93) * _0x3ca9c1 * 0.3), ctx['stroke'](), ctx['closePath']();
            }
            ctx['strokeStyle'] = 'rgba(180,200,140,' + (0.08 + _0x5de187 * 0.06) + ')', ctx['lineWidth'] = _0x388107['render']['radius'] * 0.07;
            for (let _0xf0a123 = 0x0; _0xf0a123 < 0x3; _0xf0a123++) {
                ctx['beginPath']();
                const _0xf83403 = performance['now']() / (0x640 - _0xf0a123 * 0xc8) + _0xf0a123, _0x5e4c84 = _0x388107['render']['radius'] * (1.3 + _0xf0a123 * 0.25);
                ctx['arc'](0x0, 0x0, _0x5e4c84, _0xf83403 % (Math['PI'] * 0x2), (_0xf83403 + 1.5) % (Math['PI'] * 0x2)), ctx['stroke'](), ctx['closePath']();
            }
            Math['random']() < 0.02 && (ctx['globalAlpha'] *= 0.4, ctx['fillStyle'] = 'rgba(180,220,120,0.08)', ctx['beginPath'](), ctx['arc']((Math['random']() - 0.5) * _0x388107['render']['radius'] * 0x2, -_0x388107['render']['radius'] * (0x1 + Math['random']()), Math['random']() * _0x388107['render']['radius'] * 0.1 + _0x388107['render']['radius'] * 0.05, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.4), ctx['rotate'](-_0x388107['render']['angle'] - Math['PI'] / 0x2);
        },
        'Termite\x20Mound': _0x4f7bde => {
            let _0x1f01d9 = [
                '#a39d43',
                '#858033',
                '#605d28'
            ]['map'](_0x7a86db => enemyColor(_0x7a86db, _0x4f7bde));
            ctx['fillStyle'] = _0x1f01d9[0x0], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4f7bde['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x1f01d9[0x1], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4f7bde['render']['radius'] * 0x2 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x1f01d9[0x2], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4f7bde['render']['radius'] * 0x1 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'Gnat\x20Swarm': _0x309955 => {
            let _0x22b6f3 = [
                '#1d7b39',
                '#1a4f16',
                '#0c3a16'
            ]['map'](_0x2dd5ce => enemyColor(_0x2dd5ce, _0x309955));
            ctx['fillStyle'] = _0x22b6f3[0x0], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x309955['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x22b6f3[0x1], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x309955['render']['radius'] * 0x2 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x22b6f3[0x2], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x309955['render']['radius'] * 0x1 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'Termite\x20Egg': _0xa6a190 => {
            ctx['lineWidth'] = _0xa6a190['render']['radius'] / 4.5, ctx['fillStyle'] = enemyColor('#ffe586', _0xa6a190), ctx['strokeStyle'] = enemyColor('#d0b968', _0xa6a190), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xa6a190['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Queen\x20Shiny\x20Ant': _0x1852d5 => {
            ctx['lastTransform73408'] = ctx['getTransform'](), ctx['scale'](0.8, 0.8), _0x1852d5['render']['time'] += Math['sqrt']((_0x1852d5['render']['lastX'] - _0x1852d5['render']['x']) ** 0x2 + (_0x1852d5['render']['lastY'] - _0x1852d5['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x1852d5['render']['radius'] / 1.84390889146 / 142.5) + 0.5) * 0x5, _0x1852d5['render']['lastX'] = _0x1852d5['render']['x'], _0x1852d5['render']['lastY'] = _0x1852d5['render']['y'];
            let _0xb9de03 = enemyColor('#cfd14d', _0x1852d5), _0x90d16f = enemyColor('#a7a83e', _0x1852d5);
            ctx['strokeStyle'] = enemyColor('#7a7a2d', _0x1852d5), ctx['lineWidth'] = _0x1852d5['render']['radius'] / 3.75, ctx['rotate'](_0x1852d5['render']['angle']), ctx['translate'](-_0x1852d5['render']['radius'] * 0.52, 0x0);
            let _0x182843 = Math['cos'](time / 0xb4 + _0x1852d5['render']['time'] / 0x5a) * 0.12 * 0.5;
            ctx['translate'](_0x1852d5['render']['radius'] * 1.2, _0x1852d5['render']['radius'] * 0.4), ctx['rotate'](_0x182843), ctx['beginPath'](), ctx['lineTo'](-_0x1852d5['render']['radius'] * 0.4, _0x1852d5['render']['radius'] * 0.05), ctx['quadraticCurveTo'](_0x1852d5['render']['radius'] * 0.7, _0x1852d5['render']['radius'] * 0.05, _0x1852d5['render']['radius'] * 0.9, -_0x1852d5['render']['radius'] * 0.125), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x182843), ctx['translate'](-_0x1852d5['render']['radius'] * 1.2, -_0x1852d5['render']['radius'] * 0.4), ctx['translate'](_0x1852d5['render']['radius'] * 1.2, -_0x1852d5['render']['radius'] * 0.4), ctx['rotate'](-_0x182843), ctx['beginPath'](), ctx['lineTo'](-_0x1852d5['render']['radius'] * 0.4, -_0x1852d5['render']['radius'] * 0.05), ctx['quadraticCurveTo'](_0x1852d5['render']['radius'] * 0.7, -_0x1852d5['render']['radius'] * 0.05, _0x1852d5['render']['radius'] * 0.9, _0x1852d5['render']['radius'] * 0.125), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x182843), ctx['translate'](-_0x1852d5['render']['radius'] * 1.2, _0x1852d5['render']['radius'] * 0.4), ctx['lineWidth'] = _0x1852d5['render']['radius'] / 0x5, ctx['fillStyle'] = _0xb9de03, ctx['strokeStyle'] = _0x90d16f, ctx['beginPath'](), ctx['arc'](-_0x1852d5['render']['radius'] * 0x3 / 0x4, 0x0, _0x1852d5['render']['radius'] * 0xd / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x1852d5['render']['radius'] * 0x1 / 0x4, 0x0, _0x1852d5['render']['radius'] * 11.5 / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.3, ctx['fillStyle'] = 'white';
            let _0x46b22a = Math['cos'](time / 0x1a4 + _0x1852d5['render']['time'] / 0x5f) / 0x7 - 0.05;
            ctx['translate'](_0x1852d5['render']['radius'] * 0.4, 0x0), ctx['rotate'](_0x46b22a), ctx['translate'](_0x1852d5['render']['radius'] * -0.1, _0x1852d5['render']['radius'] * 0.4), ctx['beginPath'](), ctx['ellipse'](-_0x1852d5['render']['radius'] * 0.7, 0x0, _0x1852d5['render']['radius'] * 1.1, _0x1852d5['render']['radius'] * 0.45, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x1852d5['render']['radius'] * -0.1), -(_0x1852d5['render']['radius'] * 0.4)), ctx['rotate'](-_0x46b22a), ctx['rotate'](-_0x46b22a), ctx['translate'](_0x1852d5['render']['radius'] * -0.1, -_0x1852d5['render']['radius'] * 0.4), ctx['beginPath'](), ctx['ellipse'](-_0x1852d5['render']['radius'] * 0.7, 0x0, _0x1852d5['render']['radius'] * 1.1, _0x1852d5['render']['radius'] * 0.45, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x1852d5['render']['radius'] * -0.1), _0x1852d5['render']['radius'] * 0.4), ctx['rotate'](_0x46b22a), ctx['translate'](_0x1852d5['render']['radius'] * -0.4, 0x0), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['rotate'](-_0x1852d5['render']['angle']), ctx['lineWidth'] = _0x1852d5['render']['radius'] / 0x5, ctx['fillStyle'] = _0xb9de03, ctx['strokeStyle'] = _0x90d16f, ctx['rotate'](_0x1852d5['render']['angle']), ctx['beginPath'](), ctx['arc'](_0x1852d5['render']['radius'], 0x0, _0x1852d5['render']['radius'] * 9.5 / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['setTransform'](ctx['lastTransform73408']);
        },
        'Soldier\x20Shiny\x20Ant': _0x45dd3a => {
            _0x45dd3a['render']['time'] += Math['sqrt']((_0x45dd3a['render']['lastX'] - _0x45dd3a['render']['x']) ** 0x2 + (_0x45dd3a['render']['lastY'] - _0x45dd3a['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x45dd3a['render']['radius'] / 142.5) + 0.5) * 0x5, _0x45dd3a['render']['lastX'] = _0x45dd3a['render']['x'], _0x45dd3a['render']['lastY'] = _0x45dd3a['render']['y'];
            if (_0x45dd3a['splitShockwaveWarningTime']) {
                if (time < _0x45dd3a['splitShockwaveWarningTime'] + 0x535 && (!_0x45dd3a['splitShockwaveTime'] || time > _0x45dd3a['splitShockwaveTime'] + 0x535)) {
                    let _0x1c8fe7 = ctx['globalAlpha'];
                    ctx['globalAlpha'] = (time - _0x45dd3a['splitShockwaveWarningTime']) / 0x535, ctx['strokeStyle'] = 'red', ctx['lineWidth'] = 0xbb8, ctx['lineCap'] = 'butt';
                    for (let _0xbb86df = 0x4; _0xbb86df--; _0xbb86df > 0x0) {
                        ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x5dc, _0x45dd3a['splitShockwaveAngle'] - 0.3 + _0xbb86df * Math['PI'] / 0x2, _0x45dd3a['splitShockwaveAngle'] + 0.3 + _0xbb86df * Math['PI'] / 0x2), ctx['stroke'](), ctx['closePath']();
                    }
                    ctx['globalAlpha'] = _0x1c8fe7, ctx['lineCap'] = 'round';
                } else
                    delete _0x45dd3a['splitShockwaveWarningTime'];
            }
            if (_0x45dd3a['splitShockwaveTime']) {
                if (time < _0x45dd3a['splitShockwaveTime'] + 0xfa) {
                    let _0x53a197 = ctx['globalAlpha'];
                    ctx['globalAlpha'] = 0.5 - (time - _0x45dd3a['splitShockwaveTime']) / 0x1f4, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = 0xbb8, ctx['lineCap'] = 'butt';
                    for (let _0x28a262 = 0x4; _0x28a262--; _0x28a262 > 0x0) {
                        ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x5dc, _0x45dd3a['splitShockwaveAngle'] - 0.3 + _0x28a262 * Math['PI'] / 0x2, _0x45dd3a['splitShockwaveAngle'] + 0.3 + _0x28a262 * Math['PI'] / 0x2), ctx['stroke'](), ctx['closePath']();
                    }
                    ctx['globalAlpha'] = _0x53a197, ctx['lineCap'] = 'round';
                } else
                    delete _0x45dd3a['splitShockwaveTime'];
            }
            if (_0x45dd3a['singleShockwaveWarningTime']) {
                if (time < _0x45dd3a['singleShockwaveWarningTime'] + 0xfa0 && (!_0x45dd3a['singleShockwaveTime'] || time > _0x45dd3a['singleShockwaveWarningTime'] + 0xfa0)) {
                    let _0x1d4ce4 = ctx['globalAlpha'];
                    ctx['globalAlpha'] = (time - _0x45dd3a['singleShockwaveWarningTime']) / 0xfa0, ctx['strokeStyle'] = 'red', ctx['lineWidth'] = 0x1388, ctx['lineCap'] = 'butt', ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x1, _0x45dd3a['render']['angle'] - 0.03, _0x45dd3a['render']['angle'] + 0.03), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = _0x1d4ce4, ctx['lineCap'] = 'round';
                } else
                    delete _0x45dd3a['singleShockwaveWarningTime'];
            }
            if (_0x45dd3a['singleShockwaveTime']) {
                if (time < _0x45dd3a['singleShockwaveTime'] + 0x3e8) {
                    let _0x2dc9fa = ctx['globalAlpha'];
                    ctx['globalAlpha'] = 0.5 - (time - _0x45dd3a['singleShockwaveTime']) / 0x7d0, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = 0x1388, ctx['lineCap'] = 'butt', ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x1, _0x45dd3a['render']['angle'] - 0.03, _0x45dd3a['render']['angle'] + 0.03), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = _0x2dc9fa, ctx['lineCap'] = 'round';
                } else
                    delete _0x45dd3a['singleShockwaveTime'];
            }
            let _0x3418bd = enemyColor('#cfd14d', _0x45dd3a), _0x3a86ae = enemyColor('#a7a83e', _0x45dd3a);
            ctx['strokeStyle'] = '#7a7a2d', ctx['lineWidth'] = _0x45dd3a['render']['radius'] * 0.41, ctx['rotate'](_0x45dd3a['render']['angle']);
            let _0x68b5ad = Math['cos'](time / 0xb4 + _0x45dd3a['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['moveTo'](_0x45dd3a['render']['radius'] * 0.62, _0x45dd3a['render']['radius'] * -0.45), ctx['rotate'](_0x68b5ad), ctx['quadraticCurveTo'](_0x45dd3a['render']['radius'] * 0.93, _0x45dd3a['render']['radius'] * -0.59, _0x45dd3a['render']['radius'] * 1.53, _0x45dd3a['render']['radius'] * -0.31), ctx['rotate'](-_0x68b5ad), ctx['moveTo'](_0x45dd3a['render']['radius'] * 0.62, _0x45dd3a['render']['radius'] * 0.45), ctx['rotate'](-_0x68b5ad), ctx['quadraticCurveTo'](_0x45dd3a['render']['radius'] * 0.93, _0x45dd3a['render']['radius'] * 0.59, _0x45dd3a['render']['radius'] * 1.53, _0x45dd3a['render']['radius'] * 0.31), ctx['rotate'](_0x68b5ad), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x3418bd, ctx['strokeStyle'] = _0x3a86ae, ctx['beginPath'](), ctx['arc'](_0x45dd3a['render']['radius'] * -0.91, _0x45dd3a['render']['radius'] * 0x0, _0x45dd3a['render']['radius'] * 0.65, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            let _0x1e1017 = Math['cos'](time / 0x1a4 + _0x45dd3a['render']['time'] / 0x46) / 0x7 - 0.05;
            ctx['fillStyle'] = '#ffffff', ctx['globalAlpha'] *= 0.3, ctx['beginPath'](), ctx['rotate'](_0x1e1017), ctx['ellipse'](_0x45dd3a['render']['radius'] * -0.98, _0x45dd3a['render']['radius'] * -0.54, _0x45dd3a['render']['radius'] * 0.79, _0x45dd3a['render']['radius'] * 0.42, 0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](-_0x1e1017), ctx['rotate'](-_0x1e1017), ctx['ellipse'](_0x45dd3a['render']['radius'] * -0.98, _0x45dd3a['render']['radius'] * 0.54, _0x45dd3a['render']['radius'] * 0.79, _0x45dd3a['render']['radius'] * 0.42, -0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](_0x1e1017), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['fillStyle'] = _0x3418bd, ctx['strokeStyle'] = _0x3a86ae, ctx['beginPath'](), ctx['arc'](_0x45dd3a['render']['radius'] * 0.15, _0x45dd3a['render']['radius'] * 0x0, _0x45dd3a['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x45dd3a['render']['angle']);
        },
        'Queen\x20Fire\x20Ant': _0x3da87b => {
            ctx['lastTransform8279134'] = ctx['getTransform'](), ctx['scale'](0.8, 0.8), _0x3da87b['render']['time'] += Math['sqrt']((_0x3da87b['render']['lastX'] - _0x3da87b['render']['x']) ** 0x2 + (_0x3da87b['render']['lastY'] - _0x3da87b['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x3da87b['render']['radius'] / 1.84390889146 / 142.5) + 0.5) * 0x5, _0x3da87b['render']['lastX'] = _0x3da87b['render']['x'], _0x3da87b['render']['lastY'] = _0x3da87b['render']['y'];
            let _0x3e628d = enemyColor('#a82a00', _0x3da87b), _0x58882f = enemyColor('#882200', _0x3da87b);
            ctx['strokeStyle'] = enemyColor('#292929', _0x3da87b), ctx['lineWidth'] = _0x3da87b['render']['radius'] / 3.75, ctx['rotate'](_0x3da87b['render']['angle']), ctx['translate'](-_0x3da87b['render']['radius'] * 0.52, 0x0);
            let _0x33a7e1 = Math['cos'](time / 0xb4 + _0x3da87b['render']['time'] / 0x5a) * 0.12 * 0.5;
            ctx['translate'](_0x3da87b['render']['radius'] * 1.2, _0x3da87b['render']['radius'] * 0.4), ctx['rotate'](_0x33a7e1), ctx['beginPath'](), ctx['lineTo'](-_0x3da87b['render']['radius'] * 0.4, _0x3da87b['render']['radius'] * 0.05), ctx['quadraticCurveTo'](_0x3da87b['render']['radius'] * 0.7, _0x3da87b['render']['radius'] * 0.05, _0x3da87b['render']['radius'] * 0.9, -_0x3da87b['render']['radius'] * 0.125), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x33a7e1), ctx['translate'](-_0x3da87b['render']['radius'] * 1.2, -_0x3da87b['render']['radius'] * 0.4), ctx['translate'](_0x3da87b['render']['radius'] * 1.2, -_0x3da87b['render']['radius'] * 0.4), ctx['rotate'](-_0x33a7e1), ctx['beginPath'](), ctx['lineTo'](-_0x3da87b['render']['radius'] * 0.4, -_0x3da87b['render']['radius'] * 0.05), ctx['quadraticCurveTo'](_0x3da87b['render']['radius'] * 0.7, -_0x3da87b['render']['radius'] * 0.05, _0x3da87b['render']['radius'] * 0.9, _0x3da87b['render']['radius'] * 0.125), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x33a7e1), ctx['translate'](-_0x3da87b['render']['radius'] * 1.2, _0x3da87b['render']['radius'] * 0.4), ctx['lineWidth'] = _0x3da87b['render']['radius'] / 0x5, ctx['fillStyle'] = _0x3e628d, ctx['strokeStyle'] = _0x58882f, ctx['beginPath'](), ctx['arc'](-_0x3da87b['render']['radius'] * 0x3 / 0x4, 0x0, _0x3da87b['render']['radius'] * 0xd / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3da87b['render']['radius'] * 0x1 / 0x4, 0x0, _0x3da87b['render']['radius'] * 11.5 / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.3, ctx['fillStyle'] = 'white';
            let _0x1bcae9 = Math['cos'](time / 0x1a4 + _0x3da87b['render']['time'] / 0x5f) / 0x7 - 0.05;
            ctx['translate'](_0x3da87b['render']['radius'] * 0.4, 0x0), ctx['rotate'](_0x1bcae9), ctx['translate'](_0x3da87b['render']['radius'] * -0.1, _0x3da87b['render']['radius'] * 0.4), ctx['beginPath'](), ctx['ellipse'](-_0x3da87b['render']['radius'] * 0.7, 0x0, _0x3da87b['render']['radius'] * 1.1, _0x3da87b['render']['radius'] * 0.45, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x3da87b['render']['radius'] * -0.1), -(_0x3da87b['render']['radius'] * 0.4)), ctx['rotate'](-_0x1bcae9), ctx['rotate'](-_0x1bcae9), ctx['translate'](_0x3da87b['render']['radius'] * -0.1, -_0x3da87b['render']['radius'] * 0.4), ctx['beginPath'](), ctx['ellipse'](-_0x3da87b['render']['radius'] * 0.7, 0x0, _0x3da87b['render']['radius'] * 1.1, _0x3da87b['render']['radius'] * 0.45, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x3da87b['render']['radius'] * -0.1), _0x3da87b['render']['radius'] * 0.4), ctx['rotate'](_0x1bcae9), ctx['translate'](_0x3da87b['render']['radius'] * -0.4, 0x0), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['rotate'](-_0x3da87b['render']['angle']), ctx['lineWidth'] = _0x3da87b['render']['radius'] / 0x5, ctx['fillStyle'] = _0x3e628d, ctx['strokeStyle'] = _0x58882f, ctx['rotate'](_0x3da87b['render']['angle']), ctx['beginPath'](), ctx['arc'](_0x3da87b['render']['radius'], 0x0, _0x3da87b['render']['radius'] * 9.5 / 12.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['setTransform'](ctx['lastTransform8279134']);
        },
        'Ant\x20Egg': _0x36fd3e => {
            ctx['lineWidth'] = _0x36fd3e['render']['radius'] / 4.5, ctx['fillStyle'] = enemyColor('#fff0b8', _0x36fd3e), ctx['strokeStyle'] = enemyColor('#cfc295', _0x36fd3e), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x36fd3e['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Fire\x20Ant\x20Egg': _0x52c821 => {
            ctx['lineWidth'] = _0x52c821['render']['radius'] / 4.5, ctx['fillStyle'] = enemyColor('#ffd1b8', _0x52c821), ctx['strokeStyle'] = enemyColor('#cdaa96', _0x52c821), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x52c821['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Shiny\x20Ant\x20Egg': _0x39c8ba => {
            ctx['lineWidth'] = _0x39c8ba['render']['radius'] / 4.5, ctx['fillStyle'] = enemyColor('#fff0b8', _0x39c8ba), ctx['strokeStyle'] = enemyColor('#cfc295', _0x39c8ba), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x39c8ba['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Sea\x20Floor\x20Burrow': _0x6e38fb => {
            let _0x566337 = [
                '#777777',
                '#555555',
                '#333333'
            ]['map'](_0xa3ecba => enemyColor(_0xa3ecba, _0x6e38fb));
            ctx['fillStyle'] = _0x566337[0x0], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x6e38fb['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x566337[0x1], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x6e38fb['render']['radius'] * 0x2 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x566337[0x2], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x6e38fb['render']['radius'] * 0x1 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'Ant\x20Burrow': _0x3441b6 => {
            let _0xf80fee = [
                '#B48404',
                '#946C04',
                '#6C4C04'
            ]['map'](_0x514307 => enemyColor(_0x514307, _0x3441b6));
            ctx['fillStyle'] = _0xf80fee[0x0], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3441b6['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0xf80fee[0x1], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3441b6['render']['radius'] * 0x2 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0xf80fee[0x2], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3441b6['render']['radius'] * 0x1 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'Shiny\x20Ant\x20Burrow': _0x2ad3da => {
            let _0x522815 = [
                '#ffff17',
                '#d1d132',
                '#adad44'
            ]['map'](_0x35f578 => enemyColor(_0x35f578, _0x2ad3da));
            ctx['fillStyle'] = _0x522815[0x0], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2ad3da['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x522815[0x1], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2ad3da['render']['radius'] * 0x2 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x522815[0x2], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2ad3da['render']['radius'] * 0x1 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'Soldier\x20Fire\x20Ant': _0x1c3d18 => {
            _0x1c3d18['render']['time'] += Math['sqrt']((_0x1c3d18['render']['lastX'] - _0x1c3d18['render']['x']) ** 0x2 + (_0x1c3d18['render']['lastY'] - _0x1c3d18['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x1c3d18['render']['radius'] / 142.5) + 0.5) * 0x5, _0x1c3d18['render']['lastX'] = _0x1c3d18['render']['x'], _0x1c3d18['render']['lastY'] = _0x1c3d18['render']['y'];
            let _0xda69d2 = enemyColor('#a82a00', _0x1c3d18), _0x3e965a = enemyColor('#882200', _0x1c3d18);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0x1c3d18['render']['radius'] * 0.41, ctx['rotate'](_0x1c3d18['render']['angle']);
            let _0x5f567b = Math['cos'](time / 0xb4 + _0x1c3d18['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['moveTo'](_0x1c3d18['render']['radius'] * 0.62, _0x1c3d18['render']['radius'] * -0.45), ctx['rotate'](_0x5f567b), ctx['quadraticCurveTo'](_0x1c3d18['render']['radius'] * 0.93, _0x1c3d18['render']['radius'] * -0.59, _0x1c3d18['render']['radius'] * 1.53, _0x1c3d18['render']['radius'] * -0.31), ctx['rotate'](-_0x5f567b), ctx['moveTo'](_0x1c3d18['render']['radius'] * 0.62, _0x1c3d18['render']['radius'] * 0.45), ctx['rotate'](-_0x5f567b), ctx['quadraticCurveTo'](_0x1c3d18['render']['radius'] * 0.93, _0x1c3d18['render']['radius'] * 0.59, _0x1c3d18['render']['radius'] * 1.53, _0x1c3d18['render']['radius'] * 0.31), ctx['rotate'](_0x5f567b), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0xda69d2, ctx['strokeStyle'] = _0x3e965a, ctx['beginPath'](), ctx['arc'](_0x1c3d18['render']['radius'] * -0.91, _0x1c3d18['render']['radius'] * 0x0, _0x1c3d18['render']['radius'] * 0.65, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            let _0x1c6a2e = Math['cos'](time / 0x1a4 + _0x1c3d18['render']['time'] / 0x46) / 0x7 - 0.05;
            ctx['fillStyle'] = '#ffffff', ctx['globalAlpha'] *= 0.3, ctx['beginPath'](), ctx['rotate'](_0x1c6a2e), ctx['ellipse'](_0x1c3d18['render']['radius'] * -0.98, _0x1c3d18['render']['radius'] * -0.54, _0x1c3d18['render']['radius'] * 0.79, _0x1c3d18['render']['radius'] * 0.42, 0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](-_0x1c6a2e), ctx['rotate'](-_0x1c6a2e), ctx['ellipse'](_0x1c3d18['render']['radius'] * -0.98, _0x1c3d18['render']['radius'] * 0.54, _0x1c3d18['render']['radius'] * 0.79, _0x1c3d18['render']['radius'] * 0.42, -0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](_0x1c6a2e), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['fillStyle'] = _0xda69d2, ctx['strokeStyle'] = _0x3e965a, ctx['beginPath'](), ctx['arc'](_0x1c3d18['render']['radius'] * 0.15, _0x1c3d18['render']['radius'] * 0x0, _0x1c3d18['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x1c3d18['render']['angle']);
        },
        'Worker\x20Fire\x20Ant': _0xf94744 => {
            _0xf94744['render']['time'] += Math['sqrt']((_0xf94744['render']['lastX'] - _0xf94744['render']['x']) ** 0x2 + (_0xf94744['render']['lastY'] - _0xf94744['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0xf94744['render']['radius'] / 142.5) + 0.5) * 0x5, _0xf94744['render']['lastX'] = _0xf94744['render']['x'], _0xf94744['render']['lastY'] = _0xf94744['render']['y'];
            let _0x4fb8d2 = enemyColor('#a82a00', _0xf94744), _0x2ac8a4 = enemyColor('#882200', _0xf94744);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0xf94744['render']['radius'] * 0.41, ctx['rotate'](_0xf94744['render']['angle']);
            let _0x7f26b7 = Math['cos'](time / 0xb4 + _0xf94744['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['moveTo'](_0xf94744['render']['radius'] * 0.62, _0xf94744['render']['radius'] * -0.45), ctx['rotate'](_0x7f26b7), ctx['quadraticCurveTo'](_0xf94744['render']['radius'] * 0.93, _0xf94744['render']['radius'] * -0.59, _0xf94744['render']['radius'] * 1.53, _0xf94744['render']['radius'] * -0.31), ctx['rotate'](-_0x7f26b7), ctx['moveTo'](_0xf94744['render']['radius'] * 0.62, _0xf94744['render']['radius'] * 0.45), ctx['rotate'](-_0x7f26b7), ctx['quadraticCurveTo'](_0xf94744['render']['radius'] * 0.93, _0xf94744['render']['radius'] * 0.59, _0xf94744['render']['radius'] * 1.53, _0xf94744['render']['radius'] * 0.31), ctx['rotate'](_0x7f26b7), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x4fb8d2, ctx['strokeStyle'] = _0x2ac8a4, ctx['beginPath'](), ctx['arc'](_0xf94744['render']['radius'] * -0.91, _0xf94744['render']['radius'] * 0x0, _0xf94744['render']['radius'] * 0.65, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x4fb8d2, ctx['strokeStyle'] = _0x2ac8a4, ctx['beginPath'](), ctx['arc'](_0xf94744['render']['radius'] * 0.15, _0xf94744['render']['radius'] * 0x0, _0xf94744['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0xf94744['render']['angle']);
        },
        'Baby\x20Fire\x20Ant': _0x3ea345 => {
            _0x3ea345['render']['time'] += Math['sqrt']((_0x3ea345['render']['lastX'] - _0x3ea345['render']['x']) ** 0x2 + (_0x3ea345['render']['lastY'] - _0x3ea345['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x3ea345['render']['radius'] / 142.5) + 0.5) * 0x5, _0x3ea345['render']['lastX'] = _0x3ea345['render']['x'], _0x3ea345['render']['lastY'] = _0x3ea345['render']['y'];
            let _0x3eb852 = enemyColor('#a82a00', _0x3ea345), _0x4ccbe5 = enemyColor('#882200', _0x3ea345);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0x3ea345['render']['radius'] * 0.41, ctx['rotate'](_0x3ea345['render']['angle']), ctx['translate'](_0x3ea345['render']['radius'] * -0.15, 0x0);
            let _0x55da26 = Math['cos'](time / 0xb4 + _0x3ea345['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['moveTo'](_0x3ea345['render']['radius'] * 0.62, _0x3ea345['render']['radius'] * -0.45), ctx['rotate'](_0x55da26), ctx['quadraticCurveTo'](_0x3ea345['render']['radius'] * 0.93, _0x3ea345['render']['radius'] * -0.59, _0x3ea345['render']['radius'] * 1.53, _0x3ea345['render']['radius'] * -0.31), ctx['rotate'](-_0x55da26), ctx['moveTo'](_0x3ea345['render']['radius'] * 0.62, _0x3ea345['render']['radius'] * 0.45), ctx['rotate'](-_0x55da26), ctx['quadraticCurveTo'](_0x3ea345['render']['radius'] * 0.93, _0x3ea345['render']['radius'] * 0.59, _0x3ea345['render']['radius'] * 1.53, _0x3ea345['render']['radius'] * 0.31), ctx['rotate'](_0x55da26), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x3eb852, ctx['strokeStyle'] = _0x4ccbe5, ctx['fillStyle'] = _0x3eb852, ctx['strokeStyle'] = _0x4ccbe5, ctx['beginPath'](), ctx['arc'](_0x3ea345['render']['radius'] * 0.15, _0x3ea345['render']['radius'] * 0x0, _0x3ea345['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['translate'](_0x3ea345['render']['radius'] * 0.15, 0x0), ctx['rotate'](-_0x3ea345['render']['angle']);
        },
        'Hornet': _0x38ad2b => {
            let _0x3b0266 = enemyColor('#ffd363', _0x38ad2b), _0x3bd86f = enemyColor('#333333', _0x38ad2b);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x38ad2b['render']['angle'] + Math['PI'] / 0x2), ctx['strokeStyle'] = _0x3bd86f, ctx['fillStyle'] = _0x3bd86f, ctx['lineWidth'] = _0x38ad2b['render']['radius'] / 0x6, ctx['beginPath'](), ctx['moveTo'](0x0, _0x38ad2b['render']['radius'] * 1.55), ctx['lineTo'](-_0x38ad2b['render']['radius'] * 0.31, _0x38ad2b['render']['radius'] * 0.4), ctx['lineTo'](_0x38ad2b['render']['radius'] * 0.31, _0x38ad2b['render']['radius'] * 0.4), ctx['lineTo'](0x0, _0x38ad2b['render']['radius'] * 1.55), ctx['stroke'](), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x3b0266, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x38ad2b['render']['radius'] * 0x2 / 0x3, _0x38ad2b['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['fillStyle'] = _0x3bd86f, ctx['beginPath'](), ctx['moveTo'](-_0x38ad2b['render']['radius'] * 0.45, -_0x38ad2b['render']['radius'] * 0x2 / 0x3), ctx['lineTo'](-_0x38ad2b['render']['radius'] * 0.55, -_0x38ad2b['render']['radius'] * 0x1 / 0x3), ctx['lineTo'](_0x38ad2b['render']['radius'] * 0.55, -_0x38ad2b['render']['radius'] * 0x1 / 0x3), ctx['lineTo'](_0x38ad2b['render']['radius'] * 0.45, -_0x38ad2b['render']['radius'] * 0x2 / 0x3), ctx['fill'](), ctx['fillRect'](-_0x38ad2b['render']['radius'] * 0.65, 0x0, _0x38ad2b['render']['radius'] * 0x2 * 0.65, _0x38ad2b['render']['radius'] / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x38ad2b['render']['radius'] * 0.45, _0x38ad2b['render']['radius'] * 0x2 / 0x3), ctx['lineTo'](-_0x38ad2b['render']['radius'] * 0.15, _0x38ad2b['render']['radius']), ctx['lineTo'](_0x38ad2b['render']['radius'] * 0.15, _0x38ad2b['render']['radius']), ctx['lineTo'](_0x38ad2b['render']['radius'] * 0.45, _0x38ad2b['render']['radius'] * 0x2 / 0x3), ctx['fill'](), ctx['strokeStyle'] = blendColor(_0x3b0266, '#000000', 0.19), ctx['lineWidth'] = _0x38ad2b['render']['radius'] * 0.15, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x38ad2b['render']['radius'] * 0x2 / 0x3, _0x38ad2b['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x3bd86f, ctx['strokeStyle'] = _0x3bd86f, ctx['lineWidth'] = _0x38ad2b['render']['radius'] / 0xa, ctx['beginPath'](), ctx['moveTo'](_0x38ad2b['render']['radius'] * 0.16, -_0x38ad2b['render']['radius'] * 0.85), ctx['quadraticCurveTo'](_0x38ad2b['render']['radius'] * 0.18, -_0x38ad2b['render']['radius'] * 1.36, _0x38ad2b['render']['radius'] * 0.49, -_0x38ad2b['render']['radius'] * 1.68), ctx['quadraticCurveTo'](_0x38ad2b['render']['radius'] * 0.3, -_0x38ad2b['render']['radius'] * 1.26, _0x38ad2b['render']['radius'] * 0.16, -_0x38ad2b['render']['radius'] * 0.85), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-_0x38ad2b['render']['radius'] * 0.16, -_0x38ad2b['render']['radius'] * 0.85), ctx['quadraticCurveTo'](-_0x38ad2b['render']['radius'] * 0.18, -_0x38ad2b['render']['radius'] * 1.36, -_0x38ad2b['render']['radius'] * 0.49, -_0x38ad2b['render']['radius'] * 1.68), ctx['quadraticCurveTo'](-_0x38ad2b['render']['radius'] * 0.3, -_0x38ad2b['render']['radius'] * 1.26, -_0x38ad2b['render']['radius'] * 0.16, -_0x38ad2b['render']['radius'] * 0.85), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x38ad2b['render']['angle'] - Math['PI'] / 0x2);
        },
        'Grasshopper': _0xdd96a4 => {
            _0xdd96a4['render']['time'] += Math['sqrt']((_0xdd96a4['render']['lastX'] - _0xdd96a4['render']['x']) ** 0x2 + (_0xdd96a4['render']['lastY'] - _0xdd96a4['render']['y']) ** 0x2), _0xdd96a4['render']['lastX'] = _0xdd96a4['render']['x'], _0xdd96a4['render']['lastY'] = _0xdd96a4['render']['y'], ctx['rotate'](_0xdd96a4['render']['angle']);
            let _0x4bf7a1 = enemyColor('#5cb85c', _0xdd96a4), _0x24c7b2 = enemyColor('#3d7a3d', _0xdd96a4);
            ctx['strokeStyle'] = '#333333', ctx['lineWidth'] = _0xdd96a4['render']['radius'] / 0x6, ctx['rotate'](Math['PI'] / 0x2), ctx['strokeStyle'] = '#333333', ctx['lineWidth'] = _0xdd96a4['render']['radius'] / 0x6;
            for (let _0x36bb0e = 0x4; _0x36bb0e--; _0x36bb0e > 0x0) {
                let _0x5af8d1 = _0x36bb0e * 0.52359 - 0.52359 - 0.26179938 + Math['cos'](_0xdd96a4['render']['time'] / 0x11 + _0x36bb0e) * 0.2;
                ctx['rotate'](_0x5af8d1), ctx['beginPath'](), ctx['moveTo'](-_0xdd96a4['render']['radius'] * 0x1, 0x0), ctx['quadraticCurveTo'](-_0xdd96a4['render']['radius'], _0xdd96a4['render']['radius'] * 0x1 / 0x6, 0x0, 0x0), ctx['quadraticCurveTo'](_0xdd96a4['render']['radius'], -_0xdd96a4['render']['radius'] * 0x1 / 0x6, _0xdd96a4['render']['radius'] * 0x1, 0x0), ctx['stroke'](), ctx['rotate'](-_0x5af8d1), ctx['closePath']();
            }
            ctx['rotate'](-Math['PI'] / 0x2), ctx['strokeStyle'] = '#333333', ctx['lineWidth'] = _0xdd96a4['render']['radius'] / 0xc;
            for (let _0x980321 = 0x0; _0x980321 < 0x2; _0x980321++) {
                let _0x5ef267 = _0x980321 === 0x0 ? 0x1 : -0x1;
                ctx['beginPath'](), ctx['moveTo'](_0xdd96a4['render']['radius'] * 0.9, _0x5ef267 * _0xdd96a4['render']['radius'] * 0.4), ctx['quadraticCurveTo'](_0xdd96a4['render']['radius'] * 1.6, _0x5ef267 * _0xdd96a4['render']['radius'] * 0.8 + Math['sin'](_0xdd96a4['render']['time'] / 0x14) * 0x5, _0xdd96a4['render']['radius'] * 2.2, _0x5ef267 * _0xdd96a4['render']['radius'] * 0.2 + Math['cos'](_0xdd96a4['render']['time'] / 0x19) * 0x5), ctx['stroke'](), ctx['closePath']();
            }
            ctx['fillStyle'] = _0x4bf7a1, ctx['strokeStyle'] = _0x24c7b2, ctx['lineJoin'] = 'round', ctx['lineWidth'] = _0xdd96a4['render']['radius'] * 0.18, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0xdd96a4['render']['radius'] * 1.1, _0xdd96a4['render']['radius'] * 0.7, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = _0x4bf7a1, ctx['arc'](_0xdd96a4['render']['radius'] * 0.9, 0x0, _0xdd96a4['render']['radius'] * 0.4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = '#000000';
            for (let _0x1060b1 = 0x0; _0x1060b1 < 0x2; _0x1060b1++) {
                let _0x1d523d = _0x1060b1 === 0x0 ? 0x1 : -0x1;
                ctx['beginPath'](), ctx['arc'](_0xdd96a4['render']['radius'] * 1.05, _0x1d523d * _0xdd96a4['render']['radius'] * 0.2, _0xdd96a4['render']['radius'] * 0.12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            let _0x3c4f2f = Math['cos'](time / 0x1a4 + _0xdd96a4['render']['time'] / 0x46) / 0x7 - 0.05;
            ctx['fillStyle'] = '#ffffff', ctx['globalAlpha'] *= 0.3, ctx['beginPath'](), ctx['rotate'](_0x3c4f2f), ctx['ellipse'](_0xdd96a4['render']['radius'] * -0.98, _0xdd96a4['render']['radius'] * -0.54, _0xdd96a4['render']['radius'] * 0.79, _0xdd96a4['render']['radius'] * 0.42, 0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](-_0x3c4f2f), ctx['rotate'](-_0x3c4f2f), ctx['ellipse'](_0xdd96a4['render']['radius'] * -0.98, _0xdd96a4['render']['radius'] * 0.54, _0xdd96a4['render']['radius'] * 0.79, _0xdd96a4['render']['radius'] * 0.42, -0xf * (Math['PI'] * 0x2 / 0x168), 0x0, Math['PI'] * 0x2), ctx['rotate'](_0x3c4f2f), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x1 / 0.3, ctx['rotate'](-_0xdd96a4['render']['angle']);
            if (_0xdd96a4['jumpTo'] != undefined) {
                _0xdd96a4['jumpToTime'] += dt;
                let _0x566ded = Math['min'](_0xdd96a4['jumpToTime'] / 0xbb8, 0x1), _0x15db50 = ctx['globalAlpha'];
                ctx['globalAlpha'] = _0x566ded, ctx['beginPath'](), ctx['fillStyle'] = '#1e7830', ctx['arc'](_0xdd96a4['jumpTo'][0x0] - _0xdd96a4['render']['x'], _0xdd96a4['jumpTo'][0x1] - _0xdd96a4['render']['y'], (Math['min'](_0xdd96a4['jumpToTime'] / 0x7d0, 0.5) + 0.5) * _0xdd96a4['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = _0x15db50, _0xdd96a4['jumpToTime'] > 0x9c4 && (_0xdd96a4['jumpTo'] = undefined, _0xdd96a4['jumpToTime'] = 0x0);
            }
        },
        'Stickbug': _0x49282b => {
            _0x49282b['render']['time'] += Math['sqrt']((_0x49282b['render']['lastX'] - _0x49282b['render']['x']) ** 0x2 + (_0x49282b['render']['lastY'] - _0x49282b['render']['y']) ** 0x2), _0x49282b['render']['lastX'] = _0x49282b['render']['x'], _0x49282b['render']['lastY'] = _0x49282b['render']['y'];
            _0x49282b['angerTime'] != undefined && (_0x49282b['angerTime'] += dt);
            ctx['rotate'](_0x49282b['render']['angle']);
            let _0x89508a = enemyColor('#89b52f', _0x49282b), _0x93be5b = enemyColor('#6e9124', _0x49282b), _0x235db6 = enemyColor('#375e24', _0x49282b);
            if (!_0x49282b['anger'])
                _0x49282b['anger'] = 0x1;
            if (_0x49282b['anger'] != 0x1) {
                let _0x34a6c7 = Math['pow'](0x1 - 0x1 / (_0x49282b['anger'] * 0.8 + 0.6), 1.6);
                _0x89508a = blendColor(_0x89508a, '#000000', _0x34a6c7), _0x93be5b = blendColor(_0x89508a, '#000000', _0x34a6c7), _0x235db6 = blendColor(_0x89508a, '#000000', _0x34a6c7);
            }
            ctx['strokeStyle'] = _0x235db6, ctx['lineWidth'] = _0x49282b['render']['radius'] / 0x8, ctx['rotate'](Math['PI'] / 0x2);
            for (let _0x4c22b4 = 0x6; _0x4c22b4--; _0x4c22b4 > 0x0) {
                let _0x302e61 = _0x4c22b4 * 0.52359 - 0.52359 - 0.26179938 + Math['cos'](_0x49282b['render']['time'] / 0x34 + _0x4c22b4) * 0.2;
                ctx['rotate'](_0x302e61), ctx['beginPath'](), ctx['moveTo'](-_0x49282b['render']['radius'] * 2.2, 0x0), ctx['quadraticCurveTo'](-_0x49282b['render']['radius'], _0x49282b['render']['radius'] * 0x1 / 0x6, 0x0, 0x0), ctx['quadraticCurveTo'](_0x49282b['render']['radius'], -_0x49282b['render']['radius'] * 0x1 / 0x6, _0x49282b['render']['radius'] * 2.2, 0x0), ctx['stroke'](), ctx['rotate'](-_0x302e61), ctx['closePath']();
            }
            ctx['rotate'](-Math['PI'] / 0x2), ctx['strokeStyle'] = '#333333', ctx['lineWidth'] = _0x49282b['render']['radius'] / 0xe;
            for (let _0x4c2cca = 0x0; _0x4c2cca < 0x2; _0x4c2cca++) {
                let _0x438953 = _0x4c2cca === 0x0 ? 0x1 : -0x1;
                ctx['beginPath'](), ctx['moveTo'](_0x49282b['render']['radius'] * 0.9, _0x438953 * _0x49282b['render']['radius'] * 0.1), ctx['quadraticCurveTo'](_0x49282b['render']['radius'] * 1.8, _0x438953 * _0x49282b['render']['radius'] * 0.5 + Math['sin'](_0x49282b['render']['time'] / 0x28) * 0x4, _0x49282b['render']['radius'] * 2.6, _0x438953 * _0x49282b['render']['radius'] * 0.2 + Math['cos'](_0x49282b['render']['time'] / 0x32) * 0x4), ctx['stroke'](), ctx['closePath']();
            }
            ctx['fillStyle'] = _0x89508a, ctx['strokeStyle'] = _0x93be5b, ctx['lineJoin'] = 'round', ctx['lineWidth'] = _0x49282b['render']['radius'] * 0.1, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x49282b['render']['radius'] * 1.8, _0x49282b['render']['radius'] * 0.25, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = _0x89508a, ctx['ellipse'](_0x49282b['render']['radius'] * 1.5, 0x0, _0x49282b['render']['radius'] * 0.35, _0x49282b['render']['radius'] * 0.25, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = '#000000';
            for (let _0x5b3c1d = 0x0; _0x5b3c1d < 0x2; _0x5b3c1d++) {
                let _0x5c6162 = _0x5b3c1d === 0x0 ? 0x1 : -0x1;
                ctx['beginPath'](), ctx['arc'](_0x49282b['render']['radius'] * 1.65, _0x5c6162 * _0x49282b['render']['radius'] * 0.12, _0x49282b['render']['radius'] * 0.07, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            ctx['rotate'](-_0x49282b['render']['angle']);
        },
        'Bee': _0x56306b => {
            let _0x498ca5 = enemyColor('#ffe763', _0x56306b), _0x365fdd = enemyColor('#333333', _0x56306b);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x56306b['render']['angle'] + Math['PI'] / 0x2), ctx['strokeStyle'] = _0x365fdd, ctx['fillStyle'] = _0x365fdd, ctx['lineWidth'] = _0x56306b['render']['radius'] / 0x6, ctx['beginPath'](), ctx['moveTo'](0x0, _0x56306b['render']['radius'] * 1.23), ctx['lineTo'](-_0x56306b['render']['radius'] * 0.41, _0x56306b['render']['radius'] * 0.65), ctx['lineTo'](_0x56306b['render']['radius'] * 0.41, _0x56306b['render']['radius'] * 0.65), ctx['lineTo'](0x0, _0x56306b['render']['radius'] * 1.23), ctx['stroke'](), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x498ca5, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x56306b['render']['radius'] * 0x2 / 0x3, _0x56306b['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['fillStyle'] = _0x365fdd, ctx['beginPath'](), ctx['moveTo'](-_0x56306b['render']['radius'] * 0.45, -_0x56306b['render']['radius'] * 0x2 / 0x3), ctx['lineTo'](-_0x56306b['render']['radius'] * 0.55, -_0x56306b['render']['radius'] * 0x1 / 0x3), ctx['lineTo'](_0x56306b['render']['radius'] * 0.55, -_0x56306b['render']['radius'] * 0x1 / 0x3), ctx['lineTo'](_0x56306b['render']['radius'] * 0.45, -_0x56306b['render']['radius'] * 0x2 / 0x3), ctx['fill'](), ctx['fillRect'](-_0x56306b['render']['radius'] * 0.65, 0x0, _0x56306b['render']['radius'] * 0x2 * 0.65, _0x56306b['render']['radius'] / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x56306b['render']['radius'] * 0.45, _0x56306b['render']['radius'] * 0x2 / 0x3), ctx['lineTo'](-_0x56306b['render']['radius'] * 0.15, _0x56306b['render']['radius']), ctx['lineTo'](_0x56306b['render']['radius'] * 0.15, _0x56306b['render']['radius']), ctx['lineTo'](_0x56306b['render']['radius'] * 0.45, _0x56306b['render']['radius'] * 0x2 / 0x3), ctx['fill'](), ctx['strokeStyle'] = blendColor(_0x498ca5, '#000000', 0.19), ctx['lineWidth'] = _0x56306b['render']['radius'] * 0.15, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x56306b['render']['radius'] * 0x2 / 0x3, _0x56306b['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x365fdd, ctx['lineWidth'] = _0x56306b['render']['radius'] * 0.09, ctx['beginPath'](), ctx['moveTo'](-_0x56306b['render']['radius'] * 0.155, -_0x56306b['render']['radius'] * 0.81), ctx['quadraticCurveTo'](-_0x56306b['render']['radius'] * 0.23, -_0x56306b['render']['radius'] * 1.1, -_0x56306b['render']['radius'] * 0.5, -_0x56306b['render']['radius'] * 1.3), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x56306b['render']['radius'] * 0.155, -_0x56306b['render']['radius'] * 0.81), ctx['quadraticCurveTo'](_0x56306b['render']['radius'] * 0.23, -_0x56306b['render']['radius'] * 1.1, _0x56306b['render']['radius'] * 0.5, -_0x56306b['render']['radius'] * 1.3), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = ctx['strokeStyle'], ctx['beginPath'](), ctx['arc'](-_0x56306b['render']['radius'] * 0.5, -_0x56306b['render']['radius'] * 1.3, _0x56306b['render']['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x56306b['render']['radius'] * 0.5, -_0x56306b['render']['radius'] * 1.3, _0x56306b['render']['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x56306b['render']['angle'] - Math['PI'] / 0x2);
        },
        'Desert\x20Moth': _0x31baff => {
            _0x31baff['render']['time'] += Math['sqrt']((_0x31baff['render']['lastX'] - _0x31baff['render']['x']) ** 0x2 + (_0x31baff['render']['lastY'] - _0x31baff['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x31baff['render']['radius'] / 142.5) + 0.5) * 0x5, _0x31baff['render']['lastX'] = _0x31baff['render']['x'], _0x31baff['render']['lastY'] = _0x31baff['render']['y'];
            let _0xa26958 = enemyColor('#ccb639', _0x31baff), _0x4195cc = enemyColor('#9c8b2c', _0x31baff);
            ctx['lineWidth'] = _0x31baff['render']['radius'] / 0x3, ctx['fillStyle'] = _0xa26958, ctx['strokeStyle'] = _0x4195cc, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x31baff['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x31baff['render']['angle']), ctx['globalAlpha'] *= 0.4, ctx['fillStyle'] = 'white';
            let _0x588f07 = Math['cos'](time / 0x1a4 + _0x31baff['render']['time'] / 0x46) / 0x7 - 0.5;
            ctx['translate'](_0x31baff['render']['radius'] * -0.2, 0x0), ctx['rotate'](_0x588f07), ctx['translate'](_0x31baff['render']['radius'] * -0.1, _0x31baff['render']['radius'] * 0.2), ctx['beginPath'](), ctx['ellipse'](-_0x31baff['render']['radius'] * 0.7, 0x0, _0x31baff['render']['radius'] * 0.95, _0x31baff['render']['radius'] * 0.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x31baff['render']['radius'] * -0.1), -(_0x31baff['render']['radius'] * 0.2)), ctx['rotate'](-_0x588f07), ctx['rotate'](-_0x588f07), ctx['translate'](_0x31baff['render']['radius'] * -0.1, -_0x31baff['render']['radius'] * 0.2), ctx['beginPath'](), ctx['ellipse'](-_0x31baff['render']['radius'] * 0.7, 0x0, _0x31baff['render']['radius'] * 0.95, _0x31baff['render']['radius'] * 0.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x31baff['render']['radius'] * -0.1), _0x31baff['render']['radius'] * 0.2), ctx['rotate'](_0x588f07), ctx['translate'](_0x31baff['render']['radius'] * 0.2, 0x0), ctx['globalAlpha'] *= 0x1 / 0.4, ctx['rotate'](-_0x31baff['render']['angle']), ctx['strokeStyle'] = 'black', ctx['lineWidth'] = _0x31baff['render']['radius'] * 0.09, ctx['rotate'](_0x31baff['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['moveTo'](-_0x31baff['render']['radius'] * 0.155, -_0x31baff['render']['radius'] * 0.81), ctx['quadraticCurveTo'](-_0x31baff['render']['radius'] * 0.23, -_0x31baff['render']['radius'] * 1.1, -_0x31baff['render']['radius'] * 0.5, -_0x31baff['render']['radius'] * 1.3), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x31baff['render']['radius'] * 0.155, -_0x31baff['render']['radius'] * 0.81), ctx['quadraticCurveTo'](_0x31baff['render']['radius'] * 0.23, -_0x31baff['render']['radius'] * 1.1, _0x31baff['render']['radius'] * 0.5, -_0x31baff['render']['radius'] * 1.3), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = ctx['strokeStyle'], ctx['beginPath'](), ctx['arc'](-_0x31baff['render']['radius'] * 0.5, -_0x31baff['render']['radius'] * 1.3, _0x31baff['render']['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x31baff['render']['radius'] * 0.5, -_0x31baff['render']['radius'] * 1.3, _0x31baff['render']['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x31baff['render']['angle'] - Math['PI'] / 0x2);
        },
        'Swampy\x20Moth': _0x4179fd => {
            _0x4179fd['render']['time'] += Math['sqrt']((_0x4179fd['render']['lastX'] - _0x4179fd['render']['x']) ** 0x2 + (_0x4179fd['render']['lastY'] - _0x4179fd['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x4179fd['render']['radius'] / 142.5) + 0.5) * 0x5, _0x4179fd['render']['lastX'] = _0x4179fd['render']['x'], _0x4179fd['render']['lastY'] = _0x4179fd['render']['y'];
            let _0x336dc3 = enemyColor('#487332', _0x4179fd), _0x48517e = enemyColor('#3b5e29', _0x4179fd);
            ctx['lineWidth'] = _0x4179fd['render']['radius'] / 0x3, ctx['fillStyle'] = _0x336dc3, ctx['strokeStyle'] = _0x48517e, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4179fd['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x4179fd['render']['angle']), ctx['globalAlpha'] *= 0.4, ctx['fillStyle'] = 'white';
            let _0x47ef5f = Math['cos'](time / 0x1a4 + _0x4179fd['render']['time'] / 0x46) / 0x7 - 0.5;
            ctx['translate'](_0x4179fd['render']['radius'] * -0.2, 0x0), ctx['rotate'](_0x47ef5f), ctx['translate'](_0x4179fd['render']['radius'] * -0.1, _0x4179fd['render']['radius'] * 0.2), ctx['beginPath'](), ctx['ellipse'](-_0x4179fd['render']['radius'] * 0.7, 0x0, _0x4179fd['render']['radius'] * 0.95, _0x4179fd['render']['radius'] * 0.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x4179fd['render']['radius'] * -0.1), -(_0x4179fd['render']['radius'] * 0.2)), ctx['rotate'](-_0x47ef5f), ctx['rotate'](-_0x47ef5f), ctx['translate'](_0x4179fd['render']['radius'] * -0.1, -_0x4179fd['render']['radius'] * 0.2), ctx['beginPath'](), ctx['ellipse'](-_0x4179fd['render']['radius'] * 0.7, 0x0, _0x4179fd['render']['radius'] * 0.95, _0x4179fd['render']['radius'] * 0.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x4179fd['render']['radius'] * -0.1), _0x4179fd['render']['radius'] * 0.2), ctx['rotate'](_0x47ef5f), ctx['translate'](_0x4179fd['render']['radius'] * 0.2, 0x0), ctx['globalAlpha'] *= 0x1 / 0.4, ctx['rotate'](-_0x4179fd['render']['angle']), ctx['strokeStyle'] = 'black', ctx['lineWidth'] = _0x4179fd['render']['radius'] * 0.09, ctx['rotate'](_0x4179fd['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['moveTo'](-_0x4179fd['render']['radius'] * 0.155, -_0x4179fd['render']['radius'] * 0.81), ctx['quadraticCurveTo'](-_0x4179fd['render']['radius'] * 0.23, -_0x4179fd['render']['radius'] * 1.1, -_0x4179fd['render']['radius'] * 0.5, -_0x4179fd['render']['radius'] * 1.3), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x4179fd['render']['radius'] * 0.155, -_0x4179fd['render']['radius'] * 0.81), ctx['quadraticCurveTo'](_0x4179fd['render']['radius'] * 0.23, -_0x4179fd['render']['radius'] * 1.1, _0x4179fd['render']['radius'] * 0.5, -_0x4179fd['render']['radius'] * 1.3), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = ctx['strokeStyle'], ctx['beginPath'](), ctx['arc'](-_0x4179fd['render']['radius'] * 0.5, -_0x4179fd['render']['radius'] * 1.3, _0x4179fd['render']['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x4179fd['render']['radius'] * 0.5, -_0x4179fd['render']['radius'] * 1.3, _0x4179fd['render']['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x4179fd['render']['angle'] - Math['PI'] / 0x2);
        },
        'Firefly': _0x2fedce => {
            let _0x1cbea3 = ctx['globalAlpha'];
            if (_0x2fedce['lastShocked'] == 0x0) {
                _0x2fedce['renderShock'] = [];
                for (let _0x355e0b = 0x0; _0x355e0b < _0x2fedce['shock']['length']; _0x355e0b++) {
                    let _0x316fe8 = _0x2fedce['shock'][_0x355e0b];
                    if (_0x355e0b == 0x0)
                        _0x2fedce['renderShock']['push'](_0x316fe8);
                    else {
                        let _0x483bfe = {};
                        _0x483bfe['x'] = _0x316fe8['x'] * 0x1 / 0x3 + _0x2fedce['shock'][_0x355e0b - 0x1]['x'] * 0x2 / 0x3, _0x483bfe['y'] = _0x316fe8['y'] * 0x1 / 0x3 + _0x2fedce['shock'][_0x355e0b - 0x1]['y'] * 0x2 / 0x3;
                        let _0x513dd6 = {};
                        _0x513dd6['x'] = _0x316fe8['x'] * 0x2 / 0x3 + _0x2fedce['shock'][_0x355e0b - 0x1]['x'] * 0x1 / 0x3, _0x513dd6['y'] = _0x316fe8['y'] * 0x2 / 0x3 + _0x2fedce['shock'][_0x355e0b - 0x1]['y'] * 0x1 / 0x3;
                        let _0x39ef01 = Math['sqrt']((_0x316fe8['y'] - _0x2fedce['shock'][_0x355e0b - 0x1]['y']) ** 0x2 + (_0x316fe8['x'] - _0x2fedce['shock'][_0x355e0b - 0x1]['x']) ** 0x2);
                        _0x483bfe['x'] += Math['random']() * _0x39ef01 / 0x5 - _0x39ef01 / 0xa, _0x483bfe['y'] += Math['random']() * _0x39ef01 / 0x5 - _0x39ef01 / 0xa, _0x2fedce['renderShock']['push'](_0x483bfe), _0x2fedce['renderShock']['push'](_0x513dd6), _0x2fedce['renderShock']['push'](_0x316fe8);
                    }
                }
            }
            _0x2fedce['lastShocked'] += dt, _0x2fedce['render']['time'] += Math['sqrt']((_0x2fedce['render']['lastX'] - _0x2fedce['render']['x']) ** 0x2 + (_0x2fedce['render']['lastY'] - _0x2fedce['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x2fedce['render']['radius'] / 142.5) + 0.5) * 0x5, _0x2fedce['render']['lastX'] = _0x2fedce['render']['x'], _0x2fedce['render']['lastY'] = _0x2fedce['render']['y'];
            let _0x5b2139 = enemyColor('#555555', _0x2fedce), _0x4d71a8 = enemyColor('#454545', _0x2fedce), _0x84680e = enemyColor('#f9ec77', _0x2fedce), _0x5022f9 = enemyColor('#cabf60', _0x2fedce);
            ctx['lineWidth'] = _0x2fedce['render']['radius'] / 0x3, ctx['rotate'](_0x2fedce['render']['angle']), ctx['fillStyle'] = _0x84680e, ctx['strokeStyle'] = _0x5022f9, ctx['beginPath'](), ctx['ellipse'](_0x2fedce['render']['radius'] * -0.5, 0x0, _0x2fedce['render']['radius'] * 0.8, _0x2fedce['render']['radius'] * 0.6, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x2fedce['render']['radius'] * -0.75, _0x2fedce['render']['radius'] * -0.45), ctx['lineTo'](_0x2fedce['render']['radius'] * -0.75, _0x2fedce['render']['radius'] * 0.45), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.4, ctx['fillStyle'] = 'white';
            let _0x4dc9d5 = Math['cos'](time / 0x1a4 + _0x2fedce['render']['time'] / 0x46) / 0x7 - 0.5;
            ctx['rotate'](_0x4dc9d5), ctx['translate'](_0x2fedce['render']['radius'] * -0.12, _0x2fedce['render']['radius'] * 0.12), ctx['beginPath'](), ctx['ellipse'](-_0x2fedce['render']['radius'] * 0.5, 0x0, _0x2fedce['render']['radius'] * 0.65, _0x2fedce['render']['radius'] * 0.525, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x2fedce['render']['radius'] * -0.12), -(_0x2fedce['render']['radius'] * 0.12)), ctx['rotate'](-_0x4dc9d5), ctx['rotate'](-_0x4dc9d5), ctx['translate'](_0x2fedce['render']['radius'] * -0.12, -_0x2fedce['render']['radius'] * 0.12), ctx['beginPath'](), ctx['ellipse'](-_0x2fedce['render']['radius'] * 0.5, 0x0, _0x2fedce['render']['radius'] * 0.65, _0x2fedce['render']['radius'] * 0.525, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x2fedce['render']['radius'] * -0.12), _0x2fedce['render']['radius'] * 0.12), ctx['rotate'](_0x4dc9d5), ctx['globalAlpha'] /= 0.4, ctx['fillStyle'] = _0x5b2139, ctx['strokeStyle'] = _0x4d71a8, ctx['beginPath'](), ctx['arc'](_0x2fedce['render']['radius'] * 0.34, 0x0, _0x2fedce['render']['radius'] * 0.575, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x2fedce['render']['angle']);
            if (_0x2fedce['lastShocked'] < 0x384) {
                ctx['globalAlpha'] = 0x1 - _0x2fedce['lastShocked'] / 0x384, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = 0x3;
                _0x2fedce['team'] == 'flower' && (ctx['strokeStyle'] = 'yellow', ctx['lineWidth'] = 0x6);
                ctx['beginPath']();
                for (let _0x516420 = 0x0; _0x516420 < _0x2fedce['renderShock']['length']; _0x516420++) {
                    ctx['lineTo'](_0x2fedce['renderShock'][_0x516420]['x'] - _0x2fedce['render']['x'], _0x2fedce['renderShock'][_0x516420]['y'] - _0x2fedce['render']['y']);
                }
                ctx['stroke'](), ctx['closePath']();
            }
            ctx['globalAlpha'] = _0x1cbea3;
        },
        'Fly': _0x1399e3 => {
            _0x1399e3['render']['time'] += Math['sqrt']((_0x1399e3['render']['lastX'] - _0x1399e3['render']['x']) ** 0x2 + (_0x1399e3['render']['lastY'] - _0x1399e3['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x1399e3['render']['radius'] / 142.5) + 0.5) * 0x5, _0x1399e3['render']['lastX'] = _0x1399e3['render']['x'], _0x1399e3['render']['lastY'] = _0x1399e3['render']['y'];
            let _0x400c75 = enemyColor('#555555', _0x1399e3), _0x1b126d = enemyColor('#454545', _0x1399e3);
            ctx['lineWidth'] = _0x1399e3['render']['radius'] / 0x3, ctx['fillStyle'] = _0x400c75, ctx['strokeStyle'] = _0x1b126d, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1399e3['render']['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x1399e3['render']['angle']), ctx['globalAlpha'] *= 0.4, ctx['fillStyle'] = 'white';
            let _0x4e7538 = Math['cos'](time / 0x1a4 + _0x1399e3['render']['time'] / 0x46) / 0x7 - 0.5;
            ctx['translate'](_0x1399e3['render']['radius'] * -0.2, 0x0), ctx['rotate'](_0x4e7538), ctx['translate'](_0x1399e3['render']['radius'] * -0.1, _0x1399e3['render']['radius'] * 0.2), ctx['beginPath'](), ctx['ellipse'](-_0x1399e3['render']['radius'] * 0.7, 0x0, _0x1399e3['render']['radius'] * 0.95, _0x1399e3['render']['radius'] * 0.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x1399e3['render']['radius'] * -0.1), -(_0x1399e3['render']['radius'] * 0.2)), ctx['rotate'](-_0x4e7538), ctx['rotate'](-_0x4e7538), ctx['translate'](_0x1399e3['render']['radius'] * -0.1, -_0x1399e3['render']['radius'] * 0.2), ctx['beginPath'](), ctx['ellipse'](-_0x1399e3['render']['radius'] * 0.7, 0x0, _0x1399e3['render']['radius'] * 0.95, _0x1399e3['render']['radius'] * 0.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['translate'](-(_0x1399e3['render']['radius'] * -0.1), _0x1399e3['render']['radius'] * 0.2), ctx['rotate'](_0x4e7538), ctx['translate'](_0x1399e3['render']['radius'] * 0.2, 0x0), ctx['globalAlpha'] *= 0x1 / 0.4, ctx['rotate'](-_0x1399e3['render']['angle']);
        },
        'Missile': _0x5a8422 => {
            let _0x3ea17f = enemyColor('#333333', _0x5a8422);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x5a8422['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x3ea17f, ctx['strokeStyle'] = _0x3ea17f, ctx['lineWidth'] = _0x5a8422['render']['radius'] / 1.5, ctx['moveTo'](0x0, -_0x5a8422['render']['radius'] * Math['sqrt'](0x3)), ctx['lineTo'](_0x5a8422['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0x5a8422['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0x5a8422['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0x5a8422['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0x5a8422['render']['radius'] * Math['sqrt'](0x3)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x5a8422['render']['angle'] - Math['PI'] / 0x2);
        },
        'BeeMissile': _0x4cbd09 => {
            let _0x3674d4 = enemyColor('#333333', _0x4cbd09);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x4cbd09['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x3674d4, ctx['strokeStyle'] = _0x3674d4, ctx['lineWidth'] = _0x4cbd09['render']['radius'] / 1.5, ctx['moveTo'](0x0, -_0x4cbd09['render']['radius'] * Math['sqrt'](0x3) * 0.57), ctx['lineTo'](_0x4cbd09['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0x4cbd09['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0x4cbd09['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0x4cbd09['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0x4cbd09['render']['radius'] * Math['sqrt'](0x3) * 0.57), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x4cbd09['render']['angle'] - Math['PI'] / 0x2);
        },
        'StarfishMissile': _0x1ab8fd => {
            let _0x5043c4 = enemyColor('#aa403f', _0x1ab8fd);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x1ab8fd['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x5043c4, ctx['strokeStyle'] = _0x5043c4, ctx['lineWidth'] = _0x1ab8fd['render']['radius'] / 1.5, ctx['moveTo'](0x0, -_0x1ab8fd['render']['radius'] * Math['sqrt'](0x3)), ctx['lineTo'](_0x1ab8fd['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0x1ab8fd['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0x1ab8fd['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0x1ab8fd['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0x1ab8fd['render']['radius'] * Math['sqrt'](0x3)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x1ab8fd['render']['angle'] - Math['PI'] / 0x2);
        },
        'GrasshopperMissile': _0x2e5b55 => {
            let _0x25e9bd = enemyColor('#174a25', _0x2e5b55);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x2e5b55['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x25e9bd, ctx['strokeStyle'] = _0x25e9bd, ctx['lineWidth'] = _0x2e5b55['render']['radius'] / 1.5, ctx['moveTo'](0x0, -_0x2e5b55['render']['radius'] * Math['sqrt'](0x3)), ctx['lineTo'](_0x2e5b55['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0x2e5b55['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0x2e5b55['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0x2e5b55['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0x2e5b55['render']['radius'] * Math['sqrt'](0x3)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x2e5b55['render']['angle'] - Math['PI'] / 0x2);
        },
        'FireMissile': _0xfe0e6f => {
            let _0x571d5c = enemyColor('#882200', _0xfe0e6f);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0xfe0e6f['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x571d5c, ctx['strokeStyle'] = _0x571d5c, ctx['lineWidth'] = _0xfe0e6f['render']['radius'] / 1.5, ctx['moveTo'](0x0, -_0xfe0e6f['render']['radius'] * Math['sqrt'](0x3)), ctx['lineTo'](_0xfe0e6f['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0xfe0e6f['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0xfe0e6f['render']['radius'] * Math['sqrt'](0x3) * 0.48, _0xfe0e6f['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0xfe0e6f['render']['radius'] * Math['sqrt'](0x3)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0xfe0e6f['render']['angle'] - Math['PI'] / 0x2);
        },
        'UrchinMissile': _0x451864 => {
            let _0x2cc878 = enemyColor('#521c18', _0x451864);
            ctx['lineJoin'] = 'butt', ctx['rotate'](_0x451864['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x2cc878, ctx['strokeStyle'] = _0x2cc878, ctx['lineWidth'] = _0x451864['render']['radius'] / 1.5, ctx['moveTo'](0x0, -_0x451864['render']['radius'] * 1.6), ctx['lineTo'](_0x451864['render']['radius'] * Math['sqrt'](0x3) * 0.28, _0x451864['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0x451864['render']['radius'] * Math['sqrt'](0x3) * 0.28, _0x451864['render']['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0x451864['render']['radius'] * 1.6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineJoin'] = 'round', ctx['rotate'](-_0x451864['render']['angle'] - Math['PI'] / 0x2);
        },
        'BossDandelionMissile': _0x55b27e => {
            enemyRenderMap['DandelionMissile'](_0x55b27e);
        },
        'BossUrchinMissile': _0x2404fa => {
            enemyRenderMap['UrchinMissile'](_0x2404fa);
        },
        'BigBossUrchinMissile': _0x1a9551 => {
            let _0x3559fc = enemyColor('#400825', _0x1a9551);
            ctx['fillStyle'] = _0x3559fc, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1a9551['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'ScorpionMissile': _0x2f3bac => {
            let _0x1bfaff = enemyColor('#333333', _0x2f3bac);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x2f3bac['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x1bfaff, ctx['strokeStyle'] = _0x1bfaff, ctx['lineWidth'] = _0x2f3bac['render']['radius'] / 1.5, ctx['moveTo'](0x0, -_0x2f3bac['render']['radius'] * Math['sqrt'](0x3) * 0.6), ctx['lineTo'](_0x2f3bac['render']['radius'] * Math['sqrt'](0x3) * 0.58, 0x0), ctx['lineTo'](-_0x2f3bac['render']['radius'] * Math['sqrt'](0x3) * 0.58, 0x0), ctx['lineTo'](0x0, -_0x2f3bac['render']['radius'] * Math['sqrt'](0x3) * 0.6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x2f3bac['render']['angle'] - Math['PI'] / 0x2);
        },
        'LocustMissile': _0x4bdc67 => {
            enemyRenderMap['Missile'](_0x4bdc67);
        },
        'SplitLocustMissile': _0x3b308f => {
            enemyRenderMap['Missile'](_0x3b308f);
        },
        'Spider': _0x4525b0 => {
            _0x4525b0['render']['time'] += _0x4525b0['isMenuEnemy'] === !![] ? 0x2 * (0x1 + Math['sin'](performance['now']() / 0x3e8) / 0x2) : Math['sqrt']((_0x4525b0['render']['lastX'] - _0x4525b0['render']['x']) ** 0x2 + (_0x4525b0['render']['lastY'] - _0x4525b0['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x4525b0['render']['radius'] / 142.5) + 0.5) * 0x5, _0x4525b0['render']['lastX'] = _0x4525b0['render']['x'], _0x4525b0['render']['lastY'] = _0x4525b0['render']['y'];
            let _0x5abb66 = enemyColor('#4f412d', _0x4525b0), _0x1d79ad = enemyColor('#3f3424', _0x4525b0), _0x30359b = enemyColor('#403425', _0x4525b0);
            ctx['rotate'](_0x4525b0['render']['angle'] + Math['PI']), ctx['strokeStyle'] = _0x30359b, ctx['lineWidth'] = _0x4525b0['render']['radius'] / 0x4, ctx['rotate'](Math['PI'] / 0x2);
            for (let _0x22052f = 0x4; _0x22052f--; _0x22052f > 0x0) {
                let _0x5cf01f = _0x22052f * 0.52 - 0.26 + Math['cos'](_0x4525b0['render']['time'] / 0x34 + _0x22052f) * 0.2;
                ctx['rotate'](_0x5cf01f), ctx['beginPath'](), ctx['moveTo'](-_0x4525b0['render']['radius'] * 2.2, 0x0), ctx['quadraticCurveTo'](-_0x4525b0['render']['radius'], _0x4525b0['render']['radius'] / 0x6, 0x0, 0x0), ctx['quadraticCurveTo'](_0x4525b0['render']['radius'], -_0x4525b0['render']['radius'] / 0x6, _0x4525b0['render']['radius'] * 2.2, 0x0), ctx['stroke'](), ctx['rotate'](-_0x5cf01f), ctx['closePath']();
            }
            ctx['rotate'](-Math['PI'] / 0x2), ctx['strokeStyle'] = _0x1d79ad, ctx['fillStyle'] = _0x5abb66, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4525b0['render']['radius'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x4525b0['render']['angle'] - Math['PI']);
        },
        'Gloomcrawler': _0x586229 => {
            _0x586229['render']['time'] += _0x586229['isMenuEnemy'] === !![] ? 1.3 * (0x1 + Math['sin'](performance['now']() / 0x76c + Math['sin'](performance['now']() / 0xc1c)) / 0x2) : Math['sqrt']((_0x586229['render']['lastX'] - _0x586229['render']['x']) ** 0x2 + (_0x586229['render']['lastY'] - _0x586229['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x586229['render']['radius'] / 142.5) + 0.5) * 4.5, _0x586229['render']['lastX'] = _0x586229['render']['x'], _0x586229['render']['lastY'] = _0x586229['render']['y'];
            if (_0x586229['angerState'] === 0x3) {
                if (!_0x586229['angeringTime'])
                    _0x586229['angeringTime'] = 0x0;
                _0x586229['angeringTime'] += dt;
            } else
                _0x586229['angeringTime'] = 0x0;
            const _0x2180cd = Math['min'](_0x586229['angeringTime'] / 0x9c4, 0x1), _0x582cb9 = '#192e0e', _0x4aa1a9 = '#1f300e', _0x36c0a9 = '#7ca36f', _0x52d46a = '#3c284f', _0x4eafe7 = '#ff05fb', _0x3124d7 = (Math['sin'](performance['now']() / 0x4b0) + 0x1) / 0x2;
            let _0x5d0419 = blendColor(_0x582cb9, _0x36c0a9, 0.2 + _0x3124d7 * 0.15), _0x4042aa = blendColor(_0x4aa1a9, _0x36c0a9, 0.15 + _0x3124d7 * 0.1);
            if (_0x586229['angerState'] === 0x3) {
                let _0x4c1339 = Math['pow'](_0x2180cd, 1.5);
                _0x5d0419 = blendColor(_0x5d0419, '#000000', _0x4c1339 * 0.6), _0x4042aa = blendColor(_0x4042aa, _0x36c0a9, _0x4c1339 * 0.3);
            }
            _0x586229['angerState'] === 0x2 && (_0x5d0419 = blendColor(_0x5d0419, _0x4eafe7, 0.7), _0x4042aa = blendColor(_0x4042aa, _0x4eafe7, 0.6));
            ctx['rotate'](_0x586229['render']['angle'] + Math['PI']);
            const _0x123328 = ctx['globalAlpha'] !== 0x1;
            if (_0x123328 === !![]) {
                ctx['save']();
                let _0x124faf = new Path2D();
                _0x124faf['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x124faf['arc'](0x0, 0x0, _0x586229['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x124faf, 'evenodd');
            }
            ctx['strokeStyle'] = _0x4042aa, ctx['lineWidth'] = _0x586229['render']['radius'] / 0x4, ctx['globalAlpha'] *= 0.9, ctx['rotate'](Math['PI'] / 0x2);
            const _0x42342d = _0x586229['angerState'] === 0x2 ? 1.7 : _0x586229['angerState'] === 0x3 ? 1.2 : 0x1;
            for (let _0x417cef = 0x4; _0x417cef--; _0x417cef > 0x0) {
                let _0x4233a7 = Math['cos'](_0x586229['render']['time'] / (0x55 / _0x42342d) + _0x417cef * 1.7) * 0.35 * _0x42342d;
                ctx['rotate'](_0x417cef * 0.52359 - 0.785398 + _0x4233a7), ctx['beginPath'](), ctx['moveTo'](-_0x586229['render']['radius'] * 2.2, 0x0), ctx['quadraticCurveTo'](-_0x586229['render']['radius'], _0x586229['render']['radius'] / 0x3, 0x0, 0x0), ctx['quadraticCurveTo'](_0x586229['render']['radius'], -_0x586229['render']['radius'] / 0x3, _0x586229['render']['radius'] * 2.2, 0x0), ctx['stroke'](), ctx['rotate'](-_0x417cef * 0.52359 + 0.785398 - _0x4233a7), ctx['closePath']();
            }
            ctx['rotate'](-Math['PI'] / 0x2), ctx['globalAlpha'] /= 0.9;
            _0x123328 === !![] && (ctx['restore'](), ctx['lineWidth'] = _0x586229['render']['radius'] / 0x4);
            if (_0x586229['angerState'] === 0x3 && _0x2180cd > 0x0) {
                const _0x5b514d = _0x586229['render']['radius'] * (1.5 + _0x2180cd * 1.5), _0x1bf6be = 0.1 + 0.5 * _0x2180cd;
                ctx['save'](), ctx['globalAlpha'] = _0x1bf6be, ctx['fillStyle'] = 'black', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5b514d, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['restore']();
            }
            ctx['strokeStyle'] = blendColor(_0x5d0419, _0x52d46a, 0.25), ctx['fillStyle'] = _0x5d0419, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x586229['render']['radius'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = 'rgba(150,\x20180,\x20120,\x200.1)';
            for (let _0x262610 = 0x0; _0x262610 < 0x3; _0x262610++) {
                const _0x3278b0 = (Math['sin'](_0x586229['render']['time'] / 0x190 + _0x262610) * 0.4 + _0x262610 * 0.6) * _0x586229['render']['radius'];
                ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x586229['render']['radius'] * (0.7 + _0x262610 * 0.1), _0x3278b0 * 0.002, _0x3278b0 * 0.005 + Math['PI'] / 0x3), ctx['stroke'](), ctx['closePath']();
            }
            ctx['rotate'](-_0x586229['render']['angle'] - Math['PI']);
        },
        'Tarantula': _0xdbffb9 => {
            _0xdbffb9['render']['time'] += _0xdbffb9['isMenuEnemy'] === !![] ? 0x2 * (0x1 + Math['sin'](performance['now']() / 0x3e8) / 0x2) : Math['sqrt']((_0xdbffb9['render']['lastX'] - _0xdbffb9['render']['x']) ** 0x2 + (_0xdbffb9['render']['lastY'] - _0xdbffb9['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0xdbffb9['render']['radius'] / 142.5) + 0.5) * 0x5, _0xdbffb9['render']['lastX'] = _0xdbffb9['render']['x'], _0xdbffb9['render']['lastY'] = _0xdbffb9['render']['y'];
            let _0x246028 = '#2bba4f', _0x4e802d = '#6c26ad', _0x3dc6d5 = enemyColor('#4f412d', _0xdbffb9), _0x4e57db = enemyColor('#403425', _0xdbffb9);
            ctx['rotate'](_0xdbffb9['render']['angle'] + Math['PI']);
            const _0xae1d8c = ctx['globalAlpha'] !== 0x1;
            if (_0xae1d8c) {
                ctx['save']();
                let _0x58e852 = new Path2D();
                _0x58e852['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x58e852['arc'](0x0, 0x0, _0xdbffb9['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x58e852, 'evenodd');
            }
            ctx['lineWidth'] = _0xdbffb9['render']['radius'] / 0x4, ctx['rotate'](Math['PI'] / 0x2);
            for (let _0x5f205b = 0x4; _0x5f205b--; _0x5f205b > 0x0) {
                let _0x516aed = _0x5f205b * 0.6 - 0.6 + Math['sin'](_0xdbffb9['render']['time'] / 0x28 + _0x5f205b) * 0.25;
                ctx['rotate'](_0x516aed), ctx['strokeStyle'] = _0x246028, ctx['beginPath'](), ctx['moveTo'](-_0xdbffb9['render']['radius'] * 2.5, 0x0), ctx['quadraticCurveTo'](-_0xdbffb9['render']['radius'] * 1.3, _0xdbffb9['render']['radius'] * 0.25, 0x0, 0x0), ctx['quadraticCurveTo'](_0xdbffb9['render']['radius'] * 1.3, -_0xdbffb9['render']['radius'] * 0.25, _0xdbffb9['render']['radius'] * 2.5, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x4e57db, ctx['beginPath'](), ctx['moveTo'](-_0xdbffb9['render']['radius'] * 2.2, 0x0), ctx['quadraticCurveTo'](-_0xdbffb9['render']['radius'], _0xdbffb9['render']['radius'] * 0.2, 0x0, 0x0), ctx['quadraticCurveTo'](_0xdbffb9['render']['radius'], -_0xdbffb9['render']['radius'] * 0.2, _0xdbffb9['render']['radius'] * 2.2, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x516aed);
            }
            ctx['rotate'](-Math['PI'] / 0x2), _0xae1d8c && (ctx['restore'](), ctx['lineWidth'] = _0xdbffb9['render']['radius'] / 0x4), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xdbffb9['render']['radius'], 0x0, 0x2 * Math['PI']), ctx['strokeStyle'] = _0x4e802d, ctx['lineWidth'] = _0xdbffb9['render']['radius'] / 0xa, ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, Math['max'](_0xdbffb9['render']['radius'] - _0xdbffb9['render']['radius'] / 0xa, 0x0), 0x0, 0x2 * Math['PI']), ctx['fillStyle'] = _0x3dc6d5, ctx['fill'](), ctx['strokeStyle'] = _0x4e57db, ctx['lineWidth'] = _0xdbffb9['render']['radius'] / 0xa, ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0xdbffb9['render']['angle'] - Math['PI']);
        },
        'Centipede': _0x4363ab => {
            let _0x21d9dd = enemyColor('#8ac255', _0x4363ab), _0x12f07e = enemyColor('#333333', _0x4363ab);
            ctx['rotate'](_0x4363ab['render']['angle']);
            const _0x596881 = ctx['globalAlpha'] !== 0x1;
            if (_0x596881 === !![]) {
                ctx['save']();
                let _0x44827d = new Path2D();
                _0x44827d['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x44827d['arc'](0x0, 0x0, _0x4363ab['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x44827d, 'evenodd');
            }
            ctx['fillStyle'] = _0x12f07e, ctx['beginPath'](), ctx['arc'](0x0, _0x4363ab['render']['radius'] * 0.85, _0x4363ab['render']['radius'] * 0.44, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, -_0x4363ab['render']['radius'] * 0.85, _0x4363ab['render']['radius'] * 0.44, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), _0x596881 === !![] && ctx['restore'](), ctx['lineWidth'] = _0x4363ab['render']['radius'] * 0.2, ctx['strokeStyle'] = blendColor(_0x21d9dd, '#000000', 0.19), ctx['fillStyle'] = _0x21d9dd, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4363ab['render']['radius'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x4363ab['isHead'] === !![] && (ctx['strokeStyle'] = _0x12f07e, ctx['lineWidth'] = _0x4363ab['render']['radius'] * 0.075, ctx['beginPath'](), ctx['moveTo'](_0x4363ab['render']['radius'] * 0.71, -_0x4363ab['render']['radius'] * 0.29), ctx['quadraticCurveTo'](_0x4363ab['render']['radius'] * 1.35, -_0x4363ab['render']['radius'] * 0.33, _0x4363ab['render']['radius'] * 1.57, -_0x4363ab['render']['radius'] * 0.87), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x4363ab['render']['radius'] * 0.71, _0x4363ab['render']['radius'] * 0.29), ctx['quadraticCurveTo'](_0x4363ab['render']['radius'] * 1.35, _0x4363ab['render']['radius'] * 0.33, _0x4363ab['render']['radius'] * 1.57, _0x4363ab['render']['radius'] * 0.87), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = ctx['strokeStyle'], ctx['beginPath'](), ctx['arc'](_0x4363ab['render']['radius'] * 1.57, -_0x4363ab['render']['radius'] * 0.87, _0x4363ab['render']['radius'] * 0.132, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x4363ab['render']['radius'] * 1.57, _0x4363ab['render']['radius'] * 0.87, _0x4363ab['render']['radius'] * 0.132, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']()), ctx['rotate'](-_0x4363ab['render']['angle']);
        },
        'Evil\x20Centipede': _0x56135d => {
            let _0x2e9298 = enemyColor('#8f5db0', _0x56135d), _0x12df19 = enemyColor('#333333', _0x56135d);
            ctx['rotate'](_0x56135d['render']['angle']);
            const _0x5a0be1 = ctx['globalAlpha'] !== 0x1;
            if (_0x5a0be1 === !![]) {
                ctx['save']();
                let _0x491366 = new Path2D();
                _0x491366['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x491366['arc'](0x0, 0x0, _0x56135d['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x491366, 'evenodd');
            }
            ctx['fillStyle'] = _0x12df19, ctx['beginPath'](), ctx['arc'](0x0, _0x56135d['render']['radius'] * 0.85, _0x56135d['render']['radius'] * 0.44, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, -_0x56135d['render']['radius'] * 0.85, _0x56135d['render']['radius'] * 0.44, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), _0x5a0be1 === !![] && ctx['restore'](), ctx['lineWidth'] = _0x56135d['render']['radius'] * 0.2, ctx['strokeStyle'] = blendColor(_0x2e9298, '#000000', 0.19), ctx['fillStyle'] = _0x2e9298, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x56135d['render']['radius'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x56135d['isHead'] === !![] && (ctx['strokeStyle'] = _0x12df19, ctx['lineWidth'] = _0x56135d['render']['radius'] * 0.075, ctx['beginPath'](), ctx['moveTo'](_0x56135d['render']['radius'] * 0.71, -_0x56135d['render']['radius'] * 0.29), ctx['quadraticCurveTo'](_0x56135d['render']['radius'] * 1.35, -_0x56135d['render']['radius'] * 0.33, _0x56135d['render']['radius'] * 1.57, -_0x56135d['render']['radius'] * 0.87), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x56135d['render']['radius'] * 0.71, _0x56135d['render']['radius'] * 0.29), ctx['quadraticCurveTo'](_0x56135d['render']['radius'] * 1.35, _0x56135d['render']['radius'] * 0.33, _0x56135d['render']['radius'] * 1.57, _0x56135d['render']['radius'] * 0.87), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = ctx['strokeStyle'], ctx['beginPath'](), ctx['arc'](_0x56135d['render']['radius'] * 1.57, -_0x56135d['render']['radius'] * 0.87, _0x56135d['render']['radius'] * 0.132, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x56135d['render']['radius'] * 1.57, _0x56135d['render']['radius'] * 0.87, _0x56135d['render']['radius'] * 0.132, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']()), ctx['rotate'](-_0x56135d['render']['angle']);
        },
        'Desert\x20Centipede': _0x1001e1 => {
            let _0x25a1ee = enemyColor('#d3c66d', _0x1001e1), _0x5955aa = enemyColor('#333333', _0x1001e1);
            ctx['rotate'](_0x1001e1['render']['angle']);
            const _0x2dc3cf = ctx['globalAlpha'] !== 0x1;
            if (_0x2dc3cf === !![]) {
                ctx['save']();
                let _0x34ffc2 = new Path2D();
                _0x34ffc2['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x34ffc2['arc'](0x0, 0x0, _0x1001e1['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x34ffc2, 'evenodd');
            }
            ctx['fillStyle'] = _0x5955aa, ctx['beginPath'](), ctx['arc'](0x0, _0x1001e1['render']['radius'] * 0.85, _0x1001e1['render']['radius'] * 0.44, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, -_0x1001e1['render']['radius'] * 0.85, _0x1001e1['render']['radius'] * 0.44, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), _0x2dc3cf === !![] && ctx['restore'](), ctx['lineWidth'] = _0x1001e1['render']['radius'] * 0.2, ctx['strokeStyle'] = blendColor(_0x25a1ee, '#000000', 0.19), ctx['fillStyle'] = _0x25a1ee, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1001e1['render']['radius'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x1001e1['isHead'] === !![] && (ctx['strokeStyle'] = _0x5955aa, ctx['lineWidth'] = _0x1001e1['render']['radius'] * 0.075, ctx['beginPath'](), ctx['moveTo'](_0x1001e1['render']['radius'] * 0.71, -_0x1001e1['render']['radius'] * 0.29), ctx['quadraticCurveTo'](_0x1001e1['render']['radius'] * 1.35, -_0x1001e1['render']['radius'] * 0.33, _0x1001e1['render']['radius'] * 1.57, -_0x1001e1['render']['radius'] * 0.87), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x1001e1['render']['radius'] * 0.71, _0x1001e1['render']['radius'] * 0.29), ctx['quadraticCurveTo'](_0x1001e1['render']['radius'] * 1.35, _0x1001e1['render']['radius'] * 0.33, _0x1001e1['render']['radius'] * 1.57, _0x1001e1['render']['radius'] * 0.87), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = ctx['strokeStyle'], ctx['beginPath'](), ctx['arc'](_0x1001e1['render']['radius'] * 1.57, -_0x1001e1['render']['radius'] * 0.87, _0x1001e1['render']['radius'] * 0.132, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x1001e1['render']['radius'] * 1.57, _0x1001e1['render']['radius'] * 0.87, _0x1001e1['render']['radius'] * 0.132, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']()), ctx['rotate'](-_0x1001e1['render']['angle']);
        },
        'Evil\x20Desert\x20Centipede': _0x2b6fed => {
            let _0x520407 = enemyColor('#bd6026', _0x2b6fed), _0x344217 = enemyColor('#542000', _0x2b6fed);
            ctx['rotate'](_0x2b6fed['render']['angle']);
            const _0x428701 = ctx['globalAlpha'] !== 0x1;
            if (_0x428701 === !![]) {
                ctx['save']();
                let _0x5640af = new Path2D();
                _0x5640af['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x5640af['arc'](0x0, 0x0, _0x2b6fed['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x5640af, 'evenodd');
            }
            ctx['fillStyle'] = _0x344217, ctx['beginPath'](), ctx['arc'](0x0, _0x2b6fed['render']['radius'] * 0.85, _0x2b6fed['render']['radius'] * 0.44, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, -_0x2b6fed['render']['radius'] * 0.85, _0x2b6fed['render']['radius'] * 0.44, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), _0x428701 === !![] && ctx['restore'](), ctx['lineWidth'] = _0x2b6fed['render']['radius'] * 0.2, ctx['strokeStyle'] = blendColor(_0x520407, '#000000', 0.19), ctx['fillStyle'] = _0x520407, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2b6fed['render']['radius'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x2b6fed['isHead'] === !![] && (ctx['strokeStyle'] = _0x344217, ctx['lineWidth'] = _0x2b6fed['render']['radius'] * 0.075, ctx['beginPath'](), ctx['moveTo'](_0x2b6fed['render']['radius'] * 0.71, -_0x2b6fed['render']['radius'] * 0.29), ctx['quadraticCurveTo'](_0x2b6fed['render']['radius'] * 1.35, -_0x2b6fed['render']['radius'] * 0.33, _0x2b6fed['render']['radius'] * 1.57, -_0x2b6fed['render']['radius'] * 0.87), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x2b6fed['render']['radius'] * 0.71, _0x2b6fed['render']['radius'] * 0.29), ctx['quadraticCurveTo'](_0x2b6fed['render']['radius'] * 1.35, _0x2b6fed['render']['radius'] * 0.33, _0x2b6fed['render']['radius'] * 1.57, _0x2b6fed['render']['radius'] * 0.87), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = ctx['strokeStyle'], ctx['beginPath'](), ctx['arc'](_0x2b6fed['render']['radius'] * 1.57, -_0x2b6fed['render']['radius'] * 0.87, _0x2b6fed['render']['radius'] * 0.132, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x2b6fed['render']['radius'] * 1.57, _0x2b6fed['render']['radius'] * 0.87, _0x2b6fed['render']['radius'] * 0.132, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']()), ctx['rotate'](-_0x2b6fed['render']['angle']);
        },
        'Beetle': _0x332400 => {
            _0x332400['render']['time'] += Math['sqrt']((_0x332400['render']['lastX'] - _0x332400['render']['x']) ** 0x2 + (_0x332400['render']['lastY'] - _0x332400['render']['y']) ** 0x2), _0x332400['render']['lastX'] = _0x332400['render']['x'], _0x332400['render']['lastY'] = _0x332400['render']['y'], ctx['lineWidth'] = _0x332400['render']['radius'] / 0x3;
            let _0x3668a2 = enemyColor('#8f5db0', _0x332400), _0x434ad4 = enemyColor('#764b90', _0x332400);
            ctx['rotate'](_0x332400['render']['angle']), ctx['fillStyle'] = '#333333', ctx['translate'](_0x332400['render']['radius'] * 0.99, -_0x332400['render']['radius'] * 0.37);
            let _0x1bacd4 = Math['cos'](_0x332400['render']['time'] / 0xc) / 7.5 + 0.1;
            ctx['rotate'](_0x1bacd4), ctx['beginPath'](), ctx['lineTo'](_0x332400['render']['radius'] * (0.66 - 0.99), _0x332400['render']['radius'] * (-0.54 + 0.37)), ctx['quadraticCurveTo'](_0x332400['render']['radius'] * (1.35 - 0.99), _0x332400['render']['radius'] * (-0.81 + 0.37), _0x332400['render']['radius'] * (1.8 - 0.99), _0x332400['render']['radius'] * (-0.47 + 0.37)), ctx['quadraticCurveTo'](_0x332400['render']['radius'] * (1.92 - 0.99), _0x332400['render']['radius'] * (-0.38 + 0.37), _0x332400['render']['radius'] * (1.81 - 0.99), _0x332400['render']['radius'] * (-0.28 + 0.37)), ctx['quadraticCurveTo'](_0x332400['render']['radius'] * (1.42 - 0.99), _0x332400['render']['radius'] * (-0.37 + 0.37), _0x332400['render']['radius'] * (0.74 - 0.99), _0x332400['render']['radius'] * (-0.13 + 0.37)), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x1bacd4), ctx['translate'](-_0x332400['render']['radius'] * 0.99, _0x332400['render']['radius'] * 0.37), ctx['translate'](_0x332400['render']['radius'] * 0.99, _0x332400['render']['radius'] * 0.37), ctx['rotate'](-_0x1bacd4), ctx['beginPath'](), ctx['lineTo'](_0x332400['render']['radius'] * (0.66 - 0.99), _0x332400['render']['radius'] * (0.54 - 0.37)), ctx['quadraticCurveTo'](_0x332400['render']['radius'] * (1.35 - 0.99), _0x332400['render']['radius'] * (0.81 - 0.37), _0x332400['render']['radius'] * (1.8 - 0.99), _0x332400['render']['radius'] * (0.47 - 0.37)), ctx['quadraticCurveTo'](_0x332400['render']['radius'] * (1.92 - 0.99), _0x332400['render']['radius'] * (0.38 - 0.37), _0x332400['render']['radius'] * (1.81 - 0.99), _0x332400['render']['radius'] * (0.28 - 0.37)), ctx['quadraticCurveTo'](_0x332400['render']['radius'] * (1.42 - 0.99), _0x332400['render']['radius'] * (0.37 - 0.37), _0x332400['render']['radius'] * (0.74 - 0.99), _0x332400['render']['radius'] * (0.13 - 0.37)), ctx['fill'](), ctx['closePath'](), ctx['rotate'](_0x1bacd4), ctx['translate'](-_0x332400['render']['radius'] * 0.99, -_0x332400['render']['radius'] * 0.37), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x332400['render']['radius'] * 0.19310344827586207, ctx['strokeStyle'] = _0x434ad4, ctx['fillStyle'] = _0x3668a2, ctx['beginPath'](), ctx['lineTo'](_0x332400['render']['radius'] * -1.01, _0x332400['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x332400['render']['radius'] * -1.1, _0x332400['render']['radius'] * -1.01, _0x332400['render']['radius'] * 1.1, _0x332400['render']['radius'] * -1.01, _0x332400['render']['radius'] * 0x1, _0x332400['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x332400['render']['radius'] * 1.1, _0x332400['render']['radius'] * 1.01, _0x332400['render']['radius'] * -1.1, _0x332400['render']['radius'] * 1.01, _0x332400['render']['radius'] * -1.01, _0x332400['render']['radius'] * 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x332400['render']['radius'] * -0.51, _0x332400['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x332400['render']['radius'] * 0.01, _0x332400['render']['radius'] * -0.06, _0x332400['render']['radius'] * 0.5, _0x332400['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x434ad4, ctx['beginPath'](), ctx['arc'](_0x332400['render']['radius'] * -0.43, _0x332400['render']['radius'] * -0.3, _0x332400['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x332400['render']['radius'] * -0.01, _0x332400['render']['radius'] * -0.38, _0x332400['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x332400['render']['radius'] * 0.43, _0x332400['render']['radius'] * -0.3, _0x332400['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2, 0x12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = _0x434ad4, ctx['arc'](_0x332400['render']['radius'] * -0.43, _0x332400['render']['radius'] * 0.3, _0x332400['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x332400['render']['radius'] * -0.01, _0x332400['render']['radius'] * 0.38, _0x332400['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x332400['render']['radius'] * 0.43, _0x332400['render']['radius'] * 0.3, _0x332400['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2, 0x12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x332400['render']['angle']);
        },
        'Shiny\x20Beetle': _0x299fe6 => {
            _0x299fe6['render']['time'] += Math['sqrt']((_0x299fe6['render']['lastX'] - _0x299fe6['render']['x']) ** 0x2 + (_0x299fe6['render']['lastY'] - _0x299fe6['render']['y']) ** 0x2), _0x299fe6['render']['lastX'] = _0x299fe6['render']['x'], _0x299fe6['render']['lastY'] = _0x299fe6['render']['y'], ctx['lineWidth'] = _0x299fe6['render']['radius'] / 0x3;
            let _0x2cab5e = enemyColor('#d3cd5e', _0x299fe6), _0xaaa19e = enemyColor('#aaa64c', _0x299fe6);
            ctx['rotate'](_0x299fe6['render']['angle']), ctx['fillStyle'] = '#595727', ctx['translate'](_0x299fe6['render']['radius'] * 0.99, -_0x299fe6['render']['radius'] * 0.37);
            let _0x886f8d = Math['cos'](_0x299fe6['render']['time'] / 0xc) / 7.5 + 0.1;
            ctx['rotate'](_0x886f8d), ctx['beginPath'](), ctx['lineTo'](_0x299fe6['render']['radius'] * (0.66 - 0.99), _0x299fe6['render']['radius'] * (-0.54 + 0.37)), ctx['quadraticCurveTo'](_0x299fe6['render']['radius'] * (1.35 - 0.99), _0x299fe6['render']['radius'] * (-0.81 + 0.37), _0x299fe6['render']['radius'] * (1.8 - 0.99), _0x299fe6['render']['radius'] * (-0.47 + 0.37)), ctx['quadraticCurveTo'](_0x299fe6['render']['radius'] * (1.92 - 0.99), _0x299fe6['render']['radius'] * (-0.38 + 0.37), _0x299fe6['render']['radius'] * (1.81 - 0.99), _0x299fe6['render']['radius'] * (-0.28 + 0.37)), ctx['quadraticCurveTo'](_0x299fe6['render']['radius'] * (1.42 - 0.99), _0x299fe6['render']['radius'] * (-0.37 + 0.37), _0x299fe6['render']['radius'] * (0.74 - 0.99), _0x299fe6['render']['radius'] * (-0.13 + 0.37)), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x886f8d), ctx['translate'](-_0x299fe6['render']['radius'] * 0.99, _0x299fe6['render']['radius'] * 0.37), ctx['translate'](_0x299fe6['render']['radius'] * 0.99, _0x299fe6['render']['radius'] * 0.37), ctx['rotate'](-_0x886f8d), ctx['beginPath'](), ctx['lineTo'](_0x299fe6['render']['radius'] * (0.66 - 0.99), _0x299fe6['render']['radius'] * (0.54 - 0.37)), ctx['quadraticCurveTo'](_0x299fe6['render']['radius'] * (1.35 - 0.99), _0x299fe6['render']['radius'] * (0.81 - 0.37), _0x299fe6['render']['radius'] * (1.8 - 0.99), _0x299fe6['render']['radius'] * (0.47 - 0.37)), ctx['quadraticCurveTo'](_0x299fe6['render']['radius'] * (1.92 - 0.99), _0x299fe6['render']['radius'] * (0.38 - 0.37), _0x299fe6['render']['radius'] * (1.81 - 0.99), _0x299fe6['render']['radius'] * (0.28 - 0.37)), ctx['quadraticCurveTo'](_0x299fe6['render']['radius'] * (1.42 - 0.99), _0x299fe6['render']['radius'] * (0.37 - 0.37), _0x299fe6['render']['radius'] * (0.74 - 0.99), _0x299fe6['render']['radius'] * (0.13 - 0.37)), ctx['fill'](), ctx['closePath'](), ctx['rotate'](_0x886f8d), ctx['translate'](-_0x299fe6['render']['radius'] * 0.99, -_0x299fe6['render']['radius'] * 0.37), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x299fe6['render']['radius'] * 0.19310344827586207, ctx['strokeStyle'] = _0xaaa19e, ctx['fillStyle'] = _0x2cab5e, ctx['beginPath'](), ctx['lineTo'](_0x299fe6['render']['radius'] * -1.01, _0x299fe6['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x299fe6['render']['radius'] * -1.1, _0x299fe6['render']['radius'] * -1.01, _0x299fe6['render']['radius'] * 1.1, _0x299fe6['render']['radius'] * -1.01, _0x299fe6['render']['radius'] * 0x1, _0x299fe6['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x299fe6['render']['radius'] * 1.1, _0x299fe6['render']['radius'] * 1.01, _0x299fe6['render']['radius'] * -1.1, _0x299fe6['render']['radius'] * 1.01, _0x299fe6['render']['radius'] * -1.01, _0x299fe6['render']['radius'] * 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x299fe6['render']['radius'] * -0.51, _0x299fe6['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x299fe6['render']['radius'] * 0.01, _0x299fe6['render']['radius'] * -0.06, _0x299fe6['render']['radius'] * 0.5, _0x299fe6['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0xaaa19e, ctx['beginPath'](), ctx['arc'](_0x299fe6['render']['radius'] * -0.43, _0x299fe6['render']['radius'] * -0.3, _0x299fe6['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x299fe6['render']['radius'] * -0.01, _0x299fe6['render']['radius'] * -0.38, _0x299fe6['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x299fe6['render']['radius'] * 0.43, _0x299fe6['render']['radius'] * -0.3, _0x299fe6['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2, 0x12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = _0xaaa19e, ctx['arc'](_0x299fe6['render']['radius'] * -0.43, _0x299fe6['render']['radius'] * 0.3, _0x299fe6['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x299fe6['render']['radius'] * -0.01, _0x299fe6['render']['radius'] * 0.38, _0x299fe6['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x299fe6['render']['radius'] * 0.43, _0x299fe6['render']['radius'] * 0.3, _0x299fe6['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2, 0x12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x299fe6['render']['angle']);
        },
        'Dark\x20Beetle': _0x25ef07 => {
            _0x25ef07['render']['time'] += Math['sqrt']((_0x25ef07['render']['lastX'] - _0x25ef07['render']['x']) ** 0x2 + (_0x25ef07['render']['lastY'] - _0x25ef07['render']['y']) ** 0x2), _0x25ef07['render']['lastX'] = _0x25ef07['render']['x'], _0x25ef07['render']['lastY'] = _0x25ef07['render']['y'], ctx['lineWidth'] = _0x25ef07['render']['radius'] / 0x3;
            let _0x442b96 = enemyColor('#3c1f5c', _0x25ef07), _0x1de2b8 = enemyColor('#2b1742', _0x25ef07);
            ctx['rotate'](_0x25ef07['render']['angle']), ctx['fillStyle'] = '#333333', ctx['translate'](_0x25ef07['render']['radius'] * 0.99, -_0x25ef07['render']['radius'] * 0.37);
            let _0x4406ce = Math['cos'](_0x25ef07['render']['time'] / 0xc) / 7.5 + 0.1;
            ctx['rotate'](_0x4406ce), ctx['beginPath'](), ctx['lineTo'](_0x25ef07['render']['radius'] * (0.66 - 0.99), _0x25ef07['render']['radius'] * (-0.54 + 0.37)), ctx['quadraticCurveTo'](_0x25ef07['render']['radius'] * (1.35 - 0.99), _0x25ef07['render']['radius'] * (-0.81 + 0.37), _0x25ef07['render']['radius'] * (1.8 - 0.99), _0x25ef07['render']['radius'] * (-0.47 + 0.37)), ctx['quadraticCurveTo'](_0x25ef07['render']['radius'] * (1.92 - 0.99), _0x25ef07['render']['radius'] * (-0.38 + 0.37), _0x25ef07['render']['radius'] * (1.81 - 0.99), _0x25ef07['render']['radius'] * (-0.28 + 0.37)), ctx['quadraticCurveTo'](_0x25ef07['render']['radius'] * (1.42 - 0.99), _0x25ef07['render']['radius'] * (-0.37 + 0.37), _0x25ef07['render']['radius'] * (0.74 - 0.99), _0x25ef07['render']['radius'] * (-0.13 + 0.37)), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x4406ce), ctx['translate'](-_0x25ef07['render']['radius'] * 0.99, _0x25ef07['render']['radius'] * 0.37), ctx['translate'](_0x25ef07['render']['radius'] * 0.99, _0x25ef07['render']['radius'] * 0.37), ctx['rotate'](-_0x4406ce), ctx['beginPath'](), ctx['lineTo'](_0x25ef07['render']['radius'] * (0.66 - 0.99), _0x25ef07['render']['radius'] * (0.54 - 0.37)), ctx['quadraticCurveTo'](_0x25ef07['render']['radius'] * (1.35 - 0.99), _0x25ef07['render']['radius'] * (0.81 - 0.37), _0x25ef07['render']['radius'] * (1.8 - 0.99), _0x25ef07['render']['radius'] * (0.47 - 0.37)), ctx['quadraticCurveTo'](_0x25ef07['render']['radius'] * (1.92 - 0.99), _0x25ef07['render']['radius'] * (0.38 - 0.37), _0x25ef07['render']['radius'] * (1.81 - 0.99), _0x25ef07['render']['radius'] * (0.28 - 0.37)), ctx['quadraticCurveTo'](_0x25ef07['render']['radius'] * (1.42 - 0.99), _0x25ef07['render']['radius'] * (0.37 - 0.37), _0x25ef07['render']['radius'] * (0.74 - 0.99), _0x25ef07['render']['radius'] * (0.13 - 0.37)), ctx['fill'](), ctx['closePath'](), ctx['rotate'](_0x4406ce), ctx['translate'](-_0x25ef07['render']['radius'] * 0.99, -_0x25ef07['render']['radius'] * 0.37), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x25ef07['render']['radius'] * 0.19310344827586207, ctx['strokeStyle'] = _0x1de2b8, ctx['fillStyle'] = _0x442b96, ctx['beginPath'](), ctx['lineTo'](_0x25ef07['render']['radius'] * -1.01, _0x25ef07['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x25ef07['render']['radius'] * -1.1, _0x25ef07['render']['radius'] * -1.01, _0x25ef07['render']['radius'] * 1.1, _0x25ef07['render']['radius'] * -1.01, _0x25ef07['render']['radius'] * 0x1, _0x25ef07['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x25ef07['render']['radius'] * 1.1, _0x25ef07['render']['radius'] * 1.01, _0x25ef07['render']['radius'] * -1.1, _0x25ef07['render']['radius'] * 1.01, _0x25ef07['render']['radius'] * -1.01, _0x25ef07['render']['radius'] * 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x25ef07['render']['radius'] * -0.51, _0x25ef07['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x25ef07['render']['radius'] * 0.01, _0x25ef07['render']['radius'] * -0.06, _0x25ef07['render']['radius'] * 0.5, _0x25ef07['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x1de2b8, ctx['beginPath'](), ctx['arc'](_0x25ef07['render']['radius'] * -0.43, _0x25ef07['render']['radius'] * -0.3, _0x25ef07['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x25ef07['render']['radius'] * -0.01, _0x25ef07['render']['radius'] * -0.38, _0x25ef07['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x25ef07['render']['radius'] * 0.43, _0x25ef07['render']['radius'] * -0.3, _0x25ef07['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2, 0x12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = _0x1de2b8, ctx['arc'](_0x25ef07['render']['radius'] * -0.43, _0x25ef07['render']['radius'] * 0.3, _0x25ef07['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x25ef07['render']['radius'] * -0.01, _0x25ef07['render']['radius'] * 0.38, _0x25ef07['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x25ef07['render']['radius'] * 0.43, _0x25ef07['render']['radius'] * 0.3, _0x25ef07['render']['radius'] * 0.12413793103448276, 0x0, Math['PI'] * 0x2, 0x12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x25ef07['render']['angle']);
        },
        'Scorpion': _0x926180 => {
            _0x926180['render']['time'] += Math['sqrt']((_0x926180['render']['lastX'] - _0x926180['render']['x']) ** 0x2 + (_0x926180['render']['lastY'] - _0x926180['render']['y']) ** 0x2), _0x926180['render']['lastX'] = _0x926180['render']['x'], _0x926180['render']['lastY'] = _0x926180['render']['y'];
            let _0x20ade3 = enemyColor('#c69a2c', _0x926180), _0x569e46 = enemyColor('#9e7d24', _0x926180), _0x1c9f2b = enemyColor('#dbab30', _0x926180), _0x455137 = enemyColor('#b28b29', _0x926180);
            ctx['rotate'](_0x926180['render']['angle']), ctx['strokeStyle'] = '#333333', ctx['lineWidth'] = _0x926180['render']['radius'] / 0x7, ctx['rotate'](Math['PI'] / 0x2);
            for (let _0x4bdfc8 = 0x4; _0x4bdfc8--; _0x4bdfc8 > 0x0) {
                let _0x41c142 = _0x4bdfc8 * 0.52359 - 0.52359 - 0.26179938 + Math['cos'](_0x926180['render']['time'] / 0x11 + _0x4bdfc8) * 0.2;
                ctx['rotate'](_0x41c142), ctx['beginPath'](), ctx['moveTo'](-_0x926180['render']['radius'] * 0x1, 0x0), ctx['quadraticCurveTo'](-_0x926180['render']['radius'], _0x926180['render']['radius'] * 0x1 / 0x6, 0x0, 0x0), ctx['quadraticCurveTo'](_0x926180['render']['radius'], -_0x926180['render']['radius'] * 0x1 / 0x6, _0x926180['render']['radius'] * 0x1, 0x0), ctx['stroke'](), ctx['rotate'](-_0x41c142), ctx['closePath']();
            }
            ctx['rotate'](-Math['PI'] / 0x2), ctx['fillStyle'] = '#333333', ctx['translate'](_0x926180['render']['radius'] * 0.79, _0x926180['render']['radius'] * -0.48);
            let _0x41fdb0 = Math['cos'](_0x926180['render']['time'] / 0xa) / 0x7 + 0.1;
            ctx['rotate'](_0x41fdb0), ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * (0.79 - 0.79), _0x926180['render']['radius'] * (-0.48 + 0.48)), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * (1.49 - 0.79), _0x926180['render']['radius'] * (-0.32 + 0.48), _0x926180['render']['radius'] * (1.43 - 0.79), _0x926180['render']['radius'] * (-0.26 + 0.48)), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * (1.43 - 0.79), _0x926180['render']['radius'] * (-0.13 + 0.48), _0x926180['render']['radius'] * (0.76 - 0.79), _0x926180['render']['radius'] * (-0.28 + 0.48)), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x41fdb0), ctx['translate'](-_0x926180['render']['radius'] * 0.79, -_0x926180['render']['radius'] * -0.48), ctx['translate'](_0x926180['render']['radius'] * 0.79, -_0x926180['render']['radius'] * -0.48), ctx['rotate'](-_0x41fdb0), ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * (0.79 - 0.79), _0x926180['render']['radius'] * (0.48 - 0.48)), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * (1.49 - 0.79), _0x926180['render']['radius'] * (0.32 - 0.48), _0x926180['render']['radius'] * (1.43 - 0.79), _0x926180['render']['radius'] * (0.26 - 0.48)), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * (1.43 - 0.79), _0x926180['render']['radius'] * (0.13 - 0.48), _0x926180['render']['radius'] * (0.76 - 0.79), _0x926180['render']['radius'] * (0.28 - 0.48)), ctx['fill'](), ctx['closePath'](), ctx['rotate'](_0x41fdb0), ctx['translate'](-_0x926180['render']['radius'] * 0.79, _0x926180['render']['radius'] * -0.48), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x926180['render']['radius'] * 0.19310344827586207, ctx['strokeStyle'] = _0x569e46, ctx['fillStyle'] = _0x20ade3, ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * -0.97, _0x926180['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x926180['render']['radius'] * -1.1, _0x926180['render']['radius'] * -1.27, _0x926180['render']['radius'] * 1.01, _0x926180['render']['radius'] * -0.75, _0x926180['render']['radius'] * 1.01, _0x926180['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x926180['render']['radius'] * 1.01, _0x926180['render']['radius'] * 0.75, _0x926180['render']['radius'] * -1.1, _0x926180['render']['radius'] * 1.27, _0x926180['render']['radius'] * -0.97, _0x926180['render']['radius'] * 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x926180['render']['radius'] * 0.16551724137931034, ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * 0.55, _0x926180['render']['radius'] * -0.3), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * 0.66, _0x926180['render']['radius'] * 0x0, _0x926180['render']['radius'] * 0.55, _0x926180['render']['radius'] * 0.3), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * 0.17, _0x926180['render']['radius'] * -0.46), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * 0.26, _0x926180['render']['radius'] * 0x0, _0x926180['render']['radius'] * 0.17, _0x926180['render']['radius'] * 0.46), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * -0.19, _0x926180['render']['radius'] * -0.46), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * -0.28, _0x926180['render']['radius'] * 0x0, _0x926180['render']['radius'] * -0.19, _0x926180['render']['radius'] * 0.46), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * -0.56, _0x926180['render']['radius'] * -0.39), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * -0.72, _0x926180['render']['radius'] * 0x0, _0x926180['render']['radius'] * -0.56, _0x926180['render']['radius'] * 0.39), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x1c9f2b, ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * -1.23, _0x926180['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x926180['render']['radius'] * -1.22, _0x926180['render']['radius'] * -0.63, _0x926180['render']['radius'] * -0.34, _0x926180['render']['radius'] * -0.27, _0x926180['render']['radius'] * -0.34, _0x926180['render']['radius'] * 0x0), ctx['bezierCurveTo'](_0x926180['render']['radius'] * -0.34, _0x926180['render']['radius'] * 0.27, _0x926180['render']['radius'] * -1.22, _0x926180['render']['radius'] * 0.63, _0x926180['render']['radius'] * -1.23, _0x926180['render']['radius'] * 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x455137, ctx['lineWidth'] = _0x926180['render']['radius'] * 0.08275862068965517, ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * -0.92, _0x926180['render']['radius'] * -0.13), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * -0x1, _0x926180['render']['radius'] * 0x0, _0x926180['render']['radius'] * -0.92, _0x926180['render']['radius'] * 0.13), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x926180['render']['radius'] * -0.66, _0x926180['render']['radius'] * -0.1), ctx['quadraticCurveTo'](_0x926180['render']['radius'] * -0.7, _0x926180['render']['radius'] * 0x0, _0x926180['render']['radius'] * -0.66, _0x926180['render']['radius'] * 0.1), ctx['stroke'](), ctx['closePath']();
            let _0x2e4d7d = enemyColor('#333333', _0x926180);
            ctx['lineJoin'] = 'round', ctx['rotate'](+Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x2e4d7d, ctx['strokeStyle'] = _0x2e4d7d, ctx['lineWidth'] = _0x926180['render']['radius'] / 6.5, ctx['moveTo'](0x0, _0x926180['render']['radius'] * 0.9 * 0.2), ctx['lineTo'](_0x926180['render']['radius'] * 0.2 * 0.9, _0x926180['render']['radius'] * 0x2 * 0.2), ctx['lineTo'](-_0x926180['render']['radius'] * 0.2 * 0.9, _0x926180['render']['radius'] * 0x2 * 0.2), ctx['lineTo'](0x0, _0x926180['render']['radius'] * 0.9 * 0.2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] / 0x2), ctx['rotate'](-_0x926180['render']['angle']);
        },
        'Sandstorm': _0x390ae6 => {
            let _0x3d900e = enemyColor('#d6ba36', _0x390ae6), _0x543490 = enemyColor('#dfc85c', _0x390ae6), _0x1cdd9a = enemyColor('#ebda8e', _0x390ae6);
            _0x390ae6['startRotation'] === undefined && (_0x390ae6['startRotation'] = 0x2 * Math['PI'] * Math['random']());
            _0x390ae6['renderRotation'] = performance['now']() / 0xc8 + _0x390ae6['startRotation'], ctx['rotate'](_0x390ae6['renderRotation']), ctx['fillStyle'] = _0x1cdd9a, ctx['strokeStyle'] = ctx['fillStyle'], ctx['lineWidth'] = _0x390ae6['render']['radius'] * 0.2, ctx['beginPath']();
            for (let _0x3d80ad = 0x7; _0x3d80ad--; _0x3d80ad > 0x0) {
                ctx['lineTo'](_0x390ae6['render']['radius'] * Math['cos'](_0x3d80ad * Math['PI'] / 0x3), _0x390ae6['render']['radius'] * Math['sin'](_0x3d80ad * Math['PI'] / 0x3));
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x390ae6['renderRotation']), ctx['rotate'](-_0x390ae6['renderRotation']), ctx['fillStyle'] = _0x543490, ctx['strokeStyle'] = ctx['fillStyle'], ctx['beginPath']();
            for (let _0x7fde74 = 0x7; _0x7fde74--; _0x7fde74 > 0x0) {
                ctx['lineTo'](_0x390ae6['render']['radius'] * Math['cos'](_0x7fde74 * Math['PI'] / 0x3) * 0x2 / 0x3, _0x390ae6['render']['radius'] * Math['sin'](_0x7fde74 * Math['PI'] / 0x3) * 0x2 / 0x3);
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x390ae6['renderRotation']), ctx['rotate'](_0x390ae6['renderRotation'] * 0.5), ctx['fillStyle'] = _0x3d900e, ctx['strokeStyle'] = ctx['fillStyle'], ctx['beginPath']();
            for (let _0xe34277 = 0x7; _0xe34277--; _0xe34277 > 0x0) {
                ctx['lineTo'](_0x390ae6['render']['radius'] * Math['cos'](_0xe34277 * Math['PI'] / 0x3) * 0x1 / 3.25, _0x390ae6['render']['radius'] * Math['sin'](_0xe34277 * Math['PI'] / 0x3) * 0x1 / 3.25);
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x390ae6['renderRotation'] * 0.5);
        },
        'Whirlpool': _0x113549 => {
            let _0x22bef8 = enemyColor('#23334b', _0x113549), _0x2668b0 = enemyColor('#2b3f5c', _0x113549), _0x197fd7 = enemyColor('#354e71', _0x113549);
            _0x113549['startRotation'] === undefined && (_0x113549['startRotation'] = 0x2 * Math['PI'] * Math['random']());
            _0x113549['renderRotation'] = performance['now']() / 0xaf + _0x113549['startRotation'], ctx['rotate'](_0x113549['renderRotation']), ctx['fillStyle'] = _0x197fd7, ctx['strokeStyle'] = ctx['fillStyle'], ctx['lineWidth'] = _0x113549['render']['radius'] * 0.2, ctx['beginPath']();
            for (let _0x11c3fc = 0xa; _0x11c3fc--; _0x11c3fc > 0x0) {
                ctx['lineTo'](_0x113549['render']['radius'] * Math['cos'](_0x11c3fc * Math['PI'] / 4.5), _0x113549['render']['radius'] * Math['sin'](_0x11c3fc * Math['PI'] / 4.5));
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x113549['renderRotation']), ctx['rotate'](_0x113549['renderRotation'] * 1.1), ctx['fillStyle'] = _0x2668b0, ctx['strokeStyle'] = ctx['fillStyle'], ctx['beginPath']();
            for (let _0x22915f = 0xa; _0x22915f--; _0x22915f > 0x0) {
                ctx['lineTo'](_0x113549['render']['radius'] * Math['cos'](_0x22915f * Math['PI'] / 4.5) * 0x2 / 0x3, _0x113549['render']['radius'] * Math['sin'](_0x22915f * Math['PI'] / 4.5) * 0x2 / 0x3);
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x113549['renderRotation'] * 1.1), ctx['rotate'](_0x113549['renderRotation'] * 1.2), ctx['fillStyle'] = _0x22bef8, ctx['strokeStyle'] = ctx['fillStyle'], ctx['beginPath']();
            for (let _0x57ab05 = 0xa; _0x57ab05--; _0x57ab05 > 0x0) {
                ctx['lineTo'](_0x113549['render']['radius'] * Math['cos'](_0x57ab05 * Math['PI'] / 4.5) * 0x1 / 3.25, _0x113549['render']['radius'] * Math['sin'](_0x57ab05 * Math['PI'] / 4.5) * 0x1 / 3.25);
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x113549['renderRotation'] * 1.2);
        },
        'Tree': _0x4f32dc => {
            let _0x419c74 = enemyColor('#257831', _0x4f32dc), _0x28df77 = enemyColor('#1e6228', _0x4f32dc), _0x368301 = enemyColor('#258031', _0x4f32dc), _0x1737b1 = 0x7, _0x997f58 = Math['PI'] * 0x2 / _0x1737b1;
            for (let _0x57572d = 0x0; _0x57572d < _0x4f32dc['data']['length']; _0x57572d += 0x2) {
                ctx['translate'](Math['cos'](_0x4f32dc['data'][_0x57572d]) * _0x4f32dc['render']['radius'] * 0.8, Math['sin'](_0x4f32dc['data'][_0x57572d]) * _0x4f32dc['render']['radius'] * 0.8), ctx['fillStyle'] = _0x419c74, ctx['strokeStyle'] = _0x28df77, ctx['lineWidth'] = _0x4f32dc['render']['radius'] * 0.2, ctx['beginPath']();
                for (let _0x744c88 = 0x0; _0x744c88 <= _0x1737b1; _0x744c88++) {
                    ctx['lineTo'](Math['cos'](_0x744c88 * _0x997f58) * _0x4f32dc['render']['radius'] * _0x4f32dc['data'][_0x57572d + 0x1], Math['sin'](_0x744c88 * _0x997f58) * _0x4f32dc['render']['radius'] * _0x4f32dc['data'][_0x57572d + 0x1]), ctx['lineTo'](Math['cos']((0.5 + _0x744c88) * _0x997f58) * _0x4f32dc['render']['radius'] * 0.72 * _0x4f32dc['data'][_0x57572d + 0x1], Math['sin']((0.5 + _0x744c88) * _0x997f58) * _0x4f32dc['render']['radius'] * 0.72 * _0x4f32dc['data'][_0x57572d + 0x1]);
                }
                ctx['closePath'](), ctx['fill'](), ctx['stroke'](), ctx['fillStyle'] = _0x368301, ctx['strokeStyle'] = _0x368301, ctx['lineWidth'] = _0x4f32dc['render']['radius'] * 0.05, ctx['beginPath']();
                for (let _0x447993 = 0x0; _0x447993 <= _0x1737b1; _0x447993++) {
                    ctx['lineTo'](Math['cos'](_0x447993 * _0x997f58) * _0x4f32dc['render']['radius'] * 0.45 * _0x4f32dc['data'][_0x57572d + 0x1], Math['sin'](_0x447993 * _0x997f58) * _0x4f32dc['render']['radius'] * 0.45 * _0x4f32dc['data'][_0x57572d + 0x1]), ctx['lineTo'](Math['cos']((0.5 + _0x447993) * _0x997f58) * _0x4f32dc['render']['radius'] * 0.33 * _0x4f32dc['data'][_0x57572d + 0x1], Math['sin']((0.5 + _0x447993) * _0x997f58) * _0x4f32dc['render']['radius'] * 0.33 * _0x4f32dc['data'][_0x57572d + 0x1]);
                }
                ctx['closePath'](), ctx['fill'](), ctx['stroke'](), ctx['translate'](-Math['cos'](_0x4f32dc['data'][_0x57572d]) * _0x4f32dc['render']['radius'] * 0.8, -Math['sin'](_0x4f32dc['data'][_0x57572d]) * _0x4f32dc['render']['radius'] * 0.8);
            }
            ctx['fillStyle'] = _0x419c74, ctx['strokeStyle'] = _0x28df77, ctx['lineWidth'] = _0x4f32dc['render']['radius'] * 0.2, ctx['beginPath']();
            for (let _0x1ebdc7 = 0x0; _0x1ebdc7 <= _0x1737b1; _0x1ebdc7++) {
                ctx['lineTo'](Math['cos'](_0x1ebdc7 * _0x997f58) * _0x4f32dc['render']['radius'], Math['sin'](_0x1ebdc7 * _0x997f58) * _0x4f32dc['render']['radius']), ctx['lineTo'](Math['cos']((0.5 + _0x1ebdc7) * _0x997f58) * _0x4f32dc['render']['radius'] * 0.72, Math['sin']((0.5 + _0x1ebdc7) * _0x997f58) * _0x4f32dc['render']['radius'] * 0.72);
            }
            ctx['closePath'](), ctx['fill'](), ctx['stroke'](), ctx['fillStyle'] = _0x368301, ctx['strokeStyle'] = _0x368301, ctx['lineWidth'] = _0x4f32dc['render']['radius'] * 0.05, ctx['beginPath']();
            for (let _0x2e1e7b = 0x0; _0x2e1e7b <= _0x1737b1; _0x2e1e7b++) {
                ctx['lineTo'](Math['cos'](_0x2e1e7b * _0x997f58) * _0x4f32dc['render']['radius'] * 0.45, Math['sin'](_0x2e1e7b * _0x997f58) * _0x4f32dc['render']['radius'] * 0.45), ctx['lineTo'](Math['cos']((0.5 + _0x2e1e7b) * _0x997f58) * _0x4f32dc['render']['radius'] * 0.33, Math['sin']((0.5 + _0x2e1e7b) * _0x997f58) * _0x4f32dc['render']['radius'] * 0.33);
            }
            ctx['closePath'](), ctx['fill'](), ctx['stroke']();
        },
        'Root': _0x7c1461 => {
            ctx['lineWidth'] = _0x7c1461['radius'] / 0x7, ctx['fillStyle'] = enemyColor('#8b5529', _0x7c1461), ctx['strokeStyle'] = enemyColor('#5c3617', _0x7c1461), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x7c1461['radius'] * 0.25, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            for (let _0x2ad130 = 0x7; _0x2ad130--; _0x2ad130 > 0x0) {
                let _0x4a17fb = _0x2ad130 * 0.897597901;
                ctx['beginPath'](), ctx['moveTo'](Math['cos'](_0x4a17fb) * _0x7c1461['radius'] * 0.25, Math['sin'](_0x4a17fb) * _0x7c1461['radius'] * 0.25), ctx['lineTo'](Math['cos'](_0x4a17fb) * _0x7c1461['radius'] * 0.6, Math['sin'](_0x4a17fb) * _0x7c1461['radius'] * 0.6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](Math['cos'](_0x4a17fb) * _0x7c1461['radius'] * 0.6, Math['sin'](_0x4a17fb) * _0x7c1461['radius'] * 0.6), ctx['lineTo'](Math['cos'](_0x4a17fb + 0.3) * _0x7c1461['radius'], Math['sin'](_0x4a17fb + 0.3) * _0x7c1461['radius']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](Math['cos'](_0x4a17fb) * _0x7c1461['radius'] * 0.6, Math['sin'](_0x4a17fb) * _0x7c1461['radius'] * 0.6), ctx['lineTo'](Math['cos'](_0x4a17fb - 0.3) * _0x7c1461['radius'], Math['sin'](_0x4a17fb - 0.3) * _0x7c1461['radius']), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            }
        },
        'Cactus': _0x328321 => {
            if (_0x328321['radius'] < 0x42 && _0x328321['render']['radius'] < 0x42) {
                const _0xbd8ef4 = _0x328321['render']['radius'], _0xc611e6 = _0x328321['render']['radius'] / 0x42;
                _0x328321['render']['radius'] = 0x42, ctx['scale'](_0xc611e6, _0xc611e6), normalEnemyRenderMap['Cactus'](_0x328321), ctx['scale'](0x1 / _0xc611e6, 0x1 / _0xc611e6), _0x328321['render']['radius'] = _0xbd8ef4;
                return;
            }
            _0x328321['data'][0x2] === !![] && (_0x328321['data'][0x1] += 0.03);
            ctx['rotate'](_0x328321['data'][0x1]);
            _0x328321['isMenuEnemy'] === !![] && ctx['rotate'](_0x328321['angle']);
            ctx['lineWidth'] = 6.6, ctx['strokeStyle'] = enemyColor('#288841', _0x328321), ctx['lineJoin'] = 'bevel';
            for (let _0x8b0331 = 0x0; _0x8b0331 < Math['PI'] * 0x2; _0x8b0331 += _0x328321['data'][0x0]) {
                ctx['fillStyle'] = enemyColor('#292929', _0x328321), ctx['beginPath'](), ctx['moveTo'](Math['cos'](_0x8b0331) * (_0x328321['render']['radius'] + 12.4), Math['sin'](_0x8b0331) * (_0x328321['render']['radius'] + 12.4)), ctx['lineTo'](Math['cos'](_0x8b0331 - 0.13) * (_0x328321['render']['radius'] * 0.8), Math['sin'](_0x8b0331 - 0.13) * (_0x328321['render']['radius'] * 0.8)), ctx['lineTo'](Math['cos'](_0x8b0331 + 0.13) * (_0x328321['render']['radius'] * 0.8), Math['sin'](_0x8b0331 + 0.13) * (_0x328321['render']['radius'] * 0.8)), ctx['lineTo'](Math['cos'](_0x8b0331) * (_0x328321['render']['radius'] + 12.4), Math['sin'](_0x8b0331) * (_0x328321['render']['radius'] + 12.4)), ctx['fill'](), ctx['closePath']();
            }
            ctx['lineJoin'] = 'round', ctx['fillStyle'] = enemyColor('#32a953', _0x328321), ctx['beginPath'](), ctx['moveTo'](_0x328321['render']['radius'], 0x0);
            for (let _0x1ecb8e = 0x0; _0x1ecb8e < Math['PI'] * 0x2; _0x1ecb8e += _0x328321['data'][0x0]) {
                ctx['quadraticCurveTo'](Math['cos'](_0x1ecb8e + _0x328321['data'][0x0] / 0x2) * (_0x328321['render']['radius'] * 0.9 - 0x7), Math['sin'](_0x1ecb8e + _0x328321['data'][0x0] / 0x2) * (_0x328321['render']['radius'] * 0.9 - 0x7), Math['cos'](_0x1ecb8e + _0x328321['data'][0x0]) * _0x328321['render']['radius'], Math['sin'](_0x1ecb8e + _0x328321['data'][0x0]) * _0x328321['render']['radius']);
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x328321['isMenuEnemy'] === !![] && ctx['rotate'](-_0x328321['angle']), ctx['rotate'](-_0x328321['data'][0x1]);
        },
        'Shiny\x20Cactus': _0x3f1871 => {
            if (_0x3f1871['radius'] < 0x42 && _0x3f1871['render']['radius'] < 0x42) {
                const _0x5b7f3b = _0x3f1871['render']['radius'], _0xea1ac1 = _0x3f1871['render']['radius'] / 0x42;
                _0x3f1871['render']['radius'] = 0x42, ctx['scale'](_0xea1ac1, _0xea1ac1), normalEnemyRenderMap['Shiny\x20Cactus'](_0x3f1871), ctx['scale'](0x1 / _0xea1ac1, 0x1 / _0xea1ac1), _0x3f1871['render']['radius'] = _0x5b7f3b;
                return;
            }
            _0x3f1871['data'][0x2] === !![] && (_0x3f1871['data'][0x1] += 0.03);
            ctx['rotate'](_0x3f1871['data'][0x1]);
            _0x3f1871['isMenuEnemy'] === !![] && ctx['rotate'](_0x3f1871['angle']);
            ctx['lineWidth'] = 6.6, ctx['strokeStyle'] = enemyColor('#97a530', _0x3f1871), ctx['lineJoin'] = 'bevel';
            for (let _0x27b1bf = 0x0; _0x27b1bf < Math['PI'] * 0x2; _0x27b1bf += _0x3f1871['data'][0x0]) {
                ctx['fillStyle'] = enemyColor('#292929', _0x3f1871), ctx['beginPath'](), ctx['moveTo'](Math['cos'](_0x27b1bf) * (_0x3f1871['render']['radius'] + 12.4), Math['sin'](_0x27b1bf) * (_0x3f1871['render']['radius'] + 12.4)), ctx['lineTo'](Math['cos'](_0x27b1bf - 0.13) * (_0x3f1871['render']['radius'] * 0.8), Math['sin'](_0x27b1bf - 0.13) * (_0x3f1871['render']['radius'] * 0.8)), ctx['lineTo'](Math['cos'](_0x27b1bf + 0.13) * (_0x3f1871['render']['radius'] * 0.8), Math['sin'](_0x27b1bf + 0.13) * (_0x3f1871['render']['radius'] * 0.8)), ctx['lineTo'](Math['cos'](_0x27b1bf) * (_0x3f1871['render']['radius'] + 12.4), Math['sin'](_0x27b1bf) * (_0x3f1871['render']['radius'] + 12.4)), ctx['fill'](), ctx['closePath']();
            }
            ctx['lineJoin'] = 'round', ctx['fillStyle'] = enemyColor('#c5d15a', _0x3f1871), ctx['beginPath'](), ctx['moveTo'](_0x3f1871['render']['radius'], 0x0);
            for (let _0x4af92d = 0x0; _0x4af92d < Math['PI'] * 0x2; _0x4af92d += _0x3f1871['data'][0x0]) {
                ctx['quadraticCurveTo'](Math['cos'](_0x4af92d + _0x3f1871['data'][0x0] / 0x2) * (_0x3f1871['render']['radius'] * 0.9 - 0x7), Math['sin'](_0x4af92d + _0x3f1871['data'][0x0] / 0x2) * (_0x3f1871['render']['radius'] * 0.9 - 0x7), Math['cos'](_0x4af92d + _0x3f1871['data'][0x0]) * _0x3f1871['render']['radius'], Math['sin'](_0x4af92d + _0x3f1871['data'][0x0]) * _0x3f1871['render']['radius']);
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), _0x3f1871['isMenuEnemy'] === !![] && ctx['rotate'](-_0x3f1871['angle']), ctx['rotate'](-_0x3f1871['data'][0x1]);
        },
        'MushroomMissile': _0x585e40 => {
            ctx['rotate'](_0x585e40['data'][0x0]), ctx['fillStyle'] = enemyColor('#9e7d5d', _0x585e40), ctx['strokeStyle'] = '#755c43', ctx['lineWidth'] = _0x585e40['radius'] * 0x1 / 0x2, ctx['rotate'](0xf * Math['PI'] / 0xb4), ctx['beginPath']();
            for (let _0x3710b1 = 0x0; _0x3710b1 <= 0x7; _0x3710b1++) {
                ctx['lineTo'](Math['cos'](_0x3710b1 * Math['PI'] * 0x2 / 0x7) * _0x585e40['radius'] * (Math['sin'](_0x3710b1) / 0xa + 0x1), Math['sin'](_0x3710b1 * Math['PI'] * 0x2 / 0x7) * _0x585e40['radius'] * (Math['sin'](_0x3710b1 + 17.5) / 0xa + 0x1));
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-0xf * Math['PI'] / 0xb4), ctx['rotate'](-_0x585e40['data'][0x0]);
        },
        'Sponge': _0x385515 => {
            if (_0x385515['data'][0x0] == 0x0)
                ctx['strokeStyle'] = enemyColor('#c1a37d', _0x385515), ctx['fillStyle'] = enemyColor('#efc99b', _0x385515);
            else {
                if (_0x385515['data'][0x0] == 0x1)
                    ctx['strokeStyle'] = enemyColor('#977d90', _0x385515), ctx['fillStyle'] = enemyColor('#ad90a3', _0x385515);
                else
                    _0x385515['data'][0x0] == 0x2 ? (ctx['strokeStyle'] = enemyColor('#9b81b9', _0x385515), ctx['fillStyle'] = enemyColor('#b798d1', _0x385515)) : (ctx['strokeStyle'] = enemyColor('#000000', _0x385515), ctx['fillStyle'] = 'hsl(' + Date['now']() % 0x168 + ',\x2050%,\x2050%)');
            }
            ctx['lineWidth'] = _0x385515['render']['radius'] / 0x6, ctx['rotate'](_0x385515['data'][0x1]), ctx['beginPath'](), ctx['moveTo'](_0x385515['render']['radius'], 0x0);
            for (let _0x3206ad = 0x0; _0x3206ad < Math['PI'] * 0x2; _0x3206ad += Math['PI'] * 0x2 / 0xf) {
                ctx['quadraticCurveTo'](Math['cos'](_0x3206ad) * _0x385515['render']['radius'] * 1.2, Math['sin'](_0x3206ad) * _0x385515['render']['radius'] * 1.2, Math['cos'](_0x3206ad + Math['PI'] * 0x1 / 0xf) * _0x385515['render']['radius'] * 0.9, Math['sin'](_0x3206ad + Math['PI'] * 0x1 / 0xf) * _0x385515['render']['radius'] * 0.9);
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = ctx['strokeStyle'];
            for (let _0x2b6045 = 0x0; _0x2b6045 < Math['PI'] * 0x2; _0x2b6045 += Math['PI'] * 0x2 / 0x5) {
                ctx['beginPath'](), ctx['arc'](Math['cos'](_0x2b6045) * _0x385515['render']['radius'] * 0.15, Math['sin'](_0x2b6045) * _0x385515['render']['radius'] * 0.15, _0x385515['render']['radius'] * 0.075, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](Math['cos'](_0x2b6045) * _0x385515['render']['radius'] * 0.35, Math['sin'](_0x2b6045) * _0x385515['render']['radius'] * 0.35, _0x385515['render']['radius'] * 0.115, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](Math['cos'](_0x2b6045) * _0x385515['render']['radius'] * 0.65, Math['sin'](_0x2b6045) * _0x385515['render']['radius'] * 0.65, _0x385515['render']['radius'] * 0.155, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            ctx['rotate'](-_0x385515['data'][0x1]);
        },
        'Mushroom': _0x1325d6 => {
            if (_0x1325d6['data'][0x0] == 0x0)
                ctx['strokeStyle'] = enemyColor('#9b3b2a', _0x1325d6), ctx['fillStyle'] = enemyColor('#c74f3b', _0x1325d6);
            else {
                if (_0x1325d6['data'][0x0] == 0x1)
                    ctx['strokeStyle'] = enemyColor('#804a2c', _0x1325d6), ctx['fillStyle'] = enemyColor('#a05a38', _0x1325d6);
                else
                    _0x1325d6['data'][0x0] == 0x2 ? (ctx['strokeStyle'] = enemyColor('#a0503a', _0x1325d6), ctx['fillStyle'] = enemyColor('#d46a4c', _0x1325d6)) : (ctx['strokeStyle'] = enemyColor('#000000', _0x1325d6), ctx['fillStyle'] = 'hsl(' + Date['now']() % 0x168 + ',\x2060%,\x2050%)');
            }
            ctx['lineWidth'] = _0x1325d6['render']['radius'] / 0x6, ctx['rotate'](_0x1325d6['data'][0x1]), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1325d6['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath']();
            const _0x3e20c6 = ctx['createRadialGradient'](0x0, 0x0, _0x1325d6['render']['radius'] * 0.2, 0x0, 0x0, _0x1325d6['render']['radius']);
            _0x3e20c6['addColorStop'](0x0, 'rgba(255,255,255,0.5)'), _0x3e20c6['addColorStop'](0x1, 'rgba(255,255,255,0)'), ctx['fillStyle'] = _0x3e20c6, ctx['arc'](0x0, 0x0, _0x1325d6['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#ffffff';
            const _0x3cfed2 = 0x7;
            for (let _0x1ed9f7 = 0x0; _0x1ed9f7 < _0x3cfed2; _0x1ed9f7++) {
                const _0x3eb085 = Math['PI'] * 0x2 / _0x3cfed2 * _0x1ed9f7 + _0x1325d6['data'][0x1] / 0x2, _0x12a7dc = _0x1325d6['render']['radius'] * 0.6;
                ctx['beginPath'](), ctx['arc'](Math['cos'](_0x3eb085) * _0x12a7dc, Math['sin'](_0x3eb085) * _0x12a7dc, _0x1325d6['render']['radius'] * 0.18, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            }
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1325d6['render']['radius'] * 0.15, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x1325d6['data'][0x1]);
        },
        'Stinger': _0x4f2106 => {
            ctx['fillStyle'] = enemyColor('#333333', _0x4f2106), ctx['strokeStyle'] = enemyColor('#292929', _0x4f2106), ctx['lineWidth'] = _0x4f2106['radius'] / 0x5, ctx['lineJoin'] = 'round', ctx['beginPath'](), ctx['moveTo'](_0x4f2106['radius'], 0x0), ctx['lineTo'](Math['cos'](0x2 / 0x3 * Math['PI']) * _0x4f2106['radius'], Math['sin'](0x2 / 0x3 * Math['PI']) * _0x4f2106['radius']), ctx['lineTo'](Math['cos'](0x4 / 0x3 * Math['PI']) * _0x4f2106['radius'], Math['sin'](0x4 / 0x3 * Math['PI']) * _0x4f2106['radius']), ctx['lineTo'](_0x4f2106['radius'], 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Pearl': _0x399036 => {
            ctx['lineWidth'] = _0x399036['render']['radius'] / 0x5, ctx['fillStyle'] = enemyColor('#fffcd1', _0x399036), ctx['strokeStyle'] = enemyColor('#cfcca9', _0x399036);
            let _0x23503f = enemyColor('#ffffff', _0x399036);
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x399036['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x23503f, ctx['beginPath'](), ctx['arc'](_0x399036['render']['radius'] * 0.3, -_0x399036['render']['radius'] * 0.3, _0x399036['render']['radius'] * 0.3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'PearlMissile': _0x2a4fd4 => {
            ctx['lineWidth'] = _0x2a4fd4['render']['radius'] / 0x5, ctx['fillStyle'] = enemyColor('#fffcd1', _0x2a4fd4), ctx['strokeStyle'] = enemyColor('#cfcca9', _0x2a4fd4);
            let _0x57fd17 = enemyColor('#ffffff', _0x2a4fd4);
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2a4fd4['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x57fd17, ctx['beginPath'](), ctx['arc'](_0x2a4fd4['render']['radius'] * 0.3, -_0x2a4fd4['render']['radius'] * 0.3, _0x2a4fd4['render']['radius'] * 0.3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'Shell': _0x1898bb => {
            ctx['strokeStyle'] = enemyColor('#ccb26e', _0x1898bb), ctx['fillStyle'] = enemyColor('#fcdd85', _0x1898bb), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x1898bb['radius'] * 0.1696969696969697, ctx['rotate'](_0x1898bb['render']['angle']), ctx['beginPath'](), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.52, _0x1898bb['render']['radius'] * -0.34), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.78, _0x1898bb['render']['radius'] * -0.5), ctx['quadraticCurveTo'](_0x1898bb['render']['radius'] * -0.61, _0x1898bb['render']['radius'] * 0x0, _0x1898bb['render']['radius'] * -0.76, _0x1898bb['render']['radius'] * 0.5), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.52, _0x1898bb['render']['radius'] * 0.34), ctx['lineTo'](_0x1898bb['render']['radius'] * 0.21, _0x1898bb['render']['radius'] * 0.95), ctx['arcTo'](_0x1898bb['render']['radius'] * 3.13, _0x1898bb['render']['radius'] * 0x0, _0x1898bb['render']['radius'] * 0.21, _0x1898bb['render']['radius'] * -0.95, _0x1898bb['radius'] * 0x1), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.52, _0x1898bb['render']['radius'] * -0.34), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.52, _0x1898bb['render']['radius'] * -0.34), ctx['arcTo'](_0x1898bb['render']['radius'] * -0.87, _0x1898bb['render']['radius'] * 0x0, _0x1898bb['render']['radius'] * -0.52, _0x1898bb['render']['radius'] * 0.34, _0x1898bb['radius'] * 0.45454545454545453), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x1898bb['radius'] * 0.12727272727272726, ctx['beginPath'](), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.31, _0x1898bb['render']['radius'] * 0.07), ctx['lineTo'](_0x1898bb['render']['radius'] * 0.48, _0x1898bb['render']['radius'] * 0.2), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.37, _0x1898bb['render']['radius'] * 0.16), ctx['lineTo'](_0x1898bb['render']['radius'] * 0.3, _0x1898bb['render']['radius'] * 0.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.31, _0x1898bb['render']['radius'] * -0.07), ctx['lineTo'](_0x1898bb['render']['radius'] * 0.48, _0x1898bb['render']['radius'] * -0.2), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x1898bb['render']['radius'] * -0.37, _0x1898bb['render']['radius'] * -0.16), ctx['lineTo'](_0x1898bb['render']['radius'] * 0.3, _0x1898bb['render']['radius'] * -0.5), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x1898bb['render']['angle']);
        },
        'Starfish': _0x14c11d => {
            _0x14c11d['render']['time'] += Math['sqrt']((_0x14c11d['render']['lastX'] - _0x14c11d['render']['x']) ** 0x2 + (_0x14c11d['render']['lastY'] - _0x14c11d['render']['y']) ** 0x2), _0x14c11d['render']['lastX'] = _0x14c11d['render']['x'], _0x14c11d['render']['lastY'] = _0x14c11d['render']['y'], ctx['rotate'](_0x14c11d['render']['time'] / 0x96), ctx['lineWidth'] = _0x14c11d['render']['radius'] / 0x6, ctx['strokeStyle'] = enemyColor('#aa403f', _0x14c11d), ctx['fillStyle'] = enemyColor('#d14f4d', _0x14c11d), ctx['lineJoin'] = 'round';
            let _0x1aa621 = [
                    0x0,
                    0x1,
                    0x2,
                    0x3,
                    0x4
                ], _0x39f029 = 0x0;
            _0x14c11d['hp'] < _0x14c11d['maxHp'] * 0.8 && (_0x1aa621 = [
                0x1,
                0x2,
                0x3,
                0x4
            ]);
            _0x14c11d['hp'] < _0x14c11d['maxHp'] * 0.6 && (_0x1aa621 = [
                0x1,
                0x3,
                0x4
            ]);
            _0x14c11d['hp'] < _0x14c11d['maxHp'] * 0.4 && (_0x1aa621 = [
                0x1,
                0x4
            ]);
            _0x14c11d['hp'] < _0x14c11d['maxHp'] * 0.2 && (_0x1aa621 = [0x4]);
            for (let _0x25b84d = 0x0; _0x25b84d < _0x14c11d['data'][0x0]['length']; _0x25b84d++) {
                _0x1aa621['includes'](_0x25b84d) ? _0x14c11d['data'][0x0][_0x25b84d] = interpolate(_0x14c11d['data'][0x0][_0x25b84d], 0x1, Math['min'](0.5 * dt / 16.66, 0x1)) : _0x14c11d['data'][0x0][_0x25b84d] = interpolate(_0x14c11d['data'][0x0][_0x25b84d], 0x0, Math['min'](0.5 * dt / 16.66, 0x1));
            }
            let _0x94d7a1 = Math['PI'] / 0x5;
            ctx['beginPath']();
            for (let _0x1f6703 = 0x0; _0x1f6703 < Math['PI'] * 0x2; _0x1f6703 += _0x94d7a1 * 0x2) {
                let _0xfab1e3 = 0x1 + _0x14c11d['data'][0x0][_0x39f029] * 0.6;
                _0x1f6703 == 0x0 && ctx['moveTo'](Math['cos'](_0x1f6703 - _0x94d7a1 * 1.8) * (_0x14c11d['render']['radius'] * 1.6), Math['sin'](_0x1f6703 - _0x94d7a1 * 1.8) * (_0x14c11d['render']['radius'] * 1.6)), ctx['quadraticCurveTo'](Math['cos'](_0x1f6703 - _0x94d7a1) * (_0x14c11d['render']['radius'] * 0.4), Math['sin'](_0x1f6703 - _0x94d7a1) * (_0x14c11d['render']['radius'] * 0.4), Math['cos'](_0x1f6703) * (_0x14c11d['render']['radius'] * _0xfab1e3) + Math['cos'](_0x1f6703 - Math['PI'] / 0x2) * (_0x14c11d['render']['radius'] * 0.2), Math['sin'](_0x1f6703) * (_0x14c11d['render']['radius'] * _0xfab1e3) + Math['sin'](_0x1f6703 - Math['PI'] / 0x2) * (_0x14c11d['render']['radius'] * 0.2)), ctx['arc'](Math['cos'](_0x1f6703) * (_0x14c11d['render']['radius'] * _0xfab1e3), Math['sin'](_0x1f6703) * (_0x14c11d['render']['radius'] * _0xfab1e3), _0x14c11d['render']['radius'] * 0.2, _0x1f6703 - Math['PI'] / 0x2, _0x1f6703 + Math['PI'] / 0x2), _0x39f029++;
            }
            ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = enemyColor('#d6766b', _0x14c11d), _0x39f029 = 0x0;
            for (let _0xe8b1fb = 0x0; _0xe8b1fb < Math['PI'] * 0x2; _0xe8b1fb += _0x94d7a1 * 0x2) {
                ctx['beginPath'](), ctx['arc'](Math['cos'](_0xe8b1fb) * (_0x14c11d['render']['radius'] * 0.5), Math['sin'](_0xe8b1fb) * (_0x14c11d['render']['radius'] * 0.5), _0x14c11d['render']['radius'] * 0.2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
                if (_0x14c11d['data'][0x0][_0x39f029] > 0.4) {
                    let _0x521280 = _0x14c11d['data'][0x0][_0x39f029] - 0.4, _0x1f14b9;
                    _0x521280 < 0.2 && (_0x1f14b9 = ctx['globalAlpha'], ctx['globalAlpha'] *= _0x521280 * 0x1 / 0.2), ctx['beginPath'](), ctx['arc'](Math['cos'](_0xe8b1fb) * (_0x14c11d['render']['radius'] * 0.94), Math['sin'](_0xe8b1fb) * (_0x14c11d['render']['radius'] * 0.94), _0x14c11d['render']['radius'] * 0.16, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), _0x521280 < 0.2 && (ctx['globalAlpha'] = _0x1f14b9);
                }
                if (_0x14c11d['data'][0x0][_0x39f029] > 0.7) {
                    let _0x44c7f9 = _0x14c11d['data'][0x0][_0x39f029] - 0.7, _0x6659b8;
                    _0x44c7f9 < 0.2 && (_0x6659b8 = ctx['globalAlpha'], ctx['globalAlpha'] *= _0x44c7f9 * 0x1 / 0.2), ctx['beginPath'](), ctx['arc'](Math['cos'](_0xe8b1fb) * (_0x14c11d['render']['radius'] * 1.3), Math['sin'](_0xe8b1fb) * (_0x14c11d['render']['radius'] * 1.3), _0x14c11d['render']['radius'] * 0.12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), _0x44c7f9 < 0.2 && (ctx['globalAlpha'] = _0x6659b8);
                }
                _0x39f029++;
            }
            ctx['rotate'](-_0x14c11d['render']['time'] / 0x96);
        },
        'Brisingida': _0x29b030 => {
            _0x29b030['render']['time'] += Math['sqrt']((_0x29b030['render']['lastX'] - _0x29b030['render']['x']) ** 0x2 + (_0x29b030['render']['lastY'] - _0x29b030['render']['y']) ** 0x2), _0x29b030['render']['lastX'] = _0x29b030['render']['x'], _0x29b030['render']['lastY'] = _0x29b030['render']['y'], ctx['rotate'](_0x29b030['render']['time'] / 0xc8), ctx['lineJoin'] = 'round', ctx['lineWidth'] = _0x29b030['render']['radius'] / 0x6, ctx['strokeStyle'] = enemyColor('#2d2b5e', _0x29b030), ctx['fillStyle'] = enemyColor('#3c366b', _0x29b030);
            const _0x5995f9 = 0.5 + 0.3 * Math['cos'](_0x29b030['render']['time'] / 0x3e8), _0xe4bbf9 = enemyColor('#4d3f73', _0x29b030);
            let _0x4835ad = [
                0x0,
                0x1,
                0x2,
                0x3,
                0x4,
                0x5,
                0x6
            ];
            if (_0x29b030['hp'] < _0x29b030['maxHp'] * 0.85)
                _0x4835ad = [
                    0x1,
                    0x2,
                    0x3,
                    0x4,
                    0x5,
                    0x6
                ];
            if (_0x29b030['hp'] < _0x29b030['maxHp'] * 0.7)
                _0x4835ad = [
                    0x1,
                    0x3,
                    0x4,
                    0x6
                ];
            if (_0x29b030['hp'] < _0x29b030['maxHp'] * 0.5)
                _0x4835ad = [
                    0x2,
                    0x4,
                    0x6
                ];
            if (_0x29b030['hp'] < _0x29b030['maxHp'] * 0.3)
                _0x4835ad = [
                    0x3,
                    0x6
                ];
            if (_0x29b030['hp'] < _0x29b030['maxHp'] * 0.15)
                _0x4835ad = [0x6];
            for (let _0x4ee6fd = 0x0; _0x4ee6fd < _0x29b030['data'][0x0]['length']; _0x4ee6fd++) {
                _0x4835ad['includes'](_0x4ee6fd) ? _0x29b030['data'][0x0][_0x4ee6fd] = interpolate(_0x29b030['data'][0x0][_0x4ee6fd], 0x1, Math['min'](0.3 * dt / 16.66, 0x1)) : _0x29b030['data'][0x0][_0x4ee6fd] = interpolate(_0x29b030['data'][0x0][_0x4ee6fd], 0x0, Math['min'](0.3 * dt / 16.66, 0x1));
            }
            let _0x3e3d8e = Math['PI'] * 0x2 / 0x7;
            ctx['beginPath']();
            const _0x500f5d = -_0x3e3d8e / 0x2, _0x478246 = _0x29b030['render']['radius'] * 1.4, _0x35f4c2 = Math['cos'](_0x500f5d) * _0x478246, _0x1ab0e3 = Math['sin'](_0x500f5d) * _0x478246;
            ctx['moveTo'](_0x35f4c2, _0x1ab0e3);
            for (let _0x758829 = 0x0; _0x758829 < 0x7; _0x758829++) {
                const _0x55b858 = _0x758829 * _0x3e3d8e;
                let _0x3f3d72 = 0x1 + _0x29b030['data'][0x0][_0x758829] * 0.8 + Math['sin'](_0x29b030['render']['time'] / 0xc8 + _0x55b858 * 0x2) * 0.05;
                const _0x3aeed8 = Math['cos'](_0x55b858) * (_0x29b030['render']['radius'] * _0x3f3d72), _0x30d76e = Math['sin'](_0x55b858) * (_0x29b030['render']['radius'] * _0x3f3d72);
                ctx['quadraticCurveTo'](Math['cos'](_0x55b858 - _0x3e3d8e / 0x3) * (_0x29b030['render']['radius'] * 0.5), Math['sin'](_0x55b858 - _0x3e3d8e / 0x3) * (_0x29b030['render']['radius'] * 0.5), _0x3aeed8, _0x30d76e);
                const _0x37257a = _0x29b030['render']['radius'] * 0.18;
                ctx['arc'](_0x3aeed8, _0x30d76e, _0x37257a, _0x55b858 - Math['PI'] / 0x2, _0x55b858 + Math['PI'] / 0x2);
                const _0xe2a156 = (_0x758829 + 0x1) * _0x3e3d8e - _0x3e3d8e / 0x2, _0x13019b = Math['cos'](_0xe2a156) * _0x478246, _0x3b01ac = Math['sin'](_0xe2a156) * _0x478246;
                ctx['lineTo'](_0x13019b, _0x3b01ac);
            }
            const _0x5b1b44 = _0x3e3d8e * 0x7 - _0x3e3d8e / 0x3;
            ctx['quadraticCurveTo'](Math['cos'](_0x5b1b44) * (_0x29b030['render']['radius'] * 0.5), Math['sin'](_0x5b1b44) * (_0x29b030['render']['radius'] * 0.5), _0x35f4c2, _0x1ab0e3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0xe4bbf9, ctx['globalAlpha'] *= _0x5995f9, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x29b030['render']['radius'] * 0.6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= _0x5995f9, legNumber = 0x0;
            for (let _0x5f4fa0 = 0x0; _0x5f4fa0 < Math['PI'] * 0x2; _0x5f4fa0 += _0x3e3d8e) {
                if (_0x29b030['data'][0x0][legNumber] > 0.5) {
                    let _0x328136 = (_0x29b030['data'][0x0][legNumber] - 0.5) * 0x2, _0x51c24f = Math['min'](0x1, _0x328136 * 0x2), _0x45dddb = _0x29b030['render']['radius'] * (1.2 + 0.4 * _0x328136), _0x210933 = ctx['globalAlpha'];
                    ctx['globalAlpha'] *= _0x51c24f * 0.8, ctx['fillStyle'] = enemyColor('#9cf4ff', _0x29b030), ctx['beginPath'](), ctx['arc'](Math['cos'](_0x5f4fa0) * _0x45dddb, Math['sin'](_0x5f4fa0) * _0x45dddb, _0x29b030['render']['radius'] * 0.15, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = _0x210933;
                }
                legNumber++;
            }
            ctx['rotate'](-_0x29b030['render']['time'] / 0xc8);
        },
        'Pufferfish': _0x2c477a => {
            ctx['rotate'](_0x2c477a['render']['angle']), ctx['lineJoin'] = 'round', ctx['strokeStyle'] = enemyColor('#c79e2b', _0x2c477a), ctx['fillStyle'] = enemyColor('#f5d76e', _0x2c477a), ctx['lineWidth'] = _0x2c477a['render']['radius'] / 0x6;
            let _0xc45d8c = 0x19, _0x5d92db = Math['floor'](_0xc45d8c * Math['max'](0.95 - _0x2c477a['hp'] / _0x2c477a['maxHp'], 0x0)), _0x773025 = Math['PI'] * 0x2 / _0xc45d8c;
            !_0x2c477a['data'] && (_0x2c477a['data'] = []);
            ;
            if (!_0x2c477a['data'][0x0])
                _0x2c477a['data'][0x0] = new Array(_0xc45d8c)['fill'](0x0);
            for (let _0x3422fc = 0x0; _0x3422fc < _0xc45d8c; _0x3422fc++) {
                _0x3422fc < _0x5d92db ? _0x2c477a['data'][0x0][_0x3422fc] = interpolate(_0x2c477a['data'][0x0][_0x3422fc], 0x1, Math['min'](0.5 * dt / 16.66, 0x1)) : _0x2c477a['data'][0x0][_0x3422fc] = interpolate(_0x2c477a['data'][0x0][_0x3422fc], 0x0, Math['min'](0.5 * dt / 16.66, 0x1));
            }
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2c477a['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = enemyColor('#f9e994', _0x2c477a), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2c477a['render']['radius'] * 0.6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['lineWidth'] = _0x2c477a['render']['radius'] / 0x8;
            for (let _0x48037d = 0x0; _0x48037d < _0xc45d8c; _0x48037d++) {
                const _0x406571 = _0x48037d * _0x773025;
                let _0x141ebc = _0x2c477a['data'][0x0][_0x48037d];
                if (_0x141ebc <= 0.01)
                    continue;
                let _0x19dbca = _0x2c477a['render']['radius'] * 0.9, _0x42abfc = _0x2c477a['render']['radius'] * (0.2 + _0x141ebc * 0.6), _0x174092 = _0x19dbca + _0x42abfc, _0x482dec;
                _0x141ebc < 0.3 && (_0x482dec = ctx['globalAlpha'], ctx['globalAlpha'] *= _0x141ebc / 0.3);
                ctx['beginPath'](), ctx['moveTo'](Math['cos'](_0x406571) * _0x19dbca, Math['sin'](_0x406571) * _0x19dbca), ctx['lineTo'](Math['cos'](_0x406571) * _0x174092, Math['sin'](_0x406571) * _0x174092), ctx['stroke'](), ctx['closePath']();
                if (_0x141ebc < 0.3)
                    ctx['globalAlpha'] = _0x482dec;
                const _0x3d0da5 = _0x2c477a['render']['radius'] * 0.09, _0x2b77e7 = Math['cos'](_0x406571) * _0x174092, _0x50917c = Math['sin'](_0x406571) * _0x174092, _0x2dae0f = _0x406571 + Math['PI'] / 0x2, _0x79dc0 = Math['cos'](_0x2dae0f) * (_0x3d0da5 / 0x2) + Math['cos'](_0x406571) * (_0x174092 - _0x2c477a['render']['radius'] * 0.1), _0x2486ce = Math['sin'](_0x2dae0f) * (_0x3d0da5 / 0x2) + Math['sin'](_0x406571) * (_0x174092 - _0x2c477a['render']['radius'] * 0.1), _0x344381 = Math['cos'](_0x2dae0f + Math['PI']) * (_0x3d0da5 / 0x2) + Math['cos'](_0x406571) * (_0x174092 - _0x2c477a['render']['radius'] * 0.1), _0x5384d2 = Math['sin'](_0x2dae0f + Math['PI']) * (_0x3d0da5 / 0x2) + Math['sin'](_0x406571) * (_0x174092 - _0x2c477a['render']['radius'] * 0.1);
                ctx['beginPath'](), ctx['moveTo'](_0x2b77e7, _0x50917c), ctx['lineTo'](_0x79dc0, _0x2486ce), ctx['lineTo'](_0x344381, _0x5384d2), ctx['closePath'](), ctx['fill'](), ctx['stroke']();
            }
            ctx['beginPath'](), ctx['moveTo'](-_0x2c477a['render']['radius'] * 0.55, -_0x2c477a['render']['radius'] * 0.45), ctx['quadraticCurveTo'](0x0, -_0x2c477a['render']['radius'] * 0.25, _0x2c477a['render']['radius'] * 0.55, -_0x2c477a['render']['radius'] * 0.45), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-_0x2c477a['render']['radius'] * 0.6, 0x0), ctx['quadraticCurveTo'](0x0, _0x2c477a['render']['radius'] * 0.15, _0x2c477a['render']['radius'] * 0.6, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-_0x2c477a['render']['radius'] * 0.55, _0x2c477a['render']['radius'] * 0.45), ctx['quadraticCurveTo'](0x0, _0x2c477a['render']['radius'] * 0.25, _0x2c477a['render']['radius'] * 0.55, _0x2c477a['render']['radius'] * 0.45), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.6, ctx['beginPath'](), ctx['moveTo'](-_0x2c477a['render']['radius'] * 0.4, _0x2c477a['render']['radius'] * 0.15), ctx['quadraticCurveTo'](0x0, _0x2c477a['render']['radius'] * 0.28, _0x2c477a['render']['radius'] * 0.4, _0x2c477a['render']['radius'] * 0.15), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1, ctx['rotate'](-_0x2c477a['render']['angle']);
        },
        'Crab': _0x321529 => {
            _0x321529['render']['time'] += Math['sqrt']((_0x321529['render']['lastX'] - _0x321529['render']['x']) ** 0x2 + (_0x321529['render']['lastY'] - _0x321529['render']['y']) ** 0x2), _0x321529['render']['lastX'] = _0x321529['render']['x'], _0x321529['render']['lastY'] = _0x321529['render']['y'];
            if (_0x321529['shockwaveTime']) {
                if (time < _0x321529['shockwaveTime'] + 0x3e8) {
                    let _0x2b1064 = ctx['globalAlpha'];
                    ctx['globalAlpha'] = 0x1 - (time - _0x321529['shockwaveTime']) / 0x3e8, ctx['fillStyle'] = 'white', ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x898, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = _0x2b1064;
                }
            }
            let _0x39e65a = enemyColor('#b15a3f', _0x321529), _0x4fc21b = enemyColor('#dc704b', _0x321529), _0x4ba154 = enemyColor('#4e2521', _0x321529);
            ctx['rotate'](_0x321529['render']['angle']), ctx['fillStyle'] = _0x4ba154, ctx['strokeStyle'] = _0x4ba154, ctx['lineWidth'] = _0x321529['radius'] * 0.09565217391304348;
            let _0x4c1374 = 0.69, _0x2d9e07 = -0.39;
            ctx['translate'](_0x321529['render']['radius'] * _0x4c1374, _0x321529['render']['radius'] * _0x2d9e07);
            let _0x347918 = Math['cos'](_0x321529['render']['time'] / 0x9) / 0x6;
            ctx['rotate'](_0x347918), ctx['beginPath'](), ctx['lineTo'](_0x321529['render']['radius'] * (0.45 - _0x4c1374), _0x321529['render']['radius'] * (-0.88 - _0x2d9e07)), ctx['quadraticCurveTo'](_0x321529['render']['radius'] * (1.03 - _0x4c1374), _0x321529['render']['radius'] * (-1.15 - _0x2d9e07), _0x321529['render']['radius'] * (1.25 - _0x4c1374), _0x321529['render']['radius'] * (-0.62 - _0x2d9e07)), ctx['lineTo'](_0x321529['render']['radius'] * (1.01 - _0x4c1374), _0x321529['render']['radius'] * (-0.77 - _0x2d9e07)), ctx['lineTo'](_0x321529['render']['radius'] * (1.11 - _0x4c1374), _0x321529['render']['radius'] * (-0.52 - _0x2d9e07)), ctx['quadraticCurveTo'](_0x321529['render']['radius'] * (0.85 - _0x4c1374), _0x321529['render']['radius'] * (-0.72 - _0x2d9e07), _0x321529['render']['radius'] * (0.7 - _0x4c1374), _0x321529['render']['radius'] * (-0.73 - _0x2d9e07)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x347918), ctx['translate'](-_0x321529['render']['radius'] * _0x4c1374, -_0x321529['render']['radius'] * _0x2d9e07), _0x4c1374 = 0.69, _0x2d9e07 = 0.39, ctx['translate'](_0x321529['render']['radius'] * _0x4c1374, _0x321529['render']['radius'] * _0x2d9e07), _0x347918 = -Math['cos'](_0x321529['render']['time'] / 0x9) / 0x6, ctx['rotate'](_0x347918), ctx['beginPath'](), ctx['lineTo'](_0x321529['render']['radius'] * (0.45 - _0x4c1374), _0x321529['render']['radius'] * (0.88 - _0x2d9e07)), ctx['quadraticCurveTo'](_0x321529['render']['radius'] * (1.03 - _0x4c1374), _0x321529['render']['radius'] * (1.15 - _0x2d9e07), _0x321529['render']['radius'] * (1.25 - _0x4c1374), _0x321529['render']['radius'] * (0.62 - _0x2d9e07)), ctx['lineTo'](_0x321529['render']['radius'] * (1.01 - _0x4c1374), _0x321529['render']['radius'] * (0.77 - _0x2d9e07)), ctx['lineTo'](_0x321529['render']['radius'] * (1.11 - _0x4c1374), _0x321529['render']['radius'] * (0.52 - _0x2d9e07)), ctx['quadraticCurveTo'](_0x321529['render']['radius'] * (0.85 - _0x4c1374), _0x321529['render']['radius'] * (0.72 - _0x2d9e07), _0x321529['render']['radius'] * (0.7 - _0x4c1374), _0x321529['render']['radius'] * (0.73 - _0x2d9e07)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x347918), ctx['translate'](-_0x321529['render']['radius'] * _0x4c1374, -_0x321529['render']['radius'] * _0x2d9e07), ctx['lineWidth'] = _0x321529['render']['radius'] / 0x4, ctx['rotate'](Math['PI'] / 0x2);
            for (let _0x556159 = 0x4; _0x556159--; _0x556159 > 0x0) {
                let _0x509747 = _0x556159 * 0.34906 - 0.34906 - 0.17453292 + Math['cos'](_0x321529['render']['time'] / 0xc + _0x556159) * 0.1;
                ctx['rotate'](_0x509747), ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](_0x321529['render']['radius'] * 1.5, 0x0), ctx['lineTo'](_0x321529['render']['radius'] * 1.7, _0x321529['render']['radius'] * _0x509747 / 0x3), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](-_0x321529['render']['radius'] * 1.5, 0x0), ctx['lineTo'](-_0x321529['render']['radius'] * 1.7, -_0x321529['render']['radius'] * _0x509747 / 0x3), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x509747);
            }
            ctx['rotate'](-Math['PI'] / 0x2), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['strokeStyle'] = _0x39e65a, ctx['fillStyle'] = _0x4fc21b, ctx['lineWidth'] = _0x321529['radius'] * 0.1826086956521739, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x321529['radius'] * 0.8695652173913043, _0x321529['radius'] * 1.1130434782608696, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x321529['render']['radius'] * -0.49, _0x321529['render']['radius'] * -0.39), ctx['quadraticCurveTo'](_0x321529['render']['radius'] * 0x0, _0x321529['render']['radius'] * -0.16, _0x321529['render']['radius'] * 0.49, _0x321529['render']['radius'] * -0.39), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x321529['render']['radius'] * -0.49, _0x321529['render']['radius'] * 0.39), ctx['quadraticCurveTo'](_0x321529['render']['radius'] * 0x0, _0x321529['render']['radius'] * 0.16, _0x321529['render']['radius'] * 0.49, _0x321529['render']['radius'] * 0.39), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x321529['render']['angle']);
        },
        'Fire\x20Ant\x20Burrow': _0x43f486 => {
            if (!_0x43f486['poppable']) {
                _0x43f486['render']['time'] += dt;
                let _0x27dbcf = Math['min']((_0x43f486['render']['time'] / 0x708) ** 0.5, 0x1), _0x207071 = ctx['globalAlpha'];
                ctx['globalAlpha'] *= _0x27dbcf, ctx['fillStyle'] = '#bf5532', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x43f486['render']['radius'] * _0x27dbcf, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#ab5133', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x43f486['render']['radius'] * 0x2 / 0x3 * _0x27dbcf, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#70321d', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x43f486['render']['radius'] * 0x1 / 0x3 * _0x27dbcf, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = _0x207071;
            } else
                ctx['fillStyle'] = '#b52d00', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x43f486['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#942500', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x43f486['render']['radius'] * 0x2 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = '#6b1b00', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x43f486['render']['radius'] * 0x1 / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        },
        'Locust': _0x15b8a3 => {
            _0x15b8a3['render']['legAnimation'] === undefined && (_0x15b8a3['originalRarity'] !== undefined ? _0x15b8a3['render']['legAnimation'] = 0x1 : _0x15b8a3['render']['legAnimation'] = 0x0);
            if (Math['sqrt'](_0x15b8a3['xv'] ** 0x2 + _0x15b8a3['yv'] ** 0x2) > 0.1)
                _0x15b8a3['render']['legAnimation'] = interpolate(_0x15b8a3['render']['legAnimation'], 0x1, 0.023);
            else
                performance['now']() - _0x15b8a3['locustLastMoveTime'] > 0xc8 && (_0x15b8a3['render']['legAnimation'] = interpolate(_0x15b8a3['render']['legAnimation'], 0x0, 0.023));
            _0x15b8a3['render']['time'] += Math['sqrt']((_0x15b8a3['render']['lastX'] - _0x15b8a3['render']['x']) ** 0x2 + (_0x15b8a3['render']['lastY'] - _0x15b8a3['render']['y']) ** 0x2);
            let _0x59d63c = enemyColor(blendColor('#fff0b8', '#c95b5b', _0x15b8a3['render']['legAnimation']), _0x15b8a3), _0x14f97c = enemyColor(blendColor('#cfc295', '#a64444', _0x15b8a3['render']['legAnimation']), _0x15b8a3), _0x545659 = enemyColor('#333333', _0x15b8a3);
            ctx['rotate'](_0x15b8a3['render']['angle'] + Math['PI'] / 0x2), ctx['strokeStyle'] = _0x545659, ctx['lineWidth'] = _0x15b8a3['render']['radius'] / 0x7;
            if (_0x15b8a3['render']['legAnimation'] > 0.01) {
                ctx['scale'](_0x15b8a3['render']['legAnimation'], _0x15b8a3['render']['legAnimation']);
                for (let _0x766670 = 0x4; _0x766670--; _0x766670 > 0x0) {
                    let _0x8160b = _0x766670 * 0.52359 - 0.52359 - 0.26179938 + Math['cos'](_0x15b8a3['render']['time'] / 0x11 + _0x766670) * 0.2;
                    ctx['rotate'](_0x8160b), ctx['beginPath'](), ctx['moveTo'](-_0x15b8a3['render']['radius'] * 0x1, 0x0), ctx['quadraticCurveTo'](-_0x15b8a3['render']['radius'], _0x15b8a3['render']['radius'] * 0x1 / 0x6, 0x0, 0x0), ctx['quadraticCurveTo'](_0x15b8a3['render']['radius'], -_0x15b8a3['render']['radius'] * 0x1 / 0x6, _0x15b8a3['render']['radius'] * 0x1, 0x0), ctx['stroke'](), ctx['rotate'](-_0x8160b), ctx['closePath']();
                }
                ctx['scale'](0x1 / _0x15b8a3['render']['legAnimation'], 0x1 / _0x15b8a3['render']['legAnimation']);
            }
            _0x15b8a3['render']['legAnimation'] > 0.01 && (ctx['fillStyle'] = _0x545659, ctx['beginPath'](), ctx['arc'](-_0x15b8a3['render']['radius'] * 0.22, -_0x15b8a3['render']['radius'] * 0.94 + (0x1 - _0x15b8a3['render']['legAnimation']) * _0x15b8a3['render']['radius'] * 0.42, _0x15b8a3['render']['radius'] * 0.24, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x15b8a3['render']['radius'] * 0.22, -_0x15b8a3['render']['radius'] * 0.94 + (0x1 - _0x15b8a3['render']['legAnimation']) * _0x15b8a3['render']['radius'] * 0.42, _0x15b8a3['render']['radius'] * 0.24, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = _0x14f97c, ctx['beginPath'](), ctx['moveTo'](_0x15b8a3['render']['radius'] * 0.12, -_0x15b8a3['render']['radius'] * 0.94), ctx['quadraticCurveTo'](-_0x15b8a3['render']['radius'] * 0.12, _0x15b8a3['render']['radius'] * -1.18 + (0x1 - _0x15b8a3['render']['legAnimation']) * _0x15b8a3['render']['radius'] * 0.21, -_0x15b8a3['render']['radius'] * 0.32, _0x15b8a3['render']['radius'] * -1.26 + (0x1 - _0x15b8a3['render']['legAnimation']) * _0x15b8a3['render']['radius'] * 0.42), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-_0x15b8a3['render']['radius'] * 0.12, -_0x15b8a3['render']['radius'] * 0.94), ctx['quadraticCurveTo'](_0x15b8a3['render']['radius'] * 0.12, _0x15b8a3['render']['radius'] * -1.18 + (0x1 - _0x15b8a3['render']['legAnimation']) * _0x15b8a3['render']['radius'] * 0.21, _0x15b8a3['render']['radius'] * 0.32, _0x15b8a3['render']['radius'] * -1.26 + (0x1 - _0x15b8a3['render']['legAnimation']) * _0x15b8a3['render']['radius'] * 0.42), ctx['stroke'](), ctx['closePath']());
            _0x15b8a3['render']['lastX'] = _0x15b8a3['render']['x'], _0x15b8a3['render']['lastY'] = _0x15b8a3['render']['y'], ctx['lineWidth'] = _0x15b8a3['render']['radius'] * 0.18, ctx['fillStyle'] = _0x59d63c, ctx['strokeStyle'] = _0x14f97c, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x15b8a3['render']['radius'] * 0x2 / 0x3, _0x15b8a3['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            if (_0x15b8a3['render']['legAnimation'] > 0.01) {
                let _0x267699 = ctx['globalAlpha'];
                _0x15b8a3['render']['legAnimation'] < 0.1 && (ctx['globalAlpha'] = (_0x15b8a3['render']['legAnimation'] - 0.01) * 0x1 / 0.09), ctx['lineWidth'] = _0x15b8a3['render']['radius'] * 0.21, ctx['beginPath'](), ctx['moveTo'](_0x15b8a3['render']['radius'] * -0.32, _0x15b8a3['render']['radius'] * -0.4), ctx['quadraticCurveTo'](0x0, _0x15b8a3['render']['radius'] * -0.18, _0x15b8a3['render']['radius'] * 0.32, _0x15b8a3['render']['radius'] * -0.4), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x15b8a3['render']['radius'] * -0.32, _0x15b8a3['render']['radius'] * 0.4), ctx['quadraticCurveTo'](0x0, _0x15b8a3['render']['radius'] * 0.18, _0x15b8a3['render']['radius'] * 0.32, _0x15b8a3['render']['radius'] * 0.4), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, _0x15b8a3['render']['radius'] * 0.22), ctx['lineTo'](0x0, _0x15b8a3['render']['radius'] * -0.22), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = _0x267699;
            }
            ctx['rotate'](-_0x15b8a3['render']['angle'] - Math['PI'] / 0x2);
        },
        'Bubble': _0x2f0855 => {
            ctx['rotate'](_0x2f0855['render']['angle']), ctx['lineWidth'] = _0x2f0855['render']['radius'] / 0xa, ctx['fillStyle'] = enemyColor('#ffffff', _0x2f0855), ctx['strokeStyle'] = enemyColor('#ffffff', _0x2f0855);
            let _0x3641fd = ctx['globalAlpha'];
            ctx['globalAlpha'] *= 0.6, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2f0855['render']['radius'] * 0x13 / 0x14, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.6, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2f0855['render']['radius'] * 0x12 / 0x14, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](-_0x2f0855['render']['radius'] * 0.45, 0x0, _0x2f0855['render']['radius'] * 0x1 / 0x4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = _0x3641fd, ctx['rotate'](-_0x2f0855['render']['angle']);
        },
        'Jellyfish': _0x34e7b7 => {
            let _0x450b08 = ctx['globalAlpha'];
            if (_0x34e7b7['lastShocked'] == 0x0) {
                _0x34e7b7['renderShock'] = [];
                for (let _0x18b22e = 0x0; _0x18b22e < _0x34e7b7['shock']['length']; _0x18b22e++) {
                    let _0xf1b6c8 = _0x34e7b7['shock'][_0x18b22e];
                    if (_0x18b22e == 0x0)
                        _0x34e7b7['renderShock']['push'](_0xf1b6c8);
                    else {
                        let _0x5761c5 = {};
                        _0x5761c5['x'] = _0xf1b6c8['x'] * 0x1 / 0x3 + _0x34e7b7['shock'][_0x18b22e - 0x1]['x'] * 0x2 / 0x3, _0x5761c5['y'] = _0xf1b6c8['y'] * 0x1 / 0x3 + _0x34e7b7['shock'][_0x18b22e - 0x1]['y'] * 0x2 / 0x3;
                        let _0x58e5a0 = {};
                        _0x58e5a0['x'] = _0xf1b6c8['x'] * 0x2 / 0x3 + _0x34e7b7['shock'][_0x18b22e - 0x1]['x'] * 0x1 / 0x3, _0x58e5a0['y'] = _0xf1b6c8['y'] * 0x2 / 0x3 + _0x34e7b7['shock'][_0x18b22e - 0x1]['y'] * 0x1 / 0x3;
                        let _0x172469 = Math['sqrt']((_0xf1b6c8['y'] - _0x34e7b7['shock'][_0x18b22e - 0x1]['y']) ** 0x2 + (_0xf1b6c8['x'] - _0x34e7b7['shock'][_0x18b22e - 0x1]['x']) ** 0x2);
                        _0x5761c5['x'] += Math['random']() * _0x172469 / 0x5 - _0x172469 / 0xa, _0x5761c5['y'] += Math['random']() * _0x172469 / 0x5 - _0x172469 / 0xa, _0x34e7b7['renderShock']['push'](_0x5761c5), _0x34e7b7['renderShock']['push'](_0x58e5a0), _0x34e7b7['renderShock']['push'](_0xf1b6c8);
                    }
                }
            }
            if (_0x34e7b7['shockwaveTime']) {
                if (time < _0x34e7b7['shockwaveTime'] + 0x3e8) {
                    let _0x374a5f = ctx['globalAlpha'];
                    ctx['globalAlpha'] = 0x1 - (time - _0x34e7b7['shockwaveTime']) / 0x3e8, ctx['fillStyle'] = 'white', ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x898, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = _0x374a5f;
                }
            }
            if (_0x34e7b7['splitShockwaveWarningTime']) {
                if (time < _0x34e7b7['splitShockwaveWarningTime'] + 0xfa0 && (!_0x34e7b7['splitShockwaveTime'] || time > _0x34e7b7['splitShockwaveTime'] + 0xfa0)) {
                    let _0x5232ad = ctx['globalAlpha'];
                    ctx['globalAlpha'] = (time - _0x34e7b7['splitShockwaveWarningTime']) / 0xfa0, ctx['strokeStyle'] = 'red', ctx['lineWidth'] = 0xbb8, ctx['lineCap'] = 'butt';
                    for (let _0x32a92d = 0x4; _0x32a92d--; _0x32a92d > 0x0) {
                        ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x5dc, _0x34e7b7['splitShockwaveAngle'] - 0.3 + _0x32a92d * Math['PI'] / 0x2, _0x34e7b7['splitShockwaveAngle'] + 0.3 + _0x32a92d * Math['PI'] / 0x2), ctx['stroke'](), ctx['closePath']();
                    }
                    ctx['globalAlpha'] = _0x5232ad, ctx['lineCap'] = 'round';
                }
            }
            if (_0x34e7b7['splitShockwaveTime']) {
                if (time < _0x34e7b7['splitShockwaveTime'] + 0x3e8) {
                    let _0x55da9a = ctx['globalAlpha'];
                    ctx['globalAlpha'] = 0.5 - (time - _0x34e7b7['splitShockwaveTime']) / 0x7d0, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = 0xbb8, ctx['lineCap'] = 'butt';
                    for (let _0x5b5385 = 0x4; _0x5b5385--; _0x5b5385 > 0x0) {
                        ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x5dc, _0x34e7b7['splitShockwaveAngle'] - 0.3 + _0x5b5385 * Math['PI'] / 0x2, _0x34e7b7['splitShockwaveAngle'] + 0.3 + _0x5b5385 * Math['PI'] / 0x2), ctx['stroke'](), ctx['closePath']();
                    }
                    ctx['globalAlpha'] = _0x55da9a, ctx['lineCap'] = 'round';
                }
            }
            _0x34e7b7['lastShocked'] += dt, _0x34e7b7['render']['time'] += dt, ctx['rotate'](_0x34e7b7['render']['angle']), ctx['lineWidth'] = _0x34e7b7['render']['radius'] / 0x6, ctx['fillStyle'] = enemyColor('#ffffff', _0x34e7b7), ctx['strokeStyle'] = enemyColor('#ffffff', _0x34e7b7), ctx['globalAlpha'] *= 0.5, ctx['rotate'](_0x34e7b7['render']['angle']);
            for (let _0x545494 = 0x8; _0x545494 > 0x0; _0x545494--) {
                let _0x2838b4 = Math['cos'](_0x34e7b7['render']['time'] / 0x1f4 + _0x545494 * Math['PI'] / 0x4);
                ctx['rotate'](Math['PI'] * 0x1 / 0x4 * _0x545494), ctx['beginPath'](), ctx['moveTo'](_0x34e7b7['render']['radius'] * 0.8, 0x0), ctx['quadraticCurveTo'](_0x34e7b7['render']['radius'] * 0.9, 0x0, _0x34e7b7['render']['radius'] * 1.5, _0x34e7b7['render']['radius'] * 0.2 * _0x2838b4), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x1 / 0x4 * _0x545494);
            }
            ctx['rotate'](-_0x34e7b7['render']['angle']), ctx['globalAlpha'] *= 1.3, ctx['lineWidth'] = _0x34e7b7['render']['radius'] / 0xc, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x34e7b7['render']['radius'] * 0x17 / 0x18, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x34e7b7['render']['radius'] * 0x16 / 0x18, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x34e7b7['render']['angle']);
            if (_0x34e7b7['lastShocked'] < 0x384) {
                ctx['globalAlpha'] = 0x1 - _0x34e7b7['lastShocked'] / 0x384, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = 0x3;
                _0x34e7b7['team'] == 'flower' && (ctx['strokeStyle'] = 'yellow', ctx['lineWidth'] = 0x6);
                ctx['beginPath']();
                for (let _0x487270 = 0x0; _0x487270 < _0x34e7b7['renderShock']['length']; _0x487270++) {
                    ctx['lineTo'](_0x34e7b7['renderShock'][_0x487270]['x'] - _0x34e7b7['render']['x'], _0x34e7b7['renderShock'][_0x487270]['y'] - _0x34e7b7['render']['y']);
                }
                ctx['stroke'](), ctx['closePath']();
            }
            ctx['globalAlpha'] = _0x450b08;
        },
        'Neuroflare': _0x1bde16 => {
            let _0x1bd19d = ctx['globalAlpha'];
            if (_0x1bde16['lastShocked'] == 0x0) {
                _0x1bde16['renderShock'] = [];
                for (let _0x45e49d = 0x0; _0x45e49d < _0x1bde16['shock']['length']; _0x45e49d++) {
                    let _0x5cd52c = _0x1bde16['shock'][_0x45e49d];
                    if (_0x45e49d == 0x0)
                        _0x1bde16['renderShock']['push'](_0x5cd52c);
                    else {
                        let _0x497aa9 = {};
                        _0x497aa9['x'] = _0x5cd52c['x'] * 0x1 / 0x3 + _0x1bde16['shock'][_0x45e49d - 0x1]['x'] * 0x2 / 0x3, _0x497aa9['y'] = _0x5cd52c['y'] * 0x1 / 0x3 + _0x1bde16['shock'][_0x45e49d - 0x1]['y'] * 0x2 / 0x3;
                        let _0x1414b2 = {};
                        _0x1414b2['x'] = _0x5cd52c['x'] * 0x2 / 0x3 + _0x1bde16['shock'][_0x45e49d - 0x1]['x'] * 0x1 / 0x3, _0x1414b2['y'] = _0x5cd52c['y'] * 0x2 / 0x3 + _0x1bde16['shock'][_0x45e49d - 0x1]['y'] * 0x1 / 0x3;
                        let _0x3d5efe = Math['sqrt']((_0x5cd52c['y'] - _0x1bde16['shock'][_0x45e49d - 0x1]['y']) ** 0x2 + (_0x5cd52c['x'] - _0x1bde16['shock'][_0x45e49d - 0x1]['x']) ** 0x2);
                        _0x497aa9['x'] += Math['random']() * _0x3d5efe / 0x5 - _0x3d5efe / 0xa, _0x497aa9['y'] += Math['random']() * _0x3d5efe / 0x5 - _0x3d5efe / 0xa, _0x1bde16['renderShock']['push'](_0x497aa9), _0x1bde16['renderShock']['push'](_0x1414b2), _0x1bde16['renderShock']['push'](_0x5cd52c);
                    }
                }
            }
            _0x1bde16['lastShocked'] += dt, _0x1bde16['render']['time'] += dt;
            const _0x1f53bc = _0x1bde16['render']['time'];
            ctx['rotate'](_0x1bde16['render']['angle']);
            let _0x5383a9, _0x15abe7, _0x580771;
            _0x5383a9 = enemyColor('#0a001a', _0x1bde16), _0x15abe7 = enemyColor('#1a0047', _0x1bde16), _0x580771 = enemyColor('#100033', _0x1bde16), ctx['fillStyle'] = _0x5383a9, ctx['strokeStyle'] = _0x580771, ctx['globalAlpha'] *= 0.8;
            const _0x189424 = 0.6 + 0.4 * Math['sin'](_0x1f53bc / 0x320);
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1bde16['render']['radius'] * 1.2 * _0x189424, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['lineWidth'] = _0x1bde16['render']['radius'] / 0x8;
            for (let _0x362c5d = 0x0; _0x362c5d < 0x9; _0x362c5d++) {
                const _0xb86024 = Math['sin'](_0x1f53bc / 0xfa + _0x362c5d * Math['PI'] / 0x4), _0x51c571 = 1.4 + 0.3 * Math['sin'](_0x1f53bc / 0x2bc + _0x362c5d);
                ctx['rotate'](Math['PI'] * 0x2 / 0x9 * _0x362c5d), ctx['beginPath'](), ctx['moveTo'](_0x1bde16['render']['radius'] * 0.6, 0x0), ctx['quadraticCurveTo'](_0x1bde16['render']['radius'] * (0.9 + _0xb86024 * 0.2), _0x1bde16['render']['radius'] * 0.3 * _0xb86024, _0x1bde16['render']['radius'] * _0x51c571, _0x1bde16['render']['radius'] * 0.6 * _0xb86024), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-(Math['PI'] * 0x2 / 0x9) * _0x362c5d);
            }
            ctx['rotate'](-_0x1bde16['render']['angle']);
            const _0x2d3f79 = 0.5 + 0.5 * Math['cos'](_0x1f53bc / 0x1f4);
            ctx['lineWidth'] = _0x1bde16['render']['radius'] / 0xe, ctx['strokeStyle'] = blendColor('#0e0724', '#ff1bce', _0x2d3f79), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1bde16['render']['radius'] * 0.95, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 1.3, ctx['fillStyle'] = _0x15abe7, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1bde16['render']['radius'] * (0.45 + 0.05 * Math['sin'](_0x1f53bc / 0x190)), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            if (_0x1bde16['lastShocked'] < 0x1c2) {
                const _0x364af5 = 0x1 - _0x1bde16['lastShocked'] / 0x1c2;
                ctx['globalAlpha'] = _0x364af5 * 0.9, ctx['strokeStyle'] = blendColor('#00ffff', '#ff00aa', Math['random']()), ctx['lineWidth'] = 0x3 + Math['random']() * 0x3;
                _0x1bde16['team'] == 'flower' && (ctx['strokeStyle'] = 'yellow', ctx['lineWidth'] = 0x6);
                ctx['beginPath']();
                for (let _0x3b80de = 0x0; _0x3b80de < _0x1bde16['renderShock']['length']; _0x3b80de++) {
                    ctx['lineTo'](_0x1bde16['renderShock'][_0x3b80de]['x'] - _0x1bde16['render']['x'], _0x1bde16['renderShock'][_0x3b80de]['y'] - _0x1bde16['render']['y']);
                }
                ctx['stroke'](), ctx['closePath']();
            }
            ctx['globalAlpha'] = _0x1bd19d;
        },
        'Leech': _0x51ea33 => {
            if (_0x51ea33['isInEnemyBox'] || _0x51ea33['isMenuEnemy']) {
                _0x51ea33['isMenuEnemy'] === !![] && ctx['rotate'](_0x51ea33['angle']);
                ctx['lineWidth'] = _0x51ea33['radius'] * 0.07, ctx['strokeStyle'] = '#292929', ctx['rotate'](-Math['PI'] * 0x3 / 0x4), ctx['beginPath'](), ctx['lineTo'](_0x51ea33['render']['radius'] * 0.93, _0x51ea33['render']['radius'] * -0.12), ctx['quadraticCurveTo'](_0x51ea33['render']['radius'] * 1.1, _0x51ea33['render']['radius'] * -0.12, _0x51ea33['render']['radius'] * 1.25, _0x51ea33['render']['radius'] * 0.16), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x51ea33['render']['radius'] * 0.91, _0x51ea33['render']['radius'] * 0.18), ctx['quadraticCurveTo'](_0x51ea33['render']['radius'] * 0.94, _0x51ea33['render']['radius'] * 0.24, _0x51ea33['render']['radius'] * 1.13, _0x51ea33['render']['radius'] * 0.3), ctx['stroke'](), ctx['closePath'](), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x51ea33['radius'] * 0.455, ctx['beginPath'](), ctx['lineTo'](_0x51ea33['render']['radius'] * -0.92, _0x51ea33['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x51ea33['render']['radius'] * 0x0, _0x51ea33['render']['radius'] * -0.55, _0x51ea33['render']['radius'] * 0.92, _0x51ea33['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x51ea33['radius'] * 0.305, ctx['strokeStyle'] = '#333333', ctx['beginPath'](), ctx['lineTo'](_0x51ea33['render']['radius'] * -0.92, _0x51ea33['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x51ea33['render']['radius'] * 0x0, _0x51ea33['render']['radius'] * -0.55, _0x51ea33['render']['radius'] * 0.92, _0x51ea33['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x3 / 0x4);
                _0x51ea33['isMenuEnemy'] === !![] && ctx['rotate'](-_0x51ea33['angle']);
                return;
            }
            if (!_0x51ea33['childIds']) {
                if (!_0x51ea33['isChild'])
                    _0x51ea33['isChild'] = ![];
                if (!_0x51ea33['parentId'] && _0x51ea33['isChild'] !== !![])
                    for (let _0x51c1ce in room['enemies']) {
                        let _0x161451 = room['enemies'][_0x51c1ce];
                        if (_0x161451['type'] !== _0x51ea33['type'])
                            continue;
                        _0x161451['childIds'] && (_0x161451['childIds']['includes'](_0x51ea33['id']) ? _0x51ea33['isChild'] = !![] : '');
                    }
                if (_0x51ea33['team'] === 'flower' || !_0x51ea33['isChild']) {
                    ctx['strokeStyle'] = enemyColor('#292929', _0x51ea33), ctx['lineWidth'] = _0x51ea33['render']['radius'] / 2.36, ctx['rotate'](_0x51ea33['render']['angle']);
                    const _0x2bfd7c = Math['cos'](time / 0x60) * _0x51ea33['render']['radius'] * 0.024;
                    ctx['rotate'](Math['PI'] / 0x6), ctx['beginPath'](), ctx['moveTo'](_0x51ea33['render']['radius'] * 0.48, _0x51ea33['render']['radius'] * 0.45), ctx['quadraticCurveTo'](_0x51ea33['render']['radius'] * 1.03 - _0x2bfd7c / 0x2, _0x51ea33['render']['radius'] * 0.03, _0x51ea33['render']['radius'] * 1.38 - _0x2bfd7c, -_0x51ea33['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x51ea33['render']['radius'] * 0.48, _0x51ea33['render']['radius'] * 0.45), ctx['quadraticCurveTo'](-_0x51ea33['render']['radius'] * 1.03 - _0x2bfd7c / 0x2, _0x51ea33['render']['radius'] * 0.03, -_0x51ea33['render']['radius'] * 1.38 + _0x2bfd7c, -_0x51ea33['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x2 / 0x3 - Math['PI'] / 0x6), ctx['rotate'](-_0x51ea33['render']['angle']), ctx['beginPath'](), ctx['lineWidth'] = _0x51ea33['render']['radius'] * 0x2, ctx['strokeStyle'] = enemyColor('#292929', _0x51ea33), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['lineWidth'] = _0x51ea33['render']['radius'] * 1.5, ctx['strokeStyle'] = enemyColor('#333333', _0x51ea33), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath']();
                }
                return;
            }
            const _0x49988d = ctx['globalAlpha'] !== 0x1;
            if (_0x49988d === !![]) {
                ctx['save']();
                let _0x9f3e26 = new Path2D();
                _0x9f3e26['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x9f3e26['arc'](0x0, 0x0, _0x51ea33['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x9f3e26, 'evenodd');
            }
            ctx['strokeStyle'] = enemyColor('#292929', _0x51ea33), ctx['lineWidth'] = _0x51ea33['render']['radius'] / 2.36, ctx['rotate'](_0x51ea33['render']['angle']);
            const _0x53c458 = Math['cos'](time / 0x60) * _0x51ea33['render']['radius'] * 0.024;
            ctx['rotate'](Math['PI'] / 0x6), ctx['beginPath'](), ctx['moveTo'](_0x51ea33['render']['radius'] * 0.48, _0x51ea33['render']['radius'] * 0.45), ctx['quadraticCurveTo'](_0x51ea33['render']['radius'] * 1.03 - _0x53c458 / 0x2, _0x51ea33['render']['radius'] * 0.03, _0x51ea33['render']['radius'] * 1.38 - _0x53c458, -_0x51ea33['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x51ea33['render']['radius'] * 0.48, _0x51ea33['render']['radius'] * 0.45), ctx['quadraticCurveTo'](-_0x51ea33['render']['radius'] * 1.03 - _0x53c458 / 0x2, _0x51ea33['render']['radius'] * 0.03, -_0x51ea33['render']['radius'] * 1.38 + _0x53c458, -_0x51ea33['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x2 / 0x3 - Math['PI'] / 0x6), ctx['rotate'](-_0x51ea33['render']['angle']);
            _0x49988d === !![] && ctx['restore']();
            ctx['lineWidth'] = _0x51ea33['render']['radius'] * 0x2, ctx['strokeStyle'] = enemyColor('#292929', _0x51ea33), ctx['beginPath'](), ctx['lineTo'](0x0, 0x0);
            for (let _0xc00599 of _0x51ea33['childIds']) {
                room['enemies'][_0xc00599] && ctx['lineTo'](room['enemies'][_0xc00599]['render']['x'] - _0x51ea33['render']['x'], room['enemies'][_0xc00599]['render']['y'] - _0x51ea33['render']['y']);
            }
            ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x51ea33['render']['radius'] * 1.5, ctx['strokeStyle'] = enemyColor('#333333', _0x51ea33), ctx['beginPath'](), ctx['lineTo'](0x0, 0x0);
            for (let _0x292618 of _0x51ea33['childIds']) {
                room['enemies'][_0x292618] && ctx['lineTo'](room['enemies'][_0x292618]['render']['x'] - _0x51ea33['render']['x'], room['enemies'][_0x292618]['render']['y'] - _0x51ea33['render']['y']);
            }
            ctx['stroke'](), ctx['closePath']();
        },
        'BudLeech': _0x2aadd3 => {
            normalEnemyRenderMap['Leech'](_0x2aadd3);
        },
        'Dark\x20Electric\x20Eel': _0x55e8c0 => {
            let _0x502cfc = ctx['globalAlpha'];
            if (_0x55e8c0['isInEnemyBox'] || _0x55e8c0['isMenuEnemy']) {
                _0x55e8c0['isMenuEnemy'] === !![] && ctx['rotate'](_0x55e8c0['angle']);
                ctx['lineWidth'] = _0x55e8c0['radius'] * 0.07, ctx['globalAlpha'] = _0x502cfc * 0.4, ctx['strokeStyle'] = '#48258a', ctx['rotate'](-Math['PI'] * 0x3 / 0x4), ctx['beginPath'](), ctx['lineTo'](_0x55e8c0['render']['radius'] * 0.93, _0x55e8c0['render']['radius'] * -0.12), ctx['quadraticCurveTo'](_0x55e8c0['render']['radius'] * 1.1, _0x55e8c0['render']['radius'] * -0.12, _0x55e8c0['render']['radius'] * 1.25, _0x55e8c0['render']['radius'] * 0.16), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x55e8c0['render']['radius'] * 0.91, _0x55e8c0['render']['radius'] * 0.18), ctx['quadraticCurveTo'](_0x55e8c0['render']['radius'] * 0.94, _0x55e8c0['render']['radius'] * 0.24, _0x55e8c0['render']['radius'] * 1.13, _0x55e8c0['render']['radius'] * 0.3), ctx['stroke'](), ctx['closePath'](), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x55e8c0['radius'] * 0.455, ctx['beginPath'](), ctx['lineTo'](_0x55e8c0['render']['radius'] * -0.92, _0x55e8c0['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x55e8c0['render']['radius'] * 0x0, _0x55e8c0['render']['radius'] * -0.55, _0x55e8c0['render']['radius'] * 0.92, _0x55e8c0['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = _0x502cfc * 0.4, ctx['lineWidth'] = _0x55e8c0['radius'] * 0.305, ctx['strokeStyle'] = '#48258a', ctx['beginPath'](), ctx['lineTo'](_0x55e8c0['render']['radius'] * -0.92, _0x55e8c0['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x55e8c0['render']['radius'] * 0x0, _0x55e8c0['render']['radius'] * -0.55, _0x55e8c0['render']['radius'] * 0.92, _0x55e8c0['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x3 / 0x4);
                _0x55e8c0['isMenuEnemy'] === !![] && ctx['rotate'](-_0x55e8c0['angle']);
                ctx['globalAlpha'] = _0x502cfc;
                return;
            }
            if (!_0x55e8c0['childIds']) {
                if (!_0x55e8c0['isChild'])
                    _0x55e8c0['isChild'] = ![];
                if (!_0x55e8c0['parentId'] && _0x55e8c0['isChild'] !== !![])
                    for (let _0x133146 in room['enemies']) {
                        let _0x5ee81c = room['enemies'][_0x133146];
                        if (_0x5ee81c['type'] !== _0x55e8c0['type'])
                            continue;
                        _0x5ee81c['childIds'] && (_0x5ee81c['childIds']['includes'](_0x55e8c0['id']) ? _0x55e8c0['isChild'] = !![] : '');
                    }
                if (_0x55e8c0['team'] === 'flower' || !_0x55e8c0['isChild']) {
                    ctx['strokeStyle'] = enemyColor('#48258a', '#FF0000', _0x55e8c0), ctx['lineWidth'] = _0x55e8c0['render']['radius'] / 2.36, ctx['rotate'](_0x55e8c0['render']['angle']);
                    const _0xd72691 = Math['cos'](time / 0x60) * _0x55e8c0['render']['radius'] * 0.024;
                    ctx['rotate'](Math['PI'] / 0x6), ctx['beginPath'](), ctx['moveTo'](_0x55e8c0['render']['radius'] * 0.48, _0x55e8c0['render']['radius'] * 0.45), ctx['quadraticCurveTo'](_0x55e8c0['render']['radius'] * 1.03 - _0xd72691 / 0x2, _0x55e8c0['render']['radius'] * 0.03, _0x55e8c0['render']['radius'] * 1.38 - _0xd72691, -_0x55e8c0['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x55e8c0['render']['radius'] * 0.48, _0x55e8c0['render']['radius'] * 0.45), ctx['quadraticCurveTo'](-_0x55e8c0['render']['radius'] * 1.03 - _0xd72691 / 0x2, _0x55e8c0['render']['radius'] * 0.03, -_0x55e8c0['render']['radius'] * 1.38 + _0xd72691, -_0x55e8c0['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x2 / 0x3 - Math['PI'] / 0x6), ctx['rotate'](-_0x55e8c0['render']['angle']), ctx['globalAlpha'] = _0x502cfc * 0.4, ctx['beginPath'](), ctx['lineWidth'] = _0x55e8c0['render']['radius'] * 0x2, ctx['strokeStyle'] = enemyColor('#48258a', _0x55e8c0), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['globalAlpha'] = _0x502cfc * 0.4, ctx['lineWidth'] = _0x55e8c0['render']['radius'] * 1.5, ctx['strokeStyle'] = enemyColor('#48258a', _0x55e8c0), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath']();
                }
                ctx['globalAlpha'] = _0x502cfc;
                return;
            }
            ctx['save']();
            let _0x27ee73 = new Path2D();
            _0x27ee73['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x27ee73['arc'](0x0, 0x0, _0x55e8c0['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x27ee73, 'evenodd'), ctx['strokeStyle'] = enemyColor('#48258a', _0x55e8c0), ctx['lineWidth'] = _0x55e8c0['render']['radius'] / 2.36, ctx['globalAlpha'] = _0x502cfc * 0.2, ctx['rotate'](_0x55e8c0['render']['angle']);
            const _0x48beea = Math['cos'](time / 0x60) * _0x55e8c0['render']['radius'] * 0.024;
            ctx['rotate'](Math['PI'] / 0x6), ctx['beginPath'](), ctx['moveTo'](_0x55e8c0['render']['radius'] * 0.48, _0x55e8c0['render']['radius'] * 0.45), ctx['quadraticCurveTo'](_0x55e8c0['render']['radius'] * 1.03 - _0x48beea / 0x2, _0x55e8c0['render']['radius'] * 0.03, _0x55e8c0['render']['radius'] * 1.38 - _0x48beea, -_0x55e8c0['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x55e8c0['render']['radius'] * 0.48, _0x55e8c0['render']['radius'] * 0.45), ctx['quadraticCurveTo'](-_0x55e8c0['render']['radius'] * 1.03 - _0x48beea / 0x2, _0x55e8c0['render']['radius'] * 0.03, -_0x55e8c0['render']['radius'] * 1.38 + _0x48beea, -_0x55e8c0['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x2 / 0x3 - Math['PI'] / 0x6), ctx['rotate'](-_0x55e8c0['render']['angle']), ctx['restore'](), ctx['lineWidth'] = _0x55e8c0['render']['radius'] * 0x2, ctx['strokeStyle'] = enemyColor('#48258a', _0x55e8c0), ctx['globalAlpha'] = _0x502cfc * 0.4, ctx['beginPath'](), ctx['lineTo'](0x0, 0x0);
            for (let _0x2373bf of _0x55e8c0['childIds']) {
                room['enemies'][_0x2373bf] && ctx['lineTo'](room['enemies'][_0x2373bf]['render']['x'] - _0x55e8c0['render']['x'], room['enemies'][_0x2373bf]['render']['y'] - _0x55e8c0['render']['y']);
            }
            ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x55e8c0['render']['radius'] * 1.5, ctx['strokeStyle'] = enemyColor('#48258a', _0x55e8c0), ctx['globalAlpha'] = _0x502cfc * 0.4, ctx['beginPath'](), ctx['lineTo'](0x0, 0x0);
            for (let _0x388130 of _0x55e8c0['childIds']) {
                room['enemies'][_0x388130] && ctx['lineTo'](room['enemies'][_0x388130]['render']['x'] - _0x55e8c0['render']['x'], room['enemies'][_0x388130]['render']['y'] - _0x55e8c0['render']['y']);
            }
            ctx['stroke'](), ctx['closePath']();
            if (_0x55e8c0['lastShocked'] == 0x0) {
                _0x55e8c0['renderShock'] = [];
                for (let _0x2b4bd9 = 0x0; _0x2b4bd9 < _0x55e8c0['shock']['length']; _0x2b4bd9++) {
                    let _0x192c56 = _0x55e8c0['shock'][_0x2b4bd9];
                    if (_0x2b4bd9 == 0x0)
                        _0x55e8c0['renderShock']['push'](_0x192c56);
                    else {
                        let _0x38b77e = {};
                        _0x38b77e['x'] = _0x192c56['x'] * 0x1 / 0x3 + _0x55e8c0['shock'][_0x2b4bd9 - 0x1]['x'] * 0x2 / 0x3, _0x38b77e['y'] = _0x192c56['y'] * 0x1 / 0x3 + _0x55e8c0['shock'][_0x2b4bd9 - 0x1]['y'] * 0x2 / 0x3;
                        let _0x1275e3 = {};
                        _0x1275e3['x'] = _0x192c56['x'] * 0x2 / 0x3 + _0x55e8c0['shock'][_0x2b4bd9 - 0x1]['x'] * 0x1 / 0x3, _0x1275e3['y'] = _0x192c56['y'] * 0x2 / 0x3 + _0x55e8c0['shock'][_0x2b4bd9 - 0x1]['y'] * 0x1 / 0x3;
                        let _0x6fa038 = Math['sqrt']((_0x192c56['y'] - _0x55e8c0['shock'][_0x2b4bd9 - 0x1]['y']) ** 0x2 + (_0x192c56['x'] - _0x55e8c0['shock'][_0x2b4bd9 - 0x1]['x']) ** 0x2);
                        _0x38b77e['x'] += Math['random']() * _0x6fa038 / 0x5 - _0x6fa038 / 0xa, _0x38b77e['y'] += Math['random']() * _0x6fa038 / 0x5 - _0x6fa038 / 0xa, _0x55e8c0['renderShock']['push'](_0x38b77e), _0x55e8c0['renderShock']['push'](_0x1275e3), _0x55e8c0['renderShock']['push'](_0x192c56);
                    }
                }
            }
            if (_0x55e8c0['lastShocked'] < 0x64) {
                ctx['globalAlpha'] = 0x1 - _0x55e8c0['lastShocked'] / 0x64, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = 0x5;
                _0x55e8c0['team'] == 'flower' && (ctx['strokeStyle'] = 'yellow', ctx['lineWidth'] = 0x6);
                ctx['beginPath']();
                for (let _0x4cf294 = 0x0; _0x4cf294 < _0x55e8c0['renderShock']['length']; _0x4cf294++) {
                    ctx['lineTo'](_0x55e8c0['renderShock'][_0x4cf294]['x'] - _0x55e8c0['render']['x'], _0x55e8c0['renderShock'][_0x4cf294]['y'] - _0x55e8c0['render']['y']);
                }
                ctx['stroke'](), ctx['closePath']();
            }
            ctx['globalAlpha'] = _0x502cfc;
        },
        'Electric\x20Eel': _0x41ef87 => {
            let _0x52b489 = ctx['globalAlpha'];
            if (_0x41ef87['isInEnemyBox'] || _0x41ef87['isMenuEnemy']) {
                _0x41ef87['isMenuEnemy'] === !![] && ctx['rotate'](_0x41ef87['angle']);
                ctx['lineWidth'] = _0x41ef87['radius'] * 0.07, ctx['globalAlpha'] = _0x52b489 * 0.4, ctx['strokeStyle'] = '#ffffff', ctx['rotate'](-Math['PI'] * 0x3 / 0x4), ctx['beginPath'](), ctx['lineTo'](_0x41ef87['render']['radius'] * 0.93, _0x41ef87['render']['radius'] * -0.12), ctx['quadraticCurveTo'](_0x41ef87['render']['radius'] * 1.1, _0x41ef87['render']['radius'] * -0.12, _0x41ef87['render']['radius'] * 1.25, _0x41ef87['render']['radius'] * 0.16), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x41ef87['render']['radius'] * 0.91, _0x41ef87['render']['radius'] * 0.18), ctx['quadraticCurveTo'](_0x41ef87['render']['radius'] * 0.94, _0x41ef87['render']['radius'] * 0.24, _0x41ef87['render']['radius'] * 1.13, _0x41ef87['render']['radius'] * 0.3), ctx['stroke'](), ctx['closePath'](), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x41ef87['radius'] * 0.455, ctx['beginPath'](), ctx['lineTo'](_0x41ef87['render']['radius'] * -0.92, _0x41ef87['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x41ef87['render']['radius'] * 0x0, _0x41ef87['render']['radius'] * -0.55, _0x41ef87['render']['radius'] * 0.92, _0x41ef87['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = _0x52b489 * 0.4, ctx['lineWidth'] = _0x41ef87['radius'] * 0.305, ctx['strokeStyle'] = '#ffffff', ctx['beginPath'](), ctx['lineTo'](_0x41ef87['render']['radius'] * -0.92, _0x41ef87['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x41ef87['render']['radius'] * 0x0, _0x41ef87['render']['radius'] * -0.55, _0x41ef87['render']['radius'] * 0.92, _0x41ef87['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x3 / 0x4);
                _0x41ef87['isMenuEnemy'] === !![] && ctx['rotate'](-_0x41ef87['angle']);
                ctx['globalAlpha'] = _0x52b489;
                return;
            }
            if (!_0x41ef87['childIds']) {
                if (!_0x41ef87['isChild'])
                    _0x41ef87['isChild'] = ![];
                if (!_0x41ef87['parentId'] && _0x41ef87['isChild'] !== !![])
                    for (let _0xf5420e in room['enemies']) {
                        let _0x164ce5 = room['enemies'][_0xf5420e];
                        if (_0x164ce5['type'] !== _0x41ef87['type'])
                            continue;
                        _0x164ce5['childIds'] && (_0x164ce5['childIds']['includes'](_0x41ef87['id']) ? _0x41ef87['isChild'] = !![] : '');
                    }
                if (_0x41ef87['team'] === 'flower' || !_0x41ef87['isChild']) {
                    ctx['strokeStyle'] = enemyColor('#ffffff', _0x41ef87), ctx['lineWidth'] = _0x41ef87['render']['radius'] / 2.36, ctx['rotate'](_0x41ef87['render']['angle']);
                    const _0x482e1f = Math['cos'](time / 0x60) * _0x41ef87['render']['radius'] * 0.024;
                    ctx['rotate'](Math['PI'] / 0x6), ctx['beginPath'](), ctx['moveTo'](_0x41ef87['render']['radius'] * 0.48, _0x41ef87['render']['radius'] * 0.45), ctx['quadraticCurveTo'](_0x41ef87['render']['radius'] * 1.03 - _0x482e1f / 0x2, _0x41ef87['render']['radius'] * 0.03, _0x41ef87['render']['radius'] * 1.38 - _0x482e1f, -_0x41ef87['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x41ef87['render']['radius'] * 0.48, _0x41ef87['render']['radius'] * 0.45), ctx['quadraticCurveTo'](-_0x41ef87['render']['radius'] * 1.03 - _0x482e1f / 0x2, _0x41ef87['render']['radius'] * 0.03, -_0x41ef87['render']['radius'] * 1.38 + _0x482e1f, -_0x41ef87['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x2 / 0x3 - Math['PI'] / 0x6), ctx['rotate'](-_0x41ef87['render']['angle']), ctx['globalAlpha'] = _0x52b489 * 0.4, ctx['beginPath'](), ctx['lineWidth'] = _0x41ef87['render']['radius'] * 0x2, ctx['strokeStyle'] = enemyColor('#ffffff', _0x41ef87), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['globalAlpha'] = _0x52b489 * 0.4, ctx['lineWidth'] = _0x41ef87['render']['radius'] * 1.5, ctx['strokeStyle'] = enemyColor('#ffffff', _0x41ef87), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath']();
                }
                ctx['globalAlpha'] = _0x52b489;
                return;
            }
            ctx['save']();
            let _0x4de43a = new Path2D();
            _0x4de43a['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x4de43a['arc'](0x0, 0x0, _0x41ef87['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x4de43a, 'evenodd'), ctx['strokeStyle'] = enemyColor('#ffffff', _0x41ef87), ctx['lineWidth'] = _0x41ef87['render']['radius'] / 2.36, ctx['globalAlpha'] = _0x52b489 * 0.2, ctx['rotate'](_0x41ef87['render']['angle']);
            const _0x1989cd = Math['cos'](time / 0x60) * _0x41ef87['render']['radius'] * 0.024;
            ctx['rotate'](Math['PI'] / 0x6), ctx['beginPath'](), ctx['moveTo'](_0x41ef87['render']['radius'] * 0.48, _0x41ef87['render']['radius'] * 0.45), ctx['quadraticCurveTo'](_0x41ef87['render']['radius'] * 1.03 - _0x1989cd / 0x2, _0x41ef87['render']['radius'] * 0.03, _0x41ef87['render']['radius'] * 1.38 - _0x1989cd, -_0x41ef87['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x41ef87['render']['radius'] * 0.48, _0x41ef87['render']['radius'] * 0.45), ctx['quadraticCurveTo'](-_0x41ef87['render']['radius'] * 1.03 - _0x1989cd / 0x2, _0x41ef87['render']['radius'] * 0.03, -_0x41ef87['render']['radius'] * 1.38 + _0x1989cd, -_0x41ef87['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x2 / 0x3 - Math['PI'] / 0x6), ctx['rotate'](-_0x41ef87['render']['angle']), ctx['restore'](), ctx['lineWidth'] = _0x41ef87['render']['radius'] * 0x2, ctx['strokeStyle'] = enemyColor('#ffffff', _0x41ef87), ctx['globalAlpha'] = _0x52b489 * 0.4, ctx['beginPath'](), ctx['lineTo'](0x0, 0x0);
            for (let _0x4a2696 of _0x41ef87['childIds']) {
                room['enemies'][_0x4a2696] && ctx['lineTo'](room['enemies'][_0x4a2696]['render']['x'] - _0x41ef87['render']['x'], room['enemies'][_0x4a2696]['render']['y'] - _0x41ef87['render']['y']);
            }
            ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x41ef87['render']['radius'] * 1.5, ctx['strokeStyle'] = enemyColor('#ffffff', _0x41ef87), ctx['globalAlpha'] = _0x52b489 * 0.4, ctx['beginPath'](), ctx['lineTo'](0x0, 0x0);
            for (let _0x13a9a5 of _0x41ef87['childIds']) {
                room['enemies'][_0x13a9a5] && ctx['lineTo'](room['enemies'][_0x13a9a5]['render']['x'] - _0x41ef87['render']['x'], room['enemies'][_0x13a9a5]['render']['y'] - _0x41ef87['render']['y']);
            }
            ctx['stroke'](), ctx['closePath']();
            if (_0x41ef87['lastShocked'] == 0x0) {
                _0x41ef87['renderShock'] = [];
                for (let _0x492f51 = 0x0; _0x492f51 < _0x41ef87['shock']['length']; _0x492f51++) {
                    let _0x4cdb6a = _0x41ef87['shock'][_0x492f51];
                    if (_0x492f51 == 0x0)
                        _0x41ef87['renderShock']['push'](_0x4cdb6a);
                    else {
                        let _0x2f0932 = {};
                        _0x2f0932['x'] = _0x4cdb6a['x'] * 0x1 / 0x3 + _0x41ef87['shock'][_0x492f51 - 0x1]['x'] * 0x2 / 0x3, _0x2f0932['y'] = _0x4cdb6a['y'] * 0x1 / 0x3 + _0x41ef87['shock'][_0x492f51 - 0x1]['y'] * 0x2 / 0x3;
                        let _0x40d684 = {};
                        _0x40d684['x'] = _0x4cdb6a['x'] * 0x2 / 0x3 + _0x41ef87['shock'][_0x492f51 - 0x1]['x'] * 0x1 / 0x3, _0x40d684['y'] = _0x4cdb6a['y'] * 0x2 / 0x3 + _0x41ef87['shock'][_0x492f51 - 0x1]['y'] * 0x1 / 0x3;
                        let _0x30d91b = Math['sqrt']((_0x4cdb6a['y'] - _0x41ef87['shock'][_0x492f51 - 0x1]['y']) ** 0x2 + (_0x4cdb6a['x'] - _0x41ef87['shock'][_0x492f51 - 0x1]['x']) ** 0x2);
                        _0x2f0932['x'] += Math['random']() * _0x30d91b / 0x5 - _0x30d91b / 0xa, _0x2f0932['y'] += Math['random']() * _0x30d91b / 0x5 - _0x30d91b / 0xa, _0x41ef87['renderShock']['push'](_0x2f0932), _0x41ef87['renderShock']['push'](_0x40d684), _0x41ef87['renderShock']['push'](_0x4cdb6a);
                    }
                }
            }
            if (_0x41ef87['lastShocked'] < 0x64) {
                ctx['globalAlpha'] = 0x1 - _0x41ef87['lastShocked'] / 0x64, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = 0x5;
                _0x41ef87['team'] == 'flower' && (ctx['strokeStyle'] = 'yellow', ctx['lineWidth'] = 0x6);
                ctx['beginPath']();
                for (let _0x207b24 = 0x0; _0x207b24 < _0x41ef87['renderShock']['length']; _0x207b24++) {
                    ctx['lineTo'](_0x41ef87['renderShock'][_0x207b24]['x'] - _0x41ef87['render']['x'], _0x41ef87['renderShock'][_0x207b24]['y'] - _0x41ef87['render']['y']);
                }
                ctx['stroke'](), ctx['closePath']();
            }
            ctx['globalAlpha'] = _0x52b489;
        },
        'Shiny\x20Electric\x20Eel': _0x4aaf08 => {
            let _0x5acac2 = ctx['globalAlpha'];
            if (_0x4aaf08['isInEnemyBox'] || _0x4aaf08['isMenuEnemy']) {
                _0x4aaf08['isMenuEnemy'] === !![] && ctx['rotate'](_0x4aaf08['angle']);
                ctx['lineWidth'] = _0x4aaf08['radius'] * 0.07, ctx['globalAlpha'] = _0x5acac2 * 0.4, ctx['strokeStyle'] = '#f9ef68', ctx['rotate'](-Math['PI'] * 0x3 / 0x4), ctx['beginPath'](), ctx['lineTo'](_0x4aaf08['render']['radius'] * 0.93, _0x4aaf08['render']['radius'] * -0.12), ctx['quadraticCurveTo'](_0x4aaf08['render']['radius'] * 1.1, _0x4aaf08['render']['radius'] * -0.12, _0x4aaf08['render']['radius'] * 1.25, _0x4aaf08['render']['radius'] * 0.16), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x4aaf08['render']['radius'] * 0.91, _0x4aaf08['render']['radius'] * 0.18), ctx['quadraticCurveTo'](_0x4aaf08['render']['radius'] * 0.94, _0x4aaf08['render']['radius'] * 0.24, _0x4aaf08['render']['radius'] * 1.13, _0x4aaf08['render']['radius'] * 0.3), ctx['stroke'](), ctx['closePath'](), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['lineWidth'] = _0x4aaf08['radius'] * 0.455, ctx['beginPath'](), ctx['lineTo'](_0x4aaf08['render']['radius'] * -0.92, _0x4aaf08['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x4aaf08['render']['radius'] * 0x0, _0x4aaf08['render']['radius'] * -0.55, _0x4aaf08['render']['radius'] * 0.92, _0x4aaf08['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = _0x5acac2 * 0.4, ctx['lineWidth'] = _0x4aaf08['radius'] * 0.305, ctx['strokeStyle'] = '#f9ef68', ctx['beginPath'](), ctx['lineTo'](_0x4aaf08['render']['radius'] * -0.92, _0x4aaf08['render']['radius'] * 0x0), ctx['quadraticCurveTo'](_0x4aaf08['render']['radius'] * 0x0, _0x4aaf08['render']['radius'] * -0.55, _0x4aaf08['render']['radius'] * 0.92, _0x4aaf08['render']['radius'] * 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x3 / 0x4);
                _0x4aaf08['isMenuEnemy'] === !![] && ctx['rotate'](-_0x4aaf08['angle']);
                ctx['globalAlpha'] = _0x5acac2;
                return;
            }
            if (!_0x4aaf08['childIds']) {
                if (!_0x4aaf08['isChild'])
                    _0x4aaf08['isChild'] = ![];
                if (!_0x4aaf08['parentId'] && _0x4aaf08['isChild'] !== !![])
                    for (let _0x1d3bb0 in room['enemies']) {
                        let _0xcb9d9a = room['enemies'][_0x1d3bb0];
                        if (_0xcb9d9a['type'] !== _0x4aaf08['type'])
                            continue;
                        _0xcb9d9a['childIds'] && (_0xcb9d9a['childIds']['includes'](_0x4aaf08['id']) ? _0x4aaf08['isChild'] = !![] : '');
                    }
                if (_0x4aaf08['team'] === 'flower' || !_0x4aaf08['isChild']) {
                    ctx['strokeStyle'] = enemyColor('#f9ef68', _0x4aaf08), ctx['lineWidth'] = _0x4aaf08['render']['radius'] / 2.36, ctx['rotate'](_0x4aaf08['render']['angle']);
                    const _0x2a5ab7 = Math['cos'](time / 0x60) * _0x4aaf08['render']['radius'] * 0.024;
                    ctx['rotate'](Math['PI'] / 0x6), ctx['beginPath'](), ctx['moveTo'](_0x4aaf08['render']['radius'] * 0.48, _0x4aaf08['render']['radius'] * 0.45), ctx['quadraticCurveTo'](_0x4aaf08['render']['radius'] * 1.03 - _0x2a5ab7 / 0x2, _0x4aaf08['render']['radius'] * 0.03, _0x4aaf08['render']['radius'] * 1.38 - _0x2a5ab7, -_0x4aaf08['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x4aaf08['render']['radius'] * 0.48, _0x4aaf08['render']['radius'] * 0.45), ctx['quadraticCurveTo'](-_0x4aaf08['render']['radius'] * 1.03 - _0x2a5ab7 / 0x2, _0x4aaf08['render']['radius'] * 0.03, -_0x4aaf08['render']['radius'] * 1.38 + _0x2a5ab7, -_0x4aaf08['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x2 / 0x3 - Math['PI'] / 0x6), ctx['rotate'](-_0x4aaf08['render']['angle']), ctx['globalAlpha'] = _0x5acac2 * 0.4, ctx['beginPath'](), ctx['lineWidth'] = _0x4aaf08['render']['radius'] * 0x2, ctx['strokeStyle'] = enemyColor('#f9ef68', _0x4aaf08), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['globalAlpha'] = _0x5acac2 * 0.4, ctx['lineWidth'] = _0x4aaf08['render']['radius'] * 1.5, ctx['strokeStyle'] = enemyColor('#f9ef68', _0x4aaf08), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath']();
                }
                ctx['globalAlpha'] = _0x5acac2;
                return;
            }
            ctx['save']();
            let _0x4e1371 = new Path2D();
            _0x4e1371['rect'](-0x2710, -0x2710, 0x4e20, 0x4e20), _0x4e1371['arc'](0x0, 0x0, _0x4aaf08['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['clip'](_0x4e1371, 'evenodd'), ctx['strokeStyle'] = enemyColor('#f9ef68', _0x4aaf08), ctx['lineWidth'] = _0x4aaf08['render']['radius'] / 2.36, ctx['globalAlpha'] = _0x5acac2 * 0.2, ctx['rotate'](_0x4aaf08['render']['angle']);
            const _0x266585 = Math['cos'](time / 0x60) * _0x4aaf08['render']['radius'] * 0.024;
            ctx['rotate'](Math['PI'] / 0x6), ctx['beginPath'](), ctx['moveTo'](_0x4aaf08['render']['radius'] * 0.48, _0x4aaf08['render']['radius'] * 0.45), ctx['quadraticCurveTo'](_0x4aaf08['render']['radius'] * 1.03 - _0x266585 / 0x2, _0x4aaf08['render']['radius'] * 0.03, _0x4aaf08['render']['radius'] * 1.38 - _0x266585, -_0x4aaf08['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x4aaf08['render']['radius'] * 0.48, _0x4aaf08['render']['radius'] * 0.45), ctx['quadraticCurveTo'](-_0x4aaf08['render']['radius'] * 1.03 - _0x266585 / 0x2, _0x4aaf08['render']['radius'] * 0.03, -_0x4aaf08['render']['radius'] * 1.38 + _0x266585, -_0x4aaf08['render']['radius'] * 0.48), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x2 / 0x3 - Math['PI'] / 0x6), ctx['rotate'](-_0x4aaf08['render']['angle']), ctx['restore'](), ctx['lineWidth'] = _0x4aaf08['render']['radius'] * 0x2, ctx['strokeStyle'] = enemyColor('#f9ef68', _0x4aaf08), ctx['globalAlpha'] = _0x5acac2 * 0.4, ctx['beginPath'](), ctx['lineTo'](0x0, 0x0);
            for (let _0x436e of _0x4aaf08['childIds']) {
                room['enemies'][_0x436e] && ctx['lineTo'](room['enemies'][_0x436e]['render']['x'] - _0x4aaf08['render']['x'], room['enemies'][_0x436e]['render']['y'] - _0x4aaf08['render']['y']);
            }
            ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x4aaf08['render']['radius'] * 1.5, ctx['strokeStyle'] = enemyColor('#f9ef68', _0x4aaf08), ctx['globalAlpha'] = _0x5acac2 * 0.4, ctx['beginPath'](), ctx['lineTo'](0x0, 0x0);
            for (let _0x372846 of _0x4aaf08['childIds']) {
                room['enemies'][_0x372846] && ctx['lineTo'](room['enemies'][_0x372846]['render']['x'] - _0x4aaf08['render']['x'], room['enemies'][_0x372846]['render']['y'] - _0x4aaf08['render']['y']);
            }
            ctx['stroke'](), ctx['closePath']();
            if (_0x4aaf08['lastShocked'] == 0x0) {
                _0x4aaf08['renderShock'] = [];
                for (let _0x342eea = 0x0; _0x342eea < _0x4aaf08['shock']['length']; _0x342eea++) {
                    let _0x585bc9 = _0x4aaf08['shock'][_0x342eea];
                    if (_0x342eea == 0x0)
                        _0x4aaf08['renderShock']['push'](_0x585bc9);
                    else {
                        let _0x1ed83f = {};
                        _0x1ed83f['x'] = _0x585bc9['x'] * 0x1 / 0x3 + _0x4aaf08['shock'][_0x342eea - 0x1]['x'] * 0x2 / 0x3, _0x1ed83f['y'] = _0x585bc9['y'] * 0x1 / 0x3 + _0x4aaf08['shock'][_0x342eea - 0x1]['y'] * 0x2 / 0x3;
                        let _0x8c427 = {};
                        _0x8c427['x'] = _0x585bc9['x'] * 0x2 / 0x3 + _0x4aaf08['shock'][_0x342eea - 0x1]['x'] * 0x1 / 0x3, _0x8c427['y'] = _0x585bc9['y'] * 0x2 / 0x3 + _0x4aaf08['shock'][_0x342eea - 0x1]['y'] * 0x1 / 0x3;
                        let _0x1def7f = Math['sqrt']((_0x585bc9['y'] - _0x4aaf08['shock'][_0x342eea - 0x1]['y']) ** 0x2 + (_0x585bc9['x'] - _0x4aaf08['shock'][_0x342eea - 0x1]['x']) ** 0x2);
                        _0x1ed83f['x'] += Math['random']() * _0x1def7f / 0x5 - _0x1def7f / 0xa, _0x1ed83f['y'] += Math['random']() * _0x1def7f / 0x5 - _0x1def7f / 0xa, _0x4aaf08['renderShock']['push'](_0x1ed83f), _0x4aaf08['renderShock']['push'](_0x8c427), _0x4aaf08['renderShock']['push'](_0x585bc9);
                    }
                }
            }
            if (_0x4aaf08['lastShocked'] < 0x64) {
                ctx['globalAlpha'] = 0x1 - _0x4aaf08['lastShocked'] / 0x64, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = 0x5;
                _0x4aaf08['team'] == 'flower' && (ctx['strokeStyle'] = 'yellow', ctx['lineWidth'] = 0x6);
                ctx['beginPath']();
                for (let _0x5cf8bc = 0x0; _0x5cf8bc < _0x4aaf08['renderShock']['length']; _0x5cf8bc++) {
                    ctx['lineTo'](_0x4aaf08['renderShock'][_0x5cf8bc]['x'] - _0x4aaf08['render']['x'], _0x4aaf08['renderShock'][_0x5cf8bc]['y'] - _0x4aaf08['render']['y']);
                }
                ctx['stroke'](), ctx['closePath']();
            }
            ctx['globalAlpha'] = _0x5acac2;
        },
        'Plastic': _0x1af3e2 => {
            ctx['lineWidth'] = _0x1af3e2['render']['radius'] / 0x8, ctx['fillStyle'] = enemyColor('#eeeeee', _0x1af3e2), ctx['strokeStyle'] = enemyColor('#cccccc', _0x1af3e2);
            !_0x1af3e2['data'] && (_0x1af3e2['data'] = []);
            ;
            !_0x1af3e2['data'][0x0] && (_0x1af3e2['data'][0x0] = 0x0);
            ;
            _0x1af3e2['data'][0x0] += Math['sin'](time / 0x7d0) / 0x12c, ctx['rotate'](_0x1af3e2['data'][0x0]), ctx['beginPath'](), ctx['lineTo'](_0x1af3e2['radius'] * -0x1, _0x1af3e2['radius'] * -0.75), ctx['lineTo'](_0x1af3e2['radius'] * -0.75, _0x1af3e2['radius'] * 0.5), ctx['lineTo'](0x0, 0x0), ctx['lineTo'](_0x1af3e2['radius'] * 0.5, 0x0), ctx['lineTo'](0x0, -_0x1af3e2['radius'] * 0.75), ctx['lineTo'](_0x1af3e2['radius'] * -0x1, _0x1af3e2['radius'] * -0.75), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = enemyColor('#097ce6', _0x1af3e2), ctx['strokeStyle'] = enemyColor('#3e47cc', _0x1af3e2), ctx['beginPath'](), ctx['lineTo'](-_0x1af3e2['radius'] * 0x1, _0x1af3e2['radius'] * 0.5), ctx['lineTo'](_0x1af3e2['radius'] * -0.5, _0x1af3e2['radius'] * -0.25), ctx['lineTo'](_0x1af3e2['radius'] * 0.5, _0x1af3e2['radius'] * 0.75), ctx['lineTo'](_0x1af3e2['radius'] * -0.25, _0x1af3e2['radius'] * 0.75), ctx['lineTo'](_0x1af3e2['radius'] * -0x1, _0x1af3e2['radius'] * 0.5), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = enemyColor('#30c006', _0x1af3e2), ctx['strokeStyle'] = enemyColor('#36d349', _0x1af3e2), ctx['beginPath'](), ctx['lineTo'](_0x1af3e2['radius'] * -0.5, _0x1af3e2['radius'] * -0x1), ctx['lineTo'](_0x1af3e2['radius'] * -0.75, _0x1af3e2['radius'] * -0.25), ctx['lineTo'](_0x1af3e2['radius'] * -0.5, _0x1af3e2['radius'] * 0.25), ctx['lineTo'](0x0, _0x1af3e2['radius'] * 0.25), ctx['lineTo'](0x0, _0x1af3e2['radius'] * -0.75), ctx['lineTo'](_0x1af3e2['radius'] * -0.5, _0x1af3e2['radius'] * -0x1), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = enemyColor('#9e9e9e', _0x1af3e2), ctx['strokeStyle'] = enemyColor('#c2c2c2', _0x1af3e2), ctx['beginPath'](), ctx['lineTo'](_0x1af3e2['radius'], _0x1af3e2['radius'] * -0x1), ctx['lineTo'](_0x1af3e2['radius'] * -0.25, _0x1af3e2['radius'] * -0.75), ctx['lineTo'](_0x1af3e2['radius'] * 0.25, _0x1af3e2['radius'] * 0.5), ctx['lineTo'](_0x1af3e2['radius'] * 0.75, 0x0), ctx['lineTo'](_0x1af3e2['radius'] * 0.5, _0x1af3e2['radius'] * -0.5), ctx['lineTo'](_0x1af3e2['radius'], -_0x1af3e2['radius']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = enemyColor('#964545', _0x1af3e2), ctx['strokeStyle'] = enemyColor('#833a3a', _0x1af3e2), ctx['lineTo'](_0x1af3e2['radius'], _0x1af3e2['radius'] * 0.75), ctx['lineTo'](_0x1af3e2['radius'] * 0.75, _0x1af3e2['radius'] * -0.25), ctx['lineTo'](-_0x1af3e2['radius'] * 0.5, _0x1af3e2['radius'] * 0.5), ctx['lineTo'](0x0, _0x1af3e2['radius'] * 0x1), ctx['lineTo'](_0x1af3e2['radius'] * 0x1, _0x1af3e2['radius'] * 0.75), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x1af3e2['data'][0x0]);
        },
        'Shiny\x20Plastic': _0x5d7e57 => {
            ctx['lineWidth'] = _0x5d7e57['render']['radius'] / 0x8, ctx['fillStyle'] = enemyColor('#d4d46a', _0x5d7e57), ctx['strokeStyle'] = enemyColor('#a3a350', _0x5d7e57);
            !_0x5d7e57['data'] && (_0x5d7e57['data'] = []);
            ;
            !_0x5d7e57['data'][0x0] && (_0x5d7e57['data'][0x0] = 0x0);
            ;
            _0x5d7e57['data'][0x0] += Math['sin'](time / 0x7d0) / 0x12c, ctx['rotate'](_0x5d7e57['data'][0x0]), ctx['beginPath'](), ctx['lineTo'](_0x5d7e57['radius'] * -0x1, _0x5d7e57['radius'] * -0.75), ctx['lineTo'](_0x5d7e57['radius'] * -0.75, _0x5d7e57['radius'] * 0.5), ctx['lineTo'](0x0, 0x0), ctx['lineTo'](_0x5d7e57['radius'] * 0.5, 0x0), ctx['lineTo'](0x0, -_0x5d7e57['radius'] * 0.75), ctx['lineTo'](_0x5d7e57['radius'] * -0x1, _0x5d7e57['radius'] * -0.75), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = enemyColor('#b8533a', _0x5d7e57), ctx['strokeStyle'] = enemyColor('#9e4731', _0x5d7e57), ctx['beginPath'](), ctx['lineTo'](-_0x5d7e57['radius'] * 0x1, _0x5d7e57['radius'] * 0.5), ctx['lineTo'](_0x5d7e57['radius'] * -0.5, _0x5d7e57['radius'] * -0.25), ctx['lineTo'](_0x5d7e57['radius'] * 0.5, _0x5d7e57['radius'] * 0.75), ctx['lineTo'](_0x5d7e57['radius'] * -0.25, _0x5d7e57['radius'] * 0.75), ctx['lineTo'](_0x5d7e57['radius'] * -0x1, _0x5d7e57['radius'] * 0.5), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = enemyColor('#cca104', _0x5d7e57), ctx['strokeStyle'] = enemyColor('#a88503', _0x5d7e57), ctx['beginPath'](), ctx['lineTo'](_0x5d7e57['radius'] * -0.5, _0x5d7e57['radius'] * -0x1), ctx['lineTo'](_0x5d7e57['radius'] * -0.75, _0x5d7e57['radius'] * -0.25), ctx['lineTo'](_0x5d7e57['radius'] * -0.5, _0x5d7e57['radius'] * 0.25), ctx['lineTo'](0x0, _0x5d7e57['radius'] * 0.25), ctx['lineTo'](0x0, _0x5d7e57['radius'] * -0.75), ctx['lineTo'](_0x5d7e57['radius'] * -0.5, _0x5d7e57['radius'] * -0x1), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = enemyColor('#ffea00', _0x5d7e57), ctx['strokeStyle'] = enemyColor('#b5a921', _0x5d7e57), ctx['beginPath'](), ctx['lineTo'](_0x5d7e57['radius'], _0x5d7e57['radius'] * -0x1), ctx['lineTo'](_0x5d7e57['radius'] * -0.25, _0x5d7e57['radius'] * -0.75), ctx['lineTo'](_0x5d7e57['radius'] * 0.25, _0x5d7e57['radius'] * 0.5), ctx['lineTo'](_0x5d7e57['radius'] * 0.75, 0x0), ctx['lineTo'](_0x5d7e57['radius'] * 0.5, _0x5d7e57['radius'] * -0.5), ctx['lineTo'](_0x5d7e57['radius'], -_0x5d7e57['radius']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = enemyColor('#ab3737', _0x5d7e57), ctx['strokeStyle'] = enemyColor('#8a2c2c', _0x5d7e57), ctx['lineTo'](_0x5d7e57['radius'], _0x5d7e57['radius'] * 0.75), ctx['lineTo'](_0x5d7e57['radius'] * 0.75, _0x5d7e57['radius'] * -0.25), ctx['lineTo'](-_0x5d7e57['radius'] * 0.5, _0x5d7e57['radius'] * 0.5), ctx['lineTo'](0x0, _0x5d7e57['radius'] * 0x1), ctx['lineTo'](_0x5d7e57['radius'] * 0x1, _0x5d7e57['radius'] * 0.75), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x5d7e57['data'][0x0]);
        },
        'PeasMissile': _0x409139 => {
            ctx['lineWidth'] = _0x409139['render']['radius'] / 0x3, ctx['fillStyle'] = enemyColor('#8ac255', _0x409139), ctx['strokeStyle'] = enemyColor('#709d45', _0x409139), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x409139['render']['radius'] * 0x5 / 0x6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'GrapesMissile': _0x57385a => {
            ctx['lineWidth'] = _0x57385a['render']['radius'] / 0x3, ctx['fillStyle'] = enemyColor('#ce76db', _0x57385a), ctx['strokeStyle'] = enemyColor('#a760b1', _0x57385a), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x57385a['render']['radius'] * 0x5 / 0x6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'BiggestDesertMissile': _0xd4e227 => {
            ctx['lineWidth'] = _0xd4e227['render']['radius'] / 0x6, ctx['fillStyle'] = enemyColor('#877c2e', _0xd4e227), ctx['strokeStyle'] = enemyColor('#59521e', _0xd4e227), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xd4e227['render']['radius'] * 0xb / 0xc, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'BigDesertMissile': _0x3b87c0 => {
            ctx['lineWidth'] = _0x3b87c0['render']['radius'] / 0x6, ctx['fillStyle'] = enemyColor('#877c2e', _0x3b87c0), ctx['strokeStyle'] = enemyColor('#59521e', _0x3b87c0), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3b87c0['render']['radius'] * 0xb / 0xc, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Dummy': _0x399d91 => {
            ctx['lineWidth'] = _0x399d91['render']['radius'] / 0x3, ctx['fillStyle'] = enemyColor('#696969', _0x399d91), ctx['strokeStyle'] = enemyColor('#404040', _0x399d91), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x399d91['render']['radius'] * 0x5 / 0x6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Sea\x20Urchin': _0x229701 => {
            ctx['lineWidth'] = _0x229701['render']['radius'] / 0x6, _0x229701['render']['time'] += dt, ctx['fillStyle'] = enemyColor('#452930', _0x229701), ctx['strokeStyle'] = enemyColor('#341f24', _0x229701);
            let _0x2cb6b6 = ctx['globalAlpha'];
            ctx['globalAlpha'] = _0x2cb6b6 * 0.1, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x229701['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = _0x2cb6b6, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x229701['render']['radius'] * 0x1 / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](_0x229701['render']['angle']);
            for (let _0xef632e = 0x12; _0xef632e > 0x0; _0xef632e--) {
                let _0x7cf7b6 = Math['cos'](_0x229701['render']['time'] / 0x1f4 + _0xef632e * Math['PI'] / 1.45) / 0x4;
                ctx['rotate'](Math['PI'] * 0x1 / 0x9 * _0xef632e), ctx['beginPath'](), ctx['moveTo'](_0x229701['render']['radius'] * 0.4, 0x0), ctx['lineTo'](_0x229701['render']['radius'] * (1.2 + _0x7cf7b6), 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] * 0x1 / 0x9 * _0xef632e);
            }
            ctx['rotate'](-_0x229701['render']['angle']);
        },
        'Invincible\x20Urchin': _0xd2345 => {
            enemyRenderMap['Sea\x20Urchin'](_0xd2345);
        },
        'Lilypad': _0x51dc4b => {
            ctx['lineWidth'] = _0x51dc4b['render']['radius'] * 0.15;
            let _0x3d43bd = enemyColor('#39b54a', _0x51dc4b), _0x12b928 = enemyColor('#2e933c', _0x51dc4b), _0x4465a3 = enemyColor('#33a443', _0x51dc4b);
            ctx['rotate'](_0x51dc4b['data'][0x1]), ctx['fillStyle'] = _0x4465a3, ctx['strokeStyle'] = _0x12b928, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x51dc4b['render']['radius'], 0x0, Math['PI'] * _0x51dc4b['data'][0x0]), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x3d43bd, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x51dc4b['render']['radius'] * 0.66, 0x0, Math['PI'] * _0x51dc4b['data'][0x0]), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x51dc4b['render']['radius'], 0x0, Math['PI'] * _0x51dc4b['data'][0x0]), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x51dc4b['data'][0x1]);
        },
        'Flowering\x20Lilypad': _0x53b75e => {
            ctx['lineWidth'] = _0x53b75e['render']['radius'] * 0.15;
            let _0x5eec2d = enemyColor('#39b54a', _0x53b75e), _0x55cea4 = enemyColor('#2e933c', _0x53b75e), _0x1487dc = enemyColor('#33a443', _0x53b75e), _0x275a04 = enemyColor('#ff94c9', _0x53b75e), _0x345761 = enemyColor('#cf78a3', _0x53b75e), _0xaa2fed = enemyColor('#ffe419', _0x53b75e), _0x4aa0b5 = enemyColor('#cfb914', _0x53b75e);
            ctx['rotate'](_0x53b75e['data'][0x1]), ctx['fillStyle'] = _0x1487dc, ctx['strokeStyle'] = _0x55cea4, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x53b75e['render']['radius'], 0x0, Math['PI'] * _0x53b75e['data'][0x0]), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x5eec2d, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x53b75e['render']['radius'] * 0.66, 0x0, Math['PI'] * _0x53b75e['data'][0x0]), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x53b75e['render']['radius'], 0x0, Math['PI'] * _0x53b75e['data'][0x0]), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x275a04, ctx['strokeStyle'] = _0x345761;
            for (let _0x23c046 = 0x0; _0x23c046 < 0x8; _0x23c046++) {
                ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['quadraticCurveTo'](_0x53b75e['render']['radius'] * 0.5, _0x53b75e['render']['radius'] * 0.25, _0x53b75e['render']['radius'] * 0.75, 0x0), ctx['quadraticCurveTo'](_0x53b75e['render']['radius'] * 0.5, _0x53b75e['render']['radius'] * -0.25, 0x0, 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] / 0x4);
            }
            ctx['fillStyle'] = _0xaa2fed, ctx['strokeStyle'] = _0x4aa0b5, ctx['lineWidth'] = _0x53b75e['render']['radius'] * 0.075, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x53b75e['render']['radius'] * 0.1, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x53b75e['data'][0x1]);
        },
        'Shiny\x20Lilypad': _0x13a76e => {
            ctx['lineWidth'] = _0x13a76e['render']['radius'] * 0.15;
            let _0x520fb9 = enemyColor('#ebeb34', _0x13a76e), _0x3612da = enemyColor('#c0c02a', _0x13a76e), _0x2948ee = enemyColor('#d5d52f', _0x13a76e);
            ctx['fillStyle'] = _0x2948ee, ctx['strokeStyle'] = _0x3612da;
            let _0x12f2f0 = Math['PI'] - Math['PI'] * _0x13a76e['data'][0x0] / 0x2, _0x8c85d2 = Math['PI'] + Math['PI'] * _0x13a76e['data'][0x0] / 0x2;
            ctx['rotate'](_0x13a76e['render']['angle']), ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x13a76e['render']['radius'], _0x12f2f0, _0x8c85d2), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x520fb9, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x13a76e['render']['radius'] * 0.66, _0x12f2f0, _0x8c85d2), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x13a76e['render']['radius'], _0x12f2f0, _0x8c85d2), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x13a76e['render']['angle']);
        },
        'Tick': _0x3ea994 => {
            _0x3ea994['render']['time'] += Math['sqrt']((_0x3ea994['render']['lastX'] - _0x3ea994['render']['x']) ** 0x2 + (_0x3ea994['render']['lastY'] - _0x3ea994['render']['y']) ** 0x2) * (0x1 - Math['sqrt'](_0x3ea994['render']['radius'] / 142.5) + 0.5) * 0x5, _0x3ea994['render']['lastX'] = _0x3ea994['render']['x'], _0x3ea994['render']['lastY'] = _0x3ea994['render']['y'];
            let _0x2d114c = enemyColor('#695118', _0x3ea994), _0x349216 = enemyColor('#554213', _0x3ea994);
            ctx['strokeStyle'] = '#292929', ctx['lineWidth'] = _0x3ea994['render']['radius'] * 0.41, ctx['rotate'](_0x3ea994['render']['angle']), ctx['translate'](_0x3ea994['render']['radius'] * -0.15, 0x0);
            let _0x3bafc7 = Math['cos'](time / 0xb4 + _0x3ea994['render']['time'] / 0x3c) * 0.05;
            ctx['beginPath'](), ctx['moveTo'](_0x3ea994['render']['radius'] * 0.62, _0x3ea994['render']['radius'] * -0.45), ctx['rotate'](_0x3bafc7), ctx['quadraticCurveTo'](_0x3ea994['render']['radius'] * 0.93, _0x3ea994['render']['radius'] * -0.59, _0x3ea994['render']['radius'] * 1.53, _0x3ea994['render']['radius'] * -0.31), ctx['rotate'](-_0x3bafc7), ctx['moveTo'](_0x3ea994['render']['radius'] * 0.62, _0x3ea994['render']['radius'] * 0.45), ctx['rotate'](-_0x3bafc7), ctx['quadraticCurveTo'](_0x3ea994['render']['radius'] * 0.93, _0x3ea994['render']['radius'] * 0.59, _0x3ea994['render']['radius'] * 1.53, _0x3ea994['render']['radius'] * 0.31), ctx['rotate'](_0x3bafc7), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x2d114c, ctx['strokeStyle'] = _0x349216, ctx['fillStyle'] = _0x2d114c, ctx['strokeStyle'] = _0x349216, ctx['beginPath'](), ctx['arc'](_0x3ea994['render']['radius'] * 0.15, _0x3ea994['render']['radius'] * 0x0, _0x3ea994['render']['radius'] * 0.89, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['translate'](_0x3ea994['render']['radius'] * 0.15, 0x0), ctx['rotate'](-_0x3ea994['render']['angle']);
        },
        'Coconut': _0x2f6b3e => {
            let _0x3f6c16 = enemyColor('#4f412d', _0x2f6b3e), _0x340dbb = enemyColor('#403425', _0x2f6b3e);
            ctx['fillStyle'] = _0x3f6c16, ctx['strokeStyle'] = _0x340dbb, ctx['lineWidth'] = _0x2f6b3e['render']['radius'] * 0.15, ctx['rotate'](_0x2f6b3e['data']), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2f6b3e['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x340dbb, ctx['beginPath'](), ctx['arc'](0x0, _0x2f6b3e['render']['radius'] * 0.75, _0x2f6b3e['render']['radius'] * 0.15, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x2f6b3e['render']['radius'] * 0.2, _0x2f6b3e['render']['radius'] * 0.5, _0x2f6b3e['render']['radius'] * 0.15, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x2f6b3e['render']['radius'] * -0.2, _0x2f6b3e['render']['radius'] * 0.5, _0x2f6b3e['render']['radius'] * 0.15, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
            for (let _0x5c8d65 = 0x0; _0x5c8d65 < 0x32; _0x5c8d65++) {
                ctx['beginPath'](), ctx['moveTo'](0x0, _0x2f6b3e['render']['radius']), ctx['lineTo'](0x0, _0x2f6b3e['render']['radius'] * 1.1), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x32);
            }
            ctx['rotate'](-_0x2f6b3e['data']);
        },
        'default': _0x6c5988 => {
            ctx['lineWidth'] = _0x6c5988['render']['radius'] / 0x3, ctx['fillStyle'] = enemyColor('#ffffff', _0x6c5988), ctx['strokeStyle'] = enemyColor('#000000', _0x6c5988), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x6c5988['render']['radius'] * 0x5 / 0x6, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        },
        'Ruby': _0xa1efe2 => {
            let _0x232771 = performance['now']() / 0x1f4;
            if (!_0xa1efe2['baseAngle'])
                _0xa1efe2['baseAngle'] = _0xa1efe2['angle'];
            ctx['rotate'](_0xa1efe2['baseAngle'] + _0x232771), ctx['beginPath'](), ctx['fillStyle'] = enemyColor('#e03f3f', _0xa1efe2), ctx['strokeStyle'] = enemyColor('#a12222', _0xa1efe2), ctx['lineWidth'] = _0xa1efe2['render']['radius'] * 0.2, ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x3e53f2 = 0x0; _0x3e53f2 <= 0x3; _0x3e53f2++) {
                ctx['lineTo'](Math['cos'](_0x3e53f2 * Math['PI'] * 0x2 / 0x3) * _0xa1efe2['render']['radius'], Math['sin'](_0x3e53f2 * Math['PI'] * 0x2 / 0x3) * _0xa1efe2['render']['radius']);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = enemyColor(blendColor('#e03f3f', '#ffffff', 0.3), _0xa1efe2), ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x470e4a = 0x0; _0x470e4a <= 0x3; _0x470e4a++) {
                ctx['lineTo'](Math['cos'](_0x470e4a * Math['PI'] * 0x2 / 0x3) * _0xa1efe2['render']['radius'] * 0.4, Math['sin'](_0x470e4a * Math['PI'] * 0x2 / 0x3) * _0xa1efe2['render']['radius'] * 0.4);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0xa1efe2['baseAngle'] - _0x232771);
        },
        'Shiny\x20Ruby': _0x739f8e => {
            let _0x3fc393 = performance['now']() / 0x1f4;
            if (!_0x739f8e['baseAngle'])
                _0x739f8e['baseAngle'] = _0x739f8e['angle'];
            ctx['rotate'](_0x739f8e['baseAngle'] + _0x3fc393), ctx['beginPath'](), ctx['fillStyle'] = enemyColor('#e0e03f', _0x739f8e), ctx['strokeStyle'] = enemyColor('#9fac27', _0x739f8e), ctx['lineWidth'] = _0x739f8e['render']['radius'] * 0.2, ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x21ecee = 0x0; _0x21ecee <= 0x3; _0x21ecee++) {
                ctx['lineTo'](Math['cos'](_0x21ecee * Math['PI'] * 0x2 / 0x3) * _0x739f8e['render']['radius'], Math['sin'](_0x21ecee * Math['PI'] * 0x2 / 0x3) * _0x739f8e['render']['radius']);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = enemyColor(blendColor('#e9e174', '#ffffff', 0.3), _0x739f8e), ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x4d6538 = 0x0; _0x4d6538 <= 0x3; _0x4d6538++) {
                ctx['lineTo'](Math['cos'](_0x4d6538 * Math['PI'] * 0x2 / 0x3) * _0x739f8e['render']['radius'] * 0.4, Math['sin'](_0x4d6538 * Math['PI'] * 0x2 / 0x3) * _0x739f8e['render']['radius'] * 0.4);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x739f8e['baseAngle'] - _0x3fc393);
        },
        'Dauber': _0x3b1f1d => {
            let _0x52dff6 = enemyColor('#eaa749', _0x3b1f1d), _0x3251d6 = enemyColor('#333333', _0x3b1f1d);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x3b1f1d['render']['angle'] + Math['PI'] / 0x2), ctx['strokeStyle'] = _0x3251d6, ctx['fillStyle'] = _0x3251d6, ctx['lineWidth'] = _0x3b1f1d['render']['radius'] / 0x6, ctx['beginPath'](), ctx['moveTo'](0x0, _0x3b1f1d['render']['radius'] * 1.4), ctx['lineTo'](-_0x3b1f1d['render']['radius'] * 0.16, _0x3b1f1d['render']['radius'] * 0.94), ctx['lineTo'](_0x3b1f1d['render']['radius'] * 0.16, _0x3b1f1d['render']['radius'] * 0.94), ctx['lineTo'](0x0, _0x3b1f1d['render']['radius'] * 1.4), ctx['stroke'](), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x52dff6, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x3b1f1d['render']['radius'] * 0x2 / 0x3, _0x3b1f1d['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['fillStyle'] = _0x3251d6, ctx['beginPath'](), ctx['moveTo'](-_0x3b1f1d['render']['radius'] * 0.45, -_0x3b1f1d['render']['radius'] * 0x2 / 0x3), ctx['lineTo'](-_0x3b1f1d['render']['radius'] * 0.55, -_0x3b1f1d['render']['radius'] * 0x1 / 0x3), ctx['lineTo'](_0x3b1f1d['render']['radius'] * 0.55, -_0x3b1f1d['render']['radius'] * 0x1 / 0x3), ctx['lineTo'](_0x3b1f1d['render']['radius'] * 0.45, -_0x3b1f1d['render']['radius'] * 0x2 / 0x3), ctx['fill'](), ctx['fillRect'](-_0x3b1f1d['render']['radius'] * 0.65, 0x0, _0x3b1f1d['render']['radius'] * 0x2 * 0.65, _0x3b1f1d['render']['radius'] / 0x3), ctx['beginPath'](), ctx['moveTo'](-_0x3b1f1d['render']['radius'] * 0.45, _0x3b1f1d['render']['radius'] * 0x2 / 0x3), ctx['lineTo'](-_0x3b1f1d['render']['radius'] * 0.15, _0x3b1f1d['render']['radius']), ctx['lineTo'](_0x3b1f1d['render']['radius'] * 0.15, _0x3b1f1d['render']['radius']), ctx['lineTo'](_0x3b1f1d['render']['radius'] * 0.45, _0x3b1f1d['render']['radius'] * 0x2 / 0x3), ctx['fill'](), ctx['strokeStyle'] = blendColor(_0x52dff6, '#000000', 0.19), ctx['lineWidth'] = _0x3b1f1d['render']['radius'] * 0.15, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x3b1f1d['render']['radius'] * 0x2 / 0x3, _0x3b1f1d['render']['radius'], 0x0, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x3251d6, ctx['strokeStyle'] = _0x3251d6, ctx['lineWidth'] = _0x3b1f1d['render']['radius'] / 0xa, ctx['beginPath'](), ctx['moveTo'](_0x3b1f1d['render']['radius'] * 0.16, -_0x3b1f1d['render']['radius'] * 0.85), ctx['quadraticCurveTo'](_0x3b1f1d['render']['radius'] * 0.18, -_0x3b1f1d['render']['radius'] * 1.36, _0x3b1f1d['render']['radius'] * 0.49, -_0x3b1f1d['render']['radius'] * 1.68), ctx['quadraticCurveTo'](_0x3b1f1d['render']['radius'] * 0.3, -_0x3b1f1d['render']['radius'] * 1.26, _0x3b1f1d['render']['radius'] * 0.16, -_0x3b1f1d['render']['radius'] * 0.85), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-_0x3b1f1d['render']['radius'] * 0.16, -_0x3b1f1d['render']['radius'] * 0.85), ctx['quadraticCurveTo'](-_0x3b1f1d['render']['radius'] * 0.18, -_0x3b1f1d['render']['radius'] * 1.36, -_0x3b1f1d['render']['radius'] * 0.49, -_0x3b1f1d['render']['radius'] * 1.68), ctx['quadraticCurveTo'](-_0x3b1f1d['render']['radius'] * 0.3, -_0x3b1f1d['render']['radius'] * 1.26, -_0x3b1f1d['render']['radius'] * 0.16, -_0x3b1f1d['render']['radius'] * 0.85), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x3b1f1d['render']['angle'] - Math['PI'] / 0x2);
        },
        'DauberMissile': _0x2180c0 => {
            let _0x19ca6d = enemyColor('#333333', _0x2180c0);
            ctx['lineJoin'] = 'round', ctx['rotate'](_0x2180c0['render']['angle'] + Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x19ca6d, ctx['strokeStyle'] = _0x19ca6d, ctx['lineWidth'] = _0x2180c0['render']['radius'] / 1.5, ctx['moveTo'](0x0, -_0x2180c0['render']['radius'] * 1.4), ctx['lineTo'](_0x2180c0['render']['radius'] * 0.68, _0x2180c0['render']['radius'] / 0x2 * 1.4), ctx['lineTo'](-_0x2180c0['render']['radius'] * 0.68, _0x2180c0['render']['radius'] / 0x2 * 1.4), ctx['lineTo'](0x0, -_0x2180c0['render']['radius'] * 1.4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-_0x2180c0['render']['angle'] - Math['PI'] / 0x2);
        },
        'Palisade\x20Core': _0x5768ad => {
            let _0x4362ca = performance['now']() / 0x1f4;
            if (!_0x5768ad['baseAngle'])
                _0x5768ad['baseAngle'] = _0x5768ad['angle'];
            ctx['rotate'](_0x5768ad['baseAngle'] + _0x4362ca), ctx['beginPath'](), ctx['fillStyle'] = enemyColor('#e03f3f', _0x5768ad), ctx['strokeStyle'] = enemyColor('#a12222', _0x5768ad), ctx['lineWidth'] = _0x5768ad['render']['radius'] * 0.2, ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x3cfe1f = 0x0; _0x3cfe1f <= 0x3; _0x3cfe1f++) {
                ctx['lineTo'](Math['cos'](_0x3cfe1f * Math['PI'] * 0x2 / 0x3) * _0x5768ad['render']['radius'], Math['sin'](_0x3cfe1f * Math['PI'] * 0x2 / 0x3) * _0x5768ad['render']['radius']);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = enemyColor(blendColor('#e03f3f', '#ffffff', 0.3), _0x5768ad), ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x2be02e = 0x0; _0x2be02e <= 0x3; _0x2be02e++) {
                ctx['lineTo'](Math['cos'](_0x2be02e * Math['PI'] * 0x2 / 0x3) * _0x5768ad['render']['radius'] * 0.4, Math['sin'](_0x2be02e * Math['PI'] * 0x2 / 0x3) * _0x5768ad['render']['radius'] * 0.4);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['closePath'](), ctx['rotate'](-_0x5768ad['baseAngle'] - _0x4362ca);
        },
        'Custom': _0x17bb2c => {
            const _0x362950 = editorEnemyShapesMap[_0x17bb2c['customType']];
            if (_0x362950 === undefined) {
                console['warn']('path\x20undefined\x20for\x20enemy\x20type\x20' + _0x17bb2c['customType']);
                return;
            }
            const _0x56d1f7 = _0x17bb2c['dead'] === !![] ? 0x1 : Math['min'](0x1, ctx['globalAlpha']);
            ctx['fillOpacity'] = 0x1, ctx['strokeOpacity'] = 0x1, ctx['lineWidth'] = 0.3, ctx['save'](), ctx['rotate'](_0x17bb2c['render']['angle'], _0x17bb2c['render']['angle']), ctx['scale'](_0x17bb2c['render']['radius'], _0x17bb2c['render']['radius']);
            let _0x281ac2 = blendAmount(_0x17bb2c);
            if (checkForFirstFrame(_0x17bb2c))
                window['overrideBlendColor'] = [
                    0x1,
                    '#FFFFFF'
                ];
            else {
                if (_0x281ac2 > 0x0)
                    _0x17bb2c['isCustomSummon'] === !![] ? window['overrideBlendColor'] = [
                        0x1,
                        blendColor('#fee864', '#FF0000', _0x281ac2)
                    ] : window['overrideBlendColor'] = [
                        _0x281ac2,
                        '#FF0000'
                    ];
                else
                    _0x17bb2c['isCustomSummon'] === !![] ? window['overrideBlendColor'] = [
                        0.8,
                        '#fee864'
                    ] : window['overrideBlendColor'] = undefined;
            }
            ctx['setGlobalAlpha'](0x1), ctx['setFillStyle']('#FFFFFF'), ctx['setStrokeStyle']('#cfcfcf');
            for (let _0x5dc8fc = 0x0; _0x5dc8fc < _0x362950['length']; _0x5dc8fc++) {
                ctx['beginPath']();
                for (let _0x5564bc = 0x0; _0x5564bc < _0x362950[_0x5dc8fc]['length']; _0x5564bc++) {
                    ctx[_0x362950[_0x5dc8fc][_0x5564bc][0x0]](..._0x362950[_0x5dc8fc][_0x5564bc]['slice'](0x1));
                }
                ctx['setGlobalAlpha'](ctx['fillOpacity'] * _0x56d1f7), ctx['fill'](), ctx['setGlobalAlpha'](ctx['strokeOpacity'] * _0x56d1f7), ctx['stroke'](), ctx['closePath'](), ctx['setGlobalAlpha'](0x1, !![]);
            }
            ctx['restore'](), _0x362950['length'] === 0x1 && _0x362950[0x0]['length'] === 0x0 && (_0x17bb2c['data'] === undefined && (_0x17bb2c['data'] = enemyDataMap['Ladybug'](this)), normalEnemyRenderMap['Ladybug'](_0x17bb2c));
        }
    }, enemyRenderMap;
enemyRenderMap = normalEnemyRenderMap, window['enemyRenderMap'] = enemyRenderMap;
function renderDamageCounter({
    radius: _0x5263d0,
    timeAlive: _0x9ebda4,
    totalDamage: _0x449ea7
}) {
    let _0x48f0a3 = 0x1f4;
    if (_0x9ebda4 < 0x1f4 && _0x449ea7 !== 0x0) {
        ctx['fillStyle'] = 'orange', ctx['strokeStyle'] = '#de5b00', ctx['lineWidth'] = 0x7;
        if (_0x5263d0 * 0.4 < 0x19)
            ctx['font'] = '600\x20' + 0x19 + 'px\x20\x27Ubuntu\x27';
        else
            _0x5263d0 * 0.4 > 0x64 ? ctx['font'] = '600\x20' + 0x64 + 'px\x20\x27Ubuntu\x27' : ctx['font'] = '600\x20' + _0x5263d0 * 0.4 + 'px\x20\x27Ubuntu\x27';
        ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['globalAlpha'] = 0.7 * (0x1 - _0x9ebda4 / _0x48f0a3), ctx['strokeText'](formatAmountHighPrecision(Math['round'](_0x449ea7)), 0x0, _0x5263d0 * 0.2 - _0x5263d0 / 0x3 * Math['cos'](_0x9ebda4 / (0x4b * (_0x48f0a3 / 0x113)))), ctx['fillText'](formatAmountHighPrecision(Math['round'](_0x449ea7)), 0x0, _0x5263d0 * 0.2 - _0x5263d0 / 0x3 * Math['cos'](_0x9ebda4 / (0x4b * (_0x48f0a3 / 0x113)))), ctx['globalAlpha'] = 0x1, ctx['letterSpacing'] = '0px';
    }
}
;
function enemyRenderMapText(_0x541864) {
    renderHpBar({
        'x': 0x0,
        'y': 0x0,
        'radius': _0x541864['render']['radius'] * 0.8,
        'hp': _0x541864['render']['hp'],
        'maxHp': _0x541864['maxHp'],
        'beforeStreakHp': _0x541864['render']['beforeStreakHp'],
        'team': _0x541864['team']
    }, _0x541864), window['damageCounter'] && (!window['isEditor'] === !![] && renderDamageCounter({
        'radius': _0x541864['render']['radius'],
        'timeAlive': _0x541864['ticksSinceLastDamaged'],
        'totalDamage': _0x541864['damageCount']
    }));
}
const memoizedColors = {};
function flashDamageColor(_0x186a67, _0x4c1f79) {
    const _0x59f710 = brightness(hexToRgb(_0x186a67));
    let _0x1da79e = '#FFFFFF';
    return _0x59f710 > 0.8 && (_0x1da79e = '#555555'), blendColor(_0x186a67, _0x1da79e, blendAmount(_0x4c1f79) / 0x4);
}
function enemyColor(_0x2e0ff, _0x244f5f) {
    let _0x2466f2 = _0x2e0ff;
    return _0x244f5f['team'] === 'flower' && (_0x2466f2 = keepDarknessButYellow(_0x2466f2)), _0x2466f2 = flashDamageColor(_0x2466f2, _0x244f5f), checkForFirstFrame(_0x244f5f) && (_0x2466f2 = blendColor(_0x2466f2, '#FF0000', 0.2)), _0x2466f2;
}
function blendColor(_0x4d5d26, _0x27533e, _0x4279b9) {
    const _0x3e6d4f = parseInt(_0x4d5d26['slice'](0x1, 0x3), 0x10), _0x7e999b = parseInt(_0x4d5d26['slice'](0x3, 0x5), 0x10), _0x3c4e3a = parseInt(_0x4d5d26['slice'](0x5, 0x7), 0x10), _0x5b99b9 = parseInt(_0x27533e['slice'](0x1, 0x3), 0x10), _0x5b77db = parseInt(_0x27533e['slice'](0x3, 0x5), 0x10), _0x25fd96 = parseInt(_0x27533e['slice'](0x5, 0x7), 0x10), _0x51e33a = rgbToHex(Math['floor'](_0x3e6d4f * (0x1 - _0x4279b9) + _0x5b99b9 * _0x4279b9), Math['floor'](_0x7e999b * (0x1 - _0x4279b9) + _0x5b77db * _0x4279b9), Math['floor'](_0x3c4e3a * (0x1 - _0x4279b9) + _0x25fd96 * _0x4279b9));
    return _0x51e33a;
}
function keepDarknessButYellow(_0x573646) {
    const _0x77af19 = {
            'r': 0xfb,
            'g': 0xea,
            'b': 0x6f
        }, _0x452de8 = hexToRgb(_0x573646);
    let _0x1567eb = brightness(_0x452de8);
    _0x1567eb = _0x1567eb ** 0.5;
    const _0x4dc955 = brightness(_0x77af19), _0x2b59d2 = _0x1567eb / _0x4dc955, _0x5a1613 = {
            'r': clamp(_0x77af19['r'] * _0x2b59d2),
            'g': clamp(_0x77af19['g'] * _0x2b59d2),
            'b': clamp(_0x77af19['b'] * _0x2b59d2)
        }, _0x3acbdc = _0x4cc159 => Math['round'](_0x4cc159)['toString'](0x10)['padStart'](0x2, '0');
    return '#' + _0x3acbdc(_0x5a1613['r']) + _0x3acbdc(_0x5a1613['g']) + _0x3acbdc(_0x5a1613['b']);
}
function rgbToHex(_0x1ec263, _0x5c5513, _0x44cc2d) {
    return '#' + componentToHex(_0x1ec263) + componentToHex(_0x5c5513) + componentToHex(_0x44cc2d);
}
function hexToRgb(_0x5871fc) {
    _0x5871fc = _0x5871fc['replace']('#', '');
    if (_0x5871fc['length'] === 0x3)
        _0x5871fc = _0x5871fc['split']('')['map'](_0x3f9604 => _0x3f9604 + _0x3f9604)['join']('');
    const _0x4dba14 = parseInt(_0x5871fc, 0x10);
    return {
        'r': _0x4dba14 >> 0x10 & 0xff,
        'g': _0x4dba14 >> 0x8 & 0xff,
        'b': _0x4dba14 & 0xff
    };
}
function brightness({
    r: _0x1f3ca1,
    g: _0x32edf2,
    b: _0x50a0fd
}) {
    return (0.299 * _0x1f3ca1 + 0.587 * _0x32edf2 + 0.114 * _0x50a0fd) / 0xff;
}
function clamp(_0x3d4ab6) {
    return Math['max'](0x0, Math['min'](0xff, _0x3d4ab6));
}
function componentToHex(_0xe8056) {
    var _0x3f60ca = _0xe8056['toString'](0x10);
    return _0x3f60ca['length'] == 0x1 ? '0' + _0x3f60ca : _0x3f60ca;
}