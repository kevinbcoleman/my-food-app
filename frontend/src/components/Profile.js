import React, { useContext, useEffect, useState } from 'react'
import BrowserContext from '../context/browser/browserContext'
import AuthContext from '../context/auth/AuthContext'
import Recipes from './recipes/Recipes'
import MyRecipes from './MyRecipes'
import SavedRecipes from './SavedRecipes'
import RecipeForm from './recipes/RecipeForm'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Profile = () => {
  const browserContext = useContext(BrowserContext)
  const [myRecShow, setMyRecShow] = useState(false)
  const [savedRecShow, setSavedRecShow] = useState(false)
  const { loadUser, isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
  }, [loadUser])


  const toggleShow = (option) => {
    if (option === "mine") {
      setMyRecShow(true)
      setSavedRecShow(false)
    } else if (option === "saved") {
      setMyRecShow(false)
      setSavedRecShow(true)
    }
  }

  return (
    <Container className="Profile mx-auto">

      <div className="row">
        <RecipeForm />
      </div>

      <div className="ProfileNav row">
        <Nav
          variant="pills"
          className="Nav Nav2 col-11 col-md-8 col-lg-6 d-flex justify-content-around">

          <LinkContainer
            to="/profile/myrecipes">
            <Nav.Link
              eventKey="profile/myrecipes"
              className="nav2-btn nav-pills"
            >My Recipes</Nav.Link>
          </LinkContainer>

          <LinkContainer
            to="/profile/savedrecipes">
            <Nav.Link
              eventKey="profile/savedrecipes"
              className="nav2-btn nav-pills"
            >Saved Recipes</Nav.Link>
          </LinkContainer>

        </Nav>

      </div>

    </Container>
  )
}

export default Profile
