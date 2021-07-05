import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'


const RecipeForm = () => {
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

  // const onChange = e => setRecipe({ ...recipe, [e.target.name]: e.target.value })

  return (
    <div>
      <Form>
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

      <Button>Add Ingredient</Button>
      <Form>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Ingredient"
            name="name"
            value={ingredients.name}
            onchange={onChange}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Amount"
            name="amount"
            value={amount}
            onchange={onChange}
          >
          </Form.Control>
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  )
}

export default RecipeForm
