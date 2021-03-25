import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/dialogsReducer";
import MessageInput from "./MessageInput";

const MessageInputContainer = (props) => {
    let newMessage = React.createRef();
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
        props.store.dispatch(updateNewMessageActionCreator(""));
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <MessageInput updateNewMessage={onMessageChange} sendMessage={sendMessage}
                      value={state.dialogsPage.newMessage}/>
    );
}

export default MessageInputContainer;