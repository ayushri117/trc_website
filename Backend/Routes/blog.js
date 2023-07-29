const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();

const blogController = require("../Controller/blog");

// router.post("/login", authController.login);
router.get("/blogs", blogController.getBlogs);
router.post("/blog", blogController.getBlog);
router.post("/addblog", auth, blogController.postBlog);
router.post("/editblog", auth, blogController.postEditBlog);
router.post("/removeBlog", auth, blogController.postRemoveBlog);

module.exports = router;
