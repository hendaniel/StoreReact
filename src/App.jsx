import React from "react";
import Banner from "./components/Banner/Banner";
import UserPanel from "./components/User/UserPanel";
import UserProvider from "./providers/UserProvider";
import ProductsProvider from "./providers/ProductsProvider";
import HistoryProvider from "./providers/HistoryProvider";
import Navigation from "./components/User/Navigation";

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <HistoryProvider>
          <UserPanel />
          <Banner />
          <Navigation />
        </HistoryProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
