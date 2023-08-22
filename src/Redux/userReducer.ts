import { Dispatch } from 'react';
import { usersAPI } from '../api/usersAPI';
import { UsersDataType } from '../types/types';
import { BaseThunkType, InferActionsType } from './reduxStore';

let inicialState = {
    usersData: [] as Array<UsersDataType>,
    pageSize: 5,
    portionSize: 10,
    currentPortion: 1,
    currentPage: 1,
    filter:"",

    selectedPage: {
        currentPortion: 1,
        currentPage: 1,
    },

    totalUsers: 0,
    isFetching: true,
    followingInProgress: [] as Array<number>
};

const userReducer = (state = inicialState, action: ActionsTypes): InicialStateType => {

    switch (action.type) {

        case `FOLLOW`:
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case `UN_FOLLOW`:
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case `SET_USERS_DATA`:

            return {
                ...state,
                usersData: action.usersData
            }

        case `SET_TOTAL_USERS`:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case `TOGGLE_IS_FETCHING`:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case `TOGGLE_FOLLOWING_IN_PROGRESS`:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)
            }

        case `SET_SELECTED_PAGE`:
            return {
                ...state,
                selectedPage: {
                    currentPortion: action.currentPortion,
                    currentPage: action.currentPage
                }
            }

        case `SET_FILTER`:
            return {
                ...state,
                filter: action.term

            }

        default:
            return state;
    }
}

export const actions = {
    follow: (userId: number) => ({ type: `FOLLOW`, userId } as const),
    unfollow: (userId: number) => ({ type: `UN_FOLLOW`, userId } as const),
    setUsers: (usersData: Array<UsersDataType>) => ({ type: `SET_USERS_DATA`, usersData } as const),
    setTotalUsers: (totalUsers: number) => ({ type: `SET_TOTAL_USERS`, totalUsers } as const),
    setIsFetching: (isFetching: boolean) => ({ type: `TOGGLE_IS_FETCHING`, isFetching } as const),
    toggleFollowingInProgress: (isFetching: boolean, id: number) => ({ type: `TOGGLE_FOLLOWING_IN_PROGRESS`, isFetching, id } as const),
    setSelectedPage: (currentPage: number, currentPortion: number) => ({ type: `SET_SELECTED_PAGE`, currentPage, currentPortion } as const),
    setFilter: (term:string)=>({type: 'SET_FILTER', term} as const)
}

export const requestUsers = (page: number, pageSize: number, term: string): ThuncType => async (dispath) => {
    dispath(actions.setIsFetching(true));
    dispath(actions.setFilter(term))
    let data = await usersAPI.getUsers(page, pageSize, term);
    dispath(actions.setIsFetching(false));
    dispath(actions.setUsers(data.items));
    dispath(actions.setTotalUsers(data.totalCount));
};

export const following = (id: number): ThuncType => async (dispath) => {
    followUnfollowFlow(dispath, usersAPI.follow.bind(usersAPI), actions.follow, id);
};

export const unfollowing = (id: number): ThuncType => async (dispath) => {
    followUnfollowFlow(dispath, usersAPI.unfollow.bind(usersAPI), actions.unfollow, id);
};

export const followUnfollowFlow = async (dispath: DispatchType, apiMethod: any, actionCreator: any, id: number) => {
    dispath(actions.toggleFollowingInProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispath(actionCreator(id))
    }
    dispath(actions.toggleFollowingInProgress(false, id));
}

export default userReducer;

export type InicialStateType = typeof inicialState
type ActionsTypes = InferActionsType<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThuncType = BaseThunkType<ActionsTypes>