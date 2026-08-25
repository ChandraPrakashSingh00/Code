import { ArrowRight, Play } from "lucide-react";
import HeroVisual from "./HeroVisual";
import ReachOutSection from "./ReachOutSection";
import "./hero.css";

function HeroSection() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#191b1f]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="
          relative
          overflow-hidden
          bg-white
        "
      >

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-[1380px]
            items-center

            /* MOBILE */
            gap-6
            px-4
            pb-8
            pt-8

            /* SMALL TABLET */
            sm:gap-7
            sm:px-6
            sm:pb-10
            sm:pt-10

            /* TABLET */
            md:gap-8
            md:px-8
            md:pb-12
            md:pt-12

            /* DESKTOP */
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-5
            lg:px-10
            lg:pb-10
            lg:pt-10

            /* LARGE DESKTOP */
            xl:gap-8
            xl:px-12
            xl:pb-12
            xl:pt-12
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div
            className="
              relative
              z-20
              mx-auto
              w-full
              max-w-[650px]
              text-center

              lg:mx-0
              lg:text-left
            "
          >

            {/* =====================================================
                BADGE
            ===================================================== */}

            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#086FFD]/15
                bg-[#086FFD]/5
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-[#086FFD]

                sm:mb-4
                sm:px-3.5
                sm:py-2
                sm:text-xs
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#086FFD]

                  sm:h-2
                  sm:w-2
                "
              />

              We Build. You Grow.
            </div>


            {/* =====================================================
                HEADING
            ===================================================== */}

           <h1
  className="
    mt-5
    text-4xl
    font-semibold
    leading-tight
    tracking-tight
    text-[#191b1f]

    sm:text-5xl
    md:text-[54px]
    lg:text-[58px]
  "
>
  <span className="block">
    Innovative Solution
  </span>

  <span className="animated-gradient-text block">
    Smart Solution
  </span>
</h1>


            {/* =====================================================
                DESCRIPTION
            ===================================================== */}

            <p
              className="
                mx-auto
                mt-3
                max-w-[550px]
                text-[12px]
                leading-5
                text-[#191b1f]/60

                sm:mt-4
                sm:text-sm
                sm:leading-6

                md:text-[15px]
                md:leading-6

                lg:mx-0

                xl:text-base
                xl:leading-7
              "
            >
              Custom software, automation, cloud solutions and dedicated development teams that help businesses scale faster with modern technology
            </p>


            {/* =====================================================
                BUTTONS
            ===================================================== */}

            <div
              className="
                mt-5
                flex
                flex-col
                gap-2.5

                sm:mt-6
                sm:flex-row
                sm:flex-wrap
                sm:gap-3

                lg:mt-6
              "
            >

              {/* Explore Services */}

              <a
                href="#services"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-lg
                  bg-[#086FFD]
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(8,111,253,0.18)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#075ed6]

                  sm:w-auto
                  sm:py-3
                "
              >
                Explore Services

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>


              {/* Watch Intro */}

              <a
                href="#about"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-lg
                  border
                  border-[#191b1f]/15
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#191b1f]
                  shadow-sm
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#086FFD]/40
                  hover:text-[#086FFD]

                  sm:w-auto
                  sm:py-3
                "
              >

                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#191b1f]/20
                  "
                >
                  <Play
                    size={9}
                    fill="currentColor"
                  />
                </span>

                Watch Intro

              </a>

            </div>


            {/* =====================================================
                TRUST
            ===================================================== */}

            <div
              className="
                mt-4
                flex
                flex-wrap
                justify-center
                gap-x-4
                gap-y-1.5
                text-[9px]
                font-medium
                text-[#191b1f]/45

                sm:mt-5
                sm:gap-x-5
                sm:text-[11px]

                lg:justify-start
              "
            >

              <span>✓ Secure</span>
              <span>✓ Scalable</span>
              <span>✓ AI Powered</span>

            </div>


            {/* =====================================================
                REACH OUT
            ===================================================== */}

            <ReachOutSection />

          </div>


          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}

          <div
            className="
              relative
              z-10
              w-full

              lg:self-center
            "
          >

            <HeroVisual />

          </div>

        </div>


        {/* =====================================================
            BOTTOM FADE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-8
            bg-gradient-to-t
            from-white
            to-transparent

            sm:h-10

            lg:h-12
          "
        />

      </section>

    </main>
  );
}

export default HeroSection;