import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {

    postsData: [
        { id: 1, message: 'Как ты?', likesCount: '15' },
        { id: 2, message: 'Это мой 1 пост!', likesCount: '20' },
        { id: 3, message: 'Это мой 2 пост!', likesCount: '210' },
        { id: 4, message: 'Это мой 3 пост!', likesCount: '2' },
        { id: 5, message: 'Это мой 4 пост!', likesCount: '23' }
    ]
};

test('new post should be added', () => {
    let action = addPost('IT KAMASUTRA');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(6);
});

test('after deleting legth of post should be decrement', () => {
    let action = deletePost(100);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
});

