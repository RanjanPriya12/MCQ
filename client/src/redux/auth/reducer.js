import * as Types from "./action.types";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: null,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.LOGIN_SUCCESS_REQUEST:
    case Types.REGISTER_SUCCESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Types.LOGIN_SUCCESS_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAuth: true,
        user: payload,
      };
    case Types.REGISTER_SUCCESS_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        user: payload,
      };
    case Types.LOGIN_SUCCESS_FAILURE:
    case Types.REGISTER_SUCCESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
      };
    case Types.USER_LOGOUT_SUCCESS:
      return {
        isLoading: false,
        isAuth: false,
        user: null,
      };
    case Types.USER_LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
      };
    case Types.CLEAR_ERROR:
      return {
        ...state,
        isError: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

