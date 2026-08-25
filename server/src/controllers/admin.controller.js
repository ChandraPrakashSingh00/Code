const bcrypt = require("bcryptjs");

const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

/*
============================================================
  ADMIN LOGIN
  POST /api/admin/login
============================================================
*/

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const admin = await Admin.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken({
      id: admin._id,
      email: admin.email,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    console.error("Admin Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

/*
============================================================
  GET LOGGED-IN ADMIN
  GET /api/admin/me
============================================================
*/

const getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select(
      "-password"
    );

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      success: true,
      admin,
    });
  } catch (error) {
    console.error("Get Me Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch admin profile",
    });
  }
};

module.exports = {
  loginAdmin,
  getMe,
};
