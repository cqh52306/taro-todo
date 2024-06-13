import { combineReducers } from "redux";
import todosReducer from "./todos";
import visibilityFilterReducer from "./visibilityFilter";
import navigationReducer from "./navigationReducer"; // 导入 navigation reducer

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  navigation: navigationReducer,
});

export default rootReducer;
