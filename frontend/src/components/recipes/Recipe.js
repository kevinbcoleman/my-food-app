import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'


const Recipe = ({ recipe }) => {

  const recipeContext = useContext(RecipeContext)
  const { deleteRecipe, setCurrent, clearCurrent } = recipeContext
  const { _id, label, cuisineType, ingredients } = recipe
<<<<<<< HEAD
  // const { ingredients: [ing_name, amount] } = recipe
=======
>>>>>>> parent of c05e024... bugs in update


  const onDelete = () => {
    deleteRecipe(_id)
    clearCurrent()
  }

  return (
    <>
      <Card>
        <h1>{label}</h1>
        <Card.Body>
          <h2>{cuisineType}</h2>
          <ul>
<<<<<<< HEAD
            {ingredients.map((i, index) => (
              <div key={index}>
                <li>{i.amount}</li>
                <li>{i.ing_name}</li>
                {/* <li key={uuidv4()}>{i.amount}</li>
                <li key={uuidv4()}>{i.ing_name}</li> */}
              </div>
=======
            {ingredients.map(i => (
              <>
                <li>{i.amount}</li>
                <li>{i.ing_name}</li>
              </>
>>>>>>> parent of c05e024... bugs in update
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
