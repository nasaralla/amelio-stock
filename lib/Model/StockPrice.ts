import { Stock } from "./Stock";

const INIT_PRICE = 1000;

export class StockPrice extends Stock {
    public price: number;

    constructor(name: string, price: number = INIT_PRICE) {
        super(name);
        this.price = price;
    }

    updatePrice(price: number) {
        this.price = price;
    }
}