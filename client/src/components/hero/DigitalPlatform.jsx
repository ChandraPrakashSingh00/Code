function DigitalPlatform() {
  return (
    <div
      className="
        digital-platform
        pointer-events-none
        absolute
        left-1/2
        top-[84%]
        h-[90px]
        w-full
        -translate-x-1/2
        -translate-y-1/2

        xs:top-[85%]

        sm:top-[84%]
        sm:h-[120px]

        md:top-[82%]
        md:h-[150px]

        lg:top-[80%]
        lg:h-[165px]

        xl:h-[180px]
      "
    >

      {/* =====================================================
          SOFT BLUE GLOW
      ===================================================== */}

      <div
        className="
          platform-glow
          absolute
          left-1/2
          top-1/2
          h-16
          w-[150px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#086FFD]/10
          blur-[30px]

          sm:h-24
          sm:w-[260px]
          sm:blur-[45px]

          md:h-28
          md:w-[340px]
          md:blur-[55px]

          lg:h-32
          lg:w-[400px]
          lg:blur-[60px]

          xl:w-[430px]
        "
      />


      {/* =====================================================
          OUTER RING
      ===================================================== */}

      <div
        className="
          platform-ring
          absolute
          left-1/2
          top-1/2
          h-8
          w-[130px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-[#086FFD]/20
          bg-[#086FFD]/[0.015]

          sm:h-12
          sm:w-[270px]

          md:h-16
          md:w-[350px]

          lg:h-20
          lg:w-[420px]

          xl:h-24
          xl:w-[470px]
        "
      />


      {/* =====================================================
          MOVING DASHED RING
      ===================================================== */}

      <div
        className="
          platform-ring-moving
          absolute
          left-1/2
          top-1/2
          h-10
          w-[145px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-dashed
          border-[#086FFD]/15

          sm:h-16
          sm:w-[290px]

          md:h-20
          md:w-[370px]

          lg:h-24
          lg:w-[440px]

          xl:h-28
          xl:w-[490px]
        "
      />


      {/* =====================================================
          INNER PULSE
      ===================================================== */}

      <div
        className="
          platform-pulse
          absolute
          left-1/2
          top-1/2
          h-5
          w-[80px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-[#086FFD]/30
          bg-[#086FFD]/5

          sm:h-8
          sm:w-[150px]

          md:h-10
          md:w-[200px]

          lg:h-12
          lg:w-[235px]

          xl:h-14
          xl:w-[260px]
        "
      />


      {/* =====================================================
          CORE
      ===================================================== */}

      <div
        className="
          platform-core
          absolute
          left-1/2
          top-1/2
          h-1.5
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#086FFD]
          shadow-[0_0_12px_rgba(8,111,253,0.45)]

          sm:h-2
          sm:w-2

          md:h-2.5
          md:w-2.5

          lg:h-3
          lg:w-3
        "
      />


      {/* =====================================================
          ENERGY BEAM
      ===================================================== */}

      <div
        className="
          energy-beam
          absolute
          bottom-[-4px]
          left-1/2
          h-10
          w-[1px]
          -translate-x-1/2
          bg-gradient-to-t
          from-transparent
          via-[#086FFD]/25
          to-transparent

          sm:h-14

          md:h-18

          lg:h-20
        "
      />


      {/* =====================================================
          HORIZONTAL LIGHT
      ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-[150px]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#086FFD]/15
          to-transparent

          sm:w-[300px]

          md:w-[450px]

          lg:w-[560px]

          xl:w-[650px]
        "
      />

    </div>
  );
}

export default DigitalPlatform;