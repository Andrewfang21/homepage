import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducers } from "./reducers";

const isOnProduction: boolean = process.env.NODE_ENV === "production";

let store: any;
if (isOnProduction) {
  store = createStore(reducers, applyMiddleware(thunk));
} else {
  store = createStore(reducers, applyMiddleware(thunk, logger));
}

export default store;
