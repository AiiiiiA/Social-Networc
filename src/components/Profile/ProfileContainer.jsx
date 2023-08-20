import Profile from './Profile';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserStatus, updateUserStatus, setProfilePage, onChangeProfileData, actions } from '../../Redux/profileReducer';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';
import { getProfileData } from '../../Redux/profileSelectors';
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
        ...actions,
        setProfilePage,
        getUserStatus,
        updateUserStatus,
        onChangeProfileData
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)