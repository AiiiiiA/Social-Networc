import s from '../ProfileInfo.module.css'
import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        if (status != props.status) {
            props.updateUserStatus(status)
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ? <div>
                    <span onClick={activateEditMode} >
                        {props.status || '------'}
                    </span>
                </div>
                : <div>
                    <input
                        onChange={onStatusChange}
                        value={status}
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        placeholder='Введите ваш статус'
                    />
                </div>}
        </div>
    )
}

export default ProfileStatus;