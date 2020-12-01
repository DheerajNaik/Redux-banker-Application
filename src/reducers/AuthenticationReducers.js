const initialState = {
  isLoggedIn: false,
};
export const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_CHECK":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};
