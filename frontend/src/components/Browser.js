import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap'
import axios from 'axios'
import BrowserContext from '../context/browser/browserContext'
import { v4 as uuidv4 } from 'uuid'



const Browser = () => {
  const APP_ID = 'eed233fa'
  const API_KEY = 'd7cbb28565679a25cdf7b8ee39d91ebb'

  const dietOptions = [
    "Low Sugar",
    "Keto-Friendly",
    "Pescatarian",
    "Dairy-Free",
    "Gluten-Free"

  ]

  let dietOpts = ''

  const browserContext = useContext(BrowserContext)
  const { addApiRecipe, getApiRecipe, deleteApiRecipe } = browserContext

  const [diet, setDiet] = useState('')
  const [apiRecipes, setApiRecipes] = useState([])


  const [fetchedData, setFetchedData] = useState(false)
  useEffect(() => {
  }, [browserContext])

  // useEffect(() => {
  //   console.log
  //   if (current !== null) {
  //     setRecipe(current)
  //   } else {
  //     setRecipe({
  //       label: '',
  //       cuisineType: '',
  //       ingredients: []
  //     })
  //   }
  // }, [recipeContext, current])


  const getData = async () => {
    const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&health=${dietOpts}&cuisineType=American&mealType=Dinner`)
    const res = await data.hits
    setApiRecipes(res)
    setFetchedData(true)
    console.log(apiRecipes)
  }


  const handleDiet = () => {
    dietOpts = diet.toLowerCase()
    getData()
  }

  const addToCollection = (index) => {
    const apiRec = apiRecipes[index].recipe
    const ings = apiRec.ingredients.map(ing => (
      {
        ing_name: ing.text
      }
    ))
    const recObj = {
      label: apiRec.label,
      cuisineType: apiRec.cuisineType[0],
      ingredients: ings
    }
    console.log(recObj)
    addApiRecipe(recObj)
  }

  // const onSubmit = e => {
  //   e.preventDefault()
  //   if (current === null) {
  //     addRecipe(recipe)
  //   } else {
  //     updateRecipe(recipe)
  //   }
  //   // clearAll()
  // }
  return (
    <div>
      <h2>What are your dietary needs?</h2>
      <Form.Group controlId="selectForm">
        <Form.Label>Select a category</Form.Label>
        <Form.Control
          as="select"
          value={diet}
          onChange={(e => setDiet(e.target.value))}
        >
          {dietOptions.map(op => (
            <option value={op}>{op}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button onClick={handleDiet}>Search</Button>
      <div>

        {fetchedData ?
          <>
            <ul>
              {apiRecipes.map((apiRecipe, index) => (
                <>
                  <Card>
                    <li>{apiRecipe.recipe.label}</li>
                    <li>{apiRecipe.recipe.cuisineType}</li>
                    <ul>
                      {apiRecipe.recipe.ingredients.map(ing => (
                        <>
                          <li>{ing.text}</li>
                        </>
                      ))}
                    </ul>
                    <Button onClick={() => addToCollection(index)}>Add to my collection</Button>
                  </Card>
                </>
              ))}
            </ul>
          </> : null}
      </div>
    </div >
  )
}

export default Browser
