import { usersAPI, profileAPI } from '../api/api';
import { ProfileDataType, PhotoType, UsersDataType } from '../types/types';

const FOLLOW = 'my-app/FOLLOW';
const UN_FOLLOW = 'my-app/UN_FOLLOW';
const SET_USERS_DATA = 'my-app/SET_USERS_DATA';
const SET_PAGE = 'my-app/SET_PAGE';
const SET_TOTAL_USERS = 'my-app/SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'my-app/TOGGLE_IS_FETCHING';
const SET_PROFILE = 'my-app/SET_PROFILE';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'my-app/TOGGLE_FOLLOWING_IN_PROGRESS';
const SET_CURRENT_PORTION = 'my-app/SET_CURRENT_PORTION';
const SET_PHOTO = 'my-app/SET_PHOTO';
const SET_SELECTED_PAGE = 'my-app/SET_SELECTED_PAGE';

type InicialStateType = typeof inicialState

let inicialState = {
    usersData: [] as Array<UsersDataType>,
    pageSize: 5,

    portionSize: 10,

    currentPortion: 1,
    currentPage: 1,

    selectedPage: {
        currentPortion: 1,
        currentPage: 1,
    },

    totalUsers: 0,
    isFetching: true,
    profileData: null as ProfileDataType | null,
    followingInProgress: [] as Array<number>
};

const userReducer = (state = inicialState, action: any) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UN_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS_DATA:

            return {
                ...state,
                usersData: action.usersData
            }

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNum
            }
        case SET_CURRENT_PORTION:
            return {
                ...state,
                currentPortion: action.currentPortion
            }

        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)
            }

        case SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: {
                    currentPortion: action.currentPortion,
                    currentPage: action.currentPage
                }
            }

        case SET_PHOTO:
            return {
                ...state,
                profileData: { ...state.profileData, photos: action.photo }
            }

        default:
            return state;
    }
}

type FollowAT = { type: typeof FOLLOW, userId: number }
export const follow = (userId: number): FollowAT => ({ type: FOLLOW, userId })

type UnfollowAT = { type: typeof UN_FOLLOW, userId: number }
export const unfollow = (userId: number): UnfollowAT => ({ type: UN_FOLLOW, userId })

type SetUsersAT = { type: typeof SET_USERS_DATA, usersData: UsersDataType }
export const setUsers = (usersData: UsersDataType): SetUsersAT => ({ type: SET_USERS_DATA, usersData })

type SetTotalUsersAT = { type: typeof SET_TOTAL_USERS, totalUsers: number }
export const setTotalUsers = (totalUsers: number): SetTotalUsersAT => ({ type: SET_TOTAL_USERS, totalUsers })

type SetIsFetchingAT = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const setIsFetching = (isFetching: boolean): SetIsFetchingAT => ({ type: TOGGLE_IS_FETCHING, isFetching })

type SetProfileAT = { type: typeof SET_PROFILE, profileData: ProfileDataType }
export const setProfile = (profileData: ProfileDataType): SetProfileAT => ({ type: SET_PROFILE, profileData })

type ToggleFollowingInProgressAT = { type: typeof TOGGLE_FOLLOWING_IN_PROGRESS, isFetching: boolean, id: number }
export const toggleFollowingInProgress = (isFetching: boolean, id: number): ToggleFollowingInProgressAT => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id })

type SetSelectedPageAT = { type: typeof SET_SELECTED_PAGE, currentPage: number, currentPortion: number }
export const setSelectedPage = (currentPage: number, currentPortion: number): SetSelectedPageAT => ({ type: SET_SELECTED_PAGE, currentPage, currentPortion })

type SetPhotoAT = { type: typeof SET_PHOTO, photo: PhotoType }
export const setPhoto = (photo: PhotoType) => ({ type: SET_PHOTO, photo })

export const onChangeProfileData = (profile: ProfileDataType) => async (dispatch: any, getState: any) => {

    let userID = getState().auth.id
    let data = await profileAPI.changeProfileInfo(profile);
    if (data.resultCode === 0) {
        dispatch(setProfilePage(userID))
    } else {
        console.log('все не заебись');
    }
}

export const uploadProfilePhoto = (photo: PhotoType) => async (dispatch: any) => {
    let data = await usersAPI.setPhoto(photo);
    if (data.data.resultCode === 0) {
        dispatch(setPhoto(photo))
    }
}

export const requestUsers = (page: number, pageSize: number) => async (dispath: any) => {
    dispath(setIsFetching(true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispath(setIsFetching(false));
    dispath(setUsers(data.items));
    dispath(setTotalUsers(data.totalCount));
};

export const following = (id: number) => async (dispath: any) => {

    followUnfollowFlow(dispath, usersAPI.follow.bind(usersAPI), follow, id);
};

export const unfollowing = (id: number) => async (dispath: any) => {

    followUnfollowFlow(dispath, usersAPI.unfollow.bind(usersAPI), unfollow, id);
};

export const followUnfollowFlow = async (dispath: any, apiMethod: any, actionCreator: any, id: number) => {
    dispath(toggleFollowingInProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispath(actionCreator(id))
    }
    dispath(toggleFollowingInProgress(false, id));
}

export const setProfilePage = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.profile(userId)
    dispatch(setProfile(data))
}

export default userReducer;