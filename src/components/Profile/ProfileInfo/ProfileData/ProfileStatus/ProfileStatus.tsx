import s from './ProfileStatus.module.css'
import { useEffect, useState, FC } from 'react'

const ProfileStatus: FC<ProfileStatusProps> = ({ status, updateUserStatus }) => {

    let [editMode, setEditMode] = useState(false)
    let [localStatus, setLocalStatus] = useState(status)
    useEffect(() => { setLocalStatus(status) }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        if (status != status) {
            updateUserStatus(status)
        }
    }

    const onStatusChange = (e: any) => {
        setLocalStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ? <span className={s.status} onClick={activateEditMode} >
                    {status || '------'}
                </span>

                : <input
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

type ProfileStatusProps = {
    status: string,
    updateUserStatus: (status: string) => void
}