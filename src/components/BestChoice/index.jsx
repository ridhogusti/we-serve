import BestChoiceItem from "./Item";

import Cube from "../icons/Cube";
import HierarchySquare from "../icons/HierarchySquare";
import StatusUp from "../icons/StatusUp";
import DriverRefresh from "../icons/DriverRefresh";

const BestChoice = () => {
  return (
    <div className="___WE-SERVE__best-choice px-6 xl:mx-[72.5px]">
      <div className="flex flex-wrap items-center justify-center gap-[30px]">
        <h3 className="text-center font-clashDisplay text-[46px] font-semibold leading-[normal] text-[#080C2E]">
          Your Best Choice
        </h3>
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {dataBestChoice.map((item, index) => (
            <BestChoiceItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestChoice;

const dataBestChoice = [
  {
    icon: (
      <HierarchySquare className="stroke-[#640EF1] group-hover/best-choice-item:stroke-white" />
    ),
    title: "Extra Layers",
    description: "Making your project more secure avoiding DDoS",
    link: "#",
  },
  {
    icon: (
      <Cube className="stroke-[#640EF1] group-hover/best-choice-item:stroke-white" />
    ),
    title: "Customizable",
    description: "Only install what your business needs to grow",
    link: "#",
  },
  {
    icon: (
      <StatusUp className="stroke-[#640EF1] group-hover/best-choice-item:stroke-white" />
    ),
    title: "AI Automation",
    description: "Decide the business flow based on latest reports",
    link: "#",
  },
  {
    icon: (
      <DriverRefresh className="stroke-[#640EF1] group-hover/best-choice-item:stroke-white" />
    ),
    title: "Auto-Scaling",
    description: "Have a long weekend without worrying any loss",
    link: "#",
  },
];
