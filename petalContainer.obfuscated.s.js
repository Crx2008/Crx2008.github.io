let currentBiome = '';
function getAngleOnSquare(_0x1830fc, _0x97c849, _0x5d2779, _0x148b30) {
    let _0x49d6ea = _0x97c849 - _0x148b30 / 0x2, _0x2831c8 = _0x5d2779 - _0x148b30 / 0x2, _0x1c180d = _0x97c849, _0x447973 = _0x5d2779, _0x5c9494 = _0x148b30, _0x4f45b2 = _0x148b30, _0x3630d2 = Math['atan2'](_0x447973 - _0x2831c8, _0x49d6ea + _0x5c9494 - _0x1c180d), _0x49864d, _0x134636;
    return _0x1830fc <= Math['PI'] ? _0x1830fc < Math['PI'] / 0x2 ? _0x1830fc < _0x3630d2 ? (colX = _0x49d6ea + _0x5c9494, _0x49864d = Math['tan'](_0x1830fc) * (_0x5c9494 / 0x2), colY = _0x447973 - _0x49864d) : (colY = _0x2831c8, _0x134636 = _0x4f45b2 / 0x2 / Math['tan'](_0x1830fc), colX = _0x1c180d + _0x134636) : _0x1830fc < Math['PI'] - _0x3630d2 ? (colY = _0x2831c8, _0x134636 = _0x4f45b2 / 0x2 / Math['tan'](Math['PI'] - _0x1830fc), colX = _0x1c180d - _0x134636) : (colX = _0x49d6ea, _0x49864d = Math['tan'](Math['PI'] - _0x1830fc) * (_0x5c9494 / 0x2), colY = _0x447973 - _0x49864d) : _0x1830fc < 0x3 * Math['PI'] / 0x2 ? _0x1830fc < _0x3630d2 + Math['PI'] ? (colX = _0x49d6ea, _0x49864d = Math['tan'](_0x1830fc - Math['PI']) * (_0x5c9494 / 0x2), colY = _0x447973 + _0x49864d) : (colY = _0x2831c8 + _0x4f45b2, _0x134636 = _0x4f45b2 / 0x2 / Math['tan'](_0x1830fc - Math['PI']), colX = _0x1c180d - _0x134636) : _0x1830fc < 0x2 * Math['PI'] - _0x3630d2 ? (colY = _0x2831c8 + _0x4f45b2, _0x134636 = _0x4f45b2 / 0x2 / Math['tan'](0x2 * Math['PI'] - _0x1830fc), colX = _0x1c180d + _0x134636) : (colX = _0x49d6ea + _0x5c9494, _0x49864d = Math['tan'](0x2 * Math['PI'] - _0x1830fc) * (_0x5c9494 / 0x2), colY = _0x447973 + _0x49864d), {
        'x': colX,
        'y': colY
    };
}
class PetalContainer {
    constructor(_0x4b3ddb, {
        x: _0x5466ac,
        y: _0x277c65,
        w: _0x4daece,
        h: _0xaf96eb,
        originalX: _0x5b431f,
        originalY: _0x3b86bd,
        radius: _0x16a40d,
        toOscillate: _0x74db0a,
        isDragging: _0x5067bd,
        lastSlot: _0x44390d,
        toRenderText: _0x39d424,
        petalStats: _0x212372,
        customBiome: _0x1588c9
    }, _0x5f218c, _0xc7cdad, _0x581feb) {
        this['petals'] = _0x4b3ddb, this['petalStats'] = _0x212372;
        for (let _0x25647f = 0x0; _0x25647f < this['petals']['length']; _0x25647f++) {
            this['petals'][_0x25647f]['insidePetalContainer'] = !![];
        }
        this['rarity'] = (this['petals'][0x0] ?? { 'rarity': 0x0 })['rarity'], this['type'] = (this['petals'][0x0] ?? { 'type': 'Basic' })['type'], (this['type'] === 'Custom' || this['type'] === 'CustomProjectile') && (this['type'] = this['petals'][0x0]['customType']), this['randomAngle'] = Math['random']() * Math['PI'] * 0x2, this['x'] = _0x5466ac, this['y'] = _0x277c65, this['w'] = _0x4daece, this['h'] = _0xaf96eb, this['radius'] = _0x16a40d, this['render'] = {
            'x': _0x5b431f ?? this['x'],
            'y': _0x3b86bd ?? this['y'],
            'w': this['w']
        }, this['amount'] = _0xc7cdad, this['attempt'] = _0x581feb, this['id'] = _0x5f218c, this['spawnAnimation'] = 0x0, this['lastAmountChangedTime'] = -0x3e8, this['collectTime'] = null, this['toOscillate'] = _0x74db0a !== ![], this['toOscillate'] === !![] && (this['angleOffset'] = Math['PI'] * 0.05 * (Math['random']() * 0x2 - 0x1)), this['creationTime'] = performance['now'](), this['isDraggingPetalContainer'] = _0x5067bd ?? ![], this['isDraggingPetalContainer'] === !![] && (this['lastPetalSlot'] = _0x44390d ?? {
            'index': -0x1,
            'top': !![]
        }), _0x39d424 !== undefined && (this['toRenderText'] = ![]), this['isHovered'] = ![], this['statsBoxAlpha'] = 0x0, this['statsBox'] = null, _0x1588c9 !== undefined && (this['customBiome'] = _0x1588c9, this['greyed'] = ![]), this['generatedIn1v1'] = ![];
    }
    get ['ecOverride']() {
        if (!enemyOverrides[this['type']])
            return {};
        return enemyOverrides[this['type']];
    }
    ['generatePetalImage'](_0x10ecb7 = 62.5, _0x212b96, _0x194dfb = ![]) {
        if (!_0x212b96)
            return;
        const _0x12e179 = _0x212b96['data']['override'];
        let _0x58a821 = this['type'], _0x4ef956 = 0xa, _0x334c02 = 1.5, _0x535bbd = 0x0, _0x1e9454 = 0xa, _0x335301 = 0x0, _0x1d32b8 = 0x0;
        if (_0x12e179?.['customName'] !== undefined)
            _0x58a821 = _0x12e179?.['customName'];
        if (_0x12e179?.['petalSize'] !== undefined)
            _0x4ef956 = _0x12e179?.['petalSize'];
        if (_0x12e179?.['renderSize'] !== undefined)
            _0x334c02 = _0x12e179?.['renderSize'];
        if (_0x12e179?.['mainAngle'] !== undefined)
            _0x535bbd = _0x12e179?.['mainAngle'];
        if (_0x12e179?.['multiRadius'] !== undefined)
            _0x1e9454 = _0x12e179?.['multiRadius'];
        if (_0x12e179?.['multiAngle'] !== undefined)
            _0x335301 = _0x12e179?.['multiAngle'];
        if (_0x12e179?.['multiAdd'] !== undefined)
            _0x1d32b8 = _0x12e179?.['multiAdd'];
        const _0x94186d = {
            'radius': _0x4ef956,
            'angle': 0x0,
            'lastTicksSinceLastDamaged': 0x3e8,
            'ticksSinceLastDamaged': 0x3e8,
            'rarity': this['rarity'],
            'customType': this['type']
        };
        let _0x18f178 = _0x10ecb7 / 0x64;
        const _0x2bc5b2 = Math['min'](0x1, ctx['measureText']('Starfis')['width'] / ctx['measureText'](_0x58a821)['width']), _0x378229 = _0x212b96['data']['count'];
        if (!_0x12e179?.['image'] || _0x194dfb === !![]) {
            let _0x19986f, _0x51a324, _0x41143a;
            if (_0x194dfb === ![])
                _0x19986f = new OffscreenCanvas(_0x10ecb7, _0x10ecb7), _0x51a324 = _0x19986f['getContext']('2d'), _0x41143a = ctx, ctx = _0x51a324;
            else
                this['imageLoaded'] === !![] && (_0x94186d['image'] = this['image'], _0x94186d['imageLoaded'] = this['imageLoaded'], _0x334c02 = 0.38);
            ctx['setFillStyle'] = _0x45be9c => {
                if (window['overrideBlendColor'] !== undefined) {
                    ctx['fillStyle'] = blendColor(_0x45be9c, window['overrideBlendColor'][0x1], window['overrideBlendColor'][0x0]);
                    return;
                }
                ctx['fillStyle'] = _0x45be9c;
            }, ctx['setStrokeStyle'] = _0x4e9742 => {
                if (window['overrideBlendColor'] !== undefined) {
                    ctx['strokeStyle'] = blendColor(_0x4e9742, window['overrideBlendColor'][0x1], window['overrideBlendColor'][0x0]);
                    return;
                }
                ctx['strokeStyle'] = _0x4e9742;
            }, ctx['setGlobalAlpha'] = (_0x3430fb, _0x14836f = ![]) => {
                if (window['alphaMult'] !== undefined && _0x14836f !== !![]) {
                    ctx['globalAlpha'] = window['alphaMult'] * _0x3430fb;
                    return;
                }
                ctx['globalAlpha'] = _0x3430fb;
            }, ctx['setFillAlpha'] = _0x2db4db => {
                ctx['fillOpacity'] = _0x2db4db;
            }, ctx['setStrokeAlpha'] = _0x2ae327 => {
                ctx['strokeOpacity'] = _0x2ae327;
            }, ctx['setLineWidth'] = _0x58fc51 => {
                ctx['lineWidth'] = _0x58fc51;
            }, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['scale'](_0x18f178, _0x18f178), ctx['translate'](0x32, 42.5), ctx['scale'](_0x334c02, _0x334c02), ctx['rotate'](_0x535bbd);
            if (_0x378229 > 0x1) {
                const _0xca80d1 = Math['PI'] * 0x2 / _0x378229;
                for (let _0x589834 = 0x0; _0x589834 < _0x378229; _0x589834++) {
                    ctx['rotate'](_0x589834 * (_0xca80d1 + _0x1d32b8)), ctx['translate'](_0x1e9454, 0x0), ctx['rotate'](_0x335301), petalRenderMap[this['type']] ? petalRenderMap[this['type']](_0x94186d) : petalRenderMap['Custom'](_0x94186d), ctx['rotate'](-_0x335301), ctx['translate'](-_0x1e9454, 0x0), ctx['rotate'](-_0x589834 * (_0xca80d1 + _0x1d32b8));
                }
            } else
                petalRenderMap[this['type']] ? petalRenderMap[this['type']](_0x94186d) : petalRenderMap['Custom'](_0x94186d);
            ctx['rotate'](-_0x535bbd), ctx['scale'](0x1 / _0x334c02, 0x1 / _0x334c02), ctx['translate'](-0x32, -42.5), ctx['font'] = '900\x20' + _0x2bc5b2 * 22.5 + 'px\x20Ubuntu', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = _0x2bc5b2 * 3.25, ctx['beginPath'](), ctx['strokeText'](_0x58a821, 0x32, 0x4b), ctx['fillText'](_0x58a821, 0x32, 0x4b), ctx['closePath'](), ctx['scale'](0x1 / _0x18f178, 0x1 / _0x18f178);
            if (_0x194dfb === ![])
                cachedImages['petals']['live']['' + this['type'] + _0x212b96['index']] = _0x19986f, ctx = _0x41143a;
            else
                _0x94186d['image'] && (this['image'] = _0x94186d['image'], this['image']['onload'] = () => {
                    this['imageLoaded'] = !![];
                });
        } else {
            let _0xc3669a = new Image();
            _0xc3669a['src'] = _0x12e179['image'], _0xc3669a['onload'] = () => {
                const _0x138884 = new OffscreenCanvas(_0x10ecb7, _0x10ecb7), _0x5d9cad = _0x138884['getContext']('2d'), _0x4386ac = ctx;
                ctx = _0x5d9cad, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['scale'](_0x18f178, _0x18f178), ctx['translate'](0x32, 42.5), ctx['scale'](_0x334c02, _0x334c02), ctx['rotate'](_0x535bbd);
                if (_0x378229 > 0x1) {
                    const _0x44a329 = Math['PI'] * 0x2 / _0x378229;
                    for (let _0x5ade93 = 0x0; _0x5ade93 < _0x378229; _0x5ade93++) {
                        ctx['rotate'](_0x5ade93 * (_0x44a329 + _0x1d32b8)), ctx['translate'](_0x1e9454, 0x0), ctx['rotate'](_0x335301), ctx['scale'](_0x4ef956 / _0xc3669a['width'], _0x4ef956 / _0xc3669a['height']), ctx['drawImage'](_0xc3669a, -_0xc3669a['width'] / 0x2, -_0xc3669a['height'] / 0x2), ctx['scale'](_0xc3669a['width'] / _0x4ef956, _0xc3669a['height'] / _0x4ef956), ctx['rotate'](-_0x335301), ctx['translate'](-_0x1e9454, 0x0), ctx['rotate'](-_0x5ade93 * (_0x44a329 + _0x1d32b8) - _0x335301);
                    }
                } else
                    ctx['scale'](_0x4ef956 / _0xc3669a['width'], _0x4ef956 / _0xc3669a['height']), ctx['drawImage'](_0xc3669a, -_0xc3669a['width'] / 0x2, -_0xc3669a['height'] / 0x2), ctx['scale'](_0xc3669a['width'] / _0x4ef956, _0xc3669a['height'] / _0x4ef956);
                ctx['rotate'](-_0x535bbd), ctx['scale'](0x1 / _0x334c02, 0x1 / _0x334c02), ctx['translate'](-0x32, -42.5), ctx['font'] = '900\x20' + _0x2bc5b2 * 22.5 + 'px\x20Ubuntu', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = _0x2bc5b2 * 3.25, ctx['beginPath'](), ctx['strokeText'](_0x58a821, 0x32, 0x4b), ctx['fillText'](_0x58a821, 0x32, 0x4b), ctx['closePath'](), ctx['scale'](0x1 / _0x18f178, 0x1 / _0x18f178), cachedImages['petals']['live']['' + this['type'] + _0x212b96['index']] = _0x138884, ctx = _0x4386ac;
            };
        }
    }
    ['generateNamelessPetalImage'](_0x1c09d8 = 62.5, _0x1be838) {
        if (!_0x1be838)
            return;
        const _0x6ab1b8 = _0x1be838['data']['override'];
        let _0x1272bf = 0xa, _0x187169 = 1.5, _0xc7fc65 = 0x0, _0xc52330 = 0xa, _0x45ee6 = 0x0, _0x337e9f = 0x0, _0x320508 = null;
        if (_0x6ab1b8?.['petalSize'] !== undefined)
            _0x1272bf = _0x6ab1b8?.['petalSize'];
        if (_0x6ab1b8?.['renderSize'] !== undefined)
            _0x187169 = _0x6ab1b8?.['renderSize'];
        if (_0x6ab1b8?.['mainAngle'] !== undefined)
            _0xc7fc65 = _0x6ab1b8?.['mainAngle'];
        if (_0x6ab1b8?.['multiRadius'] !== undefined)
            _0xc52330 = _0x6ab1b8?.['multiRadius'];
        if (_0x6ab1b8?.['multiAngle'] !== undefined)
            _0x45ee6 = _0x6ab1b8?.['multiAngle'];
        if (_0x6ab1b8?.['multiAdd'] !== undefined)
            _0x337e9f = _0x6ab1b8?.['multiAdd'];
        if (_0x6ab1b8?.['image'])
            _0x320508 = _0x6ab1b8?.['image'];
        const _0xa2c00f = {
                'radius': _0x1272bf,
                'angle': 0x0,
                'lastTicksSinceLastDamaged': 0x3e8,
                'ticksSinceLastDamaged': 0x3e8,
                'rarity': this['rarity'],
                'customType': this['type']
            }, _0xf3ca94 = _0x1c09d8 / 0x64, _0x2d57a7 = _0x1be838['data']['count'];
        if (!_0x6ab1b8?.['image']) {
            const _0x19f3b8 = new OffscreenCanvas(_0x1c09d8, _0x1c09d8), _0x132207 = _0x19f3b8['getContext']('2d'), _0x319a34 = ctx;
            ctx = _0x132207, ctx['setFillStyle'] = _0x13804d => {
                if (window['overrideBlendColor'] !== undefined) {
                    ctx['fillStyle'] = blendColor(_0x13804d, window['overrideBlendColor'][0x1], window['overrideBlendColor'][0x0]);
                    return;
                }
                ctx['fillStyle'] = _0x13804d;
            }, ctx['setStrokeStyle'] = _0x38bafd => {
                if (window['overrideBlendColor'] !== undefined) {
                    ctx['strokeStyle'] = blendColor(_0x38bafd, window['overrideBlendColor'][0x1], window['overrideBlendColor'][0x0]);
                    return;
                }
                ctx['strokeStyle'] = _0x38bafd;
            }, ctx['setGlobalAlpha'] = (_0x3ae693, _0x352743 = ![]) => {
                if (window['alphaMult'] !== undefined && _0x352743 !== !![]) {
                    ctx['globalAlpha'] = window['alphaMult'] * _0x3ae693;
                    return;
                }
                ctx['globalAlpha'] = _0x3ae693;
            }, ctx['setFillAlpha'] = _0x1665a0 => {
                ctx['fillOpacity'] = _0x1665a0;
            }, ctx['setStrokeAlpha'] = _0x42217b => {
                ctx['strokeOpacity'] = _0x42217b;
            }, ctx['setLineWidth'] = _0x1dac4e => {
                ctx['lineWidth'] = _0x1dac4e;
            }, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['scale'](_0xf3ca94, _0xf3ca94), ctx['translate'](0x32, 0x32), ctx['scale'](_0x187169, _0x187169), ctx['rotate'](_0xc7fc65);
            if (_0x2d57a7 > 0x1) {
                const _0x42b809 = Math['PI'] * 0x2 / _0x2d57a7;
                for (let _0x2e1dc6 = 0x0; _0x2e1dc6 < _0x2d57a7; _0x2e1dc6++) {
                    ctx['rotate'](_0x2e1dc6 * (_0x42b809 + _0x337e9f)), ctx['translate'](_0xc52330, 0x0), ctx['rotate'](_0x45ee6), petalRenderMap[this['type']] ? petalRenderMap[this['type']](_0xa2c00f) : petalRenderMap['Custom'](_0xa2c00f), ctx['rotate'](-_0x45ee6), ctx['translate'](-_0xc52330, 0x0), ctx['rotate'](-_0x2e1dc6 * (_0x42b809 + _0x337e9f));
                }
            } else
                petalRenderMap[this['type']] ? petalRenderMap[this['type']](_0xa2c00f) : petalRenderMap['Custom'](_0xa2c00f);
            ctx['rotate'](-_0xc7fc65), ctx['scale'](0x1 / _0x187169, 0x1 / _0x187169), ctx['translate'](-0x32, -0x32), ctx['scale'](0x1 / _0xf3ca94, 0x1 / _0xf3ca94), cachedImages['petals']['live']['' + this['type'] + _0x1be838['index'] + 'nameless'] = _0x19f3b8, ctx = _0x319a34;
        } else {
            let _0x553af6 = new Image();
            _0x553af6['src'] = _0x6ab1b8['image'], _0x553af6['onload'] = () => {
                const _0x363e74 = new OffscreenCanvas(_0x1c09d8, _0x1c09d8), _0x5d9df0 = _0x363e74['getContext']('2d'), _0x2cae39 = ctx;
                ctx = _0x5d9df0, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['scale'](_0xf3ca94, _0xf3ca94), ctx['translate'](0x32, 0x32), ctx['scale'](_0x187169, _0x187169), ctx['rotate'](_0xc7fc65);
                if (_0x2d57a7 > 0x1) {
                    const _0x2fc53c = Math['PI'] * 0x2 / _0x2d57a7;
                    for (let _0x3165ac = 0x0; _0x3165ac < _0x2d57a7; _0x3165ac++) {
                        ctx['rotate'](_0x3165ac * (_0x2fc53c + _0x337e9f)), ctx['translate'](_0xc52330, 0x0), ctx['rotate'](_0x45ee6), ctx['scale'](_0x1272bf / _0x553af6['width'], _0x1272bf / _0x553af6['height']), ctx['drawImage'](_0x553af6, -_0x553af6['width'] / 0x2, -_0x553af6['height'] / 0x2), ctx['scale'](_0x553af6['width'] / _0x1272bf, _0x553af6['height'] / _0x1272bf), ctx['rotate'](-_0x45ee6), ctx['translate'](-_0xc52330, 0x0), ctx['rotate'](-_0x3165ac * (_0x2fc53c + _0x337e9f) - _0x45ee6);
                    }
                } else
                    ctx['scale'](_0x1272bf / _0x553af6['width'], _0x1272bf / _0x553af6['height']), ctx['drawImage'](_0x553af6, -_0x553af6['width'] / 0x2, -_0x553af6['height'] / 0x2), ctx['scale'](_0x553af6['width'] / _0x1272bf, _0x553af6['height'] / _0x1272bf);
                ctx['rotate'](-_0xc7fc65), ctx['scale'](0x1 / _0x187169, 0x1 / _0x187169), ctx['translate'](-0x32, -0x32), ctx['scale'](0x1 / _0xf3ca94, 0x1 / _0xf3ca94), cachedImages['petals']['live']['' + this['type'] + _0x1be838['index'] + 'nameless'] = _0x363e74, ctx = _0x2cae39;
            };
        }
    }
    ['generateEnemyImage'](_0x9596d0 = 62.5) {
        const _0x3bb89f = new OffscreenCanvas(_0x9596d0, _0x9596d0), _0x4a98df = _0x3bb89f['getContext']('2d'), _0x443382 = ctx;
        ctx = _0x4a98df;
        const _0x498cc9 = this['ecOverride'];
        let _0xba5732 = this['type'], _0x4b5c6a = 0x19, _0x2ebb31 = 0x1, _0x42e755 = -0x3 * Math['PI'] / 0x4, _0x5c5cd2 = null;
        if (_0x498cc9?.['customName'])
            _0xba5732 = _0x498cc9?.['customName'];
        if (_0x498cc9?.['enemySize'])
            _0x4b5c6a = _0x498cc9?.['enemySize'];
        if (_0x498cc9?.['renderSize'])
            _0x2ebb31 = _0x498cc9?.['renderSize'];
        if (_0x498cc9?.['angle'])
            _0x42e755 = _0x498cc9?.['angle'];
        if (_0x498cc9?.['customRender'])
            _0x5c5cd2 = _0x498cc9?.['customRender'];
        const _0x3856c2 = {
                'render': {
                    'radius': _0x4b5c6a,
                    'angle': 0x0,
                    'time': 0x4c4b40,
                    'lastX': -0x64,
                    'lastY': -0x64,
                    'x': 0x64,
                    'y': 0x64
                },
                'radius': _0x4b5c6a,
                'lastTicksSinceLastDamaged': 0x3e8,
                'ticksSinceLastDamaged': 0x3e8,
                'rarity': 0x0,
                'isInEnemyBox': !![],
                'customType': this['type']
            }, _0x485c2f = _0x9596d0 / 0x64;
        ctx['setFillStyle'] = _0xf697f5 => {
            if (window['overrideBlendColor'] !== undefined) {
                ctx['fillStyle'] = blendColor(_0xf697f5, window['overrideBlendColor'][0x1], window['overrideBlendColor'][0x0]);
                return;
            }
            ctx['fillStyle'] = _0xf697f5;
        }, ctx['setStrokeStyle'] = _0x3312f0 => {
            if (window['overrideBlendColor'] !== undefined) {
                ctx['strokeStyle'] = blendColor(_0x3312f0, window['overrideBlendColor'][0x1], window['overrideBlendColor'][0x0]);
                return;
            }
            ctx['strokeStyle'] = _0x3312f0;
        }, ctx['setGlobalAlpha'] = (_0x422bbd, _0x356d6f = ![]) => {
            if (window['alphaMult'] !== undefined && _0x356d6f !== !![]) {
                ctx['globalAlpha'] = window['alphaMult'] * _0x422bbd;
                return;
            }
            ctx['globalAlpha'] = _0x422bbd;
        }, ctx['setFillAlpha'] = _0x4a21d8 => {
            ctx['fillOpacity'] = _0x4a21d8;
        }, ctx['setStrokeAlpha'] = _0x154dfb => {
            ctx['strokeOpacity'] = _0x154dfb;
        }, ctx['setLineWidth'] = _0xfb3f7e => {
            ctx['lineWidth'] = _0xfb3f7e;
        }, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['scale'](_0x485c2f, _0x485c2f), ctx['translate'](0x32, 0x32), ctx['scale'](_0x2ebb31, _0x2ebb31), ctx['rotate'](_0x42e755);
        if (!_0x5c5cd2) {
            if (enemyRenderMap[this['type']]) {
                if (enemyDataMap[this['type']])
                    _0x3856c2['data'] = enemyDataMap[this['type']](_0x3856c2);
                enemyRenderMap[this['type']](_0x3856c2);
            } else
                enemyRenderMap['Custom'](_0x3856c2);
        } else
            _0x5c5cd2();
        ctx['rotate'](-_0x42e755), ctx['scale'](0x1 / _0x2ebb31, 0x1 / _0x2ebb31), ctx['translate'](-0x32, -0x32), ctx['scale'](0x1 / _0x485c2f, 0x1 / _0x485c2f), cachedImages['enemies']['' + this['type']] = _0x3bb89f, ctx = _0x443382;
    }
    ['updateInterpolate']() {
        this['render']['x'] = interpolate(this['render']['x'], this['x'], 0.00672 * dt), this['render']['y'] = interpolate(this['render']['y'], this['y'], 0.00672 * dt), this['render']['w'] = interpolate(this['render']['w'], this['w'], 0.00672 * dt), this['collectTime'] ? this['spawnAnimation'] = interpolate(this['spawnAnimation'], 0x0, 0.00672 * dt) : this['spawnAnimation'] = interpolate(this['spawnAnimation'], 0x1, 0.00672 * dt);
    }
    ['drawStatsBox'](_0x3dfc09 = ![], _0x2c9dd8, _0x395792 = this['render']['x'], _0x395791 = this['render']['y']) {
        if (window['statBoxes'] === ![])
            return;
        if (this['statsBoxAlpha'] < 0.1 && !this['isHovered']) {
            this['statsBoxAlpha'] = 0x0;
            return;
        }
        let _0x4dad5b = 'petals';
        if (_0x2c9dd8 == !![])
            _0x4dad5b = 'enemies';
        const _0x1f6cb8 = [
            'Abyssal\x20Artifact',
            'Scorched\x20Artifact',
            'Verdant\x20Artifact',
            'Cosmic\x20Artifact',
            'Chimera'
        ]['includes'](this['type']);
        let _0x594436;
        if (_0x1f6cb8)
            try {
                _0x594436 = new StatsBox(this['type'], this['petalStats'], _0x4dad5b, this['amount'], this['rarity']), delete _0x594436['image'];
                const _0x1c7be6 = ctx, _0x41a3bd = document['createElement']('canvas');
                ctx = _0x41a3bd['getContext']('2d'), _0x594436['draw'](), ctx = _0x1c7be6;
            } catch (_0x511f1a) {
                console['error']('StatsBox\x20creation\x20error:', _0x511f1a), _0x594436 = null;
            }
        else
            _0x594436 = cachedImages['statBoxes'][_0x4dad5b]['' + this['type']], (!_0x594436 || _0x594436['amount'] !== this['amount'] || _0x594436['rarity'] !== this['rarity']) && (_0x594436 = undefined, cachedImages['statBoxes'][_0x4dad5b]['' + this['type']] = new StatsBox(this['type'], this['petalStats'], _0x4dad5b, this['amount'], this['rarity']));
        const _0x28a06b = this['isHovered'];
        if (_0x28a06b === !![])
            this['statsBoxAlpha'] += 0.15 * dt / 0x12, this['statsBoxAlpha'] > 0x1 && (this['statsBoxAlpha'] = 0x1);
        else
            this['statsBoxAlpha'] > 0.1 && (this['statsBoxAlpha'] -= 0.15 * dt / 0x12, this['statsBoxAlpha'] < 0x0 && (this['statsBoxAlpha'] = 0x0));
        this['statsBoxAlpha'] !== 0x0 && _0x594436 && (_0x594436['y'] = _0x3dfc09 ? _0x395791 + this['h'] / 0x2 + 11.5 : _0x395791 - _0x594436['h'] - this['h'] / 0x2 - 11.5, _0x594436['x'] = _0x395792, ctx['globalAlpha'] = this['statsBoxAlpha'], _0x594436['draw'](), ctx['globalAlpha'] = 0x1), this['isHovered'] = ![], this['statsBox'] && this['statsBox']['shouldRegenPC'] === !![] && (this['statsBox']['shouldRegenPC'] = ![]);
    }
    ['draw'](_0x312fab, _0x21b660) {
        this['updateInterpolate']();
        if (this['toOscillate'] === !![] && toRender({
                'x': this['render']['x'],
                'y': this['render']['y'],
                'radius': this['radius']
            }, window['camera']) === ![] && this['toSkipCulling'] !== !![])
            return;
        const _0x2f71e2 = smoothstep(this['spawnAnimation']);
        let _0x470391 = 0x1, _0x402847 = 0x0;
        ctx['lastTransform'] = ctx['getTransform'](), ctx['translate'](this['render']['x'], this['render']['y']), _0x470391 *= _0x2f71e2 * this['render']['w'] / 0x32, _0x402847 -= (0x1 - _0x2f71e2) * Math['PI'] * 0x3;
        if (this['isDraggingPetalContainer'] === !![]) {
            if (this['draggingTimer'] === undefined)
                this['draggingTimer'] = 0x0;
            this['draggingTimer'] += 0x3e8 / 0x1e * dt / 16.66, _0x402847 += Math['sin'](this['draggingTimer'] / 0x118) * 0.28, this !== draggingPetalContainer && (this['isDraggingPetalContainer'] = ![], this['undraggingPetalContainerTimer'] = 0x1e, this['lastDraggingAngle'] = Math['sin'](this['draggingTimer'] / 0x118) * 0.28);
        } else
            this['undraggingPetalContainerTimer'] !== undefined && (this['interval'] === undefined && (this['lastDraggingAngle'] = interpolate(this['lastDraggingAngle'], 0x0, 0.15), _0x402847 += this['lastDraggingAngle'], this['undraggingPetalContainerTimer']--, this['undraggingPetalContainerTimer'] < 0x0 && (delete this['undraggingPetalContainerTimer'], delete this['lastDraggingAngle'], delete this['draggingTimer'])));
        this['toOscillate'] === !![] && (_0x470391 *= 0x1 + Math['sin'](performance['now']() / 0x3e8 / 0.076) / 0x34, _0x402847 += this['angleOffset']);
        if (_0x402847 !== 0x0)
            ctx['rotate'](_0x402847);
        if (_0x470391 !== 0x1)
            ctx['scale'](_0x470391, _0x470391);
        this['toOscillate'] === !![] && this['isDisplayPetalContainer'] !== !![] && (ctx['globalAlpha'] = 0.3, ctx['fillStyle'] = 'black', ctx['beginPath'](), ctx['roundRect'](-0x1e, -0x1e, 0x3c, 0x3c, 0x5), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1);
        ctx['lineWidth'] = 4.5, currentBiome = biomeManager['getCurrentBiome'](), this['greyed'] = this['customBiome'] !== undefined && window['officialBiomes']['includes'](currentBiome) === !![];
        if (this['type'] === 'soccer\x20petal' && currentBiome !== 'Soccer!')
            this['greyed'] = !![];
        if (this['greyed'])
            ctx['globalAlpha'] = 0.3, ctx['fillStyle'] = '#525252', ctx['strokeStyle'] = '#404040';
        else {
            ctx['fillStyle'] = Colors['rarities'][this['rarity']]['color'], ctx['strokeStyle'] = Colors['rarities'][this['rarity']]['border'];
            if (staticGradients[this['rarity']])
                ctx['fillStyle'] = staticGradients[this['rarity']];
        }
        let _0x2705a7;
        if (Colors['rarities'][this['rarity']]['fancy'] !== undefined && window['hqp'] == !![]) {
            if (this['rarity'] <= 0x17)
                _0x2705a7 = ctx['createLinearGradient'](-0x1e, -0x1e, 0x1e, 0x1e);
            else {
                if (this['rarity'] <= 0x19)
                    _0x2705a7 = ctx['createLinearGradient'](0x1e, 0x1e, -0x1e, -0x1e);
                else
                    this['rarity'] <= 0x1d ? _0x2705a7 = ctx['createRadialGradient'](0x0, 0x0, 0x0, 0x0, 0x0, 0x1e) : _0x2705a7 = ctx['createRadialGradient'](0x0, 0x0, 0x1e, 0x0, 0x0, 0x0);
            }
            createFancyGradient(_0x2705a7, this['rarity']), ctx['fillStyle'] = _0x2705a7, ctx['strokeStyle'] = Colors['rarities'][this['rarity']]['fancy']['border'];
        }
        (this['type'] === 'Shattered\x20Relic\x20of\x20Wrath' || this['type'] === 'Reinforced\x20Relic\x20of\x20Wrath' || this['type'] === 'Subset\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Division\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Guard\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Knight\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Aid\x20Relic\x20of\x20Serenity' || this['type'] === 'Subliminal\x20Relic\x20of\x20Serenity' || this['type'] === 'Barrier\x20Relic\x20of\x20Serenity' || this['type'] === 'Token') && this['rarity'] == 0x0 && (ctx['fillStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2030%,\x2060%)', ctx['strokeStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2050%,\x2040%)');
        ctx['beginPath'](), ctx['roundRect'](-0x19, -0x19, 0x32, 0x32, 0.25), ctx['fill'](), ctx['closePath']();
        if (Colors['rarities'][this['rarity']]['fancy'] !== undefined && Colors['rarities'][this['rarity']]['fancy']['stars'] !== undefined && window['hqp'] == !![]) {
            ctx['beginPath'](), ctx['roundRect'](-27.25, -27.25, 54.5, 54.5, 0x1), ctx['closePath'];
            if (!this['stars']) {
                this['stars'] = [];
                for (let _0x232e3d = 0x0; _0x232e3d < Colors['rarities'][this['rarity']]['fancy']['stars']; _0x232e3d++) {
                    this['stars']['push']({
                        'x': Math['random']() * 0x32 - 0x19,
                        'y': Math['random']() * 0x32 - 0x19
                    });
                }
            }
            ctx['fillStyle'] = '#ffffff';
            for (let _0x1f8f45 of this['stars']) {
                _0x1f8f45['x'] += 0.1, _0x1f8f45['y'] += 0.1;
                (_0x1f8f45['x'] > 0x19 || _0x1f8f45['y'] > 0x19) && (_0x1f8f45['x'] = Math['random']() * 0x320 - 0x14 - 0x1e, _0x1f8f45['y'] = -0x1e);
                if (_0x1f8f45['x'] < 0x19 && _0x1f8f45['x'] > -0x19 && _0x1f8f45['y'] < 0x19 && _0x1f8f45['y'] > -0x19) {
                    ctx['beginPath']();
                    var _0x5f5ce7 = ctx['createRadialGradient'](_0x1f8f45['x'], _0x1f8f45['y'], 0xf, _0x1f8f45['x'], _0x1f8f45['y'], 0x0);
                    _0x5f5ce7['addColorStop'](0x0, 'transparent'), _0x5f5ce7['addColorStop'](0.8, 'rgba(255,255,255,' + (Math['cos'](Date['now']() / 0x258 + _0x1f8f45['x'] / 0x1e + _0x1f8f45['y'] / 0x1e) + 0x1) * 0.8 + ')'), _0x5f5ce7['addColorStop'](0x1, 'white'), ctx['fillStyle'] = _0x5f5ce7, ctx['globalAlpha'] = 0.3, ctx['fillRect'](-0x19, -0x19, 0x32, 0x32), ctx['globalAlpha'] = 0x1, ctx['fillStyle'] = '#fff', ctx['arc'](_0x1f8f45['x'], _0x1f8f45['y'], 0x1, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath']();
                }
            }
        }
        if (_0x312fab) {
            if (petalReloadData[_0x21b660]) {
                if (petalReloadData[_0x21b660]['reload'] > 0.001 && petalReloadData[_0x21b660]['reload'] < 0.999) {
                    ctx['save'](), ctx['beginPath'](), ctx['roundRect'](-0x19, -0x19, 0x32, 0x32, 0.25), ctx['clip'](), ctx['globalAlpha'] = 0.3, ctx['lineCap'] = 'butt';
                    let _0x181ab5 = (0x1 - Math['pow'](petalReloadData[_0x21b660]['reload'], 0.7)) * Math['PI'] * 0x6 + this['randomAngle'];
                    ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x32, ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x19, _0x181ab5 - Math['PI'] * 0x2 * smoothstep(petalReloadData[_0x21b660]['reload']), _0x181ab5), ctx['stroke'](), ctx['closePath'](), ctx['restore']();
                }
            } else
                petalHpData[_0x21b660] && (petalHpData[_0x21b660]['hp'] > 0.001 && petalHpData[_0x21b660]['hp'] < 0.999 && (ctx['save'](), ctx['beginPath'](), ctx['roundRect'](-0x17, -0x17, 0x2e, 0x2e, 0.25), ctx['clip'](), ctx['globalAlpha'] = 0.3, ctx['lineCap'] = 'butt', ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['rect'](-0x19, -0x19, 0x32, 0x32 * (0x1 - petalHpData[_0x21b660]['hp'])), ctx['fill'](), ctx['closePath'](), ctx['restore']()));
        }
        if (this['petals'][0x0]['constructor'] === Petal) {
            if (!cachedImages['petals']['indexed'][this['type']])
                setPcIndexes(this['type']);
            const _0x35923a = cachedImages['petals']['indexed'][this['type']]?.[this['rarity']];
            if (!this['nameless']) {
                if (window['hqp']) {
                    if (_0x35923a) {
                        let _0x68bfd8 = this['render']['w'] * (0x3e / this['render']['w']) / (62.5 * 1.15), _0x13e00c = ctx['getTransform'](), _0x116362 = ctx['strokeStyle'], _0x238061 = ctx['lineWidth'];
                        ctx['getTransform'](), ctx['scale'](_0x68bfd8, _0x68bfd8), ctx['translate'](-62.5 / 0x2, -62.5 / 0x2), this['generatePetalImage'](62.5, _0x35923a, !![]), ctx['setTransform'](_0x13e00c), ctx['strokeStyle'] = _0x116362, ctx['lineWidth'] = _0x238061;
                    }
                } else {
                    if (_0x35923a && !cachedImages['petals']['live']['' + this['type'] + _0x35923a['index']])
                        this['generatePetalImage'](62.5, _0x35923a);
                    const _0x153080 = _0x35923a ? cachedImages['petals']['live']['' + this['type'] + _0x35923a['index']] : null;
                    if (_0x153080) {
                        const _0x1d4fee = this['render']['w'] * (0x3e / this['render']['w']) / (_0x153080['width'] * 1.15);
                        ctx['scale'](_0x1d4fee, _0x1d4fee), ctx['drawImage'](_0x153080, -_0x153080['width'] / 0x2, -_0x153080['width'] / 0x2), ctx['scale'](0x1 / _0x1d4fee, 0x1 / _0x1d4fee);
                    }
                }
            } else {
                if (_0x35923a && !cachedImages['petals']['live']['' + this['type'] + _0x35923a['index'] + 'nameless'])
                    this['generateNamelessPetalImage'](62.5, _0x35923a);
                const _0x102e14 = _0x35923a ? cachedImages['petals']['live']['' + this['type'] + _0x35923a['index'] + 'nameless'] : null;
                if (_0x102e14) {
                    const _0x45c6c = this['render']['w'] * (0x3e / this['render']['w']) / (_0x102e14['width'] * 1.15);
                    ctx['scale'](_0x45c6c, _0x45c6c), ctx['drawImage'](_0x102e14, -_0x102e14['width'] / 0x2, -_0x102e14['width'] / 0x2), ctx['scale'](0x1 / _0x45c6c, 0x1 / _0x45c6c);
                }
            }
        }
        if (this['petals'][0x0]['constructor'] === Enemy) {
            if (!cachedImages['enemies']['' + this['type']])
                this['generateEnemyImage']();
            const _0x1f8ae5 = cachedImages['enemies']['' + this['type']];
            if (_0x1f8ae5) {
                const _0x4d2705 = this['render']['w'] * (0x3e / this['render']['w']) / (_0x1f8ae5['width'] * 1.15);
                ctx['scale'](_0x4d2705, _0x4d2705), ctx['drawImage'](_0x1f8ae5, -_0x1f8ae5['width'] / 0x2, -_0x1f8ae5['width'] / 0x2), ctx['scale'](0x1 / _0x4d2705, 0x1 / _0x4d2705);
            }
        }
        ctx['beginPath'](), ctx['roundRect'](-0x19, -0x19, 0x32, 0x32, 0.25), ctx['stroke'](), ctx['closePath']();
        Colors['rarities'][this['rarity']]['fancy'] !== undefined && window['hqp'] == !![] && (ctx['save'](), ctx['beginPath'](), ctx['rect'](-29.5, -29.5, 0x3b, 0x3b), ctx['rect'](21.5, -21.5, -0x2c, 0x2c), ctx['closePath'](), ctx['clip'](), ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['roundRect'](-27.25, -27.25, 54.5, 54.5, 0x1), ctx['fillStyle'] = _0x2705a7, ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1, ctx['restore']());
        if (_0x470391 !== 0x1)
            ctx['scale'](0x1 / _0x470391, 0x1 / _0x470391);
        if (_0x402847 !== 0x0)
            ctx['rotate'](-_0x402847);
        const _0x4c0aa3 = [
            'Abyssal\x20Artifact',
            'Scorched\x20Artifact',
            'Verdant\x20Artifact',
            'Cosmic\x20Artifact',
            'Chimera'
        ]['includes'](this['type']);
        if (!_0x4c0aa3 && (this['amount'] !== 0x1 || performance['now']() - this['lastAmountChangedTime'] < 0xf0)) {
            performance['now']() - this['lastAmountChangedTime'] < 0xf0 && (ctx['globalAlpha'] = smoothstep((performance['now']() - this['lastAmountChangedTime']) / 0xf0));
            this['amount'] === 0x1 && (ctx['globalAlpha'] = 0x1 - ctx['globalAlpha']);
            ctx['font'] = '600\x20' + 0xd * _0x470391 + 'px\x20Ubuntu', ctx['letterSpacing'] = '1px', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'right', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x2, ctx['translate']((0x46 / 2.5 + 0.5) * _0x470391, (-0x2a / 2.5 + 0.5) * _0x470391), ctx['rotate'](Math['PI'] / 9.1);
            if (this['greyed'])
                ctx['globalAlpha'] *= 0.3;
            ctx['strokeText']('x' + (this['amount'] === 0x1 ? 0x2 : formatAmount(this['amount'])), 0x0, 0x0), ctx['fillText']('x' + (this['amount'] === 0x1 ? 0x2 : formatAmount(this['amount'])), 0x0, 0x0), ctx['globalAlpha'] = 0x1;
        }
        if (this['greyed'])
            ctx['globalAlpha'] = 0x1;
        ctx['setTransform'](ctx['lastTransform']), delete ctx['lastTransform'];
    }
}
function formatAmount(_0x54c39a) {
    if (_0x54c39a < 0x3e8)
        return _0x54c39a;
    ctx['letterSpacing'] = '.5px';
    const _0x318fc3 = [
        {
            'value': 0x2ac3a4edbbfb8000000000000000000000000000000,
            'suffix': 'sDc'
        },
        {
            'value': 0xaf298d050e439800000000000000000000000000,
            'suffix': 'QDc'
        },
        {
            'value': 0x2cd76fe086b93c000000000000000000000000,
            'suffix': 'qDc'
        },
        {
            'value': 0xb7abc627050308000000000000000000000,
            'suffix': 'tDc'
        },
        {
            'value': 0x2f050fe938943a0000000000000000000,
            'suffix': 'dDc'
        },
        {
            'value': 0xc097ce7bc907180000000000000000,
            'suffix': 'uDc'
        },
        {
            'value': 0x314dc6448d933800000000000000,
            'suffix': 'Dc'
        },
        {
            'value': 0xc9f2c9cd04675000000000000,
            'suffix': 'No'
        },
        {
            'value': 0x33b2e3c9fd0804000000000,
            'suffix': 'Oc'
        },
        {
            'value': 0xd3c21bcecceda0000000,
            'suffix': 'Sp'
        },
        {
            'value': 0x3635c9adc5dea00000,
            'suffix': 'Sx'
        },
        {
            'value': 0xde0b6b3a7640000,
            'suffix': 'Qt'
        },
        {
            'value': 0x38d7ea4c68000,
            'suffix': 'Qd'
        },
        {
            'value': 0xe8d4a51000,
            'suffix': 't'
        },
        {
            'value': 0x3b9aca00,
            'suffix': 'b'
        },
        {
            'value': 0xf4240,
            'suffix': 'm'
        },
        {
            'value': 0x3e8,
            'suffix': 'k'
        }
    ];
    for (let _0x4f5445 = 0x0; _0x4f5445 < _0x318fc3['length']; _0x4f5445++) {
        if (_0x54c39a >= _0x318fc3[_0x4f5445]['value']) {
            let _0x2cbc5e = Math['floor'](_0x54c39a / (_0x318fc3[_0x4f5445]['value'] / 0x64)) / 0x64;
            return _0x2cbc5e + _0x318fc3[_0x4f5445]['suffix'];
        }
    }
    return _0x54c39a;
}
function formatAmountHighPrecision(_0xdbd3ed) {
    const _0x5b65f6 = Math['abs'](_0xdbd3ed), _0x437c10 = Math['sign'](_0xdbd3ed);
    if (_0x5b65f6 < 0xa)
        return Math['floor'](_0x5b65f6 * 0x64) / 0x64 * _0x437c10;
    else {
        if (_0x5b65f6 < 0x64)
            return Math['floor'](_0x5b65f6 * 0xa) / 0xa * _0x437c10;
        else {
            if (_0x5b65f6 < 0x3e8)
                return Math['floor'](_0x5b65f6) * _0x437c10;
        }
    }
    const _0x444a9b = [
        {
            'value': 0x2ac3a4edbbfb8000000000000000000000000000000,
            'suffix': 'sDc'
        },
        {
            'value': 0xaf298d050e439800000000000000000000000000,
            'suffix': 'QDc'
        },
        {
            'value': 0x2cd76fe086b93c000000000000000000000000,
            'suffix': 'qDc'
        },
        {
            'value': 0xb7abc627050308000000000000000000000,
            'suffix': 'tDc'
        },
        {
            'value': 0x2f050fe938943a0000000000000000000,
            'suffix': 'dDc'
        },
        {
            'value': 0xc097ce7bc907180000000000000000,
            'suffix': 'uDc'
        },
        {
            'value': 0x314dc6448d933800000000000000,
            'suffix': 'Dc'
        },
        {
            'value': 0xc9f2c9cd04675000000000000,
            'suffix': 'No'
        },
        {
            'value': 0x33b2e3c9fd0804000000000,
            'suffix': 'Oc'
        },
        {
            'value': 0xd3c21bcecceda0000000,
            'suffix': 'Sp'
        },
        {
            'value': 0x3635c9adc5dea00000,
            'suffix': 'Sx'
        },
        {
            'value': 0xde0b6b3a7640000,
            'suffix': 'Qt'
        },
        {
            'value': 0x38d7ea4c68000,
            'suffix': 'Qd'
        },
        {
            'value': 0xe8d4a51000,
            'suffix': 't'
        },
        {
            'value': 0x3b9aca00,
            'suffix': 'b'
        },
        {
            'value': 0xf4240,
            'suffix': 'm'
        },
        {
            'value': 0x3e8,
            'suffix': 'k'
        }
    ];
    for (let _0xef8ddc = 0x0; _0xef8ddc < _0x444a9b['length']; _0xef8ddc++) {
        const {
            value: _0x20d713,
            suffix: _0x39934f
        } = _0x444a9b[_0xef8ddc];
        if (_0x5b65f6 >= _0x20d713) {
            let _0xa0aef1 = Math['floor'](_0x5b65f6 / (_0x20d713 / 0x64)) / 0x64;
            return _0xa0aef1 * _0x437c10 + _0x39934f;
        }
    }
    return _0xdbd3ed;
}
function smoothstep(_0x3526f5) {
    return interpolate(_0x3526f5 * _0x3526f5, 0x1 - (0x1 - _0x3526f5) * (0x1 - _0x3526f5), _0x3526f5);
}
let petalOverrides = {
        'Plastic\x20Egg': {
            0x0: {
                'customName': 'Egg',
                'renderSize': 1.75,
                'petalSize': 12.5
            }
        },
        'Jellyfish\x20Egg': {
            0x0: {
                'customName': 'Egg',
                'renderSize': 1.75,
                'petalSize': 12.5
            }
        },
        'Neuroflare\x20Egg': {
            0x0: {
                'customName': 'Egg',
                'renderSize': 1.75,
                'petalSize': 12.5
            }
        },
        'Egg': {
            0x0: {
                'renderSize': 1.75,
                'petalSize': 12.5
            }
        },
        'Shiny\x20Egg': {
            0x0: {
                'renderSize': 1.75,
                'petalSize': 12.5,
                'customName': 'Egg'
            }
        },
        'Fire\x20Missile': {
            0x0: {
                'customName': 'Missile',
                'mainAngle': 1.25 * Math['PI'] / 0x4,
                'renderSize': 1.25
            }
        },
        'Homing\x20Missile': {
            0x0: {
                'customName': 'Missile',
                'mainAngle': 1.25 * Math['PI'] / 0x4,
                'renderSize': 1.25
            }
        },
        'Amulet\x20of\x20Time': {
            0x0: {
                'customName': 'Amulet',
                'renderSize': 0x2
            },
            0xb: {
                'customName': 'Amulet',
                'renderSize': 0x2
            },
            0xc: {
                'customName': 'Amulet',
                'renderSize': 0x2
            }
        },
        'Amulet\x20of\x20Grace': {
            0x0: {
                'customName': 'Amulet',
                'mainAngle': Math['PI'] / 7.5,
                'renderSize': 0x2
            },
            0xb: {
                'customName': 'Amulet',
                'mainAngle': Math['PI'] / 7.5,
                'renderSize': 0x2
            },
            0xc: {
                'customName': 'Amulet',
                'mainAngle': Math['PI'] / 7.5,
                'renderSize': 0x2
            }
        },
        'Amulet\x20of\x20Divergence': {
            0x0: {
                'customName': 'Amulet',
                'mainAngle': Math['PI'] / 0x4,
                'renderSize': 0x2
            },
            0xb: {
                'customName': 'Amulet',
                'mainAngle': Math['PI'] / 0x4,
                'renderSize': 0x2
            },
            0xc: {
                'customName': 'Amulet',
                'mainAngle': Math['PI'] / 0x4,
                'renderSize': 0x2
            },
            0xd: {
                'customName': 'Amulet',
                'mainAngle': Math['PI'] / 0x4,
                'renderSize': 0x2
            }
        },
        'Missile': {
            0x0: {
                'mainAngle': 1.25 * Math['PI'] / 0x4,
                'renderSize': 1.25
            }
        },
        'Dark\x20Compass': {
            0x0: {
                'customName': 'Compass',
                'mainAngle': -Math['PI'] / 0x4
            },
            0xa: { 'customName': 'Compass' }
        },
        'Waterlogged\x20Compass': {
            0x0: {
                'customName': 'Compass',
                'mainAngle': -Math['PI'] / 0x4
            },
            0xa: { 'customName': 'Compass' }
        },
        'Waterlogged\x20Dark\x20Compass': {
            0x0: {
                'customName': 'Compass',
                'mainAngle': -Math['PI'] / 0x4
            },
            0xa: { 'customName': 'Compass' }
        },
        'Compass': {
            0x0: { 'mainAngle': -Math['PI'] / 0x4 },
            0xa: {}
        },
        'Ikea': {
            0x0: {
                'image': 'https://archello.com/thumbs/images/2014/02/03/IKEA-Tampines.1506072620.5502.jpg?fit=crop&w=414&h=518',
                'petalSize': 0x28
            }
        },
        'Thomas': {
            0x0: {
                'image': 'https://i.pinimg.com/originals/96/21/65/96216524958973ceffb8b7a2f29c9110.png',
                'petalSize': 0x1e
            }
        },
        'Stinger': {
            0x0: { 'petalSize': 7.5 },
            0x6: {
                'multiAngle': -Math['PI'],
                'petalSize': 7.5
            }
        },
        'Blood\x20Jolt': { 0x0: { 'customName': 'Jolt' } },
        'Blood\x20Stinger': {
            0x0: {
                'petalSize': 7.5,
                'customName': 'Stinger'
            },
            0x6: {
                'multiAngle': -Math['PI'],
                'petalSize': 7.5,
                'customName': 'Stinger'
            }
        },
        'Wing': {
            0x0: { 'renderSize': 0x2 },
            0xc: {
                'multiRadius': 0x4,
                'renderSize': 0x2
            },
            0xe: {
                'multiAngle': Math['PI'] / 0x8,
                'multiRadius': 0x4,
                'renderSize': 0x2
            }
        },
        'Shiny\x20Wing': {
            0x0: {
                'renderSize': 0x2,
                'customName': 'Wing'
            },
            0xc: {
                'multiRadius': 0x4,
                'renderSize': 0x2,
                'customName': 'Wing'
            },
            0xe: {
                'multiAngle': Math['PI'] / 0x8,
                'multiRadius': 0x4,
                'renderSize': 0x2,
                'customName': 'Wing'
            }
        },
        'Claw': {
            0x0: { 'renderSize': 0x2 },
            0xf: {
                'multiAngle': 0.763,
                'renderSize': 1.9,
                'multiRadius': 0x7
            }
        },
        'Fangs': {
            0x0: { 'renderSize': 0x2 },
            0x10: {
                'multiRadius': 0x0,
                'renderSize': 2.5,
                'multiAdd': Math['PI'] / 0x2,
                'mainAngle': -Math['PI'] / 0xf + Math['PI'] / 0x2
            }
        },
        'Starfish': {
            0x0: { 'renderSize': 2.5 },
            0xd: {
                'renderSize': 0x2,
                'multiAngle': Math['PI'] / 0x8
            },
            0xe: {
                'mainAngle': 3.3 * Math['PI'] / 0x6,
                'renderSize': 1.9,
                'multiAngle': Math['PI'] / 0x8
            }
        },
        'Brisingida': {
            0x0: { 'renderSize': 2.5 },
            0xd: {
                'renderSize': 0x2,
                'multiAngle': Math['PI'] / 0x8
            },
            0xe: {
                'mainAngle': 0x5 * Math['PI'] / 0x4,
                'renderSize': 1.9,
                'multiAngle': Math['PI'] / 0x8
            },
            0xf: {
                'mainAngle': 3.3 * Math['PI'] / 0x6,
                'renderSize': 1.9,
                'multiAngle': Math['PI'] / 0x8
            }
        },
        'Blade': { 0x0: { 'multiAngle': -Math['PI'] } },
        'Bubble': {
            0x0: {
                'renderSize': 1.825,
                'mainAngle': 0x3 * Math['PI'] / 0x4
            }
        },
        'Shiny\x20Bubble': {
            0x0: {
                'renderSize': 1.75,
                'mainAngle': 0x3 * Math['PI'] / 0x4,
                'customName': 'Bubble'
            }
        },
        'Toxin': { 0x0: { 'renderSize': 0x2 } },
        'Neurotoxin': {
            0x0: {
                'renderSize': 0x2,
                'customName': 'Toxin'
            }
        },
        'Batrachotoxin': {
            0x0: {
                'renderSize': 0x2,
                'customName': 'Toxin'
            }
        },
        'Clover': {
            0x0: { 'renderSize': 2.5 },
            0xc: { 'renderSize': 2.5 },
            0xd: { 'renderSize': 2.5 },
            0xe: { 'renderSize': 2.5 },
            0xf: { 'renderSize': 2.5 },
            0x10: { 'renderSize': 2.5 },
            0x11: { 'renderSize': 2.5 },
            0x12: { 'renderSize': 2.5 },
            0x13: { 'renderSize': 2.5 },
            0x14: { 'renderSize': 2.5 },
            0x15: { 'renderSize': 2.5 },
            0x16: { 'renderSize': 2.5 },
            0x17: { 'renderSize': 2.5 },
            0x18: { 'renderSize': 2.5 },
            0x19: { 'renderSize': 2.5 },
            0x1a: { 'renderSize': 2.5 },
            0x1b: { 'renderSize': 2.5 },
            0x1c: { 'renderSize': 2.5 },
            0x1d: { 'renderSize': 2.5 }
        },
        'Bloom': { 0x0: { 'petalSize': 12.5 } },
        'Neutron\x20Star': { 0x0: { 'renderSize': 0x3 } },
        'Card': {
            0x0: {
                'petalSize': 0xf,
                'mainAngle': -Math['PI'] / 0x4
            }
        },
        'Cash': {
            0x0: {
                'petalSize': 0x19,
                'mainAngle': -Math['PI'] / 0x4
            }
        },
        'Pentagon': { 0x0: { 'renderSize': 2.5 } },
        'Hexagon': {
            0x0: {
                'renderSize': 2.5,
                'mainAngle': -Math['PI'] / 0x4,
                'customName': 'ӇЄҲƛƓƠƝ'
            }
        },
        'Husk': { 0x0: { 'petalSize': 12.5 } },
        'Soil': {
            0x0: {
                'petalSize': 12.5,
                'renderSize': 1.25
            }
        },
        'Square': {
            0x0: {
                'renderSize': 2.25,
                'mainAngle': -Math['PI'] / 0x8,
                'petalSize': 12.5
            }
        },
        'Trident': { 0x0: { 'renderSize': 2.25 } },
        'Coral': { 0x0: { 'renderSize': 2.25 } },
        'Rubber': { 0x0: { 'renderSize': 0x2 } },
        'Sponge': { 0x0: { 'renderSize': 0x3 } },
        'Jelly': { 0x0: { 'renderSize': 0x2 } },
        'Lightning': { 0x0: { 'renderSize': 1.25 } },
        'Shiny\x20Lightning': {
            0x0: {
                'renderSize': 1.25,
                'customName': 'Lightning'
            }
        },
        'Pearl': {
            0x0: { 'renderSize': 2.5 },
            0xe: {
                'renderSize': 2.25,
                'multiRadius': 0x5
            }
        },
        'Cactus': {
            0x0: { 'petalSize': 12.5 },
            0x1: { 'petalSize': 12.5 },
            0x2: { 'petalSize': 12.5 },
            0x3: { 'petalSize': 12.5 },
            0x4: { 'petalSize': 12.5 },
            0x5: { 'petalSize': 12.5 },
            0x6: { 'petalSize': 12.5 },
            0x7: { 'petalSize': 12.5 }
        },
        'Shiny\x20Cactus': {
            0x0: {
                'petalSize': 12.5,
                'customName': 'Cactus'
            },
            0x7: {
                'petalSize': 12.5,
                'customName': 'Cactus'
            }
        },
        'Bloodshot\x20Eye': { 0x0: { 'renderSize': 1.75 } },
        'Third\x20Eye': { 0x0: { 'renderSize': 1.75 } },
        'Mandible': {
            0x0: {
                'petalSize': 12.5,
                'renderSize': 0x2
            },
            0xd: {
                'petalSize': 12.5,
                'renderSize': 1.75,
                'multiRadius': 7.5
            }
        },
        'Blood\x20Mandible': {
            0x0: {
                'customName': 'Mandible',
                'petalSize': 12.5,
                'renderSize': 0x2
            },
            0xd: {
                'customName': 'Mandible',
                'petalSize': 12.5,
                'renderSize': 1.75,
                'multiRadius': 7.5
            }
        },
        'Magnet': {
            0x0: { 'renderSize': 2.5 },
            0xa: {
                'renderSize': 0x2,
                'multiRadius': 7.5
            },
            0xd: {
                'renderSize': 0x2,
                'multiRadius': 7.5,
                'multiAngle': -Math['PI'] / 1.5
            }
        },
        'Oranges': { 0xc: { 'mainAngle': -Math['PI'] / 0x2 } },
        'Blood\x20Oranges': {
            0x0: { 'customName': 'Oranges' },
            0xc: {
                'mainAngle': -Math['PI'] / 0x2,
                'customName': 'Oranges'
            }
        },
        'Fig': { 0x0: { 'renderSize': 2.3 } },
        'Coconut': {
            0x0: { 'renderSize': 2.4 },
            0xe: {
                'renderSize': 2.2,
                'multiRadius': 0x5
            }
        },
        'Root': { 0x0: { 'renderSize': 2.4 } },
        'Heavy': { 0x0: { 'renderSize': 2.5 } },
        'Rog456': {
            0x0: {
                'renderSize': 0x2,
                'multiRadius': 0xa
            }
        },
        'Rice': {
            0x0: {
                'renderSize': 1.75,
                'mainAngle': Math['PI'] / 0x4
            }
        },
        'Ricemissile': {
            0x0: {
                'renderSize': 1.75,
                'mainAngle': Math['PI'] / 0x4
            }
        },
        'Faster': { 0x0: { 'petalSize': 7.5 } },
        'Dandelion': {
            0x0: { 'mainAngle': Math['PI'] / 0x4 },
            0x5: { 'multiAngle': Math['PI'] / 0x4 + Math['PI'] / 0xc },
            0x5: { 'multiAngle': 0x2 * Math['PI'] / 0x3 - Math['PI'] / 0xc },
            0xc: { 'multiAngle': Math['PI'] / 0x5 + Math['PI'] }
        },
        'Pollen': { 0x0: { 'petalSize': 7.5 } },
        'Yin\x20Yang': { 0x0: { 'petalSize': 0xf } },
        'Dahlia': { 0x0: { 'petalSize': 7.5 } },
        'Rose': {
            0x0: { 'petalSize': 12.5 },
            0xc: { 'petalSize': 12.5 }
        },
        'Light': { 0x0: { 'petalSize': 7.5 } },
        'Blood\x20Light': {
            0x0: {
                'petalSize': 7.5,
                'customName': 'Light'
            }
        },
        'Blood\x20Rose': {
            0x0: {
                'petalSize': 12.5,
                'customName': 'Rose'
            }
        },
        'Powder': {
            0x0: { 'petalSize': 8.25 },
            0x10: { 'petalSize': 8.25 },
            0x11: { 'petalSize': 8.25 }
        },
        'Sand': { 0x0: { 'petalSize': 7.5 } },
        'Rock': {
            0x0: {
                'petalSize': 12.5,
                'renderSize': 1.75
            },
            0x7: {
                'image': 'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg',
                'renderSize': 4.25
            },
            0x8: {
                'petalSize': 12.5,
                'renderSize': 1.75
            }
        },
        'Iris': {
            0x0: { 'petalSize': 7.5 },
            0xd: { 'petalSize': 0xf },
            0xe: { 'petalSize': 0x14 }
        },
        'Shiny\x20Iris': {
            0x0: {
                'petalSize': 7.5,
                'customName': 'Iris'
            },
            0xd: {
                'petalSize': 0xf,
                'customName': 'Iris'
            },
            0xe: {
                'petalSize': 0x14,
                'customName': 'Iris'
            }
        },
        'Corn': {
            0x0: { 'petalSize': 0xf },
            0xf: {
                'renderSize': 1.67,
                'mainAngle': -Math['PI'] / 0x6
            },
            0x10: {
                'renderSize': 1.67,
                'mainAngle': -Math['PI'] / 0x4
            }
        },
        'Blood\x20Corn': {
            0x0: {
                'petalSize': 0xf,
                'customName': 'Corn'
            },
            0xf: {
                'renderSize': 1.6,
                'mainAngle': -Math['PI'] / 0x6,
                'customName': 'Corn'
            },
            0x10: {
                'renderSize': 1.6,
                'customName': 'Corn',
                'mainAngle': -Math['PI'] / 0x4
            }
        },
        'Honey': { 0x0: { 'petalSize': 12.5 } },
        'Web': { 0x0: { 'petalSize': 12.5 } },
        'Bone': {
            0x0: { 'petalSize': 12.5 },
            0x10: {
                'multiRadius': 0x0,
                'multiAdd': Math['PI'] / 0x2,
                'petalSize': 12.5,
                'renderSize': 1.75,
                'mainAngle': -Math['PI'] / 0xf
            }
        },
        'Dark\x20Spine': {
            0x0: {
                'renderSize': 0x2,
                'mainAngle': -Math['PI'] / 0x4,
                'customName': 'Spine'
            }
        },
        'Peas': {
            0x0: { 'renderSize': 1.25 },
            0xc: {}
        },
        'Grapes': {
            0x0: { 'renderSize': 1.25 },
            0xc: {}
        },
        'Mini\x20Flower': {
            0x0: {
                'renderSize': 0x2,
                'customName': 'Flower'
            }
        },
        'Horn': { 0x0: { 'renderSize': 0x2 } },
        'Blood\x20Horn': {
            0x0: {
                'renderSize': 0x2,
                'customName': 'Horn'
            }
        },
        'Blood\x20Leaf': {
            0x0: { 'customName': 'Leaf' },
            0x10: {
                'customName': 'Leaf',
                'petalSize': 0xf
            }
        },
        'Shard\x20of\x20Divergence': {
            0x0: {
                'customName': 'Shard',
                'mainAngle': Math['PI'] / 7.5,
                'renderSize': 0x2
            }
        },
        'Shard\x20of\x20Time': {
            0x0: {
                'customName': 'Shard',
                'mainAngle': Math['PI'] / 7.5,
                'renderSize': 0x2
            }
        },
        'Shard\x20of\x20Grace': {
            0x0: {
                'customName': 'Shard',
                'mainAngle': Math['PI'] / 7.5,
                'renderSize': 0x2
            }
        },
        'Trinket\x20of\x20the\x20Hivemind': {
            0x0: {
                'customName': 'Trinket',
                'renderSize': 2.5
            }
        },
        'Trinket\x20of\x20the\x20Sea': {
            0x0: {
                'customName': 'Trinket',
                'renderSize': 2.5,
                'mainAngle': Math['PI'] / 0x4
            }
        },
        'Trinket\x20of\x20the\x20Wild': {
            0x0: {
                'customName': 'Trinket',
                'renderSize': 2.5
            }
        },
        'Ant\x20Egg': {
            0x0: {
                'customName': 'Egg',
                'multiRadius': 7.5,
                'renderSize': 1.75
            }
        },
        'Shiny\x20Leaf': {
            0x0: { 'customName': 'Leaf' },
            0x10: {
                'customName': 'Leaf',
                'petalSize': 0xf
            }
        },
        'Thorax': {
            0x0: {
                'mainAngle': -Math['PI'] / 0x4,
                'renderSize': 0x2
            }
        },
        'Carapace': {
            0x0: {
                'mainAngle': -Math['PI'] / 0x4,
                'renderSize': 0x2
            }
        },
        'Lilypad': {
            0x0: {
                'mainAngle': -Math['PI'] / 0x4,
                'renderSize': 2.5
            }
        },
        'Blossom': { 0x0: { 'renderSize': 0x4 } },
        'Plank': {
            0x0: {
                'mainAngle': -Math['PI'] / 0x4,
                'renderSize': 2.2
            }
        },
        'Carrot': {
            0x0: {
                'mainAngle': Math['PI'] / 0x4,
                'renderSize': 2.5
            }
        },
        'Shattered\x20Relic\x20of\x20Wrath': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Reinforced\x20Relic\x20of\x20Wrath': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Subset\x20Relic\x20of\x20the\x20Guardian': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Division\x20Relic\x20of\x20the\x20Guardian': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Guard\x20Relic\x20of\x20the\x20Guardian': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Knight\x20Relic\x20of\x20the\x20Guardian': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Aid\x20Relic\x20of\x20Serenity': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Subliminal\x20Relic\x20of\x20Serenity': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Barrier\x20Relic\x20of\x20Serenity': {
            0x0: {
                'customName': 'Relic',
                'renderSize': 2.5
            }
        },
        'Spikes': { 0x0: { 'renderSize': 1.2 } },
        'Leaf': {
            0x10: {
                'customName': 'Leaf',
                'petalSize': 0xf
            }
        },
        'Cinderleaf': {
            0x0: { 'customName': 'Leaf' },
            0x10: {
                'customName': 'Leaf',
                'petalSize': 0xf
            }
        },
        'Shiny\x20Ruby': { 0x0: { 'customName': 'Ruby' } },
        'Ruby': {
            0x0: { 'petalSize': 0xa },
            0x10: { 'petalSize': 0xa },
            0x11: { 'petalSize': 0xa }
        },
        'Shiny\x20Yucca': { 0x0: { 'customName': 'Yucca' } }
    }, enemyOverrides = {
        'Centipede': {
            'customRender': () => {
                enemyRenderMap['Centipede']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x19,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'isInEnemyBox': !![],
                    'isHead': !![]
                }), ctx['translate'](-0x32, 0x0), enemyRenderMap['Centipede']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x19,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'isInEnemyBox': !![]
                }), ctx['translate'](0x32, 0x0);
            },
            'renderSize': 0.825
        },
        'Evil\x20Centipede': {
            'customRender': () => {
                enemyRenderMap['Evil\x20Centipede']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x19,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'isInEnemyBox': !![],
                    'isHead': !![]
                }), ctx['translate'](-0x32, 0x0), enemyRenderMap['Evil\x20Centipede']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x19,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'isInEnemyBox': !![]
                }), ctx['translate'](0x32, 0x0);
            },
            'renderSize': 0.825
        },
        'Desert\x20Centipede': {
            'customRender': () => {
                enemyRenderMap['Desert\x20Centipede']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x19,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'isInEnemyBox': !![],
                    'isHead': !![]
                }), ctx['translate'](-0x32, 0x0), enemyRenderMap['Desert\x20Centipede']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x19,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'isInEnemyBox': !![]
                }), ctx['translate'](0x32, 0x0);
            },
            'renderSize': 0.825
        },
        'Evil\x20Desert\x20Centipede': {
            'customRender': () => {
                enemyRenderMap['Evil\x20Desert\x20Centipede']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x19,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'isInEnemyBox': !![],
                    'isHead': !![]
                }), ctx['translate'](-0x32, 0x0), enemyRenderMap['Evil\x20Desert\x20Centipede']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x19,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'isInEnemyBox': !![]
                }), ctx['translate'](0x32, 0x0);
            },
            'renderSize': 0.825
        },
        'DandelionMissile': { 'renderSize': 0.825 },
        'Dandelion': {
            'customRender': () => {
                for (let _0x3f87c1 = 0x0, _0x346872 = 0xa; _0x3f87c1 < _0x346872; _0x3f87c1++) {
                    ctx['rotate'](_0x3f87c1 * Math['PI'] * 0x2 / _0x346872), ctx['translate'](0x2d, 0x0), enemyRenderMap['DandelionMissile']({
                        'render': {
                            'radius': 0xa,
                            'angle': 0x0,
                            'time': 0x4c4b40,
                            'lastX': -0x64,
                            'lastY': -0x64,
                            'x': 0x64,
                            'y': 0x64
                        },
                        'radius': 0x1,
                        'lastTicksSinceLastDamaged': 0x3e8,
                        'ticksSinceLastDamaged': 0x3e8,
                        'rarity': 0x0
                    }), ctx['translate'](-0x2d, 0x0), ctx['rotate'](-_0x3f87c1 * Math['PI'] * 0x2 / _0x346872);
                }
                enemyRenderMap['Dandelion']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x1,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0
                });
            },
            'renderSize': 0.75
        },
        'Ant\x20Burrow': { 'renderSize': 1.5 },
        'Shiny\x20Ant\x20Burrow': { 'renderSize': 1.325 },
        'Fire\x20Ant\x20Burrow': {
            'renderSize': 1.325,
            'customRender': () => {
                enemyRenderMap['Fire\x20Ant\x20Burrow']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x1,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0,
                    'poppable': !![]
                });
            }
        },
        'Sea\x20Floor\x20Burrow': { 'renderSize': 1.5 },
        'Spider': { 'renderSize': 0.625 },
        'Gloomcrawler': { 'renderSize': 0.625 },
        'Tarantula': { 'renderSize': 0.625 },
        'Leech': {
            'angle': Math['PI'] * 0x2,
            'renderSize': 1.25
        },
        'Dark\x20Electric\x20Eel': {
            'angle': Math['PI'] * 0x2,
            'renderSize': 1.25
        },
        'Electric\x20Eel': {
            'angle': Math['PI'] * 0x2,
            'renderSize': 1.25
        },
        'Shiny\x20Electric\x20Eel': {
            'angle': Math['PI'] * 0x2,
            'renderSize': 1.25
        },
        '1v1text': { 'angle': Math['PI'] },
        'Agar.io\x20Cell': { 'angle': Math['PI'] },
        'Sandstorm': { 'renderSize': 1.25 },
        'Hornet': { 'renderSize': 1.325 },
        'Root': { 'renderSize': 1.3 },
        'Worker\x20Ant': { 'renderSize': 0.625 },
        'Soldier\x20Ant': { 'renderSize': 0.625 },
        'Baby\x20Ant': { 'renderSize': 0.625 },
        'Soldier\x20Fire\x20Ant': { 'renderSize': 0.625 },
        'Baby\x20Fire\x20Ant': { 'renderSize': 0.625 },
        'Worker\x20Fire\x20Ant': { 'renderSize': 0.625 },
        'Soldier\x20Termite': { 'renderSize': 0.625 },
        'Gnat': { 'renderSize': 0.5 },
        'Baby\x20Termite': { 'renderSize': 0.625 },
        'Worker\x20Termite': { 'renderSize': 0.625 },
        'Termite\x20Mound': { 'renderSize': 1.5 },
        'Soldier\x20Shiny\x20Ant': { 'renderSize': 0.625 },
        'Rock': { 'renderSize': 1.125 },
        'Sandstone': { 'renderSize': 1.125 },
        'Soil': { 'renderSize': 0.75 },
        'Dark\x20Beetle': {
            'customRender': () => {
                ctx['translate'](-7.5, 0x0), enemyRenderMap['Dark\x20Beetle']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x1,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0
                }), ctx['translate'](7.5, 0x0);
            }
        },
        'Shiny\x20Beetle': {
            'customRender': () => {
                ctx['translate'](-7.5, 0x0), enemyRenderMap['Shiny\x20Beetle']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x1,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0
                }), ctx['translate'](7.5, 0x0);
            }
        },
        'Beetle': {
            'customRender': () => {
                ctx['translate'](-7.5, 0x0), enemyRenderMap['Beetle']({
                    'render': {
                        'radius': 0x19,
                        'angle': 0x0,
                        'time': 0x4c4b40,
                        'lastX': -0x64,
                        'lastY': -0x64,
                        'x': 0x64,
                        'y': 0x64
                    },
                    'radius': 0x1,
                    'lastTicksSinceLastDamaged': 0x3e8,
                    'ticksSinceLastDamaged': 0x3e8,
                    'rarity': 0x0
                }), ctx['translate'](7.5, 0x0);
            }
        },
        'Scorpion': { 'renderSize': 1.125 },
        'Cactus': { 'renderSize': 1.25 },
        'Shiny\x20Cactus': { 'renderSize': 1.25 },
        'Sunlit\x20Frog': { 'renderSize': 0.75 },
        'Moonlit\x20Frog': { 'renderSize': 0.75 },
        'Ruby\x20Frog': { 'renderSize': 0.75 },
        'Poison\x20Dart\x20Frog': { 'renderSize': 0.75 },
        'Locust': { 'renderSize': 1.25 },
        'Starfish': { 'renderSize': 0.75 },
        'Brisingida': { 'renderSize': 0.75 },
        'Shell': { 'renderSize': 1.25 },
        'Sponge': { 'renderSize': 1.25 },
        'Crab': { 'renderSize': 0.8 },
        'Coral': {
            'renderSize': 1.25,
            'angle': Math['PI'] * 0x2
        }
    };
