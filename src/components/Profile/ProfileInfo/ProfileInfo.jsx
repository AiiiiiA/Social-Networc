import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import userImg from '../../../assets/images/userImage.png';
import ProfileStatus from './ProfileStatus/ProfileStatus.tsx';
import { useState } from 'react';
import ChangeProfileReduxForm from './ChangeProfileReduxForm/ChangeProfileReduxForm';


const ProfileInfo = ({ profileData, status, updateUserStatus, onChangeProfileData }) => {

    let [editMode, setEditMode] = useState(false);

    const onChangeProfile = (formData) => {
        onChangeProfileData(formData);
        setEditMode(false);
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
    );

}

const ProfileData = ({ profileData, status, updateUserStatus, editMode }) => {
    return (
        <div className={s.prfInfo}>

            <div className={s.name}>
                {profileData.fullName}
                <svg className={s.changeProfile} onClick={editMode} width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
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

const Contact = ({ contactTitle, contactValue }) => {

    return (

        <div>
            {contactValue
                ? <div>
                    {contactTitle}: {contactValue}
                </div>
                : null}
        </div>
    )
}

export default ProfileInfo;