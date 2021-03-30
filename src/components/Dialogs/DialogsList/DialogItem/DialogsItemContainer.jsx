import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem";
import StoreContext from "../../../../StoreContext";

const DialogsItemContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return (<DialogsItem id={props.id} name={props.name}/>)
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsItemContainer;