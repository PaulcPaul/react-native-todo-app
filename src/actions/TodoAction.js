import { ADD_TODO } from './types';

export const addTodo = (todos) => {
  return {
    type: ADD_TODO,
    payload: todos
  };
};