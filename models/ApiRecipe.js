const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID;
// require('./users')
const Schema = mongoose.Schema

// TODO: Update to your resource name

const apiRecipeSchema = Schema(
  // TODO: update your resource properties
  {
    label: { type: String, required: true },
    cuisineType: { type: String, required: true },
    ingredients: [String],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

// TODO: update your model
module.exports = mongoose.model('ApiRecipe', apiRecipeSchema)