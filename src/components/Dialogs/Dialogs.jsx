import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Vova'},
        {id: 2, name: 'Ira'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Mixa'},
        {id: 5, name: 'Sanya'},
        {id: 6, name: 'Jeka'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Aloha'},
        {id: 4, message: 'Привет'},
        {id: 5, message: 'TestTEst'},
        {id: 6, message: 'sadslfkj'},
    ];

    let dialogs = dialogsData.map(d =>
        <DialogsItem id={d.id} name={d.name}/>
    );

    let messages = messagesData.map(m =>
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