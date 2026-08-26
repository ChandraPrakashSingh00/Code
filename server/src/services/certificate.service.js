const PDFDocument = require("pdfkit");
const QRCode = require("qrcode");
const path = require("path");
const fs = require("fs");

const {
  COMPANY_NAME,
  COMPANY_FULL_NAME,
  MSME_REG_NO,
  BRAND_COLOR,
  DARK_COLOR,
  SIGNATORY_NAME,
  SIGNATORY_DESIGNATION,
  VERIFY_BASE_URL,
} = require("../config/company");

// Shared date calculation logic
const { calculateEndDate } = require("../utils/durationHelper");

/*
============================================================
  ASSET PATHS
============================================================
*/

const LOGO_PATH = path.join(
  __dirname,
  "../assets/logo.png"
);

// Exact CODECPS logo mark used as center watermark
const LOGO_MARK_PATH = path.join(
  __dirname,
  "../assets/logo-mark.png"
);

// MSME logo
const MSME_LOGO_PATH = path.join(
  __dirname,
  "../assets/msme.png"
);

// SIGNATURE IMAGE
// PNG signature placed inside assets folder
const SIGNATURE_IMAGE_PATH = path.join(
  __dirname,
  "../assets/signature.png"
);

const hasLogo = fs.existsSync(LOGO_PATH);
const hasLogoMark = fs.existsSync(LOGO_MARK_PATH);
const hasMsmeLogo = fs.existsSync(MSME_LOGO_PATH);
const hasSignatureImage = fs.existsSync(
  SIGNATURE_IMAGE_PATH
);

/*
============================================================
  FORMAT DATE
============================================================
*/

