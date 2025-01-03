export default class GameSettings
{

    private observers: ((volume: number) => void)[] = []

    private volume: number;

    constructor ()
    {
        this.volume = 0.5;
    }

    public getVolume = () => { return this.volume }

    public setVolume = (value: number) => { 
        this.volume = value
        this.notifyObservers(this.volume)
    }

    public onVolumeChange (callback: (volume: number) => void): void {
        this.observers.push(callback)
    } 

    private notifyObservers (volume: number): void {
        this.observers.forEach(callback => callback(volume))
    }

}