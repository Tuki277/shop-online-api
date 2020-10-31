const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
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
    owner : { // owner = category
        type : Schema.Types.ObjectId,
        ref: 'postCategory'
    }
})

const postProducts = mongoose.model('Product', Product)

module.exports = postProducts