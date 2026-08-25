import { BrainCircuit, Cloud, Code2, MonitorSmartphone } from "lucide-react";
import DigitalPlatform from "./DigitalPlatform";
import CodeDashboard from "./CodeDashboard";
import FloatingCard from "./FloatingCard";

function HeroVisual() {
  return (
    <div className="hero-visual relative mx-auto h-[430px] w-full max-w-[680px] sm:h-[500px] md:h-[530px] lg:h-[550px]">

      <DigitalPlatform />

      {/* Dashboard */}

      <div className="absolute left-1/2 top-[49%] z-20 w-[94%] -translate-x-1/2 -translate-y-1/2 sm:w-[88%] md:w-[84%] lg:w-[78%]">
        <CodeDashboard />
      </div>

      {/* Floating Cards */}

      <FloatingCard
        icon={Code2}
        title="Web"
        subtitle="Development"
        position="left-0 top-1 sm:left-0 sm:top-7"
        delay="0s"
      />

      <FloatingCard
        icon={BrainCircuit}
        title="AI & ML"
        subtitle="Solutions"
        position="right-0 top-1 sm:right-0 sm:top-7"
        delay="1s"
      />

      <FloatingCard
        icon={Cloud}
        title="Cloud"
        subtitle="Infrastructure"
        position="bottom-7 left-0 sm:bottom-10 sm:left-0"
        delay="0.5s"
      />

      <FloatingCard
        icon={MonitorSmartphone}
        title="Mobile"
        subtitle="Applications"
        position="bottom-7 right-0 sm:bottom-10 sm:right-0"
        delay="1.5s"
      />

    </div>
  );
}

export default HeroVisual;
