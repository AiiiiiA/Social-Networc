
import { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { getUserStatus, updateUserStatus, setProfilePage, onChangeProfileData, actions } from '../../Redux/profileReducer';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';
import { getProfileData } from '../../Redux/profileSelectors';
import { getStatus } from '../../Redux/profileSelectors';
import { getAuthId } from '../../Redux/authSelectors';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { AppStateType, ProfileDataType } from '../../types/types';

import { useParams } from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostContainer from './MyPosts/MyPostContainer';

const ProfileContainer: FC<MapStateToProps & MapDispatchToProps> = ({
    profileData,
    status,
    setProfilePage,
    getUserStatus,
    updateUserStatus,
    onChangeProfileData }) => {

    const params = useParams()

    useEffect(() => {
        getUserStatus(params.userId!)
        setProfilePage(params.userId!)
    }, [params.userId])

    return (
        <div className='app-wrapper-content'>
            <ProfileInfo profileData={profileData}
                status={status}
                updateUserStatus={updateUserStatus}
                onChangeProfileData={onChangeProfileData} />
            <MyPostContainer />
        </div>
    )
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profileData: getProfileData(state),
    status: getStatus(state),
    autorizedUserId: getAuthId(state)
});

export default compose<React.ComponentType>(
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

type MapStateToProps = {
    profileData: ProfileDataType | null,
    status: string,
    autorizedUserId: number | null
}

type MapDispatchToProps = {
    setProfilePage: (userId: string) => void,
    getUserStatus: (userId: string) => void,
    updateUserStatus: (status: string) => void,
    onChangeProfileData: (profile: ProfileDataType) => void
}