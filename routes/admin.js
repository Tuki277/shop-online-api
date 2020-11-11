var express = require('express');
const { route } = require('.');
var router = express.Router();
const adminController = require('../controllers/admin')
var multer = require('multer');
// var upload = multer({ dest : './public/uploads' }).fields([{ name : 'image', maxCount : 1  },
                                                        //    { name : 'image1', maxCount : 1  }])
var upload = multer({ dest : './public/uploads' }).single('image1')

router.route('/postCategory')
    .get(adminController.postCategory)
    .post(upload, adminController.addCategory)

router.route('/findUpdate/:id')
    .get(adminController.findProductUpdate)
    .post(upload, adminController.updateProduct)

router.route('/postProduct')
    .get(adminController.postProduct)
    .post(upload, adminController.addProduct)

router.get('/edit', adminController.editProduct)

router.get('/edit/:id', adminController.deleteProduct)

router.post('/update', adminController.updateProduct)

router.get('/', adminController.adminHome)

router.get('/baocao', adminController.baoCao)

router.route('/login')
    .get(adminController.login)
    .post(adminController.authenLogin)

module.exports = router;

// update sửa sản phẩm vào deploy để m.n cùng test
