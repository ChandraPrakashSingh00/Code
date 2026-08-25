import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const phoneNumber = "918920480415";

  const message = encodeURIComponent(
    "Hello CodeCPS Technologies, I would like to know more about your services."
  );

  return (
    <div className="fixed bottom-5 left-5 z-50 sm:bottom-6 sm:left-6">

      {/* =====================================================
          OUTER PULSE RINGS
      ===================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-[#25D366]/30
          animate-[whatsappPulse_2.2s_ease-out_infinite]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-[#25D366]/20
          animate-[whatsappPulse_2.2s_ease-out_0.7s_infinite]
        "
      />

      {/* =====================================================
          WHATSAPP BUTTON
      ===================================================== */}

      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CodeCPS Technologies on WhatsApp"
        className="
          group
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white

          shadow-[0_10px_30px_rgba(37,211,102,0.30)]

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1
          hover:scale-110
          hover:bg-[#20c963]
          hover:shadow-[0_15px_40px_rgba(37,211,102,0.45)]

          active:scale-95

          sm:h-14
          sm:w-14
        "
      >

        {/* =================================================
            ICON
        ================================================= */}

        <MessageCircle
          size={27}
          strokeWidth={2.2}
          className="
            relative
            z-10
            transition-all
            duration-500
            ease-out

            group-hover:scale-110
            group-hover:rotate-[-10deg]
          "
        />

        {/* =================================================
            ONLINE DOT
        ================================================= */}

        <span
          className="
            absolute
            right-0
            top-0
            z-20
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-white
            bg-[#25D366]

            shadow-[0_0_0_3px_rgba(37,211,102,0.20)]

            animate-[statusPulse_1.8s_ease-in-out_infinite]
          "
        />

        {/* =================================================
            SHINE EFFECT
        ================================================= */}

        <span
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
            rounded-full
          "
        >
          <span
            className="
              absolute
              -left-10
              top-0
              h-full
              w-8
              rotate-[25deg]
              bg-white/30
              blur-sm

              transition-all
              duration-700

              group-hover:left-[110%]
            "
          />
        </span>

      </a>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ===================================================== */}

      <style>
        {`
          @keyframes whatsappPulse {
            0% {
              transform: scale(1);
              opacity: 0.55;
            }

            70% {
              transform: scale(1.65);
              opacity: 0;
            }

            100% {
              transform: scale(1.65);
              opacity: 0;
            }
          }

          @keyframes statusPulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }

            50% {
              transform: scale(1.18);
              opacity: 0.75;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default WhatsAppButton;