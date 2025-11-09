import GameWindow from "../GameWindow";

export class GameRules {

    public difficulty: string;
    public gameWon: boolean;

    constructor ()
    {
        this.difficulty = 'medium';
        this.gameWon = false
    }

    setDifficulty (difficulty: string) {
        this.difficulty = difficulty;
    }

    handleBallCheck (ballX: number) {
        
        if (ballX < 0) {
            return 1;
        } 
        else if (ballX > GameWindow.WINDOW_LENGTH) {
            return 0;
        }

        return -1;
    }
    
}