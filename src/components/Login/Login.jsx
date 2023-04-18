import LoginReduxForm from "./LoginReduxForm/LoginReduxForm"
import { connect } from "react-redux"
import { login } from "../../Redux/authReducer"
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../../Redux/authSelectors";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to='/' />
    }
    return (
        < div >
            <h1>ВХОД</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div >
    )
}
const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})
export default connect(mapStateToProps, { login })(Login);