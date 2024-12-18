import { Stock } from "./Stock";

export class StockPopularity extends Stock {
    public popularity: number;

    constructor(name: string) {
        super(name);
        this.popularity = 0;
    }

    incrementPopularity() {
        this.popularity = this.popularity + 1;
    }
}