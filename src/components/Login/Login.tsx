import LoginReduxForm from "./LoginReduxForm/LoginReduxForm"
import { connect } from "react-redux"
import { login, getCaptchaURL } from "../../Redux/authReducer"
import { Navigate } from "react-router-dom";
import { getIsAuth, getCaptcha } from "../../Redux/authSelectors";
import { AppStateType } from "../../types/types";
import { FC } from 'react';

const Login: FC<MapStateProps & MapDispatchProps> = ({ login, getCaptchaURL, captchaURL, isAuth }) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Navigate to='/' />
    }

    return (
        < div >
            <h1>ВХОД</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL} getNewCaptcha={getCaptchaURL} />
        </div >
    )
}
const mapStateToProps = (state: AppStateType): MapStateProps => ({
    isAuth: getIsAuth(state),
    captchaURL: getCaptcha(state)
})
export default connect(mapStateToProps, { login, getCaptchaURL })(Login);

type MapStateProps = {
    isAuth: boolean,
    captchaURL: string | null
}

type MapDispatchProps = {
    login: (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string
    ) => void,
    getCaptchaURL: () => void
}

type LoginFormValuesType = {
    email: string, password: string, rememberMe: boolean, captcha: string
}