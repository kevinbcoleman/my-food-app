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
    <Container className="Profile mx-auto">

      <div className="row">
        <RecipeForm />
      </div>

      <div className="ProfileNav row">
        <Nav
          variant="pills"
          className="Nav Nav2 col-11 col-md-8 col-lg-6 d-flex justify-content-around">

          <LinkContainer
            className="textStyle"
            to="/profile/myrecipes">
            <Nav.Link
              eventKey="profile/myrecipes"
              className="nav2-btn nav-pills"
            // onClick={(() => toggleShow("mine"))}
            >My Recipes</Nav.Link>
          </LinkContainer>

          <LinkContainer
            className="textStyle"
            to="/profile/savedrecipes">
            <Nav.Link
              eventKey="profile/savedrecipes"
              className="nav2-btn nav-pills"
            // onClick={(() => toggleShow("saved"))}
            >Saved Recipes</Nav.Link>
          </LinkContainer>

        </Nav>

      </div>

      {/* <div className="row"> */}
      {/* {savedRecShow ? (
        <div className="col-md-6 ">
          <SavedRecipes />
        </div>
      ) : null}

      {myRecShow ? (
        <div className="col-md-6">
          <MyRecipes />
        </div>
      ) : null} */}
      {/* </div> */}

    </Container>
  )
}

export default Profile
