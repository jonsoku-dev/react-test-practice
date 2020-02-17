import { AUTH_USER, AUTH_ERROR } from "../actions/type.js";

const INITIAL_STATE = {
  authenticated: "", // String
  errorMessage: "" // String
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: payload
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: payload
      };
    default:
      return state;
  }
};
