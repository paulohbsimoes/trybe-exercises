import getCharacter from '../services/charAPI';

export const Types = {
  SET_FETCHING: 'SET_FETCHING',
  ERROR_FETCHING: 'ERROR_FETCHING',
  SAVE_CHARACTER: 'SAVE_CHARACTER',
}

export const Creators = {
  saveCharacter: (character) => ({
    type: Types.SAVE_CHARACTER,
    payload: character,
  }),

  setFetching: () => ({
    type: Types.SET_FETCHING,
  }),

  errorFetching: (error) =>({
    type: Types.ERROR_FETCHING,
    payload: error,
  }),

  fetchCharacter: (character) => async (dispatch) => {
    dispatch(Creators.setFetching());
    try {
      const [char] = await getCharacter(character);
      dispatch(Creators.saveCharacter(char));
    } catch (error) {
      dispatch(Creators.errorFetching(error.message));
    }
  },
}
