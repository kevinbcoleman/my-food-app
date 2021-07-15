import React, { useState, useContext } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AuthContext from '../context/auth/AuthContext'

const Header = ({ props }) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, logout, user } = authContext

  const onLogout = () => {
    logout()
    props.history.push('/')
  }

  return (
    <div >

      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >My-Health-App</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">


            {!isAuthenticated ?
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </> :
              <>
                <LinkContainer to="/profile">
                  <Nav.Link>My Profile</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/'>
                  <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                </LinkContainer>
              </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div >
  )
}

export default Header
