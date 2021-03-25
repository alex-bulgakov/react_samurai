import s from "../Messages.module.css";
import React from "react";
import Message from "./Message/Message";
import MessageInputContainer from "./MessageInput/MessageInputContainer";

const MessagesList = (props) => {

    let messages = props.store.getState().dialogsPage.messages.map(m =>
        <Message message={m.message}/>
    );

    return (
        <div className={s.messages}>
            <ul>
                {
                    messages
                }
            </ul>

            <MessageInputContainer placeholder={"Enter message"} store={props.store}/>
        </div>
    );
}

export default MessagesList;