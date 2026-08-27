import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  /*
  ============================================================
    SECRET ADMIN LOGIN - 5 CLICK / TAP
  ============================================================
  */

  const tapCountRef = useRef(0);
  const tapTimerRef = useRef(null);

  const handleLogoClick = (event) => {
    tapCountRef.current += 1;

    if (tapCountRef.current >= 5) {
      event.preventDefault();

      tapCountRef.current = 0;

      if (tapTimerRef.current) {
        clearTimeout(tapTimerRef.current);
        tapTimerRef.current = null;
      }

      setMobileOpen(false);
      navigate("/admin/login");

      return;
    }

    if (tapTimerRef.current) {
      clearTimeout(tapTimerRef.current);
    }

    tapTimerRef.current = setTimeout(() => {
      tapCountRef.current = 0;
      tapTimerRef.current = null;
    }, 3000);
  };

  /*
  ============================================================
    NAVIGATION ITEMS
  ============================================================
  */

  const navItems = [
    {
      name: "Home",
      href: "/",
      number: "01",
      description: "Back to our homepage",
    },
    {
      name: "About Us",
      href: "/about",
      number: "02",
      description: "Know more about CodeCPS",
    },
    {
      name: "Services",
      href: "/service",
      number: "03",
      description: "Explore what we offer",
    },
    {
      name: "Product",
      href: "/product",
      number: "04",
      description: "Our digital products",
    },
    {
      name: "Careers",
      href: "/career",
      number: "05",
      description: "Build your career with us",
    },
    {
      name: "Internship",
      href: "/internship",
      number: "06",
      description: "Start your journey",
    },
    {
      name: "Blog",
      href: "/blog",
      number: "07",
      description: "Insights & latest updates",
    },
    {
      name: "Contact",
      href: "/contact",
      number: "08",
      description: "Let's work together",
    },
  ];

  /*
  ============================================================
    CLOSE ON DESKTOP
  ============================================================
  */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /*
  ============================================================
    ESC TO CLOSE
  ============================================================
  */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /*
  ============================================================
    BODY SCROLL LOCK
  ============================================================
  */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /*
  ============================================================
    CLEANUP
  ============================================================
  */

  useEffect(() => {
    return () => {
      if (tapTimerRef.current) {
        clearTimeout(tapTimerRef.current);
      }
    };
  }, []);

  /*
  ============================================================
    CLOSE MENU
  ============================================================
  */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-[100] w-full bg-white">

        <nav
          className="
            relative
            flex
            h-[62px]
            w-full
            items-center
            justify-between
            border-b
            border-[#191b1f]/10
            bg-white
            px-4

            sm:h-[64px]
            sm:px-5

            md:px-6

            lg:h-[70px]
            lg:px-12

            xl:px-16

            2xl:px-20
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={handleLogoClick}
            className="
              group
              flex
              shrink-0
              items-center
              outline-none

              lg:ml-8
              xl:ml-10
              2xl:ml-12
            "
          >
            <img
              src="/logo.png"
              alt="CodeCPS Technologies"
              className="
                block
                h-auto
                w-[135px]
                max-w-none
                cursor-pointer
                object-contain
                transition-transform
                duration-300

                group-hover:scale-[1.02]

                sm:w-[140px]
                md:w-[140px]
                lg:w-[155px]
                xl:w-[165px]
                2xl:w-[175px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              justify-center
              gap-5

              lg:flex

              xl:gap-7

              2xl:gap-9
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="
                  flex
                  items-center
                  whitespace-nowrap
                  py-5
                  text-[14px]
                  font-medium
                  tracking-[-0.1px]
                  text-[#191b1f]
                  outline-none
                  transition-colors
                  duration-300

                  hover:text-[#086FFD]

                  xl:text-[15px]
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <Link
            to="/contact"
            className="
              group
              hidden
              h-[38px]
              shrink-0
              items-center
              justify-center
              gap-2.5
              rounded-[8px]
              bg-[#086FFD]
              px-4
              text-[13px]
              font-semibold
              text-white
              shadow-[0_7px_20px_rgba(8,111,253,0.16)]
              transition-all
              duration-300

              hover:-translate-y-[1px]
              hover:bg-[#075ed6]
              hover:shadow-[0_10px_25px_rgba(8,111,253,0.22)]

              lg:mr-8
              lg:flex

              xl:mr-10
              xl:h-[40px]
              xl:px-5
              xl:text-[14px]

              2xl:mr-12
            "
          >
            Get In Touch

            <ArrowRight
              size={15}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            className="
              relative
              z-[130]
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[#191b1f]/10
              bg-white
              text-[#191b1f]
              outline-none
              transition-all
              duration-300

              hover:border-[#086FFD]/30
              hover:bg-[#086FFD]/5
              hover:text-[#086FFD]

              active:scale-95

              lg:hidden
            "
          >
            <span
              className="
                flex
                items-center
                justify-center
                transition-transform
                duration-300
              "
            >
              {mobileOpen ? (
                <X
                  size={21}
                  strokeWidth={2}
                />
              ) : (
                <Menu
                  size={21}
                  strokeWidth={2}
                />
              )}
            </span>
          </button>
        </nav>

        {/* =====================================================
            PREMIUM MOBILE MENU
        ===================================================== */}

        <div
          className={`
            fixed
            inset-0
            z-[115]
            bg-[#f8fafc]
            lg:hidden

            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              mobileOpen
                ? "visible opacity-100"
                : "pointer-events-none invisible opacity-0"
            }
          `}
        >

          {/* =================================================
              BACKGROUND DECORATION
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
            "
          >

            {/* Top Blue Glow */}
            <div
              className="
                absolute
                -right-[140px]
                -top-[140px]
                h-[380px]
                w-[380px]
                rounded-full
                bg-[#086FFD]/10
                blur-[80px]
              "
            />

            {/* Bottom Blue Glow */}
            <div
              className="
                absolute
                -bottom-[160px]
                -left-[160px]
                h-[400px]
                w-[400px]
                rounded-full
                bg-[#086FFD]/[0.07]
                blur-[90px]
              "
            />

            {/* Small Dot */}
            <div
              className="
                absolute
                right-[20%]
                top-[28%]
                h-2
                w-2
                rounded-full
                bg-[#086FFD]/30
              "
            />

            {/* Grid */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.025]
                [background-image:linear-gradient(#191b1f_1px,transparent_1px),linear-gradient(90deg,#191b1f_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

          </div>

          {/* =================================================
              MENU WRAPPER
          ================================================= */}

          <div
            className="
              relative
              flex
              h-full
              w-full
              flex-col
              overflow-y-auto
              pt-[62px]

              sm:pt-[64px]
            "
          >

            {/* =================================================
                TOP MENU HEADER
            ================================================= */}

            <div
              className={`
                border-b
                border-[#191b1f]/10
                bg-white/80
                px-5
                py-5
                backdrop-blur-xl

                sm:px-7
                sm:py-6

                md:px-10
                md:py-7

                transition-all
                duration-500

                ${
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }
              `}
            >

              <div
                className="
                  mx-auto
                  flex
                  max-w-5xl
                  items-end
                  justify-between
                "
              >

                <div>

                  <div
                    className="
                      mb-2
                      flex
                      items-center
                      gap-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#086FFD]

                      sm:text-[11px]
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

                    Navigation
                  </div>

                  <h2
                    className="
                      text-[25px]
                      font-semibold
                      leading-none
                      tracking-[-1px]
                      text-[#191b1f]

                      sm:text-[30px]

                      md:text-[34px]
                    "
                  >
                    Explore
                    <span className="text-[#086FFD]">
                      {" "}CodeCPS
                    </span>
                  </h2>

                </div>

                <div
                  className="
                    hidden
                    text-right

                    sm:block
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#191b1f]/30
                    "
                  >
                    MENU
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[#191b1f]/45
                    "
                  >
                    Choose your destination
                  </p>
                </div>

              </div>

            </div>

            {/* =================================================
                NAVIGATION AREA
            ================================================= */}

            <div
              className="
                mx-auto
                w-full
                max-w-5xl
                px-5
                py-5

                sm:px-7
                sm:py-7

                md:px-10
                md:py-9
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  gap-2

                  sm:grid-cols-2
                  sm:gap-3

                  md:gap-4
                "
              >

                {navItems.map(
                  (item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeMobileMenu}
                      style={{
                        transitionDelay:
                          mobileOpen
                            ? `${80 + index * 45}ms`
                            : "0ms",
                      }}
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#191b1f]/10
                        bg-white
                        p-4
                        shadow-[0_4px_20px_rgba(15,23,42,0.025)]
                        outline-none

                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        hover:-translate-y-1
                        hover:border-[#086FFD]/30
                        hover:shadow-[0_15px_35px_rgba(8,111,253,0.10)]

                        active:scale-[0.985]

                        sm:p-5

                        md:p-6

                        ${
                          mobileOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                        }
                      `}
                    >

                      {/* Blue Hover Line */}
                      <span
                        className="
                          absolute
                          left-0
                          top-0
                          h-full
                          w-[3px]
                          origin-bottom
                          scale-y-0
                          bg-[#086FFD]
                          transition-transform
                          duration-500

                          group-hover:scale-y-100
                        "
                      />

                      {/* Card */}
                      <div
                        className="
                          flex
                          items-center
                          gap-3.5

                          sm:gap-4
                        "
                      >

                        {/* Number */}
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#f3f6fa]
                            text-[10px]
                            font-bold
                            tracking-wider
                            text-[#191b1f]/35
                            transition-all
                            duration-300

                            group-hover:bg-[#086FFD]
                            group-hover:text-white

                            sm:h-11
                            sm:w-11
                          "
                        >
                          {item.number}
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">

                          <h3
                            className="
                              text-[15px]
                              font-semibold
                              tracking-[-0.25px]
                              text-[#191b1f]
                              transition-colors
                              duration-300

                              group-hover:text-[#086FFD]

                              sm:text-[16px]

                              md:text-[17px]
                            "
                          >
                            {item.name}
                          </h3>

                          <p
                            className="
                              mt-1
                              truncate
                              text-[10px]
                              font-medium
                              text-[#191b1f]/40

                              sm:text-[11px]

                              md:text-xs
                            "
                          >
                            {item.description}
                          </p>

                        </div>

                        {/* Arrow Circle */}
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#191b1f]/10
                            text-[#191b1f]/35
                            transition-all
                            duration-300

                            group-hover:translate-x-1
                            group-hover:border-[#086FFD]/20
                            group-hover:bg-[#086FFD]
                            group-hover:text-white

                            sm:h-9
                            sm:w-9
                          "
                        >
                          <ArrowRight
                            size={15}
                            strokeWidth={2}
                          />
                        </div>

                      </div>

                    </Link>
                  )
                )}

              </div>

              {/* =================================================
                  CTA CARD
              ================================================= */}

              <div
                className={`
                  mt-5
                  transition-all
                  delay-[500ms]
                  duration-500

                  sm:mt-6

                  ${
                    mobileOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    bg-[#191b1f]
                    p-5

                    sm:p-6

                    md:p-7
                  "
                >

                  {/* CTA Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-24
                      h-56
                      w-56
                      rounded-full
                      bg-[#086FFD]/30
                      blur-[60px]
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      flex-col
                      gap-5

                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >

                    <div>

                      <div
                        className="
                          mb-2
                          flex
                          items-center
                          gap-2
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[#086FFD]
                        "
                      >
                        <Sparkles
                          size={12}
                          strokeWidth={2}
                        />

                        Let's create
                      </div>

                      <h3
                        className="
                          text-[18px]
                          font-semibold
                          tracking-[-0.4px]
                          text-white

                          sm:text-[20px]

                          md:text-[21px]
                        "
                      >
                        Have a project in mind?
                      </h3>

                      <p
                        className="
                          mt-1
                          max-w-md
                          text-xs
                          leading-relaxed
                          text-white/45

                          sm:text-sm
                        "
                      >
                        Let's build something
                        innovative together.
                      </p>

                    </div>

                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="
                        group
                        flex
                        h-11
                        w-full
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#086FFD]
                        px-5
                        text-sm
                        font-semibold
                        text-white
                        shadow-[0_10px_30px_rgba(8,111,253,0.20)]
                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-[#1978ff]
                        hover:shadow-[0_14px_35px_rgba(8,111,253,0.30)]

                        active:scale-[0.98]

                        sm:w-auto
                      "
                    >
                      Get In Touch

                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="
                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                      />
                    </Link>

                  </div>

                </div>

              </div>

              {/* =================================================
                  FOOTER
              ================================================= */}

              <div
                className={`
                  flex
                  items-center
                  justify-between
                  px-1
                  pb-4
                  pt-5

                  transition-all
                  delay-[600ms]
                  duration-500

                  ${
                    mobileOpen
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
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

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#191b1f]/30
                    "
                  >
                    CodeCPS Technologies
                  </span>
                </div>

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#191b1f]/25
                  "
                >
                  © {new Date().getFullYear()}
                </span>

              </div>

            </div>

          </div>

        </div>
      </header>

      {/* =====================================================
          NAVBAR SPACING
      ===================================================== */}

      <div
        className="
          h-[62px]

          sm:h-[64px]

          lg:h-[70px]
        "
      />
    </>
  );
}

export default Navbar;