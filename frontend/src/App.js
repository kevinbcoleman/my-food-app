import './App.css';
import React, { useState, useEffect } from 'react'
import RecipeState from './context/recipe/RecipeState'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const App = () => {
  return (
    <div className="App">
      <RecipeState>
        <Router>
          <Header />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/users/profile' component={Profile} />
              <Route exact path='/users/login' component={Login} />
              <Route exact path='/users/register' component={Register} />
            </Switch>
          </Container>
        </Router>
      </RecipeState>
    </div>
  );
}

export default App;
