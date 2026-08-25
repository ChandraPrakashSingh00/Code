const Internship = require("../models/Internship");
const {
  generateCertificatePDF,
} = require("../services/certificate.service");

/*
============================================================
  VERIFY CERTIFICATE (PUBLIC)
  GET /api/certificate/verify/:certificateId
============================================================
*/

const verifyCertificate = async (req, res) => {
  try {
    const { certificateId } = req.params;

    const internship = await Internship.findOne({
      certificateId,
      certificateIssued: true,
    });

    if (!internship) {
      return res.status(404).json({
        success: false,
        valid: false,
        message: "Certificate not found or not issued yet",
      });
    }

    return res.status(200).json({
      success: true,
      valid: true,
      data: {
        certificateId: internship.certificateId,
        fullName: internship.fullName,
        domain: internship.domain,
        duration: internship.duration,
        startDate: internship.startDate,
        endDate: internship.endDate,
        issuedAt: internship.certificateIssuedAt,
      },
    });
  } catch (error) {
    console.error("Verify Certificate Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to verify certificate",
    });
  }
};

/*
============================================================
  DOWNLOAD / STREAM CERTIFICATE PDF (PUBLIC)
  GET /api/certificate/:certificateId/download
  Generated on-the-fly, nothing stored on disk / cloud.
============================================================
*/

const downloadCertificate = async (req, res) => {
  try {
    const { certificateId } = req.params;

    const internship = await Internship.findOne({
      certificateId,
      certificateIssued: true,
    });

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found or not issued yet",
      });
    }

    const pdfBuffer = await generateCertificatePDF(
      internship
    );

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${internship.certificateId.replace(
        /\//g,
        "-"
      )}.pdf"`
    );

    return res.send(pdfBuffer);
  } catch (error) {
    console.error("Download Certificate Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate certificate",
    });
  }
};

module.exports = {
  verifyCertificate,
  downloadCertificate,
};
