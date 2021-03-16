import ReactDOM from "react-dom";
import React from 'react';
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App data={state} addPost={state.addPost}/>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;