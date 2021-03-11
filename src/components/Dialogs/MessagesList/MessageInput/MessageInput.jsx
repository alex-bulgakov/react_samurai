import React from "react";
import s from './MessageInput.module.css';

const MessageInput = (props) => {
    return (
        <div className={s.message_input}>
            <textarea name="newpost" id="newpost" cols="80" rows="1" placeholder={props.placeholder}></textarea>
            <button className={s.button}>Send</button>
        </div>
    );
}

export default MessageInput;