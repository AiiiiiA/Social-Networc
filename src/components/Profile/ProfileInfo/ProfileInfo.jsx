import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import userImg from '../../../assets/images/userImage.png';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';

const ProfileInfo = (props) => {
    if (!props.profileData) {
        return <Preloader />
    }

    return (
        <div className={s.profileWindow}>

            <img className={s.avatar} src={props.profileData.photos.large != null ? props.profileData.photos.large : userImg} />

            <div className={s.prfInfo}>
                <h1 className={s.name}> {props.profileData.fullName} </h1>
                <ProfileStatus status={props.status}
                    updateUserStatus={props.updateUserStatus} />
                <p className={s.citi}>Таганрог</p>
            </div>
        </div>
    );

}

export default ProfileInfo;