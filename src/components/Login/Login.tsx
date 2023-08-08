import LoginReduxForm from "./LoginReduxForm/LoginReduxForm"
import { connect } from "react-redux"
import { login, getCaptchaURL } from "../../Redux/authReducer"
import { Navigate } from "react-router-dom";
import { getIsAuth, getCaptcha } from "../../Redux/authSelectors";
import { AppStateType } from "../../types/types";
import { FC } from 'react';

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

const Login: FC<MapStateProps & MapDispatchProps > = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to='/' />
    }

    return (
        < div >
            <h1>ВХОД</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} getNewCaptcha={props.getCaptchaURL} />
        </div >
    )
}
const mapStateToProps = (state: AppStateType): MapStateProps => ({
    isAuth: getIsAuth(state),
    captchaURL: getCaptcha(state)
})
export default connect(mapStateToProps, { login, getCaptchaURL })(Login);