import { createSelector } from "reselect";

export const getUsersData = (state) => (state.user.usersData);
export const getPageSize = (state) => (state.user.pageSize);
export const getTotalUsers = (state) => (state.user.totalUsers);
export const getCurrentPage = (state) => (state.user.selectedPage.currentPage);
export const getIsFetching = (state) => (state.user.isFetching);
export const getFollowingInProgress = (state) => (state.user.followingInProgress);
export const getProfileData = (state) => (state.user.profileData);
export const getPotionSize = (state) => (state.user.portionSize);
export const getCurrentPortion = (state) => (state.user.selectedPage.currentPortion)

/* export const getUsersData = createSelector(getUsersDataSelector, (usersData) => (usersData)) */