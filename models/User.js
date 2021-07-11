const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID;
// require('./recipes')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  myRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ApiRecipe'
    }
  ]
})

module.exports = mongoose.model('User', userSchema)