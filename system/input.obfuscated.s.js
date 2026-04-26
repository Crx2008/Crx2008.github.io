const mouse = {
        'x': 0x0,
        'y': 0x0,
        'canvasX': 0x0,
        'canvasY': 0x0,
        'clickPosition': 'up',
        'lastDownData': {
            'time': -Infinity,
            'x': 0x0,
            'y': 0x0
        }
    }, keyCodes = {
        'KeyW': 'up',
        'KeyA': 'left',
        'KeyS': 'down',
        'KeyD': 'right',
        'ArrowUp': 'up',
        'ArrowLeft': 'left',
        'ArrowDown': 'down',
        'ArrowRight': 'right'
    }, directionToIdMap = {
        'up': 0x0,
        'left': 0x1,
        'down': 0x2,
        'right': 0x3
    };
function arrayEquals(_0x456c29, _0x2ea996) {
    return Array['isArray'](_0x456c29) && Array['isArray'](_0x2ea996) && _0x456c29['length'] === _0x2ea996['length'] && _0x456c29['every']((_0x2916ac, _0x291332) => _0x2916ac === _0x2ea996[_0x291332]);
}
let latestInput = [], previousInput = null, lastSentInput = window['performance']['now'](), minimumInputTime = 0x3e8 / 0xa;
const chatCommandMap = {};
class InputHandler {
    constructor(_0x3edb0f) {
        this['client'] = _0x3edb0f, this['chatOpen'] = ![];
    }
    ['start']() {
        window['onkeydown'] = _0x5858fd => this['handleKey'](_0x5858fd), window['onkeyup'] = _0x3baa58 => this['handleKey'](_0x3baa58), window['onmousemove'] = _0x304bdf => this['handleMouse'](_0x304bdf), window['addEventListener']('contextmenu', _0x11d4fb => _0x11d4fb['preventDefault']()), document['addEventListener']('visibilitychange', () => {
            if (document['visibilityState'] === 'hidden')
                for (let _0x4aea14 in this['input']) {
                    this['input'][_0x4aea14] = ![];
                }
        });
    }
    ['updateChat']() {
        document['activeElement'] === chatInput ? (this['chatOpen'] === ![] && (chatDiv['classList']['remove']('hidden'), chatInput['focus']()), this['chatOpen'] = !![], chatInput['style']['opacity'] = '1') : (this['chatOpen'] === !![] && chatInput['blur'](), this['chatOpen'] = ![], chatInput['style']['opacity'] = '0');
    }
    ['handleKey'](_0x14dffd) {
        if (_0x14dffd['code'] === undefined)
            return;
        this['updateChat']();
        if (window['state'] !== 'game')
            this['chatOpen'] = ![];
        else {
            if (_0x14dffd['code'] === 'Enter' && window['isEditor'] !== !![]) {
                if (this['chatOpen'] === !![] && _0x14dffd['type'] === 'keydown') {
                    const _0x48cec8 = chatInput['value']['trim']();
                    if (_0x48cec8['length'] !== 0x0) {
                        if (_0x48cec8 == '/clear') {
                            for (let _0x473344 = 0x0; _0x473344 < chatDiv['children'][0x1]['children']['length']; _0x473344++) {
                                chatDiv['children'][0x1]['children']['item'](0x0)['remove']();
                            }
                            chatDiv['children'][0x1]['children']['item'](0x0)['remove']();
                        } else
                            send([
                                'c',
                                _0x48cec8
                            ]);
                    }
                    this['chatOpen'] = ![], chatInput['value'] = '', chatInput['blur'](), chatInput['style']['opacity'] = '0';
                } else {
                    if (_0x14dffd['type'] === 'keydown') {
                        this['chatOpen'] = !![], chatDiv['classList']['remove']('hidden'), chatInput['focus'](), chatInput['style']['opacity'] = '1';
                        !arrayEquals(latestInput, [
                            0x0,
                            0x0,
                            0x0,
                            0x0
                        ]) && (latestInput = [
                            0x0,
                            0x0,
                            0x0,
                            0x0
                        ], send(latestInput));
                        const _0x9653cc = room['flowers'][window['selfId']];
                        _0x9653cc['attacking'] === !![] && (_0x9653cc['attacking'] = ![], send({ 'attack': ![] }));
                        if (_0x9653cc['defending'] === !![])
                            _0x9653cc['defending'] = ![], send({ 'defend': ![] });
                        else
                            _0x14dffd['button'] == 0x1 && send([
                                'middle',
                                ![]
                            ]);
                    }
                }
                return _0x14dffd['preventDefault']();
            }
        }
        if (_0x14dffd['repeat'] && this['chatOpen'] === ![])
            return _0x14dffd['preventDefault']();
        if (this['chatOpen'] === !![])
            return;
        _0x14dffd['code'] === 'KeyQ' && _0x14dffd['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT' && (window['state'] == 'game' ? send({ 'reduceRotateSpeed': !![] }) : menuInventory['speedCircle']['mode'] = 0x1);
        _0x14dffd['code'] === 'KeyE' && _0x14dffd['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT' && (window['state'] == 'game' ? send({ 'increaseRotateSpeed': !![] }) : menuInventory['speedCircle']['mode'] = 0x2);
        (_0x14dffd['code'] === 'KeyQ' || _0x14dffd['code'] === 'KeyE') && _0x14dffd['type'] === 'keyup' && document['activeElement']['tagName'] !== 'INPUT' && (menuInventory['speedCircle']['mode'] = 0x0, window['state'] == 'game' ? _0x14dffd['code'] === 'KeyQ' ? send({ 'reduceRotateSpeed': ![] }) : send({ 'increaseRotateSpeed': ![] }) : (send({ 'speedCircle': menuInventory['speedCircle']['reload'] }), localStorage['setItem']('speedCircle', menuInventory['speedCircle']['reload'])));
        _0x14dffd['code'] === 'Semicolon' && _0x14dffd['repeat'] === ![] && _0x14dffd['type'] === 'keydown' && (window['toRenderDebug'] = !window['toRenderDebug'], window['fps'] = 0x0, window['framesRendered'] = 0x0, window['lastFramesRenderedResetTime'] = performance['now']());
        if (_0x14dffd['code']['startsWith']('Digit') === !![] && _0x14dffd['repeat'] === ![] && _0x14dffd['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT') {
            const _0x5a3f2a = _0x14dffd['code'] === 'Digit0' ? 0x9 : _0x14dffd['code'][0x5] - 0x1;
            if (_0x5a3f2a === undefined)
                return;
            window['state'] === 'menu' ? menuInventory['swapPetals'](_0x5a3f2a) : inventory['swapPetals'](_0x5a3f2a);
        } else {
            if (_0x14dffd['code'] === 'KeyR' && _0x14dffd['repeat'] === ![] && _0x14dffd['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT')
                for (let _0x3afe58 = 0x0; _0x3afe58 < 0xa; _0x3afe58++) {
                    inventory['swapPetals'](_0x3afe58);
                }
        }
        const _0x3b11ce = room['flowers'][window['selfId']];
        if (window['connected'] === !![] && _0x3b11ce !== undefined) {
            if (!mouseMovement) {
                if (keyCodes[_0x14dffd['code']]) {
                    latestInput['length'] != 0x4 && (latestInput = [
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ]);
                    _0x14dffd['type'] === 'keydown' ? latestInput[directionToIdMap[keyCodes[_0x14dffd['code']]]] = 0x1 : latestInput[directionToIdMap[keyCodes[_0x14dffd['code']]]] = 0x0;
                    !arrayEquals(latestInput, previousInput) && (send(latestInput), previousInput = window['structuredClone'](latestInput));
                    _0x3b11ce['input'][keyCodes[_0x14dffd['code']]] = _0x14dffd['type'] === 'keydown';
                    let _0x2d8c74 = 0x0, _0x53115b = 0x0;
                    _0x3b11ce['input']['up'] && (_0x53115b -= 0x1);
                    _0x3b11ce['input']['down'] && (_0x53115b += 0x1);
                    _0x3b11ce['input']['left'] && (_0x2d8c74 -= 0x1);
                    _0x3b11ce['input']['right'] && (_0x2d8c74 += 0x1);
                    let _0x381738 = Math['atan2'](_0x53115b, _0x2d8c74);
                    (_0x53115b != 0x0 || _0x2d8c74 != 0x0) && (_0x3b11ce['angle'] = _0x381738, _0x3b11ce['magnitude'] = 0x270f);
                }
            }
            _0x14dffd['key'] == '\x20' && (send({ 'attack': _0x14dffd['type'] === 'keydown' }), room['flowers'][window['selfId']]['attacking'] = _0x14dffd['type'] === 'keydown');
            _0x14dffd['key'] == 'Shift' && (send({ 'defend': _0x14dffd['type'] === 'keydown' }), room['flowers'][window['selfId']]['defending'] = _0x14dffd['type'] === 'keydown');
            _0x14dffd['key'] == 'f' && (send({ 'middle': _0x14dffd['type'] === 'keydown' }), room['flowers'][window['selfId']]['middleState'] = _0x14dffd['type'] === 'keydown');
            if (_0x14dffd['code'] === 'KeyG' && _0x14dffd['type'] === 'keydown' && !_0x14dffd['repeat']) {
                if (inventory && inventory['artifactContainer']) {
                    const _0xd4816d = inventory['artifactContainer']['type'];
                    _0xd4816d && send({ 'activateArtifactUltimate': { 'artifactType': _0xd4816d } });
                }
            }
            if (window['state'] === 'game' && _0x3b11ce && _0x3b11ce['isMob']) {
                const _0xb4e22c = {
                    'Digit1': 0x0,
                    'Digit2': 0x1,
                    'Digit3': 0x2,
                    'Digit4': 0x3,
                    'Digit5': 0x4
                };
                if (_0xb4e22c[_0x14dffd['code']] !== undefined && _0x14dffd['type'] === 'keydown') {
                    const _0x532ef3 = _0xb4e22c[_0x14dffd['code']];
                    if (_0x3b11ce['skills'] && _0x3b11ce['skills'][_0x532ef3]) {
                        const _0x2ed0cf = _0x3b11ce['skills'][_0x532ef3];
                        send({ 'mobSkill': _0x2ed0cf['id'] });
                    }
                }
            }
            _0x14dffd['key'] == '[' && _0x14dffd['type'] === 'keydown' && (fov = 0x1), _0x14dffd['code'] == 'Equal' && _0x14dffd['type'] === 'keydown' && (fov *= 0x1 + 0x1 / 0x5, fov < 0.2 && (fov = 0.2), fov > 0x3 && (fov = 0x3)), _0x14dffd['code'] == 'Minus' && _0x14dffd['type'] === 'keydown' && (fov *= 0x1 - 0x1 / 0x5, fov < 0.2 && (fov = 0.2), fov > 0x3 && (fov = 0x3));
        }
        if (window['state'] === 'menu' && _0x14dffd['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT') {
            if (_0x14dffd['key']['toLowerCase']() === 'x')
                globalInventory['toggleMenu']();
            else {
                if (_0x14dffd['key']['toLowerCase']() === 'c')
                    craftingMenu['toggleMenu']();
                else {
                    if (_0x14dffd['key']['toLowerCase']() === 'v')
                        mobGallery['toggleMenu']();
                    else {
                        if (_0x14dffd['key']['toLowerCase']() === 'b')
                            shop['toggle']();
                        else
                            _0x14dffd['key']['toLowerCase']() === 'z' && specialGlobalInventory['toggleMenu']();
                    }
                }
            }
        }
    }
    ['sendInitialInput']() {
        if (mouseMovement) {
            const _0x36496a = mouse['x'] - window['innerWidth'] / 0x2, _0x56b822 = mouse['y'] - window['innerHeight'] / 0x2;
            let _0x2aa966 = Math['sqrt'](_0x56b822 ** 0x2 + _0x36496a ** 0x2);
            _0x2aa966 < 0xdc && (_0x2aa966 = (_0x2aa966 / 0xdc) ** 0.9 * 0xdc);
            latestInput['length'] != 0x2 && (latestInput = [
                0x0,
                0x0
            ]);
            const _0x256a0b = Math['atan2'](_0x56b822, _0x36496a);
            latestInput[0x0] = Math['round'](_0x256a0b * 0x3e8) / 0x3e8, latestInput[0x1] = Math['round'](_0x2aa966 * 0xa) / 0xa, send(latestInput);
        }
    }
    ['handleMouse'](_0x585390) {
        const _0x588dd3 = _0x585390['x'] - window['innerWidth'] / 0x2, _0xa688ad = _0x585390['y'] - window['innerHeight'] / 0x2, _0x2d777d = room['flowers'][window['selfId']];
        if (window['connected'] === !![] && _0x2d777d !== undefined && mouseMovement) {
            if (window['mobile'])
                mobileControls['handleMouseMove'](_0x585390);
            else {
                let _0xa69dcc = Math['sqrt'](_0xa688ad ** 0x2 + _0x588dd3 ** 0x2);
                _0xa69dcc >= 0xdc ? _0xa69dcc = 0xdc : _0xa69dcc = (_0xa69dcc / 0xdc) ** 0.9 * 0xdc;
                !_0x2d777d['inSkillControl'] && (_0x2d777d['angle'] = Math['atan2'](_0xa688ad, _0x588dd3));
                _0x2d777d['magnitude'] = _0xa69dcc;
                latestInput['length'] != 0x2 && (latestInput = [
                    0x0,
                    0x0
                ]);
                latestInput[0x0] = Math['round'](_0x2d777d['angle'] * 0x3e8) / 0x3e8, latestInput[0x1] = Math['round'](_0xa69dcc * 0xa) / 0xa;
                if (latestInput[0x1] === 0xdc)
                    latestInput['length'] = 0x1;
                if (!arrayEquals(latestInput, previousInput)) {
                    if (time - lastSentInput > minimumInputTime)
                        send(latestInput), previousInput = window['structuredClone'](latestInput), lastSentInput = time;
                    else {
                        let _0x141a25 = lastSentInput, _0x4e79d6 = latestInput;
                        setTimeout(() => {
                            if (_0x141a25 != lastSentInput)
                                return;
                            send(_0x4e79d6), previousInput = window['structuredClone'](_0x4e79d6), lastSentInput = time;
                        }, minimumInputTime - (time - lastSentInput));
                    }
                }
            }
        }
        mouse['x'] = _0x585390['pageX'], mouse['y'] = _0x585390['pageY'], mouse['canvasX'] = mouse['x'] / window['innerWidth'] * canvas['w'], mouse['canvasY'] = mouse['y'] / window['innerHeight'] * canvas['h'];
        typeof draggingPetalContainer !== 'undefined' && (draggingPetalContainer !== null && simulatedraggingPetalContainer(mouse['canvasX'], mouse['canvasY']));
        if (window['state'] === 'menu') {
            const _0x24a526 = mouse['canvasX'], _0x34afe4 = mouse['canvasY'];
            biomeManager['mouseMove']({
                'mouseX': _0x24a526,
                'mouseY': _0x34afe4
            }, _0x585390);
            const _0x41c068 = _0x585390['button'] === undefined ? 0x0 : _0x585390['button'];
            typeof squadUI !== 'undefined' && squadUI['hoveringOverSlider'] === !![] && _0x41c068 === 0x0 && squadUI['draggingSlider'] === !![] && squadUI['updateSliderDrag'](mouse['canvasX']), settingsMenu['mouseMove']({
                'x': _0x24a526,
                'y': _0x34afe4
            });
        }
        typeof globalInventory !== 'undefined' && (globalInventory['mouseMove']({
            'mouseX': mouse['canvasX'],
            'mouseY': mouse['canvasY']
        }), craftingMenu['mouseMove']({
            'mouseX': mouse['canvasX'],
            'mouseY': mouse['canvasY']
        }), mobGallery['mouseMove']({
            'x': mouse['canvasX'],
            'y': mouse['canvasY']
        }), specialGlobalInventory['mouseMove']());
    }
}
class MobileControls {
    constructor() {
        this['joystickpad'] = {
            'x': canvas['w'] * 0x1 / 0xa,
            'y': canvas['h'] - canvas['w'] * 0x1 / 0xa,
            'r': canvas['w'] / 0xf
        }, this['joystick'] = {
            'r': canvas['w'] / 0x28,
            'magnitude': 0x0,
            'angle': 0x0
        }, this['currentlyHolding'] = ![], this['attacking'] = ![], this['defending'] = ![], this['dynamicJoystickActive'] = ![], this['dynamicJoystickCenter'] = {
            'x': 0x0,
            'y': 0x0
        }, this['dynamicJoystickpad'] = {
            'x': 0x0,
            'y': 0x0,
            'r': canvas['w'] / 0xf
        };
    }
    ['draw']() {
        const _0x97b7f7 = room['flowers'][window['selfId']];
        if (!(window['mobile'] && _0x97b7f7 !== undefined && window['connected'] === !![]))
            return;
        const _0x5b3726 = window['dynamicJoystick'] ?? ![];
        this['joystickpad'] = {
            'x': canvas['w'] * 0x1 / 0xa,
            'y': canvas['h'] - canvas['w'] * 0x1 / 0xa,
            'r': canvas['w'] / 0xf
        }, this['joystick']['r'] = canvas['w'] / 0x28;
        let _0x36978c, _0x2141d8;
        if (_0x5b3726 && this['dynamicJoystickActive'])
            _0x36978c = this['dynamicJoystickpad']['x'], _0x2141d8 = this['dynamicJoystickpad']['y'];
        else
            !_0x5b3726 ? (_0x36978c = this['joystickpad']['x'], _0x2141d8 = this['joystickpad']['y']) : (_0x36978c = null, _0x2141d8 = null);
        _0x36978c !== null && (ctx['globalAlpha'] = 0.2, ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](_0x36978c, _0x2141d8, this['joystickpad']['r'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['globalAlpha'] = 0x1, this['joystick']['dx'] = Math['cos'](this['joystick']['angle']) * this['joystick']['magnitude'], this['joystick']['dy'] = Math['sin'](this['joystick']['angle']) * this['joystick']['magnitude'], ctx['globalAlpha'] = 0.5, ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](_0x36978c + this['joystick']['dx'], _0x2141d8 + this['joystick']['dy'], this['joystick']['r'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['globalAlpha'] = 0x1), this['attackButton'] = {
            'x': canvas['w'] * 8.4 / 0xa,
            'y': canvas['h'] - canvas['w'] * 1.4 / 0xa,
            'r': canvas['w'] / 0x14
        }, this['defendButton'] = {
            'x': canvas['w'] * 9.3 / 0xa,
            'y': canvas['h'] - canvas['w'] * 0.5 / 0xa,
            'r': canvas['w'] / 0x19
        }, ctx['globalAlpha'] = 0.4, ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](this['attackButton']['x'], this['attackButton']['y'], this['attackButton']['r'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['globalAlpha'] = 0x1, ctx['globalAlpha'] = 0.4, ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](this['defendButton']['x'], this['defendButton']['y'], this['defendButton']['r'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['globalAlpha'] = 0x1, this['plusButton'] = {
            'x': canvas['w'] * 8.6 / 0xa,
            'y': canvas['h'] - canvas['w'] * 0.5 / 0xa,
            'r': canvas['w'] / 0x46
        }, this['minusButton'] = {
            'x': canvas['w'] * 8.2 / 0xa,
            'y': canvas['h'] - canvas['w'] * 0.5 / 0xa,
            'r': canvas['w'] / 0x46
        }, ctx['globalAlpha'] = 0.4, ctx['strokeStyle'] = '#000000', ctx['beginPath'](), ctx['moveTo'](this['plusButton']['x'] - this['plusButton']['r'], this['plusButton']['y']), ctx['lineTo'](this['plusButton']['x'] + this['plusButton']['r'], this['plusButton']['y']), ctx['moveTo'](this['plusButton']['x'], this['plusButton']['y'] - this['plusButton']['r']), ctx['lineTo'](this['plusButton']['x'], this['plusButton']['y'] + this['plusButton']['r']), ctx['lineWidth'] = 0xf, ctx['stroke'](), ctx['globalAlpha'] = 0x1, ctx['globalAlpha'] = 0.4, ctx['strokeStyle'] = '#000000', ctx['beginPath'](), ctx['moveTo'](this['minusButton']['x'] - this['minusButton']['r'], this['minusButton']['y']), ctx['lineTo'](this['minusButton']['x'] + this['minusButton']['r'], this['minusButton']['y']), ctx['lineWidth'] = 0xf, ctx['stroke'](), ctx['globalAlpha'] = 0x1, this['swapButton'] = {
            'x': canvas['w'] * 9.3 / 0xa,
            'y': canvas['h'] - canvas['w'] * 1.3 / 0xa,
            'r': canvas['w'] / 0x28
        }, ctx['globalAlpha'] = 0.4, ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](this['swapButton']['x'], this['swapButton']['y'], this['swapButton']['r'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['fillStyle'] = '#ffffff', ctx['font'] = '600\x2040px\x20Ubuntu', ctx['fillText']('R', this['swapButton']['x'], this['swapButton']['y']), ctx['globalAlpha'] = 0x1;
    }
    ['handleMousePress'](_0x594587) {
        if (window['inventory'] && window['inventory']['artifactContainer']) {
            const _0x2ce178 = _0x594587['x'] / window['innerWidth'] * canvas['w'], _0x5deff7 = _0x594587['y'] / window['innerHeight'] * canvas['h'], _0x2a1f7e = window['inventory']['artifactSlot'], _0x1954e4 = _0x2a1f7e['y'] + window['inventory']['translateY'], _0x51d778 = _0x2a1f7e['size'] / 0x2;
            if (_0x2ce178 > _0x2a1f7e['x'] - _0x51d778 - 0x14 && _0x2ce178 < _0x2a1f7e['x'] + _0x51d778 + 0x14 && _0x5deff7 > _0x1954e4 - _0x51d778 - 0x14 && _0x5deff7 < _0x1954e4 + _0x51d778 + 0x14) {
                const _0x1c1202 = window['inventory']['artifactContainer']['type'];
                send({ 'activateArtifactUltimate': { 'artifactType': _0x1c1202 } });
            }
        }
        if (this['chatOpen'] && document['activeElement'] === chatInput) {
            const _0x39cb0d = chatInput['getBoundingClientRect']();
            if (_0x594587['x'] < _0x39cb0d['left'] || _0x594587['x'] > _0x39cb0d['right'] || _0x594587['y'] < _0x39cb0d['top'] || _0x594587['y'] > _0x39cb0d['bottom']) {
                this['chatOpen'] = ![], chatInput['value'] = '', chatInput['blur'](), chatInput['style']['opacity'] = '0';
                return;
            }
        }
        const _0x326a00 = _0x594587['x'] / window['innerWidth'] * canvas['w'], _0x285307 = _0x594587['y'] / window['innerHeight'] * canvas['h'], _0x2ebedb = window['dynamicJoystick'] ?? ![];
        if (_0x2ebedb) {
            const _0x39a672 = canvas['h'] - 0x46, _0x104593 = _0x285307 >= _0x39a672;
            if (_0x326a00 < canvas['w'] / 0x2 || _0x326a00 >= canvas['w'] * 0.7 && _0x285307 >= canvas['h'] - canvas['w'] * 0.3) {
                const _0x3d725d = this['inCircleBounds'](_0x326a00, _0x285307, this['attackButton']) || this['inCircleBounds'](_0x326a00, _0x285307, this['defendButton']) || this['inCircleBounds'](_0x326a00, _0x285307, this['plusButton']) || this['inCircleBounds'](_0x326a00, _0x285307, this['minusButton']) || this['inCircleBounds'](_0x326a00, _0x285307, this['swapButton']);
                !_0x3d725d && _0x326a00 < canvas['w'] / 0x2 && !_0x104593 && (this['currentlyHolding'] = !![], this['dynamicJoystickActive'] = !![], this['dynamicJoystickCenter'] = {
                    'x': _0x326a00,
                    'y': _0x285307
                }, this['dynamicJoystickpad'] = {
                    'x': _0x326a00,
                    'y': _0x285307,
                    'r': canvas['w'] / 0xf
                });
            }
        } else
            this['inCircleBounds'](_0x326a00, _0x285307, this['joystickpad']) && (this['currentlyHolding'] = !![]);
        this['inCircleBounds'](_0x326a00, _0x285307, this['attackButton']) && (send([
            'a',
            !![]
        ]), this['attacking'] = !![]);
        this['inCircleBounds'](_0x326a00, _0x285307, this['defendButton']) && (send([
            'd',
            !![]
        ]), this['defending'] = !![]);
        this['inCircleBounds'](_0x326a00, _0x285307, this['plusButton']) && (fov *= 0x1 + 0x1 / 0x5, fov < 0.2 && (fov = 0.2), fov > 0x3 && (fov = 0x3));
        this['inCircleBounds'](_0x326a00, _0x285307, this['minusButton']) && (fov *= 0x1 - 0x1 / 0x5, fov < 0.2 && (fov = 0.2), fov > 0x3 && (fov = 0x3));
        if (this['inCircleBounds'](_0x326a00, _0x285307, this['swapButton']))
            for (let _0x3b4a0c = 0x0; _0x3b4a0c < 0xa; _0x3b4a0c++) {
                inventory['swapPetals'](_0x3b4a0c);
            }
        const _0x9bb492 = {
            'x': 0x41,
            'y': 0xa,
            'w': 0x23,
            'h': 0x23
        };
        _0x326a00 > _0x9bb492['x'] && _0x326a00 < _0x9bb492['x'] + _0x9bb492['w'] && _0x285307 > _0x9bb492['y'] && _0x285307 < _0x9bb492['y'] + _0x9bb492['h'] && ((!window['lastFullscreenTime'] || performance['now']() - window['lastFullscreenTime'] > 0x12c) && (window['lastFullscreenTime'] = performance['now'](), !document['fullscreenElement'] ? document['documentElement']['requestFullscreen']()['catch'](_0x56a652 => {
            console['log']('全屏错误:\x20' + _0x56a652['message']);
        }) : document['exitFullscreen']()));
    }
    ['handleMouseMove'](_0x1e2928) {
        if (this['currentlyHolding'] === ![])
            return;
        const _0x277ab4 = _0x1e2928['x'] / window['innerWidth'] * canvas['w'], _0x377982 = _0x1e2928['y'] / window['innerHeight'] * canvas['h'];
        if (_0x277ab4 > canvas['w'] / 0x2)
            return;
        this['joystick'] = {
            'r': canvas['w'] / 0x28,
            'magnitude': 0x0,
            'angle': 0x0
        };
        const _0x4ae637 = window['dynamicJoystick'] ?? ![], _0x42a9f7 = _0x4ae637 && this['dynamicJoystickActive'] ? this['dynamicJoystickpad'] : this['joystickpad'], _0xf480f6 = 0x3 / 0x5 * _0x42a9f7['r'], _0x433590 = _0x277ab4 - _0x42a9f7['x'], _0xec6e25 = _0x377982 - _0x42a9f7['y'], _0x5ab014 = room['flowers'][window['selfId']];
        let _0x15739e = Math['sqrt'](_0xec6e25 ** 0x2 + _0x433590 ** 0x2);
        if (_0x15739e >= _0xf480f6)
            this['joystick']['magnitude'] = _0xf480f6, _0x15739e = 0xdc;
        else
            _0x15739e < _0xf480f6 / 0x5 ? (this['joystick']['magnitude'] = 0x0, _0x15739e = 0x0) : (this['joystick']['magnitude'] = (_0x15739e / _0xf480f6) ** 0.9 * _0xf480f6, _0x15739e = (_0x15739e / _0xf480f6) ** 0.9 * 0xdc);
        !_0x5ab014['inSkillControl'] && (_0x5ab014['angle'] = Math['atan2'](_0xec6e25, _0x433590));
        this['joystick']['angle'] = _0x5ab014['angle'], _0x5ab014['magnitude'] = _0x15739e;
        latestInput['length'] != 0x2 && (latestInput = [
            0x0,
            0x0
        ]);
        latestInput[0x0] = Math['round'](_0x5ab014['angle'] * 0x3e8) / 0x3e8, latestInput[0x1] = Math['round'](_0x15739e * 0xa) / 0xa;
        if (!arrayEquals(latestInput, previousInput)) {
            if (time - lastSentInput > minimumInputTime)
                send(latestInput), previousInput = window['structuredClone'](latestInput), lastSentInput = time;
            else {
                let _0x266194 = lastSentInput, _0x54e3be = latestInput;
                setTimeout(() => {
                    if (_0x266194 != lastSentInput)
                        return;
                    send(_0x54e3be), previousInput = window['structuredClone'](_0x54e3be), lastSentInput = time;
                }, minimumInputTime - (time - lastSentInput));
            }
        }
    }
    ['releaseControls'](_0x5bfc14) {
        const _0x48fe71 = _0x5bfc14['x'] / window['innerWidth'] * canvas['w'], _0x29a82f = _0x5bfc14['y'] / window['innerHeight'] * canvas['h'];
        if (_0x48fe71 < canvas['w'] / 0x2) {
            this['currentlyHolding'] = ![];
            latestInput['length'] != 0x2 && (latestInput = [
                0x0,
                0x0
            ]);
            latestInput[0x0] = 0x0, latestInput[0x1] = 0x0, this['joystick']['angle'] = 0x0, this['joystick']['magnitude'] = 0x0;
            if (!arrayEquals(latestInput, previousInput)) {
                if (time - lastSentInput > minimumInputTime)
                    send(latestInput), previousInput = window['structuredClone'](latestInput), lastSentInput = time;
                else {
                    let _0x2a7130 = lastSentInput, _0x3e757d = latestInput;
                    setTimeout(() => {
                        if (_0x2a7130 != lastSentInput)
                            return;
                        send(_0x3e757d), previousInput = window['structuredClone'](_0x3e757d), lastSentInput = time;
                    }, minimumInputTime - (time - lastSentInput));
                }
            }
        }
        _0x48fe71 > canvas['w'] / 0x2 && (this['attacking'] && (send([
            'a',
            ![]
        ]), this['attacking'] = ![]), this['defending'] && (send([
            'd',
            ![]
        ]), this['defending'] = ![]));
    }
    ['inCircleBounds'](_0x31ba28, _0x33c0e9, _0x4eb3c4) {
        return _0x31ba28 < _0x4eb3c4['x'] + _0x4eb3c4['r'] && _0x31ba28 > _0x4eb3c4['x'] - _0x4eb3c4['r'] && _0x33c0e9 < _0x4eb3c4['y'] + _0x4eb3c4['r'] && _0x33c0e9 > _0x4eb3c4['y'] - _0x4eb3c4['r'];
    }
}