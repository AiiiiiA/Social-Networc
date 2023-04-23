import Profile from './Profile';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setProfile, setProfilePage, onChangeProfileData } from "../../Redux/userReducer";
import { getUserStatus, updateUserStatus } from '../../Redux/profileReducer';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';
import { getProfileData } from '../../Redux/usersSelectors';
import { getStatus } from '../../Redux/profileSelectors';
import { getAuthId } from '../../Redux/authSelectors';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

const ProfileContainer = (props) => {

    useEffect(() => {
        props.getUserStatus(props.router.params.userId)
        props.setProfilePage(props.router.params.userId)
    }, [props.router.params.userId])

    return (
        <Profile
            profileData={props.profileData}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
            onChangeProfileData={props.onChangeProfileData}
        />
    )
}

let mapStateToProps = (state) => ({
    profileData: getProfileData(state),
    status: getStatus(state),
    autorizedUserId: getAuthId(state)
});

export default compose(
    connect(mapStateToProps, {
        setProfile,
        setProfilePage,
        getUserStatus,
        updateUserStatus,
        onChangeProfileData
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)