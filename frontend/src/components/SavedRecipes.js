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


  // const [myRecShow, setMyRecShow] = useState(false)
  // const [savedRecShow, setSavedRecShow] = useState(false)


  // const toggleShow = (option) => {
  //   if (option === "mine") {
  //     setMyRecShow(true)
  //     setSavedRecShow(false)
  //   } else if (option === "saved") {
  //     setMyRecShow(false)
  //     setSavedRecShow(true)
  //   }
  // }


  // const noSavedRec = () => {
  //   if (apiRecipes.length === 0) {
  //     return <h2>No saved recipes.</h2>
  //   }

  // }

  useEffect(() => {
    getApiRecipes()
    //eslint-disable-next-line
  }, [])

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
            className="textStyle"
            to="/profile/myrecipes">
            <Nav.Link
              // eventKey="profile/myrecipes"
              className="nav2-btn nav-pills"
            // onClick={(() => toggleShow("mine"))}
            >My Recipes</Nav.Link>
          </LinkContainer>

          <LinkContainer
            className="textStyle"
            to="/profile/savedrecipes">
            <Nav.Link
              // eventKey="profile/savedrecipes"
              className="nav2-btn nav-pills"
            // onClick={(() => toggleShow("saved"))}
            >Saved Recipes</Nav.Link>
          </LinkContainer>

        </Nav>
      </div>

      <div className="ProfileRecipe row">

        {apiRecipes.length === 0 && !loading ? (
          <div className="text-center mt-2">
            <p>You have not saved any recipes yet.</p>

            <Nav className="d-flex justify-content-center">
              <LinkContainer
                className="textStyle" to="/">
                <Nav.Link className="btn-small nav2-btn nav-pills">Browse Recipes</Nav.Link>
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
