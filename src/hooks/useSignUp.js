import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import axios from 'axios';
// import { AuthContext } from "../context/AuthContext";
const useSignUp = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    // const authUser = useContext(AuthContext);
    const signUp = async (userDetails) => {
        const success = await handleInputErrors(userDetails);
        if (!success) return {};
        setLoading(true);
        try {
            const response = await axios.post(`https://chat-app-server-qa7y.onrender.com/api/auth/signup`,
                userDetails
            );
            toast.success(response.data.message);
            localStorage.setItem('chat-user', JSON.stringify(response.data))
            // authUser.setAuthUser(response.data);
            // console.log('AuthUser after signing', { authUser });
            navigate('/');
        } catch (error) {
            console.error("Error:", error);
            console.log(error.response);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred while signing up.");
            }
        } finally {
            setLoading(false);
        }
    }
    return { loading, signUp };
}
export default useSignUp;

const handleInputErrors = async (userDetails) => {
    if (!userDetails.fullName || !userDetails.username || !userDetails.password || !userDetails.confirmPassword || !userDetails.gender) {
        toast.error('Please fill in details');
        return false;
    }
    if (userDetails.password !== userDetails.confirmPassword) {
        toast.error('Password does not match');
        return false;
    }
    if (userDetails.password.length < 8) {
        toast.error('Password must be at least 8 characters');
        return false;
    }

    return true;
}