const BASE_URL = "https://api.coingecko.com/api/v3"

const getCoinList = (page,currency)=>{
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}`
}

const searchCoin=query =>`${BASE_URL}/search?query=${query}`

const mareketChart=coin=>`${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`

export {getCoinList , searchCoin , mareketChart}