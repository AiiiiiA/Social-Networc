import { PhotoType } from '../../types/types'
import s from './Settings.module.css'
import { FC } from 'react'

const Settings: FC<SettingsProps> = ({ uploadProfilePhoto }) => {

    const onMainPhotoSelected = (e: any) => {
        uploadProfilePhoto(e.target.files[0])
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

type SettingsProps = {
    uploadProfilePhoto: (photo: PhotoType) => void
}