import MyPosts from './MyPosts';
import { addPost } from '../../../Redux/profileReducer';
import { connect } from 'react-redux';
import { getProfileData } from '../../../Redux/usersSelectors';
import { getPostData, getNewPostText } from '../../../Redux/profileSelectors';

let mapStateToProps = (state) => ({
    postsData: getPostData(state),
    newPostText: getNewPostText(state),
    profileData: getProfileData(state)
})

export default connect(mapStateToProps, { addPost })(MyPosts);