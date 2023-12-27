import PropTypes from "prop-types";
import Ellipse from "../icons/Ellipse";

const BestChoiceItem = ({ icon, title, description, link }) => {
  return (
    <div className="___WE-SERVE__best-choice-item group/best-choice-item relative flex flex-[1_0_0] flex-col gap-[30px] rounded-2xl bg-white py-[30px] pl-6 pr-5 transition-all duration-300 hover:bg-[#080C2E]">
      <Ellipse className="invisible absolute right-3 top-0 group-hover/best-choice-item:visible " />
      {icon}
      <div className="flex flex-col gap-1 self-stretch">
        <div className="font-poppins text-[22px] font-bold leading-normal text-[#080C2E] group-hover/best-choice-item:text-white">
          {title}
        </div>
        <p className="font-poppins text-base font-medium leading-5 text-[#5D5D7C] group-hover/best-choice-item:text-[#8D90A8]">
          {description}
        </p>
      </div>
      <a
        className="font-poppins text-base font-semibold leading-normal text-[#640EF1] group-hover/best-choice-item:text-white"
        href={link}
      >
        Learn More
      </a>
    </div>
  );
};

BestChoiceItem.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default BestChoiceItem;
