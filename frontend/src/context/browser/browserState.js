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
      // dispatch({
      //   type: RECIPE_ERROR,
      //   payload: err.response.msg
      // })
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
      // dispatch({
      //   type: RECIPE_ERROR,
      //   payload: err.response.msg
      // })
    }
  }

  // // DELETE
  // const deleteApiRecipe = async id => {
  //   try {
  //     await axios.delete(`/recipes/${id}`)
  //     dispatch({ type: DELETE_RECIPE, payload: id })
  //   } catch (err) {
  //     dispatch({
  //       type: RECIPE_ERROR,
  //       payload: err.response.msg
  //     })
  //   }
  // }
  return (
    <BrowserContext.Provider
      value={{
        apiRecipes: state.apiRecipes,
        addApiRecipe,
        // deleteRecipe,
        getApiRecipes,
      }}
    >
      {props.children}
    </BrowserContext.Provider>
  )
}
export default BrowserState