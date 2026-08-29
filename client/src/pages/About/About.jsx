import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Code2,
  Globe2,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
  Target,
  Eye,
  Zap,
  Layers3,
  MapPin,
  Calendar,
  UserRound,
  Award,
  Flag,
} from "lucide-react";
import SEO, { SITE_URL } from "../../components/SEO/SEO";
import { organizationSchema } from "../../data/organizationSchema";
import { COMPANY } from "../../data/companyInfo";

/* ============================================================
   ANIMATION
============================================================ */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ============================================================
   VALUES
============================================================ */

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    text: "We continuously explore modern technologies to build smarter, simpler and better digital solutions.",
  },
  {
    icon: Users,
    title: "Client Focused",
    text: "Your business goals remain at the center of every product, website and software solution we create.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Driven",
    text: "We focus on clean development, reliable performance, security and long-term scalability.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    text: "Our solutions are designed to grow with your business and adapt to changing requirements.",
  },
];

/* ============================================================
   SERVICES
============================================================ */

const services = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AI & Automation",
  "UI/UX Design",
  "Cloud Solutions",
];

/* ============================================================
   STATS
============================================================ */

const stats = [
  {
    value: "7+",
    label: "Projects Delivered",
  },
  {
    value: "5+",
    label: "Happy Clients",
  },
  {
    value: "10+",
    label: "Technology Solutions",
  },
  {
    value: "100%",
    label: "Commitment to Quality",
  },
];

/* ============================================================
   TECHNOLOGIES
============================================================ */

const technologies = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Next.js",
  "Tailwind CSS",
  "AI",
  "Cloud",
];

/* ============================================================
   TECHNOLOGY FEATURES
============================================================ */

const technologyFeatures = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "Maintainable and scalable architecture built for long-term use.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    text: "Optimized digital experiences that remain fast across devices.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "Security-focused development practices throughout the product.",
  },
  {
    icon: Layers3,
    title: "Scalable",
    text: "Flexible architecture that can grow with your business.",
  },
];

/* ============================================================
   PROCESS
============================================================ */

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, goals, users and technical requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the right technology, architecture, features and roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop the solution with continuous testing and refinement.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy, optimize and support your product for long-term success.",
  },
];

/* ============================================================
   ABOUT PAGE
============================================================ */

