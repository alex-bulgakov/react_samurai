import React from "react";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likesCount: 1},
                {id: 2, message: 'lsdfo sdof ', likesCount: 2},
                {id: 3, message: 'owqt[oij', likesCount: 11},
                {id: 4, message: 'sdf', likesCount: 5},
            ],
            newPostText: '',
        },
        messagesPage: {
            messages: [
                {id: 1, message: {text: 'Hi', answer: true}},
                {id: 2, message: {text: 'Hello', answer: false}},
                {id: 3, message: {text: 'Aloha', answer: true}},
                {id: 4, message: {text: 'Привет', answer: true}},
                {id: 5, message: {text: 'TestTEst', answer: false}},
                {id: 6, message: {text: 'sadslfkj', answer: false}}
            ],
            dialogs: [
                {id: 1, name: 'Vova'},
                {id: 2, name: 'Ira'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Mixa'},
                {id: 5, name: 'Sanya'},
                {id: 6, name: 'Jeka'},
            ],
            newMessage: '',
        }
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    rerenderEntireTree() {
        console.log("rerender");
    },
    getState() {
        return this._state;
    },
    updateNewMessage(newText) {
        this._state.messagesPage.newMessage = newText;
        this.rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: {text: this._state.messagesPage.newMessage, answer: true}
        };
        this._state.messagesPage.messages.push(newMessage);
        this.rerenderEntireTree(this._state);
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this.rerenderEntireTree(this.state);
    },
}

export default store;