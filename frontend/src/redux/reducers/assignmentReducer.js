import {
  SUBMIT_ASSIGNMENT_REQUEST,
  SUBMIT_ASSIGNMENT_SUCCESS,
  SUBMIT_ASSIGNMENT_FAIL,
  ASSIGNMENT_REQUEST,
  ASSIGNMENT_SUCCESS,
  ASSIGNMENT_FAIL,
} from "../constants/assignmentConstants"

export const submitAssignemtReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_ASSIGNMENT_REQUEST:
      return { loading: true }
    case SUBMIT_ASSIGNMENT_SUCCESS:
      return { loading: false, success: action.payload }
    case SUBMIT_ASSIGNMENT_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const getAssignemtReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSIGNMENT_REQUEST:
      return { loading: true }
    case ASSIGNMENT_SUCCESS:
      return { loading: false, all: action.payload }
    case ASSIGNMENT_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
