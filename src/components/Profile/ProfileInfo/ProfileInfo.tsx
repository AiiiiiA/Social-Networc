import Preloader from '../../common/preloader/Preloader'
import s from './ProfileInfo.module.css'
import userImg from '../../../assets/images/userImage.png'
import { useState } from 'react'
import ChangeProfileReduxForm from './ChangeProfileReduxForm/ChangeProfileReduxForm'
import ProfileData from './ProfileData/ProfileData'
import { ProfileDataType } from '../../../types/types'
import { FC } from 'react'

type ProfileInfoProps = {
    profileData: ProfileDataType | null,
    status: string,
    updateUserStatus: (status: string) => void,
    onChangeProfileData: (profile: ProfileDataType) => void
}

const ProfileInfo: FC<ProfileInfoProps> = ({ profileData, status, updateUserStatus, onChangeProfileData }) => {

    let [editMode, setEditMode] = useState(false)

    const onChangeProfile = (formData: ProfileDataType) => {
        onChangeProfileData(formData)
        setEditMode(false)
    }

    if (!profileData) {
        return <Preloader />
    }

    return (
        <div className={s.profileWindow}>

            <img className={s.avatar} src={profileData.photos.large != null ? profileData.photos.large : userImg} />

            {editMode

                ? <div>
                    <ChangeProfileReduxForm profileData={profileData} onSubmit={onChangeProfile} />
                    <button onClick={() => { setEditMode(false) }} >Отмена</button>
                </div>

                : <ProfileData
                    profileData={profileData}
                    status={status}
                    updateUserStatus={updateUserStatus}
                    editMode={() => { setEditMode(true) }} />}
        </div>
    )
}

export default ProfileInfo  