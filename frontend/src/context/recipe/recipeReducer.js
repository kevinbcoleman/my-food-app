import {
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECIPE,
  CLEAR_RECIPES,
  RECIPE_ERROR
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      }
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes],
        loading: false
      }
    case UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map(recipe => recipe._id === action.payload._id ?
          action.payload : recipe),
        loading: false
      }
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe._id !== action.payload),
        loading: false
      }
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: null,
        loading: false,
        current: null
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
    case RECIPE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}