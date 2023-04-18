import s from './Friends.module.css';
import React from 'react';
import User from './User/User';
import Paginator from '../../common/Paginator/Paginator';

const Friends = (props) => {
    return (
        <div className='app-wrapper-content'>

            <div className={s.users}>

                <div className={s.usersTitle}>
                    <p>Пользователи</p>
                </div>

                <Paginator
                    totalItemsCount={props.totalItemsCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    setSelectedPage={props.setSelectedPage}
                    portionSize={props.portionSize}
                    currentPortion={props.currentPortion}
                />

                <div className={s.usersList}>

                    {props.usersData.map(u =>
                        <User
                            key={u.id}
                            user={u}
                            followingInProgress={props.followingInProgress}
                            unfollowing={props.unfollowing}
                            following={props.following}
                        />
                    )}
                </div>
            </div>
        </div >
    );
}

export default Friends;