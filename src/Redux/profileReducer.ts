import { Dispatch } from "redux";
import { profileAPI } from "../api/profileAPI";
import { PostDataType } from "../types/types";
import { ProfileDataType, PhotoType } from "../types/types";
import { BaseThunkType, InferActionsType } from "./reduxStore";
import { FormAction } from "redux-form";

let inicialState = {

    postsData: [
        { id: 1, message: 'Как ты?', likesCount: 15 },
        { id: 2, message: 'Это мой 1 пост!', likesCount: 20 },
        { id: 3, message: 'Это мой 2 пост!', likesCount: 210 },
        { id: 4, message: 'Это мой 3 пост!', likesCount: 2 },
        { id: 5, message: 'Это мой 4 пост!', likesCount: 23 }
    ] as Array<PostDataType>,

    status: '',
    profileData: null as ProfileDataType | null
}

const profileReducer = (state = inicialState, action: ActionsTypes): InicialStateType => {

    switch (action.type) {

        case 'my-app/profile/profile_ADD-POST':

            return {
                ...state,
                postsData: [...state.postsData, { id: state.postsData.length + 1, message: action.post, likesCount: 0 }],
            };

        case 'my-app/profile_DELETE_POST':
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }

        case 'my-app/profile_SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'my-app/SET_PHOTO':
            return {
                ...state,
                profileData: { ...state.profileData, photos: action.photo } as ProfileDataType
            }
        case 'my-app/SET_PROFILE':
            return {
                ...state,
                profileData: action.profileData as ProfileDataType
            }

        default:
            return state;

    }
};

export const actions = {
    addPost: (post: string) => ({ type: 'my-app/profile/profile_ADD-POST', post } as const),
    deletePost: (postId: number) => ({ type: 'my-app/profile_DELETE_POST', postId } as const),
    setProfile: (profileData: ProfileDataType) => ({ type: 'my-app/SET_PROFILE', profileData } as const),
    setPhoto: (photo: PhotoType) => ({ type: 'my-app/SET_PHOTO', photo } as const),
    setStatus: (status: string) => ({ type: 'my-app/profile_SET_STATUS', status } as const)
}

export const addPost = (post: string): ThuncType => async (dispatch) => { dispatch(actions.addPost(post)) }
export const setProfile = (profileData: ProfileDataType): ThuncType => async (dispatch) => { dispatch(actions.setProfile(profileData)) }

export const getUserStatus = (userId: number): ThuncType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data.data))
};

export const updateUserStatus = (status: string): ThuncType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
};

export const uploadProfilePhoto = (photo: PhotoType): ThuncType => async (dispatch) => {
    let data = await profileAPI.setPhoto(photo);
    if (data.data.resultCode === 0) {
        dispatch(actions.setPhoto(photo))
    }
}

export const setProfilePage = (userId: number): ThuncType => async (dispatch) => {
    let data = await profileAPI.profile(userId)
    dispatch(actions.setProfile(data))
}

export const onChangeProfileData = (profile: ProfileDataType): ThuncType => async (dispatch, getState) => {

    let userID = getState().auth.id
    let data = await profileAPI.changeProfileInfo(profile);
    if (data.resultCode === 0) {
        if (userID != null) {
            dispatch(setProfilePage(userID))
        }
    }
}

/* добавить кнопку удаления поста */
export default profileReducer;

type InicialStateType = typeof inicialState
type ActionsTypes = InferActionsType<typeof actions>
type ThuncType = BaseThunkType<ActionsTypes | FormAction>