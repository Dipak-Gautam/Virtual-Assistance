import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

interface AssistanceBannerProp {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AssistanceBanner = ({ showModal }: AssistanceBannerProp) => {
  return (
    <div className="flex bg-green-500 p-2 items-center space-x-2">
      <div>
        <IoIosArrowBack
          color="white"
          size={25}
          onClick={() => showModal(false)}
        />
      </div>
      <div className="flex space-x-2">
        <div className=" bg-white rounded-lg justify-center items-center px-1 pt-1.5">
          <FaRegUserCircle color="green" size={25} />
        </div>
        <div className="font-serif text-lg leading-none">
          <p className="text-base">Kp Ba</p>
          <p className="text-xs -mt-1">Ai Assistance </p>
        </div>
      </div>
    </div>
  );
};

export default AssistanceBanner;
