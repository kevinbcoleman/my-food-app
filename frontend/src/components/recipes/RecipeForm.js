import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'
import { v4 as uuidv4 } from 'uuid'


const RecipeForm = () => {
  const recipeContext = useContext(RecipeContext)

  const { addRecipe, current, updateRecipe, clearCurrent } = recipeContext

  useEffect(() => {
    if (current !== null) {
      let ingList = current.ingredients.map(ing => ing)
      setIngredients(ingList)
      console.log(ingredients)
      console.log(ingList)
      setRecipe(current)
    } else {
      // setRecipe({
      //   label: '',
      //   cuisineType: '',
      //   ingredients: []
      // })
    }
  }, [recipeContext, current])

  const [recipe, setRecipe] = useState({
    label: '',
    cuisineType: '',
    ingredients: []
  })
  const [ingredients, setIngredients] = useState([
    { ing_name: '', amount: '' }
  ])

  const { label, cuisineType } = recipe

  const addField = () => {
    return ingredients.map((ing, ind) => (
      <div key={ind}>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
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
    setIngredients(prevState => ([
      ...prevState, { ing_name: '', amount: '' }
    ]))
  }

  const onSubmit = e => {
    e.preventDefault()
    if (current === null) {
      addRecipe(recipe)
      console.log(recipe)
    } else {
      updateRecipe(recipe)
    }
    clearAll()
    setIngredients([
      { ing_name: '', amount: '' }
    ])
    setRecipe({
      label: '',
      cuisineType: '',
      ingredients: []
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


  // const handleIngChange = (name, ind) => e => {
  //   setIngredients(
  //     ingredients.map(ing =>
  //       ing.ing_name === ind ? { ...ing, name: e.target.value } : ing
  //     )
  //   )
  //   console.log(ingredients)
  //   console.log(ind)
  // }
  // const handleIngChange = ind => e => {
  //   setIngredients(newIng)
  // }
  // const handleIngChange = (ind, e) => {
  //   const ingreds = e.target.value
  //   const fullIngreds = ingreds.split(',')
  //   setRecipe({
  //     ...recipe,
  //     ingredients: fullIngreds
  //   })
  // }
