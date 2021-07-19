import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap'
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

    <>
      <div className="EntryStyleBar1"></div>
      <div className="EntryStyleBar2"></div>
      <div className="EntryStyleBar3"></div>
      <div className="EntryStyleBar4"></div>
      <Form onSubmit={onSubmit} className="Form FormDesktop RegisterForm">

        <h1 className="RegisterHeader order-3">Discover food that works for you.</h1>
        <div>
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"
            className="EntryDisplay"
          />
        </div>
        <Card className="FormCard RegisterCard">
          <Form.Group>
            <Form.Label htmlFor="username"></Form.Label>
            <Form.Control
              className="inputStyle"
              name="username"
              type="text"
              onChange={onChange}
              value={username}
              placeholder="Username"
              required
            >
            </Form.Control>
          </Form.Group>

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
              minLength="6"
              required
            >
            </Form.Control>
          </Form.Group>
          <Button className="form-btn" type="submit">Sign Up</Button>
        </Card>
      </Form>


      <div>

        <Form className="Form FormMobile" onSubmit={onSubmit}>
          <Form.Group>
            <h1 className="text-center mt-4">Sign Up</h1>
            <Form.Label htmlFor="username"></Form.Label>
            <Form.Control
              className="inputStyle"
              name="username"
              type="text"
              onChange={onChange}
              value={username}
              placeholder="Username"
              required
            >
            </Form.Control>
          </Form.Group>

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
              minLength="6"
              required
            >
            </Form.Control>
          </Form.Group>
          <Button className="form-btn" type="submit">Sign Up</Button>
        </Form>
      </div>

    </>
  )
}

export default Register
