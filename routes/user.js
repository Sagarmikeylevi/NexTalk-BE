const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.createSession);
router.get("/getUsers", userController.getAllUsers);

module.exports = router;
