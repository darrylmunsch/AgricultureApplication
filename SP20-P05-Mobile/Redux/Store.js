import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/index";

const _Store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default _Store;
