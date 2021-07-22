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
    <div className="Profile">
      <RecipeForm />
=======
    <div className="Profile row mx-auto">
      <div className="col-12">
        <RecipeForm />
      </div>
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
      ) : null}
      <Recipes />
    </div>
  )
}

export default Profile
