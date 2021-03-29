import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  userLoginReducer,
  userProfileReducer,
  userSignUpReducer,
} from "./reducers/userReducer"
import {
  getAssignemtReducer,
  submitAssignemtReducer,
} from "./reducers/assignmentReducer"

import {
  submitAnswerReducer,
  getAnswersReducer,
} from "./reducers/answersReducer"

const reducer = combineReducers({
  user: userLoginReducer,
  profile: userProfileReducer,
  userSignUp: userSignUpReducer,
  assignmentSubmited: submitAssignemtReducer,
  assignments: getAssignemtReducer,
  submitAnswers: submitAnswerReducer,
  answers: getAnswersReducer,
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  user: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
