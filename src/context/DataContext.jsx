import React, { createContext, useEffect, useMemo, useState } from "react";
import { getCoinList } from "../services/cryptoApi.js";

export const CryptoContext = createContext();

function CryptoProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [searchedCoin, setSearchedCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getData();
  }, [page, currency]);

  const value = useMemo(
    () => ({
      coins,
      isLoading,
      page,
      setPage,
      currency,
      setCurrency,
      chart,
      setChart,
      searchedCoin,
      setSearchedCoin,
    }),
    [coins, isLoading, page, currency, chart, searchedCoin]
  );

  return (
    <div>
      <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
    </div>
  );
}

export default CryptoProvider;
