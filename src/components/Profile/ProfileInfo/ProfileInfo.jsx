import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import userImg from '../../../assets/images/userImage.png';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';
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

                : <div>
                    <div>
                        <ProfileData
                            profileData={profileData}
                            status={status}
                            updateUserStatus={updateUserStatus}
                            editMode={() => { setEditMode(true) }} />
                    </div>
                </div>}
        </div>
    );

}

const ProfileData = ({ profileData, status, updateUserStatus, editMode }) => {
    return (
        <div className={s.prfInfo}>
            <button onClick={editMode}>Редактировать профиль</button>

            <h1 className={s.name}> {profileData.fullName} </h1>

            <ProfileStatus status={status}
                updateUserStatus={updateUserStatus} />

            <div>
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