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

let state = {
    profilePage: {
        posts: postsData,
        dialogs: dialogsData,
    },
    messagesPage: {
        messages: messagesData
    }
}

export default state;