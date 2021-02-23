import { INCREMENT, DECREMENT } from '../actions/counterActions.js';

const initialState = {
  clickCount: 0,
  history: [],
}

const historyReducer = (state = initialState, action) => {
  const { history, clickCount } = state;

  switch (action.type) {
    case INCREMENT: return ({
      history: [...history, action ],
      clickCount: clickCount + 1,
    });

    case DECREMENT: return ({
      history: [...history, action ],
      clickCount: clickCount + 1,
    });

    default: return state;
  }
}

export default historyReducer;
