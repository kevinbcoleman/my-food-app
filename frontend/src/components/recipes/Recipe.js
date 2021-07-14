import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'


const Recipe = ({ recipe }) => {

  const recipeContext = useContext(RecipeContext)
  const { deleteRecipe, setCurrent, clearCurrent, loading, recipes } = recipeContext
  const { _id, label, cuisineType, ingredients = [] } = recipe
  // const { ingredients: [ing_name, amount] } = recipe

  const onDelete = () => {
    deleteRecipe(_id)
    clearCurrent()
  }

  return (
    <>
      <Card>
        <h1 key={uuidv4()}>{label}</h1>
        <Card.Body>
          <h2 key={uuidv4()}>{cuisineType}</h2>
          <ul>
            {ingredients !== loading ? (
              <>
                {
                  ingredients.map((ing) => (
                    <>
                      <li key={uuidv4()}>{ing.amount}</li>
                      <li key={uuidv4()}>{ing.ing_name}</li>
                    </>
                  ))
                }
              </>
            ) : null}
          </ul>
          <Button onClick={() => setCurrent(recipe)}>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </>
  )
}
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default Recipe


