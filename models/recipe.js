const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
    name: String,
    instructions: String,
    prepTime: Number,
    servingSize: Number,

})