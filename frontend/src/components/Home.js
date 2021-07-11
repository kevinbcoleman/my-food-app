import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import Recipes from './recipes/Recipes'
import RecipeForm from './recipes/RecipeForm'
import Browser from './Browser'
import AuthContext from '../context/auth/AuthContext'

const Home = () => {
  const authContext = useContext(AuthContext)


  useEffect(() => {
    authContext.loadUser()
  }, [])



  return (
    <div>
      <h1>Home</h1>
      <Browser />
      <RecipeForm />
      <Recipes />
    </div>
  )
}

export default Home

