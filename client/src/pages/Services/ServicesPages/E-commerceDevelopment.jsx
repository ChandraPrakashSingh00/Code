import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Check,
  CheckCircle2,
  ShoppingCart,
  Store,
  CreditCard,
  Package,
  Truck,
  Users,
  Search,
  Gauge,
  ShieldCheck,
  Smartphone,
  Layers3,
  BarChart3,
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
   E-COMMERCE SERVICES
============================================================ */

const ecommerceServices = [
  {
    number: "01",
    icon: Store,
    category: "Online Store",
    title: "E-Commerce Website",
    description:
      "Professional online stores designed to showcase your products, build customer trust and create a smooth shopping experience.",
    features: [
      "Modern Storefront",
      "Product Management",
      "Responsive Design",
    ],
    tags: ["React", "Store", "Responsive"],
  },

  {
    number: "02",
    icon: ShoppingCart,
    category: "Shopping",
    title: "Custom E-Commerce",
    description:
      "Fully customized e-commerce platforms built around your products, customers, business workflows and unique requirements.",
    features: [
      "Custom Features",
      "Business Workflows",
      "Scalable Architecture",
    ],
    tags: ["Custom", "Scalable", "MERN"],
  },

  {
    number: "03",
    icon: CreditCard,
    category: "Payments",
    title: "Payment Integration",
    description:
      "Secure and reliable payment experiences that make it easy for customers to complete purchases across different payment methods.",
    features: [
      "Online Payments",
      "Payment Gateway",
      "Secure Checkout",
    ],
    tags: ["Razorpay", "Payments", "Checkout"],
  },

  {
    number: "04",
    icon: Package,
    category: "Products",
    title: "Product Management",
    description:
      "Powerful product management functionality for categories, pricing, inventory, variants, images and product information.",
    features: [
      "Product Catalog",
      "Categories & Variants",
      "Inventory Management",
    ],
    tags: ["Products", "Inventory", "Catalog"],
  },

  {
    number: "05",
    icon: Users,
    category: "Customers",
    title: "Customer Accounts",
    description:
      "User-friendly customer accounts that make shopping easier with profiles, order history, saved information and personalized experiences.",
    features: [
      "User Registration",
      "Order History",
      "Customer Profiles",
    ],
    tags: ["Users", "Accounts", "Orders"],
  },

  {
    number: "06",
    icon: Truck,
    category: "Orders",
    title: "Order Management",
    description:
      "Complete order management systems to help businesses track purchases, manage order status and streamline fulfillment.",
    features: [
      "Order Tracking",
      "Order Status",
      "Shipping Integration",
    ],
    tags: ["Orders", "Shipping", "Tracking"],
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
      "Fast-loading storefronts optimized for smooth browsing, product discovery and better shopping experiences.",
  },

  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Responsive shopping experiences that work smoothly across smartphones, tablets, laptops and desktops.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description:
      "Security-focused development practices for safer customer accounts, checkout flows and payment experiences.",
  },

  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Search-friendly e-commerce architecture designed to improve product visibility and organic traffic.",
  },

  {
    icon: BarChart3,
    title: "Business Insights",
    description:
      "Useful dashboards and analytics capabilities to help you understand products, customers, orders and business performance.",
  },

  {
    icon: Layers3,
    title: "Scalable Platform",
    description:
      "Flexible architecture that can grow with your product catalog, customers, orders and business requirements.",
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
  "Razorpay",
  "REST APIs",
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
      "We understand your products, customers, business model, competitors and e-commerce requirements.",
  },

  {
    number: "02",
    title: "Plan",
    description:
      "We define the store structure, product architecture, features, integrations and technology roadmap.",
  },

  {
    number: "03",
    title: "Design",
    description:
      "We create a clean and conversion-focused shopping experience aligned with your brand identity.",
  },

  {
    number: "04",
    title: "Develop",
    description:
      "We build the storefront, backend, product system, checkout and integrations using modern technology.",
  },

  {
    number: "05",
    title: "Test",
    description:
      "We test products, cart, checkout, payments, responsiveness, performance, security and user flows.",
  },

  {
    number: "06",
    title: "Launch",
    description:
      "Your store is deployed, optimized and prepared for customers with ongoing technical support.",
  },
];

