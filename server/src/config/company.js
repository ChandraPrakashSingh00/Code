module.exports = {
  // Short brand name (used in fallback text if logo image fails to load)
  COMPANY_NAME: "CodeCPS",

  // Full legal/display name of the company
  COMPANY_FULL_NAME: "CodeCPS Technologies",

  // MSME Udyam registration number (shown in certificate footer)
  MSME_REG_NO: "UDYAM-UP-28-0236761",

  // Brand colors used across the certificate
  BRAND_COLOR: "#086ffd",
  DARK_COLOR: "#111827",

  // Authorized signatory details (shown on certificate signature block)
  SIGNATORY_NAME: "Chandra Parkash Singh",
  SIGNATORY_DESIGNATION: "Founder & Director, CodeCPS Technologies",

  // Base URL used to build the QR code verification link.
  // Falls back to CLIENT_URL from .env if not overridden.
  VERIFY_BASE_URL: process.env.CLIENT_URL || "http://localhost:5173",
};