import React from "react";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Cloud,
  Layers3,
} from "lucide-react";
import SEO from "../../components/SEO/SEO";

/* ============================================================
   PRODUCT ICONS
============================================================ */

const ProductIcon = ({ type, size = 24 }) => {
  const icons = {
    software: Code2,
    mobile: Smartphone,
    analytics: BarChart3,
    security: ShieldCheck,
    cloud: Cloud,
    platform: Layers3,
  };

  const Icon = icons[type] || Code2;

  return <Icon size={size} />;
};

/* ============================================================
   PRODUCTS PAGE
============================================================ */

function Products() {
  const products = [
    {
      id: "business-suite",
      title: "Business Suite",
      category: "Business",
      type: "software",
      description:
        "A modern business management platform designed to simplify operations, workflows and everyday business processes.",
      features: [
        "Business Management",
        "Workflow Automation",
        "Team Management",
        "Reports & Analytics",
      ],
      status: "Coming Soon",
    },

    {
      id: "smart-connect",
      title: "Smart Connect",
      category: "Platform",
      type: "platform",
      description:
        "A powerful digital platform that helps businesses connect their teams, customers and essential tools in one place.",
      features: [
        "Unified Platform",
        "Real-time Updates",
        "Team Collaboration",
        "Smart Integrations",
      ],
      status: "Coming Soon",
    },

    {
      id: "insight-analytics",
      title: "Insight Analytics",
      category: "Analytics",
      type: "analytics",
      description:
        "Turn your business data into meaningful insights with dashboards, reports and intelligent analytics.",
      features: [
        "Live Dashboards",
        "Business Reports",
        "Data Visualization",
        "Performance Tracking",
      ],
      status: "Coming Soon",
    },

    {
      id: "secure-workspace",
      title: "Secure Workspace",
      category: "Security",
      type: "security",
      description:
        "A secure workspace built to help teams manage important information, resources and digital workflows.",
      features: [
        "Secure Access",
        "User Management",
        "Data Protection",
        "Activity Monitoring",
      ],
      status: "Coming Soon",
    },

    {
      id: "cloud-flow",
      title: "Cloud Flow",
      category: "Cloud",
      type: "cloud",
      description:
        "Cloud-ready infrastructure and workflow solutions designed for reliable and scalable digital operations.",
      features: [
        "Cloud Infrastructure",
        "Scalable Architecture",
        "Automation",
        "Monitoring",
      ],
      status: "Coming Soon",
    },

    {
      id: "mobile-hub",
      title: "Mobile Hub",
      category: "Mobile",
      type: "mobile",
      description:
        "A flexible mobile-first solution that brings essential business functionality directly to your users.",
      features: [
        "Mobile First",
        "Cross Platform",
        "Push Notifications",
        "Secure Authentication",
      ],
      status: "Coming Soon",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title="Our Products - Ready-to-Use Software Solutions"
        description="Discover CodeCPS Technologies' products - powerful, ready-to-use software solutions built to help businesses automate operations, manage growth and scale efficiently."
        keywords="software products, SaaS products, business automation software, CodeCPS products"
        path="/product"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.codecpstechnologies.in/" },
            { "@type": "ListItem", position: 2, name: "Products", item: "https://www.codecpstechnologies.in/product" },
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

        {/* Hero Content */}

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
                flex
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
              Our Products
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
            Digital products

            <span className="block text-[#086FFD]">
              built for the future.
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
            Explore our growing collection of digital products
            designed to help businesses work smarter, move faster
            and create better experiences.
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
              Built With Purpose
            </span>

            <h2
              className="
                mt-4
                max-w-[500px]
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
                {" "}solves real problems.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[520px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              Our products are created around real business needs.
              We focus on simple interfaces, reliable technology
              and solutions that make everyday work easier.
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
              Designed for modern businesses.
            </h3>

            <p
              className="
                relative
                mt-3
                max-w-[550px]
                text-sm
                leading-6
                text-white/75
              "
            >
              From automation and analytics to cloud platforms
              and mobile experiences, we're building products that
              are practical, scalable and easy to use.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section
        id="products"
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

          {/* Section Header */}

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
                Product Collection
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
                  {" "}products.
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
              Our product ecosystem is continuously growing.
              Select a product to learn more.
            </p>

          </div>

          {/* Product Grid */}

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

            {products.map((product) => (
              <a
                key={product.id}
                href={`/products/${product.id}`}
                className="
                  group
                  relative
                  flex
                  min-h-[410px]
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
                "
              >

                {/* Top */}

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
                    <ProductIcon
                      type={product.type}
                      size={22}
                    />
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-[#086FFD]/10
                      px-2.5
                      py-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#086FFD]
                    "
                  >
                    {product.status}
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
                  {product.category}
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
                  {product.title}
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
                  {product.description}
                </p>

                {/* Features */}

                <div className="mt-5 space-y-2">

                  {product.features.slice(0, 3).map((feature) => (
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
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#086FFD]
                        "
                      />

                      {feature}
                    </div>
                  ))}

                </div>

                {/* Bottom */}

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
                    View Product
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

                        group-hover:translate-x-0.5
                      "
                    />
                  </span>

                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PRODUCT DEVELOPMENT
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
            gap-8

            lg:grid-cols-3
          "
        >

          {/* Card 1 */}

          <div
            className="
              rounded-2xl
              border
              border-[#191b1f]/8
              bg-white
              p-6
              shadow-[0_10px_35px_rgba(15,23,42,0.04)]
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
              "
            >
              <Code2 size={20} />
            </div>

            <h3
              className="
                mt-5
                text-base
                font-semibold
              "
            >
              Modern Technology
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              Built with modern frameworks and scalable
              architecture.
            </p>

          </div>

          {/* Card 2 */}

          <div
            className="
              rounded-2xl
              border
              border-[#191b1f]/8
              bg-white
              p-6
              shadow-[0_10px_35px_rgba(15,23,42,0.04)]
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
              "
            >
              <ShieldCheck size={20} />
            </div>

            <h3
              className="
                mt-5
                text-base
                font-semibold
              "
            >
              Secure by Design
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              Security and reliability remain at the core of
              every product.
            </p>

          </div>

          {/* Card 3 */}

          <div
            className="
              rounded-2xl
              border
              border-[#191b1f]/8
              bg-white
              p-6
              shadow-[0_10px_35px_rgba(15,23,42,0.04)]
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
              "
            >
              <Layers3 size={20} />
            </div>

            <h3
              className="
                mt-5
                text-base
                font-semibold
              "
            >
              Built to Scale
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              Flexible products designed to grow with your
              business.
            </p>

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

          sm:px-8
          sm:pb-20

          lg:px-10
          lg:pb-24
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

            <h2
              className="
                text-2xl
                font-semibold
                tracking-tight

                sm:text-3xl

                lg:text-4xl
              "
            >
              Have a product idea?
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
              Let's turn your idea into a powerful digital product
              built for real users and real business needs.
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
              Build With Us

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

        </div>
      </section>

    </main>
  );
}

export default Products;