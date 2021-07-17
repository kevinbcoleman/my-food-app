import { STATES } from 'mongoose'
import {
  GET_BROWSER,
  ADD_BROWSER,
  DELETE_BROWSER,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_BROWSER:
      return {
        ...state,
        apiRecipes: action.payload,
        loading: false
      }
    case ADD_BROWSER:
      return {
        ...state,
        apiRecipes: [action.payload, ...state.apiRecipes],
        loading: false
      }
    case DELETE_BROWSER:
      return {
        ...state,
        apiRecipes: state.apiRecipes.filter(apiRecipe => apiRecipe._id !== action.payload),
        loading: false
      }
    default:
      return state
  }
} 