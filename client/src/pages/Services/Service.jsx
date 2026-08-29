import React from "react";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  ShoppingCart,
  Palette,
  Megaphone,
  SearchCheck,
  Layers3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SEO from "../../components/SEO/SEO";
import { Link } from "react-router-dom";

/* ============================================================
   SERVICE ICON
============================================================ */

const ServiceIcon = ({ type, size = 24 }) => {
  const icons = {
    web: Code2,
    mobile: Smartphone,
    ecommerce: ShoppingCart,
    design: Palette,
    marketing: Megaphone,
    seo: SearchCheck,
    software: Layers3,
  };

  const Icon = icons[type] || Code2;

  return <Icon size={size} strokeWidth={1.8} />;
};

/* ============================================================
   SERVICES PAGE
============================================================ */

function Services() {
  const services = [
    {
      id: "web-development",
      link: "/services/web-development",
      number: "01",
      type: "web",
      category: "Development",
      title: "Web Development",
      description:
        "Modern, responsive, and high-performance websites built to create a strong online presence and deliver a seamless experience across every device.",
      features: [
        "Business Websites",
        "React & Next.js",
        "Responsive Design",
        "Performance Optimized",
      ],
      tags: ["React", "Next.js", "Node.js"],
    },

    {
      id: "mobile-app-development",
      link: "/services/app-development",
      number: "02",
      type: "mobile",
      category: "Mobile",
      title: "Mobile App Development",
      description:
        "Powerful and user-friendly mobile applications designed to help businesses engage customers and deliver reliable experiences on mobile devices.",
      features: [
        "Android Applications",
        "iOS Applications",
        "Cross-Platform Apps",
        "API Integration",
      ],
      tags: ["Android", "iOS", "Apps"],
    },

    {
      id: "ecommerce-development",
      link: "/services/e-commerce-development",
      number: "03",
      type: "ecommerce",
      category: "E-commerce",
      title: "E-commerce Development",
      description:
        "Conversion-focused online stores with smooth shopping experiences, secure payments, product management, and scalable e-commerce functionality.",
      features: [
        "Online Stores",
        "Product Management",
        "Payment Integration",
        "Order Management",
      ],
      tags: ["E-commerce", "Payments", "Store"],
    },

    {
      id: "ui-ux-design",
      link: "/services/uiuxdesign",
      number: "04",
      type: "design",
      category: "Design",
      title: "UI/UX Design",
      description:
        "Clean, intuitive, and engaging interfaces designed around your users to create memorable digital experiences and improve conversions.",
      features: [
        "UI Design",
        "UX Research",
        "Wireframing",
        "Interactive Prototypes",
      ],
      tags: ["UI Design", "UX", "Figma"],
    },

    {
      id: "digital-marketing",
      link: "/services/digitalmarketing",
      number: "05",
      type: "marketing",
      category: "Marketing",
      title: "Digital Marketing",
      description:
        "Result-driven digital marketing strategies that help businesses increase visibility, reach the right audience, generate leads, and grow online.",
      features: [
        "Social Media Marketing",
        "Google Ads",
        "Lead Generation",
        "Content Strategy",
      ],
      tags: ["Marketing", "Ads", "Social"],
    },

    {
      id: "performance-seo-optimization",
      link: "/services/performanceseooptimization",
      number: "06",
      type: "seo",
      category: "SEO",
      title: "Performance SEO Optimization",
      description:
        "Technical and performance-focused SEO solutions designed to improve search visibility, website speed, rankings, and organic traffic.",
      features: [
        "Technical SEO",
        "On-Page SEO",
        "Speed Optimization",
        "Search Visibility",
      ],
      tags: ["SEO", "Speed", "Google"],
    },

    {
      id: "custom-software",
      link: "/services/customsoftware",
      number: "07",
      type: "software",
      category: "Software",
      title: "Custom Software",
      description:
        "Tailored software solutions built around your unique business processes, workflows, and requirements to improve efficiency and support long-term growth.",
      features: [
        "Custom Applications",
        "Business Systems",
        "Workflow Solutions",
        "System Integration",
      ],
      tags: ["Custom", "Software", "Integration"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title="Our Services - Web, Mobile, E-commerce, SEO & Software Development"
        description="Explore CodeCPS Technologies' services: web & app development, e-commerce, UI/UX design, digital marketing, SEO optimization and custom software solutions."
        keywords="web development, mobile app development, e-commerce development, UI UX design, digital marketing, SEO optimization, custom software development"
        path="/service"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.codecpstechnologies.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.codecpstechnologies.in/service",
            },
          ],
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#191b1f]
          px-5
          pb-12
          pt-12
          sm:px-8
          sm:pb-14
          sm:pt-14
          lg:px-10
          lg:pb-16
          lg:pt-16
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-[1200px]
            text-center
          "
        >
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#086FFD]
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Our Services
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mx-auto
              mt-5
              max-w-[900px]
              text-[38px]
              font-bold
              leading-[1.05]
              tracking-[-1.8px]
              text-white
              sm:text-[48px]
              sm:tracking-[-2px]
              md:text-[56px]
              lg:text-[64px]
              lg:tracking-[-2.5px]
            "
          >
            Digital solutions

            <span className="block text-[#086FFD]">
              built around your business.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[700px]
              text-sm
              leading-6
              text-white/60
              sm:text-base
              sm:leading-7
            "
          >
            From websites and mobile applications to e-commerce,
            marketing, SEO, and custom software, we provide the
            digital services businesses need to grow online.
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="
          px-5
          py-14
          sm:px-8
          sm:py-20
          lg:px-10
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-1
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* Left */}

          <div>
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              What We Do
            </span>

            <h2
              className="
                mt-4
                max-w-[520px]
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#191b1f]
                sm:text-4xl
              "
            >
              Technology that

              <span className="text-[#086FFD]">
                {" "}
                moves your business forward.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[540px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              We combine thoughtful design, modern technology,
              marketing, and performance optimization to create
              digital solutions that are simple to use, effective,
              and built around your business goals.
            </p>
          </div>

          {/* Right Feature */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              bg-[#086FFD]
              p-7
              text-white
              sm:p-9
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-white/15
              "
            >
              <Sparkles size={22} />
            </div>

            <h3
              className="
                relative
                mt-6
                text-xl
                font-semibold
                sm:text-2xl
              "
            >
              From idea to digital growth.
            </h3>

            <p
              className="
                relative
                mt-3
                max-w-[560px]
                text-sm
                leading-6
                text-white/75
              "
            >
              Whether you're launching a new business, building a
              digital product, or improving your existing online
              presence, our services cover the essential parts of
              your digital journey.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="
          bg-[#f8fafc]
          px-5
          py-14
          sm:px-8
          sm:py-20
          lg:px-10
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#086FFD]
                "
              >
                Service Collection
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-[#191b1f]
                  sm:text-4xl
                "
              >
                Explore our

                <span className="text-[#086FFD]">
                  {" "}
                  services.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[500px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              Focused digital services designed to help your
              business build, grow, optimize, and scale online.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE OUR SERVICES
      ===================================================== */}

      <section
        className="
          px-5
          py-14
          sm:px-8
          sm:py-20
          lg:px-10
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[650px]">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Why Choose Us
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#191b1f]
                sm:text-4xl
              "
            >
              Built with quality,

              <span className="text-[#086FFD]">
                {" "}
                clarity and purpose.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[600px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              We focus on creating digital solutions that look
              professional, perform reliably, and support real
              business goals.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            <BenefitCard
              icon={Code2}
              title="Modern Technology"
              description="Modern technologies and scalable architecture for reliable digital products."
            />

            <BenefitCard
              icon={ShieldCheck}
              title="Reliable & Secure"
              description="Reliable development practices focused on stability, security, and quality."
            />

            <BenefitCard
              icon={Zap}
              title="Performance Focused"
              description="Fast, responsive, and optimized digital experiences designed for real users."
            />

            <BenefitCard
              icon={Layers3}
              title="Built to Scale"
              description="Flexible solutions that can grow and evolve alongside your business."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        className="
          bg-[#191b1f]
          px-5
          py-14
          text-white
          sm:px-8
          sm:py-20
          lg:px-10
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#086FFD]
                "
              >
                Our Approach
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                "
              >
                A simple process.

                <span className="text-[#086FFD]">
                  {" "}
                  Better results.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[480px]
                text-sm
                leading-6
                text-white/50
              "
            >
              We keep the process clear, collaborative, and focused
              on delivering digital solutions that create measurable
              value for your business.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            <ProcessCard
              number="01"
              title="Discover"
              description="Understand your goals, audience, requirements, and business challenges."
            />

            <ProcessCard
              number="02"
              title="Plan"
              description="Define the right strategy, technology, features, and project roadmap."
            />

            <ProcessCard
              number="03"
              title="Build"
              description="Design and develop the solution with continuous testing and refinement."
            />

            <ProcessCard
              number="04"
              title="Launch"
              description="Deploy, optimize, and support your digital product for long-term growth."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section
        className="
          px-5
          pb-16
          pt-14
          sm:px-8
          sm:pb-20
          sm:pt-20
          lg:px-10
          lg:pb-24
          lg:pt-24
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-[1200px]
            overflow-hidden
            rounded-[24px]
            bg-[#086FFD]
            px-6
            py-10
            text-center
            text-white
            sm:px-10
            sm:py-12
            lg:px-16
            lg:py-14
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative">
            <h2
              className="
                text-2xl
                font-semibold
                tracking-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              Have a project in mind?
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-white/75
              "
            >
              Tell us what you're building and let's create a
              professional digital solution that works for your
              business.
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2.5
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-[#086FFD]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-slate-50
              "
            >
              Start a Project

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   SERVICE CARD
============================================================ */

function ServiceCard({ service }) {
  return (
    <Link
      to={service.link}
      className="
        group
        relative
        flex
        min-h-[430px]
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-[#191b1f]/8
        bg-white
        p-6
        shadow-[0_10px_35px_rgba(15,23,42,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#086FFD]/25
        hover:shadow-[0_20px_50px_rgba(8,111,253,0.10)]
        sm:p-7
      "
    >
      <div
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-0
          bg-[#086FFD]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#086FFD]/10
            text-[#086FFD]
            transition-all
            duration-300
            group-hover:scale-105
            group-hover:bg-[#086FFD]
            group-hover:text-white
          "
        >
          <ServiceIcon
            type={service.type}
            size={22}
          />
        </div>

        <span
          className="
            text-[11px]
            font-bold
            tracking-[0.14em]
            text-[#191b1f]/20
          "
        >
          {service.number}
        </span>
      </div>

      <p
        className="
          mt-7
          text-[10px]
          font-bold
          uppercase
          tracking-[0.14em]
          text-[#191b1f]/40
        "
      >
        {service.category}
      </p>

      <h3
        className="
          mt-2
          text-xl
          font-semibold
          tracking-tight
          text-[#191b1f]
        "
      >
        {service.title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-[#191b1f]/55
        "
      >
        {service.description}
      </p>

      <div className="mt-5 space-y-2">
        {service.features.slice(0, 3).map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-2
              text-xs
              text-[#191b1f]/60
            "
          >
            <span
              className="
                flex
                h-4
                w-4
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#086FFD]/10
                text-[#086FFD]
              "
            >
              <span>✓</span>
            </span>

            {feature}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-lg
              border
              border-[#191b1f]/7
              bg-[#f8fafc]
              px-2.5
              py-1.5
              text-[10px]
              font-semibold
              text-[#191b1f]/45
              transition-all
              duration-300
              group-hover:border-[#086FFD]/10
              group-hover:text-[#086FFD]/70
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="
          mt-auto
          flex
          items-center
          justify-between
          border-t
          border-[#191b1f]/8
          pt-5
        "
      >
        <span
          className="
            text-sm
            font-semibold
            text-[#086FFD]
          "
        >
          Explore Service
        </span>

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#f8fafc]
            text-[#191b1f]/60
            transition-all
            duration-300
            group-hover:bg-[#086FFD]
            group-hover:text-white
          "
        >
          <ArrowRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </span>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-20
          h-36
          w-36
          rounded-full
          bg-[#086FFD]/5
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </Link>
  );
}

/* ============================================================
   BENEFIT CARD
============================================================ */

function BenefitCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-[#191b1f]/8
        bg-white
        p-6
        shadow-[0_10px_35px_rgba(15,23,42,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#086FFD]/20
        hover:shadow-[0_15px_40px_rgba(8,111,253,0.08)]
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-[#086FFD]/10
          text-[#086FFD]
          transition-all
          duration-300
          group-hover:bg-[#086FFD]
          group-hover:text-white
        "
      >
        <Icon
          size={20}
          strokeWidth={1.8}
        />
      </div>

      <h3
        className="
          mt-5
          text-base
          font-semibold
          tracking-tight
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-[#191b1f]/55
        "
      >
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   PROCESS CARD
============================================================ */

function ProcessCard({
  number,
  title,
  description,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        transition-all
        duration-300
        hover:border-[#086FFD]/40
        hover:bg-white/[0.06]
      "
    >
      <span
        className="
          text-[11px]
          font-bold
          tracking-[0.14em]
          text-[#086FFD]
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-5
          text-lg
          font-semibold
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-white/50
        "
      >
        {description}
      </p>
    </div>
  );
}

export default Services;