import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsList from "../Products/ProductsList";
import ProductsHistory from "../ProductsHistory/ProductsHistory";

const Navigation = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/history" component={ProductsHistory} />
      </Switch>
    </>
  );
};

export default Navigation;
