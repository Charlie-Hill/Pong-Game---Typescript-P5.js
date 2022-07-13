import p5 from "p5";
import IEntity from "../Interface/Entities/IEntity";

export default class Paddle implements IEntity {
    public x: number;
    public y: number;

    public width = 15;
    public height = 60;
    
    public isAIControlled: boolean;

    constructor(isAIControlled: boolean = false) {
        this.x = isAIControlled ? 740 : 40;
        this.y = 100;
        this.isAIControlled = isAIControlled;
    }

    display(p5: any, x: number, y?: number): void {
        if (y) {
            this.y = y;
        }
        p5.fill(255)

        p5.rectMode(p5.RADIUS);

        p5.fill(255, 255, 255);
        p5.rect(this.x, this.y, this.width, this.height)

        p5.fill(255,0,0);
        p5.circle(this.x, this.y, 5);


        // Debug Drawings
        p5.fill(255,0,0);
        p5.circle(this.x - this.width, this.y + this.height, 5);
        p5.circle(this.x + this.width, this.y + this.height, 5);
        p5.circle(this.x - this.width, this.y - this.height, 5);
        p5.circle(this.x + this.width, this.y - this.height, 5);

        p5.fill(255, 204, 100);
        p5.line(0, this.y, p5.width, y ? y : this.y);
    }

}