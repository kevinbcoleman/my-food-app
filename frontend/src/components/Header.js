import React, { useState } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Header = ({ props }) => {
  // const [state, setstate] = useState(initialState)

  // const handleLogout = () => {

  // }

  return (
    <div >

      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >My-Health-App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/users/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/users/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              <NavDropdown id="username">
                <LinkContainer to="/users/profile">
                  <NavDropdown.Item>My Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav className="mr-auto">
              {!userInfo ?
                <LinkContainer to="/users/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer> : null
              }
              {!userInfo ?
                <LinkContainer to="/users/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer> : null
              }

              {userInfo ?
                <NavDropdown title={userInfo.username} id="username">
                  <LinkContainer to="/users/profile">
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown> : null
              }
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div >
  )
}

export default Header
