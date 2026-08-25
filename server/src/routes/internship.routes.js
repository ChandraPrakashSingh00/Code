const express = require("express");

const {
  applyInternship,
  getAllApplications,
  updateStatus,
  issueCertificate,
  deleteApplication,
} = require("../controllers/internship.controller");

const { protectAdmin } = require("../middleware/auth.middleware");

const router = express.Router();

/*
============================================================
  PUBLIC
============================================================
*/

router.post("/apply", applyInternship);

/*
============================================================
  ADMIN (PROTECTED)
============================================================
*/

router.get("/admin/all", protectAdmin, getAllApplications);

router.patch(
  "/admin/:id/status",
  protectAdmin,
  updateStatus
);

router.post(
  "/admin/:id/certificate",
  protectAdmin,
  issueCertificate
);

router.delete(
  "/admin/:id",
  protectAdmin,
  deleteApplication
);

module.exports = router;
