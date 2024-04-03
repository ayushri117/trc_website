const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();

const blogController = require("../Controller/blog");


router.get("/blogs", blogController.getBlogs);
router.post("/blog/:id", blogController.getBlog);
router.post("/blog/add", auth, blogController.postBlog);
router.post("/blog/edit/:id", auth, blogController.postEditBlog);
router.post("/blog/previewEdit/:id", auth, blogController.postEditBlog);
router.post("/blog/delete/:id", auth, blogController.postRemoveBlog);
router.post("/blogs/user/:id", blogController.getUserBlogs);

module.exports = router;
