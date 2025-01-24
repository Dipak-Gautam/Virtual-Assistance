import { useEffect, useRef, useState } from "react";
import backgroundImage2 from "../asset/OIP.jpg";
import { IoMdSend } from "react-icons/io";
import apiCall from "../apiCall/apiCall";
import SendReceiveText from "./MessageComponents/SendReceiveText";
import SendMessage from "./MessageComponents/SendMessage";

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
          <SendReceiveText conversation={conversion} />
        </div>
        <div className="text-black text-xs w-full my-1 px-5 text-left">
          typing....
        </div>
        <SendMessage
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          input={input}
        />
      </div>
    </div>
  );
};

export default MessageMain;
