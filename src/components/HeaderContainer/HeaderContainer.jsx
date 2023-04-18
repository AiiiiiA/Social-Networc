import Header from './Header/Header';
import { connect } from "react-redux";
import { setUserData } from '../../Redux/authReducer';
import React from 'react';
import { logout } from '../../Redux/authReducer';
import { getIsAuth, getLogin } from '../../Redux/authSelectors';

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
})

export default connect(mapStateToProps, { setUserData, logout })(HeaderContainer);