import React, { useState, useContext } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AuthContext from '../context/auth/AuthContext'
import recipeContext from '../context/recipe/recipeContext'
import '../App.css';


const Header = ({ props }) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, logout, user } = authContext
  const { clearRecipes } = recipeContext

  const onLogout = () => {
    logout()
    clearRecipes()
    props.history.push('/')
  }

  return (
    <>

      <Navbar className="Navbar" bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer className="textStyle" to="/">
            <Navbar.Brand>Food for Life</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">


            {!isAuthenticated ?
              <>
                <LinkContainer className="textStyle" to="/login">
                  <Nav.Link className="ml-auto">Login</Nav.Link>
                </LinkContainer>

                <LinkContainer className="textStyle" to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </> :
              <>
                <LinkContainer className="textStyle" to="/profile">
                  <Nav.Link className="ml-auto">My Profile</Nav.Link>
                </LinkContainer>
                <LinkContainer className="textStyle" to='/'>
                  <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                </LinkContainer>
              </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header
