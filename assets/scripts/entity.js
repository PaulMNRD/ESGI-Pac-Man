import {ctx} from './share.js';

export class Entity{
    direction = 1;
    
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
    
    get caseX() {
        return this.calcCase(this.X);
    }
    get caseY() {
        return this.calcCase(this.Y);
    }
    calcCase(coord) {
        return Math.floor(coord / 16);
    }
    drawCase() {
        ctx.fillRect(this.caseX * 16, this.caseY * 16, 16, 16);
    }
}