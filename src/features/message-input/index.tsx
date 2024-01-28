import React from "react";
import style from "./MessageInput.module.scss";
import { useMessageInput } from "./model/use-message-input";
import { MessageInputProps } from "./type/index.interface";



const MessageInput = ({ sendMessage }: MessageInputProps) => {
  const {
      handleSubmit,
      message,
      setMessage,
  } = useMessageInput({sendMessage});

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input
                className={style.input}
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder='Enter message...'
            />
            <button type="submit" className={style.button}>Send</button>
        </form>
    );
};

export default MessageInput;