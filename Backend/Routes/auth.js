const express = require("express");

const router = express.Router();

const authController = require("../Controller/auth");

router.post("/login", authController.login);
router.get("/logout", authController.logout);
module.exports = router;
