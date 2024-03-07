import { useContext, useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const authUser = useContext(AuthContext);
    const logout = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`https://chat-app-server-qa7y.onrender.com/api/auth/logout`)
            if (response.error) throw response.error;
            localStorage.removeItem('chat-user');
            authUser.setAuthUser(null);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }
    return [loading, logout];
}
export default useLogout;