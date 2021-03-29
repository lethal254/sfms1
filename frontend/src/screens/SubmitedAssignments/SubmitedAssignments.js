import React, { useEffect } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import Header from "../../components/Header"
import { getAnswers } from "../../redux/actions/answersActions"

const SubmitedAssignment = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const assignments = useSelector((state) => state.assignments.all)

  const answers = useSelector((state) => state.answers.all)

  useEffect(() => {
    dispatch(getAnswers(true))
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
              <th>Student</th>

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
                  <Button
                    variant='outline-primary'
                    onClick={(e) => {
                      history.push(`/assignment/${assignment._id}`)
                    }}>
                    View Answer
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

export default SubmitedAssignment
