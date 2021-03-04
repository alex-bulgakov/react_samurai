import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <li className={s.dialogs_item}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}

const Message = (props) => {
    return (
        <li className={s.messages_item}>{props.message}</li>
    );
}


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
        <Dialog id={d.id} name={d.name}/>
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