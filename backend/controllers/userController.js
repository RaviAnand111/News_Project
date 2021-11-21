const { validationResult } = require("express-validator");
const sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')
const db = require("../models");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const JWT_SECRET = "Welcometonewsapplication";

const User = db.users;
const Admin = db.admins;
const News = db.newss;
const Location = db.locations;
const Category = db.categories;
const Source = db.sources;
// const Review = db.reviews

// create a user
const createUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);

  let info = {
    email: req.body.email,
    password: secPass,
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    dob: req.body.dob,
    gender: req.body.gender,
    phone: req.body.phone,
    address: req.body.address,
    admin_user_id: "admin",
  };


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // let olduser = await User.findOne({ where: { email: req.body.email } });
    // if (info.email == olduser.email) {
    //   return res
    //     .status(400)
    //     .json({ error: "Sorry a user with this email already exists" });
    // }

    await User.create(info);
    const data = {
      user: {
        email: User.email,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    res
      .status(200)
      .send({ status: "User Created Successfully", authToken: authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(" User Already Exists :(");
  }
};

// to login a user
const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Please try to login with correct Credentials",
      });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(401).json({
        success: false,
        error: "Please try to login with correct Credentials",
      });
    }
    const data = {
      user: {
        email: user.email,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    // let userData = await User.findOne({ where: { email: req.body.email } });
    // res.json(userData);
    res.json({ success: true, authToken: authToken });
    // res.json(authToken);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error :(");
  }
};

// get user by credentials
const getUser = async (req, res) => {
  try {
    emailId = req.user.email;
    const user = await User.findOne({ where: { email: emailId } });
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

// get news if login
const getNews = async (req, res) => {
  try {
    let category = req.params.category
    let news = await db.sequelize.query(
      'select n.id, n.title, n.description, n.url, n.url_to_image, n.published_at, s.name, s.author, l.city, l.country from news n, category ca, location l, source s where n.category_id = ca.category_id and n.location_id = l.location_id and n.source_id = s.source_id and ca.name = :category order by n.published_at desc;',
      {
        replacements: { category: category },
        type: QueryTypes.SELECT
      }
    );
    res.status(200).send(news)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};








// to login an admin
const loginAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  const { user_id, password } = req.body;
  try {
    let admin = await Admin.findOne({ where: { user_id: req.body.user_id } });
    if (!admin) {
      return res.status(401).json({
        success: false,
        error: "Please try to login with correct Credentials",
      });
    }

    const passwordCompare = await bcrypt.compare(password, admin.password);
    if (!passwordCompare) {
      return res.status(401).json({
        success: false,
        error: "Please try to login with correct Credentials",
      });
    }
    const data = {
      admin: {
        user_id: admin.user_id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ success: true, authToken: authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error :(");
  }
};

// get all the users detail if admin is logged in
const getAllUsers = async (req, res) => {
  try {
    let users = await db.sequelize.query(
      'select u.f_name, u.l_name, u.email, u.gender, u.dob from user u where u.admin_user_id = "admin";',
      {
        type: QueryTypes.SELECT
      }
    );
    res.send(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

// add a news
const addNews = async (req, res) => {
  let now = new Date();
  try {
    let location = {
      country: req.body.country,
      city: req.body.city
    }
    await Location.create(location);
    let loc = await Location.findOne({ where: { country: req.body.country, city: req.body.city } })
    let loc_id = await loc.location_id

    let source = {
      name: req.body.name,
      author: req.body.author
    }
    await Source.create(source);
    let sou = await Source.findOne({ where: { name: req.body.name, author: req.body.author } })
    let sou_id = await sou.source_id

    let news = {
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      url_to_image: req.body.url_to_image,
      published_at: now,
      admin_user_id: "admin",
      category_id: req.body.category_id,
      location_id: await loc_id,
      source_id: await sou_id,
    };
    await News.create(news);
    res.status(200).send({ status: "News added Successfully" });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  } catch (error) {
    console.error(error.message);
    res.status(500).send(" User Already Exists :(");
  }
};

// delete an existing news if admin is logged in
const deleteNews = async (req, res) => {
  const news_id = req.body.id
  try {
    let news = await News.findOne({ where: { id: news_id } })
    const source_id = await news.source_id
    const location_id = await news.location_id

    await News.destroy({ where: { id: news_id } });
    await Source.destroy({ where: { source_id: source_id } });
    await Location.destroy({ where: { location_id: location_id } });
    res.send({ message: "Deleted!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
  getNews,
  loginAdmin,
  getAllUsers,
  deleteNews,
  addNews
};
