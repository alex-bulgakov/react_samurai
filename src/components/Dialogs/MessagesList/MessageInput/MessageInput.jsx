import React from "react";
import s from './MessageInput.module.css';

const MessageInput = (props) => {
    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        if (text === "") {
            alert("Write something");
        } else {
            alert(text);
        }
    };

    return (
        <div className={s.message_input}>
            <textarea name="newpost" ref={newMessage} cols="80" rows="1" placeholder={props.placeholder}></textarea>
            <button onClick={sendMessage} className={s.button}>Send</button>
        </div>
    );
}

export default MessageInput;