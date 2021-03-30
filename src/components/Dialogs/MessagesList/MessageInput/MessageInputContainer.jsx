import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/dialogsReducer";
import MessageInput from "./MessageInput";
import StoreContext from "../../../../StoreContext";

const MessageInputContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let sendMessage = () => {
                        store.dispatch(addMessageActionCreator());
                        store.dispatch(updateNewMessageActionCreator(""));
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text));
                    }
                    return (<MessageInput updateNewMessage={onMessageChange} sendMessage={sendMessage}
                                          value={state.dialogsPage.newMessage}/>)
                }
            }
        </StoreContext.Consumer>
    );
}

export default MessageInputContainer;