import s from './Settings.module.css'

const Settings = (props) => {

    const onMainPhotoSelected = (e) => {
        props.uploadProfilePhoto(e.target.files[0])
    }

    return (
        <div className={s.settingsProfile}>
            <div>Настройки профиля</div>
            <div>Загрузить аватар</div>

            <input type={'file'} onChange={onMainPhotoSelected} />

        </div>
    )
}
export default Settings;