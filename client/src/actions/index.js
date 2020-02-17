import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./type";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:5000/signup",
      formProps
    );
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email in use"
    });
  }
};
