import { createStore, combineReducers, applyMiddlware, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer, loadingReducer } from "./reducers";
const reducers = {
  todoReducer,
  loadingReducer
};
const rootReducers = combineReducers(reducers)

export const configureStore = () => createStore(rootReducers, applyMiddleware(thunk));