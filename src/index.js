import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state'
import {addPost} from './redux/state'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App data={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}

ReactDOM.render(
    <App data={state} addPost={addPost} rerender={rerenderEntireTree}/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


