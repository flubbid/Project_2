const router = require('express').Router()
const recipeCtrl = require('../controllers/recipes')

router.get( '/', recipeCtrl.index)
router.get('/new', recipeCtrl.new)
router.post('/', recipeCtrl.create)
router.get('/:id', recipeCtrl.show)
router.get('/:id/detail', recipeCtrl.detail)
router.get('/:id/edit', recipeCtrl.edit)
router.put('/:id', recipeCtrl.update)
router.post('/:id/ingredients', recipeCtrl.addIngredient)
router.delete('/:id', isLoggedIn, recipeCtrl.destroy)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = router;