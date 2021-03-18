import React from "react";
import s from './MessageInput.module.css';

const MessageInput = (props) => {
    let newMessage = React.createRef();

    let sendMessage = () => {
        props.addMessage();
        props.updateNewMessage("");
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessage(text);
    }

    return (
        <div className={s.message_input}>
            <textarea onChange={onMessageChange} name="newpost" ref={newMessage} cols="80" rows="1"
                      placeholder={props.placeholder}
                      value={props.newMessage}/>
            <button onClick={sendMessage} className={s.button}>Send</button>
        </div>
    );
}

export default MessageInput;