import { Helmet } from "react-helmet-async";

/*
============================================================
  SITE-WIDE CONFIG
  ⚠️ IMPORTANT: Apna live domain yahin par daalein
============================================================
*/
export const SITE_URL = "https://www.codecpstechnologies.in";
export const SITE_NAME = "CodeCPS Technologies";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Reusable SEO component.
 * Har page apna title, description, keywords, path aur schema
 * pass karke apne liye unique SEO tags generate karta hai.
 *
 * @param {string} title - Page ka unique title (60 chars ke andar rakhein)
 * @param {string} description - Page ka unique meta description (150-160 chars)
 * @param {string} keywords - Comma separated target keywords
 * @param {string} path - Route path, e.g. "/service" (leading slash ke saath)
 * @param {string} image - Social share image (optional, default logo)
 * @param {object|array} schema - JSON-LD structured data (optional)
 * @param {boolean} noindex - Page ko Google index se hata na ho to true karein
 */
function SEO({
  title,
  description,
  keywords,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  schema,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} - Smart Software, Web, Cloud & AI Solutions`;

  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schema &&
        (Array.isArray(schema) ? schema : [schema]).map((block, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(block)}
          </script>
        ))}
    </Helmet>
  );
}

export default SEO;
