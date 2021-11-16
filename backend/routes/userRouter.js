const productController = require("../controllers/userController.js");
const { body, validationResult } = require("express-validator");

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
  productController.createUser
);

// authenticate a user no login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
    // body('password', 'Choose a password of minimum 8 characters').isLength({ min: 8}),
    // body('password', 'Choose a password of maximum 10 characters').isLength({ max: 20})
  ],
  productController.loginUser
);

module.exports = router;
