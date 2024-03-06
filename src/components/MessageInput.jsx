import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [loading, sendMessage] = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    console.log("Message sent successfully");
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 text-black"
          placeholder="Message..."
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner text-gray-900"></div>
          ) : (
            <BsSend className="text-gray-900" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
