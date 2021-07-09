import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer, Redirect } from 'react-router-bootstrap'


const Login = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    console.log('Login Submit')
  }

  return (
    <div>
      <h1>Login</h1>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="email"></Form.Label>
          <Form.Control
            name="email"
            type="text"
            onChange={onChange}
            value={email}
            placeholder="USERNAME"
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
          >
          </Form.Control>
        </Form.Group>
        <Button type="submit">Sign In</Button>
      </Form>
    </div>
  )
}

export default Login
