class LevelBar {
    constructor(){
        this.xp = 0;
        this.level = 0;// decimal

        this.calculateDimensions();

        this.hasInit = false;

        this.render = {xp: this.xp, level: this.level, initAnimation: 0};
    }
    calculateDimensions(){
        this.dimensions = {
            x: canvas.w * .80,
            y: canvas.h * .94,
            w: canvas.w * (.17 + .04/2),
            h: canvas.h * .04,
            roundness: canvas.w,// more than enough to trigger max roundness
            innerPadding: 4
        }
        if (window.state == 'game') this.dimensions.y -= 15;
    }
    init(xp){
        this.xp = xp;
        this.level = levelPerXp(this.xp);
        this.hasInit = true;
        this.render.xp = this.xp;

        if(localStorage.getItem('ascended') == 1){
            window.characterSelector = new CharacterSelector();
        }
    }
    addXp(xp){
        if(window.automaticallyLeaveFlag === true) return;
        // when an enemy dies
        this.xp += xp;
        this.level = levelPerXp(this.xp);
    }
    getPetalSlotsNumber(){
        return 10; // Fixed 10 main slots (off slots are also 10)
    }
    draw(){
        if(this.hasInit === true){
            this.render.initAnimation = interpolate(this.render.initAnimation, 1, 0.04);
        }
        if(this.render.initAnimation < 0.999){
            ctx.translate(0, (1-this.render.initAnimation) * canvas.h * .18);
        }

        this.render.xp = interpolate(this.render.xp, this.xp, 0.04);
        this.render.level = levelPerXp(this.render.xp);

        if(this.dimensions.w < this.dimensions.h) return;

        // 计算进度百分比
        const progressPercent = this.render.level % 1;
        const progressWidth = this.dimensions.h + (this.dimensions.w - this.dimensions.h) * progressPercent;

        // 绘制背景阴影效果
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 2;
        
        // 绘制背景边框（带渐变）
        const bgGradient = ctx.createLinearGradient(
            this.dimensions.x, this.dimensions.y,
            this.dimensions.x, this.dimensions.y + this.dimensions.h
        );
        bgGradient.addColorStop(0, '#2a2a2a');
        bgGradient.addColorStop(1, '#1a1a1a');
        
        ctx.fillStyle = bgGradient;
        ctx.beginPath();
        ctx.roundRect(this.dimensions.x, this.dimensions.y, this.dimensions.w, this.dimensions.h, this.dimensions.roundness);
        ctx.fill();
        ctx.closePath();
        
        // 绘制内边框
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(this.dimensions.x + 1, this.dimensions.y + 1, this.dimensions.w - 2, this.dimensions.h - 2, this.dimensions.roundness);
        ctx.stroke();
        ctx.closePath();
        
        ctx.restore();

        // 绘制进度条
        if(progressPercent > 0.01){
            // 进度条渐变效果
            const progressGradient = ctx.createLinearGradient(
                this.dimensions.x + this.dimensions.innerPadding, this.dimensions.y,
                this.dimensions.x + this.dimensions.innerPadding, this.dimensions.y + this.dimensions.h
            );
            progressGradient.addColorStop(0, '#ffd700');
            progressGradient.addColorStop(0.5, '#ffed4e');
            progressGradient.addColorStop(1, '#ffd700');
            
            ctx.fillStyle = progressGradient;
            
            // 进度条发光效果
            ctx.save();
            ctx.shadowColor = 'rgba(255, 215, 0, 0.6)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            
            ctx.beginPath();
            ctx.roundRect(
                this.dimensions.x + this.dimensions.innerPadding, 
                this.dimensions.y + this.dimensions.innerPadding, 
                progressWidth - this.dimensions.innerPadding * 2, 
                this.dimensions.h - this.dimensions.innerPadding * 2, 
                this.dimensions.roundness
            );
            ctx.fill();
            ctx.closePath();
            
            ctx.restore();
            
            // 进度条高光效果
            if(progressPercent > 0.1){
                const highlightGradient = ctx.createLinearGradient(
                    this.dimensions.x + this.dimensions.innerPadding, this.dimensions.y,
                    this.dimensions.x + this.dimensions.innerPadding, this.dimensions.y + this.dimensions.h / 2
                );
                highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                
                ctx.fillStyle = highlightGradient;
                ctx.beginPath();
                ctx.roundRect(
                    this.dimensions.x + this.dimensions.innerPadding, 
                    this.dimensions.y + this.dimensions.innerPadding, 
                    progressWidth - this.dimensions.innerPadding * 2, 
                    this.dimensions.h / 2 - this.dimensions.innerPadding, 
                    this.dimensions.roundness
                );
                ctx.fill();
                ctx.closePath();
            }
        }

        // 等级升级时的闪烁效果
        if(this.render.level % 1 < .1){
            ctx.globalAlpha = Math.max(0,(this.render.level % 1) * 9.5 + 0.05);
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.roundRect(this.dimensions.x, this.dimensions.y, this.dimensions.w, this.dimensions.h, this.dimensions.roundness);
            ctx.fill();
            ctx.closePath();
        }

        ctx.globalAlpha = 1;
        
        // 绘制等级文本
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `bold 18px Ubuntu`;

        let levelText = `Lvl ${Math.ceil(this.render.level)} Flower`;
        
        // 文本阴影效果
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 3;
        ctx.shadowOffsetY = 1;
        
        ctx.strokeText(levelText, this.dimensions.x + (this.dimensions.w) / 2, this.dimensions.y + this.dimensions.h / 2);
        ctx.fillText(levelText, this.dimensions.x + (this.dimensions.w) / 2, this.dimensions.y + this.dimensions.h / 2);
        ctx.restore();
        
        // 鼠标悬停时显示详细信息
        if (mouse.canvasX > this.dimensions.x && mouse.canvasY > this.dimensions.y){
            let levelReqText = `${formatAmountHighPrecision(levelBar.xp)}/${formatAmountHighPrecision(xpPerLevel(Math.ceil(levelPerXp(levelBar.xp))))} xp`;
            let hp = formatAmountHighPrecision(Stats.hpPerLevel(this.render.level));
            if (biomeManager.getCurrentBiomeData().current == '1v1') hp = formatAmountHighPrecision((100 + this.render.level) * 2)
            
            // 详细信息文本样式
            ctx.font = `bold 14px Ubuntu`;
            ctx.fillStyle = '#e0e0e0';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            
            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            ctx.shadowBlur = 3;
            ctx.shadowOffsetY = 1;
            
            ctx.strokeText(levelReqText +" | "+hp+" hp", this.dimensions.x + (this.dimensions.w) / 2, this.dimensions.y / 1.035 + this.dimensions.h / 2);
            ctx.fillText(levelReqText +" | "+hp+" hp", this.dimensions.x + (this.dimensions.w) / 2, this.dimensions.y / 1.035 + this.dimensions.h / 2);
            ctx.restore();
        }
        
        if(this.render.initAnimation < 0.999){
            ctx.translate(0, -(1-this.render.initAnimation) * canvas.h * .18);
        }
    }
}

const levelBar = new LevelBar();