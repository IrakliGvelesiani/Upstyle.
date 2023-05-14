import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home/Home";
import NewArrivals from "../Pages/NewArrivals/NewArrivals";
import Women from "../Pages/Women/Women";
import Men from "../Pages/Men/Men";
import Magazine from "../Pages/Magazine/Magazine";
import Cart from "../Pages/Cart/Cart";
import Product from "../Pages/Product/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new-arrivals" component={NewArrivals} />
      <Route path="/women" component={Women} />
      <Route path="/men" component={Men} />
      <Route path="/magazine" component={Magazine} />
      <Route path="/cart" component={Cart} />
      <Route path="/products/:slug" component={Product} />
    </Switch>
  );
};

export default Routes;
