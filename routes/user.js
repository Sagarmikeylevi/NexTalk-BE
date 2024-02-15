const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.createSession);

module.exports = router;
