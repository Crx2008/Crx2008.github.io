let cachedStats = undefined, cachedState = [
        'please\x20regen',
        ![]
    ];
function safeDrawImage(_0x3d6c1e, _0x14073d, _0x167f50, _0x15e093, _0x2a4b57) {
    _0x3d6c1e && _0x3d6c1e['complete'] && _0x3d6c1e['naturalWidth'] > 0x0 && ctx['drawImage'](_0x3d6c1e, _0x14073d, _0x167f50, _0x15e093, _0x2a4b57);
}
let isTs = window['characterSelector'] !== undefined && window['characterSelector']['selectedIndex'] == '1';
function generateCachedStats(_0x3fa8be) {
    cachedState[0x0] = _0x3fa8be, cachedState[0x1] = ![], window['calculateStats'](![], _0x3fa8be), cachedStats = structuredClone({
        'petals': Stats['petals'],
        'enemies': Stats['enemies']
    }), window['calculateStats'](![]);
}
class StatsBox {
    constructor(_0x40f0d5, _0x1b2096, _0x869a15 = 'petals', _0x130a4f, _0x54bbdb) {
        this['name'] = _0x40f0d5, this['type'] = _0x40f0d5, this['description'] = Descriptions[_0x869a15][_0x40f0d5] ? Descriptions[_0x869a15][_0x40f0d5] : 'Something\x20interesting...', this['mode'] = _0x869a15, this['amount'] = _0x130a4f, this['rarity'] = _0x54bbdb, this['h'] = this['w'] = this['x'] = this['y'] = 0x0, this['image'] = null, this['generateData'](_0x869a15, _0x40f0d5, _0x1b2096);
    }
    ['generateData'](_0x350d1b, _0x38dbde, _0x548618) {
        cachedState[0x0] !== isTs && generateCachedStats(isTs);
        const _0xc86598 = [
            'Abyssal\x20Artifact',
            'Scorched\x20Artifact',
            'Verdant\x20Artifact',
            'Cosmic\x20Artifact',
            'Chimera'
        ];
        if (_0xc86598['includes'](this['type'])) {
            this['generateArtifactData']();
            return;
        }
        if (_0x350d1b == 'petals') {
            _0x548618 = cachedStats['petals'][this['type']][this['rarity']];
            if (this['type'] == 'Fangs')
                this['name'] = 'Fang';
            if (this['type'] == 'Egg')
                this['name'] = 'Beetle\x20Egg';
            if (this['type'] == 'Hexagon')
                this['name'] = 'ӇЄҲƛƓƠƝ';
            if (this['type'] == 'Trinket\x20of\x20the\x20Hivemind')
                this['description'] = [
                    {
                        'text': 'You\x20can\x20hear\x20distant\x20humming\x20within\x20the\x20trinket...\x20Converts',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maximumRarity']]['color']
                    },
                    {
                        'text': 'Soldier\x20Ant\x20summons\x20and\x20below\x20into\x20Soldier\x20Termites.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Trinket\x20of\x20the\x20Sea')
                this['description'] = [
                    {
                        'text': 'The\x20sounds\x20of\x20the\x20sea\x20fills\x20your\x20ears...\x20Converts',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maximumRarity']]['color']
                    },
                    {
                        'text': 'Sandstorms\x20and\x20below\x20into\x20Whirlpools',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Trinket\x20of\x20the\x20Wild')
                this['description'] = [
                    {
                        'text': 'A\x20faint\x20grassy\x20smell\x20is\x20emitted\x20from\x20this\x20trinket...\x20All',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maximumRarity']]['color']
                    },
                    {
                        'text': 'Ruby\x20Summons\x20and\x20below\x20convert\x20into\x20dangerous\x20Mossy\x20Rubies!',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Jellyfish\x20Egg' && this['rarity'] >= 0xe)
                this['description'] = 'It\x27s\x20gonna\x20zap\x20everything\x20to\x20death.\x20Pet\x20Jellyfish\x20deal\x204%\x20of\x20their\x20max\x20health\x20as\x20zap\x20damage.';
            if (this['type'] == 'Neuroflare\x20Egg' && this['rarity'] >= 0xe)
                this['description'] = 'It\x27s\x20gonna\x20zap\x20everything\x20to\x20death.\x20Pet\x20Jellyfish\x20deal\x202%\x20of\x20their\x20max\x20health\x20as\x20zap\x20damage.';
            if (this['type'] == 'Third\x20Eye' && this['rarity'] === 0xd)
                this['description'] = 'Something\x20lofdjf\x20will\x20never\x20get.';
            if (this['type'] == 'Mandible' && this['rarity'] >= 0xd)
                this['description'] = 'Has\x20a\x2015%\x20chance\x20of\x20doing\x2020x\x20damage.\x20Critical\x20chance\x20increases\x20to\x2030%\x20when\x203\x20or\x20more\x20flowers\x20are\x20dead.';
            if (this['type'] == 'Blood\x20Mandible' && this['rarity'] >= 0xd)
                this['description'] = 'Has\x20a\x2015%\x20chance\x20of\x20doing\x2020x\x20damage.\x20Critical\x20chance\x20increases\x20to\x2030%\x20when\x203\x20or\x20more\x20flowers\x20are\x20dead.\x20Only\x20deals\x20self\x20damage\x20on\x20critical\x20hits.';
            if (this['type'] == 'Basic' && this['rarity'] >= 0x7)
                this['description'] = 'A\x20nice\x20petal,\x20not\x20very\x20strong.\x20Has\x20a\x200.1%\x20chance\x20to\x20increase\x20special\x20wave\x20chance\x20by\x20' + (this['rarity'] - 0x7) + '%\x20every\x20tick.';
            if (this['type'] == 'Faster' && this['rarity'] >= 0xd)
                this['description'] += '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            if (this['type'] == 'Amulet\x20of\x20Grace' && this['rarity'] == 0xb)
                this['description'] = 'Forged\x20by\x20the\x20Ancients\x20to\x20extend\x20their\x20life,\x20it\x20has\x20long\x20since\x20lost\x20the\x20flame\x20that\x20fueled\x20it.\x20Maybe\x20if\x20it\x20was\x20ignited\x20again,\x20it\x20could\x20be\x20used\x20to\x20extend\x20your\x20own\x20life\x20once\x20more...';
            if (this['type'] == 'Amulet\x20of\x20Grace' && this['rarity'] < 0xb)
                this['description'] = 'An\x20odd,\x20warm\x20feeling\x20overtakes\x20you\x20as\x20you\x20peer\x20into\x20the\x20gem.\x20You\x20grow\x20calm,\x20but\x20it\x20was\x20only\x20for\x20a\x20moment.\x20Could\x20a\x20more\x20powerful\x20amulet\x20could\x20harness\x20more\x20of\x20this\x20magic..?';
            if (this['type'] == 'Amulet\x20of\x20Time' && this['rarity'] == 0xb)
                this['description'] = 'In\x20times\x20since\x20past,\x20this\x20was\x20fought\x20over\x20relentlessly\x20as\x20it\x20was\x20believed\x20to\x20slow\x20the\x20enemies\x20advances.\x20Lacking\x20the\x20power\x20it\x20once\x20had,\x20maybe\x20if\x20recharged\x20it\x20could\x20aid\x20against\x20the\x20onslaught...';
            if (this['type'] == 'Amulet\x20of\x20Time' && this['rarity'] < 0xb)
                this['description'] = 'Staring\x20into\x20the\x20darkness\x20within,\x20memories\x20of\x20a\x20time\x20long\x20lost\x20fade\x20in\x20and\x20out.\x20A\x20faint\x20glow\x20eminates\x20from\x20the\x20deep\x20center.\x20Perhaps\x20if\x20this\x20amulet\x20had\x20more\x20power..?';
            if (this['type'] == 'Amulet\x20of\x20Divergence' && this['rarity'] == 0xb)
                this['description'] = 'This\x20was\x20merely\x20the\x20prototype\x20to\x20something\x20of\x20far\x20greater\x20strength...\x20capable\x20of\x20warping\x20reality\x20itself.\x20Perhaps\x20merging\x20them\x20can\x20generate\x20power\x20enough\x20to\x20use\x20it\x20for\x20your\x20own\x20conquest?';
            if (this['type'] == 'Amulet\x20of\x20Divergence' && this['rarity'] < 0xb)
                this['description'] = 'Faint\x20lights\x20appear\x20from\x20within\x20deep\x20inside\x20the\x20stored\x20gem.\x20There\x20appears\x20to\x20be\x20movement\x20inside,\x20but\x20it\x27s\x20too\x20hard\x20to\x20discern\x20what\x20is\x20causing\x20it.\x20What\x20if\x20more\x20power\x20was\x20contained..?';
            if (this['type'] == 'Jelly' && this['rarity'] >= 0xd)
                this['description'] = 'With\x20advanced\x20technological\x20advancements\x20from\x20bioengineered\x20Jellyfish,\x20this\x20Jelly\x20only\x20deals\x20knockback\x20if\x20you\x20are\x20defending.';
            if (this['type'] == 'Powder' && this['rarity'] >= 0xd)
                this['description'] = 'Increases\x20movement\x20speed\x20if\x20not\x20attacking,\x20but\x20decreases\x20health.\x20Reduces\x20player\x20radius.\x20Does\x20not\x20stack.';
            if (this['type'] == 'Neutron\x20Star' && this['rarity'] >= 0xd)
                this['description'] = 'A\x20decoy\x20that\x20forcefully\x20attracts\x20mobs\x20with\x20the\x20strength\x20of\x20gravity.\x20Free\x20will\x20is\x20just\x20an\x20illusion\x20after\x20all.\x20Aims\x20in\x20your\x20movement\x20direction.\x20Causes\x20mobs\x20to\x20forcefully\x20compress\x20into\x20each\x20other,\x20slowly\x20wearing\x20off\x20over\x203\x20seconds.';
            if (this['type'] == 'Honey' && this['rarity'] >= 0x8)
                this['description'] = 'A\x20rocket-powered\x20decoy\x20that\x20attracts\x20mobs\x20away\x20from\x20flowers.';
            if (this['type'] == 'Horn')
                this['description'] = [
                    {
                        'text': 'If\x20the\x20current\x20wave\x20has\x20ended,\x20this\x20petal\x20calls\x20for\x20the\x20next\x20wave\x20to\x20start\x20if\x20there\x20are\x20under\x20a\x20certain\x20number\x20of\x20mobs\x20remaining.\x20It\x20also\x20instantly\x20vanquishes\x20all\x20remaining\x20mobs\x20under\x20some\x20rarity\x20without\x20drops.\x20Horns\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maximumRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Horn' && this['rarity'] >= 0xd)
                this['description'] = [
                    {
                        'text': 'Not\x20only\x20horns\x20the\x20wave,\x20but\x20also\x20gives\x20a\x20slight\x20chance\x20for\x20every\x20horned\x20mob\x20to\x20give\x20drops\x20regardless.\x20Horns\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maximumRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Magnet' && this['rarity'] >= 0xe)
                this['description'] = 'Collects\x20drops\x20from\x20further\x20away,\x20blocks\x20electric\x20attacks\x20and\x20gives\x20a\x20slight\x20chance\x20to\x20duplicate\x20drops\x20for\x20yourself\x20upon\x20pickup.';
            if (this['type'] == 'Jolt' && this['rarity'] >= 0xd)
                this['description'] = 'A\x20jolt\x20so\x20powerful,\x20it\x20teleports\x20all\x20players\x20and\x20pets\x20across\x20the\x20map,\x20at\x20the\x20cost\x20of\x20a\x20high\x20cooldown\x20time.\x20Great\x20for\x20escaping\x20threats!';
            if (this['type'] == 'Bubble' && this['rarity'] >= 0xd)
                this['description'] = 'Stated\x20to\x20be\x20the\x20oldest\x20bubble\x20ever,\x20this\x20ancient\x20sphere\x20has\x20since\x20propagated\x20into\x20every\x20bubble\x20that\x20has\x20come\x20since\x20it\x27s\x20inception.\x20Harnessing\x20its\x20bubble\x20blowing\x20abilities\x20will\x20allow\x20you\x20to\x20create\x20your\x20own\x20to\x20aid\x20you.';
            if (this['type'] == 'Bubble' && this['rarity'] >= 0xe)
                this['description'] = 'An\x20even\x20older\x20bubble.\x20This\x20unc\x20sphere\x20has\x20had\x20nearly\x2067\x20millenia\x20of\x20existence.\x20It\x20not\x20only\x20blows\x20a\x20really\x20fat\x20bubble,\x20but\x20it\x20teleports\x20to\x20you\x20every\x20second.';
            if (this['type'] == 'Amulet\x20of\x20Divergence' && this['rarity'] >= 0xe)
                this['description'] = 'An\x20ancient\x20relic\x20believed\x20to\x20have\x20the\x20power\x20of\x20creating\x20a\x20false\x20reality.\x20Limited\x20use\x20per\x20player\x20per\x20game.\x20(Attack\x20or\x20defend\x20to\x20absorb\x20differently;\x20only\x20usable\x20after\x20wave\x20spawning\x20ends)';
            if (this['type'] == 'Waterlogged\x20Compass' && this['rarity'] >= 0xe)
                this['description'] = 'Shows\x20the\x20number\x20of\x20the\x20highest\x20rarity\x20spawning,\x20and\x20also\x20shows\x20Wave\x20Data,\x20but\x20only\x20after\x20all\x20mobs\x20have\x20already\x20spawned.';
            if (this['type'] == 'Ruby')
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20friendship.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxReviveRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maxReviveRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Emerald')
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20genesis.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maxDuplicationRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Sapphire')
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20transformation.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maxConversionRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Emerald' && this['rarity'] >= 0xd)
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20genesis.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maxDuplicationRarity']]['color']
                    },
                    {
                        'text': 'mobs.\x20Converting',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maxDuplicationRarity']]['color']
                    },
                    {
                        'text': 'mobs\x20disables\x20the\x20slot\x20for\x20the\x20rest\x20of\x20the\x20wave.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Sapphire' && this['rarity'] >= 0xd)
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20transformation.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maxConversionRarity']]['color']
                    },
                    {
                        'text': 'mobs.\x20Converting',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maxConversionRarity']]['color']
                    },
                    {
                        'text': 'mobs\x20disables\x20the\x20slot\x20for\x20the\x20rest\x20of\x20the\x20wave.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Ruby' && _0x548618['minimumConvert'])
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20friendship.',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['minimumConvert'] - 0x1]['name'],
                        'color': Colors['rarities'][_0x548618['minimumConvert'] - 0x1]['color']
                    },
                    {
                        'text': 'rarity\x20mobs\x20and\x20below\x20get\x20converted\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxReviveRarity']]['name'],
                        'color': Colors['rarities'][_0x548618['maxReviveRarity']]['color']
                    },
                    {
                        'text': 'summons,\x20but',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['minimumConvert']]['name'],
                        'color': Colors['rarities'][_0x548618['minimumConvert']]['color']
                    },
                    {
                        'text': 'rarity\x20mobs\x20and\x20above\x20get\x20converted\x20into',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxReviveRarity'] + 0x1]['name'],
                        'color': Colors['rarities'][_0x548618['maxReviveRarity'] + 0x1]['color']
                    },
                    {
                        'text': 'summons.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Shiny\x20Bubble' && this['rarity'] >= 0xe)
                this['description'] = 'Propels\x20the\x20flower\x20in\x20the\x20direction\x20you\x20are\x20facing.\x20Teleportation\x20keybind\x20is\x20[F].';
            if (this['type'] == 'Shiny\x20Leaf')
                this['description'] = this['description'] = [
                    {
                        'text': Descriptions['petals']['Shiny\x20Leaf'] + '\x20Requires',
                        'color': '#ffffff'
                    },
                    {
                        'text': 'Constant\x20Healing',
                        'color': statColors['heal']
                    },
                    {
                        'text': 'stronger\x20than\x20' + formatAmountHighPrecision(_0x548618['health'] / 0x6) + '/s.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Shiny\x20Iris')
                this['description'] = this['description'] = [
                    {
                        'text': 'Blessed\x20with\x20the\x20power\x20of\x20the\x20sun\x20god\x20himself,\x20this\x20glowing\x20iris\x20decimates\x20waves\x20of\x20enemies\x20with\x20potent',
                        'color': '#ffffff'
                    },
                    {
                        'text': 'poison',
                        'color': statColors['poison']
                    },
                    {
                        'text': 'sourced\x20from\x20the\x20skies.\x20The\x20more\x20enemies\x20that\x20are\x20struck,\x20the\x20more\x20the',
                        'color': '#ffffff'
                    },
                    {
                        'text': 'poison',
                        'color': statColors['poison']
                    },
                    {
                        'text': 'hurts\x20for\x20all\x20of\x20them.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Shiny\x20Lightning')
                this['description'] = this['description'] = [
                    {
                        'text': 'Blessed\x20with\x20the\x20might\x20of\x20Thor,\x20this\x20shockingly\x20deadly',
                        'color': '#ffffff'
                    },
                    {
                        'text': 'lightning',
                        'color': statColors['lightning']
                    },
                    {
                        'text': 'can\x20clear\x20crowds\x20of\x20enemies\x20like\x20no\x20other.\x20The\x20more\x20it\x20chains,\x20the\x20harder\x20it\x20hits\x20(up\x20to\x20a\x20maximum).',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Shiny\x20Egg')
                this['description'] = this['description'] = [
                    {
                        'text': 'This\x20egg\x20hatches\x20a\x20very\x20hungy\x20beetle!\x20Each\x20kill\x20you\x20get,\x20it\x20grows\x20in\x20size,\x20to\x20a\x20max.\x20Mobs\x20that\x20are\x20both\x20below\x20rarity',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x548618['maxEat'] + 0x1]['name'],
                        'color': Colors['rarities'][_0x548618['maxEat'] + 0x1]['color']
                    },
                    {
                        'text': 'and\x20smaller\x20than\x201/2\x20of\x20the\x20beetle\x20get\x20eaten\x20whole.',
                        'color': '#ffffff'
                    }
                ];
            if (typeof this['description'] == 'string') {
                let _0x4a8621 = this['description'];
                this['description'] = [], this['description']['push']({
                    'text': _0x4a8621,
                    'color': '#ffffff'
                });
            }
            this['topstats'] = [], this['bottomstats'] = [];
            for (let _0x3ae943 in _0x548618) {
                if (!isTs && ['tanksmithRadius']['includes'](_0x3ae943))
                    continue;
                if ([
                        'reload',
                        'lifespan',
                        'hatchTime',
                        'spawnSystem',
                        'timeToPop',
                        'timeLimit'
                    ]['includes'](_0x3ae943)) {
                    if (_0x3ae943 == 'hatchTime' && isTs)
                        continue;
                    if (isTs) {
                        if (_0x3ae943 == 'reload' && _0x548618['tanksmithCooldown']) {
                            this['topstats']['push']({
                                'key': _0x3ae943,
                                'value': _0x548618['tanksmithCooldown'] / 0x1e,
                                'color': statColors[_0x3ae943]
                            });
                            _0x548618['tanksmithShootCooldown'] ? this['topstats']['push']({
                                'key': 'shootCd',
                                'value': _0x548618['tanksmithCooldown'] / 0x1e,
                                'color': statColors[_0x3ae943]
                            }) : this['topstats']['push']({
                                'key': 'shootCd',
                                'value': _0x548618[_0x3ae943],
                                'color': statColors[_0x3ae943]
                            });
                            continue;
                        } else {
                            if (_0x3ae943 == 'reload') {
                                this['topstats']['push']({
                                    'key': _0x3ae943,
                                    'value': _0x548618[_0x3ae943] * 1.5,
                                    'color': statColors[_0x3ae943]
                                });
                                _0x548618['tanksmithShootCooldown'] ? this['topstats']['push']({
                                    'key': 'shootCd',
                                    'value': _0x548618['tanksmithCooldown'] / 0x1e,
                                    'color': statColors[_0x3ae943]
                                }) : this['topstats']['push']({
                                    'key': 'shootCd',
                                    'value': _0x548618[_0x3ae943],
                                    'color': statColors[_0x3ae943]
                                });
                                continue;
                            }
                        }
                    }
                    if (!(_0x3ae943 == 'timeToPop' && _0x548618[_0x3ae943] == 0x0))
                        this['topstats']['push']({
                            'key': _0x3ae943,
                            'value': _0x548618[_0x3ae943],
                            'color': statColors[_0x3ae943]
                        });
                    if (_0x3ae943 == 'spawnSystem') {
                        let _0x289e95 = 0.8;
                        if (this['rarity'] <= 0xd)
                            _0x289e95 *= 2.25;
                        else {
                            if (this['rarity'] >= 0xe)
                                _0x289e95 *= 0.866;
                            if (this['rarity'] == 0xf)
                                _0x289e95 *= 2.875;
                            if (this['rarity'] >= 0x10)
                                _0x289e95 *= 1.5;
                        }
                        this['bottomstats']['push']({
                            'key': 'summon',
                            'value': {
                                'rarity': _0x548618[_0x3ae943][0x0],
                                'type': 'Sandstorm',
                                'amount': _0x548618[_0x3ae943][0x2],
                                'substats': {
                                    'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 1.2,
                                    'health': Stats['enemies']['Sandstorm'][_0x548618[_0x3ae943][0x0]]['health'],
                                    'mass': Stats['enemies']['Sandstorm'][_0x548618[_0x3ae943][0x0]]['mass'] * _0x289e95 * 0x8
                                }
                            },
                            'color': statColors['cooldown']
                        });
                    }
                } else {
                    if (statColors[_0x3ae943]) {
                        if (_0x3ae943 == 'mana' && this['type'] == 'Amulet\x20of\x20Time')
                            this['bottomstats']['push']({
                                'key': 'timeMana',
                                'value': _0x548618[_0x3ae943],
                                'color': Colors['mana']['time']
                            });
                        else {
                            if (_0x3ae943 == 'mana' && this['type'] == 'Amulet\x20of\x20Divergence')
                                this['bottomstats']['push']({
                                    'key': 'divergenceMana',
                                    'value': _0x548618[_0x3ae943],
                                    'color': Colors['mana']['divergence']
                                });
                            else {
                                if (_0x3ae943 == 'mana' && this['type'] == 'Amulet\x20of\x20Grace')
                                    this['bottomstats']['push']({
                                        'key': 'graceMana',
                                        'value': _0x548618[_0x3ae943],
                                        'color': Colors['mana']['grace']
                                    });
                                else {
                                    if ([
                                            'poison',
                                            'slowdownTime',
                                            'flowerBodyPoison',
                                            'summonBodyPoison',
                                            'overhealConversion',
                                            'period',
                                            'extraRange',
                                            'waveHealthBoost',
                                            'shadowTime',
                                            'unrevivable',
                                            'healthNerf',
                                            'radiusChange',
                                            'range',
                                            'collectDupeChance',
                                            'bodyDamage',
                                            'flowerArmor',
                                            'armorPercent',
                                            'maximumMobs',
                                            'petLifespan',
                                            'healingBoost'
                                        ]['includes'](_0x3ae943))
                                        this['bottomstats']['push']({
                                            'key': _0x3ae943,
                                            'value': _0x548618[_0x3ae943],
                                            'color': statColors[_0x3ae943],
                                            'unstackable': !![]
                                        });
                                    else {
                                        if (_0x3ae943 == 'maxDamage' && [
                                                'Shiny\x20Wing',
                                                'Shiny\x20Leaf',
                                                'Shiny\x20Coral'
                                            ])
                                            this['bottomstats']['push']({
                                                'key': 'maxDamage',
                                                'value': _0x548618[_0x3ae943] + _0x548618['damage'],
                                                'color': statColors['damage']
                                            });
                                        else
                                            this['bottomstats']['push']({
                                                'key': _0x3ae943,
                                                'value': _0x548618[_0x3ae943],
                                                'color': statColors[_0x3ae943]
                                            });
                                    }
                                }
                            }
                        }
                        _0x3ae943 == 'damage' && ((this['type'] == 'Lightning' || this['type'] == 'Blueberries' || this['type'] == 'Shiny\x20Lightning') && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x548618[_0x3ae943],
                            'color': statColors['lightning']
                        }), this['type'] == 'Fig' && this['bottomstats']['push']({
                            'key': 'blastDamage',
                            'value': _0x548618[_0x3ae943],
                            'color': statColors['damage']
                        }));
                        if (_0x3ae943 == 'petLifespan') {
                            if (this['type'] == 'Ruby') {
                                let _0x46d12b = 0.8 * Stats['rarities'][this['rarity']]['petalDamage'], _0x2ac4dc = 0xfa0 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': -0x1,
                                        'type': 'Rubied\x20Enemy',
                                        'substats': {
                                            'damage': _0x46d12b,
                                            'health': _0x2ac4dc,
                                            'mass': 'Varies'
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                            if (this['type'] == 'Shiny\x20Ruby') {
                                let _0x3515a7 = 0x1 / 0x8 * Stats['rarities'][this['rarity']]['petalDamage'], _0x51eb79 = 0x1770 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': -0x1,
                                        'type': 'Rubied\x20Enemy',
                                        'substats': {
                                            'damage': _0x3515a7,
                                            'health': _0x51eb79,
                                            'mass': 'Varies.'
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                        }
                    } else {
                        if (_0x3ae943 == 'spawnRarity') {
                            let _0x48646f = 0.8;
                            if (this['rarity'] <= 0xd && (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg'))
                                _0x48646f *= 2.25;
                            else {
                                if (this['rarity'] >= 0xe)
                                    _0x48646f *= 1.375;
                                if (this['rarity'] == 0xf && (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg'))
                                    _0x48646f *= 2.875;
                                if (this['rarity'] >= 0x10)
                                    _0x48646f *= 1.9;
                            }
                            this['type'] == 'Egg' && (this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x548618[_0x3ae943],
                                    'type': 'Beetle',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0x2,
                                        'health': Stats['enemies']['Beetle'][_0x548618[_0x3ae943]]['health'] * 0.8,
                                        'mass': Stats['enemies']['Beetle'][_0x548618[_0x3ae943]]['mass'] * _0x48646f * 0x8
                                    }
                                },
                                'color': statColors['cooldown']
                            }), console['log'](Stats['rarities'][this['rarity']]['petalDamage']));
                            this['type'] == 'Shiny\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x548618[_0x3ae943],
                                    'type': 'Shiny\x20Beetle',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0x6,
                                        'health': Stats['enemies']['Beetle'][_0x548618[_0x3ae943]]['health'] * 0x1,
                                        'mass': [
                                            Stats['enemies']['Shiny\x20Beetle'][_0x548618[_0x3ae943]]['mass'] * _0x48646f * 0x2 * 0x8,
                                            Stats['enemies']['Shiny\x20Beetle'][_0x548618[_0x3ae943]]['mass'] * _0x48646f * 0x2 * 2.5 * 0x8
                                        ]
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            if (this['type'] == 'Ant\x20Egg') {
                                let _0x393a79 = 0x10 * Stats['rarities'][this['rarity']]['petalDamage'];
                                console['log'](this['rarity']), console['log'](_0x393a79);
                                if (this['rarity'] >= 0xa)
                                    _0x393a79 *= 0x4 / 0x5;
                                if (this['rarity'] >= 0xd)
                                    _0x393a79 *= 0x5 / 0x6;
                                if (this['rarity'] >= 0xf)
                                    _0x393a79 *= 0x5 / 0x6;
                                let _0x6cb775 = 0x960 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': _0x548618[_0x3ae943],
                                        'type': 'Soldier\x20Ant',
                                        'substats': {
                                            'damage': _0x393a79,
                                            'health': _0x6cb775,
                                            'mass': Stats['enemies']['Soldier\x20Ant'][_0x548618[_0x3ae943]]['mass'] * _0x48646f
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                            this['type'] == 'Jellyfish\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x548618[_0x3ae943],
                                    'type': 'Jellyfish',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'],
                                        'health': Stats['enemies']['Jellyfish'][_0x548618[_0x3ae943]]['health'] / 0x2,
                                        'mass': Stats['enemies']['Jellyfish'][_0x548618[_0x3ae943]]['mass'] * _0x48646f * 0x8,
                                        'lightning': Stats['enemies']['Jellyfish'][_0x548618[_0x3ae943]]['health'] * (this['rarity'] >= 0xe ? 0.05 : 0.12),
                                        'bounces': _0x548618[_0x3ae943] > 0xb ? _0x548618[_0x3ae943] > 0xd ? 0x4 : 0x3 : 0x2
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Neuroflare\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x548618[_0x3ae943],
                                    'type': 'Neuroflare',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 1.2,
                                        'health': Stats['enemies']['Neuroflare'][_0x548618[_0x3ae943]]['health'],
                                        'mass': Stats['enemies']['Neuroflare'][_0x548618[_0x3ae943]]['mass'] * _0x48646f,
                                        'lightning': Stats['enemies']['Neuroflare'][_0x548618[_0x3ae943]]['health'] * (this['rarity'] >= 0xe ? 0.025 : 0.06),
                                        'bounces': _0x548618[_0x3ae943] > 0xb ? _0x548618[_0x3ae943] > 0xd ? 0x4 : 0x3 : 0x2
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Plastic\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x548618[_0x3ae943],
                                    'type': 'Plastic',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Plastic'][_0x548618[_0x3ae943]]['health'],
                                        'mass': Stats['enemies']['Plastic'][_0x548618[_0x3ae943]]['mass'] * _0x48646f
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Square' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x548618[_0x3ae943],
                                    'type': 'Square',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Square'][_0x548618[_0x3ae943]]['health'],
                                        'mass': Stats['enemies']['Square'][_0x548618[_0x3ae943]]['mass'] * _0x48646f
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Pentagon' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x548618[_0x3ae943],
                                    'type': 'Pentagon',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Pentagon'][_0x548618[_0x3ae943]]['health'],
                                        'mass': Stats['enemies']['Pentagon'][_0x548618[_0x3ae943]]['mass'] * _0x48646f
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Hexagon' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x548618[_0x3ae943],
                                    'type': 'Hexagon',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Hexagon'][_0x548618[_0x3ae943]]['health'],
                                        'mass': Stats['enemies']['Hexagon'][_0x548618[_0x3ae943]]['mass'] * _0x48646f
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            if (this['type'] == 'Bubble' && this['rarity'] >= 0xd) {
                                let _0x169260 = Stats['enemies']['Bubble'][_0x548618[_0x3ae943]]['mass'] / 0x64 * _0x48646f * 0x50;
                                if (this['rarity'] == 0xd)
                                    _0x169260 *= 0x2;
                                if (this['rarity'] >= 0xf)
                                    _0x169260 *= 0x2;
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': _0x548618[_0x3ae943],
                                        'type': 'Bubble',
                                        'substats': {
                                            'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.1,
                                            'health': Stats['enemies']['Bubble'][_0x548618[_0x3ae943]]['health'] * 0.005,
                                            'mass': _0x169260,
                                            'maxEnemyBoost': _0x169260 * 1.5
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                        } else {
                            if (_0x3ae943 == 'damageHeal') {
                                if (_0x548618[_0x3ae943] > 0x0)
                                    this['bottomstats']['push']({
                                        'key': 'lifesteal',
                                        'value': _0x548618[_0x3ae943],
                                        'color': statColors['heal']
                                    });
                                else
                                    _0x548618[_0x3ae943] < 0x0 && this['bottomstats']['push']({
                                        'key': 'selfDamage',
                                        'value': -_0x548618[_0x3ae943],
                                        'color': statColors['damage']
                                    });
                            } else {
                                if (_0x3ae943 == 'petalNum')
                                    this['bottomstats']['push']({
                                        'key': 'mimickedPetals',
                                        'value': _0x548618[_0x3ae943],
                                        'color': statColors['extraRange']
                                    });
                                else
                                    _0x3ae943 == 'shield' && this['bottomstats']['push']({
                                        'key': _0x3ae943,
                                        'value': formatAmountHighPrecision(_0x548618[_0x3ae943]),
                                        'color': '#ffffff'
                                    });
                            }
                        }
                    }
                }
            }
            !isTs && ([
                'Rose',
                'Dust',
                'Jolt',
                'Blood\x20Jolt',
                'Shell',
                'Dahlia',
                'Amulet\x20of\x20Grace',
                'Shard\x20of\x20Grace'
            ]['includes'](this['type']) && this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0.32,
                'color': statColors['damage']
            }), [
                'Missile',
                'Blade',
                'Carrot',
                'Fire\x20Missile',
                'Homing\x20Missile',
                'Spore',
                'Dandelion',
                'Peas',
                'Blueberries',
                'Pomegranate',
                'Grapes',
                'Pollen',
                'Honey',
                'Neutron\x20Star',
                'Web',
                'Lilypad',
                'Neurotoxin',
                'Bloodshot\x20Eye'
            ]['includes'](this['type']) && ((this['type'] == 'Missile' || this['type'] == 'Fire\x20Missile') && this['rarity'] == 0x10 ? this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0.05,
                'color': statColors['damage']
            }) : this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0.5,
                'color': statColors['damage']
            })), [
                'Amulet\x20of\x20Divergence',
                'Shard\x20of\x20Divergence',
                'Amulet\x20of\x20Time'
            ]['includes'](this['type']) && this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0x1,
                'color': statColors['damage']
            }), [
                'Bud',
                'Bloom',
                'Thomas'
            ]['includes'](this['type']) && this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0.2,
                'color': statColors['damage']
            }), ['Ikea']['includes'](this['type']) && this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0x2,
                'color': statColors['damage']
            }));
            if (this['type'] == 'Trinket\x20of\x20the\x20Wild') {
                let _0x1a1b83 = 0.8;
                if (this['rarity'] >= 0xe)
                    _0x1a1b83 *= 1.375;
                if (this['rarity'] >= 0x10)
                    _0x1a1b83 *= 1.5;
                let _0x393330 = 3.4 * Stats['rarities'][this['rarity']]['petalDamage'], _0x5bc0fd = 0x1f4 * Stats['rarities'][this['rarity']]['petalHealth'];
                this['bottomstats']['push']({
                    'key': 'summon',
                    'value': {
                        'rarity': _0x548618['maximumRarity'],
                        'type': 'Mossy\x20Ruby',
                        'substats': {
                            'damage': _0x393330,
                            'health': _0x5bc0fd,
                            'mass': Stats['enemies']['Ruby'][_0x548618['maximumRarity']]['mass'] * _0x1a1b83
                        }
                    },
                    'color': statColors['cooldown']
                });
            }
            if (this['type'] == 'Trinket\x20of\x20the\x20Hivemind') {
                let _0x1b804e = 0.8;
                if (this['rarity'] >= 0xe)
                    _0x1b804e *= 1.375;
                if (this['rarity'] >= 0x10)
                    _0x1b804e *= 1.5;
                let _0x564371 = 0x25 * Stats['rarities'][this['rarity']]['petalDamage'];
                if (this['rarity'] >= 0xa)
                    _0x564371 *= 0x4 / 0x5;
                if (this['rarity'] >= 0xd)
                    _0x564371 *= 0x5 / 0x6;
                if (this['rarity'] >= 0xf)
                    _0x564371 *= 0x5 / 0x6;
                let _0xa13cca = 0xc80 * Stats['rarities'][this['rarity']]['petalHealth'];
                this['bottomstats']['push']({
                    'key': 'summon',
                    'value': {
                        'rarity': _0x548618['maximumRarity'],
                        'type': 'Soldier\x20Termite',
                        'substats': {
                            'damage': _0x564371,
                            'health': _0xa13cca,
                            'mass': Stats['enemies']['Soldier\x20Termite'][_0x548618['maximumRarity']]['mass'] * _0x1b804e
                        }
                    },
                    'color': statColors['cooldown']
                });
            }
        } else {
            _0x548618 = cachedStats['enemies'][this['type']][this['rarity']];
            if (this['type'] == 'Hexagon')
                this['name'] = 'ӇЄҲƛƓƠƝ';
            if (typeof this['description'] == 'string') {
                let _0x1f3316 = this['description'];
                this['description'] = [], this['description']['push']({
                    'text': _0x1f3316,
                    'color': '#ffffff'
                });
            }
            this['topstats'] = [], this['bottomstats'] = [];
            for (let _0x3089b9 in _0x548618) {
                if (!isTs && ['tanksmithRadius']['includes'](_0x3089b9))
                    continue;
                if (['xp']['includes'](_0x3089b9))
                    this['topstats']['push']({
                        'key': _0x3089b9,
                        'value': _0x548618[_0x3089b9],
                        'color': statColors[_0x3089b9]
                    });
                else {
                    if (statColors[_0x3089b9]) {
                        this['bottomstats']['push']({
                            'key': _0x3089b9,
                            'value': _0x548618[_0x3089b9],
                            'color': statColors[_0x3089b9]
                        });
                        if (_0x3089b9 == 'damage')
                            this['type'] == 'Firefly' && this['bottomstats']['push']({
                                'key': 'lightning',
                                'value': _0x548618[_0x3089b9] * 0.125,
                                'color': statColors['lightning']
                            });
                        _0x3089b9 == 'damage' && (this['type'] == 'Jellyfish' && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x548618[_0x3089b9] * 1.5,
                            'color': statColors['lightning']
                        }), this['type'] == 'Neuroflare' && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x548618[_0x3089b9] * 0.8,
                            'color': statColors['lightning']
                        }), (this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel') && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x548618[_0x3089b9],
                            'color': statColors['lightning']
                        }));
                        if (_0x3089b9 == 'health')
                            (this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel') && this['bottomstats']['push']({
                                'key': 'lifesteal',
                                'value': _0x548618[_0x3089b9] * 0.00125,
                                'color': statColors['heal']
                            });
                        if (_0x3089b9 == 'health')
                            (this['type'] == 'Leech' || this['type'] == 'BudLeech' || this['type'] == 'Tick') && this['bottomstats']['push']({
                                'key': 'lifesteal',
                                'value': _0x548618[_0x3089b9] * 0.0025,
                                'color': statColors['heal']
                            });
                    } else
                        _0x3089b9 == 'drops' && this['bottomstats']['push']({
                            'key': _0x3089b9,
                            'value': _0x548618[_0x3089b9],
                            'color': '#ffffff'
                        }), _0x3089b9 == 'healing' && this['bottomstats']['push']({
                            'key': 'regeneration',
                            'value': _0x548618[_0x3089b9] * _0x548618['health'] * 0x1e,
                            'color': statColors['heal']
                        });
                }
            }
        }
    }
    ['generateArtifactData']() {
        this['topstats'] = [], this['bottomstats'] = [];
        if (typeof SKILL_TREES !== 'undefined' && SKILL_TREES[this['type']]) {
            const _0x1f1038 = SKILL_TREES[this['type']];
            this['description'] = [{
                    'text': _0x1f1038['description'],
                    'color': _0x1f1038['color'] || '#ffffff'
                }];
        }
        const _0x39ca83 = window['specialGlobalInventory']?.['artifacts']?.[this['type']], _0x307da6 = _0x39ca83?.['skillLevels'] || {}, _0x2110fe = _0x10dc59 => {
                let _0x3fcb58 = 0x0;
                for (const [_0x457971, _0x19be64] of Object['entries'](_0x307da6)) {
                    typeof _0x19be64 === 'number' && _0x457971['startsWith'](_0x10dc59) && (_0x3fcb58 += _0x19be64);
                }
                return _0x3fcb58;
            };
        switch (this['type']) {
        case 'Abyssal\x20Artifact':
            const _0x3470ed = _0x2110fe('egg_hp'), _0x21a751 = _0x2110fe('egg_damage'), _0x25a897 = _0x2110fe('egg_mass');
            this['bottomstats']['push']({
                'key': 'eggHpMultiplier',
                'value': 1.4 + _0x3470ed * 0.05,
                'displayName': 'Egg\x20HP:\x20x' + (1.4 + _0x3470ed * 0.05)['toFixed'](0x2),
                'color': statColors['eggHpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'eggDamageMultiplier',
                'value': 1.4 + _0x21a751 * 0.05,
                'displayName': 'Egg\x20Damage:\x20x' + (1.4 + _0x21a751 * 0.05)['toFixed'](0x2),
                'color': statColors['eggDamageMultiplier']
            }), this['bottomstats']['push']({
                'key': 'eggMassMultiplier',
                'value': 1.4 + _0x25a897 * 0.05,
                'displayName': 'Egg\x20Mass:\x20x' + (1.4 + _0x25a897 * 0.05)['toFixed'](0x2),
                'color': statColors['eggMassMultiplier']
            });
            break;
        case 'Scorched\x20Artifact':
            const _0x3344ff = _0x2110fe('heal_mult');
            this['bottomstats']['push']({
                'key': 'healMultiplier',
                'value': 1.2 + _0x3344ff * 0.1,
                'displayName': 'Heal:\x20x' + (1.2 + _0x3344ff * 0.1)['toFixed'](0x2),
                'color': statColors['healMultiplier']
            }), this['bottomstats']['push']({
                'key': 'squadHealShare',
                'value': 0.33,
                'displayName': 'Squad\x20Heal:\x2033%',
                'color': statColors['squadHealShare']
            });
            break;
        case 'Verdant\x20Artifact':
            const _0x39396d = _0x2110fe('dps'), _0x5060a1 = _0x2110fe('ult_cd');
            this['bottomstats']['push']({
                'key': 'dpsMultiplier',
                'value': 1.5 + _0x39396d * 0.05,
                'displayName': 'DPS:\x20x' + (1.5 + _0x39396d * 0.05)['toFixed'](0x2),
                'color': statColors['dpsMultiplier']
            });
            _0x5060a1 > 0x0 && this['bottomstats']['push']({
                'key': 'cooldownReduction',
                'value': _0x5060a1 * 0.05,
                'displayName': 'Petal\x20CD:\x20-' + (_0x5060a1 * 0x5)['toFixed'](0x0) + '%',
                'color': statColors['dpsMultiplier']
            });
            break;
        case 'Cosmic\x20Artifact':
            const _0x59090b = _0x2110fe('hp_mult'), _0x1ca7b1 = _0x2110fe('range'), _0x38db3f = _0x2110fe('knockback'), _0xf97de9 = _0x2110fe('ult_cd');
            this['bottomstats']['push']({
                'key': 'hpMultiplier',
                'value': 1.2 + _0x59090b * 0.1,
                'displayName': 'HP:\x20x' + (1.2 + _0x59090b * 0.1)['toFixed'](0x2),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'ultRange',
                'value': 0x1f4 + _0x1ca7b1 * 0x14,
                'displayName': 'Ult\x20Range:\x20' + (0x1f4 + _0x1ca7b1 * 0x14),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'ultBubbleLvl',
                'value': _0x59090b + _0xf97de9 + _0x1ca7b1 + _0x38db3f,
                'displayName': 'Bubble\x20Lv:\x20' + Math['min'](_0x59090b + _0xf97de9 + _0x1ca7b1 + _0x38db3f, 0x22),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'knockbackMult',
                'value': 0x1 + _0x38db3f * 0.05,
                'displayName': 'Knockback:\x20x' + (0x1 + _0x38db3f * 0.05)['toFixed'](0x2),
                'color': statColors['hpMultiplier']
            });
            const _0x3d3263 = Math['max'](0x3c + _0xf97de9 * -1.5, 0xa);
            this['bottomstats']['push']({
                'key': 'ultCooldown',
                'value': _0x3d3263,
                'displayName': 'Ult\x20CD:\x20' + _0x3d3263 + 's',
                'color': statColors['hpMultiplier']
            });
            break;
        case 'Chimera':
            const _0x49cad8 = _0x2110fe('damage'), _0x4cdc52 = _0x2110fe('speed'), _0x56ba99 = _0x2110fe('hp'), _0x57abd8 = _0x2110fe('ult_cd');
            this['bottomstats']['push']({
                'key': 'mobDamageMultiplier',
                'value': 1.5 + _0x49cad8 * 0.1,
                'displayName': 'Mob\x20Damage:\x20x' + (1.5 + _0x49cad8 * 0.1)['toFixed'](0x2),
                'color': statColors['mobDamageMultiplier'] || '#ff6666'
            }), this['bottomstats']['push']({
                'key': 'mobSpeedMultiplier',
                'value': 0x1 + _0x4cdc52 * 0.05,
                'displayName': 'Mob\x20Speed:\x20x' + (0x1 + _0x4cdc52 * 0.05)['toFixed'](0x2),
                'color': statColors['mobSpeedMultiplier'] || '#99ccff'
            }), this['bottomstats']['push']({
                'key': 'mobHpMultiplier',
                'value': 0x1 + _0x56ba99 * 0.1,
                'displayName': 'Mob\x20HP:\x20x' + (0x1 + _0x56ba99 * 0.1)['toFixed'](0x2),
                'color': statColors['mobHpMultiplier'] || '#ff9999'
            });
            const _0x14e495 = Math['max'](0xa - _0x57abd8 * 0.5, 0x3);
            this['bottomstats']['push']({
                'key': 'abilityCooldown',
                'value': _0x14e495,
                'displayName': 'Ability\x20CD:\x20' + _0x14e495['toFixed'](0x1) + 's',
                'color': statColors['abilityCooldown'] || '#ffcc66'
            });
            break;
        }
    }
    ['stripRomanNumeral'](_0x5c7060) {
        return _0x5c7060['replace'](/\s+[IVX]+$/, '');
    }
    ['drawArtifactTooltip']() {
        const _0x403d8e = window['specialGlobalInventory'], _0x204eb2 = _0x403d8e?.['artifacts']?.[this['type']], _0x7c68e7 = _0x204eb2?.['skillLevels'] || {}, _0x33ecce = SKILL_TREES?.[this['type']];
        if (!_0x33ecce)
            return;
        const _0x28db3d = this['type'], _0x5b8c53 = _0x33ecce['color'] || '#ffffff', _0x676fc3 = _0x33ecce['description'] || '', _0x39b414 = {};
        for (const _0x333398 of _0x33ecce['nodes']) {
            if (_0x333398['isRoot'] || !_0x333398['statKey'])
                continue;
            const _0x19ea32 = _0x333398['id']['replace'](/_\d+$/, '');
            !_0x39b414[_0x19ea32] && (_0x39b414[_0x19ea32] = {
                'statKey': _0x333398['statKey'],
                'baseValue': _0x333398['baseValue'],
                'valuePerLevel': _0x333398['valuePerLevel'],
                'totalLevels': 0x0,
                'displayName': _0x333398['name']
            });
        }
        for (const [_0x2ad764, _0x474017] of Object['entries'](_0x7c68e7)) {
            const _0x8d99b7 = _0x2ad764['replace'](/_\d+$/, '');
            _0x39b414[_0x8d99b7] && (_0x39b414[_0x8d99b7]['totalLevels'] += _0x474017);
        }
        let _0x2348b6 = [];
        for (const [_0x46dfcc, _0x133e5a] of Object['entries'](_0x39b414)) {
            if (_0x133e5a['totalLevels'] === 0x0 && _0x133e5a['baseValue'] === 0x0)
                continue;
            let _0x302dd6 = _0x133e5a['baseValue'] + _0x133e5a['totalLevels'] * _0x133e5a['valuePerLevel'];
            _0x133e5a['statKey'] === 'cooldownReduction' && (_0x302dd6 = _0x302dd6 * 0x64);
            const _0x5b60ad = this['stripRomanNumeral'](_0x133e5a['displayName']), _0x4f74d8 = {
                    'key': _0x5b60ad,
                    'value': _0x302dd6,
                    'format': this['getValueFormat'](_0x133e5a['statKey'])
                };
            _0x2348b6['push'](_0x4f74d8);
        }
        _0x33ecce['passiveEffects']?.['squadHealShare'] && _0x2348b6['push']({
            'key': 'Squad\x20Heal',
            'value': _0x33ecce['passiveEffects']['squadHealShare'] * 0x64,
            'format': 'percent'
        });
        ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu';
        const _0xf30a88 = ctx['measureText'](_0x28db3d)['width'];
        ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu';
        const _0x1a5793 = 0x118, _0x1dab11 = this['wrapText'](_0x676fc3, _0x1a5793, 0.75 * 22.5), _0x3874eb = Math['max'](..._0x1dab11['map'](_0x4e7686 => ctx['measureText'](_0x4e7686)['width']));
        let _0x2632c3 = 0x0;
        for (const _0x27ab23 of _0x2348b6) {
            const _0x361e04 = this['formatStatValue'](_0x27ab23);
            _0x2632c3 = Math['max'](_0x2632c3, ctx['measureText'](_0x361e04)['width']);
        }
        const _0xaf88e3 = Math['max'](_0xf30a88 + 0x14, Math['max'](_0x3874eb + 0x14, _0x2632c3 + 0x14)), _0x800b28 = 0x4b + _0x1dab11['length'] * 22.5 + _0x2348b6['length'] * 22.5 + 0xa, _0x18e95b = Math['min'](canvas['w'] - 0x5 - _0xaf88e3 / 0x2, Math['max'](0x5, -_0xaf88e3 / 0x2 + this['x'])), _0x113703 = window['state'] === 'menu';
        let _0xe2b1db;
        if (_0x113703)
            _0xe2b1db = Math['min'](canvas['h'] - 0x5 - _0x800b28, Math['max'](0x5, this['y']));
        else {
            _0xe2b1db = Math['max'](0x5, this['y']);
            if (_0xe2b1db + _0x800b28 > canvas['h'] - 0x5) {
                const _0x359955 = this['y'] + _0x800b28 + 0x41 / 0x2 + 11.5;
                _0xe2b1db = _0x359955 + 0x41 / 0x2 + 11.5, _0xe2b1db = Math['min'](canvas['h'] - 0x5 - _0x800b28, Math['max'](0x5, _0xe2b1db));
            }
        }
        ctx['save'](), ctx['shadowColor'] = '#FFD700', ctx['shadowBlur'] = 0xf, ctx['strokeStyle'] = '#FFD700', ctx['lineWidth'] = 0x2, ctx['fillStyle'] = 'rgba(255,\x20215,\x200,\x200.3)', ctx['beginPath'](), ctx['roundRect'](_0x18e95b, _0xe2b1db, _0xaf88e3, _0x800b28, 0x5), ctx['fill'](), ctx['stroke'](), ctx['restore'](), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = _0x5b8c53, ctx['textAlign'] = 'left', ctx['textBaseline'] = 'top', ctx['strokeText'](_0x28db3d, _0x18e95b + 0xa, _0xe2b1db + 0xa), ctx['fillText'](_0x28db3d, _0x18e95b + 0xa, _0xe2b1db + 0xa), ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff';
        let _0x2d4518 = _0xe2b1db + 0x32;
        for (const _0x2f8447 of _0x1dab11) {
            ctx['strokeText'](_0x2f8447, _0x18e95b + 0xa, _0x2d4518), ctx['fillText'](_0x2f8447, _0x18e95b + 0xa, _0x2d4518), _0x2d4518 += 22.5;
        }
        let _0x7631da = _0x2d4518 + 0x5;
        const _0x312572 = [
            '#FF6B6B',
            '#4ECDC4',
            '#FFE66D',
            '#95E1D3',
            '#F38181'
        ];
        for (let _0x45f0ec = 0x0; _0x45f0ec < _0x2348b6['length']; _0x45f0ec++) {
            const _0x4b23e4 = _0x2348b6[_0x45f0ec], _0x274a42 = _0x312572[_0x45f0ec % _0x312572['length']];
            let _0x1fadaa;
            switch (_0x4b23e4['format']) {
            case 'multiplier':
                _0x1fadaa = 'x' + _0x4b23e4['value']['toFixed'](0x2);
                break;
            case 'percent':
                _0x1fadaa = _0x4b23e4['value']['toFixed'](0x0) + '%';
                break;
            case 'negative_percent':
                _0x1fadaa = '-' + _0x4b23e4['value']['toFixed'](0x0) + '%';
                break;
            case 'time':
                _0x1fadaa = _0x4b23e4['value']['toFixed'](0x1) + 's';
                break;
            default:
                _0x1fadaa = _0x4b23e4['value']['toFixed'](0x2);
            }
            const _0x4f8505 = _0x4b23e4['key'] + ':';
            ctx['fillStyle'] = _0x274a42, ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x4f8505, _0x18e95b + 0xa, _0x7631da), ctx['fillText'](_0x4f8505, _0x18e95b + 0xa, _0x7631da);
            const _0x3b7887 = ctx['measureText'](_0x4f8505)['width'];
            ctx['fillStyle'] = '#ffffff', ctx['strokeText']('\x20' + _0x1fadaa, _0x18e95b + 0xa + _0x3b7887, _0x7631da), ctx['fillText']('\x20' + _0x1fadaa, _0x18e95b + 0xa + _0x3b7887, _0x7631da), _0x7631da += 22.5;
        }
    }
    ['getValueFormat'](_0x58c531) {
        if (_0x58c531?.['includes']('Multiplier') || _0x58c531 === 'healMultiplier' || _0x58c531 === 'dpsMultiplier' || _0x58c531 === 'hpMultiplier')
            return 'multiplier';
        if (_0x58c531 === 'cooldownReduction')
            return 'negative_percent';
        if (_0x58c531 === 'cooldown')
            return 'time';
        return 'number';
    }
    ['formatStatValue'](_0x1d9beb) {
        let _0x5975cf;
        switch (_0x1d9beb['format']) {
        case 'multiplier':
            _0x5975cf = 'x' + _0x1d9beb['value']['toFixed'](0x2);
            break;
        case 'percent':
            _0x5975cf = _0x1d9beb['value']['toFixed'](0x0) + '%';
            break;
        case 'negative_percent':
            _0x5975cf = '-' + _0x1d9beb['value']['toFixed'](0x0) + '%';
            break;
        case 'time':
            _0x5975cf = _0x1d9beb['value']['toFixed'](0x1) + 's';
            break;
        default:
            _0x5975cf = _0x1d9beb['value']['toFixed'](0x2);
        }
        return _0x1d9beb['key'] + ':\x20' + _0x5975cf;
    }
    ['wrapText'](_0x2f6a11, _0x4bdab0, _0x4dcda2) {
        ctx['font'] = '900\x20' + _0x4dcda2 + 'px\x20Ubuntu';
        const _0x185f09 = _0x2f6a11['split']('\x20'), _0x1f84b4 = [];
        let _0x98dcd3 = '';
        for (const _0x302d15 of _0x185f09) {
            const _0x2dc2df = _0x98dcd3 + (_0x98dcd3 ? '\x20' : '') + _0x302d15;
            ctx['measureText'](_0x2dc2df)['width'] > _0x4bdab0 && _0x98dcd3 ? (_0x1f84b4['push'](_0x98dcd3), _0x98dcd3 = _0x302d15) : _0x98dcd3 = _0x2dc2df;
        }
        return _0x98dcd3 && _0x1f84b4['push'](_0x98dcd3), _0x1f84b4['length'] > 0x0 ? _0x1f84b4 : [_0x2f6a11];
    }
    ['draw']() {
        if (!this['image']) {
            let _0x436716 = this['generateDesc'](0x12c, 0x1f4);
            this['w'] = _0x436716['width'], this['h'] = 117.5 + _0x436716['height'];
            for (let _0x2c8e8f of this['bottomstats']) {
                const _0x189953 = (_0x2c8e8f['value'] !== 0x0 || _0x2c8e8f['value'][0x0] && _0x2c8e8f['value'][0x0] !== 0x0) && !(this['mode'] == 'enemies' && _0x2c8e8f['key'] == 'detectionDistance' && isNaN(_0x2c8e8f['value']));
                if (_0x189953)
                    this['h'] += 17.5;
                if (_0x2c8e8f['key'] == 'summon')
                    this['h'] += 17.5 * (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg' ? 0x5 : this['type'] == 'Bubble' && this['rarity'] >= 0xd ? 0x4 : 0x3);
                if (_0x2c8e8f['key'] == 'drops') {
                    let _0x14e078 = 0x0, _0x44b1b5 = 0x0;
                    for (let _0x5987fe in _0x2c8e8f['value']) {
                        if (!Array['isArray'](_0x2c8e8f['value'][_0x5987fe])) {
                            _0x44b1b5++;
                            continue;
                        }
                        let _0x2a2baa = 0x0;
                        for (let _0x2b5551 of _0x2c8e8f['value'][_0x5987fe]) {
                            if (_0x2b5551 > 0x0)
                                _0x2a2baa++;
                        }
                        _0x14e078 = Math['max'](_0x14e078, _0x2a2baa);
                        if (_0x2a2baa == 0x0)
                            _0x44b1b5++;
                    }
                    this['w'] = Math['max'](0x19 + _0x14e078 * 67.5, this['w']), this['h'] += (Object['keys'](_0x2c8e8f['value'])['length'] - _0x44b1b5) * 0x55 + 17.5;
                }
                if ([
                        'slowdown',
                        'killBossUnder',
                        'attractionRadius'
                    ]['includes'](_0x2c8e8f['key']) && _0x2c8e8f['value'][0x0]) {
                    let _0x49732d = _0x2c8e8f['value'][0x0], _0x4a6845 = 0x0;
                    for (let _0x40d3e5 of _0x2c8e8f['value']) {
                        if (_0x40d3e5 < 0x1 || _0x40d3e5 == undefined)
                            continue;
                        if (_0x40d3e5 == _0x49732d)
                            continue;
                        _0x4a6845++, _0x49732d = _0x40d3e5;
                    }
                    this['h'] += _0x4a6845 * 17.5;
                }
            }
            this['image'] = this['mode'] == 'petals' ? this['genPcBox']() : this['genEcBox'](), this['isTs'] = isTs;
        } else
            ctx['drawImage'](this['image'], Math['min'](canvas['w'] - 0x5 - this['w'] / 0x2, Math['max'](0x5, -this['w'] / 0x2 + this['x'])), Math['min'](canvas['h'] - 0x5 - this['h'], Math['max'](0x5, this['y'])));
        this['isTs'] !== isTs && (delete this['image'], this['generateData'](this['mode'], this['type'], this['stats']));
    }
    ['genPcBox']() {
        const _0x42a121 = new OffscreenCanvas(this['w'], this['h']), _0x43714f = _0x42a121['getContext']('2d'), _0xf3f720 = ctx;
        ctx = _0x43714f, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['fillStyle'] = '#000000', ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x5), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff', ctx['lineWidth'] = 0x2, ctx['font'] = '900\x20' + 0.9 * 22.5 + 'px\x20Ubuntu', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'top', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0.9 * 3.25, ctx['translate'](this['w'] - 0x23, 0xa), ctx['save'](), ctx['beginPath'](), ctx['arc'](12.5, 12.5, 0xa, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#4CAF50', ctx['lineWidth'] = 2.5, ctx['stroke'](), ctx['beginPath'](), ctx['arc'](12.5, 12.5, 0x6, -0.5, 1.5), ctx['strokeStyle'] = '#4CAF50', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](17.5, 0x8), ctx['lineTo'](0x14, 0xb), ctx['lineTo'](15.5, 0xc), ctx['strokeStyle'] = '#4CAF50', ctx['stroke'](), ctx['restore']();
        let _0x3f5737 = '', _0x3d77fa = 0x1;
        for (let _0x34b3e9 of this['topstats']) {
            if (_0x34b3e9['key'] == 'reload')
                _0x3f5737 += formatAmountHighPrecision(_0x34b3e9['value']) + 's';
            else {
                if (_0x34b3e9['key'] == 'shootCd')
                    _0x3f5737 += formatAmountHighPrecision(_0x34b3e9['value']) + 's';
                else {
                    if (_0x34b3e9['key'] == 'lifespan')
                        _0x3f5737 += formatAmountHighPrecision(_0x34b3e9['value']) + 's';
                    else {
                        if (_0x34b3e9['key'] == 'hatchTime')
                            _0x3f5737 += formatAmountHighPrecision(_0x34b3e9['value']) + 's';
                        else {
                            if (_0x34b3e9['key'] == 'timeToPop')
                                _0x3f5737 += formatAmountHighPrecision(_0x34b3e9['value']) + 's';
                            else
                                _0x34b3e9['key'] == 'spawnSystem' ? _0x3f5737 += formatAmountHighPrecision(_0x34b3e9['value'])[0x1] + 's' : _0x3f5737 += formatAmountHighPrecision(_0x34b3e9['value']);
                        }
                    }
                }
            }
            if (this['topstats']['length'] > 0x1 && _0x3d77fa !== this['topstats']['length'])
                _0x3f5737 += '\x20+\x20';
            _0x3d77fa++;
        }
        ctx['strokeText'](_0x3f5737, -0x5, 2.5), ctx['fillText'](_0x3f5737, -0x5, 2.5), ctx['translate'](-this['w'] + 0x23, 0x0), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['textAlign'] = 'left', ctx['translate'](0xa, 0x0), ctx['strokeText'](this['name'], 0x0, 0x0), ctx['fillText'](this['name'], 0x0, 0x0);
        if (this['amount'] > 0x1) {
            let _0x570e54 = ctx['measureText'](this['name'])['width'] + 7.5;
            ctx['translate'](_0x570e54, 0x4), ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25, ctx['strokeText']('x' + this['amount']['toLocaleString'](), 0x0, 0x4), ctx['fillText']('x' + this['amount']['toLocaleString'](), 0x0, 0x4), ctx['translate'](-_0x570e54, -0x4);
        }
        ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25;
        let _0x533e9b = ![];
        (this['type'] === 'Shattered\x20Relic\x20of\x20Wrath' || this['type'] === 'Reinforced\x20Relic\x20of\x20Wrath' || this['type'] === 'Subset\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Division\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Guard\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Knight\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Aid\x20Relic\x20of\x20Serenity' || this['type'] === 'Subliminal\x20Relic\x20of\x20Serenity' || this['type'] === 'Barrier\x20Relic\x20of\x20Serenity' || this['type'] === 'Token') && this['rarity'] == 0x0 && (_0x533e9b = !![]);
        ctx['fillStyle'] = _0x533e9b == !![] ? '#000000' : Colors['rarities'][this['rarity']]['color'], ctx['translate'](0x0, 0x1e);
        if (this['type'] == 'Hexagon') {
            let _0x45bdad = Colors['rarities'][this['rarity']]['name'], _0x276505 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x5807c8 = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
            _0x45bdad = _0x45bdad['toUpperCase']();
            let _0x27238e = '';
            for (let _0x1f3552 of _0x45bdad) {
                _0x27238e += _0x5807c8[_0x276505['indexOf'](_0x1f3552)] ? _0x5807c8[_0x276505['indexOf'](_0x1f3552)] : _0x1f3552;
            }
            _0x45bdad = _0x27238e, ctx['strokeText'](_0x45bdad, 0x0, 0x0), ctx['fillText'](_0x45bdad, 0x0, 0x0);
        } else
            ctx['strokeText'](_0x533e9b == !![] ? '???' : Colors['rarities'][this['rarity']]['name'], 0x0, 0x0), ctx['fillText'](_0x533e9b == !![] ? '???' : Colors['rarities'][this['rarity']]['name'], 0x0, 0x0);
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['translate'](0x0, 0x2d);
        for (let _0x492634 of this['finalDesc']) {
            let _0x55b0f0 = 0x0;
            for (let _0x30850b of _0x492634) {
                ctx['fillStyle'] = _0x30850b['color'], ctx['strokeText'](_0x30850b['text'], 0x0, 0x0), ctx['fillText'](_0x30850b['text'], 0x0, 0x0), ctx['translate'](_0x30850b['written'], 0x0), _0x55b0f0 += _0x30850b['written'];
            }
            ctx['translate'](-_0x55b0f0, 22.5);
        }
        ctx['translate'](0x0, 22.5);
        for (let _0x4bdea7 of this['bottomstats']) {
            if (_0x4bdea7['value'] == 0x0)
                continue;
            ctx['fillStyle'] = _0x4bdea7['color'];
            let _0x46afaf = _0x4bdea7['displayName'] || this['formatName'](_0x4bdea7['key']) + ':\x20', _0x3f7702 = ctx['measureText'](_0x46afaf)['width'];
            if (this['type'] == 'Hexagon') {
                let _0x4d6322 = this['formatName'](_0x4bdea7['key']) + ':\x20', _0x34a3fb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x2bf12e = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                _0x4d6322 = _0x4d6322['toUpperCase']();
                let _0x2d9b74 = '';
                for (let _0x518179 of _0x4d6322) {
                    _0x2d9b74 += _0x2bf12e[_0x34a3fb['indexOf'](_0x518179)] ? _0x2bf12e[_0x34a3fb['indexOf'](_0x518179)] : _0x518179;
                }
                _0x4d6322 = _0x2d9b74, ctx['strokeText'](_0x4d6322, 0x0, 0x0), ctx['fillText'](_0x4d6322, 0x0, 0x0), _0x3f7702 = ctx['measureText'](_0x4d6322)['width'];
            } else
                ctx['strokeText'](_0x46afaf, 0x0, 0x0), ctx['fillText'](_0x46afaf, 0x0, 0x0);
            ctx['translate'](_0x3f7702, 0x0);
            if (_0x4bdea7['displayName']) {
                ctx['translate'](-_0x3f7702, 17.5);
                continue;
            }
            ctx['fillStyle'] = '#ffffff';
            let _0x17196b = formatAmountHighPrecision(_0x4bdea7['value']);
            if ([
                    'poison',
                    'flowerBodyPoison',
                    'summonBodyPoison'
                ]['includes'](_0x4bdea7['key']))
                this['type'] == 'Shiny\x20Iris' ? _0x17196b = formatAmountHighPrecision(_0x4bdea7['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0x4bdea7['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0x4bdea7['value'][0x0] / _0x4bdea7['value'][0x1] * 0x64) / 0x64 + 's\x20per\x20enemy)' : _0x17196b = formatAmountHighPrecision(_0x4bdea7['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0x4bdea7['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0x4bdea7['value'][0x0] / _0x4bdea7['value'][0x1] * 0x64) / 0x64 + 's)';
            else {
                if ([
                        'cooldown',
                        'duration',
                        'timeLimit',
                        'passiveHealingStackDuration',
                        'period',
                        'shadowTime',
                        'unrevivable',
                        'timeToPop',
                        'petLifespan',
                        'slowdownTime',
                        'teleportCooldown'
                    ]['includes'](_0x4bdea7['key']))
                    _0x17196b += 's';
                else {
                    if ([
                            'overhealConversion',
                            'inflation',
                            'damagePercent',
                            'collectDupeChance',
                            'armorPercent',
                            'radiusChange',
                            'healthNerf',
                            'speedBuff'
                        ]['includes'](_0x4bdea7['key']))
                        _0x17196b += '%';
                    else {
                        if (_0x4bdea7['key'] === 'waveSpeedBoost')
                            _0x17196b = '+' + Math['round']((_0x4bdea7['value'] - 0x1) * 0x64) + '%';
                        else {
                            if (_0x4bdea7['key'] === 'speedReduction')
                                _0x17196b = Math['round'](_0x4bdea7['value'] * 0x64) + '%/wave';
                            else {
                                if (_0x4bdea7['key'] === 'ratedWave')
                                    _0x17196b = 'wave\x20' + _0x4bdea7['value'];
                                else {
                                    if (['damageIncrease']['includes'](_0x4bdea7['key'])) {
                                        ctx['strokeText'](_0x4bdea7['value'] + '%\x20(' + _0x4bdea7['value'] * 1.25 + '%\x20on\x20', 0x0, 0x0), ctx['fillText'](_0x4bdea7['value'] + '%\x20(' + _0x4bdea7['value'] * 1.25 + '%\x20on\x20', 0x0, 0x0);
                                        let _0x4bd3b6 = ctx['measureText'](_0x4bdea7['value'] + '%\x20(' + _0x4bdea7['value'] * 1.25 + '%\x20on\x20')['width'];
                                        ctx['translate'](_0x4bd3b6, 0x0), ctx['fillStyle'] = '#ff0000', ctx['strokeText']('Blood\x20Petals', 0x0, 0x0), ctx['fillText']('Blood\x20Petals', 0x0, 0x0);
                                        let _0x1c39ed = ctx['measureText']('Blood\x20Petals')['width'];
                                        ctx['translate'](_0x1c39ed, 0x0), ctx['fillStyle'] = '#ffffff', ctx['strokeText'](')', 0x0, 0x0), ctx['fillText'](')', 0x0, 0x0);
                                        const _0x964129 = ctx['measureText'](')')['width'] + 7.5, _0x388492 = -0x6, _0x44977a = 0x7;
                                        ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x964129 + _0x44977a, _0x388492 + _0x44977a, _0x44977a, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x964129 + _0x44977a - _0x44977a * 0.7, _0x388492 + _0x44977a - _0x44977a * 0.7), ctx['lineTo'](_0x964129 + _0x44977a + _0x44977a * 0.7, _0x388492 + _0x44977a + _0x44977a * 0.7), ctx['stroke'](), ctx['restore'](), ctx['translate'](-(_0x4bd3b6 + _0x1c39ed), 0x0), _0x17196b = '';
                                    } else {
                                        if (['flowerHeal']['includes'](_0x4bdea7['key'])) {
                                            ctx['strokeText'](formatAmountHighPrecision(_0x4bdea7['value']) + '\x20/s', 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x4bdea7['value']) + '\x20/s', 0x0, 0x0);
                                            let _0x3477a5 = ctx['measureText'](formatAmountHighPrecision(_0x4bdea7['value']) + '\x20/s')['width'];
                                            ctx['translate'](_0x3477a5, 0x0);
                                            const _0x4a1570 = ctx['measureText'](')')['width'] + 7.5, _0x5b6c6d = -0x6, _0x1ac13a = 0x7;
                                            ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x4a1570 + _0x1ac13a, _0x5b6c6d + _0x1ac13a, _0x1ac13a, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x4a1570 + _0x1ac13a - _0x1ac13a * 0.7, _0x5b6c6d + _0x1ac13a - _0x1ac13a * 0.7), ctx['lineTo'](_0x4a1570 + _0x1ac13a + _0x1ac13a * 0.7, _0x5b6c6d + _0x1ac13a + _0x1ac13a * 0.7), ctx['stroke'](), ctx['restore'](), ctx['translate'](-_0x3477a5, 0x0), _0x17196b = '';
                                        } else {
                                            if ([
                                                    'reviveHealth',
                                                    'healingBoost',
                                                    'healthBuffBoost',
                                                    'weatherChanceBoost'
                                                ]['includes'](_0x4bdea7['key']))
                                                _0x17196b = formatAmountHighPrecision(_0x4bdea7['value'] * 0x64) + '%';
                                            else {
                                                if ([
                                                        'passiveDamagePerKill',
                                                        'passiveHealingBuff',
                                                        'petHeal'
                                                    ]['includes'](_0x4bdea7['key'])) {
                                                    _0x17196b += '/s';
                                                    if (this['type'] == 'Starfish' || this['type'] == 'Brisingida')
                                                        _0x17196b += '\x20(under\x2070%\x20hp)';
                                                } else {
                                                    if (['lightning']['includes'](_0x4bdea7['key'])) {
                                                        if (this['type'] == 'Shiny\x20Lightning')
                                                            _0x17196b = '+' + _0x17196b;
                                                        _0x17196b += '/bounce';
                                                    } else {
                                                        if (['summon']['includes'](_0x4bdea7['key'])) {
                                                            if (_0x4bdea7['value']['rarity'] > -0x1) {
                                                                let _0x552f89 = Colors['rarities'][_0x4bdea7['value']['rarity']]['name'] + '\x20';
                                                                _0x17196b = _0x4bdea7['value']['type'];
                                                                if (_0x4bdea7['value']['amount'])
                                                                    _0x17196b += '\x20x' + _0x4bdea7['value']['amount'];
                                                                if (this['type'] == 'Hexagon') {
                                                                    let _0x2ba38d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x523d6c = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                                                                    _0x552f89 = _0x552f89['toUpperCase']();
                                                                    let _0x2818e1 = '';
                                                                    for (let _0x1598c5 of _0x552f89) {
                                                                        _0x2818e1 += _0x523d6c[_0x2ba38d['indexOf'](_0x1598c5)] ? _0x523d6c[_0x2ba38d['indexOf'](_0x1598c5)] : _0x1598c5;
                                                                    }
                                                                    _0x552f89 = _0x2818e1, _0x17196b = _0x17196b['toUpperCase'](), _0x2818e1 = '';
                                                                    for (let _0x1b3e4a of _0x17196b) {
                                                                        _0x2818e1 += _0x523d6c[_0x2ba38d['indexOf'](_0x1b3e4a)] ? _0x523d6c[_0x2ba38d['indexOf'](_0x1b3e4a)] : _0x1b3e4a;
                                                                    }
                                                                    _0x17196b = _0x2818e1;
                                                                }
                                                                let _0x36a290 = ctx['measureText'](_0x552f89)['width'];
                                                                ctx['fillStyle'] = Colors['rarities'][_0x4bdea7['value']['rarity']]['color'], ctx['strokeText'](_0x552f89, 0x0, 0x0), ctx['fillText'](_0x552f89, 0x0, 0x0), ctx['translate'](_0x36a290, 0x0), ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0x17196b, 0x0, 0x0), ctx['fillText'](_0x17196b, 0x0, 0x0), ctx['translate'](-_0x3f7702 - _0x36a290, 17.5);
                                                            } else
                                                                ctx['translate'](-_0x3f7702, 17.5);
                                                            for (let _0x46a54b in _0x4bdea7['value']['substats']) {
                                                                let _0x269115 = _0x4bdea7['value']['substats'][_0x46a54b], _0x4905d8 = '\x20-\x20Summon\x20' + this['formatName'](_0x46a54b) + ':\x20';
                                                                if (this['type'] == 'Hexagon') {
                                                                    let _0x17badb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x7eb246 = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                                                                    _0x4905d8 = _0x4905d8['toUpperCase']();
                                                                    let _0x3d3ed1 = '';
                                                                    for (let _0x2a2589 of _0x4905d8) {
                                                                        _0x3d3ed1 += _0x7eb246[_0x17badb['indexOf'](_0x2a2589)] ? _0x7eb246[_0x17badb['indexOf'](_0x2a2589)] : _0x2a2589;
                                                                    }
                                                                    _0x4905d8 = _0x3d3ed1;
                                                                }
                                                                let _0x1bd4bc = ctx['measureText'](_0x4905d8)['width'];
                                                                ctx['fillStyle'] = statColors[_0x46a54b], ctx['strokeText'](_0x4905d8, 0x0, 0x0), ctx['fillText'](_0x4905d8, 0x0, 0x0), ctx['translate'](_0x1bd4bc, 0x0);
                                                                let _0x5eb69e = formatAmountHighPrecision(_0x269115);
                                                                if (this['type'] == 'Shiny\x20Ruby' && _0x46a54b == 'damage')
                                                                    _0x5eb69e = '+' + _0x5eb69e + '\x20(per\x20summon)';
                                                                if (Array['isArray'](_0x5eb69e))
                                                                    _0x5eb69e = formatAmountHighPrecision(_0x269115[0x0]) + '~' + formatAmountHighPrecision(_0x269115[0x1]);
                                                                ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0x5eb69e, 0x0, 0x0), ctx['fillText'](_0x5eb69e, 0x0, 0x0), ctx['translate'](-_0x1bd4bc, 17.5);
                                                            }
                                                            ctx['translate'](0x0, -17.5), _0x17196b = '', _0x3f7702 = 0x0;
                                                        } else {
                                                            if ([
                                                                    'slowdown',
                                                                    'killBossUnder',
                                                                    'attractionRadius'
                                                                ]['includes'](_0x4bdea7['key']) && _0x4bdea7['value'][0x0]) {
                                                                ctx['translate'](-_0x3f7702, 17.5);
                                                                let _0x2f1861 = _0x4bdea7['value'][0x0], _0x231db1 = -0x1;
                                                                for (let _0x251fbf of _0x4bdea7['value']) {
                                                                    _0x231db1++;
                                                                    if (_0x251fbf < 0x1 || _0x251fbf == undefined)
                                                                        continue;
                                                                    if (_0x251fbf == _0x2f1861)
                                                                        continue;
                                                                    _0x2f1861 = _0x251fbf;
                                                                    let _0x18e934 = Colors['rarities'][_0x231db1];
                                                                    if (!_0x18e934)
                                                                        _0x18e934 = Colors['rarities'][0x0];
                                                                    let _0x16e07d = ctx['measureText']('-\x20' + this['formatName'](_0x18e934['name']) + '\x20' + this['formatName'](_0x4bdea7['key']) + ':\x20')['width'];
                                                                    ctx['fillStyle'] = _0x18e934['color'], ctx['strokeText']('-\x20' + this['formatName'](_0x18e934['name']) + '\x20' + this['formatName'](_0x4bdea7['key']) + ':\x20', 0x0, 0x0), ctx['fillText']('-\x20' + this['formatName'](_0x18e934['name']) + '\x20' + this['formatName'](_0x4bdea7['key']) + ':\x20', 0x0, 0x0), ctx['translate'](_0x16e07d, 0x0), _0x17196b = formatAmountHighPrecision(_0x4bdea7['value'][_0x231db1]);
                                                                    if (_0x4bdea7['key'] !== 'attractionRadius')
                                                                        _0x17196b += '%';
                                                                    ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0x17196b, 0x0, 0x0), ctx['fillText'](_0x17196b, 0x0, 0x0), ctx['translate'](-_0x16e07d, 17.5);
                                                                }
                                                                ctx['translate'](0x0, -17.5), _0x17196b = '', _0x3f7702 = 0x0;
                                                            } else {
                                                                if (this['type'] == 'Plank' && _0x4bdea7['key'] == 'damage')
                                                                    ctx['strokeText'](formatAmountHighPrecision(_0x4bdea7['value']) + '\x20(' + formatAmountHighPrecision(_0x4bdea7['value'] * 0x3e8) + '\x20against\x20projectiles)', 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x4bdea7['value']) + '\x20(' + formatAmountHighPrecision(_0x4bdea7['value'] * 0x3e8) + '\x20against\x20projectiles)', 0x0, 0x0);
                                                                else {
                                                                    if (['rotateSpeedBuff']['includes'](_0x4bdea7['key']))
                                                                        _0x17196b += '\x20radians/s';
                                                                    else {
                                                                        if (['maxSkip']['includes'](_0x4bdea7['key']))
                                                                            _0x17196b += '\x20waves';
                                                                        else
                                                                            [
                                                                                'healMultiplier',
                                                                                'eggHpMultiplier',
                                                                                'eggMassMultiplier',
                                                                                'eggDamageMultiplier',
                                                                                'dpsMultiplier',
                                                                                'hpMultiplier'
                                                                            ]['includes'](_0x4bdea7['key']) ? (_0x17196b = 'x' + _0x17196b, ctx['strokeText'](_0x17196b, 0x0, 0x0), ctx['fillText'](_0x17196b, 0x0, 0x0)) : (ctx['strokeText'](formatAmountHighPrecision(_0x4bdea7['value']), 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x4bdea7['value']), 0x0, 0x0));
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            _0x17196b !== '' && (ctx['strokeText'](_0x17196b, 0x0, 0x0), ctx['fillText'](_0x17196b, 0x0, 0x0));
            if (_0x4bdea7['unstackable'] && _0x17196b !== '') {
                const _0x5efca5 = ctx['measureText'](_0x17196b)['width'] + 7.5, _0x28b0d4 = -0x6, _0x2dd977 = 0x7;
                ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x5efca5 + _0x2dd977, _0x28b0d4 + _0x2dd977, _0x2dd977, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x5efca5 + _0x2dd977 - _0x2dd977 * 0.7, _0x28b0d4 + _0x2dd977 - _0x2dd977 * 0.7), ctx['lineTo'](_0x5efca5 + _0x2dd977 + _0x2dd977 * 0.7, _0x28b0d4 + _0x2dd977 + _0x2dd977 * 0.7), ctx['stroke'](), ctx['restore']();
            }
            ctx['translate'](-_0x3f7702, 17.5);
        }
        return ctx = _0xf3f720, _0x42a121;
    }
    ['genEcBox']() {
        const _0x5df768 = new OffscreenCanvas(this['w'], this['h']), _0x7dbb43 = _0x5df768['getContext']('2d'), _0x2f050e = ctx;
        ctx = _0x7dbb43, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['fillStyle'] = '#000000', ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x5), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff', ctx['lineWidth'] = 0x2, ctx['font'] = '900\x20' + 0.9 * 22.5 + 'px\x20Ubuntu', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'top', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0.9 * 3.25, ctx['translate'](this['w'] - 0x23, 0xa), ctx['save']();
        const _0xb10952 = 12.5, _0x4e871d = 12.5, _0x1489f0 = 0xa, _0x18f99a = 0x4;
        ctx['beginPath']();
        for (let _0x598bce = 0x0; _0x598bce < 0x5; _0x598bce++) {
            const _0x4a5106 = _0x598bce * 0x4 * Math['PI'] / 0x5 - Math['PI'] / 0x2, _0x4785b4 = _0xb10952 + Math['cos'](_0x4a5106) * _0x1489f0, _0x284056 = _0x4e871d + Math['sin'](_0x4a5106) * _0x1489f0;
            if (_0x598bce === 0x0)
                ctx['moveTo'](_0x4785b4, _0x284056);
            else
                ctx['lineTo'](_0x4785b4, _0x284056);
            const _0x192f07 = _0x598bce * 0x4 * Math['PI'] / 0x5 + 0x2 * Math['PI'] / 0x5 - Math['PI'] / 0x2, _0x2a2b74 = _0xb10952 + Math['cos'](_0x192f07) * _0x18f99a, _0x2ed05d = _0x4e871d + Math['sin'](_0x192f07) * _0x18f99a;
            ctx['lineTo'](_0x2a2b74, _0x2ed05d);
        }
        ctx['closePath'](), ctx['fillStyle'] = '#FFD700', ctx['fill'](), ctx['strokeStyle'] = '#B8860B', ctx['lineWidth'] = 1.5, ctx['stroke'](), ctx['restore']();
        let _0x1594ba = '', _0x3cdc7a = 0x1;
        for (let _0x163c25 of this['topstats']) {
            _0x163c25['key'] == 'temp' ? _0x1594ba += _0x163c25['value'][0x1] + 's' : _0x1594ba += formatAmountHighPrecision(_0x163c25['value']);
            if (this['topstats']['length'] > 0x1 && _0x3cdc7a !== this['topstats']['length'])
                _0x1594ba += '\x20+\x20';
            _0x3cdc7a++;
        }
        ctx['strokeText'](_0x1594ba, -0x5, 2.5), ctx['fillText'](_0x1594ba, -0x5, 2.5), ctx['translate'](-this['w'] + 0x23, 0x0), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['textAlign'] = 'left', ctx['translate'](0xa, 0x0), ctx['strokeText'](this['name'], 0x0, 0x0), ctx['fillText'](this['name'], 0x0, 0x0), ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25, ctx['fillStyle'] = Colors['rarities'][this['rarity']]['color'], ctx['translate'](0x0, 0x1e);
        if (this['type'] == 'Hexagon') {
            let _0x57d02e = Colors['rarities'][this['rarity']]['name'], _0x616ac5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x3a007e = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
            _0x57d02e = _0x57d02e['toUpperCase']();
            let _0x58d7d0 = '';
            for (let _0x1de70a of _0x57d02e) {
                _0x58d7d0 += _0x3a007e[_0x616ac5['indexOf'](_0x1de70a)] ? _0x3a007e[_0x616ac5['indexOf'](_0x1de70a)] : _0x1de70a;
            }
            _0x57d02e = _0x58d7d0, ctx['strokeText'](_0x57d02e, 0x0, 0x0), ctx['fillText'](_0x57d02e, 0x0, 0x0);
        } else
            ctx['strokeText'](Colors['rarities'][this['rarity']]['name'], 0x0, 0x0), ctx['fillText'](Colors['rarities'][this['rarity']]['name'], 0x0, 0x0);
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['translate'](0x0, 0x2d);
        for (let _0x5958a6 of this['finalDesc']) {
            let _0x5a50c0 = 0x0;
            for (let _0x319c88 of _0x5958a6) {
                ctx['fillStyle'] = _0x319c88['color'], ctx['strokeText'](_0x319c88['text'], 0x0, 0x0), ctx['fillText'](_0x319c88['text'], 0x0, 0x0), ctx['translate'](_0x319c88['written'], 0x0), _0x5a50c0 += _0x319c88['written'];
            }
            ctx['translate'](-_0x5a50c0, 22.5);
        }
        ctx['translate'](0x0, 22.5);
        for (let _0x28fc93 of this['bottomstats']) {
            if (_0x28fc93['key'] !== 'drops') {
                if (_0x28fc93['value'] == 0x0 || _0x28fc93['key'] == 'detectionDistance' && isNaN(_0x28fc93['value']))
                    continue;
                ctx['fillStyle'] = _0x28fc93['color'];
                if (_0x28fc93['displayName']) {
                    ctx['strokeText'](_0x28fc93['displayName'], 0x0, 0x0), ctx['fillText'](_0x28fc93['displayName'], 0x0, 0x0);
                    continue;
                }
                let _0x259a6c = ctx['measureText'](this['formatName'](_0x28fc93['key']) + ':\x20')['width'];
                if (this['type'] == 'Hexagon') {
                    let _0x2080c1 = this['formatName'](_0x28fc93['key']) + ':\x20', _0x51a74a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x1b29ca = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                    _0x2080c1 = _0x2080c1['toUpperCase']();
                    let _0x56fbc2 = '';
                    for (let _0x429c39 of _0x2080c1) {
                        _0x56fbc2 += _0x1b29ca[_0x51a74a['indexOf'](_0x429c39)] ? _0x1b29ca[_0x51a74a['indexOf'](_0x429c39)] : _0x429c39;
                    }
                    _0x2080c1 = _0x56fbc2, ctx['strokeText'](_0x2080c1, 0x0, 0x0), ctx['fillText'](_0x2080c1, 0x0, 0x0), _0x259a6c = ctx['measureText'](_0x2080c1)['width'];
                } else
                    ctx['strokeText'](this['formatName'](_0x28fc93['key']) + ':\x20', 0x0, 0x0), ctx['fillText'](this['formatName'](_0x28fc93['key']) + ':\x20', 0x0, 0x0);
                ctx['translate'](_0x259a6c, 0x0), ctx['fillStyle'] = '#ffffff';
                let _0x50b305 = formatAmountHighPrecision(_0x28fc93['value']);
                if (['lightning']['includes'](_0x28fc93['key']))
                    _0x50b305 += this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel' ? '/s' : '/bounce';
                else {
                    if (['healingReduction']['includes'](_0x28fc93['key']))
                        _0x50b305 = _0x28fc93['value'] * 0x64 + '%/hit';
                    else {
                        if ([
                                'regeneration',
                                'lifesteal'
                            ]['includes'](_0x28fc93['key']))
                            _0x50b305 += '/s';
                        else {
                            if ([
                                    'poison',
                                    'flowerBodyPoison',
                                    'summonBodyPoison'
                                ]['includes'](_0x28fc93['key']))
                                _0x50b305 = formatAmountHighPrecision(_0x28fc93['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0x28fc93['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0x28fc93['value'][0x0] / _0x28fc93['value'][0x1] * 0x64) / 0x64 + 's)';
                            else {
                                if (_0x28fc93['key'] === 'waveSpeedBoost')
                                    _0x50b305 = '+' + Math['round']((_0x28fc93['value'] - 0x1) * 0x64) + '%';
                                else {
                                    if (_0x28fc93['key'] === 'speedReduction')
                                        _0x50b305 = Math['round'](_0x28fc93['value'] * 0x64) + '%/wave';
                                    else {
                                        if (_0x28fc93['key'] === 'ratedWave')
                                            _0x50b305 = 'wave\x20' + _0x28fc93['value'];
                                        else
                                            [
                                                'healMultiplier',
                                                'eggHpMultiplier',
                                                'eggMassMultiplier',
                                                'eggDamageMultiplier',
                                                'dpsMultiplier',
                                                'hpMultiplier'
                                            ]['includes'](_0x28fc93['key']) ? (_0x50b305 = 'x' + _0x50b305, ctx['strokeText'](_0x50b305, 0x0, 0x0), ctx['fillText'](_0x50b305, 0x0, 0x0)) : (ctx['strokeText'](formatAmountHighPrecision(_0x28fc93['value']), 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x28fc93['value']), 0x0, 0x0));
                                    }
                                }
                            }
                        }
                    }
                }
                _0x50b305 !== '' && (ctx['strokeText'](_0x50b305, 0x0, 0x0), ctx['fillText'](_0x50b305, 0x0, 0x0)), ctx['translate'](-_0x259a6c, 17.5);
            } else
                for (let _0x535133 in _0x28fc93['value']) {
                    let _0x457120 = _0x28fc93['value'][_0x535133], _0x160cde = 0x0, _0x8879c1 = 0x0;
                    for (let _0x1a0367 in _0x457120) {
                        let _0x2c9089 = _0x457120[_0x1a0367];
                        if (_0x2c9089 == 0x0)
                            continue;
                        _0x8879c1++;
                        let _0x22f1f1 = new Petal({ 'type': _0x535133 }), _0x18414d = new PetalContainer([_0x22f1f1], {
                                'x': 27.5,
                                'y': 42.5,
                                'w': 0x32,
                                'h': 0x32,
                                'toOscillate': ![]
                            }, 0x0, 0x1, 0x0);
                        _0x18414d['render']['w'] = 0x32, _0x18414d['spawnAnimation'] = 0x1, _0x18414d['rarity'] = _0x1a0367;
                        if (Stats['specialRarityDrops'][this['rarity']])
                            for (let _0x5e5bf0 of Stats['specialRarityDrops'][this['rarity']]) {
                                if (_0x18414d['rarity'] == _0x5e5bf0['originalRarity'] && !_0x18414d['modified']) {
                                    if (_0x5e5bf0['replaceRarity'])
                                        _0x18414d['rarity'] = _0x5e5bf0['replaceRarity'];
                                    _0x18414d['amount'] = _0x5e5bf0['amount'], _0x18414d['modified'] = !![];
                                }
                            }
                        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle';
                        if (_0x2c9089 < 0.01) {
                        } else
                            _0x2c9089 = formatAmountHighPrecision(_0x2c9089);
                        ctx['strokeText'](_0x2c9089 + '%', 27.5, 0x55), ctx['fillText'](_0x2c9089 + '%', 27.5, 0x55), _0x18414d['draw'](), ctx['translate'](67.5, 0x0), _0x160cde += 67.5;
                    }
                    if (_0x8879c1 > 0x0)
                        ctx['translate'](-_0x160cde, 0x55);
                }
        }
        return ctx = _0x2f050e, _0x5df768;
    }
    ['generateDesc'](_0x16457c, _0x48cc2c) {
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu';
        this['mode'] == 'petal' && (this['amount'] > 0x1 && (_0x48cc2c += ctx['measureText'](this['amount']['toLocaleString']())['width'] + 7.5), _0x16457c += ctx['measureText'](this['amount']['toLocaleString']())['width'] + 7.5);
        let _0x1bf9de = [], _0x572f9d = [], _0x4cf312 = {
                'current': 0x0,
                'max': 0x0,
                'writing': 0x0
            }, _0x4ce7dc = 0x0, _0x106feb = {
                'text': '',
                'color': '#ffffff'
            }, _0x1f33ff = 0x0;
        for (let _0x190c20 of this['description']) {
            let _0x245d59 = _0x190c20['text']['split']('\x20');
            for (let _0x18db4f of _0x245d59) {
                _0x1bf9de['push']({
                    'text': _0x18db4f,
                    'color': _0x190c20['color']
                });
            }
        }
        for (let _0x38effe of _0x1bf9de) {
            let _0x52e023 = ctx['measureText'](_0x38effe['text'] + '\x20')['width'];
            _0x4cf312['current'] + _0x52e023 > _0x48cc2c - 0xf && (_0x572f9d[_0x4ce7dc]['push']({
                'text': _0x106feb['text'],
                'color': _0x106feb['color'],
                'written': _0x4cf312['writing']
            }), _0x4ce7dc++, _0x4cf312['current'] = 0x0, _0x4cf312['writing'] = 0x0, _0x106feb = {
                'text': '',
                'color': _0x38effe['color']
            }), !_0x572f9d[_0x4ce7dc] && (_0x572f9d[_0x4ce7dc] = []), _0x106feb['color'] !== _0x38effe['color'] && (_0x572f9d[_0x4ce7dc]['push']({
                'text': _0x106feb['text'],
                'color': _0x106feb['color'],
                'written': _0x4cf312['writing']
            }), _0x4cf312['writing'] = 0x0, _0x106feb = {
                'text': '',
                'color': _0x38effe['color']
            }), _0x1f33ff !== _0x1bf9de['length'] - 0x1 ? _0x106feb['text'] += _0x38effe['text'] + '\x20' : (_0x106feb['text'] += _0x38effe['text'], _0x572f9d[_0x4ce7dc]['push']({
                'text': _0x106feb['text'],
                'color': _0x106feb['color'],
                'written': _0x4cf312['writing']
            })), _0x4cf312['current'] += _0x52e023, _0x4cf312['writing'] += _0x52e023, _0x4cf312['max'] = Math['max'](_0x4cf312['max'], _0x4cf312['current']), _0x1f33ff++;
        }
        return this['finalDesc'] = _0x572f9d, {
            'width': Math['max'](_0x16457c, _0x4cf312['max']) + 0xf,
            'height': _0x572f9d['length'] * 22.5
        };
    }
    ['formatName'](_0x505651) {
        _0x505651['length'] > 0x1 && (_0x505651 = _0x505651[0x0]['toUpperCase']() + _0x505651['slice'](0x1));
        for (let _0x5c5030 = 0x0; _0x5c5030 < _0x505651['length']; _0x5c5030++) {
            _0x505651[_0x5c5030]['toUpperCase']() === _0x505651[_0x5c5030] && (_0x5c5030 == 0x0 ? _0x505651 = _0x505651['slice'](0x0, _0x5c5030) + _0x505651[_0x5c5030]['toUpperCase']() + _0x505651['slice'](_0x5c5030 + 0x1) : _0x505651 = _0x505651['slice'](0x0, _0x5c5030) + '\x20' + _0x505651[_0x5c5030]['toUpperCase']() + _0x505651['slice'](_0x5c5030 + 0x1), _0x5c5030 += 0x2);
        }
        return _0x505651;
    }
}
const statColors = {
    'damage': '#ff4444',
    'health': '#44ff44',
    'reload': '#44ddff',
    'cooldown': '#67dbad',
    'tanksmithRechargeTime': '#44ddff',
    'shootCooldown': '#44ddff',
    'speed': '#44ddff',
    'tanksmithRadius': '#e044ff',
    'tanksmithHealth': '#44ff44',
    'poison': '#e644ff',
    'summonBodyPoison': '#ec73ff',
    'flowerBodyPoison': '#b33fc5',
    'attractionRadius': '#baa052',
    'salt': '#ff4444',
    'bodyDamage': '#de3380',
    'weatherChanceBoost': '#f5e042',
    'maxDamage': '#ff4444',
    'slowdown': '#777777',
    'slowdownTime': '#b172cf',
    'armor': '#838383',
    'mass': '#696969',
    'duration': '#ff44ee',
    'heal': '#ff94c9',
    'petHeal': '#c96d9b',
    'flowerHeal': '#fc65b0',
    'xp': '#f9ff44',
    'detectionDistance': '#ffb144',
    'extraRange': '#1585b5',
    'wingExtraRange': '#1585b5',
    'enemyKnockback': '#de823f',
    'healAmount': '#44ff44',
    'healDelay': '#44ff44',
    'range': '#e00030',
    'period': '#e3c59d',
    'damagePercent': '#e3c59d',
    'bounces': '#a7faef',
    'healthNerf': '#eb7faf',
    'overhealConversion': '#dae09f',
    'hatchTime': '#9fd49f',
    'extraDamage': '#ffbb00',
    'criticalDamage': '#dd0000',
    'flowerArmor': '#a3a3a3',
    'maxEnemyBoost': '#33dd33',
    'petLifespan': '#999999',
    'lifespan': '#499999',
    'reviveHealth': '#944994',
    'maximumWave': '#009930',
    'timeToPop': '#ffeeaa',
    'shadowTime': '#333333',
    'unrevivable': '#555555',
    'damageConversion': '#aaaaaa',
    'maximumMobs': '#9055cf',
    'healingReduction': '#dddddd',
    'useLimit': '#4d7896',
    'wavesSentBack': '#445396',
    'effect': '#b0b0b0',
    'passiveDamagePerKill': '#ff3344',
    'radiusChange': '#4986e3',
    'passiveHealingStack': '#35de3e',
    'passiveHealingStackDuration': '#659c68',
    'killsRequired': '#ff1234',
    'timeLimit': '#3582ab',
    'failDamage': '#bf245b',
    'blastRadius': '#56269e',
    'armorPercent': '#7d9c7b',
    'finalHitDamage': '#ff5900',
    'hitBlastRadius': '#e4aa40ff',
    'hitBlastDamage': '#cf601fff',
    'collectDupeChance': '#af56cb',
    'teleportCooldown': '#70bcd4',
    'inflation': '#d4d4d4',
    'shootCooldownBuff': '#ff9944',
    'projectileSpeedBuff': '#ff9944',
    'speedBuff': '#fafafa',
    'knockbackMass': '#d4d4d4',
    'bodyKnockback': '#d4d4d4',
    'mana': '#ffffff',
    'waveSpawningSpeed': '#a4ffa4',
    'healingBoost': '#f8464d',
    'healthBuff': '#35de3e',
    'healthBuffBoost': '#4eb648ff',
    'waveHealthBoost': '#35de3e',
    'killBossUnder': '#dd4433',
    'passiveHealingBuff': '#ff94c9',
    'lightning': '#29f2e5',
    'teleportCooldown': '#70bcd4',
    'damageIncrease': '#8b3ae0',
    'rotateSpeedBuff': '#9cee56',
    'maxWave': '#df3a83',
    'maxSkip': '#d6709d',
    'waveSpeedBoost': '#c5628dff',
    'ratedWave': '#62c5a8ff',
    'speedReduction': '#c56262ff',
    'healMultiplier': '#99ff99',
    'squadHealShare': '#ffcc66',
    'eggHpMultiplier': '#ff9999',
    'eggMassMultiplier': '#99ccff',
    'eggDamageMultiplier': '#ff6666',
    'dpsMultiplier': '#ff6666',
    'hpMultiplier': '#ff9999'
};
for (let i in Colors['rarities']) {
    statColors[Colors['rarities'][i]['name']] = Colors['rarities'][i]['color'];
}
const enemyRarityScalars = [
    {
        'name': 'Basic',
        'health': 0x1,
        'damage': 0x1,
        'radius': 0x1,
        'mass': 0x1,
        'petalDamage': 0x1,
        'petalHealth': 0x1,
        'petalHeal': 0x1,
        'petalMass': 0x1,
        'detectionDistance': 0x1,
        'xp': 0x1
    },
    {
        'name': 'Uncommon',
        'health': 0x2,
        'damage': 1.2,
        'radius': 1.1,
        'mass': 1.52,
        'petalDamage': 1.4,
        'petalHealth': 1.2,
        'petalHeal': 1.51,
        'petalMass': 1.52,
        'detectionDistance': 1.1,
        'xp': 0x3
    },
    {
        'name': 'Scarce',
        'health': 0x4,
        'damage': 1.5,
        'radius': 1.3,
        'mass': 2.5,
        'petalDamage': 0x2,
        'petalHealth': 1.5,
        'petalHeal': 2.2,
        'petalMass': 2.5,
        'detectionDistance': 1.2,
        'xp': 0x9
    },
    {
        'name': 'Exceptional',
        'health': 7.5,
        'damage': 1.9,
        'radius': 1.72,
        'mass': 5.6,
        'petalDamage': 2.9,
        'petalHealth': 1.9,
        'petalHeal': 3.2,
        'petalMass': 5.7,
        'detectionDistance': 1.3,
        'xp': 0x1b
    },
    {
        'name': 'Mythical',
        'health': 0x32,
        'damage': 2.7,
        'radius': 0x3,
        'mass': 0x12,
        'petalDamage': 4.8,
        'petalHealth': 2.8,
        'petalHeal': 0x5,
        'petalMass': 0x12,
        'detectionDistance': 1.7,
        'xp': 0x51
    },
    {
        'name': 'Phantasmal',
        'health': 0x6e,
        'damage': 4.2,
        'radius': 0x5,
        'mass': 0x2b,
        'petalDamage': 9.5,
        'petalHealth': 4.2,
        'petalHeal': 0xa,
        'petalMass': 0x2b,
        'detectionDistance': 2.1,
        'xp': 0xf3
    },
    {
        'name': 'Ultimate',
        'health': 0x136,
        'damage': 8.5,
        'radius': 0x7,
        'mass': 0x64,
        'petalDamage': 0x17,
        'petalHealth': 8.5,
        'petalHeal': 21.5,
        'petalMass': 0x64,
        'detectionDistance': 2.5,
        'xp': 0x2d9
    },
    {
        'name': 'Paramount',
        'health': 0x546,
        'damage': 0x11,
        'radius': 9.5,
        'mass': 0xd8,
        'petalDamage': 0x5a,
        'petalHealth': 0x11,
        'petalHeal': 0x28,
        'petalMass': 0xd8,
        'detectionDistance': 2.5,
        'xp': 0x88b
    },
    {
        'name': 'Alpha',
        'health': 0x12c0,
        'damage': 0x23,
        'radius': 0xd,
        'mass': 0x1f4,
        'petalDamage': 0x140,
        'petalHealth': 0x23,
        'petalHeal': 0x4a,
        'petalMass': 0x1f4,
        'detectionDistance': 2.5,
        'xp': 0x19a1
    },
    {
        'name': 'Doomed',
        'health': 0x4650,
        'damage': 0x46,
        'radius': 0x12,
        'mass': 0x4b0,
        'petalDamage': 0x44c,
        'petalHealth': 0x46,
        'petalHeal': 0x8c,
        'petalMass': 0x4b0,
        'detectionDistance': 2.5,
        'xp': 0x9c40
    },
    {
        'name': 'Sacred',
        'health': 0xfde8,
        'damage': 0x8a,
        'radius': 0x18,
        'mass': 0xc80,
        'petalDamage': 0xf0a,
        'petalHealth': 0x8a,
        'petalHeal': 0x10c,
        'petalMass': 0xc80,
        'detectionDistance': 2.5,
        'xp': 0x493e0
    },
    {
        'name': 'Imperial',
        'health': 0x3d090,
        'damage': 0x113,
        'radius': 0x21,
        'mass': 0x251c,
        'petalDamage': 0x34bc,
        'petalHealth': 0x113,
        'petalHeal': 0x1f4,
        'petalMass': 0x251c,
        'detectionDistance': 2.5,
        'xp': 0x2dc6c0
    },
    {
        'name': 'Absolute',
        'health': 0xef420,
        'damage': 0x226,
        'radius': 0x2d,
        'mass': 0x80e8,
        'petalDamage': 0xb98c,
        'petalHealth': 0x226,
        'petalHeal': 0x3b6,
        'petalMass': 0x80e8,
        'detectionDistance': 2.5,
        'xp': 0x1c9c380
    },
    {
        'name': 'Stellar',
        'health': 0x4c4b40,
        'damage': 0x47e,
        'radius': 0x3e,
        'mass': 0x2f760,
        'petalDamage': 0x41eb0,
        'petalHealth': 0x672,
        'petalHeal': 0xb49,
        'petalMass': 0x2f760,
        'detectionDistance': 2.5,
        'xp': 0x1dcd6500
    },
    {
        'name': 'Empyrean',
        'health': 0x958940,
        'damage': 0x672,
        'radius': 0x47,
        'mass': 0x5eec0,
        'petalDamage': 0x2625a0,
        'petalHealth': 0x2648,
        'petalHeal': 0x2580,
        'petalMass': 0x231860,
        'detectionDistance': 2.5,
        'xp': 0x2540be400
    },
    {
        'name': 'Seraphic',
        'health': 0x1312d00,
        'damage': 0x9c4,
        'radius': 0x51,
        'mass': 0xbdd80,
        'petalDamage': 0x19bfcc0,
        'petalHealth': 0xea60,
        'petalHeal': 0xe290,
        'petalMass': 0x1a52480,
        'detectionDistance': 2.5,
        'xp': 0x45d964b800
    },
    {
        'name': 'Ascended',
        'health': 0x3938700,
        'damage': 0x1356,
        'radius': 0x67,
        'mass': 0x231860,
        'petalDamage': 0xc7bf410,
        'petalHealth': 0x329c4,
        'petalHeal': 0x33450,
        'petalMass': 0x16e36000,
        'detectionDistance': 3.25,
        'xp': 0x82f79cd9000
    },
    {
        'name': 'Ethereal',
        'health': 0x7270e00,
        'damage': 0x1d4c,
        'radius': 0x76,
        'mass': 0x4630c0,
        'petalDamage': 0x35a4e900,
        'petalHealth': 0x44aa20,
        'petalHeal': 0x30d40,
        'petalMass': 0x112a88000,
        'detectionDistance': 3.25,
        'xp': 0xf5904616e000
    },
    {
        'name': 'Cosmic',
        'health': 0x15752a00,
        'damage': 0x3a98,
        'radius': 0x87,
        'mass': 0xd29240,
        'petalDamage': 0x1af124af0,
        'petalHealth': 0x19c800,
        'petalHeal': 516560.652,
        'petalMass': 0xcdfe60000,
        'detectionDistance': 3.25,
        'xp': 0x1cc6e836ae4000
    },
    {
        'name': 'Timeless',
        'health': 0x29b92700,
        'damage': 0x4e20,
        'radius': 0x9a,
        'mass': 0x1a52480,
        'petalDamage': 0x3fc11c9f8,
        'petalHealth': 0x11300,
        'petalHeal': 0x1500e,
        'petalMass': 0x493e00,
        'detectionDistance': 3.25,
        'xp': 0x35f4f36686b8000
    },
    {
        'name': 'Godlike',
        'health': 0x53724e00,
        'damage': 0x7530,
        'radius': 0xaf,
        'mass': 0x34a4900,
        'petalDamage': 0x1fefe358,
        'petalHealth': 0x22600,
        'petalHeal': 0x27100,
        'petalMass': 0x927c00,
        'detectionDistance': 3.25,
        'xp': 0x6124fee993bc0000
    },
    {
        'name': 'Abyssal',
        'health': 0x10b076000,
        'damage': 0xea60,
        'radius': 0xc8,
        'mass': 0x9896800,
        'petalDamage': 0x6f75ef80,
        'petalHealth': 0x44c00,
        'petalHeal': 0x4e200,
        'petalMass': 0x124f800,
        'detectionDistance': 3.3,
        'xp': 0xad78ebc5ac6200000
    },
    {
        'name': 'Noble',
        'health': 0x1faa3b500,
        'damage': 0x15f90,
        'radius': 0xe4,
        'mass': 0x1312d000,
        'petalDamage': 0xd693a400,
        'petalHealth': 0x89800,
        'petalHeal': 0x9c400,
        'petalMass': 0x16e36000,
        'detectionDistance': 3.35,
        'xp': 0x14542ba12a337c00000
    },
    {
        'name': 'Entropic',
        'health': 0x401332c00,
        'damage': 0x1fbd0,
        'radius': 0x102,
        'mass': 0x2625a000,
        'petalDamage': 0x1ad274800,
        'petalHealth': 0x113000,
        'petalHeal': 0x138800,
        'petalMass': 0x493e000,
        'detectionDistance': 3.4,
        'xp': 0x261dd1ce2f2088000000
    },
    {
        'name': 'Apocalyptic',
        'health': 0xa7a358200,
        'damage': 0x40b28,
        'radius': 0x127,
        'mass': 0x77359400,
        'petalDamage': 0x35a4e9000,
        'petalHealth': 0x226000,
        'petalHeal': 0x271000,
        'petalMass': 0x927c000,
        'detectionDistance': 3.45,
        'xp': 0x4f68ca6d8cd91c0000000
    },
    {
        'name': 'Hollow',
        'health': 0x199c82cc00,
        'damage': 0x81650,
        'radius': 0x14f,
        'mass': 0x165a0bc00,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x94e47b8d68171800000000
    },
    {
        'name': 'Overshadowed',
        'health': 0x30e4f9b400,
        'damage': 0xf4240,
        'radius': 0x17c,
        'mass': 0x2cb417800,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x1172c67a9232b40000000000
    },
    {
        'name': 'Luminous',
        'health': 0x68c6171400,
        'damage': 0x186a00,
        'radius': 0x1af,
        'mass': 0x59682f000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x20b73425d21f1200000000000
    },
    {
        'name': 'Banished',
        'health': 0x104c533c000,
        'damage': 0x30d400,
        'radius': 0x1e9,
        'mass': 0x10c388d000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x3d5781c6e9fa42000000000000
    },
    {
        'name': 'Iridescent',
        'health': 0x2ba7def3000,
        'damage': 0x632ea0,
        'radius': 0x22b,
        'mass': 0x218711a000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x73041354f6b53c0000000000000
    },
    {
        'name': 'Spectral',
        'health': 0x574fbde6000,
        'damage': 0x927c00,
        'radius': 0x276,
        'mass': 0x430e234000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0xd7c0e29888346000000000000000
    },
    {
        'name': 'Mystical',
        'health': 0xcea31f4b000,
        'damage': 0x121eac0,
        'radius': 0x2cb,
        'mass': 0xc92a69c000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x19097eaecfe4c30000000000000000
    },
    {
        'name': 'Arcane',
        'health': 0x1eec3dec2000,
        'damage': 0x24b76a0,
        'radius': 0x32b,
        'mass': 0x1a04d1ad800,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x2ef1cd87c5ccee00000000000000000
    },
    {
        'name': 'Occult',
        'health': 0x3dd87bd84000,
        'damage': 0x3750280,
        'radius': 0x399,
        'mass': 0x3409a35b000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x5805615e92e03c000000000000000000
    },
    {
        'name': 'Origin',
        'health': 0x8de19495c000,
        'damage': 0x7088980,
        'radius': 0x416,
        'mass': 0x9c1cea11000,
        'petalDamage': 0x38d7ea4c68000,
        'petalHealth': 0xe8d4a51000,
        'petalHeal': 0xe8d4a51000,
        'petalMass': 0x38d7ea4c68000,
        'detectionDistance': 3.5,
        'xp': 0xa50a16915364700000000000000000000
    }
];