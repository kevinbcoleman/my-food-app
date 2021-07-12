const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID;
// require('./users')
const Schema = mongoose.Schema

// TODO: Update to your resource name

const recipeSchema = Schema(
  // TODO: update your resource properties
  {
    label: { type: String, required: true },
    cuisineType: { type: String, required: true },
    ingredients: [
      {
        ing_name: { type: String, required: true },
        amount: { type: String, required: true }
      }
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

// TODO: update your model
module.exports = mongoose.model('Recipe', recipeSchema)
