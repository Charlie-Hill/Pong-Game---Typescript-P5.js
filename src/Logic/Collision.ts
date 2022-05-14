import { IEntity, ICircle } from "../Interface/interfaces";
import p5 from 'p5';

export default class Collision {

    private p5: p5;

    constructor(p5: p5) {
        this.p5 = p5;
    }

    circRect(circle: ICircle, rect: IEntity) {
        
        let distX = Math.abs(circle.x - rect.x-rect.width/2);
        let distY = Math.abs(circle.y - rect.y-rect.height/2);

        if (distX > (rect.width / 2 + circle.radius)) { return false; }
        if (distY > (rect.height / 2 + circle.radius)) { return false; }

        if (distX <= (rect.width / 2)) { return true; }
        if (distY <= (rect.height / 2)) { return true; }

        var dx= distX - rect.width / 2;
        var dy= distY - rect.height / 2;

        return (dx*dx+dy*dy<=(circle.radius * circle.radius));
    }

}