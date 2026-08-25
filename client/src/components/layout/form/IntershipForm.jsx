import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  GraduationCap,
  Laptop,
  Loader2,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import SEO from "../../SEO/SEO";
import { applyInternship } from "../../../services/api";

/* ============================================================
   INTERNSHIP POSITIONS
============================================================ */

const INTERNSHIP_POSITIONS = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    department: "Engineering",
    domain: "Full Stack Web Development",
    duration: "3–6 Months",
    experience: "Students / Freshers",
    location: "India · Remote",
    type: "Internship",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    department: "Engineering",
    domain: "Frontend Development",
    duration: "3–6 Months",
    experience: "Students / Freshers",
    location: "India · Remote",
    type: "Internship",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Git",
    ],
  },
  {
    id: 3,
    title: "Backend Developer Intern",
    department: "Engineering",
    domain: "Backend Development",
    duration: "3–6 Months",
    experience: "Students / Freshers",
    location: "India · Remote",
    type: "Internship",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript",
      "Git",
    ],
  },
  {
    id: 4,
    title: "React.js Developer Intern",
    department: "Engineering",
    domain: "React.js Development",
    duration: "3–6 Months",
    experience: "Students / Freshers",
    location: "India · Remote",
    type: "Internship",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "REST APIs",
      "GitHub",
    ],
  },
  {
    id: 5,
    title: "AI / ML Intern",
    department: "AI & Technology",
    domain: "AI / Machine Learning",
    duration: "3–6 Months",
    experience: "Students / Freshers",
    location: "India · Remote",
    type: "Internship",
    skills: [
      "AI",
      "Machine Learning",
      "Python",
      "APIs",
      "Data Processing",
      "Git",
    ],
  },
  {
    id: 6,
    title: "UI/UX Design Intern",
    department: "Design",
    domain: "UI/UX Design",
    duration: "3–6 Months",
    experience: "Students / Freshers",
    location: "India · Remote",
    type: "Internship",
    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    id: 7,
    title: "Digital Marketing Intern",
    department: "Marketing",
    domain: "Digital Marketing",
    duration: "3–6 Months",
    experience: "Students / Freshers",
    location: "India · Remote",
    type: "Internship",
    skills: [
      "SEO",
      "Social Media",
      "Content",
      "Digital Marketing",
      "Analytics",
      "Canva",
    ],
  },
];

/* ============================================================
   COMMON DOMAINS
============================================================ */

const DOMAINS = [
  "Full Stack Web Development",
  "Frontend Development",
  "Backend Development",
  "React.js Development",
  "AI / Machine Learning",
  "UI/UX Design",
  "Digital Marketing",
];

/* ============================================================
   COMPONENT
============================================================ */

