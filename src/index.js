import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import userReducer from "./reducers/dataReducers";
import reduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(userReducer, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
