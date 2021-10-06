const mongoose = require('mongoose')
const uniValid = require('mongoose-unique-validator')

const userModel = mongoose.Schema({
    first_name: {type: String, require:true, unique: true},
    last_name: {type: String, require:true, unique: true},
    email: {type: String, require:true, unique: true},
    password: {type: String, require:true}
}, {collection: 'user'})

userModel.plugin(uniValid)

module.exports = mongoose.model('User', userModel)