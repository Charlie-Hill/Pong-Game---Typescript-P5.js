// Workaround for the weird p5 & p5.sound library imports
declare global {
    interface Window {
        p5: any;
    }
}
import p5 from "p5"
window.p5 = p5
require('p5/lib/addons/p5.sound')
// END: Workaround for the weird p5 & p5.sound library imports

// Create a new instance of the GameWindow
import GameWindow from './GameWindow';
let game = new GameWindow();


// UI logic for pause screen
handlePauseScreen()

document.getElementById('resetBtn')?.addEventListener('click', () => {
    document.getElementById('gameWindow')!.innerHTML = '';
    game = new GameWindow();
    handlePauseScreen();
});

document.getElementById('pauseBtn')?.addEventListener('click', () => {
    game.isGameStarted = !game.isGameStarted;
    game.pauseGame(!game.isGameStarted);
    handlePauseScreen();
});

document.addEventListener('pauseScreenMouseClicked', (event: any) => {
    handlePauseScreen();
});

function handlePauseScreen () {
    if (game.isGameStarted) {
        document.getElementById('pauseBtn')!.innerHTML = 'Pause ⏸';
    } else {
        document.getElementById('pauseBtn')!.innerHTML = 'Resume ▶';
    }
}