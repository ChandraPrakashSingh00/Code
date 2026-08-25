import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Check,
  CheckCircle2,
  Code2,
  Globe2,
  Layout,
  Smartphone,
  Zap,
  ShieldCheck,
  Search,
  Gauge,
  Layers3,
  Database,
  Server,
  MonitorSmartphone,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

/* ============================================================
   ANIMATION
============================================================ */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* ============================================================
   WEB SERVICES
============================================================ */

const webServices = [
  {
    number: "01",
    icon: Globe2,
    category: "Business",
    title: "Business Websites",
    description:
      "Professional and conversion-focused websites designed to build trust, strengthen your brand and attract more customers.",
    features: [
      "Professional UI",
      "Responsive Design",
      "Business Integration",
    ],
    tags: ["React", "Responsive", "SEO"],
  },

  {
    number: "02",
    icon: MonitorSmartphone,
    category: "Responsive",
    title: "Responsive Websites",
    description:
      "Seamless digital experiences that look and perform beautifully across mobile, tablet, laptop and desktop devices.",
    features: [
      "Mobile First",
      "Cross Device",
      "Optimized Layout",
    ],
    tags: ["Mobile", "Tablet", "Desktop"],
  },

  {
    number: "03",
    icon: Code2,
    category: "Development",
    title: "Custom Web Applications",
    description:
      "Powerful web applications built around your business workflows, users, features and long-term requirements.",
    features: [
      "Custom Features",
      "Secure APIs",
      "Scalable Architecture",
    ],
    tags: ["React", "Node.js", "MongoDB"],
  },

  {
    number: "04",
    icon: Layout,
    category: "Landing Pages",
    title: "Landing Pages",
    description:
      "Modern and conversion-focused landing pages designed for products, services, campaigns and lead generation.",
    features: [
      "Conversion Focused",
      "Fast Loading",
      "Clean UI",
    ],
    tags: ["Landing", "Conversion", "SEO"],
  },

  {
    number: "05",
    icon: Database,
    category: "Dynamic",
    title: "Dynamic Websites",
    description:
      "Database-powered websites with dynamic content, authentication, dashboards, APIs and custom functionality.",
    features: [
      "Dynamic Content",
      "Database Integration",
      "Authentication",
    ],
    tags: ["MongoDB", "APIs", "Dashboard"],
  },

  {
    number: "06",
    icon: ShoppingCart,
    category: "E-Commerce",
    title: "E-Commerce Websites",
    description:
      "Scalable online stores with product management, secure payments, customer accounts and smooth shopping experiences.",
    features: [
      "Product Management",
      "Payment Integration",
      "Order Management",
    ],
    tags: ["E-Commerce", "Payments", "Orders"],
  },
];

/* ============================================================
   FEATURES
============================================================ */

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Fast-loading websites optimized for speed, responsiveness and better user experience.",
  },

  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Consistent and polished experiences across mobile, tablet, laptop and desktop devices.",
  },

  {
    icon: Search,
    title: "SEO Friendly",
    description:
      "Clean technical foundations and structured development that support search visibility.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Development",
    description:
      "Security-focused development practices for safer applications and digital experiences.",
  },

  {
    icon: Gauge,
    title: "Optimized Experience",
    description:
      "Smooth interactions, optimized assets and clean code for a better browsing experience.",
  },

  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Flexible technology and architecture that can grow with your business requirements.",
  },
];

/* ============================================================
   TECHNOLOGIES
============================================================ */

const technologies = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Cloud",
];

/* ============================================================
   PROCESS
============================================================ */

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and technical requirements before development begins.",
  },

  {
    number: "02",
    title: "Plan",
    description:
      "We define the right technology, structure, features and roadmap for your web project.",
  },

  {
    number: "03",
    title: "Design",
    description:
      "We create a clean, modern and user-focused interface aligned with your brand identity.",
  },

  {
    number: "04",
    title: "Develop",
    description:
      "Our developers build the website using modern technologies, clean code and scalable architecture.",
  },

  {
    number: "05",
    title: "Test",
    description:
      "We test responsiveness, performance, functionality, security and browser compatibility.",
  },

  {
    number: "06",
    title: "Launch",
    description:
      "Your website is deployed, optimized and supported for a reliable production experience.",
  },
];

