function mouseInBox(_0x1fc636, _0x2ba64a) {
    return _0x1fc636['x'] > _0x2ba64a['x'] && _0x1fc636['x'] < _0x2ba64a['x'] + _0x2ba64a['w'] && _0x1fc636['y'] > _0x2ba64a['y'] && _0x1fc636['y'] < _0x2ba64a['y'] + _0x2ba64a['h'];
}
let initBiomeIndex = localStorage['getItem']('lastBiome');
initBiomeIndex === null && (initBiomeIndex = 0x0);
class BiomeManager {
    constructor() {
        const _0x5098ee = [
            'garden',
            'desert',
            'ocean'
        ];
        this['biomeOrder'] = _0x5098ee, this['currentBiome'] = parseInt(initBiomeIndex) ?? 0x0;
        if (this['currentBiome'] >= this['biomeOrder']['length'])
            this['currentBiome'] = 0x0;
        this['arrowOscilTimer'] = 0x0, this['drawLeftArrow'] = this['biomeOrder'][this['currentBiome'] - 0x1] !== undefined, this['drawRightArrow'] = this['biomeOrder'][this['currentBiome'] + 0x1] !== undefined, this['hoveringLeftArrow'] = ![], this['hoveringRightArrow'] = ![], this['transitionTime'] = 0x190, this['transitionAnimationTimer'] = this['transitionTime'], this['lastDirectionPressed'] = 'right', this['arrowMargin'] = 0xb, this['arrowSize'] = 0x6ed * 0.032, this['updateArrowDimensions'](), this['fadeTimer'] = 0x1, this['fadeState'] = 'in';
    }
    ['fadeOut']() {
        this['fadeState'] = 'out';
    }
    ['fadeIn']() {
        this['fadeState'] = 'in';
    }
    ['updateArrowDimensions']() {
        this['rightArrow'] = {
            'x': canvas['w'] - canvas['w'] * 0.03 - canvas['w'] * 0.032,
            'y': canvas['h'] / 0x2 - canvas['w'] * 0.032 / 0x2,
            'w': canvas['w'] * 0.032,
            'h': canvas['w'] * 0.032
        }, this['leftArrow'] = {
            'x': canvas['w'] * 0.03,
            'y': canvas['h'] / 0x2 - canvas['w'] * 0.032 / 0x2,
            'w': canvas['w'] * 0.032,
            'h': canvas['w'] * 0.032
        };
    }
    ['draw']() {
        if (window['loaded'] !== !![])
            return;
        if (this['fadeState'] === 'in')
            this['fadeTimer'] += dt / 0xa0, this['fadeTimer'] > 0x1 && (this['fadeTimer'] = 0x1);
        else
            this['fadeState'] === 'out' && (this['fadeTimer'] -= dt / 0x64, this['fadeTimer'] < 0x0 && (this['fadeTimer'] = 0x0));
        if (window['squadUIEnabled'] === !![] && this['fadeState'] === 'in')
            this['fadeOut']();
        else
            window['squadUIEnabled'] !== !![] && this['fadeState'] === 'out' && this['fadeIn']();
        this['drawBiomeSwitchArrows'](smoothstep(this['fadeTimer']));
    }
    ['drawBiomeSwitchArrows'](_0x3b29e0 = 0x1) {
        this['transitionAnimationTimer'] += dt;
        this['fadeState'] === 'out' && (this['hoveringRightArrow'] = ![], this['hoveringLeftArrow'] = ![]);
        if (_0x3b29e0 === 0x0)
            return;
        ctx['globalAlpha'] = _0x3b29e0, this['arrowOscilTimer'] += dt;
        let _0xd4b5e9 = Math['sin'](this['arrowOscilTimer'] / 0xc8) * 0x6;
        const _0x18bb4c = (this['currentBiome'] + 0x1) % this['biomeOrder']['length'];
        let _0x31186f = (this['currentBiome'] - 0x1) % this['biomeOrder']['length'];
        _0x31186f < 0x0 && (_0x31186f += this['biomeOrder']['length']);
        const _0x57e2d5 = this['biomeOrder'][_0x18bb4c], _0x15e1a1 = this['biomeOrder'][_0x31186f];
        ctx['strokeStyle'] = '#b8b8b8', ctx['lineWidth'] = 0xc, this['drawRightArrow'] === !![] && (ctx['save'](), ctx['beginPath'](), ctx['moveTo'](_0xd4b5e9 + this['rightArrow']['x'] + this['rightArrow']['w'], this['rightArrow']['y'] + this['rightArrow']['h'] / 0x2), ctx['lineTo'](_0xd4b5e9 + this['rightArrow']['x'], this['rightArrow']['y']), ctx['lineTo'](_0xd4b5e9 + this['rightArrow']['x'], this['rightArrow']['y'] + this['rightArrow']['h']), ctx['lineTo'](_0xd4b5e9 + this['rightArrow']['x'] + this['rightArrow']['w'], this['rightArrow']['y'] + this['rightArrow']['h'] / 0x2), ctx['clip'](), ctx['closePath'](), ctx['fillStyle'] = Colors['biomes'][_0x57e2d5]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x57e2d5]['grid'], renderBg(), ctx['restore'](), ctx['globalAlpha'] = 0.4 * _0x3b29e0, ctx['setLineDash']([
            0x1e,
            0x1e
        ]), ctx['lineDashOffset'] = -performance['now']() / 0xc, ctx['beginPath'](), ctx['moveTo'](_0xd4b5e9 + this['rightArrow']['x'] + this['rightArrow']['w'], this['rightArrow']['y'] + this['rightArrow']['h'] / 0x2), ctx['lineTo'](_0xd4b5e9 + this['rightArrow']['x'], this['rightArrow']['y']), ctx['lineTo'](_0xd4b5e9 + this['rightArrow']['x'], this['rightArrow']['y'] + this['rightArrow']['h']), ctx['lineTo'](_0xd4b5e9 + this['rightArrow']['x'] + this['rightArrow']['w'], this['rightArrow']['y'] + this['rightArrow']['h'] / 0x2), ctx['stroke'](), ctx['closePath'](), ctx['setLineDash']([]), ctx['globalAlpha'] = _0x3b29e0), this['drawLeftArrow'] === !![] && (ctx['save'](), ctx['globalAlpha'] = _0x3b29e0, ctx['beginPath'](), ctx['moveTo'](-_0xd4b5e9 + this['leftArrow']['x'], this['leftArrow']['y'] + this['leftArrow']['h'] / 0x2), ctx['lineTo'](-_0xd4b5e9 + this['leftArrow']['x'] + this['leftArrow']['w'], this['leftArrow']['y']), ctx['lineTo'](-_0xd4b5e9 + this['leftArrow']['x'] + this['leftArrow']['w'], this['leftArrow']['y'] + this['leftArrow']['h']), ctx['lineTo'](-_0xd4b5e9 + this['leftArrow']['x'], this['leftArrow']['y'] + this['leftArrow']['h'] / 0x2), ctx['clip'](), ctx['closePath'](), ctx['fillStyle'] = Colors['biomes'][_0x15e1a1]['background'], ctx['strokeStyle'] = Colors['biomes'][_0x15e1a1]['grid'], renderBg(), ctx['restore'](), ctx['globalAlpha'] = 0.4 * _0x3b29e0, ctx['setLineDash']([
            0x1e,
            0x1e
        ]), ctx['lineDashOffset'] = -performance['now']() / 0xc, ctx['beginPath'](), ctx['moveTo'](-_0xd4b5e9 + this['leftArrow']['x'], this['leftArrow']['y'] + this['leftArrow']['h'] / 0x2), ctx['lineTo'](-_0xd4b5e9 + this['leftArrow']['x'] + this['leftArrow']['w'], this['leftArrow']['y']), ctx['lineTo'](-_0xd4b5e9 + this['leftArrow']['x'] + this['leftArrow']['w'], this['leftArrow']['y'] + this['leftArrow']['h']), ctx['lineTo'](-_0xd4b5e9 + this['leftArrow']['x'], this['leftArrow']['y'] + this['leftArrow']['h'] / 0x2), ctx['stroke'](), ctx['closePath'](), ctx['setLineDash']([]), ctx['globalAlpha'] = _0x3b29e0), ctx['globalAlpha'] = 0x1;
    }
    ['drawCurrentBiomeName'](_0x186979 = 0x1) {
        const _0x2745b6 = this['biomeOrder'][this['currentBiome']], _0xa9fbea = {
                'garden': 'Garden',
                'desert': 'Desert',
                'ocean': 'Ocean'
            };
        ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x3, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = 'bold\x2020px\x20Ubuntu';
        const _0x3ba0bc = canvas['h'] - 0x28;
        ctx['strokeText'](_0xa9fbea[_0x2745b6], canvas['w'] / 0x2, _0x3ba0bc), ctx['fillText'](_0xa9fbea[_0x2745b6], canvas['w'] / 0x2, _0x3ba0bc);
    }
    ['mouseDown']({
        mouseX: _0x273c16,
        mouseY: _0x3c46cb
    }) {
        if (this['fadeTimer'] === 0x0)
            return;
        if (this['drawRightArrow'] && mouseInBox({
                'x': _0x273c16,
                'y': _0x3c46cb
            }, this['rightArrow']) === !![])
            this['lastBiome'] = this['currentBiome'], this['currentBiome']++, this['lastDirectionPressed'] = 'right', this['updateBiome']();
        else
            this['drawLeftArrow'] && mouseInBox({
                'x': _0x273c16,
                'y': _0x3c46cb
            }, this['leftArrow']) === !![] && (this['lastBiome'] = this['currentBiome'], this['currentBiome']--, this['lastDirectionPressed'] = 'left', this['updateBiome']());
    }
    ['switchToBiome'](_0x2dc801) {
        if (_0x2dc801 === this['biomeOrder'][this['currentBiome']])
            return;
        let _0x46c780 = null;
        for (let _0x2ce07a = 0x0; _0x2ce07a < this['biomeOrder']['length']; _0x2ce07a++) {
            if (this['biomeOrder'][_0x2ce07a] === _0x2dc801) {
                _0x46c780 = _0x2ce07a;
                break;
            }
        }
        if (_0x46c780 === null)
            return;
        this['lastBiome'] = this['currentBiome'], this['currentBiome'] = _0x46c780, this['lastDirectionPressed'] = this['currentBiome'] > this['lastBiome'] ? 'right' : 'left', this['updateBiome']();
    }
    ['mouseMove']({
        mouseX: _0x1eed0a,
        mouseY: _0xec3f4e
    }) {
        if (this['fadeTimer'] === 0x0)
            return;
        this['hoveringRightArrow'] = ![], this['hoveringLeftArrow'] = ![];
        if (this['drawRightArrow'] && mouseInBox({
                'x': _0x1eed0a,
                'y': _0xec3f4e
            }, this['rightArrow']) === !![])
            this['hoveringRightArrow'] = !![];
        else
            this['drawLeftArrow'] && mouseInBox({
                'x': _0x1eed0a,
                'y': _0xec3f4e
            }, this['leftArrow']) === !![] && (this['hoveringLeftArrow'] = !![]);
    }
    ['updateBiome']() {
        mobGallery['toRegenerate'] = !![], this['transitionAnimationTimer'] = 0x0, this['drawLeftArrow'] = this['biomeOrder'][this['currentBiome'] - 0x1] !== undefined, this['drawRightArrow'] = this['biomeOrder'][this['currentBiome'] + 0x1] !== undefined;
        for (let _0x5b3c46 = 0x0; _0x5b3c46 < menuEnemies['length']; _0x5b3c46++) {
            menuEnemies[_0x5b3c46]['updatedBiome'] = ![];
        }
        menuInventory['updateBiome'](), localStorage['setItem']('lastBiome', this['currentBiome']);
    }
    ['getCurrentBiomeData']() {
        return {
            'ratio': Math['min'](0x1, this['transitionAnimationTimer'] / this['transitionTime']),
            'last': this['biomeOrder'][this['lastBiome']],
            'current': this['biomeOrder'][this['currentBiome']],
            'direction': this['lastDirectionPressed']
        };
    }
    ['getCurrentBiome']() {
        return this['biomeOrder'][this['currentBiome']];
    }
}
const biomeManager = new BiomeManager();