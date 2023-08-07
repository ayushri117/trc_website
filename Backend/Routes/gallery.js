const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();

const galleryController = require("../Controller/gallery");

// router.post("/login", authController.login);
router.get("/gallery", galleryController.getGallery);
router.post("/addImage", auth, galleryController.postGallery);
router.post("/removeImage", auth, galleryController.postRemoveGallery);

module.exports = router;
