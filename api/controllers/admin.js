const c = require('config')
const { findById } = require('../models/postCategory')
const postCategory = require('../models/postCategory')  // models của Category
const postProduct = require('../models/postProduct') // models của Product

// Category

const newPostCategory = async (req, res, next) => {
    const CreatePostCategory = new postCategory(req.body)
    console.log("Create Category ",CreatePostCategory)
    await CreatePostCategory.save()
    return res.status(201).json({ success : true })
}

const getAllCategory = async (req, res, next) => {
    const categories = await postCategory.find({})
    return res.status(200).json({ categories })
}

const getAllProductByID = async (req, res, next) => {
    const { postCategoryID } = req.params

    console.log("id = ", postCategoryID)

    const product = await postProduct.find({ owner : postCategoryID })
    res.status(200).json({ product : product })
}

const deleteCategory = async (req, res, next) => {
    const { postCategoryID } = req.params

    console.log("ID Category = ", postCategoryID)

    // get category, xoa mot category thi phai xoa ca cac san pham thuoc thu muc do
    const category = await postCategory.findById(postCategoryID)

    console.log('category = ' ,category)

    //get owner
    const product = await postProduct.findOneAndDelete({ owner : postCategoryID})

    console.log('product ', product)

    //remove
    await category.remove()

    return res.status(200).json({ success : true })

}

const updateCategory = async(req, res, next) => {
    const { postCategoryID } = req.params
    const updateCategoryByID = req.body
    const result = await postCategory.findByIdAndUpdate(postCategoryID, updateCategoryByID)
    return res.status(200).json({ success : true })
}

// Product

const newPostProduct = async (req, res, next) => {

    const { postCategoryID } = req.params

    const newProduct = new postProduct(req.body)

    const category = await postCategory.findById( postCategoryID )

    newProduct.owner = category

    await newProduct.save()

    category.products.push(newProduct._id)

    await category.save()

    res.status(201).json({ product : newProduct })

}

const getAllProduct = async (req, res, next) => {
    const products = await postProduct.find({})
    return res.status(200).json({ products })
}

const getProduct = async (req, res, next) => {
    const { id } = req.params

    console.log(id)

    const product = await postProduct.findById(id)
    res.status(200).json({ product : product })
}

const updateProduct = async (req, res, next) => {
    const { postProductID } = req.params
    const updateProductByID = req.body
    const result = await postProduct.findByIdAndUpdate(postProductID, updateProductByID)
    return res.status(200).json({ success : true })
}

const deleteProduct = async (req, res, next) => {
    const { postProductID } = req.params
}

module.exports = {

    // exports Category
    newPostCategory,
    getAllCategory,
    getAllProductByID,
    deleteCategory,
    updateCategory,

    // exports Product
    newPostProduct,
    getAllProduct,
    getProduct,
    deleteProduct,
    updateProduct

}