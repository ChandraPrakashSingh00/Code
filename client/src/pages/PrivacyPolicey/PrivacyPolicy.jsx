import React from "react";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  UserCheck,
  Cookie,
  Mail,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import SEO from "../../components/SEO/SEO";

/* ============================================================
   PRIVACY POLICY PAGE
============================================================ */

function PrivacyPolicy() {
  const lastUpdated = "August 19, 2026";

  const sections = [
    {
      id: "information",
      title: "Information We Collect",
      icon: Database,
    },
    {
      id: "usage",
      title: "How We Use Information",
      icon: UserCheck,
    },
    {
      id: "protection",
      title: "Data Protection",
      icon: ShieldCheck,
    },
    {
      id: "sharing",
      title: "Information Sharing",
      icon: LockKeyhole,
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: Cookie,
    },
    {
      id: "rights",
      title: "Your Privacy Rights",
      icon: UserCheck,
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: Mail,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy of CodeCPS Technologies to understand how we collect, use and protect your personal information."
        path="/privacy"
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
          pb-12
          pt-12

          sm:px-8
          sm:pb-14
          sm:pt-14

          lg:px-10
          lg:pb-16
          lg:pt-16
        "
      >
        {/* Hero Content */}

        <div
          className="
            relative
            mx-auto
            max-w-[1200px]
            text-center
          "
        >
          {/* Badge */}

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
            <ShieldCheck
              size={14}
              className="text-[#086FFD]"
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Privacy & Security
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mx-auto
              mt-5
              max-w-[850px]
              text-[38px]
              font-bold
              leading-[1.06]
              tracking-[-1.8px]
              text-white

              sm:text-[48px]
              sm:tracking-[-2px]

              md:text-[56px]

              lg:text-[64px]
              lg:tracking-[-2.5px]
            "
          >
            Privacy
            <span className="text-[#086FFD]">
              {" "}Policy
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[700px]
              text-sm
              leading-6
              text-white/60

              sm:text-base
              sm:leading-7
            "
          >
            Your privacy matters to us. This Privacy Policy explains
            how we collect, use, protect, and handle your information
            when you interact with our website and services.
          </p>

          {/* Updated */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              text-xs
              text-white/45
            "
          >
            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-1.5
              "
            >
              Last Updated: {lastUpdated}
            </span>

            <span className="text-white/20">
              •
            </span>

            <span>
              Please read this policy carefully.
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
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

            lg:grid-cols-[280px_1fr]
            lg:gap-14
          "
        >

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside
            className="
              hidden
              lg:block
            "
          >
            <div
              className="
                sticky
                top-24
                rounded-2xl
                border
                border-[#191b1f]/8
                bg-[#f8fafc]
                p-4
              "
            >
              <p
                className="
                  px-3
                  pb-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#191b1f]/40
                "
              >
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-2.5
                        text-xs
                        font-medium
                        text-[#191b1f]/60
                        transition-all
                        duration-200

                        hover:bg-white
                        hover:text-[#086FFD]
                        hover:shadow-[0_4px_15px_rgba(15,23,42,0.04)]
                      "
                    >
                      <Icon
                        size={15}
                        className="
                          shrink-0
                          text-[#191b1f]/35
                          transition-colors
                          duration-200
                          group-hover:text-[#086FFD]
                        "
                      />

                      <span>
                        {section.title}
                      </span>

                      <ChevronRight
                        size={13}
                        className="
                          ml-auto
                          opacity-0
                          transition-all
                          duration-200
                          group-hover:translate-x-0.5
                          group-hover:opacity-100
                        "
                      />
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* =================================================
              POLICY CONTENT
          ================================================= */}

          <article
            className="
              min-w-0
              max-w-[820px]
            "
          >

            {/* INTRODUCTION */}

            <div
              className="
                rounded-2xl
                border
                border-[#086FFD]/10
                bg-[#086FFD]/[0.035]
                p-5

                sm:p-6
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#086FFD]/10
                    text-[#086FFD]
                  "
                >
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <h2
                    className="
                      text-base
                      font-semibold
                      text-[#191b1f]
                    "
                  >
                    Your privacy is important to us.
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-[#191b1f]/60
                    "
                  >
                    We are committed to handling your personal
                    information responsibly and transparently.
                    This policy describes the types of information
                    we may collect and how that information is used.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                1. INFORMATION WE COLLECT
            ================================================= */}

            <section
              id="information"
              className="scroll-mt-28 pt-10"
            >
              <SectionHeading
                number="01"
                title="Information We Collect"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                When you use our website, contact us, request a
                service, or communicate with our team, we may
                collect information that you voluntarily provide.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="Contact Information"
                  description="Name, email address, phone number, company information, and other details you provide through our contact forms."
                />

                <InfoCard
                  title="Project Information"
                  description="Details about your project, business requirements, service preferences, and communications with our team."
                />

                <InfoCard
                  title="Technical Information"
                  description="Browser type, device information, IP address, operating system, and general website usage information."
                />

                <InfoCard
                  title="Communication Data"
                  description="Information contained in messages, enquiries, feedback, or other communications you send to us."
                />
              </div>
            </section>

            {/* =================================================
                2. HOW WE USE INFORMATION
            ================================================= */}

            <section
              id="usage"
              className="scroll-mt-28 pt-12"
            >
              <SectionHeading
                number="02"
                title="How We Use Your Information"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                We use the information we collect only for legitimate
                business purposes and to provide a better experience.
              </p>

              <ul className="mt-5 space-y-3">
                <PolicyBullet>
                  Respond to your enquiries and requests.
                </PolicyBullet>

                <PolicyBullet>
                  Provide, manage, and improve our services.
                </PolicyBullet>

                <PolicyBullet>
                  Understand your project requirements.
                </PolicyBullet>

                <PolicyBullet>
                  Communicate with you regarding projects,
                  services, or important updates.
                </PolicyBullet>

                <PolicyBullet>
                  Improve website functionality, performance,
                  security, and user experience.
                </PolicyBullet>

                <PolicyBullet>
                  Detect, prevent, and address technical or
                  security issues.
                </PolicyBullet>
              </ul>
            </section>

            {/* =================================================
                3. DATA PROTECTION
            ================================================= */}

            <section
              id="protection"
              className="scroll-mt-28 pt-12"
            >
              <SectionHeading
                number="03"
                title="Data Protection & Security"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                We take reasonable technical and organizational
                measures to protect information from unauthorized
                access, misuse, alteration, disclosure, or loss.
              </p>

              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-5
                  shadow-[0_10px_35px_rgba(15,23,42,0.04)]

                  sm:p-6
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#086FFD]/10
                      text-[#086FFD]
                    "
                  >
                    <LockKeyhole size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Security measures
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#191b1f]/55">
                      While we make reasonable efforts to protect
                      your information, no method of transmission
                      or electronic storage can be guaranteed to
                      be completely secure.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                4. INFORMATION SHARING
            ================================================= */}

            <section
              id="sharing"
              className="scroll-mt-28 pt-12"
            >
              <SectionHeading
                number="04"
                title="Information Sharing"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                We do not sell or rent your personal information.
                Information may only be shared when reasonably
                necessary to operate our services or comply with
                applicable legal obligations.
              </p>

              <div className="mt-5 space-y-3">
                <PolicyBullet>
                  With trusted service providers who help us
                  operate our website or business.
                </PolicyBullet>

                <PolicyBullet>
                  When required by law, regulation, legal process,
                  or governmental request.
                </PolicyBullet>

                <PolicyBullet>
                  To protect our rights, property, users, or
                  business operations.
                </PolicyBullet>

                <PolicyBullet>
                  With your consent when disclosure is otherwise
                  not covered by this policy.
                </PolicyBullet>
              </div>
            </section>

            {/* =================================================
                5. COOKIES
            ================================================= */}

            <section
              id="cookies"
              className="scroll-mt-28 pt-12"
            >
              <SectionHeading
                number="05"
                title="Cookies & Tracking Technologies"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                Our website may use cookies and similar technologies
                to improve functionality, understand website usage,
                and provide a smoother browsing experience.
              </p>

              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-[#f8fafc]
                  p-5

                  sm:p-6
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-[#086FFD]
                      shadow-sm
                    "
                  >
                    <Cookie size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Managing cookies
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#191b1f]/55">
                      Most browsers allow you to control or disable
                      cookies through browser settings. Disabling
                      certain cookies may affect some website
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                6. DATA RETENTION
            ================================================= */}

            <section
              className="scroll-mt-28 pt-12"
            >
              <SectionHeading
                number="06"
                title="Data Retention"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                We retain personal information only for as long as
                reasonably necessary to fulfill the purposes
                described in this policy, maintain business records,
                resolve disputes, enforce agreements, or comply with
                applicable legal requirements.
              </p>
            </section>

            {/* =================================================
                7. YOUR RIGHTS
            ================================================= */}

            <section
              id="rights"
              className="scroll-mt-28 pt-12"
            >
              <SectionHeading
                number="07"
                title="Your Privacy Rights"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                Depending on applicable law, you may have rights
                regarding the personal information we hold about
                you.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <RightCard title="Access">
                  Request access to personal information we hold
                  about you.
                </RightCard>

                <RightCard title="Correction">
                  Ask us to correct inaccurate or incomplete
                  information.
                </RightCard>

                <RightCard title="Deletion">
                  Request deletion of information where legally
                  applicable.
                </RightCard>

                <RightCard title="Objection">
                  Object to certain processing of your information
                  where permitted.
                </RightCard>
              </div>
            </section>

            {/* =================================================
                8. THIRD PARTY LINKS
            ================================================= */}

            <section className="scroll-mt-28 pt-12">
              <SectionHeading
                number="08"
                title="Third-Party Links"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                Our website may contain links to third-party
                websites or services. We are not responsible for
                the privacy practices, content, or security of
                external websites. We recommend reviewing their
                respective privacy policies before providing
                personal information.
              </p>
            </section>

            {/* =================================================
                9. CHILDREN'S PRIVACY
            ================================================= */}

            <section className="scroll-mt-28 pt-12">
              <SectionHeading
                number="09"
                title="Children's Privacy"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                Our services are not intentionally directed toward
                children. We do not knowingly collect personal
                information from children through our website.
              </p>
            </section>

            {/* =================================================
                10. POLICY UPDATES
            ================================================= */}

            <section className="scroll-mt-28 pt-12">
              <SectionHeading
                number="10"
                title="Changes to This Policy"
              />

              <p className="mt-4 text-sm leading-7 text-[#191b1f]/65">
                We may update this Privacy Policy from time to time
                to reflect changes in our practices, services,
                technologies, or legal requirements. Any updated
                version will be published on this page with a revised
                effective or updated date.
              </p>
            </section>

            {/* =================================================
                CONTACT
            ================================================= */}

            <section
              id="contact"
              className="scroll-mt-28 pt-12"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  bg-[#086FFD]
                  px-6
                  py-8
                  text-white

                  sm:px-8
                  sm:py-10
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-white/10
                    blur-3xl
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-16
                    h-40
                    w-40
                    rounded-full
                    bg-white/10
                    blur-3xl
                  "
                />

                <div className="relative">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                    "
                  >
                    <Mail size={18} />
                  </div>

                  <h2
                    className="
                      mt-5
                      text-2xl
                      font-semibold
                      tracking-tight

                      sm:text-3xl
                    "
                  >
                    Have a privacy question?
                  </h2>

                  <p
                    className="
                      mt-3
                      max-w-[600px]
                      text-sm
                      leading-6
                      text-white/75
                    "
                  >
                    If you have any questions about this Privacy
                    Policy or how your information is handled,
                    please contact our team.
                  </p>

                  <a
                    href="mailto:codecpstechnologies@gmail.com"
                    className="
                      group
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-[#086FFD]
                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-slate-50
                    "
                  >
                    Contact Us

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

            {/* =================================================
                DISCLAIMER
            ================================================= */}

            <div
              className="
                mt-10
                border-t
                border-[#191b1f]/8
                pt-6
              "
            >
              <p
                className="
                  text-[11px]
                  leading-5
                  text-[#191b1f]/40
                "
              >
                This Privacy Policy is provided for general
                informational purposes and should be reviewed and
                adapted to your organization's actual data practices
                and applicable legal requirements.
              </p>
            </div>

          </article>
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
            mx-auto
            flex
            max-w-[1200px]
            flex-col
            items-start
            justify-between
            gap-6
            rounded-[24px]
            border
            border-[#191b1f]/8
            bg-[#f8fafc]
            px-6
            py-8

            sm:px-8
            sm:py-10

            md:flex-row
            md:items-center
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#086FFD]
              "
            >
              Need help?
            </p>

            <h2
              className="
                mt-2
                text-xl
                font-semibold
                tracking-tight
                text-[#191b1f]

                sm:text-2xl
              "
            >
              We're here to answer your questions.
            </h2>
          </div>

          <a
            href="mailto:codecpstechnologies@gmail.com"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-[#086FFD]
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_25px_rgba(8,111,253,0.16)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#075ed6]
            "
          >
            Get In Touch

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
      </section>

    </main>
  );
}

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="
          mt-1
          flex
          h-7
          min-w-7
          items-center
          justify-center
          rounded-lg
          bg-[#086FFD]/10
          px-2
          text-[10px]
          font-bold
          text-[#086FFD]
        "
      >
        {number}
      </span>

      <h2
        className="
          text-xl
          font-semibold
          tracking-tight
          text-[#191b1f]

          sm:text-2xl
        "
      >
        {title}
      </h2>
    </div>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({ title, description }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#191b1f]/8
        bg-white
        p-5
        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-[#086FFD]/15
        hover:shadow-[0_12px_35px_rgba(15,23,42,0.05)]
      "
    >
      <h3 className="text-sm font-semibold text-[#191b1f]">
        {title}
      </h3>

      <p
        className="
          mt-2
          text-xs
          leading-6
          text-[#191b1f]/55
        "
      >
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   POLICY BULLET
============================================================ */

function PolicyBullet({ children }) {
  return (
    <li
      className="
        flex
        items-start
        gap-3
        text-sm
        leading-6
        text-[#191b1f]/65
      "
    >
      <span
        className="
          mt-[9px]
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-[#086FFD]
        "
      />

      <span>
        {children}
      </span>
    </li>
  );
}

/* ============================================================
   RIGHT CARD
============================================================ */

function RightCard({ title, children }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#191b1f]/8
        bg-[#f8fafc]
        p-4
      "
    >
      <h3 className="text-sm font-semibold text-[#191b1f]">
        {title}
      </h3>

      <p
        className="
          mt-1.5
          text-xs
          leading-5
          text-[#191b1f]/55
        "
      >
        {children}
      </p>
    </div>
  );
}

export default PrivacyPolicy;