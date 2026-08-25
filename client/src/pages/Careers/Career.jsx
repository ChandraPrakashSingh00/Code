import React, { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  Users,
  Code2,
  HeartHandshake,
  Rocket,
  Send,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import SEO from "../../components/SEO/SEO";

/* ============================================================
   CAREERS PAGE
============================================================ */

function Careers() {
  const [openJob, setOpenJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  /* ============================================================
     JOBS
  ============================================================ */

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "India · Remote",
      type: "Full-time",
      experience: "1–3 Years",
      description:
        "We're looking for a passionate Frontend Developer who can build fast, responsive and beautiful web experiences using modern frontend technologies.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "Git",
      ],
    },

    {
      id: 2,
      title: "Backend Developer",
      department: "Engineering",
      location: "India · Remote",
      type: "Full-time",
      experience: "1–3 Years",
      description:
        "Join our engineering team to design scalable APIs, backend systems and reliable services that power modern digital products.",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Git",
      ],
    },

    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "India · Remote",
      type: "Full-time",
      experience: "1–3 Years",
      description:
        "We're looking for a creative UI/UX Designer who enjoys solving real user problems and turning ideas into simple, intuitive digital experiences.",
      skills: [
        "Figma",
        "UI Design",
        "UX Research",
        "Prototyping",
        "Design Systems",
      ],
    },

    {
      id: 4,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "India · Remote",
      type: "Full-time",
      experience: "2–4 Years",
      description:
        "Work across frontend and backend to create production-ready applications while collaborating closely with designers and product teams.",
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "JavaScript",
      ],
    },
  ];

  /* ============================================================
     BENEFITS
  ============================================================ */

  const benefits = [
    {
      icon: Rocket,
      title: "Meaningful Work",
      description:
        "Work on real products and challenging projects that create measurable value for businesses.",
    },

    {
      icon: Users,
      title: "Great Team",
      description:
        "Collaborate with talented, supportive people who believe in sharing knowledge and growing together.",
    },

    {
      icon: Code2,
      title: "Modern Technology",
      description:
        "Learn and work with modern tools, frameworks and technologies used to build scalable digital products.",
    },

    {
      icon: HeartHandshake,
      title: "Growth & Learning",
      description:
        "We encourage continuous learning, ownership and opportunities to develop both technical and professional skills.",
    },
  ];

  /* ============================================================
     HIRING STEPS
  ============================================================ */

  const hiringSteps = [
    {
      number: "01",
      title: "Apply",
      description:
        "Send us your application with your resume, portfolio and a little information about yourself.",
    },

    {
      number: "02",
      title: "Initial Conversation",
      description:
        "We'll have a quick conversation to understand your experience, goals and expectations.",
    },

    {
      number: "03",
      title: "Technical / Design Round",
      description:
        "Depending on the role, you'll complete a practical discussion or task related to your expertise.",
    },

    {
      number: "04",
      title: "Final Discussion",
      description:
        "Meet the team, discuss the role in detail and explore how we can work together.",
    },
  ];

  /* ============================================================
     APPLY HANDLER
  ============================================================ */

  const handleApply = () => {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title="Careers - Join Our Team"
        description="Explore career opportunities at CodeCPS Technologies. Join our team of developers, designers and engineers building smart software, web and AI solutions."
        keywords="CodeCPS careers, software developer jobs, tech jobs, IT company careers"
        path="/career"
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
              Careers
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
            Build your future

            <span className="block text-[#086FFD]">
              with us.
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
            Join a team of passionate people building meaningful
            digital experiences, solving real problems and creating
            technology that makes a difference.
          </p>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
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

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-16
          "
        >

          {/* =================================================
              LEFT CONTENT
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
              Life at CodeCPS
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
              Do your best work

              <span className="text-[#086FFD]">
                {" "}with a great team.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[520px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              We believe great products are built by curious,
              collaborative and passionate people. At CodeCPS,
              you'll have the opportunity to work on exciting
              projects, learn continuously and make a real impact.
            </p>

            <p
              className="
                mt-4
                max-w-[520px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              Whether you're an experienced professional or just
              starting your career, we want you to bring your ideas,
              creativity and unique perspective to the team.
            </p>

          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-4

              sm:gap-5
            "
          >

            {/* STAT 1 */}

            <div
              className="
                rounded-2xl
                border
                border-[#191b1f]/8
                bg-white
                p-5
                shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#086FFD]/20
                hover:shadow-[0_15px_40px_rgba(8,111,253,0.10)]
              "
            >
              <BriefcaseBusiness
                size={22}
                className="text-[#086FFD]"
              />

              <p
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-[#191b1f]
                "
              >
                4+
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#191b1f]/50
                "
              >
                Open Positions
              </p>
            </div>

            {/* STAT 2 */}

            <div
              className="
                rounded-2xl
                border
                border-[#191b1f]/8
                bg-white
                p-5
                shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#086FFD]/20
                hover:shadow-[0_15px_40px_rgba(8,111,253,0.10)]
              "
            >
              <Users
                size={22}
                className="text-[#086FFD]"
              />

              <p
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-[#191b1f]
                "
              >
                100%
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#191b1f]/50
                "
              >
                Team Focused
              </p>
            </div>

            {/* STAT 3 */}

            <div
              className="
                rounded-2xl
                border
                border-[#191b1f]/8
                bg-white
                p-5
                shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#086FFD]/20
                hover:shadow-[0_15px_40px_rgba(8,111,253,0.10)]
              "
            >
              <Rocket
                size={22}
                className="text-[#086FFD]"
              />

              <p
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-[#191b1f]
                "
              >
                Growing
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#191b1f]/50
                "
              >
                Fast Moving Team
              </p>
            </div>

            {/* STAT 4 */}

            <div
              className="
                rounded-2xl
                border
                border-[#191b1f]/8
                bg-white
                p-5
                shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#086FFD]/20
                hover:shadow-[0_15px_40px_rgba(8,111,253,0.10)]
              "
            >
              <Code2
                size={22}
                className="text-[#086FFD]"
              />

              <p
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-[#191b1f]
                "
              >
                Modern
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#191b1f]/50
                "
              >
                Tech Stack
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section
        className="
          bg-[#f8fafc]
          px-5
          py-14

          sm:px-8
          sm:py-20

          lg:px-10
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1200px]">

          {/* SECTION HEADING */}

          <div className="max-w-[650px]">

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Why Join Us
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#191b1f]

                sm:text-4xl
              "
            >
              More than just

              <span className="text-[#086FFD]">
                {" "}a job.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[600px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              We want you to grow with us, enjoy the work you do
              and have the freedom to bring your best ideas to life.
            </p>

          </div>

          {/* BENEFIT CARDS */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-[#191b1f]/8
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#086FFD]/20
                    hover:shadow-[0_18px_45px_rgba(8,111,253,0.10)]
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
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
                    <Icon size={20} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-base
                      font-semibold
                      text-[#191b1f]
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-[#191b1f]/55
                    "
                  >
                    {benefit.description}
                  </p>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

      <section
        id="open-positions"
        className="
          px-5
          py-14

          sm:px-8
          sm:py-20

          lg:px-10
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1200px]">

          {/* SECTION HEADING */}

          <div
            className="
              flex
              flex-col
              justify-between
              gap-5

              lg:flex-row
              lg:items-end
            "
          >

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
                Open Positions
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-[#191b1f]

                  sm:text-4xl
                "
              >
                Find your next

                <span className="text-[#086FFD]">
                  {" "}opportunity.
                </span>
              </h2>

            </div>

            <p
              className="
                max-w-[480px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              Explore our current openings and find a role where
              your skills, ideas and ambitions can make an impact.
            </p>

          </div>

          {/* JOB LIST */}

          <div className="mt-10 space-y-4">

            {jobs.map((job) => {
              const isOpen = openJob === job.id;

              return (
                <div
                  key={job.id}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#191b1f]/8
                    bg-white
                    shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                    transition-all
                    duration-300

                    hover:border-[#086FFD]/20
                    hover:shadow-[0_15px_40px_rgba(8,111,253,0.08)]
                  "
                >

                  {/* =================================================
                      JOB HEADER
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() =>
                      setOpenJob(isOpen ? null : job.id)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      p-5
                      text-left
                      outline-none

                      sm:p-6
                    "
                  >

                    <div className="min-w-0">

                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-2
                        "
                      >

                        <span
                          className="
                            rounded-full
                            bg-[#086FFD]/10
                            px-2.5
                            py-1
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.08em]
                            text-[#086FFD]
                          "
                        >
                          {job.department}
                        </span>

                        <span
                          className="
                            rounded-full
                            bg-[#191b1f]/5
                            px-2.5
                            py-1
                            text-[10px]
                            font-semibold
                            text-[#191b1f]/55
                          "
                        >
                          {job.experience}
                        </span>

                      </div>

                      <h3
                        className="
                          mt-3
                          text-lg
                          font-semibold
                          text-[#191b1f]

                          sm:text-xl
                        "
                      >
                        {job.title}
                      </h3>

                      <div
                        className="
                          mt-2
                          flex
                          flex-wrap
                          gap-x-5
                          gap-y-2
                          text-xs
                          text-[#191b1f]/50
                        "
                      >

                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock3 size={14} />
                          {job.type}
                        </span>

                      </div>

                    </div>

                    {/* ARROW */}

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#f8fafc]
                        text-[#191b1f]/60
                        transition-transform
                        duration-300
                      "
                      style={{
                        transform: isOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>

                  </button>

                  {/* =================================================
                      JOB DETAILS
                  ================================================= */}

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >

                    <div
                      className="
                        border-t
                        border-[#191b1f]/8
                        px-5
                        pb-6
                        pt-5

                        sm:px-6
                      "
                    >

                      <p
                        className="
                          max-w-[850px]
                          text-sm
                          leading-6
                          text-[#191b1f]/60
                        "
                      >
                        {job.description}
                      </p>

                      {/* SKILLS */}

                      <div className="mt-5">

                        <p
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#191b1f]/45
                          "
                        >
                          Key Skills
                        </p>

                        <div
                          className="
                            mt-3
                            flex
                            flex-wrap
                            gap-2
                          "
                        >

                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="
                                rounded-lg
                                border
                                border-[#191b1f]/8
                                bg-[#f8fafc]
                                px-3
                                py-1.5
                                text-xs
                                font-medium
                                text-[#191b1f]/65
                              "
                            >
                              {skill}
                            </span>
                          ))}

                        </div>

                      </div>

                      {/* APPLY BUTTON */}

                      <button
                        type="button"
                        onClick={handleApply}
                        className="
                          group
                          mt-6
                          inline-flex
                          h-11
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-[#086FFD]
                          px-5
                          text-sm
                          font-bold
                          text-white
                          shadow-[0_10px_25px_rgba(8,111,253,0.16)]
                          transition-all
                          duration-300

                          hover:-translate-y-0.5
                          hover:bg-[#075ed6]
                          hover:shadow-[0_14px_30px_rgba(8,111,253,0.22)]
                        "
                      >

                        {submitted ? (
                          <>
                            <CheckCircle2 size={16} />
                            Application Started
                          </>
                        ) : (
                          <>
                            Apply for this position

                            <ArrowRight
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

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          HIRING PROCESS
      ===================================================== */}

      <section
        className="
          bg-[#f8fafc]
          px-5
          py-14

          sm:px-8
          sm:py-20

          lg:px-10
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1200px]">

          {/* HEADING */}

          <div className="text-center">

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Our Process
            </span>

            <h2
              className="
                mx-auto
                mt-4
                max-w-[700px]
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#191b1f]

                sm:text-4xl
              "
            >
              A simple and transparent

              <span className="text-[#086FFD]">
                {" "}hiring process.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[620px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              We keep our hiring process straightforward so you
              always know what to expect at every stage.
            </p>

          </div>

          {/* STEPS */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >

            {hiringSteps.map((step) => (
              <div
                key={step.number}
                className="
                  relative
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-6
                  shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#086FFD]/20
                  hover:shadow-[0_15px_40px_rgba(8,111,253,0.08)]
                "
              >

                <span
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    text-[#086FFD]/20
                  "
                >
                  {step.number}
                </span>

                <h3
                  className="
                    mt-4
                    text-base
                    font-semibold
                    text-[#191b1f]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#191b1f]/55
                  "
                >
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          DON'T SEE A ROLE
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
            max-w-[1200px]
            rounded-[24px]
            border
            border-[#191b1f]/8
            bg-white
            p-7
            shadow-[0_20px_60px_rgba(15,23,42,0.06)]

            sm:p-10

            lg:p-12
          "
        >

          <div
            className="
              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

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
                Don't See Your Role?
              </span>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-[#191b1f]

                  sm:text-3xl
                "
              >
                We're always looking for

                <span className="text-[#086FFD]">
                  {" "}great people.
                </span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-[650px]
                  text-sm
                  leading-6
                  text-[#191b1f]/55
                "
              >
                Don't see a position that matches your skills?
                Send us your resume anyway. If we think there is
                a good fit, we'll get in touch.
              </p>

            </div>

            <a
              href="mailto:codecpstechnologies@gmail.com?subject=General%20Job%20Application"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2.5
                rounded-xl
                bg-[#086FFD]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-[0_10px_25px_rgba(8,111,253,0.16)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#075ed6]
                hover:shadow-[0_15px_35px_rgba(8,111,253,0.22)]
              "
            >
              Send Your Resume

              <Send
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
              CTA GLOW
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
              Ready to build what's next?
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
              Join our team and help us create digital experiences
              that make a real difference.
            </p>

            <a
              href="#open-positions"
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
              Explore Open Positions

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

export default Careers;