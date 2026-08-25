module.exports = {
  COMPANY_NAME: "CodeCPS",
  COMPANY_FULL_NAME: "CodeCPS Technologies",

  // TODO: replace with your actual MSME Udyam registration number
  MSME_REG_NO: "UDYAM-UP-28-0236761",

  BRAND_COLOR: "#086ffd",
  DARK_COLOR: "#111827",

  // Base URL used to build the QR code verification link.
  // Falls back to CLIENT_URL from .env if not overridden.
  VERIFY_BASE_URL:
    process.env.CLIENT_URL || "http://localhost:5173",
};
