// shows the collected petals
class CollectedMenu {
    constructor(){
        //this.calculateDimensions();

        this.petalContainers = {/*rarity: [petalName: PetalContainer]*/};// same as globalInventory
    }
    addPetalContainer(p){
        // this whole function is really inefficient lol. If you're ever bored then refactor ig.
        if(this.petalContainers[p.rarity] === undefined){
            this.petalContainers[p.rarity] = [];
        }

        let previousStack = this.petalContainers[p.rarity].find(p2 => p2.type === p.type);
        if(previousStack !== undefined){
            // console.log("omg op")
            previousStack.amount += p.amount;
            previousStack.lastAmountChangedTime = time;
        }
        else{
            p.w = 52;
            p.h = 52;
            p.collectedAnimation = 0;
            this.petalContainers[p.rarity].unshift(p);
        }

        this.petalContainers[p.rarity].sort();
    }
    calculateDimensions(){
        const petalContainersPerRow = 4;
        const padding = 15;
        const offsetFromText = 40;
        const petalContainerSize = 50//(this.petalContainers[0] ?? {w: 0}).w;
        let totalPetalContainers = 0;
        
        for(let i = numberOfRarities-1; i >= 0; i--){
            if(this.petalContainers[i] === undefined){
                continue;
            }
            totalPetalContainers += this.petalContainers[i].length;
        }
        
        this.dimensions = {
            x: canvas.w - 340,
            y: 20,
            w: 320,
            h: 20 + 2* padding + offsetFromText + petalContainerSize + Math.min(13, Math.floor((totalPetalContainers-1) / petalContainersPerRow)) * (petalContainerSize + 12)
            //h: canvas.h * .94 - 40// levelbar is at canvas.h * .94. 20px of margin looks good
        }
        this.w = this.dimensions.w;
        this.h = this.dimensions.h;
    }
    draw(){
        this.calculateDimensions();

        ctx.fillStyle = 'black';
        ctx.lineWidth = 8;
        // ctx.save();

        ctx.translate(this.dimensions.x, this.dimensions.y);

        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.roundRect(0, 0, this.w, this.h, 5);
        ctx.fill();
        ctx.globalAlpha = 1;
        // ctx.clip();
        ctx.closePath();
        
        const offsetFromText = 40;
        const petalContainersPerRow = 4;
        const padding = 15;
        const rightPadding = 15;// scroll bar is here so we need more
        const petalContainerSize = 50//(this.petalContainers[0] ?? {w: 0}).w;
        const sidePadding = 20;
    
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.font = `900 24px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        ctx.strokeText(window.spectating ? "Petals dropped" : "Collected this run", this.w/2, (padding + offsetFromText)/2);
        ctx.fillText(window.spectating ? "Petals dropped" : "Collected this run", this.w/2, (padding + offsetFromText)/2);
        
        let renderIndex = 0;
        for(let i = numberOfRarities-1; i >= 0; i--){
            if(this.petalContainers[i] === undefined){
                continue;
            }
            if (Math.floor(renderIndex / petalContainersPerRow) > 13) continue;
            for(let j = 0; j < this.petalContainers[i].length; j++){
                if (Math.floor(renderIndex / petalContainersPerRow) > 13) continue;
                const petalContainer = this.petalContainers[i][j];
                petalContainer.x = petalContainerSize / 2 + padding + sidePadding + (renderIndex % petalContainersPerRow) / (petalContainersPerRow-1) * (this.w - petalContainerSize - padding - rightPadding - 2*sidePadding);
                petalContainer.y = offsetFromText + padding + petalContainerSize/2 + Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12);
                petalContainer.render.x = petalContainer.x;
                petalContainer.render.y = petalContainer.y;

                petalContainer.draw();
                renderIndex++;
            }
        }

        // ctx.restore();
        ctx.translate(-this.dimensions.x, -this.dimensions.y);
    }
}

let collectedMenu = new CollectedMenu();