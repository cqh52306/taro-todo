import * as types from "../../constants/ActionTypes";

interface AddTodoAction {
  type: typeof types.ADD_TODO;
  text: string;
}

interface DeleteTodoAction {
  type: typeof types.DELETE_TODO;
  id: number;
}

interface EditTodoAction {
  type: typeof types.EDIT_TODO;
  id: number;
  text: string;
}

interface CompleteTodoAction {
  type: typeof types.COMPLETE_TODO;
  id: number;
}

interface CompleteAllTodosAction {
  type: typeof types.COMPLETE_ALL_TODOS;
}

interface ClearCompletedAction {
  type: typeof types.CLEAR_COMPLETED;
}

interface SetVisibilityFilterAction {
  type: typeof types.SET_VISIBILITY_FILTER;
  filter: string;
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | EditTodoAction
  | CompleteTodoAction
  | CompleteAllTodosAction
  | ClearCompletedAction
  | SetVisibilityFilterAction;

export const addTodo = (text: string): AddTodoAction => ({
  type: types.ADD_TODO,
  text,
});
export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: types.DELETE_TODO,
  id,
});
export const editTodo = (id: number, text: string): EditTodoAction => ({
  type: types.EDIT_TODO,
  id,
  text,
});
export const completeTodo = (id: number): CompleteTodoAction => ({
  type: types.COMPLETE_TODO,
  id,
});
export const completeAllTodos = (): CompleteAllTodosAction => ({
  type: types.COMPLETE_ALL_TODOS,
});
export const clearCompleted = (): ClearCompletedAction => ({
  type: types.CLEAR_COMPLETED,
});
export const setVisibilityFilter = (
  filter: string
): SetVisibilityFilterAction => ({ type: types.SET_VISIBILITY_FILTER, filter });
