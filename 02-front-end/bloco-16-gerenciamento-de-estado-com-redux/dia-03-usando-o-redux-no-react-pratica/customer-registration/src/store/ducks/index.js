import { combineReducers } from 'redux';

import customers from './customers';
import user from './user';

export default combineReducers({
  customers,
  user,
});
