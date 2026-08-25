function TechnologyItem({ technology }) {
  const Icon = technology.icon;

  return (
    <div
      className="
        group
        flex
        shrink-0
        items-center
        gap-2
        px-3
        text-[15px]
        font-bold
        text-white
        transition-all
        duration-300

        sm:gap-2.5
        sm:px-5
        sm:text-[18px]

        md:px-6
        md:text-[20px]
      "
    >
      {/* Icon */}
      <Icon
        size={20}
        style={{ color: technology.color }}
        className="
          shrink-0
          transition-transform
          duration-300
          group-hover:scale-110

          sm:h-[22px]
          sm:w-[22px]

          md:h-6
          md:w-6
        "
      />

      {/* Name */}
      <span className="whitespace-nowrap">
        {technology.name}
      </span>

      {/* Separator */}
      <span className="ml-1 font-bold text-white/50">
        •
      </span>
    </div>
  );
}

export default TechnologyItem;
