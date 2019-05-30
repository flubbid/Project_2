const express = require('express');
const router = express.Router();
const passport = require('passport')
const userCtlr = require('../controllers/users');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', userCtlr.index);

router.get('/auth/google', passport.authenticate('google', 
{ scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users',
    failureRedirect: '/users',
  }
))

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});

module.exports = router;
