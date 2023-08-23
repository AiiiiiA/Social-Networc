import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {

        let { isAuth, ...restProps } = props

        if (!isAuth) return <Navigate to='/login' />;
        return <Component {...restProps} />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect,)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