/* ============================================================
   BENEFITS
============================================================ */

const benefits = [
  "Modern and professional UI",
  "Mobile-first responsive development",
  "SEO-friendly architecture",
  "Fast and optimized performance",
  "Secure backend integration",
  "Scalable technology stack",
  "Clean and maintainable code",
  "Post-launch technical support",
];

/* ============================================================
   WEB DEVELOPMENT PAGE
============================================================ */

function WebDevelopment() {
  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="Web Development Services | CodeCPS Technologies"
        description="Web development by CodeCPS Technologies: business websites, responsive design, custom web apps, landing pages and scalable e-commerce solutions."
        keywords="web development company, web development services, website development company, custom web development, React development company, MERN stack development, responsive website development"
        path="/services/web-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Web Development Services",
          provider: {
            "@type": "Organization",
            name: "CodeCPS Technologies",
            url: "https://www.codecps.com/",
          },
          description:
            "Modern and scalable web development services for businesses, startups and organizations.",
          areaServed: "Worldwide",
          serviceType: "Web Development",
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
        <div className="relative mx-auto max-w-[1200px] text-center">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              Web Development
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
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
            Websites that

            <span className="block text-[#086FFD]">
              move your business forward.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
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
            Modern, responsive and scalable websites built around your
            business goals, customers and future growth.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="
              mt-7
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-xl
                bg-[#086FFD]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#075fd8]
              "
            >
              Start Your Project

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <a
              href="#web-services"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white/80
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.08]
                hover:text-white
              "
            >
              Explore Services
            </a>
          </motion.div>
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              What We Build
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
              More than a website.

              <span className="text-[#086FFD]">
                {" "}
                A digital growth engine.
              </span>
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p
              className="
                text-sm
                leading-7
                text-[#191b1f]/60
                sm:text-base
              "
            >
              Your website is often the first interaction customers have
              with your business. We create websites that combine modern
              design, strong technology and a clear user experience.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-[#191b1f]/55
                sm:text-base
              "
            >
              From a simple business website to a complex web application,
              every project is designed around your audience, business
              objectives and future growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Modern UI",
                "Responsive",
                "SEO Ready",
                "Scalable",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-lg
                    border
                    border-[#191b1f]/8
                    bg-[#f8fafc]
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-[#191b1f]/55
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WEB SERVICES
      ===================================================== */}

      <section
        id="web-services"
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
          {/* Header */}

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
                Our Web Services
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
                Web solutions for

                <span className="text-[#086FFD]">
                  {" "}
                  every stage.
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
              From business websites and landing pages to custom
              applications and e-commerce platforms, we build digital
              experiences around your goals.
            </p>
          </div>

          {/* Cards */}

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
            {webServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[390px]
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
                  {/* Top Accent */}

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

                  {/* Header */}

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
                      <Icon size={22} strokeWidth={1.8} />
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

                  {/* Category */}

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

                  {/* Title */}

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

                  {/* Description */}

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

                  {/* Features */}

                  <div className="mt-5 space-y-2">
                    {service.features.map((feature) => (
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
                          <Check
                            size={10}
                            strokeWidth={3}
                          />
                        </span>

                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
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

                  {/* Glow */}

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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY OUR WEBSITES
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
          {/* Header */}

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
                Why Our Websites
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
                Built for performance.

                <span className="text-[#086FFD]">
                  {" "}
                  Designed for people.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[480px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              Every website is designed to be fast, reliable, secure,
              scalable and easy for your customers to use.
            </p>
          </div>

          {/* Features */}

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
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
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
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-base
                      font-semibold
                      tracking-tight
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-[#191b1f]/55
                    "
                  >
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
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
        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-20
            h-72
            w-72
            rounded-full
            bg-[#086FFD]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-24
            h-64
            w-64
            rounded-full
            bg-[#086FFD]/5
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-[1200px]">
          <div
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-[1fr_0.9fr]
              lg:items-center
              lg:gap-16
            "
          >
            {/* Left */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#086FFD]
                "
              >
                Technology Stack
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
                Powered by

                <span className="text-[#086FFD]">
                  {" "}
                  modern technology.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-[560px]
                  text-sm
                  leading-7
                  text-white/50
                "
              >
                We use reliable and modern technologies to build websites
                that are fast, maintainable, secure and ready to scale.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-white/60
                      transition-all
                      duration-300
                      hover:border-[#086FFD]/40
                      hover:text-white
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Card */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.04]
                p-7
                sm:p-8
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
                  bg-[#086FFD]/15
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
                  bg-[#086FFD]/15
                  text-[#086FFD]
                "
              >
                <Server size={23} />
              </div>

              <h3 className="relative mt-6 text-xl font-semibold">
                Full-stack web development
              </h3>

              <p
                className="
                  relative
                  mt-3
                  text-sm
                  leading-6
                  text-white/50
                "
              >
                From frontend interfaces to backend APIs, databases and
                deployment, we can manage the complete development lifecycle.
              </p>

              <div className="relative mt-6 space-y-3">
                {[
                  "Frontend Development",
                  "Backend & API Development",
                  "Database Integration",
                  "Authentication & Security",
                  "Cloud Deployment",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      border-b
                      border-white/8
                      pb-3
                      last:border-0
                      last:pb-0
                    "
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#086FFD]"
                    />

                    <span className="text-sm text-white/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
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
          {/* Header */}

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
                Our Process
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
                From idea to

                <span className="text-[#086FFD]">
                  {" "}
                  launch.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[480px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              A simple and transparent process keeps your project
              organized, focused and moving in the right direction.
            </p>
          </div>

          {/* Process */}

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
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-[#f8fafc]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#086FFD]/20
                  hover:bg-white
                  hover:shadow-[0_15px_40px_rgba(8,111,253,0.07)]
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
                  {item.number}
                </span>

                <h3
                  className="
                    mt-5
                    text-lg
                    font-semibold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#191b1f]/50
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CODECPS
      ===================================================== */}

      <section
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
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-1
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* Left */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Why CodeCPS Technologies
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
              A website that works

              <span className="text-[#086FFD]">
                {" "}
                for your business.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[540px]
                text-sm
                leading-7
                text-[#191b1f]/55
              "
            >
              We combine design, technology and business thinking to
              create websites that are visually strong, useful, reliable
              and built for long-term growth.
            </p>
          </motion.div>

          {/* Benefits */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
            "
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  px-4
                  py-3.5
                  transition-all
                  duration-300
                  hover:border-[#086FFD]/20
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#086FFD]/10
                    text-[#086FFD]
                  "
                >
                  <Check
                    size={14}
                    strokeWidth={3}
                  />
                </span>

                <span
                  className="
                    text-sm
                    font-medium
                    text-[#191b1f]/70
                  "
                >
                  {benefit}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
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
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
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
          {/* Glow */}

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
            <div
              className="
                mx-auto
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

            <span
              className="
                mt-5
                block
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/70
              "
            >
              Start Your Web Project
            </span>

            <h2
              className="
                mx-auto
                mt-3
                max-w-[700px]
                text-2xl
                font-semibold
                tracking-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              Ready to build a better website?
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
              Let's create a fast, modern and scalable web experience
              that helps your business grow.
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
              Let's Talk

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
        </motion.div>
      </section>
    </main>
  );
}

export default WebDevelopment;