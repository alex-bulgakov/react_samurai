import React from "react";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


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
        },
        sidebar: {}
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log("rerender");
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
}

export default store;