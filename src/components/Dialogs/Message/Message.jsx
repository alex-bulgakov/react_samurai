import React from 'react';
import s from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <li className={s.messages_item}>{props.message}</li>
    );
}

export default Message;