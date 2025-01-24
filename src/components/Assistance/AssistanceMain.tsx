import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosCloseCircle } from "react-icons/io";
import { SiCircuitverse } from "react-icons/si";
import MessageMain from "./AssistanceComponent/MessageMain/MessageMain";

interface AssistanceMainProp {
  secretKey: string;
  containerStyle: Record<string, string | number>;
}

const AssistanceMain = ({ secretKey, containerStyle }: AssistanceMainProp) => {
  const [modal, showModal] = useState(false);
  return (
    <>
      {!modal && (
        <div
          className={` overflow-hidden`}
          onClick={() => showModal(true)}
          style={containerStyle}
        >
          <p className=" bg-orange-400 rounded-full  overflow-hidden h-12 w-12 flex justify-center items-center">
            <SiCircuitverse color="red" size={40} />
          </p>
        </div>
      )}

      {modal && (
        <div
          className={`h-[60vh] md:h-[75vh] w-72 md:w-96 flex-row mb-10 md:mb-4`}
          style={containerStyle}
        >
          <div className="flex justify-end mb-1">
            <IoIosCloseCircle
              color="red"
              size={30}
              onClick={() => showModal(false)}
            />
          </div>
          <div className="flex flex-col border border-slate-300 rounded-xl h-[58vh] md:h-[71vh] overflow-hidden ">
            <div className="flex bg-green-500 p-2 items-center space-x-2">
              <div>
                <IoIosArrowBack color="white" size={25} />
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
            <MessageMain secretKey={secretKey} />
          </div>
        </div>
      )}
    </>
  );
};

export default AssistanceMain;
