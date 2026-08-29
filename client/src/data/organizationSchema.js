import { SITE_URL, SITE_NAME } from "../components/SEO/SEO";
import { COMPANY, getOfficialSameAs } from "./companyInfo";

/* ============================================================
   ORGANIZATION SCHEMA (JSON-LD)
   ============================================================
   Central builder so the SAME Organization entity (name, url,
   logo, founder, foundingDate, address, contact, sameAs) is
   emitted consistently across every page that includes it.

   Uses "@id" so every page reference resolves to ONE entity
   in Google's Knowledge Graph instead of creating duplicates.
============================================================ */

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  legalName: COMPANY.legalName,
  alternateName: COMPANY.shortName,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
  image: `${SITE_URL}/logo.png`,
  description: COMPANY.description,
  foundingDate: COMPANY.foundingDate,
  founder: {
    "@type": "Person",
    name: COMPANY.founder.name,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.streetAddress,
    addressLocality: COMPANY.address.addressLocality,
    addressRegion: COMPANY.address.addressRegion,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.addressCountry,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
  sameAs: getOfficialSameAs(),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    "@id": ORGANIZATION_ID,
  },
};
