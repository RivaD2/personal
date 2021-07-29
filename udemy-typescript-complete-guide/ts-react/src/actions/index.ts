import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
id: number;
title: string;
completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = 'http://jsonplaceholder.typicode.com/todos';
// Async so make use of redux thunk
// I return a function instead of action
// This function is called with dispatch from redux so I can dispatch action
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    try {
      // TS understands response.data is array of Todos
      const response = await axios.get<Todo[]>(url);

      dispatch<FetchTodosAction>({
        type: ActionTypes.fetchTodos,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  }
}