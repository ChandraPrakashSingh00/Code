function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  position,
  delay = "0s",
}) {
  return (
    <div
      className={`
        floating-card
        absolute
        z-30
        flex
        items-center
        gap-1.5
        rounded-lg
        border
        border-slate-200
        bg-white
        px-2
        py-1.5
        shadow-[0_10px_28px_rgba(15,23,42,0.08)]
        backdrop-blur-md

        sm:gap-2
        sm:rounded-xl
        sm:px-2.5
        sm:py-2

        md:gap-2.5
        md:px-3
        md:py-2.5

        ${position}
      `}
      style={{
        animationDelay: delay,
      }}
    >
      {/* =====================================================
          ICON
      ===================================================== */}

      <div
        className="
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-md
          bg-[#086FFD]/10
          text-[#086FFD]

          sm:h-7
          sm:w-7
          sm:rounded-lg

          md:h-8
          md:w-8
        "
      >
        <Icon
          size={12}
          className="
            sm:hidden
          "
        />

        <Icon
          size={14}
          className="
            hidden
            sm:block
            md:hidden
          "
        />

        <Icon
          size={16}
          className="
            hidden
            md:block
          "
        />
      </div>


      {/* =====================================================
          TEXT
      ===================================================== */}

      <div className="min-w-0 leading-tight">

        <div
          className="
            whitespace-nowrap
            text-[8px]
            font-bold
            text-slate-900

            sm:text-[9px]

            md:text-[11px]
          "
        >
          {title}
        </div>

        <div
          className="
            mt-0.5
            whitespace-nowrap
            text-[6px]
            text-slate-400

            sm:text-[7px]

            md:text-[9px]
          "
        >
          {subtitle}
        </div>

      </div>

    </div>
  );
}

export default FloatingCard;