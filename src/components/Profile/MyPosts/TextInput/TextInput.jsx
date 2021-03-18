import React from "react";
import s from './TextInput.module.css';
import state from "../../../../redux/state";

const TextInput = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
        props.updateNewPostText("");
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <textarea onChange={onPostChange} name="newpost" ref={newPostElement} cols="100" rows="5"
                      placeholder={props.placeholder} value={props.newPostText}/>
            <button onClick={addPost} className={s.btn}>{props.button_text}</button>
        </div>
    );
}

export default TextInput;