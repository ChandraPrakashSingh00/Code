import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Check,
  CheckCircle2,
  Code2,
  Settings2,
  Layers3,
  Database,
  Workflow,
  ShieldCheck,
  Gauge,
  Smartphone,
  Cloud,
  Users,
  BarChart3,
  RefreshCw,
  Boxes,
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
   CUSTOM SOFTWARE SERVICES
============================================================ */

const softwareServices = [
  {
    number: "01",
    icon: Code2,
    category: "Software Development",
    title: "Custom Software Development",
    description:
      "Business-focused software applications built around your workflows, goals, users and unique operational requirements.",
    features: [
      "Custom Business Logic",
      "Modern Architecture",
      "Scalable Applications",
    ],
    tags: ["Custom", "MERN", "Scalable"],
  },

  {
    number: "02",
    icon: Settings2,
    category: "Business Solutions",
    title: "Business Management Software",
    description:
      "Centralized software solutions that help businesses manage operations, teams, customers, products, services and internal workflows.",
    features: [
      "Business Operations",
      "Team Management",
      "Workflow Automation",
    ],
    tags: ["Business", "Automation", "Management"],
  },

  {
    number: "03",
    icon: Workflow,
    category: "Automation",
    title: "Workflow Automation",
    description:
      "Automate repetitive processes and connect different business operations to improve productivity and reduce manual work.",
    features: [
      "Process Automation",
      "Smart Workflows",
      "System Integration",
    ],
    tags: ["Workflow", "Automation", "Integration"],
  },

  {
    number: "04",
    icon: Database,
    category: "Data & Backend",
    title: "Backend & Database Systems",
    description:
      "Reliable backend systems and database architecture designed to securely manage your business data and application operations.",
    features: [
      "API Development",
      "Database Architecture",
      "Secure Data Management",
    ],
    tags: ["Node.js", "MongoDB", "REST API"],
  },

  {
    number: "05",
    icon: Boxes,
    category: "Platforms",
    title: "Web-Based Platforms",
    description:
      "Powerful browser-based software platforms accessible from anywhere without requiring complicated desktop installations.",
    features: [
      "Web Applications",
      "Admin Dashboards",
      "Role-Based Access",
    ],
    tags: ["Web App", "Dashboard", "Cloud"],
  },

  {
    number: "06",
    icon: RefreshCw,
    category: "Modernization",
    title: "Software Modernization",
    description:
      "Upgrade outdated systems with modern technologies, improved interfaces, better performance and scalable architecture.",
    features: [
      "Legacy Modernization",
      "Performance Improvements",
      "Technology Migration",
    ],
    tags: ["Modernize", "Migration", "Performance"],
  },
];

/* ============================================================
   FEATURES
============================================================ */

const features = [
  {
    icon: Gauge,
    title: "High Performance",
    description:
      "Efficient applications designed for fast response times, smooth interactions and reliable day-to-day usage.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    description:
      "Security-focused development practices for authentication, authorization, APIs and sensitive business data.",
  },

  {
    icon: Smartphone,
    title: "Responsive Experience",
    description:
      "Modern interfaces that provide a consistent experience across desktops, tablets and mobile devices.",
  },

  {
    icon: Workflow,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and business workflows to reduce manual effort and improve operational efficiency.",
  },

  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Useful dashboards and reporting capabilities that help you monitor operations and make informed decisions.",
  },

  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Flexible software architecture that can evolve as your users, data, features and business requirements grow.",
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
  "REST APIs",
  "Tailwind CSS",
  "Cloud",
  "JWT",
];

/* ============================================================
   PROCESS
============================================================ */

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, existing processes, challenges and the exact software solution you need.",
  },

  {
    number: "02",
    title: "Plan",
    description:
      "We define the software architecture, modules, features, user roles, integrations and development roadmap.",
  },

  {
    number: "03",
    title: "Design",
    description:
      "We design a clean and intuitive interface focused on usability, productivity and a smooth user experience.",
  },

  {
    number: "04",
    title: "Develop",
    description:
      "Our team develops the frontend, backend, database, APIs, authentication and business logic.",
  },

  {
    number: "05",
    title: "Test",
    description:
      "We test functionality, performance, security, responsiveness and real-world user workflows before launch.",
  },

  {
    number: "06",
    title: "Launch",
    description:
      "The software is deployed, configured and prepared for your team with ongoing improvements and technical support.",
  },
];

