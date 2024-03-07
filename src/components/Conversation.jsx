import React, { useContext } from "react";
// const useConversations = require("../zustand/useConversations");
import useConversations from "../zustand/useConversations";
import { SocketContext } from "../context/SocketContext";
const Conversation = ({ conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversations();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useContext(SocketContext);
  const isOnline = onlineUsers.includes(conversation._id);
  // console.log("Online Users in Conversation", onlineUsers);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-pink-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-pink-500" : ""}`}
        onClick={() => {
          setSelectedConversation(conversation);
          // console.log("Selected conversation", selectedConversation);
        }}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full ">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="font-bold text-gray-300">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-0.5 bg-white" />}
    </>
  );
};

export default Conversation;
