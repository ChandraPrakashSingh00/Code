import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

function ServicesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
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
          left-[-180px]
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#086FFD]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[-180px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#086FFD]/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="
            mx-auto
            mb-14
            max-w-2xl
            text-center
            sm:mb-16
            lg:mb-20
          "
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#086FFD]/15
              bg-[#086FFD]/5
              px-4
              py-1.5
              text-[11px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#086FFD]
            "
          >
            What We Do
          </span>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#191b1f]
              sm:text-4xl
              md:text-5xl
            "
          >
            Services built for
            <span className="text-[#086FFD]">
              {" "}
              modern businesses.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-[#191b1f]/60
              sm:text-base
              sm:leading-7
            "
          >
            From strategy and design to development and cloud
            infrastructure, we create digital solutions that help
            your business move forward.
          </p>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="
                  group
                  relative
                  flex
                  min-h-[350px]
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#191b1f]/10
                  bg-white
                  p-6
                  shadow-[0_8px_30px_rgba(25,27,31,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#086FFD]/20
                  hover:shadow-[0_20px_50px_rgba(8,111,253,0.10)]
                  sm:p-7
                "
              >
                {/* =================================================
                    TOP GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-[#086FFD]/5
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-[#086FFD]/10
                  "
                />

                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#086FFD]/10
                    text-[#086FFD]
                    transition-all
                    duration-500
                    group-hover:bg-[#086FFD]
                    group-hover:text-white
                    group-hover:shadow-[0_10px_25px_rgba(8,111,253,0.25)]
                  "
                >
                  <Icon
                    size={24}
                    className="
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative mt-7">
                  <h3
                    className="
                      text-xl
                      font-semibold
                      tracking-tight
                      text-[#191b1f]
                      transition-colors
                      duration-300
                      group-hover:text-[#086FFD]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#191b1f]/60
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* =================================================
                    LEARN MORE
                ================================================= */}

                <div className="relative mt-auto pt-8">
                  <Link
                    to={service.path}
                    className="
                      group/button
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[#086FFD]
                    "
                  >
                    Learn More

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </Link>
                </div>

                {/* =================================================
                    BOTTOM LINE
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#086FFD]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;