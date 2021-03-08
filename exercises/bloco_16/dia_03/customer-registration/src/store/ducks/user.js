export const Types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export const Creators = {
  login: (user) => ({
    type: Types.LOGIN,
    payload: user,
  }),
  logout: () => ({
    type: Types.LOGOUT,
  }),
};

const INITIAL_STATE = {
  isAuthenticated: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.LOGIN: {
    return { ...state, isAuthenticated: true };
  }
  case Types.LOGOUT: {
    return { ...state, isAuthenticated: false };
  }
  default: return state;
  }
};

export default user;
