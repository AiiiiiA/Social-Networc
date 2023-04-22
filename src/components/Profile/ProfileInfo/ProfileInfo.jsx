import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import userImg from '../../../assets/images/userImage.png';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';
import { useState } from 'react';


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onChangeProfile = (formData) => {
        props.onChangeProfileData(
            formData.lookingForAJob,
            formData.lookingForAJobDescription,
            formData.fullName,
            formData.aboutMe,
            formData.contacts.github,
            formData.contacts.vk,
            formData.contacts.facebook,
            formData.contacts.instagram,
            formData.contacts.twitter,
            formData.contacts.website,
            formData.contacts.youtube,
            formData.contacts.mainLink
        )
    }

    if (!props.profileData) {
        return <Preloader />
    }
    return (
        <div className={s.profileWindow}>

            <img className={s.avatar} src={props.profileData.photos.large != null ? props.profileData.photos.large : userImg} />
            {editMode
                ? <SettingsProfileReduxForm onSubmit={onChangeProfile} />
                : <ProfileData
                    profileData={props.profileData}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                    editMode={setEditMode} />}

            <div>
                Contacts: {Object.keys(props.profileData.contacts).map(key => {
                    return <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={props.profileData.contacts[key]} />
                })}
            </div>


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
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {

    return (

        <div>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default ProfileInfo;