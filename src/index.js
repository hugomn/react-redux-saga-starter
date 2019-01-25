import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import {
  ConnectedRouter,
  routerMiddleware
} from "connected-react-router";
import createRootReducer from './reducers'
import sagas from "./sagas";
import App from "./components/App";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory({ basename: '/react-redux-saga-starter' });

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  const composeWithDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (typeof composeWithDevToolsExtension === "function") {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
