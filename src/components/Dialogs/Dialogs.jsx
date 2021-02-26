import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <li className={s.dialogs_item}><NavLink to="/dialogs/1">Vova</NavLink></li>
    );
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                <ul>
                    <Dialog/>
                </ul>
            </div>
            <div className={s.messages}>
                <ul>
                    <li className={s.messages_item}>Hi</li>
                    <li className={s.messages_item}>Hello</li>
                    <li className={s.messages_item}>Fuck</li>
                    <li className={s.messages_item}>Yankee go home</li>
                    <li className={s.messages_item}>Test test Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Enim, nostrum.
                    </li>
                    <li className={s.messages_item}>Putin uxodi</li>
                    <li className={s.messages_item}>Simple message</li>
                    <li className={s.messages_item}>GIT Force</li>
                </ul>
            </div>
            <div></div>
        </div>
    );
}

export default Dialogs;