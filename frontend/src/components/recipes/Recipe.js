import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'

const Recipe = ({ recipe }) => {

  const recipeContext = useContext(RecipeContext)
  const { deleteRecipe, setCurrent, clearCurrent } = recipeContext
  const { id, label, cuisineType, ingredients } = recipe

  const onDelete = () => {
    deleteRecipe(id)
    clearCurrent()
  }

  return (
    <>
      <Card>
        <h1>{label}</h1>
        <Card.Body>
          <h2>{cuisineType}</h2>
          <ul>
            {ingredients.map(i => (
              <>
                <li>{i}</li>
              </>
            ))}
          </ul>
          <Button onClick={() => setCurrent(recipe)}>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Recipe
