class CharacterSelector {
    constructor() {
        this['characters'] = [
            { 'name': 'flower' },
            {
                'name': 'Tanksmith',
                'emoji': '🛡️'
            }
        ], this['enabled'] = !![], this['animation'] = 0x0, this['allImgsLoaded'] = !![], this['yMin'] = -0x64, this['yMax'] = 0x37, this['flower'] = new Flower(0x0), this['selectedIndex'] = localStorage['getItem']('selectedCharacter') ?? 0x0;
        if (this['selectedIndex'] !== 0x0)
            this['send']();
        this['renderSelectedIndex'] = this['selectedIndex'], this['lastSentSI'] = -0x1;
    }
    ['draw']() {
        if (this['allImgsLoaded'] === ![])
            return;
        if (this['enabled'] === !![])
            this['animation'] = interpolate(this['animation'], 0x1, 0.06 * dt / 16.66);
        else {
            this['animation'] = interpolate(this['animation'], 0x0, 0.06 * dt / 16.66);
            if (this['animation'] < 0.01)
                return;
        }
        const _0x34752e = 0x40, _0x4358c6 = canvas['w'] / 0x2 - _0x34752e * (this['characters']['length'] - 0x1) / 0x2, _0x324b17 = canvas['w'] / 0x2 + _0x34752e * (this['characters']['length'] - 0x1) / 0x2, _0x3d5280 = 0x3c, _0x164890 = 0x3c, _0x2d213b = interpolate(this['yMin'], this['yMax'], this['animation']);
        ctx['translate'](0x0, _0x2d213b), ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['font'] = '900\x2018px\x20Ubuntu', ctx['textBaseline'] = 'top', ctx['textAlign'] = 'center', ctx['lineWidth'] = 0x3, ctx['strokeText']('Select\x20Character:', canvas['w'] / 0x2, 0x6 - this['yMax']), ctx['fillText']('Select\x20Character:', canvas['w'] / 0x2, 0x6 - this['yMax']), this['renderSelectedIndex'] = interpolate(this['renderSelectedIndex'], this['selectedIndex'], 0.1);
        const _0x1807a4 = interpolate(_0x4358c6, _0x324b17, this['renderSelectedIndex'] / (this['characters']['length'] - 0x1));
        ctx['fillStyle'] = 'black', ctx['globalAlpha'] = 0.08 + Math['sin'](time / 0x320) * 0.02, ctx['beginPath'](), ctx['roundRect'](_0x1807a4 - _0x164890 / 0x2, -_0x164890 / 0x2, _0x164890, _0x164890, 0x8), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1;
        for (let _0x548e86 = 0x0; _0x548e86 < this['characters']['length']; _0x548e86++) {
            const _0x3abc57 = interpolate(_0x4358c6, _0x324b17, _0x548e86 / (this['characters']['length'] - 0x1));
            this['characters'][_0x548e86]['x'] = _0x3abc57, this['characters'][_0x548e86]['y'] = _0x2d213b;
            const _0x38b265 = mouse['x'] * canvas['w'] / window['innerWidth'], _0xf493a9 = mouse['y'] * canvas['h'] / window['innerHeight'];
            if (_0x548e86 === 0x0) {
                this['flower']['render']['x'] = _0x3abc57, this['flower']['render']['y'] = _0x2d213b, this['flower']['render']['angle'] = interpolateDirection(this['flower']['render']['angle'], Math['atan2'](_0xf493a9 - _0x2d213b, _0x38b265 - _0x3abc57), 0.12), this['flower']['drawFlower'](_0x3abc57, 0x0, 24.5);
                continue;
            }
            ctx['font'] = '900\x2040px\x20Ubuntu', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x2, ctx['strokeText'](this['characters'][_0x548e86]['emoji'], _0x3abc57, 0x0), ctx['fillText'](this['characters'][_0x548e86]['emoji'], _0x3abc57, 0x0);
        }
        ctx['translate'](0x0, -_0x2d213b);
    }
    ['onmousedown'](_0x251110, _0x543799) {
        for (let _0x1ba3f8 = 0x0; _0x1ba3f8 < this['characters']['length']; _0x1ba3f8++) {
            const _0x33317c = Math['sqrt']((_0x251110 - this['characters'][_0x1ba3f8]['x']) ** 0x2 + (_0x543799 - this['characters'][_0x1ba3f8]['y']) ** 0x2);
            _0x33317c < (this['characters'][_0x1ba3f8]['radius'] ?? 0x19) && (this['selectedIndex'] = _0x1ba3f8, this['send']());
        }
    }
    ['send'](_0x354ba4 = ![]) {
        if (_0x354ba4 === ![] && this['lastSentSI'] === this['selectedIndex'])
            return;
        send({ 'character': this['characters'][this['selectedIndex']]['name'] }), localStorage['setItem']('selectedCharacter', this['selectedIndex']), this['lastSentSI'] = this['selectedIndex'], isTs = this['selectedIndex'] == '1';
    }
}