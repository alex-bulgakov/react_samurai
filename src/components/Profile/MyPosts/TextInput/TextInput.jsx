import React from "react";
import './TextInput.module.css';

const TextInput = (props) => {
    return (
        <div>
            <textarea name="newpost" id="newpost" cols="100" rows="5" placeholder={props.placeholder}></textarea>
        </div>
    );
}

export default TextInput;