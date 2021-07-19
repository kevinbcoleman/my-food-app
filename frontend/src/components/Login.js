import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap'
import { LinkContainer, Redirect } from 'react-router-bootstrap'
import AuthContext from '../context/auth/AuthContext'
import AlertContext from '../context/alert/alertContext'
import '../App.css';



const Login = (props) => {
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }
    if (error === 'Invalid credentials') {
      setAlert(error)
      clearErrors()
    }
    //eslint-disable-next-line
  }, [isAuthenticated, props.history])

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login({
      email,
      password
    })
  }

  return (
    <>

      <Form onSubmit={onSubmit} className="Form FormDesktop">
        <div>
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"
            className="EntryDisplay"
          />
        </div>
        <Card className="FormCard">
          <Form.Group>
            <Form.Label htmlFor="email"></Form.Label>
            <Form.Control
              className="inputStyle"
              name="email"
              type="text"
              onChange={onChange}
              value={email}
              placeholder="Email"
              required
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password"></Form.Label>
            <Form.Control
              className="inputStyle"
              name="password"
              type="password"
              onChange={onChange}
              value={password}
              placeholder="Password"
              required
            >
            </Form.Control>
          </Form.Group>
          <Button className="form-btn" type="submit">Log In</Button>
        </Card>
      </Form>


      <div>
        <Form className="Form FormMobile" onSubmit={onSubmit}>
          <h1 className="text-center"></h1>
          <Form.Group>
            <Form.Label htmlFor="email"></Form.Label>
            <Form.Control
              className="inputStyle"
              name="email"
              type="text"
              onChange={onChange}
              value={email}
              placeholder="Email"
              required
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password"></Form.Label>
            <Form.Control
              className="inputStyle"
              name="password"
              type="password"
              onChange={onChange}
              value={password}
              placeholder="Password"
              required
            >
            </Form.Control>
          </Form.Group>
          <Button className="form-btn" type="submit">Log In</Button>
        </Form>
      </div>
    </>
  )
}





export default Login
