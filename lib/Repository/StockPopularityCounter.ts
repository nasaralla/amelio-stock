import { StockPopularity } from "./../Model/StockPopularity";

export const StockPopularities: Record<string, StockPopularity> = {};

export function initStockPopularityCounter(tickerids: string[]) {
    for (let tickerid of tickerids) {
        StockPopularities[tickerid] = new StockPopularity(tickerid);
    }
}

export function incrementStockPopularity(stockId: string) {
    StockPopularities[stockId] ? StockPopularities[stockId].incrementPopularity() : console.log(`Bad or unknown Stock id`);
}

export function getTopThreePopularStock() {
    const arr = Object.keys(StockPopularities).map((key) => StockPopularities[key]);
    arr.sort((a, b) => {
        return b.popularity >= a.popularity ? b.popularity == a.popularity ? 0 : 1 : -1;
    })
    return arr.slice(0, 3);
}