import ProfileStatus from "./ProfileStatus/ProfileStatus"
import Contact from "./Contact/Contact"
import { Contacts, ProfileDataType } from "../../../../types/types"
import { FC } from 'react'
import s from './ProfileData.module.css'
import { changeProfile } from "./svg"

type ProfileDataProps = {
    profileData: any,
    status: string,
    updateUserStatus: (status: string) => void,
    editMode: () => void
}

const ProfileData: FC<ProfileDataProps> = ({ profileData, status, updateUserStatus }) => {
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
                {Object.entries(Contact).map(contact => {
                    let [contactName, contactValueText] = contact
                    if (contactName) {
                        return (
                            <div key={contactName}>
                                <b>{contactName}</b>: {contactValueText}
                            </div>
                        )
                    }
                })}

            </div>

        </div>
    )
}

export default ProfileData

