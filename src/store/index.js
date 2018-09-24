import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";

import Users from "../reducers";

export default (initialState = {}) => {
  return createStore(
    combineReducers({
      Users
    }),

    initialState,

    compose(
      applyMiddleware(promise(), thunk, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
};
