import Nav from './Nav/Nav';
import React from 'react';
import { connect } from 'react-redux';
import { getAuthId, getIsAuth } from '../../Redux/authSelectors';

class NavContainer extends React.Component {
    render() {
        return (
            <Nav id={this.props.id} isAuth={this.props.isAuth} />
        )
    }
};

let mapStateToProps = (state) => ({
    id: getAuthId(state),
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {})(NavContainer);