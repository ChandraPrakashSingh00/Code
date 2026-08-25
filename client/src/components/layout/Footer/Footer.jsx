import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Product", href: "/product" },
    { name: "Careers", href: "/career" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Web Development", href: "/service" },
    { name: "Mobile App Development", href: "/service" },
    { name: "UI/UX Design", href: "/service" },
    { name: "AI & ML Solutions", href: "/service" },
    { name: "Cloud & DevOps", href: "/service" },
    { name: "Digital Solutions", href: "/service" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/codecpstechnologies/",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: FaLinkedinIn,
    },
    {
      name: "X",
      href: "#",
      icon: FaXTwitter,
    },
    {
      name: "YouTube",
      href: "#",
      icon: FaYoutube,
    },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#191b1f] text-white"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#086FFD]/8
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-0
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#086FFD]/6
            blur-[110px]
          "
        />
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          py-12
          sm:px-8
          sm:py-14
          md:py-16
          lg:px-10
          lg:py-18
        "
      >
        {/* =====================================================
            FOOTER GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.1fr]
            lg:gap-12
          "
        >
          {/* =================================================
              BRAND / CONTACT
          ================================================= */}

          <div>
            {/* Logo */}

            <Link
              to="/"
              className="
                group
                inline-flex
                items-center
                outline-none
              "
            >
              <img
                src="/footer.png"
                alt="CodeCPS Technologies"
                className="
                  h-auto
                  w-[190px]
                  object-contain
                  transition-all
                  duration-300
                  group-hover:scale-[1.03]
                "
              />
            </Link>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-[360px]
                text-sm
                leading-6
                text-white/55
              "
            >
              We build smart software, web, mobile, cloud and AI
              solutions that help businesses grow faster and operate
              better.
            </p>

            {/* Address */}

            <div className="mt-6 flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-white"
              />

              <p
                className="
                  max-w-[330px]
                  text-sm
                  leading-6
                  text-white/65
                "
              >
                Greater Noida, Uttar Pradesh, India
              </p>
            </div>

            {/* Phone */}

            <a
              href="tel:+918920480415"
              className="
                mt-4
                flex
                items-center
                gap-3
                text-sm
                text-white/65
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <Phone size={17} />
              <span>+91 8920480415</span>
            </a>

            {/* Email */}

            <a
              href="mailto:codecpstechnologies@gmail.com"
              className="
                mt-4
                flex
                items-center
                gap-3
                text-sm
                text-white/65
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <Mail size={17} />
              <span>codecpstechnologies@gmail.com</span>
            </a>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>
            <FooterTitle>Quick Links</FooterTitle>

            <div className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <FooterLink
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <FooterTitle>What We Do</FooterTitle>

            <div className="mt-5 space-y-3.5">
              {services.map((service) => (
                <FooterLink
                  key={service.name}
                  href={service.href}
                >
                  {service.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <div>
            <FooterTitle>Newsletter</FooterTitle>

            <p
              className="
                mt-5
                max-w-[330px]
                text-sm
                leading-6
                text-white/55
              "
            >
              Subscribe to get our latest updates,
              insights and technology news.
            </p>

            {/* Newsletter Form */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                mt-5
                flex
                w-full
                items-center
                rounded-lg
                border
                border-white/25
                bg-transparent
                p-1
              "
            >
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3
                  py-2.5
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/40
                "
              />

              <button
                type="submit"
                className="
                  shrink-0
                  rounded-md
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:bg-[#086FFD]
                  hover:text-white
                "
              >
                Subscribe
              </button>
            </form>

            {/* Follow */}

            <h3
              className="
                mt-8
                text-sm
                font-semibold
                text-white
              "
            >
              Follow on
            </h3>

            {/* Social Icons */}

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.name}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.03]
                      text-white/80
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#086FFD]
                      hover:bg-[#086FFD]
                      hover:text-white
                    "
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            mt-10
            border-t
            border-white/10
            pt-6
            sm:mt-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Copyright */}

            <p
              className="
                text-center
                text-xs
                text-white/45
                sm:text-left
              "
            >
              © {currentYear} CodeCPS Technologies.
              All rights reserved.
            </p>

            {/* Bottom Links */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                sm:justify-end
              "
            >
              <Link
                to="/privacy"
                className="
                  text-xs
                  text-white/45
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="
                  text-xs
                  text-white/45
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Terms & Conditions
              </Link>

              <Link
                to="/"
                className="
                  text-xs
                  font-medium
                  text-white/65
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Back to top
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DECORATIVE RING
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-8
          right-[7%]
          hidden
          h-14
          w-14
          rounded-full
          border
          border-white/5
          lg:block
        "
      />
    </footer>
  );
}

/* ============================================================
   FOOTER TITLE
============================================================ */

function FooterTitle({ children }) {
  return (
    <h3 className="text-base font-semibold text-white">
      {children}

      <span
        className="
          mt-2.5
          block
          h-[2px]
          w-7
          rounded-full
          bg-[#086FFD]
        "
      />
    </h3>
  );
}

/* ============================================================
   FOOTER LINK
============================================================ */

function FooterLink({ href, children }) {
  return (
    <Link
      to={href}
      className="
        block
        text-sm
        text-white/55
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-white
      "
    >
      {children}
    </Link>
  );
}

export default Footer;