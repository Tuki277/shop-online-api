var express = require('express');
var router = express.Router();
var shopController = require('../controllers/shop')

router.get('/', shopController.index);

router.get('/about', shopController.about)

router.get('/add-to-cart/:id', shopController.addToCart)

router.get('/cart', shopController.Cart)

router.get('/contact', shopController.contact)

router.route('/checkout')
    .get(shopController.checkout)
    .post(shopController.checkoutProducts)

router.get('/detail/:id', shopController.detailProduct)

router.get('/shop', shopController.shop)

router.get('/thankyou', shopController.thankyou)

module.exports = router

