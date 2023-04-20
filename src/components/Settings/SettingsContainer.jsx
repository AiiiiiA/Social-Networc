import { connect } from 'react-redux';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';
import { uploadProfilePhoto } from '../../Redux/userReducer';

import Settings from './Settings';

const SettingsContainer = (props) => {

    return (
        <Settings
        uploadProfilePhoto = {props.uploadProfilePhoto}
        />
    )
}

let mapStateToProps = (state) => ({
});

export default compose(
    connect(mapStateToProps, {
        uploadProfilePhoto
    }),
    withRouter
)(SettingsContainer)