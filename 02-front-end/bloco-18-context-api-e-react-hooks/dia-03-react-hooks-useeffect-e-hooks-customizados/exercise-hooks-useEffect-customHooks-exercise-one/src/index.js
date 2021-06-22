import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { Provider } from './components/RedditContext';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
