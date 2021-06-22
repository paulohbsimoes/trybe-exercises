import React from 'react';
import { render } from 'react-dom';
import { PostsBySubredditProvider } from './contexts/PostsBySubredditContext'
import { SelectedSubredditProvider } from './contexts/SelectedSubredditContext'

import App from './App';

render(
  <PostsBySubredditProvider>
    <SelectedSubredditProvider>
      <App />
    </SelectedSubredditProvider>
  </PostsBySubredditProvider>,
  document.getElementById('root'),
);
