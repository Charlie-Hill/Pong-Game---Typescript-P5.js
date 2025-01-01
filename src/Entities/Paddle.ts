import p5 from "p5";
import { IController } from "../Interface/Logic/IController";
import { AIController } from "../Logic/AIController";
import { PlayerController } from "../Logic/PlayerController";
import IPaddleEntity from "../Interface/Entities/IPaddleEntity";
import { IEntity } from "../Interface/interfaces";
import { Color } from "../Utils/Color";

export default class Paddle implements IPaddleEntity {
    public x: number;
    public y: number;

    public width = 15;
    public height = 60;
    
    public color = Color.randomHexString();

    public isAIControlled: boolean;
    public Controller: IController;
    

    constructor(isAIControlled: boolean = false) {
        this.x = isAIControlled ? 740 : 40;
        this.y = 455;
        this.isAIControlled = isAIControlled;

        if (this.isAIControlled) {
            this.Controller = new AIController();
        } else {
            this.Controller = new PlayerController();
        }
    }

    update (p5: p5, x: number, y: number, BallEntity: IEntity): void {
        this.Controller.updatePosition(this, x, y, BallEntity);

        this.display(p5);
    }
    
    display(p5: any): void {
        p5.fill(255)

        p5.rectMode(p5.RADIUS);

        // p5.fill(255, 255, 255);
        let paddleColor = p5.color(this.color)
        p5.fill(paddleColor);
        p5.rect(this.x, this.y, this.width, this.height)


        if (p5.debuggingEnabled) {
            p5.fill(255,0,0);
            p5.circle(this.x, this.y, 5);

            p5.fill(255,255,0);
            p5.circle(this.x - this.width, this.y + this.height, 5);
            p5.circle(this.x + this.width, this.y + this.height, 5);
            p5.circle(this.x - this.width, this.y - this.height, 5);
            p5.circle(this.x + this.width, this.y - this.height, 5);
    
            p5.fill(255, 204, 100);

            p5.stroke(0, 13, 180);
            for (let i = 0; i < p5.width; i += 10) {
                p5.line(i, this.y, i + 5, this.y);
            }
        }
    }

}