import s from "../Messages.module.css";
import React from "react";
import DialogsItem from "./DialogItem/DialogsItem";
import DialogsItemContainer from "./DialogItem/DialogsItemContainer";
import StoreContext from "../../../StoreContext";


let DialogsList = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogs = store.getState().dialogsPage.dialogs.map(d =>
                        <DialogsItemContainer id={d.id} name={d.name}/>
                    );

                    return (<div className={s.dialogs_list}>
                        <ul>
                            {
                                dialogs
                            }
                        </ul>
                    </div>)
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsList;