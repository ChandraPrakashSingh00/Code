const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    college: {
      type: String,
      trim: true,
    },

    domain: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      required: true,
      trim: true,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },

    resumeLink: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
    },

    /*
    ==========================================================
      STATUS FLOW
      applied -> ongoing -> completed (certificate can be
      generated once status is "completed")
    ==========================================================
    */

    status: {
      type: String,
      enum: ["applied", "ongoing", "completed", "rejected"],
      default: "applied",
    },

    /*
    ==========================================================
      CERTIFICATE INFO
      certificateId format: CPS/2026/INT/001
    ==========================================================
    */

    certificateId: {
      type: String,
      unique: true,
      sparse: true,
    },

    certificateIssued: {
      type: Boolean,
      default: false,
    },

    certificateIssuedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Internship",
  internshipSchema
);
