const Recipe = require('../models/recipe')
const Ingredient = require('../models/ingredient')

module.exports = {
    index,
    show,
    new: newRecipe,
    create,
    detail,
    addIngredient,
    edit,
    update,
    destroy
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
 .populate('ingredients').exec(function (err, recipe){
     Ingredient.find({_id: {$nin: recipe.ingredients}}).exec(function(err, ingredients){
         res.render('recipes/show', {
             title: 'Recipe Detail', recipe, ingredients, user: req.user
         });
     });
 });
     }


function newRecipe(req, res){
res.render('recipes/new', { title: 'Add Recipe', user: req.user})
}

function create (req, res){
Recipe.create(req.body, function(err, recipe){
    if (err) return res.redirect('/recipes/new');
    res.redirect(`/recipes/${recipe._id}`)
})
}

function detail (req,res){
    Recipe.findById(req.params.id).populate('ingredients').exec(function(err, recipe){
        res.render('recipes/detail', {title: 'Add Recipe', user: req.user, recipe})
    })
}

function addIngredient(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, { $push: { ingredients: req.body.id}}, {new: true}, function(err, recipe) {
        console.log(err)
        res.redirect(`/recipes/${req.params.id}`)
    })
}

function edit(req, res){
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/edit', { user: req.user, recipe });
    });
}

function update(req, res){
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedRecipe) {
        res.redirect(`/recipes/${req.params.id}`);
    });
}

function destroy(req, res){
    Recipe.findByIdAndDelete(req.params.id, function(err){
        res.redirect(`/recipes`)
    })
}