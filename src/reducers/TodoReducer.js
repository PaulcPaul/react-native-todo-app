
import { ADD_TODO } from '../actions/types.js';

initial_state = {
  todos: [],
}

export default (state = initial_state, action) => {
  if (__DEV__) {
    console.log(action);
  }
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: action.payload};
    default:
      return state
  }
}
