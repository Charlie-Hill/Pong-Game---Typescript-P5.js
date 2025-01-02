import { IBallEntity, IPaddleEntity } from "../Interface/interfaces";
import { IController } from "../Interface/Logic/IController";
import GameWindow from "../GameWindow";

export class AIController implements IController
{

    updatePosition (Paddle: IPaddleEntity, x: number, y: number, Ball: IBallEntity)
    {
        const WINDOW_CENTER_Y = (GameWindow.WINDOW_HEIGHT / 2);

        if (Ball.velocityX > 0) {
            // Ball is lower than paddle, we move downwards towards ball
            if (Ball.y < Paddle.y) {
                Paddle.y += Ball.velocityY
            } else if (Ball.y > Paddle.y) {
                Paddle.y -= Ball.velocityY
            }
        }

        // Prevent the paddle from exceeding the bounds of the game window
        if ((Paddle.y + (Paddle.height / 2)) > GameWindow.WINDOW_HEIGHT)
        {
            Paddle.y -= Ball.velocityY
        }

        if (Ball.velocityX < 0 ) {
            if ((Math.ceil(Paddle.y / 10)) * 10 > WINDOW_CENTER_Y) {
                Paddle.y -= Paddle.aiPaddleSpeed
            } else if (Math.ceil(Paddle.y / 10) * 10 < WINDOW_CENTER_Y) {
                Paddle.y += Paddle.aiPaddleSpeed
            }
        } 
    }

}