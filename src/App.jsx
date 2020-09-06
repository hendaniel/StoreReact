import React from "react";
import Banner from "./components/Banner";
import UserPanel from "./components/UserPanel";
import ProductsList from "./components/ProductsList";
import UserProvider from "./providers/UserProvider";
import ProductsProvider from "./providers/ProductsProvider";

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <UserPanel />
        <Banner />
        <ProductsList />
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
