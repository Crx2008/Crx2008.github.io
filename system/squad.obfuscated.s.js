let savedStartingWave = localStorage['getItem']('startingWave');
if (typeof savedStartingWave === 'string')
    savedStartingWave = parseInt(savedStartingWave);
isNaN(savedStartingWave) && (savedStartingWave = 0x1);
const outsidePadding = 0x10, cardPadding = 0x8, cardHeight = 0x41, buttonPadding = 0xa, flowerSize = 0x28, flowerPadding = 0xc, petalSlotSize = 0x18, petalSlotPadding = 0x3;
function getPetalSlotCols() {
    const _0x151c00 = typeof specialGlobalInventory !== 'undefined' ? specialGlobalInventory['equippedArtifact'] : undefined, _0x5bf16a = _0x151c00 === 'Chimera' || Array['isArray'](_0x151c00) && _0x151c00['includes']('Chimera');
    return _0x5bf16a ? 0x4 : 0xa;
}
function getPetalSlotRows() {
    const _0x3e6b2d = typeof specialGlobalInventory !== 'undefined' ? specialGlobalInventory['equippedArtifact'] : undefined, _0x1e59e8 = _0x3e6b2d === 'Chimera' || Array['isArray'](_0x3e6b2d) && _0x3e6b2d['includes']('Chimera');
    return _0x1e59e8 ? 0x1 : 0x2;
}
const artifactWidth = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 0x1) * petalSlotPadding, artifactHeight = artifactWidth, readyCircleRadius = 0xa;
class SquadUI {
    constructor() {
        this['clients'] = [], this['w'] = 0x21c, this['h'] = 0x0, this['x'] = canvas['w'] / 0x2, this['y'] = canvas['h'] / 0x2 + 0x1e, this['timerX'] = 0x0, this['minimizedHeight'] = 0x2e, this['baseHeight'] = this['h'], this['minimized'] = !![], this['initRenderTimer'] = 0x0, this['hoveringOverX'] = ![], this['hoveringOverPublic'] = ![], this['hoveringOverNew'] = ![], this['hoveringOverPrivate'] = ![], this['hoveringOverReady'] = ![], this['hoveringOverQuickJoin'] = ![], this['hoveringOverJoinMainPvp'] = ![], this['hoveringOverSW'] = ![], this['public'] = !![], this['selfId'] = null, this['startingWaveSlider'] = 0x1, this['desiredSWS'] = 0x1, this['draggingSlider'] = ![], this['maxStartingWave'] = 0x1, this['startingWave'] = this['maxStartingWave'];
    }
    ['reset']() {
        this['clients'] = [], this['hoveringOverX'] = ![], this['hoveringOverPublic'] = ![], this['hoveringOverNew'] = ![], this['hoveringOverPrivate'] = ![], this['hoveringOverReady'] = ![], this['hoveringOverQuickJoin'] = ![], this['hoveringOverJoinMainPvp'] = ![], this['hoveringOverSW'] = ![], this['public'] = !![], delete this['lastUnMinimizedTimer'], delete window['squadUICloseTime'], delete this['selfIdSentFlag'], this['h'] = 0.01, this['initRenderTimer'] = 0x0, this['buttonAlpha'] = 0x1;
    }
    ['removeAllClients']() {
        this['clients'] = [];
    }
    ['startGame']() {
        this['hoveringOverX'] = ![], this['hoveringOverPublic'] = ![], this['hoveringOverNew'] = ![], this['hoveringOverPrivate'] = ![], this['hoveringOverReady'] = ![], this['hoveringOverQuickJoin'] = ![], this['hoveringOverJoinMainPvp'] = ![], this['clients'] = [], this['h'] = 0x0, this['minimized'] = !![], window['squadUIEnabled'] = ![];
    }
    ['recieveData'](_0x4fffbb) {
        this['selfId'] = _0x4fffbb['selfId'];
        for (let _0x5569ca = 0x0; _0x5569ca < _0x4fffbb['clients']['length']; _0x5569ca++) {
            this['addClient'](_0x4fffbb['clients'][_0x5569ca]);
        }
        if (this['clients']['length'] > _0x4fffbb['clients']['length']) {
            for (let _0x8a13e7 = 0x0; _0x8a13e7 < this['clients']['length']; _0x8a13e7++) {
                _0x4fffbb['clients'][_0x8a13e7] === undefined && (this['clients'][_0x8a13e7]['removed'] = !![]);
            }
            this['clients'] = this['clients']['filter'](_0x284827 => _0x284827['removed'] !== !![]);
        }
        _0x4fffbb['public'] === ![] ? (this['public'] = ![], biomeManager['switchToBiome'](_0x4fffbb['biome'])) : this['public'] = !![];
    }
    ['getCardY'](_0xce6f2f) {
        const _0x2a7ee8 = canvas['h'] / 0x2 + 0x14;
        return _0x2a7ee8 + _0xce6f2f * (cardHeight + cardPadding);
    }
    ['getPetalSlotsBounds'](_0x100792) {
        const _0x31b99e = this['x'] - this['w'] / 0x2 + outsidePadding, _0x31c326 = this['getCardY'](_0x100792), _0x4412ea = this['w'] - outsidePadding * 0x2, _0x483a05 = 0x8, _0x5ee712 = getPetalSlotCols() * petalSlotSize + (getPetalSlotCols() - 0x1) * petalSlotPadding, _0x31a6a4 = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 0x1) * petalSlotPadding;
        return {
            'x': _0x31b99e + _0x4412ea - _0x483a05 - _0x5ee712 - artifactWidth - petalSlotPadding,
            'y': _0x31c326 + (cardHeight - _0x31a6a4) / 0x2,
            'w': _0x5ee712,
            'h': _0x31a6a4
        };
    }
    ['getArtifactBounds'](_0x23dbb0) {
        const _0x992b8a = this['getPetalSlotsBounds'](_0x23dbb0);
        return {
            'x': _0x992b8a['x'] + _0x992b8a['w'] + petalSlotPadding,
            'y': _0x992b8a['y'],
            'w': artifactWidth,
            'h': artifactHeight
        };
    }
    ['getSliderBounds'](_0x16d523) {
        const _0x105993 = this['x'] - this['w'] / 0x2 + outsidePadding, _0x4dc18b = this['getCardY'](_0x16d523), _0x3b726c = this['w'] - outsidePadding * 0x2, _0xc78b56 = _0x105993 + flowerPadding + flowerSize + 0xa, _0x103d19 = this['getPetalSlotsBounds'](_0x16d523), _0x50fe6d = _0x103d19['x'] - 0x28, _0x228be8 = _0x50fe6d - _0xc78b56 - 0x6, _0x5b7da8 = 0xa, _0x866585 = _0x4dc18b + 0x12, _0xdeb768 = _0x4dc18b + cardHeight - 0x12, _0x54890e = (_0x866585 + _0xdeb768) / 0x2 - _0x5b7da8 / 0x2;
        return {
            'x': _0xc78b56,
            'y': _0x54890e,
            'w': _0x228be8,
            'h': _0x5b7da8
        };
    }
    ['updateFlowerPetals'](_0x4c6dec, _0x42c986, _0x13d22a = !![]) {
        let _0x67d9f1 = -0x1, _0x24b405 = null;
        for (let _0x1786d8 = 0x0; _0x1786d8 < this['clients']['length']; _0x1786d8++) {
            if (this['clients'][_0x1786d8]['id'] === _0x42c986) {
                _0x24b405 = this['clients'][_0x1786d8], _0x67d9f1 = _0x1786d8;
                break;
            }
        }
        if (_0x24b405 === undefined || _0x67d9f1 === -0x1)
            return;
        const _0x430f59 = _0x24b405['flower'];
        _0x430f59['lastPetals'] = _0x430f59['petals'], _0x430f59['petals'] = [];
        const _0x247941 = this['x'] - this['w'] / 0x2 + outsidePadding, _0x18da31 = this['getCardY'](_0x67d9f1), _0x2539de = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 0x1) * petalSlotPadding, _0x187075 = _0x18da31 + (cardHeight - _0x2539de) / 0x2 + _0x2539de / 0x2;
        _0x430f59['render']['headX'] = _0x247941 + flowerPadding + flowerSize / 0x2, _0x430f59['render']['headY'] = _0x187075, _0x430f59['headX'] = _0x430f59['render']['headX'], _0x430f59['headY'] = _0x430f59['render']['headY'], _0x430f59['x'] = _0x430f59['render']['headX'], _0x430f59['y'] = _0x430f59['render']['headY'], _0x430f59['render']['x'] = _0x430f59['x'], _0x430f59['render']['y'] = _0x430f59['y'], _0x430f59['render']['baseX'] = _0x430f59['x'], _0x430f59['render']['baseY'] = _0x430f59['y'], _0x430f59['baseX'] = _0x430f59['x'], _0x430f59['baseY'] = _0x430f59['y'];
        for (let _0x2d7028 = 0x0; _0x2d7028 < _0x4c6dec['length']; _0x2d7028++) {
            if (_0x4c6dec[_0x2d7028] === null || _0x4c6dec[_0x2d7028] === undefined) {
                _0x430f59['petals'][_0x2d7028] = null;
                continue;
            }
            const _0x5d3309 = _0x430f59['petals'][_0x2d7028] = new Petal(_0x4c6dec[_0x2d7028]);
            _0x5d3309['distance'] = neutralPetalDistance, _0x5d3309['render']['distance'] = 0x0, _0x5d3309['updateInterpolate'](_0x430f59), _0x5d3309['x'] = _0x430f59['baseX'], _0x5d3309['y'] = _0x430f59['baseY'], _0x5d3309['render']['x'] = _0x5d3309['x'], _0x5d3309['render']['y'] = _0x5d3309['y'], _0x5d3309['slowInterpolateDistance'] = !![];
            if (_0x430f59['lastPetals'] && _0x430f59['lastPetals'][_0x2d7028] !== undefined) {
                for (let _0x18455f in _0x430f59['lastPetals'][_0x2d7028]['render']) {
                    _0x5d3309['render'][_0x18455f] = _0x430f59['lastPetals'][_0x2d7028]['render'][_0x18455f];
                }
                _0x5d3309['angle'] = _0x5d3309['render']['angle'];
            }
        }
        this['updateFlowerPetalContainers'](_0x430f59), delete _0x430f59['lastPetals'];
    }
    ['updateCharacter'](_0x240ae1, _0x11f4f2) {
        let _0x1489ab = null;
        for (let _0x263059 = 0x0; _0x263059 < this['clients']['length']; _0x263059++) {
            if (this['clients'][_0x263059]['id'] === _0x11f4f2) {
                _0x1489ab = this['clients'][_0x263059];
                break;
            }
        }
        if (_0x1489ab === undefined)
            return;
        const _0xee64b9 = _0x1489ab['flower'];
        _0xee64b9['character'] = _0x240ae1;
    }
    ['updateFlowerPetalContainers'](_0x5c0f98, _0x582574 = ![]) {
        !_0x582574 && (_0x5c0f98['petalContainers'] = new Array(0x14)['fill'](null));
        const _0xca1312 = {};
        for (let _0x14311c = 0x0; _0x14311c < _0x5c0f98['petals']['length']; _0x14311c++) {
            const _0xa4493e = _0x5c0f98['petals'][_0x14311c];
            if (!_0xa4493e)
                continue;
            const _0x6a3557 = parseInt(_0xa4493e['petalContainerId']);
            if (isNaN(_0x6a3557) || _0x6a3557 < 0x0 || _0x6a3557 >= 0xa)
                continue;
            !_0xca1312[_0x6a3557] && (_0xca1312[_0x6a3557] = []), _0xca1312[_0x6a3557]['push'](_0xa4493e);
        }
        for (let _0x3a034a in _0xca1312) {
            const _0xda3276 = _0xca1312[_0x3a034a];
            if (_0xda3276['length'] > 0x0) {
                const _0x22f2dd = new PetalContainer(_0xda3276['map'](_0x4381f9 => new Petal(_0x4381f9)), {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x14,
                    'h': 0x14,
                    'originalX': 0x0,
                    'originalY': 0x0,
                    'radius': 0x64,
                    'toRenderText': ![],
                    'toOscillate': ![]
                }, Math['random'](), 0x1);
                for (let _0x11a7e5 = 0x0; _0x11a7e5 < _0x22f2dd['petals']['length']; _0x11a7e5++) {
                    _0x22f2dd['petals'][_0x11a7e5]['angle'] = 0x0, _0x22f2dd['petals'][_0x11a7e5]['selfAngle'] = 0x0;
                }
                _0x5c0f98['petalContainers'][parseInt(_0x3a034a)] = _0x22f2dd;
            }
        }
        _0x5c0f98['offPetals'] && _0x5c0f98['offPetals']['length'] > 0x0 && this['updateOffPetalContainers'](_0x5c0f98, _0x582574);
    }
    ['updateOffPetalContainers'](_0x189f47, _0x1ffb02 = ![]) {
        const _0x25e327 = {};
        (!_0x189f47['petalContainers'] || _0x189f47['petalContainers']['length'] !== 0x14) && (_0x189f47['petalContainers'] = new Array(0x14)['fill'](null));
        for (let _0x5d1d53 = 0x0; _0x5d1d53 < _0x189f47['offPetals']['length']; _0x5d1d53++) {
            const _0x636601 = _0x189f47['offPetals'][_0x5d1d53];
            if (!_0x636601)
                continue;
            const _0x4ddd55 = 0xa + parseInt(_0x636601['petalContainerId']);
            if (isNaN(_0x4ddd55) || _0x4ddd55 < 0xa || _0x4ddd55 >= 0x14)
                continue;
            !_0x25e327[_0x4ddd55] && (_0x25e327[_0x4ddd55] = []), _0x25e327[_0x4ddd55]['push'](_0x636601);
        }
        for (let _0x3af70f in _0x25e327) {
            const _0x127428 = _0x25e327[_0x3af70f];
            if (_0x127428['length'] > 0x0) {
                const _0x2dfbd4 = new PetalContainer(_0x127428['map'](_0x107472 => new Petal(_0x107472)), {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x14,
                    'h': 0x14,
                    'originalX': 0x0,
                    'originalY': 0x0,
                    'radius': 0x64,
                    'toRenderText': ![],
                    'toOscillate': ![]
                }, Math['random'](), 0x1);
                for (let _0x29d9b3 = 0x0; _0x29d9b3 < _0x2dfbd4['petals']['length']; _0x29d9b3++) {
                    _0x2dfbd4['petals'][_0x29d9b3]['angle'] = 0x0, _0x2dfbd4['petals'][_0x29d9b3]['selfAngle'] = 0x0;
                }
                _0x189f47['petalContainers'][parseInt(_0x3af70f)] = _0x2dfbd4;
            }
        }
    }
    ['updateFlowerOffPetals'](_0x5223a1, _0x4016f0, _0x3c817a = !![]) {
        let _0x1ba0e4 = -0x1, _0x3e56a0 = null;
        for (let _0x4b72c0 = 0x0; _0x4b72c0 < this['clients']['length']; _0x4b72c0++) {
            if (this['clients'][_0x4b72c0]['id'] === _0x4016f0) {
                _0x3e56a0 = this['clients'][_0x4b72c0], _0x1ba0e4 = _0x4b72c0;
                break;
            }
        }
        if (_0x3e56a0 === undefined || _0x1ba0e4 === -0x1)
            return;
        const _0xad04f1 = _0x3e56a0['flower'];
        _0xad04f1['offPetals'] = [];
        for (let _0x41d690 = 0x0; _0x41d690 < _0x5223a1['length']; _0x41d690++) {
            if (_0x5223a1[_0x41d690] === null || _0x5223a1[_0x41d690] === undefined) {
                _0xad04f1['offPetals'][_0x41d690] = null;
                continue;
            }
            const _0xfaa3c = _0xad04f1['offPetals'][_0x41d690] = new Petal(_0x5223a1[_0x41d690]);
            _0xfaa3c['distance'] = neutralPetalDistance, _0xfaa3c['render']['distance'] = 0x0, _0xfaa3c['x'] = _0xad04f1['baseX'], _0xfaa3c['y'] = _0xad04f1['baseY'], _0xfaa3c['render']['x'] = _0xfaa3c['x'], _0xfaa3c['render']['y'] = _0xfaa3c['y'], _0xfaa3c['slowInterpolateDistance'] = !![];
        }
        this['updateOffPetalContainers'](_0xad04f1, _0x3c817a);
    }
    ['updateSelfFlowerPetals'](_0x2e8ef9) {
        const _0xbe98a5 = this['findClient'](this['selfId']), _0x1e8a2d = _0xbe98a5['flower'];
        if (_0xbe98a5 === undefined || _0x1e8a2d === undefined)
            return;
        _0x1e8a2d['petals'] = [];
        for (let _0x706abf in _0x2e8ef9['top']) {
            const _0x362b59 = _0x2e8ef9['top'][_0x706abf];
            for (let _0x122290 = 0x0; _0x122290 < _0x362b59['petals']['length']; _0x122290++) {
                const _0x547473 = { ..._0x362b59['petals'][_0x122290] };
                delete _0x547473['insidePetalContainer'], _0x547473['petalContainerId'] = _0x706abf;
                !_0x547473['offset'] && (_0x547473['offset'] = {
                    'angle': 0x0,
                    'distance': 0x0
                });
                if (window['multiPetals'] && window['multiPetals'][_0x547473['type']] !== undefined)
                    _0x547473['subId'] = _0x122290;
                else
                    _0x362b59['petals']['length'] > 0x1 && (_0x547473['subStackedId'] = _0x122290, _0x547473['subId'] = _0x122290, _0x547473['offset']['angle'] = _0x547473['subStackedId'] / _0x362b59['petals']['length'] * Math['PI'] * 0x2, _0x547473['offset']['distance'] = _0x547473['radius']);
                _0x1e8a2d['petals']['push'](new Petal(_0x547473));
                const _0x168daa = _0x1e8a2d['petals'][_0x1e8a2d['petals']['length'] - 0x1];
                _0x168daa['distance'] = neutralPetalDistance, _0x168daa['render']['distance'] = 0x0, _0x168daa['updateInterpolate'](_0x1e8a2d), _0x168daa['x'] = _0x1e8a2d['baseX'], _0x168daa['y'] = _0x1e8a2d['baseY'], _0x168daa['render']['x'] = _0x168daa['x'], _0x168daa['render']['y'] = _0x168daa['y'], _0x168daa['slowInterpolateDistance'] = !![];
            }
        }
        for (let _0x48dff4 in _0x2e8ef9['bottom']) {
            const _0x46531a = _0x2e8ef9['bottom'][_0x48dff4];
            for (let _0xd363f7 = 0x0; _0xd363f7 < _0x46531a['petals']['length']; _0xd363f7++) {
                const _0x2f359a = { ..._0x46531a['petals'][_0xd363f7] };
                delete _0x2f359a['insidePetalContainer'], _0x2f359a['petalContainerId'] = _0x48dff4;
                !_0x2f359a['offset'] && (_0x2f359a['offset'] = {
                    'angle': 0x0,
                    'distance': 0x0
                });
                if (window['multiPetals'] && window['multiPetals'][_0x2f359a['type']] !== undefined)
                    _0x2f359a['subId'] = _0xd363f7;
                else
                    _0x46531a['petals']['length'] > 0x1 && (_0x2f359a['subStackedId'] = _0xd363f7, _0x2f359a['subId'] = _0xd363f7, _0x2f359a['offset']['angle'] = _0x2f359a['subStackedId'] / _0x46531a['petals']['length'] * Math['PI'] * 0x2, _0x2f359a['offset']['distance'] = _0x2f359a['radius']);
                _0x1e8a2d['petals']['push'](new Petal(_0x2f359a));
                const _0x380e4c = _0x1e8a2d['petals'][_0x1e8a2d['petals']['length'] - 0x1];
                _0x380e4c['distance'] = neutralPetalDistance, _0x380e4c['render']['distance'] = 0x0, _0x380e4c['updateInterpolate'](_0x1e8a2d), _0x380e4c['x'] = _0x1e8a2d['baseX'], _0x380e4c['y'] = _0x1e8a2d['baseY'], _0x380e4c['render']['x'] = _0x380e4c['x'], _0x380e4c['render']['y'] = _0x380e4c['y'], _0x380e4c['slowInterpolateDistance'] = !![];
            }
        }
        const _0x4bcca2 = _0x1e8a2d['petals']['filter'](_0x5936d9 => _0x5936d9['subStackedId'] === 0x0)['length'], _0x4b6277 = Math['random']() * Math['PI'] * 0x2;
        let _0x2e8805 = 0x0;
        for (let _0x5e2802 = 0x0; _0x5e2802 < _0x1e8a2d['petals']['length']; _0x5e2802++) {
            _0x1e8a2d['petals'][_0x5e2802]['subStackedId'] === 0x0 && _0x2e8805++, _0x1e8a2d['petals'][_0x5e2802]['id'] = _0x5e2802, _0x1e8a2d['petals'][_0x5e2802]['angle'] = _0x2e8805 / _0x4bcca2 * Math['PI'] * 0x2, _0x1e8a2d['petals'][_0x5e2802]['render']['angle'] = _0x4b6277, _0x1e8a2d['petals'][_0x5e2802]['angleOffset'] = _0x1e8a2d['petals'][_0x5e2802]['angle'];
        }
        this['updateSelfFlowerPetalContainers'](_0x1e8a2d);
    }
    ['updateSelfFlowerPetalContainers'](_0x1a0c66) {
        const _0x16571a = Object['values'](menuInventory['topPetalContainers'])['concat'](Object['values'](menuInventory['bottomPetalContainers']));
        _0x1a0c66['petalContainers'] = _0x16571a['map'](_0x47ca6b => new PetalContainer(_0x47ca6b['petals'], {
            'x': 0x0,
            'y': 0x0,
            'w': 0x14,
            'h': 0x14,
            'originalX': 0x0,
            'originalY': 0x0,
            'radius': 0x64,
            'toRenderText': ![],
            'toOscillate': ![]
        }, Math['random'](), 0x1, 0x0));
    }
    ['startSliderDrag'](_0x14ca41) {
        this['draggingSlider'] = !![], this['updateSliderDrag'](_0x14ca41);
    }
    ['intersectingSlider']({
        x: _0x32a923,
        y: _0x24184f
    }) {
        let _0x16b7a3 = 0x0;
        for (let _0x58e548 = 0x0; _0x58e548 < this['clients']['length']; _0x58e548++) {
            if (this['clients'][_0x58e548]['id'] === this['selfId']) {
                _0x16b7a3 = _0x58e548;
                break;
            }
        }
        const _0x2210db = this['getSliderBounds'](_0x16b7a3), _0x5c13f1 = interpolate(_0x2210db['x'], _0x2210db['x'] + _0x2210db['w'], this['startingWaveSlider']), _0x70891e = {
                'x': _0x5c13f1,
                'y': _0x2210db['y'] + _0x2210db['h'] / 0x2
            };
        return (_0x32a923 - _0x70891e['x']) ** 0x2 + (_0x24184f - _0x70891e['y']) ** 0x2 < 0xf ** 0x2;
    }
    ['intersectingSliderBound']({
        x: _0x173a26,
        y: _0x1f2ce5
    }) {
        let _0x5632d8 = 0x0;
        for (let _0x135a28 = 0x0; _0x135a28 < this['clients']['length']; _0x135a28++) {
            if (this['clients'][_0x135a28]['id'] === this['selfId']) {
                _0x5632d8 = _0x135a28;
                break;
            }
        }
        const _0x1801c7 = this['getSliderBounds'](_0x5632d8), _0x4dcd57 = interpolate(_0x1801c7['x'], _0x1801c7['x'] + _0x1801c7['w'], this['startingWaveSlider']), _0x52410c = {
                'x': _0x4dcd57,
                'y': _0x1801c7['y'] + _0x1801c7['h'] / 0x2
            };
        let _0x4fbcb6 = _0x173a26;
        if (_0x4fbcb6 < _0x1801c7['x'])
            _0x4fbcb6 = _0x1801c7['x'];
        if (_0x4fbcb6 > _0x1801c7['x'] + _0x1801c7['w'])
            _0x4fbcb6 = _0x1801c7['x'] + _0x1801c7['w'];
        return (_0x173a26 - _0x4fbcb6) ** 0x2 + (_0x1f2ce5 - _0x52410c['y']) ** 0x2 < 0xf ** 0x2;
    }
    ['updateSliderDrag'](_0x172760) {
        let _0x489a93 = 0x0;
        for (let _0xf6ce30 = 0x0; _0xf6ce30 < this['clients']['length']; _0xf6ce30++) {
            if (this['clients'][_0xf6ce30]['id'] === this['selfId']) {
                _0x489a93 = _0xf6ce30;
                break;
            }
        }
        const _0xaec815 = this['getSliderBounds'](_0x489a93);
        let _0x1cd7a3 = _0x172760 - _0xaec815['x'];
        if (_0x1cd7a3 < 0x0)
            _0x1cd7a3 = 0x0;
        else
            _0x1cd7a3 > _0xaec815['w'] && (_0x1cd7a3 = _0xaec815['w']);
        this['desiredSWS'] = _0x1cd7a3 / _0xaec815['w'];
    }
    ['endSliderDrag'](_0x11face) {
        if (this['draggingSlider'] === ![])
            return;
        this['updateSliderDrag'](_0x11face);
        const _0x65cb8f = Math['max'](0x1, Math['ceil'](this['desiredSWS'] * this['maxStartingWave']));
        send({ 'sw': _0x65cb8f }), this['draggingSlider'] = ![], _0x65cb8f !== this['maxStartingWave'] ? (localStorage['setItem']('startingWave', _0x65cb8f), savedStartingWave = _0x65cb8f) : (localStorage['removeItem']('startingWave'), savedStartingWave = null);
    }
    ['sendSavedStartingWave']() {
        if (savedStartingWave === null)
            return;
        send({ 'sw': savedStartingWave });
    }
    ['render'](_0x59e663) {
        let _0x3b3a35 = 0x14;
        this['hoveringOverSW'] = ![];
        this['clients']['length'] === 0x0 ? window['squadUIEnabled'] !== !![] ? (this['minimized'] = !![], this['baseHeight'] = this['minimizedHeight']) : (this['minimized'] = ![], this['baseHeight'] = 0x2d + 0x4 * (cardHeight + cardPadding) + outsidePadding) : (this['minimized'] === !![] && (this['lastUnMinimizedTimer'] = performance['now']()), this['baseHeight'] = 0x2d + 0x4 * (cardHeight + cardPadding) + outsidePadding, this['minimized'] = ![]);
        this['buttonAlpha'] = 0x1;
        this['initRenderTimer'] < 0xb4 && (this['initRenderTimer'] += _0x59e663, this['h'] = Math['max'](0.01, this['baseHeight'] * easeOutCubic(this['initRenderTimer'] / 0xb4)));
        performance['now']() - this['lastUnMinimizedTimer'] < 0xa0 && (this['h'] = this['minimizedHeight'] + _0x3b3a35 + (this['baseHeight'] - this['minimizedHeight']) * easeOutCubic((performance['now']() - this['lastUnMinimizedTimer']) / 0xa0));
        if (window['squadUICloseTime'] !== undefined && window['squadUIEnabled'] === !![]) {
            const _0x2ae72e = performance['now']() - window['squadUICloseTime'];
            _0x2ae72e < 0xb4 ? (this['buttonAlpha'] = Math['max'](0x0, this['h'] / this['baseHeight']), this['h'] = (0x1 - easeOutCubic(_0x2ae72e / 0xb4)) * this['baseHeight']) : _0x2ae72e < 0x3e8 ? (this['buttonAlpha'] = 0x0, delete window['squadUICloseTime'], this['initRenderTimer'] = 0x0, window['squadUIEnabled'] = ![]) : delete window['squadUICloseTime'];
        }
        this['initRenderTimer'] >= 0xb4 && performance['now']() - this['lastUnMinimizedTimer'] >= 0xa0 && !window['squadUICloseTime'] && (this['h'] = interpolate(this['h'], this['baseHeight'], 0.25));
        this['x'] = interpolate(this['x'], canvas['w'] / 0x2 - 0x47, 0.01 * _0x59e663);
        window['squadTimer'] ? this['timerX'] = interpolate(this['timerX'], this['w'] / 0xc, 0.01 * _0x59e663) : this['timerX'] = interpolate(this['timerX'], 0x0, 0.01 * _0x59e663);
        ctx['fillStyle'] = '#689ed6', ctx['strokeStyle'] = '#537fac', ctx['lineWidth'] = 0x5;
        if (this['timerX'] > 0.01) {
            const _0x27aaa5 = canvas['h'] / 0x2 + 0x14, _0x2a9eb9 = 0x4 * cardHeight + 0x3 * cardPadding, _0x4f9a72 = _0x27aaa5, _0x157a16 = _0x27aaa5 + _0x2a9eb9, _0xdf9683 = _0x157a16 - _0x4f9a72;
            let _0x40a9ef = this['x'] - this['w'] / 0x2 - this['timerX'];
            ctx['beginPath'](), ctx['roundRect'](_0x40a9ef, _0x4f9a72, this['w'] / 0x10, _0xdf9683, 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            let _0x322d5e = (window['squadTimer'] - Date['now']()) / 0x1388;
            ctx['save']();
            let _0x17befb = Math['max'](0x0, (0x1 - _0x322d5e) * (_0xdf9683 - 0x14));
            const _0x333f43 = 0x8;
            ctx['lineWidth'] = 0x5, ctx['strokeStyle'] = '#333333', ctx['fillStyle'] = '#333333', ctx['beginPath'](), ctx['roundRect'](_0x40a9ef + 0xa, _0x157a16 - _0x333f43, this['w'] / 0x10 - 0x14, 0x14 - _0xdf9683, 0x3), ctx['stroke'](), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#75dd34', '#dd3434', _0x322d5e), ctx['beginPath'](), ctx['roundRect'](_0x40a9ef + 0xa, _0x157a16 - _0x333f43, this['w'] / 0x10 - 0x14, -_0x17befb, 0x3), ctx['fill'](), ctx['closePath'](), ctx['restore']();
        }
        const _0x983b9b = Math['max'](0x0, Math['min'](0x1, this['h'] / this['baseHeight']));
        (this['desiredSWS'] > 0x1 || this['startingWaveSlider'] > 0x1) && (this['desiredSWS'] = Math['min'](0x1, this['desiredSWS']), this['startingWaveSlider'] = Math['min'](0x1, this['startingWaveSlider']));
        const _0x431a90 = performance['now']();
        ctx['globalAlpha'] = this['buttonAlpha'];
        for (let _0x57a251 = 0x0; _0x57a251 < this['clients']['length']; _0x57a251++) {
            if (this['minimized'] === !![])
                continue;
            this['renderPlayerCard'](_0x57a251, _0x983b9b, _0x431a90, _0x59e663);
        }
        if (this['minimized'] === ![] && this['clients']['length'] < 0x4)
            for (let _0x5da6f9 = this['clients']['length']; _0x5da6f9 < 0x4; _0x5da6f9++) {
                this['renderEmptySlot'](_0x5da6f9, _0x983b9b);
            }
        (this['clients']['length'] > 0x0 || window['squadUIEnabled'] === !![]) && this['minimized'] === ![] && this['renderSideButtons'](_0x983b9b), ctx['globalAlpha'] = 0x1, this['public'] === ![] && (ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x3, ctx['textAlign'] = 'right', ctx['textBaseline'] = 'bottom', ctx['strokeText']('(Private)', this['x'] + this['w'] / 0x2 - 7.5, canvas['h'] / 0x2 + this['h'] - 7.5 + 0x1e), ctx['fillText']('(Private)', this['x'] + this['w'] / 0x2 - 7.5, canvas['h'] / 0x2 + this['h'] - 7.5 + 0x1e), ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle'), this['clients']['length'] > 0x4 && this['renderOverfullWarning'](), ctx['fillStyle'] = '#689ed6', ctx['strokeStyle'] = '#537fac', ctx['lineWidth'] = 0x5, ctx['globalAlpha'] = 0x1;
    }
    ['renderTopButtons'](_0x5e57b5) {
        ctx['fillStyle'] = '#c1565e', ctx['strokeStyle'] = '#90464b', ctx['lineWidth'] = 0x5, ctx['beginPath'](), ctx['roundRect'](this['x'] + this['w'] / 0x2 - 7.5 - 0x1e, canvas['h'] / 0x2 + 0x1e + 7.5, 0x1e, 0x1e * _0x5e57b5, 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#cccccc', ctx['beginPath'](), ctx['moveTo'](this['x'] + this['w'] / 0x2 - 7.5 - 0x1e + 7.5, canvas['h'] / 0x2 + 0x1e + 7.5 * _0x5e57b5 + 7.5), ctx['lineTo'](this['x'] + this['w'] / 0x2 - 7.5 - 7.5, canvas['h'] / 0x2 + 0x1e + 7.5 * _0x5e57b5 - 7.5 + 0xf + 0xf * _0x5e57b5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](this['x'] + this['w'] / 0x2 - 7.5 - 7.5, canvas['h'] / 0x2 + 0x1e + 7.5 * _0x5e57b5 + 7.5), ctx['lineTo'](this['x'] + this['w'] / 0x2 - 7.5 - 0x1e + 7.5, canvas['h'] / 0x2 + 7.5 * _0x5e57b5 - 7.5 + 0xf + 0x1e + 0xf * _0x5e57b5), ctx['stroke'](), ctx['closePath'](), this['hoveringOverX'] = ![], mouse['canvasX'] > this['x'] + this['w'] / 0x2 - 7.5 - 0x1e && mouse['canvasY'] > canvas['h'] / 0x2 + 0x1e + 7.5 && mouse['canvasX'] < this['x'] + this['w'] / 0x2 - 7.5 && mouse['canvasY'] < canvas['h'] / 0x2 + 0x1e + 7.5 + 0x1e * _0x5e57b5 && (ctx['fillStyle'] = 'white', ctx['globalAlpha'] = 0.1, ctx['beginPath'](), ctx['roundRect'](this['x'] + this['w'] / 0x2 - 7.5 - 0x1e - ctx['lineWidth'] / 0x2, canvas['h'] / 0x2 + 0x1e + 7.5 - ctx['lineWidth'] / 0x2, 0x1e + ctx['lineWidth'], 0x1e * _0x5e57b5 + ctx['lineWidth'], 0x3), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1, this['hoveringOverX'] = !![]);
    }
    ['renderSideButtons'](_0x4bcc05) {
        this['hoveringOverPrivate'] = ![], this['hoveringOverPublic'] = ![], this['hoveringOverNew'] = ![], this['hoveringOverReady'] = ![];
        const _0x175252 = 0x7d, _0x3e2359 = 0xc, _0x2e55ca = this['x'] + this['w'] / 0x2, _0x146e5f = _0x2e55ca - 0x1;
        ctx['letterSpacing'] = '-.05px', ctx['font'] = '900\x2020px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle';
        const _0x50277e = cardHeight * 0.75, _0x489aa2 = this['getCardY'](0x0);
        for (let _0x165a8d = 0x0; _0x165a8d < 0x3; _0x165a8d++) {
            const _0x13f671 = _0x489aa2 + _0x165a8d * (_0x50277e + _0x3e2359), _0xd4b4e7 = [
                    'Private',
                    'Find\x20Pub',
                    'New'
                ][_0x165a8d], _0x4bf9ba = [
                    'private',
                    'public',
                    'new'
                ][_0x165a8d];
            this['renderSideButton'](_0xd4b4e7, _0x146e5f, _0x13f671, _0x175252, _0x50277e, _0x4bcc05, _0x4bf9ba);
        }
        const _0x53bb9f = _0x489aa2 + 0x4 * cardHeight + 0x3 * cardPadding, _0x23efa3 = _0x53bb9f - _0x50277e, _0x4e957f = 'Player:\x20' + this['clients']['length'] + '/4', _0x421750 = _0x23efa3 - 0x14;
        ctx['fillStyle'] = '#ffffff', ctx['font'] = '900\x2020px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['fillText'](_0x4e957f, _0x146e5f + _0x175252 / 0x2, _0x421750);
        const _0x46db05 = window['ready'] ? 'Unready' : 'Ready', _0x558cfe = window['ready'] ? '#d11d1d' : '#1dd129';
        this['renderSideButton'](_0x46db05, _0x146e5f, _0x23efa3, _0x175252, _0x50277e, _0x4bcc05, 'ready', _0x558cfe);
    }
    ['renderSideButton'](_0x48d549, _0x1e5833, _0x409ed4, _0xa911e0, _0x428b9b, _0x7d13ee, _0x3eefb6, _0x31bff0 = null) {
        ctx['save']();
        const _0x5099fd = _0x428b9b;
        _0x31bff0 ? (ctx['fillStyle'] = _0x31bff0, ctx['strokeStyle'] = _0x31bff0 === '#d11d1d' ? '#8f1515' : '#149917') : (ctx['fillStyle'] = '#689ed6', ctx['strokeStyle'] = '#537fac');
        ctx['lineWidth'] = 0x4, ctx['beginPath'](), ctx['roundRect'](_0x1e5833, _0x409ed4, _0xa911e0, _0x5099fd, 0x5), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x2, ctx['strokeText'](_0x48d549, _0x1e5833 + _0xa911e0 / 0x2, _0x409ed4 + _0x5099fd / 0x2), ctx['fillText'](_0x48d549, _0x1e5833 + _0xa911e0 / 0x2, _0x409ed4 + _0x5099fd / 0x2);
        const _0x4acd76 = mouse['canvasX'] > _0x1e5833 && mouse['canvasX'] < _0x1e5833 + _0xa911e0 && mouse['canvasY'] > _0x409ed4 && mouse['canvasY'] < _0x409ed4 + _0x5099fd;
        if (_0x4acd76) {
            ctx['fillStyle'] = 'white', ctx['globalAlpha'] = 0.1, ctx['beginPath'](), ctx['roundRect'](_0x1e5833 - ctx['lineWidth'] / 0x2, _0x409ed4 - ctx['lineWidth'] / 0x2, _0xa911e0 + ctx['lineWidth'], _0x5099fd + ctx['lineWidth'], 0x5), ctx['fill'](), ctx['closePath']();
            switch (_0x3eefb6) {
            case 'private':
                this['hoveringOverPrivate'] = !![];
                break;
            case 'public':
                this['hoveringOverPublic'] = !![];
                break;
            case 'new':
                this['hoveringOverNew'] = !![];
                break;
            case 'ready':
                this['hoveringOverReady'] = !![];
                break;
            }
        }
        ctx['restore']();
    }
    ['renderPlayerCard'](_0x23346a, _0x612ebb, _0x5403eb, _0x3cccf9) {
        const _0x2dfef0 = this['clients'][_0x23346a];
        if (!_0x2dfef0)
            return;
        ctx['save']();
        const _0x3e55ed = this['x'] - this['w'] / 0x2 + outsidePadding, _0x171ee5 = this['getCardY'](_0x23346a), _0x3cb85c = this['w'] - outsidePadding * 0x2;
        _0x5403eb - _0x2dfef0['creationTime'] < 0x190 && (ctx['globalAlpha'] = this['buttonAlpha'] * easeOutCubic((_0x5403eb - _0x2dfef0['creationTime']) / 0x190), ctx['translate'](0x0, -(0x1 - easeOutCubic((_0x5403eb - _0x2dfef0['creationTime']) / 0x190)) * 0x14));
        ctx['fillStyle'] = '#5a8bc7', ctx['strokeStyle'] = '#4a7ab0', ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['roundRect'](_0x3e55ed, _0x171ee5, _0x3cb85c, cardHeight, 0x5), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        const _0x475023 = _0x2dfef0['flower'], _0x16bd52 = _0x171ee5 + cardHeight / 0x2, _0x361e1a = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 0x1) * petalSlotPadding, _0x4900f8 = _0x171ee5 + (cardHeight - _0x361e1a) / 0x2 + _0x361e1a / 0x2;
        _0x475023['render']['headX'] = _0x3e55ed + flowerPadding + flowerSize / 0x2, _0x475023['render']['headY'] = _0x16bd52, _0x475023['headX'] = _0x475023['render']['headX'], _0x475023['headY'] = _0x475023['render']['headY'], _0x475023['x'] = _0x475023['render']['headX'], _0x475023['y'] = _0x475023['render']['headY'], _0x475023['render']['x'] = _0x475023['x'], _0x475023['render']['y'] = _0x475023['y'], _0x475023['render']['baseX'] = _0x475023['x'], _0x475023['render']['baseY'] = _0x475023['y'], _0x475023['baseX'] = _0x475023['x'], _0x475023['baseY'] = _0x475023['y'], ctx['save'](), ctx['translate'](_0x475023['render']['headX'], _0x475023['render']['headY']);
        const _0x393f06 = flowerSize / 0x32;
        ctx['scale'](_0x393f06, _0x393f06), ctx['translate'](-_0x475023['render']['headX'], -_0x475023['render']['headY']), _0x475023['drawFlower'](_0x475023['render']['headX'], _0x475023['render']['headY'], 0x19, _0x475023['character']), ctx['restore'](), ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['letterSpacing'] = '-.05px', ctx['lineWidth'] = 0x3, ctx['textAlign'] = 'left', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2020px\x20\x27Ubuntu\x27';
        const _0x7948fb = _0x2dfef0['name'] === '' ? 'Unnamed' : _0x2dfef0['name'], _0x55eb3a = _0x3e55ed + flowerPadding + flowerSize + 0xa;
        let _0x3f2f99;
        _0x2dfef0['id'] === this['selfId'] ? _0x3f2f99 = _0x171ee5 + 0x12 : _0x3f2f99 = _0x171ee5 + 0x16;
        ctx['strokeText'](_0x7948fb, _0x55eb3a, _0x3f2f99), ctx['fillText'](_0x7948fb, _0x55eb3a, _0x3f2f99);
        const _0x7127fd = this['getPetalSlotsBounds'](_0x23346a), _0x5d2b2e = _0x7127fd['x'] - 0x14, _0xf97d09 = _0x4900f8;
        ctx['beginPath'](), ctx['arc'](_0x5d2b2e, _0xf97d09, 0x8, 0x0, Math['PI'] * 0x2), ctx['fillStyle'] = 'transparent', ctx['strokeStyle'] = '#888888', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['closePath']();
        if (_0x2dfef0['ready'] === !![] || _0x5403eb - _0x2dfef0['lastReadyDisableTime'] < 0x258) {
            ctx['beginPath'](), ctx['translate'](_0x5d2b2e, _0xf97d09);
            if (_0x5403eb - _0x2dfef0['lastReadyEnableTime'] < 0x258) {
                const _0x2dbe95 = easeOutCubic((_0x5403eb - _0x2dfef0['lastReadyEnableTime']) / 0x258);
                ctx['rotate'](Math['PI'] * 0x2 * _0x2dbe95), ctx['globalAlpha'] = this['buttonAlpha'] * _0x2dbe95;
            }
            if (_0x5403eb - _0x2dfef0['lastReadyDisableTime'] < 0x258) {
                const _0x2740c8 = 0x1 - easeOutCubic((_0x5403eb - _0x2dfef0['lastReadyDisableTime']) / 0x258);
                ctx['rotate'](-Math['PI'] * 0x2 * _0x2740c8), ctx['globalAlpha'] = this['buttonAlpha'] * _0x2740c8;
            }
            ctx['moveTo'](-7.5, 0.5), ctx['lineTo'](-3.5, 7.5), ctx['lineTo'](7.5, -7.5), ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x5, ctx['stroke'](), ctx['strokeStyle'] = '#1dd129', ctx['lineWidth'] = 0x2, ctx['stroke']();
            if (_0x5403eb - _0x2dfef0['lastReadyDisableTime'] < 0x258) {
                const _0x41bb02 = 0x1 - easeOutCubic((_0x5403eb - _0x2dfef0['lastReadyDisableTime']) / 0x258);
                ctx['rotate'](Math['PI'] * 0x2 * _0x41bb02), ctx['globalAlpha'] = this['buttonAlpha'] * 0x1;
            }
            if (_0x5403eb - _0x2dfef0['lastReadyEnableTime'] < 0x258) {
                const _0x4a9611 = easeOutCubic((_0x5403eb - _0x2dfef0['lastReadyEnableTime']) / 0x258);
                ctx['rotate'](-Math['PI'] * 0x2 * _0x4a9611), ctx['globalAlpha'] = this['buttonAlpha'] * 0x1;
            }
            ctx['translate'](-_0x5d2b2e, -_0xf97d09), ctx['closePath']();
        }
        if (_0x2dfef0['id'] === this['selfId']) {
            this['startingWaveSlider'] = interpolate(this['startingWaveSlider'], this['desiredSWS'], 0.22);
            const _0x2a7f6a = this['getSliderBounds'](_0x23346a), _0x553444 = interpolate(_0x2a7f6a['x'], _0x2a7f6a['x'] + _0x2a7f6a['w'], this['startingWaveSlider']);
            ctx['strokeStyle'] = '#4a7ab0', ctx['lineWidth'] = 0x4, ctx['beginPath'](), ctx['moveTo'](_0x2a7f6a['x'], _0x2a7f6a['y'] + _0x2a7f6a['h'] / 0x2), ctx['lineTo'](_0x2a7f6a['x'] + _0x2a7f6a['w'], _0x2a7f6a['y'] + _0x2a7f6a['h'] / 0x2), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = '#689ed6', ctx['strokeStyle'] = '#537fac', ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['arc'](_0x553444, _0x2a7f6a['y'] + _0x2a7f6a['h'] / 0x2, 0x8, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            if ((mouse['canvasX'] - _0x553444) ** 0x2 + (mouse['canvasY'] - (_0x2a7f6a['y'] + _0x2a7f6a['h'] / 0x2)) ** 0x2 < 0xc ** 0x2)
                ctx['fillStyle'] = 'white', ctx['globalAlpha'] = 0.2, ctx['beginPath'](), ctx['arc'](_0x553444, _0x2a7f6a['y'] + _0x2a7f6a['h'] / 0x2, 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = this['buttonAlpha'], this['hoveringOverSlider'] = !![];
            else
                this['draggingSlider'] === !![] && (ctx['fillStyle'] = 'white', ctx['globalAlpha'] = 0.2, ctx['beginPath'](), ctx['arc'](_0x553444, _0x2a7f6a['y'] + _0x2a7f6a['h'] / 0x2, 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = this['buttonAlpha']);
            ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x2, ctx['textAlign'] = 'left', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2010px\x20\x27Ubuntu\x27', this['startingWave'] = Math['max'](0x1, Math['round'](this['maxStartingWave'] * this['startingWaveSlider']));
            const _0x2acb8b = 'Starting\x20Wave:\x20' + this['startingWave'], _0x4c8457 = _0x171ee5 + cardHeight - 0x12;
            ctx['strokeText'](_0x2acb8b, _0x55eb3a, _0x4c8457), ctx['fillText'](_0x2acb8b, _0x55eb3a, _0x4c8457);
            const _0x530ec1 = ctx['measureText'](_0x2acb8b)['width'], _0x147490 = 0xe;
            this['swTextBounds'] = {
                'x': _0x55eb3a,
                'y': _0x4c8457 - _0x147490 / 0x2,
                'w': _0x530ec1,
                'h': _0x147490
            }, mouse['canvasX'] > this['swTextBounds']['x'] && mouse['canvasX'] < this['swTextBounds']['x'] + this['swTextBounds']['w'] && mouse['canvasY'] > this['swTextBounds']['y'] && mouse['canvasY'] < this['swTextBounds']['y'] + this['swTextBounds']['h'] && (this['hoveringOverSW'] = !![], setCursor('pointer'));
        } else {
            ctx['fillStyle'] = '#cccccc', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0x2, ctx['textAlign'] = 'left', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2010px\x20\x27Ubuntu\x27';
            const _0x34cc30 = Math['max'](0x1, Math['ceil'](_0x2dfef0['startingWave'])), _0x3f5e69 = 'Starting\x20Wave:\x20' + _0x34cc30;
            ctx['strokeText'](_0x3f5e69, _0x55eb3a, _0x171ee5 + cardHeight - 0x12), ctx['fillText'](_0x3f5e69, _0x55eb3a, _0x171ee5 + cardHeight - 0x12);
        }
        this['renderPetalSlots'](_0x2dfef0, _0x23346a), this['renderArtifact'](_0x2dfef0, _0x23346a), ctx['restore']();
    }
    ['renderEmptySlot'](_0x46ec90, _0x2d07ae) {
        ctx['save']();
        const _0x456c2c = this['x'] - this['w'] / 0x2 + outsidePadding, _0x15daff = this['getCardY'](_0x46ec90), _0x588717 = this['w'] - outsidePadding * 0x2;
        ctx['globalAlpha'] = this['buttonAlpha'] * 0.5, ctx['fillStyle'] = '#3a5a87', ctx['strokeStyle'] = '#2a4a67', ctx['lineWidth'] = 0x2, ctx['setLineDash']([
            0x5,
            0x5
        ]), ctx['beginPath'](), ctx['roundRect'](_0x456c2c, _0x15daff, _0x588717, cardHeight, 0x5), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['setLineDash']([]), ctx['restore']();
    }
    ['renderPetalSlots'](_0x1c7546, _0x39660f) {
        const _0x381866 = this['getPetalSlotsBounds'](_0x39660f), _0x1c5d71 = _0x1c7546['flower']['petalContainers'] || [];
        for (let _0x48973d = 0x0; _0x48973d < getPetalSlotRows(); _0x48973d++) {
            for (let _0x52cc4f = 0x0; _0x52cc4f < getPetalSlotCols(); _0x52cc4f++) {
                const _0x4e17c3 = _0x48973d * getPetalSlotCols() + _0x52cc4f, _0xeae93a = _0x381866['x'] + _0x52cc4f * (petalSlotSize + petalSlotPadding), _0x4a9221 = _0x381866['y'] + _0x48973d * (petalSlotSize + petalSlotPadding);
                ctx['fillStyle'] = '#3a6a9a', ctx['strokeStyle'] = '#2a5a8a', ctx['lineWidth'] = 0x1, ctx['beginPath'](), ctx['roundRect'](_0xeae93a, _0x4a9221, petalSlotSize, petalSlotSize, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
                if (_0x1c5d71[_0x4e17c3]) {
                    const _0x29a0c2 = _0x1c5d71[_0x4e17c3];
                    _0x29a0c2['x'] = _0xeae93a + petalSlotSize / 0x2, _0x29a0c2['y'] = _0x4a9221 + petalSlotSize / 0x2, _0x29a0c2['render']['x'] = _0x29a0c2['x'], _0x29a0c2['render']['y'] = _0x29a0c2['y'], _0x29a0c2['w'] = petalSlotSize - 0x2, _0x29a0c2['h'] = petalSlotSize - 0x2, _0x29a0c2['nameless'] = !![], _0x29a0c2['spawnAnimation'] = 0x1, _0x29a0c2['draw']();
                }
            }
        }
    }
    ['renderArtifact'](_0x166fec, _0x21a016) {
        if (!_0x166fec['artifactPetalContainer'])
            return;
        const _0x1db681 = this['getArtifactBounds'](_0x21a016), _0xe06af7 = _0x166fec['artifactPetalContainer'];
        _0xe06af7['x'] = _0x1db681['x'] + _0x1db681['w'] / 0x2, _0xe06af7['y'] = _0x1db681['y'] + _0x1db681['h'] / 0x2, _0xe06af7['render']['x'] = _0xe06af7['x'], _0xe06af7['render']['y'] = _0xe06af7['y'], _0xe06af7['w'] = _0x1db681['w'] - 0x2, _0xe06af7['h'] = _0x1db681['h'] - 0x2, _0xe06af7['nameless'] = !![], _0xe06af7['spawnAnimation'] = 0x1, _0xe06af7['draw']();
    }
    ['renderOverfullWarning']() {
        ctx['textAlign'] = 'left', ctx['textBaseline'] = 'bottom', ctx['font'] = '900\x2012px\x20\x27Ubuntu\x27', ctx['lineWidth'] = 0x3, ctx['fillStyle'] = 'red';
        const _0x4005ad = this['getCardY'](0x0) - 0x5;
        ctx['strokeText']('[OVERFULL]', this['x'] - this['w'] / 0x2 + 7.5, _0x4005ad), ctx['fillText']('[OVERFULL]', this['x'] - this['w'] / 0x2 + 7.5, _0x4005ad), ctx['fillStyle'] = 'white';
        const _0x4f9fc6 = [
                '',
                '125%',
                '150%',
                '175%',
                '200%',
                '225%',
                '250%',
                '275%',
                '300%'
            ], _0x582a65 = [
                '',
                'Lvl100',
                'Lvl200',
                'Lvl300',
                'Lvl400',
                'Lvl500',
                'Lvl600',
                'Lvl700',
                'Lvl800'
            ], _0x54f523 = Math['min'](this['clients']['length'] - 0x4, _0x4f9fc6['length'] - 0x1);
        ctx['strokeText'](_0x4f9fc6[_0x54f523] + '\x20mob\x20health', this['x'] - this['w'] / 0x2 + 7.5, _0x4005ad + 0xe), ctx['fillText'](_0x4f9fc6[_0x54f523] + '\x20mob\x20health', this['x'] - this['w'] / 0x2 + 7.5, _0x4005ad + 0xe), ctx['strokeText']('(' + _0x582a65[_0x54f523] + '\x20feature)', this['x'] - this['w'] / 0x2 + 7.5, _0x4005ad + 0x1c), ctx['fillText']('(' + _0x582a65[_0x54f523] + '\x20feature)', this['x'] - this['w'] / 0x2 + 7.5, _0x4005ad + 0x1c), ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle';
    }
    ['getButtonAtPosition'](_0x3b0fe2, _0xdaba81) {
        if ((this['clients']['length'] > 0x0 || window['squadUIEnabled'] === !![]) && this['minimized'] === ![]) {
            const _0x2a877e = 0x7d, _0x4db68c = cardHeight * 0.75, _0x56037d = 0xc, _0x3f705a = this['x'] + this['w'] / 0x2, _0x30245c = _0x3f705a - 0x1, _0x3e86fd = this['getCardY'](0x0);
            for (let _0x27f4c4 = 0x0; _0x27f4c4 < 0x3; _0x27f4c4++) {
                const _0x3d5d65 = _0x3e86fd + _0x27f4c4 * (_0x4db68c + _0x56037d), _0x35af62 = [
                        'private',
                        'public',
                        'new'
                    ][_0x27f4c4];
                if (_0x3b0fe2 >= _0x30245c && _0x3b0fe2 <= _0x30245c + _0x2a877e && _0xdaba81 >= _0x3d5d65 && _0xdaba81 <= _0x3d5d65 + _0x4db68c)
                    return _0x35af62;
            }
            const _0x4ea67f = _0x3e86fd + 0x4 * cardHeight + 0x3 * cardPadding, _0x2857fb = _0x4ea67f - _0x4db68c;
            if (_0x3b0fe2 >= _0x30245c && _0x3b0fe2 <= _0x30245c + _0x2a877e && _0xdaba81 >= _0x2857fb && _0xdaba81 <= _0x2857fb + _0x4db68c)
                return 'ready';
        }
        return null;
    }
    ['createClient'](_0x17a8d7) {
        const _0x767ee6 = {
                'creationTime': performance['now'](),
                'flower': new Flower(_0x17a8d7)
            }, _0x5581a9 = _0x767ee6['flower'], _0x45d375 = this['x'] - this['w'] / 0x2 + outsidePadding, _0x5a28a3 = this['getCardY'](this['clients']['length']), _0x28f3a3 = getPetalSlotRows() * petalSlotSize + (getPetalSlotRows() - 0x1) * petalSlotPadding, _0x25479c = _0x5a28a3 + (cardHeight - _0x28f3a3) / 0x2 + _0x28f3a3 / 0x2;
        return _0x5581a9['petalContainers'] = new Array(0x14)['fill'](null), _0x5581a9['render']['headX'] = _0x45d375 + flowerPadding + flowerSize / 0x2, _0x5581a9['render']['headY'] = _0x25479c, _0x5581a9['headX'] = _0x5581a9['render']['headX'], _0x5581a9['headY'] = _0x5581a9['render']['headY'], _0x5581a9['x'] = _0x5581a9['render']['headX'], _0x5581a9['y'] = _0x5581a9['render']['headY'], _0x5581a9['render']['x'] = _0x5581a9['x'], _0x5581a9['render']['y'] = _0x5581a9['y'], _0x5581a9['render']['baseX'] = _0x5581a9['x'], _0x5581a9['render']['baseY'] = _0x5581a9['y'], _0x5581a9['baseX'] = _0x5581a9['x'], _0x5581a9['baseY'] = _0x5581a9['y'], _0x767ee6;
    }
    ['addClient'](_0x2342b4) {
        const _0x3e49d8 = this['clients']['find'](_0x3da19d => _0x3da19d['id'] === _0x2342b4['id']);
        if (_0x3e49d8) {
            for (let _0x5dd8de in _0x2342b4) {
                _0x3e49d8[_0x5dd8de] = _0x2342b4[_0x5dd8de];
            }
            _0x3e49d8['flower']['character'] = _0x2342b4['character'], _0x3e49d8['startingWave'] = _0x2342b4['sw'], _0x3e49d8['flower']['dev'] = _0x2342b4['dev'], delete _0x3e49d8['sw'];
            _0x2342b4['petals'] && this['updateFlowerPetals'](_0x2342b4['petals'], _0x3e49d8['id'], !![]);
            _0x2342b4['offPetals'] && this['updateFlowerOffPetals'](_0x2342b4['offPetals'], _0x3e49d8['id'], !![]);
            _0x2342b4['equippedArtifacts'] && (_0x3e49d8['equippedArtifacts'] = _0x2342b4['equippedArtifacts'], this['updateClientArtifact'](_0x3e49d8));
            _0x2342b4['id'] === this['selfId'] && (this['maxStartingWave'] = _0x2342b4['maxSW'], savedStartingWave !== null && savedStartingWave <= this['maxStartingWave'] ? (this['desiredSWS'] = savedStartingWave / this['maxStartingWave'], send({ 'sw': savedStartingWave })) : (this['desiredSWS'] = 0x1, savedStartingWave !== null && (localStorage['removeItem']('startingWave'), savedStartingWave = null)));
            return;
        }
        this['clients']['push'](this['createClient'](_0x2342b4['id']));
        const _0x3f0dfe = this['clients'][this['clients']['length'] - 0x1];
        for (let _0x526ee2 in _0x2342b4) {
            _0x3f0dfe[_0x526ee2] = _0x2342b4[_0x526ee2];
        }
        _0x3f0dfe['flower']['character'] = _0x2342b4['character'], _0x3f0dfe['startingWave'] = _0x2342b4['sw'], _0x3f0dfe['flower']['dev'] = _0x2342b4['dev'], delete _0x3f0dfe['sw'], _0x2342b4['petals'] && this['updateFlowerPetals'](_0x2342b4['petals'], _0x3f0dfe['id'], ![]), _0x2342b4['offPetals'] && this['updateFlowerOffPetals'](_0x2342b4['offPetals'], _0x3f0dfe['id'], !![]), _0x2342b4['equippedArtifacts'] && (_0x3f0dfe['equippedArtifacts'] = _0x2342b4['equippedArtifacts'], this['updateClientArtifact'](_0x3f0dfe)), _0x2342b4['id'] === this['selfId'] && (this['maxStartingWave'] = _0x2342b4['maxSW'], savedStartingWave !== null && savedStartingWave <= this['maxStartingWave'] ? (this['desiredSWS'] = savedStartingWave / this['maxStartingWave'], send({ 'sw': savedStartingWave })) : (this['desiredSWS'] = 0x1, savedStartingWave !== null && (localStorage['removeItem']('startingWave'), savedStartingWave = null)));
    }
    ['updateClientArtifact'](_0x535cc8) {
        if (!_0x535cc8['equippedArtifacts'] || _0x535cc8['equippedArtifacts']['length'] === 0x0) {
            _0x535cc8['artifactPetalContainer'] = null;
            return;
        }
        const _0x28dae5 = _0x535cc8['equippedArtifacts'][0x0], _0x4e1677 = _0x535cc8['equippedArtifactLevel'] || 0x0, _0x16faa9 = Stats['rarities']['length'] - 0x1, _0x158f15 = Math['min'](Math['max'](_0x4e1677, 0x0), _0x16faa9), _0x2b3252 = new Petal({
                'type': _0x28dae5,
                'rarity': _0x158f15,
                'x': 0x0,
                'y': 0x0,
                'distance': 0x0,
                'angle': 0x0,
                'maxHp': 0xc9f2c9cd04675000000000000,
                'hp': 0xc9f2c9cd04675000000000000,
                'maxReload': 0x3,
                'reload': 0x3,
                'damage': 0x0
            });
        _0x535cc8['artifactPetalContainer'] = new PetalContainer([_0x2b3252], {
            'x': 0x0,
            'y': 0x0,
            'w': artifactWidth,
            'h': artifactHeight,
            'originalX': 0x0,
            'originalY': 0x0,
            'radius': artifactWidth / 0x2,
            'toOscillate': ![]
        }, _0x28dae5 + '_squad', 0x1, 0x0), _0x535cc8['artifactPetalContainer']['spawnAnimation'] = 0x1;
    }
    ['updateStartingWave'](_0x408307, _0x96134e, _0x457758, _0x3a349c = ![]) {
        if (_0x408307 === this['selfId'])
            _0x3a349c && _0x457758 !== undefined ? (this['maxStartingWave'] = _0x457758, this['startingWave'] = Math['min'](_0x96134e, _0x457758), this['desiredSWS'] = this['startingWave'] / _0x457758) : this['startingWave'] = Math['min'](_0x96134e, this['maxStartingWave']);
        else {
            const _0x180d41 = this['findClient'](_0x408307);
            _0x180d41['startingWave'] = Math['min'](_0x96134e, _0x180d41['maxSW'] || _0x96134e);
        }
    }
    ['removeClient'](_0x41132e) {
        for (let _0x34bb1c = 0x0; _0x34bb1c < this['clients']['length']; _0x34bb1c++) {
            if (this['clients'][_0x34bb1c]['id'] === _0x41132e) {
                this['clients']['splice'](_0x34bb1c, 0x1);
                return;
            }
        }
    }
    ['findClient'](_0x9b1482) {
        for (let _0x5dcfc9 = 0x0; _0x5dcfc9 < this['clients']['length']; _0x5dcfc9++) {
            if (this['clients'][_0x5dcfc9]['id'] === _0x9b1482)
                return this['clients'][_0x5dcfc9];
        }
        return {};
    }
}