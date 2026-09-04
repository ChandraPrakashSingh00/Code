import React from "react";
import {
  Lightbulb,
  ClipboardList,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Idea & Discovery",
    description:
      "Understanding your vision, goals and business challenges.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Requirement Analysis",
    description:
      "Defining features, scope, users and project requirements.",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive, modern and user-focused experiences.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Product Development",
    description:
      "Building scalable, secure and high-performance solutions.",
  },
  {
    number: "05",
    icon: TestTube2,
    title: "Testing & Integration",
    description:
      "Testing features, integrations, security and performance.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment",
    description:
      "Launching your application with an optimized production setup.",
  },
  {
    number: "07",
    icon: Headphones,
    title: "Maintenance & Support",
    description:
      "Continuous updates, monitoring and technical assistance.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#191b1f] py-7 sm:py-9 lg:py-10">
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9 lg:mb-10">
          <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-[#086ffd]/30 bg-[#086ffd]/10 px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#086ffd]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#086ffd] sm:text-[11px]">
              How We Work
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[40px]">
            Our{" "}
            <span className="text-[#086ffd]">
              Development Process
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-5 text-white/45 sm:text-xs sm:leading-6">
            From concept to launch, our structured process transforms ideas
            into scalable, reliable and impactful digital solutions.
          </p>
        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden lg:block">
          <div className="relative mx-auto min-h-[340px] w-full">

            {/* Timeline Line */}
            <div
              className="
                absolute
                left-[5%]
                right-[5%]
                top-1/2
                z-0
                h-[2px]
                -translate-y-1/2
                bg-white/10
              "
            />

            <div
              className="
                absolute
                left-[5%]
                right-[5%]
                top-1/2
                z-0
                h-[2px]
                -translate-y-1/2
                bg-[#086ffd]/70
              "
            />

            {/* Steps */}
            <div className="relative z-10 grid min-h-[340px] grid-cols-7">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isTop = index % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className="group relative min-h-[340px]"
                  >

                    {/* ================= TOP CONTENT ================= */}
                    {isTop && (
                      <div
                        className="
                          absolute
                          bottom-[calc(50%+42px)]
                          left-1/2
                          w-[150px]
                          -translate-x-1/2
                          text-center
                          xl:w-[170px]
                        "
                      >
                        <span
                          className="
                            mb-1
                            block
                            text-[11px]
                            font-bold
                            tracking-[0.18em]
                            text-[#086ffd]/80
                            transition-colors
                            duration-300
                            group-hover:text-[#086ffd]
                          "
                        >
                          {step.number}
                        </span>

                        <h3
                          className="
                            text-[14px]
                            font-bold
                            leading-[18px]
                            text-white
                            transition-colors
                            duration-300
                            group-hover:text-[#086ffd]
                            xl:text-[15px]
                            xl:leading-5
                          "
                        >
                          {step.title}
                        </h3>

                        <p
                          className="
                            mt-1.5
                            text-[9px]
                            leading-[14px]
                            text-white/45
                            xl:text-[10px]
                            xl:leading-[15px]
                          "
                        >
                          {step.description}
                        </p>

                        {/* Connector */}
                        <div
                          className="
                            absolute
                            -bottom-[42px]
                            left-1/2
                            h-[42px]
                            w-px
                            -translate-x-1/2
                            bg-gradient-to-b
                            from-transparent
                            to-[#086ffd]
                          "
                        />
                      </div>
                    )}

                    {/* ================= BOTTOM CONTENT ================= */}
                    {!isTop && (
                      <div
                        className="
                          absolute
                          left-1/2
                          top-[calc(50%+42px)]
                          w-[150px]
                          -translate-x-1/2
                          text-center
                          xl:w-[170px]
                        "
                      >
                        {/* Connector */}
                        <div
                          className="
                            absolute
                            -top-[42px]
                            left-1/2
                            h-[42px]
                            w-px
                            -translate-x-1/2
                            bg-gradient-to-b
                            from-[#086ffd]
                            to-transparent
                          "
                        />

                        <span
                          className="
                            mb-1
                            block
                            text-[11px]
                            font-bold
                            tracking-[0.18em]
                            text-[#086ffd]/80
                            transition-colors
                            duration-300
                            group-hover:text-[#086ffd]
                          "
                        >
                          {step.number}
                        </span>

                        <h3
                          className="
                            text-[14px]
                            font-bold
                            leading-[18px]
                            text-white
                            transition-colors
                            duration-300
                            group-hover:text-[#086ffd]
                            xl:text-[15px]
                            xl:leading-5
                          "
                        >
                          {step.title}
                        </h3>

                        <p
                          className="
                            mt-1.5
                            text-[9px]
                            leading-[14px]
                            text-white/45
                            xl:text-[10px]
                            xl:leading-[15px]
                          "
                        >
                          {step.description}
                        </p>
                      </div>
                    )}

                    {/* ================= CENTER CIRCLE ================= */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        z-30
                        -translate-x-1/2
                        -translate-y-1/2
                      "
                    >
                      <div
                        className="
                          flex
                          h-[70px]
                          w-[70px]
                          items-center
                          justify-center
                          rounded-full
                          border-2
                          border-[#086ffd]/60
                          bg-white
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:border-[#086ffd]
                          group-hover:bg-[#086ffd]
                          group-hover:shadow-[0_0_25px_rgba(8,111,253,0.25)]
                        "
                      >
                        <div
                          className="
                            flex
                            h-[50px]
                            w-[50px]
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#086ffd]/20
                            bg-[#086ffd]/10
                            transition-all
                            duration-300
                            group-hover:border-white/30
                            group-hover:bg-white/10
                          "
                        >
                          <Icon
                            size={23}
                            strokeWidth={1.7}
                            className="
                              text-[#086ffd]
                              transition-all
                              duration-300
                              group-hover:scale-110
                              group-hover:text-white
                            "
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-2xl">

            {/* Vertical Line */}
            <div
              className="
                absolute
                bottom-5
                left-[29px]
                top-5
                w-[2px]
                bg-gradient-to-b
                from-transparent
                via-[#086ffd]
                to-transparent
              "
            />

            <div className="space-y-3.5">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative flex items-start gap-3.5"
                  >

                    {/* ================= MOBILE CIRCLE ================= */}
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-[58px]
                        w-[58px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#086ffd]/60
                        bg-white
                        transition-all
                        duration-300
                        group-hover:scale-105
                        group-hover:border-[#086ffd]
                        group-hover:bg-[#086ffd]
                        group-hover:shadow-[0_0_20px_rgba(8,111,253,0.22)]
                      "
                    >
                      <div
                        className="
                          flex
                          h-[42px]
                          w-[42px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#086ffd]/10
                          transition-all
                          duration-300
                          group-hover:bg-white/10
                        "
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className="
                            text-[#086ffd]
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:text-white
                          "
                        />
                      </div>

                      {/* Number */}
                      <span
                        className="
                          absolute
                          -right-1
                          -top-1.5
                          rounded-full
                          border
                          border-[#191b1f]
                          bg-[#086ffd]
                          px-1.5
                          py-0.5
                          text-[7px]
                          font-bold
                          text-white
                        "
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* ================= MOBILE CONTENT ================= */}
                    <div
                      className="
                        flex-1
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.025]
                        px-3.5
                        py-3
                        transition-all
                        duration-300
                        group-hover:border-[#086ffd]/30
                        group-hover:bg-[#086ffd]/[0.035]
                      "
                    >
                      <h3
                        className="
                          text-sm
                          font-bold
                          leading-5
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#086ffd]
                          sm:text-base
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-[18px]
                          text-white/45
                          sm:text-xs
                        "
                      >
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DevelopmentProcess;