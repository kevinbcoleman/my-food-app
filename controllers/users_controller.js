const express = require('express')
const users = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const config = require('config')
const { check, validationResult } = require('express-validator')



users.post('/', [
  check('username', 'username is required')
    .not()
    .isEmpty(),
  check('email', 'Please include valid email').isEmail(),
  check('password',
    'Password must contain 6 or more characters').isLength({ min: 6 })
],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { username, email, password } = req.body

    try {
      let user = await User.findOne({ email })
      if (user) {
        return res.status(400).json({ msg: "User already exists" })
      }
      user = new User({
        username,
        email,
        password
      })

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      await user.save()

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        process.env.jwtSecret,
        {
          expiresIn: 3600000
        },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
    }
  })

module.exports = users