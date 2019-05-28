const User = require('../models/user')

module.exports = {
    create,
    index
};

function create(req, res){

}

function index(req, res, next){
    res.render('users/index', {
        user: req.user,
        name: req.query.name,
    });
}