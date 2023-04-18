import s from './Dialogs.module.css';
import Message from './Message/Message';
import MessageReduxForm from './MessageReduxForm/MessageReduxForm'

const Dialogs = (props) => {

    const onSubmit = (formData) => {
        props.sendMessage(formData.message)
    }

    /*    let dialogsElement = props.userData.map((d) => <Dialog key={d.id} Name={d.name} id={d.id}  avatar={d.avatar}  />); */
    let messagesElements = props.messagesData.map((m) => <Message key={m.id} message={m.message} />);

    return (
        <div className='app-wrapper-content'>
            <div className={s.messageBox}>
                <div className={s.dialogs}>
                    {/*    {dialogsElement}  */}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <MessageReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );

}

export default Dialogs;