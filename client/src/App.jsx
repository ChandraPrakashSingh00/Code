import { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";

// Services DropDown Pages
import WebDevelopment from "./pages/Services/ServicesPages/WebDevelopment";
import AppDevelopment from "./pages/Services/ServicesPages/AppDevelopment";
import EcommerceDevelopment from "./pages/Services/ServicesPages/E-commerceDevelopment";
import UIUXDesign from "./pages/Services/ServicesPages/UIUXDesign";
import DigitalMarketing from "./pages/Services/ServicesPages/DigitalMarketing"
import CustomSoftware from "./pages/Services/ServicesPages/CustomeSoftware";
import PerformanceSeoOptimization from "./pages/Services/ServicesPages/PerformanceSeoOptimation"

// Cookie Consent
import CookieConsent from "./components/layout/CookieConsent/CookieConsent";
import AIAssistant from "./components/AI/AIAssistant";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import ProtectedRoute from "./pages/Admin/ProtectedRoute";
import IntershipForm from "./components/layout/form/IntershipForm";

/* ============================================================
   LAZY LOADED ROUTES
============================================================ */

const ContactPage = lazy(() =>
  import("./pages/Conatct/Contact")
);

const Career = lazy(() =>
  import("./pages/Careers/Career")
);

const Product = lazy(() =>
  import("./pages/Product/Product")
);

const Service = lazy(() =>
  import("./pages/Services/Service")
);

const About = lazy(() =>
  import("./pages/About/About")
);

const TermsConditions = lazy(() =>
  import("./pages/TermsConditions/TermsConditions")
);

const PrivacyPolicy = lazy(() =>
  import("./pages/PrivacyPolicey/PrivacyPolicy")
);

const Blog = lazy(() =>
  import("./pages/Blog/Blog")
);

const BlogPost = lazy(() =>
  import("./pages/Blog/BlogPost")
);

/* ============================================================
   INTERNSHIP + CERTIFICATE ROUTES
============================================================ */

const Internship = lazy(() =>
  import("./pages/Internship/Internship")
);

const Verify = lazy(() =>
  import("./pages/Verify/Verify")
);

const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound")
);

const AdminLogin = lazy(() =>
  import("./pages/Admin/AdminLogin")
);

const AdminDashboard = lazy(() =>
  import("./pages/Admin/AdminDashboard")
);

/* ============================================================
   SCROLL TO TOP ON ROUTE CHANGE
============================================================ */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ============================================================
   HIDDEN ADMIN LOGIN SHORTCUT

   Ctrl + Shift + A
   -> Opens Admin Login

   Website par koi visible button/link nahi hoga.
============================================================ */

function HiddenAdminShortcut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ctrl + Shift + A
      if (
        event.ctrlKey &&
        event.shiftKey &&
        event.key.toLowerCase() === "a"
      ) {
        event.preventDefault();

        navigate("/admin/login");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return null;
}

/* ============================================================
   APP
============================================================ */

function App() {
  return (
    <>
      <BrowserRouter>

        {/* ====================================================
            SCROLL TO TOP
        ==================================================== */}

        <ScrollToTop />

        {/* ====================================================
            HIDDEN ADMIN SHORTCUT
        ==================================================== */}

        <HiddenAdminShortcut />

        {/* ====================================================
            NAVBAR
        ==================================================== */}

        <Navbar />

        {/* ====================================================
            ROUTES
        ==================================================== */}

        <Suspense
          fallback={
            <div className="min-h-screen bg-white" />
          }
        >
          <Routes>

            {/* ==================================================
                MAIN PAGES
            ================================================== */}

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/home"
              element={<HomePage />}
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />

            <Route
              path="/career"
              element={<Career />}
            />

            <Route
              path="/product"
              element={<Product />}
            />

            <Route
              path="/service"
              element={<Service />}
            />

            <Route
              path="/about"
              element={<About />}
            />


            {/* ==================================================
                SERVICES DROPDOWN PAGES
            ================================================== */}

            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />

            <Route
              path="/services/app-development"
              element={<AppDevelopment />}
            />

             <Route
              path="/services/e-commerce-development"
              element={<EcommerceDevelopment />}
            />

              <Route
              path="/services/uiuxdesign"
              element={<UIUXDesign />}
            />

              <Route
              path="/services/digitalmarketing"
              element={<DigitalMarketing />}
            />

              <Route
              path="/services/customsoftware"
              element={<CustomSoftware />}
            />

              <Route
              path="/services/performanceseooptimization"
              element={<PerformanceSeoOptimization />}
            />


            {/* ==================================================
                BLOG
            ================================================== */}

            <Route
              path="/blog"
              element={<Blog />}
            />

            <Route
              path="/blog/:slug"
              element={<BlogPost />}
            />


            {/* ==================================================
                FOOTER PAGES
            ================================================== */}

            <Route
              path="/terms"
              element={<TermsConditions />}
            />

            <Route
              path="/privacy"
              element={<PrivacyPolicy />}
            />


            {/* ==================================================
                INTERNSHIP
            ================================================== */}

            <Route
              path="/internship"
              element={<Internship />}
            />

            <Route
              path="/internshipform"
              element={<IntershipForm />}
            />


            {/* ==================================================
                CERTIFICATE VERIFICATION
            ================================================== */}

            <Route
              path="/verify"
              element={<Verify />}
            />

            <Route
              path="/verify/:certificateId"
              element={<Verify />}
            />


            {/* ==================================================
                ADMIN
            ================================================== */}

            <Route
              path="/admin/login"
              element={<AdminLogin />}
            />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />


            {/* ==================================================
                FALLBACK / 404
                (Pehle yeh HomePage dikhata tha, jisse Google ko
                galat URLs bhi valid page lagte the - "soft 404"
                issue. Ab sahi 404 page hai jisme noindex hai.)
            ================================================== */}

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </Suspense>


        {/* ====================================================
            FOOTER
        ==================================================== */}

        <Footer />


        {/* ====================================================
            GLOBAL COMPONENTS
        ==================================================== */}

        <CookieConsent />

        <AIAssistant />

        <WhatsAppButton />

      </BrowserRouter>
    </>
  );
}

export default App;