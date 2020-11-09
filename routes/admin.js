var express = require('express');
const { route } = require('.');
var router = express.Router();
const adminController = require('../controllers/admin')
var multer = require('multer');
var upload = multer({ dest : './public/uploads' }).fields([{ name : 'image', maxCount : 1  },
                                                           { name : 'image1', maxCount : 1  }])


router.route('/postCategory')
    .get(adminController.postCategory)
    .post(upload, adminController.addCategory)

router.get('/edit', adminController.editProduct)

router.get('/edit/:id', adminController.deleteProduct)

router.route('/postProduct')
    .get(adminController.postProduct)
    .post(upload, adminController.addProduct)

router.get('/', adminController.adminHome)

router.get('/baocao', adminController.baoCao)

module.exports = router;
