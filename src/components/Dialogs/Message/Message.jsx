import s from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <p>{props.message}</p>
        </div>
    )
}

export default Message;