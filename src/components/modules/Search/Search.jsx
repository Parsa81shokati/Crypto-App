import React, { useEffect, useState } from "react";
import { searchCoin } from "../../../services/cryptoApi";
import styles from "./Search.module.css";
import { FadeLoader } from "react-spinners";

function Search({ currency, setCurrency, setSearchedCoin }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    if (selectedCoin) return;
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsloading(false);
      setSearchedCoin(null);
      setCoins([]);

      return;
    }

    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
          setIsloading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsloading(true);
    search();
    return () => controller.abort();
  }, [text]);

  const clickHandler = (coin) => {
    setSelectedCoin(coin);
    setSearchedCoin(coin.id);
    setText(coin.name);

    setCoins([]);
  };

  console.log(coins);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="search"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setSelectedCoin(null);
          setSearchedCoin(null);
        }}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>

      {(!!coins.length || isLoading) && (
        <div className={styles.searchResult}>
          {isLoading && (
            <FadeLoader color="#38a9e3" className={styles.searchloading} />
          )}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id} onClick={() => clickHandler(coin)}>
                <img src={coin.thumb} alt={coin.name} /> <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
