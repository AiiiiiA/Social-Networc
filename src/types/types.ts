export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfileDataType = {

    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotoType
}

export type ContactsType = {
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
    photos: PhotoType
}