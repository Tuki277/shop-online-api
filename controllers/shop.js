const Product = require('../api/models/postProduct')

const index = async (req, res, next) => {
    res.render('homepage/index')
}

const about = async (req, res, next) => {
    res.render('homepage/about')
}

const shop = async (req, res, next) => {
    const Products = await Product.find().lean().sort()
    res.render('homepage/shop', { Products : Products })
}

const detailProduct = async (req, res, next) => {
    const { id } = req.params

    console.log(id)

    const Products = await Product.findById(id)
    res.render('homepage/shop-single', { Products : Products })
}

const contact = async (req, res, next) => {
    res.render('homepage/contact')
}

const thankyou = async (req, res, next) => {
    res.render('homepage/thankyou')
}

module.exports = {
    index,
    about,
    shop,
    detailProduct,
    contact,
    thankyou
}