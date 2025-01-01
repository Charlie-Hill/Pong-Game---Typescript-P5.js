import Canvas from '../canvas';

export class SoundEngine
{
    static AUDIO_FILES = {
        SFX_DING: 'paddleHitsBall',
        SFX_SCORE_POINT: 'pointScore'
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