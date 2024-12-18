# amelio-stock

### Install Dependencies

You will require Node and NPM to run the service

See: https://nodejs.org/en/download/package-manager

### Install NPM Packages

`npm install`

### Run Server

`npx ts-node src/index.ts`

### Endpoints

##### Get Stock Price By Stock id / name

**Request**

`http://localhost:8080/stocks/stock-1`

**Response**

`{"stockName":"stock-1","price":964,"priceFormatted":"£964","timestamp":"2024-12-18T16:01:28.180Z"}`

##### Get top three popular stocks

**Request**

`http://localhost:8080/popular-stocks`

**Response**

`[{"name":"stock-1","description":"","popularity":9},{"name":"stock-7","description":"","popularity":9},{"name":"stock-9","description":"","popularity":3}]`

##### Get sum of all stocks

**Request**

`http://localhost:8080/sum-stocks`

**Response**

`{"timestamp":"2024-12-18T17:18:16.642Z","sumOfPrices":9966}`
