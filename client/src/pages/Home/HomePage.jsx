import { HeroSection } from "../../components/hero";
import { TechStatsSection } from "../../components/tech-stats";
import { ServicesSection } from "../../components/services";
import FAQSection from "../../components/faq/FAQSection";
// import DevProcess from "../../components/Development/DevProcess"
import Testimonials from "../../components/Testimonial/Testimonial";
import UdyamRegistration from "../../components/UdyamRegistration/UdyamRegistration";
import SEO, { SITE_URL, SITE_NAME } from "../../components/SEO/SEO";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "CodeCPS Technologies builds custom software, web apps, mobile apps, cloud solutions and AI-powered automation for businesses to grow faster.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

function HomePage() {
  return (
    <>
      <SEO
        title="Custom Software, Web, Mobile & AI Development Company"
        description="CodeCPS Technologies: custom web development, mobile apps, cloud solutions and AI automation to help businesses scale faster."
        keywords="software development company, web development company, mobile app development, cloud solutions, AI automation, custom software development India"
        path="/"
        schema={[homeSchema, websiteSchema]}
      />

      <HeroSection />
      <TechStatsSection />
      <ServicesSection />
      {/* <DevProcess/> */}
      <Testimonials/>
      <UdyamRegistration/>
      <FAQSection />
     
    </>
  );
}

export default HomePage;
