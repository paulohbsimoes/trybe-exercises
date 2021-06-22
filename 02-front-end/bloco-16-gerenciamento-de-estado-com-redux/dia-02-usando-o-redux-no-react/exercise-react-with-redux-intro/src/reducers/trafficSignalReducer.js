import { CHANGE_SIGNAL } from '../redux/actionCreators';

const trafficSignalReducer = (state = { color: 'red' }, action) => {
  switch (action.type) {
    case CHANGE_SIGNAL: return { color: action.payload };
    default: return state;
  }
}

export default trafficSignalReducer;