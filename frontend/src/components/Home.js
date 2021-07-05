import React from 'react'
import Recipes from './recipes/Recipes'
import RecipeForm from './recipes/RecipeForm'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <RecipeForm />
      <Recipes />
    </div>
  )
}

export default Home

