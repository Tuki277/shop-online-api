const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postProduct = new Schema({
    name : {
        type : String,
        required : true
    },
    size : {
        type : Number,
        required : true
    },
    detail : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref: 'postCategory'
    }
})

const postProducts = mongoose.model('postProduct', postProduct)

module.exports = postProducts