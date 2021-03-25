import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/dialogsReducer";
import MessageInput from "./MessageInput";

const MessageInputContainer = (props) => {
    let newMessage = React.createRef();

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
        props.store.dispatch(updateNewMessageActionCreator(""));
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <MessageInput updateNewMessage={onMessageChange} sendMessage={sendMessage}
                      value={props.store.getState().dialogsPage.newMessage}/>
    );
}

export default MessageInputContainer;