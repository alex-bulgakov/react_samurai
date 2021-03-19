import React from 'react';
import s from './Messages.module.css';
import MessagesList from "./MessagesList/MessagesList";
import DialogsList from "./DialogsList/DialogsList";

const Messages = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogsList store={props.store}/>
            <MessagesList store={props.store}/>
        </div>
    );
}

export default Messages;