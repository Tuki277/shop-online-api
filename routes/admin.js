var express = require('express');
const { route } = require('.');
var router = express.Router();
const adminRouter = require('../controllers/admin')
var multer = require('multer');
var upload = multer({ dest : './public/uploads' }).fields([{ name : 'image', maxCount : 1  },
                                                           { name : 'image1', maxCount : 1  }])


router.route('/postCategory')
    .get(adminRouter.postCategory)
    .post(upload, adminRouter.addCategory)

router.route('/postProduct')
    .get(adminRouter.postProduct)
    .post(upload, adminRouter.addProduct)

router.get('/', adminRouter.adminHome)

module.exports = router;
