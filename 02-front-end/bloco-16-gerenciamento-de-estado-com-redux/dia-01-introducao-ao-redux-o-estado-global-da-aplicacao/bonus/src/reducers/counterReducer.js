import { INCREMENT, DECREMENT } from '../actions/counterActions.js';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT: return { ...state, count: state.count + action.amount };
    case DECREMENT: return { ...state, count: state.count - action.amount };
    default: return state;
  }
};

export default counterReducer;
