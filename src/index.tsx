import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { StateProvider } from "./context/stateProvider";
import reducer, { initialState } from "./context/reducer";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
