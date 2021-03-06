import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, message: 'hello', likesCount: 1},
    {id: 2, message: 'lsdfo sdof ', likesCount: 2},
    {id: 3, message: 'owqt[oij', likesCount: 11},
    {id: 4, message: 'sdf', likesCount: 5},
];

let dialogsData = [
    {id: 1, name: 'Vova'},
    {id: 2, name: 'Ira'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Mixa'},
    {id: 5, name: 'Sanya'},
    {id: 6, name: 'Jeka'},
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Aloha'},
    {id: 4, message: 'Привет'},
    {id: 5, message: 'TestTEst'},
    {id: 6, message: 'sadslfkj'},
];

let data = {
    posts: postsData,
    dialogs: dialogsData,
    messages: messagesData
}

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


