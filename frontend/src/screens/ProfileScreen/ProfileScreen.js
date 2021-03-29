import React, { useEffect } from "react"
import Header from "../../components/Header"
import { getProfile } from "../../redux/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  Image,
  Table,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"

import { getAnswers } from "../../redux/actions/answersActions"

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userId = useSelector((state) => state.user.userInfo?.id)
  const profile = useSelector((state) => state.profile.profile)
  const assignments = useSelector((state) => state.assignments.all)

  useEffect(() => {
    dispatch(getProfile(userId))
    dispatch(getAnswers())
    if (!userId) {
      history.push("/")
    }
  }, [])

  return (
    <div>
      <Header />
      <Row>
        <Col>
          <Container>
            <Image
              fluid
              className='mb-5'
              style={{ width: "100px", height: "100px" }}
              src='https://cdn.pixabay.com/photo/2020/12/27/12/07/sunrise-5863751_960_720.png'
              roundedCircle
            />
            <h3 className='mb-5'>Welcome {profile?.name}</h3>
            <Form className='signup-form'>
              <Form.Group>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={profile?.email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type='text'
                  placeholder='Enter Full Names'
                  value={profile?.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type='text'
                  placeholder='Enter registration number'
                  value={profile?.regNumber}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control type='password' placeholder='Enter password' />
              </Form.Group>
              <Button variant='outline-primary' type='submit' className='mr-4'>
                Update Profile
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default ProfileScreen
