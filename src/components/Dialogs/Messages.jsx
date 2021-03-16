import React from 'react';
import s from './Messages.module.css';
import MessagesList from "./MessagesList/MessagesList";
import DialogsList from "./DialogsList/DialogsList";

const Messages = (props) => {


    return (
        <div className={s.dialogs}>
            <DialogsList dialogs={props.dialogs}/>
            <MessagesList messages={props.messages} addMessage={props.addMessage}/>
        </div>
    );
}

export default Messages;