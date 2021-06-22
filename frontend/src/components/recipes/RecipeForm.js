import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'


const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    label: '',
    cuisineType: '',
    ingredients: []
  })

  const { label, cuisineType, ingredients } = recipe

  return (
    <Form>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control>

        </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default RecipeForm
