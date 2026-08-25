const PDFDocument = require("pdfkit");
const QRCode = require("qrcode");
const path = require("path");

const {
  COMPANY_NAME,
  COMPANY_FULL_NAME,
  MSME_REG_NO,
  BRAND_COLOR,
  DARK_COLOR,
  VERIFY_BASE_URL,
} = require("../config/company");

const LOGO_PATH = path.join(
  __dirname,
  "../assets/logo.png"
);

/*
============================================================
  FORMAT DATE
  eg: 12 Jan 2026
============================================================
*/

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/*
============================================================
  GENERATE CERTIFICATE PDF
  Returns a Buffer containing the generated PDF.
  No external storage (S3 / Cloudinary) needed — PDF is
  generated on-the-fly every time it's requested.
============================================================
*/

const generateCertificatePDF = async (internship) => {
  const verifyUrl = `${VERIFY_BASE_URL}/verify/${encodeURIComponent(
    internship.certificateId
  )}`;

  const qrDataUrl = await QRCode.toBuffer(verifyUrl, {
    margin: 1,
    width: 220,
    color: {
      dark: DARK_COLOR,
      light: "#ffffff",
    },
  });

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        layout: "landscape",
        margin: 0,
      });

      const chunks = [];

      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      const pageWidth = doc.page.width;
      const pageHeight = doc.page.height;

      /* ============================================================
         BACKGROUND + OUTER BORDER
      ============================================================ */

      doc
        .rect(0, 0, pageWidth, pageHeight)
        .fill("#ffffff");

      doc
        .lineWidth(2)
        .strokeColor(BRAND_COLOR)
        .rect(24, 24, pageWidth - 48, pageHeight - 48)
        .stroke();

      doc
        .lineWidth(0.75)
        .strokeColor("#c7d7fb")
        .rect(34, 34, pageWidth - 68, pageHeight - 68)
        .stroke();

      /* ============================================================
         LOGO + COMPANY NAME
      ============================================================ */

      try {
        doc.image(LOGO_PATH, pageWidth / 2 - 65, 55, {
          width: 130,
        });
      } catch (err) {
        doc
          .fontSize(20)
          .fillColor(BRAND_COLOR)
          .font("Helvetica-Bold")
          .text(COMPANY_NAME, 0, 60, {
            align: "center",
          });
      }

      /* ============================================================
         TITLE
      ============================================================ */

      doc
        .fontSize(30)
        .fillColor(DARK_COLOR)
        .font("Helvetica-Bold")
        .text("CERTIFICATE OF INTERNSHIP", 0, 145, {
          align: "center",
          characterSpacing: 1.5,
        });

      doc
        .moveTo(pageWidth / 2 - 90, 182)
        .lineTo(pageWidth / 2 + 90, 182)
        .lineWidth(2)
        .strokeColor(BRAND_COLOR)
        .stroke();

      doc
        .fontSize(11)
        .font("Helvetica")
        .fillColor("#4b5563")
        .text("This certificate is proudly presented to", 0, 198, {
          align: "center",
        });

      /* ============================================================
         INTERN NAME
      ============================================================ */

      doc
        .fontSize(26)
        .font("Helvetica-Bold")
        .fillColor(BRAND_COLOR)
        .text(internship.fullName, 0, 222, {
          align: "center",
        });

      /* ============================================================
         BODY TEXT
      ============================================================ */

      const bodyText =
        `for successfully completing an internship in ` +
        `${internship.domain} at ${COMPANY_FULL_NAME}, ` +
        `for a duration of ${internship.duration}` +
        (internship.startDate && internship.endDate
          ? ` from ${formatDate(
              internship.startDate
            )} to ${formatDate(internship.endDate)}.`
          : ".") +
        ` During this period, the intern demonstrated dedication, ` +
        `strong learning ability and delivered quality work on ` +
        `assigned projects.`;

      doc
        .fontSize(11.5)
        .font("Helvetica")
        .fillColor("#374151")
        .text(bodyText, 130, 268, {
          align: "center",
          width: pageWidth - 260,
          lineGap: 5,
        });

      /* ============================================================
         FOOTER: CERT ID | SIGNATURE | QR
      ============================================================ */

      const footerY = pageHeight - 160;

      // Certificate ID + Issue date (left)
      doc
        .fontSize(9.5)
        .font("Helvetica-Bold")
        .fillColor(DARK_COLOR)
        .text("Certificate ID", 70, footerY, { continued: false });

      doc
        .font("Helvetica")
        .fillColor("#4b5563")
        .text(internship.certificateId, 70, footerY + 14);

      doc
        .font("Helvetica-Bold")
        .fillColor(DARK_COLOR)
        .text("Issued On", 70, footerY + 38);

      doc
        .font("Helvetica")
        .fillColor("#4b5563")
        .text(
          formatDate(
            internship.certificateIssuedAt || new Date()
          ),
          70,
          footerY + 52
        );

      // Signature (center)
      doc
        .moveTo(pageWidth / 2 - 80, footerY + 55)
        .lineTo(pageWidth / 2 + 80, footerY + 55)
        .lineWidth(1)
        .strokeColor("#9ca3af")
        .stroke();

      doc
        .fontSize(9.5)
        .font("Helvetica-Bold")
        .fillColor(DARK_COLOR)
        .text("Authorized Signatory", pageWidth / 2 - 80, footerY + 62, {
          width: 160,
          align: "center",
        });

      doc
        .fontSize(8.5)
        .font("Helvetica")
        .fillColor("#6b7280")
        .text(COMPANY_FULL_NAME, pageWidth / 2 - 80, footerY + 76, {
          width: 160,
          align: "center",
        });

      // QR Code (right) — scan to verify
      const qrSize = 78;
      const qrX = pageWidth - 70 - qrSize;

      doc.image(qrDataUrl, qrX, footerY - 5, {
        width: qrSize,
        height: qrSize,
      });

      doc
        .fontSize(8)
        .font("Helvetica")
        .fillColor("#6b7280")
        .text("Scan to verify", qrX, footerY + qrSize - 2, {
          width: qrSize,
          align: "center",
        });

      /* ============================================================
         BOTTOM STRIP: MSME BADGE
      ============================================================ */

      doc
        .moveTo(50, pageHeight - 60)
        .lineTo(pageWidth - 50, pageHeight - 60)
        .lineWidth(0.5)
        .strokeColor("#e5e7eb")
        .stroke();

      doc
        .fontSize(8)
        .font("Helvetica")
        .fillColor("#9ca3af")
        .text(
          `${COMPANY_FULL_NAME} · MSME Registered · Udyam Reg. No: ${MSME_REG_NO}`,
          0,
          pageHeight - 46,
          {
            align: "center",
          }
        );

      doc
        .fontSize(7.5)
        .fillColor("#c7cdd6")
        .text(
          "This is a system-generated certificate. Verify authenticity by scanning the QR code above.",
          0,
          pageHeight - 34,
          { align: "center" }
        );

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  generateCertificatePDF,
};
