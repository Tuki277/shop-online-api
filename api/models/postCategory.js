const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postCategory = new Schema({
    name : {
        type : String,
        required : true
    },
    products : [{
        type: Schema.Types.ObjectId,
        ref: 'postProduct'
    }]
})

const postCategories = mongoose.model('postCategory', postCategory)

module.exports = postCategories