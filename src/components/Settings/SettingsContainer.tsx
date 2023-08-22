import { connect } from 'react-redux';
import { compose } from 'redux';
import { uploadProfilePhoto } from '../../Redux/profileReducer';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { FC } from 'react'
import Settings from './Settings';
import { AppStateType, PhotoType } from '../../types/types';

const SettingsContainer: FC<MapStateToProps & MapDispatchToProps> = ({ uploadProfilePhoto }) => {

    return (
        <Settings
            uploadProfilePhoto={uploadProfilePhoto}
        />
    )
}

type MapStateToProps = {}
type MapDispatchToProps = {
    uploadProfilePhoto: (photo: PhotoType) => void
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        uploadProfilePhoto
    }),
    withAuthRedirect
)(SettingsContainer)