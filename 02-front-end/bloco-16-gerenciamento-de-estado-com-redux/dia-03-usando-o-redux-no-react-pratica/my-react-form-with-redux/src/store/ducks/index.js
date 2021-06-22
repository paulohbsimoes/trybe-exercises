import { combineReducers } from 'redux';

import formReducer from './form';

export default combineReducers({
  form: formReducer,
})
