import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  // Requirement of type in redux action must be unique value
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction