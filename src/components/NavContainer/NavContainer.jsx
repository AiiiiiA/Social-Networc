import Nav from './Nav/Nav';
import React from 'react';
import { connect } from 'react-redux';
import { getAuthId, getIsAuth } from '../../Redux/authSelectors';

const NavContainer = (props) => {

    return (
        <Nav id={props.id} isAuth={props.isAuth} />
    )
}

let mapStateToProps = (state) => ({
    id: getAuthId(state),
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {})(NavContainer);