import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'


const RecipeForm = () => {

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

  const [recipe, setRecipe] = useState({
    label: '',
    cuisineType: '',
    ingredients: []
  })

  const { label, cuisineType, ingredients } = recipe


  const handleChange = e => setRecipe({
    ...recipe,
    [e.target.name]: e.target.value,
  })

  const handleIngChange = e => {
    const ingreds = e.target.value
    console.log(ingreds)
    const fullIngreds = ingreds.split(',')
    setRecipe({
      ...recipe,
      ingredients: fullIngreds
    })
  }

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

        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Ingredients"
            name="ingredients"
            value={ingredients}
            onChange={handleIngChange}
          >
          </Form.Control>
        </Form.Group>

        <Button
          type="submit">{current ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </>
  )
}

export default RecipeForm
