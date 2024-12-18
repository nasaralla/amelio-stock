import { StockPrice } from "../Model/StockPrice";

export function getNewStockPrice(name: string, value: number) {
    return { name: name, value: value + Math.floor((Math.random() - 0.5) * 10) };
}

export function getPriceSum(StockPrices: Record<string, StockPrice>) {
    return Object.keys(StockPrices).reduce(((accumulator, currentValue) => {
        return StockPrices[currentValue].price + accumulator
    }), 0);
}