import { createSelector } from "reselect";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../constants/TodoFilters";

// 定义 Todo 的类型
interface Todo {
  id: number | string;
  text: string;
  completed: boolean;
  // 可能还有其他属性...
}

// 定义 state 的类型（简化版）
interface TodoState {
  todos: Todo[];
  visibilityFilter:
    | typeof SHOW_ALL
    | typeof SHOW_COMPLETED
    | typeof SHOW_ACTIVE;
  // 可能还有其他属性...
}

// 获取 visibilityFilter 的选择器
const getVisibilityFilter = (state: TodoState) => state.visibilityFilter;

// 获取 todos 的选择器
const getTodos = (state: TodoState) => state.todos;

// 创建一个选择器来获取可见的 todos
export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter: TodoState["visibilityFilter"], todos: Todo[]) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + visibilityFilter);
    }
  }
);

// 创建一个选择器来获取完成的 todos 的数量
export const getCompletedTodoCount = createSelector(
  [getTodos],
  (todos: Todo[] | undefined) =>
    todos?.reduce((count, todo) => (todo.completed ? count + 1 : count), 0) || 0
);

// 注意：如果 todos 是 undefined，我们返回 0 而不是抛出错误，这取决于你的应用程序如何处理未定义的 todos
