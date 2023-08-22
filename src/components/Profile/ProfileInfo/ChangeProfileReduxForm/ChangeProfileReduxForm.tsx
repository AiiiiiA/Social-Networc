import { reduxForm, Field, InjectedFormProps } from "redux-form"
import { required, maxLengthCreator } from '../../../../utils/validators/validators'
import { Input, Textarea } from '../../../common/FormsControls/FormControls'
import s from './ChangeProfileReduxForm.module.css'
import style from '../../../common/FormsControls//FormControls.module.css'
import { FC } from 'react'
import { ProfileDataType } from "../../../../types/types"

const maxLegth30 = maxLengthCreator(30);

const ChangeProfileForm: FC<InjectedFormProps<ProfileDataType, ChangeProfileFormOwnProps> & ChangeProfileFormOwnProps> = ({
    handleSubmit, error, profileData }) => {
    return (
        <form onSubmit={handleSubmit} >
            <div> Имя:
                <Field
                    component={Input}
                    name='fullName'
                    placeholder={profileData.fullName}
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                Данные о себе:
                <Field
                    component={Textarea}
                    name='aboutMe'
                    placeholder={profileData.aboutMe}
                    validate={[required, maxLegth30]}
                />
            </div>
            <div className={s.rememberMe}>
                <Field
                    type={'checkbox'}
                    name='lookingForAJob'
                    component={Input}
                />
                <p>В поиске работы</p>
            </div>
            <div>
                Ваши навыки:
                <Field
                    component={Textarea}
                    name='lookingForAJobDescription'
                    placeholder={profileData.lookingForAJobDescription}
                    validate={[maxLegth30]}
                />
            </div>

            <div className={s.contactsBox}>
                Контактные данные: {Object.keys(profileData.contacts).map(key => (
                    <p className={s.contacts}>
                        {key}:
                        <Field
                            component={Input}
                            name={`contacts.${key}`}
                            placeholder={key}
                            validate={[maxLegth30]}
                        />
                    </p>
                ))}
            </div>

            {error &&
                <div className={style.formSummaryEror}>
                    {error}
                </div>
            }

            <div>
                <button>Сохранить изменения</button>
            </div>

        </form>
    )
}

const ChangeProfileReduxForm = reduxForm<ProfileDataType, ChangeProfileFormOwnProps>({ form: 'changeProfile' })(ChangeProfileForm);

export default ChangeProfileReduxForm;

type ChangeProfileFormOwnProps = {
    profileData: ProfileDataType
}