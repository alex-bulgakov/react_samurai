import s from "../Messages.module.css";
import React from "react";
import DialogsItem from "./DialogItem/DialogsItem";


let DialogsList = (props) => {
    let dialogs = props.store.getState().dialogsPage.dialogs.map(d =>
        <DialogsItem id={d.id} name={d.name}/>
    );

    return (
        <div className={s.dialogs_list}>
            <ul>
                {
                    dialogs
                }
            </ul>
        </div>
    );
}

export default DialogsList;