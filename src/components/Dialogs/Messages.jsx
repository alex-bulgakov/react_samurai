import React from 'react';
import s from './Messages.module.css';
import DialogsItem from "./DialogsList/DialogItem/DialogsItem";
import Message from "./MessagesList/Message/Message";

const Messages = (props) => {

    let dialogs = props.dialogs.map(d =>
        <DialogsItem id={d.id} name={d.name}/>
    );

    let messages = props.messages.map(m =>
        <Message message={m.message}/>
    );


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                <ul>
                    {
                        dialogs
                    }
                </ul>
            </div>
            <div className={s.messages}>
                <ul>
                    {
                        messages
                    }
                </ul>
            </div>
        </div>
    );
}

export default Messages;