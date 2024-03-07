import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversations from "../zustand/useConversations";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversations();
  const [loading, conversations] = useGetConversations();
  // console.log("Conversations from search : ", conversations);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("Search should be at least 3 characters");
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error(`${search} is not available`);
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full text-black"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-pink-500 text-white">
        <IoSearchSharp />
      </button>
    </form>
  );
};

export default SearchInput;
