import * as Types from "./action.types";
import axios from "axios";

export const loginUser = (params) => (dispatch) => {
  console.log(params)
  dispatch({ type: Types.LOGIN_SUCCESS_REQUEST });
  return axios
    .post("http://localhost:5000/api/users/login", params)
    .then((res) => {
      dispatch({ type: Types.LOGIN_SUCCESS_SUCCESS, payload: res.data });
      return Types.LOGIN_SUCCESS_SUCCESS;
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_SUCCESS_FAILURE,
        payload: err.response.data,
      });
      return Types.LOGIN_SUCCESS_FAILURE;
    });
};

export const registerUser = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: Types.REGISTER_SUCCESS_REQUEST });
  return axios
    .post("http://localhost:5000/api/users/register", payload, {
      headers: {
        "content-type": "multipart/formdata",
      },
    })
    .then((r) => {
      dispatch({ type: Types.REGISTER_SUCCESS_SUCCESS, payload: r.data });
      return Types.REGISTER_SUCCESS_SUCCESS;
    })
    .catch((e) => {
      dispatch({
        type: Types.REGISTER_SUCCESS_FAILURE,
        payload: e.response.data,
      });
      return Types.REGISTER_SUCCESS_FAILURE;
    });
};



export const userLogout = () => (dispatch) => {
  return axios
    .get("http://localhost:5000/api/users/logout")
    .then((r) => {
      dispatch({ type: Types.USER_LOGOUT_SUCCESS, payload: r.data });
      return Types.USER_LOGOUT_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: Types.USER_LOGOUT_FAILURE, payload: e });
    });
};
export const clearError = () => (dispatch) => {
  dispatch({ type: Types.CLEAR_ERROR });
};
