import { ComputerDesktopIcon, GlobeAltIcon } from "@heroicons/react/20/solid";

import CpuCharge from "../icons/CpuCharge";
import Ellipse from "../icons/Ellipse";
import Scroll from "../icons/Scroll";
import StatusUp from "../icons/StatusUp";

const CtaSection = () => {
  return (
    <div className="___WE-SERVE__cta-section relative">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="flex w-full flex-col items-center gap-[60px] rounded-[40px] bg-[#640EF1] p-[50px] lg:flex-row">
          <div className="flex w-full flex-col items-start gap-10 lg:w-6/12">
            <a href="#" className="flex space-x-6">
              <span className="flex items-center gap-[6px] rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                <GlobeAltIcon className="h-6 w-6" />
                We host more than 120,000 websites
              </span>
            </a>
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-clashDisplay text-[46px] font-semibold text-white">
                Start Growing Today
              </h2>
              <p className="font-poppins text-base font-medium leading-loose text-white">
                We provide a variety of servers to grow your users
                <br />
                acquisition much user-friendly and boosting up sales.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <button className="flex items-center justify-start gap-2.5 rounded-[100px] bg-amber-300 px-10 py-4 hover:bg-amber-400">
                <div className="font-poppins text-lg font-bold text-slate-900">
                  Explore More
                </div>
              </button>
              <button className="flex items-center justify-start gap-1.5">
                <ComputerDesktopIcon className="h-6 w-6 text-white" />
                <div className="font-poppins text-base font-semibold text-white">
                  Schedule a Demo
                </div>
              </button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:w-6/12 lg:grid-cols-2 xl:grid-cols-3">
            {list.map((item, index) => (
              <div
                key={index}
                className="group/feature relative inline-flex flex-col items-center justify-start gap-5 rounded-[26px] bg-white py-10 hover:bg-slate-900"
              >
                <Ellipse className="invisible absolute -top-8 right-2 z-[0] w-[87.69px] group-hover/feature:visible " />
                {item.icon}
                <div className="flex flex-col items-center justify-start gap-0.5 self-stretch">
                  <div className="self-stretch text-center font-poppins text-lg font-bold text-slate-900 group-hover/feature:text-white">
                    {item.title}
                  </div>
                  <a
                    href="#"
                    className="invisible font-poppins text-base font-semibold text-gray-400 group-hover/feature:visible"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

const list = [
  {
    icon: (
      <Scroll className="h-[46px] w-[46px] stroke-violet-700 group-hover/feature:stroke-white" />
    ),
    title: "Web Crawl",
  },
  {
    icon: (
      <StatusUp className="h-[46px] w-[46px] stroke-violet-700 group-hover/feature:stroke-white" />
    ),
    title: "Fast Report",
  },
  {
    icon: (
      <Scroll className="h-[46px] w-[46px] stroke-violet-700 group-hover/feature:stroke-white" />
    ),
    title: "Ant-DDoS",
  },
  {
    icon: (
      <Scroll className="h-[46px] w-[46px] stroke-violet-700 group-hover/feature:stroke-white" />
    ),
    title: "Auto-Scale",
  },
  {
    icon: (
      <CpuCharge className="h-[46px] w-[46px] stroke-violet-700 group-hover/feature:stroke-white" />
    ),
    title: "AI Perform",
  },
  {
    icon: (
      <Scroll className="h-[46px] w-[46px] stroke-violet-700 group-hover/feature:stroke-white" />
    ),
    title: "Top Plugins+",
  },
];
