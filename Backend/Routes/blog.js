const express = require("express");
const router = express.Router();
const blogController = require("../Controller/Blog");

router.get("/blogs", blogController.getBlogs);
router.post("/blog/:id", blogController.getBlog);
// router.post("/blog/delete/:id", auth, blogController.postRemoveBlog);

module.exports = router;
