
// 罗马数字映射
const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

// 生成线性技能节点链的辅助函数
function createLinearSkillChain(baseId, baseName, description, maxLevel, costPerLevel, requires, statKey, baseValue, valuePerLevel) {
    const nodes = [];
    for (let i = 1; i <= maxLevel; i++) {
        const roman = ROMAN_NUMERALS[i - 1] || i;
        nodes.push({
            id: `${baseId}_${i}`,
            name: `${baseName} ${roman}`,
            description: description,
            maxLevel: 1,
            costPerLevel: costPerLevel,
            requires: i === 1 ? requires : [`${baseId}_${i - 1}`],
            statKey: statKey,
            baseValue: baseValue,
            valuePerLevel: valuePerLevel
        });
    }
    return nodes;
}

// Skill tree configuration
const SKILL_TREES = {
    "Abyssal Artifact": {
        name: "Abyssal Artifact",
        description: "Enhances Egg petal performance",
        color: "#7b68ee",
        icon: "🥚",
        // Passive effects
        passiveEffects: {
            eggHpMultiplier: 1.4,
            eggMassMultiplier: 1.4,
            eggDamageMultiplier: 1.25
        },
        // Skill nodes
        nodes: [
            // Root node
            {
                id: "root",
                name: "Egg Enhancement",
                description: "Enhances base Egg petal performance",
                maxLevel: 1,
                costPerLevel: 0,
                requires: [],
                statKey: null,
                baseValue: 0,
                valuePerLevel: 0,
                isRoot: true
            },
            // HP branch (10 levels)
            ...createLinearSkillChain("egg_hp", "HP Boost", "Increases Egg HP multiplier", 10, 1, ["root"], "eggHpMultiplier", 1.4, 0.03),
            // Damage branch (10 levels)
            ...createLinearSkillChain("egg_damage", "Damage Boost", "Increases Egg damage multiplier", 10, 1, ["root"], "eggDamageMultiplier", 1.25, 0.03),
            // Mass (10 levels, requires HP level 3)
            ...createLinearSkillChain("egg_mass", "Mass Boost", "Increases Egg size (hitbox)", 10, 1, ["egg_hp_3"], "eggMassMultiplier", 1.4, 0.03),
            // Cooldown (10 levels, requires Damage level 3)
            ...createLinearSkillChain("cooldown", "Cooldown Reduction", "Reduces ultimate cooldown", 10, 1, ["egg_damage_3"], "cooldown", 60, -1.5),
            // Duration (5 levels, requires Cooldown level 3)
            ...createLinearSkillChain("duration", "Death Delay", "Extends bandage effect duration", 5, 2, ["cooldown_3"], "duration", 2, 0.1)
        ]
    },
    "Scorched Artifact": {
        name: "Scorched Artifact",
        description: "Enhances healing and provides squad buffs",
        color: "#ff6b6b",
        icon: "🔥",
        passiveEffects: {
            squadHealShare: 0.33,
            healMultiplier: 1.2
        },
        nodes: [
            {
                id: "root",
                name: "Healing Enhancement",
                description: "Enhances healing effects",
                maxLevel: 1,
                costPerLevel: 0,
                requires: [],
                statKey: null,
                baseValue: 0,
                valuePerLevel: 0,
                isRoot: true
            },
            ...createLinearSkillChain("heal_mult", "Heal Multiplier", "Increases healing amount", 10, 1, ["root"], "healMultiplier", 1.2, 0.1),
            ...createLinearSkillChain("ult_cd", "Ult Cooldown", "Reduces ultimate cooldown", 6, 1, ["root"], "cooldown", 60, -1.5),
            ...createLinearSkillChain("duration", "Buff Duration", "Extends raid heal buff duration", 8, 1, ["heal_mult_3"], "duration", 7, 0.2),
            ...createLinearSkillChain("heal_boost", "Raid Boost", "Increases raid heal buff effect", 8, 1, ["ult_cd_3"], "healBoost", 0.3, 0.01)
        ]
    },
    "Verdant Artifact": {
        name: "Verdant Artifact",
        description: "Increases damage output and petal performance",
        color: "#32cd32",
        icon: "🌿",
        passiveEffects: {
            dpsMultiplier: 1.8
        },
        nodes: [
            {
                id: "root",
                name: "Frenzy Core",
                description: "Unlocks frenzy mode path",
                maxLevel: 1,
                costPerLevel: 0,
                requires: [],
                statKey: null,
                baseValue: 0,
                valuePerLevel: 0,
                isRoot: true
            },
            ...createLinearSkillChain("dps", "DPS Boost", "Increases overall damage output", 10, 1, ["root"], "dpsMultiplier", 1.2, 0.02),
            ...createLinearSkillChain("ult_cd", "Petal Cooldown", "Reduces petal reload time", 6, 1, ["root"], "cooldownReduction", 0, 0.04),
            ...createLinearSkillChain("duration", "Frenzy Duration", "Extends frenzy mode duration", 6, 1, ["dps_3"], "duration", 8, 0.2),
            ...createLinearSkillChain("damage_mult", "Frenzy Damage", "Increases frenzy mode damage bonus", 8, 1, ["ult_cd_3"], "damageMultiplier", 0, 0.1)
        ]
    },
    "Cosmic Artifact": {
        name: "Cosmic Artifact",
        description: "Enhances survivability and knockback effects",
        color: "#4169e1",
        icon: "✨",
        passiveEffects: {
            hpMultiplier: 1.2
        },
        nodes: [
            {
                id: "root",
                name: "Cosmic Power",
                description: "Masters the core of cosmic energy",
                maxLevel: 1,
                costPerLevel: 0,
                requires: [],
                statKey: null,
                baseValue: 0,
                valuePerLevel: 0,
                isRoot: true
            },
            ...createLinearSkillChain("hp_mult", "HP Multiplier", "Increases HP", 8, 1, ["root"], "hpMultiplier", 1.2, 0.1),
            ...createLinearSkillChain("ult_cd", "Skill Cooldown", "Reduces shockwave cooldown", 8, 1, ["root"], "cooldown", 60, -1.5),
            ...createLinearSkillChain("range", "Knockback Range", "Expands shockwave knockback range", 6, 1, ["hp_mult_3"], "range", 500, 20),
            ...createLinearSkillChain("knockback", "Knockback Force", "Bubble knockback force multiplier", 10, 1, ["range_3"], "knockbackForce", 1, 0.05)
        ]
    },
    "Chimera": {
        name: "Chimera",
        description: "Transform into a powerful mob with unique abilities",
        color: "#9932cc",
        icon: "🐝",
        passiveEffects: {
            mobDamageMultiplier: 1.5
        },
        nodes: [
            {
                id: "root",
                name: "Mob Form",
                description: "Unlocks mob transformation",
                maxLevel: 1,
                costPerLevel: 0,
                requires: [],
                statKey: null,
                baseValue: 0,
                valuePerLevel: 0,
                isRoot: true
            },
            ...createLinearSkillChain("damage", "Damage Boost", "Increases mob form damage", 10, 1, ["root"], "mobDamageMultiplier", 1.5, 0.1),
            ...createLinearSkillChain("speed", "Movement Speed", "Increases movement speed in mob form", 8, 1, ["root"], "mobSpeedMultiplier", 1, 0.05),
            ...createLinearSkillChain("hp", "Health Boost", "Increases max HP in mob form", 10, 1, ["damage_3"], "mobHpMultiplier", 1, 0.1),
            ...createLinearSkillChain("ult_cd", "Ability Cooldown", "Reduces ability cooldowns", 6, 1, ["speed_3"], "abilityCooldown", 10, -0.5)
        ]
    }
};

const ARTIFACT_TYPES = ["Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact" /*, "Chimera" */];

// ===== 特殊全局背包类（技能树系统） =====
class SpecialGlobalInventory {
    constructor() {
        // UI 状态
        this.menuActive = false;
        this.hoveringOverButton = false;
        this.hoveringOverX = false;
        this.fadingOut = false;

        // 菜单尺寸和位置（与 globalInventory 相同）
        this.w = 445;
        this.h = 665;
        this.x = 130;
        this.y = canvas.h - this.h - 20;

        // 动画状态
        this.lastOpenTime = 0;
        this.lastCloseTime = 0;
        this.originalFadeOutTime = 0;

        // 神器数据
        this.artifacts = {};
        this.equippedArtifact = null;
        this.selectedArtifactIndex = -1;
        this.availableLevelPoints = 0;

        // 技能树渲染数据
        this.nodePositions = {};  // 存储每个节点的渲染位置
        this.hoveredNode = null;  // 当前悬停的节点
        this.hoveredArtifact = null; // 当前悬停的神器类型
        this.hoveredTooltip = null; // 悬停提示框数据

        // 技能树拖动状态
        this.skillTreeOffset = { x: 0, y: 0 }; // 技能树偏移量
        this.skillTreeRenderOffset = { x: 0, y: 0 }; // 平滑过渡偏移量
        this.isDraggingSkillTree = false; // 是否正在拖动技能树
        this.dragStartPos = { x: 0, y: 0 }; // 拖动起始位置

        // 重置按钮状态
        this.hoveringOverReset = false;
        this.lastArtifactResetTime = 0;  // 上次重置时间

        // Mob 技能花瓣 UI 状态
        this.lastClickMobType = null;  // 上次点击的 Mob 类型
        this.lastClickUnequipSlot = null;  // 上次点击的卸下槽位

        // 初始化默认神器数据
        this.initDefaultArtifacts();
    }

