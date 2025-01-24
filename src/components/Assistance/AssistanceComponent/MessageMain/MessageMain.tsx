import { useEffect, useRef, useState } from "react";
import backgroundImage2 from "../asset/OIP.jpg";
import { IoMdSend } from "react-icons/io";
import apiCall from "../apiCall/apiCall";

export interface IData {
  data: string | null;
  type: "Question" | "Response";
}

interface MessageProp {
  secretKey: string;
}

const initialData: IData[] = [
  {
    data: "hi i am your personal assistance",
    type: "Response",
  },
  {
    data: "tell me how can i help you",
    type: "Response",
  },
];

const MessageMain = ({ secretKey }: MessageProp) => {
  const input = useRef<HTMLTextAreaElement>(null);
  const messageContainer = useRef<HTMLDivElement>(null);
  const [conversion, setConversion] = useState<IData[]>(initialData);
  const [prevQuestion, setPrevQuestion] = useState<string | null>("");

  const handleInput = () => {
    const textarea = input.current;
    if (textarea == null) return;
    textarea.style.height = "auto";
    const maxHeight = parseInt(getComputedStyle(textarea).lineHeight, 10) * 3;
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  };

  const handleSubmit = () => {
    if (input.current == null || input.current.value == "") return;
    const temp: IData = {
      data: input.current.value,
      type: "Question",
    };
    input.current.value = "";
    setConversion((currentData) => [...currentData, temp]);
    const textarea = input.current;
    if (textarea == null) return;
    textarea.style.height = "auto";
    apiCall(secretKey, temp, prevQuestion, setPrevQuestion, setConversion);
  };

  useEffect(() => {
    if (messageContainer.current) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
  }, [conversion]);
  console.log("conversation : ", conversion);

  return (
    <div
      className=" flex-1 bg-white  "
      style={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: "cover",
      }}
    >
      <div className=" flex flex-col h-full border ">
        <div
          ref={messageContainer}
          className="w-full h-[90%] max-h-[90%] overflow-y-auto custom-scrollbar"
          style={{
            flexGrow: 1,
            overflowY: "auto",
            maxHeight: "calc(75vh - 157px)",
          }}
        >
          <style>
            {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, 0.6);
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-button {
            display: none;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 0, 0, 0.4) transparent;
          }
        `}
          </style>
          {conversion.map((item: IData) => (
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
        </div>
        <div className="text-black text-xs w-full my-1 px-2">typing....</div>
        <div className=" mb-1 md:mb-0  w-full px-3 flex justify-between space-x-2 ">
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
      </div>
    </div>
  );
};

export default MessageMain;
