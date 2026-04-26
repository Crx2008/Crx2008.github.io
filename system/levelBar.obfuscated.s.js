class LevelBar {
    constructor() {
        this['xp'] = 0x0, this['level'] = 0x0, this['calculateDimensions'](), this['hasInit'] = ![], this['render'] = {
            'xp': this['xp'],
            'level': this['level'],
            'initAnimation': 0x0
        };
    }
    ['calculateDimensions']() {
        this['dimensions'] = {
            'x': canvas['w'] * 0.8,
            'y': canvas['h'] * 0.94,
            'w': canvas['w'] * (0.17 + 0.04 / 0x2),
            'h': canvas['h'] * 0.04,
            'roundness': canvas['w'],
            'innerPadding': 0x4
        };
        if (window['state'] == 'game')
            this['dimensions']['y'] -= 0xf;
    }
    ['init'](_0x5dab88) {
        this['xp'] = _0x5dab88, this['level'] = levelPerXp(this['xp']), this['hasInit'] = !![], this['render']['xp'] = this['xp'], localStorage['getItem']('ascended') == 0x1 && (window['characterSelector'] = new CharacterSelector());
    }
    ['addXp'](_0x41e9b0) {
        if (window['automaticallyLeaveFlag'] === !![])
            return;
        this['xp'] += _0x41e9b0, this['level'] = levelPerXp(this['xp']);
    }
    ['getPetalSlotsNumber']() {
        return 0xa;
    }
    ['draw']() {
        this['hasInit'] === !![] && (this['render']['initAnimation'] = interpolate(this['render']['initAnimation'], 0x1, 0.04));
        this['render']['initAnimation'] < 0.999 && ctx['translate'](0x0, (0x1 - this['render']['initAnimation']) * canvas['h'] * 0.18);
        this['render']['xp'] = interpolate(this['render']['xp'], this['xp'], 0.04), this['render']['level'] = levelPerXp(this['render']['xp']);
        if (this['dimensions']['w'] < this['dimensions']['h'])
            return;
        const _0x3c9d55 = this['render']['level'] % 0x1, _0x417ea7 = this['dimensions']['h'] + (this['dimensions']['w'] - this['dimensions']['h']) * _0x3c9d55;
        ctx['save'](), ctx['shadowColor'] = 'rgba(0,\x200,\x200,\x200.3)', ctx['shadowBlur'] = 0x8, ctx['shadowOffsetY'] = 0x2;
        const _0x51c8aa = ctx['createLinearGradient'](this['dimensions']['x'], this['dimensions']['y'], this['dimensions']['x'], this['dimensions']['y'] + this['dimensions']['h']);
        _0x51c8aa['addColorStop'](0x0, '#2a2a2a'), _0x51c8aa['addColorStop'](0x1, '#1a1a1a'), ctx['fillStyle'] = _0x51c8aa, ctx['beginPath'](), ctx['roundRect'](this['dimensions']['x'], this['dimensions']['y'], this['dimensions']['w'], this['dimensions']['h'], this['dimensions']['roundness']), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = '#555', ctx['lineWidth'] = 0x2, ctx['beginPath'](), ctx['roundRect'](this['dimensions']['x'] + 0x1, this['dimensions']['y'] + 0x1, this['dimensions']['w'] - 0x2, this['dimensions']['h'] - 0x2, this['dimensions']['roundness']), ctx['stroke'](), ctx['closePath'](), ctx['restore']();
        if (_0x3c9d55 > 0.01) {
            const _0x3a6aa1 = ctx['createLinearGradient'](this['dimensions']['x'] + this['dimensions']['innerPadding'], this['dimensions']['y'], this['dimensions']['x'] + this['dimensions']['innerPadding'], this['dimensions']['y'] + this['dimensions']['h']);
            _0x3a6aa1['addColorStop'](0x0, '#ffd700'), _0x3a6aa1['addColorStop'](0.5, '#ffed4e'), _0x3a6aa1['addColorStop'](0x1, '#ffd700'), ctx['fillStyle'] = _0x3a6aa1, ctx['save'](), ctx['shadowColor'] = 'rgba(255,\x20215,\x200,\x200.6)', ctx['shadowBlur'] = 0xa, ctx['shadowOffsetX'] = 0x0, ctx['shadowOffsetY'] = 0x0, ctx['beginPath'](), ctx['roundRect'](this['dimensions']['x'] + this['dimensions']['innerPadding'], this['dimensions']['y'] + this['dimensions']['innerPadding'], _0x417ea7 - this['dimensions']['innerPadding'] * 0x2, this['dimensions']['h'] - this['dimensions']['innerPadding'] * 0x2, this['dimensions']['roundness']), ctx['fill'](), ctx['closePath'](), ctx['restore']();
            if (_0x3c9d55 > 0.1) {
                const _0x52b502 = ctx['createLinearGradient'](this['dimensions']['x'] + this['dimensions']['innerPadding'], this['dimensions']['y'], this['dimensions']['x'] + this['dimensions']['innerPadding'], this['dimensions']['y'] + this['dimensions']['h'] / 0x2);
                _0x52b502['addColorStop'](0x0, 'rgba(255,\x20255,\x20255,\x200.3)'), _0x52b502['addColorStop'](0x1, 'rgba(255,\x20255,\x20255,\x200)'), ctx['fillStyle'] = _0x52b502, ctx['beginPath'](), ctx['roundRect'](this['dimensions']['x'] + this['dimensions']['innerPadding'], this['dimensions']['y'] + this['dimensions']['innerPadding'], _0x417ea7 - this['dimensions']['innerPadding'] * 0x2, this['dimensions']['h'] / 0x2 - this['dimensions']['innerPadding'], this['dimensions']['roundness']), ctx['fill'](), ctx['closePath']();
            }
        }
        this['render']['level'] % 0x1 < 0.1 && (ctx['globalAlpha'] = Math['max'](0x0, this['render']['level'] % 0x1 * 9.5 + 0.05), ctx['fillStyle'] = '#ffffff', ctx['beginPath'](), ctx['roundRect'](this['dimensions']['x'], this['dimensions']['y'], this['dimensions']['w'], this['dimensions']['h'], this['dimensions']['roundness']), ctx['fill'](), ctx['closePath']());
        ctx['globalAlpha'] = 0x1, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x3, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = 'bold\x2018px\x20Ubuntu';
        let _0x1da529 = 'Lvl\x20' + Math['ceil'](this['render']['level']) + '\x20Flower';
        ctx['save'](), ctx['shadowColor'] = 'rgba(0,\x200,\x200,\x200.5)', ctx['shadowBlur'] = 0x3, ctx['shadowOffsetY'] = 0x1, ctx['strokeText'](_0x1da529, this['dimensions']['x'] + this['dimensions']['w'] / 0x2, this['dimensions']['y'] + this['dimensions']['h'] / 0x2), ctx['fillText'](_0x1da529, this['dimensions']['x'] + this['dimensions']['w'] / 0x2, this['dimensions']['y'] + this['dimensions']['h'] / 0x2), ctx['restore']();
        if (mouse['canvasX'] > this['dimensions']['x'] && mouse['canvasY'] > this['dimensions']['y']) {
            let _0x251d24 = formatAmountHighPrecision(levelBar['xp']) + '/' + formatAmountHighPrecision(xpPerLevel(Math['ceil'](levelPerXp(levelBar['xp'])))) + '\x20xp', _0x937537 = formatAmountHighPrecision(Stats['hpPerLevel'](this['render']['level']));
            if (biomeManager['getCurrentBiomeData']()['current'] == '1v1')
                _0x937537 = formatAmountHighPrecision((0x64 + this['render']['level']) * 0x2);
            ctx['font'] = 'bold\x2014px\x20Ubuntu', ctx['fillStyle'] = '#e0e0e0', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x2, ctx['save'](), ctx['shadowColor'] = 'rgba(0,\x200,\x200,\x200.5)', ctx['shadowBlur'] = 0x3, ctx['shadowOffsetY'] = 0x1, ctx['strokeText'](_0x251d24 + '\x20|\x20' + _0x937537 + '\x20hp', this['dimensions']['x'] + this['dimensions']['w'] / 0x2, this['dimensions']['y'] / 1.035 + this['dimensions']['h'] / 0x2), ctx['fillText'](_0x251d24 + '\x20|\x20' + _0x937537 + '\x20hp', this['dimensions']['x'] + this['dimensions']['w'] / 0x2, this['dimensions']['y'] / 1.035 + this['dimensions']['h'] / 0x2), ctx['restore']();
        }
        this['render']['initAnimation'] < 0.999 && ctx['translate'](0x0, -(0x1 - this['render']['initAnimation']) * canvas['h'] * 0.18);
    }
}
const levelBar = new LevelBar();