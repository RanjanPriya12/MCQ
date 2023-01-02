import axios from "axios";
import * as Types from "./action.types";


export const createQuestion = (mcq) => (dispatch) => {
  dispatch({ type: Types.CREATE_MCQ_REQUEST });
  return axios
    .post("http://localhost:5000/api/question/createQuestions", mcq)
    .then((res) => {
      dispatch(
        { type: Types.CREATE_MCQ_SUCCESS, payload: res.data },
        console.log(res.data)
      );
      return Types.CREATE_MCQ_SUCCESS;
    })
    .catch((err) => {
      dispatch(
        {
          type: Types.CREATE_MCQ_FAILURE,
          payload: err.response.data,
        },
        console.log(err.response.data)
      );
    });
};


export const getAllQuestions = (dispatch) => {
    dispatch({ type: Types.GET_ALL_MCQ_REQUEST });
    return axios
      .post("http://localhost:5000/api/question/all")
      .then((res) => {
        dispatch(
          { type: Types.GET_ALL_MCQ_SUCCESS, payload: res.data },
          console.log(res.data)
        );
        return Types.GET_ALL_MCQ_SUCCESS;
      })
      .catch((err) => {
        dispatch(
          {
            type: Types.GET_ALL_MCQ_FAILURE,
            payload: err.response.data,
          },
          console.log(err.response.data)
        );
      });
  };

export const clearError = () => (dispatch) => {
  dispatch({ type: Types.CLEAR_ERROR });
};

export const deleteQuestion = (id) => (dispatch) => {
  dispatch({ type: Types.DELETE_MCQ_REQUEST });
  return axios
    .delete(`http://localhost:5000/api/question/deleteQuestion/${id}`)
    .then((res) => {
      dispatch({ type: Types.DELETE_MCQ_SUCCESS, payload: res.data });
    })
    .then((err) => {
      dispatch({
        type: Types.DELETE_MCQ_FAILURE,
        payload: err.response.data,
      });
    });
};

export const updateQuestion = (id, mcq) => (dispatch) => {
  dispatch({ type: Types.UPDATE_MCQ_REQUEST });
  return axios
    .put(`http://localhost:5000/api/question/update/${id}`, mcq)
    .then((res) => {
      dispatch({
        type: Types.UPDATE_MCQ_SUCCESS,
        payload: res.data,
      });
      return Types.UPDATE_MCQ_SUCCESS;
    })
    .catch((err) => {
      dispatch({
        type: Types.UPDATE_MCQ_FAILURE,
        payload: err.response.data,
      });
      return Types.UPDATE_MCQ_FAILURE;
    });
};

