import axios from "axios"
import {
  SUBMIT_ANSWER_REQUEST,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_FAIL,
  ANSWER_REQUEST,
  ANSWER_SUCCESS,
  ANSWER_FAIL,
} from "../constants/answerConstants"

export const submitAnswer = (assignment, answer) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: SUBMIT_ANSWER_REQUEST })

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
      `http://localhost:8000/addanswer`,
      { assignment, answer },
      config
    )
    dispatch({ type: SUBMIT_ANSWER_SUCCESS, payload: data.success })
  } catch (error) {
    dispatch({ type: SUBMIT_ANSWER_FAIL, payload: error.message })
  }
}

export const getAnswers = (all) => async (dispatch, getState) => {
  if (all) {
    try {
      dispatch({ type: ANSWER_REQUEST })

      const {
        user: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get(
        `http://localhost:8000/allanswers`,

        config
      )
      dispatch({ type: ANSWER_SUCCESS, payload: data.answers })
    } catch (error) {
      dispatch({ type: ANSWER_FAIL, payload: error.message })
    }
  } else {
    try {
      dispatch({ type: ANSWER_REQUEST })

      const {
        user: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get(
        `http://localhost:8000/answers`,

        config
      )
      dispatch({ type: ANSWER_SUCCESS, payload: data.answers })
    } catch (error) {
      dispatch({ type: ANSWER_FAIL, payload: error.message })
    }
  }
}
