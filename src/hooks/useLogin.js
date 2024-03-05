import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const authUser = useContext(AuthContext);
    // console.log(authUser.token);
    const login = async (userDetails) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:8000/api/auth/login`, userDetails)
            localStorage.setItem('chat-user', JSON.stringify(response.data));
            authUser.setAuthUser(response.data)
            // console.log('response after login', response.data);
            console.log('AuthUser after login', authUser);
            toast.success(response.data.message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred while signing up.");
            }
        } finally {
            setLoading(false);
        }
    }
    return [loading, login]
}
export default useLogin;