const express = require('express')
const users = express.Router()

users.post('/', (req, res) => {
  res.send('Register a user')
})

module.exports = users