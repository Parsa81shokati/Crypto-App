import React from "react";
import styles from "./Layout.module.css";
import icon from "../assets/cryp.png";

function Layout({ children }) {
  return (
    <>
      <header>
        <img src={icon} alt="Setcoin logo" className={styles.icon} />
        Setcoin
      </header>
      {children}
      <footer className={styles.footText}>
        <p>💻 Developed by Parsa Shokati </p>
      </footer>
    </>
  );
}

export default Layout;
