import {
  SUBMIT_ANSWER_REQUEST,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_FAIL,
  ANSWER_REQUEST,
  ANSWER_SUCCESS,
  ANSWER_FAIL,
} from "../constants/answerConstants"

export const submitAnswerReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_ANSWER_REQUEST:
      return { loading: true }
    case SUBMIT_ANSWER_SUCCESS:
      return { loading: false, success: action.payload }
    case SUBMIT_ANSWER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const getAnswersReducer = (state = {}, action) => {
  switch (action.type) {
    case ANSWER_REQUEST:
      return { loading: true }
    case ANSWER_SUCCESS:
      return { loading: false, all: action.payload }
    case ANSWER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
