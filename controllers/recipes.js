const Recipe = require('../models/recipe')
const Ingredient = require('../models/ingredient')

module.exports = {
    index,
    show,
    new: newRecipe,
    create
}

function index (req, res){
    Recipe.find({}, (err, recipes) => {
        res.render('recipes/index', {
            recipes,
            user: req.user     
        })
    })
}

function show(req, res){
 Recipe.findById(req.params.id)
 .populate('ingredient').exec(function (err, recipe){
     Ingredient.find({_id: {$nin: recipe.ingredients}}).exec(function(err, ingredients){
         console.log(ingredients);
         res.render('recipes/show', {
             title: 'Recipe Detail', recipe, ingredients
         });
     });
 });
     }


function newRecipe(req, res){
res.render('recipes/new', { title: 'Add Recipe'})
}

function create (req, res){
Recipe.create(req.body, function(err, recipe){
    if (err) return res.redirect('/recipes/new');
    res.redirect(`/recipes/${recipe._id}`)
})
}