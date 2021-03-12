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
    },
    messagesPage: {
        messages: messagesData,
        dialogs: dialogsData
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;