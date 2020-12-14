import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import SignIn from "./pages/signIn/signIn";
import CreateAccount from "./pages/createAccount/createAccount";
import Cart from "./pages/cart/cart";
import Product from "./pages/product/product";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/createAccount">
          <CreateAccount />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
