import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  Loader2,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  BriefcaseBusiness,
  Users,
  Award,
} from "lucide-react";

import SEO from "../../components/SEO/SEO";
import { adminLogin, setAdminToken } from "../../services/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await adminLogin(email, password);

      setAdminToken(res.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(
        err.message || "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Admin Login"
        description="CodeCPS Technologies internal admin login."
        path="/admin/login"
        noindex
      />

      {/* =====================================================
          MAIN
      ===================================================== */}
      <main className="min-h-screen bg-white text-[#191b1f]">
        <section className="flex min-h-screen items-center justify-center px-4 py-5 sm:px-6 lg:px-8">
          {/* =================================================
              MAIN CARD
          ================================================= */}
          <div
            className="
              grid
              w-full
              max-w-[1000px]
              overflow-hidden
              rounded-[24px]
              border
              border-[#191b1f]/8
              bg-white
              shadow-[0_20px_60px_rgba(25,27,31,0.10)]
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* =================================================
                LEFT BRAND SECTION
            ================================================= */}
            <div
              className="
                hidden
                min-h-[500px]
                flex-col
                justify-between
                bg-white
                p-8
                lg:flex
                xl:p-9
              "
            >
              {/* TOP */}

              <div>
                {/* BRAND */}

                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#086FFD]
                      text-white
                      shadow-[0_7px_18px_rgba(8,111,253,0.20)]
                    "
                  >
                    <LayoutDashboard size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold tracking-tight text-[#191b1f]">
                      CodeCPS Technologies
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#191b1f]/35
                      "
                    >
                      Administration Portal
                    </p>
                  </div>
                </div>

                {/* HEADING */}

                <div className="mt-14">
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#086FFD]/15
                      bg-[#086FFD]/5
                      px-3
                      py-1.5
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#086FFD]" />

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#086FFD]
                      "
                    >
                      Secure Admin Access
                    </span>
                  </div>

                  <h1
                    className="
                      mt-4
                      max-w-[400px]
                      text-[36px]
                      font-bold
                      leading-[1.08]
                      tracking-[-1.4px]
                      text-[#191b1f]
                      xl:text-[40px]
                    "
                  >
                    Manage your
                    <span className="block text-[#086FFD]">
                      internship operations.
                    </span>
                  </h1>

                  <p
                    className="
                      mt-4
                      max-w-[370px]
                      text-[13px]
                      leading-5
                      text-[#191b1f]/50
                    "
                  >
                    Access the CodeCPS Technologies administration
                    dashboard to manage applications, candidates and
                    internship activities.
                  </p>
                </div>

                {/* FEATURES */}

                <div className="mt-6 space-y-2.5">
                  {[
                    {
                      icon: BriefcaseBusiness,
                      text: "Manage internship applications",
                    },
                    {
                      icon: Users,
                      text: "Review candidate information",
                    },
                    {
                      icon: Award,
                      text: "Track internship activities",
                    },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-[#191b1f]/7
                        bg-[#fafcff]
                        px-3
                        py-2
                      "
                    >
                      <div
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#086FFD]/10
                        "
                      >
                        <Icon
                          size={14}
                          className="text-[#086FFD]"
                        />
                      </div>

                      <span className="text-[11px] font-medium text-[#191b1f]/65">
                        {text}
                      </span>

                      <CheckCircle2
                        size={13}
                        className="ml-auto text-[#086FFD]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* SECURITY */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#191b1f]/8
                  bg-[#f8fafc]
                  px-3.5
                  py-2.5
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#086FFD]/10
                  "
                >
                  <ShieldCheck
                    size={16}
                    className="text-[#086FFD]"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold text-[#191b1f]">
                    Protected Administration
                  </p>

                  <p className="mt-0.5 text-[9px] text-[#191b1f]/40">
                    Authorized personnel only
                  </p>
                </div>

                <span className="ml-auto flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                  <span className="text-[8px] font-medium text-[#191b1f]/40">
                    Secure
                  </span>
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT LOGIN SECTION
            ================================================= */}
            <div
              className="
                flex
                min-h-[500px]
                items-center
                justify-center
                bg-[#f5f8fc]
                px-4
                py-6
                sm:px-7
                lg:px-9
              "
            >
              <div className="mx-auto w-full max-w-[360px]">
                {/* MOBILE BRAND */}

                <div className="mb-5 flex items-center gap-3 lg:hidden">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#086FFD]
                      text-white
                    "
                  >
                    <LayoutDashboard size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#191b1f]">
                      CodeCPS Technologies
                    </p>

                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#191b1f]/35
                      "
                    >
                      Admin Portal
                    </p>
                  </div>
                </div>

                {/* =================================================
                    LOGIN FORM BLUE CARD
                ================================================= */}
                <div
                  className="
                    rounded-[22px]
                    bg-[#086FFD]
                    p-5
                    shadow-[0_18px_45px_rgba(8,111,253,0.25)]
                    sm:p-6
                  "
                >
                  {/* ICON */}

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
                    <Lock size={20} />
                  </div>

                  {/* HEADING */}

                  <div className="mt-4">
                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.17em]
                        text-white/70
                      "
                    >
                      Restricted Access
                    </p>

                    <h2
                      className="
                        mt-1
                        text-[27px]
                        font-bold
                        leading-tight
                        tracking-[-0.8px]
                        text-white
                      "
                    >
                      Welcome back.
                    </h2>

                    <p
                      className="
                        mt-1.5
                        text-[11px]
                        leading-5
                        text-white/65
                      "
                    >
                      Sign in to access the CodeCPS administration
                      dashboard.
                    </p>
                  </div>

                  {/* FORM */}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-5 space-y-3.5"
                  >
                    {/* EMAIL */}

                    <div>
                      <label
                        htmlFor="admin-email"
                        className="
                          mb-1.5
                          block
                          text-[10px]
                          font-bold
                          text-white
                        "
                      >
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail
                          size={14}
                          className="
                            pointer-events-none
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-[#191b1f]/30
                          "
                        />

                        <input
                          id="admin-email"
                          type="email"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          placeholder="Enter admin email"
                          required
                          autoComplete="email"
                          className="
                            h-10
                            w-full
                            rounded-xl
                            border
                            border-white/20
                            bg-white
                            pl-9
                            pr-3
                            text-[11px]
                            text-[#191b1f]
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-[#191b1f]/30
                            focus:border-white
                            focus:ring-4
                            focus:ring-white/20
                          "
                        />
                      </div>
                    </div>

                    {/* PASSWORD */}

                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <label
                          htmlFor="admin-password"
                          className="
                            text-[10px]
                            font-bold
                            text-white
                          "
                        >
                          Password
                        </label>

                        <span className="flex items-center gap-1 text-[8px] text-white/60">
                          <Lock size={9} />
                          Protected
                        </span>
                      </div>

                      <div className="relative">
                        <Lock
                          size={14}
                          className="
                            pointer-events-none
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-[#191b1f]/30
                          "
                        />

                        <input
                          id="admin-password"
                          type={
                            showPassword ? "text" : "password"
                          }
                          value={password}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                          placeholder="Enter your password"
                          required
                          autoComplete="current-password"
                          className="
                            h-10
                            w-full
                            rounded-xl
                            border
                            border-white/20
                            bg-white
                            pl-9
                            pr-10
                            text-[11px]
                            text-[#191b1f]
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-[#191b1f]/30
                            focus:border-white
                            focus:ring-4
                            focus:ring-white/20
                          "
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((prev) => !prev)
                          }
                          className="
                            absolute
                            right-1.5
                            top-1/2
                            flex
                            h-7
                            w-7
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-lg
                            text-[#191b1f]/35
                            transition-all
                            hover:bg-[#086FFD]/10
                            hover:text-[#086FFD]
                          "
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          {showPassword ? (
                            <EyeOff size={14} />
                          ) : (
                            <Eye size={14} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* ERROR */}

                    {error && (
                      <div
                        className="
                          rounded-xl
                          border
                          border-red-200
                          bg-white
                          px-3
                          py-2
                        "
                      >
                        <p className="text-[10px] leading-4 text-red-600">
                          {error}
                        </p>
                      </div>
                    )}

                    {/* BUTTON */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group
                        relative
                        flex
                        h-10
                        w-full
                        items-center
                        justify-center
                        gap-2
                        overflow-hidden
                        rounded-xl
                        bg-white
                        text-[11px]
                        font-bold
                        text-[#086FFD]
                        shadow-[0_7px_18px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-[0_10px_24px_rgba(0,0,0,0.16)]
                        active:translate-y-0
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >
                      {loading ? (
                        <>
                          <Loader2
                            size={15}
                            className="animate-spin"
                          />

                          <span>Signing in...</span>
                        </>
                      ) : (
                        <>
                          <span>Sign In to Dashboard</span>

                          <span
                            className="
                              flex
                              h-5.5
                              w-5.5
                              items-center
                              justify-center
                              rounded-full
                              bg-[#086FFD]/10
                              transition-all
                              duration-300
                              group-hover:bg-[#086FFD]/15
                            "
                          >
                            <ArrowRight size={12} />
                          </span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* SECURITY */}

                  <div
                    className="
                      mt-4
                      flex
                      items-start
                      gap-2
                      rounded-xl
                      border
                      border-white/15
                      bg-white/10
                      px-3
                      py-2
                    "
                  >
                    <ShieldCheck
                      size={14}
                      className="
                        mt-0.5
                        shrink-0
                        text-white
                      "
                    />

                    <p
                      className="
                        text-[8px]
                        leading-3.5
                        text-white/65
                      "
                    >
                      This is a restricted administration area.
                      Authorized credentials are required to
                      continue.
                    </p>
                  </div>
                </div>

                {/* FOOTER */}

                <p
                  className="
                    mt-4
                    text-center
                    text-[8px]
                    text-[#191b1f]/35
                  "
                >
                  © {new Date().getFullYear()} CodeCPS Technologies
                  · Administration Portal
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AdminLogin;