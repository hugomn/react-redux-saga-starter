import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension'
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import App from "./components/App";
import { createRootReducer, rootSaga } from './store';
import "./index.css";

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory({ basename: '/react-redux-saga-starter' });

const initialState = window.initialReduxState
const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
