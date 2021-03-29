import axios from "axios"

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from "../constants/userConstants"

export const signup = (email, name, regNumber, password) => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      "http://localhost:8000/signup",
      { email, name, regNumber, password },
      config
    )
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      "http://localhost:8000/login",
      { email, password },
      config
    )
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error })
  }
}

export const getProfile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST })
    const {
      user: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      `http://localhost:8000/userprofile`,
      config
    )
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: USER_PROFILE_FAIL, payload: error })
  }
}
