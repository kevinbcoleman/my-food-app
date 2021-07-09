import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RecipeContext from './recipeContext'
import recipeReducer from './recipeReducer'
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECIPE,
  FILTER_RECIPE,
  CLEAR_FILTER
} from '../types'

const RecipeState = props => {
  const initialState = {
    recipes: [
      {
        id: 1,
        label: "Tuna Salad",
        cuisineType: "american",
        ingredients: ['tuna', 'mayo', 'onions', 'celery']
      },
      {
        id: 2,
        label: "Grilled Cheese",
        cuisineType: "american",
        ingredients: ['Bread', 'Cheese', 'butter']
      },
      {
        id: 3,
        label: "Egg Salad",
        cuisineType: "american",
        ingredients: ['Eggs', 'mayo', 'celery', 'pepper', 'onion']
      },
    ],
    current: null
  }

  const [state, dispatch] = useReducer(recipeReducer, initialState)

  // ADD
  const addRecipe = recipe => {
    recipe.id = uuidv4()
    dispatch({ type: ADD_RECIPE, payload: recipe })
  }

  // DELETE
  const deleteRecipe = id => {
    dispatch({ type: DELETE_RECIPE, payload: id })
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
  const updateRecipe = recipe => {
    dispatch({ type: UPDATE_RECIPE, payload: recipe })
  }
  //FILTER CONTACTS

  //CLEAR FILTER

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        current: state.current,
        addRecipe,
        deleteRecipe,
        setCurrent,
        clearCurrent,
        updateRecipe
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  )
}
export default RecipeState