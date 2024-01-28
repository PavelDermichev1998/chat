import React from "react";
import style from "./MessageList.module.scss";
import Message from "../message";
import { MessageType } from "../../shared/type/message.interface";

interface Props {
    messages: MessageType[];
}

const MessageList = ({ messages }: Props) => {
    return (
        <div className={style.messageList}>
            {messages.map((message, index) => (
                <Message
                    key={index}
                    text={message.text}
                    type={message.type}
                />
            ))}
        </div>
    );
};

export default MessageList;