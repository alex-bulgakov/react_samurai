import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <li className={s.dialogs_item}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}

export default DialogsItem;