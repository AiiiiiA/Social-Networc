import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { createField, Input } from '../../../common/FormsControls/FormControls';
import s from './SettingsProfileReduxForm.module.css'
import style from '../../common/FormsControls/FormControls.module.css'


const maxLegth30 = maxLengthCreator(30);

const SettingsProfileForm = ({ handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field
                    component={Input}
                    name='fullName'
                    placeholder='Изменить fullName'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='aboutMe'
                    placeholder='Изменить aboutMe'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div className={s.rememberMe}>
                <Field
                    type={'checkbox'}
                    name={"lookingForAJob"}
                    component={Input}
                />
                <p>В поиске работы</p>
            </div>
            <div>
                <Field
                    component={Input}
                    name='lookingForAJobDescription'
                    placeholder='Введите ваши предпочтения по работе'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='contacts.github'
                    placeholder='Введите github'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='contacts.vk'
                    placeholder='Введите vk'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='contacts.facebook'
                    placeholder='Введите facebook'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='contacts.instagram'
                    placeholder='Введите instagram'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='contacts.twitter'
                    placeholder='Введите twitter'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='contacts.website'
                    placeholder='Введите website'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='contacts.youtube'
                    placeholder='Введите youtube'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='contacts.mainLink'
                    placeholder='Введите mainLink'
                    validate={[required, maxLegth30]}
                />
            </div>


            {error &&
                <div className={style.formSummaryEror}>
                    {error}
                </div>
            }

            <div>
                <button>Изменить данные о себе</button>
            </div>
        </form>
    )
}

const SettingsProfileReduxForm = reduxForm({ form: 'settingsProfile' })(SettingsProfileForm);

export default SettingsProfileReduxForm;