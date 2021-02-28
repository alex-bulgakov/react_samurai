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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                <ul>
                    <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
                    <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
                    <Dialog id={dialogsData[2].id} name={dialogsData[2].name}/>
                    <Dialog id={dialogsData[3].id} name={dialogsData[3].name}/>
                    <Dialog id={dialogsData[4].id} name={dialogsData[4].name}/>
                    <Dialog id={dialogsData[5].id} name={dialogsData[5].name}/>
                </ul>
            </div>
            <div className={s.messages}>
                <ul>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                    <Message message={messagesData[3].message}/>
                    <Message message={messagesData[4].message}/>
                    <Message message={messagesData[5].message}/>
                </ul>
            </div>
            <div></div>
        </div>
    );
}

export default Dialogs;