const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: {text: 'Hi', answer: true}},
        {id: 2, message: {text: 'Hello', answer: false}},
        {id: 3, message: {text: 'Aloha', answer: true}},
        {id: 4, message: {text: 'Привет', answer: true}},
        {id: 5, message: {text: 'TestTEst', answer: false}},
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: {text: state.newMessage, answer: true}
            };
            if (newMessage.message.text !== "") {
                state.messages.push(newMessage);
            }
            break;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newText;
            break;
    }

    return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text});


export default dialogsReducer;