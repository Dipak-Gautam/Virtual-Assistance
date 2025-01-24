import React from "react";
import { IData } from "../MessageMain";
interface TextProp {
  conversation: IData[];
}

const SendReceiveText = ({ conversation }: TextProp) => {
  return (
    <>
      {conversation.map((item: IData) => (
        <div
          className={` w-full flex my-3 px-2  ${
            item.type == "Question" && "justify-end"
          }`}
        >
          <p
            className={`text-black p-1 px-2 text-base max-w-[80%] break-words ${
              item.type == "Question" ? "bg-green-300" : "bg-gray-300  "
            } rounded-xl  leading-5`}
          >
            {item.data}
          </p>
        </div>
      ))}
    </>
  );
};

export default SendReceiveText;
