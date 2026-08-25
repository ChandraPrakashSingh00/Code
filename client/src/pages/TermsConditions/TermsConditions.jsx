import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Scale,
  UserCheck,
  AlertCircle,
  Mail,
  CheckCircle2,
} from "lucide-react";
import SEO from "../../components/SEO/SEO";

/* ============================================================
   TERMS & CONDITIONS PAGE
============================================================ */

function TermsConditions() {
  const lastUpdated = "August 19, 2026";

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title="Terms & Conditions"
        description="Read the Terms & Conditions of CodeCPS Technologies for using our website and services."
        path="/terms"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
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
        <div
          className="
            mx-auto
            max-w-[1100px]
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
              Legal Information
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
            Terms &{" "}
            <span className="text-[#086FFD]">
              Conditions.
            </span>
          </h1>

          {/* Description */}

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
            Please read these terms carefully before using our
            website, services, products, or digital solutions.
          </p>

          {/* Updated */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              text-[11px]
              font-medium
              text-white/40
            "
          >
            <FileText size={14} />

            <span>
              Last Updated: {lastUpdated}
            </span>
          </div>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        className="
          px-5
          py-12

          sm:px-8
          sm:py-16

          lg:px-10
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1200px]">

          {/* Intro Card */}

          <div
            className="
              rounded-[24px]
              border
              border-[#191b1f]/8
              bg-[#f8fafc]
              p-6
              shadow-[0_15px_45px_rgba(15,23,42,0.045)]

              sm:p-8

              lg:p-10
            "
          >

            <div className="flex gap-5">

              {/* Icon */}

              <div
                className="
                  hidden
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#086FFD]/10
                  text-[#086FFD]

                  sm:flex
                "
              >
                <Scale size={21} />
              </div>

              {/* Content */}

              <div>

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#086FFD]
                  "
                >
                  Agreement
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-[#191b1f]

                    sm:text-3xl
                  "
                >
                  Welcome to our terms.
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[900px]
                    text-sm
                    leading-7
                    text-[#191b1f]/60
                  "
                >
                  These Terms & Conditions govern your access
                  to and use of our website, services, products,
                  and related digital experiences. By accessing
                  or using our services, you agree to comply with
                  these terms.
                </p>

              </div>
            </div>
          </div>

          {/* =================================================
              TERMS GRID
          ================================================= */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5

              lg:grid-cols-2
            "
          >

            {/* 01 */}

            <TermsCard
              number="01"
              icon={<CheckCircle2 size={19} />}
              title="Acceptance of Terms"
            >
              By accessing or using our website and services, you
              acknowledge that you have read, understood, and
              agreed to these Terms & Conditions.

              <br />
              <br />

              If you do not agree with any part of these terms,
              please discontinue use of our website and services.
            </TermsCard>

            {/* 02 */}

            <TermsCard
              number="02"
              icon={<FileText size={19} />}
              title="Our Services"
            >
              We provide digital services and technology solutions
              based on the scope, requirements, and specifications
              agreed with the client.

              <br />
              <br />

              Service availability, timelines, deliverables, and
              pricing may vary depending on the nature and
              complexity of each project.
            </TermsCard>

            {/* 03 */}

            <TermsCard
              number="03"
              icon={<UserCheck size={19} />}
              title="User Responsibilities"
            >
              You agree to provide accurate and complete
              information when using our services.

              <br />
              <br />

              You must not use our website or services for any
              unlawful, fraudulent, abusive, or unauthorized
              purpose.
            </TermsCard>

            {/* 04 */}

            <TermsCard
              number="04"
              icon={<ShieldCheck size={19} />}
              title="Intellectual Property"
            >
              Unless otherwise agreed in writing, the content,
              branding, design elements, graphics, text, software,
              and other materials available through our website
              remain protected by applicable intellectual property
              laws.

              <br />
              <br />

              You may not reproduce, distribute, modify, or use
              protected materials without appropriate permission.
            </TermsCard>

            {/* 05 */}

            <TermsCard
              number="05"
              icon={<Scale size={19} />}
              title="Payments & Project Terms"
            >
              Project pricing, payment schedules, milestones, and
              deliverables will be communicated and agreed upon
              before or during project engagement.

              <br />
              <br />

              Additional work outside the agreed scope may require
              separate approval and additional charges.
            </TermsCard>

            {/* 06 */}

            <TermsCard
              number="06"
              icon={<AlertCircle size={19} />}
              title="Third-Party Services"
            >
              Our services may integrate with third-party
              platforms, tools, APIs, hosting providers, payment
              services, or other external technologies.

              <br />
              <br />

              We are not responsible for interruptions, changes,
              failures, or policies associated with third-party
              services.
            </TermsCard>

            {/* 07 */}

            <TermsCard
              number="07"
              icon={<ShieldCheck size={19} />}
              title="Service Availability"
            >
              We aim to maintain reliable services and website
              availability, but uninterrupted access cannot always
              be guaranteed.

              <br />
              <br />

              Maintenance, technical issues, updates, hosting
              problems, or circumstances beyond our reasonable
              control may temporarily affect availability.
            </TermsCard>

            {/* 08 */}

            <TermsCard
              number="08"
              icon={<AlertCircle size={19} />}
              title="Limitation of Liability"
            >
              To the extent permitted by applicable law, we shall
              not be responsible for indirect, incidental,
              consequential, or unexpected losses resulting from
              the use of our website or services.

              <br />
              <br />

              Clients remain responsible for evaluating whether a
              service or solution is suitable for their particular
              requirements.
            </TermsCard>

            {/* 09 */}

            <TermsCard
              number="09"
              icon={<ShieldCheck size={19} />}
              title="Confidentiality"
            >
              We respect the confidentiality of information shared
              with us in connection with a project or business
              engagement.

              <br />
              <br />

              Confidential information will be handled
              appropriately and will not be intentionally disclosed
              to unauthorized parties except where required by
              law or agreed otherwise.
            </TermsCard>

            {/* 10 */}

            <TermsCard
              number="10"
              icon={<FileText size={19} />}
              title="Termination"
            >
              Access to certain services may be suspended or
              terminated if there is a violation of these terms,
              misuse of our services, non-payment, or other
              circumstances that reasonably require termination.

              <br />
              <br />

              Any outstanding obligations that arose before
              termination may continue to apply.
            </TermsCard>

            {/* 11 */}

            <TermsCard
              number="11"
              icon={<FileText size={19} />}
              title="Changes to These Terms"
            >
              We may update these Terms & Conditions from time to
              time to reflect changes in our services, operations,
              technology, or applicable requirements.

              <br />
              <br />

              Updated terms will be published on this page with a
              revised effective or updated date.
            </TermsCard>

            {/* 12 */}

            <TermsCard
              number="12"
              icon={<Scale size={19} />}
              title="Governing Terms"
            >
              These terms are intended to be interpreted in
              accordance with applicable laws and regulations.

              <br />
              <br />

              Any project-specific agreement, proposal, statement
              of work, or written contract may contain additional
              terms that apply to that particular engagement.
            </TermsCard>

          </div>
        </div>
      </section>

      {/* =====================================================
          IMPORTANT NOTICE
      ===================================================== */}

      <section
        className="
          px-5
          pb-12

          sm:px-8
          sm:pb-16

          lg:px-10
          lg:pb-20
        "
      >

        <div
          className="
            mx-auto
            max-w-[1200px]
            rounded-[22px]
            border
            border-[#086FFD]/15
            bg-[#086FFD]/[0.035]
            p-6

            sm:p-7
          "
        >

          <div className="flex items-start gap-4">

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
              <AlertCircle size={19} />
            </div>

            <div>

              <h3
                className="
                  text-base
                  font-semibold
                  text-[#191b1f]
                "
              >
                Important Notice
              </h3>

              <p
                className="
                  mt-1.5
                  text-sm
                  leading-6
                  text-[#191b1f]/55
                "
              >
                These Terms & Conditions are provided for general
                informational purposes. Specific projects or
                engagements may be governed by additional written
                agreements, proposals, statements of work, or
                contracts.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section
        className="
          px-5
          pb-14

          sm:px-8
          sm:pb-18

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

          {/* Subtle Decorative Shapes */}

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

            {/* Icon */}

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-white/15
              "
            >
              <Mail size={21} />
            </div>

            {/* Heading */}

            <h2
              className="
                mt-5
                text-2xl
                font-semibold
                tracking-tight

                sm:text-3xl

                lg:text-4xl
              "
            >
              Have questions about these terms?
            </h2>

            {/* Description */}

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
              If you need clarification regarding our Terms &
              Conditions, feel free to contact our team.
            </p>

            {/* Button */}

            <a
              href="/contact"
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
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
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

    </main>
  );
}

/* ============================================================
   TERMS CARD
============================================================ */

function TermsCard({
  number,
  icon,
  title,
  children,
}) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-[#191b1f]/8
        bg-white
        p-6
        shadow-[0_10px_35px_rgba(15,23,42,0.04)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#086FFD]/20
        hover:shadow-[0_18px_45px_rgba(8,111,253,0.08)]

        sm:p-7
      "
    >

      {/* Top Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-0
          bg-[#086FFD]
          transition-all
          duration-300

          group-hover:w-full
        "
      />

      {/* Header */}

      <div className="flex items-start justify-between gap-5">

        {/* Icon */}

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
          {icon}
        </div>

        {/* Number */}

        <span
          className="
            text-[11px]
            font-bold
            tracking-[0.12em]
            text-[#191b1f]/20
          "
        >
          {number}
        </span>

      </div>

      {/* Title */}

      <h3
        className="
          mt-5
          text-xl
          font-semibold
          tracking-tight
          text-[#191b1f]

          sm:text-[21px]
        "
      >
        {title}
      </h3>

      {/* Description */}

      <div
        className="
          mt-3
          text-sm
          leading-7
          text-[#191b1f]/58
        "
      >
        {children}
      </div>

    </article>
  );
}

export default TermsConditions;