import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'
import { v4 as uuidv4 } from 'uuid'


const RecipeForm = () => {
  let ingList
  const recipeContext = useContext(RecipeContext)

  const { addRecipe, current, updateRecipe, clearCurrent } = recipeContext

  const setIngState = () => {
    setIngredients([...ingList])
    console.log(ingredients)
  }

  useEffect(() => {
    if (current !== null) {
      ingList = current.ingredients.map((ing) => (ing))
      setIngState()
      // ingList = current.ingredients.map((ing) => (ing))
      // setIngredients(ingList)
      // setIngredients(ingredients => [...ingredients, [...ingList]])
      setRecipe(current)
      console.log(recipe)
      console.log(ingredients)
    } else {
      setRecipe({
        label: '',
        cuisineType: '',
        ingredients: ingredients
      })
    }

  }, [recipeContext, current])


  const [recipe, setRecipe] = useState({
    label: '',
    cuisineType: '',
    ingredients: [
      // { ing_name: '', amount: '' }
    ]
  })
  const [ingredients, setIngredients] = useState([
    {
      // ing_name: '', amount: '' 
    }
  ])


  const { label, cuisineType } = recipe

  const addField = () => {
    return ingredients.map((ing, ind) => (
      <div key={ind}>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            id={uuidv4()}
            type="text"
            placeholder="Name"
            name="ing_name"
            value={ing.ing_name || ''}
            onChange={(e) => {
              ing.ing_name = e.target.value
              setIngredients([...ingredients])
              setRecipe({ ...recipe, ingredients: ingredients })
            }}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            id={uuidv4()}
            type="text"
            placeholder="Amount"
            name="amount"
            value={ing.amount || ''}
            onChange={(e) => {
              ing.amount = e.target.value
              setIngredients([...ingredients])
              setRecipe({ ...recipe, ingredients: ingredients })
            }}
          >
          </Form.Control>
        </Form.Group>
      </div>
    ))
  }


  const handleChange = e => setRecipe({
    ...recipe,
    [e.target.name]: e.target.value,
  })

  const addIng = () => {
    console.log(ingredients)
    console.log(recipe)
    setIngredients(prevState => ([
      ...prevState, {}
    ]))
  }

  const onSubmit = e => {
    e.preventDefault()
    if (current === null) {
      addRecipe(recipe)
    } else {
      updateRecipe(recipe)
    }
    console.log(recipe)
    console.log(ingredients)
    clearAll()
    ingList = null
    setIngredients([
      {}
    ])

    setRecipe({
      label: '',
      cuisineType: '',
      ingredients: ingredients
    })


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

        <h2>Ingredients:</h2>

        {addField()}
        <Button
          type="button"
          value="add more"
          onClick={addIng}
        >Add another Ingredient</Button>

        <Button
          type="submit">{current ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </>
  )
}

export default RecipeForm


