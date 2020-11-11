const c = require('config')
const Product = require('../api/models/postProduct')
const hoaDon = require('../api/models/hoaDon')
const cart = require('../api/models/cart')
const session = require('express-session')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'none',
    api_key: '381621652747451',
    api_secret: 'FslI1DN5Eom0AWZe-9VeklvAwgQ'
})

//Category

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

//Product

const postProduct = async (req, res, next) => {
    // const Categories = await Category.find().lean()
    const Products = await Product.find().lean().sort()
    res.render('admin/postProduct', { Products : Products })
}

const addProduct = async (req, res, next) => {

    // console.log(req.body)

    //Create a new product
    const {
        name,
        size,
        detail,
        price,
    } = req.body

    // console.log(req.file)

    const image1 = req.file.path.split('\\').slice(1).join('\\')
    const result = await cloudinary.uploader.upload(req.file.path)

    // console.log("url = ", result.url)

    const newProducts = {
        name : name,
        size : size,
        detail : detail,
        price : price,
        image1 : result.url
    }

    console.log(newProducts)

    const products = new Product(newProducts)
    products.save()

    res.redirect( '/admin/postProduct' )

}

const adminHome = async (req, res, next) => {
    res.render('admin/adminSite')
}

const baoCao = async (req, res, next) => {
    const muaHang = await hoaDon.find().lean()
    console.log(muaHang)
    res.render('admin/baocao', { muaHang : muaHang })
}

const editProduct = async (req, res, next) => {
    const products = await Product.find().lean().sort()
    res.render('admin/editProduct', { session : req.session, products : products })
}

const deleteProduct = async (req, res, next) => {

    // console.log('day la router delete')
    const { id } = req.params
    // console.log('id la : ', id)
    const Products = await Product.findOneAndDelete(id)
    // console.log('san pham la : '  ,Products)
    res.redirect('/admin/edit')
}

const findProductUpdate = async (req, res, next) => {

    const { id } = req.params

    const Products = await Product.findById(id)

    res.render('admin/updateProducts', { Products : Products })

}

const updateProduct = async (req, res, next) => {

    const { id } = req.params

    console.log(id)

    const {
        name,
        size,
        detail,
        price,
    } = req.body

    console.log(req.files)

    // const image1 = req.files['image1'][0].path.split('\\').slice(1).join('\\')

    const newProducts = {
        name : name,
        size : size,
        detail : detail,
        price : price
        // image1 : image1
    }

    const update = await Product.findByIdAndUpdate(id, newProducts)

    console.log('update san pham = ', update)

    res.redirect('/admin/edit')

}

const login = async (req, res, next) => {
    res.render('admin/login', { session : req.session })
}

const authenLogin = async (req, res, next) => {
    
    if (req.body.username === 'admin' && req.body.password === 'admin123')
    {
        res.redirect('/admin')
    }
    else {
        res.send('<h1>Đăng nhập sai !!! </h1>')
    }
}

module.exports = {
    postCategory,
    postProduct,
    addCategory,
    addProduct,
    adminHome,
    baoCao,
    editProduct,
    deleteProduct,
    findProductUpdate,
    updateProduct,
    login,
    authenLogin
}