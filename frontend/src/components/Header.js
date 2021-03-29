import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector } from "react-redux"

const Header = () => {
  const user = useSelector((state) => state.user.userInfo)

  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container fluid>
          <LinkContainer to='/profile'>
            <Navbar.Brand href='/profile'>
              Student Assignment Management System
            </Navbar.Brand>
          </LinkContainer>

          <Nav className='ml-auto'>
            <LinkContainer to='/profile'>
              <Nav.Link>My Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/assignments'>
              <Nav.Link>Assignments</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/grades'>
              <Nav.Link>Grades</Nav.Link>
            </LinkContainer>
            {user?.isLec ? (
              <LinkContainer to='/addassignment'>
                <Nav.Link>Add Assignment</Nav.Link>
              </LinkContainer>
            ) : (
              false
            )}
            {user?.isLec ? (
              <LinkContainer to='/submitedassignment'>
                <Nav.Link>Submited Assignments</Nav.Link>
              </LinkContainer>
            ) : (
              false
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
