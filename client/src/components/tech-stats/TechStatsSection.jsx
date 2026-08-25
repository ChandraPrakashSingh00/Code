import TechnologyItem from "./TechnologyItem";
import { technologies, stats } from "../../data/technologies";
import "./tech-stats.css";

function TechStatsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-2

        sm:py-3

        lg:py-4
      "
    >
      {/* =====================================================
          BLUE CONTENT WRAPPER
      ===================================================== */}

      <div
        className="
          relative
          mx-2
          overflow-hidden
          rounded-xl
          bg-[#191b1f]

          sm:mx-4
          sm:rounded-2xl

          md:mx-5

          lg:mx-8
          lg:rounded-[22px]
        "
      >

        {/* =====================================================
            TECHNOLOGY STACK
        ===================================================== */}

        <div
          className="
            relative
            border-b
            border-white/20
            py-6

            sm:py-7

            md:py-8
          "
        >
          {/* Heading */}

          <div
            className="
              mb-4
              text-center

              sm:mb-5

              md:mb-6
            "
          >
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-white

                sm:text-[10px]

                md:text-xs
              "
            >
              The modern stack we build on
            </p>
          </div>


          {/* =====================================================
              LEFT FADE
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-8
              bg-gradient-to-r
              from-[#191b1f]
              to-transparent

              sm:w-12

              md:w-16
            "
          />


          {/* =====================================================
              RIGHT FADE
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-10
              w-8
              bg-gradient-to-l
              from-[#191b1f]
              to-transparent

              sm:w-12

              md:w-16
            "
          />


          {/* =====================================================
              MARQUEE
          ===================================================== */}

          <div className="overflow-hidden">
            <div className="tech-marquee flex w-max items-center">

              {/* First Set */}

              <div className="flex shrink-0 items-center">
                {technologies.map((technology) => (
                  <TechnologyItem
                    key={`first-${technology.name}`}
                    technology={technology}
                  />
                ))}
              </div>


              {/* Duplicate Set */}

              <div className="flex shrink-0 items-center">
                {technologies.map((technology) => (
                  <TechnologyItem
                    key={`second-${technology.name}`}
                    technology={technology}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>


        {/* =====================================================
            STATS SECTION
        ===================================================== */}

        <div className="relative bg-[#191b1f]">

          <div
            className="
              mx-auto
              max-w-[1400px]
              px-5
              py-8

              sm:px-8
              sm:py-9

              md:px-10
              md:py-11

              lg:py-12
            "
          >

            {/* Section Label */}

            <div
              className="
                mb-7
                text-center

                sm:mb-8

                md:mb-9
              "
            >
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white

                  sm:text-[10px]

                  md:text-xs
                "
              >
                Built different from day one
              </p>
            </div>


            {/* =====================================================
                STATS
            ===================================================== */}

            <div
              className="
                grid
                grid-cols-2
                gap-y-8

                sm:gap-y-9

                lg:grid-cols-4
                lg:gap-y-0
              "
            >

              {stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    px-3
                    text-center

                    sm:px-4
                  "
                >

                  {/* Divider */}

                  {index !== 0 && (
                    <div
                      className="
                        absolute
                        left-0
                        top-1/2
                        hidden
                        h-12
                        w-px
                        -translate-y-1/2
                        bg-white/25

                        lg:block
                      "
                    />
                  )}


                  {/* Number */}

                  <div
                    className="
                      text-[34px]
                      font-extrabold
                      leading-none
                      tracking-[-1.5px]
                      text-white
                      transition-all
                      duration-300

                      group-hover:-translate-y-1

                      sm:text-[40px]

                      md:text-[44px]

                      lg:text-[48px]
                    "
                  >
                    {stat.value}
                  </div>


                  {/* Description */}

                  <p
                    className="
                      mt-2
                      max-w-[190px]
                      text-[11px]
                      font-bold
                      leading-4
                      text-white/90

                      sm:mt-2.5
                      sm:text-xs
                      sm:leading-5

                      md:text-[13px]
                    "
                  >
                    {stat.title}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>



    </section>
  );
}

export default TechStatsSection;
