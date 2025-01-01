import { IBallEntity, IEntity } from "../Interface/interfaces";
import { IController } from "../Interface/Logic/IController";
import GameWindow from "../GameWindow";

export class AIController implements IController
{

    updatePosition (Paddle: IEntity, x: number, y: number, Ball: IBallEntity)
    {
        if (Ball.velocityX > 0) {
            if (Ball.y < (Paddle.y - Paddle.height / 4)) {
                Paddle.y += Ball.velocityY
            } else if (Ball.y > (Paddle.y + Paddle.height / 4)) {
                Paddle.y -= Ball.velocityY
            }
        }
        else {
            if (Paddle.y > (GameWindow.WINDOW_HEIGHT / 2)) {
                Paddle.y -= Ball.velocityY
            } else if (Paddle.y < (GameWindow.WINDOW_HEIGHT / 2)) {
                Paddle.y += Ball.velocityY
            }
        }

        if (Paddle.y - (Paddle.height / 2) < 0) {
            Paddle.y = Paddle.height / 2
        }
        else if (Paddle.y + (Paddle.height / 2) > GameWindow.WINDOW_HEIGHT) {
            Paddle.y = (GameWindow.WINDOW_HEIGHT - Paddle.height / 2) 
        }
    }

}