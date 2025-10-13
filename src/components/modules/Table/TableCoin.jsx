import React from "react";
import chartup from "../../../assets/chart-up.svg";
import chartdown from "../../../assets/chart-down.svg";

import styles from "./TableCoin.module.css";
import { mareketChart } from "../../../services/cryptoApi";
import { FadeLoader } from "react-spinners";

function TableCoin({ coins, isLoading, setChart, currency }) {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <FadeLoader color="#38a9e3" className={styles.tableloading} />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24 h</th>
              <th>Total valume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                setChart={setChart}
                currency={currency}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({ coin, setChart, currency }) => {
  const {
    id,
    name,
    image,
    symbol,
    total_volume,
    price_change_percentage_24h,
    current_price,
  } = coin;

  const showHandler = async () => {
    try {
      const res = await fetch(mareketChart(id));
      const json = await res.json();
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr onClick={showHandler}>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td className={styles.nameCell}>{name}</td>
      <td>
        {currency === "eur" ? "€" : currency === "jpy" ? "¥" : "$"}
        {current_price.toLocaleString()}
        {current_price.toLocaleString()}
      </td>
      <td
        className={
          price_change_percentage_24h > 0 ? styles.success : styles.error
        }
      >
        {price_change_percentage_24h?.toFixed(2)}%
      </td>
      <td>{total_volume?.toLocaleString()}</td>
      <td>
        <img
          src={price_change_percentage_24h > 0 ? chartup : chartdown}
          className={styles.updown}
        />
      </td>
    </tr>
  );
};
