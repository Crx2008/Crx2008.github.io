!function (_0x40fa2a, _0x4ed46b) {
    'object' == typeof exports && 'undefined' != typeof module ? _0x4ed46b(exports) : 'function' == typeof define && define['amd'] ? define(['exports'], _0x4ed46b) : _0x4ed46b((_0x40fa2a = 'undefined' != typeof globalThis ? globalThis : _0x40fa2a || self)['msgpackr'] = {});
}(this, function (_0x3a2b01) {
    'use strict';
    try {
        _0x5c26d3 = new TextDecoder();
    } catch (_0xaf266d) {
    }
    var _0x5c26d3, _0x442690, _0x171b35, _0x1cb945, _0x36f13b, _0x4c3cfa, _0x45cf5a, _0x482866, _0x21d890, _0x3451c7 = 0x0, _0x1b3018 = {}, _0x4f68ad = 0x0, _0x598c0d = 0x0, _0x2002fb = [], _0x56fe5e = {
            'useRecords': !0x1,
            'mapsAsObjects': !0x0
        };
    class _0x20854d {
    }
    let _0x1c2c5a = new _0x20854d();
    _0x1c2c5a['name'] = 'MessagePack\x200xC1';
    var _0x215603 = !0x1, _0x331da9 = 0x2;
    try {
        Function('');
    } catch (_0x6c3b22) {
        _0x331da9 = 0x1 / 0x0;
    }
    class _0x53cda1 {
        constructor(_0x26d968) {
            _0x26d968 && (!0x1 === _0x26d968['useRecords'] && void 0x0 === _0x26d968['mapsAsObjects'] && (_0x26d968['mapsAsObjects'] = !0x0), !_0x26d968['sequential'] || !0x1 === _0x26d968['trusted'] || (_0x26d968['trusted'] = !0x0, _0x26d968['structures'] || !0x1 == _0x26d968['useRecords'] || (_0x26d968['structures'] = [], _0x26d968['maxSharedStructures'] || (_0x26d968['maxSharedStructures'] = 0x0))), _0x26d968['structures'] ? _0x26d968['structures']['sharedLength'] = _0x26d968['structures']['length'] : _0x26d968['getStructures'] && ((_0x26d968['structures'] = [])['uninitialized'] = !0x0, _0x26d968['structures']['sharedLength'] = 0x0), _0x26d968['int64AsNumber'] && (_0x26d968['int64AsType'] = 'number')), Object['assign'](this, _0x26d968);
        }
        ['unpack'](_0x493328, _0x21f28e) {
            if (_0x442690)
                return _0x1dffd7(() => (_0x1a80b5(), this ? this['unpack'](_0x493328, _0x21f28e) : _0x53cda1['prototype']['unpack']['call'](_0x56fe5e, _0x493328, _0x21f28e)));
            _0x493328['buffer'] || _0x493328['constructor'] !== ArrayBuffer || (_0x493328 = 'undefined' != typeof Buffer ? Buffer['from'](_0x493328) : new Uint8Array(_0x493328)), 'object' == typeof _0x21f28e ? (_0x171b35 = _0x21f28e['end'] || _0x493328['length'], _0x3451c7 = _0x21f28e['start'] || 0x0) : (_0x3451c7 = 0x0, _0x171b35 = _0x21f28e > -0x1 ? _0x21f28e : _0x493328['length']), _0x598c0d = 0x0, _0x36f13b = null, _0x4c3cfa = null, _0x442690 = _0x493328;
            try {
                _0x482866 = _0x493328['dataView'] || (_0x493328['dataView'] = new DataView(_0x493328['buffer'], _0x493328['byteOffset'], _0x493328['byteLength']));
            } catch (_0x2de6fa) {
                if (_0x442690 = null, _0x493328 instanceof Uint8Array)
                    throw _0x2de6fa;
                throw Error('Source\x20must\x20be\x20a\x20Uint8Array\x20or\x20Buffer\x20but\x20was\x20a\x20' + (_0x493328 && 'object' == typeof _0x493328 ? _0x493328['constructor']['name'] : typeof _0x493328));
            }
            return this instanceof _0x53cda1 ? (_0x1b3018 = this, this['structures'] ? _0x1cb945 = this['structures'] : (!_0x1cb945 || _0x1cb945['length'] > 0x0) && (_0x1cb945 = [])) : (_0x1b3018 = _0x56fe5e, (!_0x1cb945 || _0x1cb945['length'] > 0x0) && (_0x1cb945 = [])), _0x1f30ea(_0x21f28e);
        }
        ['unpackMultiple'](_0x1617cf, _0x4d2194) {
            let _0x81d01f, _0xf51281 = 0x0;
            try {
                _0x215603 = !0x0;
                let _0xf78096 = _0x1617cf['length'], _0x3f92e5 = this ? this['unpack'](_0x1617cf, _0xf78096) : _0x4c075f['unpack'](_0x1617cf, _0xf78096);
                if (_0x4d2194) {
                    if (!0x1 === _0x4d2194(_0x3f92e5, _0xf51281, _0x3451c7))
                        return;
                    for (; _0x3451c7 < _0xf78096;)
                        if (_0xf51281 = _0x3451c7, !0x1 === _0x4d2194(_0x1f30ea(), _0xf51281, _0x3451c7))
                            return;
                } else {
                    for (_0x81d01f = [_0x3f92e5]; _0x3451c7 < _0xf78096;)
                        _0xf51281 = _0x3451c7, _0x81d01f['push'](_0x1f30ea());
                    return _0x81d01f;
                }
            } catch (_0x1abf2c) {
                throw _0x1abf2c['lastPosition'] = _0xf51281, _0x1abf2c['values'] = _0x81d01f, _0x1abf2c;
            } finally {
                _0x215603 = !0x1, _0x1a80b5();
            }
        }
        ['_mergeStructures'](_0x3bf138, _0x35884b) {
            Object['isFrozen'](_0x3bf138 = _0x3bf138 || []) && (_0x3bf138 = _0x3bf138['map'](_0x440517 => _0x440517['slice'](0x0)));
            for (let _0x3a2980 = 0x0, _0x5d1cf7 = _0x3bf138['length']; _0x3a2980 < _0x5d1cf7; _0x3a2980++) {
                let _0x1a273f = _0x3bf138[_0x3a2980];
                _0x1a273f && (_0x1a273f['isShared'] = !0x0, _0x3a2980 >= 0x20 && (_0x1a273f['highByte'] = _0x3a2980 - 0x20 >> 0x5));
            }
            for (let _0x596e11 in (_0x3bf138['sharedLength'] = _0x3bf138['length'], _0x35884b || []))
                if (_0x596e11 >= 0x0) {
                    let _0x15cfc6 = _0x3bf138[_0x596e11], _0x4aa2c1 = _0x35884b[_0x596e11];
                    _0x4aa2c1 && (_0x15cfc6 && ((_0x3bf138['restoreStructures'] || (_0x3bf138['restoreStructures'] = []))[_0x596e11] = _0x15cfc6), _0x3bf138[_0x596e11] = _0x4aa2c1);
                }
            return this['structures'] = _0x3bf138;
        }
        ['decode'](_0x59d4b5, _0x4bd0f2) {
            return this['unpack'](_0x59d4b5, _0x4bd0f2);
        }
    }
    function _0x1f30ea(_0x59c5aa) {
        try {
            if (!_0x1b3018['trusted'] && !_0x215603) {
                let _0x2fafd0 = _0x1cb945['sharedLength'] || 0x0;
                _0x2fafd0 < _0x1cb945['length'] && (_0x1cb945['length'] = _0x2fafd0);
            }
            let _0x23322a;
            if (_0x1b3018['randomAccessStructure'] && _0x442690[_0x3451c7] < 0x40 && _0x442690[_0x3451c7] >= 0x20 && _0x21d890 ? (_0x23322a = _0x21d890(_0x442690, _0x3451c7, _0x171b35, _0x1b3018), _0x442690 = null, !(_0x59c5aa && _0x59c5aa['lazy']) && _0x23322a && (_0x23322a = _0x23322a['toJSON']()), _0x3451c7 = _0x171b35) : _0x23322a = _0x4ee223(), _0x4c3cfa && (_0x3451c7 = _0x4c3cfa['postBundlePosition'], _0x4c3cfa = null), _0x215603 && (_0x1cb945['restoreStructures'] = null), _0x3451c7 == _0x171b35)
                _0x1cb945 && _0x1cb945['restoreStructures'] && _0x4e67df(), _0x1cb945 = null, _0x442690 = null, _0x45cf5a && (_0x45cf5a = null);
            else {
                if (_0x3451c7 > _0x171b35)
                    throw Error('Unexpected\x20end\x20of\x20MessagePack\x20data');
                else {
                    if (!_0x215603) {
                        let _0x1894d5;
                        try {
                            _0x1894d5 = JSON['stringify'](_0x23322a, (_0x1ba002, _0x464f13) => 'bigint' == typeof _0x464f13 ? _0x464f13 + 'n' : _0x464f13)['slice'](0x0, 0x64);
                        } catch (_0x52ca71) {
                            _0x1894d5 = '(JSON\x20view\x20not\x20available\x20' + _0x52ca71 + ')';
                        }
                        throw Error('Data\x20read,\x20but\x20end\x20of\x20buffer\x20not\x20reached\x20' + _0x1894d5);
                    }
                }
            }
            return _0x23322a;
        } catch (_0x2d5e59) {
            throw _0x1cb945 && _0x1cb945['restoreStructures'] && _0x4e67df(), _0x1a80b5(), (_0x2d5e59 instanceof RangeError || _0x2d5e59['message']['startsWith']('Unexpected\x20end\x20of\x20buffer') || _0x3451c7 > _0x171b35) && (_0x2d5e59['incomplete'] = !0x0), _0x2d5e59;
        }
    }
    function _0x4e67df() {
        for (let _0x32764b in _0x1cb945['restoreStructures'])
            _0x1cb945[_0x32764b] = _0x1cb945['restoreStructures'][_0x32764b];
        _0x1cb945['restoreStructures'] = null;
    }
    function _0x4ee223() {
        let _0x8b18a = _0x442690[_0x3451c7++];
        if (_0x8b18a < 0xa0) {
            if (_0x8b18a < 0x80) {
                if (_0x8b18a < 0x40)
                    return _0x8b18a;
                {
                    let _0x60f5b5 = _0x1cb945[0x3f & _0x8b18a] || _0x1b3018['getStructures'] && _0x575a60()[0x3f & _0x8b18a];
                    return _0x60f5b5 ? (_0x60f5b5['read'] || (_0x60f5b5['read'] = _0x536fbe(_0x60f5b5, 0x3f & _0x8b18a)), _0x60f5b5['read']()) : _0x8b18a;
                }
            }
            if (_0x8b18a < 0x90) {
                if (_0x8b18a -= 0x80, _0x1b3018['mapsAsObjects']) {
                    let _0x46326f = {};
                    for (let _0x522096 = 0x0; _0x522096 < _0x8b18a; _0x522096++) {
                        let _0x400ef1 = _0x5531d3();
                        '__proto__' === _0x400ef1 && (_0x400ef1 = '__proto_'), _0x46326f[_0x400ef1] = _0x4ee223();
                    }
                    return _0x46326f;
                }
                {
                    let _0x2b92da = new Map();
                    for (let _0x5d8d94 = 0x0; _0x5d8d94 < _0x8b18a; _0x5d8d94++)
                        _0x2b92da['set'](_0x4ee223(), _0x4ee223());
                    return _0x2b92da;
                }
            }
            {
                let _0x550ef6 = Array(_0x8b18a -= 0x90);
                for (let _0x195313 = 0x0; _0x195313 < _0x8b18a; _0x195313++)
                    _0x550ef6[_0x195313] = _0x4ee223();
                return _0x1b3018['freezeData'] ? Object['freeze'](_0x550ef6) : _0x550ef6;
            }
        }
        if (_0x8b18a < 0xc0) {
            let _0xb2f6f1 = _0x8b18a - 0xa0;
            if (_0x598c0d >= _0x3451c7)
                return _0x36f13b['slice'](_0x3451c7 - _0x4f68ad, (_0x3451c7 += _0xb2f6f1) - _0x4f68ad);
            if (0x0 == _0x598c0d && _0x171b35 < 0x8c) {
                let _0x470fba = _0xb2f6f1 < 0x10 ? _0x4d0b1f(_0xb2f6f1) : _0x158f83(_0xb2f6f1);
                if (null != _0x470fba)
                    return _0x470fba;
            }
            return _0x3c3f22(_0xb2f6f1);
        }
        {
            let _0x1a9747;
            switch (_0x8b18a) {
            case 0xc0:
                return null;
            case 0xc1:
                if (_0x4c3cfa) {
                    if ((_0x1a9747 = _0x4ee223()) > 0x0)
                        return _0x4c3cfa[0x1]['slice'](_0x4c3cfa['position1'], _0x4c3cfa['position1'] += _0x1a9747);
                    return _0x4c3cfa[0x0]['slice'](_0x4c3cfa['position0'], _0x4c3cfa['position0'] -= _0x1a9747);
                }
                return _0x1c2c5a;
            case 0xc2:
                return !0x1;
            case 0xc3:
                return !0x0;
            case 0xc4:
                if (void 0x0 === (_0x1a9747 = _0x442690[_0x3451c7++]))
                    throw Error('Unexpected\x20end\x20of\x20buffer');
                return _0x64b448(_0x1a9747);
            case 0xc5:
                return _0x1a9747 = _0x482866['getUint16'](_0x3451c7), _0x3451c7 += 0x2, _0x64b448(_0x1a9747);
            case 0xc6:
                return _0x1a9747 = _0x482866['getUint32'](_0x3451c7), _0x3451c7 += 0x4, _0x64b448(_0x1a9747);
            case 0xc7:
                return _0x46549f(_0x442690[_0x3451c7++]);
            case 0xc8:
                return _0x1a9747 = _0x482866['getUint16'](_0x3451c7), _0x3451c7 += 0x2, _0x46549f(_0x1a9747);
            case 0xc9:
                return _0x1a9747 = _0x482866['getUint32'](_0x3451c7), _0x3451c7 += 0x4, _0x46549f(_0x1a9747);
            case 0xca:
                if (_0x1a9747 = _0x482866['getFloat32'](_0x3451c7), _0x1b3018['useFloat32'] > 0x2) {
                    let _0x51cb1d = _0x55843b[(0x7f & _0x442690[_0x3451c7]) << 0x1 | _0x442690[_0x3451c7 + 0x1] >> 0x7];
                    return _0x3451c7 += 0x4, (_0x51cb1d * _0x1a9747 + (_0x1a9747 > 0x0 ? 0.5 : -0.5) >> 0x0) / _0x51cb1d;
                }
                return _0x3451c7 += 0x4, _0x1a9747;
            case 0xcb:
                return _0x1a9747 = _0x482866['getFloat64'](_0x3451c7), _0x3451c7 += 0x8, _0x1a9747;
            case 0xcc:
                return _0x442690[_0x3451c7++];
            case 0xcd:
                return _0x1a9747 = _0x482866['getUint16'](_0x3451c7), _0x3451c7 += 0x2, _0x1a9747;
            case 0xce:
                return _0x1a9747 = _0x482866['getUint32'](_0x3451c7), _0x3451c7 += 0x4, _0x1a9747;
            case 0xcf:
                return 'number' === _0x1b3018['int64AsType'] ? (_0x1a9747 = 0x100000000 * _0x482866['getUint32'](_0x3451c7), _0x1a9747 += _0x482866['getUint32'](_0x3451c7 + 0x4)) : 'string' === _0x1b3018['int64AsType'] ? _0x1a9747 = _0x482866['getBigUint64'](_0x3451c7)['toString']() : 'auto' === _0x1b3018['int64AsType'] ? (_0x1a9747 = _0x482866['getBigUint64'](_0x3451c7)) <= BigInt(0x2) << BigInt(0x34) && (_0x1a9747 = Number(_0x1a9747)) : _0x1a9747 = _0x482866['getBigUint64'](_0x3451c7), _0x3451c7 += 0x8, _0x1a9747;
            case 0xd0:
                return _0x482866['getInt8'](_0x3451c7++);
            case 0xd1:
                return _0x1a9747 = _0x482866['getInt16'](_0x3451c7), _0x3451c7 += 0x2, _0x1a9747;
            case 0xd2:
                return _0x1a9747 = _0x482866['getInt32'](_0x3451c7), _0x3451c7 += 0x4, _0x1a9747;
            case 0xd3:
                return 'number' === _0x1b3018['int64AsType'] ? (_0x1a9747 = 0x100000000 * _0x482866['getInt32'](_0x3451c7), _0x1a9747 += _0x482866['getUint32'](_0x3451c7 + 0x4)) : 'string' === _0x1b3018['int64AsType'] ? _0x1a9747 = _0x482866['getBigInt64'](_0x3451c7)['toString']() : 'auto' === _0x1b3018['int64AsType'] ? (_0x1a9747 = _0x482866['getBigInt64'](_0x3451c7)) >= BigInt(-0x2) << BigInt(0x34) && _0x1a9747 <= BigInt(0x2) << BigInt(0x34) && (_0x1a9747 = Number(_0x1a9747)) : _0x1a9747 = _0x482866['getBigInt64'](_0x3451c7), _0x3451c7 += 0x8, _0x1a9747;
            case 0xd4:
                if (0x72 == (_0x1a9747 = _0x442690[_0x3451c7++]))
                    return _0x372a9b(0x3f & _0x442690[_0x3451c7++]);
                {
                    let _0x527694 = _0x2002fb[_0x1a9747];
                    if (_0x527694) {
                        if (_0x527694['read'])
                            return _0x3451c7++, _0x527694['read'](_0x4ee223());
                        if (_0x527694['noBuffer'])
                            return _0x3451c7++, _0x527694();
                        return _0x527694(_0x442690['subarray'](_0x3451c7, ++_0x3451c7));
                    }
                    throw Error('Unknown\x20extension\x20' + _0x1a9747);
                }
            case 0xd5:
                if (0x72 == (_0x1a9747 = _0x442690[_0x3451c7]))
                    return _0x3451c7++, _0x372a9b(0x3f & _0x442690[_0x3451c7++], _0x442690[_0x3451c7++]);
                return _0x46549f(0x2);
            case 0xd6:
                return _0x46549f(0x4);
            case 0xd7:
                return _0x46549f(0x8);
            case 0xd8:
                return _0x46549f(0x10);
            case 0xd9:
                if (_0x1a9747 = _0x442690[_0x3451c7++], _0x598c0d >= _0x3451c7)
                    return _0x36f13b['slice'](_0x3451c7 - _0x4f68ad, (_0x3451c7 += _0x1a9747) - _0x4f68ad);
                return _0x3457bb(_0x1a9747);
            case 0xda:
                if (_0x1a9747 = _0x482866['getUint16'](_0x3451c7), _0x598c0d >= (_0x3451c7 += 0x2))
                    return _0x36f13b['slice'](_0x3451c7 - _0x4f68ad, (_0x3451c7 += _0x1a9747) - _0x4f68ad);
                return _0x39db72(_0x1a9747);
            case 0xdb:
                if (_0x1a9747 = _0x482866['getUint32'](_0x3451c7), _0x598c0d >= (_0x3451c7 += 0x4))
                    return _0x36f13b['slice'](_0x3451c7 - _0x4f68ad, (_0x3451c7 += _0x1a9747) - _0x4f68ad);
                return _0x58a164(_0x1a9747);
            case 0xdc:
                return _0x1a9747 = _0x482866['getUint16'](_0x3451c7), _0x3451c7 += 0x2, _0x2ac8a9(_0x1a9747);
            case 0xdd:
                return _0x1a9747 = _0x482866['getUint32'](_0x3451c7), _0x3451c7 += 0x4, _0x2ac8a9(_0x1a9747);
            case 0xde:
                return _0x1a9747 = _0x482866['getUint16'](_0x3451c7), _0x3451c7 += 0x2, _0x3e6b9c(_0x1a9747);
            case 0xdf:
                return _0x1a9747 = _0x482866['getUint32'](_0x3451c7), _0x3451c7 += 0x4, _0x3e6b9c(_0x1a9747);
            default:
                if (_0x8b18a >= 0xe0)
                    return _0x8b18a - 0x100;
                if (void 0x0 === _0x8b18a) {
                    let _0x3b7b17 = Error('Unexpected\x20end\x20of\x20MessagePack\x20data');
                    throw _0x3b7b17['incomplete'] = !0x0, _0x3b7b17;
                }
                throw Error('Unknown\x20MessagePack\x20token\x20' + _0x8b18a);
            }
        }
    }
    let _0x52d3ad = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
    function _0x536fbe(_0x4e972a, _0x35f4b6) {
        function _0x2a4fed() {
            if (_0x2a4fed['count']++ > _0x331da9) {
                let _0x586e75 = _0x4e972a['read'] = Function('r', 'return\x20function(){return\x20' + (_0x1b3018['freezeData'] ? 'Object.freeze' : '') + '({' + _0x4e972a['map'](_0xb69455 => '__proto__' === _0xb69455 ? '__proto_:r()' : _0x52d3ad['test'](_0xb69455) ? _0xb69455 + ':r()' : '[' + JSON['stringify'](_0xb69455) + ']:r()')['join'](',') + '})}')(_0x4ee223);
                return 0x0 === _0x4e972a['highByte'] && (_0x4e972a['read'] = _0x100edb(_0x35f4b6, _0x4e972a['read'])), _0x586e75();
            }
            let _0x1944ac = {};
            for (let _0x45c251 = 0x0, _0xed3b88 = _0x4e972a['length']; _0x45c251 < _0xed3b88; _0x45c251++) {
                let _0x1e57f0 = _0x4e972a[_0x45c251];
                '__proto__' === _0x1e57f0 && (_0x1e57f0 = '__proto_'), _0x1944ac[_0x1e57f0] = _0x4ee223();
            }
            return _0x1b3018['freezeData'] ? Object['freeze'](_0x1944ac) : _0x1944ac;
        }
        return (_0x2a4fed['count'] = 0x0, 0x0 === _0x4e972a['highByte']) ? _0x100edb(_0x35f4b6, _0x2a4fed) : _0x2a4fed;
    }
    let _0x100edb = (_0xfc9bee, _0x2bbbd1) => function () {
        let _0x2494dd = _0x442690[_0x3451c7++];
        if (0x0 === _0x2494dd)
            return _0x2bbbd1();
        let _0x40fb93 = _0xfc9bee < 0x20 ? -(_0xfc9bee + (_0x2494dd << 0x5)) : _0xfc9bee + (_0x2494dd << 0x5), _0x10f9bc = _0x1cb945[_0x40fb93] || _0x575a60()[_0x40fb93];
        if (!_0x10f9bc)
            throw Error('Record\x20id\x20is\x20not\x20defined\x20for\x20' + _0x40fb93);
        return _0x10f9bc['read'] || (_0x10f9bc['read'] = _0x536fbe(_0x10f9bc, _0xfc9bee)), _0x10f9bc['read']();
    };
    function _0x575a60() {
        let _0x5d546e = _0x1dffd7(() => (_0x442690 = null, _0x1b3018['getStructures']()));
        return _0x1cb945 = _0x1b3018['_mergeStructures'](_0x5d546e, _0x1cb945);
    }
    var _0x3c3f22 = _0x4c7ad6, _0x3457bb = _0x4c7ad6, _0x39db72 = _0x4c7ad6, _0x58a164 = _0x4c7ad6;
    function _0x4c7ad6(_0x250462) {
        let _0x437269;
        if (_0x250462 < 0x10 && (_0x437269 = _0x4d0b1f(_0x250462)))
            return _0x437269;
        if (_0x250462 > 0x40 && _0x5c26d3)
            return _0x5c26d3['decode'](_0x442690['subarray'](_0x3451c7, _0x3451c7 += _0x250462));
        let _0x46dce4 = _0x3451c7 + _0x250462, _0x374179 = [];
        for (_0x437269 = ''; _0x3451c7 < _0x46dce4;) {
            let _0x5ce2a0 = _0x442690[_0x3451c7++];
            if ((0x80 & _0x5ce2a0) == 0x0)
                _0x374179['push'](_0x5ce2a0);
            else {
                if ((0xe0 & _0x5ce2a0) == 0xc0) {
                    let _0x3a9b56 = 0x3f & _0x442690[_0x3451c7++];
                    _0x374179['push']((0x1f & _0x5ce2a0) << 0x6 | _0x3a9b56);
                } else {
                    if ((0xf0 & _0x5ce2a0) == 0xe0) {
                        let _0x49fe20 = 0x3f & _0x442690[_0x3451c7++], _0x12668e = 0x3f & _0x442690[_0x3451c7++];
                        _0x374179['push']((0x1f & _0x5ce2a0) << 0xc | _0x49fe20 << 0x6 | _0x12668e);
                    } else {
                        if ((0xf8 & _0x5ce2a0) == 0xf0) {
                            let _0x267707 = 0x3f & _0x442690[_0x3451c7++], _0x12bde7 = 0x3f & _0x442690[_0x3451c7++], _0x1b1a21 = 0x3f & _0x442690[_0x3451c7++], _0x126344 = (0x7 & _0x5ce2a0) << 0x12 | _0x267707 << 0xc | _0x12bde7 << 0x6 | _0x1b1a21;
                            _0x126344 > 0xffff && (_0x126344 -= 0x10000, _0x374179['push'](_0x126344 >>> 0xa & 0x3ff | 0xd800), _0x126344 = 0xdc00 | 0x3ff & _0x126344), _0x374179['push'](_0x126344);
                        } else
                            _0x374179['push'](_0x5ce2a0);
                    }
                }
            }
            _0x374179['length'] >= 0x1000 && (_0x437269 += _0x530392['apply'](String, _0x374179), _0x374179['length'] = 0x0);
        }
        return _0x374179['length'] > 0x0 && (_0x437269 += _0x530392['apply'](String, _0x374179)), _0x437269;
    }
    function _0x2ac8a9(_0x3b28db) {
        let _0x30ff13 = Array(_0x3b28db);
        for (let _0x35bbc7 = 0x0; _0x35bbc7 < _0x3b28db; _0x35bbc7++)
            _0x30ff13[_0x35bbc7] = _0x4ee223();
        return _0x1b3018['freezeData'] ? Object['freeze'](_0x30ff13) : _0x30ff13;
    }
    function _0x3e6b9c(_0x23cdc9) {
        if (_0x1b3018['mapsAsObjects']) {
            let _0x1e5217 = {};
            for (let _0x2166fe = 0x0; _0x2166fe < _0x23cdc9; _0x2166fe++) {
                let _0x751c87 = _0x5531d3();
                '__proto__' === _0x751c87 && (_0x751c87 = '__proto_'), _0x1e5217[_0x751c87] = _0x4ee223();
            }
            return _0x1e5217;
        }
        {
            let _0x356a30 = new Map();
            for (let _0x5584e0 = 0x0; _0x5584e0 < _0x23cdc9; _0x5584e0++)
                _0x356a30['set'](_0x4ee223(), _0x4ee223());
            return _0x356a30;
        }
    }
    var _0x530392 = String['fromCharCode'];
    function _0x158f83(_0x4837cc) {
        let _0x585107 = _0x3451c7, _0x5c8c90 = Array(_0x4837cc);
        for (let _0x22e20c = 0x0; _0x22e20c < _0x4837cc; _0x22e20c++) {
            let _0x526c92 = _0x442690[_0x3451c7++];
            if ((0x80 & _0x526c92) > 0x0) {
                _0x3451c7 = _0x585107;
                return;
            }
            _0x5c8c90[_0x22e20c] = _0x526c92;
        }
        return _0x530392['apply'](String, _0x5c8c90);
    }
    function _0x4d0b1f(_0x5bddc2) {
        if (_0x5bddc2 < 0x4) {
            if (_0x5bddc2 < 0x2) {
                if (0x0 === _0x5bddc2)
                    return '';
                {
                    let _0x4b0d58 = _0x442690[_0x3451c7++];
                    if ((0x80 & _0x4b0d58) > 0x1) {
                        _0x3451c7 -= 0x1;
                        return;
                    }
                    return _0x530392(_0x4b0d58);
                }
            }
            {
                let _0x56d114 = _0x442690[_0x3451c7++], _0x321c8b = _0x442690[_0x3451c7++];
                if ((0x80 & _0x56d114) > 0x0 || (0x80 & _0x321c8b) > 0x0) {
                    _0x3451c7 -= 0x2;
                    return;
                }
                if (_0x5bddc2 < 0x3)
                    return _0x530392(_0x56d114, _0x321c8b);
                let _0x1d02ef = _0x442690[_0x3451c7++];
                if ((0x80 & _0x1d02ef) > 0x0) {
                    _0x3451c7 -= 0x3;
                    return;
                }
                return _0x530392(_0x56d114, _0x321c8b, _0x1d02ef);
            }
        }
        {
            let _0xd81bda = _0x442690[_0x3451c7++], _0x57c031 = _0x442690[_0x3451c7++], _0x144135 = _0x442690[_0x3451c7++], _0x25626b = _0x442690[_0x3451c7++];
            if ((0x80 & _0xd81bda) > 0x0 || (0x80 & _0x57c031) > 0x0 || (0x80 & _0x144135) > 0x0 || (0x80 & _0x25626b) > 0x0) {
                _0x3451c7 -= 0x4;
                return;
            }
            if (_0x5bddc2 < 0x6) {
                if (0x4 === _0x5bddc2)
                    return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b);
                {
                    let _0xf1addb = _0x442690[_0x3451c7++];
                    if ((0x80 & _0xf1addb) > 0x0) {
                        _0x3451c7 -= 0x5;
                        return;
                    }
                    return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0xf1addb);
                }
            }
            if (_0x5bddc2 < 0x8) {
                let _0x4201d7 = _0x442690[_0x3451c7++], _0x53961 = _0x442690[_0x3451c7++];
                if ((0x80 & _0x4201d7) > 0x0 || (0x80 & _0x53961) > 0x0) {
                    _0x3451c7 -= 0x6;
                    return;
                }
                if (_0x5bddc2 < 0x7)
                    return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x4201d7, _0x53961);
                let _0x12bb77 = _0x442690[_0x3451c7++];
                if ((0x80 & _0x12bb77) > 0x0) {
                    _0x3451c7 -= 0x7;
                    return;
                }
                return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x4201d7, _0x53961, _0x12bb77);
            }
            {
                let _0x345e58 = _0x442690[_0x3451c7++], _0x3c472d = _0x442690[_0x3451c7++], _0x285eee = _0x442690[_0x3451c7++], _0x467e59 = _0x442690[_0x3451c7++];
                if ((0x80 & _0x345e58) > 0x0 || (0x80 & _0x3c472d) > 0x0 || (0x80 & _0x285eee) > 0x0 || (0x80 & _0x467e59) > 0x0) {
                    _0x3451c7 -= 0x8;
                    return;
                }
                if (_0x5bddc2 < 0xa) {
                    if (0x8 === _0x5bddc2)
                        return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x345e58, _0x3c472d, _0x285eee, _0x467e59);
                    {
                        let _0x367adc = _0x442690[_0x3451c7++];
                        if ((0x80 & _0x367adc) > 0x0) {
                            _0x3451c7 -= 0x9;
                            return;
                        }
                        return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x345e58, _0x3c472d, _0x285eee, _0x467e59, _0x367adc);
                    }
                }
                if (_0x5bddc2 < 0xc) {
                    let _0x3b0569 = _0x442690[_0x3451c7++], _0x26e7e5 = _0x442690[_0x3451c7++];
                    if ((0x80 & _0x3b0569) > 0x0 || (0x80 & _0x26e7e5) > 0x0) {
                        _0x3451c7 -= 0xa;
                        return;
                    }
                    if (_0x5bddc2 < 0xb)
                        return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x345e58, _0x3c472d, _0x285eee, _0x467e59, _0x3b0569, _0x26e7e5);
                    let _0x33665 = _0x442690[_0x3451c7++];
                    if ((0x80 & _0x33665) > 0x0) {
                        _0x3451c7 -= 0xb;
                        return;
                    }
                    return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x345e58, _0x3c472d, _0x285eee, _0x467e59, _0x3b0569, _0x26e7e5, _0x33665);
                }
                {
                    let _0x507e55 = _0x442690[_0x3451c7++], _0x4e3f32 = _0x442690[_0x3451c7++], _0x284c5f = _0x442690[_0x3451c7++], _0x5c5f01 = _0x442690[_0x3451c7++];
                    if ((0x80 & _0x507e55) > 0x0 || (0x80 & _0x4e3f32) > 0x0 || (0x80 & _0x284c5f) > 0x0 || (0x80 & _0x5c5f01) > 0x0) {
                        _0x3451c7 -= 0xc;
                        return;
                    }
                    if (_0x5bddc2 < 0xe) {
                        if (0xc === _0x5bddc2)
                            return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x345e58, _0x3c472d, _0x285eee, _0x467e59, _0x507e55, _0x4e3f32, _0x284c5f, _0x5c5f01);
                        {
                            let _0x436802 = _0x442690[_0x3451c7++];
                            if ((0x80 & _0x436802) > 0x0) {
                                _0x3451c7 -= 0xd;
                                return;
                            }
                            return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x345e58, _0x3c472d, _0x285eee, _0x467e59, _0x507e55, _0x4e3f32, _0x284c5f, _0x5c5f01, _0x436802);
                        }
                    }
                    {
                        let _0x106dc6 = _0x442690[_0x3451c7++], _0x4fec7e = _0x442690[_0x3451c7++];
                        if ((0x80 & _0x106dc6) > 0x0 || (0x80 & _0x4fec7e) > 0x0) {
                            _0x3451c7 -= 0xe;
                            return;
                        }
                        if (_0x5bddc2 < 0xf)
                            return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x345e58, _0x3c472d, _0x285eee, _0x467e59, _0x507e55, _0x4e3f32, _0x284c5f, _0x5c5f01, _0x106dc6, _0x4fec7e);
                        let _0x20654e = _0x442690[_0x3451c7++];
                        if ((0x80 & _0x20654e) > 0x0) {
                            _0x3451c7 -= 0xf;
                            return;
                        }
                        return _0x530392(_0xd81bda, _0x57c031, _0x144135, _0x25626b, _0x345e58, _0x3c472d, _0x285eee, _0x467e59, _0x507e55, _0x4e3f32, _0x284c5f, _0x5c5f01, _0x106dc6, _0x4fec7e, _0x20654e);
                    }
                }
            }
        }
    }
    function _0x3e8c88() {
        let _0x15d197 = _0x442690[_0x3451c7++], _0x5db239;
        if (_0x15d197 < 0xc0)
            _0x5db239 = _0x15d197 - 0xa0;
        else
            switch (_0x15d197) {
            case 0xd9:
                _0x5db239 = _0x442690[_0x3451c7++];
                break;
            case 0xda:
                _0x5db239 = _0x482866['getUint16'](_0x3451c7), _0x3451c7 += 0x2;
                break;
            case 0xdb:
                _0x5db239 = _0x482866['getUint32'](_0x3451c7), _0x3451c7 += 0x4;
                break;
            default:
                throw Error('Expected\x20string');
            }
        return _0x4c7ad6(_0x5db239);
    }
    function _0x64b448(_0x2c377a) {
        return _0x1b3018['copyBuffers'] ? Uint8Array['prototype']['slice']['call'](_0x442690, _0x3451c7, _0x3451c7 += _0x2c377a) : _0x442690['subarray'](_0x3451c7, _0x3451c7 += _0x2c377a);
    }
    function _0x46549f(_0x54ac82) {
        let _0x5ad3b1 = _0x442690[_0x3451c7++];
        if (_0x2002fb[_0x5ad3b1]) {
            let _0xd41a29;
            return _0x2002fb[_0x5ad3b1](_0x442690['subarray'](_0x3451c7, _0xd41a29 = _0x3451c7 += _0x54ac82), _0x1efaa1 => {
                _0x3451c7 = _0x1efaa1;
                try {
                    return _0x4ee223();
                } finally {
                    _0x3451c7 = _0xd41a29;
                }
            });
        }
        throw Error('Unknown\x20extension\x20type\x20' + _0x5ad3b1);
    }
    var _0x3fd294 = Array(0x1000);
    function _0x5531d3() {
        let _0x3dae17 = _0x442690[_0x3451c7++];
        if (!(_0x3dae17 >= 0xa0) || !(_0x3dae17 < 0xc0))
            return _0x3451c7--, _0x4ee223()['toString']();
        if (_0x3dae17 -= 0xa0, _0x598c0d >= _0x3451c7)
            return _0x36f13b['slice'](_0x3451c7 - _0x4f68ad, (_0x3451c7 += _0x3dae17) - _0x4f68ad);
        if (!(0x0 == _0x598c0d && _0x171b35 < 0xb4))
            return _0x3c3f22(_0x3dae17);
        let _0x39c899 = (_0x3dae17 << 0x5 ^ (_0x3dae17 > 0x1 ? _0x482866['getUint16'](_0x3451c7) : _0x3dae17 > 0x0 ? _0x442690[_0x3451c7] : 0x0)) & 0xfff, _0x1b6ed4 = _0x3fd294[_0x39c899], _0x257b58 = _0x3451c7, _0x4e9841 = _0x3451c7 + _0x3dae17 - 0x3, _0x7f657d, _0x2025bb = 0x0;
        if (_0x1b6ed4 && _0x1b6ed4['bytes'] == _0x3dae17) {
            for (; _0x257b58 < _0x4e9841;) {
                if ((_0x7f657d = _0x482866['getUint32'](_0x257b58)) != _0x1b6ed4[_0x2025bb++]) {
                    _0x257b58 = 0x70000000;
                    break;
                }
                _0x257b58 += 0x4;
            }
            for (_0x4e9841 += 0x3; _0x257b58 < _0x4e9841;)
                if ((_0x7f657d = _0x442690[_0x257b58++]) != _0x1b6ed4[_0x2025bb++]) {
                    _0x257b58 = 0x70000000;
                    break;
                }
            if (_0x257b58 === _0x4e9841)
                return _0x3451c7 = _0x257b58, _0x1b6ed4['string'];
            _0x4e9841 -= 0x3, _0x257b58 = _0x3451c7;
        }
        for (_0x1b6ed4 = [], _0x3fd294[_0x39c899] = _0x1b6ed4, _0x1b6ed4['bytes'] = _0x3dae17; _0x257b58 < _0x4e9841;)
            _0x7f657d = _0x482866['getUint32'](_0x257b58), _0x1b6ed4['push'](_0x7f657d), _0x257b58 += 0x4;
        for (_0x4e9841 += 0x3; _0x257b58 < _0x4e9841;)
            _0x7f657d = _0x442690[_0x257b58++], _0x1b6ed4['push'](_0x7f657d);
        let _0x413e4c = _0x3dae17 < 0x10 ? _0x4d0b1f(_0x3dae17) : _0x158f83(_0x3dae17);
        return null != _0x413e4c ? _0x1b6ed4['string'] = _0x413e4c : _0x1b6ed4['string'] = _0x3c3f22(_0x3dae17);
    }
    let _0x372a9b = (_0x4abdf0, _0x174f47) => {
        let _0x41d576 = _0x4ee223()['map'](_0x240ba5 => _0x240ba5['toString']()), _0x8d4c1e = _0x4abdf0;
        void 0x0 !== _0x174f47 && (_0x4abdf0 = _0x4abdf0 < 0x20 ? -((_0x174f47 << 0x5) + _0x4abdf0) : (_0x174f47 << 0x5) + _0x4abdf0, _0x41d576['highByte'] = _0x174f47);
        let _0x7e5295 = _0x1cb945[_0x4abdf0];
        return _0x7e5295 && (_0x7e5295['isShared'] || _0x215603) && ((_0x1cb945['restoreStructures'] || (_0x1cb945['restoreStructures'] = []))[_0x4abdf0] = _0x7e5295), _0x1cb945[_0x4abdf0] = _0x41d576, _0x41d576['read'] = _0x536fbe(_0x41d576, _0x8d4c1e), _0x41d576['read']();
    };
    _0x2002fb[0x0] = () => {
    }, _0x2002fb[0x0]['noBuffer'] = !0x0;
    let _0xea1b1 = {
        'Error': Error,
        'TypeError': TypeError,
        'ReferenceError': ReferenceError
    };
    _0x2002fb[0x65] = () => {
        let _0x248888 = _0x4ee223();
        return (_0xea1b1[_0x248888[0x0]] || Error)(_0x248888[0x1]);
    }, _0x2002fb[0x69] = _0x483ea2 => {
        let _0x19e6bf = _0x482866['getUint32'](_0x3451c7 - 0x4);
        _0x45cf5a || (_0x45cf5a = new Map());
        let _0x4d8226 = _0x442690[_0x3451c7], _0x1cd5ee;
        _0x1cd5ee = _0x4d8226 >= 0x90 && _0x4d8226 < 0xa0 || 0xdc == _0x4d8226 || 0xdd == _0x4d8226 ? [] : {};
        let _0x3a1186 = { 'target': _0x1cd5ee };
        _0x45cf5a['set'](_0x19e6bf, _0x3a1186);
        let _0x21f0b5 = _0x4ee223();
        return _0x3a1186['used'] ? Object['assign'](_0x1cd5ee, _0x21f0b5) : (_0x3a1186['target'] = _0x21f0b5, _0x21f0b5);
    }, _0x2002fb[0x70] = _0x5f18bf => {
        let _0x14c1a7 = _0x482866['getUint32'](_0x3451c7 - 0x4), _0x762f80 = _0x45cf5a['get'](_0x14c1a7);
        return _0x762f80['used'] = !0x0, _0x762f80['target'];
    }, _0x2002fb[0x73] = () => new Set(_0x4ee223());
    let _0xab0995 = [
            'Int8',
            'Uint8',
            'Uint8Clamped',
            'Int16',
            'Uint16',
            'Int32',
            'Uint32',
            'Float32',
            'Float64',
            'BigInt64',
            'BigUint64'
        ]['map'](_0xb99d2e => _0xb99d2e + 'Array'), _0x181d21 = 'object' == typeof globalThis ? globalThis : window;
    _0x2002fb[0x74] = _0x438adf => {
        let _0x330271 = _0x438adf[0x0], _0x17e9b7 = _0xab0995[_0x330271];
        if (!_0x17e9b7)
            throw Error('Could\x20not\x20find\x20typed\x20array\x20for\x20code\x20' + _0x330271);
        return new _0x181d21[_0x17e9b7](Uint8Array['prototype']['slice']['call'](_0x438adf, 0x1)['buffer']);
    }, _0x2002fb[0x78] = () => {
        let _0x5bfbb5 = _0x4ee223();
        return RegExp(_0x5bfbb5[0x0], _0x5bfbb5[0x1]);
    };
    let _0x3a6726 = [];
    function _0x1dffd7(_0x58a5cc) {
        let _0x6f087 = _0x171b35, _0x112325 = _0x3451c7, _0x5f0913 = _0x4f68ad, _0x10b5e6 = _0x598c0d, _0x201f07 = _0x36f13b, _0x4df0e5 = _0x45cf5a, _0x4249f1 = _0x4c3cfa, _0x31647b = new Uint8Array(_0x442690['slice'](0x0, _0x171b35)), _0x464a1d = _0x1cb945, _0xc6fb28 = _0x1cb945['slice'](0x0, _0x1cb945['length']), _0x59294d = _0x1b3018, _0x45a81b = _0x215603, _0x5647b0 = _0x58a5cc();
        return _0x171b35 = _0x6f087, _0x3451c7 = _0x112325, _0x4f68ad = _0x5f0913, _0x598c0d = _0x10b5e6, _0x36f13b = _0x201f07, _0x45cf5a = _0x4df0e5, _0x4c3cfa = _0x4249f1, _0x442690 = _0x31647b, _0x215603 = _0x45a81b, (_0x1cb945 = _0x464a1d)['splice'](0x0, _0x1cb945['length'], ..._0xc6fb28), _0x1b3018 = _0x59294d, _0x482866 = new DataView(_0x442690['buffer'], _0x442690['byteOffset'], _0x442690['byteLength']), _0x5647b0;
    }
    function _0x1a80b5() {
        _0x442690 = null, _0x45cf5a = null, _0x1cb945 = null;
    }
    _0x2002fb[0x62] = _0x2b888d => {
        let _0x4bb9f7 = (_0x2b888d[0x0] << 0x18) + (_0x2b888d[0x1] << 0x10) + (_0x2b888d[0x2] << 0x8) + _0x2b888d[0x3], _0x2693df = _0x3451c7;
        return _0x3451c7 += _0x4bb9f7 - _0x2b888d['length'], _0x4c3cfa = _0x3a6726, (_0x4c3cfa = [
            _0x3e8c88(),
            _0x3e8c88()
        ])['position0'] = 0x0, _0x4c3cfa['position1'] = 0x0, _0x4c3cfa['postBundlePosition'] = _0x3451c7, _0x3451c7 = _0x2693df, _0x4ee223();
    }, _0x2002fb[0xff] = _0x1a45d4 => 0x4 == _0x1a45d4['length'] ? new Date((0x1000000 * _0x1a45d4[0x0] + (_0x1a45d4[0x1] << 0x10) + (_0x1a45d4[0x2] << 0x8) + _0x1a45d4[0x3]) * 0x3e8) : 0x8 == _0x1a45d4['length'] ? new Date(((_0x1a45d4[0x0] << 0x16) + (_0x1a45d4[0x1] << 0xe) + (_0x1a45d4[0x2] << 0x6) + (_0x1a45d4[0x3] >> 0x2)) / 0xf4240 + ((0x3 & _0x1a45d4[0x3]) * 0x100000000 + 0x1000000 * _0x1a45d4[0x4] + (_0x1a45d4[0x5] << 0x10) + (_0x1a45d4[0x6] << 0x8) + _0x1a45d4[0x7]) * 0x3e8) : 0xc == _0x1a45d4['length'] ? new Date(((_0x1a45d4[0x0] << 0x18) + (_0x1a45d4[0x1] << 0x10) + (_0x1a45d4[0x2] << 0x8) + _0x1a45d4[0x3]) / 0xf4240 + ((0x80 & _0x1a45d4[0x4] ? -0x1000000000000 : 0x0) + 0x10000000000 * _0x1a45d4[0x6] + 0x100000000 * _0x1a45d4[0x7] + 0x1000000 * _0x1a45d4[0x8] + (_0x1a45d4[0x9] << 0x10) + (_0x1a45d4[0xa] << 0x8) + _0x1a45d4[0xb]) * 0x3e8) : new Date('invalid');
    let _0x55843b = Array(0x93);
    for (let _0x1084f8 = 0x0; _0x1084f8 < 0x100; _0x1084f8++)
        _0x55843b[_0x1084f8] = +('1e' + Math['floor'](45.15 - 0.30103 * _0x1084f8));
    var _0x4c075f = new _0x53cda1({ 'useRecords': !0x1 });
    let _0x34136b = _0x4c075f['unpack'], _0x4e964c = _0x4c075f['unpackMultiple'], _0x663249 = _0x4c075f['unpack'], _0x49ed73 = {
            'NEVER': 0x0,
            'ALWAYS': 0x1,
            'DECIMAL_ROUND': 0x3,
            'DECIMAL_FIT': 0x4
        }, _0x3a9404 = new Float32Array(0x1), _0x18a4ca = new Uint8Array(_0x3a9404['buffer'], 0x0, 0x4), _0x1d8143;
    try {
        _0x1d8143 = new TextEncoder();
    } catch (_0x49f69f) {
    }
    let _0x4095a7, _0x8d810a, _0x22cdd8 = 'undefined' != typeof Buffer, _0x40a4b2 = _0x22cdd8 ? function (_0x313bbb) {
            return Buffer['allocUnsafeSlow'](_0x313bbb);
        } : Uint8Array, _0x3c0a70 = _0x22cdd8 ? Buffer : Uint8Array, _0x3fe174 = _0x22cdd8 ? 0x100000000 : 0x7fd00000, _0x1ea234, _0x2c3b63, _0x599f88, _0x1097f3 = 0x0, _0x5dfb44, _0x5d0359 = null, _0x102004, _0x31cef3 = /[\u0080-\uFFFF]/, _0x268553 = Symbol('record-id');
    class _0x501b05 extends _0x53cda1 {
        constructor(_0x59b06) {
            super(_0x59b06), this['offset'] = 0x0;
            let _0x345b79, _0x329bc9, _0x4c2e35, _0x320970, _0x1bcc03 = _0x3c0a70['prototype']['utf8Write'] ? function (_0x897ea6, _0x4a615a) {
                    return _0x1ea234['utf8Write'](_0x897ea6, _0x4a615a, 0xffffffff);
                } : !!_0x1d8143 && !!_0x1d8143['encodeInto'] && function (_0x484837, _0x2c871d) {
                    return _0x1d8143['encodeInto'](_0x484837, _0x1ea234['subarray'](_0x2c871d))['written'];
                }, _0x472872 = this;
            _0x59b06 || (_0x59b06 = {});
            let _0x14752b = _0x59b06 && _0x59b06['sequential'], _0x2cd488 = _0x59b06['structures'] || _0x59b06['saveStructures'], _0x264b89 = _0x59b06['maxSharedStructures'];
            if (null == _0x264b89 && (_0x264b89 = _0x2cd488 ? 0x20 : 0x0), _0x264b89 > 0x1fe0)
                throw Error('Maximum\x20maxSharedStructure\x20is\x208160');
            _0x59b06['structuredClone'] && void 0x0 == _0x59b06['moreTypes'] && (this['moreTypes'] = !0x0);
            let _0x17867f = _0x59b06['maxOwnStructures'];
            null == _0x17867f && (_0x17867f = _0x2cd488 ? 0x20 : 0x40), this['structures'] || !0x1 == _0x59b06['useRecords'] || (this['structures'] = []);
            let _0x3fe125 = _0x264b89 > 0x20 || _0x17867f + _0x264b89 > 0x40, _0x2aebe1 = _0x264b89 + 0x40, _0x28b49f = _0x264b89 + _0x17867f + 0x40;
            if (_0x28b49f > 0x2040)
                throw Error('Maximum\x20maxSharedStructure\x20+\x20maxOwnStructure\x20is\x208192');
            let _0x5457de = [], _0x4a1bf0 = 0x0, _0xb82aac = 0x0;
            this['pack'] = this['encode'] = function (_0x31705e, _0x21ba5f) {
                if (_0x1ea234 || (_0x599f88 = (_0x1ea234 = new _0x40a4b2(0x2000))['dataView'] || (_0x1ea234['dataView'] = new DataView(_0x1ea234['buffer'], 0x0, 0x2000)), _0x1097f3 = 0x0), (_0x5dfb44 = _0x1ea234['length'] - 0xa) - _0x1097f3 < 0x800 ? (_0x599f88 = (_0x1ea234 = new _0x40a4b2(_0x1ea234['length']))['dataView'] || (_0x1ea234['dataView'] = new DataView(_0x1ea234['buffer'], 0x0, _0x1ea234['length'])), _0x5dfb44 = _0x1ea234['length'] - 0xa, _0x1097f3 = 0x0) : _0x1097f3 = _0x1097f3 + 0x7 & 0x7ffffff8, _0x345b79 = _0x1097f3, _0x21ba5f & _0x4b6592 && (_0x1097f3 += 0xff & _0x21ba5f), _0x320970 = _0x472872['structuredClone'] ? new Map() : null, _0x472872['bundleStrings'] && 'string' != typeof _0x31705e ? (_0x5d0359 = [])['size'] = 0x1 / 0x0 : _0x5d0359 = null, _0x4c2e35 = _0x472872['structures']) {
                    _0x4c2e35['uninitialized'] && (_0x4c2e35 = _0x472872['_mergeStructures'](_0x472872['getStructures']()));
                    let _0x4b94b1 = _0x4c2e35['sharedLength'] || 0x0;
                    if (_0x4b94b1 > _0x264b89)
                        throw Error('Shared\x20structures\x20is\x20larger\x20than\x20maximum\x20shared\x20structures,\x20try\x20increasing\x20maxSharedStructures\x20to\x20' + _0x4c2e35['sharedLength']);
                    if (!_0x4c2e35['transitions']) {
                        _0x4c2e35['transitions'] = Object['create'](null);
                        for (let _0x2dfc34 = 0x0; _0x2dfc34 < _0x4b94b1; _0x2dfc34++) {
                            let _0xe6d330 = _0x4c2e35[_0x2dfc34];
                            if (!_0xe6d330)
                                continue;
                            let _0x384e39, _0x12f18b = _0x4c2e35['transitions'];
                            for (let _0x706d33 = 0x0, _0xb754c5 = _0xe6d330['length']; _0x706d33 < _0xb754c5; _0x706d33++) {
                                let _0x42abe9 = _0xe6d330[_0x706d33];
                                (_0x384e39 = _0x12f18b[_0x42abe9]) || (_0x384e39 = _0x12f18b[_0x42abe9] = Object['create'](null)), _0x12f18b = _0x384e39;
                            }
                            _0x12f18b[_0x268553] = _0x2dfc34 + 0x40;
                        }
                        this['lastNamedStructuresLength'] = _0x4b94b1;
                    }
                    _0x14752b || (_0x4c2e35['nextId'] = _0x4b94b1 + 0x40);
                }
                _0x329bc9 && (_0x329bc9 = !0x1);
                try {
                    _0x472872['randomAccessStructure'] && _0x31705e && _0x31705e['constructor'] && _0x31705e['constructor'] === Object ? _0x35f1e7(_0x31705e) : _0x3bc60c(_0x31705e);
                    let _0x1bc100 = _0x5d0359;
                    if (_0x5d0359 && _0x12909e(_0x345b79, _0x3bc60c, 0x0), _0x320970 && _0x320970['idsToInsert']) {
                        let _0x1ae65b = _0x320970['idsToInsert']['sort']((_0x47bfad, _0x1bf2ee) => _0x47bfad['offset'] > _0x1bf2ee['offset'] ? 0x1 : -0x1), _0x57bafa = _0x1ae65b['length'], _0x335654 = -0x1;
                        for (; _0x1bc100 && _0x57bafa > 0x0;) {
                            let _0x18af85 = _0x1ae65b[--_0x57bafa]['offset'] + _0x345b79;
                            _0x18af85 < _0x1bc100['stringsPosition'] + _0x345b79 && -0x1 === _0x335654 && (_0x335654 = 0x0), _0x18af85 > _0x1bc100['position'] + _0x345b79 ? _0x335654 >= 0x0 && (_0x335654 += 0x6) : (_0x335654 >= 0x0 && (_0x599f88['setUint32'](_0x1bc100['position'] + _0x345b79, _0x599f88['getUint32'](_0x1bc100['position'] + _0x345b79) + _0x335654), _0x335654 = -0x1), _0x1bc100 = _0x1bc100['previous'], _0x57bafa++);
                        }
                        _0x335654 >= 0x0 && _0x1bc100 && _0x599f88['setUint32'](_0x1bc100['position'] + _0x345b79, _0x599f88['getUint32'](_0x1bc100['position'] + _0x345b79) + _0x335654), (_0x1097f3 += 0x6 * _0x1ae65b['length']) > _0x5dfb44 && _0xcb2276(_0x1097f3), _0x472872['offset'] = _0x1097f3;
                        let _0x5bc552 = function _0x3d2955(_0xdf30d2, _0x43a422) {
                            let _0x24cea4, _0x48655a = 0x6 * _0x43a422['length'], _0x4a55ec = _0xdf30d2['length'] - _0x48655a;
                            for (; _0x24cea4 = _0x43a422['pop']();) {
                                let _0x30be53 = _0x24cea4['offset'], _0x335fbc = _0x24cea4['id'];
                                _0xdf30d2['copyWithin'](_0x30be53 + _0x48655a, _0x30be53, _0x4a55ec);
                                let _0x15826a = _0x30be53 + (_0x48655a -= 0x6);
                                _0xdf30d2[_0x15826a++] = 0xd6, _0xdf30d2[_0x15826a++] = 0x69, _0xdf30d2[_0x15826a++] = _0x335fbc >> 0x18, _0xdf30d2[_0x15826a++] = _0x335fbc >> 0x10 & 0xff, _0xdf30d2[_0x15826a++] = _0x335fbc >> 0x8 & 0xff, _0xdf30d2[_0x15826a++] = 0xff & _0x335fbc, _0x4a55ec = _0x30be53;
                            }
                            return _0xdf30d2;
                        }(_0x1ea234['subarray'](_0x345b79, _0x1097f3), _0x1ae65b);
                        return _0x320970 = null, _0x5bc552;
                    }
                    if (_0x472872['offset'] = _0x1097f3, _0x21ba5f & _0x54d14c)
                        return _0x1ea234['start'] = _0x345b79, _0x1ea234['end'] = _0x1097f3, _0x1ea234;
                    return _0x1ea234['subarray'](_0x345b79, _0x1097f3);
                } finally {
                    if (_0x4c2e35 && (_0x367e5b(), _0x329bc9 && _0x472872['saveStructures'])) {
                        var _0x1895f6, _0x1a65d1;
                        let _0xa72fa4 = _0x4c2e35['sharedLength'] || 0x0, _0x5aaa91 = _0x1ea234['subarray'](_0x345b79, _0x1097f3), _0x262b46 = (_0x1895f6 = _0x4c2e35, _0x1a65d1 = _0x472872, _0x1895f6['isCompatible'] = _0xa63b47 => {
                                let _0x464518 = !_0xa63b47 || (_0x1a65d1['lastNamedStructuresLength'] || 0x0) === _0xa63b47['length'];
                                return _0x464518 || _0x1a65d1['_mergeStructures'](_0xa63b47), _0x464518;
                            }, _0x1895f6);
                        if (!0x1 === _0x472872['saveStructures'](_0x262b46, _0x262b46['isCompatible']))
                            return _0x472872['pack'](_0x31705e, _0x21ba5f);
                        return _0x472872['lastNamedStructuresLength'] = _0xa72fa4, _0x5aaa91;
                    }
                    _0x21ba5f & _0x136fca && (_0x1097f3 = _0x345b79);
                }
            };
            let _0x367e5b = () => {
                    _0xb82aac < 0xa && _0xb82aac++;
                    let _0x51cfc1 = _0x4c2e35['sharedLength'] || 0x0;
                    if (_0x4c2e35['length'] > _0x51cfc1 && !_0x14752b && (_0x4c2e35['length'] = _0x51cfc1), _0x4a1bf0 > 0x2710)
                        _0x4c2e35['transitions'] = null, _0xb82aac = 0x0, _0x4a1bf0 = 0x0, _0x5457de['length'] > 0x0 && (_0x5457de = []);
                    else {
                        if (_0x5457de['length'] > 0x0 && !_0x14752b) {
                            for (let _0x112bd5 = 0x0, _0x3e9e60 = _0x5457de['length']; _0x112bd5 < _0x3e9e60; _0x112bd5++)
                                _0x5457de[_0x112bd5][_0x268553] = 0x0;
                            _0x5457de = [];
                        }
                    }
                }, _0x4d65b9 = _0x534aa6 => {
                    var _0x1f8bd3 = _0x534aa6['length'];
                    _0x1f8bd3 < 0x10 ? _0x1ea234[_0x1097f3++] = 0x90 | _0x1f8bd3 : _0x1f8bd3 < 0x10000 ? (_0x1ea234[_0x1097f3++] = 0xdc, _0x1ea234[_0x1097f3++] = _0x1f8bd3 >> 0x8, _0x1ea234[_0x1097f3++] = 0xff & _0x1f8bd3) : (_0x1ea234[_0x1097f3++] = 0xdd, _0x599f88['setUint32'](_0x1097f3, _0x1f8bd3), _0x1097f3 += 0x4);
                    for (let _0x41967d = 0x0; _0x41967d < _0x1f8bd3; _0x41967d++)
                        _0x3bc60c(_0x534aa6[_0x41967d]);
                }, _0x3bc60c = _0x387220 => {
                    _0x1097f3 > _0x5dfb44 && (_0x1ea234 = _0xcb2276(_0x1097f3));
                    var _0x1aacb6, _0x3c0dc1 = typeof _0x387220;
                    if ('string' === _0x3c0dc1) {
                        let _0x53faf3 = _0x387220['length'];
                        if (_0x5d0359 && _0x53faf3 >= 0x4 && _0x53faf3 < 0x1000) {
                            if ((_0x5d0359['size'] += _0x53faf3) > 0x5500) {
                                let _0x409f0e, _0x2c8617 = (_0x5d0359[0x0] ? 0x3 * _0x5d0359[0x0]['length'] + _0x5d0359[0x1]['length'] : 0x0) + 0xa;
                                _0x1097f3 + _0x2c8617 > _0x5dfb44 && (_0x1ea234 = _0xcb2276(_0x1097f3 + _0x2c8617));
                                let _0xe2484d;
                                _0x5d0359['position'] ? (_0xe2484d = _0x5d0359, _0x1ea234[_0x1097f3] = 0xc8, _0x1097f3 += 0x3, _0x1ea234[_0x1097f3++] = 0x62, _0x409f0e = _0x1097f3 - _0x345b79, _0x1097f3 += 0x4, _0x12909e(_0x345b79, _0x3bc60c, 0x0), _0x599f88['setUint16'](_0x409f0e + _0x345b79 - 0x3, _0x1097f3 - _0x345b79 - _0x409f0e)) : (_0x1ea234[_0x1097f3++] = 0xd6, _0x1ea234[_0x1097f3++] = 0x62, _0x409f0e = _0x1097f3 - _0x345b79, _0x1097f3 += 0x4), (_0x5d0359 = [
                                    '',
                                    ''
                                ])['previous'] = _0xe2484d, _0x5d0359['size'] = 0x0, _0x5d0359['position'] = _0x409f0e;
                            }
                            let _0x5b6532 = _0x31cef3['test'](_0x387220);
                            _0x5d0359[_0x5b6532 ? 0x0 : 0x1] += _0x387220, _0x1ea234[_0x1097f3++] = 0xc1, _0x3bc60c(_0x5b6532 ? -_0x53faf3 : _0x53faf3);
                            return;
                        }
                        let _0x13162f;
                        _0x13162f = _0x53faf3 < 0x20 ? 0x1 : _0x53faf3 < 0x100 ? 0x2 : _0x53faf3 < 0x10000 ? 0x3 : 0x5;
                        let _0x1fa9b6 = 0x3 * _0x53faf3;
                        if (_0x1097f3 + _0x1fa9b6 > _0x5dfb44 && (_0x1ea234 = _0xcb2276(_0x1097f3 + _0x1fa9b6)), _0x53faf3 < 0x40 || !_0x1bcc03) {
                            let _0x2688db, _0x56fda6, _0x31ef29, _0x176f2d = _0x1097f3 + _0x13162f;
                            for (_0x2688db = 0x0; _0x2688db < _0x53faf3; _0x2688db++)
                                (_0x56fda6 = _0x387220['charCodeAt'](_0x2688db)) < 0x80 ? _0x1ea234[_0x176f2d++] = _0x56fda6 : _0x56fda6 < 0x800 ? (_0x1ea234[_0x176f2d++] = _0x56fda6 >> 0x6 | 0xc0, _0x1ea234[_0x176f2d++] = 0x3f & _0x56fda6 | 0x80) : (0xfc00 & _0x56fda6) == 0xd800 && (0xfc00 & (_0x31ef29 = _0x387220['charCodeAt'](_0x2688db + 0x1))) == 0xdc00 ? (_0x56fda6 = 0x10000 + ((0x3ff & _0x56fda6) << 0xa) + (0x3ff & _0x31ef29), _0x2688db++, _0x1ea234[_0x176f2d++] = _0x56fda6 >> 0x12 | 0xf0, _0x1ea234[_0x176f2d++] = _0x56fda6 >> 0xc & 0x3f | 0x80, _0x1ea234[_0x176f2d++] = _0x56fda6 >> 0x6 & 0x3f | 0x80, _0x1ea234[_0x176f2d++] = 0x3f & _0x56fda6 | 0x80) : (_0x1ea234[_0x176f2d++] = _0x56fda6 >> 0xc | 0xe0, _0x1ea234[_0x176f2d++] = _0x56fda6 >> 0x6 & 0x3f | 0x80, _0x1ea234[_0x176f2d++] = 0x3f & _0x56fda6 | 0x80);
                            _0x1aacb6 = _0x176f2d - _0x1097f3 - _0x13162f;
                        } else
                            _0x1aacb6 = _0x1bcc03(_0x387220, _0x1097f3 + _0x13162f);
                        _0x1aacb6 < 0x20 ? _0x1ea234[_0x1097f3++] = 0xa0 | _0x1aacb6 : _0x1aacb6 < 0x100 ? (_0x13162f < 0x2 && _0x1ea234['copyWithin'](_0x1097f3 + 0x2, _0x1097f3 + 0x1, _0x1097f3 + 0x1 + _0x1aacb6), _0x1ea234[_0x1097f3++] = 0xd9, _0x1ea234[_0x1097f3++] = _0x1aacb6) : _0x1aacb6 < 0x10000 ? (_0x13162f < 0x3 && _0x1ea234['copyWithin'](_0x1097f3 + 0x3, _0x1097f3 + 0x2, _0x1097f3 + 0x2 + _0x1aacb6), _0x1ea234[_0x1097f3++] = 0xda, _0x1ea234[_0x1097f3++] = _0x1aacb6 >> 0x8, _0x1ea234[_0x1097f3++] = 0xff & _0x1aacb6) : (_0x13162f < 0x5 && _0x1ea234['copyWithin'](_0x1097f3 + 0x5, _0x1097f3 + 0x3, _0x1097f3 + 0x3 + _0x1aacb6), _0x1ea234[_0x1097f3++] = 0xdb, _0x599f88['setUint32'](_0x1097f3, _0x1aacb6), _0x1097f3 += 0x4), _0x1097f3 += _0x1aacb6;
                    } else {
                        if ('number' === _0x3c0dc1) {
                            if (_0x387220 >>> 0x0 === _0x387220)
                                _0x387220 < 0x20 || _0x387220 < 0x80 && !0x1 === this['useRecords'] || _0x387220 < 0x40 && !this['randomAccessStructure'] ? _0x1ea234[_0x1097f3++] = _0x387220 : _0x387220 < 0x100 ? (_0x1ea234[_0x1097f3++] = 0xcc, _0x1ea234[_0x1097f3++] = _0x387220) : _0x387220 < 0x10000 ? (_0x1ea234[_0x1097f3++] = 0xcd, _0x1ea234[_0x1097f3++] = _0x387220 >> 0x8, _0x1ea234[_0x1097f3++] = 0xff & _0x387220) : (_0x1ea234[_0x1097f3++] = 0xce, _0x599f88['setUint32'](_0x1097f3, _0x387220), _0x1097f3 += 0x4);
                            else {
                                if (_0x387220 >> 0x0 === _0x387220)
                                    _0x387220 >= -0x20 ? _0x1ea234[_0x1097f3++] = 0x100 + _0x387220 : _0x387220 >= -0x80 ? (_0x1ea234[_0x1097f3++] = 0xd0, _0x1ea234[_0x1097f3++] = _0x387220 + 0x100) : _0x387220 >= -0x8000 ? (_0x1ea234[_0x1097f3++] = 0xd1, _0x599f88['setInt16'](_0x1097f3, _0x387220), _0x1097f3 += 0x2) : (_0x1ea234[_0x1097f3++] = 0xd2, _0x599f88['setInt32'](_0x1097f3, _0x387220), _0x1097f3 += 0x4);
                                else {
                                    let _0x4ea7b7;
                                    if ((_0x4ea7b7 = this['useFloat32']) > 0x0 && _0x387220 < 0x100000000 && _0x387220 >= -0x80000000) {
                                        _0x1ea234[_0x1097f3++] = 0xca, _0x599f88['setFloat32'](_0x1097f3, _0x387220);
                                        let _0x2c3aa4;
                                        if (_0x4ea7b7 < 0x4 || (_0x2c3aa4 = _0x387220 * _0x55843b[(0x7f & _0x1ea234[_0x1097f3]) << 0x1 | _0x1ea234[_0x1097f3 + 0x1] >> 0x7]) >> 0x0 === _0x2c3aa4) {
                                            _0x1097f3 += 0x4;
                                            return;
                                        }
                                        _0x1097f3--;
                                    }
                                    _0x1ea234[_0x1097f3++] = 0xcb, _0x599f88['setFloat64'](_0x1097f3, _0x387220), _0x1097f3 += 0x8;
                                }
                            }
                        } else {
                            if ('object' === _0x3c0dc1 || 'function' === _0x3c0dc1) {
                                if (_0x387220) {
                                    if (_0x320970) {
                                        let _0x317777 = _0x320970['get'](_0x387220);
                                        if (_0x317777) {
                                            if (!_0x317777['id']) {
                                                let _0xc4e0a4 = _0x320970['idsToInsert'] || (_0x320970['idsToInsert'] = []);
                                                _0x317777['id'] = _0xc4e0a4['push'](_0x317777);
                                            }
                                            _0x1ea234[_0x1097f3++] = 0xd6, _0x1ea234[_0x1097f3++] = 0x70, _0x599f88['setUint32'](_0x1097f3, _0x317777['id']), _0x1097f3 += 0x4;
                                            return;
                                        }
                                        _0x320970['set'](_0x387220, { 'offset': _0x1097f3 - _0x345b79 });
                                    }
                                    let _0x1e7ecd = _0x387220['constructor'];
                                    if (_0x1e7ecd === Object)
                                        _0x30017a(_0x387220, !0x0);
                                    else {
                                        if (_0x1e7ecd === Array)
                                            _0x4d65b9(_0x387220);
                                        else {
                                            if (_0x1e7ecd === Map) {
                                                if (this['mapAsEmptyObject'])
                                                    _0x1ea234[_0x1097f3++] = 0x80;
                                                else {
                                                    for (let [_0x3f4eb2, _0x8f18c4] of ((_0x1aacb6 = _0x387220['size']) < 0x10 ? _0x1ea234[_0x1097f3++] = 0x80 | _0x1aacb6 : _0x1aacb6 < 0x10000 ? (_0x1ea234[_0x1097f3++] = 0xde, _0x1ea234[_0x1097f3++] = _0x1aacb6 >> 0x8, _0x1ea234[_0x1097f3++] = 0xff & _0x1aacb6) : (_0x1ea234[_0x1097f3++] = 0xdf, _0x599f88['setUint32'](_0x1097f3, _0x1aacb6), _0x1097f3 += 0x4), _0x387220))
                                                        _0x3bc60c(_0x3f4eb2), _0x3bc60c(_0x8f18c4);
                                                }
                                            } else {
                                                for (let _0x3becf8 = 0x0, _0x2581a7 = _0x4095a7['length']; _0x3becf8 < _0x2581a7; _0x3becf8++)
                                                    if (_0x387220 instanceof _0x8d810a[_0x3becf8]) {
                                                        let _0x4e5e36 = _0x4095a7[_0x3becf8];
                                                        if (_0x4e5e36['write']) {
                                                            _0x4e5e36['type'] && (_0x1ea234[_0x1097f3++] = 0xd4, _0x1ea234[_0x1097f3++] = _0x4e5e36['type'], _0x1ea234[_0x1097f3++] = 0x0);
                                                            let _0x343924 = _0x4e5e36['write']['call'](this, _0x387220);
                                                            _0x343924 === _0x387220 ? Array['isArray'](_0x387220) ? _0x4d65b9(_0x387220) : _0x30017a(_0x387220) : _0x3bc60c(_0x343924);
                                                            return;
                                                        }
                                                        let _0x4bb103 = _0x1ea234, _0xa3f20f = _0x599f88, _0x35fdb0 = _0x1097f3;
                                                        _0x1ea234 = null;
                                                        let _0xe0ad6a;
                                                        try {
                                                            _0xe0ad6a = _0x4e5e36['pack']['call'](this, _0x387220, _0xaa65c8 => (_0x1ea234 = _0x4bb103, _0x4bb103 = null, (_0x1097f3 += _0xaa65c8) > _0x5dfb44 && _0xcb2276(_0x1097f3), {
                                                                'target': _0x1ea234,
                                                                'targetView': _0x599f88,
                                                                'position': _0x1097f3 - _0xaa65c8
                                                            }), _0x3bc60c);
                                                        } finally {
                                                            _0x4bb103 && (_0x1ea234 = _0x4bb103, _0x599f88 = _0xa3f20f, _0x1097f3 = _0x35fdb0, _0x5dfb44 = _0x1ea234['length'] - 0xa);
                                                        }
                                                        _0xe0ad6a && (_0xe0ad6a['length'] + _0x1097f3 > _0x5dfb44 && _0xcb2276(_0xe0ad6a['length'] + _0x1097f3), _0x1097f3 = _0x35b3b8(_0xe0ad6a, _0x1ea234, _0x1097f3, _0x4e5e36['type']));
                                                        return;
                                                    }
                                                if (Array['isArray'](_0x387220))
                                                    _0x4d65b9(_0x387220);
                                                else {
                                                    if (_0x387220['toJSON']) {
                                                        let _0x2c0d5b = _0x387220['toJSON']();
                                                        if (_0x2c0d5b !== _0x387220)
                                                            return _0x3bc60c(_0x2c0d5b);
                                                    }
                                                    if ('function' === _0x3c0dc1)
                                                        return _0x3bc60c(this['writeFunction'] && this['writeFunction'](_0x387220));
                                                    _0x30017a(_0x387220, !_0x387220['hasOwnProperty']);
                                                }
                                            }
                                        }
                                    }
                                } else
                                    _0x1ea234[_0x1097f3++] = 0xc0;
                            } else {
                                if ('boolean' === _0x3c0dc1)
                                    _0x1ea234[_0x1097f3++] = _0x387220 ? 0xc3 : 0xc2;
                                else {
                                    if ('bigint' === _0x3c0dc1) {
                                        if (_0x387220 < BigInt(0x1) << BigInt(0x3f) && _0x387220 >= -(BigInt(0x1) << BigInt(0x3f)))
                                            _0x1ea234[_0x1097f3++] = 0xd3, _0x599f88['setBigInt64'](_0x1097f3, _0x387220);
                                        else {
                                            if (_0x387220 < BigInt(0x1) << BigInt(0x40) && _0x387220 > 0x0)
                                                _0x1ea234[_0x1097f3++] = 0xcf, _0x599f88['setBigUint64'](_0x1097f3, _0x387220);
                                            else {
                                                if (this['largeBigIntToFloat'])
                                                    _0x1ea234[_0x1097f3++] = 0xcb, _0x599f88['setFloat64'](_0x1097f3, Number(_0x387220));
                                                else
                                                    throw RangeError(_0x387220 + '\x20was\x20too\x20large\x20to\x20fit\x20in\x20MessagePack\x2064-bit\x20integer\x20format,\x20set\x20largeBigIntToFloat\x20to\x20convert\x20to\x20float-64');
                                            }
                                        }
                                        _0x1097f3 += 0x8;
                                    } else {
                                        if ('undefined' === _0x3c0dc1)
                                            this['encodeUndefinedAsNil'] ? _0x1ea234[_0x1097f3++] = 0xc0 : (_0x1ea234[_0x1097f3++] = 0xd4, _0x1ea234[_0x1097f3++] = 0x0, _0x1ea234[_0x1097f3++] = 0x0);
                                        else
                                            throw Error('Unknown\x20type:\x20' + _0x3c0dc1);
                                    }
                                }
                            }
                        }
                    }
                }, _0x32d830 = this['variableMapSize'] || this['coercibleKeyAsNumber'] ? _0x272dc2 => {
                    let _0x5ef6ff = Object['keys'](_0x272dc2), _0x72bb21 = _0x5ef6ff['length'];
                    _0x72bb21 < 0x10 ? _0x1ea234[_0x1097f3++] = 0x80 | _0x72bb21 : _0x72bb21 < 0x10000 ? (_0x1ea234[_0x1097f3++] = 0xde, _0x1ea234[_0x1097f3++] = _0x72bb21 >> 0x8, _0x1ea234[_0x1097f3++] = 0xff & _0x72bb21) : (_0x1ea234[_0x1097f3++] = 0xdf, _0x599f88['setUint32'](_0x1097f3, _0x72bb21), _0x1097f3 += 0x4);
                    let _0x156c8c;
                    if (this['coercibleKeyAsNumber'])
                        for (let _0x1d9e1 = 0x0; _0x1d9e1 < _0x72bb21; _0x1d9e1++) {
                            let _0xbb901a = Number(_0x156c8c = _0x5ef6ff[_0x1d9e1]);
                            _0x3bc60c(isNaN(_0xbb901a) ? _0x156c8c : _0xbb901a), _0x3bc60c(_0x272dc2[_0x156c8c]);
                        }
                    else {
                        for (let _0x231865 = 0x0; _0x231865 < _0x72bb21; _0x231865++)
                            _0x3bc60c(_0x156c8c = _0x5ef6ff[_0x231865]), _0x3bc60c(_0x272dc2[_0x156c8c]);
                    }
                } : (_0x5cde06, _0x39114f) => {
                    _0x1ea234[_0x1097f3++] = 0xde;
                    let _0x1691e9 = _0x1097f3 - _0x345b79;
                    _0x1097f3 += 0x2;
                    let _0x5a88e4 = 0x0;
                    for (let _0x47f8e5 in _0x5cde06)
                        (_0x39114f || _0x5cde06['hasOwnProperty'](_0x47f8e5)) && (_0x3bc60c(_0x47f8e5), _0x3bc60c(_0x5cde06[_0x47f8e5]), _0x5a88e4++);
                    _0x1ea234[_0x1691e9++ + _0x345b79] = _0x5a88e4 >> 0x8, _0x1ea234[_0x1691e9 + _0x345b79] = 0xff & _0x5a88e4;
                }, _0x3b840a = !0x1 === this['useRecords'] ? _0x32d830 : _0x59b06['progressiveRecords'] && !_0x3fe125 ? (_0x3d4cb1, _0x274753) => {
                    let _0x408212, _0xacc524 = _0x4c2e35['transitions'] || (_0x4c2e35['transitions'] = Object['create'](null)), _0x143cd0 = _0x1097f3++ - _0x345b79, _0x254885;
                    for (let _0x227d84 in _0x3d4cb1)
                        if (_0x274753 || _0x3d4cb1['hasOwnProperty'](_0x227d84)) {
                            if (_0x408212 = _0xacc524[_0x227d84])
                                _0xacc524 = _0x408212;
                            else {
                                let _0xa7ed5e = Object['keys'](_0x3d4cb1), _0x578c42 = _0xacc524;
                                _0xacc524 = _0x4c2e35['transitions'];
                                let _0x1da829 = 0x0;
                                for (let _0x335e38 = 0x0, _0x3c01f0 = _0xa7ed5e['length']; _0x335e38 < _0x3c01f0; _0x335e38++) {
                                    let _0x1589fe = _0xa7ed5e[_0x335e38];
                                    !(_0x408212 = _0xacc524[_0x1589fe]) && (_0x408212 = _0xacc524[_0x1589fe] = Object['create'](null), _0x1da829++), _0xacc524 = _0x408212;
                                }
                                _0x143cd0 + _0x345b79 + 0x1 == _0x1097f3 ? (_0x1097f3--, _0x227172(_0xacc524, _0xa7ed5e, _0x1da829)) : _0x3b5b3d(_0xacc524, _0xa7ed5e, _0x143cd0, _0x1da829), _0x254885 = !0x0, _0xacc524 = _0x578c42[_0x227d84];
                            }
                            _0x3bc60c(_0x3d4cb1[_0x227d84]);
                        }
                    if (!_0x254885) {
                        let _0x3b643d = _0xacc524[_0x268553];
                        _0x3b643d ? _0x1ea234[_0x143cd0 + _0x345b79] = _0x3b643d : _0x3b5b3d(_0xacc524, Object['keys'](_0x3d4cb1), _0x143cd0, 0x0);
                    }
                } : (_0x21d018, _0x3cc903) => {
                    let _0xdf7ec4, _0x347d4e = _0x4c2e35['transitions'] || (_0x4c2e35['transitions'] = Object['create'](null)), _0x3d1726 = 0x0;
                    for (let _0x58a791 in _0x21d018)
                        (_0x3cc903 || _0x21d018['hasOwnProperty'](_0x58a791)) && (!(_0xdf7ec4 = _0x347d4e[_0x58a791]) && (_0xdf7ec4 = _0x347d4e[_0x58a791] = Object['create'](null), _0x3d1726++), _0x347d4e = _0xdf7ec4);
                    let _0x1dca69 = _0x347d4e[_0x268553];
                    for (let _0x31b785 in (_0x1dca69 ? _0x1dca69 >= 0x60 && _0x3fe125 ? (_0x1ea234[_0x1097f3++] = (0x1f & (_0x1dca69 -= 0x60)) + 0x60, _0x1ea234[_0x1097f3++] = _0x1dca69 >> 0x5) : _0x1ea234[_0x1097f3++] = _0x1dca69 : _0x227172(_0x347d4e, _0x347d4e['__keys__'] || Object['keys'](_0x21d018), _0x3d1726), _0x21d018))
                        (_0x3cc903 || _0x21d018['hasOwnProperty'](_0x31b785)) && _0x3bc60c(_0x21d018[_0x31b785]);
                }, _0x441b43 = 'function' == typeof this['useRecords'] && this['useRecords'], _0x30017a = _0x441b43 ? (_0x3417bf, _0x49aa4b) => {
                    _0x441b43(_0x3417bf) ? _0x3b840a(_0x3417bf, _0x49aa4b) : _0x32d830(_0x3417bf, _0x49aa4b);
                } : _0x3b840a, _0xcb2276 = _0x5c874e => {
                    let _0x480ec8;
                    if (_0x5c874e > 0x1000000) {
                        if (_0x5c874e - _0x345b79 > _0x3fe174)
                            throw Error('Packed\x20buffer\x20would\x20be\x20larger\x20than\x20maximum\x20buffer\x20size');
                        _0x480ec8 = Math['min'](_0x3fe174, 0x1000 * Math['round'](Math['max']((_0x5c874e - _0x345b79) * (_0x5c874e > 0x4000000 ? 1.25 : 0x2), 0x400000) / 0x1000));
                    } else
                        _0x480ec8 = (Math['max'](_0x5c874e - _0x345b79 << 0x2, _0x1ea234['length'] - 0x1) >> 0xc) + 0x1 << 0xc;
                    let _0x29465d = new _0x40a4b2(_0x480ec8);
                    return _0x599f88 = _0x29465d['dataView'] || (_0x29465d['dataView'] = new DataView(_0x29465d['buffer'], 0x0, _0x480ec8)), _0x5c874e = Math['min'](_0x5c874e, _0x1ea234['length']), _0x1ea234['copy'] ? _0x1ea234['copy'](_0x29465d, 0x0, _0x345b79, _0x5c874e) : _0x29465d['set'](_0x1ea234['slice'](_0x345b79, _0x5c874e)), _0x1097f3 -= _0x345b79, _0x345b79 = 0x0, _0x5dfb44 = _0x29465d['length'] - 0xa, _0x1ea234 = _0x29465d;
                }, _0x227172 = (_0x9e905d, _0x3a20b2, _0x2e7a1e) => {
                    let _0x1ad8d5 = _0x4c2e35['nextId'];
                    _0x1ad8d5 || (_0x1ad8d5 = 0x40), _0x1ad8d5 < _0x2aebe1 && this['shouldShareStructure'] && !this['shouldShareStructure'](_0x3a20b2) ? ((_0x1ad8d5 = _0x4c2e35['nextOwnId']) < _0x28b49f || (_0x1ad8d5 = _0x2aebe1), _0x4c2e35['nextOwnId'] = _0x1ad8d5 + 0x1) : (_0x1ad8d5 >= _0x28b49f && (_0x1ad8d5 = _0x2aebe1), _0x4c2e35['nextId'] = _0x1ad8d5 + 0x1);
                    let _0x2b0cbe = _0x3a20b2['highByte'] = _0x1ad8d5 >= 0x60 && _0x3fe125 ? _0x1ad8d5 - 0x60 >> 0x5 : -0x1;
                    _0x9e905d[_0x268553] = _0x1ad8d5, _0x9e905d['__keys__'] = _0x3a20b2, _0x4c2e35[_0x1ad8d5 - 0x40] = _0x3a20b2, _0x1ad8d5 < _0x2aebe1 ? (_0x3a20b2['isShared'] = !0x0, _0x4c2e35['sharedLength'] = _0x1ad8d5 - 0x3f, _0x329bc9 = !0x0, _0x2b0cbe >= 0x0 ? (_0x1ea234[_0x1097f3++] = (0x1f & _0x1ad8d5) + 0x60, _0x1ea234[_0x1097f3++] = _0x2b0cbe) : _0x1ea234[_0x1097f3++] = _0x1ad8d5) : (_0x2b0cbe >= 0x0 ? (_0x1ea234[_0x1097f3++] = 0xd5, _0x1ea234[_0x1097f3++] = 0x72, _0x1ea234[_0x1097f3++] = (0x1f & _0x1ad8d5) + 0x60, _0x1ea234[_0x1097f3++] = _0x2b0cbe) : (_0x1ea234[_0x1097f3++] = 0xd4, _0x1ea234[_0x1097f3++] = 0x72, _0x1ea234[_0x1097f3++] = _0x1ad8d5), _0x2e7a1e && (_0x4a1bf0 += _0xb82aac * _0x2e7a1e), _0x5457de['length'] >= _0x17867f && (_0x5457de['shift']()[_0x268553] = 0x0), _0x5457de['push'](_0x9e905d), _0x3bc60c(_0x3a20b2));
                }, _0x3b5b3d = (_0x3e905d, _0x4c7eeb, _0x18e4db, _0x568365) => {
                    let _0x53aedd = _0x1ea234, _0x11bc06 = _0x1097f3, _0x1e7316 = _0x5dfb44, _0x5978c2 = _0x345b79;
                    _0x1ea234 = _0x2c3b63, _0x1097f3 = 0x0, _0x345b79 = 0x0, _0x1ea234 || (_0x2c3b63 = _0x1ea234 = new _0x40a4b2(0x2000)), _0x5dfb44 = _0x1ea234['length'] - 0xa, _0x227172(_0x3e905d, _0x4c7eeb, _0x568365), _0x2c3b63 = _0x1ea234;
                    let _0x1ad918 = _0x1097f3;
                    if (_0x1ea234 = _0x53aedd, _0x1097f3 = _0x11bc06, _0x5dfb44 = _0x1e7316, _0x345b79 = _0x5978c2, _0x1ad918 > 0x1) {
                        let _0x3e8032 = _0x1097f3 + _0x1ad918 - 0x1;
                        _0x3e8032 > _0x5dfb44 && _0xcb2276(_0x3e8032);
                        let _0x4ddcd2 = _0x18e4db + _0x345b79;
                        _0x1ea234['copyWithin'](_0x4ddcd2 + _0x1ad918, _0x4ddcd2 + 0x1, _0x1097f3), _0x1ea234['set'](_0x2c3b63['slice'](0x0, _0x1ad918), _0x4ddcd2), _0x1097f3 = _0x3e8032;
                    } else
                        _0x1ea234[_0x18e4db + _0x345b79] = _0x2c3b63[0x0];
                }, _0x35f1e7 = (_0xdf29a7, _0x1659b0) => {
                    let _0x56d056 = _0x102004(_0xdf29a7, _0x1ea234, _0x345b79, _0x1097f3, _0x4c2e35, _0xcb2276, (_0xa286d1, _0x1469e0, _0x25f758) => {
                        if (_0x25f758)
                            return _0x329bc9 = !0x0;
                        _0x1097f3 = _0x1469e0;
                        let _0x3d4e86 = _0x1ea234;
                        return (_0x3bc60c(_0xa286d1), _0x367e5b(), _0x3d4e86 !== _0x1ea234) ? {
                            'position': _0x1097f3,
                            'targetView': _0x599f88,
                            'target': _0x1ea234
                        } : _0x1097f3;
                    }, this);
                    if (0x0 === _0x56d056)
                        return _0x30017a(_0xdf29a7, !0x0);
                    _0x1097f3 = _0x56d056;
                };
        }
        ['useBuffer'](_0x24eb57) {
            _0x1ea234 = _0x24eb57, _0x599f88 = new DataView(_0x1ea234['buffer'], _0x1ea234['byteOffset'], _0x1ea234['byteLength']), _0x1097f3 = 0x0;
        }
        ['clearSharedData']() {
            this['structures'] && (this['structures'] = []), this['typedStructs'] && (this['typedStructs'] = []);
        }
    }
    function _0x2c5deb(_0x454d4e, _0x4506d6, _0x171344, _0x1a246f) {
        let _0x1fb51c = _0x454d4e['byteLength'];
        if (_0x1fb51c + 0x1 < 0x100) {
            var {
                target: _0x15eb14,
                position: _0x3b6dfd
            } = _0x171344(0x4 + _0x1fb51c);
            _0x15eb14[_0x3b6dfd++] = 0xc7, _0x15eb14[_0x3b6dfd++] = _0x1fb51c + 0x1;
        } else {
            if (_0x1fb51c + 0x1 < 0x10000) {
                var {
                    target: _0x15eb14,
                    position: _0x3b6dfd
                } = _0x171344(0x5 + _0x1fb51c);
                _0x15eb14[_0x3b6dfd++] = 0xc8, _0x15eb14[_0x3b6dfd++] = _0x1fb51c + 0x1 >> 0x8, _0x15eb14[_0x3b6dfd++] = _0x1fb51c + 0x1 & 0xff;
            } else {
                var {
                    target: _0x15eb14,
                    position: _0x3b6dfd,
                    targetView: _0x2492e2
                } = _0x171344(0x7 + _0x1fb51c);
                _0x15eb14[_0x3b6dfd++] = 0xc9, _0x2492e2['setUint32'](_0x3b6dfd, _0x1fb51c + 0x1), _0x3b6dfd += 0x4;
            }
        }
        _0x15eb14[_0x3b6dfd++] = 0x74, _0x15eb14[_0x3b6dfd++] = _0x4506d6, _0x15eb14['set'](new Uint8Array(_0x454d4e['buffer'], _0x454d4e['byteOffset'], _0x454d4e['byteLength']), _0x3b6dfd);
    }
    function _0x36412c(_0x5c820f, _0x766bea) {
        let _0x6f9463 = _0x5c820f['byteLength'];
        if (_0x6f9463 < 0x100) {
            var _0x3030a9, _0x3bfd89, {
                    target: _0x3030a9,
                    position: _0x3bfd89
                } = _0x766bea(_0x6f9463 + 0x2);
            _0x3030a9[_0x3bfd89++] = 0xc4, _0x3030a9[_0x3bfd89++] = _0x6f9463;
        } else {
            if (_0x6f9463 < 0x10000) {
                var {
                    target: _0x3030a9,
                    position: _0x3bfd89
                } = _0x766bea(_0x6f9463 + 0x3);
                _0x3030a9[_0x3bfd89++] = 0xc5, _0x3030a9[_0x3bfd89++] = _0x6f9463 >> 0x8, _0x3030a9[_0x3bfd89++] = 0xff & _0x6f9463;
            } else {
                var {
                    target: _0x3030a9,
                    position: _0x3bfd89,
                    targetView: _0x287a71
                } = _0x766bea(_0x6f9463 + 0x5);
                _0x3030a9[_0x3bfd89++] = 0xc6, _0x287a71['setUint32'](_0x3bfd89, _0x6f9463), _0x3bfd89 += 0x4;
            }
        }
        _0x3030a9['set'](_0x5c820f, _0x3bfd89);
    }
    function _0x35b3b8(_0x4a2a11, _0x5552db, _0x5660f4, _0x29209d) {
        let _0x38a0cf = _0x4a2a11['length'];
        switch (_0x38a0cf) {
        case 0x1:
            _0x5552db[_0x5660f4++] = 0xd4;
            break;
        case 0x2:
            _0x5552db[_0x5660f4++] = 0xd5;
            break;
        case 0x4:
            _0x5552db[_0x5660f4++] = 0xd6;
            break;
        case 0x8:
            _0x5552db[_0x5660f4++] = 0xd7;
            break;
        case 0x10:
            _0x5552db[_0x5660f4++] = 0xd8;
            break;
        default:
            _0x38a0cf < 0x100 ? (_0x5552db[_0x5660f4++] = 0xc7, _0x5552db[_0x5660f4++] = _0x38a0cf) : _0x38a0cf < 0x10000 ? (_0x5552db[_0x5660f4++] = 0xc8, _0x5552db[_0x5660f4++] = _0x38a0cf >> 0x8, _0x5552db[_0x5660f4++] = 0xff & _0x38a0cf) : (_0x5552db[_0x5660f4++] = 0xc9, _0x5552db[_0x5660f4++] = _0x38a0cf >> 0x18, _0x5552db[_0x5660f4++] = _0x38a0cf >> 0x10 & 0xff, _0x5552db[_0x5660f4++] = _0x38a0cf >> 0x8 & 0xff, _0x5552db[_0x5660f4++] = 0xff & _0x38a0cf);
        }
        return _0x5552db[_0x5660f4++] = _0x29209d, _0x5552db['set'](_0x4a2a11, _0x5660f4), _0x5660f4 += _0x38a0cf;
    }
    function _0x12909e(_0x7c91c9, _0x507bca, _0x1aae90) {
        if (_0x5d0359['length'] > 0x0) {
            _0x599f88['setUint32'](_0x5d0359['position'] + _0x7c91c9, _0x1097f3 + _0x1aae90 - _0x5d0359['position'] - _0x7c91c9), _0x5d0359['stringsPosition'] = _0x1097f3 - _0x7c91c9;
            let _0x114fa9 = _0x5d0359;
            _0x5d0359 = null, _0x507bca(_0x114fa9[0x0]), _0x507bca(_0x114fa9[0x1]);
        }
    }
    _0x8d810a = [
        Date,
        Set,
        Error,
        RegExp,
        ArrayBuffer,
        Object['getPrototypeOf'](Uint8Array['prototype'])['constructor'],
        _0x20854d
    ], _0x4095a7 = [
        {
            'pack'(_0x745c04, _0x568b78, _0x1808a3) {
                let _0x281a21 = _0x745c04['getTime']() / 0x3e8;
                if ((this['useTimestamp32'] || 0x0 === _0x745c04['getMilliseconds']()) && _0x281a21 >= 0x0 && _0x281a21 < 0x100000000) {
                    let {
                        target: _0x264d88,
                        targetView: _0x5ee2cf,
                        position: _0x569e8d
                    } = _0x568b78(0x6);
                    _0x264d88[_0x569e8d++] = 0xd6, _0x264d88[_0x569e8d++] = 0xff, _0x5ee2cf['setUint32'](_0x569e8d, _0x281a21);
                } else {
                    if (_0x281a21 > 0x0 && _0x281a21 < 0x100000000) {
                        let {
                            target: _0x5fabb6,
                            targetView: _0x47f41b,
                            position: _0x13c3df
                        } = _0x568b78(0xa);
                        _0x5fabb6[_0x13c3df++] = 0xd7, _0x5fabb6[_0x13c3df++] = 0xff, _0x47f41b['setUint32'](_0x13c3df, 0x3d0900 * _0x745c04['getMilliseconds']() + (_0x281a21 / 0x3e8 / 0x100000000 >> 0x0)), _0x47f41b['setUint32'](_0x13c3df + 0x4, _0x281a21);
                    } else {
                        if (isNaN(_0x281a21)) {
                            if (this['onInvalidDate'])
                                return _0x568b78(0x0), _0x1808a3(this['onInvalidDate']());
                            let {
                                target: _0x2b6d14,
                                targetView: _0x3e59da,
                                position: _0x1f61ae
                            } = _0x568b78(0x3);
                            _0x2b6d14[_0x1f61ae++] = 0xd4, _0x2b6d14[_0x1f61ae++] = 0xff, _0x2b6d14[_0x1f61ae++] = 0xff;
                        } else {
                            let {
                                target: _0x459b17,
                                targetView: _0x4867d3,
                                position: _0x20a86c
                            } = _0x568b78(0xf);
                            _0x459b17[_0x20a86c++] = 0xc7, _0x459b17[_0x20a86c++] = 0xc, _0x459b17[_0x20a86c++] = 0xff, _0x4867d3['setUint32'](_0x20a86c, 0xf4240 * _0x745c04['getMilliseconds']()), _0x4867d3['setBigInt64'](_0x20a86c + 0x4, BigInt(Math['floor'](_0x281a21)));
                        }
                    }
                }
            }
        },
        {
            'pack'(_0x275dbf, _0x375b79, _0x1a41c1) {
                if (this['setAsEmptyObject'])
                    return _0x375b79(0x0), _0x1a41c1({});
                let _0x552bca = Array['from'](_0x275dbf), {
                        target: _0x227d12,
                        position: _0x4e3d7b
                    } = _0x375b79(this['moreTypes'] ? 0x3 : 0x0);
                this['moreTypes'] && (_0x227d12[_0x4e3d7b++] = 0xd4, _0x227d12[_0x4e3d7b++] = 0x73, _0x227d12[_0x4e3d7b++] = 0x0), _0x1a41c1(_0x552bca);
            }
        },
        {
            'pack'(_0x3186ce, _0x288283, _0x3b68d2) {
                let {
                    target: _0x27b672,
                    position: _0x3db79b
                } = _0x288283(this['moreTypes'] ? 0x3 : 0x0);
                this['moreTypes'] && (_0x27b672[_0x3db79b++] = 0xd4, _0x27b672[_0x3db79b++] = 0x65, _0x27b672[_0x3db79b++] = 0x0), _0x3b68d2([
                    _0x3186ce['name'],
                    _0x3186ce['message']
                ]);
            }
        },
        {
            'pack'(_0x1f5355, _0x373845, _0x978d7b) {
                let {
                    target: _0x30cc79,
                    position: _0x356375
                } = _0x373845(this['moreTypes'] ? 0x3 : 0x0);
                this['moreTypes'] && (_0x30cc79[_0x356375++] = 0xd4, _0x30cc79[_0x356375++] = 0x78, _0x30cc79[_0x356375++] = 0x0), _0x978d7b([
                    _0x1f5355['source'],
                    _0x1f5355['flags']
                ]);
            }
        },
        {
            'pack'(_0x44f9a6, _0x5f5a87) {
                this['moreTypes'] ? _0x2c5deb(_0x44f9a6, 0x10, _0x5f5a87) : _0x36412c(_0x22cdd8 ? Buffer['from'](_0x44f9a6) : new Uint8Array(_0x44f9a6), _0x5f5a87);
            }
        },
        {
            'pack'(_0xfb19f9, _0x456649) {
                let _0x59b781 = _0xfb19f9['constructor'];
                _0x59b781 !== _0x3c0a70 && this['moreTypes'] ? _0x2c5deb(_0xfb19f9, _0xab0995['indexOf'](_0x59b781['name']), _0x456649) : _0x36412c(_0xfb19f9, _0x456649);
            }
        },
        {
            'pack'(_0x47b914, _0x58b8f0) {
                let {
                    target: _0x2de219,
                    position: _0x4f9c91
                } = _0x58b8f0(0x1);
                _0x2de219[_0x4f9c91] = 0xc1;
            }
        }
    ];
    let _0x5f022e = new _0x501b05({ 'useRecords': !0x1 }), _0x1fc42f = _0x5f022e['pack'], _0x5c8287 = _0x5f022e['pack'], {
            NEVER: _0x38e0db,
            ALWAYS: _0x57f02f,
            DECIMAL_ROUND: _0x483755,
            DECIMAL_FIT: _0x4e06d0
        } = _0x49ed73, _0x54d14c = 0x200, _0x136fca = 0x400, _0x4b6592 = 0x800;
    async function* _0x4eb883(_0x435454, _0x468dc8) {
        let _0x3499dc = new _0x501b05(_0x468dc8);
        for await (let _0x1fcf7a of _0x435454)
            yield _0x3499dc['pack'](_0x1fcf7a);
    }
    let _0x4c734b = function _0x2d465a(_0x140c99, _0x59e166 = {}) {
            if (!_0x140c99 || 'object' != typeof _0x140c99)
                throw Error('first\x20argument\x20must\x20be\x20an\x20Iterable,\x20Async\x20Iterable,\x20Iterator,\x20Async\x20Iterator,\x20or\x20a\x20promise');
            let _0x3c9ebf = new _0x53cda1(_0x59e166), _0xdc45ab, _0x426217 = _0x122577 => {
                    let _0x3f9926;
                    _0xdc45ab && (_0x122577 = Buffer['concat']([
                        _0xdc45ab,
                        _0x122577
                    ]), _0xdc45ab = void 0x0);
                    try {
                        _0x3f9926 = _0x3c9ebf['unpackMultiple'](_0x122577);
                    } catch (_0x59cffb) {
                        if (_0x59cffb['incomplete'])
                            _0xdc45ab = _0x122577['slice'](_0x59cffb['lastPosition']), _0x3f9926 = _0x59cffb['values'];
                        else
                            throw _0x59cffb;
                    }
                    return _0x3f9926;
                };
            return 'function' == typeof _0x140c99[Symbol['iterator']] ? function* _0x3bbea8() {
                for (let _0x18803c of _0x140c99)
                    yield* _0x426217(_0x18803c);
            }() : 'function' == typeof _0x140c99[Symbol['asyncIterator']] ? async function* _0x21e35() {
                for await (let _0x59d7e2 of _0x140c99)
                    yield* _0x426217(_0x59d7e2);
            }() : void 0x0;
        }, _0x1b9af3 = function _0x52cf51(_0x5a7ff8, _0x1aa108 = {}) {
            if (_0x5a7ff8 && 'object' == typeof _0x5a7ff8) {
                if ('function' == typeof _0x5a7ff8[Symbol['iterator']])
                    return function* _0x2097fb(_0x12b13f, _0x25d7ad) {
                        let _0x46247d = new _0x501b05(_0x25d7ad);
                        for (let _0x22d6ae of _0x12b13f)
                            yield _0x46247d['pack'](_0x22d6ae);
                    }(_0x5a7ff8, _0x1aa108);
                if ('function' == typeof _0x5a7ff8['then'] || 'function' == typeof _0x5a7ff8[Symbol['asyncIterator']])
                    return _0x4eb883(_0x5a7ff8, _0x1aa108);
                else
                    throw Error('first\x20argument\x20must\x20be\x20an\x20Iterable,\x20Async\x20Iterable,\x20Iterator,\x20Async\x20Iterator,\x20or\x20a\x20Promise');
            }
            throw Error('first\x20argument\x20must\x20be\x20an\x20Iterable,\x20Async\x20Iterable,\x20or\x20a\x20Promise\x20for\x20an\x20Async\x20Iterable');
        };
    _0x3a2b01['ALWAYS'] = _0x57f02f, _0x3a2b01['C1'] = _0x1c2c5a, _0x3a2b01['DECIMAL_FIT'] = _0x4e06d0, _0x3a2b01['DECIMAL_ROUND'] = _0x483755, _0x3a2b01['Decoder'] = _0x53cda1, _0x3a2b01['Encoder'] = _0x501b05, _0x3a2b01['FLOAT32_OPTIONS'] = _0x49ed73, _0x3a2b01['NEVER'] = _0x38e0db, _0x3a2b01['Packr'] = _0x501b05, _0x3a2b01['REUSE_BUFFER_MODE'] = _0x54d14c, _0x3a2b01['Unpackr'] = _0x53cda1, _0x3a2b01['addExtension'] = function _0x5aa492(_0x145f38) {
        var _0x5ad909;
        if (_0x145f38['Class']) {
            if (!_0x145f38['pack'] && !_0x145f38['write'])
                throw Error('Extension\x20has\x20no\x20pack\x20or\x20write\x20function');
            if (_0x145f38['pack'] && !_0x145f38['type'])
                throw Error('Extension\x20has\x20no\x20type\x20(numeric\x20code\x20to\x20identify\x20the\x20extension)');
            _0x8d810a['unshift'](_0x145f38['Class']), _0x4095a7['unshift'](_0x145f38);
        }
        (_0x5ad909 = _0x145f38)['unpack'] ? _0x2002fb[_0x5ad909['type']] = _0x5ad909['unpack'] : _0x2002fb[_0x5ad909['type']] = _0x5ad909;
    }, _0x3a2b01['clearSource'] = _0x1a80b5, _0x3a2b01['decode'] = _0x663249, _0x3a2b01['decodeIter'] = _0x4c734b, _0x3a2b01['encode'] = _0x5c8287, _0x3a2b01['encodeIter'] = _0x1b9af3, _0x3a2b01['isNativeAccelerationEnabled'] = !0x1, _0x3a2b01['mapsAsObjects'] = !0x0, _0x3a2b01['pack'] = _0x1fc42f, _0x3a2b01['roundFloat32'] = function _0x8c90e9(_0x3029ab) {
        _0x3a9404[0x0] = _0x3029ab;
        let _0x4322f2 = _0x55843b[(0x7f & _0x18a4ca[0x3]) << 0x1 | _0x18a4ca[0x2] >> 0x7];
        return (_0x4322f2 * _0x3029ab + (_0x3029ab > 0x0 ? 0.5 : -0.5) >> 0x0) / _0x4322f2;
    }, _0x3a2b01['unpack'] = _0x34136b, _0x3a2b01['unpackMultiple'] = _0x4e964c, _0x3a2b01['useRecords'] = !0x1;
});