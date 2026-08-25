import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Check,
  CheckCircle2,
  Code2,
  Zap,
  ShieldCheck,
  Layers3,
  Rocket,
  Cloud,
  Bell,
  Database,
  Palette,
  RefreshCw,
  Users,
  Target,
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
   APP SERVICES
============================================================ */

const appServices = [
  {
    number: "01",
    icon: Smartphone,
    category: "iOS",
    title: "iOS App Development",
    description:
      "Polished and reliable iOS applications designed for modern Apple devices with smooth performance and intuitive user experiences.",
    features: [
      "Modern UI/UX",
      "iPhone & iPad",
      "App Store Ready",
    ],
    tags: ["iOS", "Swift", "UI/UX"],
  },

  {
    number: "02",
    icon: Smartphone,
    category: "Android",
    title: "Android App Development",
    description:
      "Scalable Android applications with modern interfaces, reliable performance and experiences designed for real-world users.",
    features: [
      "Responsive UI",
      "Device Compatibility",
      "Play Store Ready",
    ],
    tags: ["Android", "Mobile", "Kotlin"],
  },

  {
    number: "03",
    icon: Layers3,
    category: "Cross-Platform",
    title: "Cross-Platform Apps",
    description:
      "Powerful mobile applications built for multiple platforms while maintaining consistent design, functionality and performance.",
    features: [
      "Single Codebase",
      "Multi Platform",
      "Cost Efficient",
    ],
    tags: ["React Native", "Flutter", "Mobile"],
  },

  {
    number: "04",
    icon: Code2,
    category: "Backend",
    title: "App Backend & APIs",
    description:
      "Secure backend systems, APIs and database integrations that power your mobile application and business workflows.",
    features: [
      "REST APIs",
      "Database Integration",
      "Authentication",
    ],
    tags: ["Node.js", "APIs", "MongoDB"],
  },

  {
    number: "05",
    icon: Bell,
    category: "Engagement",
    title: "Push Notifications",
    description:
      "Keep users connected with useful, timely and personalized push notifications that improve engagement and retention.",
    features: [
      "Push Notifications",
      "User Engagement",
      "Real-Time Alerts",
    ],
    tags: ["Notifications", "Firebase", "Engagement"],
  },

  {
    number: "06",
    icon: RefreshCw,
    category: "Maintenance",
    title: "App Maintenance",
    description:
      "Continuous improvements, updates, bug fixes and performance optimization to keep your application reliable and up to date.",
    features: [
      "Bug Fixes",
      "Performance Updates",
      "Feature Improvements",
    ],
    tags: ["Updates", "Support", "Optimization"],
  },
];

/* ============================================================
   FEATURES
============================================================ */

const features = [
  {
    icon: Palette,
    title: "Modern UI/UX",
    description:
      "Clean, intuitive and user-friendly interfaces designed around your users and business goals.",
  },

  {
    icon: Zap,
    title: "High Performance",
    description:
      "Fast and responsive applications optimized for smooth real-world usage across devices.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Development",
    description:
      "Security-focused architecture and development practices for protecting application data and users.",
  },

  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Keep users engaged with useful and timely application notifications and real-time communication.",
  },

  {
    icon: Database,
    title: "Database Integration",
    description:
      "Reliable data management using modern databases, APIs and scalable backend technologies.",
  },

  {
    icon: RefreshCw,
    title: "Easy Maintenance",
    description:
      "Well-structured and maintainable code that makes future updates and improvements easier.",
  },
];

/* ============================================================
   TECHNOLOGIES
============================================================ */

const technologies = [
  "React Native",
  "Flutter",
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Firebase",
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
      "We understand your business, users, goals and application requirements before development begins.",
  },

  {
    number: "02",
    title: "Plan",
    description:
      "We define the application structure, features, technology stack and development roadmap.",
  },

  {
    number: "03",
    title: "Design",
    description:
      "We create a clean, modern and intuitive interface focused on usability and user experience.",
  },

  {
    number: "04",
    title: "Develop",
    description:
      "Our developers build the application using modern technologies, clean code and scalable architecture.",
  },

  {
    number: "05",
    title: "Test",
    description:
      "We test functionality, performance, security and compatibility across different devices and platforms.",
  },

  {
    number: "06",
    title: "Launch",
    description:
      "Your application is prepared, deployed and supported for a reliable production experience.",
  },
];

/* ============================================================
   BENEFITS
============================================================ */

const benefits = [
  "Modern and intuitive UI/UX",
  "Android and iOS development",
  "Cross-platform application support",
  "Fast and optimized performance",
  "Secure backend integration",
  "Scalable application architecture",
  "Push notifications and integrations",
  "Post-launch technical support",
];

