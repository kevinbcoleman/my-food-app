import React, { useState, useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'


const RecipeForm = () => {
  const recipeContext = useContext = useContext(RecipeContext)

  const [recipe, setRecipe] = useState({
    label: '',
    cuisineType: '',
  })
  const [ingredients, setIngredients] = useState({
    name: '',
    amount: ''
  })
  const { label, cuisineType } = recipe
  const { name, amount } = recipe

  const onSubmit = e => {
    e.preventDefault()
    recipeContext.addRecipe(recipe)
    setRecipe({
      label: '',
      cuisineType: '',
    })
  }
  // const onChange = e => setRecipe({ ...recipe, [e.target.name]: e.target.value })

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Name of dish?"
            // name="label"
            value={label}
            onChange={(e) => setRecipe({ ...recipe, label: e.target.value })}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Type of cuisine?"
            // name="cuisineType"
            value={cuisineType}
            onChange={(e) => setRecipe({ ...recipe, cuisineType: e.target.value })}
          >
          </Form.Control>
        </Form.Group>
        <Button type="submit">Submit Dish</Button>
      </Form>

      <Button className="mt-5">Add Ingredient</Button>
      <Form>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Ingredient"
            // name="name"
            value={name}
            onChange={(e) => setIngredients({ ...recipe, name: e.target.value })}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Amount"
            // name="amount"
            value={amount}
            onChange={(e) => setIngredients({ ...recipe, amount: e.target.value })}
          >
          </Form.Control>
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  )
}

export default RecipeForm
