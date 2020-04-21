
import { INCREMENT, DECREMENT } from '../actions/types.js';

initial_state = {
    count: 0,
}

export default (state = initial_state, action) => {
  if (__DEV__) {
    console.log(action);
  }
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state
  }
}
