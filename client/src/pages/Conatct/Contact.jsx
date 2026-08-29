import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";
import SEO, { SITE_URL } from "../../components/SEO/SEO";
import { COMPANY } from "../../data/companyInfo";

/* ============================================================
   INSTAGRAM ICON
============================================================ */

function InstagramIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.4"
        cy="6.6"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

/* ============================================================
   LINKEDIN ICON
============================================================ */

function LinkedinIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3C3.8 3 3 3.8 3 4.85S3.8 6.7 4.85 6.7 6.7 5.9 6.7 4.85 5.9 3 4.85 3ZM21 13.85C21 10.1 18.98 8.1 16.28 8.1c-2.18 0-3.15 1.2-3.69 2.04V8.5H9.3V21h3.29v-6.18c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.31V21H21v-7.15Z" />
    </svg>
  );
}

/* ============================================================
   CONTACT PAGE
============================================================ */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title="Contact Us - Get in Touch"
        description="Get in touch with CodeCPS Technologies for custom software, web, mobile and AI development. Free consultation for your next project."
        keywords="contact CodeCPS Technologies, software development company contact, get a quote, free consultation, software company Greater Noida, software company Uttar Pradesh"
        path="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#localbusiness`,
          name: COMPANY.legalName,
          image: `${SITE_URL}/logo.png`,
          url: `${SITE_URL}/`,
          telephone: COMPANY.phone,
          email: COMPANY.email,
          priceRange: "$$",
          foundingDate: COMPANY.foundingDate,
          founder: {
            "@type": "Person",
            name: COMPANY.founder.name,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: COMPANY.address.streetAddress,
            addressLocality: COMPANY.address.addressLocality,
            addressRegion: COMPANY.address.addressRegion,
            postalCode: COMPANY.address.postalCode,
            addressCountry: COMPANY.address.addressCountry,
          },
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#191b1f]
          px-5
          pb-10
          pt-12

          sm:px-8
          sm:pb-12
          sm:pt-14

          lg:px-10
          lg:pb-14
          lg:pt-16
        "
      >

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            relative
            mx-auto
            max-w-[1200px]
            text-center
          "
        >

          {/* =================================================
              BADGE
          ================================================= */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
            "
          >

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#086FFD]
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Get In Touch
            </span>

          </div>


          {/* =================================================
              HERO HEADING
          ================================================= */}

          <h1
            className="
              mx-auto
              mt-5
              max-w-[900px]
              text-[38px]
              font-bold
              leading-[1.05]
              tracking-[-1.8px]
              text-white

              sm:text-[48px]
              sm:tracking-[-2px]

              md:text-[56px]

              lg:text-[64px]
              lg:tracking-[-2.5px]
            "
          >
            Let&apos;s build something

            <span className="block text-[#086FFD]">
              amazing together.
            </span>
          </h1>


          {/* =================================================
              HERO DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[680px]
              text-sm
              leading-6
              text-white/60

              sm:text-base
              sm:leading-7
            "
          >
            Have a project in mind, a business idea, or simply want
            to explore what&apos;s possible? We&apos;d love to hear
            from you.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section
        className="
          px-5
          py-14

          sm:px-8
          sm:py-20

          lg:px-10
          lg:py-24
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-1
            gap-10

            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-14
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div>

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Contact Information
            </span>


            <h2
              className="
                mt-4
                max-w-[500px]
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#191b1f]

                sm:text-4xl
              "
            >
              We&apos;d love to hear

              <span className="text-[#086FFD]">
                {" "}from you.
              </span>
            </h2>


            <p
              className="
                mt-4
                max-w-[470px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              Whether you&apos;re starting something new or looking
              to improve an existing product, our team is ready to
              help you turn your ideas into meaningful digital
              experiences.
            </p>


            {/* =================================================
                CONTACT CARDS
            ================================================= */}

            <div className="mt-8 space-y-4">

              {/* EMAIL */}

              <a
                href="mailto:codecpstechnologies@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-4
                  shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#086FFD]/20
                  hover:shadow-[0_15px_40px_rgba(8,111,253,0.10)]
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
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
                  <Mail size={19} />
                </div>


                <div>

                  <p className="text-[11px] font-medium text-[#191b1f]/45">
                    Email Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#191b1f]">
                    codecpstechnologies@gmail.com
                  </p>

                </div>

              </a>


              {/* PHONE */}

              <a
                href="tel:+91 8920480415"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-4
                  shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#086FFD]/20
                  hover:shadow-[0_15px_40px_rgba(8,111,253,0.10)]
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
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
                  <Phone size={19} />
                </div>


                <div>

                  <p className="text-[11px] font-medium text-[#191b1f]/45">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#191b1f]">
                    +91 8920480415
                  </p>

                </div>

              </a>


              {/* LOCATION */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-4
                  shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#086FFD]/10
                    text-[#086FFD]
                  "
                >
                  <MapPin size={19} />
                </div>


                <div>

                  <p className="text-[11px] font-medium text-[#191b1f]/45">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#191b1f]">
                    14 Avenue, Gaur City 2, Near Brahma Mandir, Greater Noida West, Uttar Pradesh, India - 201009
                  </p>

                </div>

              </div>


              {/* WORKING HOURS */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-4
                  shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#086FFD]/10
                    text-[#086FFD]
                  "
                >
                  <Clock3 size={19} />
                </div>


                <div>

                  <p className="text-[11px] font-medium text-[#191b1f]/45">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#191b1f]">
                    Mon – Sat · 10:00 AM – 7:00 PM
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                SOCIAL
            ================================================= */}

            <div className="mt-8">

              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#191b1f]/45
                "
              >
                Follow Us
              </p>


              <div className="mt-3 flex gap-2.5">

                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/codecpstechnologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#191b1f]/10
                    text-[#191b1f]/70
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#086FFD]
                    hover:bg-[#086FFD]
                    hover:text-white
                  "
                >
                  <InstagramIcon size={17} />
                </a>


                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#191b1f]/10
                    text-[#191b1f]/70
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#086FFD]
                    hover:bg-[#086FFD]
                    hover:text-white
                  "
                >
                  <LinkedinIcon size={17} />
                </a>

              </div>

            </div>

          </div>


          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div
            className="
              rounded-[24px]
              border
              border-[#191b1f]/8
              bg-white
              p-6
              shadow-[0_20px_60px_rgba(15,23,42,0.07)]

              sm:p-8

              lg:p-10
            "
          >

            <div>

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#086FFD]/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#086FFD]
                "
              >
                Start a conversation
              </span>


              <h3
                className="
                  mt-4
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-[#191b1f]

                  sm:text-3xl
                "
              >
                Tell us about your project.
              </h3>


              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[#191b1f]/55
                "
              >
                Fill out the form below and our team will get back
                to you as soon as possible.
              </p>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* NAME + EMAIL */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5

                  sm:grid-cols-2
                "
              >

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-[#191b1f]
                    "
                  >
                    Full Name
                  </label>


                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#191b1f]/10
                      bg-[#f8fafc]
                      px-4
                      text-sm
                      text-[#191b1f]
                      outline-none
                      transition-all
                      duration-300

                      placeholder:text-[#191b1f]/35

                      focus:border-[#086FFD]/50
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#086FFD]/10
                    "
                  />

                </div>


                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-[#191b1f]
                    "
                  >
                    Email Address
                  </label>


                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#191b1f]/10
                      bg-[#f8fafc]
                      px-4
                      text-sm
                      text-[#191b1f]
                      outline-none
                      transition-all
                      duration-300

                      placeholder:text-[#191b1f]/35

                      focus:border-[#086FFD]/50
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#086FFD]/10
                    "
                  />

                </div>

              </div>


              {/* PHONE + SERVICE */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5

                  sm:grid-cols-2
                "
              >

                <div>

                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-[#191b1f]
                    "
                  >
                    Phone Number
                  </label>


                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#191b1f]/10
                      bg-[#f8fafc]
                      px-4
                      text-sm
                      text-[#191b1f]
                      outline-none
                      transition-all
                      duration-300

                      placeholder:text-[#191b1f]/35

                      focus:border-[#086FFD]/50
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#086FFD]/10
                    "
                  />

                </div>


                <div>

                  <label
                    htmlFor="service"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-[#191b1f]
                    "
                  >
                    Service
                  </label>


                  <select
                    id="service"
                    required
                    defaultValue=""
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#191b1f]/10
                      bg-[#f8fafc]
                      px-4
                      text-sm
                      text-[#191b1f]
                      outline-none
                      transition-all
                      duration-300

                      focus:border-[#086FFD]/50
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#086FFD]/10
                    "
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="web-development">
                      Web Development
                    </option>

                    <option value="mobile-development">
                      Mobile App Development
                    </option>

                    <option value="ui-ux">
                      UI/UX Design
                    </option>

                    <option value="ai-ml">
                      AI & ML Solutions
                    </option>

                    <option value="cloud-devops">
                      Cloud & DevOps
                    </option>

                    <option value="digital-solutions">
                      Digital Solutions
                    </option>

                  </select>

                </div>

              </div>


              {/* SUBJECT */}

              <div>

                <label
                  htmlFor="subject"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    text-[#191b1f]
                  "
                >
                  Subject
                </label>


                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help you?"
                  required
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-[#191b1f]/10
                    bg-[#f8fafc]
                    px-4
                    text-sm
                    text-[#191b1f]
                    outline-none
                    transition-all
                    duration-300

                    placeholder:text-[#191b1f]/35

                    focus:border-[#086FFD]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#086FFD]/10
                  "
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    text-[#191b1f]
                  "
                >
                  Message
                </label>


                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us a little about your project..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#191b1f]/10
                    bg-[#f8fafc]
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-[#191b1f]
                    outline-none
                    transition-all
                    duration-300

                    placeholder:text-[#191b1f]/35

                    focus:border-[#086FFD]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#086FFD]/10
                  "
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  group
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  bg-[#086FFD]
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(8,111,253,0.18)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#075ed6]
                  hover:shadow-[0_16px_35px_rgba(8,111,253,0.25)]

                  active:translate-y-0
                "
              >

                {submitted ? (
                  <>
                    <CheckCircle2 size={17} />
                    Message Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}

              </button>


              <p
                className="
                  text-center
                  text-[10px]
                  leading-5
                  text-[#191b1f]/40
                "
              >
                We respect your privacy. Your information will only
                be used to respond to your enquiry.
              </p>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section
        className="
          px-5
          pb-16

          sm:px-8
          sm:pb-20

          lg:px-10
          lg:pb-24
        "
      >

        <div
          className="
            relative
            mx-auto
            max-w-[1200px]
            overflow-hidden
            rounded-[24px]
            bg-[#086FFD]
            px-6
            py-10
            text-center
            text-white

            sm:px-10
            sm:py-12

            lg:px-16
            lg:py-14
          "
        >

          {/* =================================================
              GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
            "
          />


          <div className="relative">

            <h2
              className="
                text-2xl
                font-semibold
                tracking-tight

                sm:text-3xl

                lg:text-4xl
              "
            >
              Have an idea you&apos;d like to discuss?
            </h2>


            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-white/75
              "
            >
              Let&apos;s talk about your goals and find the right
              digital solution for your business.
            </p>


            <a
              href="mailto:codecpstechnologies@gmail.com"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2.5
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-[#086FFD]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-slate-50
              "
            >
              Start a Conversation

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;