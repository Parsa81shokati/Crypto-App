import React from "react";
import styles from "./MaxChangeCard.module.css";
import chartup from "../../../assets/up.png";
import chartdown from "../../../assets/down.png";

function MaxChangeCard({ coin }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={coin.image} alt={coin.name} />
        <div className={styles.coinInfo}>
          <p className={styles.symbol}>{coin.symbol}</p>
          <p className={styles.name}>({coin.name})</p>
        </div>
      </div>

      <p className={styles.totalvolume}>
        ${coin.total_volume.toLocaleString()}
      </p>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <p
            className={
              coin.price_change_percentage_24h > 0
                ? styles.priceUp
                : styles.priceDown
            }
          >
            ({coin.price_change_percentage_24h.toFixed(2)}%)
          </p>
          <p className={styles.statLabel}>24H change</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.price}>${coin.current_price}</p>
          <span className={styles.statLabel}>price</span>
        </div>
      </div>
      <img
        src={coin.price_change_percentage_24h > 0 ? chartdown : chartup}
        className={styles.sood}
      />
    </div>
  );
}

export default MaxChangeCard;
