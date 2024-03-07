import { useState, useContext } from "react";
import toast from "react-hot-toast";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import useConversations from "../zustand/useConversations";
const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();
    const authUser = useContext(AuthContext);
    // console.log(authUser.authUser.token);
    const sendMessage = async (message) => {
        // console.log(message);
        setLoading(true);
        try {
            // console.log(`SelectedConversationId : `, selectedConversation._id)
            const response = await axios.post(`https://chat-app-server-qa7y.onrender.com/api/message/send/${selectedConversation._id}`, { message }, {
                headers: {
                    Authorization: `Bearer ${authUser.authUser.token}`
                }
            });
            // console.log("Response : ", response.data.newMessage);
            setMessages([...messages, response.data.newMessage]);
            toast.success(response.data.message)
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }
    return [loading, sendMessage];
}
export default useSendMessage;