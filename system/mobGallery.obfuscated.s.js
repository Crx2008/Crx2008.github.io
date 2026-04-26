let discoveredEnemies = localStorage['getItem']('discoveredEnemies');
if (discoveredEnemies === null)
    discoveredEnemies = {};
else
    try {
        discoveredEnemies = JSON['parse'](discoveredEnemies);
    } catch (_0x3bdd74) {
        console['log']('parsing\x20error!', _0x3bdd74), discoveredEnemies = {};
    }
function addDiscoveredEnemy(_0x3d2901 = 'Ladybug', _0x21d738 = 0x0) {
    if (discoveredEnemies[_0x3d2901] === undefined)
        discoveredEnemies[_0x3d2901] = [];
    discoveredEnemies[_0x3d2901][_0x21d738] = !![], mobGallery['toRegenerate'] = !![], localStorage['setItem']('discoveredEnemies', JSON['stringify'](discoveredEnemies));
}
class MobGallery {
    constructor() {
        this['resize'](), this['icon'] = null, this['hoveringOverButton'] = ![], this['hoveringOverX'] = ![], this['menuActive'] = ![], this['lastCloseTime'] = 0x0, this['lastOpenTime'] = 0x0, this['rows'] = {}, this['toRegenerate'] = !![], this['fillerPetalSlots'] = {}, this['scroll'] = {
            'x': 0x0,
            'y': 0x0,
            'render': {
                'x': 0x0,
                'y': 0x0
            }
        }, this['horizontalScrollBarEnabled'] = ![], this['scrollExcess'] = {
            'x': 0x0,
            'y': 0x0
        };
    }
    ['fadeOut']() {
        this['fadingOut'] = !![], this['originalFadeOutTime'] = time, setTimeout(() => {
            delete this['fadingOut'], this['menuActive'] === !![] && this['toggleMenu']();
        }, 0x64);
    }
    ['resize'](_0x2b66e7 = undefined) {
        this['dimensions'] = {
            'x': 0x82,
            'y': canvas['h'] - this['h'] - 0x14,
            'w': 0x285,
            'h': _0x2b66e7 ?? 0x17e
        };
        for (let _0x578f8d in this['dimensions']) {
            this[_0x578f8d] = this['dimensions'][_0x578f8d];
        }
        this['iconDimensions'] = {
            'x': 0x14,
            'y': canvas['h'] - 0x14 - 0x50,
            'w': 0x50,
            'h': 0x50
        }, this['XDimensions'] = {
            'x': this['x'] + this['w'] - 7.5 - 0x1e - 0x3,
            'y': this['y'] + 7.5 + 0x3,
            'w': 0x1e,
            'h': 0x1e
        }, this['inventorySpace'] = {
            'x': this['x'],
            'y': this['y'],
            'w': this['w'] - 0x43,
            'h': this['h']
        }, this['scrollBarSize'] = 0x4b, this['scrollBounds'] = {
            'x': {
                'start': this['x'] + this['scrollBarSize'] / 0x2 + 0xe,
                'end': this['x'] + this['w'] - this['scrollBarSize'] / 0x2 - 0xe - 0x14
            },
            'y': {
                'start': this['y'] + this['scrollBarSize'] / 0x2 + 0x2 + 0x3c,
                'end': this['y'] + this['h'] - this['scrollBarSize'] / 0x2 - 0xe
            }
        };
    }
    ['isPointInButton'](_0x2954aa, _0x5a4857) {
        const _0x6a333b = 0x14, _0x40c3c6 = canvas['h'] - 0x14 - 0x50, _0x408dc8 = 0x50, _0xd0b0e4 = 0x50;
        return _0x2954aa >= _0x6a333b && _0x2954aa <= _0x6a333b + _0x408dc8 && _0x5a4857 >= _0x40c3c6 && _0x5a4857 <= _0x40c3c6 + _0xd0b0e4;
    }
    ['mouseDown']({
        x: _0x61d31f,
        y: _0x2a2d96
    }) {
        this['hoveringOverScrollbarH'] === !![] && (this['draggingScrollBarH'] = !![]), this['hoveringOverScrollbarV'] === !![] && (this['draggingScrollBarV'] = !![]);
    }
    ['getHorizScrollBarDimensions']() {
        return {
            'x': this['scrollBounds']['x']['start'] + this['scroll']['render']['x'] * (this['scrollBounds']['x']['end'] - this['scrollBounds']['x']['start']) - this['scrollBarSize'] / 0x2,
            'y': this['y'] + this['h'] - 0x11,
            'w': this['scrollBarSize'],
            'h': 0xa
        };
    }
    ['getVertScrollBarDimensions']() {
        return {
            'x': this['x'] + this['w'] - 0x14 - 0xa / 0x2,
            'y': this['scrollBounds']['y']['start'] + this['scroll']['render']['y'] * (this['scrollBounds']['y']['end'] - this['scrollBounds']['y']['start']) - this['scrollBarSize'] / 0x2,
            'w': 0xa,
            'h': this['scrollBarSize']
        };
    }
    ['mouseMove']({
        x: _0x29ff72,
        y: _0x2d7cdb
    }) {
        if (this['menuActive'] !== !![])
            return;
        this['hoveringOverScrollbarH'] = ![], this['hoveringOverScrollbarV'] = ![];
        if (mouseInBox({
                'x': _0x29ff72,
                'y': _0x2d7cdb
            }, this['getHorizScrollBarDimensions']()))
            this['hoveringOverScrollbarH'] = !![];
        else
            mouseInBox({
                'x': _0x29ff72,
                'y': _0x2d7cdb
            }, this['getVertScrollBarDimensions']()) && this['scrollExcess']['y'] > 0x0 && (this['hoveringOverScrollbarV'] = !![]);
        if (this['draggingScrollBarH']) {
            const {
                start: _0x2ae0a8,
                end: _0x41d4d4
            } = this['scrollBounds']['x'];
            this['scroll']['x'] = (_0x29ff72 - _0x2ae0a8) / (_0x41d4d4 - _0x2ae0a8);
        } else {
            if (this['draggingScrollBarV']) {
                const {
                    start: _0x388c73,
                    end: _0x2d1061
                } = this['scrollBounds']['y'];
                this['scroll']['y'] = (_0x2d7cdb - _0x388c73) / (_0x2d1061 - _0x388c73);
            }
        }
    }
    ['mouseUp']({
        x: _0x27c68c,
        y: _0x2632bc
    }) {
        if (this['menuActive'] !== !![])
            return;
        this['draggingScrollBarH'] = this['draggingScrollBarV'] = ![];
    }
    ['getMainStroke']() {
        return '#b0ae3d';
    }
    ['getMainFill']() {
        return '#dbd74b';
    }
    ['getHoverFill']() {
        return blendColor('#dbd74b', '#FFFFFF', 0.1);
    }
    ['drawIcon']() {
        ctx['lineWidth'] = 0x6, ctx['fillStyle'] = this['getMainFill'](), ctx['strokeStyle'] = this['getMainStroke']();
        const _0x42e31a = mouseInBox({
            'x': mouse['canvasX'],
            'y': mouse['canvasY']
        }, this['iconDimensions']);
        _0x42e31a ? (ctx['fillStyle'] = this['getHoverFill'](), setCursor('pointer'), this['hoveringOverButton'] = !![]) : this['hoveringOverButton'] = ![];
        ctx['beginPath'](), ctx['roundRect'](0x14, canvas['h'] - 0x14 - 0x50, 0x50, 0x50, 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['font'] = '900\x2030px\x20Ubuntu', ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x2, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('📖', 0x3c, canvas['h'] - 0x14 - 0x28), ctx['fillText']('📖', 0x3c, canvas['h'] - 0x14 - 0x28), ctx['fillStyle'] = '#f0f0f0', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 2.25, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2014px\x20Ubuntu';
        const _0x27f209 = ctx['letterSpacing'];
        ctx['letterSpacing'] = '0px', ctx['strokeText']('[V]', 0x14 + 0x50 - 0xf - 2.5, canvas['h'] - 0x14 - 0x50 + 0xf), ctx['fillText']('[V]', 0x14 + 0x50 - 0xf - 2.5, canvas['h'] - 0x14 - 0x50 + 0xf), ctx['letterSpacing'] = ctx['lastLetterSpacing'];
    }
    ['toggleMenu']() {
        craftingMenu['menuActive'] === !![] && craftingMenu['toggleMenu']();
        globalInventory['menuActive'] === !![] && globalInventory['toggleMenu']();
        specialGlobalInventory['menuActive'] === !![] && specialGlobalInventory['toggleMenu']();
        this['menuActive'] === !![] ? this['lastCloseTime'] = time : (this['lastOpenTime'] = time, globalInventory['menuActive'] === !![] && globalInventory['toggleMenu']());
        this['menuActive'] = !this['menuActive'];
        for (let _0x4da8c6 in this['rows']) {
            const _0x565948 = this['rows'][_0x4da8c6];
            for (let _0x1fa5fa = 0x0; _0x1fa5fa < _0x565948['length']; _0x1fa5fa++) {
                if (_0x565948[_0x1fa5fa]['petals'] === undefined)
                    continue;
                _0x565948[_0x1fa5fa]['petals'][0x0]['lastIsHovered'] = ![];
            }
        }
    }
    ['draw']() {
        if (Number['isFinite'](this['y']) === ![])
            this['y'] = this['dimensions']['y'] = canvas['h'] - this['h'] - 0x14;
        this['toRegenerate'] && Object['keys'](window['enemyStats'])['length'] > 0x0 && (this['regenerateMobs'](window['structuredClone'](discoveredEnemies)), this['toRegenerate'] = ![]);
        this['resize']();
        let _0x5478ce = this['fadingOut'] === !![] ? 0x1 - (time - this['originalFadeOutTime']) / 0x64 : 0x1;
        this['drawIcon'](_0x5478ce), this['menuActive'] === !![] || time - this['lastCloseTime'] < 0xa0 ? (this['drawInventory'](_0x5478ce), this['drawRowStatBoxes']()) : this['hoveringOverX'] = ![];
    }
    ['drawScrollBars']() {
        if (isNaN(this['scroll']['y']))
            this['scroll']['y'] = 0x0;
        this['scroll']['x'] = Math['min'](0x1, Math['max'](0x0, this['scroll']['x'])), this['scroll']['y'] = Math['min'](0x1, Math['max'](0x0, this['scroll']['y'])), this['scroll']['render']['x'] = interpolate(this['scroll']['render']['x'], this['scroll']['x'], this['draggingScrollBarH'] ? 0.28 : 0.08), this['scroll']['render']['y'] = interpolate(this['scroll']['render']['y'], this['scroll']['y'], this['draggingScrollBarV'] ? 0.28 : 0.08);
        (this['hoveringOverScrollbarH'] === !![] || this['hoveringOverScrollbarV'] === !![] || this['draggingScrollBarH'] || this['draggingScrollBarV']) && setCursor('pointer');
        if (this['horizontalScrollBarEnabled'] === !![]) {
            const _0x37b116 = this['getHorizScrollBarDimensions']();
            ctx['strokeStyle'] = blendColor(this['getMainStroke'](), '#000000', 0.1), ctx['lineWidth'] = 0x8, ctx['lineCap'] = 'round', ctx['beginPath'](), ctx['moveTo'](_0x37b116['x'], _0x37b116['y'] + _0x37b116['h'] / 0x2), ctx['lineTo'](_0x37b116['x'] + _0x37b116['w'], _0x37b116['y'] + _0x37b116['h'] / 0x2), ctx['stroke'](), ctx['closePath']();
        }
        if (this['scrollExcess']['y'] > 0x0) {
            const _0x450c99 = this['getVertScrollBarDimensions']();
            ctx['beginPath'](), ctx['moveTo'](_0x450c99['x'] + _0x450c99['w'] / 0x2, _0x450c99['y']), ctx['lineTo'](_0x450c99['x'] + _0x450c99['w'] / 0x2, _0x450c99['y'] + _0x450c99['h']), ctx['stroke'](), ctx['closePath']();
        }
    }
    ['drawInventory'](_0x45b57d = 0x1) {
        _0x45b57d !== 0x1 && (ctx['globalAlpha'] = _0x45b57d);
        let _0x3eedff = 0x0;
        time - this['lastCloseTime'] < 0xa0 && (_0x3eedff += (this['h'] + 0x28) * easeOutCubic((time - this['lastCloseTime']) / 0xa0)), time - this['lastOpenTime'] < 0xa0 && (_0x3eedff += this['h'] + 0x28 - (this['h'] + 0x28) * easeOutCubic((time - this['lastOpenTime']) / 0xa0)), _0x3eedff !== 0x0 && ctx['translate'](0x0, _0x3eedff), (this['hoveringOverScrollbar'] === !![] || this['draggingScrollBar'] === !![]) && setCursor('pointer'), ctx['translate'](this['x'], this['y']), ctx['fillStyle'] = this['getMainFill'](), ctx['strokeStyle'] = this['getMainStroke'](), ctx['lineWidth'] = 0x8, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), this['menuActive'] === !![] && _0x3eedff === 0x0 ? mouseInBox({
            'x': mouse['canvasX'],
            'y': mouse['canvasY']
        }, this['XDimensions']) ? (ctx['fillStyle'] = '#c16666', setCursor('pointer'), this['hoveringOverX'] = !![]) : (this['hoveringOverX'] = ![], ctx['fillStyle'] = '#c1565e') : (ctx['fillStyle'] = '#c1565e', this['hoveringOverX'] = ![]), ctx['translate'](-0x3, 0x3), ctx['strokeStyle'] = '#90464b', ctx['lineWidth'] = 0x5, ctx['beginPath'](), ctx['roundRect'](this['w'] - 7.5 - 0x1e, 7.5, 0x1e, 0x1e, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 4.75, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#cccccc', ctx['beginPath'](), ctx['moveTo'](this['w'] - 0x1e, 0x1e), ctx['lineTo'](this['w'] - 7.5 * 0x2, 7.5 + 7.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](this['w'] - 7.5 * 0x2, 0x1e), ctx['lineTo'](this['w'] - 0x1e, 7.5 + 7.5), ctx['stroke'](), ctx['closePath'](), ctx['translate'](0x3, -0x3), ctx['translate'](-this['x'], -this['y']), this['drawRows'](), ctx['translate'](this['x'], this['y']), ctx['fillStyle'] = this['getMainFill'](), ctx['strokeStyle'] = this['getMainStroke'](), ctx['lineWidth'] = 0x8, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x3), ctx['stroke'](), ctx['closePath'](), ctx['translate'](-this['x'], -this['y']), this['isEmpty'] === ![] && this['drawScrollBars'](), _0x3eedff !== 0x0 && ctx['translate'](0x0, -_0x3eedff), ctx['globalAlpha'] = 0x1;
    }
    ['drawRows']() {
        if (window['enemyStats'] !== undefined && window['enemyStats']['Ladybug']?.['drops'] === undefined) {
            window['calculateStats'](![]);
            for (let _0x5db9ed in Stats['enemies']) {
                const _0x471a44 = Stats['enemies'][_0x5db9ed], _0x154ce5 = {};
                for (let _0x48beee in _0x471a44) {
                    _0x154ce5[_0x48beee] = _0x471a44[_0x48beee]['drops'];
                }
                if (window?.['enemyStats'][_0x5db9ed] === undefined)
                    window['enemyStats'][_0x5db9ed] = {};
                window['enemyStats'][_0x5db9ed]['drops'] = _0x154ce5;
            }
            let _0x198c68 = [];
            for (let _0x83b1d0 in baseStats['enemies']) {
                const _0x157380 = baseStats['enemies'][_0x83b1d0];
                _0x198c68['push'](_0x83b1d0, _0x157380['health'], _0x157380['damage'], _0x157380['speed'], _0x157380['mass']);
            }
            for (let _0x539666 = 0x0; _0x539666 < _0x198c68['length']; _0x539666 += 0x5) {
                window['enemyStats'][_0x198c68[_0x539666]]['health'] = _0x198c68[_0x539666 + 0x1], window['enemyStats'][_0x198c68[_0x539666]]['damage'] = _0x198c68[_0x539666 + 0x2], window['enemyStats'][_0x198c68[_0x539666]]['speed'] = _0x198c68[_0x539666 + 0x3], window['enemyStats'][_0x198c68[_0x539666]]['mass'] = _0x198c68[_0x539666 + 0x4];
            }
            this['regenerateMobs'](discoveredEnemies);
        } else {
            if (window['enemyStats']['Ladybug']['damage'] === undefined) {
                window['calculateStats'](![]);
                for (let _0xffc602 in Stats['enemies']) {
                    const _0x1d139a = Stats['enemies'][_0xffc602], _0x257d8d = {};
                    for (let _0x2a9401 in _0x1d139a) {
                        _0x257d8d[_0x2a9401] = _0x1d139a[_0x2a9401]['drops'];
                    }
                    window['enemyStats'][_0xffc602]['drops'] = _0x257d8d;
                }
            }
        }
        if (Object['keys'](this['rows'])['length'] === 0x0) {
            const _0x2b852d = ctx['letterSpacing'];
            ctx['font'] = '900\x20102px\x20Ubuntu', ctx['letterSpacing'] = '-.05px', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'center', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x8, ctx['strokeText']('???', this['x'] + this['w'] / 0x2, this['y'] + this['h'] / 0x2 - 0x14), ctx['fillText']('???', this['x'] + this['w'] / 0x2, this['y'] + this['h'] / 0x2 - 0x14), ctx['lineWidth'] = 3.5, ctx['font'] = '900\x2016px\x20Ubuntu', ctx['strokeText']('(No\x20Mobs\x20Discovered)', this['x'] + this['w'] / 0x2, this['y'] + this['h'] / 0x2 + 0x23), ctx['fillText']('(No\x20Mobs\x20Discovered)', this['x'] + this['w'] / 0x2, this['y'] + this['h'] / 0x2 + 0x23), ctx['letterSpacing'] = _0x2b852d, this['isEmpty'] = !![];
        } else
            this['isEmpty'] = ![];
        ctx['save'](), ctx['beginPath'](), ctx['rect'](this['inventorySpace']['x'], this['inventorySpace']['y'], this['inventorySpace']['w'], this['inventorySpace']['h'] - (this['horizontalScrollBarEnabled'] === !![] ? 0x14 : 0x0)), ctx['clip'](), ctx['closePath'](), ctx['translate'](-this['scrollExcess']['x'] * this['scroll']['render']['x'], -this['scrollExcess']['y'] * this['scroll']['render']['y']);
        const _0x35a85c = 0x3e, _0x4c80eb = 0x38, _0x35bd48 = 0x8;
        this['currentY'] = this['y'] - 0x3;
        let _0x5f0cc4 = 0x0, _0x557e7a = 0x0;
        for (let _0x25fbd3 in this['rows']) {
            const _0x40248c = this['rows'][_0x25fbd3];
            _0x40248c['length'] > _0x557e7a && (_0x557e7a = _0x40248c['length']);
        }
        for (let _0x1382d8 in this['rows']) {
            const _0x160ff3 = this['rows'][_0x1382d8];
            for (let _0x22328f = 0x0; _0x22328f < _0x557e7a; _0x22328f++) {
                if (_0x160ff3[_0x22328f] === undefined)
                    _0x160ff3[_0x22328f] = ![];
                const _0x15f639 = this['x'] + _0x35bd48 + (_0x4c80eb + _0x35bd48) * _0x22328f + _0x4c80eb / 0x2, _0x387908 = this['currentY'] + _0x4c80eb / 0x2 + 0xc;
                if (_0x160ff3[_0x22328f] === ![]) {
                    const _0x4edd14 = _0x1382d8, _0x1d1cd9 = _0x22328f;
                    this['fillerPetalSlots'][_0x4edd14] === undefined && (this['fillerPetalSlots'][_0x4edd14] = {});
                    this['fillerPetalSlots'][_0x4edd14][_0x1d1cd9] === undefined && (this['fillerPetalSlots'][_0x4edd14][_0x1d1cd9] = {
                        'render': {
                            'x': _0x15f639,
                            'y': _0x387908
                        }
                    });
                    const _0xf3071b = this['fillerPetalSlots'][_0x4edd14][_0x1d1cd9];
                    _0xf3071b['x'] = _0x15f639, _0xf3071b['y'] = _0x387908, _0xf3071b['render']['x'] = interpolate(_0xf3071b['render']['x'], _0xf3071b['x'], 0.00672 * dt), _0xf3071b['render']['y'] = interpolate(_0xf3071b['render']['y'], _0xf3071b['y'], 0.00672 * dt), ctx['fillStyle'] = this['getMainStroke'](), ctx['beginPath'](), ctx['roundRect'](_0xf3071b['render']['x'] - _0x4c80eb / 0x2, _0xf3071b['render']['y'] - _0x4c80eb / 0x2, _0x4c80eb, _0x4c80eb, 0x8), ctx['fill'](), ctx['closePath']();
                    continue;
                }
                _0x160ff3[_0x22328f] === !![] && (_0x160ff3[_0x22328f] = this['generateEnemyPc'](_0x1382d8, _0x22328f, _0x4c80eb), _0x160ff3[_0x22328f] === ![] ? _0x160ff3[_0x22328f] = !![] : (_0x160ff3[_0x22328f]['render']['x'] = _0x15f639, _0x160ff3[_0x22328f]['render']['y'] = _0x387908));
                if (_0x160ff3[_0x22328f] === !![])
                    continue;
                _0x5f0cc4 < _0x160ff3[_0x22328f]['render']['x'] && (_0x5f0cc4 = _0x160ff3[_0x22328f]['render']['x']);
                const _0x3b6bf5 = _0x160ff3[_0x22328f];
                _0x3b6bf5['x'] = _0x15f639, _0x3b6bf5['y'] = _0x387908, _0x3b6bf5['draw']();
            }
            this['currentY'] += _0x35a85c;
        }
        this['scrollExcess'] = {
            'x': _0x5f0cc4 - this['w'] - _0x4c80eb / 0x2,
            'y': this['currentY'] - this['y'] - this['h'] + _0x4c80eb / 0x2
        }, this['scrollExcess']['x'] = Math['max'](this['scrollExcess']['x'], 0x0), this['scrollExcess']['y'] = Math['max'](this['scrollExcess']['y'], 0x0), ctx['restore']();
    }
    ['drawRowStatBoxes']() {
        const _0x5731ba = mouseInBox({
            'x': mouse['canvasX'],
            'y': mouse['canvasY']
        }, {
            ...this['inventorySpace'],
            'h': this['inventorySpace']['h'] - (this['horizontalScrollBarEnabled'] === !![] ? 0x14 : 0x0)
        });
        for (let _0x4b3dac in this['rows']) {
            const _0x3e9e63 = this['rows'][_0x4b3dac];
            for (let _0x6c011a = 0x0; _0x6c011a < _0x3e9e63['length']; _0x6c011a++) {
                if (_0x3e9e63[_0x6c011a] === ![] || _0x3e9e63[_0x6c011a] === !![])
                    continue;
                const _0x5046eb = _0x3e9e63[_0x6c011a];
                _0x5046eb['petals'][0x0]['angleVel'] === undefined && (_0x5046eb['petals'][0x0]['angleVel'] = Math['random']() < 0.0001 ? 0.01 : (Math['random']() ** 1.5 - 0.5) * 0.002);
                _0x5731ba && mouseInBox({
                    'x': mouse['canvasX'],
                    'y': mouse['canvasY']
                }, {
                    'x': _0x5046eb['render']['x'] - _0x5046eb['w'] / 0x2 - this['scrollExcess']['x'] * this['scroll']['render']['x'],
                    'y': _0x5046eb['render']['y'] - _0x5046eb['h'] / 0x2 - this['scrollExcess']['y'] * this['scroll']['render']['y'],
                    'w': _0x5046eb['w'],
                    'h': _0x5046eb['h']
                }) === !![] ? (_0x5046eb['petals'][0x0]['isHovered'] = !![], _0x5046eb['petals'][0x0]['angle'] += 0.02 * dt / (0x3e8 / 0x78) * Math['sign'](_0x5046eb['petals'][0x0]['angleVel']), _0x5046eb['petals'][0x0]['lastIsHovered'] = !![]) : (_0x5046eb['petals'][0x0]['lastIsHovered'] = ![], _0x5046eb['petals'][0x0]['isHovered'] = ![]);
                _0x5046eb['petals'][0x0]['angle'] += _0x5046eb['petals'][0x0]['angleVel'] * dt;
                const _0x28292a = _0x5046eb['petals'][0x0], _0x33227c = {
                        'x': _0x28292a['x'],
                        'y': _0x28292a['y'],
                        'render': {
                            'x': _0x28292a['render']['x'],
                            'y': _0x28292a['render']['y']
                        }
                    };
                _0x28292a['render']['x'] = _0x28292a['x'] = _0x5046eb['render']['x'] - this['scrollExcess']['x'] * this['scroll']['render']['x'], _0x28292a['render']['y'] = _0x28292a['y'] = _0x5046eb['render']['y'] - this['scrollExcess']['y'] * this['scroll']['render']['y'], _0x28292a['drawStatsBox'](undefined, !![]), _0x28292a['x'] = _0x33227c['x'], _0x28292a['y'] = _0x33227c['y'], _0x28292a['render']['x'] = _0x33227c['render']['x'], _0x28292a['render']['y'] = _0x33227c['render']['y'];
            }
        }
    }
    ['regenerateMobs'](_0x4f874e) {
        this['horizontalScrollBarEnabled'] = ![];
        const _0x2c9ee6 = biomeEnemyMap[biomeManager['getCurrentBiomeData']()['current']];
        let _0xc1bf18 = rareBiomeEnemyMap[biomeManager['getCurrentBiomeData']()['current']], _0xa69b23 = secretBiomeEnemyMap[biomeManager['getCurrentBiomeData']()['current']];
        !_0xc1bf18 && (_0xc1bf18 = []);
        !_0xa69b23 && (_0xa69b23 = []);
        this['rows'] = {};
        for (let _0x1c10a8 in _0x4f874e) {
            (_0x2c9ee6['includes'](_0x1c10a8) || _0xc1bf18['includes'](_0x1c10a8) || _0xa69b23['includes'](_0x1c10a8) || [
                'Square',
                'Pentagon',
                'Hexagon'
            ]['includes'](_0x1c10a8)) && this['addRow'](_0x1c10a8, _0x4f874e[_0x1c10a8]);
        }
    }
    ['addRow'](_0x4951af, _0x288ce3) {
        this['rows'][_0x4951af] = [];
        for (let _0x2a21e4 = 0x0; _0x2a21e4 < _0x288ce3['length']; _0x2a21e4++) {
            if (_0x288ce3[_0x2a21e4] === !![]) {
                this['rows'][_0x4951af][_0x2a21e4] = !![];
                if (_0x2a21e4 > 0x8)
                    this['horizontalScrollBarEnabled'] = !![];
            } else
                this['rows'][_0x4951af][_0x2a21e4] = ![];
        }
    }
    ['generateEnemyPc'](_0x2a6ff4, _0x59e108, _0x56d58c) {
        const _0x4cd8ce = 0xc8, _0x10e93a = new Enemy({
                'x': 0x0,
                'y': 0x0,
                'radius': _0x4cd8ce,
                'hp': 0x64,
                'maxHp': 0x64,
                'id': Math['random'](),
                'type': _0x2a6ff4,
                'rarity': _0x59e108,
                'angle': Math['random']() * Math['PI'] * 0x2,
                'toRenderUi': ![],
                'isMenuEnemy': !![]
            });
        _0x10e93a['x'] = _0x10e93a['render']['x'] = _0x10e93a['y'] = _0x10e93a['render']['y'] = 0x0, _0x10e93a['radius'] = _0x10e93a['render']['radius'] = 0xe, _0x10e93a['angle'] = -Math['PI'] / 0x4;
        const _0xf00fb8 = Stats['enemies'][_0x2a6ff4], _0x29068c = enemyRarityScalars[_0x59e108];
        if (_0x29068c === undefined || _0xf00fb8 === undefined)
            return ![];
        _0xf00fb8['xp'] = _0x29068c['xp'], _0xf00fb8['health'] *= _0x29068c['health'];
        if (_0x2a6ff4 == 'Starfish')
            _0xf00fb8['healing'] = Math['round'](_0xf00fb8['health'] * 0.007 * 0x1e * 0x64) / 0x64 + '/s';
        else
            _0x2a6ff4 == 'Brisingida' && (_0xf00fb8['healing'] = Math['round'](_0xf00fb8['health'] * 0.009 * 0x1e * 0x64) / 0x64 + '/s');
        return _0xf00fb8['damage'] *= _0x29068c['damage'], _0xf00fb8['detectionDistance'] = _0x29068c['detectionDistance'], _0xf00fb8['mass'] *= _0x29068c['mass'], new PetalContainer([_0x10e93a], {
            'x': 0x0,
            'y': 0x0,
            'w': _0x56d58c,
            'h': _0x56d58c,
            'toOscillate': ![],
            'amount': 0x1,
            'petalStats': _0xf00fb8
        }, Math['random'](), 0x1, 0x0);
    }
    ['updateScroll'](_0x47f134 = {
        'x': 0x0,
        'y': 0x0
    }, {
        mouseX: _0x13cbee,
        mouseY: _0x1d7637
    }) {
        if (mouseInBox({
                'x': _0x13cbee,
                'y': _0x1d7637
            }, this['dimensions']) === ![])
            return;
        this['scroll']['y'] += _0x47f134['y'] / this['scrollExcess']['y'] / 0x3;
    }
}
const mobGallery = new MobGallery();