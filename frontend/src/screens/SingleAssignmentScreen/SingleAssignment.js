import React, { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import Header from "../../components/Header"
import { submitAnswer } from "../../redux/actions/answersActions"

const SingleAssignment = ({ match }) => {
  const assignments = useSelector((state) => state.assignments.all)

  const [answer, setAnswer] = useState("")
  const dispatch = useDispatch()

  const assignment = assignments?.filter(
    (assignment) => assignment._id === match.params.id
  )[0]

  const onFormSubmit = (e) => {
    e.preventDefault()
    dispatch(submitAnswer(match.params.id, answer))
    setAnswer("")
  }

  return (
    <div>
      <Header />
      <Container style={{ width: "80%" }}>
        <Row>
          <Col>
            <h2 className='mb-4'>Assignment title: {assignment?.title}</h2>
            <h2 className='mb-4'>Assignment name: {assignment?.unit}</h2>
            <h2 className='mb-4'>Lecturer: {assignment?.lec.name}</h2>
          </Col>
          <Col>
            <p className='mb-4' clas>
              Q. {assignment?.question}
            </p>
            <Form className='signup-form' onSubmit={onFormSubmit}>
              <Form.Group>
                <Form.Control
                  as='textarea'
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows={5}
                  placeholder='Enter your answer'
                />
              </Form.Group>
              <p>Or submit a file</p>
              <Form.Group>
                <Form.Control type='file' placeholder='Enter Full Names' />
              </Form.Group>

              <Button variant='outline-primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SingleAssignment
