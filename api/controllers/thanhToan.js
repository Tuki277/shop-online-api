const checkOut = require('../models/thanhToan')
const postProduct = require('../models/postProduct')

const checkout = async (req, res, next) => {
    const product = await postProduct.findById(req.body)

    console.log(product)

    // await userCheckOut.save()
    // return res.status(201).json({ success : true })
}

module.exports = {
    checkout
}