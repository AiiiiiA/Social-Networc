import { profileAPI } from "../api/authAPI";
import { PostDataType } from "../types/types";
import { ProfileDataType, PhotoType } from "../types/types";

const ADD_POST = 'my-app/profile/profile_ADD-POST';
const DELETE_POST = 'my-app/profile_DELETE_POST';
const SET_STATUS = 'my-app/profile_SET_STATUS';
const SET_PHOTO = 'my-app/SET_PHOTO';
const SET_PROFILE = 'my-app/SET_PROFILE';

type InicialStateType = typeof inicialState

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

const profileReducer = (state = inicialState, action: any): InicialStateType => {

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
        case SET_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            }
        case SET_PHOTO:
            return {
                ...state,
                profileData: { ...state.profileData, photos: action.photo } as ProfileDataType
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

type SetProfileAT = { type: typeof SET_PROFILE, profileData: ProfileDataType }
export const setProfile = (profileData: ProfileDataType): SetProfileAT => ({ type: SET_PROFILE, profileData })

type SetPhotoAT = { type: typeof SET_PHOTO, photo: PhotoType }
export const setPhoto = (photo: PhotoType): SetPhotoAT => ({ type: SET_PHOTO, photo })


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

export const uploadProfilePhoto = (photo: PhotoType) => async (dispatch: any) => {
    let data = await profileAPI.setPhoto(photo);
    if (data.data.resultCode === 0) {
        dispatch(setPhoto(photo))
    }
}

export const setProfilePage = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.profile(userId)
    dispatch(setProfile(data))
}

export const onChangeProfileData = (profile: ProfileDataType) => async (dispatch: any, getState: any) => {

    let userID = getState().auth.id
    let data = await profileAPI.changeProfileInfo(profile);
    if (data.resultCode === 0) {
        dispatch(setProfilePage(userID))
    } else {
        console.log('все не заебись');
    }
}

/* добавить кнопку удаления поста */
export default profileReducer;