import React, { useContext, Fragment } from 'react'
import Recipe from './Recipe'
import RecipeContext from '../../context/recipe/recipeContext'



const Recipes = () => {
  const recipeContext = useContext(RecipeContext)

  const { recipes } = recipeContext

  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}

    </div>
  )
}

export default Recipes
