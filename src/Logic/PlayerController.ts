import { IEntity } from "../Interface/interfaces";
import { IController } from "../Interface/Logic/IController";

export class PlayerController implements IController
{

    updatePosition (Paddle: IEntity, x: number, y: number)
    {
        Paddle.x = x
        Paddle.y = y
    }

}