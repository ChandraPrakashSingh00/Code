/* ============================================================
   COMPANY INFO — SINGLE SOURCE OF TRUTH
   ============================================================
   Every place on the website (About page, Footer, Contact page,
   JSON-LD structured data, index.html) should pull company
   details FROM HERE instead of hardcoding them again.

   Why this file exists:
   - Keeps name / founder / founding date / address / contact /
     social links EXACTLY consistent everywhere (important for
     Google Search + Knowledge Panel eligibility).
   - One place to update when real info (e.g. official social
     profile links) becomes available.

   ⚠️ PLACEHOLDER POLICY
   Fields marked "" (empty string) are NOT confirmed / not yet
   public. Do not fill them with guessed or fake URLs — leave
   empty until the real, official link is available. Empty
   values are automatically excluded from JSON-LD `sameAs`.
============================================================ */

export const COMPANY = {
  // ---- Identity ----
  legalName: "CodeCPS Technologies",
  shortName: "CodeCPS",
  tagline: "Smart Software, Web, Cloud & AI Solutions",

  // ---- Founding ----
  founder: {
    name: "Chandra Prakash Singh",
    title: "Founder & Owner",
  },
  foundingDate: "2025-08-22", // ISO format (YYYY-MM-DD) for schema.org
  foundingDateDisplay: "22 August 2025",
  foundingYear: "2025",

  // ---- Registration (real, already used on official certificates) ----
  msmeRegistrationNo: "UDYAM-UP-28-0236761",

  // ---- Contact ----
  email: "codecpstechnologies@gmail.com",
  phone: "+91-8920480415",
  phoneDisplay: "+91 89204 80415",

  // ---- Location ----
  address: {
    streetAddress: "14 Avenue, Gaur City 2, Near Brahma Mandir",
    addressLocality: "Greater Noida West",
    addressRegion: "Uttar Pradesh",
    postalCode: "201009",
    addressCountry: "IN",
  },
  addressDisplay:
    "14 Avenue, Gaur City 2, Near Brahma Mandir, Greater Noida West, Uttar Pradesh, India - 201009",

  // ---- Official social / profile links ----
  // Only confirmed, official links go here. Leave "" if not
  // confirmed yet — DO NOT invent a URL.
  social: {
    instagram: "https://www.instagram.com/codecpstechnologies/",
    linkedin: "", // TODO: add official LinkedIn company page URL once created
    facebook: "", // TODO: add official Facebook page URL once created
    twitter: "", // TODO: add official X / Twitter profile URL once created
    youtube: "", // TODO: add official YouTube channel URL once created
  },

  // ---- Core description (used for meta description + schema "description") ----
  description:
    "CodeCPS Technologies is a software development company based in Greater Noida West, Uttar Pradesh, India, providing custom software, web development, mobile app development, UI/UX design, e-commerce and AI-driven digital solutions to help businesses grow.",

  shortDescription:
    "CodeCPS Technologies is a software development company providing custom software, web development, mobile apps, cloud solutions and AI development services to help businesses grow.",

  // ---- Mission & Vision ----
  mission:
    "To empower businesses with innovative, reliable and accessible technology solutions that solve real-world challenges and help organizations grow in the digital era.",
  vision:
    "To become a trusted technology partner for businesses worldwide by delivering impactful digital products, intelligent solutions and exceptional customer experiences.",

  // ---- Services (kept consistent with services.js / Service pages) ----
  services: [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-Commerce Development",
    "AI & Automation",
    "Cloud Solutions",
    "Performance & SEO Optimization",
  ],

  // ---- Company journey / timeline ----
  // Only real, dated milestones go here. Add new entries as
  // they actually happen — do not pre-fill with invented events.
  timeline: [
    {
      year: "2025",
      date: "August 2025",
      title: "CodeCPS Technologies Founded",
      description:
        "Chandra Prakash Singh founded CodeCPS Technologies with a mission to build reliable, scalable digital products for businesses.",
    },
    {
      year: "2025",
      date: "2025 – Present",
      title: "Building Our Foundation",
      description:
        "Delivering our first web, software and digital projects while growing our service offerings across web, mobile, UI/UX, e-commerce and AI-driven solutions.",
    },
  ],
};

/**
 * Returns only the confirmed, official social profile URLs.
 * Used to build the `sameAs` array in JSON-LD — never includes
 * placeholder ("") values.
 */
export function getOfficialSameAs() {
  return Object.values(COMPANY.social).filter(
    (url) => typeof url === "string" && url.trim().length > 0
  );
}
