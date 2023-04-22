import { usersAPI, profileAPI } from '../api/api';

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

let inicialState = {
    usersData: null,
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
    profileData: null,
    followingInProgress: []
};

const userReducer = (state = inicialState, action) => {

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

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsers = (usersData) => ({ type: SET_USERS_DATA, usersData })
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setProfile = (profileData) => ({ type: SET_PROFILE, profileData })
export const toggleFollowingInProgress = (isFetching, id) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id })
export const setSelectedPage = (currentPage, currentPortion) => ({ type: SET_SELECTED_PAGE, currentPage, currentPortion })
export const setPhoto = (photo) => ({ type: SET_PHOTO, photo })

export const onChangeProfileData = (
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    aboutMe,
    contacts,
   contacts.github,
   contacts.vk,
    contacts.facebook,
    contacts.instagram,
    contacts.twitter,
    contacts.website,
    contacts.youtube,
    contacts.mainLink) => async (dispatch) => {
        let data = await profileAPI.changeProfileInfo(
            lookingForAJob,
            lookingForAJobDescription,
            fullName,
            aboutMe,
            contacts.github,
            contacts.vk,
            contacts.facebook,
            contacts.instagram,
            contacts.twitter,
            contacts.website,
            contacts.youtube,
            contacts.mainLink);
        if (data.resultCode === 0) {
            console.log('все заебись')
        } else {
            console.log('все не заебись');
        }
    }

export const uploadProfilePhoto = (photo) => async (dispatch) => {
    let data = await usersAPI.setPhoto(photo);
    if (data.data.resultCode === 0) {
        dispatch(setPhoto(photo))
    }
}

export const requestUsers = (page, pageSize) => async (dispath) => {
    dispath(setIsFetching(true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispath(setIsFetching(false));
    dispath(setUsers(data.items));
    dispath(setTotalUsers(data.totalCount));
};

export const following = (id) => async (dispath) => {

    followUnfollowFlow(dispath, usersAPI.follow.bind(usersAPI), follow, id);
};

export const unfollowing = (id) => async (dispath) => {

    followUnfollowFlow(dispath, usersAPI.unfollow.bind(usersAPI), unfollow, id);
};

export const followUnfollowFlow = async (dispath, apiMethod, actionCreator, id) => {
    dispath(toggleFollowingInProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispath(actionCreator(id))
    }
    dispath(toggleFollowingInProgress(false, id));
}

export const setProfilePage = (userId) => async (dispatch) => {
    let data = await profileAPI.profile(userId)
    dispatch(setProfile(data))
}

export default userReducer;