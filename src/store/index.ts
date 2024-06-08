import { createStore, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer, { RootState } from "../reducers"; // 假设你已经有了一个 RootState 类型

const middlewares = [thunkMiddleware, createLogger()];

export default function configStore(): Store<RootState, any> {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
