class menuTemplate {
    static SD = {w: 0, h: 0, x: 0, y: 0, i: ['w', 'h', 'x', 'y']} // standard dimensions
    static ST = { // standard theme
        fill: "#ffffff",
        stroke: "#000000",
        strokeSize: 5
    }
    constructor(dimensions, theme) {
        this.elements = [];

        this.standard = {
            dimensions: menuTemplate.SD,
            theme: menuTemplate.ST
        }
        if (dimensions && theme) this.standard = { // standard for the menu
            dimensions,
            theme
        }
    }
    static ELEMENT = {
        dimensions: menuTemplate.SD,
        theme: menuTemplate.ST,
        elements: [],
        draw: () => {
            if (this.dimensions.i.length > 0) for (let key of this.dimensions.i) {
                if (!this[key]) this[`i${key}`] = this[key];
                this[key] = interpolate(this[key], this[`i${key}`], 0.007 * dt);
            }

            ctx.beginPath();
            ctx.fillStyle = this.theme.fill;
            ctx.strokeStyle = this.theme.stroke;
            ctx.lineWidth = this.theme.strokeSize;
            ctx.rect(this.x, this.y, this.w, this.h);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            for (let el of this.elements) {
                el.draw();
            }
        }
    }
    draw() {
        for (let key of this.dimensions.i) {
            if (!this[key]) this[`i${key}`] = this[key];
            this[key] = interpolate(this[key], this[`i${key}`], 0.007 * dt);
        }

        ctx.beginPath();
        ctx.fillStyle = this.theme.fill;
        ctx.strokeStyle = this.theme.stroke;
        ctx.lineWidth = this.theme.strokeSize;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        for (let el of this.elements) {
            el.draw();
        }
    }
    createMenu(
        dimensions, theme
    ) {
        const menu = menuTemplate.ELEMENT;

        menu.dimensions = dimensions ? dimensions : this.standard.dimensions;
        menu.theme = theme ? theme : this.standard.theme;
        
        return menu
    }
    createButton() {
        
    }
}