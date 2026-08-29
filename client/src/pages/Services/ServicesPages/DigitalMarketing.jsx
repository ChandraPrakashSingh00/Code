import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Check,
  CheckCircle2,
  Search,
  Megaphone,
  BarChart3,
  Target,
  Globe,
  Share2,
  Mail,
  MousePointerClick,
  TrendingUp,
  Users,
  Smartphone,
  Layers3,
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
   DIGITAL MARKETING SERVICES
============================================================ */

const marketingServices = [
  {
    number: "01",
    icon: Search,
    category: "Search Visibility",
    title: "SEO Services",
    description:
      "Search engine optimization strategies designed to improve your website visibility, rankings and organic traffic.",
    features: [
      "On-Page SEO",
      "Technical SEO",
      "Keyword Strategy",
    ],
    tags: ["SEO", "Google", "Organic"],
  },

  {
    number: "02",
    icon: Megaphone,
    category: "Paid Advertising",
    title: "Google Ads",
    description:
      "Performance-focused paid advertising campaigns designed to reach high-intent customers and generate quality leads.",
    features: [
      "Search Campaigns",
      "Display Advertising",
      "Campaign Optimization",
    ],
    tags: ["Google Ads", "PPC", "Leads"],
  },

  {
    number: "03",
    icon: Share2,
    category: "Social Media",
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that help your brand build awareness, engage audiences and grow its digital presence.",
    features: [
      "Content Strategy",
      "Audience Engagement",
      "Social Campaigns",
    ],
    tags: ["Social", "Content", "Growth"],
  },

  {
    number: "04",
    icon: Target,
    category: "Lead Generation",
    title: "Lead Generation",
    description:
      "Digital campaigns and conversion strategies focused on attracting relevant prospects and turning website visitors into leads.",
    features: [
      "Lead Campaigns",
      "Landing Pages",
      "Conversion Strategy",
    ],
    tags: ["Leads", "CRO", "Growth"],
  },

  {
    number: "05",
    icon: Mail,
    category: "Customer Engagement",
    title: "Email Marketing",
    description:
      "Targeted email campaigns that help businesses communicate with customers, nurture leads and drive repeat engagement.",
    features: [
      "Campaign Creation",
      "Lead Nurturing",
      "Performance Tracking",
    ],
    tags: ["Email", "Automation", "CRM"],
  },

  {
    number: "06",
    icon: BarChart3,
    category: "Analytics",
    title: "Analytics & Reporting",
    description:
      "Clear marketing analytics and reporting to understand traffic, campaigns, conversions and overall digital performance.",
    features: [
      "Traffic Analytics",
      "Campaign Reports",
      "Performance Insights",
    ],
    tags: ["Analytics", "Reports", "Insights"],
  },
];

/* ============================================================
   FEATURES
============================================================ */

const features = [
  {
    icon: Target,
    title: "Result Focused",
    description:
      "Marketing strategies built around meaningful business goals such as visibility, leads, engagement and conversions.",
  },

  {
    icon: Search,
    title: "SEO Driven",
    description:
      "Search-friendly strategies designed to improve organic visibility and help your business reach relevant customers.",
  },

  {
    icon: BarChart3,
    title: "Data Driven",
    description:
      "Campaign decisions backed by performance data, analytics and measurable marketing insights.",
  },

  {
    icon: Users,
    title: "Audience Focused",
    description:
      "We focus on understanding your target audience so your marketing reaches the people most likely to engage.",
  },

  {
    icon: MousePointerClick,
    title: "Conversion Focused",
    description:
      "Landing pages, campaigns and content are planned to turn attention into meaningful actions and enquiries.",
  },

  {
    icon: TrendingUp,
    title: "Growth Ready",
    description:
      "Flexible digital marketing strategies that can evolve as your brand, audience and business goals grow.",
  },
];

/* ============================================================
   TOOLS & TECHNOLOGIES
============================================================ */

const technologies = [
  "Google Ads",
  "Google Analytics",
  "Search Console",
  "Meta Ads",
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Google Business",
  "Email Marketing",
  "SEO Tools",
];

/* ============================================================
   PROCESS
============================================================ */

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, target audience, competitors, existing digital presence and marketing objectives.",
  },

  {
    number: "02",
    title: "Research",
    description:
      "We research keywords, audiences, competitors, market opportunities and channels that can support your growth.",
  },

  {
    number: "03",
    title: "Strategy",
    description:
      "We create a practical digital marketing strategy covering SEO, content, paid campaigns, social media and conversions.",
  },

  {
    number: "04",
    title: "Execute",
    description:
      "Campaigns, content, optimization and marketing activities are implemented according to the defined strategy.",
  },

  {
    number: "05",
    title: "Measure",
    description:
      "We monitor traffic, engagement, leads, campaign performance and other important marketing metrics.",
  },

  {
    number: "06",
    title: "Optimize",
    description:
      "We continuously analyze performance and refine campaigns to improve results and maximize growth opportunities.",
  },
];

