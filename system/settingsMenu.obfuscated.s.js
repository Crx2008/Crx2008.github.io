class SettingsMenu {
    constructor() {
        this['options'] = [
            {
                'type': 'toggle',
                'name': 'Mouse\x20Movement',
                'state': mouseMovement,
                'changeTime': 0x0,
                'toggleFn': _0x3920c5 => {
                    mouseMovement = _0x3920c5, localStorage['setItem']('mouseMovement', _0x3920c5);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Reduce\x20Damage\x20Flash',
                'state': damageFlash,
                'changeTime': 0x0,
                'toggleFn': _0x1d032f => {
                    damageFlash = _0x1d032f, localStorage['setItem']('damageFlash', _0x1d032f);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Stat\x20Boxes',
                'state': window['statBoxes'],
                'changeTime': 0x0,
                'toggleFn': _0x53c77c => {
                    window['statBoxes'] = _0x53c77c, localStorage['setItem']('statboxes', _0x53c77c);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Show\x20damage\x20numbers',
                'state': window['damageCounter'],
                'changeTime': 0x0,
                'toggleFn': _0x4cb48e => {
                    window['damageCounter'] = _0x4cb48e, localStorage['setItem']('damageCounter', _0x4cb48e);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Crafting\x20petal\x20rain',
                'state': window['petalRain'],
                'changeTime': 0x0,
                'toggleFn': _0x505f78 => {
                    window['petalRain'] = _0x505f78, localStorage['setItem']('petalRain', _0x505f78);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Show\x20Announcements',
                'state': window['announcements'],
                'changeTime': 0x0,
                'toggleFn': _0x90fce0 => {
                    window['announcements'] = _0x90fce0, localStorage['setItem']('announcements', _0x90fce0);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'High\x20Quality\x20Renders',
                'state': window['hqp'],
                'changeTime': 0x0,
                'toggleFn': _0x3452fe => {
                    window['hqp'] = _0x3452fe, localStorage['setItem']('hqp', _0x3452fe);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Disable\x20Grid',
                'state': window['noGrid'],
                'changeTime': 0x0,
                'toggleFn': _0x4fa952 => {
                    window['noGrid'] = _0x4fa952, localStorage['setItem']('noGrid', _0x4fa952);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Weather\x20Effects',
                'state': window['showWeatherEffects'],
                'changeTime': 0x0,
                'toggleFn': _0x83dfa3 => {
                    window['showWeatherEffects'] = _0x83dfa3, localStorage['setItem']('showWeatherEffects', _0x83dfa3);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Render\x20Debug',
                'state': window['toRenderDebug'],
                'changeTime': 0x0,
                'toggleFn': _0x11e24f => {
                    window['toRenderDebug'] = _0x11e24f, localStorage['setItem']('toRenderDebug', _0x11e24f);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'toggle',
                'name': 'Dynamic\x20Joystick',
                'state': window['dynamicJoystick'] ?? ![],
                'changeTime': 0x0,
                'toggleFn': _0x44612b => {
                    window['dynamicJoystick'] = _0x44612b, localStorage['setItem']('dynamicJoystick', _0x44612b);
                },
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'button',
                'name': 'Redeem\x20Code',
                'changeTime': 0x0,
                'clickFn': () => {
                    const _0x378e6b = prompt('Enter\x20Code\x20To\x20Redeem!');
                    if (_0x378e6b === null || _0x378e6b['length'] === 0x0)
                        return;
                    send({ 'redeemCode': _0x378e6b });
                },
                'hovered': ![],
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'button',
                'name': 'Account\x20Info',
                'changeTime': 0x0,
                'clickFn': () => {
                    showAccountInfoModal();
                },
                'hovered': ![],
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'button',
                'name': 'Logout',
                'changeTime': 0x0,
                'clickFn': () => {
                    localStorage['removeItem']('username'), localStorage['removeItem']('hashedPassword'), window['location']['reload']();
                },
                'hovered': ![],
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'button',
                'name': 'Change\x20Password',
                'changeTime': 0x0,
                'clickFn': () => {
                    let _0x2441cf = prompt('Enter\x20your\x20new\x20password');
                    if (_0x2441cf === null || _0x2441cf['length'] === 0x0)
                        return;
                    let _0xf1579f = prompt('Re-enter\x20your\x20new\x20password');
                    if (_0xf1579f === null || _0xf1579f['length'] === 0x0)
                        return;
                    if (_0x2441cf != _0xf1579f) {
                        alert('The\x20passwords\x20you\x20entered\x20do\x20not\x20match!');
                        return;
                    }
                    hashedPassword = SHA(_0x2441cf + 'Zert\x20Is\x20Gay'), hashedPassword2 = SHA(_0x2441cf + 'flowrsalt12345'), send({
                        'changePassword': !![],
                        'username': username,
                        'hashedPassword': hashedPassword,
                        'hashedPassword2': hashedPassword2
                    });
                },
                'hovered': ![],
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            },
            {
                'type': 'button',
                'name': 'flowr.fun',
                'changeTime': 0x0,
                'fontSize': 0xe,
                'clickFn': () => {
                    location['replace']('https://flowr.fun');
                },
                'hovered': ![],
                'screenPosition': {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x0,
                    'h': 0x0
                }
            }
        ], this['x'] = 0x6e, this['y'] = 0x14, this['w'] = 0x100, this['h'] = 0x32 * this['options']['length'] + 0x7, this['offset'] = -this['h'] - 0x28, this['targetOffset'] = -this['h'] - 0x28, this['active'] = ![];
    }
    ['toggle']() {
        this['active'] = !this['active'];
        if (this['active']) {
            this['targetOffset'] = 0x0;
            if (shop['menu']['active'] === !![])
                shop['menu']['active'] = ![];
        } else
            this['targetOffset'] = -this['h'] - 0x28;
    }
    ['draw']() {
        ctx['textBaseline'] = 'middle', ctx['fontKerning'] = 'none', ctx['letterSpacing'] = '-.1px', this['offset'] = interpolate(this['offset'], this['targetOffset'], 0.3), this['currentHeight'] = 0x5, ctx['translate'](this['x'], this['y'] + this['offset']), ctx['fillStyle'] = '#aaaaaa', ctx['strokeStyle'] = '#8a8a8a', ctx['lineWidth'] = 0x8, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        for (let _0x1c1b7a = 0x0; _0x1c1b7a < this['options']['length']; _0x1c1b7a++) {
            this['renderOption'](this['options'][_0x1c1b7a]);
        }
        ctx['translate'](-this['x'], -this['y'] - this['offset']);
    }
    ['renderOption'](_0x40842d) {
        if (_0x40842d['type'] === 'toggle')
            this['renderToggle'](_0x40842d);
        else
            _0x40842d['type'] === 'button' && this['renderButton'](_0x40842d);
    }
    ['renderToggle'](_0x23defd) {
        ctx['strokeStyle'] = '#333333';
        const _0x560af3 = '#666666', _0x368242 = '#dddddd';
        if (time - _0x23defd['changeTime'] < 0x64) {
            const _0x326c5a = (time - _0x23defd['changeTime']) / 0x64;
            _0x23defd['state'] ? ctx['fillStyle'] = blendColor(_0x560af3, _0x368242, _0x326c5a) : ctx['fillStyle'] = blendColor(_0x368242, _0x560af3, _0x326c5a);
        } else
            ctx['fillStyle'] = _0x23defd['state'] ? _0x368242 : _0x560af3;
        _0x23defd['screenPosition'] = {
            'x': 0xf + this['x'],
            'y': this['currentHeight'] + 0x32 / 0x2 - 0x1c / 0x2 + this['y'],
            'w': 0x1c,
            'h': 0x1c
        }, ctx['lineWidth'] = 4.5, ctx['beginPath'](), ctx['rect'](_0x23defd['screenPosition']['x'] - this['x'], _0x23defd['screenPosition']['y'] - this['y'], _0x23defd['screenPosition']['w'], _0x23defd['screenPosition']['h']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['font'] = '900\x2017px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'left', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x2, ctx['strokeText'](_0x23defd['name'], 0xf + 0x1c + 0xd, this['currentHeight'] + 0x32 / 0x2), ctx['fillText'](_0x23defd['name'], 0xf + 0x1c + 0xd, this['currentHeight'] + 0x32 / 0x2), this['currentHeight'] += 0x32;
    }
    ['renderButton'](_0x1b3412) {
        ctx['strokeStyle'] = '#8a8a8a', ctx['fillStyle'] = '#b2b2b2', _0x1b3412['screenPosition'] = {
            'x': 0x12 + this['x'],
            'y': this['currentHeight'] + 0x32 / 0x2 - 0x1c / 0x2 + this['y'],
            'w': this['w'] - 0x12 * 0x2,
            'h': 0x24
        }, ctx['lineWidth'] = 4.5, ctx['beginPath'](), ctx['roundRect'](_0x1b3412['screenPosition']['x'] - this['x'], _0x1b3412['screenPosition']['y'] - this['y'], _0x1b3412['screenPosition']['w'], _0x1b3412['screenPosition']['h'], 0x8), _0x1b3412['hovered'] === !![] && (ctx['fill'](), setCursor('pointer')), ctx['stroke'](), ctx['closePath'](), ctx['font'] = '900\x20' + (_0x1b3412['fontSize'] ?? 17.6) + 'px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x2, ctx['strokeText'](_0x1b3412['name'], this['w'] / 0x2, this['currentHeight'] + 0x3a / 0x2), ctx['fillText'](_0x1b3412['name'], this['w'] / 0x2, this['currentHeight'] + 0x3a / 0x2), this['currentHeight'] += 0x30;
    }
    ['mouseDown'](_0x5eabf8) {
        if (!this['active'])
            return;
        for (let _0x37e3aa = 0x0; _0x37e3aa < this['options']['length']; _0x37e3aa++) {
            const _0x25b6ab = this['options'][_0x37e3aa];
            if (_0x25b6ab['type'] === 'toggle')
                this['processToggle'](_0x25b6ab, _0x5eabf8);
            else
                _0x25b6ab['type'] === 'button' && this['processButton'](_0x25b6ab, _0x5eabf8, 'down');
        }
    }
    ['mouseMove'](_0x35bb90) {
        if (!this['active'])
            return;
        for (let _0x2135af = 0x0; _0x2135af < this['options']['length']; _0x2135af++) {
            const _0x4faf09 = this['options'][_0x2135af];
            _0x4faf09['type'] === 'button' && this['processButton'](_0x4faf09, _0x35bb90, 'move');
        }
    }
    ['processToggle'](_0x33ebca, _0x5cea1c) {
        const {
                x: _0x352ebf,
                y: _0x3f1198
            } = _0x5cea1c, _0x3cb82b = _0x33ebca['screenPosition']['x'], _0x439b63 = _0x33ebca['screenPosition']['y'], _0x4c47c9 = _0x33ebca['screenPosition']['w'], _0x323f11 = _0x33ebca['screenPosition']['h'];
        _0x352ebf > _0x3cb82b && _0x3f1198 > _0x439b63 && _0x352ebf < _0x3cb82b + _0x4c47c9 && _0x3f1198 < _0x439b63 + _0x323f11 && (_0x33ebca['state'] = !_0x33ebca['state'], _0x33ebca['changeTime'] = time, _0x33ebca['toggleFn'](_0x33ebca['state']));
    }
    ['processButton'](_0x2a259c, _0x44a471, _0x57ae21) {
        _0x57ae21 === 'move' && (_0x2a259c['hovered'] = ![]);
        const {
                x: _0x64fba6,
                y: _0x50995b
            } = _0x44a471, _0x491b3f = _0x2a259c['screenPosition']['x'], _0x17e47c = _0x2a259c['screenPosition']['y'], _0xf8ac26 = _0x2a259c['screenPosition']['w'], _0x41a235 = _0x2a259c['screenPosition']['h'];
        _0x64fba6 > _0x491b3f && _0x50995b > _0x17e47c && _0x64fba6 < _0x491b3f + _0xf8ac26 && _0x50995b < _0x17e47c + _0x41a235 && (_0x57ae21 === 'move' ? _0x2a259c['hovered'] = !![] : _0x2a259c['clickFn']());
    }
}
const settingsMenu = new SettingsMenu();