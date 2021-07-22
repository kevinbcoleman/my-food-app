import React, { useContext, useEffect } from 'react'
import BrowserContext from '../context/browser/browserContext'
import Recipes from './recipes/Recipes'
import RecipeForm from './recipes/RecipeForm'
import ApiRecipe from '../components/recipes/ApiRecipe'



const Profile = () => {
  const browserContext = useContext(BrowserContext)
  const { getApiRecipes, apiRecipes, loading } = browserContext


  useEffect(() => {
    getApiRecipes()
    //eslint-disable-next-line
  }, [])



  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="Profile">
      <RecipeForm />
=======
=======
>>>>>>> parent of 0cf6ba3... rev
=======
>>>>>>> parent of 0cf6ba3... rev
    <div className="Profile row mx-auto">
      <div className="col-12">
        <RecipeForm />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 0243a17... bugs

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
=======
=======
>>>>>>> parent of 0cf6ba3... rev

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

      {savedRecShow ? (
        <div className="col-md-4">
          <SavedRecipes />
        </div>
>>>>>>> parent of 0cf6ba3... rev
      ) : null}
      <Recipes />
    </div>
  )
}

export default Profile
