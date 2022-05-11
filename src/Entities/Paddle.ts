import p5 from "p5";
import IEntity from "../Interface/Entities/IEntity";

export default class Paddle implements IEntity {
    public x: number;
    public y: number;

    public width = 25;
    public height = 100;
    
    public isAIControlled: boolean;

    constructor(isAIControlled: boolean = false) {
        this.x = isAIControlled ? 740 : 40;
        this.y = 60;
        this.isAIControlled = isAIControlled;
    }

    display(p5: any, x: number, y?: number): void {
        if (y) {
            this.y = y;
        }
        p5.fill(255)
        p5.rect(this.x, y ? y-35 : this.y, this.width, this.height);
    }

}