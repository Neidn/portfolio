import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import StoreWrapper from "./store";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

const engine = new Styletron();

const rootNode = document.getElementById("root");

/*
# React 18
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);
 */
ReactDOM.render(
  <React.StrictMode>
    <StoreWrapper>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </StoreWrapper>
  </React.StrictMode>,
  rootNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
