import { StockPrice } from "./../Model/StockPrice";
import { Ticker } from "./../Utils/Ticker";
import { getNewStockPrice } from "./StockPrice";

export const StockPrices: Record<string, StockPrice> = {};

//This would return a set of new prices for all stocks
export function initStockTicker(tickerids: string[]) {
    for (let tickerid of tickerids) {
        StockPrices[tickerid] = new StockPrice(tickerid);
    }
    new Ticker(calculateStockPrices);
}

function calculateStockPrices() {
    for (let stockId in StockPrices) {
        StockPrices[stockId].updatePrice(getNewStockPrice(StockPrices[stockId].name, StockPrices[stockId].price).value);
    }
}

export function getStockPrice(stockId: string) {
    return StockPrices[stockId] ? StockPrices[stockId].price : console.log(`Bad or unknown Stock id`);
}