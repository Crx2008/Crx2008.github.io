let cachedStats = undefined, cachedState = [
        'please\x20regen',
        ![]
    ];
function safeDrawImage(_0x44f122, _0x7c5348, _0x2beda3, _0x2454bc, _0x225657) {
    _0x44f122 && _0x44f122['complete'] && _0x44f122['naturalWidth'] > 0x0 && ctx['drawImage'](_0x44f122, _0x7c5348, _0x2beda3, _0x2454bc, _0x225657);
}
let isTs = window['characterSelector'] !== undefined && window['characterSelector']['selectedIndex'] == '1';
function generateCachedStats(_0x313481) {
    cachedState[0x0] = _0x313481, cachedState[0x1] = ![], window['calculateStats'](![], _0x313481), cachedStats = structuredClone({
        'petals': Stats['petals'],
        'enemies': Stats['enemies']
    }), window['calculateStats'](![]);
}
class StatsBox {
    constructor(_0x48313f, _0x4ba0d0, _0x2f703d = 'petals', _0x21f163, _0x4765d2) {
        this['name'] = _0x48313f, this['type'] = _0x48313f, this['description'] = Descriptions[_0x2f703d][_0x48313f] ? Descriptions[_0x2f703d][_0x48313f] : 'Something\x20interesting...', this['mode'] = _0x2f703d, this['amount'] = _0x21f163, this['rarity'] = _0x4765d2, this['h'] = this['w'] = this['x'] = this['y'] = 0x0, this['image'] = null, this['generateData'](_0x2f703d, _0x48313f, _0x4ba0d0);
    }
    ['generateData'](_0x53dd4a, _0x592310, _0x9b7cc1) {
        cachedState[0x0] !== isTs && generateCachedStats(isTs);
        const _0x429f35 = [
            'Abyssal\x20Artifact',
            'Scorched\x20Artifact',
            'Verdant\x20Artifact',
            'Cosmic\x20Artifact',
            'Chimera'
        ];
        if (_0x429f35['includes'](this['type'])) {
            this['generateArtifactData']();
            return;
        }
        if (_0x53dd4a == 'petals') {
            _0x9b7cc1 = cachedStats['petals'][this['type']][this['rarity']];
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
                        'text': Colors['rarities'][_0x9b7cc1['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maximumRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maximumRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maximumRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maximumRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maximumRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maxReviveRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxReviveRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxDuplicationRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxConversionRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxDuplicationRarity']]['color']
                    },
                    {
                        'text': 'mobs.\x20Converting',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x9b7cc1['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxDuplicationRarity']]['color']
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
                        'text': Colors['rarities'][_0x9b7cc1['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxConversionRarity']]['color']
                    },
                    {
                        'text': 'mobs.\x20Converting',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x9b7cc1['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxConversionRarity']]['color']
                    },
                    {
                        'text': 'mobs\x20disables\x20the\x20slot\x20for\x20the\x20rest\x20of\x20the\x20wave.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Ruby' && _0x9b7cc1['minimumConvert'])
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20friendship.',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x9b7cc1['minimumConvert'] - 0x1]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['minimumConvert'] - 0x1]['color']
                    },
                    {
                        'text': 'rarity\x20mobs\x20and\x20below\x20get\x20converted\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x9b7cc1['maxReviveRarity']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxReviveRarity']]['color']
                    },
                    {
                        'text': 'summons,\x20but',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x9b7cc1['minimumConvert']]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['minimumConvert']]['color']
                    },
                    {
                        'text': 'rarity\x20mobs\x20and\x20above\x20get\x20converted\x20into',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x9b7cc1['maxReviveRarity'] + 0x1]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxReviveRarity'] + 0x1]['color']
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
                        'text': 'stronger\x20than\x20' + formatAmountHighPrecision(_0x9b7cc1['health'] / 0x6) + '/s.',
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
                        'text': Colors['rarities'][_0x9b7cc1['maxEat'] + 0x1]['name'],
                        'color': Colors['rarities'][_0x9b7cc1['maxEat'] + 0x1]['color']
                    },
                    {
                        'text': 'and\x20smaller\x20than\x201/2\x20of\x20the\x20beetle\x20get\x20eaten\x20whole.',
                        'color': '#ffffff'
                    }
                ];
            if (typeof this['description'] == 'string') {
                let _0x3a325c = this['description'];
                this['description'] = [], this['description']['push']({
                    'text': _0x3a325c,
                    'color': '#ffffff'
                });
            }
            this['topstats'] = [], this['bottomstats'] = [];
            for (let _0x202b95 in _0x9b7cc1) {
                if (!isTs && ['tanksmithRadius']['includes'](_0x202b95))
                    continue;
                if ([
                        'reload',
                        'lifespan',
                        'hatchTime',
                        'spawnSystem',
                        'timeToPop',
                        'timeLimit'
                    ]['includes'](_0x202b95)) {
                    if (_0x202b95 == 'hatchTime' && isTs)
                        continue;
                    if (isTs) {
                        if (_0x202b95 == 'reload' && _0x9b7cc1['tanksmithCooldown']) {
                            this['topstats']['push']({
                                'key': _0x202b95,
                                'value': _0x9b7cc1['tanksmithCooldown'] / 0x1e,
                                'color': statColors[_0x202b95]
                            });
                            _0x9b7cc1['tanksmithShootCooldown'] ? this['topstats']['push']({
                                'key': 'shootCd',
                                'value': _0x9b7cc1['tanksmithCooldown'] / 0x1e,
                                'color': statColors[_0x202b95]
                            }) : this['topstats']['push']({
                                'key': 'shootCd',
                                'value': _0x9b7cc1[_0x202b95],
                                'color': statColors[_0x202b95]
                            });
                            continue;
                        } else {
                            if (_0x202b95 == 'reload') {
                                this['topstats']['push']({
                                    'key': _0x202b95,
                                    'value': _0x9b7cc1[_0x202b95] * 1.5,
                                    'color': statColors[_0x202b95]
                                });
                                _0x9b7cc1['tanksmithShootCooldown'] ? this['topstats']['push']({
                                    'key': 'shootCd',
                                    'value': _0x9b7cc1['tanksmithCooldown'] / 0x1e,
                                    'color': statColors[_0x202b95]
                                }) : this['topstats']['push']({
                                    'key': 'shootCd',
                                    'value': _0x9b7cc1[_0x202b95],
                                    'color': statColors[_0x202b95]
                                });
                                continue;
                            }
                        }
                    }
                    if (!(_0x202b95 == 'timeToPop' && _0x9b7cc1[_0x202b95] == 0x0))
                        this['topstats']['push']({
                            'key': _0x202b95,
                            'value': _0x9b7cc1[_0x202b95],
                            'color': statColors[_0x202b95]
                        });
                    if (_0x202b95 == 'spawnSystem') {
                        let _0x101d2b = 0.8;
                        if (this['rarity'] <= 0xd)
                            _0x101d2b *= 2.25;
                        else {
                            if (this['rarity'] >= 0xe)
                                _0x101d2b *= 0.866;
                            if (this['rarity'] == 0xf)
                                _0x101d2b *= 2.875;
                            if (this['rarity'] >= 0x10)
                                _0x101d2b *= 1.5;
                        }
                        this['bottomstats']['push']({
                            'key': 'summon',
                            'value': {
                                'rarity': _0x9b7cc1[_0x202b95][0x0],
                                'type': 'Sandstorm',
                                'amount': _0x9b7cc1[_0x202b95][0x2],
                                'substats': {
                                    'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.86,
                                    'health': Stats['enemies']['Sandstorm'][_0x9b7cc1[_0x202b95][0x0]]['health'] * 0.44,
                                    'mass': Stats['enemies']['Sandstorm'][_0x9b7cc1[_0x202b95][0x0]]['mass'] * _0x101d2b * 0xa
                                }
                            },
                            'color': statColors['cooldown']
                        });
                    }
                } else {
                    if (statColors[_0x202b95]) {
                        if (_0x202b95 == 'mana' && this['type'] == 'Amulet\x20of\x20Time')
                            this['bottomstats']['push']({
                                'key': 'timeMana',
                                'value': _0x9b7cc1[_0x202b95],
                                'color': Colors['mana']['time']
                            });
                        else {
                            if (_0x202b95 == 'mana' && this['type'] == 'Amulet\x20of\x20Divergence')
                                this['bottomstats']['push']({
                                    'key': 'divergenceMana',
                                    'value': _0x9b7cc1[_0x202b95],
                                    'color': Colors['mana']['divergence']
                                });
                            else {
                                if (_0x202b95 == 'mana' && this['type'] == 'Amulet\x20of\x20Grace')
                                    this['bottomstats']['push']({
                                        'key': 'graceMana',
                                        'value': _0x9b7cc1[_0x202b95],
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
                                        ]['includes'](_0x202b95))
                                        this['bottomstats']['push']({
                                            'key': _0x202b95,
                                            'value': _0x9b7cc1[_0x202b95],
                                            'color': statColors[_0x202b95],
                                            'unstackable': !![]
                                        });
                                    else {
                                        if (_0x202b95 == 'maxDamage' && [
                                                'Shiny\x20Wing',
                                                'Shiny\x20Leaf',
                                                'Shiny\x20Coral'
                                            ])
                                            this['bottomstats']['push']({
                                                'key': 'maxDamage',
                                                'value': _0x9b7cc1[_0x202b95] + _0x9b7cc1['damage'],
                                                'color': statColors['damage']
                                            });
                                        else
                                            this['bottomstats']['push']({
                                                'key': _0x202b95,
                                                'value': _0x9b7cc1[_0x202b95],
                                                'color': statColors[_0x202b95]
                                            });
                                    }
                                }
                            }
                        }
                        _0x202b95 == 'damage' && ((this['type'] == 'Lightning' || this['type'] == 'Blueberries' || this['type'] == 'Shiny\x20Lightning') && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x9b7cc1[_0x202b95],
                            'color': statColors['lightning']
                        }), this['type'] == 'Fig' && this['bottomstats']['push']({
                            'key': 'blastDamage',
                            'value': _0x9b7cc1[_0x202b95],
                            'color': statColors['damage']
                        }));
                        if (_0x202b95 == 'petLifespan') {
                            if (this['type'] == 'Ruby') {
                                let _0x2180d2 = 0.8 * Stats['rarities'][this['rarity']]['petalDamage'], _0x1b9e6f = 0xfa0 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': -0x1,
                                        'type': 'Rubied\x20Enemy',
                                        'substats': {
                                            'damage': _0x2180d2,
                                            'health': _0x1b9e6f,
                                            'mass': 'Varies'
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                            if (this['type'] == 'Shiny\x20Ruby') {
                                let _0xbf3036 = 0x1 / 0x8 * Stats['rarities'][this['rarity']]['petalDamage'], _0xcaf240 = 0x1770 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': -0x1,
                                        'type': 'Rubied\x20Enemy',
                                        'substats': {
                                            'damage': _0xbf3036,
                                            'health': _0xcaf240,
                                            'mass': 'Varies.'
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                        }
                    } else {
                        if (_0x202b95 == 'spawnRarity') {
                            let _0x2ca16a = 0.9;
                            if (this['rarity'] <= 0xd && (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg'))
                                _0x2ca16a *= 2.25;
                            else {
                                if (this['rarity'] >= 0xe)
                                    _0x2ca16a *= 1.375;
                                if (this['rarity'] == 0xf && (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg'))
                                    _0x2ca16a *= 2.875;
                                if (this['rarity'] >= 0x10)
                                    _0x2ca16a *= 1.9;
                            }
                            this['type'] == 'Egg' && (this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x9b7cc1[_0x202b95],
                                    'type': 'Beetle',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0x2,
                                        'health': Stats['enemies']['Beetle'][_0x9b7cc1[_0x202b95]]['health'] * 0.2,
                                        'mass': Stats['enemies']['Beetle'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a * 0x9
                                    }
                                },
                                'color': statColors['cooldown']
                            }), console['log'](Stats['rarities'][this['rarity']]['petalDamage']));
                            this['type'] == 'Shiny\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x9b7cc1[_0x202b95],
                                    'type': 'Shiny\x20Beetle',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0x6,
                                        'health': Stats['enemies']['Beetle'][_0x9b7cc1[_0x202b95]]['health'] * 0.25,
                                        'mass': [
                                            Stats['enemies']['Shiny\x20Beetle'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a * 0x2 * 0x8,
                                            Stats['enemies']['Shiny\x20Beetle'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a * 0x2 * 2.5 * 0x8
                                        ]
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            if (this['type'] == 'Ant\x20Egg') {
                                let _0x47d7b5 = 0x12 * Stats['rarities'][this['rarity']]['petalDamage'];
                                console['log'](this['rarity']), console['log'](_0x47d7b5);
                                if (this['rarity'] >= 0xa)
                                    _0x47d7b5 *= 0x4 / 0x5;
                                if (this['rarity'] >= 0xd)
                                    _0x47d7b5 *= 0x5 / 0x6;
                                if (this['rarity'] >= 0xf)
                                    _0x47d7b5 *= 0x5 / 0x6;
                                let _0x42fdc8 = 0x546 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': _0x9b7cc1[_0x202b95],
                                        'type': 'Soldier\x20Ant',
                                        'substats': {
                                            'damage': _0x47d7b5,
                                            'health': _0x42fdc8,
                                            'mass': Stats['enemies']['Soldier\x20Ant'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                            this['type'] == 'Jellyfish\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x9b7cc1[_0x202b95],
                                    'type': 'Jellyfish',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'],
                                        'health': Stats['enemies']['Jellyfish'][_0x9b7cc1[_0x202b95]]['health'] / 0x6,
                                        'mass': Stats['enemies']['Jellyfish'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a * 0x8,
                                        'lightning': Stats['enemies']['Jellyfish'][_0x9b7cc1[_0x202b95]]['health'] * (this['rarity'] >= 0xe ? 0.05 : 0.12),
                                        'bounces': _0x9b7cc1[_0x202b95] > 0xb ? _0x9b7cc1[_0x202b95] > 0xd ? 0x4 : 0x3 : 0x2
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Neuroflare\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x9b7cc1[_0x202b95],
                                    'type': 'Neuroflare',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 1.2,
                                        'health': Stats['enemies']['Neuroflare'][_0x9b7cc1[_0x202b95]]['health'],
                                        'mass': Stats['enemies']['Neuroflare'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a,
                                        'lightning': Stats['enemies']['Neuroflare'][_0x9b7cc1[_0x202b95]]['health'] * (this['rarity'] >= 0xe ? 0.025 : 0.06),
                                        'bounces': _0x9b7cc1[_0x202b95] > 0xb ? _0x9b7cc1[_0x202b95] > 0xd ? 0x4 : 0x3 : 0x2
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Plastic\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x9b7cc1[_0x202b95],
                                    'type': 'Plastic',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Plastic'][_0x9b7cc1[_0x202b95]]['health'],
                                        'mass': Stats['enemies']['Plastic'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Square' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x9b7cc1[_0x202b95],
                                    'type': 'Square',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Square'][_0x9b7cc1[_0x202b95]]['health'],
                                        'mass': Stats['enemies']['Square'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Pentagon' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x9b7cc1[_0x202b95],
                                    'type': 'Pentagon',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Pentagon'][_0x9b7cc1[_0x202b95]]['health'],
                                        'mass': Stats['enemies']['Pentagon'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Hexagon' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x9b7cc1[_0x202b95],
                                    'type': 'Hexagon',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Hexagon'][_0x9b7cc1[_0x202b95]]['health'],
                                        'mass': Stats['enemies']['Hexagon'][_0x9b7cc1[_0x202b95]]['mass'] * _0x2ca16a
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            if (this['type'] == 'Bubble' && this['rarity'] >= 0xd) {
                                let _0x4e9149 = Stats['enemies']['Bubble'][_0x9b7cc1[_0x202b95]]['mass'] / 0x64 * _0x2ca16a * 0x50;
                                if (this['rarity'] == 0xd)
                                    _0x4e9149 *= 0x2;
                                if (this['rarity'] >= 0xf)
                                    _0x4e9149 *= 0x2;
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': _0x9b7cc1[_0x202b95],
                                        'type': 'Bubble',
                                        'substats': {
                                            'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.1,
                                            'health': Stats['enemies']['Bubble'][_0x9b7cc1[_0x202b95]]['health'] * 0.005,
                                            'mass': _0x4e9149,
                                            'maxEnemyBoost': _0x4e9149 * 0.15
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                        } else {
                            if (_0x202b95 == 'damageHeal') {
                                if (_0x9b7cc1[_0x202b95] > 0x0)
                                    this['bottomstats']['push']({
                                        'key': 'lifesteal',
                                        'value': _0x9b7cc1[_0x202b95],
                                        'color': statColors['heal']
                                    });
                                else
                                    _0x9b7cc1[_0x202b95] < 0x0 && this['bottomstats']['push']({
                                        'key': 'selfDamage',
                                        'value': -_0x9b7cc1[_0x202b95],
                                        'color': statColors['damage']
                                    });
                            } else {
                                if (_0x202b95 == 'petalNum')
                                    this['bottomstats']['push']({
                                        'key': 'mimickedPetals',
                                        'value': _0x9b7cc1[_0x202b95],
                                        'color': statColors['extraRange']
                                    });
                                else
                                    _0x202b95 == 'shield' && this['bottomstats']['push']({
                                        'key': _0x202b95,
                                        'value': formatAmountHighPrecision(_0x9b7cc1[_0x202b95]),
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
                let _0x42a2ff = 0.8;
                if (this['rarity'] >= 0xe)
                    _0x42a2ff *= 1.375;
                if (this['rarity'] >= 0x10)
                    _0x42a2ff *= 1.5;
                let _0x3e615c = 3.4 * Stats['rarities'][this['rarity']]['petalDamage'], _0x4bbf4f = 0x1f4 * Stats['rarities'][this['rarity']]['petalHealth'];
                this['bottomstats']['push']({
                    'key': 'summon',
                    'value': {
                        'rarity': _0x9b7cc1['maximumRarity'],
                        'type': 'Mossy\x20Ruby',
                        'substats': {
                            'damage': _0x3e615c,
                            'health': _0x4bbf4f,
                            'mass': Stats['enemies']['Ruby'][_0x9b7cc1['maximumRarity']]['mass'] * _0x42a2ff
                        }
                    },
                    'color': statColors['cooldown']
                });
            }
            if (this['type'] == 'Trinket\x20of\x20the\x20Hivemind') {
                let _0x48476e = 0.8;
                if (this['rarity'] >= 0xe)
                    _0x48476e *= 1.375;
                if (this['rarity'] >= 0x10)
                    _0x48476e *= 1.5;
                let _0x435b16 = 0x23 * Stats['rarities'][this['rarity']]['petalDamage'];
                if (this['rarity'] >= 0xa)
                    _0x435b16 *= 0x4 / 0x5;
                if (this['rarity'] >= 0xd)
                    _0x435b16 *= 0x5 / 0x6;
                if (this['rarity'] >= 0xf)
                    _0x435b16 *= 0x5 / 0x6;
                let _0x294df7 = 0xbb8 * Stats['rarities'][this['rarity']]['petalHealth'];
                this['bottomstats']['push']({
                    'key': 'summon',
                    'value': {
                        'rarity': _0x9b7cc1['maximumRarity'],
                        'type': 'Soldier\x20Termite',
                        'substats': {
                            'damage': _0x435b16,
                            'health': _0x294df7,
                            'mass': Stats['enemies']['Soldier\x20Termite'][_0x9b7cc1['maximumRarity']]['mass'] * _0x48476e
                        }
                    },
                    'color': statColors['cooldown']
                });
            }
        } else {
            _0x9b7cc1 = cachedStats['enemies'][this['type']][this['rarity']];
            if (this['type'] == 'Hexagon')
                this['name'] = 'ӇЄҲƛƓƠƝ';
            if (typeof this['description'] == 'string') {
                let _0x2dcb32 = this['description'];
                this['description'] = [], this['description']['push']({
                    'text': _0x2dcb32,
                    'color': '#ffffff'
                });
            }
            this['topstats'] = [], this['bottomstats'] = [];
            for (let _0x461616 in _0x9b7cc1) {
                if (!isTs && ['tanksmithRadius']['includes'](_0x461616))
                    continue;
                if (['xp']['includes'](_0x461616))
                    this['topstats']['push']({
                        'key': _0x461616,
                        'value': _0x9b7cc1[_0x461616],
                        'color': statColors[_0x461616]
                    });
                else {
                    if (statColors[_0x461616]) {
                        this['bottomstats']['push']({
                            'key': _0x461616,
                            'value': _0x9b7cc1[_0x461616],
                            'color': statColors[_0x461616]
                        });
                        if (_0x461616 == 'damage')
                            this['type'] == 'Firefly' && this['bottomstats']['push']({
                                'key': 'lightning',
                                'value': _0x9b7cc1[_0x461616] * 0.125,
                                'color': statColors['lightning']
                            });
                        _0x461616 == 'damage' && (this['type'] == 'Jellyfish' && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x9b7cc1[_0x461616] * 1.5,
                            'color': statColors['lightning']
                        }), this['type'] == 'Neuroflare' && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x9b7cc1[_0x461616] * 0.8,
                            'color': statColors['lightning']
                        }), (this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel') && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x9b7cc1[_0x461616],
                            'color': statColors['lightning']
                        }));
                        if (_0x461616 == 'health')
                            (this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel') && this['bottomstats']['push']({
                                'key': 'lifesteal',
                                'value': _0x9b7cc1[_0x461616] * 0.00125,
                                'color': statColors['heal']
                            });
                        if (_0x461616 == 'health')
                            (this['type'] == 'Leech' || this['type'] == 'BudLeech' || this['type'] == 'Tick') && this['bottomstats']['push']({
                                'key': 'lifesteal',
                                'value': _0x9b7cc1[_0x461616] * 0.0025,
                                'color': statColors['heal']
                            });
                    } else
                        _0x461616 == 'drops' && this['bottomstats']['push']({
                            'key': _0x461616,
                            'value': _0x9b7cc1[_0x461616],
                            'color': '#ffffff'
                        }), _0x461616 == 'healing' && this['bottomstats']['push']({
                            'key': 'regeneration',
                            'value': _0x9b7cc1[_0x461616] * _0x9b7cc1['health'] * 0x1e,
                            'color': statColors['heal']
                        });
                }
            }
        }
    }
    ['generateArtifactData']() {
        this['topstats'] = [], this['bottomstats'] = [];
        if (typeof SKILL_TREES !== 'undefined' && SKILL_TREES[this['type']]) {
            const _0x29dcb0 = SKILL_TREES[this['type']];
            this['description'] = [{
                    'text': _0x29dcb0['description'],
                    'color': _0x29dcb0['color'] || '#ffffff'
                }];
        }
        const _0x15b17c = window['specialGlobalInventory']?.['artifacts']?.[this['type']], _0x1f480b = _0x15b17c?.['skillLevels'] || {}, _0x5b18f1 = _0x4fc45c => {
                let _0x281173 = 0x0;
                for (const [_0x42f16e, _0x27f62d] of Object['entries'](_0x1f480b)) {
                    typeof _0x27f62d === 'number' && _0x42f16e['startsWith'](_0x4fc45c) && (_0x281173 += _0x27f62d);
                }
                return _0x281173;
            };
        switch (this['type']) {
        case 'Abyssal\x20Artifact':
            const _0x6f99c9 = _0x5b18f1('egg_hp'), _0x484493 = _0x5b18f1('egg_damage'), _0x13964c = _0x5b18f1('egg_mass');
            this['bottomstats']['push']({
                'key': 'eggHpMultiplier',
                'value': 1.4 + _0x6f99c9 * 0.05,
                'displayName': 'Egg\x20HP:\x20x' + (1.4 + _0x6f99c9 * 0.05)['toFixed'](0x2),
                'color': statColors['eggHpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'eggDamageMultiplier',
                'value': 1.4 + _0x484493 * 0.05,
                'displayName': 'Egg\x20Damage:\x20x' + (1.4 + _0x484493 * 0.05)['toFixed'](0x2),
                'color': statColors['eggDamageMultiplier']
            }), this['bottomstats']['push']({
                'key': 'eggMassMultiplier',
                'value': 1.4 + _0x13964c * 0.05,
                'displayName': 'Egg\x20Mass:\x20x' + (1.4 + _0x13964c * 0.05)['toFixed'](0x2),
                'color': statColors['eggMassMultiplier']
            });
            break;
        case 'Scorched\x20Artifact':
            const _0x43bcf8 = _0x5b18f1('heal_mult');
            this['bottomstats']['push']({
                'key': 'healMultiplier',
                'value': 1.2 + _0x43bcf8 * 0.1,
                'displayName': 'Heal:\x20x' + (1.2 + _0x43bcf8 * 0.1)['toFixed'](0x2),
                'color': statColors['healMultiplier']
            }), this['bottomstats']['push']({
                'key': 'squadHealShare',
                'value': 0.33,
                'displayName': 'Squad\x20Heal:\x2033%',
                'color': statColors['squadHealShare']
            });
            break;
        case 'Verdant\x20Artifact':
            const _0x482c9b = _0x5b18f1('dps'), _0x5647be = _0x5b18f1('ult_cd');
            this['bottomstats']['push']({
                'key': 'dpsMultiplier',
                'value': 1.5 + _0x482c9b * 0.05,
                'displayName': 'DPS:\x20x' + (1.5 + _0x482c9b * 0.05)['toFixed'](0x2),
                'color': statColors['dpsMultiplier']
            });
            _0x5647be > 0x0 && this['bottomstats']['push']({
                'key': 'cooldownReduction',
                'value': _0x5647be * 0.05,
                'displayName': 'Petal\x20CD:\x20-' + (_0x5647be * 0x5)['toFixed'](0x0) + '%',
                'color': statColors['dpsMultiplier']
            });
            break;
        case 'Cosmic\x20Artifact':
            const _0x4d586d = _0x5b18f1('hp_mult'), _0x542e28 = _0x5b18f1('range'), _0x49443a = _0x5b18f1('knockback'), _0x5d2b1e = _0x5b18f1('ult_cd');
            this['bottomstats']['push']({
                'key': 'hpMultiplier',
                'value': 1.2 + _0x4d586d * 0.1,
                'displayName': 'HP:\x20x' + (1.2 + _0x4d586d * 0.1)['toFixed'](0x2),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'ultRange',
                'value': 0x1f4 + _0x542e28 * 0x14,
                'displayName': 'Ult\x20Range:\x20' + (0x1f4 + _0x542e28 * 0x14),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'ultBubbleLvl',
                'value': _0x4d586d + _0x5d2b1e + _0x542e28 + _0x49443a,
                'displayName': 'Bubble\x20Lv:\x20' + Math['min'](_0x4d586d + _0x5d2b1e + _0x542e28 + _0x49443a, 0x22),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'knockbackMult',
                'value': 0x1 + _0x49443a * 0.05,
                'displayName': 'Knockback:\x20x' + (0x1 + _0x49443a * 0.05)['toFixed'](0x2),
                'color': statColors['hpMultiplier']
            });
            const _0x3ed1a3 = Math['max'](0x3c + _0x5d2b1e * -1.5, 0xa);
            this['bottomstats']['push']({
                'key': 'ultCooldown',
                'value': _0x3ed1a3,
                'displayName': 'Ult\x20CD:\x20' + _0x3ed1a3 + 's',
                'color': statColors['hpMultiplier']
            });
            break;
        case 'Chimera':
            const _0x4c72ac = _0x5b18f1('damage'), _0x2da7b2 = _0x5b18f1('speed'), _0x8f8f3b = _0x5b18f1('hp'), _0xd1fcf3 = _0x5b18f1('ult_cd');
            this['bottomstats']['push']({
                'key': 'mobDamageMultiplier',
                'value': 1.5 + _0x4c72ac * 0.1,
                'displayName': 'Mob\x20Damage:\x20x' + (1.5 + _0x4c72ac * 0.1)['toFixed'](0x2),
                'color': statColors['mobDamageMultiplier'] || '#ff6666'
            }), this['bottomstats']['push']({
                'key': 'mobSpeedMultiplier',
                'value': 0x1 + _0x2da7b2 * 0.05,
                'displayName': 'Mob\x20Speed:\x20x' + (0x1 + _0x2da7b2 * 0.05)['toFixed'](0x2),
                'color': statColors['mobSpeedMultiplier'] || '#99ccff'
            }), this['bottomstats']['push']({
                'key': 'mobHpMultiplier',
                'value': 0x1 + _0x8f8f3b * 0.1,
                'displayName': 'Mob\x20HP:\x20x' + (0x1 + _0x8f8f3b * 0.1)['toFixed'](0x2),
                'color': statColors['mobHpMultiplier'] || '#ff9999'
            });
            const _0xf54ebe = Math['max'](0xa - _0xd1fcf3 * 0.5, 0x3);
            this['bottomstats']['push']({
                'key': 'abilityCooldown',
                'value': _0xf54ebe,
                'displayName': 'Ability\x20CD:\x20' + _0xf54ebe['toFixed'](0x1) + 's',
                'color': statColors['abilityCooldown'] || '#ffcc66'
            });
            break;
        }
    }
    ['stripRomanNumeral'](_0x560c84) {
        return _0x560c84['replace'](/\s+[IVX]+$/, '');
    }
    ['drawArtifactTooltip']() {
        const _0x2e4304 = window['specialGlobalInventory'], _0x1b9faa = _0x2e4304?.['artifacts']?.[this['type']], _0x3f493b = _0x1b9faa?.['skillLevels'] || {}, _0x1a9ccd = SKILL_TREES?.[this['type']];
        if (!_0x1a9ccd)
            return;
        const _0x4ee25f = this['type'], _0x2122a7 = _0x1a9ccd['color'] || '#ffffff', _0x56b7d5 = _0x1a9ccd['description'] || '', _0x2c1cff = {};
        for (const _0x4c6793 of _0x1a9ccd['nodes']) {
            if (_0x4c6793['isRoot'] || !_0x4c6793['statKey'])
                continue;
            const _0x55a928 = _0x4c6793['id']['replace'](/_\d+$/, '');
            !_0x2c1cff[_0x55a928] && (_0x2c1cff[_0x55a928] = {
                'statKey': _0x4c6793['statKey'],
                'baseValue': _0x4c6793['baseValue'],
                'valuePerLevel': _0x4c6793['valuePerLevel'],
                'totalLevels': 0x0,
                'displayName': _0x4c6793['name']
            });
        }
        for (const [_0x2a0916, _0x41fb5c] of Object['entries'](_0x3f493b)) {
            const _0xcc2363 = _0x2a0916['replace'](/_\d+$/, '');
            _0x2c1cff[_0xcc2363] && (_0x2c1cff[_0xcc2363]['totalLevels'] += _0x41fb5c);
        }
        let _0x451b99 = [];
        for (const [_0x11ef99, _0x44d337] of Object['entries'](_0x2c1cff)) {
            if (_0x44d337['totalLevels'] === 0x0 && _0x44d337['baseValue'] === 0x0)
                continue;
            let _0x3dd1e2 = _0x44d337['baseValue'] + _0x44d337['totalLevels'] * _0x44d337['valuePerLevel'];
            _0x44d337['statKey'] === 'cooldownReduction' && (_0x3dd1e2 = _0x3dd1e2 * 0x64);
            const _0x4ddcff = this['stripRomanNumeral'](_0x44d337['displayName']), _0x5152e0 = {
                    'key': _0x4ddcff,
                    'value': _0x3dd1e2,
                    'format': this['getValueFormat'](_0x44d337['statKey'])
                };
            _0x451b99['push'](_0x5152e0);
        }
        _0x1a9ccd['passiveEffects']?.['squadHealShare'] && _0x451b99['push']({
            'key': 'Squad\x20Heal',
            'value': _0x1a9ccd['passiveEffects']['squadHealShare'] * 0x64,
            'format': 'percent'
        });
        ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu';
        const _0x3b7d55 = ctx['measureText'](_0x4ee25f)['width'];
        ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu';
        const _0xa3564 = 0x118, _0x12df02 = this['wrapText'](_0x56b7d5, _0xa3564, 0.75 * 22.5), _0x424fa5 = Math['max'](..._0x12df02['map'](_0x3d968c => ctx['measureText'](_0x3d968c)['width']));
        let _0x148e9d = 0x0;
        for (const _0x3018a7 of _0x451b99) {
            const _0x4e012e = this['formatStatValue'](_0x3018a7);
            _0x148e9d = Math['max'](_0x148e9d, ctx['measureText'](_0x4e012e)['width']);
        }
        const _0x16fac1 = Math['max'](_0x3b7d55 + 0x14, Math['max'](_0x424fa5 + 0x14, _0x148e9d + 0x14)), _0x4e4993 = 0x4b + _0x12df02['length'] * 22.5 + _0x451b99['length'] * 22.5 + 0xa, _0x4a7023 = Math['min'](canvas['w'] - 0x5 - _0x16fac1 / 0x2, Math['max'](0x5, -_0x16fac1 / 0x2 + this['x'])), _0x2045b5 = window['state'] === 'menu';
        let _0x55c18e;
        if (_0x2045b5)
            _0x55c18e = Math['min'](canvas['h'] - 0x5 - _0x4e4993, Math['max'](0x5, this['y']));
        else {
            _0x55c18e = Math['max'](0x5, this['y']);
            if (_0x55c18e + _0x4e4993 > canvas['h'] - 0x5) {
                const _0x533449 = this['y'] + _0x4e4993 + 0x41 / 0x2 + 11.5;
                _0x55c18e = _0x533449 + 0x41 / 0x2 + 11.5, _0x55c18e = Math['min'](canvas['h'] - 0x5 - _0x4e4993, Math['max'](0x5, _0x55c18e));
            }
        }
        ctx['save'](), ctx['shadowColor'] = '#FFD700', ctx['shadowBlur'] = 0xf, ctx['strokeStyle'] = '#FFD700', ctx['lineWidth'] = 0x2, ctx['fillStyle'] = 'rgba(255,\x20215,\x200,\x200.3)', ctx['beginPath'](), ctx['roundRect'](_0x4a7023, _0x55c18e, _0x16fac1, _0x4e4993, 0x5), ctx['fill'](), ctx['stroke'](), ctx['restore'](), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = _0x2122a7, ctx['textAlign'] = 'left', ctx['textBaseline'] = 'top', ctx['strokeText'](_0x4ee25f, _0x4a7023 + 0xa, _0x55c18e + 0xa), ctx['fillText'](_0x4ee25f, _0x4a7023 + 0xa, _0x55c18e + 0xa), ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff';
        let _0x27df77 = _0x55c18e + 0x32;
        for (const _0x4557d9 of _0x12df02) {
            ctx['strokeText'](_0x4557d9, _0x4a7023 + 0xa, _0x27df77), ctx['fillText'](_0x4557d9, _0x4a7023 + 0xa, _0x27df77), _0x27df77 += 22.5;
        }
        let _0x1b8103 = _0x27df77 + 0x5;
        const _0xc8c264 = [
            '#FF6B6B',
            '#4ECDC4',
            '#FFE66D',
            '#95E1D3',
            '#F38181'
        ];
        for (let _0x591746 = 0x0; _0x591746 < _0x451b99['length']; _0x591746++) {
            const _0x2589e4 = _0x451b99[_0x591746], _0x18fc0b = _0xc8c264[_0x591746 % _0xc8c264['length']];
            let _0x496fbd;
            switch (_0x2589e4['format']) {
            case 'multiplier':
                _0x496fbd = 'x' + _0x2589e4['value']['toFixed'](0x2);
                break;
            case 'percent':
                _0x496fbd = _0x2589e4['value']['toFixed'](0x0) + '%';
                break;
            case 'negative_percent':
                _0x496fbd = '-' + _0x2589e4['value']['toFixed'](0x0) + '%';
                break;
            case 'time':
                _0x496fbd = _0x2589e4['value']['toFixed'](0x1) + 's';
                break;
            default:
                _0x496fbd = _0x2589e4['value']['toFixed'](0x2);
            }
            const _0x4a039f = _0x2589e4['key'] + ':';
            ctx['fillStyle'] = _0x18fc0b, ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x4a039f, _0x4a7023 + 0xa, _0x1b8103), ctx['fillText'](_0x4a039f, _0x4a7023 + 0xa, _0x1b8103);
            const _0x3230ba = ctx['measureText'](_0x4a039f)['width'];
            ctx['fillStyle'] = '#ffffff', ctx['strokeText']('\x20' + _0x496fbd, _0x4a7023 + 0xa + _0x3230ba, _0x1b8103), ctx['fillText']('\x20' + _0x496fbd, _0x4a7023 + 0xa + _0x3230ba, _0x1b8103), _0x1b8103 += 22.5;
        }
    }
    ['getValueFormat'](_0x4013e1) {
        if (_0x4013e1?.['includes']('Multiplier') || _0x4013e1 === 'healMultiplier' || _0x4013e1 === 'dpsMultiplier' || _0x4013e1 === 'hpMultiplier')
            return 'multiplier';
        if (_0x4013e1 === 'cooldownReduction')
            return 'negative_percent';
        if (_0x4013e1 === 'cooldown')
            return 'time';
        return 'number';
    }
    ['formatStatValue'](_0x4b7036) {
        let _0x349f42;
        switch (_0x4b7036['format']) {
        case 'multiplier':
            _0x349f42 = 'x' + _0x4b7036['value']['toFixed'](0x2);
            break;
        case 'percent':
            _0x349f42 = _0x4b7036['value']['toFixed'](0x0) + '%';
            break;
        case 'negative_percent':
            _0x349f42 = '-' + _0x4b7036['value']['toFixed'](0x0) + '%';
            break;
        case 'time':
            _0x349f42 = _0x4b7036['value']['toFixed'](0x1) + 's';
            break;
        default:
            _0x349f42 = _0x4b7036['value']['toFixed'](0x2);
        }
        return _0x4b7036['key'] + ':\x20' + _0x349f42;
    }
    ['wrapText'](_0x368b08, _0x3b35e6, _0x108d5c) {
        ctx['font'] = '900\x20' + _0x108d5c + 'px\x20Ubuntu';
        const _0x45b36e = _0x368b08['split']('\x20'), _0x12d45b = [];
        let _0xcc1287 = '';
        for (const _0x58af10 of _0x45b36e) {
            const _0x1d32de = _0xcc1287 + (_0xcc1287 ? '\x20' : '') + _0x58af10;
            ctx['measureText'](_0x1d32de)['width'] > _0x3b35e6 && _0xcc1287 ? (_0x12d45b['push'](_0xcc1287), _0xcc1287 = _0x58af10) : _0xcc1287 = _0x1d32de;
        }
        return _0xcc1287 && _0x12d45b['push'](_0xcc1287), _0x12d45b['length'] > 0x0 ? _0x12d45b : [_0x368b08];
    }
    ['draw']() {
        if (!this['image']) {
            let _0x1dc96c = this['generateDesc'](0x12c, 0x1f4);
            this['w'] = _0x1dc96c['width'], this['h'] = 117.5 + _0x1dc96c['height'];
            for (let _0x30dd77 of this['bottomstats']) {
                const _0x447bb8 = (_0x30dd77['value'] !== 0x0 || _0x30dd77['value'][0x0] && _0x30dd77['value'][0x0] !== 0x0) && !(this['mode'] == 'enemies' && _0x30dd77['key'] == 'detectionDistance' && isNaN(_0x30dd77['value']));
                if (_0x447bb8)
                    this['h'] += 17.5;
                if (_0x30dd77['key'] == 'summon')
                    this['h'] += 17.5 * (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg' ? 0x5 : this['type'] == 'Bubble' && this['rarity'] >= 0xd ? 0x4 : 0x3);
                if (_0x30dd77['key'] == 'drops') {
                    let _0x8e93ae = 0x0, _0x2481ff = 0x0;
                    for (let _0x412fa0 in _0x30dd77['value']) {
                        if (!Array['isArray'](_0x30dd77['value'][_0x412fa0])) {
                            _0x2481ff++;
                            continue;
                        }
                        let _0x2977d1 = 0x0;
                        for (let _0x103fab of _0x30dd77['value'][_0x412fa0]) {
                            if (_0x103fab > 0x0)
                                _0x2977d1++;
                        }
                        _0x8e93ae = Math['max'](_0x8e93ae, _0x2977d1);
                        if (_0x2977d1 == 0x0)
                            _0x2481ff++;
                    }
                    this['w'] = Math['max'](0x19 + _0x8e93ae * 67.5, this['w']), this['h'] += (Object['keys'](_0x30dd77['value'])['length'] - _0x2481ff) * 0x55 + 17.5;
                }
                if ([
                        'slowdown',
                        'killBossUnder',
                        'attractionRadius'
                    ]['includes'](_0x30dd77['key']) && _0x30dd77['value'][0x0]) {
                    let _0x4412db = _0x30dd77['value'][0x0], _0x5007c7 = 0x0;
                    for (let _0x3262ae of _0x30dd77['value']) {
                        if (_0x3262ae < 0x1 || _0x3262ae == undefined)
                            continue;
                        if (_0x3262ae == _0x4412db)
                            continue;
                        _0x5007c7++, _0x4412db = _0x3262ae;
                    }
                    this['h'] += _0x5007c7 * 17.5;
                }
            }
            this['image'] = this['mode'] == 'petals' ? this['genPcBox']() : this['genEcBox'](), this['isTs'] = isTs;
        } else
            ctx['drawImage'](this['image'], Math['min'](canvas['w'] - 0x5 - this['w'] / 0x2, Math['max'](0x5, -this['w'] / 0x2 + this['x'])), Math['min'](canvas['h'] - 0x5 - this['h'], Math['max'](0x5, this['y'])));
        this['isTs'] !== isTs && (delete this['image'], this['generateData'](this['mode'], this['type'], this['stats']));
    }
    ['genPcBox']() {
        const _0x4fce89 = new OffscreenCanvas(this['w'], this['h']), _0x4f668d = _0x4fce89['getContext']('2d'), _0x5d4759 = ctx;
        ctx = _0x4f668d, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['fillStyle'] = '#000000', ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x5), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff', ctx['lineWidth'] = 0x2, ctx['font'] = '900\x20' + 0.9 * 22.5 + 'px\x20Ubuntu', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'top', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0.9 * 3.25, ctx['translate'](this['w'] - 0x23, 0xa), ctx['save'](), ctx['beginPath'](), ctx['arc'](12.5, 12.5, 0xa, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#4CAF50', ctx['lineWidth'] = 2.5, ctx['stroke'](), ctx['beginPath'](), ctx['arc'](12.5, 12.5, 0x6, -0.5, 1.5), ctx['strokeStyle'] = '#4CAF50', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](17.5, 0x8), ctx['lineTo'](0x14, 0xb), ctx['lineTo'](15.5, 0xc), ctx['strokeStyle'] = '#4CAF50', ctx['stroke'](), ctx['restore']();
        let _0x3ed6ce = '', _0xcccff7 = 0x1;
        for (let _0x492886 of this['topstats']) {
            if (_0x492886['key'] == 'reload')
                _0x3ed6ce += formatAmountHighPrecision(_0x492886['value']) + 's';
            else {
                if (_0x492886['key'] == 'shootCd')
                    _0x3ed6ce += formatAmountHighPrecision(_0x492886['value']) + 's';
                else {
                    if (_0x492886['key'] == 'lifespan')
                        _0x3ed6ce += formatAmountHighPrecision(_0x492886['value']) + 's';
                    else {
                        if (_0x492886['key'] == 'hatchTime')
                            _0x3ed6ce += formatAmountHighPrecision(_0x492886['value']) + 's';
                        else {
                            if (_0x492886['key'] == 'timeToPop')
                                _0x3ed6ce += formatAmountHighPrecision(_0x492886['value']) + 's';
                            else
                                _0x492886['key'] == 'spawnSystem' ? _0x3ed6ce += formatAmountHighPrecision(_0x492886['value'])[0x1] + 's' : _0x3ed6ce += formatAmountHighPrecision(_0x492886['value']);
                        }
                    }
                }
            }
            if (this['topstats']['length'] > 0x1 && _0xcccff7 !== this['topstats']['length'])
                _0x3ed6ce += '\x20+\x20';
            _0xcccff7++;
        }
        ctx['strokeText'](_0x3ed6ce, -0x5, 2.5), ctx['fillText'](_0x3ed6ce, -0x5, 2.5), ctx['translate'](-this['w'] + 0x23, 0x0), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['textAlign'] = 'left', ctx['translate'](0xa, 0x0), ctx['strokeText'](this['name'], 0x0, 0x0), ctx['fillText'](this['name'], 0x0, 0x0);
        if (this['amount'] > 0x1) {
            let _0x25c7b3 = ctx['measureText'](this['name'])['width'] + 7.5;
            ctx['translate'](_0x25c7b3, 0x4), ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25, ctx['strokeText']('x' + this['amount']['toLocaleString'](), 0x0, 0x4), ctx['fillText']('x' + this['amount']['toLocaleString'](), 0x0, 0x4), ctx['translate'](-_0x25c7b3, -0x4);
        }
        ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25;
        let _0x3a5548 = ![];
        (this['type'] === 'Shattered\x20Relic\x20of\x20Wrath' || this['type'] === 'Reinforced\x20Relic\x20of\x20Wrath' || this['type'] === 'Subset\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Division\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Guard\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Knight\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Aid\x20Relic\x20of\x20Serenity' || this['type'] === 'Subliminal\x20Relic\x20of\x20Serenity' || this['type'] === 'Barrier\x20Relic\x20of\x20Serenity' || this['type'] === 'Token') && this['rarity'] == 0x0 && (_0x3a5548 = !![]);
        ctx['fillStyle'] = _0x3a5548 == !![] ? '#000000' : Colors['rarities'][this['rarity']]['color'], ctx['translate'](0x0, 0x1e);
        if (this['type'] == 'Hexagon') {
            let _0x5456ec = Colors['rarities'][this['rarity']]['name'], _0x389444 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x24f11b = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
            _0x5456ec = _0x5456ec['toUpperCase']();
            let _0x14be7f = '';
            for (let _0x50995f of _0x5456ec) {
                _0x14be7f += _0x24f11b[_0x389444['indexOf'](_0x50995f)] ? _0x24f11b[_0x389444['indexOf'](_0x50995f)] : _0x50995f;
            }
            _0x5456ec = _0x14be7f, ctx['strokeText'](_0x5456ec, 0x0, 0x0), ctx['fillText'](_0x5456ec, 0x0, 0x0);
        } else
            ctx['strokeText'](_0x3a5548 == !![] ? '???' : Colors['rarities'][this['rarity']]['name'], 0x0, 0x0), ctx['fillText'](_0x3a5548 == !![] ? '???' : Colors['rarities'][this['rarity']]['name'], 0x0, 0x0);
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['translate'](0x0, 0x2d);
        for (let _0x1c29f8 of this['finalDesc']) {
            let _0x2be2f2 = 0x0;
            for (let _0x1d528a of _0x1c29f8) {
                ctx['fillStyle'] = _0x1d528a['color'], ctx['strokeText'](_0x1d528a['text'], 0x0, 0x0), ctx['fillText'](_0x1d528a['text'], 0x0, 0x0), ctx['translate'](_0x1d528a['written'], 0x0), _0x2be2f2 += _0x1d528a['written'];
            }
            ctx['translate'](-_0x2be2f2, 22.5);
        }
        ctx['translate'](0x0, 22.5);
        for (let _0x1bf10d of this['bottomstats']) {
            if (_0x1bf10d['value'] == 0x0)
                continue;
            ctx['fillStyle'] = _0x1bf10d['color'];
            let _0x3ca38c = _0x1bf10d['displayName'] || this['formatName'](_0x1bf10d['key']) + ':\x20', _0x3856a8 = ctx['measureText'](_0x3ca38c)['width'];
            if (this['type'] == 'Hexagon') {
                let _0x3ce4de = this['formatName'](_0x1bf10d['key']) + ':\x20', _0x2f9c23 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x38558e = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                _0x3ce4de = _0x3ce4de['toUpperCase']();
                let _0x1f43b1 = '';
                for (let _0x5eb129 of _0x3ce4de) {
                    _0x1f43b1 += _0x38558e[_0x2f9c23['indexOf'](_0x5eb129)] ? _0x38558e[_0x2f9c23['indexOf'](_0x5eb129)] : _0x5eb129;
                }
                _0x3ce4de = _0x1f43b1, ctx['strokeText'](_0x3ce4de, 0x0, 0x0), ctx['fillText'](_0x3ce4de, 0x0, 0x0), _0x3856a8 = ctx['measureText'](_0x3ce4de)['width'];
            } else
                ctx['strokeText'](_0x3ca38c, 0x0, 0x0), ctx['fillText'](_0x3ca38c, 0x0, 0x0);
            ctx['translate'](_0x3856a8, 0x0);
            if (_0x1bf10d['displayName']) {
                ctx['translate'](-_0x3856a8, 17.5);
                continue;
            }
            ctx['fillStyle'] = '#ffffff';
            let _0x2aeb71 = formatAmountHighPrecision(_0x1bf10d['value']);
            if ([
                    'poison',
                    'flowerBodyPoison',
                    'summonBodyPoison'
                ]['includes'](_0x1bf10d['key']))
                this['type'] == 'Shiny\x20Iris' ? _0x2aeb71 = formatAmountHighPrecision(_0x1bf10d['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0x1bf10d['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0x1bf10d['value'][0x0] / _0x1bf10d['value'][0x1] * 0x64) / 0x64 + 's\x20per\x20enemy)' : _0x2aeb71 = formatAmountHighPrecision(_0x1bf10d['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0x1bf10d['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0x1bf10d['value'][0x0] / _0x1bf10d['value'][0x1] * 0x64) / 0x64 + 's)';
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
                    ]['includes'](_0x1bf10d['key']))
                    _0x2aeb71 += 's';
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
                        ]['includes'](_0x1bf10d['key']))
                        _0x2aeb71 += '%';
                    else {
                        if (_0x1bf10d['key'] === 'waveSpeedBoost')
                            _0x2aeb71 = '+' + Math['round']((_0x1bf10d['value'] - 0x1) * 0x64) + '%';
                        else {
                            if (_0x1bf10d['key'] === 'speedReduction')
                                _0x2aeb71 = (_0x1bf10d['value'] * 0x64)['toFixed'](0x2) + '%/wave';
                            else {
                                if (_0x1bf10d['key'] === 'ratedWave')
                                    _0x2aeb71 = 'wave\x20' + _0x1bf10d['value'];
                                else {
                                    if (['damageIncrease']['includes'](_0x1bf10d['key'])) {
                                        ctx['strokeText'](_0x1bf10d['value'] + '%\x20(' + _0x1bf10d['value'] * 1.25 + '%\x20on\x20', 0x0, 0x0), ctx['fillText'](_0x1bf10d['value'] + '%\x20(' + _0x1bf10d['value'] * 1.25 + '%\x20on\x20', 0x0, 0x0);
                                        let _0xd484d2 = ctx['measureText'](_0x1bf10d['value'] + '%\x20(' + _0x1bf10d['value'] * 1.25 + '%\x20on\x20')['width'];
                                        ctx['translate'](_0xd484d2, 0x0), ctx['fillStyle'] = '#ff0000', ctx['strokeText']('Blood\x20Petals', 0x0, 0x0), ctx['fillText']('Blood\x20Petals', 0x0, 0x0);
                                        let _0x261bea = ctx['measureText']('Blood\x20Petals')['width'];
                                        ctx['translate'](_0x261bea, 0x0), ctx['fillStyle'] = '#ffffff', ctx['strokeText'](')', 0x0, 0x0), ctx['fillText'](')', 0x0, 0x0);
                                        const _0x4a1461 = ctx['measureText'](')')['width'] + 7.5, _0x14585b = -0x6, _0x1832a1 = 0x7;
                                        ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x4a1461 + _0x1832a1, _0x14585b + _0x1832a1, _0x1832a1, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x4a1461 + _0x1832a1 - _0x1832a1 * 0.7, _0x14585b + _0x1832a1 - _0x1832a1 * 0.7), ctx['lineTo'](_0x4a1461 + _0x1832a1 + _0x1832a1 * 0.7, _0x14585b + _0x1832a1 + _0x1832a1 * 0.7), ctx['stroke'](), ctx['restore'](), ctx['translate'](-(_0xd484d2 + _0x261bea), 0x0), _0x2aeb71 = '';
                                    } else {
                                        if (['flowerHeal']['includes'](_0x1bf10d['key'])) {
                                            ctx['strokeText'](formatAmountHighPrecision(_0x1bf10d['value']) + '\x20/s', 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x1bf10d['value']) + '\x20/s', 0x0, 0x0);
                                            let _0x447b94 = ctx['measureText'](formatAmountHighPrecision(_0x1bf10d['value']) + '\x20/s')['width'];
                                            ctx['translate'](_0x447b94, 0x0);
                                            const _0x341db2 = ctx['measureText'](')')['width'] + 7.5, _0x4f79f0 = -0x6, _0x1b0a9 = 0x7;
                                            ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x341db2 + _0x1b0a9, _0x4f79f0 + _0x1b0a9, _0x1b0a9, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x341db2 + _0x1b0a9 - _0x1b0a9 * 0.7, _0x4f79f0 + _0x1b0a9 - _0x1b0a9 * 0.7), ctx['lineTo'](_0x341db2 + _0x1b0a9 + _0x1b0a9 * 0.7, _0x4f79f0 + _0x1b0a9 + _0x1b0a9 * 0.7), ctx['stroke'](), ctx['restore'](), ctx['translate'](-_0x447b94, 0x0), _0x2aeb71 = '';
                                        } else {
                                            if ([
                                                    'reviveHealth',
                                                    'healingBoost',
                                                    'healthBuffBoost',
                                                    'weatherChanceBoost'
                                                ]['includes'](_0x1bf10d['key']))
                                                _0x2aeb71 = formatAmountHighPrecision(_0x1bf10d['value'] * 0x64) + '%';
                                            else {
                                                if ([
                                                        'passiveDamagePerKill',
                                                        'passiveHealingBuff',
                                                        'petHeal'
                                                    ]['includes'](_0x1bf10d['key'])) {
                                                    _0x2aeb71 += '/s';
                                                    if (this['type'] == 'Starfish' || this['type'] == 'Brisingida')
                                                        _0x2aeb71 += '\x20(under\x2070%\x20hp)';
                                                } else {
                                                    if (['lightning']['includes'](_0x1bf10d['key'])) {
                                                        if (this['type'] == 'Shiny\x20Lightning')
                                                            _0x2aeb71 = '+' + _0x2aeb71;
                                                        _0x2aeb71 += '/bounce';
                                                    } else {
                                                        if (['summon']['includes'](_0x1bf10d['key'])) {
                                                            if (_0x1bf10d['value']['rarity'] > -0x1) {
                                                                let _0x27d50d = Colors['rarities'][_0x1bf10d['value']['rarity']]['name'] + '\x20';
                                                                _0x2aeb71 = _0x1bf10d['value']['type'];
                                                                if (_0x1bf10d['value']['amount'])
                                                                    _0x2aeb71 += '\x20x' + _0x1bf10d['value']['amount'];
                                                                if (this['type'] == 'Hexagon') {
                                                                    let _0x5597ba = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x46fd71 = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                                                                    _0x27d50d = _0x27d50d['toUpperCase']();
                                                                    let _0x293756 = '';
                                                                    for (let _0x2d6a1d of _0x27d50d) {
                                                                        _0x293756 += _0x46fd71[_0x5597ba['indexOf'](_0x2d6a1d)] ? _0x46fd71[_0x5597ba['indexOf'](_0x2d6a1d)] : _0x2d6a1d;
                                                                    }
                                                                    _0x27d50d = _0x293756, _0x2aeb71 = _0x2aeb71['toUpperCase'](), _0x293756 = '';
                                                                    for (let _0xa77f36 of _0x2aeb71) {
                                                                        _0x293756 += _0x46fd71[_0x5597ba['indexOf'](_0xa77f36)] ? _0x46fd71[_0x5597ba['indexOf'](_0xa77f36)] : _0xa77f36;
                                                                    }
                                                                    _0x2aeb71 = _0x293756;
                                                                }
                                                                let _0x13bde0 = ctx['measureText'](_0x27d50d)['width'];
                                                                ctx['fillStyle'] = Colors['rarities'][_0x1bf10d['value']['rarity']]['color'], ctx['strokeText'](_0x27d50d, 0x0, 0x0), ctx['fillText'](_0x27d50d, 0x0, 0x0), ctx['translate'](_0x13bde0, 0x0), ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0x2aeb71, 0x0, 0x0), ctx['fillText'](_0x2aeb71, 0x0, 0x0), ctx['translate'](-_0x3856a8 - _0x13bde0, 17.5);
                                                            } else
                                                                ctx['translate'](-_0x3856a8, 17.5);
                                                            for (let _0x3ebb5d in _0x1bf10d['value']['substats']) {
                                                                let _0x4a704d = _0x1bf10d['value']['substats'][_0x3ebb5d], _0xd32a0e = '\x20-\x20Summon\x20' + this['formatName'](_0x3ebb5d) + ':\x20';
                                                                if (this['type'] == 'Hexagon') {
                                                                    let _0x2d14c3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x1c70b4 = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                                                                    _0xd32a0e = _0xd32a0e['toUpperCase']();
                                                                    let _0x41cb83 = '';
                                                                    for (let _0x29e430 of _0xd32a0e) {
                                                                        _0x41cb83 += _0x1c70b4[_0x2d14c3['indexOf'](_0x29e430)] ? _0x1c70b4[_0x2d14c3['indexOf'](_0x29e430)] : _0x29e430;
                                                                    }
                                                                    _0xd32a0e = _0x41cb83;
                                                                }
                                                                let _0x468348 = ctx['measureText'](_0xd32a0e)['width'];
                                                                ctx['fillStyle'] = statColors[_0x3ebb5d], ctx['strokeText'](_0xd32a0e, 0x0, 0x0), ctx['fillText'](_0xd32a0e, 0x0, 0x0), ctx['translate'](_0x468348, 0x0);
                                                                let _0x315b0b = formatAmountHighPrecision(_0x4a704d);
                                                                if (this['type'] == 'Shiny\x20Ruby' && _0x3ebb5d == 'damage')
                                                                    _0x315b0b = '+' + _0x315b0b + '\x20(per\x20summon)';
                                                                if (Array['isArray'](_0x315b0b))
                                                                    _0x315b0b = formatAmountHighPrecision(_0x4a704d[0x0]) + '~' + formatAmountHighPrecision(_0x4a704d[0x1]);
                                                                ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0x315b0b, 0x0, 0x0), ctx['fillText'](_0x315b0b, 0x0, 0x0), ctx['translate'](-_0x468348, 17.5);
                                                            }
                                                            ctx['translate'](0x0, -17.5), _0x2aeb71 = '', _0x3856a8 = 0x0;
                                                        } else {
                                                            if ([
                                                                    'slowdown',
                                                                    'killBossUnder',
                                                                    'attractionRadius'
                                                                ]['includes'](_0x1bf10d['key']) && _0x1bf10d['value'][0x0]) {
                                                                ctx['translate'](-_0x3856a8, 17.5);
                                                                let _0x39682f = _0x1bf10d['value'][0x0], _0x2d99cc = -0x1;
                                                                for (let _0xc0cf8 of _0x1bf10d['value']) {
                                                                    _0x2d99cc++;
                                                                    if (_0xc0cf8 < 0x1 || _0xc0cf8 == undefined)
                                                                        continue;
                                                                    if (_0xc0cf8 == _0x39682f)
                                                                        continue;
                                                                    _0x39682f = _0xc0cf8;
                                                                    let _0x2146be = Colors['rarities'][_0x2d99cc];
                                                                    if (!_0x2146be)
                                                                        _0x2146be = Colors['rarities'][0x0];
                                                                    let _0x18f440 = ctx['measureText']('-\x20' + this['formatName'](_0x2146be['name']) + '\x20' + this['formatName'](_0x1bf10d['key']) + ':\x20')['width'];
                                                                    ctx['fillStyle'] = _0x2146be['color'], ctx['strokeText']('-\x20' + this['formatName'](_0x2146be['name']) + '\x20' + this['formatName'](_0x1bf10d['key']) + ':\x20', 0x0, 0x0), ctx['fillText']('-\x20' + this['formatName'](_0x2146be['name']) + '\x20' + this['formatName'](_0x1bf10d['key']) + ':\x20', 0x0, 0x0), ctx['translate'](_0x18f440, 0x0), _0x2aeb71 = formatAmountHighPrecision(_0x1bf10d['value'][_0x2d99cc]);
                                                                    if (_0x1bf10d['key'] !== 'attractionRadius')
                                                                        _0x2aeb71 += '%';
                                                                    ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0x2aeb71, 0x0, 0x0), ctx['fillText'](_0x2aeb71, 0x0, 0x0), ctx['translate'](-_0x18f440, 17.5);
                                                                }
                                                                ctx['translate'](0x0, -17.5), _0x2aeb71 = '', _0x3856a8 = 0x0;
                                                            } else {
                                                                if (this['type'] == 'Plank' && _0x1bf10d['key'] == 'damage')
                                                                    ctx['strokeText'](formatAmountHighPrecision(_0x1bf10d['value']) + '\x20(' + formatAmountHighPrecision(_0x1bf10d['value'] * 0x3e8) + '\x20against\x20projectiles)', 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x1bf10d['value']) + '\x20(' + formatAmountHighPrecision(_0x1bf10d['value'] * 0x3e8) + '\x20against\x20projectiles)', 0x0, 0x0);
                                                                else {
                                                                    if (['rotateSpeedBuff']['includes'](_0x1bf10d['key']))
                                                                        _0x2aeb71 += '\x20radians/s';
                                                                    else {
                                                                        if (['maxSkip']['includes'](_0x1bf10d['key']))
                                                                            _0x2aeb71 += '\x20waves';
                                                                        else
                                                                            [
                                                                                'healMultiplier',
                                                                                'eggHpMultiplier',
                                                                                'eggMassMultiplier',
                                                                                'eggDamageMultiplier',
                                                                                'dpsMultiplier',
                                                                                'hpMultiplier'
                                                                            ]['includes'](_0x1bf10d['key']) ? (_0x2aeb71 = 'x' + _0x2aeb71, ctx['strokeText'](_0x2aeb71, 0x0, 0x0), ctx['fillText'](_0x2aeb71, 0x0, 0x0)) : (ctx['strokeText'](formatAmountHighPrecision(_0x1bf10d['value']), 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x1bf10d['value']), 0x0, 0x0));
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
            _0x2aeb71 !== '' && (ctx['strokeText'](_0x2aeb71, 0x0, 0x0), ctx['fillText'](_0x2aeb71, 0x0, 0x0));
            if (_0x1bf10d['unstackable'] && _0x2aeb71 !== '') {
                const _0xa788da = ctx['measureText'](_0x2aeb71)['width'] + 7.5, _0x34fcb9 = -0x6, _0x358740 = 0x7;
                ctx['save'](), ctx['beginPath'](), ctx['arc'](_0xa788da + _0x358740, _0x34fcb9 + _0x358740, _0x358740, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0xa788da + _0x358740 - _0x358740 * 0.7, _0x34fcb9 + _0x358740 - _0x358740 * 0.7), ctx['lineTo'](_0xa788da + _0x358740 + _0x358740 * 0.7, _0x34fcb9 + _0x358740 + _0x358740 * 0.7), ctx['stroke'](), ctx['restore']();
            }
            ctx['translate'](-_0x3856a8, 17.5);
        }
        return ctx = _0x5d4759, _0x4fce89;
    }
    ['genEcBox']() {
        const _0x10cb70 = new OffscreenCanvas(this['w'], this['h']), _0xdf8ff = _0x10cb70['getContext']('2d'), _0x20215e = ctx;
        ctx = _0xdf8ff, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['fillStyle'] = '#000000', ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x5), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff', ctx['lineWidth'] = 0x2, ctx['font'] = '900\x20' + 0.9 * 22.5 + 'px\x20Ubuntu', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'top', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0.9 * 3.25, ctx['translate'](this['w'] - 0x23, 0xa), ctx['save']();
        const _0x192642 = 12.5, _0x297e55 = 12.5, _0xd2ed9a = 0xa, _0x59d593 = 0x4;
        ctx['beginPath']();
        for (let _0x404e1e = 0x0; _0x404e1e < 0x5; _0x404e1e++) {
            const _0x30c61b = _0x404e1e * 0x4 * Math['PI'] / 0x5 - Math['PI'] / 0x2, _0x1ed463 = _0x192642 + Math['cos'](_0x30c61b) * _0xd2ed9a, _0x529e1b = _0x297e55 + Math['sin'](_0x30c61b) * _0xd2ed9a;
            if (_0x404e1e === 0x0)
                ctx['moveTo'](_0x1ed463, _0x529e1b);
            else
                ctx['lineTo'](_0x1ed463, _0x529e1b);
            const _0x3c880d = _0x404e1e * 0x4 * Math['PI'] / 0x5 + 0x2 * Math['PI'] / 0x5 - Math['PI'] / 0x2, _0x2bfdae = _0x192642 + Math['cos'](_0x3c880d) * _0x59d593, _0x45d191 = _0x297e55 + Math['sin'](_0x3c880d) * _0x59d593;
            ctx['lineTo'](_0x2bfdae, _0x45d191);
        }
        ctx['closePath'](), ctx['fillStyle'] = '#FFD700', ctx['fill'](), ctx['strokeStyle'] = '#B8860B', ctx['lineWidth'] = 1.5, ctx['stroke'](), ctx['restore']();
        let _0xf7912f = '', _0x1bd598 = 0x1;
        for (let _0x31d220 of this['topstats']) {
            _0x31d220['key'] == 'temp' ? _0xf7912f += _0x31d220['value'][0x1] + 's' : _0xf7912f += formatAmountHighPrecision(_0x31d220['value']);
            if (this['topstats']['length'] > 0x1 && _0x1bd598 !== this['topstats']['length'])
                _0xf7912f += '\x20+\x20';
            _0x1bd598++;
        }
        ctx['strokeText'](_0xf7912f, -0x5, 2.5), ctx['fillText'](_0xf7912f, -0x5, 2.5), ctx['translate'](-this['w'] + 0x23, 0x0), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['textAlign'] = 'left', ctx['translate'](0xa, 0x0), ctx['strokeText'](this['name'], 0x0, 0x0), ctx['fillText'](this['name'], 0x0, 0x0), ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25, ctx['fillStyle'] = Colors['rarities'][this['rarity']]['color'], ctx['translate'](0x0, 0x1e);
        if (this['type'] == 'Hexagon') {
            let _0x1e7045 = Colors['rarities'][this['rarity']]['name'], _0x2f2f7c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x448934 = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
            _0x1e7045 = _0x1e7045['toUpperCase']();
            let _0x1d149a = '';
            for (let _0x22977e of _0x1e7045) {
                _0x1d149a += _0x448934[_0x2f2f7c['indexOf'](_0x22977e)] ? _0x448934[_0x2f2f7c['indexOf'](_0x22977e)] : _0x22977e;
            }
            _0x1e7045 = _0x1d149a, ctx['strokeText'](_0x1e7045, 0x0, 0x0), ctx['fillText'](_0x1e7045, 0x0, 0x0);
        } else
            ctx['strokeText'](Colors['rarities'][this['rarity']]['name'], 0x0, 0x0), ctx['fillText'](Colors['rarities'][this['rarity']]['name'], 0x0, 0x0);
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['translate'](0x0, 0x2d);
        for (let _0x1aae7b of this['finalDesc']) {
            let _0x2ed9bf = 0x0;
            for (let _0x1cb1a6 of _0x1aae7b) {
                ctx['fillStyle'] = _0x1cb1a6['color'], ctx['strokeText'](_0x1cb1a6['text'], 0x0, 0x0), ctx['fillText'](_0x1cb1a6['text'], 0x0, 0x0), ctx['translate'](_0x1cb1a6['written'], 0x0), _0x2ed9bf += _0x1cb1a6['written'];
            }
            ctx['translate'](-_0x2ed9bf, 22.5);
        }
        ctx['translate'](0x0, 22.5);
        for (let _0x292841 of this['bottomstats']) {
            if (_0x292841['key'] !== 'drops') {
                if (_0x292841['value'] == 0x0 || _0x292841['key'] == 'detectionDistance' && isNaN(_0x292841['value']))
                    continue;
                ctx['fillStyle'] = _0x292841['color'];
                if (_0x292841['displayName']) {
                    ctx['strokeText'](_0x292841['displayName'], 0x0, 0x0), ctx['fillText'](_0x292841['displayName'], 0x0, 0x0);
                    continue;
                }
                let _0x55789e = ctx['measureText'](this['formatName'](_0x292841['key']) + ':\x20')['width'];
                if (this['type'] == 'Hexagon') {
                    let _0x2a7dc0 = this['formatName'](_0x292841['key']) + ':\x20', _0x1170f2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x5a57b8 = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                    _0x2a7dc0 = _0x2a7dc0['toUpperCase']();
                    let _0x40e006 = '';
                    for (let _0x251f74 of _0x2a7dc0) {
                        _0x40e006 += _0x5a57b8[_0x1170f2['indexOf'](_0x251f74)] ? _0x5a57b8[_0x1170f2['indexOf'](_0x251f74)] : _0x251f74;
                    }
                    _0x2a7dc0 = _0x40e006, ctx['strokeText'](_0x2a7dc0, 0x0, 0x0), ctx['fillText'](_0x2a7dc0, 0x0, 0x0), _0x55789e = ctx['measureText'](_0x2a7dc0)['width'];
                } else
                    ctx['strokeText'](this['formatName'](_0x292841['key']) + ':\x20', 0x0, 0x0), ctx['fillText'](this['formatName'](_0x292841['key']) + ':\x20', 0x0, 0x0);
                ctx['translate'](_0x55789e, 0x0), ctx['fillStyle'] = '#ffffff';
                let _0x17e45d = formatAmountHighPrecision(_0x292841['value']);
                if (['lightning']['includes'](_0x292841['key']))
                    _0x17e45d += this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel' ? '/s' : '/bounce';
                else {
                    if (['healingReduction']['includes'](_0x292841['key']))
                        _0x17e45d = _0x292841['value'] * 0x64 + '%/hit';
                    else {
                        if ([
                                'regeneration',
                                'lifesteal'
                            ]['includes'](_0x292841['key']))
                            _0x17e45d += '/s';
                        else {
                            if ([
                                    'poison',
                                    'flowerBodyPoison',
                                    'summonBodyPoison'
                                ]['includes'](_0x292841['key']))
                                _0x17e45d = formatAmountHighPrecision(_0x292841['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0x292841['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0x292841['value'][0x0] / _0x292841['value'][0x1] * 0x64) / 0x64 + 's)';
                            else {
                                if (_0x292841['key'] === 'waveSpeedBoost')
                                    _0x17e45d = '+' + Math['round']((_0x292841['value'] - 0x1) * 0x64) + '%';
                                else {
                                    if (_0x292841['key'] === 'speedReduction')
                                        _0x17e45d = Math['round'](_0x292841['value'] * 0x64) + '%/wave';
                                    else {
                                        if (_0x292841['key'] === 'ratedWave')
                                            _0x17e45d = 'wave\x20' + _0x292841['value'];
                                        else
                                            [
                                                'healMultiplier',
                                                'eggHpMultiplier',
                                                'eggMassMultiplier',
                                                'eggDamageMultiplier',
                                                'dpsMultiplier',
                                                'hpMultiplier'
                                            ]['includes'](_0x292841['key']) ? (_0x17e45d = 'x' + _0x17e45d, ctx['strokeText'](_0x17e45d, 0x0, 0x0), ctx['fillText'](_0x17e45d, 0x0, 0x0)) : (ctx['strokeText'](formatAmountHighPrecision(_0x292841['value']), 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x292841['value']), 0x0, 0x0));
                                    }
                                }
                            }
                        }
                    }
                }
                _0x17e45d !== '' && (ctx['strokeText'](_0x17e45d, 0x0, 0x0), ctx['fillText'](_0x17e45d, 0x0, 0x0)), ctx['translate'](-_0x55789e, 17.5);
            } else
                for (let _0x5312a9 in _0x292841['value']) {
                    let _0x13b170 = _0x292841['value'][_0x5312a9], _0x3113b4 = 0x0, _0x40d093 = 0x0;
                    for (let _0x20dd92 in _0x13b170) {
                        let _0x3c4a06 = _0x13b170[_0x20dd92];
                        if (_0x3c4a06 == 0x0)
                            continue;
                        _0x40d093++;
                        let _0x1a613d = new Petal({ 'type': _0x5312a9 }), _0x6b49c2 = new PetalContainer([_0x1a613d], {
                                'x': 27.5,
                                'y': 42.5,
                                'w': 0x32,
                                'h': 0x32,
                                'toOscillate': ![]
                            }, 0x0, 0x1, 0x0);
                        _0x6b49c2['render']['w'] = 0x32, _0x6b49c2['spawnAnimation'] = 0x1, _0x6b49c2['rarity'] = _0x20dd92;
                        if (Stats['specialRarityDrops'][this['rarity']])
                            for (let _0x59e80c of Stats['specialRarityDrops'][this['rarity']]) {
                                if (_0x6b49c2['rarity'] == _0x59e80c['originalRarity'] && !_0x6b49c2['modified']) {
                                    if (_0x59e80c['replaceRarity'])
                                        _0x6b49c2['rarity'] = _0x59e80c['replaceRarity'];
                                    _0x6b49c2['amount'] = _0x59e80c['amount'], _0x6b49c2['modified'] = !![];
                                }
                            }
                        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle';
                        if (_0x3c4a06 < 0.01) {
                        } else
                            _0x3c4a06 = formatAmountHighPrecision(_0x3c4a06);
                        ctx['strokeText'](_0x3c4a06 + '%', 27.5, 0x55), ctx['fillText'](_0x3c4a06 + '%', 27.5, 0x55), _0x6b49c2['draw'](), ctx['translate'](67.5, 0x0), _0x3113b4 += 67.5;
                    }
                    if (_0x40d093 > 0x0)
                        ctx['translate'](-_0x3113b4, 0x55);
                }
        }
        return ctx = _0x20215e, _0x10cb70;
    }
    ['generateDesc'](_0x404d33, _0xe978b7) {
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu';
        this['mode'] == 'petal' && (this['amount'] > 0x1 && (_0xe978b7 += ctx['measureText'](this['amount']['toLocaleString']())['width'] + 7.5), _0x404d33 += ctx['measureText'](this['amount']['toLocaleString']())['width'] + 7.5);
        let _0x1fc6fe = [], _0x5d35f4 = [], _0x50be2 = {
                'current': 0x0,
                'max': 0x0,
                'writing': 0x0
            }, _0x339f18 = 0x0, _0x260c30 = {
                'text': '',
                'color': '#ffffff'
            }, _0x14e57d = 0x0;
        for (let _0x2faa71 of this['description']) {
            let _0xbd928 = _0x2faa71['text']['split']('\x20');
            for (let _0x595473 of _0xbd928) {
                _0x1fc6fe['push']({
                    'text': _0x595473,
                    'color': _0x2faa71['color']
                });
            }
        }
        for (let _0x958a63 of _0x1fc6fe) {
            let _0x23b6e1 = ctx['measureText'](_0x958a63['text'] + '\x20')['width'];
            _0x50be2['current'] + _0x23b6e1 > _0xe978b7 - 0xf && (_0x5d35f4[_0x339f18]['push']({
                'text': _0x260c30['text'],
                'color': _0x260c30['color'],
                'written': _0x50be2['writing']
            }), _0x339f18++, _0x50be2['current'] = 0x0, _0x50be2['writing'] = 0x0, _0x260c30 = {
                'text': '',
                'color': _0x958a63['color']
            }), !_0x5d35f4[_0x339f18] && (_0x5d35f4[_0x339f18] = []), _0x260c30['color'] !== _0x958a63['color'] && (_0x5d35f4[_0x339f18]['push']({
                'text': _0x260c30['text'],
                'color': _0x260c30['color'],
                'written': _0x50be2['writing']
            }), _0x50be2['writing'] = 0x0, _0x260c30 = {
                'text': '',
                'color': _0x958a63['color']
            }), _0x14e57d !== _0x1fc6fe['length'] - 0x1 ? _0x260c30['text'] += _0x958a63['text'] + '\x20' : (_0x260c30['text'] += _0x958a63['text'], _0x5d35f4[_0x339f18]['push']({
                'text': _0x260c30['text'],
                'color': _0x260c30['color'],
                'written': _0x50be2['writing']
            })), _0x50be2['current'] += _0x23b6e1, _0x50be2['writing'] += _0x23b6e1, _0x50be2['max'] = Math['max'](_0x50be2['max'], _0x50be2['current']), _0x14e57d++;
        }
        return this['finalDesc'] = _0x5d35f4, {
            'width': Math['max'](_0x404d33, _0x50be2['max']) + 0xf,
            'height': _0x5d35f4['length'] * 22.5
        };
    }
    ['formatName'](_0x102e85) {
        _0x102e85['length'] > 0x1 && (_0x102e85 = _0x102e85[0x0]['toUpperCase']() + _0x102e85['slice'](0x1));
        for (let _0x25ef2a = 0x0; _0x25ef2a < _0x102e85['length']; _0x25ef2a++) {
            _0x102e85[_0x25ef2a]['toUpperCase']() === _0x102e85[_0x25ef2a] && (_0x25ef2a == 0x0 ? _0x102e85 = _0x102e85['slice'](0x0, _0x25ef2a) + _0x102e85[_0x25ef2a]['toUpperCase']() + _0x102e85['slice'](_0x25ef2a + 0x1) : _0x102e85 = _0x102e85['slice'](0x0, _0x25ef2a) + '\x20' + _0x102e85[_0x25ef2a]['toUpperCase']() + _0x102e85['slice'](_0x25ef2a + 0x1), _0x25ef2a += 0x2);
        }
        return _0x102e85;
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
