import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

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
            <div></div>
        </div>
    );
}

export default Dialogs;