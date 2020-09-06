import React from "react";
import Banner from "./Banner";
import UserPanel from "./UserPanel";
import ProductsList from "./ProductsList";
import UserProvider from "../providers/UserProvider";
import ProductsProvider from "../providers/ProductsProvider";

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
