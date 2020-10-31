var express = require('express');
const { route } = require('.');
var router = express.Router();
const adminRouter = require('../controllers/admin')
var multer = require('multer');
var upload = multer({ dest : './public/uploads' }).fields([{ name : 'img', maxCount : 1  },
                                                           { name : 'img1', maxCount : 1  }])

router.route('/postCategory')
    .get(adminRouter.postCategory)
    .post(adminRouter.addCategory)

router.get('/postProduct', adminRouter.postProduct)

module.exports = router;
