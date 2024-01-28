import React from "react";
import style from "./Message.module.scss";

interface Props {
    text: string;
    type: "sent" | "get";
}

const Message = ({ text, type }: Props) => {
    return (
        <div className={type === 'sent' ? style.messageSent : style.messageGet}>
            <p>{text}</p>
        </div>
    );
};

export default Message;