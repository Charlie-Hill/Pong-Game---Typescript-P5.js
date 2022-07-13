import { IEntity, ICircle } from "../Interface/interfaces";
import p5 from 'p5';
import GameWindow from "../GameWindow";

export default class Collision {

    private p5: p5;

    constructor(p5: p5) {
        this.p5 = p5;
    }

    circRect(circle: ICircle, rect: IEntity) {

        const topSide = rect.y + rect.height;
        const bottomSide = rect.y - rect.height;
        const leftSide = rect.x - rect.width;
        const rightSide = rect.x + rect.width;
        

        let circleDistance = {x:0, y:0};

        circleDistance.x = Math.abs(circle.x - rect.x);
        circleDistance.y = Math.abs(circle.y - rect.y);
    
        if (circleDistance.x > (rect.width/2 + circle.radius)) { return false; }
        if (circleDistance.y > (rect.height/2 + circle.radius)) { return false; }
    
        if (circleDistance.x <= (rect.width/2)) { return true; } 
        if (circleDistance.y <= (rect.height/2)) { return true; }
    
        let cornerDistance_sq = (circleDistance.x - rect.width/2)^2 +
                             (circleDistance.y - rect.height/2)^2;
    
        return (cornerDistance_sq <= Math.pow(circle.radius, 2));
    

        return false;

        // let textX = circle.x;
        // let testY = circle.y;

        // if (circle.x < rect.x)
        //     textX = rect.x;
        // else if (circle.x > rect.x + (rect.width / 2))
        //     textX = rect.x + (rect.width / 2);

        // if (circle.y < rect.y)
        //     testY = rect.y;
        // else if (circle.y > rect.y + (rect.height / 2))
        //     testY = rect.y + (rect.height / 2);

            
        // let distanceX = circle.x - textX;
        // let distanceY = circle.y - testY;

        // let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        // if (distance < circle.radius) {
        //     return true;
        // }
    }

}