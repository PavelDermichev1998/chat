import { FormEvent, useState } from "react";
import { MessageInputProps } from "../type/index.interface";

export const useMessageInput = ({ sendMessage }: MessageInputProps) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        message && sendMessage(message);
        setMessage("");
    };

    return {
        handleSubmit,
        message,
        setMessage
    }
}