import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import Recipes from './recipes/Recipes'
import AuthContext from '../context/auth/AuthContext'
import Browser from './Browser'

const Home = () => {
  const { loadUser } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
  }, [loadUser])

  return (
    <>
      <Browser />
    </>
  )
}

export default Home

