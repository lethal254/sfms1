import axios from "axios"

import {
  SUBMIT_ASSIGNMENT_REQUEST,
  SUBMIT_ASSIGNMENT_SUCCESS,
  SUBMIT_ASSIGNMENT_FAIL,
  ASSIGNMENT_REQUEST,
  ASSIGNMENT_SUCCESS,
  ASSIGNMENT_FAIL,
} from "../constants/assignmentConstants"

export const submitAssignemt = (title, unit, question) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: SUBMIT_ASSIGNMENT_REQUEST })

    const {
      user: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(
      `http://localhost:8000/addassignment`,
      { title, unit, question },
      config
    )
    dispatch({ type: SUBMIT_ASSIGNMENT_SUCCESS, payload: data.success })
  } catch (error) {
    dispatch({ type: SUBMIT_ASSIGNMENT_FAIL, payload: error.message })
  }
}

export const getAssignments = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ASSIGNMENT_REQUEST })

    const {
      user: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      `http://localhost:8000/assignments`,
      config
    )
    dispatch({ type: ASSIGNMENT_SUCCESS, payload: data.assignments })
    console.log(data)
  } catch (error) {
    dispatch({ type: ASSIGNMENT_FAIL, payload: error.message })
  }
}
