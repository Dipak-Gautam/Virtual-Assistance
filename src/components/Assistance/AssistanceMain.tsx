import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { SiCircuitverse } from "react-icons/si";
import MessageMain from "./AssistanceComponent/MessageMain/MessageMain";
import AssistanceBanner from "./AssistanceComponent/Banner/AssistanceBanner";
import { SlClose } from "react-icons/sl";

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
          <div className="flex justify-end mb-2">
            <SlClose
              color="red"
              onClick={() => showModal(false)}
              className="shadow-sm shadow-white/50 bg-transparent rounded-full text-2xl hover:border hover:border-black"
            />
          </div>
          <div className="flex flex-col border border-slate-300 rounded-xl h-[58vh] md:h-[71vh] overflow-hidden ">
            <AssistanceBanner showModal={showModal} />
            <MessageMain secretKey={secretKey} />
          </div>
        </div>
      )}
    </>
  );
};

export default AssistanceMain;
