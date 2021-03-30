import React from "react";
import s from './TextInput.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import TextInput from "./TextInput";
import StoreContext from "../../../../StoreContext";


const TextInputContainer = (props) => {


    return (
        <StoreContext>
            {
                (store) => {

                    let newPostElement = React.createRef();
                    let state = store.getState();


                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                        store.dispatch(updateNewPostTextActionCreator(""));
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }
                    return (<TextInput addPost={addPost} onPostChange={onPostChange}
                                       value={state.profilePage.newPostText} placeholder={props.placeholder}
                                       button_text={props.button_text}/>)
                }
            }
        </StoreContext>
    );
}

export default TextInputContainer;