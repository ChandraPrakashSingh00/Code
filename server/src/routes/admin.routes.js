const express = require("express");

const {
  loginAdmin,
  getMe,
} = require("../controllers/admin.controller");

const { protectAdmin } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/login", loginAdmin);

router.get("/me", protectAdmin, getMe);

module.exports = router;
