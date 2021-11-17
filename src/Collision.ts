import { IEntity, ICircle } from "./Interface/interfaces";
import p5 from 'p5';

export default class Collision {

    private p5: p5;

    constructor(p5: p5) {
        this.p5 = p5;
    }
    
    public circRect(circleEntity: ICircle, rectangleEntity: IEntity) {
        let testX = circleEntity.x;
        let testY = circleEntity.y;

        if (circleEntity.x < rectangleEntity.x) testX = rectangleEntity.x;  // test left edge
        else if (circleEntity.x > rectangleEntity.x + rectangleEntity.width!) testX = rectangleEntity.x + rectangleEntity.width!;   // right edge
        
        if (circleEntity.y < rectangleEntity.y) testY = rectangleEntity.y;  // top edge
        else if (circleEntity.y > rectangleEntity.y + rectangleEntity.length!) testY = rectangleEntity.y + rectangleEntity.length!;   // bottom edge

        let d = this.p5.dist(circleEntity.x, circleEntity.y, testX, testY);

        if (d <= circleEntity.radius)
            return true;

        return false;
    }

}