import { ComputerDesktopIcon, GlobeAltIcon } from "@heroicons/react/20/solid";

import ImgHero1 from "../../assets/images/hero-1.png";

export default function Hero() {
  return (
    <div className="___WE-SERVE__hero relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 xl:justify-between">
        <div className="wow slideInLeft mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <div className="mt-0 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="flex items-center gap-[6px] rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                <GlobeAltIcon className="h-6 w-6" />
                We host more than 120,000 websites
              </span>
            </a>
          </div>
          <h1 className="mt-10 font-clashDisplay text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Grow Online Business Faster.
          </h1>
          <p className="mt-6 max-w-[432px] text-lg leading-8 text-gray-600">
            We provide a variety of servers to grow your users acquisition much
            user-friendly and boosting up sales.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Try Free Trial
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
        <div className="wow slideInRight mt-16 flex max-w-2xl sm:mt-24 lg:ml-0 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-sm xl:max-w-none">
            <img src={ImgHero1} alt="App screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}
