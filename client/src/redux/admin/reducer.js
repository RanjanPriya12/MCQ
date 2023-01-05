import * as Types from "./action.types";
const initialState = {
  isLoading: false,
  isError: false,
  questions: [],
  question:{},
  isUpdated: {},
};

export const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case Types.GET_ALL_MCQ_REQUEST:
    case Types.CREATE_MCQ_REQUEST:
    case Types.UPDATE_MCQ_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Types.CREATE_MCQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        question: payload.mcq,
      };
    case Types.GET_ALL_MCQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        questions: payload,
      };
    case Types.UPDATE_MCQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isUpdated: payload,
      };
    case Types.GET_ALL_MCQ_FAILURE:
    case Types.CREATE_MCQ_FAILURE:
    case Types.UPDATE_MCQ_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
      };
    case Types.CLEAR_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: null,
        product: null,
      };
    default:
      return state;
  }
};

