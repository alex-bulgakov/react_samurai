import ReactDOM from "react-dom";
import React from 'react';
import App from "./App";
import {addMessage, addPost, updateNewPostText} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App data={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;