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
    <div className="Profile">
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
      <Recipes />
    </div>
  )
}

export default Profile
