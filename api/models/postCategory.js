const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postCategory = new Schema({
    name : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    },
    products : [{
        type: Schema.Types.ObjectId,
        ref: 'postProduct'
    }]
})

const postCategories = mongoose.model('postCategory', postCategory)

module.exports = postCategories