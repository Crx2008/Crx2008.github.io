class Shop {
    constructor() {
        this.offers = []
        this.shopItems = []
        this.tokens = 0
        this.petalContainers = []  // 存储 PetalContainer 实例

        this.menu = {
            color: "#8e6bb5",
            border: "#735793",
            y: {val: -500, target: -500},
            active: false
        }
    }

    initShopItems() {
        if (typeof send !== 'undefined') {
            send({ getShopItems: true })
        }
    }

    updateShopItems(items) {
        this.shopItems = items || []

        // 创建 PetalContainer 实例（参考 globalInventory 的方式）
        this.petalContainers = []
        this.offers = this.shopItems.map((item, index) => {
            let petals = []
            let petalType = 'Light'
            let rarity = 0

            if (item.type === 'petal' && item.data.petal) {
                const stats = Stats.petals[item.data.petal.type]?.[item.data.petal.rarity]
                if (stats) {
                    for (let j = 0; j < stats.petalLayout.length; j++) {
                        petals.push(new Petal({
                            x: 0, y: 0, angle: 0, radius: 10,
                            type: item.data.petal.type,
                            rarity: item.data.petal.rarity,
                            damage: 0, offset: 0, distance: 0, dv: 0,
                            id: Math.random(), subId: 0, subStackedId: 0,
                            dead: false, hp: 1, maxHp: 1,
                            reload: 1, maxReload: 1,
                            angleOffset: 0, petalContainerId: -1
                        }))
                    }
                    petalType = item.data.petal.type
                    rarity = item.data.petal.rarity
                }
            }

            // 计算网格位置：4列布局（与 drawOffers 保持一致）
            const cols = 4
            const itemSize = 65
            const unitWidth = itemSize + 50
            const iconAreaHeight = 70
            const middleSpacing = 0
            const priceAreaHeight = 38
            const unitHeight = iconAreaHeight + middleSpacing + priceAreaHeight
            const gapX = (600 - 40 - cols * unitWidth) / (cols - 1)
            const gapY = unitHeight + 15
            const startY = 65
            const totalContentWidth = cols * unitWidth + (cols - 1) * gapX
            const startX = (600 - totalContentWidth) / 2
            const col = index % cols
            const row = Math.floor(index / cols)

            // 计算相对于商店菜单的局部坐标（黑框中心，图标区域中心）
            const localX = startX + col * (unitWidth + gapX) + unitWidth / 2
            const localY = startY + row * gapY + iconAreaHeight / 2

            // 只为花瓣类型创建 PetalContainer
            if (item.type === 'petal' && petals.length > 0) {
                const petalContainer = new PetalContainer(
                    petals,
                    {
                        x: localX,           // 目标位置（稳定不变）
                        y: localY,
                        w: 57,
                        h: 57,
                        originalX: localX,   // render 的初始位置
                        originalY: localY,
                        toOscillate: false   // 禁止摆动动画
                    },
                    `shop_${index}`,
                    1,
                    null
                )
                this.petalContainers.push(petalContainer)
            } else {
                // 技能点等其他类型不需要 PetalContainer
                this.petalContainers.push(null)
            }

            return {
                price: item.cost,
                itemId: item.itemId,
                itemName: item.nameCN,
                itemType: item.type,
                rarity: rarity,
                type: petalType,
                skillPoint: item.data.skillPoint || 0  // 技能点数量
            }
        })
    }

    draw() {
        this.menu.y.val = interpolate(this.menu.y.val, this.menu.y.target, 0.03 * dt)

        if (this.menu.active === true) {
            this.menu.y.target = 20
        } else {
            this.menu.y.target = -500
        }

        if (this.menu.y.val > -500) {
            const baseX = 130
            const baseY = this.menu.y.val
            const width = 600
            const height = 500

            // 背景
            ctx.fillStyle = this.menu.color
            ctx.strokeStyle = this.menu.border
            ctx.lineWidth = 8
            ctx.beginPath()
            ctx.roundRect(baseX, baseY, width, height, 3)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()

            // 关闭按钮 X
            if(mouse.canvasX > baseX + width - 50 && mouse.canvasY > baseY + 17.5 && mouse.canvasX < baseX + width - 20 && mouse.canvasY < baseY + 17.5 + 30){
                ctx.fillStyle = "#c16666"
                setCursor('pointer')
                this.hoveringOverX = true
            } else {
                this.hoveringOverX = false
                ctx.fillStyle = '#c1565e'
            }
            ctx.strokeStyle = '#90464b'
            ctx.lineWidth = 5
            ctx.beginPath()
            ctx.roundRect(baseX + width - 50, baseY + 17.5, 30, 30, 6)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
            ctx.lineWidth = 4.75
            ctx.lineCap = 'round'
            ctx.strokeStyle = '#cccccc'
            ctx.beginPath()
            ctx.moveTo(baseX + width - 50 + 7.5, baseY + 17.5 + 7.5)
            ctx.lineTo(baseX + width - 50 + 22.5, baseY + 17.5 + 22.5)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(baseX + width - 50 + 22.5, baseY + 17.5 + 7.5)
            ctx.lineTo(baseX + width - 50 + 7.5, baseY + 17.5 + 22.5)
            ctx.stroke()
            ctx.closePath()

            // 标题
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.font = `900 30px 'Ubuntu'`
            ctx.lineWidth = 4
            ctx.fillStyle = "#ffffff"
            ctx.strokeStyle = "#000000"
            ctx.strokeText("Shop", baseX + width / 2, baseY + 32.5)
            ctx.fillText("Shop", baseX + width / 2, baseY + 32.5)

            // 商品网格
            if (this.offers[0]) this.drawOffers()

            // 积分显示（右下角）
            const boxWidth = 120
            const boxHeight = 50
            const boxX = baseX + width - 20 - boxWidth / 2
            const boxY = baseY + height - 20 - boxHeight / 2

            // 黑框背景
            ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
            ctx.beginPath()
            ctx.roundRect(boxX - boxWidth / 2, boxY - boxHeight / 2, boxWidth, boxHeight, 8)
            ctx.fill()
            ctx.closePath()

            // 计算内容总宽度以实现居中
            const iconWidth = 20
            const spacing = 6
            ctx.font = `900 16px 'Ubuntu'`
            const textWidth = ctx.measureText(formatAmountHighPrecision(this.tokens)).width
            const totalContentWidth = iconWidth + spacing + textWidth
            const contentStartX = boxX - totalContentWidth / 2

            // 钱币图标
            ctx.font = `900 20px 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif`
            ctx.textAlign = 'left'
            ctx.textBaseline = 'middle'
            ctx.fillStyle = '#ffffff'  // 重置 fillStyle 避免 emoji 变暗
            ctx.fillText('💰', contentStartX, boxY)

            // 积分文字
            ctx.font = `900 16px 'Ubuntu'`
            ctx.textAlign = 'left'
            ctx.textBaseline = 'middle'
            ctx.lineWidth = 2
            ctx.fillStyle = "#ffffff"
            ctx.strokeStyle = "#000000"
            ctx.strokeText(formatAmountHighPrecision(this.tokens), contentStartX + iconWidth + spacing, boxY)
            ctx.fillText(formatAmountHighPrecision(this.tokens), contentStartX + iconWidth + spacing, boxY)
        }

        ctx.lineWidth = 500
    }

    drawOffers() {
        const baseX = 130
        const baseY = this.menu.y.val
        const width = 600

        // 建立局部坐标系（参考 globalInventory.js line 457）
        ctx.save()
        ctx.translate(baseX, baseY)

        // 网格配置：4列布局
        const cols = 4
        const itemSize = 65
        // 黑框高度分配
        const iconAreaHeight = 70     // 上部图标区域高度
        const middleSpacing = 0       // 中间间隔
        const priceAreaHeight = 38    // 下部价格区域高度
        const unitHeight = iconAreaHeight + middleSpacing + priceAreaHeight
        const unitWidth = itemSize + 50  // 黑框宽度

        // 基于 unitWidth 计算列间距，使黑框整体居中
        const gapX = (width - 40 - cols * unitWidth) / (cols - 1)
        const gapY = unitHeight + 15  // 行间距
        const startY = 65
        // 计算起始位置使商品居中
        const totalContentWidth = cols * unitWidth + (cols - 1) * gapX
        const startX = (width - totalContentWidth) / 2

        // 保存点击区域
        this.offerAreas = []

        for (let i = 0; i < this.offers.length; i++) {
            const col = i % cols
            const row = Math.floor(i / cols)

            // 基于 unitWidth 计算单元格位置
            const unitX = startX + col * (unitWidth + gapX)
            const unitY = startY + row * gapY

            // 图标区域（用于 tooltip）
            const iconAreaX = unitX + (unitWidth - itemSize) / 2
            const iconAreaY = unitY

            // 价格按钮区域
            const priceBoxWidth = itemSize + 15  // 80
            const priceBoxHeight = 28
            const priceBoxX = unitX + (unitWidth - priceBoxWidth) / 2
            const priceAreaY = unitY + iconAreaHeight + middleSpacing
            const priceBoxY = priceAreaY + (priceAreaHeight - priceBoxHeight) / 2

            // 保存价格按钮点击区域（需要转回绝对坐标）
            this.offerAreas.push({
                x: priceBoxX + baseX,
                y: priceBoxY + baseY,
                width: priceBoxWidth,
                height: priceBoxHeight,
                index: i
            })

            // 检测价格按钮悬停
            const isPriceHovered =
                mouse.canvasX > priceBoxX + baseX &&
                mouse.canvasX < priceBoxX + baseX + priceBoxWidth &&
                mouse.canvasY > priceBoxY + baseY &&
                mouse.canvasY < priceBoxY + baseY + priceBoxHeight

            if (isPriceHovered) {
                setCursor('pointer')
            }

            // 绘制商品单元的黑框背景（固定样式，不随悬停变化）
            ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
            ctx.beginPath()
            ctx.roundRect(unitX, unitY, unitWidth, unitHeight, 8)
            ctx.fill()
            ctx.closePath()

            const offer = this.offers[i]

            // 根据商品类型绘制不同内容
            if (offer.itemType === 'skillPoint') {
                // 绘制技能点图标（星星）- 居中于图标区域
                ctx.font = `900 36px 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif`
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = '#FFD700'  // 金色
                ctx.strokeStyle = '#B8860B'
                ctx.lineWidth = 3
                const starX = unitX + unitWidth / 2  // 黑框中心
                const starY = unitY + iconAreaHeight / 2  // 图标区域中心
                ctx.strokeText('⭐', starX, starY)
                ctx.fillText('⭐', starX, starY)

                // 显示技能点数量
                ctx.font = `700 12px 'Ubuntu'`
                ctx.fillStyle = '#ffffff'
                ctx.fillText('+' + offer.skillPoint, starX, unitY + iconAreaHeight - 10)
            } else {
                // 使用 PetalContainer 绘制花瓣（居中于图标区域）
                const petalContainer = this.petalContainers[i]
                if (petalContainer) {
                    petalContainer.x = unitX + unitWidth / 2  // 黑框中心
                    petalContainer.y = unitY + iconAreaHeight / 2  // 图标区域中心
                    petalContainer.draw()
                }
            }

            // 价格显示（居中于价格区域）
            // 悬停时变亮
            ctx.fillStyle = isPriceHovered ? "#FFE44D" : "#FFD700"
            ctx.strokeStyle = isPriceHovered ? "#D4A017" : "#B8860B"
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.roundRect(priceBoxX, priceBoxY, priceBoxWidth, priceBoxHeight, 6)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()

            // 钱币图标和价格文字（整体居中）
            ctx.textBaseline = 'middle'

            // 先设置文字字体来测量宽度
            ctx.font = `900 15px 'Ubuntu'`
            const textWidth = ctx.measureText(offer.price).width
            const iconWidth = 18
            const spacing = 4
            const totalWidth = iconWidth + spacing + textWidth
            const priceContentX = priceBoxX + (priceBoxWidth - totalWidth) / 2

            // 绘制图标
            ctx.font = `900 18px 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif`
            ctx.textAlign = 'left'
            ctx.fillStyle = '#4a3c00'
            ctx.fillText('💰', priceContentX, priceBoxY + priceBoxHeight / 2)

            // 绘制文字
            ctx.font = `900 15px 'Ubuntu'`
            ctx.fillText(offer.price, priceContentX + iconWidth + spacing, priceBoxY + priceBoxHeight / 2)
        }

        // 恢复坐标系（参考 globalInventory.js line 668）
        ctx.restore()

        // 绘制 tooltip（在恢复坐标系后，使用绝对坐标）
        // 参考 globalInventory.js line 676-702
        for (let i = 0; i < this.offers.length; i++) {
            const petalContainer = this.petalContainers[i]
            if (!petalContainer) continue

            // 计算该商品的屏幕位置（与 drawOffers 保持一致）
            const cols = 4
            const itemSize = 65
            const unitWidth = itemSize + 50
            const gapX = (600 - 40 - cols * unitWidth) / (cols - 1)
            const iconAreaHeight = 70
            const middleSpacing = 0
            const priceAreaHeight = 38
            const unitHeight = iconAreaHeight + middleSpacing + priceAreaHeight
            const gapY = unitHeight + 15
            const startY = 65
            const totalContentWidth = cols * unitWidth + (cols - 1) * gapX
            const startX = (600 - totalContentWidth) / 2
            const col = i % cols
            const row = Math.floor(i / cols)

            // 单元格位置（黑框左上角）
            const unitX = baseX + startX + col * (unitWidth + gapX)
            const unitY = baseY + startY + row * gapY

            // 图标区域位置（相对于黑框居中）
            const iconAreaX = unitX + (unitWidth - itemSize) / 2
            const iconAreaY = unitY

            const centerX = unitX + unitWidth / 2
            const centerY = unitY + iconAreaHeight / 2

            // 检测悬停
            if (
                mouse.canvasX > iconAreaX &&
                mouse.canvasX < iconAreaX + itemSize &&
                mouse.canvasY > iconAreaY &&
                mouse.canvasY < iconAreaY + itemSize
            ) {
                petalContainer.isHovered = true
            }

            // 绘制 stats box（使用绝对屏幕坐标）
            petalContainer.drawStatsBox(false, false, centerX, centerY)
        }
    }

    handleClick() {
        if (!this.menu.active || !this.offerAreas) return

        for (const area of this.offerAreas) {
            if (
                mouse.canvasX > area.x &&
                mouse.canvasX < area.x + area.width &&
                mouse.canvasY > area.y &&
                mouse.canvasY < area.y + area.height
            ) {
                const offer = this.offers[area.index]
                if (this.tokens >= offer.price) {
                    if (typeof send !== 'undefined') {
                        send({ purchaseItem: { itemId: offer.itemId } })
                        console.log('购买商品:', offer.itemId, offer.price, offer.itemName)
                    }
                } else {
                    alert('积分不足！需要 ' + offer.price + ' 积分')
                }
                return
            }
        }
    }

    toggle() {
        if(settingsMenu.active === true) {
            settingsMenu.active = false
            settingsMenu.targetOffset = -settingsMenu.h - 40
        }
        this.menu.active = !this.menu.active
        if (this.menu.active) {
            this.initShopItems()
        }
    }
}

const shop = new Shop()
