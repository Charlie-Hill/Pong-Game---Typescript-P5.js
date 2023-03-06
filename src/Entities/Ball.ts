import p5 from "p5";
import { ICircle } from "../Interface/interfaces";

export default class Ball implements ICircle {
    public x: number;
    public y: number;

    public radius = 15;

    public speed = -3.5;
    public velocityX = this.speed;
    public velocityY = this.speed;

    public width = 0;
    public height  = 0;

    public isColliding = false;

    constructor() {
        this.x = 270;
        this.y = 300;
    }

    private ballMovement() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    private drawTrajectoryArrow(p5: any) {
        const arrowSize = 10;
        const arrowHeadSize = 4;
        const arrowAngle = Math.atan2(this.velocityY, this.velocityX);
        const arrowX = this.x + (this.radius + arrowSize) * Math.cos(arrowAngle);
        const arrowY = this.y + (this.radius + arrowSize) * Math.sin(arrowAngle);
        // const arrowEndX = arrowX + arrowHeadSize * Math.cos(arrowAngle + Math.PI / 2);
        // const arrowEndY = arrowY + arrowHeadSize * Math.sin(arrowAngle + Math.PI / 2);
        p5.push();
        p5.stroke(0, 255, 0);
        p5.strokeWeight(2);
        p5.fill(0, 255, 0);
        p5.translate(this.x, this.y);
        p5.rotate(arrowAngle);
        p5.line(0, 0, arrowSize, 0);
        // p5.triangle(arrowEndX, arrowEndY, arrowEndX - arrowHeadSize * Math.cos(arrowAngle), arrowEndY - arrowHeadSize * Math.sin(arrowAngle), arrowEndX - arrowHeadSize * Math.cos(arrowAngle - Math.PI / 2), arrowEndY - arrowHeadSize * Math.sin(arrowAngle - Math.PI / 2));
        p5.pop();
        this.drawArrowPoint(p5);
    }

    private drawArrowPoint(p5: any) {
        const arrowSize = 10;
        const arrowAngle = Math.atan2(this.velocityY, this.velocityX);
        const arrowX = this.x + (this.radius + arrowSize) * Math.cos(arrowAngle);
        const arrowY = this.y + (this.radius + arrowSize) * Math.sin(arrowAngle);
        p5.circle(arrowX, arrowY, 3);
    }

    display(p5: any) {
        this.ballMovement();
        if (this.isColliding) {
            p5.fill(255, 255, 0);
        } else {
            p5.fill(232, 59, 46);
        }
        p5.circle(this.x, this.y, this.radius*2);

        
        if (p5.debuggingEnabled) {
            p5.fill(0, 255, 0);
            p5.line(0, this.y, p5.width, this.y);

            p5.fill(150, 150, 150);
            p5.line(this.x, this.y, this.velocityX, this.velocityY)
            
            this.drawTrajectoryArrow(p5)
        }
    }

}