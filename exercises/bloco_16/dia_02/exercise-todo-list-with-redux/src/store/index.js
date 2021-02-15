import { createStore, combineReducers } from 'redux';

import todoListReducer from '../reducers/todoListReducer';

const reducer = combineReducers({
  todos: todoListReducer,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
