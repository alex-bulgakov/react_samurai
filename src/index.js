import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

let postsData = [
    {id: 1, message: 'hello', likesCount: 1},
    {id: 2, message: 'lsdfo sdof ', likesCount: 2},
    {id: 3, message: 'owqt[oij', likesCount: 11},
    {id: 4, message: 'sdf', likesCount: 5},
];

