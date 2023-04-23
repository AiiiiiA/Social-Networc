import s from './MyPosts.module.css'
import Post from './Post/Post';
import Preloader from '../../common/preloader/Preloader';
import PostReduxForm from './PostReduxForm/PostReduxForm';
import React from 'react';

const MyPosts = React.memo((props) => {

    if (!props.profileData) {
        return <Preloader />
    }

    let postsElement = props.postsData.map((p) =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount} profileData={props.profileData} />);

    const onSubmit = (formData) => {
        props.addPost(formData.post)
    }

    return (
        <div className={s.postSpace}>

            <div className={s.newPost}>
                <PostReduxForm onSubmit={onSubmit} />
            </div>
            
            <div className={s.postBox} >
                <h3> Мои записи </h3>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
})

export default MyPosts;