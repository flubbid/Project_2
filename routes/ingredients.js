const router = require('express').Router();
const ingredientCtrl = require('../controllers/ingredients')

router.get('/new', ingredientCtrl.new);
router.get('/index', ingredientCtrl.show);
router.post('/', ingredientCtrl.create);
router.post('/recipes/:id/ingredients', ingredientCtrl.addToRecipe);

module.exports = router;

