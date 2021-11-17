import Canvas from './canvas';
import Ball from './Entities/Ball';
import Paddle from './Entities/Paddle';
import Collision from './Collision';

export default class GameWindow extends Canvas {

    static WINDOW_LENGTH = 800;
    static WINDOW_HEIGHT = 600;
    static WINDOW_COLOR = 100;

    private playerPaddle: Paddle;
    private AIPaddle: Paddle;
    private ball: Ball;

    private collision: Collision;

    constructor() {
        super();
        this.playerPaddle = new Paddle();
        this.AIPaddle = new Paddle(true);
        this.ball = new Ball();
        this.collision = new Collision(this);
    }

    setup() {
        this.createCanvas(GameWindow.WINDOW_LENGTH, GameWindow.WINDOW_HEIGHT);
        this.frameRate(60);
    }

    draw() {
        this.background(GameWindow.WINDOW_COLOR);

        this.AIPaddle.display(this);
        this.playerPaddle.display(this, this.mouseY);
        this.ball.display(this);


        if(this.collision.circRect(this.ball, this.playerPaddle))
        {
            this.ball.velocityX *= -1;
            this.ball.velocityY *= -1;
        }
    }

}