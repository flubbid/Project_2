const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ingredientSchema = new mongoose.Schema({
    id: Number,
    name: String,
    ingredientCategory: String
})

module.exports = mongoose.model('Ingredients', ingredientSchema)