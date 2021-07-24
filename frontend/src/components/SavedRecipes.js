import React, { useContext, useEffect, useState } from 'react'
import BrowserContext from '../context/browser/browserContext'
import RecipeForm from './recipes/RecipeForm'
import ApiRecipe from '../components/recipes/ApiRecipe'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../App.css';


const SavedRecipes = () => {
  const browserContext = useContext(BrowserContext)
  const { getApiRecipes, apiRecipes, loading } = browserContext
  const [myRecShow, setMyRecShow] = useState(false)
  const [savedRecShow, setSavedRecShow] = useState(false)



  const toggleShow = (option) => {
    if (option === "mine") {
      setMyRecShow(true)
      setSavedRecShow(false)
    } else if (option === "saved") {
      setMyRecShow(false)
      setSavedRecShow(true)
    }
  }

  useEffect(() => {
    getApiRecipes()
    //eslint-disable-next-line
  }, [])

  return (

    <>
      <div className="row">
        <RecipeForm />
      </div>

      <Container classname="row">
        <Nav
          variant="pills"
          className="Nav Nav2 col-11 col-md-8 col-lg-6 d-flex justify-content-around">

          <LinkContainer
            className="textStyle"
            to="/profile/myrecipes">
            <Nav.Link
              eventKey="profile/myrecipes"
              className="nav2-btn nav-pills"
              onClick={(() => toggleShow("mine"))}>My Recipes</Nav.Link>
          </LinkContainer>

          <LinkContainer
            className="textStyle"
            to="/profile/savedrecipes">
            <Nav.Link
              eventKey="profile/savedrecipes"
              className="nav2-btn nav-pills"
              onClick={(() => toggleShow("saved"))}>Saved Recipes</Nav.Link>
          </LinkContainer>

        </Nav>
      </Container>

      {apiRecipes !== null && !loading ? (
        <div className="RecipeLayout row">
          {
            apiRecipes.map(apiRecipe => (
              <ApiRecipe key={apiRecipe._id} apiRecipe={apiRecipe} />
            ))
          }
        </div>
      ) : null}
    </>
  )
}

export default SavedRecipes
