import { ComputerDesktopIcon } from "@heroicons/react/20/solid";

import ImgStrongEcosystem from "../../assets/images/strong-ecosystem.png";
import CloudAdd from "../icons/CloudAdd";
import CpuCharge from "../icons/CpuCharge";
import Health from "../icons/Health";

export default function StrongEcosystem() {
  return (
    <div className="___WE-SERVE__strong-ecosystem relative isolate overflow-hidden">
      <div className="mx-auto w-full max-w-7xl items-center gap-[70px] px-6 lg:flex lg:px-8">
        <div className="wow slideInLeft flex max-w-2xl lg:ml-0 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-sm xl:max-w-none">
            <img src={ImgStrongEcosystem} alt="App screenshot" />
          </div>
        </div>
        <div className="wow slideInRight mt-16 flex max-w-2xl flex-col gap-10 md:mt-0 lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <div className="flex flex-col gap-[10px]">
            <h1 className="max-w-[425px] font-clashDisplay text-[46px] font-semibold leading-normal text-[#080C2E]">
              We Have Very Strong Ecosystem
            </h1>
            <p className="max-w-[432px] text-lg leading-8 text-gray-600">
              We provide a variety of servers to grow your users acquisition
              much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-5">
            <div className="flex gap-4 rounded-2xl bg-white p-4 hover:shadow-md">
              <Health className="h-[46px] w-[46px]" />
              <div className="flex flex-[1_0_0] flex-col gap-[2px]">
                <div className="font-poppins text-[22px] font-bold leading-6 text-[#080C2E]">
                  $880 Mio
                </div>
                <p className="font-poppins text-base font-medium leading-normal text-[#5D5D7C]">
                  Company budget saved
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white p-4 hover:shadow-md">
              <CpuCharge className="h-[46px] w-[46px] stroke-violet-700" />
              <div className="flex flex-[1_0_0] flex-col gap-[2px]">
                <div className="font-poppins text-[22px] font-bold leading-6 text-[#080C2E]">
                  450,392
                </div>
                <p className="font-poppins text-base font-medium leading-normal text-[#5D5D7C]">
                  All servers available
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white p-4 hover:shadow-md">
              <CloudAdd className="h-[46px] w-[46px]" />
              <div className="flex flex-[1_0_0] flex-col gap-[2px]">
                <div className="font-poppins text-[22px] font-bold leading-6 text-[#080C2E]">
                  189 Mio
                </div>
                <p className="font-poppins text-base font-medium leading-normal text-[#5D5D7C]">
                  Websites are running good
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-indigo-600 px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore More
            </a>
            <a
              href="#"
              className="flex items-center gap-[6px] text-sm font-semibold leading-6 text-[#640EF1]"
            >
              <ComputerDesktopIcon className="h-6 w-6" />
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
