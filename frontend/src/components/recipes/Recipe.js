import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Recipe = ({ recipe }) => {
  const { id, label, cuisineType, ingredients } = recipe
  return (
    <div>
      <Card>
        <h1>{label}</h1>
        <Card.Body>
          <h2>{cuisineType}</h2>
          <ul>
            {ingredients.map(i => {
              <li>{i}</li>
            })}
          </ul>
          <Button>Add</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Recipe
