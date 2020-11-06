const mongoose = require('mongoose')
const Schema = mongoose.Schema

const checkOut = new Schema ({
    name : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    email : {
        type : String
    },
    cart : {
        type: Object
    },
    orderNote : {
        type : String
    }
    /*productsBuy : [{
        type: Schema.Types.ObjectId,
        ref: 'postProduct'
    }]*/
})

const UserCheckOut = mongoose.model('checkout', checkOut)

module.exports = UserCheckOut