/* ============================================================
   BENEFITS
============================================================ */

const benefits = [
  "Software designed around your business",
  "Custom features and workflows",
  "Modern and responsive interface",
  "Secure authentication and access control",
  "Reliable backend and database architecture",
  "Business process automation",
  "Scalable application architecture",
  "Post-launch technical support",
];

/* ============================================================
   CUSTOM SOFTWARE PAGE
============================================================ */

function CustomSoftware() {
  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="Custom Software Development Services | CodeCPS Technologies"
        description="Custom software development by CodeCPS Technologies: business management systems, workflow automation, web apps, backend systems and scalable dashboards."
        keywords="custom software development company, custom software development services, business software development, software development company, web application development, custom business software, software solutions company"
        path="/services/custom-software"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Software Development Services",
          provider: {
            "@type": "Organization",
            name: "CodeCPS Technologies",
            url: "https://www.codecps.com/",
          },
          description:
            "Custom software development solutions designed around business workflows, users and growth requirements.",
          areaServed: "Worldwide",
          serviceType: "Custom Software Development",
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
            pointer-events-none
            absolute
            -right-24
            -top-24
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
            -left-20
            h-64
            w-64
            rounded-full
            bg-[#086FFD]/5
            blur-3xl
          "
        />

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
              Custom Software Development
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
              max-w-[950px]
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
            Software built around

            <span className="block text-[#086FFD]">
              the way your business works.
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
              max-w-[720px]
              text-sm
              leading-6
              text-white/60
              sm:text-base
              sm:leading-7
            "
          >
            Custom software solutions designed to simplify operations,
            automate workflows, improve productivity and help your
            business scale with confidence.
          </motion.p>

          {/* Button */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="
              mt-7
              flex
              items-center
              justify-center
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
              Build Your Software

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
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
              Not generic software.

              <span className="text-[#086FFD]">
                {" "}
                Built for your business.
              </span>
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p
              className="
                text-sm
                leading-7
                text-[#191b1f]/60
                sm:text-base
              "
            >
              Every business works differently. Off-the-shelf software
              may provide features you do not need while missing the
              workflows that matter most to your team.
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
              We build custom software around your actual requirements,
              creating focused digital solutions that improve the way
              your business operates.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Custom Built",
                "Business Focused",
                "Secure",
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
          SERVICES
      ===================================================== */}

      <section
        id="custom-software-services"
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
                Our Software Services
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
                Software that fits your

                <span className="text-[#086FFD]">
                  {" "}
                  exact requirements.
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
              From internal business systems to customer-facing
              platforms, we create custom software that solves real
              business problems.
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
            {softwareServices.map((service, index) => {
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
          WHY OUR SOFTWARE
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
                Why Our Software Solutions
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
                Built around your needs.

                <span className="text-[#086FFD]">
                  {" "}
                  Ready for growth.
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
              We combine modern engineering with business-focused
              thinking to create software that is practical, reliable
              and ready to evolve.
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
        {/* Background Glow */}

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
                Built with

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
                We use reliable technologies and modern development
                practices to create software that is maintainable,
                secure and ready to scale.
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
                <Code2 size={23} />
              </div>

              <h3 className="relative mt-6 text-xl font-semibold">
                Complete custom software development
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
                From interface design and backend development to
                databases, authentication, APIs and deployment, we
                can manage the complete software development lifecycle.
              </p>

              <div className="relative mt-6 space-y-3">
                {[
                  "Custom Web Applications",
                  "Business Management Systems",
                  "Admin Dashboards",
                  "Backend & REST APIs",
                  "Authentication & User Roles",
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
                  working software.
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
              A structured development process keeps your software
              project clear, efficient, tested and aligned with your
              business goals.
            </p>
          </div>

          {/* Process Cards */}

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
              Software designed

              <span className="text-[#086FFD]">
                {" "}
                for real business.
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
              We combine product thinking, modern engineering and
              business understanding to create software that is useful
              today and ready for tomorrow.
            </p>
          </motion.div>

          {/* Benefits */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
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
              Start Your Software Project
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
              Have an idea? Let's build it.
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
              Turn your business requirements into powerful custom
              software designed to improve operations and support
              long-term growth.
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

export default CustomSoftware;