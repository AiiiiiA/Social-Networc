import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { createField, Input } from '../../common/FormsControls/FormControls';
import s from './LoginReduxForm.module.css'
import style from '../../common/FormsControls/FormControls.module.css'

const maxLegth30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error, captchaURL, getNewCaptcha }) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field
                    component={Input}
                    name='email'
                    placeholder='Введите email'
                    validate={[required, maxLegth30]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name='password'
                    placeholder='Введите пароль'
                    validate={[required, maxLegth30]}
                    type={'password'}
                />
            </div>
            <div className={s.rememberMe}>
                <Field
                    type={'checkbox'}
                    name={"rememberMe"}
                    component={Input}
                />
                <p>запомнить меня</p>
            </div>

            {error &&
                <div className={style.formSummaryEror}>
                    {error}
                </div>
            }

            {captchaURL &&
                <div>
                    <img src={captchaURL} />
                    <Field
                        component={Input}
                        name='captcha'
                        placeholder='Введите текст с картинки'
                        validate={[required]}
                    />
                    <button onClick={getNewCaptcha}>Обновить картинку</button>
                </div>}

            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;