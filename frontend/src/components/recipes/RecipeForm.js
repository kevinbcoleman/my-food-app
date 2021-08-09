import React, { useState, useContext, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import RecipeContext from '../../context/recipe/recipeContext'
import '../../App.css';

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
  const [ingredients, setIngredients] = useState([
    { ing_name: '', amount: '' }
  ])

  const { label, cuisineType } = recipe

  const addField = () => {
    return ingredients.map((ing, ind) => (
      <div className="AddField" key={ind}>
        <Form.Group className="AddInput ml-0">
          <Form.Label></Form.Label>
          <Form.Control
            className="inputStyle"
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
        <Form.Group className="AddInput">
          <Form.Label></Form.Label>
          <Form.Control
            className="inputStyle"
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
      <Form className="AddForm col col-md-10 col-lg-8 col-xl-6" onSubmit={onSubmit}>
        <Card className="CardStyle">
          <h2 className="card-title mb-0">{current ? 'Edit Recipe' : 'Add Recipe'}</h2>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              className="inputStyle px-2"
              type="text"
              placeholder="Name of dish"
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
              className="inputStyle mb-2 px-2"
              placeholder="Cuisine (American, Mexican, French)"
              name="cuisineType"
              value={cuisineType}
              onChange={handleChange}
            >
            </Form.Control>
          </Form.Group>

          <h3 className="AddHeader mt-2">Ingredients</h3>

          {addField()}
          <p className="mt-4 mb-1 text-center">Add another ingredient</p>
          <Button
            className="add-btn"
            type="button"
            onClick={addIng}
          >+</Button>
          <Button
            className="form-btn mt-3"
            type="submit">{current ? 'Update' : 'Submit'}
          </Button>
        </Card>
      </Form>
    </>
  )
}

export default RecipeForm

