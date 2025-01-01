import Canvas from './canvas';
import Ball from './Entities/Ball';
import Paddle from './Entities/Paddle';
import PauseScreen from './Entities/UI/PauseScreen';
import Collision from './Logic/Collision';
import { IPlayer } from './Interface/interfaces';
import { Player } from './Logic/Player';
import ScoreBoard from './Entities/UI/ScoreBoard';
import { GameRules } from './Logic/GameRules';
import { SoundEngine } from './Systems/SoundEngine';

export default class GameWindow extends Canvas {

    public static WINDOW_LENGTH = 800;
    public static WINDOW_HEIGHT = 600;
    public static WINDOW_COLOR = 100;
    public static WINDOW_PAUSED_COLOR = 40;

    public debuggingEnabled = false;

    public isGameStarted: boolean = false;

    private SoundEngine: SoundEngine;
    private ball: Ball;
    private gameRules: GameRules;
    private scoreboard: ScoreBoard;
    private pauseScreen: PauseScreen;

    private players: Array<IPlayer>;

    private collision: Collision;

    private SFX_DING: any; // p5.SoundFile
    private SFX_SCORE_POINT: any; // p5.SoundFile

    constructor () {
        super();

        this.SoundEngine = new SoundEngine();
        this.ball = new Ball();
        this.collision = new Collision(this);
        this.gameRules = new GameRules();
        this.pauseScreen = new PauseScreen(GameWindow.WINDOW_LENGTH, GameWindow.WINDOW_HEIGHT, GameWindow.WINDOW_PAUSED_COLOR)
        
        // Setup Players
        let humanPlayer = new Player('Human');
        let aiPlayer = new Player('Computer', true);
        
        this.players = [humanPlayer, aiPlayer];

        this.scoreboard = new ScoreBoard(this.players);
    }

    setup () {
        this.createCanvas(GameWindow.WINDOW_LENGTH, GameWindow.WINDOW_HEIGHT);
        this.frameRate(60);
    }

    mouseClicked () {
        if(this.pauseScreen.clicked(this.mouseX, this.mouseY)) {
            this.isGameStarted = true;
            const event = new CustomEvent('pauseScreenMouseClicked', { detail: this.isGameStarted});
            document.dispatchEvent(event)
        }
    }

    pauseGame (pause: boolean) {
        this.isGameStarted = !pause;
    }

    draw () {
        if (!this.isGameStarted) {
            return this.pauseScreen.display(this);
        }

        // Render Background
        this.background(GameWindow.WINDOW_COLOR);
        for (let i = 0; i < GameWindow.WINDOW_HEIGHT; i += 10) {
            this.line(GameWindow.WINDOW_LENGTH / 2, i, GameWindow.WINDOW_LENGTH / 2, i + 5);
        }

        if (this.debuggingEnabled) {
            const fpsText = Math.round(this.frameRate())
            this.text('FPS: ' + fpsText, this.width * 0.9, 50);
        }

        // Scoreboard
        this.scoreboard.display(this);

        // Handle Players & Paddles
        this.players.forEach(player => {
            const y = player.IsAI ? player.Paddle.y : (this.mouseY);

            if (this.collision.circRect(this.ball, player.Paddle)) {
                this.ball.velocityX = -this.ball.velocityX;

                const paddleHalfY = player.Paddle.y;
                if (this.ball.y > paddleHalfY) {
                    this.ball.velocityY = -this.ball.velocityY;
                }

                this.ball.isColliding = true;

                this.SoundEngine.SFX.SFX_DING.play()
            }

            player.Paddle.update(this, player.Paddle.x, y, this.ball)

            this.stroke(0);
        })

        if (this.collision.circleCollidesWithBorder(this.ball)) {
            this.ball.velocityY *= -1;

            this.SoundEngine.SFX.SFX_DING.play();
        }

        // Handle the game rules check
        const rulesCheck = this.gameRules.handleBallCheck(this.ball.x);
        if (rulesCheck !== -1) {
            this.SoundEngine.SFX.SFX_SCORE_POINT.play()

            this.scoreboard.AddPoint(rulesCheck)

            this.players.forEach(i => {
                i.Paddle.resetPaddle()
            })

            this.ball.resetBall()
        }

        // Update the ball
        this.ball.display(this);
        this.ball.isColliding = false;
    }

}