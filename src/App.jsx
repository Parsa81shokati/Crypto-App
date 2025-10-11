import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/templates/HomePage";
import Layout from "./Layouts/Layout";
import Hero from "./components/modules/Hero/Hero";

import CryptoProvider from "./context/DataContext";
import Slider from "./components/modules/MaxChange/MaxChangeSliderr";

function App() {
  return (
    <>
      <CryptoProvider>
        <Layout>
          <Hero />
          <HomePage />
        </Layout>
      </CryptoProvider>
    </>
  );
}

export default App;
