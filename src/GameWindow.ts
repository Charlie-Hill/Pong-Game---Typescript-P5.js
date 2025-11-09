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
import { MathUtils } from './Utils/Math';
import WinScreen from './Entities/UI/WinScreen';
import GameSettings from './Systems/GameSettings';
import StartScreen from './Entities/UI/StartScreen';

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
    private startScreen: StartScreen;
    private pauseScreen: PauseScreen;
    private winScreen: WinScreen;

    private players: Array<IPlayer>;

    private collision: Collision;

    constructor (settings: GameSettings) {
        super();

        this.SoundEngine = new SoundEngine(settings);
        this.collision = new Collision(this);
        this.gameRules = new GameRules();
        this.ball = new Ball(this.gameRules);
        this.startScreen = new StartScreen(GameWindow.WINDOW_LENGTH, GameWindow.WINDOW_HEIGHT, GameWindow.WINDOW_PAUSED_COLOR)
        this.pauseScreen = new PauseScreen(GameWindow.WINDOW_LENGTH, GameWindow.WINDOW_HEIGHT, GameWindow.WINDOW_PAUSED_COLOR)
        this.winScreen = new WinScreen()
        
        // Event listeners
        window.addEventListener('setDifficulty', (event: any) => {
            const difficulty = event.detail.difficulty;
            this.gameRules.setDifficulty(difficulty);
            
            this.isGameStarted = true;
            const startEvent = new CustomEvent('pauseScreenMouseClicked', { detail: this.isGameStarted});
            document.dispatchEvent(startEvent)

            this.ball.resetBall();
        });
        
        // Setup Players
        let humanPlayer = new Player('Human');
        let aiPlayer = new Player('Computer', true, this.gameRules.difficulty);
        this.players = [humanPlayer, aiPlayer];

        this.scoreboard = new ScoreBoard(this.players);
    }
    
    setup () {
        this.createCanvas(GameWindow.WINDOW_LENGTH, GameWindow.WINDOW_HEIGHT);
        this.frameRate(60);
    }

    mouseClicked () {
        if (!this.isGameStarted) {
            this.startScreen.clicked(this.mouseX, this.mouseY);
        }

        if(this.pauseScreen.clicked(this.mouseX, this.mouseY)) {
            // this.isGameStarted = true;
            // const event = new CustomEvent('pauseScreenMouseClicked', { detail: this.isGameStarted});
            // document.dispatchEvent(event)
        }
    }

    pauseGame (pause: boolean) {
        this.isGameStarted = !pause;
    }

    draw () {
        if (!this.isGameStarted) {
            return this.startScreen.display(this);
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

            if (player.Score.scoreCount >= 5) {
                this.winScreen.setWinner(player)
                this.winScreen.display(this);
                
                if (this.gameRules.gameWon == false) {
                    const num = MathUtils.randomInt(1, 4)
                    switch (num) {
                        case 1:
                            this.SoundEngine.SFX.SFX_WIN_1.play()
                            break
                        case 2:
                            this.SoundEngine.SFX.SFX_WIN_2.play()
                            break
                        case 3:
                            this.SoundEngine.SFX.SFX_WIN_3.play()
                            break
                        case 4:
                            this.SoundEngine.SFX.SFX_WIN_4.play()
                            break
                    }
                    this.gameRules.gameWon = true
                }

                // this.isGameStarted = false
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