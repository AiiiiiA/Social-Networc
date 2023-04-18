import userImg from '../../../../assets/images/userImage.png';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src={props.profileData.photos.small != null ? props.profileData.photos.small : userImg} />
            <p>{props.message}</p>
            <button>likes: {props.likesCount}</button>
        </div>
    );
}

export default Post;