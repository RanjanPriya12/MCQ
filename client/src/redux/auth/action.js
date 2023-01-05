import * as Types from "./action.types";
import axios from "axios";

export const loginUser = (payload) => (dispatch) => {
  dispatch({ type: Types.LOGIN_SUCCESS_REQUEST });
  return axios
    .post("http://localhost:5000/api/users/login", payload)
    .then((res) => {
      console.log(res)
      localStorage.setItem('token',JSON.stringify(res.data.token));
      localStorage.setItem('role',JSON.stringify(res.data.user.role));
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
    .post("http://localhost:5000/api/users/register", payload)
    .then((res) => {
      console.log("first",res)
      dispatch({ type: Types.REGISTER_SUCCESS_SUCCESS, payload: res.data });
      return Types.REGISTER_SUCCESS_SUCCESS;
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_SUCCESS_FAILURE,
        payload: err.response.data,
      });
      return Types.REGISTER_SUCCESS_FAILURE;
    });
};



export const userLogout = () => (dispatch) => {
  return axios
    .get("http://localhost:5000/api/users/logout")
    .then((r) => {
      dispatch({ type: Types.USER_LOGOUT_SUCCESS, payload: r.data });
      localStorage.clear();
      return Types.USER_LOGOUT_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: Types.USER_LOGOUT_FAILURE, payload: e });
    });
};
export const clearError = () => (dispatch) => {
  dispatch({ type: Types.CLEAR_ERROR });
};
