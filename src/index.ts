import GameWindow from './GameWindow';

let game = new GameWindow();

document.getElementById('resetBtn')?.addEventListener('click', () => {
    document.getElementById('gameWindow')!.innerHTML = '';
    game = new GameWindow();
});