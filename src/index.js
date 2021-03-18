import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, addPost, subscribe, updateNewMessage, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App data={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}
             updateNewMessage={updateNewMessage}/>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree);

rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


