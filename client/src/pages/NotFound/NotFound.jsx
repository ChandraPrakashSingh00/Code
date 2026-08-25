import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "../../components/SEO/SEO";

/* ============================================================
   404 - PAGE NOT FOUND

   Pehle wildcard route "*" seedhe HomePage dikhata tha, jisse
   Google ke liye "soft 404" ban jaata tha (galat/dead URL bhi
   200 OK homepage jaisa dikhta tha). Ab yeh sahi 404 page hai,
   jisme noindex bhi hai taaki yeh kabhi Google index me na aaye.
============================================================ */

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you are looking for could not be found on CodeCPS Technologies."
        path="/404"
        noindex={true}
      />

      <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-white">
        <div className="text-center max-w-lg">
          <p className="text-[#086FFD] font-bold text-lg mb-2">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for doesn&apos;t exist or has
            been moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#086FFD] text-white font-medium hover:opacity-90 transition"
            >
              <Home size={18} />
              Back to Home
            </Link>

            <Link
              to="/service"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
