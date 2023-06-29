const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();

const resourceController = require("../Controller/resource");

// router.post("/login", authController.login);
router.get("/resource", resourceController.getResource);
router.post("/addResource", auth, resourceController.postResource);
router.post("/removeResource", auth, resourceController.postRemoveResource);

module.exports = router;
