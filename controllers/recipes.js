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

}

function create (req, res){

}