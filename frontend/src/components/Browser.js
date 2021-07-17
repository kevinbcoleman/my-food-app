
import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Nav, Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import BrowserContext from '../context/browser/browserContext'
import AuthContext from '../context/auth/AuthContext'
import { v4 as uuidv4 } from 'uuid'



const Browser = () => {

  const authContext = useContext(AuthContext)
  const { isAuthenticated } = authContext
  const browserContext = useContext(BrowserContext)
  const { addApiRecipe } = browserContext

  const APP_ID = 'eed233fa'
  const API_KEY = 'd7cbb28565679a25cdf7b8ee39d91ebb'

  const [healthOpts, setHealthOpts] = useState('')
  const [dietType, setDietType] = useState('')
  const [dietRegion, setDietRegion] = useState('')
  const [mealType, setMealType] = useState('')
  const [apiRecipes, setApiRecipes] = useState([])


  const [fetchedData, setFetchedData] = useState(false)
  useEffect(() => {
  }, [browserContext])



  const healthArr = [
    "None",
    "dairy-free",
    "gluten-free",
    "keto-friendly",
    "kosher",
    "low-sugar",
    "paleo",
    "peanut-free",
    "pescatarian",
    "pork-free",
    "vegan"
  ]

  const dietTypeArr = [
    "None",
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium"
  ]

  const dietRegionArr = [
    "None",
    "american",
    "asian",
    "caribbean",
    "chinese",
    "french",
    "indian",
    "italian",
    "japanese",
    "mediterranean",
    "mexican",
  ]

  const mealTypeArr = [
    "None",
    "breakfast",
    "lunch",
    "dinner",
    "snack"
  ]


  const getData = async () => {
    setApiRecipes([])
    setFetchedData(false)
    try {
      const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&health=${healthOpts}&diet=${dietType}&cuisineType=${dietRegion}&mealType=${mealType}`)
      const res = await data.hits
      setApiRecipes(res)
      setFetchedData(true)
    } catch (err) {
      console.log(err)
    }

    // {
    //   res.length === 0 ? (<h3>No results.</h3>) :
    //     setApiRecipes(res)
    //   setFetchedData(true)
    // }

    // console.log(apiRecipes)
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
    addApiRecipe(recObj)
  }




  return (
    <div>
      <h2>Browse Recipes</h2>
      <Form.Group controlId="selectForm">
        <Form.Label>Health Options</Form.Label>
        <Form.Control
          as="select"
          style={inputStyle}
          value={healthOpts}
          onChange={(e => setHealthOpts(e.target.value))}
        >
          {healthArr.map(op => (
            <option value={op}>{op}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="selectForm">
        <Form.Label>Diet Type</Form.Label>
        <Form.Control
          style={inputStyle}
          as="select"
          value={dietType}
          onChange={(e => setDietType(e.target.value))}
        >
          {dietTypeArr.map(op => (
            <option value={op}>{op}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="selectForm">
        <Form.Label>Region</Form.Label>
        <Form.Control
          style={inputStyle}
          as="select"
          value={dietRegion}
          onChange={(e => setDietRegion(e.target.value))}
        >
          {dietRegionArr.map(op => (
            <option value={op}>{op}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="selectForm">
        <Form.Label>Meal</Form.Label>
        <Form.Control
          style={inputStyle}
          as="select"
          value={mealType}
          onChange={(e => setMealType(e.target.value))}
        >
          {mealTypeArr.map(op => (
            <option value={op}>{op}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button onClick={getData}>Search</Button>
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
                    {isAuthenticated ?
                      <Button onClick={() => addToCollection(index)}>Add to my collection</Button> :
                      <LinkContainer to="/login">
                        <Nav.Link className="btn">Add to my collection</Nav.Link>
                      </LinkContainer>
                    }

                  </Card>
                </>
              ))}
            </ul>
          </>
          : null}
      </div>
    </div >
  )
}

const inputStyle = {
  "padding": "0 24px"
}

export default Browser
