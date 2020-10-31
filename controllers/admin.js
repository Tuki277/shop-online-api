const Category = require('../models/category')

const postCategory = async (req, res, next) => {
    res.render('admin/postCategory')
}

const postProduct = async (req, res, next) => {
    console.log('day la post product')
    res.render('admin/postProduct')
}

const addCategory = async (req, res, next) => {
    const newCategory = Category(req.body)
    console.log(newCategory)
}

module.exports = {
    postCategory,
    postProduct,
    addCategory
}

// router.post('/postCategory', upload, function (req, res) {
//     const {
//         list,
//         name_crate
//     } = req.body

//     const image = req.files['img1'][0].path.split('\\').slice(1).join('\\')

//     const newPostCategory = {
//         list : list,
//         name_crate : name_crate,
//         image : image
//     }

//     const newPost = new postCategory(newPostCategory)
//     newPost.save()

//     res.redirect('/add/postCategory')
// })