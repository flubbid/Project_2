const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: String,
    instructions: String,
    prepTime: String,
    servingSize: String,
    ingredients:[{type: Schema.Types.ObjectId, ref: 'Ingredients'}]

});

module.exports = mongoose.model("Recipe", recipeSchema)

