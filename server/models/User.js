const {Schema, model} = require("mongoose");


const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    login: {type: String, required: true, unique: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true}
})

module.exports = model('User', User);