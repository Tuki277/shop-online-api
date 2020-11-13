const cart = require('../api/models/cart')
const Product = require('../api/models/postProduct')
const hoaDon = require('../api/models/hoaDon')
const { emit } = require('../api/models/postProduct')

const index = async (req, res, next) => {
    const Products = await Product.find().lean().sort()
    res.render('homepage/index', { session : req.session, Products : Products })
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
    res.render('homepage/thankyou', { session : req.session })
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

const checkout = async (req, res, next) => {
    console.log(req.session.cart)
    const Cart = new cart(req.session.cart)
    const cartProduct = Cart.getItems()
    console.log(cartProduct)
    res.render('homepage/checkout', { session : req.session, cartProduct : cartProduct })
}

const checkoutProducts = async (req, res, next) => {

    // console.log(req.body)
    // console.log(req.session.cart)

    const {
        name,
        phone,
        address,
        email,
        orderNote
    } = req.body

    // const cart = req.session.cart
    const newCart = new cart(req.session.cart)

    console.log('newCart = ', newCart)

    const cartSave = newCart.getItems()

    console.log('cart luu vao db = ', cartSave)

    const newCheckOut = {
        name : name,
        phone : phone,
        address : address,
        email : email,
        orderNote : orderNote,
        cartSave : cartSave,
        newCart : newCart
    }

    if (name == '' || name == ' ' || phone == '' || phone == ' ' || address == '' || address == ' ' || email == '' || email == ' ')
    {
        res.send('<h1>đặt hàng thất bại</h1>')
    }
    else {
        const checkOut = new hoaDon(newCheckOut)
        console.log(checkOut)
        checkOut.save()
        req.session.destroy(null)
        res.redirect('/thankyou')
    }
    
}

const deleteProductFromArray = async (req, res, next) => {

    const { id } = req.params

    console.log('id can xoa = ', id)

    const Cart = new cart(req.session.cart ? req.session.cart : {});

    Cart.remove(id);
    req.session.cart = Cart;
    res.redirect('/cart')

}

module.exports = {
    index,
    about,
    shop,
    detailProduct,
    contact,
    thankyou,
    Cart,
    addToCart,
    checkout,
    checkoutProducts,
    deleteProductFromArray
}