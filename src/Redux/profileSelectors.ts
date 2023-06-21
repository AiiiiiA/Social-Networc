import { AppStateType } from '../types/types'

export const getStatus = (state: AppStateType) => (state.profile.status);
export const getPostData = (state: AppStateType) => (state.profile.postsData);
export const getProfileData = (state: AppStateType) => (state.profile.profileData);