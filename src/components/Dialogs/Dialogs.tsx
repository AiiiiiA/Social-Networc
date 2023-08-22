import { MessageDataType } from '../../Redux/messageReducer'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import MessageReduxForm from './MessageReduxForm/MessageReduxForm'
import { FC } from 'react'

const Dialogs: FC<DialogsProps & MessageDataType> = (messagesData, sendMessage) => {

    const addNewMessage = (formData: { message: string }) => {
        sendMessage(formData.message)
    }

    /*    let dialogsElement = props.userData.map((d) => <Dialog key={d.id} Name={d.name} id={d.id}  avatar={d.avatar}  />)   */
    let messagesElements = [messagesData].map((m) => <Message key={m.id} message={m.message} />)

    return (
        <div className='app-wrapper-content'>
            <div className={s.messageBox}>
                <div className={s.dialogs}>
                    {/*    {dialogsElement}  */}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <MessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )

}

export default Dialogs

type DialogsProps = {
    messagesData: Array<MessageDataType>,
    sendMessage: (message: string) => void
}