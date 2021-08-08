// DEPENDENCIES

// Allow Cross-Origin-Requests
const cors = require('cors')
// Server
const express = require('express')
// MongoDB ORM
// const mongoose = require('mongoose')
const connectDB = require('./config/db')
// Dependency configurations
require('dotenv').config()
const app = express()


// MIDDLEWARE 
app.use(express.json({ extended: false })) // use .json(), not .urlencoded()
app.use(cors())

// DATABASE
connectDB()

const PORT = process.env.PORT || 5000

// CONTROLLERS/ROUTES
const recipesController = require('./controllers/recipes_controller.js')
app.use('/recipes', recipesController)
const apiRecController = require('./controllers/api_rec_controller.js')
app.use('/apirecipes', apiRecController)
const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)
const authController = require('./controllers/auth_controller.js')
app.use('/auth', authController)

app.get('/', (req, res) => {
  res.json('Welcome')
})

// LISTEN
app.listen(PORT, () => {
  console.log('🎉🎊', 'Up and running on', PORT, '🎉🎊')
})
