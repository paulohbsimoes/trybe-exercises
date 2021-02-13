import { createStore, combineReducers } from 'redux';

import todoListReducer from '../reducers/todoListReducer';

const reducer = combineReducers({
  todos: todoListReducer,
})

const store = createStore(reducer);

export default store;
