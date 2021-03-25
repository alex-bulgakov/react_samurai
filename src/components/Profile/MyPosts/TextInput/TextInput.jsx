import React from "react";
import s from './TextInput.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";


const TextInput = (props) => {

    let newPostElement = React.createRef();


    let addPost = () => {
        // props.store.dispatch(addPostActionCreator());
        // props.store.dispatch(updateNewPostTextActionCreator(""));
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
        // props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <textarea onChange={onPostChange} name="newpost" ref={newPostElement} cols="100" rows="5"
                      placeholder={props.placeholder} value={props.value}/>
            <button onClick={addPost} className={s.btn}>{props.button_text}</button>
        </div>
    );
}

export default TextInput;