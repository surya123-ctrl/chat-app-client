import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="Chat-BubbleImage"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-pink-500">Hello Baby!</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:34
      </div>
    </div>
  );
};

export default Message;