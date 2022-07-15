import { IEntity, ICircle } from "../Interface/interfaces";
import p5 from 'p5';
import GameWindow from "../GameWindow";

export default class Collision {

    private p5: p5;

    constructor(p5: p5) {
        this.p5 = p5;
    }

    circleCollidesWithBorder (circle: ICircle) {
        if ((circle.y + circle.radius) >= GameWindow.WINDOW_HEIGHT || (circle.y - circle.radius) <= 0) {
            return true;
        }
    }

    circRect(circle: ICircle, rect: IEntity) {
        const DeltaX = circle.x - Math.max(rect.x, Math.min(circle.x, rect.x + rect.width));
        const DeltaY = circle.y - Math.min(circle.y, rect.y + rect.height);
        
        return (DeltaX * DeltaX + DeltaY * DeltaY) < ((circle.radius) * circle.radius);
    }

}