import s from "../Messages.module.css";
import React from "react";
import Message from "./Message/Message";
import MessageInput from "./MessageInput/MessageInput";

const MessagesList = (props) => {

    let messages = props.messages.map(m =>
        <Message message={m.message}/>
    );

    return (
        <div className={s.messages}>
            <ul>
                {
                    messages
                }
            </ul>

            <MessageInput placeholder={"Enter message"}/>
        </div>
    );
}

export default MessagesList;