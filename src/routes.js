import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Obrigado from "./pages/Obrigado";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/obrigado" component={Obrigado} />
      </Switch>
    </BrowserRouter>
  );
}
