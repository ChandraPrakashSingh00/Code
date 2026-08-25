import {
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

function UdyamRegistration() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-18">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[320px] w-[320px] rounded-full bg-[#086FFD]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-[-80px] h-[320px] w-[320px] rounded-full bg-[#086FFD]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px]">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-3 inline-flex items-center gap-2">

            <ShieldCheck
              size={16}
              strokeWidth={2}
              className="text-[#086FFD]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#086FFD]">
              Business Trust & Verification
            </span>

          </div>

          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#191b1f] sm:text-4xl lg:text-[44px]">

            Registered With

            <span className="block text-[#086FFD]">
              MSME / Udyam Framework
            </span>

          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#191b1f]/50">
            CodeCPS Technologies has successfully submitted its Udyam
            Registration. Registration details are presented for
            business transparency and professional trust.
          </p>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div className="relative mx-auto mt-10 max-w-5xl">

          {/* =================================================
              MSME LOGO
          ================================================= */}
          <div className="flex flex-col items-center text-center">

            <div className="relative flex h-[155px] w-full items-center justify-center sm:h-[175px]">

              {/* Outer Circle */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#086FFD]/10" />

              {/* Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#086FFD]/5 blur-2xl" />

              <img
                src="/msmee.png"
                alt="Ministry of MSME Government of India"
                className="
                  relative
                  z-10
                  w-[190px]
                  object-contain
                  sm:w-[230px]
                  lg:w-[250px]
                "
              />

            </div>


            {/* Divider */}
            <div className="mt-1 h-[2px] w-12 rounded-full bg-[#086FFD]" />


            {/* Company */}
            <div className="mt-3">

              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#086FFD]">
                MSME • UDYAM
              </p>

              <h3 className="mt-1 text-xl font-bold tracking-tight text-[#191b1f] sm:text-2xl">
                CodeCPS Technologies
              </h3>

              <p className="text-xs text-[#191b1f]/40">
                Registered Business
              </p>

            </div>

          </div>


          {/* =================================================
              MAIN REGISTRATION CONTENT
          ================================================= */}
          <div className="mt-8 overflow-hidden border-y border-[#191b1f]/10">

            {/* Blue top accent */}
            <div className="h-1 w-full bg-[#086FFD]" />

            <div className="px-5 py-6 sm:px-8 lg:px-10">

              {/* STATUS ROW */}
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">

                    <CheckCircle2
                      size={18}
                      className="text-emerald-600"
                    />

                  </div>

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                      Registration Status
                    </p>

                    <p className="text-sm font-semibold text-[#191b1f]">
                      Successfully Submitted
                    </p>

                  </div>

                </div>


                {/* Trust Badge */}
                <div className="flex items-center gap-2 rounded-full border border-[#086FFD]/10 bg-[#086FFD]/5 px-3 py-1.5">

                  <BadgeCheck
                    size={15}
                    className="text-[#086FFD]"
                  />

                  <span className="text-[11px] font-semibold text-[#191b1f]/55">
                    MSME / Udyam Registration
                  </span>

                </div>

              </div>


              {/* =================================================
                  TITLE
              ================================================= */}
              <div className="mt-7 text-center">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#086FFD]">
                  Udyam Registration
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#191b1f] sm:text-3xl">

                  Official Business{" "}

                  <span className="text-[#086FFD]">
                    Registration
                  </span>

                </h3>

                <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-[#191b1f]/45">

                  The identification number generated for CodeCPS Technologies
                  is displayed below for business transparency.

                </p>

              </div>


              {/* =================================================
                  UDYAM NUMBER
              ================================================= */}
              <div className="mx-auto mt-6 max-w-2xl">

                <div className="relative rounded-lg border border-[#086FFD]/10 bg-[#086FFD]/[0.025] px-4 py-5 sm:px-6">

                  {/* Accent */}
                  <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-lg bg-[#086FFD]" />

                  <div className="text-center">

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#191b1f]/35">
                      Udyam Registration Number
                    </p>

                    <div className="mt-2 flex flex-wrap items-center justify-center gap-2">

                      <span className="break-all font-mono text-lg font-bold tracking-wide text-[#086FFD] sm:text-2xl">

                        UDYAM-UP-28-0236761

                      </span>

                      <CheckCircle2
                        size={19}
                        strokeWidth={2.4}
                        className="shrink-0 text-emerald-500"
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  BUSINESS INFORMATION
              ================================================= */}
              <div className="mx-auto mt-5 max-w-2xl">

                <div className="divide-y divide-[#191b1f]/8">

                  {/* Business Name */}
                  <div className="flex items-center justify-between gap-4 py-3">

                    <span className="text-xs text-[#191b1f]/40">
                      Business Name
                    </span>

                    <span className="text-xs font-semibold text-[#191b1f]">
                      CodeCPS Technologies
                    </span>

                  </div>


                  {/* Registration Type */}
                  <div className="flex items-center justify-between gap-4 py-3">

                    <span className="text-xs text-[#191b1f]/40">
                      Registration Type
                    </span>

                    <span className="text-xs font-semibold text-[#191b1f]">
                      Udyam / MSME
                    </span>

                  </div>


                  {/* Current Status */}
                  <div className="flex items-center justify-between gap-4 py-3">

                    <span className="text-xs text-[#191b1f]/40">
                      Current Status
                    </span>

                    <span className="flex items-center gap-2 text-xs font-semibold text-emerald-600">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                      Successfully Submitted

                    </span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  TRANSPARENCY
              ================================================= */}
              <div className="mx-auto mt-5 flex max-w-2xl items-start gap-2.5 rounded-md bg-[#086FFD]/[0.035] px-3 py-3">

                <ShieldCheck
                  size={16}
                  className="mt-0.5 shrink-0 text-[#086FFD]"
                />

                <p className="text-[11px] leading-5 text-[#191b1f]/40">

                  Registration information is displayed for business
                  transparency. For official verification and certificate
                  validation, please refer to the Government of India
                  Udyam Registration portal.

                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM TRUST BAR
        ===================================================== */}
        <div className="mt-8">

          <div className="h-px w-full bg-[#191b1f]/8" />

          <div className="flex flex-col items-center justify-center gap-3 py-4 sm:flex-row sm:gap-10">

            <div className="flex items-center gap-2">

              <CheckCircle2
                size={14}
                className="text-[#086FFD]"
              />

              <span className="text-[11px] font-medium text-[#191b1f]/45">
                Transparent Business Registration
              </span>

            </div>


            <div className="hidden h-3 w-px bg-[#191b1f]/10 sm:block" />


            <div className="flex items-center gap-2">

              <ShieldCheck
                size={14}
                className="text-[#086FFD]"
              />

              <span className="text-[11px] font-medium text-[#191b1f]/45">
                MSME / Udyam Registered Business
              </span>

            </div>


            <div className="hidden h-3 w-px bg-[#191b1f]/10 sm:block" />


            <div className="flex items-center gap-2">

              <BadgeCheck
                size={14}
                className="text-[#086FFD]"
              />

              <span className="text-[11px] font-medium text-[#191b1f]/45">
                CodeCPS Technologies
              </span>

            </div>

          </div>

          <div className="h-px w-full bg-[#191b1f]/8" />

        </div>

      </div>

    </section>
  );
}

export default UdyamRegistration;