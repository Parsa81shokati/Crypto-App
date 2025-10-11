import React, { useContext, useEffect, useState } from "react";
import TableCoin from "../modules/Table/TableCoin";
import Search from "../modules/Search/Search";
import Pagination from "../modules/Pagination/Pagination";
import Chart from "../modules/Chart/Chart";
import { CryptoContext } from "../../context/DataContext";

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
  } = useContext(CryptoContext);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
}

export default HomePage;
