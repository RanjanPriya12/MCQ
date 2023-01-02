import * as Types from "./action.types";

const initialState = {
  allQuestions: [],
  isLoading: false,
  isError: false,
};

export const questionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.ALL_MCQ_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Types.ALL_MCQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        allQuestions: payload.questions
      };
    case Types.ALL_MCQ_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    
    case Types.CLEAR_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: null
      };
    default:
      return state;
  }
};

