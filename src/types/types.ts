import { RootReducers } from '../Redux/reduxStore'

export type AppStateType = ReturnType<RootReducers>

export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfileDataType = {

    userId: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        gihub: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string
    },
    photos: PhotoType,
    aboutMe: string
}

export type Contacts = {
    gihub: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}

export type PhotoType = {
    small: null | string,
    large: null | string
}

export type UsersDataType = {
    id: number,
    name: string,
    status: string,
    photos: PhotoType,
    followed: boolean
}