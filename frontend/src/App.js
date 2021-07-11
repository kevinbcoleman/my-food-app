import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import React, { useState, useEffect, useContext } from 'react'
import RecipeState from './context/recipe/RecipeState'
import AuthState from './context/auth/AuthState'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/priv/PrivateRoute'
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  return (
    <div className="App">
      <AuthState>
        <RecipeState>
          <Router>
            <Header />
            <Container>
              <Switch>
                <Route exact path='/' component={Home} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </Container>
          </Router>
        </RecipeState>
      </AuthState>
    </div>
  );
}

export default App;