function About() {
  return (
    <main className="min-h-screen bg-white text-[#191b1f]">

      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="About Us - Founder, Mission & Company Story"
        description="CodeCPS Technologies was founded on 22 August 2025 by Chandra Prakash Singh in Greater Noida West, UP. Learn our mission, vision, services and journey."
        keywords="about CodeCPS Technologies, CodeCPS Technologies founder, Chandra Prakash Singh, software development company Greater Noida, custom software company, AI development company"
        path="/about"
        schema={[
          organizationSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: `${SITE_URL}/about`,
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          HERO / HEADER
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#191b1f]
          px-5
          pb-9
          pt-9

          sm:px-8
          sm:pb-10
          sm:pt-10

          lg:px-10
          lg:pb-11
          lg:pt-11
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-[1100px]
            text-center
          "
        >

          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-3.5
              py-1.5
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#086FFD]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              About CodeCPS Technologies
            </span>
          </motion.div>

          {/* =================================================
              MAIN BRAND HEADING
          ================================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-4
              max-w-[760px]
              text-[30px]
              font-bold
              leading-[1.08]
              tracking-[-1.2px]
              text-white

              sm:text-[38px]
              sm:tracking-[-1.5px]

              md:text-[44px]

              lg:text-[48px]
              lg:tracking-[-2px]
            "
          >
            We build digital

            <span className="block text-[#086FFD]">
              solutions that move businesses forward.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-3
              max-w-[650px]
              text-xs
              leading-5
              text-white/55

              sm:text-sm
              sm:leading-6
            "
          >
            CodeCPS Technologies is a modern technology company focused on
            building reliable, scalable and user-friendly digital products
            for businesses.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          COMPANY AT A GLANCE
          (Founded / Founder / Headquarters — kept identical to
          the Organization JSON-LD so Google sees consistent info)
      ===================================================== */}

      <section
        className="
          border-b
          border-[#191b1f]/8
          bg-[#f8fafc]
          px-5
          py-8

          sm:px-8

          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-1
            gap-6

            sm:grid-cols-3
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#086FFD]/10
                text-[#086FFD]
              "
            >
              <Calendar size={18} />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#191b1f]/40">
                Founded
              </p>
              <p className="mt-1 text-sm font-semibold text-[#191b1f]">
                {COMPANY.foundingDateDisplay}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#086FFD]/10
                text-[#086FFD]
              "
            >
              <UserRound size={18} />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#191b1f]/40">
                Founder &amp; Owner
              </p>
              <p className="mt-1 text-sm font-semibold text-[#191b1f]">
                {COMPANY.founder.name}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#086FFD]/10
                text-[#086FFD]
              "
            >
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#191b1f]/40">
                Headquarters
              </p>
              <p className="mt-1 text-sm font-semibold text-[#191b1f]">
                Greater Noida West, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / COMPANY OVERVIEW
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

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
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
              Who We Are
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
              Turning ideas into

              <span className="text-[#086FFD]">
                {" "}digital reality.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[560px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              At CodeCPS Technologies, we believe technology should solve real
              problems and create real business value.
            </p>

            <p
              className="
                mt-4
                max-w-[560px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              We combine thoughtful design, modern development practices and
              reliable engineering to create digital experiences that are
              simple to use, secure and built to scale.
            </p>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
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
              Technology that works for you.
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
              From websites and mobile applications to custom software,
              AI-powered automation and cloud solutions, we help businesses
              turn technology into measurable value.
            </p>

            <div
              className="
                relative
                mt-6
                grid
                grid-cols-1
                gap-2.5

                sm:grid-cols-2
              "
            >
              {services.slice(0, 4).map((service) => (
                <Link
                  to="/service"
                  key={service}
                  className="
                    flex
                    items-center
                    gap-2.5
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-3
                    py-2.5
                    text-xs
                    text-white/85
                    transition-colors
                    duration-300
                    hover:bg-white/15
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0"
                  />

                  {service}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section
        className="
          border-y
          border-[#191b1f]/8
          bg-[#f8fafc]
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-2

            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                border-[#191b1f]/8
                px-5
                py-9
                text-center

                lg:border-r
                lg:last:border-r-0
              "
            >
              <h3
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-[#086FFD]

                  sm:text-4xl
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  text-[#191b1f]/50

                  sm:text-sm
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          OUR STORY
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
          <div
            className="
              grid
              grid-cols-1
              gap-10

              lg:grid-cols-[1.1fr_0.9fr]
              lg:items-center
              lg:gap-16
            "
          >

            {/* LEFT */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
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
                Our Story
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
                Building technology

                <span className="text-[#086FFD]">
                  {" "}with purpose.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-[650px]
                  text-sm
                  leading-7
                  text-[#191b1f]/60
                "
              >
                CodeCPS Technologies was built around a simple idea:
                technology should be useful, reliable and accessible to
                businesses of every size.
              </p>

              <p
                className="
                  mt-4
                  max-w-[650px]
                  text-sm
                  leading-7
                  text-[#191b1f]/55
                "
              >
                We work with startups, growing businesses and organizations
                to design and develop digital products that improve operations,
                customer experiences and business growth.
              </p>

              <div
                className="
                  mt-7
                  grid
                  grid-cols-1
                  gap-2.5

                  sm:grid-cols-2
                "
              >
                {services.map((service) => (
                  <Link
                    to="/service"
                    key={service}
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-xl
                      border
                      border-[#191b1f]/8
                      bg-[#f8fafc]
                      px-3.5
                      py-3
                      transition-colors
                      duration-300
                      hover:bg-white
                      hover:border-[#086FFD]/30
                    "
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#086FFD]"
                    />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-[#191b1f]/70
                      "
                    >
                      {service}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CARD */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  bg-[#191b1f]
                  p-7
                  text-white

                  sm:p-9
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#086FFD]
                  "
                >
                  <Globe2 size={22} />
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-semibold
                  "
                >
                  Technology built around your goals.
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-white/55
                  "
                >
                  We don't believe in one-size-fits-all technology. Every
                  solution is planned around the specific needs, challenges
                  and future goals of the business.
                </p>

                <div className="mt-7 space-y-5">
                  {[
                    [
                      "01",
                      "Understand",
                      "Understand the business and requirements.",
                    ],
                    [
                      "02",
                      "Build",
                      "Create the right digital solution.",
                    ],
                    [
                      "03",
                      "Grow",
                      "Optimize and scale for future growth.",
                    ],
                  ].map(([number, title, text]) => (
                    <div
                      key={number}
                      className="
                        flex
                        gap-4
                        border-b
                        border-white/8
                        pb-5
                        last:border-0
                        last:pb-0
                      "
                    >
                      <span
                        className="
                          text-xs
                          font-bold
                          tracking-[0.12em]
                          text-[#086FFD]
                        "
                      >
                        {number}
                      </span>

                      <div>
                        <h4
                          className="
                            text-sm
                            font-semibold
                          "
                        >
                          {title}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-xs
                            leading-5
                            text-white/45
                          "
                        >
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDER
      ===================================================== */}

      <section
        className="
          px-5
          pb-14

          sm:px-8
          sm:pb-20

          lg:px-10
          lg:pb-24
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              flex
              flex-col
              items-start
              gap-6
              rounded-[24px]
              border
              border-[#191b1f]/8
              bg-white
              p-7
              shadow-[0_10px_35px_rgba(15,23,42,0.04)]

              sm:flex-row
              sm:items-center
              sm:p-9
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#086FFD]
                text-white
              "
            >
              <UserRound size={28} />
            </div>

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
                Meet the Founder
              </span>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-[#191b1f]

                  sm:text-3xl
                "
              >
                {COMPANY.founder.name}
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-[#191b1f]/50
                "
              >
                {COMPANY.founder.title}, CodeCPS Technologies
              </p>

              <p
                className="
                  mt-3
                  max-w-[620px]
                  text-sm
                  leading-6
                  text-[#191b1f]/55
                "
              >
                CodeCPS Technologies was founded by {COMPANY.founder.name} on{" "}
                {COMPANY.foundingDateDisplay}, based in Greater Noida West,
                Uttar Pradesh, India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COMPANY JOURNEY / TIMELINE
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
        <div className="mx-auto max-w-[1200px]">
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
              Our Journey
            </span>

            <h2
              className="
                mt-4
                max-w-[560px]
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#191b1f]

                sm:text-4xl
              "
            >
              Company timeline &

              <span className="text-[#086FFD]">
                {" "}key milestones.
              </span>
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {COMPANY.timeline.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  flex
                  gap-5
                  rounded-[20px]
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-6
                  shadow-[0_10px_35px_rgba(15,23,42,0.03)]
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#086FFD]/10
                    text-[#086FFD]
                  "
                >
                  <Flag size={19} />
                </div>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#086FFD]
                    "
                  >
                    {item.date}
                  </p>

                  <h3
                    className="
                      mt-1
                      text-base
                      font-semibold
                      text-[#191b1f]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      leading-6
                      text-[#191b1f]/55
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* KEY ACHIEVEMENTS / RECOGNITION */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              mt-8
              flex
              items-start
              gap-3
              rounded-[20px]
              border
              border-[#191b1f]/8
              bg-white
              p-6
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#086FFD]/10
                text-[#086FFD]
              "
            >
              <Award size={19} />
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#191b1f]">
                Registered MSME (Udyam)
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-[#191b1f]/55">
                CodeCPS Technologies is a registered MSME under Udyam
                Registration No. {COMPANY.msmeRegistrationNo}.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
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
                What Drives Us
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
                Our mission &

                <span className="text-[#086FFD]">
                  {" "}vision.
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
              We are building a technology company focused on innovation,
              impact and long-term partnerships.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5

              md:grid-cols-2
            "
          >

            {/* Mission */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="
                group
                rounded-[22px]
                border
                border-[#191b1f]/8
                bg-white
                p-7
                shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#086FFD]/20
                hover:shadow-[0_20px_45px_rgba(8,111,253,0.08)]

                sm:p-8
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
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
                <Target size={23} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Our Mission
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-[#191b1f]/55
                "
              >
                To empower businesses with innovative, reliable and accessible
                technology solutions that solve real-world challenges and help
                organizations grow in the digital era.
              </p>
            </motion.div>

            {/* Vision */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="
                group
                rounded-[22px]
                border
                border-[#191b1f]/8
                bg-white
                p-7
                shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#086FFD]/20
                hover:shadow-[0_20px_45px_rgba(8,111,253,0.08)]

                sm:p-8
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
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
                <Eye size={23} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Our Vision
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-[#191b1f]/55
                "
              >
                To become a trusted technology partner for businesses
                worldwide by delivering impactful digital products,
                intelligent solutions and exceptional customer experiences.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
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
                Our Values
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
                What makes us

                <span className="text-[#086FFD]">
                  {" "}different?
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
              Our values guide the way we build products, work with clients
              and create long-term relationships.
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
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    rounded-[22px]
                    border
                    border-[#191b1f]/8
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#086FFD]/20
                    hover:shadow-[0_20px_45px_rgba(8,111,253,0.08)]
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
                      size={21}
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
                    {value.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-[#191b1f]/55
                    "
                  >
                    {value.text}
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
        <div className="mx-auto max-w-[1200px]">

          <div
            className="
              grid
              grid-cols-1
              gap-10

              lg:grid-cols-2
              lg:items-center
              lg:gap-16
            "
          >

            {/* LEFT */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#4B9AFF]
                "
              >
                Technology & Expertise
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
                Modern technology.

                <span className="block text-[#4B9AFF]">
                  Powerful possibilities.
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
                From frontend experiences to scalable backend systems, we use
                modern technologies and development practices to create
                reliable digital products.
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

            {/* RIGHT */}

            <div
              className="
                grid
                grid-cols-1
                gap-4

                sm:grid-cols-2
              "
            >
              {technologyFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                      rounded-[20px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-6
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#086FFD]/40
                      hover:bg-white/[0.06]
                    "
                  >
                    <Icon
                      size={24}
                      className="text-[#4B9AFF]"
                      strokeWidth={1.8}
                    />

                    <h3
                      className="
                        mt-5
                        text-base
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
                        text-white/45
                      "
                    >
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

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
                Simple process.

                <span className="text-[#086FFD]">
                  {" "}Better results.
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
              We keep every project clear, collaborative and focused on
              delivering meaningful business results.
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
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-[20px]
                  border
                  border-[#191b1f]/8
                  bg-[#f8fafc]
                  p-6
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#086FFD]/20
                  hover:bg-white
                  hover:shadow-[0_15px_40px_rgba(8,111,253,0.08)]
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
          CTA
      ===================================================== */}

      <section
        className="
          px-5
          pb-16
          pt-4

          sm:px-8
          sm:pb-20

          lg:px-10
          lg:pb-24
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
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

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/70
              "
            >
              Let's Build Something Great
            </span>

            <h2
              className="
                mx-auto
                mt-4
                max-w-[700px]
                text-2xl
                font-semibold
                tracking-tight

                sm:text-3xl

                lg:text-4xl
              "
            >
              Have an idea?

              <span className="block">
                Let's turn it into reality.
              </span>
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
              Tell us about your project and let's create a reliable digital
              solution that works for your business.
            </p>

            <a
              href="/contact"
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
              Start Your Project

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>

          </div>
        </motion.div>
      </section>

    </main>
  );
}

export default About;