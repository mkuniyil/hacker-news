import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import appSagas from "./sagas/appSagas";
import reducer from "./reducers/appReducers";

let middlewares = [];

// Redux logger implementation only for development

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    timestamp: true
  });

  middlewares.push(logger);
}

/*********** Redux saga implementation ****************/

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

sagaMiddleware.run(appSagas);

/****************************************************** */

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
