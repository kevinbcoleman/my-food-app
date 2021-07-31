import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import Recipe from './Recipe'
import RecipeContext from '../../context/recipe/recipeContext'



const Recipes = () => {
  const recipeContext = useContext(RecipeContext)

  const { recipes, getRecipes, loading } = recipeContext

  useEffect(() => {
    getRecipes()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      {recipes.length === 0 && !loading ? (
        <div className="text-center mt-2">
          <p>You have not added any recipes yet.</p>
        </div>
      ) : null}
      {recipes !== null && !loading ? (
        <>
          {
            recipes.map(recipe => (
              <Recipe key={recipe._id} recipe={recipe} />
            ))
          }
        </>
      ) : <div><p>You do not have any saved recipes.</p></div>}

    </>
  )
}

export default Recipes