function clonePC(_0x4601f1, _0xf35009 = undefined) {
    if (_0xf35009 !== undefined)
        for (let _0x332d17 in _0xf35009) {
            _0x4601f1[_0x332d17] = _0xf35009[_0x332d17];
        }
    return new PetalContainer(_0x4601f1['petals']['map'](_0x45526c => new Petal(_0x45526c)), { ..._0x4601f1 }, _0x4601f1['id'], _0x4601f1['amount'], _0x4601f1['attempt']);
}
function cloneEnemyPC(_0x241a9f, _0x35e4a8 = undefined) {
    if (_0x35e4a8 !== undefined)
        for (let _0x55e942 in _0x35e4a8) {
            _0x241a9f[_0x55e942] = _0x35e4a8[_0x55e942];
        }
    return new PetalContainer(_0x241a9f['petals']['map'](_0x1652b8 => new Enemy(_0x1652b8)), { ..._0x241a9f }, _0x241a9f['id'], _0x241a9f['amount'], _0x241a9f['attempt']);
}
function setPcIndexes(_0x20e441) {
    if (!Stats['petals'][_0x20e441] && currentBiome !== '1v1')
        window['calculateStats']();
    if (!pvpStats['petals'][_0x20e441] && currentBiome === '1v1')
        petalRenderMap[_0x20e441] && window['calculateStats'](!![]);
    cachedImages['petals']['indexed'][_0x20e441] = [];
    let _0x39ac60 = 0x0, _0x37ba56 = 0x1, _0x158cb7 = petalOverrides[_0x20e441];
    for (let _0x1ba9db = 0x0; _0x1ba9db < Stats['rarities']['length']; _0x1ba9db++) {
        let _0x33d684 = {}, _0x3c37d9 = ![];
        if (petalOverrides[_0x20e441])
            for (let _0x47c87d in petalOverrides[_0x20e441]) {
                _0x47c87d = Number(_0x47c87d);
                if (_0x1ba9db == _0x47c87d)
                    _0x158cb7 = _0x1ba9db, _0x33d684['override'] = petalOverrides[_0x20e441][_0x1ba9db], _0x3c37d9 = !![];
                else
                    _0x1ba9db >= _0x158cb7 && (_0x33d684['override'] = petalOverrides[_0x20e441][_0x158cb7]);
            }
        const _0x5776bf = currentBiome === '1v1' && petalRenderMap[_0x20e441] && pvpStats['petals'][_0x20e441] && pvpStats['petals'][_0x20e441][_0x1ba9db], _0x4c81df = _0x5776bf ? pvpStats['petals'][_0x20e441][_0x1ba9db]['petalLayout'] : Stats['petals'][_0x20e441][_0x1ba9db]['petalLayout'];
        let _0x3a04d9 = 0x1;
        _0x4c81df[0x0]['length'] !== 0x1 ? _0x3a04d9 = _0x4c81df[0x0]['length'] : _0x3a04d9 = _0x4c81df['length'];
        _0x3a04d9 !== _0x37ba56 && (_0x37ba56 = _0x3a04d9, _0x3c37d9 = !![]);
        _0x33d684['count'] = _0x3a04d9;
        if (_0x3c37d9 === !![])
            _0x39ac60++;
        cachedImages['petals']['indexed'][_0x20e441][_0x1ba9db] = {
            'index': _0x39ac60,
            'data': _0x33d684
        };
    }
}