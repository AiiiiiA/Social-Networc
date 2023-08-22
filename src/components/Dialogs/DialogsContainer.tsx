import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getMessageData } from '../../Redux/messageSelectors';
import { AppStateType } from '../../types/types';
import { MessageDataType, actions } from '../../Redux/messageReducer';
import React, {FC} from 'react'

let mapStateToProps  = (state: AppStateType) => ({
    messagesData: getMessageData(state)
});

let {sendMessage, ...otherActions} = actions

const DialogsContainer: FC<MapStateProps & MapDispatchProps> = ({ messagesData, sendMessage}) => (
    <Dialogs messagesData= {messagesData} sendMessage={sendMessage}/>
)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage} ),
    withAuthRedirect
)(DialogsContainer);

type MapStateProps = {
    messagesData: Array<MessageDataType>
}

type MapDispatchProps = {
    sendMessage: (message: string) => void
}


/* const MyPostContainer: FC<MapStateProps & MapDispatchProps> = ({
    postsData,
    profileData,
    addPost
}) => (
    <MyPosts postsData={postsData} profileData={profileData} addPost={addPost} />
)

let mapStateToProps = (state: AppStateType): MapStateProps => ({
    postsData: getPostData(state),
    profileData: getProfileData(state)
})

let { addPost, ...othersActions } = actions

export default connect(mapStateToProps, { addPost })(MyPostContainer); */
