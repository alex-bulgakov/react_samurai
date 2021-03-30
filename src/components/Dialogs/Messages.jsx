import React from 'react';
import s from './Messages.module.css';
import MessagesList from "./MessagesList/MessagesList";
import DialogsList from "./DialogsList/DialogsList";

const Messages = () => {

    return (
        <div className={s.dialogs}>
            <DialogsList/>
            <MessagesList/>
        </div>
    );
}

export default Messages;