/* ============================================================
   BENEFITS
============================================================ */

const benefits = [
  "Modern and professional storefront",
  "Mobile-first shopping experience",
  "Secure payment integration",
  "Product and inventory management",
  "Customer account functionality",
  "Order and shipping management",
  "SEO-friendly e-commerce architecture",
  "Post-launch technical support",
];

/* ============================================================
   E-COMMERCE DEVELOPMENT PAGE
============================================================ */

function EcommerceDevelopment() {
  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="E-Commerce Development Services | CodeCPS Technologies"
        description="E-commerce development by CodeCPS Technologies: online stores, custom platforms, payment integration, product & order management for growing businesses."
        keywords="e-commerce development company, ecommerce website development, online store development, custom ecommerce development, ecommerce website company, payment gateway integration, ecommerce development services"
        path="/services/ecommerce-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "E-Commerce Development Services",
          provider: {
            "@type": "Organization",
            name: "CodeCPS Technologies",
            url: "https://www.codecps.com/",
          },
          description:
            "Modern and scalable e-commerce development services for businesses, startups and organizations.",
          areaServed: "Worldwide",
          serviceType: "E-Commerce Development",
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
        {/* Blue corner glow removed */}

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
              E-Commerce Development
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
            Online stores that

            <span className="block text-[#086FFD]">
              turn visitors into customers.
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
            Modern, secure and scalable e-commerce websites built to
            showcase your products, simplify shopping and grow your
            online business.
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
              Start Your Store

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
              More than an online store.

              <span className="text-[#086FFD]">
                {" "}
                A complete digital business.
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
              Your e-commerce website should do more than display
              products. It should make shopping simple, build trust,
              support secure payments and help your business convert
              more visitors into customers.
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
              We build e-commerce platforms with thoughtful UI,
              reliable technology and business-focused functionality
              that can grow with your products, customers and orders.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Modern Store",
                "Secure Payments",
                "Mobile Ready",
                "SEO Ready",
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
          E-COMMERCE SERVICES
      ===================================================== */}

      <section
        id="ecommerce-services"
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
                Our E-Commerce Services
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
                  sell online.
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
              From storefront design and product management to secure
              checkout, payments and order management, we build complete
              e-commerce experiences.
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
            {ecommerceServices.map((service, index) => {
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
          WHY OUR E-COMMERCE SOLUTIONS
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
                Why Our E-Commerce Solutions
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
                Built for shopping.

                <span className="text-[#086FFD]">
                  {" "}
                  Designed for growth.
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
              Every part of your online store is designed to make
              shopping easier while giving your business the flexibility
              to grow.
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
                We use modern and reliable technologies to build
                e-commerce platforms that are fast, secure,
                maintainable and ready to scale.
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
                <ShoppingCart size={23} />
              </div>

              <h3 className="relative mt-6 text-xl font-semibold">
                Complete e-commerce development
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
                From your storefront and product catalog to checkout,
                payments, orders and backend systems, we can handle
                the complete e-commerce development lifecycle.
              </p>

              <div className="relative mt-6 space-y-3">
                {[
                  "Storefront Development",
                  "Product & Inventory System",
                  "Shopping Cart & Checkout",
                  "Payment Gateway Integration",
                  "Order & Customer Management",
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
                From concept to

                <span className="text-[#086FFD]">
                  {" "}
                  online store.
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
              A clear and collaborative process keeps your e-commerce
              project organized, tested and ready for real customers.
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
              An online store built

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
              We combine design, technology and business thinking to
              create e-commerce experiences that are easy to use,
              reliable, secure and ready to grow.
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
              Start Your E-Commerce Project
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
              Ready to start selling online?
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
              Let's build a modern, secure and conversion-focused
              e-commerce store that helps your business grow.
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

export default EcommerceDevelopment;