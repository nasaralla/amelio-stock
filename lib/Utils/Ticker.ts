export class Ticker {
    public interval: any;
    public delay: number;
    private callback: Function;

    constructor(callback: Function, delay: number = 1000) {
        this.callback = callback;
        this.delay = delay;
        this.startTicker();
    }

    startTicker() {
        this.interval = setInterval(() => {
            this.callback();
        }, this.delay);
    }

    stopTicker() {
        clearInterval(this.interval);
    }
}