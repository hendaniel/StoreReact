import React from "react";
import Banner from "./components/Banner/Banner";
import UserPanel from "./components/User/UserPanel";
import ProductsList from "./components/Products/ProductsList";
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
