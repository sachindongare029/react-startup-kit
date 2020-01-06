import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';

const Routes = () => (
  <React.Fragment>
    <main className="main">
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/about"} component={About} />
    </main>
  </React.Fragment>
);

export default Routes;
