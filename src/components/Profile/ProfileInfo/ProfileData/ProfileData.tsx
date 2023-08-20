import ProfileStatus from "./ProfileStatus/ProfileStatus"
import Contact from "./Contact/Contact"
import { ProfileDataType } from "../../../../types/types"
import { FC } from 'react'
import s from './ProfileData.module.css'
import { changeProfile } from "./svg"

type ProfileDataProps = {
    profileData: ProfileDataType,
    status: string,
    updateUserStatus: (status: string) => void,
    editMode: () => void
}

const ProfileData: FC<ProfileDataProps> = ({ profileData, status, updateUserStatus, editMode }) => {
    return (
        <div className={s.prfInfo}>

            <div className={s.name}>
                {profileData.fullName}
                <div>
                    {changeProfile}
                </div>

            </div>

            <ProfileStatus status={status} updateUserStatus={updateUserStatus} />

            <div className={s.aboutMe}>
                Обо мне: {profileData.aboutMe}
            </div>

            <div>
                {profileData.lookingForAJob
                    ? 'В поиске работы: ' + profileData.lookingForAJobDescription
                    : 'Не в поиске работы'}
            </div>

            <div>
                {Object.keys(profileData.contacts).map(key => {
                    return <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={profileData.contacts[key]} />
                })}
            </div>

        </div>
    )
}

export default ProfileData

