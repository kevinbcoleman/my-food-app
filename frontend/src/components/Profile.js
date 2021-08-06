import React, { useContext, useEffect, useState } from 'react'
import BrowserContext from '../context/browser/browserContext'
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

    <div className="Profile">
      <RecipeForm />

    <div className="Profile row mx-auto">

      {/* <div className="col-12 row"> */}
      <RecipeForm />
      {/* </div> */}

      <Container className="ProfileNav">
        <Navbar className="Navbar Nav2">

      <div className="col-12">
        <RecipeForm />
      </div>

    <div className="Profile">
      <RecipeForm />

      <h2>My Recipes</h2>
      <h2>Saved Recipes</h2>
      {apiRecipes !== null && !loading ? (
        <>
          {
            apiRecipes.map(apiRecipe => (
              <ApiRecipe key={apiRecipe._id} apiRecipe={apiRecipe} />
            ))
          }
        </>

      <Container>
        <Navbar className="Navbar Nav2" bg="light" expand="lg" collapseOnSelect>


          <LinkContainer className="textStyle" to="/profile/myrecipes">
            <Nav.Link onClick={(() => toggleShow("mine"))}>My Recipes</Nav.Link>
          </LinkContainer>

          <LinkContainer className="textStyle" to="/profile/savedrecipes">
            <Nav.Link onClick={(() => toggleShow("saved"))}>Saved Recipes</Nav.Link>
          </LinkContainer>

        </Navbar>
      </Container>
      {/* <div className="row"> */}
      {savedRecShow ? (
        <div className="col-md-6 ">
          <SavedRecipes />
        </div>

      ) : null}

      {myRecShow ? (
        <div className="col-md-6">
          <MyRecipes />
        </div>

      ) : null}
      {/* </div> */}
    </div>
  )
}

export default Profile
