import ImageShowcase1 from "../../assets/images/showcase-1.png";
import ImageShowcase2 from "../../assets/images/showcase-2.png";
import ImageShowcase3 from "../../assets/images/showcase-3.png";

const OurShowCase = () => {
  return (
    <div className="___WE-SERVE__our-showcase">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-clashDisplay text-[46px] font-semibold leading-normal text-[#080C2E]">
            Our Showcase
          </h3>
          <p className="max-w-[537px] text-center font-poppins text-base font-medium leading-8 text-[#5D5D7C]">
            They built amazing website to help more people around the world by
            using our recommendation services and products
          </p>
        </div>
        <div className="flex gap-10 overflow-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
          {[
            ImageShowcase1,
            ImageShowcase2,
            ImageShowcase3,
            ImageShowcase1,
            ImageShowcase2,
            ImageShowcase3,
          ].map((image, index) => (
            <div
              key={index}
              className="group/image-showcase relative rounded-2xl border-4 border-transparent transition-all hover:border-[#640EF1]"
            >
              <img
                className="h-[180px] w-[250px] sm:h-[220px] max-w-none rounded-2xl object-cover md:w-[350px]"
                src={image}
                alt=""
              />
              <button
                type="button"
                className="invisible absolute bottom-0 left-1/2 -translate-x-1/2 transform rounded-full bg-[#640EF1] px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:[box-shadow:0px_8px_30px_0px_rgba(100,_14,_241,_0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#640EF1] group-hover/image-showcase:visible group-hover/image-showcase:bottom-8"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurShowCase;
