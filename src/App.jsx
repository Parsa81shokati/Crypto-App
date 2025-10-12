import HomePage from "./components/templates/HomePage";
import Layout from "./Layouts/Layout";
import Hero from "./components/modules/Hero/Hero";

import CryptoProvider from "./context/DataContext";

function App() {
  return (
    <>
      <CryptoProvider>
        {/* <Layout> */}
        <Hero />
        <HomePage />
        {/* </Layout> */}
      </CryptoProvider>
    </>
  );
}

export default App;
