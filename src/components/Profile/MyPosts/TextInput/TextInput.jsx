import React from "react";
import s from './TextInput.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";


const TextInput = (props) => {

    let newPostElement = React.createRef();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(""));
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <textarea onChange={onPostChange} name="newpost" ref={newPostElement} cols="100" rows="5"
                      placeholder={props.placeholder} value={props.store.getState().profilePage.newPostText}/>
            <button onClick={addPost} className={s.btn}>{props.button_text}</button>
        </div>
    );
}

export default TextInput;