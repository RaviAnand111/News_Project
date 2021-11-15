const { validationResult } = require('express-validator')
const db = require('../models')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')


const JWT_SECRET = "Welcometonewsapplication"

const User = db.users
// const Review = db.reviews


// create a user
const createUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password, salt)
    console.log(secPass)

    let info = {
        email: req.body.email,
        password: secPass,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        dob: req.body.dob,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        let olduser = await User.findOne({ where: { email: info.email } });
        if (info.email == olduser.email) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        await User.create(info)
        const data = {
            user: {
                id: User.user_id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        console.log(authToken)
        res.json({ authToken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error :(")
    }
}

// to login a user
const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({ where: { email: req.body.email } })
        if (email != user.email) {
            return res.status(400).json({ error: "Please try to login with correct Credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct Credentials" })
        }
        const data = {
            user: {
                id: User.user_id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        console.log(authToken)
        res.json({ authToken })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error :(")
    }
}

// //get one product
// const getOneProduct = async (req, res)=>{

//     let id = req.params.id
//     let product = await Product.findOne({ where: {id: id}})
//     res.send(product)
// }

// //get one product
// const updateProduct = async (req, res)=>{

//     let id = req.params.id

//     const product = await Product.update(req.body, { where: {id: id}})
//     res.status(200).send(product)
// }

// //delete one product
// const deleteProduct = async (req, res)=>{

//     let id = req.params.id
//     await Product.destroy({ where: {id: id}})
//     res.send("Product is Deleted")
// }

// // get published
// const getPublishedProduct = async (req, res)=>{

//     const products = await Product.findAll({ where: {published: true}})
//     res.send(products)
// }

module.exports = {
    createUser,
    loginUser
    // getAllProducts,
    // getOneProduct,
    // updateProduct,
    // deleteProduct,
    // getPublishedProduct
}