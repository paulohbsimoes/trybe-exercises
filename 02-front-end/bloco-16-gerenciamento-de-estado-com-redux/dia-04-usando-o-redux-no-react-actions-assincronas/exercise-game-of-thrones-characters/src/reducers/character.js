import { Types } from "../actions/character.js.js"

const INITIAL_STATE = {
  current: null,
  isFetching: false,
  error: '',
}

const character = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.SET_FETCHING:
      return {
        ...state,
        isFetching: true,
      }

    case Types.SAVE_CHARACTER:
      return {
        ...state,
        current: action.payload,
        isFetching: false,
        error: '',
      }

    case Types.ERROR_FETCHING:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }

    default: return state;
  }
} 

export default character;
