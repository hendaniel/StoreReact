import React from "react";
import User from "../context/User";
import Products from "../context/Products";
import Banner from "./Banner";
import UserPanel from "./UserPanel";
import UserProvider from "../providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <UserPanel />
      <Banner />
      <Products />
    </UserProvider>
  );
}

export default App;
