import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

// Describes entire state in redux store
// This is provided as generic arg to combineReducers
export interface StoreState {
  todos: Todo[]
}

// Redux state --> { todos: [Todo, Todo, Todo] }
// TS now looks at object in combineReducers
// For each reducer passed, TS will make sure that todosReducer will return array of type Todos
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
})