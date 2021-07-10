import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer, Redirect } from 'react-router-bootstrap'
import AuthContext from '../context/auth/AuthContext'

const Register = (props) => {
  const authContext = useContext(AuthContext)

  const { register, isAuthenticated } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }

  }, [isAuthenticated, props.history])

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
    <div>
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
            required
          >
          </Form.Control>
        </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  )
}

export default Register
