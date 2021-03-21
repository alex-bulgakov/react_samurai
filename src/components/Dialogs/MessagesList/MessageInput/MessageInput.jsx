import React from "react";
import s from './MessageInput.module.css';

const MessageInput = (props) => {
    let newMessage = React.createRef();

    let sendMessage = () => {
        props.store.dispatch({type: 'ADD-MESSAGE'});
        props.store.dispatch({type: 'UPDATE-NEW-MESSAGE', newText: ''});
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.store.dispatch({
            type: 'UPDATE-NEW-MESSAGE', newText: text
        })
    }

    return (
        <div className={s.message_input}>
            <textarea onChange={onMessageChange} name="newpost" ref={newMessage} cols="80" rows="1"
                      placeholder={props.placeholder}
                      value={props.store.getState().messagesPage.newMessage}/>
            <button onClick={sendMessage} className={s.button}>Send</button>
        </div>
    );
}

export default MessageInput;