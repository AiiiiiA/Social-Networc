import { profileAPI } from "../api/api";

const ADD_POST = 'my-app/profile/profile_ADD-POST';
const DELETE_POST = 'my-app/profile_DELETE_POST';
const SET_STATUS = 'my-app/profile_SET_STATUS';

type InicialStateType = typeof inicialState

type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

let inicialState = {

    postsData: [
        { id: 1, message: 'Как ты?', likesCount: 15 },
        { id: 2, message: 'Это мой 1 пост!', likesCount: 20 },
        { id: 3, message: 'Это мой 2 пост!', likesCount: 210 },
        { id: 4, message: 'Это мой 3 пост!', likesCount: 2 },
        { id: 5, message: 'Это мой 4 пост!', likesCount: 23 }
    ] as Array<PostDataType>,
    
    status: ''
}

const profileReducer = (state = inicialState, action: any) => {

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

type AddPostAT = { type: typeof ADD_POST, post: string }

export const addPost = (post: string): AddPostAT => ({ type: ADD_POST, post });

type DeletePostAT = { type: typeof DELETE_POST, postId: number }

export const deletePost = (postId: number): DeletePostAT => ({ type: DELETE_POST, postId })

type SetStatusAT = { type: typeof SET_STATUS, status: string }

export const setStatus = (status: string): SetStatusAT => ({ type: SET_STATUS, status });

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data.data))
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status);
    if (data.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

/* добавить кнопку удаления поста */
export default profileReducer;