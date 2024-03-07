import { useContext, useEffect } from "react"
import { SocketContext } from "../context/SocketContext"
import useConversations from "../zustand/useConversations";
import notificationSound from '../assets/sounds/frontend_src_assets_sounds_notification.mp3'
const useListenMessages = () => {
    const { socket } = useContext(SocketContext);
    const { messages, setMessages } = useConversations();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        })
        return () => socket.off("newMessage");
    }, [socket, setMessages, messages]);
}

export default useListenMessages
