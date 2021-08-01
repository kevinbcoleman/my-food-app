
import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Nav, Button, Card, Container } from 'react-bootstrap'
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


  const noData = () => {
    return (
      <p> No results. Try broadening your search. </p>
    )
  }

  const getData = async () => {

    setApiRecipes([])
    setFetchedData(false)

    try {
      const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&health=${healthOpts}&diet=${dietType}&cuisineType=${dietRegion}&mealType=${mealType}`)
      const res = await data.hits
      console.log(res)
      res.length === 0 ? noData() :
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

    <Container className="d-flex row-wrap">

      <div className="MainForm row">
        <h2>Browse Recipes</h2>
        <Form.Group controlId="selectForm">
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

        <Form.Group controlId="selectForm">
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

        <Form.Group controlId="selectForm">
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

        <Form.Group controlId="selectForm">
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
        <Button className="form-btn mt-2" onClick={getData}>Search</Button>
      </div>


      {/* {noData} */}
      {fetchedData ?
        <Container className="RecipeLayout row">
          {/* <div className="RecipeLayout row"> */}
          {apiRecipes.map((apiRecipe, index) => (
            <Card
              className="browserCard align-self-center"
              key={uuidv4()}>
              <h3 className="card-header text-center" key={uuidv4()}>{apiRecipe.recipe.label}</h3>
              <h4 className="text-center" key={uuidv4()}>Cuisine type: {apiRecipe.recipe.cuisineType}</h4>
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
                  <Nav.Link>Add to my collection</Nav.Link>
                </LinkContainer>
              }
            </Card>
          ))}
          {/* </div> */}
        </Container>
        : null}

    </Container>
  )
}

const inputStyle = {
  "padding": "0 24px"
}

export default Browser
