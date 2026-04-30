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
function arrayEquals(_0x1598ed, _0x308f9f) {
    return Array['isArray'](_0x1598ed) && Array['isArray'](_0x308f9f) && _0x1598ed['length'] === _0x308f9f['length'] && _0x1598ed['every']((_0x319ae6, _0x5920a7) => _0x319ae6 === _0x308f9f[_0x5920a7]);
}
let latestInput = [], previousInput = null, lastSentInput = window['performance']['now'](), minimumInputTime = 0x3e8 / 0xa;
const chatCommandMap = {};
class InputHandler {
    constructor(_0x1efbfc) {
        this['client'] = _0x1efbfc, this['chatOpen'] = ![];
    }
    ['start']() {
        window['onkeydown'] = _0x582739 => this['handleKey'](_0x582739), window['onkeyup'] = _0x38889f => this['handleKey'](_0x38889f), window['onmousemove'] = _0x9351f7 => this['handleMouse'](_0x9351f7), window['addEventListener']('contextmenu', _0x218388 => _0x218388['preventDefault']()), document['addEventListener']('visibilitychange', () => {
            if (document['visibilityState'] === 'hidden')
                for (let _0x516b07 in this['input']) {
                    this['input'][_0x516b07] = ![];
                }
        });
    }
    ['updateChat']() {
        document['activeElement'] === chatInput ? (this['chatOpen'] === ![] && (chatDiv['classList']['remove']('hidden'), chatInput['focus']()), this['chatOpen'] = !![], chatInput['style']['opacity'] = '1') : (this['chatOpen'] === !![] && chatInput['blur'](), this['chatOpen'] = ![], chatInput['style']['opacity'] = '0');
    }
    ['handleKey'](_0x269f74) {
        if (_0x269f74['code'] === undefined)
            return;
        this['updateChat']();
        if (window['state'] !== 'game' && window['state'] !== 'dead')
            this['chatOpen'] = ![];
        else {
            if (_0x269f74['code'] === 'Enter' && window['isEditor'] !== !![]) {
                if (this['chatOpen'] === !![] && _0x269f74['type'] === 'keydown') {
                    const _0x95d6ec = chatInput['value']['trim']();
                    if (_0x95d6ec['length'] !== 0x0) {
                        if (_0x95d6ec == '/clear') {
                            for (let _0x8c2a56 = 0x0; _0x8c2a56 < chatDiv['children'][0x1]['children']['length']; _0x8c2a56++) {
                                chatDiv['children'][0x1]['children']['item'](0x0)['remove']();
                            }
                            chatDiv['children'][0x1]['children']['item'](0x0)['remove']();
                        } else
                            send([
                                'c',
                                _0x95d6ec
                            ]);
                    }
                    this['chatOpen'] = ![], chatInput['value'] = '', chatInput['blur'](), chatInput['style']['opacity'] = '0';
                } else {
                    if (_0x269f74['type'] === 'keydown') {
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
                        const _0x1fb382 = room['flowers'][window['selfId']];
                        _0x1fb382['attacking'] === !![] && (_0x1fb382['attacking'] = ![], send({ 'attack': ![] }));
                        if (_0x1fb382['defending'] === !![])
                            _0x1fb382['defending'] = ![], send({ 'defend': ![] });
                        else
                            _0x269f74['button'] == 0x1 && send([
                                'middle',
                                ![]
                            ]);
                    }
                }
                return _0x269f74['preventDefault']();
            }
        }
        if (_0x269f74['repeat'] && this['chatOpen'] === ![])
            return _0x269f74['preventDefault']();
        if (this['chatOpen'] === !![])
            return;
        _0x269f74['code'] === 'KeyQ' && _0x269f74['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT' && (window['state'] == 'game' ? send({ 'reduceRotateSpeed': !![] }) : menuInventory['speedCircle']['mode'] = 0x1);
        _0x269f74['code'] === 'KeyE' && _0x269f74['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT' && (window['state'] == 'game' ? send({ 'increaseRotateSpeed': !![] }) : menuInventory['speedCircle']['mode'] = 0x2);
        (_0x269f74['code'] === 'KeyQ' || _0x269f74['code'] === 'KeyE') && _0x269f74['type'] === 'keyup' && document['activeElement']['tagName'] !== 'INPUT' && (menuInventory['speedCircle']['mode'] = 0x0, window['state'] == 'game' ? _0x269f74['code'] === 'KeyQ' ? send({ 'reduceRotateSpeed': ![] }) : send({ 'increaseRotateSpeed': ![] }) : (send({ 'speedCircle': menuInventory['speedCircle']['reload'] }), localStorage['setItem']('speedCircle', menuInventory['speedCircle']['reload'])));
        _0x269f74['code'] === 'Semicolon' && _0x269f74['repeat'] === ![] && _0x269f74['type'] === 'keydown' && (window['toRenderDebug'] = !window['toRenderDebug'], window['fps'] = 0x0, window['framesRendered'] = 0x0, window['lastFramesRenderedResetTime'] = performance['now']());
        if (_0x269f74['code']['startsWith']('Digit') === !![] && _0x269f74['repeat'] === ![] && _0x269f74['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT') {
            const _0x5d4084 = _0x269f74['code'] === 'Digit0' ? 0x9 : _0x269f74['code'][0x5] - 0x1;
            if (_0x5d4084 === undefined)
                return;
            window['state'] === 'menu' ? menuInventory['swapPetals'](_0x5d4084) : inventory['swapPetals'](_0x5d4084);
        } else {
            if (_0x269f74['code'] === 'KeyR' && _0x269f74['repeat'] === ![] && _0x269f74['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT')
                for (let _0x254ae5 = 0x0; _0x254ae5 < 0xa; _0x254ae5++) {
                    inventory['swapPetals'](_0x254ae5);
                }
        }
        const _0x5e6f0c = room['flowers'][window['selfId']];
        if (window['connected'] === !![] && _0x5e6f0c !== undefined) {
            if (!mouseMovement) {
                if (keyCodes[_0x269f74['code']]) {
                    latestInput['length'] != 0x4 && (latestInput = [
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ]);
                    _0x269f74['type'] === 'keydown' ? latestInput[directionToIdMap[keyCodes[_0x269f74['code']]]] = 0x1 : latestInput[directionToIdMap[keyCodes[_0x269f74['code']]]] = 0x0;
                    !arrayEquals(latestInput, previousInput) && (send(latestInput), previousInput = window['structuredClone'](latestInput));
                    _0x5e6f0c['input'][keyCodes[_0x269f74['code']]] = _0x269f74['type'] === 'keydown';
                    let _0x3b1491 = 0x0, _0x3f915c = 0x0;
                    _0x5e6f0c['input']['up'] && (_0x3f915c -= 0x1);
                    _0x5e6f0c['input']['down'] && (_0x3f915c += 0x1);
                    _0x5e6f0c['input']['left'] && (_0x3b1491 -= 0x1);
                    _0x5e6f0c['input']['right'] && (_0x3b1491 += 0x1);
                    let _0x486975 = Math['atan2'](_0x3f915c, _0x3b1491);
                    (_0x3f915c != 0x0 || _0x3b1491 != 0x0) && (_0x5e6f0c['angle'] = _0x486975, _0x5e6f0c['magnitude'] = 0x270f);
                }
            }
            _0x269f74['key'] == '\x20' && (send({ 'attack': _0x269f74['type'] === 'keydown' }), room['flowers'][window['selfId']]['attacking'] = _0x269f74['type'] === 'keydown');
            _0x269f74['key'] == 'Shift' && (send({ 'defend': _0x269f74['type'] === 'keydown' }), room['flowers'][window['selfId']]['defending'] = _0x269f74['type'] === 'keydown');
            _0x269f74['key'] == 'f' && (send({ 'middle': _0x269f74['type'] === 'keydown' }), room['flowers'][window['selfId']]['middleState'] = _0x269f74['type'] === 'keydown');
            if (_0x269f74['code'] === 'KeyG' && _0x269f74['type'] === 'keydown' && !_0x269f74['repeat']) {
                if (inventory && inventory['artifactContainer']) {
                    const _0xdaffaf = inventory['artifactContainer']['type'];
                    _0xdaffaf && send({ 'activateArtifactUltimate': { 'artifactType': _0xdaffaf } });
                }
            }
            if (window['state'] === 'game' && _0x5e6f0c && _0x5e6f0c['isMob']) {
                const _0x118fc3 = {
                    'Digit1': 0x0,
                    'Digit2': 0x1,
                    'Digit3': 0x2,
                    'Digit4': 0x3,
                    'Digit5': 0x4
                };
                if (_0x118fc3[_0x269f74['code']] !== undefined && _0x269f74['type'] === 'keydown') {
                    const _0xccd444 = _0x118fc3[_0x269f74['code']];
                    if (_0x5e6f0c['skills'] && _0x5e6f0c['skills'][_0xccd444]) {
                        const _0x269218 = _0x5e6f0c['skills'][_0xccd444];
                        send({ 'mobSkill': _0x269218['id'] });
                    }
                }
            }
            _0x269f74['key'] == '[' && _0x269f74['type'] === 'keydown' && (fov = 0x1), _0x269f74['code'] == 'Equal' && _0x269f74['type'] === 'keydown' && (fov *= 0x1 + 0x1 / 0x5, fov < 0.2 && (fov = 0.2), fov > 0x3 && (fov = 0x3)), _0x269f74['code'] == 'Minus' && _0x269f74['type'] === 'keydown' && (fov *= 0x1 - 0x1 / 0x5, fov < 0.2 && (fov = 0.2), fov > 0x3 && (fov = 0x3));
        }
        if (window['state'] === 'menu' && _0x269f74['type'] === 'keydown' && document['activeElement']['tagName'] !== 'INPUT') {
            if (_0x269f74['key']['toLowerCase']() === 'x')
                globalInventory['toggleMenu']();
            else {
                if (_0x269f74['key']['toLowerCase']() === 'c')
                    craftingMenu['toggleMenu']();
                else {
                    if (_0x269f74['key']['toLowerCase']() === 'v')
                        mobGallery['toggleMenu']();
                    else {
                        if (_0x269f74['key']['toLowerCase']() === 'b')
                            shop['toggle']();
                        else
                            _0x269f74['key']['toLowerCase']() === 'z' && specialGlobalInventory['toggleMenu']();
                    }
                }
            }
        }
    }
    ['sendInitialInput']() {
        if (mouseMovement) {
            const _0x140197 = mouse['x'] - window['innerWidth'] / 0x2, _0x5bbe5d = mouse['y'] - window['innerHeight'] / 0x2;
            let _0x3d2944 = Math['sqrt'](_0x5bbe5d ** 0x2 + _0x140197 ** 0x2);
            _0x3d2944 < 0xdc && (_0x3d2944 = (_0x3d2944 / 0xdc) ** 0.9 * 0xdc);
            latestInput['length'] != 0x2 && (latestInput = [
                0x0,
                0x0
            ]);
            const _0x8f8b32 = Math['atan2'](_0x5bbe5d, _0x140197);
            latestInput[0x0] = Math['round'](_0x8f8b32 * 0x3e8) / 0x3e8, latestInput[0x1] = Math['round'](_0x3d2944 * 0xa) / 0xa, send(latestInput);
        }
    }
    ['handleMouse'](_0x165626) {
        const _0x262a54 = _0x165626['x'] - window['innerWidth'] / 0x2, _0x5dc3e4 = _0x165626['y'] - window['innerHeight'] / 0x2, _0x9c9044 = room['flowers'][window['selfId']];
        if (window['connected'] === !![] && _0x9c9044 !== undefined && mouseMovement) {
            if (window['mobile'])
                mobileControls['handleMouseMove'](_0x165626);
            else {
                let _0x137b11 = Math['sqrt'](_0x5dc3e4 ** 0x2 + _0x262a54 ** 0x2);
                _0x137b11 >= 0xdc ? _0x137b11 = 0xdc : _0x137b11 = (_0x137b11 / 0xdc) ** 0.9 * 0xdc;
                !_0x9c9044['inSkillControl'] && (_0x9c9044['angle'] = Math['atan2'](_0x5dc3e4, _0x262a54));
                _0x9c9044['magnitude'] = _0x137b11;
                latestInput['length'] != 0x2 && (latestInput = [
                    0x0,
                    0x0
                ]);
                latestInput[0x0] = Math['round'](_0x9c9044['angle'] * 0x3e8) / 0x3e8, latestInput[0x1] = Math['round'](_0x137b11 * 0xa) / 0xa;
                if (latestInput[0x1] === 0xdc)
                    latestInput['length'] = 0x1;
                if (!arrayEquals(latestInput, previousInput)) {
                    if (time - lastSentInput > minimumInputTime)
                        send(latestInput), previousInput = window['structuredClone'](latestInput), lastSentInput = time;
                    else {
                        let _0x4918e5 = lastSentInput, _0x50b9f6 = latestInput;
                        setTimeout(() => {
                            if (_0x4918e5 != lastSentInput)
                                return;
                            send(_0x50b9f6), previousInput = window['structuredClone'](_0x50b9f6), lastSentInput = time;
                        }, minimumInputTime - (time - lastSentInput));
                    }
                }
            }
        }
        mouse['x'] = _0x165626['pageX'], mouse['y'] = _0x165626['pageY'], mouse['canvasX'] = mouse['x'] / window['innerWidth'] * canvas['w'], mouse['canvasY'] = mouse['y'] / window['innerHeight'] * canvas['h'];
        typeof draggingPetalContainer !== 'undefined' && (draggingPetalContainer !== null && simulatedraggingPetalContainer(mouse['canvasX'], mouse['canvasY']));
        if (window['state'] === 'menu') {
            const _0x75874a = mouse['canvasX'], _0x300b77 = mouse['canvasY'];
            biomeManager['mouseMove']({
                'mouseX': _0x75874a,
                'mouseY': _0x300b77
            }, _0x165626);
            const _0xc74000 = _0x165626['button'] === undefined ? 0x0 : _0x165626['button'];
            typeof squadUI !== 'undefined' && squadUI['hoveringOverSlider'] === !![] && _0xc74000 === 0x0 && squadUI['draggingSlider'] === !![] && squadUI['updateSliderDrag'](mouse['canvasX']), settingsMenu['mouseMove']({
                'x': _0x75874a,
                'y': _0x300b77
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
        const _0xf2f37 = room['flowers'][window['selfId']];
        if (!(window['mobile'] && _0xf2f37 !== undefined && window['connected'] === !![]))
            return;
        const _0x138ff4 = window['dynamicJoystick'] ?? ![];
        this['joystickpad'] = {
            'x': canvas['w'] * 0x1 / 0xa,
            'y': canvas['h'] - canvas['w'] * 0x1 / 0xa,
            'r': canvas['w'] / 0xf
        }, this['joystick']['r'] = canvas['w'] / 0x28;
        let _0x43fb57, _0xcf2b33;
        if (_0x138ff4 && this['dynamicJoystickActive'])
            _0x43fb57 = this['dynamicJoystickpad']['x'], _0xcf2b33 = this['dynamicJoystickpad']['y'];
        else
            !_0x138ff4 ? (_0x43fb57 = this['joystickpad']['x'], _0xcf2b33 = this['joystickpad']['y']) : (_0x43fb57 = null, _0xcf2b33 = null);
        _0x43fb57 !== null && (ctx['globalAlpha'] = 0.2, ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](_0x43fb57, _0xcf2b33, this['joystickpad']['r'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['globalAlpha'] = 0x1, this['joystick']['dx'] = Math['cos'](this['joystick']['angle']) * this['joystick']['magnitude'], this['joystick']['dy'] = Math['sin'](this['joystick']['angle']) * this['joystick']['magnitude'], ctx['globalAlpha'] = 0.5, ctx['fillStyle'] = '#000000', ctx['beginPath'](), ctx['arc'](_0x43fb57 + this['joystick']['dx'], _0xcf2b33 + this['joystick']['dy'], this['joystick']['r'], 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['globalAlpha'] = 0x1), this['attackButton'] = {
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
    ['handleMousePress'](_0xc31f11) {
        if (window['inventory'] && window['inventory']['artifactContainer']) {
            const _0x59a87f = _0xc31f11['x'] / window['innerWidth'] * canvas['w'], _0x7c7510 = _0xc31f11['y'] / window['innerHeight'] * canvas['h'], _0x159c55 = window['inventory']['artifactSlot'], _0x54fc09 = _0x159c55['y'] + window['inventory']['translateY'], _0x282662 = _0x159c55['size'] / 0x2;
            if (_0x59a87f > _0x159c55['x'] - _0x282662 - 0x14 && _0x59a87f < _0x159c55['x'] + _0x282662 + 0x14 && _0x7c7510 > _0x54fc09 - _0x282662 - 0x14 && _0x7c7510 < _0x54fc09 + _0x282662 + 0x14) {
                const _0x2ad04c = window['inventory']['artifactContainer']['type'];
                send({ 'activateArtifactUltimate': { 'artifactType': _0x2ad04c } });
            }
        }
        if (this['chatOpen'] && document['activeElement'] === chatInput) {
            const _0x547cd0 = chatInput['getBoundingClientRect']();
            if (_0xc31f11['x'] < _0x547cd0['left'] || _0xc31f11['x'] > _0x547cd0['right'] || _0xc31f11['y'] < _0x547cd0['top'] || _0xc31f11['y'] > _0x547cd0['bottom']) {
                this['chatOpen'] = ![], chatInput['value'] = '', chatInput['blur'](), chatInput['style']['opacity'] = '0';
                return;
            }
        }
        const _0x34faec = _0xc31f11['x'] / window['innerWidth'] * canvas['w'], _0x4b94f3 = _0xc31f11['y'] / window['innerHeight'] * canvas['h'], _0x161390 = window['dynamicJoystick'] ?? ![];
        if (_0x161390) {
            const _0x1aaa0f = canvas['h'] - 0x46, _0x52d6e3 = _0x4b94f3 >= _0x1aaa0f;
            if (_0x34faec < canvas['w'] / 0x2 || _0x34faec >= canvas['w'] * 0.7 && _0x4b94f3 >= canvas['h'] - canvas['w'] * 0.3) {
                const _0xb77024 = this['inCircleBounds'](_0x34faec, _0x4b94f3, this['attackButton']) || this['inCircleBounds'](_0x34faec, _0x4b94f3, this['defendButton']) || this['inCircleBounds'](_0x34faec, _0x4b94f3, this['plusButton']) || this['inCircleBounds'](_0x34faec, _0x4b94f3, this['minusButton']) || this['inCircleBounds'](_0x34faec, _0x4b94f3, this['swapButton']);
                !_0xb77024 && _0x34faec < canvas['w'] / 0x2 && !_0x52d6e3 && (this['currentlyHolding'] = !![], this['dynamicJoystickActive'] = !![], this['dynamicJoystickCenter'] = {
                    'x': _0x34faec,
                    'y': _0x4b94f3
                }, this['dynamicJoystickpad'] = {
                    'x': _0x34faec,
                    'y': _0x4b94f3,
                    'r': canvas['w'] / 0xf
                });
            }
        } else
            this['inCircleBounds'](_0x34faec, _0x4b94f3, this['joystickpad']) && (this['currentlyHolding'] = !![]);
        this['inCircleBounds'](_0x34faec, _0x4b94f3, this['attackButton']) && (send([
            'a',
            !![]
        ]), this['attacking'] = !![]);
        this['inCircleBounds'](_0x34faec, _0x4b94f3, this['defendButton']) && (send([
            'd',
            !![]
        ]), this['defending'] = !![]);
        this['inCircleBounds'](_0x34faec, _0x4b94f3, this['plusButton']) && (fov *= 0x1 + 0x1 / 0x5, fov < 0.2 && (fov = 0.2), fov > 0x3 && (fov = 0x3));
        this['inCircleBounds'](_0x34faec, _0x4b94f3, this['minusButton']) && (fov *= 0x1 - 0x1 / 0x5, fov < 0.2 && (fov = 0.2), fov > 0x3 && (fov = 0x3));
        if (this['inCircleBounds'](_0x34faec, _0x4b94f3, this['swapButton']))
            for (let _0x33379b = 0x0; _0x33379b < 0xa; _0x33379b++) {
                inventory['swapPetals'](_0x33379b);
            }
        const _0x271e6f = {
            'x': 0x41,
            'y': 0xa,
            'w': 0x23,
            'h': 0x23
        };
        _0x34faec > _0x271e6f['x'] && _0x34faec < _0x271e6f['x'] + _0x271e6f['w'] && _0x4b94f3 > _0x271e6f['y'] && _0x4b94f3 < _0x271e6f['y'] + _0x271e6f['h'] && ((!window['lastFullscreenTime'] || performance['now']() - window['lastFullscreenTime'] > 0x12c) && (window['lastFullscreenTime'] = performance['now'](), !document['fullscreenElement'] ? document['documentElement']['requestFullscreen']()['catch'](_0x56cda0 => {
            console['log']('全屏错误:\x20' + _0x56cda0['message']);
        }) : document['exitFullscreen']()));
    }
    ['handleMouseMove'](_0x4ad00c) {
        if (this['currentlyHolding'] === ![])
            return;
        const _0x158311 = _0x4ad00c['x'] / window['innerWidth'] * canvas['w'], _0x458075 = _0x4ad00c['y'] / window['innerHeight'] * canvas['h'];
        if (_0x158311 > canvas['w'] / 0x2)
            return;
        this['joystick'] = {
            'r': canvas['w'] / 0x28,
            'magnitude': 0x0,
            'angle': 0x0
        };
        const _0x51860f = window['dynamicJoystick'] ?? ![], _0x1f182f = _0x51860f && this['dynamicJoystickActive'] ? this['dynamicJoystickpad'] : this['joystickpad'], _0x1ba43f = 0x3 / 0x5 * _0x1f182f['r'], _0x1ae3a8 = _0x158311 - _0x1f182f['x'], _0x117de1 = _0x458075 - _0x1f182f['y'], _0x45026f = room['flowers'][window['selfId']];
        let _0x7907c9 = Math['sqrt'](_0x117de1 ** 0x2 + _0x1ae3a8 ** 0x2);
        if (_0x7907c9 >= _0x1ba43f)
            this['joystick']['magnitude'] = _0x1ba43f, _0x7907c9 = 0xdc;
        else
            _0x7907c9 < _0x1ba43f / 0x5 ? (this['joystick']['magnitude'] = 0x0, _0x7907c9 = 0x0) : (this['joystick']['magnitude'] = (_0x7907c9 / _0x1ba43f) ** 0.9 * _0x1ba43f, _0x7907c9 = (_0x7907c9 / _0x1ba43f) ** 0.9 * 0xdc);
        !_0x45026f['inSkillControl'] && (_0x45026f['angle'] = Math['atan2'](_0x117de1, _0x1ae3a8));
        this['joystick']['angle'] = _0x45026f['angle'], _0x45026f['magnitude'] = _0x7907c9;
        latestInput['length'] != 0x2 && (latestInput = [
            0x0,
            0x0
        ]);
        latestInput[0x0] = Math['round'](_0x45026f['angle'] * 0x3e8) / 0x3e8, latestInput[0x1] = Math['round'](_0x7907c9 * 0xa) / 0xa;
        if (!arrayEquals(latestInput, previousInput)) {
            if (time - lastSentInput > minimumInputTime)
                send(latestInput), previousInput = window['structuredClone'](latestInput), lastSentInput = time;
            else {
                let _0x3ba7a4 = lastSentInput, _0x4946be = latestInput;
                setTimeout(() => {
                    if (_0x3ba7a4 != lastSentInput)
                        return;
                    send(_0x4946be), previousInput = window['structuredClone'](_0x4946be), lastSentInput = time;
                }, minimumInputTime - (time - lastSentInput));
            }
        }
    }
    ['releaseControls'](_0x2503dd) {
        const _0x2177d2 = _0x2503dd['x'] / window['innerWidth'] * canvas['w'], _0x1fb67f = _0x2503dd['y'] / window['innerHeight'] * canvas['h'];
        if (_0x2177d2 < canvas['w'] / 0x2) {
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
                    let _0x15f69b = lastSentInput, _0x50e89c = latestInput;
                    setTimeout(() => {
                        if (_0x15f69b != lastSentInput)
                            return;
                        send(_0x50e89c), previousInput = window['structuredClone'](_0x50e89c), lastSentInput = time;
                    }, minimumInputTime - (time - lastSentInput));
                }
            }
        }
        _0x2177d2 > canvas['w'] / 0x2 && (this['attacking'] && (send([
            'a',
            ![]
        ]), this['attacking'] = ![]), this['defending'] && (send([
            'd',
            ![]
        ]), this['defending'] = ![]));
    }
    ['inCircleBounds'](_0x4ce046, _0x2901e3, _0x4d3860) {
        return _0x4ce046 < _0x4d3860['x'] + _0x4d3860['r'] && _0x4ce046 > _0x4d3860['x'] - _0x4d3860['r'] && _0x2901e3 < _0x4d3860['y'] + _0x4d3860['r'] && _0x2901e3 > _0x4d3860['y'] - _0x4d3860['r'];
    }
}