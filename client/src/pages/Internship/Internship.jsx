import React, { useState } from "react";
import {
  BriefcaseBusiness,
  MapPin,
  Clock3,
  Users,
  Code2,
  Rocket,
  Send,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Laptop,
  Sparkles,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";

/* ============================================================
   INTERNSHIP PAGE
============================================================ */

function Internship() {
  const [openPosition, setOpenPosition] = useState(null);

  /* ============================================================
     INTERNSHIP POSITIONS
  ============================================================ */

  const internshipPositions = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      department: "Engineering",
      location: "India · Remote",
      type: "Internship",
      duration: "3–6 Months",
      experience: "Students / Freshers",
      description:
        "Work on real-world web applications and learn how modern frontend and backend technologies come together to build complete digital products.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Git",
      ],
      responsibilities: [
        "Build responsive web interfaces using React.js.",
        "Develop backend APIs using Node.js and Express.js.",
        "Work with MongoDB and database-driven applications.",
        "Integrate frontend applications with REST APIs.",
        "Collaborate with developers on real-world projects.",
      ],
    },

    {
      id: 2,
      title: "Frontend Developer Intern",
      department: "Engineering",
      location: "India · Remote",
      type: "Internship",
      duration: "3–6 Months",
      experience: "Students / Freshers",
      description:
        "Learn modern frontend development by building responsive, interactive and user-friendly interfaces using React.js and Tailwind CSS.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Git",
      ],
      responsibilities: [
        "Develop reusable React components.",
        "Create responsive interfaces for web applications.",
        "Work with REST APIs and frontend integrations.",
        "Improve UI performance and user experience.",
        "Collaborate with designers and backend developers.",
      ],
    },

    {
      id: 3,
      title: "Backend Developer Intern",
      department: "Engineering",
      location: "India · Remote",
      type: "Internship",
      duration: "3–6 Months",
      experience: "Students / Freshers",
      description:
        "Gain practical experience in backend development by building APIs, working with databases and understanding how scalable web applications are structured.",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JavaScript",
        "Git",
      ],
      responsibilities: [
        "Develop RESTful APIs using Node.js and Express.js.",
        "Work with MongoDB databases.",
        "Implement authentication and backend logic.",
        "Test and debug APIs and backend services.",
        "Work with frontend developers on API integrations.",
      ],
    },

    {
      id: 4,
      title: "React.js Developer Intern",
      department: "Engineering",
      location: "India · Remote",
      type: "Internship",
      duration: "3–6 Months",
      experience: "Students / Freshers",
      description:
        "Build modern React applications while learning component architecture, state management, API integration and professional frontend workflows.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "REST APIs",
        "GitHub",
      ],
      responsibilities: [
        "Build reusable React components.",
        "Create responsive and accessible interfaces.",
        "Integrate APIs into React applications.",
        "Work with routing and application state.",
        "Maintain clean and scalable frontend code.",
      ],
    },

    {
      id: 5,
      title: "AI / ML Intern",
      department: "AI & Technology",
      location: "India · Remote",
      type: "Internship",
      duration: "3–6 Months",
      experience: "Students / Freshers",
      description:
        "Explore AI-powered applications and practical machine learning concepts while working on technology-focused projects and intelligent product features.",
      skills: [
        "AI",
        "Machine Learning",
        "Python",
        "APIs",
        "Data Processing",
        "Git",
      ],
      responsibilities: [
        "Explore practical AI and ML concepts.",
        "Work with AI APIs and intelligent application features.",
        "Experiment with data-driven solutions.",
        "Build small proof-of-concept AI projects.",
        "Collaborate with developers on AI-powered products.",
      ],
    },

    {
      id: 6,
      title: "UI/UX Design Intern",
      department: "Design",
      location: "India · Remote",
      type: "Internship",
      duration: "3–6 Months",
      experience: "Students / Freshers",
      description:
        "Learn how to transform ideas into clean, intuitive and user-friendly digital experiences through research, wireframing and modern interface design.",
      skills: [
        "Figma",
        "UI Design",
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      responsibilities: [
        "Create wireframes and high-fidelity designs.",
        "Design responsive web interfaces.",
        "Build reusable design components.",
        "Conduct basic UX research and analysis.",
        "Collaborate with developers to implement designs.",
      ],
    },

    {
      id: 7,
      title: "Digital Marketing Intern",
      department: "Marketing",
      location: "India · Remote",
      type: "Internship",
      duration: "3–6 Months",
      experience: "Students / Freshers",
      description:
        "Gain practical experience in digital marketing by working on content, SEO, social media and online growth strategies for technology products.",
      skills: [
        "SEO",
        "Social Media",
        "Content",
        "Digital Marketing",
        "Analytics",
        "Canva",
      ],
      responsibilities: [
        "Assist with SEO and content strategies.",
        "Create social media content and campaigns.",
        "Research industry trends and keywords.",
        "Track basic campaign performance.",
        "Support online brand growth initiatives.",
      ],
    },
  ];

  /* ============================================================
     BENEFITS
  ============================================================ */

  const benefits = [
    {
      icon: BriefcaseBusiness,
      title: "Real Project Experience",
      description:
        "Work on practical projects and understand how technology is used to solve real business problems.",
    },
    {
      icon: Users,
      title: "Mentorship & Guidance",
      description:
        "Learn from experienced team members and receive guidance throughout your internship journey.",
    },
    {
      icon: Code2,
      title: "Modern Technology",
      description:
        "Get hands-on exposure to modern tools, frameworks and development practices used in digital products.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description:
        "Strengthen your technical and professional skills through continuous learning and practical work.",
    },
    {
      icon: Award,
      title: "Internship Certificate",
      description:
        "Receive an internship certificate after successfully completing the internship program.",
    },
    {
      icon: Rocket,
      title: "Career Opportunity",
      description:
        "Build your portfolio, gain practical experience and create a stronger foundation for your career.",
    },
  ];

  /* ============================================================
     WHAT YOU WILL GET
  ============================================================ */

  const learningPoints = [
    "Real-world project exposure",
    "Professional development workflow",
    "Git & GitHub collaboration",
    "API integration experience",
    "Responsive UI development",
    "Problem-solving skills",
    "Team collaboration",
    "Portfolio-ready projects",
  ];

  /* ============================================================
     ELIGIBILITY
  ============================================================ */

  const eligibility = [
    "Students pursuing BCA, B.Tech, MCA, B.Sc CS or related programs.",
    "Freshers looking for practical industry experience.",
    "Candidates with basic knowledge of their selected technology.",
    "Self-learners with personal projects or GitHub work.",
    "Candidates who are curious, consistent and willing to learn.",
    "Students looking to build a strong technical portfolio.",
  ];

  /* ============================================================
     INTERNSHIP PROCESS
  ============================================================ */

  const internshipSteps = [
    {
      number: "01",
      title: "Apply",
      description:
        "Submit your application with your resume, skills and basic information.",
    },
    {
      number: "02",
      title: "Screening",
      description:
        "Our team reviews your profile, skills, projects and overall interest.",
    },
    {
      number: "03",
      title: "Discussion",
      description:
        "Shortlisted candidates may have a short technical or HR discussion.",
    },
    {
      number: "04",
      title: "Selection",
      description:
        "Selected candidates receive internship confirmation and onboarding details.",
    },
    {
      number: "05",
      title: "Learn & Build",
      description:
        "Start learning, work on projects and grow your skills with the team.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title="Internship Opportunities - CodeCPS Technologies"
        description="Internship opportunities at CodeCPS Technologies: gain real-world experience in Full Stack, React.js, AI/ML, UI/UX and Digital Marketing."
        keywords="CodeCPS internship, software development internship, React internship, MERN internship, frontend internship, backend internship, AI internship, UI UX internship"
        path="/internship"
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
          pt-10
          sm:px-8
          sm:pb-12
          sm:pt-12
          lg:px-10
          lg:pb-14
          lg:pt-14
        "
      >
        <div className="relative mx-auto max-w-[1100px] text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-3.5
              py-1.5
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#086FFD]
                shadow-[0_0_12px_rgba(8,111,253,0.8)]
              "
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
              Internship Program
            </span>
          </div>

          <h1
            className="
              mx-auto
              mt-4
              max-w-[900px]
              text-[36px]
              font-bold
              leading-[1.05]
              tracking-[-1.5px]
              text-white
              sm:text-[46px]
              md:text-[52px]
              lg:text-[58px]
              lg:tracking-[-2px]
            "
          >
            Learn. Build.
            <span className="block text-[#086FFD]">
              Grow with CodeCPS.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-3
              max-w-[680px]
              text-sm
              leading-6
              text-white/60
              sm:text-base
              sm:leading-7
            "
          >
            Start your professional journey with hands-on experience,
            real-world projects and mentorship from a growing technology team.
          </p>

          <div
            className="
              mt-6
              flex
              flex-wrap
              justify-center
              gap-x-6
              gap-y-2.5
              text-xs
              text-white/45
            "
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#086FFD]" />
              Real Projects
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#086FFD]" />
              Mentorship
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#086FFD]" />
              Certificate
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#086FFD]" />
              Career Growth
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
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-1
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-14
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
              Start Your Journey
            </span>

            <h2
              className="
                mt-3
                max-w-[550px]
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-4xl
              "
            >
              Turn your knowledge into
              <span className="text-[#086FFD]"> real experience.</span>
            </h2>

            <p
              className="
                mt-4
                max-w-[560px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              An internship should be more than just a certificate. At
              CodeCPS Technologies, we focus on practical learning, real
              projects and helping you understand how technology is actually
              used in the industry.
            </p>

            <p
              className="
                mt-3
                max-w-[560px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              Whether you're building your first React application, learning
              backend development or exploring AI, you'll get an opportunity
              to learn, experiment and grow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: BriefcaseBusiness,
                value: "7+",
                label: "Internship Roles",
              },
              {
                icon: Clock3,
                value: "3–6",
                label: "Months",
              },
              {
                icon: Laptop,
                value: "Remote",
                label: "Flexible Mode",
              },
              {
                icon: Award,
                value: "Certified",
                label: "On Completion",
              },
            ].map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
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
                  "
                >
                  <Icon size={21} className="text-[#086FFD]" />

                  <p className="mt-4 text-2xl font-bold">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-[#191b1f]/50">
                    {stat.label}
                  </p>
                </div>
              );
            })}
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
          py-12
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[700px]">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              What We Offer
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-4xl
              "
            >
              An internship designed for
              <span className="text-[#086FFD]"> growth.</span>
            </h2>

            <p
              className="
                mt-3
                max-w-[620px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              Learn from real work, receive guidance and develop the skills
              you need to move confidently into your professional career.
            </p>
          </div>

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
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

                  <h3 className="mt-4 text-base font-semibold">
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
          py-12
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div
            className="
              flex
              flex-col
              justify-between
              gap-4
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
                Available Positions
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                "
              >
                Find the right
                <span className="text-[#086FFD]"> opportunity.</span>
              </h2>
            </div>

            <div
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-green-200
                bg-green-50
                px-3.5
                py-1.5
                text-xs
                font-semibold
                text-green-600
              "
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Applications Open
            </div>
          </div>

          <p
            className="
              mt-3
              max-w-[650px]
              text-sm
              leading-6
              text-[#191b1f]/55
            "
          >
            Choose a role that matches your interests and start building
            practical skills through real-world projects.
          </p>

          <div className="mt-8 space-y-3">
            {internshipPositions.map((position) => {
              const isOpen = openPosition === position.id;

              return (
                <div
                  key={position.id}
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
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenPosition(
                        isOpen ? null : position.id
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      p-5
                      text-left
                      sm:p-6
                    "
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
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
                          {position.department}
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
                          {position.experience}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-2.5
                          text-lg
                          font-semibold
                          sm:text-xl
                        "
                      >
                        {position.title}
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
                          {position.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock3 size={14} />
                          {position.duration}
                        </span>
                      </div>
                    </div>

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

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "max-h-[1000px] opacity-100"
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
                        {position.description}
                      </p>

                      <div
                        className="
                          mt-5
                          grid
                          grid-cols-1
                          gap-3
                          sm:grid-cols-3
                        "
                      >
                        <div className="rounded-xl bg-[#f8fafc] p-4">
                          <p className="text-[11px] text-[#191b1f]/45">
                            Internship Type
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            {position.type}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#f8fafc] p-4">
                          <p className="text-[11px] text-[#191b1f]/45">
                            Duration
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            {position.duration}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#f8fafc] p-4">
                          <p className="text-[11px] text-[#191b1f]/45">
                            Work Mode
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            Remote
                          </p>
                        </div>
                      </div>

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
                          Skills & Technologies
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {position.skills.map((skill) => (
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
                          What You'll Work On
                        </p>

                        <div className="mt-3 space-y-2">
                          {position.responsibilities.map((item) => (
                            <div
                              key={item}
                              className="
                                flex
                                gap-2.5
                                text-sm
                                text-[#191b1f]/60
                              "
                            >
                              <CheckCircle2
                                size={16}
                                className="
                                  mt-0.5
                                  shrink-0
                                  text-[#086FFD]
                                "
                              />

                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to="/internshipform"
                        state={{
                          position: {
                            id: position.id,
                            title: position.title,
                            department: position.department,
                            duration: position.duration,
                            location: position.location,
                          },
                        }}
                        className="
                          group
                          relative
                          mt-7
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-3
                          overflow-hidden
                          rounded-xl
                          bg-[#086FFD]
                          px-5
                          py-3.5
                          text-sm
                          font-bold
                          text-white
                          shadow-[0_8px_25px_rgba(8,111,253,0.22)]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-[#075ed6]
                          hover:shadow-[0_12px_30px_rgba(8,111,253,0.30)]
                          sm:w-fit
                          sm:px-6
                        "
                      >
                        <span
                          className="
                            pointer-events-none
                            absolute
                            inset-y-0
                            -left-20
                            w-16
                            rotate-12
                            bg-white/20
                            blur-sm
                            transition-all
                            duration-700
                            group-hover:left-[110%]
                          "
                        />

                        <span className="relative flex items-center gap-2">
                          Apply for this Internship

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              bg-white/15
                              transition-all
                              duration-300
                              group-hover:bg-white/25
                            "
                          >
                            <ArrowRight
                              size={15}
                              className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-0.5
                              "
                            />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING SECTION
      ===================================================== */}

      <section
        className="
          bg-[#191b1f]
          px-5
          py-12
          text-white
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
              lg:gap-14
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
                What You'll Learn
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                "
              >
                Build skills that
                <span className="text-[#086FFD]"> actually matter.</span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-[540px]
                  text-sm
                  leading-6
                  text-white/50
                "
              >
                Your internship experience should leave you with more than
                just a certificate. You'll gain practical knowledge, project
                experience and professional development habits.
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {learningPoints.map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                    transition-all
                    duration-300
                    hover:border-[#086FFD]/30
                    hover:bg-white/[0.07]
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#086FFD]/15
                      text-[10px]
                      font-bold
                      text-[#086FFD]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-white/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ELIGIBILITY
      ===================================================== */}

      <section
        className="
          bg-[#f8fafc]
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-1
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-14
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
              Who Can Apply
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-4xl
              "
            >
              Curious minds,
              <span className="text-[#086FFD]"> welcome.</span>
            </h2>

            <p
              className="
                mt-3
                max-w-[560px]
                text-sm
                leading-6
                text-[#191b1f]/60
              "
            >
              You don't need to know everything before you start. We value
              curiosity, consistency, problem-solving and the willingness to
              learn.
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-[#191b1f]/8
              bg-white
              p-6
              shadow-[0_10px_35px_rgba(15,23,42,0.04)]
              sm:p-7
            "
          >
            <div className="space-y-3.5">
              {eligibility.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#086FFD]
                    "
                  />

                  <p
                    className="
                      text-sm
                      leading-6
                      text-[#191b1f]/60
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATION PROCESS
      ===================================================== */}

      <section
        id="how-it-works"
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
              How It Works
            </span>

            <h2
              className="
                mx-auto
                mt-3
                max-w-[750px]
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-4xl
              "
            >
              A simple path from
              <span className="text-[#086FFD]">
                {" "}
                application to experience.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-[650px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              We keep the internship selection process simple, transparent
              and focused on your learning potential.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {internshipSteps.map((step) => (
              <div
                key={step.number}
                className="
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

                <h3 className="mt-3 text-base font-semibold">
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
          FAQ
      ===================================================== */}

      <section
        className="
          bg-[#f8fafc]
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[850px]">
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
              Frequently Asked Questions
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                sm:text-4xl
              "
            >
              Everything you need to know.
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {[
              {
                question: "What is the duration of the internship?",
                answer:
                  "Our internship opportunities are generally available for 3–6 months depending on the position and program requirements.",
              },
              {
                question: "Is the internship remote?",
                answer:
                  "Internship opportunities are primarily designed for remote participation. Specific working arrangements may vary depending on the role.",
              },
              {
                question: "Who can apply for the internship?",
                answer:
                  "Students, freshers and self-learners with basic knowledge of their chosen field can apply. We value willingness to learn and practical ability.",
              },
              {
                question: "Will I receive an internship certificate?",
                answer:
                  "Eligible interns who successfully complete the internship program can receive an internship certificate.",
              },
              {
                question: "Do I need prior industry experience?",
                answer:
                  "No. These internships are designed to help students and freshers gain practical experience. Personal projects and basic technical knowledge can be helpful.",
              },
              {
                question: "How can I apply?",
                answer:
                  "Choose a position from the Available Positions section and click Apply for this Internship. You will then be taken to the internship application form.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="
                  group
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-5
                  shadow-[0_5px_20px_rgba(15,23,42,0.025)]
                "
              >
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-5
                    text-sm
                    font-semibold
                  "
                >
                  {faq.question}

                  <ChevronDown
                    size={18}
                    className="
                      shrink-0
                      text-[#086FFD]
                      transition-transform
                      duration-300
                      group-open:rotate-180
                    "
                  />
                </summary>

                <p
                  className="
                    mt-3
                    max-w-[750px]
                    text-sm
                    leading-6
                    text-[#191b1f]/55
                  "
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GENERAL APPLICATION
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
              gap-7
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
                Can't Find Your Role?
              </span>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  tracking-tight
                  sm:text-3xl
                "
              >
                Send us your profile.
                <span className="text-[#086FFD]">
                  {" "}
                  Let's connect.
                </span>
              </h2>

              <p
                className="
                  mt-2
                  max-w-[650px]
                  text-sm
                  leading-6
                  text-[#191b1f]/55
                "
              >
                Don't see an internship that matches your skills? You can
                still share your resume and portfolio with us for future
                opportunities.
              </p>
            </div>

            <a
              href="mailto:codecpstechnologies@gmail.com?subject=General%20Internship%20Application&body=Hello%20CodeCPS%20Technologies%2C%0A%0AI%20am%20interested%20in%20an%20internship%20opportunity%20at%20CodeCPS%20Technologies.%0A%0AName%3A%0APhone%3A%0AInternship%20Role%3A%0A%0AI%20have%20attached%20my%20resume%20for%20your%20consideration.%0A%0ARegards%2C"
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
                shadow-[0_8px_25px_rgba(8,111,253,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#075ed6]
                hover:shadow-[0_12px_30px_rgba(8,111,253,0.30)]
              "
            >
              <span>Send Your Resume</span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition-all
                  duration-300
                  group-hover:bg-white/25
                "
              >
                <Send
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          px-5
          pb-14
          sm:px-8
          sm:pb-16
          lg:px-10
          lg:pb-20
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
            py-9
            text-center
            text-white
            sm:px-10
            sm:py-11
            lg:px-16
            lg:py-12
          "
        >
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
            <Sparkles className="mx-auto" size={27} />

            <h2
              className="
                mt-3
                text-2xl
                font-semibold
                tracking-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              Ready to start learning?
            </h2>

            <p
              className="
                mx-auto
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-white/75
              "
            >
              Take the first step toward building your skills, experience and
              professional future with CodeCPS Technologies.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Internship;