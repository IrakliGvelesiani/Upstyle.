import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home/Home";
import NewArrivals from "../Pages/NewArrivals/NewArrivals";
import Cart from "../Pages/Cart/Cart";
import Product from "../Pages/Product/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new-arrivals" component={NewArrivals} />
      <Route path="/cart" component={Cart} />
      <Route path="/products/:slug" component={Product} />
    </Switch>
  );
};

export default Routes;
