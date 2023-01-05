import * as Types from "./action.types";
import axios from "axios";

export const getQuestions =()=>(dispatch) => {
    dispatch({ type: Types.ALL_MCQ_REQUEST });
    return axios
      .get(`http://localhost:5000/api/question/all/questions`)
      .then((res) =>{
      console.log(res.data)
        dispatch({ type: Types.ALL_MCQ_SUCCESS, payload: res.data })}
      )
      .catch((err) =>
        dispatch({ type: Types.ALL_MCQ_FAILURE, payload: err.response.data })
      );
  };



export const clearError = () => async (dispatch) => {
  dispatch({ type: Types.CLEAR_ERROR });
};

