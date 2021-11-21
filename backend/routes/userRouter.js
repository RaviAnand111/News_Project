const userController = require("../controllers/userController.js");
const { body } = require("express-validator");
const checkLogin = require("../middleware/checkLogin");
const checkAdmin = require("../middleware/checkAdmin.js");

const router = require("express").Router();

// create user no login required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Choose a password of minimum 8 characters").isLength({
      min: 8,
    }),
    body("password", "Choose a password of maximum 10 characters").isLength({
      max: 20,
    }),
  ],
  userController.createUser
);

// authenticate a user no login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  userController.loginUser
);

// geting user by login id password
router.post("/getuser", checkLogin, userController.getUser);

// fetch news user login required
router.post(
  "/fetchnews/:category", checkLogin, userController.getNews
);







// authenticate an admin no login required
router.post(
  "/adminlogin",
  [
    body("user_id", "Enter a valid email").exists(),
    body("password", "Password cannot be blank").exists(),
  ],
  userController.loginAdmin
);

// geting all the user details if admin is logged in
router.post("/getallusers", checkAdmin, userController.getAllUsers);

// adding a news if admin is logged in
router.post("/addnews", checkAdmin, userController.addNews);

// delete a news if admin is logged in
router.delete("/deletenews", checkAdmin, userController.deleteNews);


module.exports = router;