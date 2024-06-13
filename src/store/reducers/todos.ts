import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
} from "../../constants/ActionTypes";

// 定义 Todo 对象的接口
interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

// 定义 action 对象的接口
interface TodoAction {
  type: string;
  text?: string;
  id?: number;
}

// 初始状态类型
const initialState: Todo[] = [
  {
    text: "Use Redux",
    completed: false,
    id: 0,
  },
];

// 导出 reducer 函数，并为其添加类型注解
export default function todos(
  state: Todo[] = initialState,
  action: TodoAction
): Todo[] {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text!, // 使用非空断言，因为我们知道 ADD_TODO action 应该有 text 属性
        },
      ];

    case DELETE_TODO:
      return state.filter(
        (todo) => todo.id !== action.id! // 使用非空断言，因为我们知道 DELETE_TODO action 应该有 id 属性
      );

    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id!
          ? { ...todo, text: action.text! } // 使用非空断言，因为我们知道 EDIT_TODO action 应该有 text 和 id 属性
          : todo
      );

    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.id! ? { ...todo, completed: !todo.completed } : todo
      );

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every((todo) => todo.completed);
      return state.map((todo) => ({
        ...todo,
        completed: !areAllMarked,
      }));

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
}
