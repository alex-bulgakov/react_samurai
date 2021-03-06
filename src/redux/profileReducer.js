const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hello', likesCount: 1},
        {id: 2, message: 'lsdfo sdof ', likesCount: 2},
        {id: 3, message: 'owqt[oij', likesCount: 11},
        {id: 4, message: 'sdf', likesCount: 5},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            if (newPost.message !== "") {
                state.posts.push(newPost);
            }
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;