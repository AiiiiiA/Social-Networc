import MyPosts from './MyPosts';
import { actions } from '../../../Redux/profileReducer';
import { connect } from 'react-redux';
import { getProfileData } from '../../../Redux/profileSelectors';
import { getPostData } from '../../../Redux/profileSelectors';
import { AppStateType, PostDataType, ProfileDataType } from '../../../types/types';

type MapStateProps = {
    postData: Array<PostDataType>,
    profileData: ProfileDataType
}

type MaoDispatchProps = {
    
}

let mapStateToProps = (state: AppStateType) => ({
    postsData: getPostData(state),
    profileData: getProfileData(state)
})

export default connect(mapStateToProps, { ...actions })(MyPosts);