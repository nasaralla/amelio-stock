// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getStockPrice, initStockTicker, StockPrices } from "../lib/Repository/StockPriceTicker";
import { getTopThreePopularStock, incrementStockPopularity, initStockPopularityCounter } from "../lib/Repository/StockPopularityCounter";
import { getPriceSum } from "../lib/Repository/StockPrice";

dotenv.config();
//configure ticker
const tickerids: string[] = [
  "stock-1",
  "stock-2",
  "stock-3",
  "stock-4",
  "stock-5",
  "stock-6",
  "stock-7",
  "stock-8",
  "stock-9",
  "stock-10",
];
//start the ticker
initStockTicker(tickerids);
//init popularity counter
initStockPopularityCounter(tickerids);
const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  let output = "<h4>List of Stocks</h4><ul>";
  for (let stockId in StockPrices) {
    output += `<li><span>${StockPrices[stockId].name} - £${StockPrices[stockId].price}</span></li>`;
  }
  output += "</ul>";
  res.send(output);
});

// Get Popular Stock
app.get("/popular-stocks", (req: Request, res: Response) => {
  const output = getTopThreePopularStock();
  res.send(output);
});

// Get Stock Price
app.get("/stocks/:stockid", (req: Request, res: Response) => {
  const dateStamp = new Date().toISOString();
  const price = getStockPrice(req.params.stockid);
  incrementStockPopularity(req.params.stockid);
  const output = { stockName: req.params.stockid, price: price, priceFormatted: `£${price}`, timestamp: dateStamp };
  res.send(output);
});

// Get Sum of all Stocks
app.get("/sum-stocks", (req: Request, res: Response) => {
  const dateStamp = new Date().toISOString();
  const sum = { timestamp: dateStamp, sumOfPrices: getPriceSum(StockPrices) };
  res.send(sum);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});