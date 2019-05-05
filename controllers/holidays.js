const cors = require('cors')
const express = require('express')
const holidays = express.Router()
const Holiday = require('../models/holidays.js')

holidays.post('/', async (req, res) => {
  Holiday.create(req.body, (error, createdHoliday) => {
    if (error) {
      console.log(error)
      res.status(418).json({ error: error })
    } else {
      res.status(200).send(createdHoliday) //  .json() will send proper headers in response so client knows it's json coming back
    }
  })
})

holidays.get('/', cors(), (req, res) => {
  Holiday.find({}, (err, foundHolidays) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundHolidays)
  })
})

holidays.delete('/:id', (req, res) => {
  Holiday.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedHoliday)
  })
})

holidays.put('/:id', (req, res) => {
  Holiday.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedHoliday) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedHoliday)
  })
})

module.exports = holidays
