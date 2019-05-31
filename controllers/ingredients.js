const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient')

module.exports = {
    new: newIngredients,
    create,
    addToRecipe,
    show
}

function addToRecipe (req, res){
    Recipe.findById(req.parama.id, function (err, recipe) {
        recipe.ingredients.push(req.body.ingredientsId);
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}

function create(req, res){
 Ingredient.create(req.body, function (err, ingredient){
     res.redirect('/ingredients/new')
 })   
}

function newIngredients(req, res){
 Ingredient.find({}, function(err, ingredients) {
     res.render('ingredients/new', {
         title: 'Add Ingredients', ingredients, user: req.user
     })
 })
}

function show(req, res){
    Ingredient.find({}, function(err, ingredients){
        res.render('ingredients/index', {
            title:'Show Ingredients', ingredients, user: req.user
        })
    })
}