import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  ShieldX,
  Search,
  Loader2,
  Download,
} from "lucide-react";
import SEO from "../../components/SEO/SEO";
import {
  verifyCertificate,
  getCertificateDownloadUrl,
} from "../../services/api";

function Verify() {
  const { certificateId: paramId } = useParams();
  const navigate = useNavigate();

  const [input, setInput] = useState(paramId || "");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { valid, data }
  const [checked, setChecked] = useState(false);

  const runVerify = async (id) => {
    if (!id || !id.trim()) return;

    setLoading(true);
    setChecked(false);
    setResult(null);

    try {
      const res = await verifyCertificate(id.trim());
      setResult(res);
    } catch (err) {
      setResult({ valid: false });
    } finally {
      setLoading(false);
      setChecked(true);
    }
  };

  useEffect(() => {
    if (paramId) {
      runVerify(paramId);
    }
  }, [paramId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/verify/${encodeURIComponent(input.trim())}`);
    runVerify(input);
  };

  return (
    <>
      <SEO
        title="Verify Certificate"
        description="Verify the authenticity of a CodeCPS Technologies internship certificate using its Certificate ID."
        path="/verify"
      />

      <section className="hero-section pt-32 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-xl">
          <div className="mb-8 text-center">
            <span className="inline-block rounded-full border border-[#086FFD]/20 bg-[#086FFD]/5 px-4 py-1.5 text-xs font-semibold text-[#086FFD]">
              Certificate Verification
            </span>
            <h1 className="mt-4 text-3xl font-bold text-[#191b1f] sm:text-4xl">
              Verify a Certificate
            </h1>
            <p className="mt-3 text-sm text-[#191b1f]/60">
              Enter the Certificate ID printed on the certificate (e.g.
              CPS/2026/INT/001) to confirm it was genuinely issued by CodeCPS.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mb-8 flex flex-col gap-3 rounded-2xl border border-[#191b1f]/8 bg-white p-4 shadow-sm sm:flex-row"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="CPS/2026/INT/001"
              required
              className="h-12 w-full flex-1 rounded-xl border border-[#191b1f]/10 bg-[#f8fafc] px-4 text-sm text-[#191b1f] outline-none transition-all duration-300 placeholder:text-[#191b1f]/35 focus:border-[#086FFD]/50 focus:bg-white focus:ring-4 focus:ring-[#086FFD]/10"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#086FFD] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#086FFD]/90 disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              Verify
            </button>
          </form>

          {checked && result && result.valid && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-emerald-600" />
                <div>
                  <p className="font-bold text-emerald-700">
                    Certificate is Valid
                  </p>
                  <p className="text-xs text-emerald-700/70">
                    Issued by CodeCPS Technologies
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold text-emerald-700/70">
                    Intern Name
                  </dt>
                  <dd className="text-[#191b1f]">{result.data.fullName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-emerald-700/70">
                    Certificate ID
                  </dt>
                  <dd className="text-[#191b1f]">
                    {result.data.certificateId}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-emerald-700/70">
                    Domain
                  </dt>
                  <dd className="text-[#191b1f]">{result.data.domain}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-emerald-700/70">
                    Duration
                  </dt>
                  <dd className="text-[#191b1f]">{result.data.duration}</dd>
                </div>
              </dl>

              <a
                href={getCertificateDownloadUrl(result.data.certificateId)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
              >
                <Download className="h-4 w-4" />
                View / Download Certificate
              </a>
            </div>
          )}

          {checked && result && !result.valid && (
            <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-6">
              <ShieldX className="h-8 w-8 text-red-600" />
              <div>
                <p className="font-bold text-red-700">
                  Certificate Not Found
                </p>
                <p className="text-xs text-red-700/70">
                  This Certificate ID doesn't match any issued certificate.
                  Please double check and try again.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Verify;
