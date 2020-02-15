const API_KEY: string = 'NTOQMSUKNQT0Y6ZW';

export const constructAlphaVantageUrl = (func: string, func_call: string): string => {
    return `https://www.alphavantage.co/query?function=${func}&${func_call}&apikey=${API_KEY}`;
}

export const getFXUrl = (fromCcy: string, toCcy: string): string => {
    return constructAlphaVantageUrl('CURRENCY_EXCHANGE_RATE', `from_currency=${fromCcy}&to_currency=${toCcy}`)
}

export const getFXDailyUrl = (fromCcy: string, toCcy: string): string => {
    return constructAlphaVantageUrl('CURRENCY_EXCHANGE_RATE', `from_symbol=${fromCcy}&to_symbol=${toCcy}`)
}

