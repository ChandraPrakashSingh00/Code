function ReachOutSection() {
  return (
    <div className="mt-6 w-full max-w-[650px] lg:mt-7">

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-5

          sm:mt-7
          sm:grid-cols-2
          sm:gap-7

          lg:gap-10
        "
      >

        {/* =====================================================
            24/7 SUPPORT
        ===================================================== */}

        <div
          className="
            group
            flex
            items-center
            gap-3
          "
        >

          {/* Support Icon */}

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center

              transition-transform
              duration-300
              group-hover:-translate-y-0.5

              sm:h-11
              sm:w-11
            "
          >

            <svg
              viewBox="0 0 64 64"
              className="h-full w-full"
              fill="none"
            >

              {/* Left Grey Shape */}

              <path
                d="
                  M17 10
                  C7 18 5 31 10 42
                  C13 48 18 52 25 54
                  C20 44 18 32 19 22
                  C20 17 21 13 24 9
                  C21 9 19 9 17 10
                  Z
                "
                fill="#BDBDBD"
              />

              {/* Right Grey Shape */}

              <path
                d="
                  M47 10
                  C57 18 59 31 54 42
                  C51 48 46 52 39 54
                  C44 44 46 32 45 22
                  C44 17 43 13 40 9
                  C43 9 45 9 47 10
                  Z
                "
                fill="#BDBDBD"
              />

              {/* Blue Center */}

              <path
                d="
                  M32 6
                  C26 13 22 22 22 32
                  C22 42 26 51 32 58
                  C38 51 42 42 42 32
                  C42 22 38 13 32 6
                  Z
                "
                fill="#086FFD"
              />

              {/* White Lines */}

              <path
                d="
                  M20 17
                  C24 22 28 24 32 25
                  C36 24 40 22 44 17
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
              />

              <path
                d="
                  M18 44
                  C23 39 27 37 32 37
                  C37 37 41 39 46 44
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
              />

            </svg>

          </div>


          {/* Content */}

          <div>

            <h3
              className="
                text-[17px]
                font-bold
                leading-tight
                text-[#191b1f]

                transition-colors
                duration-300
                group-hover:text-[#086FFD]

                sm:text-[19px]
              "
            >
              24/7 Support
            </h3>

            <p
              className="
                mt-0.5
                text-[12px]
                leading-5
                text-[#191b1f]/60

                sm:text-[13px]
              "
            >
              Reach out to us anytime.
            </p>

          </div>

        </div>


        {/* =====================================================
            TRUSTED PARTNER
        ===================================================== */}

        <div
          className="
            group
            flex
            items-center
            gap-3
          "
        >

          {/* Partner Icon */}

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center

              transition-transform
              duration-300
              group-hover:-translate-y-0.5

              sm:h-11
              sm:w-11
            "
          >

            <svg
              viewBox="0 0 64 64"
              className="h-full w-full"
              fill="none"
            >

              {/* Head */}

              <circle
                cx="32"
                cy="24"
                r="12"
                fill="#086FFD"
              />

              {/* Body */}

              <path
                d="
                  M15 51
                  C16 42
                  23 37
                  32 37
                  C41 37
                  48 42
                  49 51
                  C49.5 54
                  47 56
                  44 56
                  H20
                  C17 56
                  14.5 54
                  15 51
                  Z
                "
                fill="#BDBDBD"
              />

              {/* White Separation */}

              <path
                d="
                  M20 43
                  C23 47
                  27 49
                  32 49
                  C37 49
                  41 47
                  44 43
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />

            </svg>

          </div>


          {/* Content */}

          <div>

            <h3
              className="
                text-[17px]
                font-bold
                leading-tight
                text-[#191b1f]

                transition-colors
                duration-300
                group-hover:text-[#086FFD]

                sm:text-[19px]
              "
            >
              Trusted Partner
            </h3>

            <p
              className="
                mt-0.5
                text-[12px]
                leading-5
                text-[#191b1f]/60

                sm:text-[13px]
              "
            >
              Delivering quality every time.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ReachOutSection;