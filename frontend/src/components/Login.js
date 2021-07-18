import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
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
    <Container className="Form">
      <h1>Login</h1>
      <Form className="" onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email"></Form.Label>
          <Form.Control
            name="email"
            type="text"
            onChange={onChange}
            value={email}
            placeholder="EMAIL"
            required
          >
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password"></Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={onChange}
            value={password}
            placeholder="PASSWORD"
            required
          >
          </Form.Control>
        </Form.Group>
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  )
}



// const inputStyle = {
//   "max-width": "50%"
// }



export default Login
