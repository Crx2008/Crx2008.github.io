const Perf = (function () {
    const _0x3a9fdd = new Map(), _0x1abdbf = new Map(), _0x20802e = [], _0x112085 = [], _0x4e9d1d = 0x3e8;
    let _0x38f554 = 0x0, _0xd8d60e = 0x0, _0x546371 = !![], _0x3cda17 = ![], _0x507a4d = !![], _0x2c892d = 0x0;
    const _0x41bd2c = 0x32;
    function _0x4e02a1() {
        return {
            'count': 0x0,
            'totalTime': 0x0,
            'selfTime': 0x0,
            'maxTime': 0x0,
            'minTime': Infinity,
            'lastTime': 0x0,
            'samples': [],
            'maxSamples': 0x64,
            'children': new Map(),
            'parents': new Set()
        };
    }
    function _0x1722ed(_0x1bfc3e) {
        if (_0x1bfc3e < 0.001)
            return (_0x1bfc3e * 0xf4240)['toFixed'](0x2) + 'ns';
        if (_0x1bfc3e < 0x1)
            return (_0x1bfc3e * 0x3e8)['toFixed'](0x2) + 'μs';
        if (_0x1bfc3e < 0x3e8)
            return _0x1bfc3e['toFixed'](0x2) + 'ms';
        return (_0x1bfc3e / 0x3e8)['toFixed'](0x2) + 's';
    }
    function _0x2a4b3d(_0x670c3c) {
        if (!_0x546371)
            return;
        const _0x3b74ca = performance['now'](), _0x4e59ef = ++_0x38f554, _0x55d6da = _0x20802e['length'] > 0x0 ? _0x20802e[_0x20802e['length'] - 0x1] : null, _0x4fa321 = _0x55d6da ? _0x55d6da['name'] : null;
        _0x3a9fdd['set'](_0x670c3c, {
            'startTime': _0x3b74ca,
            'callId': _0x4e59ef,
            'parentName': _0x4fa321
        }), _0x20802e['push']({
            'name': _0x670c3c,
            'startTime': _0x3b74ca,
            'callId': _0x4e59ef,
            'depth': _0x2c892d
        }), _0x2c892d < _0x41bd2c && _0x2c892d++;
    }
    function _0x5416cc(_0x5809b3) {
        if (!_0x546371)
            return 0x0;
        const _0x432c6f = performance['now']();
        _0x2c892d > 0x0 && _0x2c892d--;
        let _0x1e2fef = -0x1;
        for (let _0x349a83 = _0x20802e['length'] - 0x1; _0x349a83 >= 0x0; _0x349a83--) {
            if (_0x20802e[_0x349a83]['name'] === _0x5809b3) {
                _0x1e2fef = _0x349a83;
                break;
            }
        }
        if (_0x1e2fef === -0x1)
            return console['warn']('[Perf]\x20未找到标记:\x20' + _0x5809b3), 0x0;
        const _0x3df31a = _0x20802e['splice'](_0x1e2fef, 0x1)[0x0], _0x4b3bd3 = _0x3a9fdd['get'](_0x5809b3), _0x3547e1 = _0x432c6f - _0x3df31a['startTime'];
        let _0x25a435 = _0x3547e1;
        _0x4b3bd3 && _0x4b3bd3['childTime'] && (_0x25a435 = _0x3547e1 - _0x4b3bd3['childTime']);
        !_0x1abdbf['has'](_0x5809b3) && _0x1abdbf['set'](_0x5809b3, _0x4e02a1());
        const _0x2b5f60 = _0x1abdbf['get'](_0x5809b3);
        _0x2b5f60['count']++, _0x2b5f60['totalTime'] += _0x3547e1, _0x2b5f60['selfTime'] += _0x25a435, _0x2b5f60['lastTime'] = _0x3547e1, _0x2b5f60['maxTime'] = Math['max'](_0x2b5f60['maxTime'], _0x3547e1), _0x2b5f60['minTime'] = Math['min'](_0x2b5f60['minTime'], _0x3547e1), _0x2b5f60['samples']['push'](_0x3547e1);
        _0x2b5f60['samples']['length'] > _0x2b5f60['maxSamples'] && _0x2b5f60['samples']['shift']();
        if (_0x4b3bd3 && _0x4b3bd3['parentName']) {
            const _0x3e037b = _0x1abdbf['get'](_0x4b3bd3['parentName']);
            _0x3e037b && (!_0x3e037b['children']['has'](_0x5809b3) && _0x3e037b['children']['set'](_0x5809b3, 0x0), _0x3e037b['children']['set'](_0x5809b3, _0x3e037b['children']['get'](_0x5809b3) + _0x3547e1), _0x2b5f60['parents']['add'](_0x4b3bd3['parentName']));
            const _0x67562a = _0x3a9fdd['get'](_0x4b3bd3['parentName']);
            _0x67562a && (_0x67562a['childTime'] = (_0x67562a['childTime'] || 0x0) + _0x3547e1);
        }
        return _0x112085['push']({
            'name': _0x5809b3,
            'elapsed': _0x3547e1,
            'selfElapsed': _0x25a435,
            'timestamp': _0x432c6f,
            'depth': _0x3df31a['depth'],
            'parentName': _0x4b3bd3?.['parentName'] || null,
            'callId': _0x3df31a['callId']
        }), _0x112085['length'] > _0x4e9d1d && _0x112085['shift'](), _0x3a9fdd['delete'](_0x5809b3), _0x3547e1;
    }
    function _0x66856(_0x5550df, _0x27bdab) {
        if (!_0x546371)
            return _0x27bdab();
        _0x2a4b3d(_0x5550df);
        try {
            const _0x3c385c = _0x27bdab();
            if (_0x3c385c && typeof _0x3c385c['then'] === 'function')
                return _0x3c385c['then'](_0x16346c => {
                    return _0x5416cc(_0x5550df), _0x16346c;
                }, _0x5de03e => {
                    _0x5416cc(_0x5550df);
                    throw _0x5de03e;
                });
            return _0x5416cc(_0x5550df), _0x3c385c;
        } catch (_0x2ff686) {
            _0x5416cc(_0x5550df);
            throw _0x2ff686;
        }
    }
    function _0x22c107(_0x4b7f21, _0x45d7aa) {
        if (typeof _0x45d7aa !== 'function')
            throw new Error('Perf.auto\x20第二个参数必须是函数');
        return function (..._0x1db3e7) {
            return _0x66856(_0x4b7f21, () => _0x45d7aa['apply'](this, _0x1db3e7));
        };
    }
    function _0x4028e0(_0x588de1, _0x346a25) {
        _0x346a25['forEach'](_0x359f22 => {
            const _0x8b8ea = _0x588de1[_0x359f22];
            if (typeof _0x8b8ea === 'function') {
                const _0x4dc078 = _0x588de1['constructor']['name'] || 'Anonymous';
                _0x588de1[_0x359f22] = _0x22c107(_0x4dc078 + '.' + _0x359f22, _0x8b8ea['bind'](_0x588de1));
            }
        });
    }
    function _0x2a6f6f(_0x4a0f29) {
        return _0x1abdbf['get'](_0x4a0f29);
    }
    function _0x30b3ab() {
        const _0x5a7386 = [];
        for (const [_0x59888b, _0x19b9d3] of _0x1abdbf) {
            _0x5a7386['push']({
                'name': _0x59888b,
                'count': _0x19b9d3['count'],
                'totalTime': _0x19b9d3['totalTime'],
                'selfTime': _0x19b9d3['selfTime'],
                'avgTime': _0x19b9d3['totalTime'] / _0x19b9d3['count'],
                'avgSelfTime': _0x19b9d3['selfTime'] / _0x19b9d3['count'],
                'maxTime': _0x19b9d3['maxTime'],
                'minTime': _0x19b9d3['minTime'] === Infinity ? 0x0 : _0x19b9d3['minTime'],
                'lastTime': _0x19b9d3['lastTime'],
                'parents': Array['from'](_0x19b9d3['parents']),
                'children': Array['from'](_0x19b9d3['children']['entries']())['map'](([_0x2e950c, _0x8e832b]) => ({
                    'name': _0x2e950c,
                    'time': _0x8e832b
                }))
            });
        }
        return _0x5a7386['sort']((_0x19eea2, _0x287339) => _0x287339['selfTime'] - _0x19eea2['selfTime']), _0x5a7386;
    }
    function _0x45b133() {
        const _0x4f83bc = _0x30b3ab(), _0x1a6744 = _0x4f83bc['filter'](_0x4bec67 => _0x4bec67['parents']['length'] === 0x0), _0x1e87cd = new Map();
        return _0x4f83bc['forEach'](_0x8b944b => {
            _0x1e87cd['set'](_0x8b944b['name'], {
                ..._0x8b944b,
                'childNodes': []
            });
        }), _0x4f83bc['forEach'](_0x3d541e => {
            const _0x217a53 = _0x1e87cd['get'](_0x3d541e['name']);
            _0x3d541e['parents']['forEach'](_0x423177 => {
                const _0x2ec858 = _0x1e87cd['get'](_0x423177);
                _0x2ec858 && !_0x2ec858['childNodes']['includes'](_0x217a53) && _0x2ec858['childNodes']['push'](_0x217a53);
            });
        }), _0x1a6744['map'](_0x489595 => _0x1e87cd['get'](_0x489595['name']))['filter'](_0x3c8499 => _0x3c8499);
    }
    function _0x3369e4(_0x1053a5) {
        _0x1053a5 ? _0x1abdbf['delete'](_0x1053a5) : (_0x1abdbf['clear'](), _0x3a9fdd['clear'](), _0x112085['length'] = 0x0, _0xd8d60e = 0x0);
    }
    function _0x3ed587() {
        _0x3cda17 = !_0x3cda17, _0x3cda17 ? _0x1969e3() : _0x1fb772();
    }
    let _0x1bbd98 = null;
    function _0x21e0d2() {
        if (_0x1bbd98)
            return;
        _0x1bbd98 = document['createElement']('div'), _0x1bbd98['id'] = 'perf-panel', _0x1bbd98['style']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20520px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x2080vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.92);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Ubuntu\x27,\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x1bbd98['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x2010px;\x20background:\x20#333;\x20cursor:\x20move;\x22\x20id=\x22perf-panel-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-weight:\x20bold;\x22>🚀\x20性能调试面板</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22float:\x20right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22perf-reset\x22\x20style=\x22padding:\x202px\x208px;\x20margin-right:\x205px;\x20cursor:\x20pointer;\x20background:\x20#555;\x20border:\x201px\x20solid\x20#666;\x20color:\x20#fff;\x20border-radius:\x203px;\x22>重置</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22perf-close\x22\x20style=\x22padding:\x202px\x208px;\x20cursor:\x20pointer;\x20background:\x20#555;\x20border:\x201px\x20solid\x20#666;\x20color:\x20#fff;\x20border-radius:\x203px;\x22>关闭</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x2010px;\x20border-bottom:\x201px\x20solid\x20#444;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#888;\x22>FPS:\x20</span><span\x20id=\x22perf-fps\x22\x20style=\x22color:\x20#0f0;\x22>--</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22margin-left:\x2020px;\x20color:\x20#888;\x22>帧时间:\x20</span><span\x20id=\x22perf-frametime\x22\x20style=\x22color:\x20#0f0;\x22>--</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22perf-tabs\x22\x20style=\x22display:\x20flex;\x20border-bottom:\x201px\x20solid\x20#444;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22perf-tab\x20active\x22\x20data-tab=\x22tree\x22\x20style=\x22flex:\x201;\x20padding:\x208px;\x20background:\x20#444;\x20border:\x20none;\x20color:\x20#fff;\x20cursor:\x20pointer;\x20border-bottom:\x202px\x20solid\x20#4af;\x22>调用树</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22perf-tab\x22\x20data-tab=\x22summary\x22\x20style=\x22flex:\x201;\x20padding:\x208px;\x20background:\x20#333;\x20border:\x20none;\x20color:\x20#fff;\x20cursor:\x20pointer;\x22>概览</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22perf-tab\x22\x20data-tab=\x22flame\x22\x20style=\x22flex:\x201;\x20padding:\x208px;\x20background:\x20#333;\x20border:\x20none;\x20color:\x20#fff;\x20cursor:\x20pointer;\x22>火焰图</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22perf-tab\x22\x20data-tab=\x22details\x22\x20style=\x22flex:\x201;\x20padding:\x208px;\x20background:\x20#333;\x20border:\x20none;\x20color:\x20#fff;\x20cursor:\x20pointer;\x22>详情</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22perf-content\x22\x20style=\x22padding:\x2010px;\x20overflow-y:\x20auto;\x20max-height:\x20calc(80vh\x20-\x20130px);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', document['body']['appendChild'](_0x1bbd98), _0x396afc(), document['getElementById']('perf-close')['onclick'] = () => _0x3ed587(), document['getElementById']('perf-reset')['onclick'] = () => {
            _0x3369e4(), _0x390e99();
        }, _0x1bbd98['querySelectorAll']('.perf-tab')['forEach'](_0xcfbc69 => {
            _0xcfbc69['onclick'] = () => {
                _0x1bbd98['querySelectorAll']('.perf-tab')['forEach'](_0x250278 => {
                    _0x250278['style']['background'] = '#333', _0x250278['style']['borderBottom'] = 'none', _0x250278['classList']['remove']('active');
                }), _0xcfbc69['style']['background'] = '#444', _0xcfbc69['style']['borderBottom'] = '2px\x20solid\x20#4af', _0xcfbc69['classList']['add']('active'), _0x5402f6 = _0xcfbc69['dataset']['tab'], _0x390e99();
            };
        }), _0x328bf8(_0x1bbd98, document['getElementById']('perf-panel-header'));
    }
    function _0x328bf8(_0x5f4892, _0x139b70) {
        let _0x2896e9 = ![], _0x34f2ec, _0xf45e9c, _0x105ea7, _0x438fd8;
        _0x139b70['onmousedown'] = _0x217cd6 => {
            _0x2896e9 = !![], _0x34f2ec = _0x217cd6['clientX'], _0xf45e9c = _0x217cd6['clientY'], _0x105ea7 = _0x5f4892['offsetLeft'], _0x438fd8 = _0x5f4892['offsetTop'];
        }, document['onmousemove'] = _0x26a3e0 => {
            if (!_0x2896e9)
                return;
            const _0x42cec2 = _0x26a3e0['clientX'] - _0x34f2ec, _0x181dd1 = _0x26a3e0['clientY'] - _0xf45e9c;
            _0x5f4892['style']['left'] = _0x105ea7 + _0x42cec2 + 'px', _0x5f4892['style']['top'] = _0x438fd8 + _0x181dd1 + 'px';
        }, document['onmouseup'] = () => {
            _0x2896e9 = ![];
        };
    }
    let _0x18e29f = null;
    function _0x396afc() {
        if (_0x18e29f)
            return;
        _0x18e29f = document['createElement']('div'), _0x18e29f['id'] = 'perf-mini-stats', _0x18e29f['style']['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Ubuntu\x27,\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x18e29f['innerHTML'] = '<span\x20id=\x22mini-fps\x22>FPS:\x20--</span>\x20|\x20<span\x20id=\x22mini-frametime\x22>Frame:\x20--</span>\x20|\x20<span\x20id=\x22mini-top\x22>Top:\x20--</span>', _0x18e29f['onclick'] = () => _0x3ed587(), document['body']['appendChild'](_0x18e29f);
    }
    function _0x3b6f23() {
        if (!_0x18e29f || !_0x507a4d)
            return;
        const _0xefaf10 = document['getElementById']('mini-fps'), _0x15a8bd = document['getElementById']('mini-frametime'), _0xaf02e2 = document['getElementById']('mini-top');
        _0xefaf10 && (_0xefaf10['textContent'] = 'FPS:\x20' + _0x1dc130, _0xefaf10['style']['color'] = _0x1dc130 >= 0x32 ? '#0f0' : _0x1dc130 >= 0x1e ? '#fa0' : '#f44');
        _0x15a8bd && (_0x15a8bd['textContent'] = 'Frame:\x20' + _0x1722ed(_0x3ba47c), _0x15a8bd['style']['color'] = _0x3ba47c < 0x10 ? '#0f0' : _0x3ba47c < 0x21 ? '#fa0' : '#f44');
        if (_0xaf02e2) {
            const _0x1fe7f3 = _0x30b3ab();
            if (_0x1fe7f3['length'] > 0x0) {
                const _0x2db30b = _0x1fe7f3[0x0];
                _0xaf02e2['textContent'] = _0x2db30b['name'] + ':\x20' + _0x1722ed(_0x2db30b['avgSelfTime']);
            } else
                _0xaf02e2['textContent'] = 'Top:\x20--';
        }
    }
    function _0x1969e3() {
        _0x21e0d2(), _0x1bbd98['style']['display'] = 'block', _0x390e99();
    }
    function _0x1fb772() {
        _0x1bbd98 && (_0x1bbd98['style']['display'] = 'none');
    }
    let _0x5402f6 = 'tree';
    function _0x390e99() {
        if (!_0x1bbd98 || !_0x3cda17)
            return;
        const _0x2a1024 = document['getElementById']('perf-content');
        switch (_0x5402f6) {
        case 'tree':
            _0x15122b(_0x2a1024);
            break;
        case 'summary':
            _0x39d185(_0x2a1024);
            break;
        case 'details':
            _0x23d3dc(_0x2a1024);
            break;
        case 'flame':
            _0x25a8f2(_0x2a1024);
            break;
        }
    }
    function _0x15122b(_0x2a9e23) {
        const _0x200aae = _0x45b133();
        if (_0x200aae['length'] === 0x0) {
            _0x2a9e23['innerHTML'] = '<div\x20style=\x22color:\x20#888;\x20text-align:\x20center;\x20padding:\x2020px;\x22>暂无数据</div>';
            return;
        }
        const _0x23e90a = Array['from'](_0x1abdbf['values']())['reduce']((_0x36dca, _0x1aea8f) => _0x36dca + _0x1aea8f['selfTime'], 0x0);
        let _0x2d6cef = '<div\x20style=\x22margin-bottom:\x2010px;\x20color:\x20#888;\x22>调用树（显示父子关系）</div>';
        _0x2d6cef += '<div\x20style=\x22font-size:\x2011px;\x20color:\x20#666;\x20margin-bottom:\x2010px;\x22>🔵\x20=\x20独占时间\x20|\x20🟢\x20=\x20包含子调用总时间</div>';
        function _0x34175d(_0x4286b1, _0x2109ff = 0x0, _0x5011cf = !![], _0x1d391f = '') {
            const _0x44b21c = _0x2109ff * 0x10, _0x3db2a1 = _0x23e90a > 0x0 ? _0x4286b1['selfTime'] / _0x23e90a * 0x64 : 0x0, _0x4ae733 = _0x3db2a1 > 0x1e ? '#f44' : _0x3db2a1 > 0xf ? '#fa0' : '#0f0', _0x3f4eec = _0x4286b1['totalTime'] > 0x0 ? (_0x4286b1['totalTime'] - _0x4286b1['selfTime']) / _0x4286b1['totalTime'] * 0x64 : 0x0;
            let _0x2deb3c = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x204px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20margin-left:\x20' + _0x44b21c + 'px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1d391f + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:\x201;\x20min-width:\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#fff;\x20font-weight:\x20' + (_0x2109ff === 0x0 ? 'bold' : 'normal') + ';\x22>' + _0x4286b1['name'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#666;\x20font-size:\x2010px;\x22>(' + _0x4286b1['count']['toLocaleString']() + '次)</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#4af;\x22\x20title=\x22独占时间（不包含子调用）\x22>🔵\x20' + _0x1722ed(_0x4286b1['selfTime']) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#0a0;\x22\x20title=\x22总时间（包含子调用）\x22>🟢\x20' + _0x1722ed(_0x4286b1['totalTime']) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20' + _0x4ae733 + ';\x20font-size:\x2010px;\x22>' + _0x3db2a1['toFixed'](0x1) + '%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20独占时间条\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:\x20#222;\x20height:\x206px;\x20border-radius:\x203px;\x20margin-top:\x202px;\x20overflow:\x20hidden;\x20display:\x20flex;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:\x20#4af;\x20width:\x20' + _0x4286b1['selfTime'] / _0x4286b1['totalTime'] * 0x64 + '%;\x20height:\x20100%;\x22\x20title=\x22独占时间\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:\x20#0a0;\x20flex:\x201;\x20height:\x20100%;\x22\x20title=\x22子调用时间\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            if (_0x4286b1['childNodes'] && _0x4286b1['childNodes']['length'] > 0x0) {
                const _0xb5452d = _0x4286b1['childNodes']['slice']()['sort']((_0x519f7d, _0x4e60bc) => _0x4e60bc['selfTime'] - _0x519f7d['selfTime']);
                _0xb5452d['forEach']((_0x17b8c8, _0x16e337) => {
                    const _0x139dc5 = _0x16e337 === _0xb5452d['length'] - 0x1, _0x4bb8e9 = _0x1d391f + (_0x2109ff === 0x0 ? '' : _0x5011cf ? '\x20\x20\x20\x20' : '│\x20\x20\x20'), _0x2887d2 = _0x139dc5 ? '└──\x20' : '├──\x20';
                    _0x2deb3c += _0x34175d(_0x17b8c8, _0x2109ff + 0x1, _0x139dc5, _0x4bb8e9 + _0x2887d2);
                });
            }
            return _0x2deb3c += '</div>', _0x2deb3c;
        }
        _0x2d6cef += '<div\x20style=\x22max-height:\x20calc(80vh\x20-\x20160px);\x20overflow-y:\x20auto;\x22>', _0x200aae['forEach'](_0x36cdca => {
            _0x2d6cef += _0x34175d(_0x36cdca);
        }), _0x2d6cef += '</div>', _0x2a9e23['innerHTML'] = _0x2d6cef;
    }
    function _0x39d185(_0x309dfa) {
        const _0x40f6ce = _0x30b3ab(), _0x114510 = _0x40f6ce['reduce']((_0x37c20e, _0x20fb8e) => _0x37c20e + _0x20fb8e['selfTime'], 0x0);
        let _0x42deda = '<div\x20style=\x22margin-bottom:\x2010px;\x20color:\x20#888;\x22>独占时间\x20Top\x2010（不包含子调用）</div>';
        _0x42deda += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style=\x22width:\x20100%;\x20border-collapse:\x20collapse;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22border-bottom:\x201px\x20solid\x20#444;\x20color:\x20#888;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20left;\x20padding:\x205px;\x22>操作</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20right;\x20padding:\x205px;\x22>独占时间</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20right;\x20padding:\x205px;\x22>总时间</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20right;\x20padding:\x205px;\x22>占比</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20right;\x20padding:\x205px;\x22>平均</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x40f6ce['slice'](0x0, 0xa)['forEach'](_0x1d8a8c => {
            const _0x5213af = _0x114510 > 0x0 ? _0x1d8a8c['selfTime'] / _0x114510 * 0x64 : 0x0, _0x2608c9 = _0x5213af > 0x1e ? '#f44' : _0x5213af > 0xf ? '#fa0' : '#0f0', _0x390bbb = _0x1d8a8c['totalTime'] > 0x0 ? _0x1d8a8c['selfTime'] / _0x1d8a8c['totalTime'] * 0x64 : 0x64;
            _0x42deda += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22border-bottom:\x201px\x20solid\x20#333;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22padding:\x205px;\x20color:\x20#fff;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1d8a8c['name'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x1d8a8c['parents']['length'] > 0x0 ? '<span\x20style=\x22color:\x20#666;\x20font-size:\x2010px;\x20margin-left:\x204px;\x22>←\x20' + _0x1d8a8c['parents'][0x0] + '</span>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20right;\x20padding:\x205px;\x20color:\x20#4af;\x22>' + _0x1722ed(_0x1d8a8c['selfTime']) + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20right;\x20padding:\x205px;\x20color:\x20#0a0;\x22>' + _0x1722ed(_0x1d8a8c['totalTime']) + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20right;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20' + _0x2608c9 + ';\x22>' + _0x5213af['toFixed'](0x1) + '%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20right;\x20padding:\x205px;\x20color:\x20#aaa;\x22>' + _0x1722ed(_0x1d8a8c['avgSelfTime']) + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x225\x22\x20style=\x22padding:\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:\x20#333;\x20height:\x204px;\x20display:\x20flex;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:\x20#4af;\x20width:\x20' + _0x390bbb + '%;\x20height:\x20100%;\x22\x20title=\x22独占占比\x20' + _0x390bbb['toFixed'](0x1) + '%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:\x20#0a0;\x20flex:\x201;\x20height:\x20100%;\x22\x20title=\x22子调用占比\x20' + (0x64 - _0x390bbb)['toFixed'](0x1) + '%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
        }), _0x42deda += '</table>', _0x309dfa['innerHTML'] = _0x42deda;
    }
    function _0x23d3dc(_0x61251e) {
        const _0x3e00e9 = _0x30b3ab(), _0x619410 = _0x3e00e9['reduce']((_0x21a703, _0x1c7159) => _0x21a703 + _0x1c7159['selfTime'], 0x0);
        let _0xd4da8b = '<div\x20style=\x22margin-bottom:\x2010px;\x20color:\x20#888;\x22>详细统计（独占时间排序）</div>';
        _0xd4da8b += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style=\x22width:\x20100%;\x20border-collapse:\x20collapse;\x20font-size:\x2011px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22border-bottom:\x201px\x20solid\x20#444;\x20color:\x20#888;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20left;\x20padding:\x204px;\x22>操作</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20right;\x20padding:\x204px;\x22>次数</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20right;\x20padding:\x204px;\x22>独占时间</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20right;\x20padding:\x204px;\x22>总时间</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20right;\x20padding:\x204px;\x22>占比</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x3e00e9['forEach'](_0x256c95 => {
            const _0x1b68f3 = _0x619410 > 0x0 ? _0x256c95['selfTime'] / _0x619410 * 0x64 : 0x0, _0x1c9c08 = _0x1b68f3 > 0x1e ? '#f44' : _0x1b68f3 > 0xf ? '#fa0' : '#0f0', _0x5bcc1f = _0x256c95['totalTime'] > 0x0 ? _0x256c95['selfTime'] / _0x256c95['totalTime'] * 0x64 : 0x64;
            _0xd4da8b += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22border-bottom:\x201px\x20solid\x20#333;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22padding:\x204px;\x20color:\x20#fff;\x20max-width:\x20150px;\x20overflow:\x20hidden;\x20text-overflow:\x20ellipsis;\x22\x20title=\x22' + _0x256c95['name'] + (_0x256c95['parents']['length'] > 0x0 ? '\x0a父调用:\x20' + _0x256c95['parents']['join'](',\x20') : '') + '\x22>' + _0x256c95['name'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20right;\x20padding:\x204px;\x20color:\x20#0af;\x22>' + _0x256c95['count']['toLocaleString']() + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20right;\x20padding:\x204px;\x20color:\x20#4af;\x22>' + _0x1722ed(_0x256c95['selfTime']) + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20right;\x20padding:\x204px;\x20color:\x20#0a0;\x22>' + _0x1722ed(_0x256c95['totalTime']) + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20right;\x20padding:\x204px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20' + _0x1c9c08 + ';\x22>' + _0x1b68f3['toFixed'](0x1) + '%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:\x20#666;\x20font-size:\x209px;\x22>(' + _0x5bcc1f['toFixed'](0x0) + '%)</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
        }), _0xd4da8b += '</table>', _0xd4da8b += '<div\x20style=\x22margin-top:\x2010px;\x20font-size:\x2010px;\x20color:\x20#666;\x22>括号内数值\x20=\x20独占时间占总时间的百分比</div>', _0x61251e['innerHTML'] = _0xd4da8b;
    }
    function _0x25a8f2(_0x9aa0dd) {
        const _0x30242d = _0x112085['slice'](-0xc8);
        if (_0x30242d['length'] === 0x0) {
            _0x9aa0dd['innerHTML'] = '<div\x20style=\x22color:\x20#888;\x20text-align:\x20center;\x20padding:\x2020px;\x22>暂无数据</div>';
            return;
        }
        const _0x45d4cb = Math['min'](..._0x30242d['map'](_0x571d13 => _0x571d13['timestamp'])), _0x4a4bbc = Math['max'](..._0x30242d['map'](_0x2794b1 => _0x2794b1['timestamp'])), _0x3e1309 = Math['max'](..._0x30242d['map'](_0x17d902 => _0x17d902['elapsed'])), _0x494ad8 = _0x4a4bbc - _0x45d4cb || 0x1;
        let _0x3c9562 = '<div\x20style=\x22margin-bottom:\x2010px;\x20color:\x20#888;\x22>火焰图\x20(最近200次调用)</div>';
        _0x3c9562 += '<div\x20style=\x22font-size:\x2010px;\x20color:\x20#666;\x20margin-bottom:\x205px;\x22>颜色表示独占时间占比</div>', _0x3c9562 += '<div\x20style=\x22position:\x20relative;\x20height:\x20350px;\x20background:\x20#222;\x20border-radius:\x204px;\x20overflow:\x20hidden;\x22>', _0x30242d['forEach'](_0x2060d6 => {
            const _0x5cf8cc = (_0x2060d6['timestamp'] - _0x45d4cb) / _0x494ad8 * 0x64, _0x43da9a = Math['max'](0.5, _0x2060d6['elapsed'] / _0x3e1309 * 0xf), _0x5edc62 = _0x2060d6['depth'] * 0x12, _0xcdb269 = 0x10, _0x5a7f65 = _0x2060d6['elapsed'] > 0x0 ? _0x2060d6['selfElapsed'] / _0x2060d6['elapsed'] : 0x1, _0x1367a5 = _0x5a7f65 * 0x78, _0xd347b6 = 'hsl(' + _0x1367a5 + ',\x2070%,\x2045%)', _0xafa63d = _0x5a7f65 > 0.8 ? '#4af' : '#0a0';
            _0x3c9562 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20' + _0x5cf8cc + '%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20' + _0x5edc62 + 'px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20' + _0x43da9a + '%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20' + _0xcdb269 + 'px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20' + _0xd347b6 + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20' + _0xafa63d + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22\x20title=\x22' + _0x2060d6['name'] + ':\x20总' + _0x1722ed(_0x2060d6['elapsed']) + '\x20|\x20独' + _0x1722ed(_0x2060d6['selfElapsed']) + '\x20(' + (_0x5a7f65 * 0x64)['toFixed'](0x0) + '%)\x22>' + _0x2060d6['name'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
        }), _0x3c9562 += '</div>', _0x3c9562 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x20margin-top:\x2010px;\x20font-size:\x2010px;\x20color:\x20#888;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22margin-right:\x208px;\x22>高独占时间</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x2080px;\x20height:\x208px;\x20background:\x20linear-gradient(to\x20right,\x20#f44,\x20#fa0,\x20#0f0,\x20#0a0,\x20#44f);\x20border-radius:\x204px;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22margin-left:\x208px;\x22>低独占时间（多为子调用）</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x9aa0dd['innerHTML'] = _0x3c9562;
    }
    let _0x54d2c9 = 0x0, _0x27feaa = performance['now'](), _0x1dc130 = 0x0, _0x3ba47c = 0x0, _0x52d8c9 = null, _0xdc547b = [];
    const _0x194413 = 0x3c;
    function _0x1c826e() {
        const _0x3aea98 = performance['now']();
        if (_0x52d8c9 !== null) {
            const _0x59ea1c = _0x3aea98 - _0x52d8c9;
            _0xdc547b['push'](_0x59ea1c), _0xdc547b['length'] > _0x194413 && _0xdc547b['shift']();
        }
        _0x52d8c9 = _0x3aea98, _0x54d2c9++;
        if (_0x3aea98 - _0x27feaa >= 0x1f4) {
            _0x1dc130 = Math['round'](_0x54d2c9 / ((_0x3aea98 - _0x27feaa) / 0x3e8));
            if (_0xdc547b['length'] > 0x0) {
                const _0x4ae950 = _0xdc547b['reduce']((_0x32ce83, _0x4d898a) => _0x32ce83 + _0x4d898a, 0x0) / _0xdc547b['length'];
                _0x3ba47c = _0x4ae950;
            } else
                _0x3ba47c = _0x54d2c9 > 0x0 ? (_0x3aea98 - _0x27feaa) / _0x54d2c9 : 0x0;
            _0x54d2c9 = 0x0, _0x27feaa = _0x3aea98, _0x1bbd98 && _0x3cda17 && (document['getElementById']('perf-fps')['textContent'] = _0x1dc130, document['getElementById']('perf-fps')['style']['color'] = _0x1dc130 >= 0x32 ? '#0f0' : _0x1dc130 >= 0x1e ? '#fa0' : '#f44', document['getElementById']('perf-frametime')['textContent'] = _0x1722ed(_0x3ba47c)), _0x3b6f23();
        }
    }
    function _0x43075e() {
        _0x1c826e(), _0x3cda17 && _0x1bbd98 && (Math['random']() < 0.02 && _0x390e99());
    }
    function _0x14c889() {
        window['Perf'] = {
            'mark': _0x2a4b3d,
            'end': _0x5416cc,
            'measure': _0x66856,
            'auto': _0x22c107,
            'wrapClass': _0x4028e0,
            'getStats': _0x2a6f6f,
            'getAllStats': _0x30b3ab,
            'buildCallTree': _0x45b133,
            'reset': _0x3369e4,
            'toggle': _0x3ed587,
            'enable': () => {
                _0x546371 = !![];
            },
            'disable': () => {
                _0x546371 = ![];
            },
            'dump': () => {
                console['log']('===\x20性能统计（独占时间排序）===');
                const _0x29fc0f = _0x30b3ab();
                console['table'](_0x29fc0f['map'](_0x47a5bd => ({
                    'name': _0x47a5bd['name'],
                    'count': _0x47a5bd['count'],
                    'selfTime': _0x1722ed(_0x47a5bd['selfTime']),
                    'totalTime': _0x1722ed(_0x47a5bd['totalTime']),
                    'avgSelfTime': _0x1722ed(_0x47a5bd['avgSelfTime']),
                    'parents': _0x47a5bd['parents']['join'](',\x20') || '(root)'
                })));
            },
            'dumpTree': () => {
                console['log']('===\x20调用树\x20===');
                const _0x4a31e5 = _0x45b133();
                console['log'](_0x4a31e5);
            },
            'analyze': () => {
                const _0x4e35e7 = performance['now']();
                console['log']('\x0a%c========\x20性能分析报告\x20========', 'color:\x20#ff0;\x20font-weight:\x20bold;\x20font-size:\x2014px');
                const _0x1ffb94 = _0x30b3ab(), _0x4b7bca = _0x1ffb94['reduce']((_0x2ed741, _0x59e886) => _0x2ed741 + _0x59e886['selfTime'], 0x0), _0xb20684 = _0x1ffb94['reduce']((_0x50073e, _0x432629) => _0x50073e + _0x432629['totalTime'], 0x0), _0x2c3580 = _0x1dc130, _0x3d4896 = _0x3ba47c, _0x48e221 = _0x2c3580 > 0x0 ? 0x3e8 / _0x2c3580 : 0x0;
                console['log']('%c📊\x20帧性能:', 'color:\x20#0af;\x20font-weight:\x20bold'), console['log']('\x20\x20\x20实际帧时间:\x20' + _0x1722ed(_0x3d4896)), console['log']('\x20\x20\x20FPS:\x20' + _0x2c3580), console['log']('\x20\x20\x20预期帧时间:\x20' + _0x1722ed(_0x48e221)), console['log']('\x0a%c📈\x20统计时间\x20(累计):', 'color:\x20#0f0;\x20font-weight:\x20bold'), console['log']('\x20\x20\x20独占时间总和:\x20' + _0x1722ed(_0x4b7bca)), console['log']('\x20\x20\x20包含子调用总和:\x20' + _0x1722ed(_0xb20684)), console['log']('\x20\x20\x20活跃标记数:\x20' + _0x1ffb94['length']);
                const _0x34e00b = _0x112085['length'] > 0x0 ? _0x112085[0x0]['timestamp'] : _0x4e35e7, _0x5cdc0e = _0x4e35e7 - _0x34e00b, _0x188268 = _0x3d4896 * (_0x5cdc0e / (_0x3d4896 || 0x10));
                console['log']('\x0a%c⚠️\x20\x20差距分析:', 'color:\x20#f44;\x20font-weight:\x20bold'), console['log']('\x20\x20\x20收集时长:\x20' + _0x1722ed(_0x5cdc0e)), console['log']('\x20\x20\x20预期累计帧时间:\x20~' + _0x1722ed(_0x188268)), console['log']('\x20\x20\x20实际统计时间:\x20' + _0x1722ed(_0x4b7bca)), console['log']('\x20\x20\x20未标记时间占比:\x20' + ((0x1 - _0x4b7bca / _0x188268) * 0x64)['toFixed'](0x1) + '%'), console['log']('\x0a%c🕐\x20最近一帧的详细调用链:', 'color:\x20#fa0;\x20font-weight:\x20bold');
                const _0x460842 = _0x112085['slice'](-0x1e), _0x16711e = _0x460842['findIndex'](_0x452e50 => _0x452e50['name'] === 'RAF_Frame');
                if (_0x16711e !== -0x1) {
                    const _0x2a22ff = _0x460842['slice'](_0x16711e);
                    let _0x2b7e46 = 0x0;
                    _0x2a22ff['forEach'](_0x1c9c22 => {
                        _0x2b7e46 += _0x1c9c22['selfElapsed'];
                        const _0x161cbe = _0x1c9c22['elapsed'] > 0x0 ? _0x1c9c22['selfElapsed'] / _0x1c9c22['elapsed'] * 0x64 : 0x64;
                        console['log']('\x20\x20\x20' + _0x1c9c22['name'] + ':\x20' + _0x1c9c22['elapsed']['toFixed'](0x3) + 'ms\x20(独占:\x20' + _0x1c9c22['selfElapsed']['toFixed'](0x3) + 'ms,\x20' + _0x161cbe['toFixed'](0x0) + '%)');
                    }), console['log']('\x20\x20\x20%c帧内标记时间总和:\x20' + _0x1722ed(_0x2b7e46), 'color:\x20#0f0'), console['log']('\x20\x20\x20%c帧内未标记时间:\x20' + _0x1722ed(_0x3d4896 - _0x2b7e46), 'color:\x20#f44');
                } else
                    console['log']('\x20\x20\x20未找到RAF_Frame标记'), _0x460842['slice'](-0xa)['forEach']((_0x5e8c23, _0x3676ed) => {
                        console['log']('\x20\x20\x20' + _0x5e8c23['name'] + ':\x20' + _0x1722ed(_0x5e8c23['elapsed']));
                    });
                console['log']('\x0a%c🔝\x20Top\x2015\x20耗时操作\x20(累计独占时间):', 'color:\x20#0f0;\x20font-weight:\x20bold'), _0x1ffb94['slice'](0x0, 0xf)['forEach']((_0x46faa5, _0x22323b) => {
                    const _0x106997 = _0x4b7bca > 0x0 ? _0x46faa5['selfTime'] / _0x4b7bca * 0x64 : 0x0, _0x5c64fb = _0x46faa5['totalTime'] > 0x0 ? _0x46faa5['selfTime'] / _0x46faa5['totalTime'] * 0x64 : 0x64, _0x2ea135 = _0xd8d60e > 0x0 ? _0x46faa5['count'] / _0xd8d60e : 0x0;
                    console['log']('\x20\x20\x20' + (_0x22323b + 0x1) + '.\x20' + _0x46faa5['name']), console['log']('\x20\x20\x20\x20\x20\x20总调用:\x20' + _0x46faa5['count']['toLocaleString']() + '\x20(约' + _0x2ea135['toFixed'](0x2) + '次/帧,\x20共' + _0xd8d60e + '帧)'), console['log']('\x20\x20\x20\x20\x20\x20累计独占:\x20' + _0x1722ed(_0x46faa5['selfTime']) + '\x20(' + _0x106997['toFixed'](0x1) + '%)'), console['log']('\x20\x20\x20\x20\x20\x20单次平均:\x20' + _0x1722ed(_0x46faa5['avgSelfTime'])), console['log']('\x20\x20\x20\x20\x20\x20独占占比:\x20' + _0x5c64fb['toFixed'](0x0) + '%');
                }), console['log']('\x0a%c💡\x20提示:', 'color:\x20#888'), console['log']('\x20\x20\x20-\x20输入\x20Perf.reset()\x20重置统计后再测试'), console['log']('\x20\x20\x20-\x20\x22累计独占时间\x22\x20=\x20该操作所有调用的总耗时'), console['log']('\x20\x20\x20-\x20\x22单次平均\x22\x20=\x20该操作每次调用平均耗时'), console['log']('%c============================\x0a', 'color:\x20#ff0;\x20font-weight:\x20bold');
            },
            'analyzeFrame': () => {
                console['log']('\x0a%c========\x20单帧详细分析\x20========', 'color:\x20#ff0;\x20font-weight:\x20bold;\x20font-size:\x2014px');
                const _0x378961 = _0x112085['slice'](-0x32), _0x3aaf23 = _0x378961['findIndex'](_0x202bc7 => _0x202bc7['name'] === 'RAF_Frame');
                if (_0x3aaf23 !== -0x1) {
                    const _0x197472 = _0x378961['slice'](_0x3aaf23), _0x32bbc7 = _0x197472['reduce']((_0x1907ad, _0x10601c) => _0x1907ad + _0x10601c['selfElapsed'], 0x0);
                    console['log']('%c帧内标记操作:\x20' + _0x197472['length'] + '个', 'color:\x20#0af'), console['log']('%c标记时间总和:\x20' + _0x1722ed(_0x32bbc7), 'color:\x20#0f0'), console['log']('%c当前帧时间:\x20' + _0x1722ed(_0x3ba47c), 'color:\x20#fa0'), console['log']('%c未标记时间:\x20' + _0x1722ed(_0x3ba47c - _0x32bbc7), 'color:\x20#f44'), console['log']('\x0a%c帧内调用详情:', 'color:\x20#888'), _0x197472['forEach']((_0x44bc60, _0x514fdb) => {
                        const _0x426bf3 = _0x32bbc7 > 0x0 ? _0x44bc60['selfElapsed'] / _0x32bbc7 * 0x64 : 0x0, _0x94501a = '█'['repeat'](Math['min'](0x32, Math['floor'](_0x426bf3 / 0x2)));
                        console['log']((_0x514fdb + 0x1)['toString']()['padStart'](0x2, '\x20') + '.\x20' + _0x44bc60['name']['padEnd'](0x1e) + '\x20' + _0x44bc60['elapsed']['toFixed'](0x3)['padStart'](0x7) + 'ms\x20(独:' + _0x44bc60['selfElapsed']['toFixed'](0x3)['padStart'](0x7) + 'ms)\x20' + _0x94501a);
                    });
                } else
                    console['log']('%c未找到RAF_Frame，显示最近20条记录:', 'color:\x20#f44'), _0x378961['slice'](-0x14)['forEach']((_0x15f1bf, _0x102049) => {
                        console['log']('\x20\x20\x20' + (_0x102049 + 0x1) + '.\x20' + _0x15f1bf['name'] + ':\x20' + _0x1722ed(_0x15f1bf['elapsed']));
                    });
                console['log']('%c============================\x0a', 'color:\x20#ff0;\x20font-weight:\x20bold');
            }
        }, console['log']('%c[Perf]\x20性能调试系统已加载', 'color:\x20#0f0;\x20font-weight:\x20bold;'), console['log']('按\x20%cP%c\x20键切换性能面板', 'color:\x20#ff0;\x20font-weight:\x20bold;', 'color:\x20inherit'), console['log']('命令:'), console['log']('\x20\x20%cPerf.analyze()%c\x20\x20\x20-\x20详细性能分析报告', 'color:\x20#ff0;', 'color:\x20inherit'), console['log']('\x20\x20%cPerf.analyzeFrame()%c\x20-\x20单帧详细分解', 'color:\x20#ff0;', 'color:\x20inherit'), console['log']('\x20\x20%cPerf.dump()%c\x20\x20\x20\x20\x20\x20\x20-\x20查看统计表', 'color:\x20#ff0;', 'color:\x20inherit'), console['log']('\x20\x20%cPerf.dumpTree()%c\x20\x20\x20-\x20查看调用树', 'color:\x20#ff0;', 'color:\x20inherit'), console['log']('\x20\x20%cPerf.reset()%c\x20\x20\x20\x20\x20\x20-\x20重置统计', 'color:\x20#ff0;', 'color:\x20inherit');
    }
    function _0x5bd304() {
        document['addEventListener']('keydown', _0x4942fe => {
            (_0x4942fe['key'] === 'p' || _0x4942fe['key'] === 'P') && (_0x4942fe['target']['tagName'] !== 'INPUT' && _0x4942fe['target']['tagName'] !== 'TEXTAREA' && _0x3ed587());
        });
    }
    function _0x57efcd() {
        if (window['__perfInitialized']) {
            console['warn']('[Perf]\x20已经初始化过，跳过重复初始化');
            return;
        }
        window['__perfInitialized'] = !![], _0x14c889(), _0x5bd304();
        if (!window['__rafWrapped']) {
            const _0x571d4f = window['requestAnimationFrame'];
            window['requestAnimationFrame'] = function (_0x599477) {
                return _0x571d4f['call'](window, function (_0x1b1d3b) {
                    _0xd8d60e++, _0x2a4b3d('RAF_Frame'), _0x599477(_0x1b1d3b), _0x5416cc('RAF_Frame'), _0x43075e();
                });
            }, window['__rafWrapped'] = !![], console['log']('[Perf]\x20已包装\x20requestAnimationFrame');
        }
        console['log']('[Perf]\x20已自动启用\x20requestAnimationFrame\x20跟踪');
    }
    return document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', _0x57efcd) : _0x57efcd(), {
        'mark': _0x2a4b3d,
        'end': _0x5416cc,
        'measure': _0x66856,
        'auto': _0x22c107,
        'wrapClass': _0x4028e0,
        'getStats': _0x2a6f6f,
        'getAllStats': _0x30b3ab,
        'buildCallTree': _0x45b133,
        'reset': _0x3369e4,
        'toggle': _0x3ed587,
        'dump': () => {
            console['log']('===\x20性能统计（独占时间排序）==='), console['table'](window['Perf']['getAllStats']()['map'](_0x54606b => ({
                'name': _0x54606b['name'],
                'count': _0x54606b['count'],
                'selfTime': _0x54606b['selfTime']['toFixed'](0x2) + 'ms',
                'totalTime': _0x54606b['totalTime']['toFixed'](0x2) + 'ms',
                'avgSelfTime': _0x54606b['avgSelfTime']['toFixed'](0x3) + 'ms'
            })));
        },
        'analyze': () => window['Perf']['analyze'](),
        'analyzeFrame': () => window['Perf']['analyzeFrame']()
    };
}());