import React, { useContext, Fragment } from 'react'
import Recipe from './Recipe'
import RecipeContext from '../../context/recipe/recipeContext'



const Recipes = () => {
  const recipeContext = useContext(RecipeContext)

  const { recipes } = recipeContext

  return (
    <>
      {recipes.map(recipe => (
        <Recipe recipe={recipe} />
      ))}

    </>
  )
}

export default Recipes
