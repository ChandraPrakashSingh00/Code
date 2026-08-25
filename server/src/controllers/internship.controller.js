const Internship = require("../models/Internship");
const getNextCertificateId = require("../utils/certificateId");

/*
============================================================
  APPLY FOR INTERNSHIP
  POST /api/internship/apply
============================================================
*/

const applyInternship = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      college,
      domain,
      duration,
      resumeLink,
      message,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !domain ||
      !duration
    ) {
      return res.status(400).json({
        success: false,
        message:
          "fullName, email, phone, domain and duration are required",
      });
    }

    const internship = await Internship.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      college: college ? college.trim() : "",
      domain: domain.trim(),
      duration: duration.trim(),
      resumeLink: resumeLink ? resumeLink.trim() : "",
      message: message ? message.trim() : "",
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: internship,
    });
  } catch (error) {
    console.error("Apply Internship Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
};

/*
============================================================
  GET ALL APPLICATIONS (ADMIN)
  GET /api/internship/admin/all
============================================================
*/

const getAllApplications = async (req, res) => {
  try {
    const applications = await Internship.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    console.error("Get Applications Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
    });
  }
};

/*
============================================================
  UPDATE APPLICATION STATUS (ADMIN)
  PATCH /api/internship/admin/:id/status
============================================================
*/

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, startDate, endDate } = req.body;

    const allowedStatus = [
      "applied",
      "ongoing",
      "completed",
      "rejected",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const update = { status };

    if (startDate) update.startDate = startDate;
    if (endDate) update.endDate = endDate;

    const internship = await Internship.findByIdAndUpdate(
      id,
      update,
      { new: true }
    );

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated",
      data: internship,
    });
  } catch (error) {
    console.error("Update Status Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update status",
    });
  }
};

/*
============================================================
  GENERATE / ISSUE CERTIFICATE (ADMIN)
  POST /api/internship/admin/:id/certificate
  Only allowed once status is "completed". Certificate ID
  is generated once and reused on subsequent calls.
============================================================
*/

const issueCertificate = async (req, res) => {
  try {
    const { id } = req.params;

    const internship = await Internship.findById(id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (internship.status !== "completed") {
      return res.status(400).json({
        success: false,
        message:
          "Certificate can only be issued once status is 'completed'",
      });
    }

    if (!internship.certificateId) {
      internship.certificateId = await getNextCertificateId();
    }

    internship.certificateIssued = true;
    internship.certificateIssuedAt =
      internship.certificateIssuedAt || new Date();

    await internship.save();

    return res.status(200).json({
      success: true,
      message: "Certificate issued",
      data: internship,
    });
  } catch (error) {
    console.error("Issue Certificate Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to issue certificate",
    });
  }
};

/*
============================================================
  DELETE APPLICATION (ADMIN)
  DELETE /api/internship/admin/:id
============================================================
*/

const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const internship = await Internship.findByIdAndDelete(id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Application deleted",
    });
  } catch (error) {
    console.error("Delete Application Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete application",
    });
  }
};

module.exports = {
  applyInternship,
  getAllApplications,
  updateStatus,
  issueCertificate,
  deleteApplication,
};
