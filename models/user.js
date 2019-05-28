const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new mongoose.Schema({
    name: String,
    googleId: String,
    email: String,
},{
    timestamps: true
});