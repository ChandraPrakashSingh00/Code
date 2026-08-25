const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./src/config/db");

const aiRoutes = require("./src/routes/ai.routes");
const internshipRoutes = require("./src/routes/internship.routes");
const adminRoutes = require("./src/routes/admin.routes");
const certificateRoutes = require("./src/routes/certificate.routes");

const app = express();

const PORT = process.env.PORT || 5000;

/*
============================================================
  SECURITY HEADERS
  Adds standard hardening headers (X-Content-Type-Options,
  X-Frame-Options, Strict-Transport-Security, etc.). Helps
  with security-scanner trust (e.g. antivirus/webadvisor
  "reputation" scans) and basic hardening.
============================================================
*/

app.use(helmet());
app.disable("x-powered-by");

/*
============================================================
  DATABASE CONNECTION
  On Vercel serverless, this runs once per cold start and
  mongoose caches the connection internally.
============================================================
*/

connectDB();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://www.codecpstechnologies.in",
  "https://codecpstechnologies.in",
  "http://localhost:5173",
  "http://localhost:5174",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "1mb",
  })
);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "CodeCPS AI Backend is running",
  });
});

app.use("/api/ai", aiRoutes);
app.use("/api/internship", internshipRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/certificate", certificateRoutes);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

/*
============================================================
  START SERVER (LOCAL ONLY)
  On Vercel, the exported `app` is used directly as a
  serverless function — app.listen is skipped there.
============================================================
*/

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 CodeCPS Backend running on port ${PORT}`);
  });
}

module.exports = app;