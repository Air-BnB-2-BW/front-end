import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const middlewareEnhancer = applyMiddleware(
  thunkMiddleware,
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middlewareEnhancer)

const store = createStore(rootReducer, undefined, enhancer);
export default store;
