import React from "react";
import {
  BriefcaseBusiness,
  Code2,
  ShieldCheck,
  MessageSquareText,
  Expand,
  Handshake,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: BriefcaseBusiness,
    title: "Business-Focused Solutions",
    description:
      "We build technology solutions around your business goals, challenges, and growth opportunities.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "We leverage modern web, cloud, AI, and software technologies to build powerful digital experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "From clean code to performance and security, we focus on delivering reliable and production-ready solutions.",
  },
  {
    icon: MessageSquareText,
    title: "Transparent Process",
    description:
      "Clear communication, regular updates, and a transparent workflow keep you informed at every stage.",
  },
  {
    icon: Expand,
    title: "Built to Scale",
    description:
      "Our solutions are designed with scalability in mind, so your technology can grow alongside your business.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't just deliver projects. We aim to become your trusted technology partner for long-term digital growth.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-11 lg:mb-12">
          {/* Small Label */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#086FFD]/15 bg-[#086FFD]/5 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#086FFD]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#086FFD]">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-[#191b1f] sm:text-4xl lg:text-[42px]">
            Why{" "}
            <span className="text-[#086FFD]">
              Choose Us
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-[15px] sm:leading-7">
            We combine technology, creativity, and business understanding to
            build digital solutions that create real and measurable impact.
          </p>
        </div>

        {/* =======================================================
            REASONS GRID
        ======================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-5
                  shadow-[0_5px_25px_rgba(25,27,31,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-[#086FFD]/20
                  hover:shadow-[0_15px_35px_rgba(8,111,253,0.10)]
                  sm:p-6
                "
              >
                {/* =================================================
                    TOP ACCENT
                ================================================== */}

                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-0
                    h-[2px]
                    origin-left
                    scale-x-0
                    rounded-full
                    bg-[#086FFD]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                    sm:left-6
                    sm:right-6
                  "
                />

                {/* =================================================
                    NUMBER
                ================================================== */}

                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-xs
                    font-bold
                    tracking-wider
                    text-gray-200
                    transition-colors
                    duration-300
                    group-hover:text-[#086FFD]/20
                    sm:right-6
                    sm:top-6
                  "
                >
                  0{index + 1}
                </span>

                {/* =================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#086FFD]/8
                    text-[#086FFD]
                    transition-all
                    duration-300
                    group-hover:bg-[#086FFD]
                    group-hover:text-white
                    group-hover:shadow-[0_8px_20px_rgba(8,111,253,0.20)]
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    mb-2.5
                    pr-8
                    text-lg
                    font-bold
                    leading-6
                    text-[#191b1f]
                    transition-colors
                    duration-300
                    group-hover:text-[#086FFD]
                    sm:text-[19px]
                  "
                >
                  {item.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    text-sm
                    leading-[22px]
                    text-gray-500
                  "
                >
                  {item.description}
                </p>

                {/* =================================================
                    BOTTOM LINE
                ================================================== */}

                <div
                  className="
                    mt-5
                    h-px
                    w-8
                    bg-[#086FFD]/20
                    transition-all
                    duration-300
                    group-hover:w-12
                    group-hover:bg-[#086FFD]
                  "
                />
              </div>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================== */}

        <div
          className="
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-[#086FFD]/10
            bg-[#086FFD]/[0.035]
            px-5
            py-5
            sm:mt-10
            sm:px-7
            sm:py-6
          "
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* CTA Content */}
            <div className="max-w-2xl">
              <p
                className="
                  mb-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#086FFD]
                  sm:text-[11px]
                "
              >
                Technology with Purpose
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  leading-7
                  text-[#191b1f]
                  sm:text-2xl
                "
              >
                Your vision. Our technology.{" "}
                <span className="text-[#086FFD]">
                  Built for growth.
                </span>
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-gray-500 sm:text-sm">
                Let's transform your ideas into secure, scalable, and
                high-performing digital solutions.
              </p>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#086FFD]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(8,111,253,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#075dcc]
                hover:shadow-[0_12px_25px_rgba(8,111,253,0.25)]
              "
            >
              <span>Let's Work Together</span>

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;