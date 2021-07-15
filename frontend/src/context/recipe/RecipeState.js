import React, { useReducer } from 'react'
import axios from 'axios'
import RecipeContext from './recipeContext'
import recipeReducer from './recipeReducer'
import {
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECIPE,
  FILTER_RECIPE,
  CLEAR_RECIPES,
  RECIPE_ERROR,
  CLEAR_FILTER
} from '../types'

const RecipeState = props => {
  const initialState = {
    recipes: [],
    current: null,
    error: null
  }

  const [state, dispatch] = useReducer(recipeReducer, initialState)



  const getRecipes = async () => {
    try {
      const res = await axios.get('/recipes')
      dispatch({ type: GET_RECIPES, payload: res.data })
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.response.msg
      })
    }
  }



  // ADD
  const addRecipe = async recipe => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/recipes', recipe, config)
      dispatch({ type: ADD_RECIPE, payload: res.data })
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.response.msg
      })
    }
  }

  // DELETE
  const deleteRecipe = async id => {
    try {
      await axios.delete(`/recipes/${id}`)
      dispatch({ type: DELETE_RECIPE, payload: id })
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.response.msg
      })
    }
  }

  const clearRecipes = () => {
    dispatch({ type: CLEAR_RECIPES })
  }


  const updateRecipe = async recipe => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.put(`/recipes/${recipe._id}`, recipe, config)
      dispatch({ type: UPDATE_RECIPE, payload: res.data })
      console.log(res.data)
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
      })
    }
  }

  // SET CURRENT
  const setCurrent = recipe => {
    dispatch({ type: SET_CURRENT, payload: recipe })
  }
  // ClEAR CURRENT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  // UPDATE CONTACT

  //FILTER CONTACTS

  //CLEAR FILTER

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        current: state.current,
        error: state.error,
        addRecipe,
        deleteRecipe,
        setCurrent,
        clearCurrent,
        updateRecipe,
        getRecipes,
        clearRecipes
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  )
}
export default RecipeState