var express = require('express');
var router = express.Router();
var adminControllers = require('../controllers/admin');
const { route } = require('./admin');

router.get('/allProduct', adminControllers.getAllProduct)

router.route('/:id')
    .get(adminControllers.getProduct)

module.exports = router