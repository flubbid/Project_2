const Recipe = require('../models/recipe')

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