const cart = require('../api/models/cart')
const Product = require('../api/models/postProduct')

const index = async (req, res, next) => {
    res.render('homepage/index', { session : req.session })
}

const about = async (req, res, next) => {
    res.render('homepage/about', { session : req.session })
}

const shop = async (req, res, next) => {
    const Products = await Product.find().lean().sort()
    res.render('homepage/shop', { Products : Products, session : req.session })
}

const detailProduct = async (req, res, next) => {
    const { id } = req.params

    console.log(id)

    const Products = await Product.findById(id)
    res.render('homepage/shop-single', { Products : Products, session : req.session })
}

const contact = async (req, res, next) => {
    res.render('homepage/contact', { session : req.session })
}

const thankyou = async (req, res, next) => {
    res.render('homepage/thankyou')
}

const addToCart = async (req, res, next) => {

    const { id } = req.params
    const Cart = new cart(req.session.cart ? req.session.cart : {})

    Product.findById(id, function(err, product){
        if(err){
            return res.redirect("/")
        }
        Cart.add(product, product.id)
        req.session.cart = Cart;
        console.log(req.session.cart)
        res.redirect('/shop')
    })
}

const Cart = async (req, res, next) => {
    const Products = await Product.findOne({ _id: req.params.id }).lean()
    const Cart = new cart(req.session.cart)
    const cartProduct = Cart.getItems()
    console.log(cartProduct)
    res.render('homepage/cart', { Products : Products, session : req.session, cartProduct : cartProduct })
}

module.exports = {
    index,
    about,
    shop,
    detailProduct,
    contact,
    thankyou,
    Cart,
    addToCart
}