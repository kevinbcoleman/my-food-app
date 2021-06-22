import React, { useReducer } from 'react'
import uuid from 'uuid'
import RecipeContext from './recipeContext'
import recipeReducer from './recipeReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const RecipeState = props => {
  const initialState = {
    recipes: [
      {
        id: 1,
        label: "Tuna Salad",
        cuisineType: "american",
        ingredients: ['Tuna', 'mayo', 'celery', 'onion']
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
    ]
  }

  const [state, dispatch] = useReducer(recipeReducer, initialState)

  // ADD

  // DELETE

  // SET CURRENT

  // ClEAR CURRENT

  // UPDATE CONTACT

  //FILTER CONTACTS

  //CLEAR FILTER

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  )
}
export default RecipeState