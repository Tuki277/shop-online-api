var express = require('express');
var router = express.Router();
var shopController = require('../controllers/shop')

router.get('/', shopController.index);

router.get('/about', shopController.about)

router.get('/contact', shopController.contact)

router.get('/detail/:id', shopController.detailProduct)

router.get('/shop', shopController.shop)

router.get('/thankyou', shopController.thankyou)

router.get('/cart', shopController.Cart)

router.get('/add-to-cart/:id', shopController.addToCart)

module.exports = router

