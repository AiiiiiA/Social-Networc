import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getUsersData } from '../../Redux/usersSelectors';
import { getMessageData } from '../../Redux/messageSelectors';
import { AppStateType } from '../../types/types';
import { actions } from '../../Redux/messageReducer';

let mapStateToProps = (state: AppStateType) => ({
    userData: getUsersData(state),
    messagesData: getMessageData(state)
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions} ),
    withAuthRedirect
)(Dialogs);