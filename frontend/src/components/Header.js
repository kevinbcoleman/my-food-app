import React, { useState, useContext, useEffect } from 'react'
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AuthContext from '../context/auth/AuthContext'
import recipeContext from '../context/recipe/recipeContext'
import '../App.css';


const Header = () => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, logout, user } = authContext
  const { clearRecipes } = recipeContext
  const [profShow, setProfShow] = useState('')
  const match = useRouteMatch("/")
  const location = useLocation()
  const history = useHistory()

  const getCurrentRoute = () => {
    // if (location.pathname === "/profile" || "/profile/myrecipes" ||
    //   "/profile/savedrecipes") {
    //   setProfShow('')
    // } else {
    //   setProfShow('Profile')
    // }
  }

  useEffect(() => {
    if (location.pathname === "/") {
      setProfShow('Profile')
    } else if (location.pathname.includes('/prof')) {
      setProfShow('')
    }
    //  === "/profile" || "/profile/myrecipes" || "/profile/savedrecipes") {
  }
    // getCurrentRoute()
    , [location])


  const onLogout = () => {
    logout()
    clearRecipes()
    history.push('/')
  }

  // const handleShow = () => {
  //   setProfVis("visible")
  // }

  // const handleHide = () => {
  //   setProfVis("hidden")
  // }

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
                  <Nav.Link className="ml-auto p-link">{profShow}</Nav.Link>
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
