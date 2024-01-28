import { useEffect, useState } from "react";
import { MessageType } from "../../../shared/type/message.interface";
import io from "socket.io-client";

export const useChat = () => {
    const socket = io("http://localhost:3000");
    const [messages, setMessages] = useState<MessageType[]>([{text: 'Hello', type: 'get'}]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages((prevMessages: MessageType[]) => [...prevMessages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = (text: string) => {
        const message: MessageType = { text, type: "sent" };
        socket.emit("message", message);
        setMessages((prevMessages: MessageType[]) => [...prevMessages, message]);
        setMessages((prevMessages: MessageType[]) => [...prevMessages, { text: "Some message", type: "get" }]);
    };

    return {
        messages,
        sendMessage,
    }
}