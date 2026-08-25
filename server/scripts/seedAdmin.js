const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const connectDB = require("../src/config/db");
const Admin = require("../src/models/Admin");

/*
============================================================
  SEED ADMIN
  Reads ADMIN_EMAIL / ADMIN_PASSWORD from .env and creates
  (or updates) the admin account.
  Run with: npm run seed:admin
============================================================
*/

const seedAdmin = async () => {
  try {
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      console.error(
        "❌ Please set ADMIN_EMAIL and ADMIN_PASSWORD in server/.env first"
      );
      process.exit(1);
    }

    await connectDB();

    const email = process.env.ADMIN_EMAIL.trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existing = await Admin.findOne({ email });

    if (existing) {
      existing.password = hashedPassword;
      await existing.save();
      console.log(`✅ Admin password updated for ${email}`);
    } else {
      await Admin.create({
        email,
        password: hashedPassword,
        name: "Admin",
      });
      console.log(`✅ Admin created: ${email}`);
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed Admin Error:", error);
    process.exit(1);
  }
};

seedAdmin();
