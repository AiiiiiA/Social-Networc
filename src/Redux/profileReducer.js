import { profileAPI } from "../api/api";

const ADD_POST = 'my-app/profile/ADD-POST';
const DELETE_POST = 'my-app/profileDELETE_POST';
const SET_STATUS = 'my-app/profileSET_STATUS';

let inicialState = {

    postsData: [
        { id: 1, message: 'Как ты?', likesCount: '15' },
        { id: 2, message: 'Это мой 1 пост!', likesCount: '20' },
        { id: 3, message: 'Это мой 2 пост!', likesCount: '210' },
        { id: 4, message: 'Это мой 3 пост!', likesCount: '2' },
        { id: 5, message: 'Это мой 4 пост!', likesCount: '23' }
    ],

    status: ''
}

const profileReducer = (state = inicialState, action) => {

    switch (action.type) {

        case ADD_POST:

            return {
                ...state,
                postsData: [...state.postsData, { id: state.postsData.length + 1, message: action.post, likesCount: 0 }],
            };

        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;

    }
};

export const addPost = (post) => ({ type: ADD_POST, post });
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data.data))
};

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};
/* добавить кнопку удаления поста */
export default profileReducer;