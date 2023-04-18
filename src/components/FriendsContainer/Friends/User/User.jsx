import s from './User.module.css';
import React from 'react';
import userImg from '../../../../assets/images/userImage.png'
import { Link } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollowing, following }) => {

    return (

        <div className={s.userItem}>

            <div className={s.userAvatar}>

                <img src={user.photos.small != null ? user.photos.small : userImg} alt="" />

                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={s.blubtn} onClick={
                                () => {
                                    unfollowing(user.id)
                                }
                            }>
                            Отписаться
                        </button>

                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={s.blubtn} onClick={
                                () => {
                                    following(user.id)
                                }
                            }>
                            Подписаться
                        </button>}
                </div>
            </div>

            <Link className={s.userInfo} to={'/profile/' + user.id}>
                <div className={s.info}>
                    <div className={s.name}  >
                        <p>{user.name}</p>
                    </div>
                    <div className={s.status}>
                        <div>{user.status}</div>
                    </div>
                </div>
                <div className={s.location}>
                    <div>'user.country'</div>
                    <div>'user.citi'</div>
                </div>
            </Link>
        </div>
    )
}

export default User;