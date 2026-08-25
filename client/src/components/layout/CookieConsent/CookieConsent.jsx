import React, { useEffect, useState } from "react";
import {
  Cookie,
  X,
  Settings2,
  Check,
  ShieldCheck,
  BarChart3,
  Megaphone,
} from "lucide-react";

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  /* ============================================================
     SHOW COOKIE CONSENT
     Popup appears every time page is loaded/refreshed
  ============================================================ */

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  /* ============================================================
     SAVE CONSENT
     No localStorage - popup appears again after refresh
  ============================================================ */

  const saveConsent = (type) => {
    let consentData;

    if (type === "accept") {
      consentData = {
        necessary: true,
        analytics: true,
        marketing: true,
      };
    }

    if (type === "reject") {
      consentData = {
        necessary: true,
        analytics: false,
        marketing: false,
      };
    }

    if (type === "custom") {
      consentData = {
        ...preferences,
        necessary: true,
      };
    }

    console.log("Cookie Consent:", consentData);

    setShowBanner(false);
    setShowPreferences(false);
  };

  /* ============================================================
     TOGGLE PREFERENCE
  ============================================================ */

  const togglePreference = (key) => {
    if (key === "necessary") return;

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  /* ============================================================
     HIDE BANNER
  ============================================================ */

  if (!showBanner) return null;

  return (
    <>
      {/* ========================================================
          COOKIE BANNER
          Dark Background - #191b1f
          No backdrop / No blur
      ======================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[9999]
          px-3
          pb-3

          sm:px-5
          sm:pb-5

          lg:px-8
          lg:pb-7
        "
      >
        <div
          className="
            mx-auto
            max-w-[1180px]
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-[#191b1f]
            shadow-[0_25px_80px_rgba(15,23,42,0.30)]
            animate-[slideUp_0.45s_cubic-bezier(0.16,1,0.3,1)]
          "
        >
          {!showPreferences ? (
            /* ==================================================
               MAIN BANNER
            ================================================== */

            <div className="p-5 sm:p-6 lg:p-7">
              <div
                className="
                  flex
                  flex-col
                  gap-6

                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >
                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >
                  {/* Cookie Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#086FFD]/15
                      text-[#086FFD]
                    "
                  >
                    <Cookie
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}

                  <div>
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                      "
                    >
                      <h2
                        className="
                          text-base
                          font-semibold
                          tracking-tight
                          text-white

                          sm:text-lg
                        "
                      >
                        We value your privacy
                      </h2>

                      <span
                        className="
                          rounded-full
                          bg-[#086FFD]/15
                          px-2.5
                          py-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-[#5da0ff]
                        "
                      >
                        Privacy
                      </span>
                    </div>

                    <p
                      className="
                        mt-2
                        max-w-[680px]
                        text-xs
                        leading-5
                        text-white/60

                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      We use cookies to improve your
                      experience, analyze website traffic,
                      and personalize content. You can
                      choose which cookies you allow.
                    </p>

                    <a
                      href="/privacy-policy"
                      className="
                        mt-2
                        inline-block
                        text-[11px]
                        font-semibold
                        text-[#5da0ff]
                        transition-colors
                        hover:text-[#86b9ff]
                      "
                    >
                      Privacy Policy →
                    </a>
                  </div>
                </div>

                {/* =================================================
                    ACTIONS
                ================================================= */}

                <div
                  className="
                    flex
                    w-full
                    flex-col
                    gap-2.5

                    sm:flex-row

                    lg:w-auto
                    lg:shrink-0
                  "
                >
                  {/* Manage Preferences */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPreferences(true)
                    }
                    className="
                      inline-flex
                      h-11
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      text-xs
                      font-semibold
                      text-white/75
                      transition-all
                      duration-300

                      hover:border-[#086FFD]/30
                      hover:bg-[#086FFD]/10
                      hover:text-white
                    "
                  >
                    <Settings2 size={15} />

                    Manage Preferences
                  </button>

                  {/* Reject All */}

                  <button
                    type="button"
                    onClick={() =>
                      saveConsent("reject")
                    }
                    className="
                      inline-flex
                      h-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      text-xs
                      font-semibold
                      text-white/75
                      transition-all
                      duration-300

                      hover:border-white/20
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    Reject All
                  </button>

                  {/* Accept All */}

                  <button
                    type="button"
                    onClick={() =>
                      saveConsent("accept")
                    }
                    className="
                      group
                      inline-flex
                      h-11
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#086FFD]
                      px-6
                      text-xs
                      font-bold
                      text-white
                      shadow-[0_8px_20px_rgba(8,111,253,0.25)]
                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-[#075ed6]
                      hover:shadow-[0_12px_25px_rgba(8,111,253,0.35)]
                    "
                  >
                    Accept All

                    <Check
                      size={15}
                      className="
                        transition-transform
                        duration-300

                        group-hover:scale-110
                      "
                    />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ==================================================
               PREFERENCES PANEL
            ================================================== */

            <div className="p-5 sm:p-6 lg:p-7">
              {/* =================================================
                  HEADER
              ================================================= */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >
                <div>
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
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#086FFD]/15
                        text-[#5da0ff]
                      "
                    >
                      <Settings2 size={19} />
                    </div>

                    <h2
                      className="
                        text-lg
                        font-semibold
                        tracking-tight
                        text-white

                        sm:text-xl
                      "
                    >
                      Cookie Preferences
                    </h2>
                  </div>

                  <p
                    className="
                      mt-3
                      max-w-[650px]
                      text-xs
                      leading-5
                      text-white/60

                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    Choose which types of cookies you want
                    to allow. Necessary cookies are always
                    enabled because they are required for
                    the website to function properly.
                  </p>
                </div>

                {/* Close */}

                <button
                  type="button"
                  onClick={() =>
                    setShowPreferences(false)
                  }
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-white/40
                    transition-all

                    hover:bg-white/10
                    hover:text-white
                  "
                  aria-label="Close preferences"
                >
                  <X size={18} />
                </button>
              </div>

              {/* =================================================
                  PREFERENCES
              ================================================= */}

              <div
                className="
                  mt-6
                  grid
                  grid-cols-1
                  gap-3

                  md:grid-cols-3
                "
              >
                {/* Necessary */}

                <CookieOption
                  icon={ShieldCheck}
                  title="Necessary"
                  description="Required for basic website functionality."
                  enabled={true}
                  locked={true}
                />

                {/* Analytics */}

                <CookieOption
                  icon={BarChart3}
                  title="Analytics"
                  description="Helps us understand how visitors use our website."
                  enabled={preferences.analytics}
                  onToggle={() =>
                    togglePreference("analytics")
                  }
                />

                {/* Marketing */}

                <CookieOption
                  icon={Megaphone}
                  title="Marketing"
                  description="Used to provide relevant content and advertising."
                  enabled={preferences.marketing}
                  onToggle={() =>
                    togglePreference("marketing")
                  }
                />
              </div>

              {/* =================================================
                  BOTTOM ACTIONS
              ================================================= */}

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-white/10
                  pt-5

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <a
                  href="/privacy"
                  className="
                    text-xs
                    font-semibold
                    text-[#5da0ff]
                    hover:underline
                  "
                >
                  Read our Privacy Policy
                </a>

                <div
                  className="
                    flex
                    w-full
                    gap-2

                    sm:w-auto
                  "
                >
                  {/* Reject */}

                  <button
                    type="button"
                    onClick={() =>
                      saveConsent("reject")
                    }
                    className="
                      flex-1
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-3
                      text-xs
                      font-semibold
                      text-white/70
                      transition-all

                      hover:bg-white/10
                      hover:text-white

                      sm:flex-none
                    "
                  >
                    Reject All
                  </button>

                  {/* Save Preferences */}

                  <button
                    type="button"
                    onClick={() =>
                      saveConsent("custom")
                    }
                    className="
                      flex-1
                      rounded-xl
                      bg-[#086FFD]
                      px-5
                      py-3
                      text-xs
                      font-bold
                      text-white
                      shadow-[0_8px_20px_rgba(8,111,253,0.25)]
                      transition-all

                      hover:bg-[#075ed6]

                      sm:flex-none
                    "
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          ANIMATIONS
      ======================================================== */}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

/* ============================================================
   COOKIE OPTION
============================================================ */

function CookieOption({
  icon: Icon,
  title,
  description,
  enabled,
  locked = false,
  onToggle,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        transition-all
        duration-300

        hover:border-[#086FFD]/25
        hover:bg-white/[0.07]
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-3
        "
      >
        {/* Icon */}

        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            bg-[#086FFD]/15
            text-[#5da0ff]
          "
        >
          <Icon size={17} />
        </div>

        {/* Toggle */}

        <button
          type="button"
          disabled={locked}
          onClick={onToggle}
          className={`
            relative
            h-6
            w-11
            shrink-0
            rounded-full
            transition-colors
            duration-300

            ${
              enabled
                ? "bg-[#086FFD]"
                : "bg-white/15"
            }

            ${
              locked
                ? "cursor-not-allowed opacity-80"
                : "cursor-pointer"
            }
          `}
          aria-label={`Toggle ${title} cookies`}
          aria-pressed={enabled}
        >
          <span
            className={`
              absolute
              top-1
              h-4
              w-4
              rounded-full
              bg-white
              shadow-sm
              transition-transform
              duration-300

              ${
                enabled
                  ? "translate-x-6"
                  : "translate-x-1"
              }
            `}
          />
        </button>
      </div>

      {/* Title */}

      <h3
        className="
          mt-4
          text-sm
          font-semibold
          text-white
        "
      >
        {title}

        {locked && (
          <span
            className="
              ml-2
              rounded-full
              bg-white/10
              px-2
              py-0.5
              text-[8px]
              font-bold
              uppercase
              tracking-wider
              text-white/40
            "
          >
            Always On
          </span>
        )}
      </h3>

      {/* Description */}

      <p
        className="
          mt-1.5
          text-[11px]
          leading-5
          text-white/50
        "
      >
        {description}
      </p>
    </div>
  );
}

export default CookieConsent;