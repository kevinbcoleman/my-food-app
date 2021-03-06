
import React, { useState, useContext, useEffect } from 'react'
import { Form, Nav, Button, Card, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import { healthArr, dietTypeArr, dietRegionArr, mealTypeArr } from '../BrowserSeed'
import BrowserContext from '../context/browser/browserContext'
import AuthContext from '../context/auth/AuthContext'
import { v4 as uuidv4 } from 'uuid'
import '../App.css';

const Browser = () => {

  const authContext = useContext(AuthContext)
  const { isAuthenticated } = authContext
  const browserContext = useContext(BrowserContext)
  const { addApiRecipe } = browserContext

  const APP_ID = 'eed233fa'
  const API_KEY = 'd7cbb28565679a25cdf7b8ee39d91ebb'


  const [fetchedData, setFetchedData] = useState(false)
  useEffect(() => {
  }, [browserContext])


  const [healthOpts, setHealthOpts] = useState('')
  const [dietType, setDietType] = useState('')
  const [dietRegion, setDietRegion] = useState('')
  const [mealType, setMealType] = useState('')
  const [apiRecipes, setApiRecipes] = useState([])

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

    <>

      {/* <p className="homeHeader">Search custom recipes catered to you with our browser.</p> */}
      <div className="innerContain">

        <div className="HomeStyleBar1">
          <p>Search custom recipes catered to you with our browser.</p>
        </div>
        <div className="HomeStyleBar2"></div>
        <div className="HomeStyleBar3"></div>
        <div className="HomeStyleBar4"></div>

        <div className="MainForm row">
          <h2 className="text-center mb-4">Browse Recipes</h2>
          <Form.Group className="px-0" controlId="selectForm">
            <Form.Label>Health Options</Form.Label>
            <Form.Control
              as="select"
              style={inputStyle}
              onChange={(e => setHealthOpts(e.target.value))}
            >
              <option value={healthArr[0]}>- Select -</option>
              {healthArr.map(op => (
                <option value={op}>{op}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="px-0" controlId="selectForm">
            <Form.Label>Diet Type</Form.Label>
            <Form.Control
              style={inputStyle}
              as="select"
              onChange={(e => setDietType(e.target.value))}
            >
              <option value={dietTypeArr[0]}>- Select -</option>
              {dietTypeArr.map(op => (
                <option value={op}>{op}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="px-0" controlId="selectForm">
            <Form.Label>Region</Form.Label>
            <Form.Control
              style={inputStyle}
              as="select"
              onChange={(e => setDietRegion(e.target.value))}
            >
              <option value={dietRegionArr[0]}>- Select -</option>
              {dietRegionArr.map(op => (
                <option value={op}>{op}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="px-0" controlId="selectForm">
            <Form.Label>Meal</Form.Label>
            <Form.Control
              style={inputStyle}
              as="select"
              onChange={(e => setMealType(e.target.value))}
            >
              <option value={mealTypeArr[0]}>- Select -</option>
              {mealTypeArr.map(op => (
                <option value={op}>{op}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button className="form-btn mt-1" onClick={getData}>Search</Button>
        </div>


        {fetchedData ?
          <Container className="RecipeLayout row">
            {apiRecipes.map((apiRecipe, index) => (
              <Card
                className="browserCard"
                key={uuidv4()}>
                <h3 className="card-header text-center" key={uuidv4()}>{apiRecipe.recipe.label}</h3>
                <h4 className="text-center" key={uuidv4()}><span className="text-dark">Cuisine Type:</span> {apiRecipe.recipe.cuisineType}</h4>
                <p className="text-center">Ingredients</p>
                <ul>
                  {apiRecipe.recipe.ingredients.map(ing => (
                    <>
                      <li key={uuidv4()}>{ing.text}</li>
                      <div className="ingStyle px-auto"></div>
                    </>
                  ))}
                </ul>
                {isAuthenticated ?
                  <Button className="collect-btn" onClick={() => addToCollection(index)}>Add to my collection</Button> :
                  <LinkContainer to="/login">
                    <Nav.Link className="btn collect-btn">Login to Save</Nav.Link>
                  </LinkContainer>
                }
              </Card>
            ))}
          </Container>
          : null}

      </div>
    </>
  )
}

const inputStyle = {
  "padding": "0 24px",
  "marginBottom": "1rem"
}

export default Browser