    initDefaultArtifacts() {
        // 神器花瓣使用稀有度 0 (Common)
        const artifactRarity = 0;

        for (const type of ARTIFACT_TYPES) {
            // 初始化技能等级
            const skillLevels = {};
            const tree = SKILL_TREES[type];
            for (const node of tree.nodes) {
                skillLevels[node.id] = 0;
            }

            // 根节点默认解锁
            const rootNode = tree.nodes.find(n => n.isRoot);
            if (rootNode) {
                skillLevels[rootNode.id] = 1;
            }

            // 创建 Petal 实例（用于数据存储）
            const petal = new Petal({
                type: type,
                rarity: artifactRarity,
                x: 0,
                y: 0,
                distance: 0,
                angle: 0,
                maxHp: 1e30,
                hp: 1e30,
                maxReload: 3,
                reload: 3,
                damage: 0
            });

            // 创建 Petal 实例（用于渲染）
            const renderPetal = new Petal({
                type: type,
                rarity: artifactRarity,
                x: 0,
                y: 0,
                distance: 0,
                angle: 0,
                maxHp: 1e30,
                hp: 1e30,
                maxReload: 3,
                reload: 3,
                damage: 0
            });

            // 创建数据容器（坐标保持在0,0，不会用于渲染）
            const pc = new PetalContainer(
                [petal],
                { x: 0, y: 0, w: 65, h: 65, originalX: 0, originalY: 0, radius: 32.5, toOscillate: false, petalStats: null },
                `${type}_artifact`,
                1,
                0
            );
            pc.amount = 0; // 初始没有神器

            // 创建渲染容器（专门用于菜单渲染，坐标可以自由设置）
            const renderPc = new PetalContainer(
                [renderPetal],
                { x: 0, y: 0, w: 65, h: 65, originalX: 0, originalY: 0, radius: 32.5, toOscillate: false, petalStats: null },
                `${type}_artifact_render`,
                1,
                0
            );
            renderPc.amount = 0; // 初始没有神器
            // 设置渲染容器的坐标为相对坐标，这样在 draw() 时会被 translate 到正确位置
            renderPc.x = 0;
            renderPc.y = 0;
            renderPc.render.x = 0;
            renderPc.render.y = 0;
            renderPc.spawnAnimation = 1; // 跳过生成动画

            this.artifacts[type] = {
                skillLevels: skillLevels,
                totalLevelPoints: 0,
                petalContainer: pc,      // 原始数据容器（坐标为0）
                renderPetalContainer: renderPc // 专门用于渲染的容器
            };
        }
    }

    // 空方法 - 保持兼容性
    addPetalContainer(p, isCRSync = false, sortPetals = true) {
        if (!showCommunityBiomes && !petalRenderMap[p.type]) return;

        const type = p.type;
        if (!this.artifacts[type]) return;

        const artifact = this.artifacts[type];

        // 设置神器数量为1（无论当前数量如何，都设为1）
        artifact.petalContainer.amount = 1;
        artifact.renderPetalContainer.amount = 1;

        // 同步到服务器
        if (isCRSync !== false) {
            send({
                addPetalContainer: {
                    type: type,
                    rarity: p.rarity || 0,
                    amount: 1
                }
            });
        }
    }

    removePetalContainer(rarity, indexInRarity) {
        // 找到对应稀有度的神器
        for (const type of ARTIFACT_TYPES) {
            const artifact = this.artifacts[type];
            if (!artifact.petalContainer || artifact.petalContainer.amount <= 0) continue;
            if (artifact.petalContainer.rarity === rarity) {
                // 神器只能有一个，直接设为0
                const pc = artifact.petalContainer;
                artifact.petalContainer.amount = 0;
                artifact.renderPetalContainer.amount = 0;
                return pc;
            }
        }
        return null;
    }

    // 按稀有度和类型移除花瓣（兼容 globalInventory 接口）
    removeByRarityAndType(rarity, type) {
        // 特殊背包中按类型查找
        const artifact = this.artifacts[type];
        if (!artifact) return false;

        // 如果匹配稀有度，移除
        if (artifact.petalContainer?.rarity === rarity && artifact.petalContainer?.amount > 0) {
            const pc = artifact.petalContainer;
            artifact.petalContainer.amount = 0;
            artifact.renderPetalContainer.amount = 0;
            return true;
        }
        return false;
    }

    // ===== 技能树核心逻辑 =====

    // 获取节点的当前等级
    getNodeLevel(artifactType, nodeId) {
        return this.artifacts[artifactType]?.skillLevels[nodeId] || 0;
    }

    // 获取节点的当前值
    getNodeValue(artifactType, nodeId) {
        const tree = SKILL_TREES[artifactType];
        const node = tree.nodes.find(n => n.id === nodeId);
        if (!node || !node.statKey) return null;

        const level = this.getNodeLevel(artifactType, nodeId);
        return node.baseValue + node.valuePerLevel * level;
    }

    // 获取神器某个属性的总值（基础值 + 被动效果 + 技能加成）
    getArtifactValue(artifactType, statKey) {
        const tree = SKILL_TREES[artifactType];
        const passiveValue = tree.passiveEffects[statKey] || 0;

        // 累加所有相关技能的加成
        let skillBonus = 0;
        for (const node of tree.nodes) {
            if (node.statKey === statKey) {
                const level = this.getNodeLevel(artifactType, node.id);
                skillBonus += node.valuePerLevel * level;
            }
        }

        return passiveValue + skillBonus;
    }

    // 检查节点是否已解锁
    isNodeUnlocked(artifactType, nodeId) {
        const tree = SKILL_TREES[artifactType];
        const node = tree.nodes.find(n => n.id === nodeId);
        if (!node) return false;

        // 根节点总是解锁的
        if (node.isRoot) return true;

        // 检查所有父节点是否都已至少升级1级
        for (const parentId of node.requires) {
            if (this.getNodeLevel(artifactType, parentId) < 1) {
                return false;
            }
        }
        return true;
    }

    // 检查是否可以升级节点
    canUpgradeNode(artifactType, nodeId) {
        const tree = SKILL_TREES[artifactType];
        const node = tree.nodes.find(n => n.id === nodeId);
        if (!node) return false;

        // 根节点不能升级
        if (node.isRoot) return false;

        // 检查是否已解锁
        if (!this.isNodeUnlocked(artifactType, nodeId)) return false;

        // 检查是否已满级
        const currentLevel = this.getNodeLevel(artifactType, nodeId);
        if (currentLevel >= node.maxLevel) return false;

        // 检查技能点是否足够
        return this.availableLevelPoints >= node.costPerLevel;
    }

    // 升级节点
    upgradeNode(artifactType, nodeId) {
        if (!this.canUpgradeNode(artifactType, nodeId)) return false;

        const tree = SKILL_TREES[artifactType];
        const node = tree.nodes.find(n => n.id === nodeId);
        const artifact = this.artifacts[artifactType];

        // 确保技能等级存在（避免 undefined++ = NaN）
        if (artifact.skillLevels[nodeId] === undefined) {
            artifact.skillLevels[nodeId] = 0;
        }

        this.availableLevelPoints -= node.costPerLevel;
        artifact.skillLevels[nodeId]++;
        artifact.totalLevelPoints += node.costPerLevel;

        // 发送到服务器
        send({
            upgradeArtifact: {
                type: artifactType,
                nodeId: nodeId,
                level: artifact.skillLevels[nodeId]
            }
        });

        return true;
    }

    equipArtifact(artifactType) {
        // 目前只支持装备1个神器，但数据结构支持多个
        this.equippedArtifact = artifactType;
        send({ equipArtifact: artifactType });
    }

    resetArtifactSkills(artifactType) {
        send({
            resetArtifactSkills: {
                type: artifactType
            }
        });
        return true;
    }

    loadArtifactData(data) {
        if (data.artifacts) {
            for (const type in data.artifacts) {
                if (this.artifacts[type]) {
                    this.artifacts[type].skillLevels = data.artifacts[type].skillLevels || this.artifacts[type].skillLevels;
                    this.artifacts[type].totalLevelPoints = data.artifacts[type].totalLevelPoints || 0;
                }
            }
        }
        // 兼容新旧数据格式
        if (data.equippedArtifacts && Array.isArray(data.equippedArtifacts)) {
            // 新格式：数组
            this.equippedArtifact = data.equippedArtifacts.length > 0 ? data.equippedArtifacts[0] : null;
        } else if (data.equippedArtifact !== undefined) {
            // 旧格式：单个字符串
            this.equippedArtifact = data.equippedArtifact;
        }
        if (data.availableSkillPoints !== undefined) {
            this.availableLevelPoints = data.availableSkillPoints;
        } else if (data.availableLevelPoints !== undefined) {
            // 兼容旧字段名
            this.availableLevelPoints = data.availableLevelPoints;
        }
        // 接收冷却时间
        if (data.lastArtifactResetTime !== undefined) {
            this.lastArtifactResetTime = data.lastArtifactResetTime;
        }
    }

    // ===== 渲染相关 =====

