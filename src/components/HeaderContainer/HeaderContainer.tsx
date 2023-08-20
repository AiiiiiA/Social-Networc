import Header from './Header/Header';
import { connect } from "react-redux";
import { setUserData, logout } from '../../Redux/authReducer';
import { FC } from 'react';
import { getIsAuth, getLogin } from '../../Redux/authSelectors';
import { AppStateType } from '../../types/types';

const HeaderContainer: FC<mapStateProps & MapDispatchProps> = ({ isAuth, login, logout }) => (
<Header isAuth={isAuth} login={login} logout={logout} />
)

let mapStateToProps = (state: AppStateType): mapStateProps => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
})

export default connect(mapStateToProps, { setUserData, logout })(HeaderContainer);

type mapStateProps = {
    isAuth: boolean,
    login: string | null
}

type MapDispatchProps = {
    logout: () => void
}