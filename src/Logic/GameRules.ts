import GameWindow from "../GameWindow";

export class GameRules {

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