import React from "react";
import s from './TextInput.module.css';

const TextInput = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        if (text == "") {
            alert("Write something");
        } else {
            debugger;
            props.addPost(text);
        }
    };

    return (
        <div>
            <textarea name="newpost" ref={newPostElement} cols="100" rows="5"
                      placeholder={props.placeholder}></textarea>
            <button onClick={addPost} className={s.btn}>{props.button_text}</button>
        </div>
    );
}

export default TextInput;