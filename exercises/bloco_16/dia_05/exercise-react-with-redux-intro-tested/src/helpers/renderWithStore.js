import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const renderWithStore = (
  component,
  { 
    initialState,
    store = createStore(rootReducer, initialState)
  } = {}
) => ({
  ...render(<Provider store={ store }>{ component }</Provider>), store
});

export default renderWithStore;
