import React from "react";
// const useConversations = require("../zustand/useConversations");
import useConversations from "../zustand/useConversations";
const Conversation = ({ conversation, emoji, lastIndex }) => {
  // console.log(props.conversation._id);
  const { selectedConversation, setSelectedConversation } = useConversations();
  const isSelected = selectedConversation?._id === conversation._id;
  // console.log("isSelected ", isSelected);
  // const handelSetSelectedConversation = () => {
  //   console.log("Conversation Clicked : ", conversation);

  //   setSelectedConversation(conversation);
  //   console.log("selectedConv : ", selectedConversation);
  // };
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-pink-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-pink-500" : ""}`}
        onClick={() => {
          setSelectedConversation(conversation);
          console.log("Selected conversation", selectedConversation);
        }}
      >
        <div className="avatar online">
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
