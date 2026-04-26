const paddingRatio = 0.25, SPECIAL_PETAL_TYPES = {
        'byType': [
            'Abyssal\x20Artifact',
            'Scorched\x20Artifact',
            'Verdant\x20Artifact',
            'Cosmic\x20Artifact',
            'Chimera'
        ],
        'minRarity': null,
        'byPrefix': [],
        'bySuffix': [],
        'customFilter': null
    };
function isSpecialPetal(_0x4b9c5c) {
    const _0x5f1c6d = _0x4b9c5c['type'], _0x44eb30 = _0x4b9c5c['rarity'];
    if (SPECIAL_PETAL_TYPES['byType']['includes'](_0x5f1c6d))
        return !![];
    if (SPECIAL_PETAL_TYPES['minRarity'] !== null && _0x44eb30 >= SPECIAL_PETAL_TYPES['minRarity'])
        return !![];
    for (const _0x5a5648 of SPECIAL_PETAL_TYPES['byPrefix']) {
        if (_0x5f1c6d['startsWith'](_0x5a5648))
            return !![];
    }
    for (const _0x5b8dfb of SPECIAL_PETAL_TYPES['bySuffix']) {
        if (_0x5f1c6d['endsWith'](_0x5b8dfb))
            return !![];
    }
    if (SPECIAL_PETAL_TYPES['customFilter'] && typeof SPECIAL_PETAL_TYPES['customFilter'] === 'function') {
        if (SPECIAL_PETAL_TYPES['customFilter'](_0x4b9c5c))
            return !![];
    }
    return ![];
}
let savedPetals = localStorage['getItem']('savedPetals');
try {
    savedPetals = JSON['parse'](savedPetals);
} catch (_0x21c6a1) {
    savedPetals = ![];
}
class Inventory {
    constructor(_0x264911) {
        this['topPetalSlots'] = [], this['bottomPetalSlots'] = [];
        for (let _0x59d2b7 = 0x0; _0x59d2b7 < _0x264911; _0x59d2b7++) {
            this['topPetalSlots']['push'](new PetalSlot({
                'x': 0x0,
                'y': 0x0,
                'size': 0x41
            })), this['bottomPetalSlots']['push'](new PetalSlot({
                'x': 0x0,
                'y': 0x0,
                'size': 0x37
            }));
        }
        this['artifactSlot'] = {
            'x': 0x0,
            'y': 0x0,
            'size': 0x41
        }, this['positionPetalSlots'](), this['topPetalContainers'] = {}, this['bottomPetalContainers'] = {}, this['artifactContainer'] = null, this['translateY'] = 0x0, this['speedCircle'] = {
            'reload': 0x1,
            'mode': 0x0,
            'targetReload': 0x1
        };
        localStorage['getItem']('speedCircle') !== undefined && localStorage['getItem']('speedCircle') !== null && (this['speedCircle']['reload'] = Number(localStorage['getItem']('speedCircle')), isNaN(this['speedCircle']['reload']) && (this['speedCircle']['reload'] = 0x1));
        try {
            if (savedPetals) {
                for (let _0x12c235 in savedPetals['top']) {
                    const _0x1987a6 = savedPetals['top'][_0x12c235];
                    this['addPetalContainer'](new PetalContainer(_0x1987a6['petals']['map'](_0x7f891b => new Petal(_0x7f891b)), { ..._0x1987a6 }, Math['random'](), 0x1), !![], _0x12c235), _0x1987a6['render']['x'] = canvas['w'], _0x1987a6['render']['y'] = canvas['h'] * 0x2 / 0x3;
                }
                for (let _0x28cead in savedPetals['bottom']) {
                    const _0xb2761 = savedPetals['bottom'][_0x28cead];
                    this['addPetalContainer'](new PetalContainer(_0xb2761['petals']['map'](_0x2c70a8 => new Petal(_0x2c70a8)), { ..._0xb2761 }, Math['random'](), 0x1), ![], _0x28cead), _0xb2761['render']['x'] = canvas['w'], _0xb2761['render']['y'] = canvas['h'] * 0x2 / 0x3;
                }
            }
        } catch (_0xa69d94) {
            console['log']('ERROR'), console['log'](savedPetals), localStorage['removeItem']('savedPetals');
        }
        this['fadingPetalContainer'] = null;
    }
    ['initChangePetalsQueue']() {
        this === menuInventory && (this['changePetalsQueueInterval'] = setInterval(() => {
            this['queuedChangedPetals'] !== undefined && window['state'] === 'menu' && window['connected'] === !![] && (send({
                'changePetals': !![],
                ...this['queuedChangedPetals']
            }), delete this['queuedChangedPetals']);
        }, 0x4b0));
    }
    ['sendQueuedChangedPetalsImmediately']() {
        send({
            'changePetals': !![],
            ...this['pack']()
        });
    }
    ['setPetalSlotsNumber'](_0x10c934) {
        localStorage['setItem']('savedSlotAmount', _0x10c934);
        for (let _0x174370 = this['topPetalSlots']['length']; _0x174370 < _0x10c934; _0x174370++) {
            this['topPetalSlots']['push'](new PetalSlot({
                'x': 0x0,
                'y': 0x0,
                'size': 0x41
            })), this['bottomPetalSlots']['push'](new PetalSlot({
                'x': 0x0,
                'y': 0x0,
                'size': 0x37
            }));
        }
        for (let _0x8830bf in this['bottomPetalContainers']) {
            if (_0x8830bf > _0x10c934 - 0x1) {
                delete this['bottomPetalContainers'][_0x8830bf];
                continue;
            }
        }
        for (let _0x1d3c6c in this['topPetalContainers']) {
            if (_0x1d3c6c > _0x10c934 - 0x1) {
                delete this['topPetalContainers'][_0x1d3c6c];
                continue;
            }
        }
        this['positionPetalSlots']();
    }
    ['copy'](_0x562755) {
        this['topPetalContainers'] = _0x562755['topPetalContainers'], this['bottomPetalContainers'] = _0x562755['bottomPetalContainers'], this['speedCircle'] = structuredClone(_0x562755['speedCircle']), this['speedCircle']['targetReload'] = this['speedCircle']['reload'];
    }
    ['positionPetalSlots']() {
        const _0x4fc907 = this['topPetalSlots'][0x0]['size'], _0x5dedeb = this['bottomPetalSlots'][0x0]['size'], _0x43eae8 = this['topPetalSlots']['length'] * _0x4fc907 + (this['topPetalSlots']['length'] - 0x1) * paddingRatio * _0x4fc907;
        for (let _0x3b2812 = 0x0; _0x3b2812 < this['topPetalSlots']['length']; _0x3b2812++) {
            this['topPetalSlots'][_0x3b2812]['x'] = canvas['w'] / 0x2 - (_0x43eae8 - _0x4fc907) / 0x2 + _0x3b2812 * (_0x4fc907 + paddingRatio * _0x4fc907), this['topPetalSlots'][_0x3b2812]['y'] = canvas['h'] - _0x5dedeb - _0x5dedeb * paddingRatio - _0x4fc907 * paddingRatio - _0x4fc907 / 0x2;
        }
        const _0x279fbc = this['bottomPetalSlots']['length'] * _0x5dedeb + (this['bottomPetalSlots']['length'] - 0x1) * paddingRatio * _0x5dedeb;
        for (let _0x3616b4 = 0x0; _0x3616b4 < this['bottomPetalSlots']['length']; _0x3616b4++) {
            this['bottomPetalSlots'][_0x3616b4]['x'] = canvas['w'] / 0x2 - (_0x279fbc - _0x5dedeb) / 0x2 + _0x3616b4 * (_0x5dedeb + paddingRatio * _0x5dedeb), this['bottomPetalSlots'][_0x3616b4]['y'] = canvas['h'] - _0x5dedeb * paddingRatio - _0x5dedeb / 0x2;
        }
        for (let _0x2a908b in this['topPetalContainers']) {
            const _0x251b9c = this['topPetalSlots'][_0x2a908b];
            if (_0x251b9c === undefined)
                continue;
            this['topPetalContainers'][_0x2a908b]['x'] = _0x251b9c['x'], this['topPetalContainers'][_0x2a908b]['y'] = _0x251b9c['y'], this['topPetalContainers'][_0x2a908b]['w'] = _0x251b9c['size'], this['topPetalContainers'][_0x2a908b]['h'] = _0x251b9c['size'];
        }
        for (let _0x57d5f3 in this['bottomPetalContainers']) {
            const _0x206a01 = this['bottomPetalSlots'][_0x57d5f3];
            if (_0x206a01 === undefined)
                continue;
            this['bottomPetalContainers'][_0x57d5f3]['x'] = _0x206a01['x'], this['bottomPetalContainers'][_0x57d5f3]['y'] = _0x206a01['y'], this['bottomPetalContainers'][_0x57d5f3]['w'] = _0x206a01['size'], this['bottomPetalContainers'][_0x57d5f3]['h'] = _0x206a01['size'];
        }
        const _0x194f31 = this['topPetalSlots'][this['topPetalSlots']['length'] - 0x1];
        this['artifactSlot']['x'] = _0x194f31['x'] + _0x194f31['size'] + 0x14, this['artifactSlot']['y'] = _0x194f31['y'], this['artifactContainer'] && (this['artifactContainer']['x'] = this['artifactSlot']['x'], this['artifactContainer']['y'] = this['artifactSlot']['y'], this['artifactContainer']['w'] = this['artifactSlot']['size'], this['artifactContainer']['h'] = this['artifactSlot']['size']);
    }
    ['addPetalContainer'](_0x2665ac, _0x2699f6, _0x3849f5, _0x352119 = !![]) {
        if (_0x2699f6) {
            if (this['topPetalContainers'][_0x3849f5] !== undefined) {
                this['topPetalContainers'][_0x3849f5]['w'] = 0x41, this['topPetalContainers'][_0x3849f5]['h'] = 0x41, this['topPetalContainers'][_0x3849f5]['render']['y'] += this['translateY'];
                if (_0x352119) {
                    const _0x5a3858 = this['topPetalContainers'][_0x3849f5];
                    this['fadingPetalContainer'] = _0x5a3858, this['fadingPetalContainer']['fadeTime'] = time, isSpecialPetal(_0x5a3858) ? specialGlobalInventory['addPetalContainer'](_0x5a3858) : globalInventory['addPetalContainer'](_0x5a3858);
                }
            }
            this['topPetalContainers'][_0x3849f5] = _0x2665ac;
        } else {
            if (this['bottomPetalContainers'][_0x3849f5] !== undefined) {
                this['bottomPetalContainers'][_0x3849f5]['w'] = 0x41, this['bottomPetalContainers'][_0x3849f5]['h'] = 0x41, this['bottomPetalContainers'][_0x3849f5]['render']['y'] += this['translateY'];
                if (_0x352119) {
                    const _0x2aa112 = this['bottomPetalContainers'][_0x3849f5];
                    this['fadingPetalContainer'] = _0x2aa112, this['fadingPetalContainer']['fadeTime'] = time, isSpecialPetal(_0x2aa112) ? specialGlobalInventory['addPetalContainer'](_0x2aa112) : globalInventory['addPetalContainer'](_0x2aa112);
                }
            }
            this['bottomPetalContainers'][_0x3849f5] = _0x2665ac;
        }
        this['positionPetalSlots'](), _0x2665ac['render']['y'] -= this['translateY'], this['updateSavedPetals']();
    }
    ['addInFirstAvailableSlot'](_0x339011) {
        const _0x3014e7 = _0x339011['petals']?.[0x0]?.['type'] || _0x339011['type'], _0xc8459c = [
                'Abyssal\x20Artifact',
                'Scorched\x20Artifact',
                'Verdant\x20Artifact',
                'Cosmic\x20Artifact',
                'Chimera'
            ]['includes'](_0x3014e7);
        if (_0xc8459c)
            return ![];
        for (let _0x56982d = 0x0; _0x56982d < this['topPetalSlots']['length']; _0x56982d++) {
            if (this['topPetalContainers'][_0x56982d] === undefined)
                return this['addPetalContainer'](_0x339011, !![], _0x56982d, !![]), !![];
        }
        for (let _0x546006 = 0x0; _0x546006 < this['bottomPetalSlots']['length']; _0x546006++) {
            if (this['bottomPetalContainers'][_0x546006] === undefined)
                return this['addPetalContainer'](_0x339011, ![], _0x546006, !![]), !![];
        }
        return ![];
    }
    ['getClosest'](_0x571284) {
        const _0x175701 = {
            'x': _0x571284['x'],
            'y': _0x571284['y'],
            'difference': {
                'x': _0x571284['w'] / 0x2,
                'y': _0x571284['h'] / 0x2
            }
        };
        for (let _0x345bdc = 0x0; _0x345bdc < this['topPetalSlots']['length']; _0x345bdc++) {
            if (_0x571284['lastPetalSlot'] !== undefined) {
                if (_0x571284['lastPetalSlot']['top'] === !![] && _0x571284['lastPetalSlot']['index'] == _0x345bdc)
                    continue;
            }
            const _0x43c8bd = this['topPetalSlots'][_0x345bdc], _0x790fd = {
                    'x': _0x43c8bd['x'],
                    'y': _0x43c8bd['y'] + this['translateY'],
                    'difference': {
                        'x': _0x43c8bd['size'],
                        'y': _0x43c8bd['size']
                    }
                };
            if (this['intersectingRect'](_0x175701, _0x790fd) === !![])
                return _0x43c8bd;
        }
        for (let _0x1e0b16 = 0x0; _0x1e0b16 < this['bottomPetalSlots']['length']; _0x1e0b16++) {
            if (_0x571284['lastPetalSlot'] !== undefined) {
                if (_0x571284['lastPetalSlot']['top'] === ![] && _0x571284['lastPetalSlot']['index'] == _0x1e0b16)
                    continue;
            }
            const _0x2fbe87 = this['bottomPetalSlots'][_0x1e0b16], _0x230aa3 = {
                    'x': _0x2fbe87['x'],
                    'y': _0x2fbe87['y'] + this['translateY'],
                    'difference': {
                        'x': _0x2fbe87['size'],
                        'y': _0x2fbe87['size']
                    }
                };
            if (this['intersectingRect'](_0x175701, _0x230aa3) === !![])
                return _0x2fbe87;
        }
        return ![];
    }
    ['addClosest'](_0x230dea, _0x362d7c) {
        const _0x4bf2e1 = {
                'x': _0x230dea['x'],
                'y': _0x230dea['y'],
                'difference': {
                    'x': _0x230dea['w'] / 0x2,
                    'y': _0x230dea['h'] / 0x2
                }
            }, _0x3c526f = _0x230dea['petals']?.[0x0]?.['type'] || _0x230dea['type'], _0x5f35f7 = [
                'Abyssal\x20Artifact',
                'Scorched\x20Artifact',
                'Verdant\x20Artifact',
                'Cosmic\x20Artifact',
                'Chimera'
            ]['includes'](_0x3c526f);
        if (_0x5f35f7) {
            const _0x4a2640 = this['artifactSlot'], _0x1c5e4e = {
                    'x': _0x4a2640['x'],
                    'y': _0x4a2640['y'] + this['translateY'],
                    'difference': {
                        'x': _0x4a2640['size'],
                        'y': _0x4a2640['size']
                    }
                };
            if (this['intersectingRect'](_0x4bf2e1, _0x1c5e4e) === !![]) {
                if (this['artifactContainer'] && this['artifactContainer'] !== _0x230dea) {
                    const _0x9f196 = this['artifactContainer'];
                    _0x9f196['render']['y'] += this['translateY'], _0x9f196['w'] = 0x41, _0x9f196['h'] = 0x41, typeof specialGlobalInventory !== 'undefined' && (specialGlobalInventory['addPetalContainer'](_0x9f196), specialGlobalInventory['equippedArtifact'] = null);
                }
                return this['artifactContainer'] = _0x230dea, this['artifactContainer']['x'] = _0x4a2640['x'], this['artifactContainer']['y'] = _0x4a2640['y'], this['artifactContainer']['w'] = _0x4a2640['size'], this['artifactContainer']['h'] = _0x4a2640['size'], this['artifactContainer']['render']['y'] -= this['translateY'], typeof specialGlobalInventory !== 'undefined' && specialGlobalInventory['equipArtifact'](_0x3c526f), !![];
            }
            return typeof specialGlobalInventory !== 'undefined' && specialGlobalInventory['addPetalContainer'](_0x230dea), !![];
        }
        for (let _0x288bed = 0x0; _0x288bed < this['topPetalSlots']['length']; _0x288bed++) {
            const _0x5f2cdb = this['topPetalSlots'][_0x288bed], _0x243cc2 = {
                    'x': _0x5f2cdb['x'],
                    'y': _0x5f2cdb['y'] + this['translateY'],
                    'difference': {
                        'x': _0x5f2cdb['size'],
                        'y': _0x5f2cdb['size']
                    }
                };
            if (this['intersectingRect'](_0x4bf2e1, _0x243cc2) === !![]) {
                if (_0x230dea['lastPetalSlot'] !== undefined && _0x230dea['lastPetalSlot']['index'] !== -0x1) {
                    let _0x4bae73 = this['topPetalContainers'][_0x288bed];
                    if (_0x4bae73 === undefined)
                        return this['addPetalContainer'](_0x230dea, !![], _0x288bed), !![];
                    return this['addPetalContainer'](_0x230dea, !![], _0x288bed, ![]), this['addPetalContainer'](_0x4bae73, _0x230dea['lastPetalSlot']['top'], _0x230dea['lastPetalSlot']['index'], ![]), !![];
                }
                return this['addPetalContainer'](_0x230dea, !![], _0x288bed), !![];
            }
        }
        for (let _0x60d725 = 0x0; _0x60d725 < this['bottomPetalSlots']['length']; _0x60d725++) {
            const _0x599973 = this['bottomPetalSlots'][_0x60d725], _0xdf656a = {
                    'x': _0x599973['x'],
                    'y': _0x599973['y'] + this['translateY'],
                    'difference': {
                        'x': _0x599973['size'],
                        'y': _0x599973['size']
                    }
                };
            if (this['intersectingRect'](_0x4bf2e1, _0xdf656a) === !![]) {
                if (_0x230dea['lastPetalSlot'] !== undefined && _0x230dea['lastPetalSlot']['index'] !== -0x1) {
                    let _0x5e53b0 = this['bottomPetalContainers'][_0x60d725];
                    if (_0x5e53b0 === undefined)
                        return this['addPetalContainer'](_0x230dea, ![], _0x60d725), !![];
                    return this['addPetalContainer'](_0x230dea, ![], _0x60d725, ![]), this['addPetalContainer'](_0x5e53b0, _0x230dea['lastPetalSlot']['top'], _0x230dea['lastPetalSlot']['index'], ![]), !![];
                }
                return this['addPetalContainer'](_0x230dea, ![], _0x60d725), !![];
            }
        }
        return ![];
    }
    ['intersectingRect'](_0x5a4168, _0x40464a) {
        if (_0x5a4168['x'] - _0x5a4168['difference']['x'] / 0x2 > _0x40464a['x'] + _0x40464a['difference']['x'] / 0x2 || _0x5a4168['x'] + _0x5a4168['difference']['x'] / 0x2 < _0x40464a['x'] - _0x40464a['difference']['x'] / 0x2)
            return ![];
        if (_0x5a4168['y'] - _0x5a4168['difference']['y'] / 0x2 > _0x40464a['y'] + _0x40464a['difference']['y'] / 0x2 || _0x5a4168['y'] + _0x5a4168['difference']['y'] / 0x2 < _0x40464a['y'] - _0x40464a['difference']['y'] / 0x2)
            return ![];
        return !![];
    }
    ['removePetalContainer'](_0xbc2a49, _0x4ae404) {
        _0xbc2a49 === !![] ? this['bottomPetalContainers'][_0x4ae404]['amount'] > 0x1 ? (this['bottomPetalContainers'][_0x4ae404]['amount']--, this['bottomPetalContainers'][_0x4ae404]['y'] -= this['translateY'], this['bottomPetalContainers'][_0x4ae404]['w'] = 0x32, this['bottomPetalContainers'][_0x4ae404]['h'] = 0x32) : delete this['bottomPetalContainers'][_0x4ae404] : this['topPetalContainers'][_0x4ae404]['amount'] > 0x1 ? (this['topPetalContainers'][_0x4ae404]['amount']--, this['topPetalContainers'][_0x4ae404]['y'] -= this['translateY'], this['topPetalContainers'][_0x4ae404]['w'] = 0x32, this['topPetalContainers'][_0x4ae404]['h'] = 0x32) : delete this['topPetalContainers'][_0x4ae404], this['updateSavedPetals']();
    }
    ['clear']() {
        this['topPetalContainers'] = {}, this['bottomPetalContainers'] = {};
    }
    ['mouseDown']({
        mouseX: _0x572589,
        mouseY: _0x808862
    }, _0x302154) {
        if (window['state'] !== 'menu') {
            if (window['state'] == 'game') {
                const _0x2a3c6f = this['artifactSlot'], _0x58e215 = _0x2a3c6f['y'] + this['translateY'];
                if (_0x572589 > _0x2a3c6f['x'] - _0x2a3c6f['size'] / 0x2 && _0x572589 < _0x2a3c6f['x'] + _0x2a3c6f['size'] / 0x2 && _0x808862 > _0x58e215 - _0x2a3c6f['size'] / 0x2 && _0x808862 < _0x58e215 + _0x2a3c6f['size'] / 0x2) {
                    if (this['artifactContainer'] && this['artifactContainer']['amount'] > 0x0) {
                        const _0x49e391 = this['artifactContainer']['type'];
                        _0x49e391 && window['connected'] && send({ 'activateArtifactUltimate': { 'artifactType': _0x49e391 } });
                        return;
                    }
                }
                for (let _0x2f8313 in this['topPetalContainers']) {
                    const _0x93a2d0 = this['topPetalContainers'][_0x2f8313];
                    if (_0x572589 > _0x93a2d0['x'] - _0x93a2d0['w'] / 0x2 && _0x572589 < _0x93a2d0['x'] + _0x93a2d0['w'] / 0x2 && _0x808862 > _0x93a2d0['y'] - _0x93a2d0['h'] / 0x2 && _0x808862 < _0x93a2d0['y'] + _0x93a2d0['h'] / 0x2) {
                        this['swapPetals'](parseInt(_0x2f8313));
                        return;
                    }
                }
                for (let _0x5c9633 in this['bottomPetalContainers']) {
                    const _0x79d0ea = this['bottomPetalContainers'][_0x5c9633];
                    if (_0x572589 > _0x79d0ea['x'] - _0x79d0ea['w'] / 0x2 && _0x572589 < _0x79d0ea['x'] + _0x79d0ea['w'] / 0x2 && _0x808862 > _0x79d0ea['y'] - _0x79d0ea['h'] / 0x2 && _0x808862 < _0x79d0ea['y'] + _0x79d0ea['h'] / 0x2) {
                        this['swapPetals'](parseInt(_0x5c9633));
                        return;
                    }
                }
            }
            return;
        }
        const _0xe8172f = _0x808862 - this['translateY'];
        for (let _0x27d1f3 in this['topPetalContainers']) {
            const _0x25d202 = this['topPetalContainers'][_0x27d1f3];
            if (_0x572589 > _0x25d202['x'] - _0x25d202['w'] / 0x2 && _0x572589 < _0x25d202['x'] + _0x25d202['w'] / 0x2 && _0xe8172f > _0x25d202['y'] - _0x25d202['h'] / 0x2 && _0xe8172f < _0x25d202['y'] + _0x25d202['h'] / 0x2) {
                draggingPetalContainer = new PetalContainer(_0x25d202['petals'], {
                    ..._0x25d202,
                    'isDragging': !![],
                    'lastSlot': {
                        'top': !![],
                        'index': _0x27d1f3
                    }
                }, Math['random'](), 0x1), draggingPetalContainer['mouseOffset'] = {
                    'x': draggingPetalContainer['x'] - _0x572589,
                    'y': draggingPetalContainer['y'] - _0xe8172f
                }, draggingPetalContainer['render']['y'] += this['translateY'], draggingPetalContainer['y'] += this['translateY'], draggingPetalContainer['w'] = 0x55, draggingPetalContainer['h'] = 0x55, draggingPetalContainer['spawnAnimation'] = 0x1, this['removePetalContainer'](![], _0x27d1f3);
                return;
            }
        }
        for (let _0x596981 in this['bottomPetalContainers']) {
            const _0x4acda0 = this['bottomPetalContainers'][_0x596981];
            if (_0x572589 > _0x4acda0['x'] - _0x4acda0['w'] / 0x2 && _0x572589 < _0x4acda0['x'] + _0x4acda0['w'] / 0x2 && _0xe8172f > _0x4acda0['y'] - _0x4acda0['h'] / 0x2 && _0xe8172f < _0x4acda0['y'] + _0x4acda0['h'] / 0x2) {
                draggingPetalContainer = new PetalContainer(_0x4acda0['petals'], {
                    ..._0x4acda0,
                    'isDragging': !![],
                    'lastSlot': {
                        'top': ![],
                        'index': _0x596981
                    }
                }, Math['random'](), 0x1), draggingPetalContainer['mouseOffset'] = {
                    'x': draggingPetalContainer['x'] - _0x572589,
                    'y': draggingPetalContainer['y'] - _0xe8172f
                }, draggingPetalContainer['render']['y'] += this['translateY'], draggingPetalContainer['y'] += this['translateY'], draggingPetalContainer['w'] = 0x55, draggingPetalContainer['h'] = 0x55, draggingPetalContainer['spawnAnimation'] = 0x1, this['removePetalContainer'](!![], _0x596981);
                return;
            }
        }
        const _0x496e83 = this['artifactSlot'];
        if (_0x572589 > _0x496e83['x'] - _0x496e83['size'] / 0x2 && _0x572589 < _0x496e83['x'] + _0x496e83['size'] / 0x2 && _0xe8172f > _0x496e83['y'] - _0x496e83['size'] / 0x2 && _0xe8172f < _0x496e83['y'] + _0x496e83['size'] / 0x2) {
            if (this['artifactContainer'] && this['artifactContainer']['amount'] > 0x0) {
                if (window['state'] === 'game' && window['connected']) {
                    const _0x42dda7 = this['artifactContainer']['type'];
                    _0x42dda7 && send({ 'activateArtifactUltimate': { 'artifactType': _0x42dda7 } });
                    return;
                }
                draggingPetalContainer = new PetalContainer(this['artifactContainer']['petals'], {
                    ...this['artifactContainer'],
                    'isDragging': !![],
                    'lastSlot': { 'artifact': !![] }
                }, Math['random'](), 0x1);
                if (typeof specialGlobalInventory !== 'undefined' && specialGlobalInventory['equippedArtifact']) {
                    const _0x1e6910 = specialGlobalInventory['artifacts'][specialGlobalInventory['equippedArtifact']];
                    if (_0x1e6910 && _0x1e6910['skillLevels']) {
                        const _0x52161c = Object['values'](_0x1e6910['skillLevels'])['reduce']((_0x3edcaf, _0x1853f6) => _0x3edcaf + _0x1853f6, 0x0) - 0x1;
                        _0x52161c > 0x0 && (draggingPetalContainer['rarity'] = _0x52161c);
                    }
                }
                draggingPetalContainer['mouseOffset'] = {
                    'x': draggingPetalContainer['x'] - _0x572589,
                    'y': draggingPetalContainer['y'] - _0xe8172f
                }, draggingPetalContainer['render']['y'] += this['translateY'], draggingPetalContainer['y'] += this['translateY'], draggingPetalContainer['w'] = 0x55, draggingPetalContainer['h'] = 0x55, draggingPetalContainer['spawnAnimation'] = 0x1, this['artifactContainer'] = null, typeof specialGlobalInventory !== 'undefined' && (specialGlobalInventory['equippedArtifact'] = null);
            }
            return;
        }
    }
    ['swapPetals'](_0x20eec3, _0x337d25 = !![]) {
        if (window['reconnecting'])
            return;
        if (window['isDead'])
            return;
        if (this['topPetalSlots'][_0x20eec3] === undefined)
            return;
        const _0x4c70e0 = this['topPetalContainers'][_0x20eec3];
        this['topPetalContainers'][_0x20eec3] = this['bottomPetalContainers'][_0x20eec3], this['bottomPetalContainers'][_0x20eec3] = _0x4c70e0;
        this['topPetalContainers'][_0x20eec3] === undefined && delete this['topPetalContainers'][_0x20eec3];
        this['bottomPetalContainers'][_0x20eec3] === undefined && delete this['bottomPetalContainers'][_0x20eec3];
        this['positionPetalSlots']();
        if (_0x337d25 === !![])
            send({ 'swapPetal': _0x20eec3 });
        this['updateSavedPetals']();
    }
    ['draw'](_0x263a82 = 0x1) {
        ctx['translate'](0x0, this['translateY']);
        if (this['fadingPetalContainer'] !== null) {
            const _0x450c75 = {
                'x': this['fadingPetalContainer']['render']['x'],
                'y': this['fadingPetalContainer']['render']['y']
            };
            this['fadingPetalContainer']['render']['x'] = this['fadingPetalContainer']['x'], this['fadingPetalContainer']['render']['y'] = this['fadingPetalContainer']['y'];
            const _0x2da93b = 0x1 - (time - this['fadingPetalContainer']['fadeTime']) / 0xc8;
            ctx['globalAlpha'] = Math['max'](0x0, Math['min'](0x1, _0x2da93b)), ctx['save'](), ctx['translate'](this['fadingPetalContainer']['x'], this['fadingPetalContainer']['y']), ctx['scale'](0x2 - _0x2da93b, 0x2 - _0x2da93b), ctx['translate'](-this['fadingPetalContainer']['x'], -this['fadingPetalContainer']['y']), this['fadingPetalContainer']['draw'](_0x263a82), ctx['restore'](), this['fadingPetalContainer']['render']['x'] = _0x450c75['x'], this['fadingPetalContainer']['render']['y'] = _0x450c75['y'], time - this['fadingPetalContainer']['fadeTime'] > 0xc8 && (this['fadingPetalContainer'] = null);
        }
        for (let _0x59dc8f = 0x0; _0x59dc8f < this['topPetalSlots']['length']; _0x59dc8f++) {
            this['topPetalSlots'][_0x59dc8f]['draw'](_0x263a82);
        }
        for (let _0x4fdf74 = 0x0; _0x4fdf74 < this['bottomPetalSlots']['length']; _0x4fdf74++) {
            this['bottomPetalSlots'][_0x4fdf74]['draw'](_0x263a82);
        }
        for (let _0x1913c3 in this['topPetalContainers']) {
            this['topPetalContainers'][_0x1913c3]['draw'](!![], _0x1913c3);
        }
        for (let _0x54664c in this['bottomPetalContainers']) {
            this['bottomPetalContainers'][_0x54664c]['draw']();
        }
        this['drawArtifactSlot']();
        if (this['speedCircle']['reload'] > 0x1)
            this['speedCircle']['reload'] = 0x1;
        if (this['speedCircle']['reload'] < 0x0)
            this['speedCircle']['reload'] = 0x0;
        if (this['speedCircle']['mode'] === 0x2)
            this['speedCircle']['reload'] += 0.001 * dt;
        if (this['speedCircle']['mode'] === 0x1)
            this['speedCircle']['reload'] -= 0.001 * dt;
        window['state'] == 'game' && (this['speedCircle']['reload'] = interpolate(this['speedCircle']['targetReload'], this['speedCircle']['reload'], 0.4));
        let _0x4563a2 = this['bottomPetalSlots'][this['bottomPetalSlots']['length'] - 0x1];
        ctx['translate'](_0x4563a2['x'] + _0x4563a2['size'] + 0x23, _0x4563a2['y']), ctx['globalAlpha'] *= 0.5, ctx['fillStyle'] = '#000000', ctx['strokeStyle'] = '#ffffff', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4563a2['size'] / 2.1875, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['save'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4563a2['size'] / 2.5, 0x0, Math['PI'] * 0x2), ctx['closePath'](), ctx['clip'](), ctx['lineCap'] = 'butt';
        let _0x1a91c0 = (0x1 - Math['pow'](this['speedCircle']['reload'], 0.7)) * Math['PI'] * 0x2;
        ctx['lineWidth'] = 0x32, ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x19, _0x1a91c0 - Math['PI'] * 0x2 * smoothstep(this['speedCircle']['reload']), _0x1a91c0), ctx['stroke'](), ctx['closePath'](), ctx['restore'](), ctx['globalAlpha'] /= 0.5, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['font'] = '900\x2012.5px\x20Ubuntu', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['lineWidth'] = 0x2, ctx['strokeText']('[Q]', -_0x4563a2['size'] / 2.5 - 17.5, 0x0), ctx['fillText']('[Q]', -_0x4563a2['size'] / 2.5 - 17.5, 0x0), ctx['strokeText']('[E]', _0x4563a2['size'] / 2.5 + 17.5, 0x0), ctx['fillText']('[E]', _0x4563a2['size'] / 2.5 + 17.5, 0x0), ctx['strokeText']('Speed', 0x0, 0x0), ctx['fillText']('Speed', 0x0, 0x0), ctx['translate'](-(_0x4563a2['x'] + _0x4563a2['size'] + 0x23), -_0x4563a2['y']), ctx['translate'](0x0, -this['translateY']);
        const _0xc312e9 = mouse['x'] * canvas['w'] / window['innerWidth'], _0x314077 = mouse['y'] * canvas['h'] / window['innerHeight'], _0x2f7faf = _0x314077 - this['translateY'];
        let _0x24900d = ![];
        if (this === menuInventory && window['state'] === 'menu') {
            const _0x23b1d9 = (_0x30995a, _0x1a3f29 = ![]) => {
                if (!_0x30995a || !_0x30995a['menuActive'])
                    return ![];
                let _0x28ebef, _0x40b2ad, _0x34b079, _0x343f21;
                if (_0x1a3f29 && _0x30995a['dimensions'])
                    _0x28ebef = _0x30995a['dimensions']['x'], _0x40b2ad = _0x30995a['dimensions']['y'], _0x34b079 = _0x30995a['dimensions']['w'], _0x343f21 = _0x30995a['dimensions']['h'];
                else
                    _0x30995a['x'] !== undefined && _0x30995a['y'] !== undefined ? (_0x28ebef = _0x30995a['x'], _0x40b2ad = _0x30995a['y'], _0x34b079 = _0x30995a['w'], _0x343f21 = _0x30995a['h']) : (_0x28ebef = 0x82, _0x40b2ad = canvas['h'] - _0x30995a['h'] - 0x14, _0x34b079 = _0x30995a['w'], _0x343f21 = _0x30995a['h']);
                return _0xc312e9 > _0x28ebef && _0xc312e9 < _0x28ebef + _0x34b079 && _0x314077 > _0x40b2ad && _0x314077 < _0x40b2ad + _0x343f21;
            };
            (_0x23b1d9(globalInventory) || _0x23b1d9(specialGlobalInventory) || _0x23b1d9(craftingMenu) || _0x23b1d9(mobGallery, !![])) && (_0x24900d = !![]);
        }
        if (!_0x24900d) {
            for (let _0x30655d in this['topPetalContainers']) {
                const _0x4c0eb7 = this['topPetalContainers'][_0x30655d];
                _0xc312e9 > _0x4c0eb7['x'] - _0x4c0eb7['w'] / 0x2 && _0xc312e9 < _0x4c0eb7['x'] + _0x4c0eb7['w'] / 0x2 && _0x2f7faf > _0x4c0eb7['y'] - _0x4c0eb7['h'] / 0x2 && _0x2f7faf < _0x4c0eb7['y'] + _0x4c0eb7['h'] / 0x2 && (_0x4c0eb7['isHovered'] = !![]), _0x4c0eb7['drawStatsBox'](this === menuInventory ? !![] : ![], ![], _0x4c0eb7['render']['x'], _0x4c0eb7['render']['y'] + this['translateY']);
            }
            for (let _0x47d61d in this['bottomPetalContainers']) {
                const _0x554ae5 = this['bottomPetalContainers'][_0x47d61d];
                _0xc312e9 > _0x554ae5['x'] - _0x554ae5['w'] / 0x2 && _0xc312e9 < _0x554ae5['x'] + _0x554ae5['w'] / 0x2 && _0x2f7faf > _0x554ae5['y'] - _0x554ae5['h'] / 0x2 && _0x2f7faf < _0x554ae5['y'] + _0x554ae5['h'] / 0x2 && (_0x554ae5['isHovered'] = !![]), _0x554ae5['drawStatsBox'](this === menuInventory ? !![] : ![], ![], _0x554ae5['render']['x'], _0x554ae5['render']['y'] + this['translateY']);
            }
            if (this['artifactContainer']) {
                const _0x32ae39 = this['artifactSlot'], _0x226a46 = window['state'] === 'menu';
                this['artifactContainer']['drawStatsBox'](_0x226a46, ![], _0x32ae39['x'], _0x32ae39['y'] + this['translateY']);
            }
        }
    }
    ['updateBiome']() {
        for (let _0x3c0d05 in this['topPetalContainers']) {
            const _0x30dc35 = this['topPetalContainers'][_0x3c0d05];
            _0x30dc35['draw'](), _0x30dc35['greyed'] === !![] && (isSpecialPetal(_0x30dc35) ? specialGlobalInventory['addPetalContainer'](_0x30dc35) : globalInventory['addPetalContainer'](_0x30dc35), this['removePetalContainer'](![], _0x3c0d05));
        }
        for (let _0x53980b in this['bottomPetalContainers']) {
            const _0x2827fc = this['bottomPetalContainers'][_0x53980b];
            _0x2827fc['draw'](), _0x2827fc['greyed'] === !![] && (isSpecialPetal(_0x2827fc) ? specialGlobalInventory['addPetalContainer'](_0x2827fc) : globalInventory['addPetalContainer'](_0x2827fc), this['removePetalContainer'](!![], _0x53980b));
        }
    }
    ['updateSavedPetals']() {
        localStorage['setItem']('savedPetals', JSON['stringify']({
            'top': this['topPetalContainers'],
            'bottom': this['bottomPetalContainers']
        })), window['loaded'] === !![] && (this === menuInventory && (this['queueSendChangedPetals'](), typeof loadMenuPlayerPetals === 'function' && loadMenuPlayerPetals()));
    }
    ['queueSendChangedPetals']() {
        const _0x31e351 = this['pack']();
        this['queuedChangedPetals'] = _0x31e351;
    }
    ['drawArtifactSlot']() {
        const _0x219338 = this['artifactSlot'];
        !this['artifactContainer'] && (ctx['strokeStyle'] = '#ffd700', ctx['lineWidth'] = 0x4, ctx['beginPath'](), ctx['roundRect'](_0x219338['x'] - _0x219338['size'] / 0x2 - 0x2, _0x219338['y'] - _0x219338['size'] / 0x2 - 0x2, _0x219338['size'] + 0x4, _0x219338['size'] + 0x4, 0x8), ctx['stroke'](), ctx['fillStyle'] = '#ffd700', ctx['beginPath'](), ctx['roundRect'](_0x219338['x'] - _0x219338['size'] / 0x2, _0x219338['y'] - _0x219338['size'] / 0x2, _0x219338['size'], _0x219338['size'], 0x6), ctx['fill']());
        if (this['artifactContainer']) {
            if (typeof specialGlobalInventory !== 'undefined' && specialGlobalInventory['equippedArtifact']) {
                const _0x15a1fc = specialGlobalInventory['artifacts'][specialGlobalInventory['equippedArtifact']];
                if (_0x15a1fc && _0x15a1fc['skillLevels']) {
                    const _0x303978 = Object['values'](_0x15a1fc['skillLevels'])['reduce']((_0x932a27, _0x443f78) => _0x932a27 + _0x443f78, 0x0) - 0x1, _0x3c70fd = Stats['rarities']['length'] - 0x1, _0x22fa65 = Math['min'](Math['max'](_0x303978, 0x0), _0x3c70fd);
                    _0x303978 > 0x0 && (this['artifactContainer']['rarity'] = _0x22fa65, Stats['petals'][this['artifactContainer']['type']] && Stats['petals'][this['artifactContainer']['type']][_0x22fa65] && (this['artifactContainer']['petalStats'] = Stats['petals'][this['artifactContainer']['type']][_0x22fa65]));
                }
            }
            this['artifactContainer']['draw']();
        } else
            ctx['font'] = '900\x2024px\x20Ubuntu', ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x2, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('?', _0x219338['x'], _0x219338['y']), ctx['fillText']('?', _0x219338['x'], _0x219338['y']);
        const _0x2444fb = mouse['x'] * canvas['w'] / window['innerWidth'], _0x297277 = mouse['y'] * canvas['h'] / window['innerHeight'], _0x218c0b = _0x297277 - this['translateY'];
        this['artifactContainer'] && _0x2444fb > _0x219338['x'] - _0x219338['size'] / 0x2 && _0x2444fb < _0x219338['x'] + _0x219338['size'] / 0x2 && _0x218c0b > _0x219338['y'] - _0x219338['size'] / 0x2 && _0x218c0b < _0x219338['y'] + _0x219338['size'] / 0x2 && (this['artifactContainer']['isHovered'] = !![]);
    }
    ['pack']() {
        return {
            'top': mapObject(this['topPetalContainers'], _0x54ac00 => {
                return {
                    'rarity': _0x54ac00['rarity'],
                    'type': _0x54ac00['type']
                };
            }),
            'bottom': mapObject(this['bottomPetalContainers'], _0x5ce437 => {
                return {
                    'rarity': _0x5ce437['rarity'],
                    'type': _0x5ce437['type']
                };
            })
        };
    }
}
function mapObject(_0x5bd208, _0x1bfe49) {
    let _0x2f66e9 = {};
    for (let _0x43498d in _0x5bd208) {
        _0x2f66e9[_0x43498d] = _0x1bfe49(_0x5bd208[_0x43498d]);
    }
    return _0x2f66e9;
}
class PetalSlot {
    constructor(_0x5b8e95) {
        this['x'] = _0x5b8e95['x'], this['y'] = _0x5b8e95['y'], this['size'] = _0x5b8e95['size'];
    }
    ['draw'](_0x42f8fa) {
        ctx['globalAlpha'] = 0.8 * _0x42f8fa, ctx['fillStyle'] = '#eeeeee', ctx['strokeStyle'] = '#bebebe', ctx['lineWidth'] = 0x6, ctx['beginPath'](), ctx['roundRect'](this['x'] - this['size'] / 0x2 + 0x1, this['y'] - this['size'] / 0x2 + 0x1, this['size'] - 0x2, this['size'] - 0x2, this['size'] / 0xa), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1;
    }
}