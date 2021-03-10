import React from 'react';
import s from '../../Messages.module.css';

const Message = (props) => {
    let c = s.messages_item;
    // debugger;
    if (props.message.answer) {
        c = `${s.right} ${s.messages_item}`;
    }
    return (
        <li className={c}>
            <div>{props.message.text}</div>
        </li>
    );
}

export default Message;