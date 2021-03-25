import React from "react";
import s from './TextInput.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import TextInput from "./TextInput";


const TextInputContainer = (props) => {

    let newPostElement = React.createRef();
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(""));
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <TextInput addPost={addPost} onPostChange={onPostChange}
                   value={state.profilePage.newPostText} placeholder={props.placeholder}
                   button_text={props.button_text}/>
    );
}

export default TextInputContainer;