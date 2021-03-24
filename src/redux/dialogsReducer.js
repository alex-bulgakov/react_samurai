const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

const dialogsReducer = (state, action) => {
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