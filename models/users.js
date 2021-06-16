const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID;
// require('./recipes')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  myRecipes: [
    {
      type: ObjectId,
      ref: 'Recipe'
    }
  ]
})

module.exports = mongoose.model('User', userSchema)