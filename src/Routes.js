import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
