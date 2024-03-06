import toast from "react-hot-toast";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import useConversations from "../zustand/useConversations";
const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();

    const authUser = useContext(AuthContext);
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            console.log('AuthUser in getMessage : ', authUser.authUser.token)
            console.log('Message in getMessage1 : ', messages);
            console.log('Selected Conversation :', selectedConversation)
            try {
                const response = await axios.get(`http://localhost:8000/api/message/${selectedConversation._id}`, {
                    headers: {
                        Authorization: `Bearer ${authUser.authUser.token}`
                    }
                })
                console.log('Response in getMessage3 : ', response);
                setMessages(response.data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages])
    console.log('Message in getMessage2 : ', messages);
    return [loading, messages];
}
export default useGetMessages;
// how to update react snapshot here import { create } from "zustand";

// const useConversations = create((set) => ({
//     selectedConversation: null,
//     setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
//     messages: [],
//     setMessages: (messages) => set({ messages }),
// }));
  
// export default useConversations;    try {
//                 const response = await axios.get(`http://localhost:8000/api/message/${selectedConversation._id}`, {
//                     headers: {
//                         Authorization: `Bearer ${authUser.authUser.token}`
//                     }
//                 })
//                 console.log('Response in getMessage3 : ', response);
//                 setMessages(response.data);
//                 console.log('Message in getMessage2 : ', messages);
//             }  how to solvw this. react snapshot is not being updated