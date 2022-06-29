import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import root from "./rootreducer";

const store=createStore(root,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store