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
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                <ul>
                    <Dialog id={"1"} name={"Vova"}/>
                    <Dialog id={"2"} name={"Ira"}/>
                    <Dialog id={"3"} name={"Svet"}/>
                    <Dialog id={"4"} name={"Mixa"}/>
                    <Dialog id={"5"} name={"Sanya"}/>
                    <Dialog id={"6"} name={"Jeka"}/>
                </ul>
            </div>
            <div className={s.messages}>
                <ul>
                    <Message message={"Hello"}/>
                    <Message message={" sdfls lkdsfljsdf jas"}/>
                    <Message message={"Wew woe"}/>
                    <Message message={"dsdf; a;asdf;l a;sdfg;ajorg;etog;eb "}/>
                    <Message message={"sdafo;asd a;sdof ;aosdfxdkcvn a;dfs oi as;odfij ;asokdfj o"}/>
                    <Message message={"sd"}/>
                </ul>
            </div>
            <div></div>
        </div>
    );
}

export default Dialogs;