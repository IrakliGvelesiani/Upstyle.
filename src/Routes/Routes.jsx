import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Catalog from "../Pages/Catalog/Catalog";
import Cart from "../Pages/Cart/Cart";
import Product from "../Pages/Product/Product";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog/:slug" exact Component={Product} />
        <Route path="/catalog" exact Component={Catalog} />
        <Route path="/cart" exact Component={Cart} />
      </Switch>
    </div>
  );
};

export default Routes;
