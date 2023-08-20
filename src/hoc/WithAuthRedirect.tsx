import React , {FC}from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { AppStateType } from "../types/types";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapStateProps);

type MapStateProps = {
    isAuth: boolean
}

export const withAuthRedirect = <CT,>(Component: React.ComponentType<CT>) => {

    const RedirectComponent: FC<MapStateProps> = (props) => {

        let { isAuth, ...restProps } = props

        if (!isAuth) return <Navigate to='/login' />;
        return <Component {...restProps as CT} />
    }

    let ConnectedAuthRedirectComponent = connect<MapStateProps, {}, CT, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
