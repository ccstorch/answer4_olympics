import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { reducers } from "./reducers";

const { NODE_ENV } = process.env;

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (NODE_ENV !== 'production' && NODE_ENV !== 'test' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = NODE_ENV !== 'test' ? syncHistoryWithStore(browserHistory, store) : {};

export { store, history };
