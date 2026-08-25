import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Product", href: "/product" },
    { name: "Careers", href: "/career" },
    { name: "Internship", href: "/internship" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  /* ============================================================
     CLOSE MOBILE MENU ON DESKTOP
  ============================================================ */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ============================================================
     CLOSE MENU WITH ESC
  ============================================================ */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* ============================================================
     BODY SCROLL LOCK
  ============================================================ */

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

  /* ============================================================
     CLOSE MOBILE MENU
  ============================================================ */

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
          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              group
              flex
              shrink-0
              items-center
              justify-start
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

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

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

          {/* =====================================================
              DESKTOP CTA
          ===================================================== */}

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

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-[#191b1f]/15
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
            {mobileOpen ? (
              <X
                size={20}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={2}
              />
            )}
          </button>
        </nav>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`
            overflow-hidden
            border-b
            border-[#191b1f]/10
            bg-white
            shadow-[0_18px_40px_rgba(15,23,42,0.08)]
            transition-all
            duration-300
            lg:hidden

            ${
              mobileOpen
                ? "max-h-[calc(100vh-62px)] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              max-h-[calc(100vh-62px)]
              overflow-y-auto
              px-4
              pb-5
              pt-1

              sm:px-5
              sm:pb-6

              md:px-6
            "
          >
            {/* =================================================
                MOBILE LINKS
            ================================================= */}

            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="
                    flex
                    min-h-[46px]
                    items-center
                    border-b
                    border-[#191b1f]/10
                    py-3
                    text-[15px]
                    font-medium
                    text-[#191b1f]
                    outline-none
                    transition-colors
                    duration-300

                    hover:text-[#086FFD]
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* =================================================
                MOBILE CTA
            ================================================= */}

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="
                group
                mt-5
                flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#086FFD]
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(8,111,253,0.18)]
                transition-all
                duration-300

                hover:bg-[#075ed6]
                hover:shadow-[0_10px_25px_rgba(8,111,253,0.25)]

                active:scale-[0.99]
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