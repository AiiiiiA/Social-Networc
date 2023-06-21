import { connect } from "react-redux";
import { requestUsers, following, unfollowing, setSelectedPage } from "../../Redux/userReducer";
import {
    getUsersData, getPageSize, getTotalUsers,
    getCurrentPage, getFollowingInProgress,
    getPotionSize, getCurrentPortion, getIsFetching
} from "../../Redux/usersSelectors";
import { FC } from 'react';
import Friends from './Friends/Friends';
import Preloader from '../common/preloader/Preloader';
import { useEffect } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { UsersDataType, AppStateType } from '../../types/types'

type MapStateProps = {
    usersData: Array<UsersDataType>,
    pageSize: number
    totalUsers: number
    currentPage: number
    followingInProgress: Array<number>
    portionSize: number
    currentPortion: number
    isFetching: boolean
}

type MapDispatchProps = {
    requestUsers: (currentPage: number, pageSize: number) => void,
    following: () => void,
    unfollowing: () => void,
    setSelectedPage: () => void
}

type Props = MapStateProps & MapDispatchProps

const FriendsContainer: FC<Props> = ({
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
    isFetching
}) => {

    useEffect(() => { requestUsers(currentPage, pageSize) }, [currentPage]);

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
        />
    )
}

let mapStateToProps = (state: AppStateType):MapStateProps => (
    {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPotionSize(state),
        currentPortion: getCurrentPortion(state),
        isFetching: getIsFetching(state)
    }
)

export default compose<Props>(
    connect<MapStateProps, MapDispatchProps, AppStateType >(
        mapStateToProps, {
        requestUsers, following, unfollowing, setSelectedPage
    }),
    withAuthRedirect
)(FriendsContainer);