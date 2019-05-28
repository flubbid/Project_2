const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    email: String,
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)