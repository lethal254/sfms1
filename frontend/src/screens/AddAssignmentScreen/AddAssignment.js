import React, { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import Header from "../../components/Header"
import { submitAssignemt } from "../../redux/actions/assignmentActions"

const AddAssignment = () => {
  const [title, setTitle] = useState("")
  const [unit, setUnit] = useState("")
  const [question, setQuestion] = useState("")

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()
    dispatch(submitAssignemt(title, unit, question))
    setTitle("")
    setUnit("")
    setQuestion("")
  }

  return (
    <div>
      <Header />
      <Container>
        <Form className='signup-form' onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Assignment Title'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <Form.Text className='text-muted'>
              Give the assignment a title
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Unit'
              value={unit}
              onChange={(e) => {
                setUnit(e.target.value)
              }}
            />
            <Form.Text className='text-muted'>Unit</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Enter question'
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value)
              }}
            />
            <Form.Text className='text-muted'>
              Type your question here
            </Form.Text>
          </Form.Group>
          <Button variant='outline-primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AddAssignment
