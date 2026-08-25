import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery & Planning",
    description:
      "We understand your business, goals, target audience and project requirements to create a clear development roadmap.",
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Our designers create modern, intuitive and user-friendly interfaces that deliver a smooth digital experience.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Our developers turn the approved design into a fast, secure and scalable web or software solution.",
  },
  {
    number: "04",
    icon: TestTube2,
    title: "Testing & Quality",
    description:
      "We carefully test functionality, performance, responsiveness and security to ensure everything works perfectly.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description:
      "Once everything is ready, we deploy your product and make sure it performs smoothly in the real world.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Support & Growth",
    description:
      "After launch, we provide ongoing support, maintenance and improvements to help your product grow.",
  },
];

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#086FFD]">
            <span className="h-2 w-2 rounded-full bg-[#086FFD]" />
            OUR DEVELOPMENT PROCESS
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#191b1f] md:text-5xl lg:text-6xl">
            From idea to
            <span className="text-[#086FFD]"> digital success.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            We follow a structured and transparent development process to
            transform your ideas into powerful, scalable and reliable digital
            products.
          </p>
        </motion.div>

        {/* ================= PROCESS ================= */}

        <div className="relative mt-16 md:mt-20">

          {/* Connecting Line Desktop */}
          <div className="absolute left-[8%] right-[8%] top-[55px] hidden h-px bg-slate-200 lg:block">
            <div className="h-full w-1/2 bg-[#086FFD]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >

                  {/* Card */}

                  <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40">

                    {/* Number + Icon */}

                    <div className="flex items-center justify-between">

                      <span className="text-sm font-bold tracking-wider text-[#086FFD]">
                        STEP {step.number}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#086FFD] transition-all duration-300 group-hover:bg-[#086FFD] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200">
                        <Icon size={26} />
                      </div>

                    </div>

                    {/* Content */}

                    <h3 className="mt-8 text-xl font-bold text-[#191b1f]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {step.description}
                    </p>

                    {/* Bottom Number */}

                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">

                      <span className="text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                        {step.number}
                      </span>

                      <ArrowRight
                        size={20}
                        className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#086FFD]"
                      />

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl bg-[#191b1f] p-8 md:mt-20 md:p-10"
        >

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4B9AFF]">
                READY TO START?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Let's build your next digital product.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Share your idea with us and our team will help you turn it
                into a powerful digital solution.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#086FFD] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0447D2] hover:shadow-lg hover:shadow-blue-500/20"
            >
              Start Your Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}