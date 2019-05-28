const router = require('express').Router()
const recipeCtrl = require('../controllers/recipes')

router.get( '/', recipeCtrl.index)


module.exports = router;