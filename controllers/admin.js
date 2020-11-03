const c = require('config')
const Category = require('../api/models/postCategory')
const Product = require('../api/models/postProduct')

const postCategory = async (req, res, next) => {
    res.render('admin/postCategory')
}

const addCategory = async (req, res, next) => {

    const {
        name,
        author
    } = req.body

    const image = req.files['image'][0].path.split('\\').slice(1).join('\\')

    const newCategory = {
        name : name,
        author : author,
        image : image
    }


    const category = new Category(newCategory)
    category.save()

    res.redirect('/admin/postCategory')
}


const postProduct = async (req, res, next) => {
    const Categories = await Category.find().lean()
    res.render('admin/postProduct', { Category : Categories })
}

const addProduct = async (req, res, next) => {

    //Create a new product
    const {
        name,
        size,
        detail,
        price,
    } = req.body

    console.log(req.files)

    const image1 = req.files['image1'][0].path.split('\\').slice(1).join('\\')

    const newProducts = {
        name : name,
        size : size,
        detail : detail,
        price : price,
        image1 : image1
    }

    console.log(newProducts)

    const products = new Product(newProducts)
    products.save()

    res.redirect('/admin/postProduct')

}

module.exports = {
    postCategory,
    postProduct,
    addCategory,
    addProduct
}