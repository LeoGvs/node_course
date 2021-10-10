const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {type: String, required:true},
    content:{type: String, required:true},
    author:{type: String, required:true},
    date:{type: String, required:true},
    urlImage:{type: String, required:false}
}, { collection : 'post' })

module.exports = mongoose.model('Post', postSchema)