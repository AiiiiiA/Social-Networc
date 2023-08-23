import { connect } from "react-redux";
import { requestUsers, following, unfollowing, actions, FilterType } from "../../Redux/userReducer";
import {
    getUsersData, getPageSize, getTotalUsers,
    getCurrentPage, getFollowingInProgress,
    getPotionSize, getCurrentPortion, getIsFetching, getFilter
} from "../../Redux/usersSelectors";
import { FC } from 'react';
import Friends from './Friends/Friends';
import Preloader from '../common/preloader/Preloader';
import { useEffect } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { UsersDataType, AppStateType } from '../../types/types'

const FriendsContainer: FC<MapStateProps & MapDispatchProps> = ({
    usersData,
    pageSize,
    totalUsers,
    currentPage,
    followingInProgress,
    portionSize,
    currentPortion,
    requestUsers,
    following,
    unfollowing,
    setSelectedPage,
    isFetching,
    filter
}) => {

    useEffect(() => { requestUsers(currentPage, pageSize, filter) }, [currentPage]);

    return (isFetching
        ? <Preloader />
        : <Friends
            usersData={usersData}
            totalItemsCount={totalUsers}
            pageSize={pageSize}
            currentPage={currentPage}
            followingInProgress={followingInProgress}
            following={following}
            unfollowing={unfollowing}
            portionSize={portionSize}
            currentPortion={currentPortion}
            setSelectedPage={setSelectedPage}
            requestUsers={requestUsers}
        />
    )
}

let mapStateToProps = (state: AppStateType): MapStateProps => (
    {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPotionSize(state),
        currentPortion: getCurrentPortion(state),
        isFetching: getIsFetching(state),
        filter: getFilter(state)
    }
)

export default compose<React.ComponentType>(
    connect(
        mapStateToProps, {
        requestUsers, following, unfollowing, ...actions
    }),
    withAuthRedirect
)(FriendsContainer)


type MapStateProps = {
    usersData: Array<UsersDataType>,
    pageSize: number
    totalUsers: number
    currentPage: number
    followingInProgress: Array<number>
    portionSize: number
    currentPortion: number
    isFetching: boolean
    filter: FilterType
}

type MapDispatchProps = {
    requestUsers: (currentPage: number, pageSize: number,  filter: FilterType) => void,
    following: () => void,
    unfollowing: () => void,
    setSelectedPage: () => void
}