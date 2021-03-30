import s from "../Messages.module.css";
import React from "react";
import Message from "./Message/Message";
import MessageInputContainer from "./MessageInput/MessageInputContainer";
import StoreContext from "../../../StoreContext";

const MessagesList = (props) => {


    return (
        <StoreContext.Consumer>
            {

                (store) => {
                    let messages = store.getState().dialogsPage.messages.map(m =>
                        <Message message={m.message}/>
                    );

                    return (
                        <div className={s.messages}>
                            <ul>
                                {
                                    messages
                                }
                            </ul>

                            <MessageInputContainer placeholder={"Enter message"}/>

                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MessagesList;