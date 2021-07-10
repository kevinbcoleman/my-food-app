import React, { useContext, useEffect } from 'react'
import Recipes from './recipes/Recipes'
import RecipeForm from './recipes/RecipeForm'
import AuthContext from '../context/auth/AuthContext'

const Home = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <RecipeForm />
      <Recipes />
    </div>
  )
}

export default Home

