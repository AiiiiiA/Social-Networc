import LoginReduxForm from "./LoginReduxForm/LoginReduxForm"
import { connect } from "react-redux"
import { login, getCaptchaURL } from "../../Redux/authReducer.ts"
import { Navigate } from "react-router-dom";
import { getIsAuth, getCaptcha } from "../../Redux/authSelectors";

const Login = (props) => {
    const onSubmit = (formData) => {
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
const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaURL: getCaptcha(state)
})
export default connect(mapStateToProps, { login, getCaptchaURL })(Login);