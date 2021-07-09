import {
  ADD_RECIPE,
  DELETE_RECIPE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECIPE,
  FILTER_RECIPE,
  CLEAR_FILTER
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      }
    case UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map(recipe => recipe.id === action.payload.id ?
          action.payload : recipe)
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    default:
      return state
  }
}