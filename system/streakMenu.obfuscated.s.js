class StreakMenu {
    constructor() {
        const _0xc90976 = {
            'x': canvas['w'] + 0x14,
            'visibleX': canvas['w'] - 0xf0 - 0x10,
            'y': 0x14,
            'w': 0xf0,
            'h': 0x17 + 0x1e + 0x2d + 0x2c + 0x10 + 0x2f
        };
        this['referenceW'] = canvas['w'], this['originalX'] = this['x'] = _0xc90976['x'], this['visibleX'] = _0xc90976['visibleX'], this['y'] = _0xc90976['y'], this['w'] = _0xc90976['w'], this['h'] = _0xc90976['h'], this['dimensions'] = _0xc90976, this['visibleAnimationTimer'] = 0x0, this['visible'] = ![], this['claimPetalContainer'] = null, this['claimButton'] = {
            'x': this['w'] / 0x2 - 0x3a / 0x2,
            'y': this['y'] + 0x17 + 0x1e + 0x2d + 0x2c + 0x10,
            'w': 0x3a,
            'h': 0x32 * 0xb / 0x10
        }, this['claimButtonHovered'] = ![], this['streak'] = 0x0, this['xpToClaim'] = 0x0, this['showType'] = 'claim', this['timer'] = 0x0;
    }
    ['init'](_0x41d65d) {
        if (_0x41d65d['streakLost'])
            this['showType'] = 'lost', this['timer'] = 0x2710, this['h'] = this['dimensions']['h'] / 2.5, this['show']();
        else {
            if (_0x41d65d['streakTime'])
                this['streak'] = _0x41d65d['streak'], this['streakTime'] = _0x41d65d['streakTime'], this['showType'] = 'timer', this['timer'] = 0x2710, this['h'] = this['dimensions']['h'] / 2.5, this['show']();
            else {
                this['streak'] = _0x41d65d['streak'];
                const _0x13e3b0 = [];
                for (let _0x4ccbe8 = 0x0; _0x4ccbe8 < _0x41d65d['pc']['petalAmount']; _0x4ccbe8++) {
                    _0x13e3b0['push'](new Petal(_0x41d65d['pc']['petal']));
                }
                this['h'] = this['dimensions']['h'], this['pc'] = new PetalContainer(_0x13e3b0, { ..._0x41d65d['pc'] }, -0x1, 0x1, 0x0), this['pc']['angleOffset'] = 0x0, this['pc']['toSkipCulling'] = !![], this['xpToClaim'] = Math['floor'](_0x41d65d['xp']), this['showType'] = 'claim', this['show']();
            }
        }
    }
    ['show']() {
        this['visible'] = !![];
    }
    ['hide']() {
        this['visible'] = ![];
    }
    ['resize']() {
        const _0x1e10eb = {
            'x': canvas['w'] + 0x14,
            'visibleX': canvas['w'] - 0xf0 - 0x14
        };
        this['referenceW'] = canvas['w'], this['originalX'] = _0x1e10eb['x'], this['visibleX'] = _0x1e10eb['visibleX'];
    }
    ['draw']() {
        this['visible'] === !![] ? (this['visibleAnimationTimer'] = interpolate(this['visibleAnimationTimer'], 0x1, 0.1), this['x'] = interpolate(this['originalX'], this['visibleX'], this['visibleAnimationTimer'])) : (this['visibleAnimationTimer'] = interpolate(this['visibleAnimationTimer'], 0x0, 0.1), this['x'] = interpolate(this['originalX'], this['visibleX'], this['visibleAnimationTimer']));
        if (canvas['w'] !== this['referenceW'])
            this['resize']();
        if (this['visibleAnimationTimer'] < 0.01)
            return;
        ctx['fillStyle'] = '#895adb', ctx['strokeStyle'] = '#6f49b1', ctx['lineWidth'] = 0x6, ctx['beginPath'](), ctx['roundRect'](this['x'], this['y'], this['w'], this['h'], 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        const _0x4fce63 = ctx['letterSpacing'];
        this['showType'] == 'claim' && this['drawLightCones']();
        if (this['showType'] != 'lost') {
            ctx['font'] = '900\x2022px\x20Ubuntu', ctx['letterSpacing'] = '-.05px', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'center', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x3;
            if (this['streak'] == 0x0)
                ctx['strokeText']('No\x20streak', this['x'] + this['w'] / 0x2, this['y'] + 0x17), ctx['fillText']('No\x20streak', this['x'] + this['w'] / 0x2, this['y'] + 0x17);
            else
                this['streak'] == 0x1 ? (ctx['strokeText']('Streak:\x20' + this['streak'] + '\x20Day!', this['x'] + this['w'] / 0x2, this['y'] + 0x17), ctx['fillText']('Streak:\x20' + this['streak'] + '\x20Day!', this['x'] + this['w'] / 0x2, this['y'] + 0x17)) : (this['streak'] % 0xa === 0x0 && (ctx['fillStyle'] = 'hsl(' + time / 0xa % 0x168 + ',\x2060%,\x2060%)'), ctx['strokeText']('Streak:\x20' + this['streak'] + '\x20Days!', this['x'] + this['w'] / 0x2, this['y'] + 0x17), ctx['fillText']('Streak:\x20' + this['streak'] + '\x20Days!', this['x'] + this['w'] / 0x2, this['y'] + 0x17), ctx['fillStyle'] = 'white');
        } else
            ctx['font'] = '900\x2022px\x20Ubuntu', ctx['letterSpacing'] = '-.05px', ctx['textBaseline'] = 'middle', ctx['textAlign'] = 'top', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x3, ctx['strokeText']('Streak\x20Lost!', this['x'] + this['w'] / 0x2, this['y'] + this['h'] / 0x2), ctx['fillText']('Streak\x20Lost!', this['x'] + this['w'] / 0x2, this['y'] + this['h'] / 0x2), this['timer'] -= dt, this['timer'] < 0x0 && this['hide']();
        if (this['showType'] == 'timer') {
            ctx['font'] = '900\x2024px\x20Ubuntu';
            let _0x2bd7ee = new Date(0x0), _0x4ce385 = 0x18 * 0x3c * 0x3c * 0x3e8;
            if ((_0x4ce385 - (Date['now']() - this['streakTime'])) / 0x3e8 > 0x0) {
                _0x2bd7ee['setSeconds']((_0x4ce385 - (Date['now']() - this['streakTime'])) / 0x3e8);
                let _0x37ecfb = _0x2bd7ee['toISOString']()['substring'](0xb, 0x13);
                ctx['strokeText'](_0x37ecfb, this['x'] + this['w'] / 0x2, this['y'] + this['h'] - 0x17), ctx['fillText'](_0x37ecfb, this['x'] + this['w'] / 0x2, this['y'] + this['h'] - 0x17);
            } else
                ctx['strokeText']('Reload\x20to\x20claim!', this['x'] + this['w'] / 0x2, this['y'] + this['h'] - 0x17), ctx['fillText']('Reload\x20to\x20claim!', this['x'] + this['w'] / 0x2, this['y'] + this['h'] - 0x17);
            this['timer'] -= dt, this['timer'] < 0x0 && this['hide']();
        }
        this['showType'] == 'claim' && (ctx['font'] = '900\x2018px\x20Ubuntu', ctx['strokeText']('Reward:', this['x'] + this['w'] / 0x2, this['y'] + 0x17 + 0x1c), ctx['fillText']('Reward:', this['x'] + this['w'] / 0x2, this['y'] + 0x17 + 0x1c), this['pc']['render']['x'] = this['pc']['x'] = this['x'] + this['w'] / 0x2, this['pc']['render']['y'] = this['pc']['y'] = this['y'] + 0x17 + 0x1e + 0x14 + 0x19, this['pc']['draw'](), ctx['fillStyle'] = '#00ff00', ctx['font'] = '900\x2014px\x20Ubuntu', ctx['strokeText']('+' + formatAmount(this['xpToClaim']) + '\x20xp', this['x'] + this['w'] / 0x2, this['y'] + 0x17 + 0x1e + 0x2d + 0x2c), ctx['fillText']('+' + formatAmount(this['xpToClaim']) + '\x20xp', this['x'] + this['w'] / 0x2, this['y'] + 0x17 + 0x1e + 0x2d + 0x2c), mouseInBox({
            'x': mouse['canvasX'],
            'y': mouse['canvasY']
        }, {
            'x': this['x'] + this['claimButton']['x'],
            'y': this['claimButton']['y'],
            'w': this['claimButton']['w'],
            'h': this['claimButton']['h']
        }) ? (this['claimButtonHovered'] = !![], setCursor('pointer')) : this['claimButtonHovered'] = ![], ctx['fillStyle'] = '#55bb55', ctx['strokeStyle'] = '#459745', this['claimButtonHovered'] === !![] && (ctx['fillStyle'] = blendColor(ctx['fillStyle'], '#FFFFFF', 0.1), ctx['strokeStyle'] = blendColor(ctx['strokeStyle'], '#FFFFFF', 0.1)), ctx['lineWidth'] = 0x5, ctx['beginPath'](), ctx['roundRect'](this['x'] + this['claimButton']['x'], this['claimButton']['y'], this['claimButton']['w'], this['claimButton']['h'], 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['font'] = '900\x2014px\x20Ubuntu', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 2.15, ctx['strokeText']('Claim', this['x'] + this['claimButton']['x'] + this['claimButton']['w'] / 0x2, this['claimButton']['y'] + this['claimButton']['h'] / 0x2), ctx['fillText']('Claim', this['x'] + this['claimButton']['x'] + this['claimButton']['w'] / 0x2, this['claimButton']['y'] + this['claimButton']['h'] / 0x2), ctx['fillStyle'] = '#895adb', ctx['strokeStyle'] = '#6f49b1', ctx['lineWidth'] = 0x6, ctx['beginPath'](), ctx['roundRect'](this['x'], this['y'], this['w'], this['h'], 0x3), ctx['stroke'](), ctx['closePath']()), ctx['letterSpacing'] = _0x4fce63;
    }
    ['mouseDown']() {
        if (this['showType'] == 'claim') {
            if (this['claimButtonHovered'] === ![])
                return;
            send({ 'collectStreak': !![] }), this['hide']();
        }
    }
    ['drawLightCones']() {
        ctx['save'](), ctx['beginPath'](), ctx['rect'](this['x'], this['y'], this['w'], this['h']), ctx['clip'](), ctx['closePath']();
        const _0x46f84e = this['x'] + this['w'] / 0x2, _0x51c60f = this['y'] + 0x17 + 0x1e + 0x14 + 0x19, _0x44c52f = 0x4 * 0x6, _0x479dcc = 0x12c, _0x433eed = ctx['createRadialGradient'](_0x46f84e, _0x51c60f, 0x0, _0x46f84e, _0x51c60f, _0x479dcc);
        _0x433eed['addColorStop'](0x0, 'rgba(255,\x20255,\x20255,\x200.3)'), _0x433eed['addColorStop'](0x1, 'rgba(255,\x20255,\x20255,\x200)'), ctx['fillStyle'] = _0x433eed;
        const _0x458ec4 = Date['now']() / 0x3e8 * 0.26 % (Math['PI'] * 0x2);
        for (let _0x536225 = _0x458ec4; _0x536225 < Math['PI'] * 0x2 + _0x458ec4 - 0.01; _0x536225 += Math['PI'] * 0x2 / _0x44c52f * 0x2) {
            const _0x362261 = _0x536225 + Math['PI'] * 0x2 / _0x44c52f;
            ctx['beginPath'](), ctx['moveTo'](_0x46f84e, _0x51c60f), ctx['lineTo'](_0x46f84e + Math['cos'](_0x536225) * _0x479dcc * 0x2, _0x51c60f + Math['sin'](_0x536225) * _0x479dcc * 0x2), ctx['lineTo'](_0x46f84e + Math['cos'](_0x362261) * _0x479dcc * 0x2, _0x51c60f + Math['sin'](_0x362261) * _0x479dcc * 0x2), ctx['lineTo'](_0x46f84e, _0x51c60f), ctx['fill'](), ctx['closePath']();
        }
        ctx['restore']();
    }
}
const streakMenu = new StreakMenu();