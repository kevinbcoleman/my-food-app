import React, { useContext, useEffect } from 'react'
import BrowserContext from '../context/browser/browserContext'
import Recipe from '../components/recipes/Recipe'


const Profile = () => {
  const browserContext = useContext(BrowserContext)
  const { getApiRecipes, apiRecipes, loading } = browserContext

  useEffect(() => {
    getApiRecipes()
    //eslint-disable-next-line
  }, [])


  // if (apiRecipes !== null && apiRecipes.length === 0 && !loading) {
  //   return <h3>Please add a recipe</h3>
  // }
  return (
    <>
      {apiRecipes !== null && !loading ? (
        <>
          {
            apiRecipes.map(recipe => (
              <Recipe key={recipe._id} recipe={recipe} />
            ))
          }
        </>
      ) : null}

    </>
  )
}

export default Profile