    drawIcon(alpha = 1) {
        const iconSize = 80;
        const iconX = 20;
        const iconY = canvas.h - 20 - 80 - 100 - 100 - 100;

        if (alpha !== 1) ctx.globalAlpha = alpha;

        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        if (mouse.canvasX > iconX && mouse.canvasY > iconY &&
            mouse.canvasX < iconX + iconSize && mouse.canvasY < iconY + iconSize) {
            ctx.fillStyle = '#6aa8df';
            setCursor('pointer');
            this.hoveringOverButton = true;
        } else {
            this.hoveringOverButton = false;
        }

        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.roundRect(iconX, iconY, iconSize, iconSize, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.font = `900 40px Ubuntu`;
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeText('⭐', iconX + iconSize / 2, iconY + iconSize / 2);
        ctx.fillText('⭐', iconX + iconSize / 2, iconY + iconSize / 2);

        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 14px Ubuntu`;
        const lastLetterSpacing = ctx.letterSpacing;
        ctx.letterSpacing = '0px';
        ctx.strokeText("[Z]", iconX + iconSize - 15 - 2.5, iconY + 15);
        ctx.fillText("[Z]", iconX + iconSize - 15 - 2.5, iconY + 15);
        ctx.letterSpacing = lastLetterSpacing;

        ctx.globalAlpha = 1;
    }

    toggleMenu() {
        if (globalInventory.menuActive === true) globalInventory.toggleMenu();
        if (craftingMenu.menuActive === true) craftingMenu.toggleMenu();
        if (mobGallery.menuActive === true) mobGallery.toggleMenu();

        if (this.menuActive === true) {
            this.lastCloseTime = time;
        } else {
            this.lastOpenTime = time;
            // 打开菜单时计算节点位置
            if (this.selectedArtifactIndex >= 0) {
                this.calculateNodePositions(ARTIFACT_TYPES[this.selectedArtifactIndex]);
            }
        }
        this.menuActive = !this.menuActive;
    }

    draw() {
        let alpha = this.fadingOut === true ? 1 - (time - this.originalFadeOutTime) / 100 : 1;
        if (this.menuActive === true || (time - this.lastCloseTime) < 140) {
            this.drawMenu(alpha);
        } else {
            this.hoveringOverX = false;
            this.hoveredNode = null;
        }
    }

    drawMenu(alpha = 1) {
        if (alpha !== 1) {
            ctx.globalAlpha = alpha;
        }

        // 动画
        let translation = 0;
        if (time - this.lastCloseTime < 160) {
            translation += this.h * easeOutCubic((time - this.lastCloseTime) / 160);
        }
        if (time - this.lastOpenTime < 160) {
            translation += (this.h + 40) - (this.h + 40) * easeOutCubic((time - this.lastOpenTime) / 160);
        }
        if (translation !== 0) {
            ctx.translate(0, translation);
        }

        // 直接 translate，不做外层 save（与 globalInventory 完全一致）
        this.x = 130;
        this.y = canvas.h - this.h - 20;
        ctx.translate(this.x, this.y);

        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        ctx.lineWidth = 8;

        ctx.save();

        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.save();

        // 标题
        ctx.font = "600 25px 'Ubuntu'";
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.strokeText("Skills", this.w / 2, 25);
        ctx.fillText("Skills", this.w / 2, 25);

        // 技能点显示（左上角，与关闭按钮中心对齐）
        ctx.font = "700 20px 'Ubuntu'";
        ctx.fillStyle = '#ffd700';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.textAlign = 'left';
        ctx.strokeText(`⭐ ${this.availableLevelPoints}`, 15, 27);
        ctx.fillText(`⭐ ${this.availableLevelPoints}`, 15, 27);

        ctx.restore();

        // 定义鼠标坐标（用于悬停检测）
        const mx = mouse.canvasX - this.x;
        const my = mouse.canvasY - this.y;

        this.hoveredNode = null;
        this.hoveredArtifact = null; // 重置悬浮的神器

        // 重置 Mob 技能花瓣 UI 点击状态
        if (!mouse.left) {
            this.lastClickMobType = null;
            this.lastClickUnequipSlot = null;
        }

        // 神器选择区（4个槽位）- 使用 PetalContainer 渲染
        const startY = 65;
        const slotSize = 65;
        const gap = 10;
        const totalWidth = ARTIFACT_TYPES.length * slotSize + (ARTIFACT_TYPES.length - 1) * gap;
        const startX = (this.w - totalWidth) / 2;

        // 绘制神器选择区背景框
        const paddingX = 15;
        const paddingY = 10;
        const bgX = startX - paddingX;
        const bgY = startY - paddingY;
        const bgW = totalWidth + paddingX * 2;
        const bgH = slotSize + paddingY * 2;

        // 背景框阴影
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.roundRect(bgX + 3, bgY + 3, bgW, bgH, 10);
        ctx.fill();
        ctx.closePath();

        // 背景框主体
        const gradient = ctx.createLinearGradient(bgX, bgY, bgX, bgY + bgH);
        gradient.addColorStop(0, 'rgba(70, 80, 100, 0.6)');
        gradient.addColorStop(1, 'rgba(50, 60, 80, 0.5)');
        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(200, 200, 220, 0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(bgX, bgY, bgW, bgH, 10);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // 背景框内边框（装饰线）
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(bgX + 3, bgY + 3, bgW - 6, bgH - 6, 8);
        ctx.stroke();
        ctx.closePath();

        // 绘制分割线
        for (let i = 1; i < ARTIFACT_TYPES.length; i++) {
            const lineX = startX + i * (slotSize + gap) - gap / 2;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(lineX, bgY + 8);
            ctx.lineTo(lineX, bgY + bgH - 8);
            ctx.stroke();
            ctx.closePath();
        }

        for (let i = 0; i < ARTIFACT_TYPES.length; i++) {
            const type = ARTIFACT_TYPES[i];
            const tree = SKILL_TREES[type];
            const relX = startX + i * (slotSize + gap) + slotSize / 2;  // 相对坐标
            const relY = startY + slotSize / 2;
            const artifact = this.artifacts[type];
            const renderPc = artifact.renderPetalContainer; // 使用专门的渲染容器

            if (renderPc) {
                // 直接设置渲染容器的坐标（因为它是专门用于渲染的，不会被其他地方使用）
                renderPc.x = relX;
                renderPc.y = relY;
                renderPc.render.x = relX;
                renderPc.render.y = relY;

                // 检测悬停 - 使用相对坐标
                const isHovered = mx > relX - slotSize / 2 && mx < relX + slotSize / 2 &&
                                  my > relY - slotSize / 2 && my < relY + slotSize / 2;
                const isSelected = this.selectedArtifactIndex === i;

                // 记录悬浮的神器类型（用于绘制神器提示框）
                if (isHovered) {
                    this.hoveredArtifact = { type, x: relX, y: relY, renderPc };
                    setCursor('pointer');
                }

                // 绘制选中背景 - 使用相对坐标
                if (isSelected) {
                    ctx.fillStyle = 'rgba(255, 236, 139, 0.3)';
                    ctx.strokeStyle = tree.color;
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.roundRect(relX - slotSize / 2 - 3, relY - slotSize / 2 - 3, slotSize + 6, slotSize + 6, 8);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                }

                // 设置神器稀有度（基于技能等级，无论是否已装备）
                const totalLevels = Object.values(artifact.skillLevels).reduce((a, b) => a + b, 0) - 1; // 减去根节点
                if (totalLevels > 0) {
                    // 确保稀有度不超过 Colors.rarities 数组上限（34是最大有效稀有度，35-37是防止崩溃的备用）
                    renderPc.rarity = Math.min(totalLevels, 34);
                }

                if (renderPc.amount > 0) {
                    renderPc.draw();
                } else {
                    // 没有神器或已装备时显示灰色轮廓
                    ctx.globalAlpha = 0.3;
                    renderPc.draw();
                    ctx.globalAlpha = 1;
                }

                // 绘制装备标记 - 使用相对坐标
            }
        }

        // 技能树区域
        if (this.selectedArtifactIndex >= 0) {
            const type = ARTIFACT_TYPES[this.selectedArtifactIndex];
            this.drawSkillTree(type, mx, my);
            // 绘制重置按钮
            this.drawResetButton(mx, my, type);
        } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.font = "500 12px 'Ubuntu'";
            ctx.textAlign = 'center';
            ctx.fillText("点击上方神器查看技能树", this.w / 2, this.h / 2);
        }

        ctx.restore();  // 对应第一个 save（背景的 save）

        // 再次绘制边框
        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        ctx.lineWidth = 8;

        ctx.beginPath();
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.stroke();
        ctx.closePath();

        // 绘制悬停提示
        if (this.hoveredNode) {
            this.drawTooltip(this.hoveredNode);
        } else if (this.hoveredArtifact && this.hoveredArtifact.renderPc) {
            const renderPc = this.hoveredArtifact.renderPc;

            // 设置神器稀有度（基于技能等级，用于颜色显示）
            const artifact = this.artifacts[this.hoveredArtifact.type];
            if (artifact && artifact.skillLevels) {
                const totalLevels = Object.values(artifact.skillLevels).reduce((a, b) => a + b, 0) - 1;
                if (totalLevels > 0) {
                    // 确保稀有度不超过 Colors.rarities 数组上限（34是最大有效稀有度，35-37是防止崩溃的备用）
                    renderPc.rarity = Math.min(totalLevels, 34);
                }
            }

            // 确保设置 petalStats（此时 Stats 已加载）
            if (!renderPc.petalStats && typeof Stats !== 'undefined') {
                renderPc.petalStats = Stats.petals[renderPc.type]?.[0] || null;
            }

            // 先调用 drawStatsBox 来生成 StatsBox image，然后调整位置
            renderPc.isHovered = true;

            // 预先获取 StatsBox 来检查高度
            const mode = "petals";
            const tempStatsBox = new StatsBox(renderPc.type, renderPc.petalStats, mode, renderPc.amount, renderPc.rarity);
            delete tempStatsBox.image;
            const tempCtx = ctx;
            const tempCanvas = document.createElement('canvas');
            ctx = tempCanvas.getContext('2d');
            tempStatsBox.draw();
            ctx = tempCtx;

            // 计算位置，确保 tooltip 在菜单内
            const artifactX = this.hoveredArtifact.x;
            const artifactY = this.hoveredArtifact.y;
            const tooltipH = tempStatsBox.h;
            const tooltipTop = artifactY - tooltipH - renderPc.h / 2 - 11.5;
            const tooltipBottom = artifactY + renderPc.h / 2 + 11.5 + tooltipH;

            // 选择超出较少的一边，如果都超出则选择下方（底部有更多空间）
            const overflowTop = -tooltipTop;
            const overflowBottom = tooltipBottom - this.h;
            const drawBelow = overflowBottom < overflowTop || overflowTop < 0;

            renderPc.drawStatsBox(drawBelow, false, artifactX, artifactY);
        }

        // 关闭按钮
        this.drawCloseButton(mx, my);

        ctx.translate(-this.x, -this.y);

        if (translation !== 0) {
            ctx.translate(0, -translation);
        }
        ctx.globalAlpha = 1;
    }

    // 计算技能树节点位置 - 简化版：只从根节点往左下方放3个节点
    calculateNodePositions(artifactType) {
        const tree = SKILL_TREES[artifactType];
        this.nodePositions = {};

        const treeAreaX = 60;
        const treeAreaY = 190;
        const treeAreaW = this.w - 120;
        const nodeRadius = 26;
        const distance = 120;

        // 根节点在顶部中央
        const rootNode = tree.nodes.find(n => n.isRoot);
        if (!rootNode) return;
        const rootX = treeAreaX + treeAreaW / 2;
        const rootY = treeAreaY;
        this.nodePositions[rootNode.id] = {
            x: rootX,
            y: rootY,
            radius: nodeRadius + 6
        };

        // 找到所有非根节点
        const nonRootNodes = tree.nodes.filter(n => !n.isRoot);
        if (nonRootNodes.length === 0) return;

        // 找到所有直接依赖根节点的主技能链起点
        const mainBranchStarts = nonRootNodes.filter(n =>
            n.requires.length === 1 && n.requires[0] === 'root'
        );

        // 构建节点映射用于 getLinearChain
        const nodeMap = {};
        for (const node of tree.nodes) {
            nodeMap[node.id] = node;
        }

        // 绘制每条主技能链
        mainBranchStarts.forEach((startNode, branchIndex) => {
            const isLeft = branchIndex % 2 === 0; // 第一条左，第二条右
            const baseAngle = isLeft ? Math.PI * 0.75 : Math.PI * 0.25; // 左下135度 / 右下45度

            const chain = this.getLinearChain(startNode.id, nodeMap);

            chain.forEach((node, index) => {
                let x, y;

                if (index === 0) {
                    const d = distance;
                    const angle = baseAngle - (isLeft ? 0.4 : -0.4);
                    x = rootX + Math.cos(angle) * d;
                    y = rootY + Math.sin(angle) * d;
                } else if (index === 1) {
                    const d = distance * 2;
                    const angle = baseAngle - (isLeft ? 0.5 : -0.5);
                    x = rootX + Math.cos(angle) * d;
                    y = rootY + Math.sin(angle) * d;
                } else if (index === 2) {
                    const d = distance * 3;
                    const angle = baseAngle - (isLeft ? 0.4 : -0.4);
                    x = rootX + Math.cos(angle) * d;
                    y = rootY + Math.sin(angle) * d;
                } else {
                    const prevPos = this.nodePositions[chain[index - 1].id];
                    const dist = distance * (1 - (index - 3) * 0.1);

                    const angleMap = [
                        isLeft ? Math.PI : 0,
                        isLeft ? Math.PI * 4/3 : Math.PI * 5/3,
                        isLeft ? Math.PI * 5/3 : Math.PI * 4/3,
                        isLeft ? 0 : Math.PI,
                        isLeft ? Math.PI * 1/3 : Math.PI * 2/3,
                        isLeft ? Math.PI * 2/3 : Math.PI * 1/3,
                    ];
                    const angleIndex = (index - 3) % angleMap.length;
                    const angle = angleMap[angleIndex];

                    x = prevPos.x + Math.cos(angle) * dist;
                    y = prevPos.y + Math.sin(angle) * dist;
                }

                this.nodePositions[node.id] = {
                    x: x,
                    y: y,
                    radius: nodeRadius
                };
            });

            // 绘制依赖第3级节点的子技能（往下螺旋）
            if (chain.length >= 3) {
                const thirdLevelNode = chain[2];
                const thirdLevelPos = this.nodePositions[thirdLevelNode.id];
                this.drawChildBranches(thirdLevelNode, thirdLevelPos, nonRootNodes, nodeMap, distance, nodeRadius);
            }
        });
    }

    // 递归绘制子技能分支
    drawChildBranches(parentNode, parentPos, nonRootNodes, nodeMap, distance, nodeRadius) {
        // 获取子技能前缀
        const lastUnderscoreIndex = parentNode.id.lastIndexOf('_');
        const parentPrefix = parentNode.id.substring(0, lastUnderscoreIndex + 1);

        // 找到依赖该节点的子技能起点
        const childStartNodes = nonRootNodes.filter(n =>
            n.requires.length === 1 &&
            n.requires[0] === parentNode.id &&
            !n.id.startsWith(parentPrefix)
        );

        // 绘制每条子技能链
        childStartNodes.forEach(childStart => {
            const childChain = this.getLinearChain(childStart.id, nodeMap);
            const childBaseAngle = Math.PI * 0.75;

            childChain.forEach((node, index) => {
                let x, y;

                if (index === 0) {
                    const d = distance;
                    const angle = childBaseAngle - 1.4;
                    x = parentPos.x + Math.cos(angle) * d;
                    y = parentPos.y + Math.sin(angle) * d;
                } else if (index === 1) {
                    const d = distance * 2;
                    const angle = childBaseAngle - 1;
                    x = parentPos.x + Math.cos(angle) * d;
                    y = parentPos.y + Math.sin(angle) * d;
                } else if (index === 2) {
                    const d = distance * 3;
                    const angle = childBaseAngle - 0.8;
                    x = parentPos.x + Math.cos(angle) * d;
                    y = parentPos.y + Math.sin(angle) * d;
                } else {
                    const prevPos = this.nodePositions[childChain[index - 1].id];
                    const dist = distance * (1 - (index - 3) * 0.1);

                    const angleMap = [
                        Math.PI,
                        Math.PI * 4/3,
                        Math.PI * 5/3,
                        0,
                        Math.PI * 1/3,
                        Math.PI * 2/3,
                    ];
                    const angleIndex = (index - 3) % angleMap.length;
                    const angle = angleMap[angleIndex];

                    x = prevPos.x + Math.cos(angle) * dist;
                    y = prevPos.y + Math.sin(angle) * dist;
                }

                this.nodePositions[node.id] = {
                    x: x,
                    y: y,
                    radius: nodeRadius
                };
            });

            // 递归：子技能链的第3级节点也可能有子技能
            if (childChain.length >= 3) {
                const thirdLevelNode = childChain[2];
                const thirdLevelPos = this.nodePositions[thirdLevelNode.id];
                this.drawChildBranches(thirdLevelNode, thirdLevelPos, nonRootNodes, nodeMap, distance, nodeRadius);
            }
        });
    }

    // 获取线性节点链（从起始节点开始的所有后续节点）
    getLinearChain(startId, nodeMap) {
        const chain = [];
        let currentId = startId;
        const visited = new Set();

        while (currentId && !visited.has(currentId)) {
            visited.add(currentId);
            const node = nodeMap[currentId];
            if (!node) break;

            chain.push(node);

            // 找到依赖当前节点的下一个节点
            let nextId = null;
            for (const [id, n] of Object.entries(nodeMap)) {
                if (n.requires.length === 1 && n.requires[0] === currentId) {
                    nextId = id;
                    break;
                }
            }
            currentId = nextId;
        }

        return chain;
    }

    layoutBranchSpiral(chain, centerX, centerY, nodeRadius) {
        if (chain.length === 0) return;

        const straightCount = 3;  // 直线节点数量
        const straightDistance = 100;  // 直线节点间距
        const straightAngle = -Math.PI / 4;  // 左下方（45度角）

        chain.forEach((node, index) => {
            let x, y;

            if (index < straightCount) {
                // 直线部分：往左下方延伸
                const distance = (index + 1) * straightDistance;
                x = centerX + Math.cos(straightAngle) * distance;
                y = centerY + Math.sin(straightAngle) * distance;
            } else {
                // 螺旋部分：从左侧开始螺旋
                const spiralIndex = index - straightCount;
                // 螺旋起始半径（连接第3个节点）
                const spiralStartRadius = straightCount * straightDistance;
                // 螺旋角度：从左侧（PI）开始，顺时针向内收缩
                const spiralAngle = Math.PI + spiralIndex * 0.6;
                // 螺旋半径：逐渐减小
                const spiralRadius = spiralStartRadius - spiralIndex * 15;

                x = centerX + Math.cos(spiralAngle) * spiralRadius;
                y = centerY + Math.sin(spiralAngle) * spiralRadius;
            }

            this.nodePositions[node.id] = {
                x: x,
                y: y,
                radius: nodeRadius
            };
        });
    }

    layoutSubBranchSpiral(chain, parentX, parentY, nodeRadius) {
        if (chain.length === 0) return;

        const straightCount = 3;  // 直线节点数量
        const straightDistance = 100;  // 直线节点间距
        const downAngle = Math.PI / 2;  // 往下（90度角）

        chain.forEach((node, index) => {
            let x, y;

            if (index < straightCount) {
                // 直线部分：往下延伸
                const distance = (index + 1) * straightDistance;
                x = parentX + Math.cos(downAngle) * distance;
                y = parentY + Math.sin(downAngle) * distance;
            } else {
                // 螺旋部分
                const spiralIndex = index - straightCount;
                const spiralStartRadius = straightCount * straightDistance;
                // 从下方开始，顺时针螺旋
                const spiralAngle = Math.PI / 2 + spiralIndex * 0.6;
                const spiralRadius = spiralStartRadius - spiralIndex * 15;

                x = parentX + Math.cos(spiralAngle) * spiralRadius;
                y = parentY + Math.sin(spiralAngle) * spiralRadius;
            }

            this.nodePositions[node.id] = {
                x: x,
                y: y,
                radius: nodeRadius
            };
        });
    }

    drawSkillTree(artifactType, mx, my) {
        const tree = SKILL_TREES[artifactType];

        // 如果节点位置未计算，先计算
        if (Object.keys(this.nodePositions).length === 0) {
            this.calculateNodePositions(artifactType);
        }

        // 技能树显示区域边界（固定）
        const treeAreaX = 0;
        const treeAreaY = 140;
        const treeAreaW = this.w;
        const treeAreaH = this.h - treeAreaY;

        // 平滑过渡偏移量
        this.skillTreeRenderOffset.x = interpolate(this.skillTreeRenderOffset.x, this.skillTreeOffset.x, 0.1 * dt / 16.66);
        this.skillTreeRenderOffset.y = interpolate(this.skillTreeRenderOffset.y, this.skillTreeOffset.y, 0.1 * dt / 16.66);

        // 先设置裁剪区域（固定，不随拖动变化）
        ctx.save();
        ctx.beginPath();
        ctx.rect(treeAreaX, treeAreaY, treeAreaW, treeAreaH);
        ctx.clip();
        ctx.closePath();

        // 再应用偏移量（技能树可以拖动）
        ctx.translate(this.skillTreeRenderOffset.x, this.skillTreeRenderOffset.y);

        // 先绘制所有连接线（白色虚线）
        ctx.setLineDash([4, 8]);
        ctx.lineDashOffset = 0;
        ctx.lineWidth = 9;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';

        for (const node of tree.nodes) {
            if (node.isRoot) continue;
            const pos = this.nodePositions[node.id];
            if (!pos) continue;

            // 绘制从父节点到该节点的连接线
            for (const parentId of node.requires) {
                const parentPos = this.nodePositions[parentId];
                if (!parentPos) continue;

                ctx.beginPath();
                ctx.moveTo(parentPos.x, parentPos.y);
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();
                ctx.closePath();
            }
        }

        ctx.setLineDash([]);

        // 绘制所有节点
        for (const node of tree.nodes) {
            this.drawSkillNode(artifactType, node, mx, my);
        }

        ctx.restore();

        // ==================== Chimera 专属 UI ====================
        // 如果是 Chimera 神器，绘制 Mob 类型选择器和技能花瓣槽
        if (artifactType === 'Chimera') {
            this.drawChimeraMobUI(mx, my);
        }
    }

    // 绘制 Chimera 专属 UI（Mob 类型选择器和技能花瓣槽）
    drawChimeraMobUI(mx, my) {
        const mobTypes = [
            { id: 'Hornet', name: 'Hornet', nameCN: '大黄蜂', icon: '🐝' },
            { id: 'Beetle', name: 'Beetle', nameCN: '甲虫', icon: '🪲' },
            { id: 'Ladybug', name: 'Ladybug', nameCN: '瓢虫', icon: '🐞' }
        ];

        const selectedMobType = window.userMobSkillData?.selectedMobType || 'Hornet';
        const equippedPetals = window.userMobSkillData?.equipped || [];
        const backpackPetals = window.userMobSkillData?.backpack || [];

        // Mob 类型选择器区域（顶部）
        const selectorY = 80;
        const selectorW = 100;
        const selectorH = 40;
        const selectorSpacing = 15;
        const totalSelectorW = mobTypes.length * selectorW + (mobTypes.length - 1) * selectorSpacing;
        const startX = (this.w - totalSelectorW) / 2;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(10, selectorY - 10, this.w - 20, selectorH + 20);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = "500 14px 'Ubuntu'";
        ctx.textAlign = 'center';
        ctx.fillText('选择 Mob 类型', this.w / 2, selectorY - 15);

        for (let i = 0; i < mobTypes.length; i++) {
            const mob = mobTypes[i];
            const x = startX + i * (selectorW + selectorSpacing);
            const y = selectorY;
            const isSelected = mob.id === selectedMobType;

            // 检测悬停和点击
            const isHovered = mx > x && mx < x + selectorW && my > y && my < y + selectorH;

            if (isHovered) {
                setCursor('pointer');
                if (mouse.left && !this.lastClickMobType) {
                    this.lastClickMobType = mob.id;
                    // 发送选择 Mob 类型消息
                    if (ws && ws.readyState === WebSocket.OPEN) {
                        ws.send(JSON.stringify({ selectMobType: { mobType: mob.id } }));
                    }
                }
            }

            // 绘制按钮
            ctx.fillStyle = isSelected ? '#9932cc' : (isHovered ? '#8a2dbe' : '#5a5a5a');
            ctx.strokeStyle = isSelected ? '#ba55d3' : '#888888';
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.roundRect(x, y, selectorW, selectorH, 5);
            ctx.fill();
            ctx.stroke();

            // 绘制图标和名称
            ctx.fillStyle = '#ffffff';
            ctx.font = "500 18px 'Ubuntu'";
            ctx.textAlign = 'center';
            ctx.fillText(mob.icon, x + selectorW / 2, y + selectorH / 2 + 6);

            ctx.font = "500 11px 'Ubuntu'";
            ctx.fillText(mob.nameCN, x + selectorW / 2, y + selectorH - 8);
        }

        // Mob 技能花瓣装备槽（底部）
        const slotsY = this.h - 120;
        const slotSize = 45;
        const slotSpacing = 10;
        const slotsPerRow = 4;
        const maxSlots = 8;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(10, slotsY - 10, this.w - 20, 110);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = "500 14px 'Ubuntu'";
        ctx.textAlign = 'center';
        ctx.fillText('Mob 技能花瓣装备槽 (最多8个)', this.w / 2, slotsY - 15);

        // 获取当前选中 Mob 类型的技能花瓣
        const mobSkillPetals = this.getMobSkillPetalsForMob(selectedMobType);

        for (let i = 0; i < maxSlots; i++) {
            const row = Math.floor(i / slotsPerRow);
            const col = i % slotsPerRow;
            const x = 35 + col * (slotSize + slotSpacing);
            const y = slotsY + row * (slotSize + slotSpacing + 5);

            const petal = equippedPetals[i];
            const isHovered = mx > x && mx < x + slotSize && my > y && my < y + slotSize;

            if (isHovered && petal) {
                setCursor('pointer');
                if (mouse.left && !this.lastClickUnequipSlot) {
                    this.lastClickUnequipSlot = i;
                    // 发送卸下消息
                    if (ws && ws.readyState === WebSocket.OPEN) {
                        ws.send(JSON.stringify({ unequipMobSkillPetal: { slotIndex: i } }));
                    }
                }
            }

            // 绘制槽位背景
            ctx.fillStyle = petal ? '#444444' : '#333333';
            ctx.strokeStyle = isHovered ? '#ffffff' : '#666666';
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.roundRect(x, y, slotSize, slotSize, 5);
            ctx.fill();
            ctx.stroke();

            // 绘制已装备的花瓣
            if (petal) {
                const rarityColor = window.rarities[petal.rarity]?.color || '#999999';
                ctx.fillStyle = rarityColor;
                ctx.beginPath();
                ctx.arc(x + slotSize / 2, y + slotSize / 2, slotSize / 2 - 5, 0, Math.PI * 2);
                ctx.fill();

                // 绘制花瓣名称首字母
                ctx.fillStyle = '#000000';
                ctx.font = "bold 14px 'Ubuntu'";
                ctx.textAlign = 'center';
                ctx.fillText(petal.type.charAt(0), x + slotSize / 2, y + slotSize / 2 + 5);

                // 稀有度数字
                ctx.fillStyle = '#ffffff';
                ctx.font = "500 10px 'Ubuntu'";
                ctx.fillText(petal.rarity, x + slotSize - 8, y + 12);
            }

            // 如果有悬停且没有装备，显示可装备的花瓣提示
            if (isHovered && !petal && mouse.left) {
                // 这里可以添加背包选择逻辑
            }
        }

        // 显示背包中的技能花瓣（简化版，只显示数量）
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.font = "500 12px 'Ubuntu'";
        ctx.textAlign = 'left';
        ctx.fillText(`背包中 ${selectedMobType} 技能花瓣:`, 35, slotsY + 95);

        let countX = 180;
        for (const petalType of mobSkillPetals) {
            const背包中 = backpackPetals.filter(p => p.type === petalType);
            if (背包中.length > 0) {
                const totalAmount = 背包中.reduce((sum, p) => sum + (p.amount || 0), 0);
                ctx.fillText(`${petalType}: ${totalAmount}`, countX, slotsY + 95);
                countX += 120;
            }
        }
    }

    // 获取指定 Mob 类型的技能花瓣列表
    getMobSkillPetalsForMob(mobType) {
        const map = {
            'Hornet': ['HornetSting', 'HornetVolley', 'HornetSwarm', 'HornetFrenzy'],
            'Beetle': ['BeetleClaw', 'BeetleCharge', 'BeetleSwarm', 'BeetleShell'],
            'Ladybug': ['LadybugHeal', 'LadybugDodge', 'LadybugSwarm', 'LadybugGrow']
        };
        return map[mobType] || [];
    }

    drawSkillNode(artifactType, node, mx, my) {
        const pos = this.nodePositions[node.id];
        if (!pos) return;

        // 应用偏移量到鼠标坐标
        const adjustedMx = mx - this.skillTreeRenderOffset.x;
        const adjustedMy = my - this.skillTreeRenderOffset.y;

        const level = this.getNodeLevel(artifactType, node.id);
        const isUnlocked = this.isNodeUnlocked(artifactType, node.id);
        const canUpgrade = this.canUpgradeNode(artifactType, node.id);
        const isMaxed = level >= node.maxLevel;
        const isHovered = adjustedMx > pos.x - pos.radius && adjustedMx < pos.x + pos.radius &&
                          adjustedMy > pos.y - pos.radius && adjustedMy < pos.y + pos.radius;

        if (isHovered && !node.isRoot) {
            this.hoveredNode = { artifactType, node, pos };
            setCursor('pointer');
        }

        // 决定节点颜色
        let fillColor, strokeColor;

        if (node.isRoot) {
            fillColor = artifactType === this.equippedArtifact ? '#ffd700' : '#daa520';
            strokeColor = '#b8860b';
        } else if (!isUnlocked) {
            fillColor = '#888888';
            strokeColor = '#666666';
        } else if (isMaxed) {
            fillColor = '#32cd32';
            strokeColor = '#228b22';
        } else if (level > 0) {
            fillColor = canUpgrade ? '#90ee90' : '#6aa8df';
            strokeColor = canUpgrade ? '#32cd32' : '#4981b1';
        } else {
            fillColor = canUpgrade ? '#ffec8b' : '#999999';
            strokeColor = canUpgrade ? '#ffd700' : '#777777';
        }

        // 绘制节点圆形
        if (!node.isRoot) {
            ctx.fillStyle = fillColor;
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = isHovered ? 4 : 3;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, pos.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }

        // 绘制技能点消耗（右上角）
        if (!node.isRoot && !isMaxed) {
            const cost = node.costPerLevel;
            // 用数字显示技能点消耗
            ctx.font = "700 12px Ubuntu";
            ctx.fillStyle = canUpgrade ? '#ffd700' : '#888888';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'top';
            ctx.strokeText(`${cost}`, pos.x + pos.radius - 2, pos.y - pos.radius + 2);
            ctx.fillText(`${cost}`, pos.x + pos.radius - 2, pos.y - pos.radius + 2);
        }

        // 绘制等级圆点（展开式，在中间下方）
        if (!node.isRoot) {
            this.drawNodeIcon(node, pos.x, pos.y);
        } else {
            // 根节点直接显示花朵，不绘制背景圆
            this.drawRootFlower(pos.x, pos.y, pos.radius);
        }
    }

    // 绘制根节点花朵 - 使用与 flower.js 相同的绘制逻辑
    drawRootFlower(x, y, radius) {
        // 花朵主体颜色
        ctx.fillStyle = '#ffe763';
        ctx.strokeStyle = '#cebb50';
        ctx.lineWidth = radius / 8;

        // 绘制花朵形状（使用二次贝塞尔曲线）
        ctx.beginPath();
        ctx.lineTo(x + radius * 1.03, y + radius * -0.02);
        ctx.quadraticCurveTo(x + radius * 0.78, y + radius * 1.06, x + radius * 0.27, y + radius * 1.14);
        ctx.quadraticCurveTo(x + radius * -0.8, y + radius * 0.75, x + radius * -0.94, y + radius * 0.36);
        ctx.quadraticCurveTo(x + radius * -1.18, y + radius * -0.29, x + radius * -0.83, y + radius * -0.95);
        ctx.quadraticCurveTo(x + radius * -0.45, y + radius * -1.3, x + radius * -0.06, y + radius * -1.06);
        ctx.quadraticCurveTo(x + radius * 0.85, y + radius * -1.04, x + radius * 1.03, y + radius * -0.02);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // 绘制眼睛
        ctx.fillStyle = '#212219';
        ctx.beginPath();
        ctx.ellipse(x + radius / 2.5 + radius * 0.05, y + radius * 5 / 13.5, radius * 3 / 23.5 * 1.1, radius * 5.85 / 23.5 * 1.1, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.ellipse(x - radius / 2.5, y - radius * 5 / 23.5 + radius * -0.15, radius * 3 / 23.5 * 1.1, radius * 5.85 / 23.5 * 1.1, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        // 眼白
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(x + radius / 2.5 + radius * 0.05, y + radius * 5 / 13.5, radius * 2.5 / 23.5 * 1.1, radius * 5 / 23.5 * 1.1, 0, 0, Math.PI * 2);
        ctx.clip();
        ctx.fillStyle = '#eeeeee';
        ctx.beginPath();
        ctx.ellipse(x + radius / 2.5 + radius * 0.05, y + radius * 5 / 13.5, radius * 2.92 / 23.5 * 1.1, radius * 2.92 / 23.5 * 1.1, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(x - radius / 2.5, y - radius * 5 / 23.5 + radius * -0.15, radius * 2.5 / 23.5 * 1.1, radius * 5 / 23.5 * 1.1, 0, 0, Math.PI * 2);
        ctx.clip();
        ctx.fillStyle = '#eeeeee';
        ctx.beginPath();
        ctx.ellipse(x - radius / 2.5, y - radius * 5 / 23.5 + radius * -0.15, radius * 3 / 23.5 * 1.1, radius * 3 / 23.5 * 1.1, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        // 微笑嘴巴
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = radius / 15;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x - radius * 0.3 + radius / 4, y + radius * 0.025 + radius * 9.5 / 23.5);
        ctx.quadraticCurveTo(x - radius * 0.4, y - radius * 0.1 + 1.07 * radius * 5.5 / 23.5 * 61.1 / 70, x - radius * 0.275 - radius / 4, y - radius * 0.25 + radius * 9.5 / 23.5);
        ctx.stroke();
    }

    // 绘制节点图标
    drawNodeIcon(node, x, y) {
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (node.id.includes('hp') || node.id.includes('Hp')) {
            // 生命值图标 - 心形
            ctx.font = "900 14px Ubuntu";
            ctx.fillText('❤', x, y);
        } else if (node.id.includes('damage') || node.id.includes('Damage') || node.id.includes('dps')) {
            // 伤害图标 - 剑
            ctx.font = "900 14px Ubuntu";
            ctx.fillText('⚔', x, y);
        } else if (node.id.includes('cooldown') || node.id.includes('cd')) {
            // 冷却图标 - 转圈箭头（虚线）
            ctx.save();
            ctx.translate(x, y);
            ctx.setLineDash([2, 2]);

            // 绘制两个虚线弧形箭头
            ctx.beginPath();
            ctx.arc(0, 0, 6, Math.PI * 0.7, Math.PI * 2.3);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0, 0, 9, Math.PI * 1.2, Math.PI * 1.8);
            ctx.stroke();

            // 内箭头（虚线）
            ctx.beginPath();
            ctx.arc(0, 0, 6, Math.PI * 1.8, Math.PI * 2.2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0, 0, 6, Math.PI * 0.0, Math.PI * 0.4);
            ctx.stroke();

            ctx.setLineDash([]);
            ctx.restore();
        } else if (node.id.includes('range')) {
            // 范围图标 - 扩散圆（虚线）
            ctx.save();
            ctx.translate(x, y);
            ctx.setLineDash([3, 3]);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(0, 0, 8, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, 5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();
        } else if (node.id.includes('knockback')) {
            // 击退图标 - 双向箭头
            ctx.font = "900 14px Ubuntu";
            ctx.fillText('↔', x, y);
        } else if (node.id.includes('mass')) {
            // 体型图标 - 放大镜
            ctx.font = "900 14px Ubuntu";
            ctx.fillText('🔍', x, y);
        } else if (node.id.includes('heal') || node.id.includes('Heal')) {
            // 治疗图标 - 十字
            ctx.font = "900 14px Ubuntu";
            ctx.fillText('✚', x, y);
        } else if (node.id.includes('duration')) {
            // 持续时间图标 - 时钟
            ctx.font = "900 14px Ubuntu";
            ctx.fillText('⏱', x, y);
        } else {
            // 默认图标 - 菱形
            ctx.font = "900 14px Ubuntu";
            ctx.fillText('◆', x, y);
        }
    }

    // Draw skill node tooltip (following StatsBox style)
    drawTooltip(hoveredNode) {
        const { artifactType, node, pos } = hoveredNode;
        if (node.isRoot) return;

        const level = this.getNodeLevel(artifactType, node.id);
        const isMaxed = level >= node.maxLevel;
        const canUpgrade = this.canUpgradeNode(artifactType, node.id);
        const lineHeight = 22.5;
        const padding = 10;
        const descText = this.formatDescription(node.description);

        // Measure the actual text width to calculate tooltip width
        ctx.font = `900 ${1.2 * 22.5}px Ubuntu`;
        const nameWidth = ctx.measureText(node.name).width;

        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`;
        let maxDescWidth = 0;
        for (const line of descText) {
            if (Array.isArray(line)) {
                let lineWidth = 0;
                for (const part of line) {
                    lineWidth += ctx.measureText(part.text).width;
                }
                maxDescWidth = Math.max(maxDescWidth, lineWidth);
            } else {
                maxDescWidth = Math.max(maxDescWidth, ctx.measureText(line).width);
            }
        }

        // Measure effect and status text width
        let maxContentWidth = Math.max(nameWidth, maxDescWidth);
        if (node.statKey) {
            const statName = this.formatStatName(node.statKey);
            const effectText = node.statKey.includes('Multiplier') ? '+x per level' : '+0 per level';
            maxContentWidth = Math.max(maxContentWidth, ctx.measureText(statName + ': ' + effectText).width);
        }
        const statusText = isMaxed ? 'MAXED' : 'Need SP to upgrade';
        maxContentWidth = Math.max(maxContentWidth, ctx.measureText(statusText).width);

        // Calculate tooltip height based on actual content (following StatsBox positions)
        // StatsBox: name at y=0, rarity at y=30, desc at y=75 (30+45)
        // For skills (no rarity): name at y=10, desc at y=40 (30px gap like rarity)
        let contentHeight = 40; // Name at y=10, description starts at y=40
        contentHeight += descText.length * lineHeight; // Description lines
        if (node.statKey) {
            contentHeight += lineHeight; // Effect line
        }
        contentHeight += lineHeight; // Status text line
        contentHeight += padding; // Bottom margin

        // Calculate width based on text content + padding
        const tooltipW = Math.max(200, maxContentWidth + padding * 2); // Min 200px, or text width + padding
        const tooltipH = contentHeight;

        // Calculate position in menu coordinates (tooltip is drawn while menu is translated)
        // pos.x/y are skill tree positions, need to add render offset
        const nodeScreenX = pos.x + this.skillTreeRenderOffset.x;
        const nodeScreenY = pos.y + this.skillTreeRenderOffset.y;

        let tooltipX = nodeScreenX + pos.radius + 15;
        let tooltipY = nodeScreenY - tooltipH / 2;

        // Keep tooltip within menu bounds (tooltips are in menu coordinate space)
        if (tooltipX + tooltipW > this.w) {
            tooltipX = nodeScreenX - pos.radius - tooltipW - 15;
        }
        if (tooltipX < 0) tooltipX = 10;
        if (tooltipY < 140) tooltipY = 145; // Above skill tree area (starts at y=140)
        if (tooltipY + tooltipH > this.h) tooltipY = this.h - tooltipH - 10;

        ctx.save();

        // Background - same as StatsBox
        ctx.fillStyle = '#000000';
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.roundRect(tooltipX, tooltipY, tooltipW, tooltipH, 5);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;

        // Name - same as StatsBox
        ctx.font = `900 ${1.2 * 22.5}px Ubuntu`;
        ctx.lineWidth = 1.2 * 3.25;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.strokeText(node.name, tooltipX + padding, tooltipY + 10);
        ctx.fillText(node.name, tooltipX + padding, tooltipY + 10);

        // Description - starts at y=40 (30px after name, same as rarity position in StatsBox)
        let currentY = tooltipY + 40;
        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`;
        ctx.lineWidth = 0.7 * 3.25;

        for (const line of descText) {
            if (Array.isArray(line)) {
                // Multi-color line
                let xOffset = 0;
                for (const part of line) {
                    ctx.fillStyle = part.color;
                    ctx.strokeStyle = '#000000';
                    ctx.strokeText(part.text, tooltipX + padding + xOffset, currentY);
                    ctx.fillText(part.text, tooltipX + padding + xOffset, currentY);
                    xOffset += ctx.measureText(part.text).width;
                }
            } else {
                ctx.fillStyle = '#ffffff';
                ctx.strokeStyle = '#000000';
                ctx.strokeText(line, tooltipX + padding, currentY);
                ctx.fillText(line, tooltipX + padding, currentY);
            }
            currentY += lineHeight;
        }

        // Effect (if has statKey)
        if (node.statKey) {
            let valueText;
            let effectColor = '#ffffff';

            if (node.statKey.includes('Multiplier')) {
                valueText = `+${node.valuePerLevel.toFixed(2)}x per level`;
            } else if (node.statKey === 'cooldown') {
                if (node.valuePerLevel < 0) {
                    valueText = `${node.valuePerLevel.toFixed(1)}s per level`;
                } else {
                    valueText = `+${node.valuePerLevel.toFixed(1)}s per level`;
                }
            } else if (node.statKey === 'range') {
                valueText = `+${node.valuePerLevel.toFixed(0)}px per level`;
            } else if (node.statKey === 'knockbackForce') {
                valueText = `+${node.valuePerLevel.toFixed(2)}x per level`;
            } else {
                valueText = `+${node.valuePerLevel.toFixed(2)} per level`;
            }

            // Get stat color
            const statColor = this.getStatColor(node.statKey);
            const statName = this.formatStatName(node.statKey);

            ctx.fillStyle = statColor;
            ctx.strokeStyle = '#000000';
            ctx.strokeText(statName + ': ', tooltipX + padding, currentY);
            ctx.fillText(statName + ': ', tooltipX + padding, currentY);

            const nameWidth = ctx.measureText(statName + ': ').width;
            ctx.fillStyle = effectColor;
            ctx.strokeText(valueText, tooltipX + padding + nameWidth, currentY);
            ctx.fillText(valueText, tooltipX + padding + nameWidth, currentY);

            currentY += lineHeight;
        }

        // Status text
        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`;
        ctx.lineWidth = 0.7 * 3.25;

        if (isMaxed) {
            ctx.fillStyle = '#32cd32';
            ctx.strokeStyle = '#000000';
            ctx.strokeText('MAXED', tooltipX + padding, currentY);
            ctx.fillText('MAXED', tooltipX + padding, currentY);
        } else if (!this.isNodeUnlocked(artifactType, node.id)) {
            ctx.fillStyle = '#888888';
            ctx.strokeStyle = '#000000';
            ctx.strokeText('Requires previous skills', tooltipX + padding, currentY);
            ctx.fillText('Requires previous skills', tooltipX + padding, currentY);
        } else if (canUpgrade) {
            ctx.fillStyle = '#ffd700';
            ctx.strokeStyle = '#000000';
            ctx.strokeText(`${node.costPerLevel} SP to upgrade`, tooltipX + padding, currentY);
            ctx.fillText(`${node.costPerLevel} SP to upgrade`, tooltipX + padding, currentY);
        } else {
            ctx.fillStyle = '#ff6b6b';
            ctx.strokeStyle = '#000000';
            ctx.strokeText(`Need ${node.costPerLevel} SP`, tooltipX + padding, currentY);
            ctx.fillText(`Need ${node.costPerLevel} SP`, tooltipX + padding, currentY);
        }

        // Show level if learned but not maxed
        if (level > 0 && !isMaxed) {
            const statusText = isMaxed ? 'MAXED' : `${node.costPerLevel} SP to upgrade`;
            const levelText = ` (${level}/${node.maxLevel})`;
            ctx.fillStyle = '#ffffff';
            ctx.strokeText(levelText, tooltipX + padding + ctx.measureText(statusText).width, currentY);
            ctx.fillText(levelText, tooltipX + padding + ctx.measureText(statusText).width, currentY);
        }

        ctx.restore();
    }

    // Format description into lines (handle multi-color descriptions)
    formatDescription(desc) {
        const maxWidth = 260;
        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`;

        if (Array.isArray(desc)) {
            // Already formatted as multi-color
            return [desc];
        }

        // Simple text wrapping
        const lines = [];
        let currentLine = '';
        const chars = desc.split('');

        for (const char of chars) {
            const testLine = currentLine + char;
            if (ctx.measureText(testLine).width > maxWidth && currentLine !== '') {
                lines.push(currentLine);
                currentLine = char;
            } else {
                currentLine = testLine;
            }
        }
        if (currentLine) lines.push(currentLine);
        return lines.length > 0 ? lines : [desc];
    }

    // Format stat name for display
    formatStatName(statKey) {
        const names = {
            'eggHpMultiplier': 'Egg HP',
            'eggMassMultiplier': 'Egg Mass',
            'eggDamageMultiplier': 'Egg Damage',
            'healMultiplier': 'Heal',
            'dpsMultiplier': 'DPS',
            'hpMultiplier': 'HP',
            'cooldown': 'Cooldown',
            'duration': 'Duration',
            'range': 'Range',
            'knockbackForce': 'Knockback',
            'damageMultiplier': 'Frenzy Damage',
            'healBoost': 'Raid Heal',
            // Chimera stats
            'mobDamageMultiplier': 'Mob Damage',
            'mobSpeedMultiplier': 'Mob Speed',
            'mobHpMultiplier': 'Mob HP',
            'abilityCooldown': 'Ability CD'
        };
        return names[statKey] || statKey;
    }

    // Get stat color (matching StatsBox statColors)
    getStatColor(statKey) {
        const colors = {
            'eggHpMultiplier': '#ff9999',
            'eggMassMultiplier': '#99ccff',
            'eggDamageMultiplier': '#ff6666',
            'healMultiplier': '#99ff99',
            'dpsMultiplier': '#ff6666',
            'hpMultiplier': '#ff9999',
            'cooldown': '#ffcc66',
            'duration': '#ccccff',
            'range': '#99ccff',
            'knockbackForce': '#ff9966',
            'damageMultiplier': '#ff6666',
            'healBoost': '#99ff99',
            // Chimera colors
            'mobDamageMultiplier': '#ff6666',
            'mobSpeedMultiplier': '#99ccff',
            'mobHpMultiplier': '#ff9999',
            'abilityCooldown': '#ffcc66'
        };
        return colors[statKey] || '#ffffff';
    }

    // Draw artifact tooltip - 使用与 statsBox.js 相同的格式
    drawArtifactTooltip(artifactType, x, y) {
        const tree = SKILL_TREES[artifactType];
        const artifact = this.artifacts[artifactType];
        if (!tree || !artifact) return;

        const skillLevels = artifact?.skillLevels || {};
        const descLines = this.formatDescription(tree.description);
        const lineHeight = 22.5;
        const padding = 10;

        // 计算每个技能节点的总等级（按前缀分组）
        const skillGroups = {};
        for (const node of tree.nodes) {
            if (node.isRoot || !node.statKey) continue;
            const prefix = node.id.replace(/_\d+$/, '');
            if (!skillGroups[prefix]) {
                skillGroups[prefix] = {
                    statKey: node.statKey,
                    baseValue: node.baseValue,
                    valuePerLevel: node.valuePerLevel,
                    totalLevels: 0,
                    displayName: node.name
                };
            }
        }
        for (const [nodeId, level] of Object.entries(skillLevels)) {
            const prefix = nodeId.replace(/_\d+$/, '');
            if (skillGroups[prefix]) {
                skillGroups[prefix].totalLevels += level;
            }
        }

        // 生成显示列表（移除罗马数字）
        let stats = [];
        for (const [prefix, data] of Object.entries(skillGroups)) {
            if (data.totalLevels === 0 && data.baseValue === 0) continue;
            const finalValue = data.baseValue + data.totalLevels * data.valuePerLevel;
            const cleanName = this.stripRomanNumeral(data.displayName);
            const stat = {
                key: cleanName,
                value: finalValue,
                format: this.getValueFormat(data.statKey)
            };
            stats.push(stat);
        }

        // 特殊处理 squadHealShare
        if (tree.passiveEffects?.squadHealShare) {
            stats.push({ key: "Squad Heal", value: tree.passiveEffects.squadHealShare * 100, format: "percent" });
        }

        // 计算尺寸
        ctx.font = `900 ${1.2 * 22.5}px Ubuntu`;
        const nameWidth = ctx.measureText(tree.name).width;
        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`;

        const maxDescWidth = Math.max(...descLines.map(line => ctx.measureText(line).width));

        let maxStatWidth = 0;
        for (const stat of stats) {
            const text = this.formatStatValue(stat);
            maxStatWidth = Math.max(maxStatWidth, ctx.measureText(text).width);
        }

        const width = Math.max(nameWidth + 20, Math.max(maxDescWidth + 20, maxStatWidth + 20));
        const height = 75 + descLines.length * 22.5 + stats.length * 22.5 + 10;

        // 绘制位置
        let tooltipX = x + 45;
        let tooltipY = y - height / 2;

        // Keep tooltip within menu bounds
        if (tooltipX + width > this.w) {
            tooltipX = x - 45 - width;
        }
        if (tooltipX < 0) tooltipX = 10;
        if (tooltipY < 0) tooltipY = 10;
        if (tooltipY + height > this.h) tooltipY = this.h - height - 10;

        ctx.save();

        // 背景
        ctx.fillStyle = "#000000";
        ctx.globalAlpha *= 0.5;
        ctx.beginPath();
        ctx.roundRect(tooltipX, tooltipY, width, height, 5);
        ctx.fill();
        ctx.globalAlpha /= 0.5;

        // 名称
        ctx.font = `900 ${1.2 * 22.5}px Ubuntu`;
        ctx.fillStyle = tree.color;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.strokeText(tree.name, tooltipX + padding, tooltipY + 10);
        ctx.fillText(tree.name, tooltipX + padding, tooltipY + 10);

        // 描述
        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`;
        ctx.fillStyle = "#ffffff";
        let descY = tooltipY + 50;
        for (const line of descLines) {
            ctx.strokeText(line, tooltipX + padding, descY);
            ctx.fillText(line, tooltipX + padding, descY);
            descY += 22.5;
        }

        // 属性
        let statY = descY + 5;
        for (const stat of stats) {
            const text = this.formatStatValue(stat);
            ctx.fillStyle = tree.color;
            ctx.strokeText(text, tooltipX + padding, statY);
            ctx.fillText(text, tooltipX + padding, statY);
            statY += 22.5;
        }

        ctx.restore();
    }

    // 移除节点名称中的罗马数字
    stripRomanNumeral(name) {
        return name.replace(/\s+[IVX]+$/, '');
    }

    // 根据属性键获取格式类型
    getValueFormat(statKey) {
        if (statKey?.includes("Multiplier") || statKey === "healMultiplier" || statKey === "dpsMultiplier" || statKey === "hpMultiplier") {
            return "multiplier";
        }
        if (statKey === "cooldownReduction") {
            return "negative_percent";
        }
        if (statKey === "cooldown") {
            return "time";
        }
        return "number";
    }

    // 格式化属性值显示
    formatStatValue(stat) {
        let valueStr;
        switch (stat.format) {
            case "multiplier":
                valueStr = "x" + stat.value.toFixed(2);
                break;
            case "percent":
                valueStr = stat.value.toFixed(0) + "%";
                break;
            case "negative_percent":
                valueStr = "-" + stat.value.toFixed(0) + "%";
                break;
            case "time":
                valueStr = stat.value.toFixed(1) + "s";
                break;
            default:
                valueStr = stat.value.toFixed(2);
        }
        return `${stat.key}: ${valueStr}`;
    }

    drawCloseButton(mx, my) {
        const btnSize = 30;
        const x = this.w - btnSize - 10;
        const y = 10;

        if (mx > x && mx < x + btnSize && my > y && my < y + btnSize) {
            ctx.fillStyle = '#ff6b6b';
            setCursor('pointer');
            this.hoveringOverX = true;
        } else {
            ctx.fillStyle = '#c1565e';
            this.hoveringOverX = false;
        }

        ctx.strokeStyle = '#90464b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(x, y, btnSize, btnSize, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 4.75;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#cccccc';
        ctx.beginPath();
        ctx.moveTo(x + 8, y + 8);
        ctx.lineTo(x + btnSize - 8, y + btnSize - 8);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(x + btnSize - 8, y + 8);
        ctx.lineTo(x + 8, y + btnSize - 8);
        ctx.stroke();
        ctx.closePath();
    }

    drawResetButton(mx, my, artifactType) {
        const btnW = 100;
        const btnH = 30;
        const x = this.w - btnW - 10;
        const y = 145;

        // 检查是否有已分配的技能点
        const artifact = this.artifacts[artifactType];
        const canReset = artifact && artifact.totalLevelPoints > 0;

        // 计算冷却状态
        const COOLDOWN_MS = 12 * 60 * 60 * 1000;  // 12小时
        const now = Date.now();
        const lastResetTime = this.lastArtifactResetTime || 0;
        const timeSinceReset = lastResetTime > 0 ? now - lastResetTime : COOLDOWN_MS;
        const isOnCooldown = timeSinceReset < COOLDOWN_MS;

        // 鼠标悬停检测
        if (mx > x && mx < x + btnW && my > y && my < y + btnH) {
            if (canReset && !isOnCooldown) {
                ctx.fillStyle = '#90ee90';
                setCursor('pointer');
            } else {
                ctx.fillStyle = '#888888';
            }
            this.hoveringOverReset = true;
        } else {
            if (canReset && !isOnCooldown) {
                ctx.fillStyle = '#6aa8df';
            } else {
                ctx.fillStyle = '#666666';
            }
            this.hoveringOverReset = false;
        }

        ctx.strokeStyle = (canReset && !isOnCooldown) ? '#4981b1' : '#555555';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(x, y, btnW, btnH, 5);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // 文字 - 冷却中显示"Cooldown"，否则显示"Reset"
        ctx.font = "700 14px Ubuntu";
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const buttonText = isOnCooldown ? 'Cooldown' : 'Reset';
        ctx.strokeText(buttonText, x + btnW / 2, y + btnH / 2);
        ctx.fillText(buttonText, x + btnW / 2, y + btnH / 2);
    }

    mouseMove() {
        if (!this.menuActive) return;

        // 处理技能树拖动
        if (this.isDraggingSkillTree) {
            const dx = mouse.x - this.dragStartPos.x;
            const dy = mouse.y - this.dragStartPos.y;
            this.skillTreeOffset.x += dx;
            this.skillTreeOffset.y += dy;
            this.dragStartPos = { x: mouse.x, y: mouse.y };
            setCursor('grabbing');
        }
    }

    mouseUp() {
        this.isDraggingSkillTree = false;
    }

    mouseDown() {
        if (!this.menuActive) return;

        const mx = mouse.canvasX - this.x;
        const my = mouse.canvasY - this.y;

        // 检查关闭按钮
        const btnSize = 30;
        const x = this.w - btnSize - 10;
        const y = 10;
        if (mx > x && mx < x + btnSize && my > y && my < y + btnSize) {
            this.toggleMenu();
            return;
        }

        // 检查重置按钮
        if (this.selectedArtifactIndex >= 0 && this.hoveringOverReset) {
            const type = ARTIFACT_TYPES[this.selectedArtifactIndex];
            this.resetArtifactSkills(type);
            return;
        }

        // 神器选择区 - 检查是否拖动神器
        const startY = 65;
        const slotSize = 65;
        const gap = 10;
        const totalWidth = ARTIFACT_TYPES.length * slotSize + (ARTIFACT_TYPES.length - 1) * gap;
        const startX = (this.w - totalWidth) / 2;

        for (let i = 0; i < ARTIFACT_TYPES.length; i++) {
            const type = ARTIFACT_TYPES[i];
            const artifact = this.artifacts[type];
            const centerX = startX + i * (slotSize + gap) + slotSize / 2;
            const centerY = startY + slotSize / 2;

            // 检查是否点击了神器槽位
            if (mouse.canvasX > this.x + centerX - slotSize / 2 && mouse.canvasX < this.x + centerX + slotSize / 2 &&
                mouse.canvasY > this.y + centerY - slotSize / 2 && mouse.canvasY < this.y + centerY + slotSize / 2) {

                // 如果该神器有数量，可以拖动
                if (artifact.petalContainer && artifact.petalContainer.amount > 0) {
                    const dragData = {
                        petals: artifact.petalContainer.petals,
                        type: artifact.petalContainer.type,
                        rarity: artifact.petalContainer.rarity,
                        id: artifact.petalContainer.id,
                        amount: 1
                    };

                    // 将神器数量设为0
                    artifact.petalContainer.amount = 0;
                    artifact.renderPetalContainer.amount = 0;

                    // 创建拖动容器
                    draggingPetalContainer = new PetalContainer(
                        dragData.petals,
                        { ...artifact.petalContainer, isDragging: true },
                        dragData.id || `${type}_artifact`,
                        1
                    );
                    // 设置神器稀有度（基于技能等级）
                    const totalLevels = Object.values(artifact.skillLevels).reduce((a, b) => a + b, 0) - 1;
                    if (totalLevels > 0) {
                        // 确保稀有度不超过 Colors.rarities 数组上限（34是最大有效稀有度，35-37是防止崩溃的备用）
                        draggingPetalContainer.rarity = Math.min(totalLevels, 34);
                    }
                    draggingPetalContainer.x = this.x + centerX;
                    draggingPetalContainer.y = this.y + centerY;
                    draggingPetalContainer.render.x = this.x + centerX;
                    draggingPetalContainer.render.y = this.y + centerY;
                    draggingPetalContainer.amount = 1;
                    draggingPetalContainer.mouseOffset = {
                        x: 0,
                        y: 0
                    };
                    draggingPetalContainer.w = 85;
                    draggingPetalContainer.h = 85;
                    draggingPetalContainer.spawnAnimation = 1;
                    return;
                }

                // 没有神器时，点击查看技能树
                this.selectedArtifactIndex = i;
                this.nodePositions = {};
                this.calculateNodePositions(ARTIFACT_TYPES[i]);
                this.skillTreeOffset = { x: 0, y: 0 };
                this.skillTreeRenderOffset = { x: 0, y: 0 };
                return;
            }
        }

        // 如果没有点击到神器槽位，但有选中的神器，检查技能节点点击
        if (this.selectedArtifactIndex >= 0 && this.hoveredNode) {
            const { artifactType, node } = this.hoveredNode;
            if (!node.isRoot) {
                this.upgradeNode(artifactType, node.id);
            }
            return;
        }

        // 技能树区域拖动
        if (this.selectedArtifactIndex >= 0 && my > 130) {
            this.isDraggingSkillTree = true;
            this.dragStartPos = { x: mouse.x, y: mouse.y };
        }
    }
}
