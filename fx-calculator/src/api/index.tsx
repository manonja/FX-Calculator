const API_KEY = 'NTOQMSUKNQT0Y6ZW';


export const getExchangeRate = (func: void, fromCcy: string, toCcy: string) => {
    console.log('CURRENCY_EXCHANGE_RATE')
    // TODO: fetch data
    return `https://www.alphavantage.co/query?function=${func}&from_currency=${fromCcy}&to_currency=${toCcy}&apikey=${API_KEY}`;
}

export const getFXDaily = (func: void, fromSymbol: string, toSymbol: string ) => {
    console.log('FX_DAILY')
    return `https://www.alphavantage.co/query?function=${func}&from_symbol=${fromSymbol}&to_symbol=${toSymbol}&apikey=${API_KEY}`;
}