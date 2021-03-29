import React from "react"
import Nav from "./components/Header"
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen"
import AddAssignment from "./screens/AddAssignmentScreen/AddAssignment"
import AssignmentsScreen from "./screens/AssignmentsScreen/AssignmentsScreen"
import SingleAssignment from "./screens/SingleAssignmentScreen/SingleAssignment"
import SubmitedAssignment from "./screens/SubmitedAssignments/SubmitedAssignments"

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' component={SignUpScreen} exact />
        <Route path='/login' component={LoginScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/assignments' component={AssignmentsScreen} />
        <Route path='/addassignment' component={AddAssignment} />
        <Route path='/assignment/:id' component={SingleAssignment} />
        <Route path='/submitedassignment' component={SubmitedAssignment} />
      </Switch>
    </div>
  )
}
export default App