function InternshipForm() {
  const location = useLocation();

  const passedPosition = location.state?.position;

  /* ============================================================
     FIND FULL POSITION DATA
  ============================================================ */

  const initialPosition = useMemo(() => {
    if (!passedPosition) return null;

    return (
      INTERNSHIP_POSITIONS.find(
        (position) => position.id === passedPosition.id
      ) || passedPosition
    );
  }, [passedPosition]);

  /* ============================================================
     FORM STATE
  ============================================================ */

  const [selectedPositionId, setSelectedPositionId] = useState(
    initialPosition?.id || ""
  );

  const selectedPosition = useMemo(() => {
    return (
      INTERNSHIP_POSITIONS.find(
        (position) => position.id === Number(selectedPositionId)
      ) || initialPosition
    );
  }, [selectedPositionId, initialPosition]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    position: initialPosition?.title || "",
    domain: initialPosition?.domain || "",
    duration: initialPosition?.duration || "3–6 Months",
    resumeLink: "",
    linkedin: "",
    github: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* ============================================================
     HANDLE INPUT
  ============================================================ */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ============================================================
     HANDLE POSITION CHANGE
  ============================================================ */

  const handlePositionChange = (e) => {
    const id = Number(e.target.value);

    setSelectedPositionId(id);

    const position = INTERNSHIP_POSITIONS.find(
      (item) => item.id === id
    );

    if (!position) return;

    setForm((prev) => ({
      ...prev,
      position: position.title,
      domain: position.domain,
      duration: position.duration,
    }));
  };

  /* ============================================================
     HANDLE SUBMIT
  ============================================================ */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!form.position) {
      setError("Please select an internship position.");
      return;
    }

    if (!form.resumeLink.trim()) {
      setError("Please provide your resume link.");
      return;
    }

    setLoading(true);

    try {
      await applyInternship(form);

      setSubmitted(true);
    } catch (err) {
      setError(
        err?.message || "Failed to submit application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ============================================================
     INPUT CLASS
  ============================================================ */

  const inputClass = `
    h-12 w-full rounded-xl
    border border-[#191b1f]/10
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
  `;

  const labelClass = `
    mb-2
    block
    text-xs
    font-semibold
    text-[#191b1f]
  `;

  /* ============================================================
     SUCCESS SCREEN
  ============================================================ */

  if (submitted) {
    return (
      <>
        <SEO
          title="Application Submitted - CodeCPS Technologies"
          description="Your internship application has been successfully submitted to CodeCPS Technologies."
          path="/internshipform"
        />

        <main className="min-h-screen bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
            <div
              className="
                w-full
                rounded-[28px]
                border
                border-[#191b1f]/8
                bg-white
                px-6
                py-12
                text-center
                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
                sm:px-10
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-[#086FFD]/10
                "
              >
                <CheckCircle2
                  size={42}
                  className="text-[#086FFD]"
                />
              </div>

              <div
                className="
                  mx-auto
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#086FFD]/15
                  bg-[#086FFD]/5
                  px-3.5
                  py-1.5
                  text-xs
                  font-semibold
                  text-[#086FFD]
                "
              >
                <Sparkles size={13} />
                Application Received
              </div>

              <h1
                className="
                  mt-4
                  text-3xl
                  font-bold
                  tracking-tight
                  text-[#191b1f]
                  sm:text-4xl
                "
              >
                Application Submitted!
              </h1>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-lg
                  text-sm
                  leading-6
                  text-[#191b1f]/55
                "
              >
                Thank you for applying to CodeCPS Technologies.
                Our team will review your application and contact
                you through the email or phone number provided.
              </p>

              {form.position && (
                <div
                  className="
                    mx-auto
                    mt-7
                    max-w-md
                    rounded-2xl
                    border
                    border-[#086FFD]/15
                    bg-[#086FFD]/5
                    p-5
                    text-left
                  "
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#086FFD]">
                    Applied Position
                  </p>

                  <p className="mt-1 text-base font-bold text-[#191b1f]">
                    {form.position}
                  </p>

                  <p className="mt-1 text-xs text-[#191b1f]/50">
                    {form.domain} · {form.duration}
                  </p>
                </div>
              )}

              <Link
                to="/internship"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
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
                  hover:-translate-y-0.5
                  hover:bg-[#075ed6]
                "
              >
                <ArrowLeft size={16} />
                Back to Internships
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  /* ============================================================
     MAIN FORM
  ============================================================ */

  return (
    <>
      <SEO
        title={
          selectedPosition
            ? `Apply for ${selectedPosition.title} - CodeCPS Technologies`
            : "Apply for Internship - CodeCPS Technologies"
        }
        description="Apply for an internship at CodeCPS Technologies and gain practical experience through real-world projects, mentorship and modern technology."
        keywords="CodeCPS internship application, internship form, software internship, developer internship"
        path="/internshipform"
      />

      <main className="min-h-screen bg-[#f8fafc] text-[#191b1f]">

        {/* =====================================================
            TOP HERO
        ===================================================== */}

        <section
          className="
            relative
            overflow-hidden
            bg-[#191b1f]
            px-5
            pb-12
            pt-24
            sm:px-8
            sm:pb-14
            sm:pt-28
            lg:px-10
            lg:pb-16
          "
        >
          <div className="relative mx-auto max-w-[1000px]">

            {/* Back - CENTERED */}

            <div className="flex justify-center">
              <Link
                to="/internship"
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
                  text-xs
                  font-medium
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <ArrowLeft size={14} />
                Back to Internship Opportunities
              </Link>
            </div>

            <div className="mt-8 text-center">

              <span
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
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#086FFD]
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#086FFD]" />
                Internship Application
              </span>

              <h1
                className="
                  mx-auto
                  mt-4
                  max-w-3xl
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Start your journey with
                <span className="text-[#086FFD]">
                  {" "}
                  CodeCPS.
                </span>
              </h1>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/55
                  sm:text-base
                "
              >
                Tell us about yourself and choose the internship
                opportunity that matches your skills and interests.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FORM AREA
        ===================================================== */}

        <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div
            className="
              mx-auto
              grid
              max-w-[1200px]
              grid-cols-1
              gap-7
              lg:grid-cols-[0.72fr_1.28fr]
              lg:items-start
            "
          >

            {/* =================================================
                LEFT POSITION SUMMARY
            ================================================= */}

            <aside className="lg:sticky lg:top-24">

              {selectedPosition ? (
                <div
                  className="
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#191b1f]/8
                    bg-white
                    shadow-[0_15px_50px_rgba(15,23,42,0.06)]
                  "
                >
                  {/* Blue Header */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      bg-[#086FFD]
                      p-6
                    "
                  >
                    <div className="relative">

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-white/15
                          text-white
                        "
                      >
                        <BriefcaseBusiness size={21} />
                      </div>

                      <p
                        className="
                          mt-5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-white/65
                        "
                      >
                        Applying For
                      </p>

                      <h2
                        className="
                          mt-1.5
                          text-xl
                          font-bold
                          leading-tight
                          text-white
                        "
                      >
                        {selectedPosition.title}
                      </h2>

                      <p className="mt-2 text-xs text-white/65">
                        {selectedPosition.department}
                      </p>
                    </div>
                  </div>

                  {/* Position Details */}

                  <div className="p-6">

                    <div className="space-y-4">

                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#086FFD]/10 text-[#086FFD]">
                          <Code2 size={17} />
                        </div>

                        <div>
                          <p className="text-[10px] text-[#191b1f]/40">
                            Domain
                          </p>

                          <p className="mt-0.5 text-sm font-semibold">
                            {selectedPosition.domain}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#086FFD]/10 text-[#086FFD]">
                          <Clock3 size={17} />
                        </div>

                        <div>
                          <p className="text-[10px] text-[#191b1f]/40">
                            Duration
                          </p>

                          <p className="mt-0.5 text-sm font-semibold">
                            {selectedPosition.duration}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#086FFD]/10 text-[#086FFD]">
                          <Laptop size={17} />
                        </div>

                        <div>
                          <p className="text-[10px] text-[#191b1f]/40">
                            Work Mode
                          </p>

                          <p className="mt-0.5 text-sm font-semibold">
                            {selectedPosition.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#086FFD]/10 text-[#086FFD]">
                          <GraduationCap size={17} />
                        </div>

                        <div>
                          <p className="text-[10px] text-[#191b1f]/40">
                            Eligibility
                          </p>

                          <p className="mt-0.5 text-sm font-semibold">
                            {selectedPosition.experience}
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Skills */}

                    <div className="mt-7 border-t border-[#191b1f]/8 pt-6">

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.13em]
                          text-[#191b1f]/40
                        "
                      >
                        Key Technologies
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedPosition.skills.map((skill) => (
                          <span
                            key={skill}
                            className="
                              rounded-lg
                              border
                              border-[#191b1f]/8
                              bg-[#f8fafc]
                              px-2.5
                              py-1.5
                              text-[11px]
                              font-medium
                              text-[#191b1f]/60
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Trust */}

                    <div
                      className="
                        mt-6
                        flex
                        gap-3
                        rounded-xl
                        bg-[#086FFD]/5
                        p-4
                      "
                    >
                      <ShieldCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-[#086FFD]"
                      />

                      <p className="text-xs leading-5 text-[#191b1f]/55">
                        Your information will only be used for
                        internship application and recruitment
                        communication.
                      </p>
                    </div>

                  </div>
                </div>
              ) : (
                <div
                  className="
                    rounded-[24px]
                    border
                    border-[#191b1f]/8
                    bg-white
                    p-6
                    shadow-[0_15px_50px_rgba(15,23,42,0.06)]
                  "
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#086FFD]/10 text-[#086FFD]">
                    <BriefcaseBusiness size={21} />
                  </div>

                  <h2 className="mt-5 text-lg font-bold">
                    Choose your opportunity
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#191b1f]/55">
                    Select an internship position from the form
                    to continue with your application.
                  </p>
                </div>
              )}

            </aside>

            {/* =================================================
                RIGHT FORM
            ================================================= */}

            <div
              className="
                rounded-[24px]
                border
                border-[#191b1f]/8
                bg-white
                p-6
                shadow-[0_15px_50px_rgba(15,23,42,0.06)]
                sm:p-8
                lg:p-9
              "
            >

              {/* Form Heading */}

              <div className="border-b border-[#191b1f]/8 pb-6">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#086FFD]/10
                      text-[#086FFD]
                    "
                  >
                    <Users size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#086FFD]">
                      Candidate Details
                    </p>

                    <h2 className="mt-0.5 text-xl font-bold">
                      Tell us about yourself
                    </h2>
                  </div>

                </div>

                <p className="mt-3 text-sm leading-6 text-[#191b1f]/50">
                  Please provide accurate information so our team
                  can review your application.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-6"
              >

                {/* POSITION */}

                <div>

                  <label className={labelClass}>
                    Internship Position
                  </label>

                  <select
                    value={selectedPositionId}
                    onChange={handlePositionChange}
                    required
                    className={inputClass}
                  >
                    <option value="">
                      Select an internship position
                    </option>

                    {INTERNSHIP_POSITIONS.map((position) => (
                      <option
                        key={position.id}
                        value={position.id}
                      >
                        {position.title}
                      </option>
                    ))}
                  </select>

                  <p className="mt-1.5 text-[11px] text-[#191b1f]/40">
                    Your selected position from the internship page
                    is automatically filled here.
                  </p>

                </div>

                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className={labelClass}>
                      Full Name *
                    </label>

                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className={inputClass}
                    />
                  </div>

                </div>

                {/* PHONE + COLLEGE */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className={labelClass}>
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      College / University
                    </label>

                    <input
                      name="college"
                      value={form.college}
                      onChange={handleChange}
                      placeholder="Your college / university"
                      className={inputClass}
                    />
                  </div>

                </div>

                {/* DOMAIN + DURATION */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className={labelClass}>
                      Internship Domain
                    </label>

                    <select
                      name="domain"
                      value={form.domain}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">
                        Select domain
                      </option>

                      {DOMAINS.map((domain) => (
                        <option key={domain} value={domain}>
                          {domain}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Internship Duration
                    </label>

                    <select
                      name="duration"
                      value={form.duration}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="3–6 Months">
                        3–6 Months
                      </option>

                      <option value="3 Months">
                        3 Months
                      </option>

                      <option value="6 Months">
                        6 Months
                      </option>
                    </select>
                  </div>

                </div>

                {/* RESUME */}

                <div>

                  <label className={labelClass}>
                    Resume Link *
                  </label>

                  <input
                    type="url"
                    name="resumeLink"
                    value={form.resumeLink}
                    onChange={handleChange}
                    placeholder="Google Drive / OneDrive / Resume URL"
                    required
                    className={inputClass}
                  />

                  <p className="mt-1.5 text-[11px] text-[#191b1f]/40">
                    Make sure your resume link is publicly accessible
                    or available to anyone with the link.
                  </p>

                </div>

                {/* LINKEDIN + GITHUB */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className={labelClass}>
                      LinkedIn Profile
                    </label>

                    <input
                      type="url"
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/..."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      GitHub Profile
                    </label>

                    <input
                      type="url"
                      name="github"
                      value={form.github}
                      onChange={handleChange}
                      placeholder="https://github.com/..."
                      className={inputClass}
                    />
                  </div>

                </div>

                {/* MESSAGE */}

                <div>

                  <label className={labelClass}>
                    Message
                    <span className="ml-1 font-normal text-[#191b1f]/35">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about yourself, your projects, skills or why you want to join CodeCPS..."
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

                {/* ERROR */}

                {error && (
                  <div
                    className="
                      flex
                      gap-3
                      rounded-xl
                      border
                      border-red-200
                      bg-red-50
                      px-4
                      py-3
                      text-sm
                      text-red-600
                    "
                  >
                    <span className="font-bold">!</span>
                    <span>{error}</span>
                  </div>
                )}

                {/* PRIVACY */}

                <div className="flex gap-3 rounded-xl bg-[#f8fafc] p-4">

                  <ShieldCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-[#086FFD]"
                  />

                  <p className="text-xs leading-5 text-[#191b1f]/50">
                    By submitting this application, you confirm that
                    the information provided is accurate and can be
                    used by CodeCPS Technologies for internship
                    evaluation and communication.
                  </p>

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    relative
                    flex
                    h-13
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    bg-[#086FFD]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_30px_rgba(8,111,253,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#075ed6]
                    hover:shadow-[0_14px_35px_rgba(8,111,253,0.30)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {/* Shine */}

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

                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Submit Internship Application

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
                          group-hover:bg-white/25
                        "
                      >
                        <ArrowRight size={15} />
                      </span>
                    </>
                  )}

                </button>

              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM TRUST SECTION
        ===================================================== */}

        <section className="px-5 pb-14 sm:px-8 lg:px-10">

          <div
            className="
              mx-auto
              flex
              max-w-[1200px]
              flex-col
              gap-5
              rounded-2xl
              border
              border-[#191b1f]/8
              bg-white
              p-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:p-6
            "
          >

            <div className="flex items-center gap-3">

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
                <Award size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Learn. Build. Grow.
                </p>

                <p className="mt-0.5 text-xs text-[#191b1f]/45">
                  Gain practical experience through real-world projects.
                </p>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 text-xs text-[#191b1f]/50">

              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#086FFD]" />
                Real Projects
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#086FFD]" />
                Mentorship
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#086FFD]" />
                Certificate
              </span>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default InternshipForm;