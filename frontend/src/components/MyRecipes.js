import React, { useContext, useEffect, useState } from 'react'
import BrowserContext from '../context/browser/browserContext'
import Recipes from './recipes/Recipes'

import RecipeForm from './recipes/RecipeForm'
import ApiRecipe from '../components/recipes/ApiRecipe'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../App.css';


const MyRecipes = () => {
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

      <div className="RecipeLayout row">
        <Recipes />
      </div>

    </Container>
  )
}

export default MyRecipes
