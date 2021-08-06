import React, { useContext, useEffect, useState } from 'react'
import BrowserContext from '../context/browser/browserContext'
import AuthContext from '../context/auth/AuthContext'
import RecipeForm from './recipes/RecipeForm'
import ApiRecipe from '../components/recipes/ApiRecipe'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../App.css';


const SavedRecipes = () => {
  const browserContext = useContext(BrowserContext)
  const { getApiRecipes, apiRecipes, loading } = browserContext
  const { loadUser, isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    getApiRecipes()
    loadUser()
    //eslint-disable-next-line
  }, [loadUser])

  const noSavedRec = apiRecipes

  return (
    <Container>

      <div className="row">
        <RecipeForm />
      </div>

      <div className="ProfileNav row">
        <Nav
          variant="pills"
          className="Nav Nav2 d-flex justify-content-around">

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

        {apiRecipes.length === 0 && !loading ? (
          <div className="text-center">
            <p>You have not saved any recipes yet.</p>

            <Nav className="d-flex justify-content-center">
              <LinkContainer
                className="textStyle" to="/">
                <Nav.Link className="btn btn-small nav2-btn nav-pills">Browse Recipes</Nav.Link>
              </LinkContainer>
            </Nav>

          </div>
        ) : null}

        {apiRecipes !== null && !loading ? (
          <>
            {
              apiRecipes.map(apiRecipe => (
                <ApiRecipe key={apiRecipe._id} apiRecipe={apiRecipe} />
              ))
            }
          </>
        ) : null}
      </div>


    </Container>
  )
}

export default SavedRecipes
