import { ProfileDataType } from '../../types/types'
import MyPostsContainer from './MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { FC } from 'react'

const Profile: FC<ProfileProps> = ({
    profileData,
    status,
    updateUserStatus,
    onChangeProfileData }) => (
    <div className='app-wrapper-content'>
        <ProfileInfo profileData={profileData}
            status={status}
            updateUserStatus={updateUserStatus}
            onChangeProfileData={onChangeProfileData} />
        <MyPostsContainer />
    </div>
)

export default Profile

type ProfileProps = {
    profileData: ProfileDataType | null,
    status: string,
    updateUserStatus: (status: string) => void,
    onChangeProfileData: (profile: ProfileDataType) => void
}