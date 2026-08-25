const API_URL = import.meta.env.VITE_API_URL || "";

/* ============================================================
   ADMIN TOKEN HELPERS (localStorage)
============================================================ */

export const getAdminToken = () =>
  localStorage.getItem("cps_admin_token");

export const setAdminToken = (token) =>
  localStorage.setItem("cps_admin_token", token);

export const clearAdminToken = () =>
  localStorage.removeItem("cps_admin_token");

/* ============================================================
   CORE FETCH WRAPPER
============================================================ */

const request = async (path, options = {}) => {
  const token = getAdminToken();

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

/* ============================================================
   INTERNSHIP (PUBLIC)
============================================================ */

export const applyInternship = (payload) =>
  request("/api/internship/apply", {
    method: "POST",
    body: JSON.stringify(payload),
  });

/* ============================================================
   ADMIN AUTH
============================================================ */

export const adminLogin = (email, password) =>
  request("/api/admin/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

export const adminGetMe = () => request("/api/admin/me");

/* ============================================================
   ADMIN — APPLICATIONS
============================================================ */

export const adminGetApplications = () =>
  request("/api/internship/admin/all");

export const adminUpdateStatus = (id, payload) =>
  request(`/api/internship/admin/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const adminIssueCertificate = (id) =>
  request(`/api/internship/admin/${id}/certificate`, {
    method: "POST",
  });

export const adminDeleteApplication = (id) =>
  request(`/api/internship/admin/${id}`, {
    method: "DELETE",
  });

/* ============================================================
   CERTIFICATE (PUBLIC)
============================================================ */

export const verifyCertificate = (certificateId) =>
  request(
    `/api/certificate/verify/${encodeURIComponent(certificateId)}`
  );

export const getCertificateDownloadUrl = (certificateId) =>
  `${API_URL}/api/certificate/${encodeURIComponent(
    certificateId
  )}/download`;
