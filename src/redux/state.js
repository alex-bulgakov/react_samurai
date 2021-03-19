import React from "react";

let rerenderEntireTree = (state) => {
    console.log("rerender");
}


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: {text: state.messagesPage.newMessage, answer: true}
    };
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const updateNewMessage = (newText) => {
    state.messagesPage.newMessage = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

let
    postsData = [
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
    {id: 1, message: {text: 'Hi', answer: true}},
    {id: 2, message: {text: 'Hello', answer: false}},
    {id: 3, message: {text: 'Aloha', answer: true}},
    {id: 4, message: {text: 'Привет', answer: true}},
    {id: 5, message: {text: 'TestTEst', answer: false}},
    {id: 6, message: {text: 'sadslfkj', answer: false}}
];

let state = {
    profilePage: {
        posts: postsData,
        newPostText: '',
    },
    messagesPage: {
        messages: messagesData,
        dialogs: dialogsData,
        newMessage: '',
    },
}

//TODO: create one store object


export default state;