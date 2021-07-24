import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useContext } from 'react'
import RecipeState from './context/recipe/RecipeState'
import AuthState from './context/auth/AuthState'
import BrowserState from './context/browser/browserState'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import MyRecipes from './components/MyRecipes'
import SavedRecipes from './components/SavedRecipes'
import Login from './components/Login'
import Alerts from './components/Alerts'
import Register from './components/Register'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/priv/PrivateRoute'
import AlertState from './context/alert/AlertState'
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  return (
    <div className="App">
      <AuthState>
        <RecipeState>
          <BrowserState>
            <AlertState>
              <Router>
                <Header />
                <Container>
                  <Alerts />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <PrivateRoute exact path='/profile' component={Profile} />

                    <Route exact path='/profile/myrecipes' component={MyRecipes} />
                    <Route exact path='/profile/savedrecipes' component={SavedRecipes} />

                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                  </Switch>
                </Container>
              </Router>
            </AlertState>
          </BrowserState>
        </RecipeState>
      </AuthState>
    </div>
  );
}

export default App;
