import {sendMessage} from '../../Redux/messageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getUsersData } from '../../Redux/usersSelectors';
import { getMessageData } from '../../Redux/messageSelectors';

let mapStateToProps = (state) => ({
    userData: getUsersData(state),
    messagesData: getMessageData(state)
});


export default compose(
    connect(mapStateToProps, {sendMessage} ),
    withAuthRedirect
)(Dialogs);