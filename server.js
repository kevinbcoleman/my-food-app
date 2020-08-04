// DEPENDENCIES

// Allow Cross-Origin-Requests
const cors = require('cors')
// Server
const express = require('express')
// MongoDB ORM
const mongoose = require('mongoose')

// Dependency configurations
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

// MIDDLEWARE
app.use(express.json()) // use .json(), not .urlencoded()
app.use(cors())

// DATABASE
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log('the connection with mongod is established at', MONGODB_URI)
  }
)

// Optional, but likely helpful
// Connection Error/Success
// Define callback functions for various events
mongoose.connection.on('error', err => console.log(err.message + ' is mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// TODO: Update controllers/routes to your resources
// CONTROLLERS/ROUTES
const contactsController = require('./controllers/contacts_controller.js')
app.use('/contacts', contactsController)

app.get('/*', (req, res) => {
  res.redirect('/contacts')
})

// LISTEN
app.listen(PORT, () => {
  console.log('🎉🎊', 'Up and running on', PORT, '🎉🎊')
})
