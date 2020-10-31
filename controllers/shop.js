const index = async (req, res, next) => {
    res.render('homepage/index')
}

const about = async (req, res, next) => {
    res.render('homepage/about')
}

const shop = async (req, res, next) => {
    res.render('homepage/shop')
}

const detailProduct = async (req, res, next) => {
    res.render('homepage/shop-single')
}

const contact = async (req, res, next) => {
    res.render('homepage/contact')
}

const thankyou = async (req, res, next) => {
    res.render('homepage/thankyou')
}

module.exports = {
    index,
    about,
    shop,
    detailProduct,
    contact,
    thankyou
}