const formatDate = (date) => {
  if (!date) return null;

  const d = new Date(date);

  if (isNaN(d.getTime())) {
    return null;
  }

  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/*
============================================================
  SAFE TEXT
============================================================
*/

const safeText = (
  value,
  fallback = ""
) => {
  if (
    value === null ||
    value === undefined
  ) {
    return fallback;
  }

  return (
    String(value).trim() || fallback
  );
};

/*
============================================================
  ICON CONFIG
============================================================
*/

const ICON_SIZE = 30;

/*
============================================================
  BADGE
============================================================
*/

const drawBadge = (
  doc,
  x,
  y,
  size = ICON_SIZE
) => {
  doc
    .save()
    .circle(
      x + size / 2,
      y + size / 2,
      size / 2
    )
    .fill(BRAND_COLOR)
    .restore();
};

/*
============================================================
  DOCUMENT ICON
============================================================
*/

const drawDocIcon = (
  doc,
  x,
  y
) => {
  drawBadge(doc, x, y);

  const cx =
    x + ICON_SIZE / 2;

  const cy =
    y + ICON_SIZE / 2;

  doc
    .save()
    .roundedRect(
      cx - 6,
      cy - 8,
      12,
      16,
      1.5
    )
    .lineWidth(1.3)
    .stroke("#ffffff");

  doc
    .moveTo(
      cx - 3,
      cy - 3
    )
    .lineTo(
      cx + 3,
      cy - 3
    )
    .moveTo(
      cx - 3,
      cy
    )
    .lineTo(
      cx + 3,
      cy
    )
    .moveTo(
      cx - 3,
      cy + 3
    )
    .lineTo(
      cx + 1,
      cy + 3
    )
    .lineWidth(1)
    .stroke("#ffffff")
    .restore();
};

/*
============================================================
  CALENDAR ICON
============================================================
*/

const drawCalendarIcon = (
  doc,
  x,
  y
) => {
  drawBadge(doc, x, y);

  const cx =
    x + ICON_SIZE / 2;

  const cy =
    y + ICON_SIZE / 2;

  doc
    .save()
    .roundedRect(
      cx - 7,
      cy - 6,
      14,
      13,
      1.5
    )
    .lineWidth(1.3)
    .stroke("#ffffff");

  doc
    .moveTo(
      cx - 7,
      cy - 2
    )
    .lineTo(
      cx + 7,
      cy - 2
    )
    .lineWidth(1)
    .stroke("#ffffff");

  doc
    .moveTo(
      cx - 3.5,
      cy - 8
    )
    .lineTo(
      cx - 3.5,
      cy - 5
    )
    .moveTo(
      cx + 3.5,
      cy - 8
    )
    .lineTo(
      cx + 3.5,
      cy - 5
    )
    .lineWidth(1.3)
    .stroke("#ffffff")
    .restore();
};

/*
============================================================
  CLOCK ICON
============================================================
*/

const drawClockIcon = (
  doc,
  x,
  y
) => {
  drawBadge(doc, x, y);

  const cx =
    x + ICON_SIZE / 2;

  const cy =
    y + ICON_SIZE / 2;

  doc
    .save()
    .circle(
      cx,
      cy,
      7
    )
    .lineWidth(1.3)
    .stroke("#ffffff");

  doc
    .moveTo(
      cx,
      cy
    )
    .lineTo(
      cx,
      cy - 4
    )
    .moveTo(
      cx,
      cy
    )
    .lineTo(
      cx + 3,
      cy + 1
    )
    .lineWidth(1.1)
    .stroke("#ffffff")
    .restore();
};

/*
============================================================
  PREMIUM NAME FLOURISH
============================================================
*/

const drawNameFlourish = (
  doc,
  centerX,
  centerY,
  side = 1
) => {
  const dir = side;
  const color = BRAND_COLOR;

  doc.save();

  /*
  ----------------------------------------------------------
    DIAMOND
  ----------------------------------------------------------
  */

  doc
    .polygon(
      [centerX, centerY - 4],
      [
        centerX + 4,
        centerY,
      ],
      [
        centerX,
        centerY + 4,
      ],
      [
        centerX - 4,
        centerY,
      ]
    )
    .fill(color);

  /*
  ----------------------------------------------------------
    MAIN LINE
  ----------------------------------------------------------
  */

  const lineStartX =
    centerX + dir * 8;

  const lineEndX =
    centerX + dir * 70;

  doc
    .moveTo(
      lineStartX,
      centerY
    )
    .lineTo(
      lineEndX,
      centerY
    )
    .lineWidth(1.4)
    .strokeColor(color)
    .stroke();

  /*
  ----------------------------------------------------------
    SECONDARY LINE
  ----------------------------------------------------------
  */

  doc
    .moveTo(
      lineStartX + dir * 4,
      centerY - 3
    )
    .lineTo(
      lineEndX - dir * 18,
      centerY - 3
    )
    .lineWidth(0.6)
    .strokeColor(color)
    .opacity(0.5)
    .stroke();

  doc.opacity(1);

  /*
  ----------------------------------------------------------
    END DOT
  ----------------------------------------------------------
  */

  doc
    .circle(
      lineEndX,
      centerY,
      1.6
    )
    .fill(color);

  doc.restore();
};

/*
============================================================
  EXACT CODECPS LOGO WATERMARK
============================================================
*/

const drawCodeCPSWatermark = (
  doc,
  pageWidth,
  pageHeight
) => {
  try {
    if (!hasLogoMark) {
      console.warn(
        "CODECPS watermark logo not found:",
        LOGO_MARK_PATH
      );

      return;
    }

    /*
    --------------------------------------------------------
      WATERMARK SIZE
    --------------------------------------------------------
    */

    const watermarkWidth = 135;

    const watermarkHeight =
      watermarkWidth *
      (480 / 864);

    /*
    --------------------------------------------------------
      CENTER POSITION
    --------------------------------------------------------
    */

    const watermarkX =
      (pageWidth -
        watermarkWidth) /
      2;

    const watermarkY =
      (pageHeight -
        watermarkHeight) /
        2 +
      5;

    /*
    --------------------------------------------------------
      DRAW WATERMARK
    --------------------------------------------------------
    */

    doc.save();

    doc.opacity(0.055);

    try {
      doc.image(
        LOGO_MARK_PATH,
        watermarkX,
        watermarkY,
        {
          width:
            watermarkWidth,
          height:
            watermarkHeight,
        }
      );
    } catch (imageError) {
      console.error(
        "Watermark image rendering error:",
        imageError.message
      );
    }

    doc.opacity(1);

    doc.restore();
  } catch (error) {
    console.error(
      "Certificate watermark error:",
      error.message
    );
  }
};

/*
============================================================
  SIGNATURE IMAGE
============================================================

  IMPORTANT:
  signature.png should be a transparent PNG.

  Signature is intentionally kept SMALL and clean.
============================================================
*/

const drawSignature = (
  doc,
  pageWidth,
  sigLineY
) => {
  if (
    !hasSignatureImage
  ) {
    console.warn(
      "Signature image not found:",
      SIGNATURE_IMAGE_PATH
    );

    return;
  }

  try {
    /*
    --------------------------------------------------------
      SMALL PROFESSIONAL SIGNATURE
    --------------------------------------------------------

      Keep width around 125px.
      This prevents the signature from becoming too large.
    --------------------------------------------------------
    */

    const signatureWidth = 125;

    /*
      Signature image height will be calculated
      automatically by PDFKit to preserve aspect ratio.
    */

    const signatureX =
      (pageWidth -
        signatureWidth) /
      2;

    /*
      Position signature slightly above
      the signature line.
    */

    const signatureY =
      sigLineY - 34;

    doc.save();

    doc.image(
      SIGNATURE_IMAGE_PATH,
      signatureX,
      signatureY,
      {
        width:
          signatureWidth,
      }
    );

    doc.restore();
  } catch (signatureError) {
    console.error(
      "Signature image rendering error:",
      signatureError.message
    );
  }
};

/*
============================================================
  GENERATE CERTIFICATE PDF
============================================================
*/

const generateCertificatePDF = async (
  internship
) => {
  try {
    /*
    ========================================================
      VALIDATE DATA
    ========================================================
    */

    if (!internship) {
      throw new Error(
        "Internship data is missing"
      );
    }

    const certificateId =
      safeText(
        internship.certificateId
      );

    if (!certificateId) {
      throw new Error(
        "Certificate ID is missing"
      );
    }

    const fullName =
      safeText(
        internship.fullName,
        "Intern"
      );

    const domain =
      safeText(
        internship.domain,
        "Internship Program"
      );

    const duration =
      safeText(
        internship.duration,
        "Internship"
      );

    /*
    ========================================================
      VERIFY URL
    ========================================================
    */

    const baseUrl =
      safeText(
        VERIFY_BASE_URL
      );

    if (!baseUrl) {
      throw new Error(
        "VERIFY_BASE_URL is not configured"
      );
    }

    const verifyUrl =
      `${baseUrl}/verify/${encodeURIComponent(
        certificateId
      )}`;

    /*
    ========================================================
      QR CODE
    ========================================================
    */

    let qrDataUrl;

    try {
      qrDataUrl =
        await QRCode.toDataURL(
          verifyUrl,
          {
            margin: 1,
            width: 220,
            errorCorrectionLevel:
              "M",
            color: {
              dark: DARK_COLOR,
              light: "#ffffff",
            },
          }
        );
    } catch (qrError) {
      console.error(
        "QR generation error:",
        qrError
      );

      throw new Error(
        `Failed to generate QR code: ${qrError.message}`
      );
    }

    /*
    ========================================================
      PDF PROMISE
    ========================================================
    */

    return await new Promise(
      (
        resolve,
        reject
      ) => {
        let resolved = false;

        try {
          /*
          --------------------------------------------------
            CREATE PDF
          --------------------------------------------------
          */

          const doc =
            new PDFDocument({
              size: "A4",
              layout:
                "landscape",
              margin: 0,
              autoFirstPage:
                true,
            });

          /*
          --------------------------------------------------
            PDF BUFFER
          --------------------------------------------------
          */

          const chunks = [];

          doc.on(
            "data",
            (chunk) => {
              chunks.push(
                chunk
              );
            }
          );

          doc.on(
            "end",
            () => {
              if (resolved)
                return;

              resolved = true;

              try {
                const pdfBuffer =
                  Buffer.concat(
                    chunks
                  );

                if (
                  !pdfBuffer.length
                ) {
                  return reject(
                    new Error(
                      "Generated PDF is empty"
                    )
                  );
                }

                resolve(
                  pdfBuffer
                );
              } catch (
                bufferError
              ) {
                reject(
                  bufferError
                );
              }
            }
          );

          doc.on(
            "error",
            (error) => {
              if (resolved)
                return;

              console.error(
                "PDF stream error:",
                error
              );

              resolved = true;
              reject(error);
            }
          );

          /*
          ==================================================
            PAGE SIZE
          ==================================================
          */

          const pageWidth =
            doc.page.width;

          const pageHeight =
            doc.page.height;

          /*
          ==================================================
            WHITE BACKGROUND
          ==================================================
          */

          doc
            .rect(
              0,
              0,
              pageWidth,
              pageHeight
            )
            .fill("#ffffff");

          /*
          ==================================================
            CODECPS CENTER WATERMARK
          ==================================================
          */

          drawCodeCPSWatermark(
            doc,
            pageWidth,
            pageHeight
          );

          /*
          ==================================================
            OUTER BORDER
          ==================================================
          */

          doc
            .lineWidth(2.5)
            .strokeColor(
              BRAND_COLOR
            )
            .rect(
              22,
              22,
              pageWidth - 44,
              pageHeight - 44
            )
            .stroke();

          /*
          ==================================================
            INNER BORDER
          ==================================================
          */

          doc
            .lineWidth(0.75)
            .strokeColor(
              "#c7d7fb"
            )
            .rect(
              32,
              32,
              pageWidth - 64,
              pageHeight - 64
            )
            .stroke();

          /*
          ==================================================
            TOP LOGO
          ==================================================
          */

          if (hasLogo) {
            try {
              doc.image(
                LOGO_PATH,
                55,
                45,
                {
                  width: 150,
                }
              );
            } catch (
              logoError
            ) {
              console.error(
                "Logo rendering error:",
                logoError.message
              );

              doc
                .fontSize(20)
                .fillColor(
                  BRAND_COLOR
                )
                .font(
                  "Helvetica-Bold"
                )
                .text(
                  safeText(
                    COMPANY_NAME,
                    "CodeCPS Technologies"
                  ),
                  55,
                  55
                );
            }
          } else {
            doc
              .fontSize(20)
              .fillColor(
                BRAND_COLOR
              )
              .font(
                "Helvetica-Bold"
              )
              .text(
                safeText(
                  COMPANY_NAME,
                  "CodeCPS Technologies"
                ),
                55,
                55
              );
          }

          /*
          ==================================================
            TITLE
          ==================================================
          */

          doc
            .fontSize(34)
            .fillColor(
              DARK_COLOR
            )
            .font(
              "Helvetica-Bold"
            )
            .text(
              "CERTIFICATE OF INTERNSHIP",
              0,
              105,
              {
                align:
                  "center",
                characterSpacing:
                  1.5,
              }
            );

          /*
          ==================================================
            TITLE LINE
          ==================================================
          */

          doc
            .moveTo(
              pageWidth / 2 -
                90,
              148
            )
            .lineTo(
              pageWidth / 2 +
                90,
              148
            )
            .lineWidth(2)
            .strokeColor(
              BRAND_COLOR
            )
            .stroke();

          /*
          ==================================================
            PRESENTED TEXT
          ==================================================
          */

          doc
            .fontSize(12)
            .font("Helvetica")
            .fillColor(
              "#4b5563"
            )
            .text(
              "This certificate is proudly presented to",
              0,
              165,
              {
                align:
                  "center",
              }
            );

          /*
          ==================================================
            INTERN NAME
          ==================================================
          */

          const nameY = 190;
          const nameFontSize = 36;
          const nameText =
            fullName;

          /*
          --------------------------------------------------
            NAME SHADOW
          --------------------------------------------------
          */

          doc
            .fontSize(
              nameFontSize
            )
            .font(
              "Times-Bold"
            )
            .fillColor(
              "#c7d7fb"
            )
            .text(
              nameText,
              1,
              nameY + 1.5,
              {
                align:
                  "center",
                characterSpacing:
                  1.2,
              }
            );

          /*
          --------------------------------------------------
            MAIN NAME
          --------------------------------------------------
          */

          doc
            .fontSize(
              nameFontSize
            )
            .font(
              "Times-Bold"
            )
            .fillColor(
              BRAND_COLOR
            )
            .text(
              nameText,
              0,
              nameY,
              {
                align:
                  "center",
                characterSpacing:
                  1.2,
              }
            );

          /*
          --------------------------------------------------
            NAME FLOURISH
          --------------------------------------------------
          */

          const nameWidth =
            doc.widthOfString(
              nameText,
              {
                characterSpacing:
                  1.2,
              }
            );

          const nameCenterX =
            pageWidth / 2;

          const nameLineY =
            nameY +
            nameFontSize *
              0.68;

          const flourishGapFromName =
            nameWidth / 2 +
            14;

          drawNameFlourish(
            doc,
            nameCenterX -
              flourishGapFromName,
            nameLineY,
            -1
          );

          drawNameFlourish(
            doc,
            nameCenterX +
              flourishGapFromName,
            nameLineY,
            1
          );

          /*
          ==================================================
            DATES
          ==================================================
          */

          const startDateFormatted =
            formatDate(
              internship.startDate
            );

          let derivedEndDate =
            null;

          if (
            internship.startDate &&
            internship.duration
          ) {
            try {
              const derivedResult =
                calculateEndDate(
                  internship.startDate,
                  internship.duration
                );

              if (
                derivedResult
              ) {
                derivedEndDate =
                  derivedResult.endDate;
              }
            } catch (
              dateError
            ) {
              console.error(
                "End date calculation error:",
                dateError.message
              );
            }
          }

          const endDateFormatted =
            formatDate(
              derivedEndDate
            ) ||
            formatDate(
              internship.endDate
            );

          /*
          ==================================================
            BODY TEXT
          ==================================================
          */

          const bodyText =
            `for successfully completing an internship in ` +
            `${domain} at ${safeText(
              COMPANY_FULL_NAME,
              "CodeCPS Technologies"
            )}, ` +
            `for a duration of ${duration}` +
            (
              startDateFormatted &&
              endDateFormatted
                ? ` from ${startDateFormatted} to ${endDateFormatted}.`
                : "."
            ) +
            ` During this period, the intern demonstrated dedication, ` +
            `strong learning ability and delivered quality work on ` +
            `assigned projects.`;

          doc
            .fontSize(12.5)
            .font("Helvetica")
            .fillColor(
              "#374151"
            )
            .text(
              bodyText,
              110,
              255,
              {
                align:
                  "center",
                width:
                  pageWidth -
                  220,
                lineGap: 6,
              }
            );

          /*
          ==================================================
            FOOTER
          ==================================================
          */

          const footerY =
            pageHeight - 260;

          /*
          ==================================================
            LEFT COLUMN
          ==================================================
          */

          const leftX = 65;

          let rowY =
            footerY;

          /*
          --------------------------------------------------
            CERTIFICATE ID
          --------------------------------------------------
          */

          drawDocIcon(
            doc,
            leftX,
            rowY
          );

          doc
            .fontSize(10.5)
            .font(
              "Helvetica-Bold"
            )
            .fillColor(
              DARK_COLOR
            )
            .text(
              "Certificate ID",
              leftX + 40,
              rowY + 2
            );

          doc
            .fontSize(10)
            .font("Helvetica")
            .fillColor(
              "#4b5563"
            )
            .text(
              certificateId,
              leftX + 40,
              rowY + 16
            );

          /*
          --------------------------------------------------
            DATE OF ISSUE
          --------------------------------------------------
          */

          rowY += 48;

          drawCalendarIcon(
            doc,
            leftX,
            rowY
          );

          doc
            .fontSize(10.5)
            .font(
              "Helvetica-Bold"
            )
            .fillColor(
              DARK_COLOR
            )
            .text(
              "Date of Issue",
              leftX + 40,
              rowY + 2
            );

          doc
            .fontSize(10)
            .font("Helvetica")
            .fillColor(
              "#4b5563"
            )
            .text(
              formatDate(
                internship.certificateIssuedAt
              ) ||
                formatDate(
                  new Date()
                ),
              leftX + 40,
              rowY + 16
            );

          /*
          --------------------------------------------------
            DURATION
          --------------------------------------------------
          */

          rowY += 48;

          drawClockIcon(
            doc,
            leftX,
            rowY
          );

          doc
            .fontSize(10.5)
            .font(
              "Helvetica-Bold"
            )
            .fillColor(
              DARK_COLOR
            )
            .text(
              "Duration",
              leftX + 40,
              rowY + 2
            );

          doc
            .fontSize(10)
            .font("Helvetica")
            .fillColor(
              "#4b5563"
            )
            .text(
              duration,
              leftX + 40,
              rowY + 16
            );

          /*
          ==================================================
            LEFT VERTICAL DIVIDER
          ==================================================
          */

          doc
            .moveTo(
              leftX + 175,
              footerY - 5
            )
            .lineTo(
              leftX + 175,
              footerY + 105
            )
            .lineWidth(
              0.75
            )
            .strokeColor(
              "#e5e7eb"
            )
            .stroke();

          /*
          ==================================================
            MIDDLE DATE COLUMNS
          ==================================================
          */

          const colWidth = 130;

          const startColCenterX =
            leftX +
            210 +
            colWidth / 2;

          const compColCenterX =
            startColCenterX +
            colWidth +
            30;

          /*
          --------------------------------------------------
            START DATE
          --------------------------------------------------
          */

          drawCalendarIcon(
            doc,
            startColCenterX -
              ICON_SIZE / 2,
            footerY + 15
          );

          doc
            .fontSize(10.5)
            .font(
              "Helvetica-Bold"
            )
            .fillColor(
              DARK_COLOR
            )
            .text(
              "Start Date",
              startColCenterX -
                colWidth / 2,
              footerY + 58,
              {
                width:
                  colWidth,
                align:
                  "center",
              }
            );

          doc
            .fontSize(10)
            .font("Helvetica")
            .fillColor(
              "#4b5563"
            )
            .text(
              startDateFormatted ||
                "—",
              startColCenterX -
                colWidth / 2,
              footerY + 74,
              {
                width:
                  colWidth,
                align:
                  "center",
              }
            );

          /*
          --------------------------------------------------
            DATE DIVIDER
          --------------------------------------------------
          */

          const dividerX =
            (
              startColCenterX +
              compColCenterX
            ) / 2;

          doc
            .moveTo(
              dividerX,
              footerY + 10
            )
            .lineTo(
              dividerX,
              footerY + 95
            )
            .lineWidth(
              0.75
            )
            .strokeColor(
              "#e5e7eb"
            )
            .stroke();

          /*
          --------------------------------------------------
            COMPLETION DATE
          --------------------------------------------------
          */

          drawCalendarIcon(
            doc,
            compColCenterX -
              ICON_SIZE / 2,
            footerY + 15
          );

          doc
            .fontSize(10.5)
            .font(
              "Helvetica-Bold"
            )
            .fillColor(
              DARK_COLOR
            )
            .text(
              "Completion Date",
              compColCenterX -
                colWidth / 2,
              footerY + 58,
              {
                width:
                  colWidth,
                align:
                  "center",
              }
            );

          doc
            .fontSize(10)
            .font("Helvetica")
            .fillColor(
              "#4b5563"
            )
            .text(
              endDateFormatted ||
                "—",
              compColCenterX -
                colWidth / 2,
              footerY + 74,
              {
                width:
                  colWidth,
                align:
                  "center",
              }
            );

          /*
          ==================================================
            SIGNATURE
          ==================================================
          */

          const sigCenterX =
            pageWidth / 2;

          const sigLineY =
            footerY + 130;

          const sigBoxWidth =
            220;

          /*
          --------------------------------------------------
            SIGNATURE IMAGE
          --------------------------------------------------

            Uses assets/signature.png

            Small professional size:
            125px width

            It is NOT treated as a font.
          --------------------------------------------------
          */

          drawSignature(
            doc,
            pageWidth,
            sigLineY
          );

          /*
          --------------------------------------------------
            SIGNATURE LINE
          --------------------------------------------------
          */

          doc
            .moveTo(
              sigCenterX - 90,
              sigLineY
            )
            .lineTo(
              sigCenterX + 90,
              sigLineY
            )
            .lineWidth(1)
            .strokeColor(
              "#9ca3af"
            )
            .stroke();

          /*
          --------------------------------------------------
            AUTHORIZED SIGNATORY
          --------------------------------------------------
          */

          doc
            .fontSize(10.5)
            .font(
              "Helvetica-Bold"
            )
            .fillColor(
              DARK_COLOR
            )
            .text(
              "Authorized Signatory",
              sigCenterX -
                sigBoxWidth /
                  2,
              sigLineY + 8,
              {
                width:
                  sigBoxWidth,
                align:
                  "center",
              }
            );

          /*
          --------------------------------------------------
            DESIGNATION
          --------------------------------------------------
          */

          doc
            .fontSize(9)
            .font("Helvetica")
            .fillColor(
              "#6b7280"
            )
            .text(
              SIGNATORY_DESIGNATION ||
                COMPANY_FULL_NAME ||
                "Authorized Signatory",
              sigCenterX -
                sigBoxWidth /
                  2,
              sigLineY + 23,
              {
                width:
                  sigBoxWidth,
                align:
                  "center",
              }
            );

          /*
          ==================================================
            QR CODE
          ==================================================
          */

          const qrSize = 100;

          const qrX =
            pageWidth -
            90 -
            qrSize;

          const qrY =
            footerY - 5;

          try {
            doc.image(
              qrDataUrl,
              qrX,
              qrY,
              {
                width:
                  qrSize,
                height:
                  qrSize,
              }
            );
          } catch (
            qrImageError
          ) {
            console.error(
              "QR image rendering error:",
              qrImageError.message
            );
          }

          doc
            .fontSize(9)
            .font("Helvetica")
            .fillColor(
              "#6b7280"
            )
            .text(
              "Scan to verify",
              qrX,
              qrY +
                qrSize +
                6,
              {
                width:
                  qrSize,
                align:
                  "center",
              }
            );

          /*
          ==================================================
            MSME STRIP
          ==================================================
          */

          doc
            .moveTo(
              50,
              pageHeight - 74
            )
            .lineTo(
              pageWidth - 50,
              pageHeight - 74
            )
            .lineWidth(
              0.5
            )
            .strokeColor(
              "#e5e7eb"
            )
            .stroke();

          /*
          --------------------------------------------------
            MSME LOGO
          --------------------------------------------------
          */

          if (hasMsmeLogo) {
            try {
              doc.image(
                MSME_LOGO_PATH,
                pageWidth / 2 -
                  232,
                pageHeight - 74,
                {
                  width: 46,
                }
              );
            } catch (
              msmeError
            ) {
              console.error(
                "MSME logo rendering error:",
                msmeError.message
              );
            }
          }

          /*
          --------------------------------------------------
            MSME TEXT
          --------------------------------------------------
          */

          doc
            .fontSize(9.5)
            .font(
              "Helvetica-Bold"
            )
            .fillColor(
              "#4b5563"
            )
            .text(
              `${safeText(
                COMPANY_FULL_NAME,
                "CodeCPS Technologies"
              )} is a registered Micro Enterprise under MSME`,
              pageWidth / 2 -
                170,
              pageHeight - 64,
              {
                width: 340,
                align:
                  "left",
              }
            );

          /*
          --------------------------------------------------
            UDYAM NUMBER
          --------------------------------------------------
          */

          doc
            .fontSize(9)
            .font("Helvetica")
            .fillColor(
              "#4b5563"
            )
            .text(
              "Udyam Registration No: ",
              pageWidth / 2 -
                170,
              pageHeight - 48,
              {
                continued:
                  true,
              }
            )
            .fillColor(
              BRAND_COLOR
            )
            .font(
              "Helvetica-Bold"
            )
            .text(
              safeText(
                MSME_REG_NO,
                "N/A"
              )
            );

          /*
          ==================================================
            DISCLAIMER
          ==================================================
          */

          doc
            .fontSize(6.5)
            .font("Helvetica")
            .fillColor(
              "#a3aab5"
            )
            .text(
              "This is a system-generated certificate. Verify authenticity by scanning the QR code above.",
              0,
              pageHeight - 14,
              {
                width:
                  pageWidth,
                align:
                  "center",
              }
            );

          /*
          ==================================================
            FINISH PDF
          ==================================================
          */

          doc.end();
        } catch (error) {
          console.error(
            "❌ CERTIFICATE PDF GENERATION ERROR:",
            error
          );

          if (!resolved) {
            resolved = true;
            reject(error);
          }
        }
      }
    );
  } catch (error) {
    console.error(
      "❌ CERTIFICATE GENERATION ERROR:",
      error
    );

    throw error;
  }
};

/*
============================================================
  EXPORT
============================================================
*/

module.exports = {
  generateCertificatePDF,
};