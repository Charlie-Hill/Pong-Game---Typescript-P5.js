import Canvas from './canvas';
import Ball from './Entities/Ball';
import Paddle from './Entities/Paddle';
import PauseScreen from './Entities/UI/PauseScreen';
import Collision from './Collision';
import { IPlayer } from './Interface/interfaces';
import { Player } from './Logic/Player';

export default class GameWindow extends Canvas {

    static WINDOW_LENGTH = 800;
    static WINDOW_HEIGHT = 600;
    static WINDOW_COLOR = 100;
    static WINDOW_PAUSED_COLOR = 40;

    private isGameStarted: boolean = false;

    private ball: Ball;
    private pauseScreen: PauseScreen;

    private players: Array<IPlayer>;

    private collision: Collision;

    constructor() {
        super();
        this.ball = new Ball();
        this.collision = new Collision(this);
        this.pauseScreen = new PauseScreen(GameWindow.WINDOW_LENGTH, GameWindow.WINDOW_HEIGHT, GameWindow.WINDOW_PAUSED_COLOR)

        // Setup Players
        let humanPlayer = new Player("Human");
        let aiPlayer = new Player("Computer", true);

        this.players = [humanPlayer, aiPlayer];
    }

    setup() {
        this.createCanvas(GameWindow.WINDOW_LENGTH, GameWindow.WINDOW_HEIGHT);
        this.frameRate(60);
    }

    mouseClicked () {
        if(this.pauseScreen.clicked(this.mouseX, this.mouseY)) {
            this.isGameStarted = true;
        }
    }

    draw() {
        this.background(GameWindow.WINDOW_COLOR);

        if (!this.isGameStarted) {
            this.pauseScreen.display(this);
        } else {
            this.players.forEach(player => {
                const y = player.IsAI ? player.Paddle.y : this.mouseY;
                player.Paddle.display(this, player.Paddle.x, y);
            })

            this.ball.display(this);

            if(this.collision.circRect(this.ball, this.players[0].Paddle))
            {
                this.ball.velocityX *= -1;
                this.ball.velocityY *= -1;
            }
        }
    }

}