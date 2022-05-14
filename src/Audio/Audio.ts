import p5sound from 'p5/lib/addons/p5.sound';
import { SoundFile } from 'p5';

export default class Audio {
    
    public paddleHitsBall: SoundFile;

    constructor () {
        this.paddleHitsBall = new SoundFile('assets/sounds/paddle-hit.wav');

    }

    playSound (sound: SoundFile) {
        sound.play();
    }
}