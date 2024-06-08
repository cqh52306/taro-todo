import { SET_VISIBILITY_FILTER } from "../constants/ActionTypes";
import { SHOW_ALL } from "../constants/TodoFilters";

// 假设 TodoFilters 包含了所有可能的过滤器选项
type TodoFilters = typeof SHOW_ALL | "SHOW_COMPLETED" | "SHOW_ACTIVE"; // 根据实际情况添加其他过滤器

// 定义 action 的类型
interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: TodoFilters;
}

// reducer 函数，带有类型注解
const visibilityFilter = (
  state: TodoFilters = SHOW_ALL,
  action: SetVisibilityFilterAction
): TodoFilters => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
