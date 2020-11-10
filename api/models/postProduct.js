const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postProduct = new Schema({
    name : {
        type : String,
        required : true
    },
    size : {
        type : String,
        require : true
    },
    detail : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    image1 : {
        type : String,
        require : true
    },
    /*list : {
        type : String,
        require : true
    },*/
    owner : {
        type : Schema.Types.ObjectId,
        ref: 'postCategory'
    }
})

const postProducts = mongoose.model('postProduct', postProduct)

module.exports = postProducts