import React, { useContext, useEffect } from 'react'
import BrowserContext from '../context/browser/browserContext'
import Recipes from './recipes/Recipes'
import RecipeForm from './recipes/RecipeForm'
// import Recipe from '../components/recipes/Recipe'
import ApiRecipe from '../components/recipes/ApiRecipe'



const Profile = () => {
  const browserContext = useContext(BrowserContext)
  const { getApiRecipes, deleteApiRecipe, apiRecipes, loading } = browserContext


  useEffect(() => {
    getApiRecipes()
    //eslint-disable-next-line
  }, [])


  // if (apiRecipes !== null && apiRecipes.length === 0 && !loading) {
  //   return <h3>Please add a recipe</h3>
  // }
  return (
    <>
      <RecipeForm />

      {apiRecipes !== null && !loading ? (
        <>
          {
            apiRecipes.map(apiRecipe => (
              <ApiRecipe key={apiRecipe._id} apiRecipe={apiRecipe} />
            ))
          }
        </>
      ) : null}
      {/* {recipes !== null && !loading ? (
        <>
          {
            recipes.map(recipe => (
              <recipe key={recipe._id} recipe={recipe} />
            ))
          }
        </>
      ) : null} */}
      <Recipes />
    </>
  )
}

export default Profile
