const router = require('express').Router();
const ingredientCtrl = require('../controllers/ingredients')

router.get('/performers/new', ingredientCtrl.new);
router.post('/ingredients', ingredientCtrl.create);
router.post('/recipes/:id/ingredients', ingredientCtrl.addToRecipe);

module.exports = router;

