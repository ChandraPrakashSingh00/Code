import {
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  MonitorSmartphone,
  Terminal,
} from "lucide-react";

function CodeDashboard() {
  return (
    <div className="code-dashboard relative mx-auto w-full max-w-[680px]">

      {/* =====================================================
          GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-5
          rounded-[28px]
          bg-[#086FFD]/[0.08]
          blur-[35px]

          sm:-inset-7
          sm:rounded-[34px]
          sm:blur-[45px]
        "
      />

      {/* =====================================================
          DASHBOARD
      ===================================================== */}

      <div
        className="
          dashboard-float
          relative
          overflow-hidden
          rounded-2xl
          border
          border-[#086FFD]/15
          bg-white
          shadow-[0_20px_55px_rgba(25,27,31,0.12)]

          sm:rounded-[20px]
          sm:shadow-[0_25px_70px_rgba(25,27,31,0.15)]
        "
      >

        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#191b1f]/10
            bg-white
            px-3
            py-2

            sm:px-4
            sm:py-2.5
          "
        >

          <div className="flex min-w-0 items-center gap-2.5">

            {/* Window Controls */}

            <div className="flex shrink-0 items-center gap-1.5">

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#191b1f]/30

                  sm:h-2.5
                  sm:w-2.5
                "
              />

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#086FFD]/45

                  sm:h-2.5
                  sm:w-2.5
                "
              />

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#086FFD]

                  sm:h-2.5
                  sm:w-2.5
                "
              />

            </div>

            <div className="h-4 w-px bg-[#191b1f]/10" />

            <span
              className="
                truncate
                text-[8px]
                font-semibold
                text-[#191b1f]

                sm:text-xs
              "
            >
              CodeCPS_Technologies
            </span>

          </div>

          {/* Live Status */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-1.5
              rounded-full
              border
              border-[#086FFD]/20
              bg-[#086FFD]/5
              px-2
              py-0.5
              text-[7px]
              font-bold
              text-[#086FFD]

              sm:px-2.5
              sm:py-1
              sm:text-[8px]
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-[#086FFD]
              "
            />

            LIVE

          </div>

        </div>

        {/* =====================================================
            BODY
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-[52px_minmax(0,1fr)]

            sm:grid-cols-[120px_minmax(0,1fr)]

            md:grid-cols-[135px_minmax(0,1fr)]
          "
        >

          {/* =====================================================
              SIDEBAR
          ===================================================== */}

          <aside
            className="
              border-r
              border-[#191b1f]/10
              bg-[#191b1f]/[0.025]
              p-1.5

              sm:p-3
              md:p-3.5
            "
          >

            {/* Brand */}

            <div
              className="
                mb-3
                flex
                items-center
                justify-center
                gap-2

                sm:mb-5
                sm:justify-start
              "
            >

              <div
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#086FFD]
                  text-white

                  sm:h-8
                  sm:w-8
                "
              >

                <Terminal
                  size={13}
                  className="sm:hidden"
                />

                <Terminal
                  size={15}
                  className="hidden sm:block"
                />

              </div>

              <div className="hidden sm:block">

                <div className="text-[11px] font-black text-[#191b1f]">
                  CODECPS
                </div>

                <div className="text-[7px] text-[#191b1f]/45">
                  Technologies
                </div>

              </div>

            </div>

            {/* Menu */}

            <div className="space-y-1.5">

              {/* Development */}

              <div className="dashboard-menu dashboard-menu-active">
                <Code2 size={12} />
                <span>Development</span>
              </div>

              {/* Cloud */}

              <div className="dashboard-menu">
                <Cloud size={12} />
                <span>Cloud</span>
              </div>

              {/* AI */}

              <div className="dashboard-menu">
                <BrainCircuit size={12} />
                <span>AI & ML</span>
              </div>

              {/* Applications */}

              <div className="dashboard-menu">
                <MonitorSmartphone size={12} />
                <span>Applications</span>
              </div>

            </div>

            {/* =====================================================
                SYSTEM STATUS
            ===================================================== */}

            <div
              className="
                mt-5
                hidden
                rounded-xl
                border
                border-[#191b1f]/10
                bg-white
                p-2.5

                sm:block
              "
            >

              <div className="mb-2 flex items-center justify-between">

                <span className="text-[8px] font-semibold text-[#191b1f]/50">
                  System Status
                </span>

                <span className="flex items-center gap-1 text-[7px] font-bold text-[#086FFD]">

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#086FFD]
                    "
                  />

                  Online

                </span>

              </div>

              <div className="space-y-2.5">

                {/* Reliability */}

                <div>

                  <div className="mb-1 flex justify-between text-[7px]">

                    <span className="text-[#191b1f]/40">
                      Reliability
                    </span>

                    <span className="font-bold text-[#086FFD]">
                      99.9%
                    </span>

                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-[#191b1f]/10">

                    <div
                      className="
                        dashboard-progress
                        h-full
                        w-[99.9%]
                        rounded-full
                        bg-[#086FFD]
                      "
                    />

                  </div>

                </div>

                {/* Support */}

                <div>

                  <div className="mb-1 flex justify-between text-[7px]">

                    <span className="text-[#191b1f]/40">
                      Support
                    </span>

                    <span className="font-bold text-[#086FFD]">
                      24/7
                    </span>

                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-[#191b1f]/10">

                    <div
                      className="
                        dashboard-progress
                        h-full
                        w-full
                        rounded-full
                        bg-[#086FFD]
                      "
                    />

                  </div>

                </div>

              </div>

            </div>

          </aside>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}

          <main className="min-w-0 bg-white p-2 sm:p-3.5">

            {/* Header */}

            <div className="mb-2 flex items-center justify-between sm:mb-3">

              <div className="min-w-0">

                <div
                  className="
                    truncate
                    text-[10px]
                    font-extrabold
                    text-[#191b1f]

                    sm:text-sm
                  "
                >
                  Client Success Overview
                </div>

                <div
                  className="
                    mt-0.5
                    hidden
                    text-[8px]
                    text-[#191b1f]/40

                    sm:block
                  "
                >
                  Trusted technology solutions for growing businesses
                </div>

              </div>

              {/* Production */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-[#086FFD]/15
                  bg-[#086FFD]/5
                  px-2
                  py-1
                  text-[6px]
                  font-bold
                  text-[#086FFD]

                  sm:text-[8px]
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

                Production

              </div>

            </div>

            {/* =====================================================
                CLIENT STATS
            ===================================================== */}

            <div
              className="
                mb-2.5
                grid
                grid-cols-3
                gap-1.5

                sm:mb-3
                sm:gap-2
              "
            >

              {/* Clients */}

              <div className="dashboard-stat">

                <div className="text-[6px] text-[#191b1f]/40 sm:text-[8px]">
                  Clients
                </div>

                <div className="mt-0.5 text-sm font-black text-[#191b1f] sm:text-lg">
                  7+
                </div>

                <div className="text-[5px] font-bold text-[#086FFD] sm:text-[8px]">
                  Trusted
                </div>

              </div>

              {/* Support */}

              <div className="dashboard-stat">

                <div className="text-[6px] text-[#191b1f]/40 sm:text-[8px]">
                  Support
                </div>

                <div className="mt-0.5 text-sm font-black text-[#191b1f] sm:text-lg">
                  24/7
                </div>

                <div className="text-[5px] font-bold text-[#086FFD] sm:text-[8px]">
                  Always Available
                </div>

              </div>

              {/* Retention */}

              <div className="dashboard-stat">

                <div className="text-[6px] text-[#191b1f]/40 sm:text-[8px]">
                  Retention
                </div>

                <div className="mt-0.5 text-sm font-black text-[#191b1f] sm:text-lg">
                  98%
                </div>

                <div className="text-[5px] font-bold text-[#086FFD] sm:text-[8px]">
                  Client Trust
                </div>

              </div>

            </div>

            {/* =====================================================
                CODE WINDOW
            ===================================================== */}

            <div className="overflow-hidden rounded-xl border border-[#191b1f]/15">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  bg-[#191b1f]
                  px-2.5
                  py-1.5

                  sm:px-3
                  sm:py-2
                "
              >

                <div className="flex items-center gap-1.5">

                  <Code2
                    size={9}
                    className="text-[#086FFD]"
                  />

                  <span className="text-[6px] text-white/45 sm:text-[8px]">
                    smart-solution.jsx
                  </span>

                </div>

                <span className="text-[5px] font-semibold text-[#086FFD] sm:text-[7px]">
                  Saved
                </span>

              </div>

              <div
                className="
                  bg-[#191b1f]
                  px-2.5
                  py-2
                  font-mono
                  text-[5.5px]
                  leading-[1.65]

                  sm:px-3
                  sm:py-2.5
                  sm:text-[8px]
                "
              >

                <div>
                  <span className="text-white/25">
                    01
                  </span>{" "}

                  <span className="text-[#60a5fa]">
                    const
                  </span>{" "}

                  <span className="text-[#7dd3fc]">
                    solution
                  </span>{" "}

                  <span className="text-white/35">
                    =
                  </span>{" "}

                  <span className="text-[#93c5fd]">
                    await
                  </span>
                </div>

                <div className="pl-3 sm:pl-5">

                  <span className="text-[#60a5fa]">
                    buildDigitalSolution
                  </span>

                  <span className="text-white/40">
                    ({"{"}
                  </span>

                </div>

                <div className="pl-5 sm:pl-10">

                  <span className="text-white/35">
                    technology:
                  </span>{" "}

                  <span className="text-[#93c5fd]">
                    "MERN + AI"
                  </span>

                </div>

                <div className="pl-5 sm:pl-10">

                  <span className="text-white/35">
                    support:
                  </span>{" "}

                  <span className="text-[#93c5fd]">
                    "24/7"
                  </span>

                </div>

                <div className="pl-5 sm:pl-10">

                  <span className="text-white/35">
                    reliability:
                  </span>{" "}

                  <span className="text-[#93c5fd]">
                    "99.9%"
                  </span>

                </div>

                <div className="pl-5 sm:pl-10">

                  <span className="text-white/35">
                    status:
                  </span>{" "}

                  <span className="text-[#93c5fd]">
                    "production"
                  </span>

                </div>

                <div className="pl-3 sm:pl-5">

                  <span className="text-white/40">
                    {"})"}
                  </span>

                </div>

                <div className="mt-1">

                  <span className="text-white/25">
                    07
                  </span>{" "}

                  <span className="text-[#086FFD]">
                    ✓ Client solution deployed successfully
                  </span>

                  <span
                    className="
                      typing-cursor
                      ml-1
                      inline-block
                      h-2
                      w-[2px]
                      bg-[#086FFD]

                      sm:h-3
                    "
                  />

                </div>

              </div>

            </div>

            {/* =====================================================
                BOTTOM ANALYTICS
            ===================================================== */}

            <div
              className="
                mt-2
                grid
                grid-cols-2
                gap-1.5

                sm:mt-2.5
                sm:gap-2
              "
            >

              {/* =================================================
                  CLIENT GROWTH
              ================================================= */}

              <div
                className="
                  rounded-xl
                  border
                  border-[#191b1f]/10
                  bg-white
                  p-1.5

                  sm:p-2.5
                "
              >

                <div className="mb-1 flex items-center justify-between">

                  <span className="text-[6px] font-semibold text-[#191b1f]/50 sm:text-[8px]">
                    Client Growth
                  </span>

                  <span className="text-[5px] font-bold text-[#086FFD] sm:text-[7px]">
                    +32.6%
                  </span>

                </div>

                <div className="relative h-6 sm:h-10">

                  <svg
                    viewBox="0 0 300 70"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                  >

                    <path
                      d="M0 58 L40 50 L80 54 L120 34 L160 40 L200 20 L240 28 L270 12 L300 18"
                      fill="none"
                      stroke="#086FFD"
                      strokeWidth="2.2"
                    />

                    <circle
                      cx="270"
                      cy="12"
                      r="4"
                      fill="#086FFD"
                      className="chart-dot"
                    />

                  </svg>

                </div>

              </div>

              {/* =================================================
                  CLIENT EXPERIENCE
              ================================================= */}

              <div
                className="
                  rounded-xl
                  border
                  border-[#086FFD]/15
                  bg-[#086FFD]/[0.045]
                  p-1.5

                  sm:p-2.5
                "
              >

                <div className="mb-1 text-[6px] font-semibold text-[#191b1f]/50 sm:text-[8px]">
                  Client Experience
                </div>

                <div className="flex items-center gap-1.5">

                  <div
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#086FFD]/10
                      text-[#086FFD]

                      sm:h-6
                      sm:w-6
                    "
                  >

                    <CheckCircle2 size={10} />

                  </div>

                  <div className="min-w-0">

                    <div className="text-[6px] font-bold text-[#191b1f] sm:text-[8px]">
                      Premium Support
                    </div>

                    <div className="hidden text-[7px] text-[#191b1f]/40 sm:block">
                      Reliable & always available
                    </div>

                  </div>

                </div>

                <div className="mt-1 rounded-md bg-white px-1.5 py-1">

                  <div className="text-[5px] text-[#191b1f]/35 sm:text-[6px]">
                    Service
                  </div>

                  <div className="text-[6px] font-bold text-[#086FFD] sm:text-[8px]">
                    24/7 Support
                  </div>

                </div>

              </div>

            </div>

          </main>

        </div>

        {/* =====================================================
            BOTTOM ACCENT
        ===================================================== */}

        <div
          className="
            dashboard-bottom-line
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            bg-[#086FFD]
          "
        />

      </div>

    </div>
  );
}

export default CodeDashboard;