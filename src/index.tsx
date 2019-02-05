import React from "react";
// import ReactDOM from "react-dom";
import { render, hydrate } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory, createMemoryHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension'
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import App from "./components/App";
import { createRootReducer, isServer, rootSaga } from './store';
import { Frontload } from 'react-frontload';
import Loadable from 'react-loadable';
import "./index.css";

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const url = '/react-redux-saga-starter';

// Create a history depending on the environment
const history = isServer
  ? createMemoryHistory({ initialEntries: [url] })
  : createBrowserHistory({ basename: url });

// const initialState = window.initialReduxState
// Do we have preloaded state available? Great, save it.
const initialState = !isServer ? window.__PRELOADED_STATE__ : {};
// Delete it once we have it stored in a variable
if (!isServer) {
  delete window.__PRELOADED_STATE__;
}

const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// Let's let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender={true}>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const root = document.querySelector('#root');

if (root!.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}