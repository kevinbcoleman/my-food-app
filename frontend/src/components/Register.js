import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import { LinkContainer, Redirect } from 'react-router-bootstrap'
import AuthContext from '../context/auth/AuthContext'
import AlertContext from '../context/alert/alertContext'
import '../App.css';


const Register = (props) => {
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

  const { register, error, isAuthenticated, clearErrors } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }

    if (error === 'User already exists') {
      setAlert(error)
      clearErrors()
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    register({
      username,
      email,
      password
    })
  }
  return (
    <Container className="Form">
      <h1>Register</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label htmlFor="username"></Form.Label>
          <Form.Control
            name="username"
            type="text"
            onChange={onChange}
            value={username}
            placeholder="USERNAME"
            required
          >
          </Form.Control>
        </Form.Group>

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
            minLength="6"
            required
          >
          </Form.Control>
        </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  )
}

export default Register
