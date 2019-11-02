import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

import App from "./components/app";
import ErrorBoundry from "./containers/error-boundry-container";
import DataService from "./services/data-services";
import { ComponentServiceProvider } from "./components/component-service-context";

import store from "./store";

const dataService = new DataService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ComponentServiceProvider value={dataService}>
        <Router>
          <App />
        </Router>
      </ComponentServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
