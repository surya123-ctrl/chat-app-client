import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useConversations from "../zustand/useConversations";
import { extractTime } from "../utils/extractTime";

const Message = ({ message }) => {
  console.log("Message : ", message);

  const authUser = useContext(AuthContext);
  console.log("AuthUser : ", authUser.authUser._id);
  console.log("Receiver : ", message._id);
  const { selectedConversation } = useConversations();
  const fromMe = message.senderId === authUser.authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePicture = fromMe
    ? authUser.authUser.profilePicture
    : selectedConversation.profilePicture;
  const bubbleBgColor = fromMe ? "bg-pink-500" : "";
  const formattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePicture} alt="Chat-BubbleImage" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
