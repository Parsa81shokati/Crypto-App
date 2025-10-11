import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header>Crypto App</header>
      {children}
      <footer>
        <p>Developed by Parsa Shokati</p>
      </footer>
    </>
  );
}

export default Layout;
