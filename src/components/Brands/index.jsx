import { LogoIpsum } from "../LogoIpsum";

const Brands = () => {
  return (
    <div className="___WE-SERVE__brands px-6 lg:mx-[72.5px]">
      <div className="flex flex-wrap items-center justify-center gap-[50px]">
        <div className="wow slideInRight">
          <LogoIpsum />
        </div>
        <div className="wow slideInRight" data-wow-delay="0.2s">
          <LogoIpsum />
        </div>
        <div className="wow slideInRight" data-wow-delay="0.3s">
          <LogoIpsum />
        </div>
        <div className="wow slideInRight" data-wow-delay="0.4s">
          <LogoIpsum />
        </div>
        <div className="wow slideInRight" data-wow-delay="0.5s">
          <LogoIpsum />
        </div>
      </div>
    </div>
  );
};

export default Brands;
