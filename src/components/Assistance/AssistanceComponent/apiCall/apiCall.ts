import { Dispatch, SetStateAction } from "react";
import { IData } from "../MessageMain/MessageMain";

const apiCall = async (
  secretKey: string,
  data: IData,
  prevQuestion: string | null,
  setPrevQuestion: Dispatch<SetStateAction<string | null>>,
  setConversion: Dispatch<SetStateAction<IData[]>>
) => {
  console.log("hello from api call", secretKey, data, prevQuestion);
  const formData = {
    secretCode:
      "U2FsdGVkX1+vTJ0TEyvdQtOXrkQIY0KVGuyJhjBPref53SOUUfuqKOuWqjCjvuSqLQvA0mAGjn0HZeXXDFMsOa1EvPcm835bnYqt7UqrH6AbCiCYobS+mHDNRU7VaOhU",
    question: data.data,
    prevQuestion: prevQuestion,
  };
  const request = await fetch("http://localhost:3000/question/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const response = await request.json();
  if (request.status == 200) {
    console.log("response", response);
    setPrevQuestion(data.data);
    const tempData: IData = {
      data: response.response,
      type: "Response",
    };
    setConversion((currentData) => [...currentData, tempData]);
  }
};
export default apiCall;
