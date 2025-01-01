import Canvas from '../canvas';

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

    constructor ()
    {
        this.SFX = {}

        this.init()
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
}