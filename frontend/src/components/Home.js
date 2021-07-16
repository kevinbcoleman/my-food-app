import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import Recipes from './recipes/Recipes'
import RecipeForm from './recipes/RecipeForm'
import AuthContext from '../context/auth/AuthContext'
import Browser from './Browser'

const Home = () => {
  const { loadUser } = useContext(AuthContext)


  useEffect(() => {
    loadUser()
  }, [loadUser])



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

