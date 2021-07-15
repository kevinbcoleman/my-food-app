import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'
import { v4 as uuidv4 } from 'uuid'


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
        ingredients: [{
          ing_name: '',
          amount: ''
        }]
      })
    }

  }, [recipeContext, current])


  const [recipe, setRecipe] = useState({
    label: '',
    cuisineType: '',
    ingredients: [{
      ing_name: '',
      amount: ''
    }]
  })

  const { label, cuisineType, ingredients = [] } = recipe
  // const { _id } = ingredients
  const addField = () => {
    return ingredients.map((ing, index) => (
      <div key={index}>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="ing_name"
            value={ing.ing_name}
            onChange={(e) => setRecipe({
              ingredients: recipe.ingredients.map(ing => ({
                ...ing,
                ing_name:
                  e.target.defaultValue === ing.ing_name ?
                    e.target.value : ing.ing_name
              }))
            })}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Amount"
            name="amount"
            value={ing.amount}
            onChange={(e) => setRecipe({
              ingredients: recipe.ingredients.map(ing => ({
                ...ing,
                amount:
                  e.target.defaultValue === ing.amount ?
                    e.target.value : ing.amount
              }))
            })}
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

  // const handleChangeName = e => setRecipe({
  //   ingredients: recipe.ingredients.map(ing => ({
  //     ...ing,
  //     ing_name:
  //       e.target.defaultValue === ing.ing_name ?
  //         e.target.value : ing.ing_name
  //   }))
  // })

  // const handleChangeAmount = e => setRecipe({
  //   ingredients: recipe.ingredients.map(ing => ({
  //     ...ing,
  //     amount:
  //       e.target.defaultValue === ing.amount ?
  //         e.target.value : ing.amount
  //   }))
  // })



  const addIng = () => {
    setRecipe(prevState => ({
      ...prevState,
      ingredients: [...ingredients, { ing_name: '', amount: '' }]
    }))
  }


  const onSubmit = e => {
    e.preventDefault()
    if (current === null) {
      addRecipe(recipe)
    } else {
      updateRecipe(recipe)
    }
    console.log(recipe)
    clearAll()

    setRecipe({
      label: '',
      cuisineType: '',
      ingredients: [{
        ing_name: '',
        amount: ''
      }]
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


