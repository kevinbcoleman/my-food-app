import React, { useContext, useEffect } from 'react'
import Recipe from './Recipe'
import RecipeContext from '../../context/recipe/recipeContext'



const Recipes = () => {
  const recipeContext = useContext(RecipeContext)

  const { recipes, getRecipes, loading } = recipeContext

  useEffect(() => {
    getRecipes()
    //eslint-disable-next-line
  }, [])

  if (recipes !== null && recipes.length === 0 && !loading) {
    return <h3>Please add a recipe</h3>
  }
  return (
    <>
      {recipes !== null && !loading ? (
        <>
          {
            recipes.map(recipe => (
              <Recipe key={recipe._id} recipe={recipe} />
            ))
          }
        </>
      ) : null}

    </>
  )
}

export default Recipes
