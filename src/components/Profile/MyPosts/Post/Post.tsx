import userImg from '../../../../assets/images/userImage.png';
import { ProfileDataType } from '../../../../types/types';
import s from './Post.module.css'
import { FC } from 'react'

const Post: FC<PostProps> = ({ profileData, message, likesCount }) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src={profileData.photos.small != null ? profileData.photos.small : userImg} />
            <p>{message}</p>
            <button>likes: {likesCount}</button>
        </div>
    );
}

export default Post;

type PostProps = {
    profileData: ProfileDataType,
    message: string,
    likesCount: number
}