import React, { useEffect } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import Header from "../../components/Header"
import { getAnswers } from "../../redux/actions/answersActions"
import { getAssignments } from "../../redux/actions/assignmentActions"

import { Check2Circle, XCircleFill } from "react-bootstrap-icons"

const AssignmentsScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const assignments = useSelector((state) => state.assignments.all)

  const answers = useSelector((state) => state.answers.all)

  const findAnswer = (id) => {
    const found = answers.find((answer) => answer.assignment === id)
    if (found) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    dispatch(getAssignments())
    dispatch(getAnswers())
  }, [])
  return (
    <div>
      <Header />
      <Container fluid>
        <h4 className='mt-5'>All Assignment</h4>

        <Table striped bordered hover variant='dark' className='mt-5'>
          <thead>
            <tr>
              <th>Unit</th>
              <th>Asignment</th>
              <th>Lecturer</th>
              <th>Completed</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {assignments?.map((assignment) => (
              <tr key={assignment._id}>
                <td>{assignment.unit}</td>
                <td>{assignment.title}</td>
                <td>{assignment.lec.name}</td>
                <td>
                  {findAnswer(assignment._id) ? (
                    <Check2Circle />
                  ) : (
                    <XCircleFill />
                  )}
                </td>

                <td>
                  <Button
                    variant='outline-primary'
                    onClick={(e) => {
                      history.push(`/assignment/${assignment._id}`)
                    }}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default AssignmentsScreen
