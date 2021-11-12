const db = require('../models')


const Product = db.products
// const Review = db.reviews




// add a product
const addProduct = async (req, res)=>{
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

//get all product
const getAllProducts = async (req, res)=>{

    let products = await Product.findAll({})
    res.send(products)
}

//get one product
const getOneProduct = async (req, res)=>{

    let id = req.params.id
    let product = await Product.findOne({ where: {id: id}})
    res.send(product)
}

//get one product
const updateProduct = async (req, res)=>{

    let id = req.params.id

    const product = await Product.update(req.body, { where: {id: id}})
    res.status(200).send(product)
}

//delete one product
const deleteProduct = async (req, res)=>{

    let id = req.params.id
    await Product.destroy({ where: {id: id}})
    res.send("Product is Deleted")
}

// get published
const getPublishedProduct = async (req, res)=>{

    const products = await Product.findAll({ where: {published: true}})
    res.send(products)
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}