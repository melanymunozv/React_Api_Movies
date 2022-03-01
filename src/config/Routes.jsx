import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import About from "../components/about/About";
import Politicas from "../components/politicas/Politicas";
import Contact from "../components/contact/Contact";
import Terminos from "../components/terminos/Terminos";
import Base from "../components/login/Base";

function Routes() {
  return (
    <Switch>
      <Route path="/About" component={About} />
      <Route path="/Politicas" component={Politicas} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Terminos" component={Terminos} />
      <Route path="/login" component={Base} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />

      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
