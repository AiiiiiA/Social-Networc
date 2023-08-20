import MyPosts from './MyPosts';
import { actions } from '../../../Redux/profileReducer';
import { connect } from 'react-redux';
import { getProfileData } from '../../../Redux/profileSelectors';
import { getPostData } from '../../../Redux/profileSelectors';
import { AppStateType, PhotoType, PostDataType, ProfileDataType } from '../../../types/types';
import { FC } from 'react'

const MyPostContainer: FC<MapStateProps & MapDispatchProps> = ({
    postsData,
    profileData,
    addPost
}) => (
    <MyPosts postsData={postsData} profileData={profileData} addPost={addPost} />
)

let mapStateToProps = (state: AppStateType): MapStateProps => ({
    postsData: getPostData(state),
    profileData: getProfileData(state)
})

let { addPost, ...othersActions } = actions

export default connect(mapStateToProps, { addPost })(MyPostContainer);

type MapStateProps = {
    postsData: Array<PostDataType>,
    profileData: ProfileDataType | null
}

type MapDispatchProps = {
    addPost: (post: string) => void
}