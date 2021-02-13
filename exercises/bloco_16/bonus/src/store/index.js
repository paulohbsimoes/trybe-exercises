import counterReducer from '../reducers/counterReducer.js';
import historyReducer from '../reducers/historyReducer.js';

const reducer = Redux.combineReducers({
  counter: counterReducer,
  history: historyReducer,
})

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
