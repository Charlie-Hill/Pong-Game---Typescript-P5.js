import GameWindow from './GameWindow';

let game = new GameWindow();

document.getElementById('resetBtn')?.addEventListener('click', () => {
    document.getElementById('gameWindow')!.innerHTML = '';
    document.getElementById('pauseBtn')!.innerHTML = 'Resume';

    game = new GameWindow();
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
        document.getElementById('pauseBtn')!.innerHTML = 'Pause';
    } else {
        document.getElementById('pauseBtn')!.innerHTML = 'Resume';
    }
}