var express = require('express');
var router = express.Router();
var adminControllers = require('../controllers/admin')

router.route('/postCategory')
    .get(adminControllers.getAllCategory)
    .post(adminControllers.newPostCategory)

router.route('/:postCategoryID')
    .delete(adminControllers.deleteCategory)
    .patch(adminControllers.updateCategory)

router.route('/:postProductID')
    .delete(adminControllers.deleteProduct)
    .patch(adminControllers.updateProduct)

router.route('/:postCategoryID/postProduct')
    .get(adminControllers.getAllProductByID) 
    .post(adminControllers.newPostProduct) // chỗ này chưa hợp lý lắm, cần xem lại

module.exports = router;
