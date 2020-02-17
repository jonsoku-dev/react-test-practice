import { AUTH_USER } from "../actions/type.js";

const INITIAL_STATE = {
  authenticated: "", // String
  errorMessage: "" // String
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_USER:
      return payload;
    default:
      return state;
  }
};
