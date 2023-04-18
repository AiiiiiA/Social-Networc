import MyPostsContainer from './MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
    <div className='app-wrapper-content'>
        <ProfileInfo profileData={props.profileData}
            status={props.status}
            updateUserStatus={props.updateUserStatus} />
        <MyPostsContainer />
    </div>
)

export default Profile;