/* ============================================================
   APP DEVELOPMENT PAGE
============================================================ */

function AppDevelopment() {
  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="App Development Company | Mobile App Development - CodeCPS Technologies"
        description="Mobile app development by CodeCPS Technologies for Android, iOS and cross-platform apps with scalable backend systems and secure APIs."
        keywords="app development company, mobile app development, Android app development, iOS app development, React Native development, Flutter development, mobile application development company"
        path="/services/app-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Professional mobile application development services for Android, iOS and cross-platform applications.",
          provider: {
            "@type": "Organization",
            name: "CodeCPS Technologies",
            url: "https://www.codecps.com/",
          },
          areaServed: "Worldwide",
          serviceType: "Mobile App Development",
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
              App Development
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
            Mobile apps that

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
            Modern, scalable and user-focused mobile applications built
            around your business goals, customers and future growth.
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
                inline-flex
                items-center
                justify-center
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
              Start Your App
            </Link>

            <a
              href="#app-services"
              className="
                inline-flex
                items-center
                justify-center
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
              Why Mobile Apps?
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
              More than an app.

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
              A great mobile application is more than a collection of
              screens. It needs to be intuitive, fast, secure and capable
              of handling real users and real business requirements.
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
              At CodeCPS Technologies, we combine product thinking,
              modern UI/UX and reliable engineering to build applications
              that create meaningful value for businesses and their
              customers.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Modern UI",
                "Fast Performance",
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
          APP SERVICES
      ===================================================== */}

      <section
        id="app-services"
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
                Our App Services
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
                Mobile solutions for

                <span className="text-[#086FFD]">
                  {" "}
                  every business.
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
              From native mobile applications to cross-platform apps,
              backend systems and ongoing support, we build digital
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
            {appServices.map((service, index) => {
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

                  {/* Bottom - NO TEXT / NO ARROW */}

                  <div
                    className="
                      mt-auto
                      border-t
                      border-[#191b1f]/8
                      pt-5
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[#086FFD]/70
                      "
                    >
                      Mobile Solution
                    </span>
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
          WHY OUR APPS
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
                Why Our Apps
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
              Every application is designed to be fast, reliable,
              secure, scalable and easy for your users to interact with.
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
                We use modern and reliable technologies to build mobile
                applications that are fast, secure, maintainable and
                ready to scale.
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
                <Smartphone size={23} />
              </div>

              <h3 className="relative mt-6 text-xl font-semibold">
                Complete mobile development
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
                From mobile interfaces to backend APIs, databases,
                authentication and deployment, we can manage the complete
                application development lifecycle.
              </p>

              <div className="relative mt-6 space-y-3">
                {[
                  "Mobile UI/UX Development",
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
                  app launch.
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
              An app that works

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
              We combine product thinking, design and technology to
              create mobile applications that are useful, reliable,
              scalable and built for long-term business growth.
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
          BUSINESS VALUE
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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[26px]
              bg-[#086FFD]
              px-6
              py-10
              text-white
              sm:px-10
              sm:py-12
              lg:px-14
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

            <div
              className="
                relative
                grid
                grid-cols-1
                gap-10
                lg:grid-cols-[1fr_auto]
                lg:items-center
              "
            >
              <div>
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white/65
                  "
                >
                  Built for Business
                </span>

                <h2
                  className="
                    mt-4
                    max-w-[700px]
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-tight
                    sm:text-4xl
                  "
                >
                  Your app should do more than look good.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-[650px]
                    text-sm
                    leading-7
                    text-white/70
                  "
                >
                  We build applications with business goals in mind —
                  from improving customer engagement and simplifying
                  operations to creating new digital revenue
                  opportunities.
                </p>
              </div>

              <div className="flex justify-start lg:justify-end">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/15
                  "
                >
                  <Target size={28} />
                </div>
              </div>
            </div>
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
          pt-0
          sm:px-8
          sm:pb-20
          lg:px-10
          lg:pb-24
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
            bg-[#191b1f]
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
              bg-[#086FFD]/15
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
              bg-[#086FFD]/10
              blur-3xl
            "
          />

          <div className="relative">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Have an App Idea?
            </span>

            <h2
              className="
                mx-auto
                mt-4
                max-w-[750px]
                text-3xl
                font-semibold
                tracking-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              Let's build an app

              <span className="block text-[#086FFD]">
                people love to use.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[620px]
                text-sm
                leading-7
                text-white/50
              "
            >
              Tell us about your application idea and we'll help you
              turn it into a scalable digital product.
            </p>

            <Link
              to="/contact"
              className="
                mt-7
                inline-flex
                items-center
                justify-center
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
                hover:bg-[#075ed8]
              "
            >
              Start Your App Project
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default AppDevelopment;