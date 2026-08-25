import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LogOut,
  RefreshCcw,
  Award,
  Trash2,
  ExternalLink,
  Loader2,
  Users,
  Clock3,
  CheckCircle2,
  Search,
  ShieldCheck,
  ChevronDown,
  FileText,
  UserCheck,
} from "lucide-react";

import SEO from "../../components/SEO/SEO";

import {
  adminGetApplications,
  adminUpdateStatus,
  adminIssueCertificate,
  adminDeleteApplication,
  getCertificateDownloadUrl,
  clearAdminToken,
} from "../../services/api";

/* ============================================================
   STATUS CONFIG
============================================================ */

const STATUS_STYLES = {
  applied: {
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    dot: "bg-slate-500",
  },

  ongoing: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },

  completed: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },

  rejected: {
    badge: "bg-red-50 text-red-700 border-red-200",
    dot: "bg-red-500",
  },
};

const STATUS_OPTIONS = [
  "applied",
  "ongoing",
  "completed",
  "rejected",
];

/* ============================================================
   ADMIN DASHBOARD
============================================================ */

function AdminDashboard() {
  const navigate = useNavigate();

  /* ==========================================================
     STATES
  ========================================================== */

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState(null);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  /* ==========================================================
     FETCH APPLICATIONS
  ========================================================== */

  const fetchApplications = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await adminGetApplications();

      setApplications(res.data || []);
    } catch (err) {
      setError(
        err.message || "Failed to load internship applications."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ==========================================================
     INITIAL LOAD
  ========================================================== */

  useEffect(() => {
    fetchApplications();
  }, []);

  /* ==========================================================
     UPDATE STATUS
  ========================================================== */

  const handleStatusChange = async (id, status) => {
    setBusyId(id);

    try {
      await adminUpdateStatus(id, { status });

      await fetchApplications();
    } catch (err) {
      alert(
        err.message || "Failed to update application status."
      );
    } finally {
      setBusyId(null);
    }
  };

  /* ==========================================================
     ISSUE CERTIFICATE
  ========================================================== */

  const handleIssueCertificate = async (id) => {
    setBusyId(id);

    try {
      await adminIssueCertificate(id);

      await fetchApplications();
    } catch (err) {
      alert(
        err.message || "Failed to issue internship certificate."
      );
    } finally {
      setBusyId(null);
    }
  };

  /* ==========================================================
     DELETE APPLICATION
  ========================================================== */

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this application?"
    );

    if (!confirmed) return;

    setBusyId(id);

    try {
      await adminDeleteApplication(id);

      await fetchApplications();
    } catch (err) {
      alert(
        err.message || "Failed to delete application."
      );
    } finally {
      setBusyId(null);
    }
  };

  /* ==========================================================
     LOGOUT
  ========================================================== */

  const handleLogout = () => {
    clearAdminToken();

    navigate("/admin/login");
  };

  /* ==========================================================
     STATISTICS
  ========================================================== */

  const stats = useMemo(() => {
    return {
      total: applications.length,

      applied: applications.filter(
        (app) => app.status === "applied"
      ).length,

      ongoing: applications.filter(
        (app) => app.status === "ongoing"
      ).length,

      completed: applications.filter(
        (app) => app.status === "completed"
      ).length,

      rejected: applications.filter(
        (app) => app.status === "rejected"
      ).length,

      certificates: applications.filter(
        (app) => app.certificateIssued
      ).length,
    };
  }, [applications]);

  /* ==========================================================
     FILTER + SEARCH
  ========================================================== */

  const filtered = useMemo(() => {
    let result = applications;

    if (filter !== "all") {
      result = result.filter(
        (app) => app.status === filter
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((app) => {
        return (
          app.fullName
            ?.toLowerCase()
            .includes(query) ||
          app.email
            ?.toLowerCase()
            .includes(query) ||
          app.phone
            ?.toLowerCase()
            .includes(query) ||
          app.domain
            ?.toLowerCase()
            .includes(query) ||
          app.duration
            ?.toLowerCase()
            .includes(query)
        );
      });
    }

    return result;
  }, [applications, filter, search]);

  /* ==========================================================
     STAT CARDS
  ========================================================== */

  const statCards = [
    {
      label: "Total Applications",
      value: stats.total,
      description: "Applications received",
      icon: Users,
      iconBg: "bg-[#086FFD]/10",
      iconColor: "text-[#086FFD]",
    },

    {
      label: "New Applications",
      value: stats.applied,
      description: "Waiting for review",
      icon: FileText,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
    },

    {
      label: "Ongoing",
      value: stats.ongoing,
      description: "Active internships",
      icon: Clock3,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },

    {
      label: "Completed",
      value: stats.completed,
      description: "Completed internships",
      icon: CheckCircle2,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <>
      <SEO
        title="Admin Dashboard"
        description="CodeCPS Technologies internal internship administration dashboard."
        path="/admin/dashboard"
        noindex
      />

      <main className="min-h-screen bg-white text-[#191b1f]">

        {/* ====================================================
            HERO / HEADER
        ==================================================== */}

        <section
          className="
            border-b
            border-white/10
            bg-[#191b1f]
            px-5
            py-16
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          "
        >
          <div className="mx-auto max-w-[1000px]">

            {/* =================================================
                CENTERED HERO CONTENT
            ================================================= */}

            <div className="flex flex-col items-center text-center">

              {/* BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
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
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white/70
                  "
                >
                  Internship Management
                </span>
              </div>

              {/* HEADING */}

              <h1
                className="
                  mt-6
                  max-w-[900px]
                  text-center
                  text-[38px]
                  font-bold
                  leading-[1.05]
                  tracking-[-1.8px]
                  text-white

                  sm:text-[48px]
                  sm:tracking-[-2px]

                  md:text-[56px]

                  lg:text-[62px]
                  lg:tracking-[-2.5px]
                "
              >
                Internship{" "}
                <span className="text-[#086FFD]">
                  Applications.
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-6
                  max-w-[680px]
                  text-center
                  text-sm
                  leading-6
                  text-white/55

                  sm:text-base
                  sm:leading-7
                "
              >
                Manage applications, review candidates, update
                internship progress and issue certificates from one
                simple and secure administration dashboard.
              </p>

              {/* HERO ACTIONS */}

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-3
                "
              >
                <button
                  type="button"
                  onClick={fetchApplications}
                  disabled={loading}
                  className="
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    text-xs
                    font-bold
                    text-white
                    transition-all
                    hover:border-white/20
                    hover:bg-white/10
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  <RefreshCcw
                    size={14}
                    className={
                      loading ? "animate-spin" : ""
                    }
                  />

                  Refresh
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-4
                    text-xs
                    font-bold
                    text-[#191b1f]
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[#086FFD]
                    hover:text-white
                  "
                >
                  <LogOut size={14} />

                  Logout
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================
            STATS SECTION
        ==================================================== */}

        <section
          className="
            px-5
            py-10
            sm:px-8
            sm:py-14
            lg:px-10
            lg:py-16
          "
        >
          <div className="mx-auto max-w-[1200px]">

            {/* SECTION LABEL */}

            <div className="mb-7">

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#086FFD]
                "
              >
                Overview
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
                Application overview
              </h2>

              <p
                className="
                  mt-2
                  max-w-[600px]
                  text-sm
                  leading-6
                  text-[#191b1f]/50
                "
              >
                Keep track of internship applications and candidate
                progress at a glance.
              </p>

            </div>

            {/* STAT CARDS */}

            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {statCards.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="
                      group
                      rounded-2xl
                      border
                      border-[#191b1f]/8
                      bg-white
                      p-5
                      shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#086FFD]/20
                      hover:shadow-[0_18px_45px_rgba(8,111,253,0.09)]
                    "
                  >
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        ${stat.iconBg}
                        ${stat.iconColor}
                        transition-all
                        duration-300
                        group-hover:bg-[#086FFD]
                        group-hover:text-white
                      `}
                    >
                      <Icon size={20} />
                    </div>

                    <p
                      className="
                        mt-5
                        text-3xl
                        font-bold
                        tracking-tight
                        text-[#191b1f]
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-semibold
                        text-[#191b1f]/70
                      "
                    >
                      {stat.label}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        text-[#191b1f]/40
                      "
                    >
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ====================================================
            APPLICATION MANAGEMENT
        ==================================================== */}

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

            <div
              className="
                flex
                flex-col
                justify-between
                gap-6
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
                  Applications
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
                  Manage internship{" "}
                  <span className="text-[#086FFD]">
                    applications.
                  </span>
                </h2>

                <p
                  className="
                    mt-4
                    max-w-[600px]
                    text-sm
                    leading-6
                    text-[#191b1f]/55
                  "
                >
                  Review candidate information, update their
                  internship status and issue certificates after
                  successful completion.
                </p>

              </div>

              {/* SEARCH */}

              <div className="relative w-full lg:w-[300px]">

                <Search
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3.5
                    top-1/2
                    -translate-y-1/2
                    text-[#191b1f]/30
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search applicant..."
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-[#191b1f]/10
                    bg-white
                    pl-10
                    pr-4
                    text-sm
                    text-[#191b1f]
                    outline-none
                    shadow-sm
                    transition-all
                    placeholder:text-[#191b1f]/30
                    focus:border-[#086FFD]/40
                    focus:ring-4
                    focus:ring-[#086FFD]/8
                  "
                />

              </div>

            </div>

            {/* FILTERS */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-2
              "
            >
              {[
                "all",
                ...STATUS_OPTIONS,
              ].map((status) => {

                const active = filter === status;

                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setFilter(status)}
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2
                      text-xs
                      font-bold
                      capitalize
                      transition-all
                      duration-300

                      ${
                        active
                          ? "border-[#086FFD] bg-[#086FFD] text-white shadow-[0_8px_20px_rgba(8,111,253,0.18)]"
                          : "border-[#191b1f]/10 bg-white text-[#191b1f]/55 hover:border-[#086FFD]/25 hover:text-[#086FFD]"
                      }
                    `}
                  >
                    {status}
                  </button>
                );
              })}
            </div>

            {/* ERROR */}

            {error && (
              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  px-4
                  py-3
                "
              >
                <p
                  className="
                    text-xs
                    font-medium
                    text-red-600
                  "
                >
                  {error}
                </p>
              </div>
            )}

            {/* TABLE */}

            <div
              className="
                mt-6
                overflow-hidden
                rounded-2xl
                border
                border-[#191b1f]/8
                bg-white
                shadow-[0_12px_40px_rgba(15,23,42,0.05)]
              "
            >

              {/* LOADING */}

              {loading ? (
                <div
                  className="
                    flex
                    min-h-[360px]
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#086FFD]/10
                    "
                  >
                    <Loader2
                      size={21}
                      className="
                        animate-spin
                        text-[#086FFD]
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-4
                      text-sm
                      font-medium
                      text-[#191b1f]/45
                    "
                  >
                    Loading applications...
                  </p>
                </div>

              ) : filtered.length === 0 ? (

                /* EMPTY */

                <div
                  className="
                    flex
                    min-h-[360px]
                    flex-col
                    items-center
                    justify-center
                    px-5
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#086FFD]/10
                      text-[#086FFD]
                    "
                  >
                    <Users size={23} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-base
                      font-semibold
                      text-[#191b1f]
                    "
                  >
                    No applications found
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-sm
                      text-center
                      text-sm
                      leading-6
                      text-[#191b1f]/45
                    "
                  >
                    No applications match your current search or
                    status filter.
                  </p>
                </div>

              ) : (

                /* TABLE */

                <div className="overflow-x-auto">

                  <table
                    className="
                      w-full
                      min-w-[1050px]
                      text-left
                    "
                  >

                    {/* TABLE HEADER */}

                    <thead>
                      <tr
                        className="
                          border-b
                          border-[#191b1f]/8
                          bg-[#f8fafc]
                        "
                      >

                        <th
                          className="
                            px-6
                            py-4
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#191b1f]/40
                          "
                        >
                          Applicant
                        </th>

                        <th
                          className="
                            px-6
                            py-4
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#191b1f]/40
                          "
                        >
                          Domain
                        </th>

                        <th
                          className="
                            px-6
                            py-4
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#191b1f]/40
                          "
                        >
                          Duration
                        </th>

                        <th
                          className="
                            px-6
                            py-4
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#191b1f]/40
                          "
                        >
                          Status
                        </th>

                        <th
                          className="
                            px-6
                            py-4
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#191b1f]/40
                          "
                        >
                          Certificate
                        </th>

                        <th
                          className="
                            px-6
                            py-4
                            text-right
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#191b1f]/40
                          "
                        >
                          Action
                        </th>

                      </tr>
                    </thead>

                    {/* TABLE BODY */}

                    <tbody
                      className="
                        divide-y
                        divide-[#191b1f]/6
                      "
                    >

                      {filtered.map((app) => {

                        const statusStyle =
                          STATUS_STYLES[app.status] ||
                          STATUS_STYLES.applied;

                        const initial =
                          app.fullName
                            ?.charAt(0)
                            ?.toUpperCase() || "A";

                        return (
                          <tr
                            key={app._id}
                            className="
                              group
                              transition-all
                              duration-200
                              hover:bg-[#f8fbff]
                            "
                          >

                            {/* APPLICANT */}

                            <td className="px-6 py-5">

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-3
                                "
                              >

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
                                    text-sm
                                    font-bold
                                    text-[#086FFD]
                                    transition-all
                                    duration-300
                                    group-hover:bg-[#086FFD]
                                    group-hover:text-white
                                  "
                                >
                                  {initial}
                                </div>

                                <div className="min-w-0">

                                  <p
                                    className="
                                      truncate
                                      text-sm
                                      font-semibold
                                      text-[#191b1f]
                                    "
                                  >
                                    {app.fullName}
                                  </p>

                                  <p
                                    className="
                                      mt-1
                                      truncate
                                      text-xs
                                      text-[#191b1f]/45
                                    "
                                  >
                                    {app.email}
                                  </p>

                                  {app.phone && (
                                    <p
                                      className="
                                        mt-0.5
                                        text-[10px]
                                        text-[#191b1f]/35
                                      "
                                    >
                                      {app.phone}
                                    </p>
                                  )}

                                </div>
                              </div>
                            </td>

                            {/* DOMAIN */}

                            <td className="px-6 py-5">

                              <span
                                className="
                                  inline-flex
                                  rounded-lg
                                  border
                                  border-[#086FFD]/10
                                  bg-[#086FFD]/6
                                  px-3
                                  py-1.5
                                  text-xs
                                  font-semibold
                                  text-[#086FFD]
                                "
                              >
                                {app.domain}
                              </span>

                            </td>

                            {/* DURATION */}

                            <td className="px-6 py-5">

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-2
                                  text-sm
                                  font-medium
                                  text-[#191b1f]/60
                                "
                              >
                                <Clock3
                                  size={14}
                                  className="text-[#191b1f]/35"
                                />

                                {app.duration}
                              </div>

                            </td>

                            {/* STATUS */}

                            <td className="px-6 py-5">

                              <div className="relative inline-block">

                                <select
                                  value={app.status}
                                  disabled={
                                    busyId === app._id
                                  }
                                  onChange={(e) =>
                                    handleStatusChange(
                                      app._id,
                                      e.target.value
                                    )
                                  }
                                  className={`
                                    appearance-none
                                    rounded-full
                                    border
                                    py-2
                                    pl-7
                                    pr-8
                                    text-xs
                                    font-bold
                                    capitalize
                                    outline-none
                                    transition-all
                                    disabled:cursor-not-allowed
                                    disabled:opacity-50

                                    ${statusStyle.badge}
                                  `}
                                >
                                  {STATUS_OPTIONS.map(
                                    (status) => (
                                      <option
                                        key={status}
                                        value={status}
                                      >
                                        {status}
                                      </option>
                                    )
                                  )}
                                </select>

                                <span
                                  className={`
                                    pointer-events-none
                                    absolute
                                    left-2.5
                                    top-1/2
                                    h-1.5
                                    w-1.5
                                    -translate-y-1/2
                                    rounded-full
                                    ${statusStyle.dot}
                                  `}
                                />

                                <ChevronDown
                                  size={12}
                                  className="
                                    pointer-events-none
                                    absolute
                                    right-2.5
                                    top-1/2
                                    -translate-y-1/2
                                    text-[#191b1f]/40
                                  "
                                />

                              </div>

                            </td>

                            {/* CERTIFICATE */}

                            <td className="px-6 py-5">

                              {app.certificateIssued ? (

                                <a
                                  href={getCertificateDownloadUrl(
                                    app.certificateId
                                  )}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    rounded-lg
                                    border
                                    border-emerald-200
                                    bg-emerald-50
                                    px-3
                                    py-2
                                    text-[10px]
                                    font-bold
                                    text-emerald-700
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:bg-emerald-100
                                  "
                                >

                                  <Award size={13} />

                                  <span>
                                    {app.certificateId}
                                  </span>

                                  <ExternalLink size={11} />

                                </a>

                              ) : (

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleIssueCertificate(
                                      app._id
                                    )
                                  }
                                  disabled={
                                    app.status !==
                                      "completed" ||
                                    busyId === app._id
                                  }
                                  className="
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    rounded-lg
                                    bg-[#086FFD]/10
                                    px-3
                                    py-2
                                    text-[10px]
                                    font-bold
                                    text-[#086FFD]
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:bg-[#086FFD]/15
                                    disabled:cursor-not-allowed
                                    disabled:opacity-35
                                  "
                                  title={
                                    app.status !==
                                    "completed"
                                      ? "Mark internship as completed first"
                                      : "Issue certificate"
                                  }
                                >

                                  {busyId === app._id ? (
                                    <Loader2
                                      size={13}
                                      className="animate-spin"
                                    />
                                  ) : (
                                    <Award size={13} />
                                  )}

                                  Issue Certificate

                                </button>
                              )}

                            </td>

                            {/* DELETE */}

                            <td
                              className="
                                px-6
                                py-5
                                text-right
                              "
                            >

                              <button
                                type="button"
                                onClick={() =>
                                  handleDelete(app._id)
                                }
                                disabled={
                                  busyId === app._id
                                }
                                className="
                                  inline-flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-xl
                                  border
                                  border-transparent
                                  text-red-500
                                  transition-all
                                  hover:border-red-100
                                  hover:bg-red-50
                                  disabled:cursor-not-allowed
                                  disabled:opacity-40
                                "
                                title="Delete application"
                              >

                                {busyId === app._id ? (
                                  <Loader2
                                    size={15}
                                    className="animate-spin"
                                  />
                                ) : (
                                  <Trash2 size={15} />
                                )}

                              </button>

                            </td>

                          </tr>
                        );
                      })}

                    </tbody>

                  </table>

                </div>
              )}

            </div>

            {/* TABLE FOOTER */}

            {!loading && filtered.length > 0 && (
              <div
                className="
                  mt-5
                  flex
                  flex-col
                  items-center
                  justify-between
                  gap-3
                  sm:flex-row
                "
              >

                <p
                  className="
                    text-xs
                    text-[#191b1f]/40
                  "
                >
                  Showing{" "}
                  <span
                    className="
                      font-semibold
                      text-[#191b1f]/60
                    "
                  >
                    {filtered.length}
                  </span>{" "}
                  application
                  {filtered.length !== 1 ? "s" : ""}
                </p>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-[#191b1f]/40
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-500
                    "
                  />

                  Secure Admin Environment
                </div>

              </div>
            )}

          </div>
        </section>

        {/* ====================================================
            ADMIN INFO SECTION
        ==================================================== */}

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

              {/* LEFT */}

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
                  Administration
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
                  Keep your internship workflow{" "}
                  <span className="text-[#086FFD]">
                    organized.
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
                  Review applications, manage candidate progress
                  and provide certificates after successful
                  completion. Everything is available from this
                  administration panel.
                </p>

              </div>

              {/* RIGHT */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#086FFD]/10
                  bg-[#086FFD]/5
                  px-5
                  py-4
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
                    bg-[#086FFD]
                    text-white
                  "
                >
                  <UserCheck size={19} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      text-[#191b1f]
                    "
                  >
                    Certificates Issued
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-2xl
                      font-bold
                      text-[#086FFD]
                    "
                  >
                    {stats.certificates}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ====================================================
            FOOTER
        ==================================================== */}

        <footer
          className="
            border-t
            border-[#191b1f]/8
            bg-white
            px-5
            py-6
            sm:px-8
            lg:px-10
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-[1200px]
              flex-col
              items-center
              justify-between
              gap-3
              sm:flex-row
            "
          >

            <p
              className="
                text-xs
                text-[#191b1f]/40
              "
            >
              © {new Date().getFullYear()} CodeCPS Technologies
              · Internship Administration
            </p>

            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                font-medium
                text-[#191b1f]/40
              "
            >

              <ShieldCheck
                size={13}
                className="text-[#086FFD]"
              />

              Secure Admin Environment

            </div>

          </div>

        </footer>

      </main>
    </>
  );
}

export default AdminDashboard;