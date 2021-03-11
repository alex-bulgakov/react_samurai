import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <li className={s.dialogs_item}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
        //TODO: show avatars
    );
}

export default DialogsItem;