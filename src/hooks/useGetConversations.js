import { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const authUser = useContext(AuthContext);
    console.log("AuthUser, in getConversations", authUser);
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8000/api/users', {
                    headers: {
                        Authorization: `Bearer ${authUser.authUser.token}`,
                    }
                });
                console.log("Response of Conversations: ", response);
                setConversations(response.data);
            } catch (error) {
                console.log("Hello ", error)
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getConversations();
    }, [])
    return [loading, conversations];
}
export default useGetConversations;