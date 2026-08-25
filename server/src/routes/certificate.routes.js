const express = require("express");

const {
  verifyCertificate,
  downloadCertificate,
} = require("../controllers/certificate.controller");

const router = express.Router();

router.get("/verify/:certificateId", verifyCertificate);

router.get(
  "/:certificateId/download",
  downloadCertificate
);

module.exports = router;
