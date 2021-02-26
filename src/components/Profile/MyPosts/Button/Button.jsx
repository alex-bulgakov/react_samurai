import s from './Button.module.css';
import React from "react";

const Button = (props) => {
    return (
        <button className={s.btn}>{props.value}</button>
    );
}

export default Button;