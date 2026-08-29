import { HeroSection } from "../../components/hero";
import { TechStatsSection } from "../../components/tech-stats";
import { ServicesSection } from "../../components/services";
import FAQSection from "../../components/faq/FAQSection";
// import DevProcess from "../../components/Development/DevProcess"
import Testimonials from "../../components/Testimonial/Testimonial";

import SEO from "../../components/SEO/SEO";
import { organizationSchema, websiteSchema } from "../../data/organizationSchema";

function HomePage() {
  return (
    <>
      <SEO
        title="Custom Software, Web, Mobile & AI Development Company"
        description="CodeCPS Technologies is a Greater Noida based software company offering custom software, web, mobile app and AI development to help businesses grow faster."
        keywords="CodeCPS Technologies, software development company, web development company, mobile app development, cloud solutions, AI automation, custom software development India, software company Greater Noida"
        path="/"
        schema={[organizationSchema, websiteSchema]}
      />

      <HeroSection />
      <TechStatsSection />
      <ServicesSection />
      {/* <DevProcess/> */}
      <Testimonials/>
      
      <FAQSection />
     
    </>
  );
}

export default HomePage;
