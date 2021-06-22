import { combineReducers, createStore } from 'redux';

import { carsReducer, trafficSignalReducer } from '../reducers';

const reducer = combineReducers({
  cars: carsReducer,
  signal: trafficSignalReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
