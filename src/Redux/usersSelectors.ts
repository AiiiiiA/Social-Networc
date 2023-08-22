import { createSelector } from "reselect";
import { AppStateType } from '../types/types'

export const getUsersData = (state: AppStateType) => (state.user.usersData);
export const getPageSize = (state: AppStateType) => (state.user.pageSize);
export const getTotalUsers = (state: AppStateType) => (state.user.totalUsers);
export const getCurrentPage = (state: AppStateType) => (state.user.selectedPage.currentPage);
export const getFollowingInProgress = (state: AppStateType) => (state.user.followingInProgress);
export const getPotionSize = (state: AppStateType) => (state.user.portionSize);
export const getIsFetching = (state: AppStateType) => (state.user.isFetching);
export const getCurrentPortion = (state: AppStateType) => (state.user.selectedPage.currentPortion)
export const getFilter = (state: AppStateType) => (state.user.filter)

/* export const getUsersData = createSelector(getUsersDataSelector, (usersData) => (usersData)) */