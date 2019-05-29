const router = require('express').Router()
const recipeCtrl = require('../controllers/recipes')

router.get( '/', recipeCtrl.index)
router.get('/new', recipeCtrl.new)
router.post('/', recipeCtrl.create)
router.get('/:id', recipeCtrl.show)


module.exports = router;