import s from './Friends.module.css'
import React, { FC } from 'react'
import User from './User/User'
import Paginator from '../../common/Paginator/Paginator'
import { UsersDataType } from '../../../types/types'

type FriendsProps = {
    totalItemsCount: number,
    usersData: Array<UsersDataType>,
    pageSize: number,
    currentPage: number,
    followingInProgress: Array<number>,
    following: () => void,
    unfollowing: () => void,
    portionSize: number,
    currentPortion: number,
    setSelectedPage: () => void
}

const Friends: FC<FriendsProps> = ({
    totalItemsCount,
    pageSize,
    currentPage,
    followingInProgress,
    following,
    unfollowing,
    portionSize,
    currentPortion,
    setSelectedPage,
    usersData }) => {
    return (
        <div className='app-wrapper-content'>

            <div className={s.users}>

                <div className={s.usersTitle}>
                    <p>Пользователи</p>
                </div>

                <Paginator
                    totalItemsCount={totalItemsCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    setSelectedPage={setSelectedPage}
                    portionSize={portionSize}
                    currentPortion={currentPortion}
                />

                <div className={s.usersList}>

                    {usersData.map(u =>
                        <User
                            key={u.id}
                            user={u}
                            followingInProgress={followingInProgress}
                            unfollowing={unfollowing}
                            following={following}
                        />
                    )}
                </div>
            </div>
        </div >
    )
}

export default Friends 