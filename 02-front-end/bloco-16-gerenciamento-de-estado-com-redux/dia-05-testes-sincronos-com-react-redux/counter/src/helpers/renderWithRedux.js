import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import clickReducer from '../reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState)
  } = {}
) => ({
  ...render(<Provider store={ store }>{ component }</Provider>), store
});

export default renderWithRedux;
