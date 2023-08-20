import s from '../Dialogs.module.css';
import { FC } from 'react'

const Message: FC<MessageProps> = ({message}) => {
    return (
        <div className={s.message}>
            <p>{message}</p>
        </div>
    )
}

export default Message;

type MessageProps ={
    message: string
}