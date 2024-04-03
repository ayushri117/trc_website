const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();

const adminController = require("../Controller/admin");
router.post("/blog/add", auth, adminController.addBlog);
router.post("/blog/edit/:id", auth, adminController.editBlog);
router.post("/blog/previewEdit/:id", auth, adminController.previewEdit);
// router.post("/blogs/user/:id", adminController.getUserBlogs);

module.exports = router;
