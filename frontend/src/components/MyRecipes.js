import React, { useContext, useEffect, useState } from 'react'
import BrowserContext from '../context/browser/browserContext'
import Recipes from './recipes/Recipes'
import AuthContext from '../context/auth/AuthContext'
import RecipeForm from './recipes/RecipeForm'
import ApiRecipe from '../components/recipes/ApiRecipe'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../App.css';


const MyRecipes = () => {
  const { loadUser, isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
    //eslint-disable-next-line
  }, [loadUser])

  return (

    <Container>

      <div className="row">
        <RecipeForm />
      </div>

      <div className="ProfileNav row">
        <Nav
          variant="pills"
          className="Nav2 col-12 col-md-6 d-flex justify-content-around">
          <LinkContainer
            to="/profile/myrecipes">
            <Nav.Link
              className="nav2-btn nav-pills"
            >My Recipes</Nav.Link>
          </LinkContainer>

          <LinkContainer
            to="/profile/savedrecipes">
            <Nav.Link
              className="nav2-btn nav-pills"
            >Saved Recipes</Nav.Link>
          </LinkContainer>
        </Nav>
      </div>

      <div className="ProfileRecipe row">
        <Recipes />
      </div>

    </Container>
  )
}

export default MyRecipes
