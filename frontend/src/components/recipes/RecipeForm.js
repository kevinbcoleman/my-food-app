import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'


const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    label: '',
    cuisineType: '',
    ingredients: [
      // {
      //   ing_name: '',
      //   amount: ''
      // }
    ]
  })

  const [ingredients, setIngredients] = useState({
    ing_name: '',
    amount: ''
  })

  const recipeContext = useContext(RecipeContext)

  const { addRecipe, current, updateRecipe, clearCurrent } = recipeContext

  useEffect(() => {
    if (current !== null) {
      setRecipe(current)
    } else {
      setRecipe({
        label: '',
        cuisineType: '',
        ingredients: []
      })
    }
  }, [recipeContext, current])


  const { label, cuisineType } = recipe
  const { ing_name, amount } = ingredients


  const handleChange = e => setRecipe({
    ...recipe,
    [e.target.name]: e.target.value,
  })

  const handleIngChange = e => setIngredients({
    ...ingredients,
    [e.target.name]: e.target.value
  })


  const onSubmit = e => {
    e.preventDefault()
    if (current === null) {
      addRecipe(recipe)
    } else {
      updateRecipe(recipe)
    }
    clearAll()
    // setRecipe({
    //   label: '',
    //   cuisineType: '',
    //   ingredients: []
    // })
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <>
      <h2>{current ? 'Edit Recipe' : 'Add Recipe'}</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Name of dish?"
            name="label"
            value={label}
            onChange={handleChange}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Type of cuisine?"
            name="cuisineType"
            value={cuisineType}
            onChange={handleChange}
          >
          </Form.Control>
        </Form.Group>

        <h3>INGREDIENTS:</h3>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="ing_name"
            value={ing_name}
            onChange={handleIngChange}
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
            onChange={handleIngChange}
          >
          </Form.Control>
        </Form.Group>
        <Button on>Add another ingredient</Button>
        <Button
          type="submit">{current ? 'Update' : 'Submit Dish'}
        </Button>
      </Form>
    </>
  )
}

export default RecipeForm