/* ============================================================
   BENEFITS
============================================================ */

const benefits = [
  "Stronger online visibility",
  "SEO-friendly growth strategy",
  "Targeted advertising campaigns",
  "Social media presence",
  "Quality lead generation",
  "Conversion-focused marketing",
  "Performance tracking & analytics",
  "Ongoing campaign optimization",
];

/* ============================================================
   DIGITAL MARKETING PAGE
============================================================ */

function DigitalMarketing() {
  return (
    <main className="min-h-screen bg-white text-[#191b1f]">

      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="Digital Marketing Services | CodeCPS Technologies"
        description="Digital marketing by CodeCPS Technologies: SEO, Google Ads, social media marketing, lead generation and email marketing to grow your business online."
        keywords="digital marketing company, digital marketing services, SEO company, SEO services, Google Ads management, social media marketing, lead generation services, online marketing company"
        path="/services/digital-marketing"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digital Marketing Services",
          provider: {
            "@type": "Organization",
            name: "CodeCPS Technologies",
            url: "https://www.codecpstechnologies.in/",
          },
          description:
            "Modern digital marketing services including SEO, paid advertising, social media marketing, lead generation and analytics.",
          areaServed: "Worldwide",
          serviceType: "Digital Marketing",
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
            <span className="h-2 w-2 rounded-full bg-[#086FFD]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Digital Marketing
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
            Grow your brand with

            <span className="block text-[#086FFD]">
              smarter digital marketing.
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
            Data-driven digital marketing strategies designed to
            increase your online visibility, attract the right audience
            and generate meaningful business growth.
          </motion.p>

          {/* Button */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 flex items-center justify-center"
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
              Grow Your Business

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
              More than marketing.

              <span className="text-[#086FFD]">
                {" "}
                A complete growth strategy.
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
              Digital marketing is not just about getting more
              traffic. It is about reaching the right people,
              communicating your value and turning attention into
              meaningful business opportunities.
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
              We combine SEO, paid advertising, social media,
              content, analytics and conversion-focused strategies to
              create a digital presence that supports long-term
              business growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "SEO Growth",
                "Paid Advertising",
                "Social Media",
                "Lead Generation",
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
        id="digital-marketing-services"
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
                Our Digital Marketing Services
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
                Everything you need to

                <span className="text-[#086FFD]">
                  {" "}
                  grow online.
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
              From search visibility and paid advertising to social
              media, lead generation and analytics, we create complete
              digital marketing strategies.
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
            {marketingServices.map((service, index) => {
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

                  {/* Hover Glow */}

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
          WHY DIGITAL MARKETING
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
                Why Our Marketing Approach
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
                Marketing built for

                <span className="text-[#086FFD]">
                  {" "}
                  measurable growth.
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
              We combine creative thinking with data, technology and
              performance insights to build marketing strategies that
              support real business goals.
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
          TOOLS
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
                Marketing Tools
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
                  modern marketing tools.
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
                We use trusted digital platforms and analytics tools
                to plan campaigns, measure performance and make
                informed marketing decisions.
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
                <TrendingUp size={23} />
              </div>

              <h3 className="relative mt-6 text-xl font-semibold">
                Complete digital growth strategy
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
                From search visibility and advertising to social
                media, lead generation and analytics, we create a
                connected marketing strategy for your business.
              </p>

              <div className="relative mt-6 space-y-3">
                {[
                  "Search Engine Optimization",
                  "Google & Paid Advertising",
                  "Social Media Marketing",
                  "Lead Generation",
                  "Analytics & Performance Tracking",
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
                From strategy to

                <span className="text-[#086FFD]">
                  {" "}
                  measurable growth.
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
              A structured marketing process helps us understand your
              business, execute campaigns and continuously improve
              performance.
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
              Marketing that works

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
              We combine strategy, creativity, technology and
              performance data to create digital marketing campaigns
              that are practical, measurable and aligned with your
              business goals.
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
              Start Your Digital Growth
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
              Ready to grow your business online?
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
              Let's build a smart digital marketing strategy that
              increases visibility, attracts the right audience and
              creates more opportunities for your business.
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

export default DigitalMarketing;