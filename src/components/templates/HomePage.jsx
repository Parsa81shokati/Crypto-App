import React, { useContext, useEffect, useState } from "react";
import TableCoin from "../modules/Table/TableCoin";
import Search from "../modules/Search/Search";
import Pagination from "../modules/Pagination/Pagination";
import Chart from "../modules/Chart/Chart";
import { CryptoContext } from "../../context/DataContext";
import TableTitle from "../modules/Table/TableTitle";

function HomePage() {
  const {
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
  } = useContext(CryptoContext);

  const displayCoins = searchedCoin ? [searchedCoin] : coins;

  return (
    <div>
      <TableTitle />
      <Search
        currency={currency}
        setCurrency={setCurrency}
        setSearchedCoin={setSearchedCoin}
      />
      <TableCoin
        coins={
          searchedCoin ? coins.filter((c) => c.id === searchedCoin) : coins
        }
        isLoading={isLoading}
        setChart={setChart}
        currency={currency}
      />

      {!searchedCoin && <Pagination page={page} setPage={setPage} />}
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
}

export default HomePage;
