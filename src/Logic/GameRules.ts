import GameWindow from "../GameWindow";

export class GameRules {

    public gameWon: boolean;

    constructor ()
    {
        this.gameWon = false
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