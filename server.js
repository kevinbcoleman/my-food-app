// Dependencies
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
// Dependency configurations
const app = express()
const PORT = 3003

// middleware
app.use(express.json()) // use .json(), not .urlencoded()
app.use(cors())

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// Fix depreciation warnings
mongoose.set('useFindAndModify', false)

// Database connection
mongoose.connect('mongodb://localhost:27017/merncrud', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...')
})

// Controllers/Routes
const holidaysController = require('./controllers/holidays.js')
app.use('/holidays', holidaysController)

// Listen
app.listen(PORT, () => {
  console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊')
})
