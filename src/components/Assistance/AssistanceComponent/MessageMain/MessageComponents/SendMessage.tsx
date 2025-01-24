import React from "react";
import { IoMdSend } from "react-icons/io";

interface SendMessageProp {
  input: React.RefObject<HTMLTextAreaElement>;
  handleInput: () => void;
  handleSubmit: () => void;
}

const SendMessage = ({ input, handleInput, handleSubmit }: SendMessageProp) => {
  return (
    <div className=" mb-1 md:mb-2  w-full px-3 flex justify-between space-x-2 ">
      <textarea
        ref={input}
        className="border border-slate-300 rounded-xl  w-full text-black text-base p-2 bg-white"
        style={{
          overflowY: "hidden",
          resize: "none",
          lineHeight: "1.5",
        }}
        rows={1}
        onInput={handleInput}
      />
      <div
        className="bg-green-500 rounded-full p-1 w-12 h-10 flex justify-center items-center pl-2"
        onClick={() => handleSubmit()}
      >
        <IoMdSend color="white" size={25} />
      </div>
    </div>
  );
};

export default SendMessage;
