import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import "./LoginScreen.css"
import { login } from "../../redux/actions/userActions"
import { useHistory } from "react-router-dom"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user.userInfo)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    setEmail("")
    setPassword("")
    history.push("/profile")
  }
  useEffect(() => {
    if (user?.id) {
      history.push("/profile")
    }
  }, [history, user])

  return (
    <div className='container'>
      <h1>Login</h1>
      <Form className='signup-form' onSubmit={onFormSubmit}>
        <Form.Group>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <Form.Text className='text-muted'>
            Do not share your password with anyone
          </Form.Text>
        </Form.Group>
        <Button variant='outline-primary' type='submit'>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginScreen
