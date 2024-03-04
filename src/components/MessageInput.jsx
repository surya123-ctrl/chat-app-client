import React from "react";
import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 text-black"
          placeholder="Message..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend className="text-gray-900" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
