import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

/*
============================================================
  FAQ SECTION
  Premium split-layout FAQ section
  Left  -> Introduction + CTA
  Right -> FAQ Accordion
============================================================
*/

const defaultFaqs = [
  {
    question: "What services does CodeCPS Technologies offer?",
    answer:
      "CodeCPS Technologies offers custom software development, web development, mobile app development, cloud solutions, UI/UX design and AI-powered automation for businesses of all sizes.",
  },
  {
    question: "How long does it take to build a custom software solution?",
    answer:
      "Timelines depend on project scope, but most custom software projects take anywhere from 4 to 16 weeks, from initial planning to launch. We share a clear timeline after understanding your requirements.",
  },
  {
    question: "Do you work with startups as well as established businesses?",
    answer:
      "Yes. We work with startups building their first product as well as established businesses looking to modernize existing systems or automate operations with AI.",
  },
  {
    question: "Can you help automate existing business processes with AI?",
    answer:
      "Yes, we design AI-powered automation for tasks like customer support, data entry, lead follow-ups and reporting, helping businesses save hours of manual work every week.",
  },
  {
    question: "How do I get started with CodeCPS Technologies?",
    answer:
      "Simply reach out through our contact page for a free consultation. We'll understand your requirements and recommend the right solution and timeline for your business.",
  },
];

function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  /*
  ============================================================
    FAQ SCHEMA
  ============================================================
  */

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  /*
  ============================================================
    TOGGLE FAQ
  ============================================================
  */

  const toggleFaq = (index) => {
    setOpenIndex((current) =>
      current === index ? -1 : index
    );
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-20

        sm:px-6
        sm:py-24

        lg:px-8
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#086FFD]/[0.045]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#086FFD]/[0.04]
          blur-[110px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-12

          lg:grid-cols-[0.78fr_1.22fr]
          lg:items-start
          lg:gap-16

          xl:gap-20
        "
      >
        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div
          className="
            lg:sticky
            lg:top-28
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
              border-[#086FFD]/15
              bg-[#086FFD]/[0.05]
              px-3.5
              py-1.5
              text-xs
              font-semibold
              tracking-wide
              text-[#086FFD]
            "
          >
            <Sparkles
              size={14}
              strokeWidth={2}
            />

            <span>FAQs</span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              max-w-xl
              text-3xl
              font-bold
              leading-[1.12]
              tracking-[-0.035em]
              text-[#191b1f]

              sm:text-4xl

              lg:text-[46px]
              lg:leading-[1.08]

              xl:text-[52px]
            "
          >
            {title}
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-lg
              text-sm
              leading-6
              text-[#191b1f]/55

              sm:text-base
              sm:leading-7
            "
          >
            Have questions about our services, development
            process or project timelines? We've answered some
            of the most common questions below.
          </p>

          {/* =================================================
              INFO CARD
          ================================================= */}

          <div
            className="
              mt-8
              rounded-2xl
              border
              border-[#191b1f]/[0.08]
              bg-white
              p-5
              shadow-[0_10px_35px_rgba(15,23,42,0.05)]

              sm:p-6
            "
          >
            <div className="flex items-start gap-4">
              {/* Icon */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#086FFD]/[0.08]
                  text-[#086FFD]
                "
              >
                <MessageCircle
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-[#191b1f]
                  "
                >
                  Can't find your answer?
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-[#191b1f]/50

                    sm:text-sm
                  "
                >
                  Tell us about your requirement and our team
                  will be happy to help.
                </p>
              </div>
            </div>

            {/* CTA */}

            <a
              href="/contact"
              className="
                group
                mt-5
                flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#086FFD]
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_22px_rgba(8,111,253,0.18)]
                transition-all
                duration-300

                hover:-translate-y-[1px]
                hover:bg-[#075ed6]
                hover:shadow-[0_12px_28px_rgba(8,111,253,0.24)]

                active:scale-[0.99]
              "
            >
              Talk to Our Team

              <ArrowRight
                size={16}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* Small Trust Text */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-xs
              text-[#191b1f]/45
            "
          >
            <HelpCircle
              size={14}
              className="text-[#086FFD]"
            />

            <span>
              Still unsure? We're just a message away.
            </span>
          </div>
        </div>

        {/* ===================================================
            RIGHT FAQ ACCORDION
        =================================================== */}

        <div className="w-full">
          <div
            className="
              rounded-3xl
              border
              border-[#191b1f]/[0.08]
              bg-[#fafcff]
              p-3
              shadow-[0_15px_50px_rgba(15,23,42,0.05)]

              sm:p-4

              lg:p-5
            "
          >
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={`${faq.question}-${index}`}
                    className={`
                      overflow-hidden
                      rounded-2xl
                      border
                      bg-white
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? "border-[#086FFD]/25 shadow-[0_10px_30px_rgba(8,111,253,0.07)]"
                          : "border-[#191b1f]/[0.08] hover:border-[#086FFD]/20"
                      }
                    `}
                  >
                    {/* =================================================
                        QUESTION
                    ================================================= */}

                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        px-4
                        py-4
                        text-left
                        outline-none

                        sm:gap-4
                        sm:px-5
                        sm:py-[18px]
                      "
                    >
                      {/* Number */}

                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          text-[11px]
                          font-bold
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? "bg-[#086FFD] text-white shadow-[0_6px_18px_rgba(8,111,253,0.2)]"
                              : "bg-[#086FFD]/[0.07] text-[#086FFD]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      {/* Question */}

                      <span
                        className={`
                          flex-1
                          text-sm
                          font-semibold
                          leading-5
                          transition-colors
                          duration-300

                          sm:text-[15px]
                          sm:leading-6

                          ${
                            isOpen
                              ? "text-[#086FFD]"
                              : "text-[#191b1f]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                      {/* Chevron */}

                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? "bg-[#086FFD]/10 text-[#086FFD]"
                              : "bg-slate-50 text-[#191b1f]/40"
                          }
                        `}
                      >
                        <ChevronDown
                          size={17}
                          strokeWidth={2}
                          className={`
                            transition-transform
                            duration-300
                            ${
                              isOpen
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />
                      </span>
                    </button>

                    {/* =================================================
                        ANSWER
                    ================================================= */}

                    <div
                      id={`faq-answer-${index}`}
                      className={`
                        grid
                        transition-[grid-template-rows,opacity]
                        duration-300
                        ease-out

                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="
                            px-4
                            pb-5
                            pl-[60px]

                            sm:px-5
                            sm:pb-6
                            sm:pl-[68px]
                          "
                        >
                          <div
                            className="
                              border-l-2
                              border-[#086FFD]/20
                              pl-4
                            "
                          >
                            <p
                              className="
                                text-sm
                                leading-6
                                text-[#191b1f]/55

                                sm:text-[14px]
                                sm:leading-6
                              "
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              BOTTOM NOTE
          ================================================= */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-2
              text-center
              text-[11px]
              text-[#191b1f]/40

              sm:text-xs
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

            <span>
              We're here to help you build the right solution.
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          FAQ JSON-LD
      ===================================================== */}

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
    </section>
  );
}

export default FAQSection;