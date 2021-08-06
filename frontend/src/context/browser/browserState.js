import React, { useReducer } from 'react'
import axios from 'axios'
import BrowserContext from './browserContext'
import browserReducer from './browserReducer'
import {
  GET_BROWSER,
  ADD_BROWSER,
  DELETE_BROWSER,
} from '../types'

const BrowserState = props => {
  const initialState = {
    apiRecipes: []
  }

  const [state, dispatch] = useReducer(browserReducer, initialState)

  const getApiRecipes = async () => {
    try {
      const res = await axios.get('/apirecipes')
      dispatch({ type: GET_BROWSER, payload: res.data })
    } catch (err) {
    }
  }



  // ADD
  const addApiRecipe = async apiRecipe => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/apirecipes', apiRecipe, config)
      dispatch({ type: ADD_BROWSER, payload: res.data })
    } catch (err) {
    }
  }

  // // DELETE
  const deleteApiRecipe = async id => {
    try {
      await axios.delete(`/apirecipes/${id}`)
      dispatch({ type: DELETE_BROWSER, payload: id })
    } catch (err) {
    }
  }

  return (
    <BrowserContext.Provider
      value={{
        apiRecipes: state.apiRecipes,
        addApiRecipe,
        deleteApiRecipe,
        getApiRecipes,
      }}
    >
      {props.children}
    </BrowserContext.Provider>
  )
}
export default BrowserState