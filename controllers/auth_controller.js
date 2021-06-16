const express = require('express')
const auth = express.Router()

auth.get('/', (req, res) => {
  res.send('Get logged in user')
})

auth.post('/', (req, res) => {
  res.send('Log in user')
})

module.exports = auth