import Canvas from '../canvas';
import GameSettings from './GameSettings';

export class SoundEngine
{
    static AUDIO_FILES = {
        SFX_DING: 'paddleHitsBall',
        SFX_SCORE_POINT: 'pointScore',
        SFX_WIN_1: 'WIN_1',
        SFX_WIN_2: 'WIN_2',
        SFX_WIN_3: 'WIN_3',
        SFX_WIN_4: 'WIN_4'
    }

    public SFX: { [key: string]: SoundFile } = {}

    constructor (GameSettings: GameSettings)
    {
        this.SFX = {}

        this.init()

        GameSettings.onVolumeChange(this.setVolume.bind(this))
        this.setVolume(GameSettings.getVolume())
    }

    init ()
    {
        this.SFX.SFX_DING = new SoundFile(SoundEngine.AUDIO_FILES.SFX_DING, 'untilDone')
        this.SFX.SFX_SCORE_POINT = new SoundFile(SoundEngine.AUDIO_FILES.SFX_SCORE_POINT, 'untilDone')
        this.SFX.SFX_WIN_1 = new SoundFile(SoundEngine.AUDIO_FILES.SFX_WIN_1, 'untilDone')
        this.SFX.SFX_WIN_2 = new SoundFile(SoundEngine.AUDIO_FILES.SFX_WIN_2, 'untilDone')
        this.SFX.SFX_WIN_3 = new SoundFile(SoundEngine.AUDIO_FILES.SFX_WIN_3, 'untilDone')
        this.SFX.SFX_WIN_4 = new SoundFile(SoundEngine.AUDIO_FILES.SFX_WIN_4, 'untilDone')
    }

    setVolume (val: number)
    {
        Object.keys(this.SFX).forEach((key) => {
            this.SFX[key].volume(val)
        })
    }

}

class SoundFile {
    public name: string;
    public file: string;
    public sound: any
    
    constructor (name: string, playMode: string) {
        this.name = name
        this.file = name + '.wav'

        const audioFile = require('../Audio/files/' + this.file)
        this.sound = new Canvas.SoundFile(audioFile)

        this.sound.playMode(playMode)
    }

    play () {
        this.sound.play()
    }

    volume (value: number) {
        this.sound.setVolume(value)
    }
}