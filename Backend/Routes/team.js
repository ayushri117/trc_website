const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();

const teamController = require("../Controller/team");

// router.post("/login", authController.login);
router.get("/team", teamController.getTeam);
router.post("/addMember", auth, teamController.postMember);
router.post("/removeMember", auth, teamController.postRemoveMember);

module.exports = router;
