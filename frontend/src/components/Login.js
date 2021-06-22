import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer, Redirect } from 'react-router-bootstrap'


const Login = (props) => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // const dispatch = useDispatch()

  // useEffect(() => {

  // }, [])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(login(username, password))
  // }

  return (
    <div>
      <h1>Login</h1>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="username"></Form.Label>
          <Form.Control
            id="username"
            type="text"
            // onChange={(e) => setUsername(e.target.value)}
            // value={username}
            placeholder="USERNAME"
          >
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password"></Form.Label>
          <Form.Control
            id="password"
            type="password"
            // onChange={(e) => setPassword(e.target.value)}
            // value={password}
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
