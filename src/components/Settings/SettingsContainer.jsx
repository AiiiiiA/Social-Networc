import { connect } from 'react-redux';
import { compose } from 'redux';
import { onChangeProfileData } from '../../Redux/userReducer';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

import Settings from './Settings';

const SettingsContainer = (props) => {

    return (
        <Settings
            uploadProfilePhoto={props.uploadProfilePhoto}
        />
    )
}

let mapStateToProps = (state) => ({
});

export default compose(
    connect(mapStateToProps, {
        onChangeProfileData
    }),
    withAuthRedirect
)(SettingsContainer)