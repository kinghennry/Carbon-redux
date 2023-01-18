import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-multi-carousel/lib/styles.css";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

// redux setup
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectfirst>
          <App />
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
