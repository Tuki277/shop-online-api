const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
    name : {
        type : String,
        required : true
    },
    products : [{
        type: Schema.Types.ObjectId,
        ref: 'postProduct'
    }]
})

const Categories = mongoose.model('Category', Category)

module.exports = Categories