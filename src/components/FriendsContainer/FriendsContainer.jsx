import { connect } from "react-redux";
import { requestUsers, following, unfollowing, setSelectedPage } from "../../Redux/userReducer";
import {
    getUsersData, getPageSize, getTotalUsers,
    getCurrentPage, getIsFetching, getFollowingInProgress,
    getPotionSize, getCurrentPortion
} from "../../Redux/usersSelectors";
import React from 'react';
import Friends from './Friends/Friends';
import Preloader from '../common/preloader/Preloader';
import { useEffect } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

const FriendsContainer = (props) => {

    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize)
    }, [props.currentPage]);

    return (props.isFetching
        ? <Preloader />
        : <Friends
            usersData={props.usersData}
            totalItemsCount={props.totalUsers}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            isFetching={props.isFetching}
            followingInProgress={props.followingInProgress}
            following={props.following}
            unfollowing={props.unfollowing}
            portionSize={props.portionSize}
            currentPortion={props.currentPortion}
            setSelectedPage={props.setSelectedPage}
        />
    )
}

let mapStateToProps = (state) => (
    {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPotionSize(state),
        currentPortion: getCurrentPortion(state)
    }
)

export default compose(
    connect(mapStateToProps, {
        requestUsers, following, unfollowing, setSelectedPage
    }),
    withAuthRedirect
)(FriendsContainer);