import s from '../ProfileInfo.module.css'
import React, { useEffect, useState } from 'react';
import { FC } from 'react'

type Props = {
    status: string,
    updateUserStatus: (status: string) => void
}

type State = {
    editMode: boolean,
    status: string
}

const ProfileStatus: FC<Props> = ({ status, updateUserStatus }) => {

    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        if (status != status) {
            updateUserStatus(status)
        }
    }

    const onStatusChange = (e:any) => {
        setLocalStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ?
                <span className={s.status} onClick={activateEditMode} >
                    {status || '------'}
                </span>

                :
                <input
                    onChange={onStatusChange}
                    value={status}
                    autoFocus={true}
                    onBlur={deActivateEditMode}
                    placeholder='Введите ваш статус'
                />
            }
        </div>
    )
}

export default ProfileStatus;