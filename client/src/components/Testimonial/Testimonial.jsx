import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/* ============================================================
   TESTIMONIAL DATA
============================================================ */

const testimonials = [
  {
    id: 1,
    name: "Akhil Kumar",
    role: "Business Owner",
    company: "Vision",
    image: "/testimonial/akhil.jpg",
    review:
      "I wanted a website for conducting different types of polls with a simple system for users and management. CodeCPS Technologies developed the platform according to my requirements perfectly.",
    rating: 5,
  },

  {
    id: 2,
    name: "Ankit Verma",
    role: "Founder",
    company: "Research Associate - IIT, Roorkee",
    image: "/testimonial/iit.jpg",
    review:
      "I had a project related to weather calculations and environmental data processing. CodeCPS Technologies understood the requirements well and developed a structured platform that made complex functionalities easy to use.",
    rating: 5,
  },

  {
    id: 3,
    name: "Priya Singh",
    role: "Marketing Manager",
    company: "DigitalEdge",
    image: "/testimonial/priya.jpg",
    review:
      "Working with CodeCPS Technologies was a great experience.Their team understood our requirements clearly and delivered a professional, reliable solution with excellent attention to detail.",
    rating: 5,
  },
];

/* ============================================================
   TYPING TEXT
============================================================ */

function TypingText({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 16);

    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <span>
      {displayText}

      {index < text.length && (
        <span
          className="
            ml-1
            inline-block
            h-3.5
            w-[2px]
            animate-pulse
            bg-[#086FFD]
          "
        />
      )}
    </span>
  );
}

/* ============================================================
   TESTIMONIAL CARD
============================================================ */

function TestimonialCard({ item, index }) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="
        group
        relative
        w-[300px]
        shrink-0

        sm:w-[330px]
        md:w-auto
      "
    >
      <div
        className="
          relative
          flex
          min-h-[245px]
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          border-[#191b1f]/10
          bg-white
          p-5

          shadow-[0_12px_40px_rgba(15,23,42,0.08)]

          transition-all
          duration-300

          group-hover:-translate-y-1.5
          group-hover:border-[#086FFD]/25
          group-hover:shadow-[0_22px_50px_rgba(8,111,253,0.13)]

          sm:p-6
        "
      >
        {/* ==================================================
            TOP USER
        ================================================== */}

        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">

            {/* PROFILE IMAGE */}

            <div
              className="
                relative
                h-11
                w-11
                shrink-0
                overflow-hidden
                rounded-full
                bg-[#086FFD]/10
                ring-2
                ring-[#086FFD]/10
              "
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={`${item.name} profile`}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                    bg-[#086FFD]
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              )}
            </div>

            {/* USER INFO */}

            <div className="min-w-0">
              <h3
                className="
                  truncate
                  text-sm
                  font-bold
                  text-[#191b1f]
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  mt-0.5
                  truncate
                  text-[10px]
                  font-medium
                  text-[#191b1f]/45
                "
              >
                {item.role} · {item.company}
              </p>
            </div>
          </div>

          {/* QUOTE */}

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
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
            <Quote size={16} />
          </div>
        </div>

        {/* ==================================================
            RATING
        ================================================== */}

        <div className="mt-5 flex items-center gap-1">
          {[...Array(item.rating)].map((_, starIndex) => (
            <Star
              key={starIndex}
              size={13}
              fill="currentColor"
              className="text-[#086FFD]"
            />
          ))}

          <span
            className="
              ml-1
              text-[10px]
              font-semibold
              text-[#191b1f]/35
            "
          >
            5.0
          </span>
        </div>

        {/* ==================================================
            REVIEW
        ================================================== */}

        <div
          className="
            mt-3
            flex-1
            text-[12px]
            leading-[1.7]
            text-[#191b1f]/65
          "
        >
          <TypingText text={item.review} />
        </div>

        {/* ==================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-[#191b1f]/8
            pt-3
          "
        >
          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#191b1f]/35
            "
          >
            Verified Client
          </span>

          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#191b1f]/5
              text-[#191b1f]/40

              transition-all
              duration-300

              group-hover:bg-[#086FFD]/10
              group-hover:text-[#086FFD]
            "
          >
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* ==================================================
            BOTTOM ACCENT
        ================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-[#086FFD]
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </div>
    </motion.article>
  );
}

/* ============================================================
   TESTIMONIALS
============================================================ */

export default function Testimonials() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#191b1f]
        py-12

        sm:py-14
        md:py-16
        lg:py-18
      "
    >
      {/* ======================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-64
          w-64
          rounded-full
          bg-[#086FFD]/6
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-64
          w-64
          rounded-full
          bg-[#086FFD]/6
          blur-3xl
        "
      />

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5

          sm:px-7
          lg:px-8
        "
      >

        {/* ====================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            mx-auto
            max-w-2xl
            text-center
          "
        >
          {/* BADGE */}

          <div
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-3
              py-1.5
              text-[10px]
              font-bold
              tracking-[0.12em]
              text-[#4B9AFF]
            "
          >
            <Sparkles size={13} />

            CLIENT STORIES
          </div>

          {/* HEADING */}

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-white

              sm:text-4xl
              md:text-[44px]
            "
          >
            Loved by businesses.

            <span
              className="
                block
                text-[#086FFD]
              "
            >
              Trusted by clients.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-[11px]
              leading-5
              text-slate-400

              sm:text-xs
              md:text-sm
            "
          >
            Real experiences from businesses that trusted CodeCPS
            Technologies to build their digital products and grow
            their online presence.
          </p>
        </motion.div>

        {/* ====================================================
            CARDS
        ==================================================== */}

        <div
          className="
            mt-8
            flex
            gap-4
            overflow-x-auto
            pb-3

            snap-x
            snap-mandatory

            scrollbar-hide

            md:grid
            md:grid-cols-3
            md:overflow-visible
            md:pb-0
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="
                snap-start
                md:min-w-0
              "
            >
              <TestimonialCard
                item={item}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* ====================================================
            BOTTOM TRUST BAR
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.45,
          }}
          className="
            mt-6
            flex
            justify-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              px-4
              py-2
            "
          >
            {/* SMALL AVATARS */}

            <div className="flex -space-x-2">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="
                    h-6
                    w-6
                    overflow-hidden
                    rounded-full
                    border-2
                    border-[#191b1f]
                    bg-white
                  "
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.name} profile`}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        bg-[#086FFD]
                        text-[7px]
                        font-bold
                        text-white
                      "
                    >
                      {item.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* RATING */}

            <div className="border-l border-white/10 pl-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={11}
                    fill="currentColor"
                    className="text-[#086FFD]"
                  />
                ))}
              </div>

              <p
                className="
                  mt-0.5
                  text-[9px]
                  font-medium
                  text-slate-500
                "
              >
                Trusted by growing businesses
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}