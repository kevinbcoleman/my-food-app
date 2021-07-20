import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import BrowserContext from '../../context/browser/browserContext'
import '../../App.css';

const ApiRecipe = ({ apiRecipe }) => {

  const browserContext = useContext(BrowserContext)
  const { deleteApiRecipe } = browserContext
  const { _id, label, cuisineType, ingredients = [] } = apiRecipe


  const onDelete = () => {
    deleteApiRecipe(_id)
  }

  return (
    <>
      <Card className="RecipeCard">
        <h1>{label}</h1>
        <Card.Body>
          <h2>{cuisineType}</h2>
          <ul>

            {ingredients.map((i, index) => (
              <div key={index}>
                <li>{i.ing_name}</li>
              </div>
            ))}
          </ul>
          <Button onClick={onDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default ApiRecipe
