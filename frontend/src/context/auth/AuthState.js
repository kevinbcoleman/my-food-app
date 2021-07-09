import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const loadUser = () => console.log('loaduser')


  // REGISTER USER
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('http://localhost:5000/users')
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      })
    }
  }

  // const login = () => console.log('login')
  // const logout = () => console.log('logout')
  // const clearErrors = () => console.log('clear errs')


  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        // loadUser,
        // login,
        // logout,
        // clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthState