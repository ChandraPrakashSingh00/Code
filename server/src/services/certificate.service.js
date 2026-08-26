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

const {
  calculateEndDate,
} = require("../utils/durationHelper");

/*
============================================================
  CERTIFICATE SERVICE
  Production-safe PDF generator for Vercel / Node.js
============================================================
*/

/*
============================================================
  ASSET PATH RESOLUTION
============================================================

  IMPORTANT:
  Vercel serverless functions can have different runtime
  paths depending on how the function is bundled.

  We therefore try multiple possible locations instead
  of depending on only __dirname.
============================================================
*/

const findAsset = (fileName) => {
  const possiblePaths = [
    // Normal source structure
    path.join(
      __dirname,
      "../assets",
      fileName
    ),

    // Current working directory
    path.join(
      process.cwd(),
      "server",
      "src",
      "assets",
      fileName
    ),

    path.join(
      process.cwd(),
      "src",
      "assets",
      fileName
    ),

    path.join(
      process.cwd(),
      "assets",
      fileName
    ),

    // Vercel bundled location fallback
    path.join(
      __dirname,
      "../../assets",
      fileName
    ),

    path.join(
      __dirname,
      "../../../assets",
      fileName
    ),
  ];

  for (const assetPath of possiblePaths) {
    try {
      if (
        fs.existsSync(assetPath)
      ) {
        return assetPath;
      }
    } catch (error) {
      console.warn(
        `Asset check failed for ${fileName}:`,
        error.message
      );
    }
  }

  return null;
};

/*
============================================================
  ASSETS
============================================================
*/

const LOGO_PATH =
  findAsset("logo.png");

const LOGO_MARK_PATH =
  findAsset("logo-mark.png");

const MSME_LOGO_PATH =
  findAsset("msme.png");

const SIGNATURE_IMAGE_PATH =
  findAsset("signature.png");

/*
============================================================
  ASSET DEBUG
============================================================
*/

console.log(
  "=============================================="
);

console.log(
  "CERTIFICATE ASSETS"
);

console.log(
  "Working directory:",
  process.cwd()
);

console.log(
  "Service directory:",
  __dirname
);

console.log(
  "Logo:",
  LOGO_PATH || "NOT FOUND"
);

console.log(
  "Logo Mark:",
  LOGO_MARK_PATH || "NOT FOUND"
);

console.log(
  "MSME Logo:",
  MSME_LOGO_PATH || "NOT FOUND"
);

console.log(
  "Signature:",
  SIGNATURE_IMAGE_PATH || "NOT FOUND"
);

console.log(
  "=============================================="
);

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

  const result =
    String(value).trim();

  return result || fallback;
};

/*
============================================================
  FORMAT DATE
============================================================
*/

const formatDate = (
  date
) => {
  if (!date) {
    return null;
  }

  try {
    const parsedDate =
      new Date(date);

    if (
      Number.isNaN(
        parsedDate.getTime()
      )
    ) {
      return null;
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  } catch (error) {
    console.error(
      "Date formatting error:",
      error.message
    );

    return null;
  }
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
  try {
    doc
      .save()
      .circle(
        x + size / 2,
        y + size / 2,
        size / 2
      )
      .fill(BRAND_COLOR)
      .restore();
  } catch (error) {
    console.error(
      "Badge drawing error:",
      error.message
    );
  }
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
  drawBadge(
    doc,
    x,
    y
  );

  const cx =
    x + ICON_SIZE / 2;

  const cy =
    y + ICON_SIZE / 2;

  try {
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
  } catch (error) {
    console.error(
      "Document icon error:",
      error.message
    );
  }
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
  drawBadge(
    doc,
    x,
    y
  );

  const cx =
    x + ICON_SIZE / 2;

  const cy =
    y + ICON_SIZE / 2;

  try {
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
  } catch (error) {
    console.error(
      "Calendar icon error:",
      error.message
    );
  }
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
  drawBadge(
    doc,
    x,
    y
  );

  const cx =
    x + ICON_SIZE / 2;

  const cy =
    y + ICON_SIZE / 2;

  try {
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
  } catch (error) {
    console.error(
      "Clock icon error:",
      error.message
    );
  }
};

/*
============================================================
  NAME FLOURISH
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

  try {
    doc.save();

    /*
    Diamond
    */

    doc
      .moveTo(
        centerX,
        centerY - 4
      )
      .lineTo(
        centerX + 4,
        centerY
      )
      .lineTo(
        centerX,
        centerY + 4
      )
      .lineTo(
        centerX - 4,
        centerY
      )
      .closePath()
      .fill(color);

    /*
    Main line
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
    Secondary line
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
    End dot
    */

    doc
      .circle(
        lineEndX,
        centerY,
        1.6
      )
      .fill(color);

    doc.restore();
  } catch (error) {
    console.error(
      "Name flourish error:",
      error.message
    );
  }
};

/*
============================================================
  CENTER WATERMARK
============================================================
*/

const drawCodeCPSWatermark = (
  doc,
  pageWidth,
  pageHeight
) => {
  if (!LOGO_MARK_PATH) {
    console.warn(
      "Watermark logo not found. Skipping watermark."
    );

    return;
  }

  try {
    const watermarkWidth = 135;

    const watermarkHeight =
      watermarkWidth *
      (480 / 864);

    const watermarkX =
      (
        pageWidth -
        watermarkWidth
      ) / 2;

    const watermarkY =
      (
        pageHeight -
        watermarkHeight
      ) / 2 + 5;

    doc.save();

    doc.opacity(0.055);

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

    doc.opacity(1);

    doc.restore();
  } catch (error) {
    console.error(
      "Watermark rendering failed:",
      error.message
    );
  }
};

/*
============================================================
  SIGNATURE
============================================================
*/

const drawSignature = (
  doc,
  pageWidth,
  sigLineY
) => {
  if (!SIGNATURE_IMAGE_PATH) {
    console.warn(
      "Signature image not found. Skipping signature image."
    );

    return;
  }

  try {
    const signatureWidth = 125;

    const signatureX =
      (
        pageWidth -
        signatureWidth
      ) / 2;

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
  } catch (error) {
    console.error(
      "Signature rendering failed:",
      error.message
    );
  }
};

/*
============================================================
  SAFE IMAGE
============================================================
*/

const safeImage = (
  doc,
  imagePath,
  x,
  y,
  options = {}
) => {
  if (!imagePath) {
    return false;
  }

  try {
    doc.image(
      imagePath,
      x,
      y,
      options
    );

    return true;
  } catch (error) {
    console.error(
      `Image rendering failed: ${imagePath}`,
      error.message
    );

    return false;
  }
};

/*
============================================================
  GENERATE CERTIFICATE PDF
============================================================
*/

