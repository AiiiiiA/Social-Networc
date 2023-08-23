import s from './MyPosts.module.css'
import Post from './Post/Post';
import Preloader from '../../common/preloader/Preloader';
import PostReduxForm, { PostFormValuesType } from './PostReduxForm/PostReduxForm';
import React, { FC } from 'react';
import { PostDataType, ProfileDataType } from '../../../types/types';

const MyPosts: FC<MyPostProps> = ({ postsData, profileData, addPost }) => {

    if (!profileData) {
        return <Preloader />
    }

    let postsElement = postsData.map((p) =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount} profileData={profileData} />)
    const addNewPost = (formData: PostFormValuesType) => {
        addPost(formData.post)
    }

    return (
        <div className={s.postSpace}>

            <PostReduxForm onSubmit={addNewPost} />

            <div className={s.postBox} >
                <h3> Мои записи </h3>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
}

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized;

type MyPostProps = {
    postsData: Array<PostDataType>,
    profileData: ProfileDataType | null,
    addPost: (post: string) => void
}