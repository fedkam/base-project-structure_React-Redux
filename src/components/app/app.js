import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages";

import "./app.css";

const App = () => {
  console.log("____ App ____");
  return (
    <main role="main">
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </main>
  );
};

export default App;