const generateCertificatePDF =
  async (internship) => {
    /*
    ========================================================
      VALIDATE INTERNSHIP
    ========================================================
    */

    if (!internship) {
      throw new Error(
        "Internship data is missing"
      );
    }

    /*
    ========================================================
      CERTIFICATE ID
    ========================================================
    */

    const certificateId =
      safeText(
        internship.certificateId
      );

    if (!certificateId) {
      throw new Error(
        "Certificate ID is missing"
      );
    }

    /*
    ========================================================
      BASIC DATA
    ========================================================
    */

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
      VERIFY BASE URL
    ========================================================
    */

    let baseUrl =
      safeText(
        VERIFY_BASE_URL
      );

    /*
    Remove trailing slash
    */

    baseUrl =
      baseUrl.replace(
        /\/+$/,
        ""
      );

    /*
    Production fallback
    */

    if (
      !baseUrl ||
      baseUrl.includes(
        "localhost"
      )
    ) {
      baseUrl =
        safeText(
          process.env.CLIENT_URL
        );

      baseUrl =
        baseUrl.replace(
          /\/+$/,
          ""
        );
    }

    /*
    ========================================================
      VERIFY URL
    ========================================================
    */

    if (!baseUrl) {
      throw new Error(
        "Verification URL is not configured. Set CLIENT_URL in Vercel."
      );
    }

    const verifyUrl =
      `${baseUrl}/verify/${encodeURIComponent(
        certificateId
      )}`;

    console.log(
      "Certificate verification URL:",
      verifyUrl
    );

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
              dark:
                DARK_COLOR ||
                "#111827",
              light:
                "#ffffff",
            },
          }
        );
    } catch (error) {
      console.error(
        "QR generation failed:",
        error
      );

      throw new Error(
        `Failed to generate QR code: ${error.message}`
      );
    }

    /*
    ========================================================
      CREATE PDF
    ========================================================
    */

    return new Promise(
      (
        resolve,
        reject
      ) => {
        let finished = false;

        try {
          const doc =
            new PDFDocument({
              size: "A4",
              layout:
                "landscape",
              margin: 0,
              autoFirstPage:
                true,
              compress: true,
            });

          const chunks = [];

          /*
          ==================================================
            PDF DATA
          ==================================================
          */

          doc.on(
            "data",
            (chunk) => {
              chunks.push(chunk);
            }
          );

          /*
          ==================================================
            PDF END
          ==================================================
          */

          doc.on(
            "end",
            () => {
              if (finished) {
                return;
              }

              finished = true;

              try {
                const pdfBuffer =
                  Buffer.concat(
                    chunks
                  );

                if (
                  !Buffer.isBuffer(
                    pdfBuffer
                  ) ||
                  pdfBuffer.length === 0
                ) {
                  return reject(
                    new Error(
                      "Generated PDF is empty"
                    )
                  );
                }

                console.log(
                  "Certificate PDF generated successfully:",
                  pdfBuffer.length,
                  "bytes"
                );

                resolve(
                  pdfBuffer
                );
              } catch (error) {
                reject(error);
              }
            }
          );

          /*
          ==================================================
            PDF ERROR
          ==================================================
          */

          doc.on(
            "error",
            (error) => {
              if (finished) {
                return;
              }

              finished = true;

              console.error(
                "PDF document error:",
                error
              );

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
            WATERMARK
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

          const logoRendered =
            safeImage(
              doc,
              LOGO_PATH,
              55,
              45,
              {
                width: 150,
              }
            );

          /*
          ==================================================
            LOGO FALLBACK
          ==================================================
          */

          if (!logoRendered) {
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
              pageWidth / 2 - 90,
              148
            )
            .lineTo(
              pageWidth / 2 + 90,
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
            .font(
              "Helvetica"
            )
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

          const nameFontSize =
            36;

          const nameText =
            fullName;

          /*
          NAME SHADOW
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
          MAIN NAME
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
          ==================================================
            NAME FLOURISH
          ==================================================
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

          const flourishGap =
            nameWidth / 2 + 14;

          drawNameFlourish(
            doc,
            nameCenterX -
              flourishGap,
            nameLineY,
            -1
          );

          drawNameFlourish(
            doc,
            nameCenterX +
              flourishGap,
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
              const result =
                calculateEndDate(
                  internship.startDate,
                  internship.duration
                );

              if (
                result &&
                result.endDate
              ) {
                derivedEndDate =
                  result.endDate;
              }
            } catch (error) {
              console.error(
                "End date calculation failed:",
                error.message
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

          let bodyText =
            `for successfully completing an internship in ${domain} at ${safeText(
              COMPANY_FULL_NAME,
              "CodeCPS Technologies"
            )}, for a duration of ${duration}`;

          if (
            startDateFormatted &&
            endDateFormatted
          ) {
            bodyText +=
              ` from ${startDateFormatted} to ${endDateFormatted}.`;
          } else {
            bodyText += ".";
          }

          bodyText +=
            " During this period, the intern demonstrated dedication, strong learning ability and delivered quality work on assigned projects.";

          doc
            .fontSize(12.5)
            .font(
              "Helvetica"
            )
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
                  pageWidth - 220,
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
          CERTIFICATE ID
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
            .font(
              "Helvetica"
            )
            .fillColor(
              "#4b5563"
            )
            .text(
              certificateId,
              leftX + 40,
              rowY + 16
            );

          /*
          DATE OF ISSUE
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
            .font(
              "Helvetica"
            )
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
          DURATION
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
            .font(
              "Helvetica"
            )
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
            LEFT DIVIDER
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
            .lineWidth(0.75)
            .strokeColor(
              "#e5e7eb"
            )
            .stroke();

          /*
          ==================================================
            DATE COLUMNS
          ==================================================
          */

          const colWidth =
            130;

          const startColCenterX =
            leftX +
            210 +
            colWidth / 2;

          const compColCenterX =
            startColCenterX +
            colWidth +
            30;

          /*
          START DATE ICON
          */

          drawCalendarIcon(
            doc,
            startColCenterX -
              ICON_SIZE / 2,
            footerY + 15
          );

          /*
          START DATE TITLE
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

          /*
          START DATE VALUE
          */

          doc
            .fontSize(10)
            .font(
              "Helvetica"
            )
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
          DATE DIVIDER
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
            .lineWidth(0.75)
            .strokeColor(
              "#e5e7eb"
            )
            .stroke();

          /*
          ==================================================
            COMPLETION DATE
          ==================================================
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
            .font(
              "Helvetica"
            )
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
          SIGNATURE IMAGE
          */

          drawSignature(
            doc,
            pageWidth,
            sigLineY
          );

          /*
          SIGNATURE LINE
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
          AUTHORIZED SIGNATORY
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
                sigBoxWidth / 2,
              sigLineY + 8,
              {
                width:
                  sigBoxWidth,
                align:
                  "center",
              }
            );

          /*
          DESIGNATION
          */

          doc
            .fontSize(9)
            .font(
              "Helvetica"
            )
            .fillColor(
              "#6b7280"
            )
            .text(
              safeText(
                SIGNATORY_DESIGNATION,
                "Authorized Signatory"
              ),
              sigCenterX -
                sigBoxWidth / 2,
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

          const qrSize =
            100;

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
          } catch (error) {
            console.error(
              "QR rendering failed:",
              error.message
            );
          }

          /*
          QR TEXT
          */

          doc
            .fontSize(9)
            .font(
              "Helvetica"
            )
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
            .lineWidth(0.5)
            .strokeColor(
              "#e5e7eb"
            )
            .stroke();

          /*
          MSME LOGO
          */

          safeImage(
            doc,
            MSME_LOGO_PATH,
            pageWidth / 2 - 232,
            pageHeight - 74,
            {
              width: 46,
            }
          );

          /*
          MSME TEXT
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
              pageWidth / 2 - 170,
              pageHeight - 64,
              {
                width: 340,
                align:
                  "left",
              }
            );

          /*
          UDYAM NUMBER
          */

          doc
            .fontSize(9)
            .font(
              "Helvetica"
            )
            .fillColor(
              "#4b5563"
            )
            .text(
              "Udyam Registration No: ",
              pageWidth / 2 - 170,
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
            .font(
              "Helvetica"
            )
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
            FINISH
          ==================================================
          */

          doc.end();
        } catch (error) {
          console.error(
            "CERTIFICATE PDF GENERATION ERROR:",
            error
          );

          if (!finished) {
            finished = true;
            reject(error);
          }
        }
      }
    );
  };

/*
============================================================
  EXPORT
============================================================
*/

module.exports = {
  generateCertificatePDF,
};