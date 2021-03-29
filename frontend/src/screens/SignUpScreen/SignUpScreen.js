import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useHistory } from "react-router-dom"
import "./SignUpScreen.css"
import { useDispatch, useSelector } from "react-redux"
import { signup } from "../../redux/actions/userActions"

const SignUpScreen = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [regNumber, setRegNumber] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userInfo)

  const onFormSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(email, name, regNumber, password))
    setEmail("")
    setName("")
    setRegNumber("")
    setPassword("")
    history.push("/login")
  }

  useEffect(() => {
    if (user?.id) {
      history.push("/profile")
    }
  }, [history, user])

  return (
    <div className='container'>
      <h1>SignUp</h1>
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
            type='text'
            placeholder='Enter Full Names'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={regNumber}
            onChange={(e) => {
              setRegNumber(e.target.value)
            }}
            type='text'
            placeholder='Enter registration number'
          />
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
          SignUp
        </Button>
        <span className='or'>Or</span>
        <LinkContainer to='/login'>
          <Button variant='outline-primary'>Login</Button>
        </LinkContainer>
      </Form>
    </div>
  )
}

export default SignUpScreen
