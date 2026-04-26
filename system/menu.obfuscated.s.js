class menuTemplate {
    static ['SD'] = {
        'w': 0x0,
        'h': 0x0,
        'x': 0x0,
        'y': 0x0,
        'i': [
            'w',
            'h',
            'x',
            'y'
        ]
    };
    static ['ST'] = {
        'fill': '#ffffff',
        'stroke': '#000000',
        'strokeSize': 0x5
    };
    constructor(_0x269110, _0x109118) {
        this['elements'] = [], this['standard'] = {
            'dimensions': menuTemplate['SD'],
            'theme': menuTemplate['ST']
        };
        if (_0x269110 && _0x109118)
            this['standard'] = {
                'dimensions': _0x269110,
                'theme': _0x109118
            };
    }
    static ['ELEMENT'] = {
        'dimensions': menuTemplate['SD'],
        'theme': menuTemplate['ST'],
        'elements': [],
        'draw': () => {
            if (this['dimensions']['i']['length'] > 0x0)
                for (let key of this['dimensions']['i']) {
                    if (!this[key])
                        this['i' + key] = this[key];
                    this[key] = interpolate(this[key], this['i' + key], 0.007 * dt);
                }
            ctx['beginPath'](), ctx['fillStyle'] = this['theme']['fill'], ctx['strokeStyle'] = this['theme']['stroke'], ctx['lineWidth'] = this['theme']['strokeSize'], ctx['rect'](this['x'], this['y'], this['w'], this['h']), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            for (let el of this['elements']) {
                el['draw']();
            }
        }
    };
    ['draw']() {
        for (let _0x271cc5 of this['dimensions']['i']) {
            if (!this[_0x271cc5])
                this['i' + _0x271cc5] = this[_0x271cc5];
            this[_0x271cc5] = interpolate(this[_0x271cc5], this['i' + _0x271cc5], 0.007 * dt);
        }
        ctx['beginPath'](), ctx['fillStyle'] = this['theme']['fill'], ctx['strokeStyle'] = this['theme']['stroke'], ctx['lineWidth'] = this['theme']['strokeSize'], ctx['rect'](this['x'], this['y'], this['w'], this['h']), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        for (let _0x241fd4 of this['elements']) {
            _0x241fd4['draw']();
        }
    }
    ['createMenu'](_0x249220, _0x26c75d) {
        const _0x41de58 = menuTemplate['ELEMENT'];
        return _0x41de58['dimensions'] = _0x249220 ? _0x249220 : this['standard']['dimensions'], _0x41de58['theme'] = _0x26c75d ? _0x26c75d : this['standard']['theme'], _0x41de58;
    }
    ['createButton']() {
    }
}