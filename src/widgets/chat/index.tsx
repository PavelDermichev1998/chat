import React from "react";
import style from "./chat.module.scss";
import MessageList from "../../entity/message-list";
import MessageInput from "../../features/message-input";
import { useChat } from "./model/use-chat";


const Chat = () => {
    const { messages, sendMessage } = useChat();

    return (
        <div className={style.container}>
            <div className={style.messages}>
                <MessageList messages={messages} />
            </div>
            <div className={style.messageInput}>
                <MessageInput sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;