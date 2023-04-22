import { connect } from 'react-redux';
import { compose } from 'redux';
import { uploadProfilePhoto, onChangeProfileData } from '../../Redux/userReducer';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

import Settings from './Settings';

const SettingsContainer = (props) => {

    return (
        <Settings
            uploadProfilePhoto={props.uploadProfilePhoto}
            onChangeProfileData={props.onChangeProfileData}
        />
    )
}

let mapStateToProps = (state) => ({
});

export default compose(
    connect(mapStateToProps, {
        uploadProfilePhoto,
        onChangeProfileData
    }),
    withAuthRedirect
)(SettingsContainer)